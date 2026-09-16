// =====================================================================
// SINIR KRONOLOJİSİ — D5-AMERIKA (Kuzey · Orta · Güney Amerika · Karayipler)
// =====================================================================
// window.KRONOLOJI_SINIR_AMERIKA — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_amerika.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği
//   sinir_id  : d_sinirlar_amerika.js kayıt kimliği
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM:
//   G1 (1918-11-11 → 1923-10-29): E/F/D değişikliği YOK ⇒ madde 0.
//     Bu penceredeki iki belge C düzeyinde: Thomson–Urrutia onayı (1 Mar 1922)
//     ve Kolombiya–Venezuela İsviçre kararı (24 Mar 1922). Şartname gereği madde almadı.
//   G2 (1914-07-28 → 1918-11-11): 1 madde (Kolombiya–Ekvador, 26 Oca 1917).
//     Kanal Bölgesi 1914 sözleşmesi (yürürlük 11 Şub 1915) hukuken E ama hattı
//     çizilmedi (kayıt YOK) ⇒ madde almadı. Hollanda–Fransız Guyanası 1915
//     sözleşmesi (Stoelman–Portal adaları) YOK kutusu içinde ⇒ madde almadı.
//
// KAYNAK (§4): TDV bu coğrafyayı kapsamıyor. Gordon Ireland, Boundaries,
// Possessions, and Conflicts in South America (Harvard UP, 1938), s. 183–185
// (archive.org OCR metni bu oturumda okundu) · Cancillería de Colombia.

//   G3 (1878-07-13 → 1914-07-28): 5 madde — Meksika–Guatemala 1882 · Brezilya
//     cumhuriyeti 1889 (iki E hattının tarafı değişti, hat aynı) · Honduras–Nikaragua
//     batısı 1896 · Arjantin–Brezilya 1900. C düzeyindeki belgeler (1899 Paris kararı,
//     1904 İtalya Kralı kararı, 1904 Bolivya–Şili, 1909 Merín Gölü …) madde almadı.
//     Kaynaklar: IBS 159 · IBS 36 · IBS 168 · Ireland 1938 · Library of Congress.

//   G4 (1815-06-09 → 1878-07-13): 16 madde — Kuzey Amerika'da 1818 · 1825 · 1842 · 1846 ·
//     1848 · 1854 · 1867 (x2) · 1870 (x2) · 1871; Orta ve Güney Amerika'da 1852 · 1858 · 1872 · 1876.
//     Kanada 1867'de yalnız doğu kuşağına komşuydu (Rupert's Land 1870, Britanya Kolumbiyası 1871).
//     Kaynaklar: International Boundary Commission · ABD Dışişleri Office of the Historian ·
//     The Canadian Encyclopedia · Avalon (Yale) · RIAA XV · IBS 158 · IBS 166 · Ireland 1938.
//     Yıl düzeyindeki maddeler (1818 · 1842 · 1846) §4 gereği YYYY-01-01; ay/gün metinde yok.

window.KRONOLOJI_SINIR_AMERIKA = [

{ t:"1818-01-01", devlet:"abd", devletler:["abd","ingiliz-kuzey-amerika"], sinir_id:"g4-bna-us-prairie",
  b:"1818 Sözleşmesi — Lake of the Woods'tan Kayalık Dağlar'a 49. paralel sınır", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","abd","ingiliz-kuzey-amerika"],
  d:"ABD ile Britanya arasındaki 1818 Sözleşmesi'nin 2. maddesi, sınırın Lake of the Woods'un en kuzeybatı noktasından 49. paralele inip bu paralel boyunca Kayalık Dağlar'a gitmesini kararlaştırdı. Dağların batısı (Oregon) için karar ertelendi. Hat ancak 1872'den sonra kurulan karma komisyonca arazide işaretlendi. Kaynak yalnız yılı verdiğinden tarih yıl düzeyindedir.",
  kaynak:"International Boundary Commission, History ('to the 49th parallel and along it to the Stony Mountains') · ABD Dışişleri Office of the Historian, Oregon Territory" },

{ t:"1825-02-28", devlet:"rusya", devletler:["rusya","ingiliz-kuzey-amerika"], sinir_id:"g4-bna-rus-141",
  b:"İngiliz–Rus Sözleşmesi — Rus Amerikası ile İngiliz toprakları arasında 141. meridyen", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","rusya","ingiliz-kuzey-amerika"],
  d:"Rusya ile Britanya, 28 Şubat 1825 (Jülyen 16 Şubat) tarihli sözleşmeyle Kuzey Amerika'daki topraklarını ayırdı. Kıyı şeridinin kuzeyinde sınır, 141. batı meridyeni boyunca Kuzey Buz Denizi'ne uzandı. Bu meridyen, Alaska 1867'de ABD'ye geçtikten sonra da aynen sınır kaldı. Kıyı şeridinin (panhandle) yorumu ise 1903 hakem kararına kadar tartışmalı oldu.",
  kaynak:"UN RIAA XV 481–540 (Alaska Sınır Mahkemesi kararı; 1825 sözleşmesinin metni ve yorumu)" },

{ t:"1842-01-01", devlet:"abd", devletler:["abd","ingiliz-kuzey-amerika"], sinir_id:"g4-bna-us-dogu",
  b:"Webster–Ashburton Antlaşması — Maine'den Lake of the Woods'a sınır kesinleşti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","abd","ingiliz-kuzey-amerika"],
  d:"St. Croix kaynağından St. Lawrence'a kadar olan kesim (Maine sınırı) ve St. Mary's Nehri'nden Lake of the Woods'a uzanan bölümler, ancak 1842 Webster–Ashburton Antlaşması'yla kararlaştırıldı. Böylece Atlantik'ten Kayalık Dağlar'a kadar sınır hukuken tamamlandı. Kaynak yalnız yılı verdiğinden tarih yıl düzeyindedir.",
  kaynak:"International Boundary Commission, History ('It was not until the Webster-Ashburton Treaty of 1842')" },

{ t:"1846-01-01", devlet:"abd", devletler:["abd","ingiliz-kuzey-amerika"], sinir_id:"g4-bna-us-bati",
  b:"Oregon Antlaşması — 49. paralel Kayalık Dağlar'dan Pasifik'e uzatıldı", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","abd","ingiliz-kuzey-amerika"],
  d:"1818'de ertelenen Oregon meselesi 1846'da çözüldü. Sınır Kayalık Dağlar'ın zirvesinden 49. paralel boyunca Georgia Boğazı'na, oradan Juan de Fuca Boğazı üzerinden Pasifik'e uzatıldı; Vancouver Adası Britanya'da kaldı. ABD Senatosu antlaşmayı 18 Haziran 1846'da onayladı. İmza ve teati günleri okunmadığından tarih yıl düzeyindedir.",
  kaynak:"International Boundary Commission, History · ABD Dışişleri Office of the Historian, Oregon Territory ('The Senate ratified the treaty … on June 18, 1846')" },

{ t:"1848-05-30", devlet:"abd", devletler:["abd","meksika"], sinir_id:"d1923-us-mx-kaliforniya",
  b:"Guadalupe Hidalgo Antlaşması yürürlüğe girdi — Kaliforniya sınırı çizildi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","abd","meksika"],
  d:"2 Şubat 1848'de imzalanan ve Meksika Savaşı'nı bitiren antlaşmanın onayları 30 Mayıs 1848'de Querétaro'da değiş tokuş edildi. Antlaşmanın 5. maddesi, Gila ile Colorado nehirlerinin birleştiği yerden Pasifik'e, San Diego limanının bir deniz fersahı güneyine düz bir hat çizdi. Bu Kaliforniya kesimi 1854 Gadsden Antlaşması'yla aynen korundu ve bugünkü sınırdır.",
  kaynak:"Avalon Project (Yale), Treaty of Guadalupe Hidalgo ('RATIFICATIONS EXCHANGED AT QUERETARO, MAY 30, 1848') · Gadsden Antlaşması md. I" },

{ t:"1852-10-18", devlet:"brezilya-imparatorlugu", devletler:["brezilya-imparatorlugu","peru-cumhuriyeti"], sinir_id:"g3-br-imp-pe-tabatinga-apaporis",
  b:"Brezilya–Peru Sözleşmesi yürürlüğe girdi — Tabatinga–Apaporis hattı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","brezilya-imparatorlugu","peru-cumhuriyeti"],
  d:"23 Ekim 1851'de Lima'da imzalanan sözleşmenin onayları 18 Ekim 1852'de Rio'da değiş tokuş edildi. Sözleşme Brezilya ile Peru arasında Tabatinga'dan Apaporis ağzına düz bir hat ve Javari nehrini sınır kabul etti. Karma komisyon hattı 1866–1874 arasında işaretledi. Kolombiya bu hatta itiraz etti ve 1875'te protesto etti.",
  kaynak:"Ireland 1938 (Harvard UP) s. 125–130" },

{ t:"1854-06-30", devlet:"abd", devletler:["abd","meksika"], sinir_id:"d1923-us-mx-gadsden",
  b:"Gadsden Antlaşması yürürlüğe girdi — Colorado'dan Rio Grande'ye yeni kara sınırı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","abd","meksika"],
  d:"30 Aralık 1853'te Mexico City'de imzalanan antlaşmanın onayları 30 Haziran 1854'te Washington'da değiş tokuş edildi. Meksika, Gila nehrinin güneyindeki bir şeridi ABD'ye bıraktı; yeni kara sınırı Colorado'dan Rio Grande'ye düz hatlarla çizildi. İki Kaliforniya arasındaki 1848 hattı ise aynen korundu. Hat 1891–1894'te yeniden ölçülüp 258 anıtla işaretlendi.",
  kaynak:"Avalon Project (Yale), Gadsden Purchase Treaty ('retaining the same dividing line between the two Californias') · IBWC, History" },

{ t:"1858-04-15", devlet:"nikaragua-cumhuriyeti", devletler:["nikaragua-cumhuriyeti","kosta-rika-cumhuriyeti"], sinir_id:"d1923-ni-cr",
  b:"Cañas–Jerez Antlaşması — Nikaragua–Kosta Rika sınırı", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","nikaragua-cumhuriyeti","kosta-rika-cumhuriyeti"],
  d:"15 Nisan 1858 tarihli antlaşmanın 2. maddesi iki ülke arasındaki sınırı tarif etti. Nikaragua antlaşmanın geçerliliğine sonradan itiraz etti; ABD Başkanı Cleveland'ın Mart 1888 hakem kararı antlaşmayı geçerli saydı. Hat, E. P. Alexander'ın 1897–1900 kararlarıyla arazide işaretlendi. Tarih imza günüdür; onay günü bulunamadı.",
  kaynak:"IBS No. 158 Costa Rica–Nicaragua s. 3–5 ('an arbitral award upholding the treaty of 1858')" },

{ t:"1867-07-01", devlet:"kanada", devletler:["kanada","abd"], sinir_id:"d1923-ca-us-dogu",
  b:"Kanada Dominyonu kuruldu — ABD ile doğu sınırı yeni devlete geçti", tur:"kurulus", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","kanada","abd","ingiliz-kuzey-amerika"],
  d:"Bir kraliyet bildirisiyle Kanada Dominyonu 1 Temmuz 1867'de kuruldu. Yeni devlet başlangıçta Nova Scotia, New Brunswick, Quebec ve Ontario'dan oluşuyordu. Bu yüzden ABD ile yalnız Atlantik'ten Lake of the Woods'a uzanan kesimi devraldı. Hat değişmedi; 49. paralel ile Pasifik kıyısı henüz İngiliz Kuzey Amerikası'nın öteki topraklarına aitti.",
  kaynak:"The Canadian Encyclopedia, Confederation timeline ('A royal proclamation declared that the Dominion of Canada would come into existence on July 1') · Canadian Heritage, Historical boundaries of Canada" },

{ t:"1867-10-18", devlet:"abd", devletler:["abd","rusya"], sinir_id:"g4-bna-us-141",
  b:"Alaska ABD'ye devredildi — 141. meridyen ABD'nin sınırı oldu", tur:"toprak-kazanc", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","abd","rusya","ingiliz-kuzey-amerika"],
  d:"30 Mart 1867'de satın alma antlaşması imzalandı ve ABD Senatosu onu 9 Nisan'da onayladı. Alaska 18 Ekim 1867'de resmen ABD'ye devredildi. 1825'ten beri Rus Amerikası ile İngiliz toprakları arasında olan 141. meridyen böylece ABD ile İngiliz Kuzey Amerikası arasındaki sınır oldu. Hattın kendisi değişmedi.",
  kaynak:"ABD Dışişleri Office of the Historian, Purchase of Alaska ('Alaska was formally transferred to the United States on October 18, 1867.')" },

{ t:"1870-07-15", devlet:"kanada", devletler:["kanada","abd"], sinir_id:"d1923-ca-us-prairie",
  b:"Rupert's Land Kanada'ya devredildi — 49. paralel sınırı Kanada'nın oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","kanada","abd","ingiliz-kuzey-amerika"],
  d:"Britanya Tacı, Hudson's Bay Company'nin eski toprağı Rupert's Land'i ve Kuzey-Batı Topraklarını 15 Temmuz 1870'te Kanada'ya devretti; aynı gün Manitoba beşinci eyalet oldu. Böylece Lake of the Woods'tan Kayalık Dağlar'a uzanan 49. paralel hattı Kanada–ABD sınırı hâline geldi. Hattın yeri değişmedi.",
  kaynak:"The Canadian Encyclopedia, Confederation timeline ('The British Crown officially transferred Rupert's Land and the North-Western Territory to Canada.')" },

{ t:"1870-07-15", devlet:"kanada", devletler:["kanada","abd"], sinir_id:"d1923-ca-us-141",
  b:"Kuzey-Batı Toprakları Kanada'ya geçti — Alaska sınırı (141. meridyen) Kanada'nın oldu", tur:"toprak-kazanc", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","kanada","abd","ingiliz-kuzey-amerika"],
  d:"15 Temmuz 1870 devriyle Kuzey-Batı Toprakları Kanada'nın oldu. Böylece 1867'den beri ABD'ye ait Alaska'yı İngiliz topraklarından ayıran 141. meridyen de Kanada–ABD sınırı hâline geldi. Hattın yeri değişmedi.",
  kaynak:"The Canadian Encyclopedia, Confederation timeline · ABD Dışişleri Office of the Historian, Purchase of Alaska" },

{ t:"1871-07-20", devlet:"kanada", devletler:["kanada","abd"], sinir_id:"d1923-ca-us-bati",
  b:"Britanya Kolumbiyası Kanada'ya katıldı — Pasifik kesimindeki 49. paralel Kanada'nın oldu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","kanada","abd","ingiliz-kuzey-amerika"],
  d:"Britanya Kolumbiyası 20 Temmuz 1871'de Kanada'nın altıncı eyaleti oldu. Böylece 1846 Oregon Antlaşması'nın Kayalık Dağlar'dan Pasifik'e çizdiği 49. paralel hattı Kanada–ABD sınırı hâline geldi. Hattın yeri değişmedi.",
  kaynak:"The Canadian Encyclopedia, Confederation timeline ('British Columbia entered Confederation as the sixth province.')" },

{ t:"1872-03-26", devlet:"brezilya-imparatorlugu", devletler:["brezilya-imparatorlugu","paraguay-cumhuriyeti"], sinir_id:"g3-br-imp-py",
  b:"Loizaga–Cotegipe Antlaşması yürürlüğe girdi — Brezilya–Paraguay sınırı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Asunción",
  etiket:["sinir","antlasma","konu-siyasi","brezilya-imparatorlugu","paraguay-cumhuriyeti"],
  d:"Paraguay Savaşı'ndan sonra 9 Ocak 1872'de Asunción'da imzalanan antlaşmanın onayları 26 Mart 1872'de Rio'da değiş tokuş edildi. Antlaşma sınırı Iguazú ağzından Apa ağzına kadar tarif etti. Karma komisyon işaretlemeyi 14 Kasım 1874'te bitirdi. Apa ağzının kuzeyindeki Paraguay nehri kesimi 1927'ye kadar antlaşmayla tanımlanmadı.",
  kaynak:"Ireland 1938 (Harvard UP) s. 121–123 ('the work of demarcation was finished November 14, 1874')" },

{ t:"1876-09-13", devlet:"arjantin-cumhuriyeti", devletler:["arjantin-cumhuriyeti","paraguay-cumhuriyeti"], sinir_id:"d1923-ar-py-nehirler",
  b:"Arjantin–Paraguay Sınır Antlaşması yürürlüğe girdi — Paraná ve Paraguay nehirleri sınır oldu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","arjantin-cumhuriyeti","paraguay-cumhuriyeti"],
  d:"3 Şubat 1876'da imzalanan antlaşmanın onayları 13 Eylül 1876'da değiş tokuş edildi. Antlaşma Paraná ve Paraguay nehirlerinde sınırı ana akımın orta kanalı olarak belirledi; Apipé Adası Arjantin'e, Yacyretá Paraguay'a kaldı. Pilcomayo ile Verde arasındaki Chaco bölgesi için hakemliğe gidildi; ABD Başkanı Hayes'in 1878 kararı Pilcomayo'yu sınır yaptı.",
  kaynak:"IBS No. 166 Argentina–Paraguay s. 4–7 ('by the mid-channel of the main stream of the Parana')" },

{ t:"1882-09-27", devlet:"meksika", devletler:["meksika","guatemala"], sinir_id:"d1923-mx-gt",
  b:"Meksika–Guatemala Sınır Antlaşması imzalandı — Guatemala, Chiapas ve Soconusco üzerindeki haklarından vazgeçti", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","meksika","guatemala"],
  d:"27 Eylül 1882 tarihli antlaşmanın 1. maddesiyle Guatemala, Chiapas ve Soconusco üzerindeki iddialarından vazgeçti; 3. madde hattı sekiz kesim hâlinde tarif etti. 1883 protokolüyle kurulan sınır komisyonları hattı sütun ve anıtlarla işaretledi ve bu iş Mayıs 1899'da bitti. Salinas (Chixoy) kesimindeki belirsizliği 1 Nisan 1895 sözleşmesi giderdi. Tarih imza günüdür; onay günü bulunamadı.",
  kaynak:"IBS No. 159 Guatemala–Mexico s. 3–5 ('By May 1899, the demarcation of the boundary with pillars or monuments was completed')" },

{ t:"1889-11-15", devlet:"brezilya-cumhuriyeti", devletler:["brezilya-cumhuriyeti","paraguay-cumhuriyeti"], sinir_id:"d1923-br-py",
  b:"Brezilya'da cumhuriyet ilan edildi — 1872 Paraguay sınırı Brezilya Cumhuriyeti'ne geçti", tur:"kurulus", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","brezilya-cumhuriyeti","brezilya-imparatorlugu","paraguay-cumhuriyeti"],
  d:"15 Kasım 1889'daki darbe monarşiyi devirdi ve Brezilya Birleşik Devletleri Cumhuriyeti'ni ilan etti. Paraguay ile sınır değişmedi. Bu hat 1872 Loizaga–Cotegipe Antlaşması'yla çizilmiş ve 1874'te işaretlenmişti; Iguazú ağzından Apa ağzına uzanıyordu. Apa ağzı ile Bahía Negra arasındaki Paraguay nehri kesimi 1927'ye kadar antlaşmayla tanımlanmadı.",
  kaynak:"Library of Congress, Brazil–U.S. Relations: First Republic ('On November 15, 1889, a coup d'état overthrew the monarchy') · Ireland 1938 (Harvard UP) s. 121–123" },

{ t:"1889-11-15", devlet:"brezilya-cumhuriyeti", devletler:["brezilya-cumhuriyeti","peru-cumhuriyeti"], sinir_id:"d1923-br-pe-tabatinga-apaporis",
  b:"Brezilya'da cumhuriyet ilan edildi — Peru ile Tabatinga–Apaporis hattı Brezilya Cumhuriyeti'ne geçti", tur:"kurulus", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","brezilya-cumhuriyeti","brezilya-imparatorlugu","peru-cumhuriyeti"],
  d:"15 Kasım 1889'da monarşinin devrilmesiyle Brezilya'nın Peru ile olan Tabatinga–Apaporis ağzı düz hattı cumhuriyete geçti; hattın yeri değişmedi. Hat 1851 sözleşmesine dayanıyordu (onaylar 18 Ekim 1852'de değiş tokuş edildi) ve 1866–1874 arasında işaretlenmişti. Kolombiya bu hat üzerindeki haklarını saklı tutuyordu. 1928'den sonra hat Brezilya–Kolombiya sınırı oldu.",
  kaynak:"Library of Congress, Brazil–U.S. Relations: First Republic · Ireland 1938 (Harvard UP) s. 125–130 · IBS No. 174 Brazil–Colombia" },

{ t:"1896-12-24", devlet:"honduras-cumhuriyeti", devletler:["honduras-cumhuriyeti","nikaragua-cumhuriyeti"], sinir_id:"d1923-hn-ni-bati",
  b:"Tegucigalpa Sınır Antlaşması yürürlüğe girdi — Honduras–Nikaragua sınırı için karma komisyon", tur:"antlasma", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","honduras-cumhuriyeti","nikaragua-cumhuriyeti"],
  d:"7 Ekim 1894'te imzalanan antlaşmanın onayları 24 Aralık 1896'da San Salvador'da değiş tokuş edildi. Antlaşma bir karma komisyon kurdu ve anlaşmazlık için tahkim öngördü. Komisyon 1900–1904 arasında Pasifik'ten Portillo de Teotecacinte'ye kadar olan batı kesimini işaretledi. Doğu kesimde uzlaşma sağlanamadı; o kesim 1906 İspanya Kralı kararına ve Nikaragua'nın bu karara itirazına kaldı.",
  kaynak:"IBS No. 36 Honduras–Nicaragua s. 5–8 ('From 1900 to 1904, the commission demarcated the western portion of the boundary')" },

{ t:"1900-05-26", devlet:"arjantin-cumhuriyeti", devletler:["arjantin-cumhuriyeti","brezilya-cumhuriyeti"], sinir_id:"d1923-ar-br",
  b:"Arjantin–Brezilya Sınır Antlaşması yürürlüğe girdi — Misiones anlaşmazlığı Cleveland kararıyla kapandı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","arjantin-cumhuriyeti","brezilya-cumhuriyeti"],
  d:"ABD Başkanı Cleveland'ın 5 Şubat 1895 hakem kararı, Misiones'teki tartışmalı bölgede Pepirí-Guazú ve San Antonio nehirlerini sınır olarak belirledi. Bu hat 6 Ekim 1898 antlaşmasıyla bütün sınıra yayıldı; onaylar 26 Mayıs 1900'de değiş tokuş edildi. Karma komisyon sınırı 1900–1904 arasında işaretledi. Quaraí ağzındaki Brasilera Adası kesimi 1927 sözleşmesiyle değişti.",
  kaynak:"IBS No. 168 Argentina–Brazil s. 5–11 ('the demarcation carried out throughout the whole extent of the frontier is accepted')" },

{ t:"1917-01-26", devlet:"kolombiya-cumhuriyeti", devletler:["kolombiya-cumhuriyeti","ekvador-cumhuriyeti"], sinir_id:"d1923-co-ec",
  b:"Muñoz Vernaza–Suárez Antlaşması yürürlüğe girdi — Kolombiya–Ekvador sınırı çizildi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Bacatá (Bogotá)",
  etiket:["sinir","antlasma","konu-siyasi","kolombiya-cumhuriyeti","ekvador-cumhuriyeti"],
  d:"15 Temmuz 1916'da Bogotá'da imzalanan antlaşma, sınırı Pasifik'teki Mataje ağzından başlatıp San Miguel ve Putumayo nehirleri boyunca doğuya uzattı. Ekvador 23 Eylül, Kolombiya 6 Aralık 1916'da onayladı; onaylar 26 Ocak 1917'de Bogotá'da değiş tokuş edildi. Karma komisyon 16 Temmuz 1917'de Quito'da toplanıp işaretlemeyi 9 Temmuz 1919'da Cartagena'da bitirdi. Hattın Güepí'nin doğusundaki kısmı, 1928'de yürürlüğe giren Kolombiya–Peru antlaşmasıyla Peru'ya geçti.",
  kaynak:"Ireland 1938 (Harvard UP) s. 183–185 ('ratifications exchanged at Bogota, Jan. 26, 1917') · Cancillería de Colombia, Frontera terrestre Colombia–Ecuador" },

];
