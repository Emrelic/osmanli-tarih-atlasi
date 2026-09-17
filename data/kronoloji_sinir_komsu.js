// =====================================================================
// SINIR KRONOLOJİSİ — D2-KOMSU (Türkiye'nin komşularının öteki sınırları)
// =====================================================================
// window.KRONOLOJI_SINIR_KOMSU — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_komsu.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği (şartname: "iki devletin kimliği de maddede")
//   sinir_id  : d_sinirlar_komsu.js kayıt kimliği (önek eşleşmesi: -1/-2 parçaları dahil)
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM: GERİYE SARMA G1 penceresi (1918-11-11 → 1923-10-29). C ve YOK
// değişiklikleri (Lozan Meriç kesimi · Büyükelçiler Konferansı 1921 · Ukayr ·
// Irak–Kuveyt notası · Sovyet-İran 1921) şartname gereği madde ALMADI.
//
// KAYNAK (§4): IBS = ABD Dışişleri International Boundary Study
// (library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibsNNN.pdf, metin
// katmanı okundu) · TDV maddeleri bu oturumda çekildi ve gövdesi okundu
// (yugoslavya · bulgaristan · bati-trakya · irak--ulke, dördü de HTTP 200).
// Neuilly Antlaşması'nın YÜRÜRLÜK GÜNÜ okunabilir bir akademik kaynakta
// bulunamadı (Oxford PIL · Britannica · AustLII 403) ⇒ ilgili madde YIL düzeyinde.

window.KRONOLOJI_SINIR_KOMSU = [

{ t:"1918-12-01", devlet:"yugoslavya", devletler:["yugoslavya","yunanistan"], sinir_id:"d1923-gr-shs",
  b:"Sırp-Hırvat-Sloven Krallığı kuruldu — Yunanistan'ın kuzey sınırı yeni devlete geçti", tur:"kurulus", onem:4, dunya:4, kapsam:"dis", yer_id:"Belgrad",
  etiket:["sinir","konu-siyasi","yunanistan","yugoslavya","sirbistan-kralligi"],
  d:"Sırbistan ile Habsburg'dan ayrılan Güney Slav toprakları 1 Aralık 1918'de Sırp-Hırvat-Sloven Krallığı adıyla birleşti. Sırbistan'ın 1913 Bükreş Antlaşması ile çizilip aynı yıl işaretlenen Yunanistan sınırı değişmeden yeni devletin sınırı oldu. Gevgeli çevresindeki kısa kesimin yorum anlaşmazlığı 1927'ye kadar sürdü.",
  kaynak:"TDV yugoslavya (1 Aralık 1918) · IBS No. 79 Greece–Yugoslavia (1913 komisyonu; Gevgeli 1927)" },

{ t:"1920-01-01", devlet:"bulgaristan-kralligi", devletler:["bulgaristan-kralligi","yugoslavya"], sinir_id:"d1923-bg-shs",
  b:"Neuilly Antlaşması'nın Bulgaristan–SHS sınırı: Çariçin, Bosilegrad ve Ustrumca SHS'ye", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Ustrumca (Strumica)",
  etiket:["sinir","antlasma","konu-siyasi","bulgaristan-kralligi","yugoslavya"],
  d:"27 Kasım 1919'da imzalanan Neuilly Antlaşması (md. 27(1), 37, 38) Bulgaristan'ın batı sınırını su bölümü çizgisinden ayırarak Çariçin, Bosilegrad ve Ustrumca bölgelerini SHS'ye bıraktı. Hattı uluslararası bir komisyon 1920–1922'de 1:25.000 ölçekli 29 paftayla işaretledi. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir akademik kaynakta bulunamadı.",
  kaynak:"TDV bulgaristan (Neuilly 27 Kasım 1919) · IBS No. 130 Bulgaria–Yugoslavia (komisyon 1920–22; 'as it is today, was defined by the Treaty') · Neuilly metni md. 27-38 (wwi.lib.byu.edu)" },

{ t:"1921-01-01", devlet:"yunanistan", devletler:["yunanistan","bulgaristan-kralligi"], sinir_id:"d1923-gr-bg-dogu",
  b:"Batı Trakya'da Yunan–Bulgar sınırı işaretlendi (fiilî hat)", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Gümülcine",
  etiket:["sinir","konu-siyasi","yunanistan","bulgaristan-kralligi","bati-trakya"],
  d:"Yunan-Bulgar Sınır Tahdit Komisyonu 1921'de Neuilly Antlaşması'nın (md. 27(3)) çizdiği Rodoplar su bölümü hattını taşlarla işaretledi. Batı Trakya 15 Ekim 1919'da Fransız, 22 Mayıs 1920'de Yunan işgaline girmişti. Ancak Neuilly (md. 48) bölgeyi Müttefiklere bıraktığı ve Yunanistan'a devreden 10 Ağustos 1920 Trakya Antlaşması Lozan'a bağlandığı için 1923 sonuna kadar Yunan tarafının hukukî dayanağı yürürlükte değildi. Bu yüzden hat fiilî (D) sayıldı. Gün bilinmiyor.",
  kaynak:"IBS No. 56 Bulgaria–Greece s.11-12 (1921 komisyonu) · TDV bati-trakya (15 Ekim 1919, 22 Mayıs 1920) · Trakya Antlaşması, UK Treaty Series 1921 No. 13 · Lozan XVI. Protokolü (mfa.gov.tr)" },

{ t:"1921-08-23", devlet:"irak-kralligi", devletler:["irak-kralligi","kacar"], sinir_id:"d1923-iq-ir",
  b:"Irak Krallığı kuruldu — 1913/14 Osmanlı-İran sınırı Irak'a geçti", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"Bağdat",
  etiket:["sinir","konu-siyasi","irak-kralligi","kacar","osmanli"],
  d:"Faysal 23 Ağustos 1921'de İngiliz desteğiyle Irak tahtına çıktı. İran ile sınır, 1913 İstanbul Protokolü ve 1914 komisyonunun direklerle işaretlediği Osmanlı-İran hattı olarak kaldı. İran bu hattın geçerliliğine sonradan (1934–35) itiraz etti. Şattülarap kesimi 1937 ve 1975'te değişti.",
  kaynak:"TDV irak--ulke ve faysal-i (23 Ağustos 1921) · IBS No. 164 Iran–Iraq (1914 işaretlemesi; 1934–35 itirazı; 1937 ve 1975 değişiklikleri)" },

{ t:"1923-03-07", devlet:"filistin-mandasi", devletler:["filistin-mandasi","suriye-lubnan-mandasi"], sinir_id:"d1923-fi-lb",
  b:"Paulet–Newcombe sınır raporu imzalandı — Filistin ile Suriye-Lübnan arasındaki hat", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","filistin-mandasi","suriye-lubnan-mandasi"],
  d:"23 Aralık 1920 Fransız-İngiliz Sözleşmesi'ne dayanan karma komisyonun 3 Şubat 1922 tarihli nihai raporu Akdeniz'den el-Hamme'ye uzanan hattı üç paftayla çizdi ve 7 Mart 1923'te Paris'te imzalandı. Lübnan kesiminde 38 kalıcı direk 1922'de dikilmişti. Yürürlük ve toprak devri günü bulunamadı. Hattın yerleşim kaydı yok: sınır boyunda (Nakura–Hasbani) atlasta nokta bulunamadı.",
  kaynak:"IBS No. 75 Israel–Lebanon (Cmd. 1910; 22 LNTS 364; 'erected in 1922 by a mixed Anglo-French commission') · PalQuest 'Palestine-Lebanon border'" },

// ── GERİYE SARMA G3 (1878-07-13 → 1914-07-28) ─────────────────────────

{ t:"1878-12-17", devlet:"bulgaristan-prensligi", devletler:["bulgaristan-prensligi","romanya"], sinir_id:"g3-bg-ro-dobruca-p1",
  b:"Avrupa Komisyonu Romanya–Bulgaristan Dobruca sınırını çizdi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Silistre",
  etiket:["sinir","konu-siyasi","bulgaristan-prensligi","romanya","dobruca"],
  d:"Berlin Antlaşması (md. XLVI) Dobruca'daki sınırı yalnız 'Silistre'nin doğusundan Mangalya'nın güneyine' diye tarif etmiş, ayrıntıyı bir Avrupa komisyonuna bırakmıştı. Komisyonun 17 Aralık 1878'de İstanbul'da imzalanan senedi hattı metin, ölçüm cetvelleri ve 1:30.000 ölçekli haritayla belirledi. Bu hat 1880'de Silistre yakınında değişti ve 1902'de Mangalya'da kayda geçirildi. Bugünkü Romanya–Bulgaristan kara sınırı büyük ölçüde budur.",
  kaynak:"IBS No. 53 Bulgaria–Romania s.6-7 (Berlin md. XLVI; Avrupa Komisyonu Senedi 17 Aralık 1878, Hertslet IV s.2825)" },

{ t:"1880-01-01", devlet:"bulgaristan-prensligi", devletler:["bulgaristan-prensligi","romanya"], sinir_id:"g3-bg-ro-dobruca-p2",
  b:"Silistre yakınında (Arap Tabya) Romanya–Bulgaristan sınırı Bulgaristan lehine düzeltildi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Silistre",
  etiket:["sinir","konu-siyasi","bulgaristan-prensligi","romanya","dobruca"],
  d:"Berlin Antlaşması'na taraf devletler Ağustos–Eylül 1880'deki nota değişimiyle 1878 senedinin 6. ve 7. maddelerini değiştirdi. Silistre–Karaorman yolu Bulgaristan'da bırakıldı, Arap Tabya tepesi Romanya'da kaldı. Tarih yalnız YIL düzeyindedir; ay metindedir, gün bilinmiyor.",
  kaynak:"IBS No. 53 Bulgaria–Romania s.6 (Hertslet IV s.2996: 'altered the original boundary near Silistra in favor of Bulgaria')" },

{ t:"1891-01-01", devlet:"kacar", devletler:["kacar","afganistan"], sinir_id:"d1923-ir-af-kuzey",
  b:"MacLean hakem kararı: İran–Afganistan kuzey sınırı 39 direkle işaretlendi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Herat",
  etiket:["sinir","konu-siyasi","kacar","afganistan","hakem-karari"],
  d:"Herat ile İran arasındaki kuzey sınır anlaşmazlığı 1857 Paris Antlaşması (md. VI) gereği İngiliz hakemliğine götürüldü. General C. S. MacLean 1888–1891 arasında iki tarafın delillerini inceleyip bir uzlaşma hattı çizdi. Hat Rus üçlü noktasından 34°20′ kuzey enlemine kadar Herirud ve 39 direkle işaretlendi. Tarih yalnız YIL düzeyindedir (çalışmanın bittiği yıl).",
  kaynak:"IBS No. 6 Afghanistan–Iran s.2-3 ('Between 1888 and 1891 Major General C.S. MacLean … laid down a compromise boundary')" },

{ t:"1905-05-15", devlet:"kacar", devletler:["kacar","afganistan"], sinir_id:"d1923-ir-af-guney",
  b:"McMahon komisyonu Sistan'da İran–Afganistan sınırını 90 işaretle tamamladı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Zerenc (Sîstan)",
  etiket:["sinir","konu-siyasi","kacar","afganistan","hakem-karari"],
  d:"Hilmend'in 1896'da yatak değiştirmesi Goldsmid'in 1872 hakem kararını işlemez kıldı ve mesele yeniden İngiliz hakemliğine gitti. Albay Henry McMahon'un Kasım 1903 kararı sınırı Malik Siyah dağından Hilmend yatağı boyunca Siah Koh'a çizdi. Komisyon Şubat 1903'te başladığı işaretlemeyi 15 Mayıs 1905'te 90 işaretle bitirdi.",
  kaynak:"IBS No. 6 Afghanistan–Iran s.3, 11-12 ('By May 15, 1905, the McMahon Commission had placed 90 markers')" },

{ t:"1908-10-05", devlet:"bulgaristan-kralligi", devletler:["bulgaristan-kralligi","romanya-kralligi"], sinir_id:"g3-bg-ro-dobruca-p4",
  b:"Bulgaristan bağımsızlığını ilan etti — Romanya ile sınırı artık bağımsız krallığın sınırı", tur:"kurulus", onem:5, dunya:3, kapsam:"dis", yer_id:"Sofya",
  etiket:["sinir","konu-siyasi","bulgaristan-kralligi","romanya-kralligi","bagimsizlik"],
  d:"Bulgaristan 5 Ekim 1908'de bağımsızlığını ilan etti ve hükümdarı çar unvanını aldı. Berlin'den beri Osmanlı'ya tâbi bir prenslik olan devletin Romanya ile Tuna ve Dobruca sınırı değişmeden bağımsız krallığın sınırı oldu.",
  kaynak:"TDV bulgaristan ('Bulgaristan 5 Ekim 1908 tarihinde bağımsızlığını ilân ettikten sonra') · IBS No. 53" },

{ t:"1913-08-10", devlet:"romanya-kralligi", devletler:["romanya-kralligi","bulgaristan-kralligi"], sinir_id:"g3-bg-ro-dobruca-p4",
  b:"Bükreş Antlaşması: Güney Dobruca Romanya'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Bükreş",
  etiket:["sinir","antlasma","konu-siyasi","romanya-kralligi","bulgaristan-kralligi","ikinci-balkan-savasi"],
  d:"İkinci Balkan Savaşı'nı bitiren Bükreş Antlaşması (md. II ve ek protokol) Romanya–Bulgaristan sınırını Tuna'da Turtukaya'nın yukarısından Karadeniz'de Ekrene'nin güneyine taşıdı. Güney Dobruca Romanya'ya geçti. Berlin'den beri süren Silistre–Mangalya hattı bu günde sona erdi. Yeni hattın koordinatı elde olmadığı için haritada çizgi olarak gösterilmez.",
  kaynak:"IBS No. 53 Bulgaria–Romania s.7 (Bükreş 10 Ağustos 1913; onay teatisi IBS'e göre 25 Ağustos) · Bükreş Antlaşması metni md. II ('begin at the Danube above Turtukaia')" },

{ t:"1913-08-10", devlet:"yunanistan", devletler:["yunanistan","sirbistan-kralligi"], sinir_id:"g1-gr-srb",
  b:"Bükreş Antlaşması: Yunanistan–Sırbistan sınırı doğdu", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Selanik",
  etiket:["sinir","antlasma","konu-siyasi","yunanistan","sirbistan-kralligi","ikinci-balkan-savasi"],
  d:"Balkan Savaşları'nda Osmanlı'dan alınan Makedonya'nın paylaşılmasıyla Yunanistan ile Sırbistan ilk kez komşu oldu. Bükreş Antlaşması'nın ardından Selanik'te toplanan Sırp-Yunan sınır komisyonu hattı 10 Ağustos–27 Aralık 1913 arasında işaretledi ve protokolünü 7 Aralık 1913'te imzaladı. Gevgeli çevresindeki kısa kesimin yorum anlaşmazlığı 1927'ye kadar sürdü. IBS 79'daki 'June 1912' ifadesi kronolojiyle çeliştiği için kullanılmadı.",
  kaynak:"IBS No. 79 Greece–Yugoslavia (Bükreş 1913; Selanik komisyonu 7 Aralık 1913; Gevgeli 1927)" },

{ t:"1913-08-10", devlet:"yunanistan", devletler:["yunanistan","bulgaristan-kralligi"], sinir_id:"d1923-gr-bg-bati",
  b:"Bükreş Antlaşması: Yunanistan–Bulgaristan sınırı Belasica'dan Rodoplar'a çizildi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Selanik",
  etiket:["sinir","antlasma","konu-siyasi","yunanistan","bulgaristan-kralligi","ikinci-balkan-savasi"],
  d:"Bükreş Antlaşması'nın V. maddesine ekli protokol Yunan–Bulgar sınırını Belasica sırtından Struma'yı ve Mesta'yı geçerek Rodoplar'daki Debikli'ye kadar tarif etti. Bu kesim Neuilly'de korundu ve 1921'de işaretlendi; bugünkü sınırın batı kısmıdır. Debikli'den Ege'ye inen 1913 kolu 1919'da kalktı ve koordinatı elde yok.",
  kaynak:"IBS No. 56 Bulgaria–Greece s.11-12 (Bükreş md. V protokolü; 'essentially that formed by the Treaty of Bucharest … eastward to point 1587')" },

{ t:"1913-11-17", devlet:"kacar", devletler:["osmanli","kacar"], sinir_id:"g1-osm-ir",
  b:"İstanbul Protokolü: Osmanlı–İran sınırı ayrıntılı olarak çizildi (Irak kesimi)", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Kasr-ı Şîrîn",
  etiket:["sinir","antlasma","konu-siyasi","osmanli","kacar"],
  d:"İngiltere ve Rusya'nın aracılığıyla imzalanan İstanbul Protokolü Osmanlı–İran sınırını baştan sona tarif etti. Şattülarap'ı (Muhammere bölgesi hariç) Osmanlı egemenliğinde bıraktı. Dört devletin komisyonu Kasım 1913 – Ekim 1914 arasında hattı direklerle işaretledi. IBS 164 protokolün gününü metinde 17 Kasım, antlaşma listesinde 4 Kasım 1913 olarak veriyor; çelişki çözülmedi. Bu madde hattın bugünkü Irak kesimini anlatır.",
  kaynak:"IBS No. 164 Iran–Iraq (Constantinople Protocol, 1914 komisyonu; 'The boundary is demarcated throughout by pillars or rivers')" },

// ── GERİYE SARMA G3 eki + G4 + G5: RUS–İRAN ───────────────────────────
// Hatlar bugünkü çizgiyle gösterilemiyor (1954 sonrası değişti) ⇒ d_sinirlar_komsu.js'te YOK
// kutuları; hukukî değişiklik yine de madde alır. Rus tarihleri IBS'te tek yazıldığında
// Jülyen olabilir (D110) — metinde belirtildi.

{ t:"1813-01-01", devlet:"kacar", devletler:["kacar","rusya"], sinir_id:"g5-rus-ir-DEGISTI-gulistan",
  b:"Gülistan Antlaşması: Kafkasya'daki hanlıklar Rusya'ya bırakıldı", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","kacar","rusya"],
  d:"1804–1813 Rus-İran savaşının sonunda imzalanan Gülistan Antlaşması (md. II) ile İran Gence, Şeki, Şirvan, Bakü, Karabağ, Derbend, Kuba ve Talış hanlıklarını Rusya'ya bıraktı (TDV azerbaycan ve feth-ali-sah birlikte). Revan ve Nahçıvan hanlıkları İran'da kaldı. Tarih yalnız YIL düzeyindedir: IBS 25 imzayı 12 Ekim 1813 (onay 15 Eylül 1814, Tiflis), TDV 24 Kasım 1813 veriyor. Fark çözülmedi; 12 Ekim Jülyen takvimine göre olabilir. Hattın koordinatı elde yok.",
  kaynak:"IBS No. 25 Iran–U.S.S.R. s.4, 11 (BFSP 5:1109) · TDV feth-ali-sah ('24 Kasım 1813') · TDV azerbaycan ve iran (1813)" },

{ t:"1828-02-22", devlet:"kacar", devletler:["kacar","rusya"], sinir_id:"g4-rus-ir-DEGISTI-aras-talis",
  b:"Türkmençay Antlaşması: Revan ve Nahçıvan Rusya'ya, Aras sınır oldu", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","kacar","rusya"],
  d:"1826–1828 savaşını bitiren Türkmençay Antlaşması (md. IV) ile Revan ve Nahçıvan hanlıkları Rusya'ya geçti. Aras nehri Hazar'ın batısında iki devletin sınırı oldu. Rusya'ya Abbasabad karşısında Aras'ın sağ kıyısında bir köprübaşı bırakıldı; burası 1893'e kadar Rusya'da kaldı. TDV ve IBS 10 Şubat 1828 veriyor; bu Rus (Jülyen) takvimidir, 19. yüzyılda +12 gün ile Gregoryen 22 Şubat 1828 eder. Bugünkü hat 1954–1970 değişiklikleri yüzünden 1828 hattını göstermez.",
  kaynak:"TDV feth-ali-sah ('Türkmençay Antlaşması imzalandı (10 Şubat 1828)') · TDV revan · IBS No. 25 s.4, 11 (BFSP 15:669)" },

{ t:"1869-12-13", devlet:"kacar", devletler:["kacar","rusya"], sinir_id:"g4-rus-ir-DEGISTI-atrek",
  b:"Rus-İran anlaşması: aşağı Atrek nehri Hazar doğusunda sınır sayıldı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","kacar","rusya"],
  d:"Rusya'nın Hazar ötesindeki ilerleyişi İran sınırına dayanınca 13 Aralık 1869 tarihli anlaşma aşağı Atrek'i, Hazar kıyısından doğuya yaklaşık 30 millik bir kesimde, iki devletin sınırı olarak tanıdı. Tarih IBS'te tek yazılmıştır, Jülyen olabilir.",
  kaynak:"IBS No. 25 s.4, 12 ('recognizing the Atrek River as the boundary, December 13, 1869')" },

{ t:"1881-12-21", devlet:"kacar", devletler:["kacar","rusya"], sinir_id:"g4-rus-ir-DEGISTI-hazar-serahs",
  b:"Ahal-Horasan Sözleşmesi: Rus-İran sınırı Babadurmaz'a kadar çizildi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","kacar","rusya"],
  d:"9/21 Aralık 1881 sözleşmesinin I. maddesi Hazar doğusundaki sınırı Atrek'ten Aşkabat'ın doğusundaki Babadurmaz'a kadar çizdi ve 1869 Atrek hattını teyit etti. Ardından gelen protokoller küçük toprak değişiklikleri ve daha ayrıntılı tahdit getirdi.",
  kaynak:"IBS No. 25 s.4, 12 ('Convention between Persia and Russia of December 9 - 21, 1881')" },

{ t:"1893-06-08", devlet:"kacar", devletler:["kacar","rusya"], sinir_id:"g3-rus-ir-DEGISTI-hazar-serahs-1893",
  b:"Tahran Sözleşmesi: Rus-İran sınırı Afgan üçlü noktasına uzatıldı, Abbasabad köprübaşı İran'a döndü", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Serahs",
  etiket:["sinir","antlasma","konu-siyasi","kacar","rusya"],
  d:"27 Mayıs/8 Haziran 1893 Tahran Sözleşmesi Hazar doğusundaki sınırın kalanını Babadurmaz'dan Afganistan üçlü noktasına kadar çizdi ve toprak değişimi öngördü. Rusya Firuze'yi aldı; Türkmençay'dan beri elinde tuttuğu Abbasabad köprübaşını İran'a bıraktı.",
  kaynak:"IBS No. 25 s.4-5, 12 (BFSP 86:1246; 'a concession the Russians held until 1893'; 'Firyuza … which the Russians had received in 1893')" },

// ── GERİYE SARMA G6: RUS–SAFEVÎ HAZAR KIYISI ──────────────────────────
// İki TDV maddesi çelişiyor (yıl 1723/1724; Derbend-Bakü'nün iadesi Reşt 1732 / Gence 1735).
// Taraf seçilmedi, çelişki metinde.

{ t:"1723-09-23", devlet:"safevi", devletler:["safevi","rusya"], sinir_id:"g6-rus-safevi-DEGISTI-hazar-kiyisi-1723",
  b:"Petersburg Antlaşması: Derbend, Bakü ve Hazar'ın güney kıyıları Rusya'ya bırakıldı", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","safevi","rusya"],
  d:"İran'daki karışıklıktan yararlanan I. Petro Ağustos 1722'de Derbend'i işgal etti. 12 Eylül 1723'te Petersburg'da imzalanan antlaşma ile Derbend, Bakü ve Hazar'ın güney kıyılarının büyük bölümü Rusya'ya bırakıldı. TDV'nin dagistan maddesi bu antlaşmayı 1724'e koyuyor. Gün: TDV derbend--dagistan '12 Eylül 1723' veriyor; bu Rus (Jülyen) takvimidir, 18. yüzyılda +11 gün ile Gregoryen 23 Eylül 1723 eder. Hattın koordinatı yok.",
  kaynak:"TDV derbend--dagistan ('12 Eylül 1723’te Petersburg’da imzalanan antlaşma') · TDV baku ('1723’te I. Petro tarafından Rus topraklarına katıldı') · TDV dagistan (1724 — çelişki)" },

{ t:"1732-01-01", devlet:"safevi", devletler:["safevi","rusya"], sinir_id:"g6-rus-safevi-DEGISTI-hazar-kiyisi-1732",
  b:"Reşt Antlaşması: Rusya Hazar kıyısındaki toprakların bir kısmını İran'a iade etti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","safevi","rusya","nadir-sah"],
  d:"Nâdir'in Ruslara karşı yürüttüğü mücadele sonunda 1732'de Reşt Antlaşması imzalandı. TDV dagistan maddesine göre bu antlaşmayla Dağıstan'ın güneyi, Derbend ve Bakü İran'a geçti. TDV derbend--dagistan ise Derbend ile Bakü'nün iadesini 1735 Gence Antlaşması'na bağlıyor. Çelişki çözülmedi. Tarih yalnız YIL düzeyindedir.",
  kaynak:"TDV dagistan ('1732’de imzalanan Reşt Antlaşması’yla') · TDV derbend--dagistan (iade 1735 — çelişki)" },

{ t:"1735-01-01", devlet:"safevi", devletler:["safevi","rusya"], sinir_id:"g6-rus-safevi-DEGISTI-hazar-kiyisi-1732",
  b:"Gence Antlaşması: Rusya Hazar kıyısından çekildi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","safevi","rusya","nadir-sah"],
  d:"Osmanlı ve Kırım'ın Dağıstan'daki faaliyetleri ve İran'da merkezî idarenin güçlenmesi Rusya'yı 1735 Gence Antlaşması'na zorladı. TDV derbend--dagistan'a göre Derbend, Bakü ve Hazar kıyısındaki öteki bölgeler İran'a geri verildi. TDV dagistan ise bu antlaşmaya Sulak ile Kura arasındaki bazı toprakları bağlıyor. Tarih yalnız YIL düzeyindedir.",
  kaynak:"TDV derbend--dagistan ('1735 Gence Antlaşması’nı imzalamaya zorladı') · TDV dagistan ('1735 tarihli antlaşma ile de Sulak ve Kura')" },

// ── GERİYE SARMA G8–G10 (1606 → 1281) ────────────────────────────────
// Bölgede Türkiye dışı ÇİZGİSEL hukukî sınır yok ⇒ hat kaydı YOK (kapsam notu). Aday
// olaylar mevcut 104 olaylar*/kronoloji* dosyasında sayıldı (6698 madde); yalnız EKSİK
// olan yazıldı. sinir_id: null — hat kaydına bağlı değil (kapsam notu: "madde yine yazılabilir").

{ t:"1330-07-28", devlet:"sirbistan-nemanjic", devletler:["sirbistan-nemanjic","bulgar-carligi"], sinir_id:null,
  b:"Velbujd Savaşı: Bulgar Çarı Mihail öldü, Köstendil çevresi Sırp hâkimiyetine geçti", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"Köstendil",
  etiket:["sinir","savas","konu-askeri","sirbistan-nemanjic","bulgar-carligi"],
  d:"28 Temmuz 1330'da Köstendil (Velbujd) yakınında Bulgar Çarı Mihail ile Sırp Kralı Stefan Deçanski karşılaştı. Mihail tahtını ve hayatını kaybetti. TDV'ye göre bu tarihten Osmanlı dönemine kadar şehir ve çevresi Sırp hâkimiyetinde kalmış olmalıdır. Kaynak ihtiyatlı konuşuyor; bir antlaşma ya da çizgi yok, harita burada A/B'de kalır.",
  kaynak:"TDV kostendil ('28 Temmuz 1330’da Bulgar Çarı Michael’in Sırp Kralı Stefan Deçanski ile çarpışarak'; 'Sırp hâkimiyetinde kalmış olmalıdır')" },

];
