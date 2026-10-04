// =====================================================================
// PAKET-0076-BITIR — Berlin 1878 kazanımları için 15 (+1) Balkan yerleşimi
// TASLAK — MOTOR OKUMAZ. data/ dosyasına ELLE TAŞINMADAN önce:
//   ① `_taslak` alanını SİL (girdi.py BILINEN_ALANLAR'da yok, uyarı üretir)
//   ② `durum:"C"` (uygulanamaz) kayıtları TAŞIMA — eksik halka Değişmez 1 deliği açar
//   ③ taşıdıktan sonra `py arac/denetle.py` (Değişmez 1 · 2 · 2s · 2i)
// Rapor ve kaynak alıntıları: denetim/PAKET-0076-BITIR-berlin-noktalar.md
//
// DURUM SINIFLARI
//   A  her halka kaynaklı
//   B  her gün bir sahibe sahip, halkalar kaynaklı AMA biri yorum/komşu deseni
//      (kayıtta "⚠️" ile işaretli) — koordinatör hükmüyle taşınabilir
//   C  UYGULANAMAZ — en az bir zaman diliminde sahip YOK (eksik halka)
//
// ORTAK DESENLER (komşu kayıtlardan okundu, KAYNAK DEĞİL — biçim uyumu için):
//   · Fetret: s:suleyman-celebi 1402-07-28→1411-02-17 (künye penceresi) /
//     musa-celebi 1411-02-17→1413-07-05 — Bulgar/Trakya noktaları (Plevne,
//     Tırnova, Filibe, Eski Zağra) bölge düzeyinde böyle yazıyor; kasaba
//     düzeyinde ÖLÇÜLMEDİ. Bitiş 1413-07-05 = Çamurlu (TDV musa-celebi,
//     Niş kaydının kaynağı).
//     ⚠️ Komşular 1410-02-13/1410-06-15 ara geçişlerini de yazıyor; burada da
//     aynısı kopyalandı (Filibe deseni birebir).
//   · Sırbistan: s:sirbistan-prensligi 1878-07-13 → sirbistan-kralligi
//     1882-03-06 → yugoslavya 1918-12-01 (Şehirköy/Pirot deseni; 1882 ve 1918
//     günleri künye geçişi — toprak değişimi DEĞİL, aynı polity'nin kimlik
//     değişimi).
//   · Karadağ: s:karadag → yugoslavya 1918-11-26 (Podgorica deseni, künye ucu).
//   · Bulgaristan Prensliği: v:{kid:"bulgaristan-prensligi",statu:"vassal"}
//     1878-07-13→1908-10-05 (Tırnova deseni) → s:bulgaristan-kralligi.
//   · Doğu Rumeli: v:{kid:"sarki-rumeli",k:"Şarkî Rumeli vilâyeti"}
//     1878-07-13→1885-09-18 → s:bulgaristan-prensligi → 1908-10-05 →
//     bulgaristan-kralligi (Filibe/Eski Zağra deseni).
//   · Romanya: s:romanya 1878-07-13→1881-03-26 → romanya-kralligi (Babadağı/
//     Köstence deseni; 1881-03-26 künye geçişi).
//   · 1923-10-29 pencere ucudur, ölçüm değil (D210).
// Devlet kimliklerinin HEPSİ data/devletler.js `id:` alanında grep ile
// doğrulandı: sirbistan-nemanjic · sirp-despotlugu · bulgar-carligi · zeta ·
// venedik · karadag · yugoslavya · sirbistan-prensligi · sirbistan-kralligi ·
// bulgaristan-prensligi · bulgaristan-kralligi · sarki-rumeli · romanya ·
// romanya-kralligi · rusya · suleyman-celebi (harita: anahtarı, künye
// penceresi 1402-07-28→1411-02-17) · musa-celebi (harita: anahtarı).
// Koordinatlar: GeoNames arama sayfası (geonames.org/search.html), 3 ondalık.
// Takvim: TDV tarihleri OLDUĞU GİBİ (VERI-YAPISI.md TAKVİM); Batı kaynağı
// tarihleri çevrilmedi, kaynak alanında belirtildi.
// =====================================================================

window.PAKET_0076_BERLIN_TASLAK = [

// ---------------------------------------------------------------------
// SIRBİSTAN (Berlin md. 36 — Niş sancağının Toplica/Morava havzası)
// ---------------------------------------------------------------------

// 1. İVRANYE (Vranje) — durum B
{ ad:"İvranye (Vranje)", tur:"sehir", lat:42.551, lon:21.900, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"TDV ivranye (M. Kiel): '1207’de Nemanja’nın oğlu ve vârisi Stefan burayı kesin biçimde topraklarına kattı' · ⚠️ 1371 sonrası 'Uglješa Vladković, Vranje’nin merkez olduğu küçük bir prenslik kurdu', 1389 sonrası Lazareviç himayesi — prensliğin künyesi YOK, Sırp çerçevesinde gösterildi · bitiş 1402-01-01 künye ucu (sirbistan-nemanjic t)"},
     {f:"1402-01-01",t:"1413-01-01",d:"sirp-despotlugu",kaynak:"TDV ivranye: Lazareviç himayesi · başlangıç künye ucu (sirp-despotlugu f)"},
     {f:"1413-01-01",t:"1413-07-05",d:"musa-celebi",kesinlik:"ay",kaynak:"TDV ivranye: 'Ocak 1413’te Fetret dönemi sırasında Mûsâ Çelebi Vranje’yi ele geçirip' (AY) · bitiş Çamurlu 1413-07-05 (TDV musa-celebi)"},
     {f:"1413-07-05",t:"1428-01-01",d:"sirp-despotlugu",kaynak:"⚠️ Niş deseni (TDV nis: 1413'te Çelebi Mehmed Niş'i Lazareviç'e verdi) · TDV ivranye: 'Mayıs 1414’te Çelebi Sultan Mehmed’in bir elçisi … Vranje ve Sofya arasında kalan alanın … Stefan’a iadesini planladı' — Temmuz 1413–Mayıs 1414 arası sahiplik kaynakta AÇIK DEĞİL"},
     {f:"1444-11-01",t:"1455-06-01",d:"sirp-despotlugu",kesinlik:"ay",kaynak:"TDV ivranye: 'Varna Savaşı’ndan sonra Kasım 1444’te … 1428’de Brankoviç’ten alınan topraklar II. Murad tarafından kendisine iade edildi' (AY)"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV ivranye: 'Berlin Antlaşması ile birlikte resmen Sırp Krallığı’na bağlandı' · Berlin md. 36 (mjp.univ-perp.fr metni) · 1882-03-06 künye geçişi"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1428-01-01",t:"1444-11-01",kesinlik:"yil",kaynak:"TDV ivranye: 1428 Alacahisar'ın alınması sırasında 'Uglješa Vladković’in küçük prensliği Osmanlılar tarafından zaptedildi ve Köstendil sancağına bağlandı. Ancak Osmanlı kaynaklarında bu bilgiye rastlanmamaktadır' — YIL"},
     {f:"1455-06-01",t:"1878-07-13",kesinlik:"ay",kaynak:"TDV ivranye: 'Vranje’yi (İvranye) kesin biçimde Osmanlı topraklarına kattı (Haziran 1455)' · Ilıca-Köstendil sancağı · bitiş Berlin 13 Temmuz 1878 (TDV berlin-antlasmasi)"}],
  v:[],
  // isg YAZILMADI: TDV ivranye 'Doksanüç Harbi’nin başlamasıyla … Sırp ordusu tarafından işgal edildi' — GÜN/AY yok.
  // isg YAZILMADI: TDV ivranye 'I. Dünya Savaşı’nda İvranye sert bir Bulgar işgaliyle karşılaştı' — tarih yok.
  _taslak:{durum:"B", uyari:["1371-1402 Uglješa prensliği Sırp çerçevesinde","1413-07→1414-05 sahiplik belirsiz (Niş deseni)","1428 Osmanlı fethi Kiel'e göre Osmanlı kaynağında yok","yeni d: kırılmaları 1428-01-01 ✓kronoloji var · 1444-11-01 (Varna 1444-11-10 ✓) · 1455-06-01 ✓"]} },

// 2. LESKOFÇA (Leskovac) — durum B
{ ad:"Leskofça (Leskovac)", tur:"sehir", lat:42.998, lon:21.946, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"TDV leskofca (M. Kiel): 'Leskovac’a doğrudan yapıldığı bilinen ilk atıf, … Hilendar Manastırı’na mülk şeklinde bağışlandığı 1303-1304 yıllarına aittir' · ⚠️ 1281-1303 arası açık değil; TDV nis: 1183 sonrası 'Niş Sırp Devleti’ne dahil oldu' (bölge) · bitiş künye ucu"},
     {f:"1402-01-01",t:"1428-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV leskofca: 'Sırp Devleti’nin ordusu Niş, Urkup, Kurşunlu ve İvranye ile birlikte Leskofça’yı da ele geçirdi … 1878’de imzalanan Berlin Antlaşması bu durumu teyit eder' · Berlin md. 36 (Veternica/Morava havzası Sırbistan'a)"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1428-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: 'Dubočica ve yöresi, 831’de (1428) II. Murad tarafından … Kruševac (Alacahisar) … ile birlikte ele geçirildi' · ⚠️ AYNI MADDE: 'Dubočica ve Toplice bölgesi büyük ihtimalle … (1433) Osmanlı hâkimiyetine girdi' — İÇ ÇELİŞKİ, 1428 seçildi (kesin cümle) · 1444 Segedin'de 'Kruševac ve onunla beraber Dubočica, Osmanlı tarafında kaldı' · 1445 tahrir · 1451-56 Mara'ya miras (Osmanlı içi apanaj, d: sürdü)"}],
  v:[],
  // isg YAZILMADI: 1877-78 Sırp işgalinin günü kaynakta yok (Şehirköy/Pirot deseni: d: Berlin'e kadar).
  _taslak:{durum:"B", uyari:["1281-1303 Sırp sahipliği bölgeden (Niş) taşındı","1428/1433 iç çelişki (Kiel)","1689-90 Avusturya işgali (Niş/Pirot'ta var) burada YAZILMADI — Leskofça için kaynak yok"]} },

// 3. KURŞUNLU (Kuršumlija) — durum B
{ ad:"Kurşunlu (Kuršumlija)", tur:"sehir", lat:43.138, lon:21.273, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"⚠️ KASABA İÇİN KAYNAK BULUNAMADI — TDV nis: 1183 sonrası 'Niş Sırp Devleti’ne dahil oldu' (bölge → kasaba taşıması)"},
     {f:"1402-01-01",t:"1433-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV leskofca + TDV ivranye: 'Kurşunlu (Kuršumlija)' Sırp ordusunca alındı, Berlin teyit etti · Berlin md. 36 (Toplica havzası Sırbistan'a, 'laissant Prepolac à la Turquie')"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1433-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: 'Dubočica ve Toplice bölgesi büyük ihtimalle … (1433) içerisinde Osmanlı hâkimiyetine girdi' (Kurşunlu Toplica havzasında) · 'Alacahisar, Dubočica ve Toplice’ye ait Osmanlı tahrir parçası buraların … (Ağustos 1445), Ekim 1446 ve Mart 1447’de Osmanlılar’ın elinde olduğunu … gösterir' · ⚠️ 'büyük ihtimalle'"}],
  v:[],
  _taslak:{durum:"B", uyari:["1281 sahibi kaynaksız (bölge düzeyi)","1433 'büyük ihtimalle' + kronolojide 1433 maddesi YOK (Değişmez 2 için madde gerekir)"]} },

// 4. ÜRKÜP (Prokuplje) — durum B
{ ad:"Ürküp (Prokuplje)", tur:"sehir", lat:43.234, lon:21.588, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic",kaynak:"⚠️ KASABA İÇİN KAYNAK BULUNAMADI — TDV nis (bölge)"},
     {f:"1402-01-01",t:"1433-01-01",d:"sirp-despotlugu"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi",kaynak:"TDV ivranye: 'Ürküp’teki (Prokuplje) bütün müslüman halk' — Sırp işgali, Berlin · TDV leskofca 'Urkup' · Berlin md. 36"},
     {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1433-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV leskofca: Toplice 'büyük ihtimalle' 1433; 1445-47 tahrirde Osmanlı elinde (Kurşunlu ile aynı)"}],
  v:[],
  _taslak:{durum:"B", uyari:["Kurşunlu ile aynı"]} },

// ---------------------------------------------------------------------
// KARADAĞ (Berlin md. 28-29)
// ---------------------------------------------------------------------

// 5. NİKŞİÇ (Nikšić) — durum C (UYGULANAMAZ)
{ ad:"Nikşiç (Nikšić)", tur:"sehir", lat:42.773, lon:18.944, g:0, k:4, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kaynak:"TDV karadag: '1189 yılında Sırbistan hâkimiyetini sağlamlaştırdı' (Zeta) · Britannica 'Nikšić': 'the name Nikšić was used by the Montenegrins c. 1355' · bitiş 1356 = zeta künyesinin f'si (Leş deseni) ⚠️"},
     // ❌ EKSİK HALKA 1356-01-01 → 1455-01-01: Zeta (Balšić)? Hersek (Kosača, künye 1435-1482)? BULUNAMADI.
     {f:"1878-07-13",t:"1918-11-26",d:"karadag",kaynak:"EB1911 'Montenegro' (wikisource Page:EB1911 Vol 18/803): 'The Berlin Treaty (article xxviii.) gave to Montenegro Nikshitch, Spuzh, Podgoritza…' · Britannica 'Nikšić': 'held by the Turks from 1455 to 1877' (fiilî Karadağ ele geçirişi 1877 — GÜN yok, isg yazılmadı; Podgorica deseni)"},
     {f:"1918-11-26",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1455-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"Britannica 'Nikšić': 'The town was held by the Turks from 1455 to 1877' · TDV isa-bey: 1455'te Îsâ Bey'in hasları 'Zvečan, Jeleč, Sjenica, Ras, Nikšić …' · TDV sancak--sirbistan: Bosna sancağının ilk bölgeleri arasında 'Nikšić' (1464)"}],
  v:[],
  _taslak:{durum:"C", eksik:["1356-1455 sahibi bulunamadı — Değişmez 1 deliği"], uyari:["1455-01-01 kronolojide var (Kuzey Ege) ama bu olay değil — Nikšić maddesi gerekir"]} },

// 6. BAR (Antivari) — durum B
{ ad:"Bar (Antivari)", tur:"liman", lat:42.097, lon:19.136, g:0, k:4, m:"İşkodra",
  // koordinat: Stari Bar (Osmanlı kasabası; bugünkü Novi Bar 42.094/19.098 değil)
  s:[{f:"1281-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kaynak:"TDV karadag: '1189 yılında Sırbistan hâkimiyetini sağlamlaştırdı' · Britannica 'Bar': 'its archbishop acquired the title primate of Serbia' (XIV. yy) · bitiş zeta künye f ⚠️ (Leş deseni)"},
     {f:"1356-01-01",t:"1421-01-01",d:"zeta",kaynak:"TDV karadag: Zeta 'büyük oranda bağımsızlığını elde etti' · '1421’de Balšići ailesinin son idarecisi Zeta’yı miras olarak Sırp despotuna bıraktı' (YIL) · ⚠️ TDV arnavutluk: 1403 sonrası Venedik 'Ülgün, Bar (Antivari) ve Budua’yı da hâkimiyeti altına aldı' — Venedik ara dönemi süresi BULUNAMADI, yazılmadı"},
     {f:"1421-01-01",t:"1443-01-01",d:"sirp-despotlugu",kesinlik:"yil",kaynak:"TDV karadag (1421 miras) · Britannica 'Bar': 'ruled from Venice (1443–1571)' — YIL"},
     {f:"1443-01-01",t:"1571-01-01",d:"venedik",kesinlik:"yil",kaynak:"Britannica 'Bar': 'It was ruled from Venice (1443–1571) and then by the Ottoman Turks (1571–1878)'"},
     {f:"1878-07-13",t:"1918-11-26",d:"karadag",kaynak:"Berlin md. 29 (mjp.univ-perp.fr): 'Antivari et son littoral sont annexés au Monténégro' · EB1911: article xxviii … 'Antivari'"},
     {f:"1918-11-26",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1571-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV arnavutluk: 'tam hâkimiyet ise 1571’de Bar (Antivari) ve Ülgün’ün alınmasıyla kurulmuştur' · Britannica 'Bar' (1571–1878)"}],
  v:[],
  isg:[{f:"1878-01-01",t:"1878-07-13",d:"karadag",kesinlik:"yil",kaynak:"Britannica 'Bar': 'Partly ruined in 1878 when the Montenegrins wrested it from the Turks' — YIL, gün yok · TDV karadag: 'Savaşın sonlarına doğru Nikšić, Podgorica, Bar’ı aldı' · ⚠️ İSTEĞE BAĞLI: Podgorica bu işgali yazmıyor"}],
  _taslak:{durum:"B", uyari:["1403 sonrası Venedik ara dönemi yazılmadı","1421 kronoloji maddesi YOK (s→s, 2s evreni)","isg isteğe bağlı"]} },

// 7. ÜLGÜN (Ulcinj) — durum C (UYGULANAMAZ)
{ ad:"Ülgün (Ulcinj)", tur:"liman", lat:41.929, lon:19.224, g:0, k:4, m:"İşkodra",
  s:[{f:"1281-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kaynak:"TDV karadag (Zeta 1189 Sırp) · bitiş zeta künye f ⚠️"},
     {f:"1356-01-01",t:"????",d:"zeta",kaynak:"TDV karadag"},
     // ❌ EKSİK HALKA: Zeta → Venedik geçişi. TDV arnavutluk: 1403 sonrası Venedik 'Ülgün (Ölgün/Dulcigno)'
     //    aldı; TDV murad-ii: 1421'den itibaren Lazareviç 'Dulcigno (Ölgün) gibi limanları zaptetmiş olan
     //    Venedik’e karşı' savaşta. Venedik'in Ülgün'ü aldığı YIL BULUNAMADI.
     {f:"????",t:"1571-01-01",d:"venedik",kaynak:"TDV arnavutluk · TDV murad-ii (1421'de Venedik elinde)"},
     {f:"1880-11-25",t:"1918-11-26",d:"karadag",kaynak:"EB1911 'Montenegro': Berlin 'restored Dulcigno to Turkey' · 'On the 11th of November the Porte yielded; on the 22nd the Turkish troops defeated the Albanians, and on the 25th Montenegro obtained possession of Dulcigno' (1880; Batı kaynağı, takvim çevrilmedi) · Berlin md. 29: '… y compris Dulcinjo, seront restituées à la Turquie'"},
     {f:"1918-11-26",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1571-01-01",t:"1880-11-25",kesinlik:{f:"yil",t:"gun"},kaynak:"TDV arnavutluk: '1571’de Bar (Antivari) ve Ülgün’ün alınmasıyla' · bitiş EB1911 25 Kasım 1880"}],
  v:[],
  // isg YAZILMADI: TDV karadag 'Ülgün’ü (Dulcigno) ele geçirdi' (1877-78) — gün yok; Berlin'le iade.
  _taslak:{durum:"C", eksik:["Zeta→Venedik geçiş yılı (1403-1421 arası) bulunamadı — '????' yer tutucu, nokta bu hâliyle motoru kırar"], uyari:["1880-11-25 d: kırılması için kronoloji maddesi YOK — Değişmez 2 ihlali olur, madde yazılmalı"]} },

// 8. KOLAŞİN (Kolašin) — durum C (UYGULANAMAZ)
{ ad:"Kolaşin (Kolašin)", tur:"kale", lat:42.822, lon:19.517, g:0, k:4, m:"Saraybosna",
  // kur: ❌ BULUNAMADI — TDV mehmed-pasa-sultanzade: 'Hersek sancağında Prepol kazasında Kolašin’de
  //      (Kolaşın) bir kale inşasını başlattığı bildirilir' — YIL YOK (paşa 1646'da öldü ⇒ en geç 1646,
  //      ama "en geç" bir kuruluş yılı değildir, yazılmadı).
  s:[{f:"1878-07-13",t:"1918-11-26",d:"karadag",kaynak:"⚠️ Berlin md. 28 Kolašin'i ADIYLA ANMAZ: hat 'remonte la Tara jusqu'à Mojkovac d'où elle suit la crête du contrefort jusqu'à Siskojezero' — nokta bu hattın Karadağ tarafında (GEOMETRİ ÇIKARIMI). Teslim günü 4 Ekim 1878 yalnız Vikipedi'de — KULLANILMADI"},
     {f:"1918-11-26",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"????",t:"1878-07-13",kaynak:"TDV mehmed-pasa-sultanzade (kale inşası, yıl yok)"}],
  v:[],
  _taslak:{durum:"C", eksik:["kur yılı bulunamadı","Berlin devri yalnız geometri çıkarımı","Ayrıca: TDV sancak--sirbistan'daki 'Kolašin' kazası 1878 SONRASI Yenipazar sancağında Osmanlı'da kalan AYRI bir birim (İbar Kolaşini) — karıştırılmamalı"]} },

// ---------------------------------------------------------------------
// DOBRUCA → ROMANYA (Berlin md. 46)
// ---------------------------------------------------------------------

// 9. TULÇA (Tulcea) — durum C (UYGULANAMAZ: 1281-1419 sahibi yok)
{ ad:"Tulça (Tulcea)", tur:"liman", lat:45.179, lon:28.805, g:0, k:3, m:"Silistre",
  // ❌ EKSİK HALKA 1281 → 1419: TDV tulca '681’den sonra XIV. yüzyıla kadarki karışık dönemde sırasıyla
  //    Bulgarlar, Bizanslılar, Cenevizliler ve Eflaklar burada egemenlik kurdu' — TARİHSİZ sıra.
  //    TDV dobruca: Dobrotiç 1359 Kuzey Dobruca (Dobruca Despotluğu künyesi YOK) · Mircea 1388 (GB kısmı,
  //    kısa) · 1394 Bayezid · Ankara sonrası Mircea tekrar · 1416 yenildi · 1419.
  //    ⚠️ Komşular (Babadağı, Köstence, İshakçı) 'bulgaristan →1393-09-01, d, fetret, d 1413-07-05'
  //    yazıyor — KAYNAKSIZ ve TDV dobruca/tulca ile ÇELİŞİYOR (Mircea dönemi yok, 1419 yok).
  s:[{f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"TDV tulca: '1878 Berlin Kongresi kararları uyarınca Kuzey Dobruca kesiminin Romanya’ya verilmesi üzerine Tulça Osmanlı idaresinden çıktı' · Berlin md. 46: 'le sandjak de Toultcha comprenant les districts (Cazas) de … Toultcha …'"},
     {f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[{f:"1419-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV tulca: '1419’da Dobruca Osmanlı toprakları içine alındı' · TDV dobruca: Çelebi Mehmed … (1419)"}],
  v:[],
  _taslak:{durum:"C", eksik:["1281-1419 sahibi (Dobruca Despotluğu/Eflak/Bulgar — künye ve tarih yok)"], uyari:["komşu desenle çelişki — koordinatör hükmü"]} },

// 10. HIRSOVA (Hârșova) — durum C
{ ad:"Hırsova (Hârșova)", tur:"liman", lat:44.686, lon:27.950, g:0, k:4, m:"Silistre",
  // ❌ EKSİK HALKA 1281 → 1419 (Tulça ile aynı). TDV'de 'Hırsova' maddesi YOK (arama: başlık 0, içerik 16).
  s:[{f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"Berlin md. 46: districts (Cazas) de … 'Hirsovo' … sont réunis à la Roumanie"},
     {f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[{f:"1419-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV tulca/dobruca: 1419 Dobruca (BÖLGE → kasaba ⚠️) · TDV tulca: XVI. yy'da 'Silistre sancağının Hırsova kazası'"}],
  v:[],
  // isg? TDV zistovi-antlasmasi 1790 'eski Hırsova' = ORSOVA (Tuna, Banat) — BU HIRSOVA DEĞİL (atlas zaten 'Orsova' kaydında kullanmış).
  _taslak:{durum:"C", eksik:["1281-1419 sahibi"], uyari:["1419 bölge tarihi kasabaya taşındı","Hırsova/Eski Orsova ad karışıklığı"]} },

// 11. MANGALYA (Mangalia) — durum C
{ ad:"Mangalya (Mangalia)", tur:"liman", lat:43.816, lon:28.577, g:0, k:4, m:"Silistre",
  // ❌ EKSİK HALKA 1281 → 1419 (Tulça ile aynı). TDV maddesi YOK; TDV dobruca: 'Mangalya’da 1590’da inşa
  //    edilen İsmihan Sultan Camii' (Britannica '15th-century Turkish mosque' der — ÇELİŞKİ, sahipliği etkilemez).
  s:[{f:"1878-07-13",t:"1881-03-26",d:"romanya",kaynak:"Berlin md. 2: '… se dirige vers la Mer Noire au sud de Mangalia qui est rattaché au territoire roumain' · md. 46"},
     {f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[{f:"1419-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV tulca/dobruca 1419 (BÖLGE → kasaba ⚠️)"}],
  v:[],
  _taslak:{durum:"C", eksik:["1281-1419 sahibi"]} },

// ---------------------------------------------------------------------
// BULGARİSTAN PRENSLİĞİ (Berlin md. 2)
// ---------------------------------------------------------------------

// 12. LOFÇA (Loveč) — durum B
{ ad:"Lofça (Loveč)", tur:"sehir", lat:43.132, lon:24.718, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1393-01-01",d:"bulgar-carligi",kaynak:"TDV lofca (M. Kiel): 1187 'ikinci Bulgar Çarlığı’nın başlangıcı anlamına gelen Loveč/Lofça barışı' · 'Çar İvan Şişman’ın kalelerinin listesi'"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Plevne/Tırnova/Niğbolu) — kasaba düzeyinde ölçülmedi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 'Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân ettikten sonra'"}],
  d:[{f:"1393-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV lofca: 'Şişman’ın bütün eyaletleriyle birlikte bu kalenin Yıldırım Bayezid’in orduları tarafından 795’te (1393) fethedildiği sanılmaktadır' ⚠️ 'sanılmaktadır' · Bulgar tarihçiliğinin 1474'ü Bosna'daki Loveč'tir (Kiel)"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2 (Tuna–Balkan arası prenslik) · TDV lofca: '1880’deki ilk Bulgar resmî nüfus sayımına göre'"}],
  isg:[{f:"1877-08-23",t:"1878-07-13",d:"rusya",kaynak:"TDV lofca: 'Türk-Rus savaşı sırasında Lofça 5 Haziran 1877’de Ruslar tarafından işgal edildi. Rifat Paşa kumandasındaki Osmanlılar’ın 15 Haziran’da Ruslar’ı geri püskürtmesine rağmen şehir 23 Ağustos’ta terkedildi' · TDV günü olduğu gibi (takvimi belirtilmemiş)"}],
  // ⚠️ İLK İŞGAL (5→15 Haziran 1877) YAZILMADI: Rus ordusunun Tuna'yı Ziştovi'de geçişi Haziran 1877
  //    sonlarıdır; 'Haziran' bir ay kayması (Temmuz?) olabilir — kaynak kendi içinde şüpheli, ikinci
  //    kaynak bulunamadı.
  _taslak:{durum:"B", uyari:["1393 'sanılmaktadır'","fetret bölge deseni","isg başı 1877-08-23 için kronoloji maddesi YOK (Değişmez 2i)","ilk Rus işgali (Haziran 1877) şüpheli, yazılmadı"]} },

// ---------------------------------------------------------------------
// DOĞU RUMELİ (Berlin md. 13-14) → 1885 Bulgaristan
// ---------------------------------------------------------------------

// 13. İSLİMYE (Sliven) — durum B
{ ad:"İslimye (Sliven)", tur:"sehir", lat:42.686, lon:26.326, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1370-01-01",d:"bulgar-carligi",kaynak:"⚠️ TDV islimye: 'XIV. yüzyılda Bizans-Bulgar sınırında yer alan bu küçük yerleşim' — 1281'de HANGİ TARAFTA olduğu kaynakta yok; komşu Eski Zağra/Elhova deseni (Bulgar)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Filibe/Eski Zağra)"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV bulgaristan: 'Prenslik 1885’te Doğu Rumeli vilâyetini de topraklarına kattı' — YIL; gün 1885-09-18 KÜNYEDEN devralındı (sarki-rumeli t:, künyenin kaynağı 'standart akademik kaynak') — D210 bildirimi · komşu Filibe/Eski Zağra ile aynı gün"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 5 Ekim 1908"}],
  d:[{f:"1370-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV islimye: 'Osmanlı hâkimiyetine geçişi 1370’te veya bundan kısa bir süre sonra gerçekleşmiştir. Burası muhtemelen … uç beyleri tarafından alınmıştı. Ancak bu konuda ilk Osmanlı kaynaklarında herhangi bir bilgi yoktur'"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: 'Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy sancaklarından müteşekkil Doğu Rumeli vilâyeti oluşturuldu'"}],
  // isg YAZILMADI: 1877-78 Rus işgali — TDV islimye yalnız 'savaş sırasında camilerin çoğunu yıktılar' der, tarih yok.
  _taslak:{durum:"B", uyari:["1281 sahibi Bizans/Bulgar belirsiz","1370-01-01 d: kırılması için kronoloji maddesi YOK — Değişmez 2'yi kırar, madde yazılmalı"]} },

// 14. BURGAZ (Burgas) — durum C (UYGULANAMAZ)
{ ad:"Burgaz (Burgas)", tur:"liman", lat:42.507, lon:27.469, g:0, k:3, m:"Edirne",
  // kur: ❌ BULUNAMADI — Britannica 'Burgas': 'Founded in the 17th century as a fishing village on the site
  //      of medieval Pyrgos' (YIL YOK) · ÇELİŞKİ: TDV bulgaristan 'Kocacık yörükleri 1543-1584 yılları
  //      arasında … Ahyolu, Karinâbâd, Şumnu, Burgaz, Kızılağaç, Yanbolu …’de yerleşmişti' (XVI. yy'da var).
  //      TDV'de 'Burgaz' maddesi YOK (slug 302; arama başlık 0).
  // ❌ Osmanlı öncesi (Pyrgos) sahibi ve Osmanlı fethi BULUNAMADI. Komşu Ahtapolu 'Misivri’ye kadar' 1403-1424
  //    Bizans yazıyor (TDV fetret-devri) — Burgaz Misivri'nin GÜNEYİNDE, ama kasaba düzeyinde ölçülmedi.
  s:[{f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV bulgaristan 1885 (YIL) · gün künyeden (İslimye ile aynı bildirim)"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"????",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV bulgaristan: Doğu Rumeli = '… Burgaz ve Hasköy sancakları' · Berlin md. 22: 'les ports de la Mer Noire, Varna et Bourgas' (Rus işgal depoları)"}],
  _taslak:{durum:"C", eksik:["kur yılı","Osmanlı öncesi sahip","Osmanlı fethi"]} },

// 15. HASKÖY (Haskovo) — durum C (UYGULANAMAZ)
{ ad:"Hasköy (Haskovo)", tur:"sehir", lat:41.934, lon:25.556, g:0, k:3, m:"Edirne",
  // kur: ❌ BULUNAMADI — TDV haskoy--bulgaristan: 'Hasköy’ün kuruluş tarihi ve Osmanlılar’dan önce burada
  //      bir iskân yerinin bulunup bulunmadığı hakkında bilgi yoktur … 1361’de Edirne’nin Osmanlı idaresine
  //      girmesinden sonraki yıllarda bir köy olarak ortaya çıktığı tahmin edilmektedir' · ilk kesin kayıt
  //      'Fâtih Sultan Mehmed dönemine ait tahrir' (BA MAD 35) — YIL YOK. 'kur:1361' YAZILMADI (tahmin + 'sonraki yıllarda').
  s:[{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni — köyün o tarihte var olduğu BİLE belirsiz"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1885-09-18",t:"1908-10-05",d:"bulgaristan-prensligi",kaynak:"TDV haskoy--bulgaristan: '1885’te Bulgaristan Prensliği, Doğu Rumeli vilâyeti topraklarını sınırlarına katınca Hasköy de bu prensliğe dahil edildi' — YIL; gün künyeden"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"????",t:"1402-07-28",kaynak:"kuruluş bulunamadı"},
     {f:"1413-07-05",t:"1878-07-13",kaynak:"TDV haskoy--bulgaristan: Rumeli eyaletinin Çirmen sancağına bağlı kaza merkezi"}],
  v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti",statu:"vassal",kid:"sarki-rumeli",kaynak:"TDV haskoy--bulgaristan: 'Berlin antlaşması ile … Doğu Rumeli vilâyeti kurulunca Hasköy Doğu Rumeli vilâyetinin sınırları içinde kaldı. 1880’de … bu vilâyetin sancaklarından birini teşkil etti'"}],
  _taslak:{durum:"C", eksik:["kur yılı (1361 sonrası tahmin, yıl yok)"]} },

// ---------------------------------------------------------------------
// EK (16) — ZİŞTOVİ: görev 'zaten var' diyordu; ÖLÇÜLDÜ, YOK (93 dosyada yerleşim kaydı 0,
// 25 km içinde nokta 0; 'Ziştovi' yalnız antlaşma adı olarak geçiyor).
// ---------------------------------------------------------------------

// 16. ZİŞTOVİ (Svishtov) — durum B
{ ad:"Ziştovi (Svishtov)", tur:"liman", lat:43.619, lon:25.350, g:0, k:4, m:"Sofya",
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgar-carligi",kaynak:"TDV zistova (M. Kiel): 1385 'Zvista kasabası' · Britannica 'Svishtov': birinci-ikinci Bulgar devletleri dönemi · ⚠️ 1281 sahibi açık cümleyle yok (Tırnova çarlığının Tuna kıyısı)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1388-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV zistova: 'Neşrî’nin naklettiğine göre Vezîriâzam Çandarlı Ali Paşa’nın 1388’deki kış seferi esnasında Ziştovi Kalesi birkaç günlük direnişin ardından teslim oldu' · kronolojide 1388-01-01 Çandarlı maddesi VAR"},
     {f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2"}],
  // isg YAZILMADI: Britannica 'damaged several times and sacked by the Russians in 1878' — işgal başı (Rus Tuna geçişi 1877) günü kaynakta yok.
  _taslak:{durum:"B", uyari:["görev listesinde YOKTU — 'zaten var' ölçümü yanlış çıktı; isteğe bağlı ek"]} },

// =====================================================================
// EK PARTİ (koordinatör mesajı, aynı gün) — 7 yer
// Ad + 3 km taraması: 7'sinin de 3 km içinde noktası YOK (en yakın: Alasonya→Yenişehir 30 km,
// Kalabaka→Tırhala 20 km, Kardiçe→Tırhala 25 km, Balçık→Varna 29 km, Dobriç→Varna 40 km;
// Golos ve Tutrakan 40 km içinde nokta yok). Ad grep'i (Golos|Volos|Alasonya|Elasson|Kalabaka|
// Kardiçe|Karditsa|Balçık|Balchik|Dobriç|Hacıoğlu|Pazarcığı|Tutrakan|Turtukay): 0 kayıt.
// Ek kimlikler devletler.js'te doğrulandı: yunanistan · bizans · eflak · bulgaristan-kralligi ·
// romanya-kralligi.
// 1881 Tesalya devri: komşular (Yenişehir, Tırhala, Arta) ve kronoloji (olaylar_ek.js
// 'Teselya'nın Yunanistan'a bırakılması', gun:"1881") 1881-07-02 kullanıyor — GÜN KAYNAKSIZ.
// TDV tesalya YIL verir; TDV narda Arta için '6 Temmuz 1881’de fiilen terkedip' der.
// ⇒ 1881-07-02 burada yalnız Değişmez 2 senkronu için kopyalandı, ⚠️ işaretli.
// Güney Dobruca 1913 devri: koordinatör talimatıyla 1913-08-10 — TDV balkan-savasi:
// 'Balkan Savaşı 10 Ağustos 1913’te … imzalanan Bükreş Antlaşması ile sona erdi'.
// =====================================================================

// 17. GOLOS (Volos) — durum C (UYGULANAMAZ)
{ ad:"Golos (Volos)", tur:"liman", lat:39.369, lon:22.948, g:0, k:4, m:"Yanya",
  // ❌ EKSİK: Osmanlı öncesi sahip ve Osmanlı fethi BULUNAMADI. TDV'de 'Golos/Volos' maddesi YOK.
  //    TDV velestin: '859 (1455) yılından kalma en eski tahrir kayıtları Volos kesimini göstermez' ·
  //    '1540’ta İnebahtı sancağının kurulması sonucu Golos … Tırhala’dan ayrılıp bu yeni sancağa bağlanmıştı'
  //    (1540'ta Osmanlı idarî birimi — fethin üst sınırı, fethin kendisi DEĞİL).
  // ⚠️ 1897: TDV velestin '8 Mayıs’ta Volos Limanı’na girildi' (Osmanlı ordusu) — komşular 1897-98 Osmanlı
  //    işgalini yazmıyor; burada da YAZILMADI, desen kararı koordinatörün.
  s:[{f:"1881-07-02",t:"1923-10-29",d:"yunanistan",kaynak:"TDV tesalya: '1881’de … Osmanlılar, Tesalya’yı Yunan Krallığı’na terketti' (YIL; Golos Limanı TDV tesalya'da Tesalya şehirleri arasında) · ⚠️ gün 1881-07-02 komşu/kronoloji senkronu, KAYNAKSIZ"}],
  d:[{f:"????",t:"1881-07-02",kaynak:"TDV narda: 1830 sınırı 'Golos körfezinden Narda körfezi arasında çizildi' — Golos 1830-1881 Osmanlı'da"}],
  v:[],
  _taslak:{durum:"C", eksik:["Osmanlı öncesi sahip","Osmanlı fethi yılı"]} },

// 18. ALASONYA (Elassona) — durum C (1356-1389 belirsiz) — Osmanlı kısmı TAM
{ ad:"Alasonya (Elassona)", tur:"sehir", lat:39.895, lon:22.189, g:0, k:4, m:"Yanya",
  s:[{f:"1281-01-01",t:"1348-01-01",d:"bizans",kesinlik:"yil",kaynak:"TDV tesalya: 1259 'Ioannes Palaiologos, Tesalya’nın doğu yarısını alıp Nicea (İznik) İmparatorluğu’na kattı. Bununla birlikte Tesalya büyük oranda otonomiye sahipti' · ⚠️ 1320'ler Katalan tahribatı (doğu ova) sahiplik değil"},
     {f:"1348-01-01",t:"1356-01-01",d:"sirbistan-nemanjic",kesinlik:"yil",kaynak:"TDV tesalya: 'Angelos 1348’deki veba salgınında öldü; Sırp Çarı Stefan Duşan bunun üzerine Tesalya’yı ele geçirdi' · '1355’te âni ölümünden sonra 1356 ilkbaharında iç karışıklık'"},
     // ❌ EKSİK HALKA 1356 → 1389: Duşan sonrası Doğu Tesalya sahibi (Simeon Uroš? Bizans'a tâbi yerel hanedan?) BULUNAMADI.
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Yenişehir/Tırhala) · TDV tirhala: '1402’de Ankara Savaşı’ndan sonra Tesalya’nın bazı bölümleri kısa bir süre için de olsa elden çıktı' (hangi bölüm — yok)"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1913-11-14",t:"1923-10-29",d:"yunanistan",kaynak:"TDV balkan-savasi: 'Osmanlı-Yunan Antlaşması 14 Kasım 1913’te Atina’da imzalandı' (Selanik/Yanya deseni)"}],
  d:[{f:"1389-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV alasonya (M. Kiel): 'Alasonya, bütün Doğu Tesalya ile birlikte Gazi Evrenos tarafından 790-791’de (1388-1389) alınmış olmalıdır' ⚠️ 'olmalıdır' · 1466 icmal defterinde Alasonya zeâmeti"},
     {f:"1413-07-05",t:"1913-11-14",kaynak:"TDV alasonya: '1881’de Tesalya Yunanistan’a bırakıldığında Alasonya güçlü bir garnizon ve yeni bir gümrük idaresiyle Osmanlılar’ın sınır karakolu haline geldi' — 1881'de Osmanlı'da KALDI"}],
  v:[],
  // isg YAZILMADI: TDV alasonya 'Balkan Savaşı sırasında Alasonya, Yunan ordusu tarafından ele geçirilen ilk Osmanlı
  //   şehri oldu' — GÜN YOK. Savaş başı 8 Ekim 1912 (TDV balkan-savasi); Selanik deseni isg:yunanistan → 1913-11-14.
  //   Gün bulunursa: isg:[{f:"1912-10-??",t:"1913-11-14",d:"yunanistan"}].
  _taslak:{durum:"C", eksik:["1356-1389 sahibi"], uyari:["1389 'olmalıdır'","1912 işgal günü yok","1897-98 Osmanlı işgali bu nokta için anlamsız (zaten Osmanlı)"]} },

// 19. KALABAKA (Kalambaka / Stagoi) — durum C (UYGULANAMAZ)
{ ad:"Kalabaka (Kalambaka)", tur:"sehir", lat:39.704, lon:21.627, g:0, k:4, m:"Yanya",
  // TDV'de madde YOK (slug 302; arama başlık 0, içerik 0).
  // ❌ EKSİK HALKA 1281 → 1349: TDV tirhala Batı Tesalya için 'yarı bağımsız Bizans despotlukları, Katalanlar,
  //    Epir’deki Franklar ve Bizans İmparatorluğu arasında sık sık el değiştirdi' — TARİHSİZ.
  s:[{f:"1349-01-01",t:"1394-01-01",d:"sirbistan-nemanjic",kesinlik:"yil",kaynak:"TDV tirhala: '1349’da bütün kaleleriyle birlikte Batı Tesalya, Sırp Çarı Stefan Duşan tarafından ilhak edildi' · '1359-1393 yıllarında burası Batı Tesalya’daki küçük Sırp beyliğinin ikametgâhı idi' (Tırhala → bölge → Kalabaka ⚠️; Simeon Uroš beyliğinin künyesi YOK)"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi",kaynak:"⚠️ fetret bölge deseni (Tırhala)"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1881-07-02",t:"1923-10-29",d:"yunanistan",kaynak:"TDV tesalya 1881 (YIL, bölge) · ⚠️ gün senkron"}],
  d:[{f:"1394-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV tirhala: 'Batı Tesalya ve Tırhala’yı 795 (1393) sonu ile 796 (1394) başlarındaki bir sefer sırasında fethetti' (bölge ⚠️)"},
     {f:"1413-07-05",t:"1881-07-02"}],
  v:[],
  _taslak:{durum:"C", eksik:["1281-1349 sahibi"], uyari:["bütün halkalar Tırhala/bölge düzeyinden taşındı"]} },

// 20. KARDİÇE (Karditsa) — durum C (UYGULANAMAZ)
{ ad:"Kardiçe (Karditsa)", tur:"sehir", lat:39.365, lon:21.922, g:0, k:4, m:"Yanya",
  // kur: ❌ BULUNAMADI — TDV tesalya: '… güneydoğusundaki Batı ovasında Karditsa şehrinin ortaya çıkışı dikkat
  //      çekicidir' · 'XIX.(?) yüzyılda Karditsa küçülen Fener’in yerinde yeni bir kazaya dönüştürüldü' · Leake:
  //      '500-600 hânesi bulunan ve hemen hemen tamamı Türkler’den meydana gelen bir şehir' — Osmanlı dönemi
  //      kuruluşu, YIL YOK. TDV'de ayrı madde YOK.
  s:[{f:"1881-07-02",t:"1923-10-29",d:"yunanistan",kaynak:"TDV tesalya 1881 (YIL, bölge) · ⚠️ gün senkron"}],
  d:[{f:"????",t:"1881-07-02",kaynak:"kur bulunamadı"}],
  v:[],
  _taslak:{durum:"C", eksik:["kur yılı"]} },

// 21. BALÇIK (Balchik / Karvuna) — durum C (1281-1389 sahibi yok) — 1389 sonrası TAM
{ ad:"Balçık (Balchik)", tur:"liman", lat:43.422, lon:28.158, g:0, k:4, m:"Silistre",
  // ❌ EKSİK HALKA 1281 → 1389-07: TDV balcik (M. Kiel): Karvuna; 1304 Codex Cumanicus 'Balciuk'; Dobrotiç yurdu
  //    (Dobruca Despotluğu — künye YOK).
  s:[{f:"1390-01-01",t:"1393-01-01",d:"eflak",kesinlik:"yil",kaynak:"TDV balcik: 'bölge, Leh Kralı Vladislav’la Ocak 1390’da yaptığı bir anlaşmada kendini Dobrotic yurdunun despotu … diye niteleyen Eflak Voyvodası Koca Mircea tarafından işgal edildi' (Ocak 1390 = en geç; başlangıç günü yok)"},
     {f:"1402-07-28",t:"1418-01-01",d:"eflak",kesinlik:{f:"gun",t:"yil"},kaynak:"TDV balcik: 'Ankara Savaşı’ndan sonra Mircea, Dobruca’yı ve Karadeniz sahilindeki kaleleri yeniden ele geçirdi' · 'Dobruca Mircea’nın ölümüne (1418) kadar onun hâkimiyetindeydi' · ⚠️ başlangıç = Ankara sınır işareti · ⚠️ KOMŞULAR (Varna, Köstence) bu dönemi fetret deseniyle yazıyor — ÇELİŞKİ"},
     {f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan: 5 Ekim 1908 · TDV balcik: '1878-1913 yılları arasında Balçık Bulgaristan’a dahildi'"},
     {f:"1913-08-10",t:"1923-10-29",d:"romanya-kralligi",kaynak:"TDV balcik: 'Bükreş Antlaşması’nda … Balçık ve bütün Güney Dobruca Romanya tarafından işgal edildi' · gün: TDV balkan-savasi '10 Ağustos 1913’te … Bükreş Antlaşması' (koordinatör talimatı)"}],
  d:[{f:"1389-07-01",t:"1390-01-01",kesinlik:"ay",kaynak:"TDV balcik: 'Balçık bütün Dobruca ile birlikte Temmuz 1389’dan sonra Osmanlılar’ın idaresi altına girdi'"},
     {f:"1393-01-01",t:"1402-07-28",kesinlik:"yil",kaynak:"TDV balcik: '1393-1402 yılları arasında yine Osmanlı hâkimiyeti altında kaldı'"},
     {f:"1418-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV balcik: Mircea'nın ölümü (1418) · ⚠️ TDV tulca/dobruca '1419' der — 1 yıl fark, kaynaklar arası"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"TDV balcik: '1878-1913 … Bulgaristan’a dahildi' · Berlin md. 2 (sınır Mangalia'nın güneyinde)"}],
  // isg YAZILMADI: 1916-18 Bulgar geri alışı — TDV susuyor (Silistre kaydının notuyla aynı).
  _taslak:{durum:"C", eksik:["1281-1389 sahibi (Dobruca Despotluğu künyesi yok)"], uyari:["1389-07-01, 1390-01-01, 1393-01-01, 1418-01-01 d: kırılmaları — kronoloji maddeleri kontrol edilmeli (1393-01-01 var; diğerleri büyük olasılıkla YOK)","Dobruca komşularıyla desen çelişkisi"]} },

// 22. HACIOĞLUPAZARCIĞI (Dobriç / Dobrich) — durum B
{ ad:"Hacıoğlupazarcığı (Dobrich)", tur:"sehir", lat:43.565, lon:27.831, g:0, k:4, m:"Silistre",
  kur:"1518-01-01",
  s:[{f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi",kaynak:"TDV bulgaristan 5 Ekim 1908"},
     {f:"1913-08-10",t:"1923-10-29",d:"romanya-kralligi",kaynak:"TDV dobruca: 'Bükreş Antlaşması ile (1913) Bulgaristan Dobruca’nın güneyini de Romanya’ya terketmiş' · TDV hacioglupazarcigi: I. Dünya Savaşı başında Rusya ve Almanya 'Silistre ve Balçık ile beraber bu kasabayı Bulgaristan’a vermesi için Romanya’ya baskı yaptı' (⇒ Romanya'daydı) · gün TDV balkan-savasi 10 Ağustos 1913"}],
  d:[{f:"1518-01-01",t:"1878-07-13",kesinlik:"yil",kaynak:"TDV hacioglupazarcigi (M. Kiel): 'Silistre sancağına ait günümüze ulaşan en eski kayıtlar, 924’te (1518) yapılan tahrire dayalı … Varna kazasına bağlı Hacıoğlu adını taşıyan bir köye rastlanır' · kazılar '600-1500 yılları arasında yerleşim bulunmadığını' gösterdi · ⚠️ kur = İLK KAYIT yılı, kuruluş 'XVI. yüzyılda'"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"TDV hacioglupazarcigi: '1877-1878 savaşından sonra Hacıoğlu ve bölgesi yeni kurulan Bulgaristan’ın bir parçası oldu'"}],
  // isg YAZILMADI: 1877-78 Rus işgali ve 1916-18 Bulgar geri alışı — gün yok.
  _taslak:{durum:"B", uyari:["kur = ilk tahrir kaydı (1518), kuruluş yılı değil"]} },

// 23. TUTRAKAN (Turtucaia) — durum C (UYGULANAMAZ)
{ ad:"Tutrakan (Turtucaia)", tur:"kale", lat:44.049, lon:26.612, g:0, k:4, m:"Silistre",
  // TDV'de madde YOK (slug 302; arama başlık 0, içerik 6).
  // ❌ EKSİK: Osmanlı öncesi sahip ve Osmanlı fethi BULUNAMADI. TDV ruscuk: 1444 Varna sonrası Burgundia
  //    donanması 'Bulgaristan tarafındaki Tutrakan’a saldırarak buraları ele geçirdi' + 'Yergöğü ve Tutrakan’daki
  //    garnizonların âkıbeti' ⇒ 1444'te Osmanlı garnizonu VAR (üst sınır, fetih yılı değil).
  //    1444 Burgundia işgali (kısa) da isg adayı — gün yok.
  s:[{f:"1908-10-05",t:"1913-08-10",d:"bulgaristan-kralligi"},
     {f:"1913-08-10",t:"1923-10-29",d:"romanya-kralligi",kaynak:"TDV dobruca: Bükreş 1913 Güney Dobruca (BÖLGE → kasaba ⚠️; TDV dobruca 'Silistre ve özellikle Tutrakan bölgelerinde Türkler çoğunluktadır' Güney Dobruca bağlamında) · gün TDV balkan-savasi"}],
  d:[{f:"????",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi",kaynak:"Berlin md. 2: prenslik 'la rive droite du Danube depuis l'ancienne frontière de Serbie jusqu'à un point … à l'est de Silistrie' (Tutrakan Rusçuk-Silistre arası — geometri)"}],
  // isg YAZILMADI: Eylül 1916 Turtucaia (Bulgar-Alman geri alışı) — TDV susuyor.
  _taslak:{durum:"C", eksik:["Osmanlı öncesi sahip","Osmanlı fethi yılı"]} }

];
