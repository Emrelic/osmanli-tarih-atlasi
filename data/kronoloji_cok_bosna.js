// =====================================================================
// BOSNA-HERSEK — ÇOK KÜNYELİ KRONOLOJİ (KRONO-BALKAN-B-0929, 29 Eylül 2026)
// =====================================================================
// Yol: `window.KRONOLOJI_COK_BOSNA` → app.js `cokTarafliKronolojiEkle`
// her maddeyi `devlet:` / `devletler:` künyesine EKLER (ezmez). ORTAK §4.1.
//
// KÜNYELER (devletler.js'ten okundu): bosna-kralligi 1377→1463-05-01 ·
//   hersek 1435→1482 · bosna-isgal 1878-07-13→1908-10-06 · habsburg ·
//   macaristan · venedik
// 🔴 1463-1878 OSMANLI BOSNA'SI İÇİN KÜNYE YOK. Bu dönemin 14 iç maddesi
//   dosyanın sonunda, ÖNERİLEN `devlet:"bosna-eyaleti"` ile yazıldı (M-5416
//   kural 3): künye açılana kadar bağlanmaz ama kaybolmaz — app.js onu sayıp
//   konsola basar. Öneri: denetim/KRONO-BALKAN-B-0929-KUNYE.md.
//
// MÜKERRER DENETİMİ: `kronoloji_balkan.js`teki Bosna Krallığı maddeleri
//   (~25, bugün BAĞSIZ), künyelerin kendi kronolojisi ve çekirdekteki
//   fetih maddeleri (1463 · 1465 Foça · 1469 Livno · 1483 Hersek · 1512
//   Srebrenik · 1528 Yayça-Banaluka · 1737 Banaluka · 1875 · 1878-07-29)
//   TEKRARLANMADI.
//
// KAYNAK: TDV birincil — `bosna-hersek`, `bosna-eyaleti`, `saraybosna`
//   (gövdeler denetim/KRONO-BALKAN-B-0929-tdv-onbellek/). Akademik:
//   N. Malcolm, Bosnia: A Short History (1994) · J. V. A. Fine, The Late
//   Medieval Balkans (1987) · B. Jelavich, History of the Balkans (1983).
// =====================================================================

window.KRONOLOJI_COK_BOSNA = [

{ t:"1386-01-01", b:"Bosna'ya ilk Osmanlı akınları", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"", odak_yer:"Saraybosna", devlet:"bosna-kralligi", gun:"1386 (788 H.; TDV yalnız yıl verir)",
  d:"Tvrtko I'in krallığı, Niş'in düştüğü yıl ilk Osmanlı akınlarıyla karşılaştı. İki yıl sonra Bileća'da bir akın kuvveti ağır yenilgiye uğratıldı ve Bosna askerleri 1389'da Knez Lazar'ın safında Kosova'da savaştı; ama akınlar XV. yüzyıl boyunca krallığı haraca ve iç bölünmeye sürükledi.",
  kaynak:"TDV `bosna-hersek`: 'bölgeye ilk Türk akınları 788'de (1386) başladı … 1388'deki akında Türk kuvvetleri yenilgiye uğradı, bundan bir yıl sonra Bosna askerleri Sırp Knezi Lazar idaresinde Kosova Savaşı'na katıldılar.'" },

{ t:"1463-12-16", b:"Macar Kralı Mátyás Yayça'yı aldı — kuzey Bosna'da Macar banlığı", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","kusatma","konu-askeri"],
  yer_id:"", odak_yer:"Travnik", devlet:"macaristan",
  d:"Fâtih'in baharda Bosna Krallığı'nı yıkmasından birkaç ay sonra Macar Kralı Mátyás Corvinus, krallığın son merkezi Yayça'yı (Jajce) kuşatıp aldı. Burada kurulan Macar banlığı kuzey Bosna'yı altmış beş yıl Osmanlı'ya kapadı; Macarların kurdurduğu 'Bosna kralı' ise 1476'ya dek sözde bir krallık sürdürdü. Yayça ancak Mohaç'tan sonra, 1528'de Osmanlı'ya geçti.",
  kaynak:"TDV `bosna-hersek`: Macarların 'eski hânedan mensuplarından birine 1476'ya kadar sürecek sözde bir krallık kurdurdu' · TDV `gazi-husrev-bey`: Yayça'nın 1463'ten sonra Macarların eline geçip 1528'de alındığı. Gün (16 Aralık 1463): J. V. A. Fine, The Late Medieval Balkans (1987)." },

{ t:"1470-01-01", b:"Hersek sancağı kuruldu", tur:"idari",
  onem:3, dunya:1, kapsam:"dis", etiket:["idari","toprak-kayip","konu-idari"],
  yer_id:"Foça (Foča)", devlet:"hersek", gun:"1470 (TDV yalnız yıl verir)",
  d:"Kosača dükalığının Osmanlı'ya geçen kısmından ayrı bir Hersek sancağı teşkil edildi; dükalığın kalan toprakları 1482 başlarında fethedilerek sancağa katıldı. Sancak 1580'de Bosna beylerbeyiliğine bağlanacak, 'Hersek' adı ise bölgeye kalıcı olarak yerleşecektir.",
  ic_not_d:"yer_id Foça: Hersek sancağının ilk merkezi olarak TDV'de doğrulanmadı; Foça 1465'te alınan ilk Hersek kasabası olduğu için kamera odağı olarak seçildi (çekirdek olaylar_ek10.js 1465).",
  kaynak:"TDV `bosna-hersek`: 'Hersek sancağı 1470'te teşkil edilmiş, buranın diğer bir kısım toprakları ise 1482 başlarında fethedilerek sancağa katılmıştı.'" },

{ t:"1592-01-01", b:"Split'te Bosna ticaretine açık liman (scala) kuruldu", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"dis", etiket:["ekonomi","konu-ekonomi"],
  yer_id:"", odak_yer:"Livno", devlet:"venedik", gun:"1592 (TDV yalnız yıl verir)",
  d:"Venedik, Dubrovnik'in rekabetini kırmak için Split'te Osmanlı tüccarlarına açık bir gümrük ve karantina iskelesi kurdu. Bosna'nın Adriyatik'e açılan ticareti Dubrovnik yanında ikinci bir çıkış kazandı.",
  kaynak:"TDV `bosna-hersek`: 'Dubrovnik Limanı yanında Split'te de bir liman açılması (1592) Bosna ticareti için önemli bir gelişme olmuştu.'" },

{ t:"1593-06-22", b:"Sisak (Kulpa) bozgunu — Bosna beylerbeyi Hasan Paşa öldü", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"", odak_yer:"Bihaç", devlet:"habsburg",
  d:"Hırvat sınırında Sisak kalesini kuşatan Bosna beylerbeyi Telli Hasan Paşa'nın ordusu Kulpa kıyısında Habsburg kuvvetlerince bozguna uğratıldı ve paşa savaşta öldü. Yenilgi, Babıâli'nin Habsburglara savaş açmasına ve on üç yıl sürecek Uzun Savaş'a yol açtı.",
  ic_not_d:"Uzun Savaş'ın başlangıcı çekirdekte (olaylar_ek5.js 1593-07-01) duruyor; bu madde onu tetikleyen bozgunu anlatır.",
  kaynak:"N. Malcolm, Bosnia: A Short History (1994) — Sisak, 22 Haziran 1593. TDV `bosna-hersek`: Habsburglarla uzun savaş dönemi (1593-1606)." },

{ t:"1697-10-24", b:"Prens Eugène Saraybosna'yı yakıp yıktı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","konu-askeri"],
  yer_id:"Saraybosna", devlet:"habsburg",
  d:"Zenta zaferinin ardından Bosna'ya dalan 8500 kişilik Avusturya kuvveti Saraybosna'ya ulaştı, şehri yağmalayıp ateşe verdi. Saraybosna'nın en acı günlerinden biri sayılan baskından sonra eyalet merkezi uzun süre Travnik'te kaldı.",
  kaynak:"TDV `saraybosna`: 'Saraybosna'nın en acı günlerinden biri, Zenta savaşından sonra 24 Ekim 1697'de 8500 kişilik Avusturya kuvvetlerinin acımasız hücumuna mâruz kalmasıdır.'" },

// ───────────────────────── AVUSTURYA-MACARİSTAN İŞGALİ (bosna-isgal)

{ t:"1878-08-19", b:"Saraybosna Avusturya-Macaristan ordusuna düştü", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","savas","konu-askeri"],
  yer_id:"Saraybosna", devletler:["bosna-isgal","habsburg"],
  d:"Berlin Kongresi'nin verdiği işgal yetkisiyle 29 Temmuz'da sınırı geçen Avusturya-Macaristan ordusu, yerli Müslümanların örgütlediği direnişi sokak çatışmalarıyla kırarak Saraybosna'ya girdi. Direniş başkentin düşüşünden sonra da iki ay sürdü.",
  kaynak:"N. Malcolm, Bosnia: A Short History (1994) — 19 Ağustos 1878. TDV `bosna-hersek`: 'Bosna müslümanları Avusturya-Macaristan'ın işgaline karşı koydular.'" },

{ t:"1878-10-20", b:"Bosna-Hersek'in işgali tamamlandı", tur:"isgal",
  onem:4, dunya:2, kapsam:"dis", etiket:["isgal","konu-askeri"],
  yer_id:"", odak_yer:"Saraybosna", devletler:["bosna-isgal","habsburg"],
  d:"Üç ay süren çatışmalardan sonra son direniş odakları da bastırıldı ve Avusturya-Macaristan bütün Bosna-Hersek'i denetimine aldı. Hukuken Osmanlı egemenliği 1908 ilhakına kadar sürdü; fiilî idare ise Viyana'ya geçmişti.",
  kaynak:"TDV `bosna-hersek`: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı.'" },

{ t:"1879-04-21", b:"İstanbul Sözleşmesi — işgalin şartları ve Yenipazar garnizonları", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","konu-diplomasi"],
  yer_id:"", odak_yer:"Yenipazar", devletler:["bosna-isgal","habsburg"],
  d:"Osmanlı Devleti ile Avusturya-Macaristan arasında imzalanan sözleşme, Berlin'de verilen işgal yetkisini ayrıntılandırdı: padişahın egemenlik hakları, hutbe ve Müslümanların din serbestliği güvenceye alındı, Avusturya'ya Yenipazar sancağında garnizon bulundurma hakkı tanındı.",
  kaynak:"B. Jelavich, History of the Balkans I (1983) — Nisan 1879 sözleşmesi. TDV `bosna-hersek`: Osmanlı haklarının 1908'e kadar resmen sürdüğü." },

{ t:"1882-01-01", b:"Avusturya idaresi reîsülulemâ makamını kurdu", tur:"din",
  onem:3, dunya:1, kapsam:"ic", etiket:["din","idari","konu-din","konu-idari"],
  yer_id:"Saraybosna", devlet:"bosna-isgal", gun:"1882 (TDV yalnız yıl verir)",
  d:"İşgal yönetimi, Bosna Müslümanlarını İstanbul'daki şeyhülislâmlıktan koparıp kendi denetimine almak için Saraybosna'da bir reîsülulemâ makamı ve ulemâ meclisi kurdu. Kurum sonraki çeyrek yüzyıl boyunca Müslümanların dinî ve vakıf özerkliği mücadelesinin odağı oldu.",
  kaynak:"TDV `bosna-hersek`: 'Müslüman dinî kurumları üzerinde kontrol sağlamak için hükümet 1882 yılında yüksek dinî başkan durumundaki reîsülulemâ makamını oluşturdu.'" },

{ t:"1902-01-01", b:"Müftü Ali Fehmi Câbiç'in Bosna'ya dönüşü yasaklandı", tur:"din",
  onem:2, dunya:1, kapsam:"dis", etiket:["din","siyaset","konu-din","konu-siyasi"],
  yer_id:"Mostar", devlet:"bosna-isgal", gun:"1902 (TDV yalnız yıl verir)",
  d:"Dinî-vakıf özerkliği hareketinin önderi Mostar müftüsü Câbiç, padişaha danışmak için İstanbul'a gidince Avusturya-Macaristan hükümeti onun Bosna'ya dönmesini yasakladı. Hareket 1906'dan sonra daha teşkilâtlı bir siyasî yapıya büründü.",
  kaynak:"TDV `bosna-hersek`: 'Müftü Câbiç padişaha danışmak için İstanbul'a gittiğinde Avusturya-Macaristan hükümetince Bosna'ya geri dönmesi yasaklandı (1902).'" },

// ───────────────────────── İLHAKTAN SONRA (habsburg)

{ t:"1909-02-26", b:"Osmanlı-Avusturya protokolü — ilhak tazminat karşılığı tanındı", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kayip","konu-diplomasi"],
  yer_id:"", odak_yer:"Saraybosna", devlet:"habsburg",
  d:"Babıâli, Avusturya-Macaristan'ın Bosna-Hersek'i ilhakını tanıyan protokolü imzaladı; karşılığında Viyana Yenipazar sancağındaki garnizonlarını çekti ve Osmanlı'ya vakıf ve kamu malları için tazminat ödedi. Bosna-Hersek üzerindeki otuz yıllık hukukî Osmanlı egemenliği böylece sona erdi.",
  kaynak:"B. Jelavich, History of the Balkans II (1983) — Şubat 1909 protokolü. TDV `bosna-hersek`: Osmanlı haklarının 1908 ilhakına kadar resmen sürdüğü." },

{ t:"1909-01-01", b:"Bosna Müslümanlarına din, vakıf ve maarif özerkliği statüsü", tur:"din",
  onem:2, dunya:1, kapsam:"ic", etiket:["din","kanun","konu-din","konu-hukuk"],
  yer_id:"Saraybosna", devlet:"habsburg", gun:"1909 (TDV yalnız yıl verir)",
  d:"On yıllık Câbiç hareketinin sonucunda çıkarılan statü, İslâm cemaatine dinî işler, vakıflar ve mektepler üzerinde özerk bir yönetim tanıdı ve Müslüman çocuklar için mektebe devamı zorunlu kıldı. Düzenleme 1930'a kadar yürürlükte kaldı.",
  kaynak:"TDV `bosna-hersek`: '1909'daki kanun 1930'a kadar uygulandı' · '1909'daki kanunî düzenlemelere göre müslüman çocukların mekteplere devam mecburiyeti konuldu.'" },

{ t:"1910-01-01", b:"Bosna-Hersek anayasası ve meclisi (Sabor)", tur:"anayasa",
  onem:3, dunya:1, kapsam:"ic", etiket:["anayasa","konu-siyasi","konu-hukuk"],
  yer_id:"Saraybosna", devlet:"habsburg", gun:"1910 (TDV yalnız yıl verir)",
  d:"İlhakın ardından Bosna-Hersek'e bir eyalet anayasası verildi ve dinî topluluklara göre seçilen bir meclis (Sabor) kuruldu. Meclisin yetkileri dar kaldı; eyalet Viyana ile Budapeşte'nin ortak maliye bakanlığına bağlı olmayı sürdürdü.",
  kaynak:"TDV `bosna-hersek`: '1906'da adlî idare de ayrıldı, ilhakın ardından 1910'da \"sabor\" (meclis) teşkiliyle bir anayasa yapıldı.'" },

// ───────────────────────── OSMANLI BOSNA'SI — ÖNERİLEN KÜNYE `bosna-eyaleti`
// (M-5416 kural 3: künye henüz YOK; bugün bağlanmaz ama kaybolmaz, künye
//  eklenince kendiliğinden bağlanır. Öneri: denetim/KRONO-BALKAN-B-0929-KUNYE.md)

{ t:"1521-01-01", b:"Gazi Hüsrev Bey Bosna sancakbeyi oldu", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","konu-idari","konu-kisiler"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1521, Belgrad'ın fethinden sonra (TDV gün vermez)",
  d:"Belgrad kuşatmasında Zemun'u alan Gazi Hüsrev Bey, fetihten sonra Bosna sancakbeyliğine getirildi; kesintilerle 1541'deki ölümüne kadar üç kez bu görevde bulundu. 1528'de Yayça'yı alan da odur. Onun vakıfları Saraybosna'yı bir Osmanlı-İslâm şehrine dönüştürdü.",
  kaynak:"TDV `gazi-husrev-bey`: 'Belgrad'ın fethinden sonra Bosna sancak beyliğine getirildi' · Yayça'yı ikinci defa kuşatarak teslim aldı (1528)." },


{ t:"1530-01-01", b:"Saraybosna'da Gazi Hüsrev Bey Camii tamamlandı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["mimari","kultur","konu-kultur"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1530 (TDV yalnız yıl verir)",
  d:"Sancakbeyi Gazi Hüsrev Bey'in yaptırdığı cami, çevresinde medrese (1537), kütüphane, hamam ve bedestenle Saraybosna'nın çarşı merkezini oluşturdu. Külliye Bosna'daki Osmanlı mimarisinin başlıca örneklerindendir.",
  kaynak:"TDV `bosna-hersek`: 'Saraybosna'da Gazi Hüsrev Bey Camii (1530) … Gazi Hüsrev Bey Medresesi (1537).'" },


{ t:"1541-06-18", b:"Gazi Hüsrev Bey Saraybosna'da öldü", tur:"olum",
  onem:2, dunya:1, kapsam:"ic", etiket:["olum","konu-kisiler"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti",
  d:"Üçüncü Bosna sancakbeyliği sırasında ölen Gazi Hüsrev Bey, kendi camisinin avlusundaki türbeye gömüldü. Onun döneminde Bosna sancağı Macar ve Hırvat sınırında Osmanlı'nın en etkin uç birimlerinden biri hâline gelmişti.",
  kaynak:"TDV `gazi-husrev-bey`: '23 Safer 948'de (18 Haziran 1541) Saraybosna'da vefat eden Hüsrev Bey, … Gazi Hüsrev Bey Camii avlusundaki türbeye gömüldü.'" },


{ t:"1552-01-01", b:"Bosna sancakbeyleri merkezi Banaluka'ya taşıdı", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"],
  yer_id:"Banaluka", devlet:"bosna-eyaleti", gun:"1552'den itibaren (TDV)",
  d:"Hırvat sınırına daha yakın olmak için Bosna sancakbeyleri askerî maksatla Banaluka'da oturmaya başladı. Merkez 1639'a kadar burada kaldı.",
  kaynak:"TDV `bosna-eyaleti`: 'Sancağın merkezi daha sonra, 1552'den itibaren Bosna sancağına tayin edilen beylerin askerî maksatlarla Banaluka'da oturmaya başlamaları üzerine buraya taşındı.'" },


{ t:"1580-03-18", b:"Bosna beylerbeyilik (eyalet) oldu", tur:"idari",
  onem:4, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"],
  yer_id:"Banaluka", devlet:"bosna-eyaleti",
  d:"Sokullu ailesinden Ferhad Bey'in sancakbeyliği sırasında Bosna, stratejik ve askerî önemi sebebiyle Rumeli'den ayrılarak bir beylerbeyilik hâline getirildi; Hersek, Kilis, İzvornik gibi sancaklar ona bağlandı. Bosna eyaleti 1866'da vilâyet olana kadar bu çerçevede yönetildi.",
  kaynak:"TDV `bosna-eyaleti`: 'Sokullu ailesine mensup Ferhad Bey'in sancak beyliği (1 Safer 988 / 18 Mart 1580) sırasında Bosna … bir eyalet haline getirildi.'" },


{ t:"1639-01-01", b:"Eyalet merkezi Banaluka'dan Saraybosna'ya taşındı", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1639 (TDV yalnız yıl verir)",
  d:"Bosna valilerinin oturduğu yer Banaluka'dan Saraybosna'ya alındı. 1697 Avusturya baskınından sonra merkez Travnik'e nakledildi ve valiler 1851'e kadar orada oturdu.",
  kaynak:"TDV `bosna-eyaleti`: '1639'da Banaluka'dan Saraybosna'ya taşınan eyalet merkezi Travnik'e nakledildi ve 1851'e kadar Bosna valileri burada oturdular.'" },


{ t:"1820-01-01", b:"Celâleddin Paşa Bosna âyanını zorla sindirdi", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","isyan","konu-idari"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1820 (TDV yalnız yıl verir)",
  d:"1814'ten beri süren karışıklıkların ardından vali Celâleddin Paşa, merkezî otoriteyi tanımayan Bosna âyanına karşı sert tedbirlere başvurarak düzeni zorla kurdu. II. Mahmud'un merkezileşme siyasetinin Bosna'daki ilk sert uygulamasıdır.",
  kaynak:"TDV `saraybosna`: '1814'teki karışıklıklar sebebiyle 1820'de Celâleddin Paşa düzeni zorla sağlayabildi.'" },


{ t:"1831-01-01", b:"Hüseyin Kapudan Gradaşçeviç ayaklanması — Bosna özerkliği talebi", tur:"isyan",
  onem:4, dunya:1, kapsam:"ic", etiket:["isyan","ozerklik","konu-siyasi"],
  yer_id:"", odak_yer:"Travnik", devlet:"bosna-eyaleti", gun:"1831 (TDV yalnız yıl verir)",
  d:"Yeniçeriliğin kaldırılması ve yeni askerî düzenlemelere tepki olarak Bosnalı Müslüman âyan, Gradaçac kapudanı Hüseyin Gradaşçeviç önderliğinde ayaklandı. Âsiler tam bir özerklik ve kendi vezirlerini seçme hakkı istedi, karşılığında yıllık haraç teklif etti.",
  kaynak:"TDV `bosna-hersek`: '1831'de bazı yenilikleri uygulamaya koymak … teşebbüsleri, Kaptan Hüseyin Gradaşçeviç'in liderliğinde, Bosnalı müslüman âyanın başı çektiği bir ayaklanmaya dönüştü. Âsiler Bosna-Hersek için tam bir otonomi … istediler.'" },


{ t:"1832-01-01", b:"Gradaşçeviç ayaklanması bastırıldı", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["isyan","konu-askeri"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1832 (TDV yalnız yıl verir)",
  d:"Başlangıçta başarı kazanan âsiler, aralarındaki rekabet ve Hersek âyanının merkeze bağlı kalması yüzünden dağıldı. Hüseyin Kapudan Avusturya topraklarına sığındı.",
  kaynak:"TDV `bosna-hersek`: 'Başlangıçta âsiler başarı kazandılarsa da aralarındaki rekabet ve anlaşmazlık sonucu kolayca dağıtıldılar (1832).'" },


{ t:"1833-01-01", b:"Ali Paşa Rızvanbegoviç için ayrı Hersek paşalığı kuruldu", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","konu-idari"],
  yer_id:"Mostar", devlet:"bosna-eyaleti", gun:"1833 (TDV yalnız yıl verir)",
  d:"Ayaklanmada merkeze sadık kalan Stolac kapudanı Ali Paşa Rızvanbegoviç'e ödül olarak Hersek, Bosna'dan ayrılıp Mostar merkezli bir paşalık hâlinde verildi. Paşalık 1851'de Ömer Paşa tarafından lağvedildi.",
  kaynak:"TDV `bosna-hersek`: '1833'te Ali Paşa Rızvanbegović tarafından idare edilmek için kurulan Hersek paşalığını da onu ortadan kaldırdıktan sonra lağvetti.'" },


{ t:"1835-01-01", b:"Bosna'da kapudanlık müessesesi kaldırıldı", tur:"reform",
  onem:3, dunya:1, kapsam:"ic", etiket:["reform","idari","konu-idari"],
  yer_id:"", odak_yer:"Travnik", devlet:"bosna-eyaleti", gun:"1835 (TDV yalnız yıl verir)",
  d:"Sınır boylarındaki irsî kapudanlıklar kaldırılarak yerine merkezden atanan müsellimlikler kuruldu. Bosna'nın yüzyıllık yerel askerî soylu düzeni böylece çözülmeye başladı.",
  kaynak:"TDV `bosna-hersek`: 'İsyan bastırıldıktan sonra kapudanlık müessesesi kaldırıldı (1835), yerine müsellimlikler kuruldu.'" },


{ t:"1850-01-01", b:"Ömer Paşa (Latas) Bosna âyanının gücünü kırdı", tur:"reform",
  onem:4, dunya:1, kapsam:"ic", etiket:["reform","isyan","konu-idari","konu-askeri"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"1850-1851 (TDV aralık verir)",
  d:"Bosna valisi Ömer Paşa, Tanzimat reformlarına direnen âyanın siyasî nüfuzunu askerî güçle kırdı ve Hersek paşalığını lağvetti. Valilik merkezi 1851'de Travnik'ten yeniden Saraybosna'ya taşındı.",
  kaynak:"TDV `bosna-hersek`: 'Ömer Paşa Bosna valisi sıfatıyla (1850-1851) Bosna âyanının siyasî nüfuzlarını kırıp reformları uygulamayı başardı.' · TDV `bosna-eyaleti`: valilerin 1851'e kadar Travnik'te oturduğu." },


{ t:"1865-01-01", b:"Topal Osman Paşa'nın düzenlemesi — Bosna vilâyeti yedi sancakla kuruldu", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","reform","konu-idari"],
  yer_id:"Saraybosna", devlet:"bosna-eyaleti", gun:"Mayıs 1865 düzenleme, 1866 vilâyet adı (TDV)",
  d:"Vali Topal Osman Paşa döneminde (1861-1869) Vilâyet Nizamnâmesi'ne göre yeni bir idarî düzen kuruldu; Bosna 1866'da Saraybosna, İzvornik, Banaluka, Bihke, Travnik, Hersek ve Yenipazar sancaklarından oluşan bir vilâyete dönüştü. Aynı yıllarda vilâyet matbaası kuruldu, okullar açıldı ve düzenli salnâme yayımlanmaya başlandı.",
  kaynak:"TDV `bosna-eyaleti`: 'Mayıs 1865'te ise vezir Topal Osman Paşa'nın valiliği sırasında yeni bir idarî düzenleme düşünüldü. 1866'da vilâyet olarak adlandırılan Bosna … yedi sancağa ayrılmıştı.'" },


{ t:"1872-01-01", b:"Bosna'nın ilk demiryolu: Banaluka–Novi hattı", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"ic", etiket:["ekonomi","konu-ekonomi"],
  yer_id:"Banaluka", devlet:"bosna-eyaleti", gun:"1872 (TDV yalnız yıl verir)",
  d:"Rumeli demiryollarının bir parçası olarak Banaluka ile Novi arasındaki hat hizmete girdi. Hat, Bosna'yı ilk kez Avusturya sınırındaki demiryolu ağına bağladı.",
  kaynak:"TDV `bosna-hersek`: 'İlk demiryolu ise 1872'de Banaluka ile Novi arasında hizmete girdi.'" },

];
