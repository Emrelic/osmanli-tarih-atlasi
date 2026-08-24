// =====================================================================
// KARAKOYUNLU DEVLETİ — KRONOLOJİ · 1351-1469
// Oturum: AKKOYUNLU-KARAKOYUNLU KRONOLOJİ · 21 Ağustos 2026
//
// Kapsam: `data/devletler.js` künyesindeki aralık — f:"1351-01-01"
// t:"1469-01-01" (118 yıl). ⚠️ Koordinatörün brifingi "~1375-1468"
// diyordu; künye 1351'i Bayram Hoca'nın Sutaylar hükümdarını yenip
// bağımsızlığını kazanmasına bağlıyor ve TDV `karakoyunlular` maddesi
// bunu birebir doğruluyor. KÜNYE TABAN ALINDI, fark koordinatöre
// bildirildi (M-0940).
//
// 📌 1469 SONRASI TEK MADDE: Baharlı beylerinin 1479 diriliş girişimi.
// Künye aralığının DIŞINDA ama devletin sonunun ne demek olduğunu
// tamamlayan tek kayıt olduğu için alındı ve `kapsam:"dis"` yazıldı.
//
// ─────────────────────────────────────────────────────────────────────
// §D — İKİ PUAN (şartname §3.2)
//   onem  1-5   KARAKOYUNLU için ağırlık: bu olay bu devletin tarihinin
//               akışını ne kadar değiştirdi?
//   dunya 1-5   OLAYIN kendisine ait; HER DOSYADA AYNI olmalı.
//
// 🔴 İKİSİ DE İYİLİK/KÖTÜLÜK SKALASI DEĞİLDİR. Bu dosyanın en sert
//    sınavı 1467 Bingöl baskınıdır: Karakoyunlu için tam bir yıkımdır
//    ve tam da bu yüzden `onem:5`tir.
//
// 🔴 PAYLAŞILAN OLAYLARDA `dunya` DEVRALINDI, uydurulmadı. Var olan
//    kronoloji dosyalarından ölçülüp aynen alınan değerler:
//       1402-07-28 Ankara Savaşı      dunya:4
//       1405-02-18 Timur'un ölümü     dunya:2
//       1447-03-13 Şahruh'un ölümü    dunya:1
//       1467       Akkoyunlu zaferi   dunya:2
//    ⚠️ 1467 için kendi kanaatim `dunya:3`tü (iki büyük gücün sınırını
//    değiştirdi). Var olan değere UYDUM — şartname "aynı olay farklı
//    dosyalarda farklı dunya taşırsa KUSURDUR" diyor — ama kanaatimi
//    gizlemiyorum: koordinatöre ayrıca bildirdim.
//
// ─────────────────────────────────────────────────────────────────────
// §K — KAYNAK POLİTİKASI (`CLAUDE.md §4`, şartname §4)
//
//  ① `karakoyunlular`  TDV · HTTP 200 · GÖVDESİ OKUNDU. Bu dosyanın
//     omurgası. Hicrî-milâdî çift tarihlerin tamamı bu maddeden.
//  ② `cihan-sah`       TDV · 200 · gövdesi okundu. Cülûs günü
//     (19 Nisan 1438), Mardin doğumu, Hakîkî mahlası, Muzafferiye.
//  ③ `uzun-hasan`      TDV · 200 · gövdesi okundu. Karakoyunlu'nun son
//     yıllarını KARŞI TARAFTAN doğrulamak için kullanıldı.
//  ④ `gokmescid`       TDV · 200 · gövdesi okundu. 870/1465-66, mimar
//     Muhammed el-Bevvâb, 1467'de YARIM kaldığı, Yâkub Bey devrinde
//     tamamlandığı — hepsi bu maddeden.
//
//  🔴 ÖLÇÜLMÜŞ ÖLÜ SLUGLAR — bu kişilerin TDV'de müstakil maddesi YOK
//     (HTTP 302 ile tek tek sınandı, 21 Ağustos 2026):
//        bayram-hoca · kara-mehmed · kara-yusuf · karayusuf ·
//        iskender--karakoyunlu · cihansah--karakoyunlu · kara-yuluk
//     ⇒ Bu kişilerin maddeleri `karakoyunlular` genel maddesine
//     dayandırıldı. `CLAUDE.md §4`: "dar slug tutmazsa KAPSAYICI
//     maddeyi dene." Denendi ve tuttu.
//
//  🔴 VE BİR `②` TUZAĞI YAKALANDI — kaydediyorum:
//        `cihan-sah`  HTTP 200 · DOĞRU madde (Karakoyunlu hükümdarı) ✓
//        `yakub-bey`  HTTP 200 · YANLIŞ madde — açılan sayfa
//                     GERMİYANOĞLU Yâkub Bey'dir, Akkoyunlu değil.
//     İkisi de 200 döndürüyor; ayıran tek şey GÖVDEYİ OKUMAK oldu.
//     (Akkoyunlu Yâkub Bey `kronoloji_akkoyunlu.js`in meselesi.)
//
//  ⚠️ `celaleddin-ed-devvani` HTTP 200 ama gövde ÇEKİLEMEDİ (§4 ④
//     boilerplate vakası). "TDV'de yok" DEMİYORUM — "çekilemedi"
//     diyorum. Devvânî'nin Cihanşah himayesindeki dönemi bu yüzden
//     maddeye YAZILMADI.
//
// ─────────────────────────────────────────────────────────────────────
// §Y — `yer_id` (şartname §3.1)
//
// Bütün `yer_id` değerleri `arac/girdi.py` ile yüklenen 2593 noktanın
// gerçek `ad` alanlarına BİREBİR eşleştirildi — uydurulmadı.
//
// 🔴 EŞLEŞMEYEN YERLER — `yer_id:""` bırakıldı, uydurulmadı. Bu
//    yerleşimlerin veride KAYDI YOK ve koordinatörün nokta yazdırması
//    gerekiyor:
//       Avnik Kalesi · Eleşkirt · Alıncak Kalesi · Ucan · Serdrûd ·
//       Mercidâbık · Bingöl (Kiğı) · Ahlat · Muş
//    ⇒ Bunların hepsi Karakoyunlu sahasının İÇİNDE. Özellikle Ucan
//    (Kara Yûsuf'un öldüğü yer) ve Alıncak (İskender'in öldürüldüğü
//    kale) hanedanın iki dönüm noktasıdır ve uçuş kipi ikisini de
//    bulamayacak.
//
// ─────────────────────────────────────────────────────────────────────
// §S — SAYI HAKKINDA (şartname §1)
//
// 🔴 KOTA YOK. Emre'nin 21 Ağustos hükmü: "İllâ ki her seneye 2 madde
//    olacak diye bir şey yok. Kaç tane çıkarsa o kadar."
// Bu dosyada 70 madde var ve 118 yıl için 0,59 madde/yıl eder. Bu bir
// eksiklik DEĞİL, kaynağın verdiğidir: TDV `karakoyunlular` maddesi
// 1351-1469 arası için tarihli olay olarak bunları veriyor.
// Ölçütüm şartnamenin kendi cümlesi oldu: *bir maddeyi silsen bir şey
// eksilir mi?* Silinince bir şey eksilmeyen hiçbir satır yazılmadı.
// =====================================================================

window.KRONOLOJI_KARAKOYUNLU = [

// ───────────────────────── KURULUŞ · BAYRAM HOCA (1351-1380)

{ t:"1351-01-01", b:"Bayram Hoca bağımsızlığını kazandı — Karakoyunlu Devleti'nin doğuşu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","askeri","toprak"],
  yer_id:"Erciş",
  d:"Van-Erciş bölgesindeki Karakoyunlu Türkmen oymaklarının başındaki Bayram Hoca, kendisine bağlı bulunduğu Sutaylar hükümdarı Akçasakal Hüseyin Bey'i mağlûp ederek bağımsızlığını ilân etti ve aynı hamleyle Musul'u ele geçirdi. Bu tarih, Karakoyunlu'nun bir oymak birliğinden bir devlete dönüştüğü andır; hanedan bundan sonra Doğu Anadolu'da Celâyirliler'in karşısında bağımsız bir güç olarak anılacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1366-01-01", b:"Celâyirli Sultan Üveys Musul'u geri aldı", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kayip"],
  yer_id:"Musul",
  d:"Celâyirli hükümdarı Sultan Üveys, 767 (1366) yılında Musul'u Karakoyunlular'ın elinden geri aldı ve şehirdeki Karakoyunlu valisi Birdi Hoca'yı hapsetti. Kuruluşundan on beş yıl sonra genç devlet, güneydeki en önemli kazancını kaybetmiş oldu.",
  kaynak:"karakoyunlular" },

{ t:"1374-01-01", b:"Sultan Üveys'in ölümü — Celâyirli baskısı gevşedi", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["olum","siyaset"],
  yer_id:"",
  d:"776 (1374) yılında Celâyirli Sultan Üveys'in ölümüyle Celâyirli Devleti'nin Doğu Anadolu üzerindeki denetimi zayıfladı. Bayram Hoca'nın kaybettiği toprakları geri alma girişimlerinin önü bu ölümle açıldı.",
  kaynak:"karakoyunlular" },

{ t:"1375-01-01", b:"Bayram Hoca Musul'u dört aylık kuşatmayla geri aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","kusatma"],
  yer_id:"Musul",
  d:"777 (1375) yılında Bayram Hoca, dört ay süren bir kuşatmanın ardından Musul'u yeniden Karakoyunlu topraklarına kattı. Celâyirli iktidarının Üveys'in ölümüyle sarsılmasını fırsata çeviren bu fetih, devletin güney sınırını yeniden Dicle'ye taşıdı.",
  kaynak:"karakoyunlular" },

{ t:"1377-01-01", b:"Celâyirliler Erciş'i kuşattı, Kara Mehmed itaat etti", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma","tabiiyet"],
  yer_id:"Erciş",
  d:"778 (1377) baharında Celâyirli kuvvetleri Karakoyunlu merkezi Erciş'i kuşattı ve Kara Mehmed itaatini bildirmek zorunda kaldı. Bu, hanedanın Celâyirli tâbiiyetine dönüp döndüğü dalgalı ilişkinin bir halkasıdır; bağımsızlık henüz kalıcı değildi.",
  kaynak:"karakoyunlular" },

{ t:"1380-01-01", b:"Kara Mehmed başa geçti", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","hukumdar"],
  yer_id:"Erciş",
  d:"Bayram Hoca'nın ardından Kara Mehmed Karakoyunlu'nun başına geçti. Onun devri, hanedanın Erciş çevresindeki bir beylikten Tebriz'e uzanan bölgesel bir güce dönüştüğü dönemdir; künye onu 'Tebriz'i alarak devleti güçlendiren' hükümdar diye anar.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA MEHMED (1380-1389)

{ t:"1382-01-01", b:"Kara Mehmed, Celâyirli Şehzade Ali'yi beş bin kişiyle yendi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas"],
  yer_id:"",
  d:"784 (1382) yılında Kara Mehmed, emrindeki beş bin kişilik kuvvetle Celâyirli Şehzade Ali'yi mağlûp etti. Sayıca küçük bir orduyla kazanılan bu zafer, Karakoyunlu Türkmen süvarisinin bölgedeki askerî ağırlığını gösterdi.",
  kaynak:"karakoyunlular" },

{ t:"1386-01-01", b:"Kara Mehmed, Akkoyunlular'ı Erzincan yakınında yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"Erzincan",
  d:"788 (1386) yılında Kara Mehmed, Erzincan yakınlarında Akkoyunlular'ı mağlûp etti. İki Türkmen hanedanı arasındaki ve bir buçuk asır sürecek olan düşmanlığın erken ve belirleyici çarpışmalarından biridir; Karakoyunlu bu dönemde üstün taraftır.",
  kaynak:"karakoyunlular" },

{ t:"1387-01-01", b:"Timur Erzurum'a kadar ilerledi", tur:"kayip",
  onem:4, dunya:3, kapsam:"dis", etiket:["askeri","toprak-kayip","timur"],
  yer_id:"Erzurum",
  d:"789 (1387) yılında Timur, Doğu Anadolu'ya girerek Erzurum'a kadar olan toprakları ele geçirdi. Timur'un bölgeye gelişi Karakoyunlu tarihinin en uzun süreli dış tehdidini başlattı; hanedan bundan sonra otuz yıl boyunca varlığını Timurlu baskısı altında sürdürecektir.",
  kaynak:"karakoyunlular" },

{ t:"1388-01-01", b:"Kara Mehmed Tebriz'e girdi", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","toprak","baskent"],
  yer_id:"Tebriz",
  d:"790 (1388) yılında Timur'un Azerbaycan'dan çekilmesinin ardından Kara Mehmed Tebriz'e girdi. Tebriz'in ele geçirilmesi Karakoyunlu için bir dönüm noktasıdır: devlet bundan sonra Van gölü havzasında bir beylik değil, Azerbaycan'ın merkezine oturmuş bir hanedan olarak anılacak, Tebriz zamanla başşehir olacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1389-04-01", b:"Kara Mehmed öldü", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","ic-savas"],
  yer_id:"",
  d:"Rebîülâhir 791 (Nisan 1389) ayında Kara Mehmed, Pîr Hasan ile giriştiği mücadelede hayatını kaybetti. Ölümü hanedan içinde bir taht kavgası başlattı ve Karakoyunlu birliği birkaç yıl boyunca bölünmüş kaldı.",
  kaynak:"karakoyunlular" },

{ t:"1390-01-01", b:"Döğer Sâlim Bey'in arabuluculuğu ve Pîr Hasan'ın ölümü", tur:"siyaset",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","siyaset","olum"],
  yer_id:"",
  d:"792 (1390) yılında Döğer Sâlim Bey, Kara Mehmed'in ölümünden sonra hanedan içinde bölünen taraflar arasında arabuluculuk yaptı; aynı yıl Pîr Hasan öldü. Bu iki gelişme, Kara Yûsuf'un rakipsiz kalarak Karakoyunlu'nun başına geçmesinin önünü açtı.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA YÛSUF · SÜRGÜN VE DÖNÜŞ (1390-1420)

{ t:"1392-01-01", b:"Kara Yûsuf bir yıl içinde iki kez Tebriz'e ulaştı", tur:"askeri",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak"],
  yer_id:"Tebriz",
  d:"794 (1392) yılında Kara Yûsuf bir yıl içinde iki defa Tebriz'e ulaşmayı başardı. Timurlu baskısı altında şehrin elden çıkıp yeniden alınması, Azerbaycan'ın bu dönemde hiçbir tarafın kalıcı olarak tutamadığı bir çekişme alanı olduğunu gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1394-07-31", b:"Timur Avnik Kalesi'ni 43 günlük kuşatmadan sonra aldı", tur:"kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","kusatma","toprak-kayip","timur"],
  yer_id:"",
  d:"Timur, Karakoyunlu'nun kilit müstahkem mevkii Avnik Kalesi'ni kuşattı; kale kumandanı Mısır Hoca kırk üç günlük direnişin ardından 2 Şevval 796 (31 Temmuz 1394) günü teslim oldu. Gün hassasiyetli bu kayıt, Timur'un Doğu Anadolu'yu sistematik olarak tasfiye ettiği seferin en somut halkasıdır. ⚠️ Avnik Kalesi'nin atlas verisinde yerleşim kaydı YOKTUR, bu yüzden `yer_id` boş bırakıldı.",
  kaynak:"karakoyunlular" },

{ t:"1395-01-01", b:"Kara Yûsuf, Avnik kumandanı Atlamış'ı esir aldı", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","timur"],
  yer_id:"",
  d:"797 (1395) yılında Kara Yûsuf, Timur'un Avnik'e tayin ettiği kumandan Atlamış'ı esir aldı. Timurlu hâkimiyetine karşı kazanılan bu başarı, Kara Yûsuf'un bölgede hâlâ etkili bir kuvvet olduğunu gösterdi ve Timur'un dikkatini bir kez daha Azerbaycan'a çevirdi.",
  kaynak:"karakoyunlular" },

{ t:"1396-01-01", b:"Timur Azerbaycan'a döndü", tur:"kayip",
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","timur"],
  yer_id:"Tebriz",
  d:"798 (1396) yılında Timur Azerbaycan'a geri döndü. Bu dönüş, Kara Yûsuf'un bölgedeki tutunma çabasını sona erdirecek ve onu birkaç yıl içinde Anadolu'ya, oradan da Memlük topraklarına sürecek olan baskıyı başlattı.",
  kaynak:"karakoyunlular" },

{ t:"1400-01-01", b:"Kara Yûsuf Osmanlı topraklarına sığındı", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["siyaset","surgun","osmanli"],
  yer_id:"",
  d:"802 (1400) yılında Timur karşısında tutunamayan Kara Yûsuf, Osmanlı topraklarına sığındı. Yıldırım Bayezid'in Kara Yûsuf'u teslim etmeyi reddetmesi, Timur ile Osmanlı arasındaki gerginliğin ve iki yıl sonraki Ankara Savaşı'nın sebeplerinden biri sayılır — yani Karakoyunlu hükümdarının şahsî kaderi, çağın en büyük savaşının fitillerinden biri olmuştur.",
  kaynak:"karakoyunlular" },

{ t:"1402-07-28", b:"ANKARA SAVAŞI — Kara Yûsuf'un sığındığı Osmanlı devleti çöktü", tur:"savas",
  onem:4, dunya:4, kapsam:"dis", etiket:["askeri","savas","timur","osmanli"],
  yer_id:"",
  d:"Timur'un Yıldırım Bayezid'i Ankara'da yenmesi, Kara Yûsuf'un sığındığı gücü ortadan kaldırdı ve onu yeniden yollara düşürdü. Karakoyunlu açısından bu savaş bir yenilgi ya da zafer değil, Timurlu hâkimiyetinin artık Anadolu'yu da kapsadığının ilânıdır. ⚠️ `dunya:4` değeri var olan kronoloji dosyalarından DEVRALINDI, bu oturumda yeniden takdir edilmedi.",
  kaynak:"karakoyunlular (Kara Yûsuf bağlamı) — savaşın kendisi için var olan atlas kaydı" },

{ t:"1402-08-01", b:"Kara Yûsuf Bursa'dan Hille'ye gitti", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["siyaset","surgun"],
  yer_id:"Hille",
  d:"Muharrem 805 (Ağustos 1402) ayında Kara Yûsuf, Ankara Savaşı'nın hemen ardından Bursa'dan ayrılıp Irak'taki Hille'ye geçti. Hille, Karakoyunlu hanedanının Irak'taki en kalıcı dayanağı olacak ve devletin sonuna kadar bir hanedan valiliği olarak sürecektir.",
  kaynak:"karakoyunlular" },

{ t:"1403-09-01", b:"Kara Yûsuf Şam'a kaçtı", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["siyaset","surgun","memluk"],
  yer_id:"Şam",
  d:"Rebîülevvel 806 (Eylül 1403) ayında Kara Yûsuf Memlük idaresindeki Şam'a kaçtı. Sığındığı yerde hapsedilmesi, hanedanın en alçak noktasıdır: Karakoyunlu hükümdarı bu tarihte ne bir toprağa ne de bir orduya sahiptir.",
  kaynak:"karakoyunlular" },

{ t:"1405-01-01", b:"Kara Yûsuf Şam hapsinden çıkarıldı", tur:"siyaset",
  onem:4, dunya:1, kapsam:"dis", etiket:["siyaset","memluk"],
  yer_id:"Şam",
  d:"Receb 807 (Ocak 1405) ayında Kara Yûsuf Şam'daki hapisten serbest bırakıldı. Aynı yıl Timur'un ölmesiyle Azerbaycan'daki güç boşluğu doğacak ve serbest kalan Kara Yûsuf bu boşluğu dolduran isim olacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1405-02-18", b:"Timur'un ölümü — Karakoyunlu'nun önündeki engel kalktı", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","siyaset","timur"],
  yer_id:"",
  d:"Timur'un ölümü, on sekiz yıldır Karakoyunlu'yu topraklarından süren baskıyı ortadan kaldırdı. Kara Yûsuf'un bir yıl içinde Azerbaycan'a dönüp iki büyük zafer kazanması doğrudan bu ölümün açtığı boşlukla mümkün olmuştur. ⚠️ `dunya:2` değeri var olan kronoloji dosyalarından DEVRALINDI.",
  kaynak:"karakoyunlular (bağlam) — tarih için var olan atlas kaydı" },

{ t:"1405-07-01", b:"Kara Yûsuf dönüş yoluna çıktı", tur:"siyaset",
  onem:4, dunya:1, kapsam:"ic", etiket:["siyaset","askeri"],
  yer_id:"",
  d:"Muharrem 808 (Temmuz 1405) ayında Yûsuf Bey, Memlük topraklarından Azerbaycan'a dönüş yoluna çıktı. Beş yıllık sürgün böylece sona erdi; bundan sonraki on beş yıl Karakoyunlu'nun en güçlü dönemi olacaktır.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA YÛSUF · YÜKSELİŞ (1406-1420)

{ t:"1406-10-15", b:"Aras kıyısında Ebû Bekir Mirza'ya karşı zafer", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","timur"],
  yer_id:"",
  d:"2 Cemâziyelevvel 809 (15 Ekim 1406) günü Kara Yûsuf, Aras nehri kıyısında Timurlu şehzadesi Ebû Bekir Mirza'yı mağlûp etti. Sürgünden dönüşünün ilk büyük zaferidir ve Karakoyunlu'nun Azerbaycan'a yeniden yerleşmesinin başlangıcı sayılır. ⚠️ Savaş bir nehir kıyısında geçtiği için `yer_id` boş bırakıldı; atlas verisinde nehir kaydı yoktur.",
  kaynak:"karakoyunlular" },

{ t:"1408-04-13", b:"Serdrûd zaferi — Azerbaycan Karakoyunlu'nun oldu", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","toprak","timur"],
  yer_id:"Tebriz",
  d:"16 Zilkade 810 (13 Nisan 1408) günü Kara Yûsuf, Tebriz yakınlarındaki Serdrûd'da Timurlular'a karşı ikinci büyük zaferini kazandı ve Azerbaycan'ın hâkimiyetini kesin olarak eline aldı. Bu, Karakoyunlu'nun bir bölge beyliğinden Timurlu ardılı bir devlete dönüştüğü tarihtir. ⚠️ Savaş yeri Serdrûd'un atlas kaydı yoktur; `yer_id` en yakın kayıtlı merkez olan Tebriz'e verildi ve bu tercih burada AÇIKÇA yazılmıştır.",
  kaynak:"karakoyunlular" },

{ t:"1409-01-01", b:"Akkoyunlular yenildi, Artuklu hânedanı sona erdi", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","toprak"],
  yer_id:"Mardin",
  d:"813 (1409) baharında Kara Yûsuf Akkoyunlu kuvvetlerini mağlûp etti ve aynı harekât sırasında Mardin'deki Artuklu hânedanına son verildi. Musul, Memlük idaresine bağlı el-Melikü's-Sâlih'e verildi. Doğu Anadolu'da üç asırlık bir hanedanın tasfiyesi, Türkmen devletlerinin bölgedeki kesin üstünlüğünü ilân eder.",
  kaynak:"karakoyunlular" },

{ t:"1410-08-30", b:"Esed zaferi — Celâyirli Sultan Ahmed idam edildi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","celayirli"],
  yer_id:"Tebriz",
  d:"28 Rebîülâhir 813 (30 Ağustos 1410) günü Kara Yûsuf, Celâyirli Sultan Ahmed'i Esed mevkiinde yenilgiye uğrattı ve Ahmed idam edildi. Bu, Karakoyunlu'nun altmış yıl boyunca hem tâbi olduğu hem savaştığı Celâyirli Devleti'ni fiilen ortadan kaldıran çarpışmadır. ⚠️ Esed mevkiinin atlas kaydı yoktur; `yer_id` çarpışmanın Tebriz civarında geçmesi sebebiyle Tebriz'e verildi.",
  kaynak:"karakoyunlular" },

{ t:"1411-01-01", b:"Pîr Budak sultan ilân edildi, Bağdat fethedildi", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak","hukumdar","fetih"],
  yer_id:"Bağdat",
  d:"814 (1411) yılında Kara Yûsuf oğlu Pîr Budak'ı sultan ilân etti ve Şah Mehmed Bağdat'ı fethetti. Kara Yûsuf'un kendisi için değil oğlu adına sultanlık ilân etmesi, hanedanın meşruiyet arayışını gösteren bir tasarruftur; Bağdat'ın alınması ise devleti Irak'a taşıyarak sınırlarını en geniş hâline yaklaştırdı.",
  kaynak:"karakoyunlular" },

{ t:"1412-01-01", b:"Kür boyunda Gürcü-Şirvan-Şeki ittifakı yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","kafkas"],
  yer_id:"",
  d:"815 (1412) yılında Kara Yûsuf, Gürcü, Şirvan ve Şeki hükümdarlarının kurduğu ittifakı Kür nehri boyunda mağlûp etti. Zafer Karakoyunlu'nun kuzey sınırını güvenceye aldı ve Kafkasya hükümdarlarını hanedanın nüfuzunu tanımaya zorladı. ⚠️ Çarpışma bir nehir hattında geçtiği için `yer_id` boş bırakıldı.",
  kaynak:"karakoyunlular" },

{ t:"1415-01-01", b:"Cihan Şah Sultâniye valiliğine getirildi", tur:"idari",
  onem:4, dunya:1, kapsam:"ic", etiket:["idari","hukumdar"],
  yer_id:"Sultâniye",
  d:"818 (1415) yılında Kara Yûsuf oğlu Cihan Şah'ı Sultâniye valiliğine tayin etti. Bu tayin, Karakoyunlu'nun en uzun süre hüküm sürecek ve devlete en geniş sınırlarını kazandıracak hükümdarının siyasî eğitiminin başlangıcıdır.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1417-01-01", b:"Karayülük Osman Bey, Mardin-Âmid arasında yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"Mardin",
  d:"820 (1417) yılında Kara Yûsuf, Akkoyunlu hükümdarı Karayülük Osman Bey'i Mardin ile Âmid (Diyarbakır) arasında mağlûp etti. İki Türkmen hanedanının bu dönemdeki güç dengesini özetleyen çarpışmadır: Karakoyunlu üstün, Akkoyunlu ise Memlük himayesine sığınmak zorunda kalan taraftır.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1418-09-20", b:"Mercidâbık'ta Karayülük'e karşı ikinci zafer", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"",
  d:"18 Şâban 821 (20 Eylül 1418) günü Kara Yûsuf, Karayülük Osman Bey'i Mercidâbık'ta ikinci kez yendi; Karayülük Halep'e kaçmak zorunda kaldı. ⚠️ Mercidâbık'ın atlas verisinde yerleşim kaydı YOKTUR — aynı mevki bir asır sonra 1516 Osmanlı-Memlük savaşının da sahnesidir, yani atlas için iki ayrı dönemde gerekli bir noktadır.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1418-10-01", b:"Pîr Budak'ın ölüm haberi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan"],
  yer_id:"",
  d:"Ramazan 821 (Ekim 1418) ayında Kara Yûsuf, sultan ilân ettiği oğlu Pîr Budak'ın öldüğü haberini aldı. Hanedanın veraset düzeni böylece bozuldu ve Kara Yûsuf'un iki yıl sonraki ölümünde açılacak taht kavgasının zemini hazırlanmış oldu.",
  kaynak:"karakoyunlular" },

{ t:"1420-11-13", b:"Kara Yûsuf Ucan'da öldü", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["olum","taht-degisikligi","hukumdar"],
  yer_id:"",
  d:"7 Zilkade 823 (13 Kasım 1420) günü Kara Yûsuf, Şâhruh'un yaklaşan ordusuna karşı sefere çıkmışken Ucan yakınlarında öldü. Sürgünden dönüp Azerbaycan, Irak ve Doğu Anadolu'yu tek elde toplayan hükümdarın ölümü, devleti en güçlü olduğu anda başsız bıraktı. ⚠️ Ucan'ın atlas verisinde yerleşim kaydı YOKTUR; hanedanın kurucusunun öldüğü yer olduğu için nokta yazılması gereken bir mevkidir.",
  kaynak:"karakoyunlular" },

// ───────────────────────── İSKENDER MİRZA (1420-1438)

{ t:"1421-04-01", b:"İskender, Karayülük'ü Şeyhkendi'de yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"",
  d:"Rebîülâhir 824 (Nisan 1421) ayında Kara Yûsuf'un oğlu İskender, Akkoyunlu hükümdarı Karayülük Osman Bey'i Şeyhkendi'de mağlûp etti. Babasının ölümünden sonra hanedanın başına geçen İskender, ilk işi olarak batı sınırındaki Akkoyunlu tehdidini bastırdı.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1421-07-30", b:"Eleşkirt'te Şâhruh'a yenilgi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","timur","toprak-kayip"],
  yer_id:"",
  d:"29 Receb - 1 Şâban 824 (30 Temmuz - 1 Ağustos 1421) günlerinde İskender, Timurlu hükümdarı Şâhruh'un kuvvetleri karşısında Eleşkirt'te ağır bir yenilgi aldı. Bu yenilgi, Karakoyunlu'nun Timurlu vesâyetine yeniden girdiği ve İskender'in bütün saltanatı boyunca Şâhruh ile mücadele edeceği dönemi başlattı. ⚠️ Eleşkirt'in atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"karakoyunlular" },

{ t:"1425-01-01", b:"İskender Van'ı aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Van",
  d:"828 (1425) yılında İskender Van'ı ele geçirdi. Hanedanın çıkış bölgesi olan Van gölü havzasının merkezî kalesinin alınması, Timurlu yenilgisinden sonra Karakoyunlu'nun kendi çekirdek toprağını yeniden toparladığını gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1427-01-01", b:"Mâkû Kalesi ele geçirildi", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Mâku",
  d:"830 (1427) yılında İskender, Mâkû Kalesi'ni Ermeniler'den aldı. Kale, Azerbaycan ile Doğu Anadolu arasındaki geçiş hattını denetleyen müstahkem bir mevkidir ve sonraki iki yüzyıl boyunca Osmanlı-Safevî mücadelesinde de aynı işlevi görecektir.",
  kaynak:"karakoyunlular" },

{ t:"1428-01-01", b:"Zencan ve Kazvin ilhak edildi", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","timur"],
  yer_id:"Zencan",
  d:"831 (1428) yılında İskender, Şâhruh'un Sultâniye'deki nâibini yenerek Zencan ve Kazvin'i Karakoyunlu topraklarına kattı. Timurlu vesâyetine rağmen İran içlerine doğru genişleme, İskender devrinin ayırt edici siyasetidir.",
  kaynak:"karakoyunlular" },

{ t:"1429-09-17", b:"Selmâs'ta iki günlük savaş — İskender yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","timur"],
  yer_id:"Selmâs (Dilman)",
  d:"17-18 Zilhicce 832 (17-18 Eylül 1429) günlerinde Selmâs yakınlarında iki gün süren bir savaş yapıldı ve İskender yenildi. Şâhruh ile İskender arasındaki mücadelenin en uzun soluklu çarpışmasıdır; Karakoyunlu bir kez daha Azerbaycan'ın denetimini kaybetti.",
  kaynak:"karakoyunlular" },

{ t:"1430-01-01", b:"İskender bölgedeki denetimi geri aldı", tur:"askeri",
  onem:3, dunya:1, kapsam:"ic", etiket:["askeri","toprak"],
  yer_id:"Tebriz",
  d:"833 (1430) yılında İskender, Şâhruh'un bölgeye tayin ettiği Ebû Said'i bertaraf ederek Azerbaycan'daki denetimini yeniden kurdu. Selmâs yenilgisinden bir yıl sonra gelen bu toparlanma, Karakoyunlu'nun Timurlu baskısı altında bile kolay tasfiye edilemediğini gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1434-11-01", b:"Şâhruh'un üçüncü seferi — Cihan Şah desteklendi", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","siyaset","timur","hanedan"],
  yer_id:"",
  d:"Rebîülâhir 838 (Kasım 1434) ayında Şâhruh üçüncü Azerbaycan seferine çıktı ve İskender'e karşı kardeşi Cihan Şah'ı destekledi. Timurlu hükümdarının hanedan içi bir rakibi öne sürmesi, Karakoyunlu'nun sonraki otuz yılını belirleyecek olan Cihan Şah devrini fiilen başlattı.",
  kaynak:"karakoyunlular" },

{ t:"1435-09-01", b:"Karayülük Osman Bey Erzurum'da öldü, İskender şehre girdi", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","olum"],
  yer_id:"Erzurum",
  d:"Safer 839 (Eylül 1435) ayında Akkoyunlu hükümdarı Karayülük Osman Bey aldığı yaralar sebebiyle Erzurum'da öldü ve İskender şehre girdi. Elli yıldır Karakoyunlu'nun baş rakibi olan Akkoyunlu hükümdarının ölümü, iki hanedan arasındaki dengeyi geçici olarak Karakoyunlu lehine çevirdi.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1436-05-01", b:"Şâhruh, Cihan Şah'ı Azerbaycan valiliğine tayin etti", tur:"idari",
  onem:5, dunya:1, kapsam:"dis", etiket:["idari","siyaset","timur"],
  yer_id:"",
  d:"Şevval 839 (Mayıs 1436) ayında Şâhruh Ucan'a ulaştı, Cihan Şah'ı Azerbaycan valiliğine tayin ederek Horasan'a döndü. Cihan Şah böylece Timurlu onayıyla iktidara yerleşti; hükümdarlığının ilk yılları bir Timurlu tâbiiyeti olarak başladı ve ancak Şâhruh'un 1447'deki ölümünden sonra tam bağımsızlığa dönüştü.",
  kaynak:"karakoyunlular" },

{ t:"1438-05-01", b:"İskender, oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","hanedan","taht-kavgasi"],
  yer_id:"",
  d:"Zilkade 841 (Mayıs 1438) ayında İskender, kendi oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü. On sekiz yıl boyunca Timurlu baskısına direnen hükümdarın bir dış düşman eliyle değil hanedan içinden gelen bir suikastle ölmesi, Karakoyunlu veraset düzeninin kırılganlığının en açık örneğidir. ⚠️ Alıncak Kalesi'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"karakoyunlular" },

// ───────────────────────── CİHAN ŞAH · EN GENİŞ SINIRLAR (1438-1467)

{ t:"1438-04-19", b:"Cihan Şah tahta çıktı, 'Muzafferüddin' unvanını aldı", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","hukumdar"],
  yer_id:"Tebriz",
  d:"Kara Yûsuf'un dördüncü oğlu Cihan Şah, kardeşi İskender'in suikastle öldürülmesinin ardından 19 Nisan 1438'de tahta çıktı ve 'Muzafferüddin' unvanını aldı. Mardin'de doğduğu için babası ona önce 'Mardin Şah' adını düşünmüş, sonra Cihan Şah'ı tercih etmişti. Yirmi dokuz yıl sürecek saltanatı, Karakoyunlu'nun en geniş sınırlarına ulaştığı ve aynı zamanda en büyük kültür yatırımlarının yapıldığı dönemdir.",
  kaynak:"cihan-sah" },

{ t:"1440-01-01", b:"Cihan Şah Tiflis'i fethetti", tur:"fetih",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih","kafkas"],
  yer_id:"Tiflis",
  d:"844 (1440) yılında Cihan Şah Gürcistan seferine çıktı ve Tiflis'i Gürcü Krallığı'ndan aldı. Kafkasya'ya yönelen bu ilk büyük harekât, Karakoyunlu'nun kuzey sınırını Kür'ün ötesine taşıdı ve Gürcü ve Şirvan hükümdarlarını Cihan Şah'ın üstünlüğünü tanımaya zorladı.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1445-01-01", b:"İkinci Gürcistan seferi; İsfahan Mirza'nın ölümü", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","olum"],
  yer_id:"Tiflis",
  d:"849 (1445) yılında Cihan Şah ikinci Gürcistan seferini düzenledi; bir önceki yılın sonunda (Zilkade 848 / Şubat 1445) Bağdat hâkimi İsfahan Mirza ölmüştü. Bu ölüm, ertesi yıl Bağdat'ın Cihan Şah tarafından alınmasının önünü açacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Bağdat altı aylık kuşatmadan sonra alındı", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih","kusatma"],
  yer_id:"Bağdat",
  d:"850 (1446) yılında Cihan Şah, kardeşi İspend'in ölümünün ardından altı ay süren bir kuşatmayla Bağdat'ı ele geçirdi. Irak'ın merkezinin alınmasıyla Karakoyunlu toprakları Azerbaycan, Arrân, Irak ve Doğu Anadolu'yu kapsayan bir bütün hâline geldi.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1447-03-13", b:"Şâhruh'un ölümü — Sultâniye ve Kazvin ilhak edildi", tur:"fetih",
  onem:5, dunya:1, kapsam:"dis", etiket:["toprak","fetih","timur","siyaset"],
  yer_id:"Sultâniye",
  d:"851 (1447) yılında Timurlu hükümdarı Şâhruh'un ölümü üzerine Cihan Şah, Timurlu vesâyetinden tamamen kurtularak Sultâniye ve Kazvin'i topraklarına kattı. Otuz yıldır Karakoyunlu'yu bağlayan Timurlu üstünlüğü böylece sona erdi; Cihan Şah bundan sonra İran'ın en güçlü hükümdarıdır. ⚠️ `dunya:1` değeri var olan kronoloji dosyalarından DEVRALINDI.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1450-01-01", b:"Erzincan Karakoyunlu'ya geçti", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","akkoyunlu"],
  yer_id:"Erzincan",
  d:"854 (1450) yılında Cihan Şah Erzincan'ı ele geçirdi. Akkoyunlu nüfuz sahasındaki bu şehrin alınması, iki hanedan arasındaki mücadeleyi yeniden alevlendirdi ve genç Uzun Hasan'ın yükselişine giden krizi başlattı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1457-06-01", b:"Tarhanoğlu Rüstem, Uzun Hasan'a Âmid önünde yenildi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"Diyarbakır",
  d:"Receb 861 (Haziran 1457) ayında Cihan Şah'ın kumandanı Tarhanoğlu Rüstem, Âmid (Diyarbakır) yakınlarında Uzun Hasan tarafından ağır bir yenilgiye uğratıldı. Bu, Karakoyunlu'nun Akkoyunlu karşısında üstünlüğünü kaybetmeye başladığı dönüm noktasıdır; on yıl sonra Cihan Şah'ın hayatına mal olacak süreç burada başlar.",
  kaynak:"karakoyunlular · uzun-hasan" },

{ t:"1462-01-01", b:"Pîr Budak Bağdat valiliğine indirildi", tur:"idari",
  onem:4, dunya:1, kapsam:"ic", etiket:["idari","hanedan","ic-savas"],
  yer_id:"Bağdat",
  d:"866 (1462) yılında Cihan Şah, oğlu Pîr Budak'ı yalnızca Bağdat valiliğini kabul etmeye zorladı. Baba ile oğul arasındaki bu çekişme, devletin en güçlü göründüğü anda hanedan içinde açılan ve iki yıl sonra bir iç savaşa dönüşecek olan yarıktır.",
  kaynak:"karakoyunlular" },

{ t:"1464-12-15", b:"Bağdat'ın bir yıllık kuşatması başladı", tur:"kusatma",
  onem:4, dunya:1, kapsam:"ic", etiket:["askeri","kusatma","ic-savas","hanedan"],
  yer_id:"Bağdat",
  d:"15 Rebîülâhir 869 (15 Aralık 1464) günü Cihan Şah, isyan eden oğlu Pîr Budak'ın elindeki Bağdat'ı kuşatmaya başladı. Bir yılı aşkın süren bu kuşatma, Karakoyunlu ordusunun en verimli yıllarını bir iç savaşta tüketmesine yol açtı.",
  kaynak:"karakoyunlular" },

{ t:"1466-06-15", b:"Bağdat kuşatması bitti, Pîr Budak idam edildi", tur:"ic-savas",
  onem:4, dunya:1, kapsam:"ic", etiket:["ic-savas","olum","hanedan","idari"],
  yer_id:"Bağdat",
  d:"1 Zilkade 870 (15 Haziran 1466) günü Bağdat kuşatması sona erdi, Pîr Budak idam edildi ve şehrin valiliğine Tuvacı Alpavut Muhammed getirildi. Cihan Şah kendi oğlunu idam ettirerek isyanı bastırdı, ancak ordusu yıpranmış ve Akkoyunlu tehdidiyle yüzleşeceği anda zayıf düşmüştü.",
  kaynak:"karakoyunlular" },

{ t:"1467-11-10", b:"BİNGÖL BASKINI — Cihan Şah öldürüldü", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","olum","akkoyunlu","donum-noktasi"],
  yer_id:"",
  d:"12 Rebîülâhir 872 (10 Kasım 1467) günü Cihan Şah, Bingöl-Kiğı arasında Uzun Hasan'ın şafak baskınında öldürüldü; altı bin asker, iki oğlu (Muhammedî ve Yûsuf) ve bütün emîrleri esir düştü. Cesedi Tebriz'de kendi yaptırdığı Muzafferiye Medresesi'ne gömüldü. Yirmi dokuz yıllık saltanatın ve fiilen Karakoyunlu Devleti'nin sonudur: hanedan bundan sonra iki yıl daha yaşayacak ama bir daha toparlanamayacaktır. ⚠️ Bingöl ve Kiğı'nın atlas verisinde yerleşim kaydı YOKTUR — bir hanedanın bittiği yerin haritada karşılığı bulunmuyor. `dunya:2` var olan kayıttan DEVRALINDI.",
  kaynak:"karakoyunlular · cihan-sah · uzun-hasan" },

// ───────────────────────── ÇÖKÜŞ (1467-1469)

{ t:"1468-07-01", b:"Hasan Ali'nin yenilgisi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"",
  d:"Zilhicce 872 (Temmuz 1468) ayında Cihan Şah'ın oğlu Hasan Ali, babasının ölümünden sonra hanedanı toparlama çabasında yenilgiye uğradı. Karakoyunlu artık bir devlet değil, kaçan bir hanedan kalıntısıdır.",
  kaynak:"karakoyunlular" },

{ t:"1468-09-01", b:"Merend'de Uzun Hasan'a ikinci yenilgi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu"],
  yer_id:"Merend",
  d:"Safer 873 (Eylül 1468) ayında Uzun Hasan, Hasan Ali'yi Merend'de bir kez daha mağlûp etti. Azerbaycan'ın merkezindeki bu yenilgiyle Karakoyunlu'nun Tebriz'e dönme ihtimali de ortadan kalktı.",
  kaynak:"uzun-hasan" },

{ t:"1469-04-01", b:"Hasan Ali öldürüldü — Karakoyunlu hanedanı sona erdi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","donum-noktasi","akkoyunlu"],
  yer_id:"Hemedan",
  d:"Şevval 873 (Nisan 1469) ayında Uzun Hasan'ın oğlu Uğurlu Mehmed, Hemedan yakınlarında Hasan Ali'yi yenip öldürdü. Bayram Hoca'nın 1351'de kurduğu devlet, yüz on sekiz yıl sonra son hükümdarının ölümüyle tarih sahnesinden çekildi ve bütün toprakları Akkoyunlu'ya geçti.",
  kaynak:"karakoyunlular · uzun-hasan" },

{ t:"1469-06-01", b:"Yûsuf Mirza öldürüldü, son direniş kırıldı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["olum","askeri","akkoyunlu"],
  yer_id:"",
  d:"873 (1469) yılında Uğurlu Mehmed, Karakoyunlu hanedanının son mukavemet odağı olan Yûsuf Mirza'yı yenip öldürdü. Hanedandan geriye yalnız Irak'taki Hille valiliği kaldı.",
  kaynak:"karakoyunlular" },

{ t:"1469-12-19", b:"Son Hille valisi idam edildi — Irak'ta Akkoyunlu düzeni kuruldu", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["olum","idari","akkoyunlu","toprak-kayip"],
  yer_id:"Hille",
  d:"14 Cemâziyelâhir 874 (19 Aralık 1469) günü Karakoyunlu'nun son Hille valisi idam edildi ve Irak'ta Akkoyunlu hâkimiyeti kuruldu. Kara Yûsuf'un 1402'de sürgünde sığındığı Hille, altmış yedi yıl sonra hanedanın son toprağı olarak elden çıktı.",
  kaynak:"karakoyunlular" },

{ t:"1479-01-01", b:"Baharlı beylerinin diriliş girişimi Kirman'da başarısız oldu", tur:"isyan",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","isyan","akkoyunlu"],
  yer_id:"Kirman",
  d:"884 (1479) yılında Baharlı beyleri Horasan'dan hareketle Karakoyunlu Devleti'ni yeniden kurmaya giriştiler; Kirman'ı ele geçirdilerse de Akkoyunlular karşısında tutunamadılar. Bu, hanedanın son siyasî hareketidir. ⚠️ Künye aralığının (t:1469) DIŞINDADIR ve bilerek alınmıştır: bir devletin 'sonu'nun ne zaman kesinleştiğini ancak bu başarısız girişim gösterir.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KÜLTÜR · MİMARÎ · İLİM · DİN · İKTİSAT

{ t:"1465-01-01", b:"Tebriz'de Gökmescid (Mescid-i Kebûd) inşasına başlandı", tur:"mimari",
  onem:5, dunya:2, kapsam:"ic", etiket:["mimari","kultur","din","kultur"],
  yer_id:"Tebriz",
  d:"Cihan Şah, 870 (1465-66) yılında Tebriz'de mimar Muhammed el-Bevvâb'a bir külliye yaptırmaya başladı; mimarın adı çini kitâbede bugün hâlâ okunabilmektedir. Mavi çinilerle kaplı olduğu için halk arasında Mescid-i Kebûd (Gökmescid) diye anılan yapı, büyük ve hafifçe sivrilen bir kubbe ile onu çevreleyen üç alçak kubbeli mekândan oluşur ve Büyük Selçuklu mimarî ilkelerinin merkezî plana uyarlanmış hâlidir. Uzmanlarca İran'ın günümüzde sanat değeri en yüksek eserlerinden biri sayılır.",
  kaynak:"gokmescid · karakoyunlular · cihan-sah" },

{ t:"1467-11-10", b:"Gökmescid banisinin ölümüyle yarım kaldı", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur"],
  yer_id:"Tebriz",
  d:"Cihan Şah'ın Uzun Hasan tarafından öldürüldüğü gün Gökmescid henüz tamamlanmamıştı ve inşaat yarım kaldı. Yapı ancak sonraki yıllarda, Akkoyunlu hükümdarı Ebû Muzaffer Yâkub Bahadır Han devrinde, hanımı ve kızı Sâliha Hatun'un katkılarıyla bitirilebildi. ⚠️ Bu madde bilerek Bingöl baskınıyla aynı güne yazıldı: Karakoyunlu'nun en büyük eserinin kaderi, hükümdarın ölümüyle aynı andadır. 📌 Ve eseri bitiren, onu öldürenin oğludur.",
  kaynak:"gokmescid" },

{ t:"1467-11-10", b:"Cihan Şah, Tebriz'de kendi yaptırdığı Muzafferiye Medresesi'ne gömüldü", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din"],
  yer_id:"Tebriz",
  d:"Bingöl baskınında öldürülen Cihan Şah'ın cesedi Tebriz'e getirilerek kendi yaptırdığı Muzafferiye Medresesi'ne defnedildi. Külliyenin medrese kanadının banisinin türbesi hâline gelmesi, Karakoyunlu hükümdarlarının kendi eserleriyle kurdukları bağı gösterir.",
  kaynak:"cihan-sah" },

{ t:"1438-04-19", b:"Cihan Şah'ın 'Hakîkî' mahlasıyla Türkçe divanı", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","kultur"],
  yer_id:"Tebriz",
  d:"Cihan Şah, 'Hakîkî' mahlasıyla Türkçe şiirler yazdı ve Azerî edebiyatında müstakil bir yer edindi. Bir hükümdarın devlet dili olarak Farsça'nın hâkim olduğu bir çevrede Türkçe divan sahibi olması, Karakoyunlu'nun Türkmen kimliğini kültür alanında da sürdürdüğünün göstergesidir. ⚠️ TARİH HAKKINDA: kaynak divanın telif yılını VERMİYOR; madde, şairliğin hükümdarlık kimliğinin bir parçası olması sebebiyle cülûs gününe bağlandı. Bu bir TERCİHTİR, ölçüm değildir ve gizlenmiyor.",
  kaynak:"cihan-sah · karakoyunlular" },

{ t:"1438-04-19", b:"Hanedan içinde bir şairler halkası: Pîr Budak, Hüseyin Ali, Şah Saray ve Ârâyiş", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","sosyal"],
  yer_id:"Tebriz",
  d:"Cihan Şah'ın oğulları Pîr Budak ile Hüseyin Ali ve kızları Şah Saray ile Ârâyiş şair olarak tanınmıştır. Hanedanın hem erkek hem kadın üyelerinin edebî üretimde bulunması, Karakoyunlu sarayının yalnız askerî değil edebî bir muhit de olduğunu gösterir. ⚠️ TARİH HAKKINDA: kaynak bu şairliklerin dönemini yıl olarak vermiyor; madde Cihan Şah'ın cülûsuna bağlandı ve bu bir tercihtir.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Cihan Şah'ın âlim himayesi ve Molla Câmî ile mektuplaşması", tur:"bilim",
  onem:3, dunya:1, kapsam:"ic", etiket:["bilim","kultur","din"],
  yer_id:"Tebriz",
  d:"Cihan Şah, aralarında Celâleddin ed-Devvânî'nin de bulunduğu âlimleri himaye etti ve Molla Câmî ile edebî mektuplaşmalar yürüttü, sarayında ilim meclisleri kurdu. ⚠️ TARİH HAKKINDA: `celaleddin-ed-devvani` maddesi HTTP 200 döndürdüğü hâlde GÖVDESİ ÇEKİLEMEDİ, bu yüzden Devvânî'nin Karakoyunlu sarayındaki dönemi tarihlendirilemedi; madde devletin en güçlü olduğu Bağdat fethi yılına bağlandı. Bu bir tercihtir. 'TDV'de yok' DEMİYORUM — 'çekilemedi' diyorum.",
  kaynak:"karakoyunlular (himaye) · celaleddin-ed-devvani ÇEKİLEMEDİ" },

{ t:"1438-04-19", b:"Dört halife adına para basımı — Sünnî çizginin sürdüğünün delili", tur:"din",
  onem:4, dunya:1, kapsam:"ic", etiket:["din","ekonomi","sosyal"],
  yer_id:"", kapsam_genis:true,
  d:"Karakoyunlu hükümdarları dört halifenin adını taşıyan sikkeler bastırdılar. Bu, aynı dönemde Şeyh Cüneyd-i Safevî gibi isimlerin öncülüğünde Şiî hareketlerin bölgede yayılmasına rağmen hanedanın resmî çizgisinde Sünnî unsurların sürdüğünü gösterir. Karakoyunlu'nun mezhep kimliği bu yüzden tek renkli değildir: sikke Sünnî, çevredeki tarikat hareketi Şiîdir ve ikisi aynı devlette yan yana durmaktadır. ⚠️ TARİH HAKKINDA: kaynak sikkelerin basım yılını vermiyor; madde Cihan Şah'ın cülûsuna bağlandı, bir tercihtir. `kapsam_genis` sayılabilecek imparatorluk çapında bir uygulamadır, bu yüzden `yer_id` boştur.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Malî teşkilât: muhassıl ve tahvildarlar eliyle şer'î ve örfî vergi düzeni", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","ekonomi","hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Karakoyunlu Devleti, muhassıl ve tahvildar gibi malî görevliler eliyle hem şer'î hem örfî vergileri toplayan bir maliye teşkilâtı işletiyordu; bu gelirler geniş saray bürokrasisini ve orduyu finanse ediyordu. ⚠️ TARİH HAKKINDA: kaynak bu teşkilâtın kuruluş yılını vermiyor; madde devletin sınırlarının en geniş olduğu ve teşkilâtın en çok yüklendiği Bağdat fethi yılına bağlandı. Bir tercihtir. İmparatorluk çapında olduğu için `yer_id` boştur.",
  kaynak:"karakoyunlular" },

];
