/* PAKET 10 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   2 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/kronoloji_akkoyunlu.js ==== */
// =====================================================================
// AKKOYUNLU DEVLETİ — KRONOLOJİ · 1340-1514
// Oturum: AKKOYUNLU-KARAKOYUNLU KRONOLOJİ · 21 Ağustos 2026
//
// Kapsam: `data/devletler.js` künyesindeki aralık — f:"1340-01-01"
// t:"1514-01-01" (174 yıl). ⚠️ Koordinatörün brifingi "~1378-1508"
// diyordu; künye 1340'ı Tur Ali Bey'e, 1514'ü son hükümdar Murad'ın
// öldürülmesine bağlıyor ve TDV `akkoyunlular` maddesi ikisini de
// doğruluyor. KÜNYE TABAN ALINDI, fark koordinatöre bildirildi (M-0940).
//
// 🔴 VE 1508 ile 1514 ARASINDAKİ ALTI YIL BOŞ DEĞİLDİR — `CLAUDE.md
//    §3.5`in tam vakası: *devletin yıkılışı ≠ merkezin kaybı.* Tebriz
//    1501'de Şah İsmâil'e geçti, ama Akkoyunlu hanedanı Irak ve Fars'ta
//    1514'e kadar yaşadı. Bu dosya o son on üç yılı AYRI maddelerle
//    yazar; yoksa harita 1501'de biten bir devlet gösterir ve yanılır.
//
// ─────────────────────────────────────────────────────────────────────
// §D — İKİ PUAN (şartname §3.2)
//   onem  1-5   AKKOYUNLU için ağırlık
//   dunya 1-5   OLAYIN kendisine ait; HER DOSYADA AYNI olmalı
//
// 🔴 PAYLAŞILAN OLAYLARDA `dunya` DEVRALINDI, uydurulmadı:
//       1402-07-28 Ankara Savaşı        dunya:4
//       1467       Akkoyunlu zaferi     dunya:2
//       1473-08-11 Otlukbeli            dunya:2
//       1478-01-06 Uzun Hasan'ın ölümü  dunya:1
//    ⚠️ Otlukbeli için kendi kanaatim `dunya:3`tü — TDV maddesi savaşın
//    "klasik Türkmen ordularının ateşli silâhlarla mücehhez düzenli
//    birliklerle artık baş edemeyeceğini" gösterdiğini yazıyor, yani
//    bölgesel bir sınır değişiminden fazlası. VAR OLAN DEĞERE UYDUM
//    (şartname: farklı dunya KUSURDUR) ama kanaatimi gizlemiyorum;
//    koordinatöre ayrıca bildirdim.
//
// ─────────────────────────────────────────────────────────────────────
// §K — KAYNAK POLİTİKASI (`CLAUDE.md §4`, şartname §4)
//
//  ① `akkoyunlular`     TDV · 200 · GÖVDESİ OKUNDU. Omurga.
//  ② `uzun-hasan`       TDV · 200 · gövdesi okundu. Hanedanın en uzun
//     ve en ayrıntılı biyografisi; gün hassasiyetli tarihlerin çoğu.
//  ③ `otlukbeli-savasi` TDV · 200 · gövdesi okundu. 16 Rebîülevvel 878
//     (11 Ağustos 1473 Çarşamba), Tercan yakınında Otlukbeli/Üçağızlı,
//     kumandanlar, kuvvetler, esirler, savaş sonrası Bayburt'un alınması.
//  ④ `gokmescid`        TDV · 200 · gövdesi okundu. Yâkub Bey devrinde
//     tamamlanması ve Sâliha Hatun'un katkısı.
//  ⑤ `karakoyunlular`   TDV · 200 · gövdesi okundu. Karşı taraftan
//     doğrulama için.
//
//  🔴 ÖLÇÜLMÜŞ `②` TUZAĞI — BU DOSYANIN EN ÖNEMLİ KAYNAK BULGUSU:
//        `yakub-bey`  HTTP **200** · `<title>` doğru görünüyor
//                     AMA AÇILAN MADDE **GERMİYANOĞLU** YÂKUB BEY'DİR.
//     Akkoyunlu Yâkub Bey (1478-1490) DEĞİLDİR. İki test de (kod + ad)
//     temiz geçiyor; ayıran tek şey GÖVDEYİ OKUMAK oldu.
//     ⇒ Ayrıca denenip ÖLÜ (302) ölçülen adaylar:
//        yakub-bey--akkoyunlu · yakub--akkoyunlu · sultan-yakub ·
//        yakub-b-uzun-hasan · halil--akkoyunlu · kadi-isa · hest-bihist
//     ⇒ TDV'de Akkoyunlu Yâkub Bey'in MÜSTAKİL maddesi BULUNAMADI.
//     Onun devri `akkoyunlular` genel maddesine dayandırıldı —
//     `CLAUDE.md §4`: "dar slug tutmazsa KAPSAYICI maddeyi dene."
//     📌 Bu "araştırılmadı" değil, **"arandı, yok"** demektir.
//
//  🔴 ÖLÜ ÖLÇÜLEN ÖTEKİ SLUGLAR (302): `kara-yuluk` ·
//     `kara-yuluk-osman-bey` · `diyarbekir` (canlı olan: `diyarbakir`)
//
//  ⚠️ `celaleddin-ed-devvani` HTTP 200 ama GÖVDE ÇEKİLEMEDİ (§4 ④).
//     "TDV'de yok" DEMİYORUM — "çekilemedi" diyorum. Devvânî'nin
//     Akkoyunlu sarayındaki dönemi bu yüzden yazılmadı.
//  ⚠️ `kitab-i-diyarbekriyye` HTTP 200 ölçüldü ama gövdesi bu oturumda
//     ÇEKİLEMEDİ (ağ hatası). Eserin varlığı `uzun-hasan` maddesinden
//     alındı; müstakil maddesi OKUNMADI ve bu açıkça yazılıyor.
//
// ─────────────────────────────────────────────────────────────────────
// §Y — `yer_id` (şartname §3.1)
//
// Bütün `yer_id` değerleri `arac/girdi.py` ile yüklenen 2593 noktanın
// gerçek `ad` alanlarına BİREBİR eşleştirildi.
// ⚠️ "Âmid" atlas verisinde YOKTUR; şehir `Diyarbakır` adıyla kayıtlı
//    ve bütün Âmid maddelerinde `yer_id:"Diyarbakır"` yazıldı.
// ⚠️ "Şebinkarahisar" tek başına eşleşmez; kayıtlı ad
//    `Karahisâr-ı Şarkî (Şebinkarahisar)`tır ve o kullanıldı.
// ⚠️ "Harput" tek başına eşleşmez; kayıtlı ad `Harput (Elazığ)`tır.
//
// 🔴 EŞLEŞMEYEN YERLER — `yer_id:""` bırakıldı, UYDURULMADI. Bu
//    yerleşimlerin veride KAYDI YOK:
//       Bayburt · Hasankeyf (Hısnıkeyfâ) · Ergani · Otlukbeli (Tercan) ·
//       Eflâtunpınarı · Ca'ber · Rûyindiz Kalesi · Aziz Kendi ·
//       Hoy çayı · Nasriyye bahçesi
//    ⇒ İkisi ağır basıyor: **Bayburt** hem 1462'de Uzun Hasan'ın
//    kazandığı hem 1473'te Fâtih'in aldığı şehirdir, iki dosyada birden
//    gerekli; **Otlukbeli** ise Osmanlı-Akkoyunlu ilişkisinin dönüm
//    noktasıdır ve haritada karşılığı yoktur.
//
// ─────────────────────────────────────────────────────────────────────
// §S — SAYI HAKKINDA (şartname §1)
//
// 🔴 KOTA YOK. Emre (21 Ağustos): "Kaç tane çıkarsa o kadar."
// Bu dosyada 77 madde var; 174 yıl için 0,44 madde/yıl eder. Kaynağın
// verdiği budur. Silinince bir şey eksilmeyen hiçbir satır yazılmadı.
// =====================================================================

window.KRONOLOJI_AKKOYUNLU = [

// ───────────────────────── KURULUŞ · TUR ALİ BEY VE HALEFLERİ (1340-1378)

{ t:"1340-01-01", b:"Tur Ali Bey önderliğinde Trabzon'a akınlar başladı — Akkoyunlu'nun tarih sahnesine çıkışı", tur:"kurulus",
  onem:5, dunya:1, kapsam:"dis", etiket:["kurulus","askeri","akin","konu-askeri","konu-siyasi"],
  yer_id:"Trabzon",
  d:"Akkoyunlu Türkmenleri, Tur Ali Bey'in önderliğinde Trabzon Rum İmparatorluğu'na akınlar düzenlemeye başladı. Diyarbekir bölgesinde toplanan Bayındır boyuna mensup oymakların bir siyasî güç olarak ilk görünüşüdür; hanedanın adı da bu akınlar sırasında Bizans kaynaklarına geçmiştir.",
  kaynak:"akkoyunlular" },

{ t:"1348-01-01", b:"Trabzon kuşatması sonuçsuz kaldı", tur:"kusatma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma","konu-askeri"],
  yer_id:"Trabzon",
  d:"Tur Ali Bey, Erzincan ve Bayburt hâkimleriyle birlikte Trabzon'u kuşattı; kuşatma sonuçsuz kaldı. Başarısızlığa rağmen üç beyliğin ortak hareket etmesi, Akkoyunlu'nun bölgede artık müttefik aranan bir güç olduğunu gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1362-01-01", b:"Pîr Hüseyin Bey Erzincan ve Bayburt'u aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Erzincan",
  d:"Şebinkarahisar hâkimi Pîr Hüseyin Bey, Erzincan ve Bayburt'u ele geçirdi. Akkoyunlu, bu fetihlerle Diyarbekir bölgesindeki çekirdeğinden kuzeye, Karadeniz'e açılan yollara doğru genişledi.",
  kaynak:"akkoyunlular" },

{ t:"1378-01-01", b:"Pîr Hüseyin Bey öldü, Erzincan ve Bayburt Eretna'ya geçti", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["olum","toprak-kayip","konu-askeri","konu-kisiler"],
  yer_id:"Erzincan",
  d:"Pîr Hüseyin Bey'in ölümüyle Erzincan ve Bayburt Eretna emîrlerinin eline geçti. On altı yılda kazanılan kuzey toprakları tek bir ölümle kaybedildi; erken Akkoyunlu'nun toprak tutamama sorunu bu vakada açıkça görünür.",
  kaynak:"akkoyunlular" },

{ t:"1379-01-01", b:"Ahmed Bey, Eretna kuvvetlerini Erzincan'da yendi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","konu-askeri"],
  yer_id:"Erzincan",
  d:"Ahmed Bey, Eretna kuvvetlerini Erzincan'da mağlûp etti. Bir yıl önce kaybedilen bölgenin geri alınma girişimidir ve Akkoyunlu'nun Orta Anadolu beylikleriyle doğrudan temasa geçtiği dönemi başlatır.",
  kaynak:"akkoyunlular" },

// ───────────────────────── KARAYÜLÜK OSMAN BEY (1378-1435)

{ t:"1386-01-01", b:"Erzincan yakınında Karakoyunlu'ya yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","konu-askeri"],
  yer_id:"Erzincan",
  d:"788 (1386) yılında Karakoyunlu hükümdarı Kara Mehmed, Akkoyunlular'ı Erzincan yakınlarında mağlûp etti. İki Türkmen hanedanı arasındaki bir buçuk asırlık düşmanlığın erken çarpışmalarından biridir; bu dönemde üstün taraf Karakoyunlu'dur.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1394-01-01", b:"Ahmed Bey, Kadı Burhâneddin'in Erzincan seferine katıldı", tur:"ittifak",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","ittifak","sefer","konu-askeri","konu-diplomasi"],
  yer_id:"Erzincan",
  d:"Ahmed Bey, Sivas hükümdarı Kadı Burhâneddin'in Erzincan seferine katıldı. Akkoyunlu'nun bu tarihte hâlâ bölgesel bir güç yanında müttefik olarak yürüdüğü, kendi başına sefer düzenleyecek konumda olmadığı görülür — dört yıl sonra aynı Kadı Burhâneddin'i öldürecek olan hanedan için çarpıcı bir başlangıçtır.",
  kaynak:"akkoyunlular" },

{ t:"1398-01-01", b:"Karayülük Osman Bey, Kadı Burhâneddin'i esir alıp öldürdü", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","olum","toprak","konu-askeri","konu-kisiler"],
  yer_id:"Sivas",
  d:"Karayülük Osman Bey, Sivas hükümdarı Kadı Burhâneddin'i esir alarak öldürdü. Orta Anadolu'nun en güçlü hükümdarlarından birinin Akkoyunlu eliyle ortadan kaldırılması, hanedanın bölgesel bir beylikten bir güç merkezine dönüştüğü andır; Sivas'ta doğan boşluk kısa süre sonra Osmanlı ve Timurlu arasında paylaşılacaktır.",
  kaynak:"akkoyunlular" },

{ t:"1402-07-28", b:"ANKARA SAVAŞI — Karayülük Timur'un safında", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["askeri","savas","timur","osmanli","ittifak","konu-askeri","konu-diplomasi"],
  yer_id:"",
  d:"Karayülük Osman Bey, Timur'un yanında Ankara Seferi'ne katıldı ve Yıldırım Bayezid'e karşı savaştı. Akkoyunlu'nun Timur'la kurduğu ittifak, hanedana Diyarbekir bölgesindeki hâkimiyetini pekiştirme imkânı verdi; buna karşılık rakip Karakoyunlu bu dönemde Timur'un düşmanı olarak sürgüne gitti. İki Türkmen hanedanının kaderi, Timur karşısında aldıkları ters tavırlarla ayrıştı.", ic_not_d:"⚠️ `dunya:4` var olan kayıtlardan DEVRALINDI.",
  kaynak:"akkoyunlular" },

{ t:"1407-01-01", b:"Çekim, Âmid önünde mağlûp edildi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","konu-askeri"],
  yer_id:"Diyarbakır",
  d:"Karayülük Osman Bey, Çekim'i Âmid (Diyarbakır) önünde mağlûp etti. Âmid, Akkoyunlu'nun bu tarihten sonra bir asır boyunca merkezi olacak şehirdir.", ic_not_d:"künye de başkenti 'Diyarbekir → Tebriz' diye kaydeder.",
  kaynak:"akkoyunlular" },

{ t:"1409-01-01", b:"Mardin kuşatıldı, Artuklu hânedanı sona erdi", tur:"kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","kusatma","karakoyunlu","konu-askeri","konu-hanedan"],
  yer_id:"Mardin",
  d:"813 (1409) yılında Mardin kuşatıldı ve şehirdeki Artuklu hânedanı sona erdi; bölgedeki üstünlük Kara Yûsuf'un elindeki Karakoyunlu'ya geçti. Üç asırlık bir hanedanın tasfiyesi, Doğu Anadolu'da artık yalnız Türkmen konfederasyonlarının hüküm süreceğini ilân etti.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1412-01-01", b:"Ergani yakınında Kara Yûsuf'a yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","konu-askeri"],
  yer_id:"",
  d:"Karayülük Osman Bey, Ergani yakınlarında Kara Yûsuf karşısında yenildi. Karakoyunlu'nun Timur sonrası yükselişi, Akkoyunlu'yu otuz yıl sürecek bir savunma konumuna itti.", ic_not_d:"⚠️ Ergani'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"akkoyunlular" },

{ t:"1417-01-01", b:"Kara Yûsuf'a yeniden yenilgi ve barış", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","antlasma","karakoyunlu","konu-askeri","konu-diplomasi"],
  yer_id:"Mardin",
  d:"820 (1417) yılında Karayülük Osman Bey, Mardin ile Âmid arasında Kara Yûsuf'a bir kez daha yenildi ve barış yapıldı. Akkoyunlu'nun bu dönemde varlığını savaşarak değil anlaşarak sürdürdüğü görülür.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1418-09-20", b:"Mercidâbık yenilgisinden sonra Karayülük Halep'e kaçtı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","memluk","konu-askeri"],
  yer_id:"Halep",
  d:"18 Şâban 821 (20 Eylül 1418) günü Mercidâbık'ta Kara Yûsuf'a ikinci kez yenilen Karayülük Osman Bey, Memlük idaresindeki Halep'e sığındı. Akkoyunlu'nun Memlük himayesine girdiği bu dönem, hanedanın en zayıf yıllarıdır.", ic_not_d:"⚠️ Mercidâbık'ın atlas kaydı yoktur; `yer_id` Karayülük'ün sığındığı Halep'e verildi ve bu tercih açıkça yazıldı.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1420-01-01", b:"Karayülük Tahran'da Pîr Ömer'i yendi, kısa süre sonra öldü", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","konu-askeri","konu-kisiler"],
  yer_id:"Tahran",
  d:"Karayülük Osman Bey, Tahran'da Pîr Ömer'i yenip esir aldı; kısa süre sonra kendisi öldü.", ic_not_d:"⚠️ NOT: TDV `akkoyunlular` maddesi burada bir ölümden söz eder, ancak aynı madde Karayülük Osman Bey'in 1435'te Erzurum'da öldüğünü de yazar — yani bu satırdaki 'öldü' ifadesi Pîr Ömer'e ait olmalıdır. Kaynağın kendi metnindeki bu belirsizlik GİZLENMİYOR, kaydediliyor.",
  kaynak:"akkoyunlular (metinde belirsizlik var, açıkça bildirildi)" },

{ t:"1421-04-01", b:"Şeyhkendi'de İskender'e yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","konu-askeri","konu-din"],
  yer_id:"",
  d:"Rebîülâhir 824 (Nisan 1421) ayında Karayülük Osman Bey, Kara Yûsuf'un oğlu İskender tarafından Şeyhkendi'de mağlûp edildi. Karakoyunlu'nun yeni hükümdarı, ilk işi olarak Akkoyunlu'yu bastırmıştı.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1429-01-01", b:"Memlükler, Karayülük'ün oğlu Hâbil'i esir aldı", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["memluk","hanedan","konu-askeri","konu-hanedan"],
  yer_id:"",
  d:"832 (1429) yılında Memlükler, Karayülük Osman Bey'in oğlu Hâbil'i esir aldı. Bir zamanlar sığınılan Memlük Devleti'nin artık bir tehdit hâline gelmesi, Akkoyunlu'nun güneyde de sıkıştığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1430-01-01", b:"Hâbil Kahire'de öldü", tur:"kayip",
  onem:2, dunya:1, kapsam:"dis", etiket:["olum","hanedan","memluk","konu-askeri","konu-kisiler","konu-hanedan"],
  yer_id:"Kahire",
  d:"833 (1430) yılında esir tutulan Hâbil Kahire'de öldü. Hanedan üyesinin esarette ölmesi, iki yıl sonra imzalanacak Memlük tâbiiyet anlaşmasının zeminini hazırladı.",
  kaynak:"akkoyunlular" },

{ t:"1431-01-01", b:"Memlükler'e tâbi kalma şartıyla barış yapıldı", tur:"antlasma",
  onem:4, dunya:1, kapsam:"dis", etiket:["antlasma","tabiiyet","memluk","konu-siyasi","konu-diplomasi"],
  yer_id:"",
  d:"834 (1431) yılında Akkoyunlu, Memlükler'e bağlı kalma şartıyla barış yaptı. Hanedanın resmen bir başka devletin tâbiiyetine girdiği bu anlaşma, Uzun Hasan'ın bağımsız imparatorluk kuracağı dönemin ne kadar uzaktan başladığını gösterir. İmparatorluk çapında bir siyasî statü değişimi olduğu için belirli bir yere bağlanmadı.",
  kaynak:"akkoyunlular", kapsam_genis:true },

{ t:"1434-01-01", b:"Erzurum ele geçirildi", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Erzurum",
  d:"837 (1434) yılında Erzurum kuşatılıp ele geçirildi ve yönetimi Şeyh Hasan'a verildi. Memlük tâbiiyetine rağmen kuzeye doğru yapılan bu genişleme, Akkoyunlu'nun tâbiiyeti bir teslimiyet değil bir nefes alma olarak kullandığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1435-09-01", b:"Karayülük Osman Bey Erzurum'da öldü", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","taht-degisikligi","karakoyunlu","konu-kisiler","konu-hanedan"],
  yer_id:"Erzurum",
  d:"Safer 839 (Eylül 1435) ayında Karayülük Osman Bey, Erzurum'un kuzeybatısında Karakoyunlu hükümdarı İskender'e yenilerek aldığı yaralardan öldü. Elli yediye yakın yıl hanedanı yöneten, Kadı Burhâneddin'i ortadan kaldıran ve Timur'un yanında Ankara'da savaşan hükümdarın ölümü, Akkoyunlu'yu bir kuşak boyunca sürecek bir iç çekişmeye bıraktı.",
  kaynak:"akkoyunlular · karakoyunlular" },

// ───────────────────────── HAMZA BEY VE CİHANGİR (1435-1452)

{ t:"1437-06-10", b:"Hamza Bey, Bağdat hâkimi İsfahan Mirza'yı Mardin yakınında yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","konu-askeri"],
  yer_id:"Mardin",
  d:"5 Zilhicce 840 (10 Haziran 1437) günü Hamza Bey, Karakoyunlu'nun Bağdat hâkimi İsfahan Mirza'yı Mardin yakınlarında mağlûp etti ve Mardin'i tahkim etti. Karayülük'ün ölümünden sonraki iki yıl içinde kazanılan bu zafer, Akkoyunlu'nun çöküşe geçmediğini gösterdi.", ic_not_d:"⚠️ Bu çarpışma, o sırada on iki yaşındaki Uzun Hasan'ın yakından tanık olduğu ilk büyük savaştır.",
  kaynak:"uzun-hasan" },

{ t:"1439-01-01", b:"Uzun Hasan ve kardeşi Cihangir'in Mardin-Ergani akınları", tur:"askeri",
  onem:2, dunya:1, kapsam:"ic", etiket:["askeri","akin","hanedan","konu-askeri","konu-hanedan"],
  yer_id:"Mardin",
  d:"842-843 (1439-1440) yıllarında genç Uzun Hasan, kardeşi Cihangir ile birlikte Mardin ve Ergani çevresinde akınlar düzenledi. Hanedanın sonraki en büyük hükümdarının askerî eğitimi bu küçük ölçekli harekâtlarla başladı.",
  kaynak:"uzun-hasan" },

{ t:"1440-01-01", b:"Uzun Hasan, Selçuk Şah Begüm ile evlendi", tur:"hanedan",
  onem:3, dunya:1, kapsam:"ic", etiket:["hanedan","sosyal","konu-hanedan","konu-sosyal"],
  yer_id:"Diyarbakır",
  d:"On beş yaşındaki Uzun Hasan, amcası Muhammed'in kızı Selçuk Şah Begüm ile evlendi. Hanedan içi bu evlilik, Uzun Hasan'ın taht mücadelesinde kendisine bir kanat kazandırdı; Selçuk Şah Begüm 1490 vebasına kadar hanedanın en nüfuzlu kadınlarından biri olarak kalacaktır.",
  kaynak:"uzun-hasan" },

{ t:"1444-10-01", b:"Hamza Bey öldü, Cihangir hanedanın başına geçti", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","konu-kisiler","konu-hanedan"],
  yer_id:"Diyarbakır",
  d:"Receb 848 (Ekim 1444) ayında Hamza Bey öldü ve yerine Cihangir geçti.", ic_not_d:"⚠️ NOT: TDV `akkoyunlular` maddesi Hamza Bey'in ölümünü Ekim 1447'ye, `uzun-hasan` maddesi Ekim 1444'e koyuyor. İKİ TDV MADDESİ ÇELİŞİYOR; ikisi de kaydedildi, biri seçilip öteki gizlenmedi. Bu maddede `uzun-hasan`ın ayrıntılı biyografik anlatımı esas alındı.",
  kaynak:"uzun-hasan (⚠️ akkoyunlular maddesi 1447 diyor — çelişki açıkça bildirildi)" },

{ t:"1450-01-01", b:"Cihan Şah Erzincan'ı aldı — Akkoyunlu bunalımı derinleşti", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kayip","karakoyunlu","konu-askeri"],
  yer_id:"Erzincan",
  d:"854 (1450) yılında Karakoyunlu hükümdarı Cihan Şah Erzincan'ı ele geçirdi. Kaybedilen bu şehir, Cihangir'in Karakoyunlu ile barış yapmak zorunda kalmasına ve kardeşi Uzun Hasan'ın ondan ayrılarak kendi yolunu çizmesine yol açtı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1452-09-01", b:"UZUN HASAN ÂMİD'İ ELE GEÇİRDİ — 'ulu bey' ilân edildi", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","hukumdar","baskent","ic-savas","konu-askeri","konu-idari","konu-isyan","konu-hanedan"],
  yer_id:"Diyarbakır",
  d:"Ramazan 856 (Eylül 1452) ayında yirmi yedi yaşındaki Uzun Hasan, bir hile ile Âmid'i (Diyarbakır) ele geçirerek 'ulu bey' ilân edildi; kardeşi Cihangir, Cihan Şah'a sığındı. Akkoyunlu tarihinin dönüm noktasıdır: hanedan bu tarihten sonra Memlük tâbiiyetinde savunmada duran bir beylik değil, otuz yıl içinde İran'ın tamamına uzanacak bir imparatorluk olacaktır.",
  kaynak:"uzun-hasan · akkoyunlular" },

// ───────────────────────── UZUN HASAN · YÜKSELİŞ (1452-1467)

{ t:"1457-06-01", b:"Âmid önünde Karakoyunlu ordusuna büyük zafer", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","donum-noktasi","konu-askeri","konu-siyasi"],
  yer_id:"Diyarbakır",
  d:"Receb 861 (Haziran 1457) ayında Uzun Hasan, kardeşi Cihangir'i destekleyen Karakoyunlu ordusunu (kumandanı Tarhanoğlu Rüstem) Âmid yakınlarında ağır bir yenilgiye uğrattı. Bu zafer, yüz yıldır Karakoyunlu'nun üstün olduğu dengeyi tersine çevirdi ve on yıl sonraki Bingöl baskınına giden yolu açtı.",
  kaynak:"uzun-hasan · karakoyunlular" },

{ t:"1458-01-01", b:"Birinci Gürcistan seferi — Tiflis yağmalandı, altı kale alındı", tur:"sefer",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","sefer","toprak","kafkas","konu-askeri"],
  yer_id:"Tiflis",
  d:"862 (1458) yılında Uzun Hasan ilk Gürcistan seferine çıktı; Tiflis'i yağmaladı ve altı kale ele geçirdi. Kafkasya'ya yönelen dört seferin ilkidir ve Akkoyunlu'nun artık kendi çekirdek bölgesinin dışına taşan bir güç olduğunu gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1461-01-01", b:"Fâtih Trabzon'u fethetti — Uzun Hasan engel olamadı, Despina ile evlendi", tur:"siyaset",
  onem:4, dunya:3, kapsam:"dis", etiket:["siyaset","osmanli","hanedan","toprak-kayip","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"Trabzon",
  d:"865 (1461) yılında Fâtih Sultan Mehmed Trabzon'u fethetti ve Uzun Hasan buna engel olamadı; Trabzon Komnenos hanedanından Despina Hatun ile evlenerek imparatorluk aileleriyle bağ kurdu. Bir asır önce Akkoyunlu'nun akın düzenlediği devletin Osmanlı eliyle ortadan kaldırılması, iki devletin Doğu Anadolu'da karşı karşıya geldiği ilk andır — Otlukbeli'ne giden sürecin başlangıcıdır.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1462-01-01", b:"Hasankeyf alındı, Eyyûbî kalıntısı sona erdi; Bayburt katıldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"",
  d:"866 (1462) yılında Uzun Hasan Hısnıkeyfâ'yı (Hasankeyf) ele geçirerek buradaki Eyyûbî hanedan kalıntısına son verdi ve Bayburt'u topraklarına kattı. Aynı yıl ikinci Gürcistan seferi de düzenlendi.", ic_not_d:"⚠️ Hasankeyf ve Bayburt'un atlas verisinde yerleşim kaydı YOKTUR; ikisi de Akkoyunlu sahasının içindedir.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1464-01-01", b:"Karamanoğlu İshak Bey'e Karaman yönetimi kazandırıldı", tur:"siyaset",
  onem:4, dunya:2, kapsam:"dis", etiket:["siyaset","ittifak","osmanli","konu-siyasi","konu-diplomasi"],
  yer_id:"Karaman",
  d:"869 (1464-65) yılında Uzun Hasan, Karamanoğlu İshak Bey'e Karaman yönetimini kazandırdı. Akkoyunlu'nun Orta Anadolu'daki Osmanlı karşıtı beyliklere destek vermesi, iki devlet arasındaki gerginliği doğrudan bir çatışmaya taşıyan siyasettir.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1465-01-01", b:"Harput Dulkadıroğulları'ndan alındı", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Harput (Elazığ)",
  d:"869 (1465) yılında Harput, Dulkadıroğulları'ndan fethedildi. Fırat'ın yukarı havzasındaki bu kazanç, Akkoyunlu'nun batı sınırını Osmanlı nüfuz sahasının kıyısına taşıdı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1467-11-10", b:"BİNGÖL BASKINI — Cihan Şah öldürüldü, Karakoyunlu çöktü", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","donum-noktasi","toprak","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"12 Rebîülâhir 872 (10 Kasım 1467) günü Uzun Hasan, Karakoyunlu hükümdarı Cihan Şah'ı Bingöl civarında bir şafak baskınıyla öldürdü; altı bin asker, Cihan Şah'ın iki oğlu (Muhammedî ve Yûsuf) ile bütün emîrleri esir alındı. Bir asırdır Akkoyunlu'nun önünü kesen rakip hanedan bu tek gecede tasfiye edildi ve Azerbaycan, Irak ve İran'ın kapıları açıldı.", ic_not_d:"⚠️ Bingöl'ün atlas kaydı YOKTUR. `dunya:2` var olan kayıttan DEVRALINDI.",
  kaynak:"uzun-hasan · karakoyunlular · cihan-sah" },

// ───────────────────────── UZUN HASAN · İMPARATORLUK (1468-1478)

{ t:"1468-09-01", b:"Merend'de Hasan Ali yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","konu-askeri"],
  yer_id:"Merend",
  d:"Safer 873 (Eylül 1468) ayında Uzun Hasan, Cihan Şah'ın oğlu Hasan Ali'yi Merend'de mağlûp etti. Karakoyunlu'nun Azerbaycan'a dönme ihtimali böylece ortadan kalktı.",
  kaynak:"uzun-hasan" },

{ t:"1469-01-29", b:"Timurlu Ebû Said Mirza Han yenildi ve idam edildi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","timur","olum","konu-askeri","konu-kisiler"],
  yer_id:"",
  d:"15 Receb 873 (29 Ocak 1469) günü Uzun Hasan, Çağatay hükümdarı Ebû Said Mirza Han'ı yenerek idam ettirdi. Timurlu hanedanının başındaki hükümdarın bir Türkmen hükümdarı eliyle idam edilmesi, İran'da Timurlu çağının kapandığı ve Akkoyunlu çağının açıldığı andır.",
  kaynak:"uzun-hasan" },

{ t:"1469-04-01", b:"Hasan Ali öldürüldü — Karakoyunlu hanedanı sona erdi", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","olum","karakoyunlu","donum-noktasi","konu-askeri","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Hemedan",
  d:"Şevval 873 (Nisan-Mayıs 1469) ayında Uzun Hasan'ın oğlu Uğurlu Mehmed, Hemedan yakınlarında Hasan Ali'yi öldürdü. Karakoyunlu Devleti tarih sahnesinden çekildi ve bütün toprakları Akkoyunlu'ya geçti.",
  kaynak:"uzun-hasan · karakoyunlular" },

{ t:"1469-06-01", b:"Kirman ele geçirildi", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Kirman",
  d:"874 (1469) yılında Kirman ele geçirildi. Akkoyunlu toprakları böylece İran'ın güneydoğusuna kadar uzandı; Diyarbekir'de kurulan hanedan artık bir Doğu Anadolu beyliği değil, İran platosunun büyük kısmına hükmeden bir imparatorluktur.",
  kaynak:"akkoyunlular" },

{ t:"1470-01-01", b:"Bağdat ele geçirildi", tur:"fetih",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Bağdat",
  d:"875 (1470) yılında Bağdat ele geçirildi. Irak'ın merkezi, üç yıl önce Karakoyunlu'nun elindeyken şimdi Akkoyunlu'nundur; Uzun Hasan'ın imparatorluğu bu fetihle Basra körfezine açılan ticaret yollarını da kapsar hâle geldi.",
  kaynak:"akkoyunlular" },

{ t:"1472-01-01", b:"Venedik'e elçi gönderildi — ateşli silâh talebi", tur:"siyaset",
  onem:5, dunya:3, kapsam:"dis", etiket:["siyaset","ittifak","teknoloji","venedik","osmanli","konu-siyasi","konu-diplomasi","konu-bilim"],
  yer_id:"",
  d:"877 (1472) yılında Uzun Hasan, Hacı Muhammed'i elçi olarak Venedik'e göndererek ateşli silâh istedi. Bir Türkmen hükümdarının Osmanlı'ya karşı Avrupa'dan top ve tüfek talep etmesi, Otlukbeli'nde belirleyici olacak teknoloji farkının Akkoyunlu tarafından da GÖRÜLDÜĞÜNÜ kanıtlar; sorun bilgisizlik değil, silâhların zamanında ulaşmamasıydı. İmparatorluk çapında bir dış siyaset kararı olduğu için belirli bir yere bağlanmadı.",
  kaynak:"uzun-hasan", kapsam_genis:true },

{ t:"1472-08-01", b:"Yûsufça Mirza Eflâtunpınarı'nda yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","osmanli","konu-askeri"],
  yer_id:"",
  d:"Rebîülevvel 877 (Ağustos 1472) ayında Uzun Hasan'ın sürgündeki Karamanoğlu şehzadelerini desteklemek için gönderdiği yirmi bin kişilik kuvvetin bir kolu, Osmanlı Anadolu Beylerbeyi Koca Dâvud Paşa tarafından Eflâtunpınarı'nda bozguna uğratıldı. Otlukbeli'nden bir yıl önceki bu yenilgi, Osmanlı ordusunun üstünlüğünün ilk somut işaretiydi.", ic_not_d:"⚠️ Eflâtunpınarı'nın atlas kaydı YOKTUR.",
  kaynak:"otlukbeli-savasi · uzun-hasan" },

{ t:"1473-02-01", b:"Venedik on altı top ve bin tüfek gönderdi — hiçbiri ulaşmadı", tur:"teknoloji",
  onem:5, dunya:2, kapsam:"dis", etiket:["teknoloji","ittifak","venedik","askeri","konu-askeri","konu-diplomasi","konu-bilim"],
  yer_id:"",
  d:"Şubat 1473'te Venedik, Uzun Hasan'ın talebi üzerine on altı top ve bin tüfeği gemiyle yola çıkardı; sevkiyat Akkoyunlu'ya HİÇ ULAŞMADI. Altı ay sonra Otlukbeli'nde Akkoyunlu ordusu tam da bu silâhların yokluğu yüzünden Osmanlı topçusu karşısında çözüldü.", ic_not_d:"📌 Bu madde, bir savaşın sonucunu belirleyen şeyin bazen savaş alanında değil bir lojistik başarısızlıkta olduğunu gösterdiği için ayrı yazıldı.",
  kaynak:"uzun-hasan", kapsam_genis:true },

{ t:"1473-08-11", b:"OTLUKBELİ SAVAŞI — Osmanlı topçusu karşısında ağır yenilgi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","osmanli","donum-noktasi","teknoloji","konu-askeri","konu-siyasi","konu-bilim"],
  yer_id:"",
  d:"16 Rebîülevvel 878 (11 Ağustos 1473 Çarşamba) günü Tercan yakınlarındaki Otlukbeli'nde (Üçağızlı) Akkoyunlu ordusu, Fâtih Sultan Mehmed'in ateşli silâhlarla donanmış ordusu karşısında ağır bir yenilgi aldı. Akkoyunlu tarafında yaklaşık 70.000 kişi vardı (40.000'i mızraklı zırhlı süvari); sağ kanadı yöneten Kör Zeynel Mirza savaş sırasında öldürüldü, sol kanatta Uğurlu Mehmed Mirza bulunuyordu. Angiolello'ya göre Akkoyunlu 10.000, Osmanlı yalnızca 1.000 kayıp verdi; Uzun Hasan'ın nişancısı Hoca Seyyid Mehmed Münşî dâhil çok sayıda kişi esir düştü. Savaş, klasik Türkmen süvari ordularının artık ateşli silâhlı düzenli birliklerle baş edemeyeceğini gösterdi ve Akkoyunlu bir daha toparlanamadı.", ic_not_d:"⚠️ Otlukbeli ve Tercan'ın atlas verisinde yerleşim kaydı YOKTUR — Osmanlı-Akkoyunlu ilişkisinin dönüm noktasının haritada karşılığı yok. `dunya:2` var olan kayıttan DEVRALINDI (kendi kanaatim 3'tü, bildirildi).",
  kaynak:"otlukbeli-savasi · uzun-hasan" },

{ t:"1473-08-23", b:"Fâtih Bayburt'u ve Şarkîkarahisar'ı aldı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kayip","osmanli","konu-askeri"],
  yer_id:"Karahisâr-ı Şarkî (Şebinkarahisar)",
  d:"28 Rebîülevvel 878 (23 Ağustos 1473) günü Otlukbeli zaferinden on iki gün sonra Fâtih Sultan Mehmed Bayburt'u, ardından Şarkîkarahisar kalesini ele geçirdi. Osmanlı ordusu Akkoyunlu'yu takip etmedi ve savaş alanında iki üç gün kaldıktan sonra geri çekildi — yani Otlukbeli bir işgal değil, bir caydırma harekâtıydı ve Akkoyunlu'nun batıya bakışını kalıcı olarak kırdı.", ic_not_d:"⚠️ Bayburt'un atlas kaydı yoktur; `yer_id` kaydı bulunan Şarkîkarahisar'a verildi.",
  kaynak:"otlukbeli-savasi" },

{ t:"1473-01-01", b:"Bitlis uzun bir kuşatmadan sonra alındı", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma","toprak","konu-askeri"],
  yer_id:"Bitlis",
  d:"1473'te Biçenoğlu Süleyman Bey uzun süren bir kuşatmanın ardından Bitlis'i ele geçirdi. Otlukbeli yenilgisiyle aynı yıla düşen bu kazanç, Akkoyunlu'nun batıda çökerken doğuda hâlâ genişleyebildiğini gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1474-01-01", b:"Uğurlu Mehmed'in isyanı — Şiraz alındı, Tebriz Çekirli'nin eline geçti", tur:"isyan",
  onem:5, dunya:1, kapsam:"ic", etiket:["isyan","ic-savas","hanedan","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Şiraz",
  d:"878 (1474) yılında Uzun Hasan'ın oğlu Uğurlu Mehmed İsfahan'dan isyan etti ve Şiraz'ı ele geçirdi; aynı sırada Çekirli aşireti Tebriz'i ele geçirdi ve Uğurlu Mehmed Osmanlılar'a sığındı. Otlukbeli yenilgisinden bir yıl sonra patlayan bu iç isyan, imparatorluğun dış yenilgiyi iç çözülmeye çevirdiğini gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1475-07-01", b:"Uzun Hasan'ın kardeşi Üveys isyanda idam edildi", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["isyan","olum","hanedan","konu-kisiler","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"Rebîülevvel 880 (Temmuz 1475) ayında Uzun Hasan'ın kardeşi Üveys, isyanı sebebiyle idam edildi. Hanedan içi tasfiyeler Uzun Hasan'ın son yıllarını belirledi.",
  kaynak:"uzun-hasan" },

{ t:"1476-01-01", b:"Dördüncü Gürcistan seferi — Kral Bagrat tâbi kılındı", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","tabiiyet","konu-askeri","konu-siyasi"],
  yer_id:"Tiflis",
  d:"881 (1476) yılında Uzun Hasan dördüncü Gürcistan seferine çıktı ve Kral Bagrat'ı tâbiiyete zorladı; seferden hasta olarak döndü. Bu, hükümdarın son askerî harekâtıdır.",
  kaynak:"uzun-hasan" },

{ t:"1477-12-01", b:"Uğurlu Mehmed Erzincan'da öldürüldü", tur:"hanedan",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan","ic-savas","taht-kavgasi","konu-askeri","konu-kisiler","konu-isyan","konu-hanedan"],
  yer_id:"Erzincan",
  d:"Ramazan 882 (Aralık 1477) ayında isyan edip Osmanlılar'a sığınan Uğurlu Mehmed, Erzincan'da öldürüldü. Karakoyunlu hanedanına son veren komutanın kendi babasına isyan edip bir suikastle ölmesi, Akkoyunlu veraset düzeninin de en az rakibininki kadar kırılgan olduğunu gösterdi.",
  kaynak:"uzun-hasan" },

{ t:"1478-01-06", b:"UZUN HASAN ÖLDÜ — imparatorluk parçalanmaya başladı", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","donum-noktasi","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Tebriz",
  d:"Ramazan 882 bayramı günü (6 Ocak 1478) Uzun Hasan öldü ve kendi yaptırdığı Nasriyye bahçesine defnedildi. Yirmi altı yılda Diyarbekir'de bir beylikten Fırat'tan Horasan'a uzanan bir imparatorluk kurmuştu; ölümünden sonra hanedan yirmi üç yıl içinde birbiriyle savaşan hükümdarlara bölünecek ve Safevîlere yenik düşecektir.", ic_not_d:"⚠️ `dunya:1` var olan kayıttan DEVRALINDI.",
  kaynak:"uzun-hasan · akkoyunlular" },

// ───────────────────────── YÂKUB BEY (1478-1490)

{ t:"1478-06-01", b:"Halil, Hoy çayında yenildi — Yâkub Bey hükümdar oldu", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas","hukumdar","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Hoy",
  d:"883 (1478) yılında Uzun Hasan'ın oğlu Halil, kardeşi Yâkub Bey'e karşı Hoy çayında yenildi ve Yâkub Bey hükümdar oldu. On iki yıl sürecek olan Yâkub Bey devri, Akkoyunlu'nun siyasî olarak duraklarken kültürel olarak zirveye çıktığı dönemdir.",
  kaynak:"akkoyunlular" },

{ t:"1480-01-01", b:"Memlükler'e karşı zafer — Urfa meselesi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","memluk","konu-askeri"],
  yer_id:"Urfa",
  d:"885 (1480) yılında Yâkub Bey, Urfa meselesi sebebiyle çıkan çatışmada Memlükler'e karşı zafer kazandı. Elli yıl önce Memlük tâbiiyetine giren hanedanın artık aynı devleti yenebilecek durumda olması, Uzun Hasan'ın bıraktığı askerî mirasın gücünü gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1486-01-01", b:"Gürcistan seferi başarıyla sonuçlandı", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","konu-askeri"],
  yer_id:"Tiflis",
  d:"891 (1486) yılında Yâkub Bey Gürcistan'a başarılı bir sefer düzenledi. Babasının dört seferle kurduğu Kafkasya üstünlüğü sürdürülmüştür.",
  kaynak:"akkoyunlular" },

{ t:"1489-01-01", b:"Gürcistan'a yeni sefer", tur:"sefer",
  onem:2, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","konu-askeri"],
  yer_id:"Tiflis",
  d:"894 (1489) yılında Gürcistan'a yeni bir sefer düzenlendi. Yâkub Bey devrinin son askerî harekâtıdır; ertesi yılki veba salgını hanedanı savaşsız yıkacaktır.",
  kaynak:"akkoyunlular" },

{ t:"1490-01-01", b:"VEBA SALGINI — Yâkub Bey, Selçuk Şah Begüm ve Yûsuf Mirza öldü", tur:"salgin",
  onem:5, dunya:1, kapsam:"ic", etiket:["salgin","sosyal","olum","taht-degisikligi","konu-kisiler","konu-hanedan","konu-sosyal","afet","afet-salgin"],
  yer_id:"Tebriz",
  d:"895 (1490) yılında çıkan veba salgınında Selçuk Şah Begüm, Yûsuf Mirza ve hükümdar Yâkub Bey öldü; yerine Baysungur geçti ve Sofu Halil Bey, Mesîh Mirza'yı mağlûp etti.", ic_not_d:"🔴 Akkoyunlu'yu yıkıma sürükleyen şey bir savaş değil bir SALGINDIR: hanedanın hükümdarı, en nüfuzlu kadını ve bir şehzadesi aynı yıl ölünce devlet on bir yıl sürecek bir taht kavgasına girdi ve bu kavganın sonunda Safevîlere yenildi.",
  kaynak:"akkoyunlular" },

// ───────────────────────── PARÇALANMA (1490-1501)

{ t:"1492-05-01", b:"Rüstem Bey hükümdar oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Tebriz",
  d:"Mayıs 1492'de Rüstem Bey hükümdar oldu. Veba salgınından sonraki iki yıl içinde tahtın üçüncü kez el değiştirmesi, Akkoyunlu'da artık istikrarlı bir merkezî iktidarın kalmadığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1493-01-01", b:"Baysungur mağlûp edilip öldürüldü", tur:"ic-savas",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","olum","hanedan","taht-kavgasi","konu-askeri","konu-kisiler","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"898 (1493) yılında Baysungur mağlûp edilerek öldürüldü. Hanedan üyelerinin birbirini ortadan kaldırdığı bu döngü, Safevî hareketinin güçlenmesi için gereken boşluğu yarattı.",
  kaynak:"akkoyunlular" },

{ t:"1497-05-01", b:"Rüstem Gürcistan'a kaçtı, Göde Ahmed Tebriz'de hükümdar oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Tebriz",
  d:"Mayıs 1497'de Rüstem Gürcistan'a kaçtı ve Göde Ahmed Tebriz'de hükümdar ilân edildi; aynı yılın aralık ayında İbe Sultan, Murad'ı hükümdar ilân etti. Aynı yıl içinde iki rakip hükümdar ilânı, devletin fiilen ikiye bölündüğü anı işaret eder.",
  kaynak:"akkoyunlular" },

{ t:"1498-01-01", b:"Elvend hükümdar ilân edildi, Murad hapsedildi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Tebriz",
  d:"903 (1498) yılında Elvend hükümdar ilân edildi, Murad Rûyindiz Kalesi'ne hapsedildi ve ardından Muhammedî Mirza hükümdar oldu. Bir yıl içinde üç ayrı hükümdar — merkezî otoritenin çöküşü artık geri döndürülemezdir.", ic_not_d:"⚠️ Rûyindiz Kalesi'nin atlas kaydı yoktur.",
  kaynak:"akkoyunlular" },

{ t:"1499-01-01", b:"Aziz Kendi savaşı — Muhammedî Mirza kazandı, İbe Sultan öldü", tur:"ic-savas",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","savas","olum","konu-askeri","konu-kisiler","konu-isyan"],
  yer_id:"",
  d:"904 (1499) yılında Aziz Kendi'de yapılan savaşta Muhammedî Mirza galip geldi ve İbe Sultan öldü.", ic_not_d:"⚠️ Aziz Kendi'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"akkoyunlular" },

{ t:"1500-01-01", b:"DEVLET RESMEN İKİYE BÖLÜNDÜ — Elvend ve Murad", tur:"siyaset",
  onem:5, dunya:1, kapsam:"ic", etiket:["siyaset","ic-savas","donum-noktasi","konu-askeri","konu-siyasi","konu-isyan"],
  yer_id:"",
  d:"905 (1500) yılında Akkoyunlu Devleti resmen ikiye ayrıldı: Elvend'e Âmid, Azerbaycan ve Arrân; Murad'a Irakeyn, Kirman ve Fars düştü.", ic_not_d:"🔴 Bu bölünme, bir yıl sonra Şah İsmâil'in iki parçayı ayrı ayrı yenmesini mümkün kıldı — birleşik bir Akkoyunlu ordusu karşısında Safevî hareketinin başarı şansı çok daha düşük olurdu. İmparatorluk çapında bir yapı değişimi olduğu için belirli bir yere bağlanmadı.",
  kaynak:"akkoyunlular", kapsam_genis:true },

{ t:"1501-04-01", b:"ŞAH İSMÂİL TEBRİZ'E GİRDİ — Safevî Devleti kuruldu", tur:"kayip",
  onem:5, dunya:4, kapsam:"dis", etiket:["askeri","savas","toprak-kayip","donum-noktasi","safevi","konu-askeri","konu-siyasi"],
  yer_id:"Tebriz",
  d:"Nisan 1501'de Şah İsmâil, Elvend'i yenerek Tebriz'e girdi ve Safevî Devleti kuruldu. Akkoyunlu'nun başkenti ve Azerbaycan'ın merkezi elden çıktı.", ic_not_d:"🔴 AMA DEVLET BİTMEDİ: Murad'ın elindeki Irak, Fars ve Kirman on üç yıl daha Akkoyunlu idaresinde kaldı. `CLAUDE.md §3.5`: *merkezin kaybı ≠ devletin sonu* — bu ayrım yapılmazsa harita 1501'de biten bir Akkoyunlu gösterir ve yanılır.",
  kaynak:"akkoyunlular" },

// ───────────────────────── SON ON ÜÇ YIL (1501-1514)

{ t:"1503-01-01", b:"Murad, Hemedan yakınında yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","safevi","toprak-kayip","konu-askeri"],
  yer_id:"Hemedan",
  d:"909 (1503) yılında Akkoyunlu hükümdarı Murad, Hemedan yakınlarında Safevîler karşısında yenildi. Batı İran'daki son direniş kırıldı; hanedan artık yalnız Irak'ta tutunabiliyordu.",
  kaynak:"akkoyunlular" },

{ t:"1505-01-01", b:"Elvend öldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"911 (1505) yılında Tebriz'i kaybeden Elvend öldü. Bölünmüş devletin iki kolundan biri böylece sahipsiz kaldı ve geriye yalnız Murad'ın Irak kolu kaldı.",
  kaynak:"akkoyunlular" },

{ t:"1509-01-01", b:"Murad Bağdat'tan kaçtı — Irak da elden çıktı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["toprak-kayip","safevi","konu-askeri"],
  yer_id:"Bağdat",
  d:"915 (1509) yılında Murad Bağdat'tan kaçtı. Akkoyunlu'nun son toprak parçası da Safevîlerin eline geçti; hanedan bundan sonra beş yıl daha yaşar ama artık bir devlet değil, bir hükümdar adayıdır.",
  kaynak:"akkoyunlular" },

{ t:"1514-01-01", b:"MURAD ÖLDÜRÜLDÜ — Akkoyunlu Devleti tarih sahnesinden silindi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","donum-noktasi","toprak-kayip","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"920 (1514) yılında son Akkoyunlu hükümdarı Murad öldürüldü ve Akkoyunlu Devleti tarih sahnesinden silindi. Tur Ali Bey'in 1340'ta Trabzon'a düzenlediği akınlarla başlayan yüz yetmiş dört yıllık hanedan böylece sona erdi. ⚠️ Aynı yıl Çaldıran'da Osmanlı ile Safevî karşı karşıya geldi: Akkoyunlu'nun bıraktığı boşluk artık iki büyük imparatorluk arasında paylaşılacaktır.", ic_not_d:"TDV gün vermiyor, `YYYY-01-01` yazıldı — uydurulmadı.",
  kaynak:"akkoyunlular" },

// ───────────────────────── KÜLTÜR · İLİM · MİMARÎ · HUKUK · İKTİSAT

{ t:"1452-09-01", b:"HASAN PADİŞAH KANUNLARI — Akkoyunlu vergi kanunnâmesi", gun:"Uzun Hasan devri", tur:"hukuk",
  onem:5, dunya:3, kapsam:"ic", etiket:["hukuk","idari","ekonomi","reform","konu-idari","konu-hanedan","konu-ekonomi","konu-islahat","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, 'Hasan Padişah Kanunları' adıyla bilinen bir vergi kanunnâmesi düzenletti; çiftçiden, esnaftan, sanatkârdan ve tüccardan alınan vergilerin âdil biçimde tarh ve tahsili esasına dayanıyordu. 🔴 Bu kanunnâmenin önemi Akkoyunlu'yu aşar: Osmanlılar doğu eyaletlerinde fetihten sonra uzun süre bu kanunları uygulamayı sürdürdü, Safevîler de İran'da uzun süre kullandı. Yani hanedan yıkıldıktan sonra da hukuku yaşadı — Akkoyunlu'nun en kalıcı eseri bir kale ya da cami değil, bir vergi düzenidir.", ic_not_d:"TARİH HAKKINDA: kaynak kanunnâmenin çıkarılış yılını vermiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı. Bu bir TERCİHTİR, ölçüm değildir.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1452-09-01", b:"'Hasanbegî' sikkesi bastırıldı", gun:"Uzun Hasan devri", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi","idari","para","konu-idari","konu-ekonomi"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, iki akçe değerinde 'hasanbegî' adlı sikkeler bastırdı. Kendi adını taşıyan bir para birimi çıkarmak, Memlük tâbiiyetinden çıkan hanedanın egemenlik iddiasının iktisadî ilânıdır.", ic_not_d:"TARİH HAKKINDA: kaynak basım yılını vermiyor; madde iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Bayındır damgası devlet arması yapıldı — Oğuz soy iddiası", gun:"Uzun Hasan devri", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","siyaset","sosyal","kimlik","konu-siyasi","konu-kultur","konu-sosyal"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, Oğuz Han ve Bayındır Han soyundan gelişini vurguladı ve Bayındır damgasını sikkelerde, belgelerde ve sancaklarda kullanılan devlet arması hâline getirdi. Bir Türkmen konfederasyonunun kendini boy şeceresiyle meşrulaştırması, İslâm dünyasında hanedan meşruiyetinin İslâmî olduğu kadar SOY temelli de kurulabildiğini gösterir.", ic_not_d:"TARİH HAKKINDA: kaynak yıl vermiyor; iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Uzun Hasan'ın haftalık ilim meclisleri ve Ali Kuşçu'yu himayesi", gun:"Uzun Hasan devri", tur:"bilim",
  onem:4, dunya:2, kapsam:"ic", etiket:["bilim","kultur","himaye","konu-diplomasi","konu-bilim","konu-kultur"],
  yer_id:"Diyarbakır",
  d:"Uzun Hasan haftalık ilim meclisleri düzenledi ve dönemin en büyük matematikçi-astronomlarından Ali Kuşçu'yu himaye ederek ona iltifatta bulundu. 📌 Ali Kuşçu daha sonra Fâtih'in daveti üzerine İstanbul'a gidip Osmanlı ilim hayatının kurucu isimlerinden biri olacaktır — yani Otlukbeli'nde karşı karşıya gelen iki hükümdar, aynı âlimi ardarda himaye etmiştir.", ic_not_d:"TARİH HAKKINDA: himayenin yılı kaynakta verilmiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Kitâb-ı Diyârbekriyye yazdırıldı — hanedanın kendi tarihi", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","bilim","tarih","konu-hanedan","konu-bilim","konu-kultur"],
  yer_id:"Diyarbakır",
  d:"Uzun Hasan, Ebû Bekr-i Tihrânî'ye Akkoyunlu hanedanının tarihini anlatan 'Kitâb-ı Diyârbekriyye'yi yazdırdı; ayrıca Âşık Paşa'nın Garibnâme'sini okuttu ve bir Kur'an tercümesi hazırlattı. Bir hanedanın kendi resmî tarihini yazdırması, kendisini geçici bir aşiret birliği değil kalıcı bir devlet sayması demektir.", ic_not_d:"⚠️ TARİH HAKKINDA: eserin telif yılı bu oturumda ölçülemedi — `kitab-i-diyarbekriyye` müstakil maddesi HTTP 200 döndürdü ama GÖVDESİ ÇEKİLEMEDİ. Madde iktidara geliş tarihine bağlandı; bu bir tercihtir ve eserin müstakil maddesi OKUNMADI.",
  kaynak:"uzun-hasan (⚠️ kitab-i-diyarbekriyye maddesi okunamadı)" },

{ t:"1478-01-06", b:"Nasriyye bahçesi — Uzun Hasan'ın kendi yaptırdığı türbe", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Tebriz",
  d:"Uzun Hasan, kendi yaptırdığı Nasriyye bahçesine defnedildi. Hükümdarın kendi ölümünden önce defnedileceği yeri inşa ettirmesi, Akkoyunlu'nun Tebriz'i yalnız fethedilmiş bir şehir değil hanedanın kalıcı yurdu saydığını gösterir.", ic_not_d:"Nasriyye bahçesinin atlas verisinde ayrı bir kaydı yoktur; `yer_id` şehre verildi.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Cami, medrese, zâviye ve kervansaray imar programı", gun:"Uzun Hasan devri", tur:"mimari",
  onem:4, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din","ekonomi","imar","konu-ekonomi","konu-din","konu-kultur","konu-imar","konu-egitim"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan cami, medrese, zâviye ve kervansaray olmak üzere birçok eser yaptırdı. 🔴 Bu eserlerin BÜYÜK KISMI GÜNÜMÜZE ULAŞMADI: Safevîler Tebriz'deki Akkoyunlu yapılarının çoğunu KASITLI olarak yıktı. Bir hanedanın mimarî mirasının ardılı tarafından bilerek silinmesi, Akkoyunlu'nun bugün Karakoyunlu'dan (Gökmescid ayakta) daha az görünür olmasının sebebidir — yani kaynak azlığı bir tesadüf değil, bir siyasetin sonucudur.", ic_not_d:"TARİH HAKKINDA: kaynak tek tek yapıların tarihini vermiyor; imar programı iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1478-06-01", b:"Heşt Bihişt Sarayı — Venedikli tacirlerin hayranlıkla anlattığı yapı", tur:"mimari",
  onem:4, dunya:2, kapsam:"ic", etiket:["mimari","kultur","kultur","imar","konu-kultur","konu-imar"],
  yer_id:"Tebriz",
  d:"Yâkub Bey'in yaptırdığı 'Heşt Bihişt' (Sekiz Cennet) sarayı, Tebriz'i ziyaret eden Venedikli tacirler tarafından hayranlıkla tasvir edilmiştir.", ic_not_d:"📌 Bu yapının bilinmesini bir Müslüman kroniğe değil, AVRUPALI TÜCCARLARIN seyahat notlarına borçluyuz — Uzun Hasan'ın Venedik ittifakı, hanedanın mimarî mirasının kaydedilmesini de sağlamış oldu. ⚠️ TARİH HAKKINDA: sarayın inşa yılı kaynakta verilmiyor; madde Yâkub Bey'in cülûsuna bağlandı, bir tercihtir. `hest-bihist` slugu ölü (302) ölçüldü.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"TÜRKMEN MİNYATÜR MEKTEBİ — Safevî sanatının kaynağı", gun:"Yâkub Bey devri", tur:"kultur",
  onem:5, dunya:3, kapsam:"ic", etiket:["kultur","kultur","himaye","konu-diplomasi","konu-sanat","konu-kultur","konu-egitim"],
  yer_id:"Tebriz",
  d:"Yâkub Bey döneminde minyatür sanatı büyük gelişme gösterdi; sanat tarihçileri bu dönemin üretimini 'Türkmen minyatür mektebi' diye adlandırır ve bu okulun Safevî minyatürleri üzerinde derin tesirler bıraktığını tespit ederler. 🔴 Akkoyunlu'nun en kalıcı kültürel mirası budur: devlet 1514'te yıkıldı, ama Tebriz atölyesinin üslûbu Safevî sarayında yaşamaya devam etti ve İran minyatürünün klasik çağını hazırladı.", ic_not_d:"TARİH HAKKINDA: kaynak tek bir yıl vermiyor; madde Yâkub Bey'in cülûsuna bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"Yâkub Bey'in Türkçe ve Farsça şiirleri, Molla Câmî himayesi", gun:"Yâkub Bey devri", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","himaye","konu-diplomasi","konu-kultur"],
  yer_id:"Tebriz",
  d:"Yâkub Bey hem Türkçe hem Farsça şiir söylüyordu, Molla Câmî'yi himaye etti ve çevresinde birçok şair topladı. Karakoyunlu'da Cihan Şah'ın 'Hakîkî' mahlasıyla yaptığının Akkoyunlu'daki karşılığıdır: iki rakip Türkmen hanedanının hükümdarları da Türkçe şiir yazan ve aynı âlimi (Câmî) himaye eden kişilerdi.", ic_not_d:"TARİH HAKKINDA: kaynak yıl vermiyor; cülûs tarihine bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"Gökmescid'in tamamlanması — rakibin eserini bitirmek", gun:"Yâkub Bey devri", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Tebriz",
  d:"Karakoyunlu hükümdarı Cihan Şah'ın 1465'te başlattığı ve 1467'de öldürülmesiyle yarım kalan Gökmescid (Mescid-i Kebûd), Uzun Hasan'ın oğlu Ebû Muzaffer Yâkub Bahadır Han devrinde, hanımı ve kızı Sâliha Hatun'un katkılarıyla tamamlandı. 📌 Cihan Şah'ı öldürten hanedanın onun eserini bitirmesi, Tebriz'in mimarî mirasının hanedanlar üstü sayıldığını gösterir — siyasî düşmanlık, imar mirasına taşınmamıştır.", ic_not_d:"TARİH HAKKINDA: tamamlanma yılı kaynakta verilmiyor, yalnız 'Yâkub Bey devrinde' deniyor; madde cülûs tarihine bağlandı, bir tercihtir.",
  kaynak:"gokmescid" },

];

;
/* ==== data/kronoloji_karakoyunlu.js ==== */
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
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","askeri","toprak","konu-askeri","konu-siyasi"],
  yer_id:"Erciş",
  d:"Van-Erciş bölgesindeki Karakoyunlu Türkmen oymaklarının başındaki Bayram Hoca, kendisine bağlı bulunduğu Sutaylar hükümdarı Akçasakal Hüseyin Bey'i mağlûp ederek bağımsızlığını ilân etti ve aynı hamleyle Musul'u ele geçirdi. Bu tarih, Karakoyunlu'nun bir oymak birliğinden bir devlete dönüştüğü andır; hanedan bundan sonra Doğu Anadolu'da Celâyirliler'in karşısında bağımsız bir güç olarak anılacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1366-01-01", b:"Celâyirli Sultan Üveys Musul'u geri aldı", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Musul",
  d:"Celâyirli hükümdarı Sultan Üveys, 767 (1366) yılında Musul'u Karakoyunlular'ın elinden geri aldı ve şehirdeki Karakoyunlu valisi Birdi Hoca'yı hapsetti. Kuruluşundan on beş yıl sonra genç devlet, güneydeki en önemli kazancını kaybetmiş oldu.",
  kaynak:"karakoyunlular" },

{ t:"1374-01-01", b:"Sultan Üveys'in ölümü — Celâyirli baskısı gevşedi", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["olum","siyaset","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"776 (1374) yılında Celâyirli Sultan Üveys'in ölümüyle Celâyirli Devleti'nin Doğu Anadolu üzerindeki denetimi zayıfladı. Bayram Hoca'nın kaybettiği toprakları geri alma girişimlerinin önü bu ölümle açıldı.",
  kaynak:"karakoyunlular" },

{ t:"1375-01-01", b:"Bayram Hoca Musul'u dört aylık kuşatmayla geri aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","kusatma","konu-askeri"],
  yer_id:"Musul",
  d:"777 (1375) yılında Bayram Hoca, dört ay süren bir kuşatmanın ardından Musul'u yeniden Karakoyunlu topraklarına kattı. Celâyirli iktidarının Üveys'in ölümüyle sarsılmasını fırsata çeviren bu fetih, devletin güney sınırını yeniden Dicle'ye taşıdı.",
  kaynak:"karakoyunlular" },

{ t:"1377-01-01", b:"Celâyirliler Erciş'i kuşattı, Kara Mehmed itaat etti", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma","tabiiyet","konu-askeri","konu-siyasi","konu-diplomasi"],
  yer_id:"Erciş",
  d:"778 (1377) baharında Celâyirli kuvvetleri Karakoyunlu merkezi Erciş'i kuşattı ve Kara Mehmed itaatini bildirmek zorunda kaldı. Bu, hanedanın Celâyirli tâbiiyetine dönüp döndüğü dalgalı ilişkinin bir halkasıdır; bağımsızlık henüz kalıcı değildi.",
  kaynak:"karakoyunlular" },

{ t:"1380-01-01", b:"Kara Mehmed başa geçti", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","hukumdar","konu-hanedan"],
  yer_id:"Erciş",
  d:"Bayram Hoca'nın ardından Kara Mehmed Karakoyunlu'nun başına geçti. Onun devri, hanedanın Erciş çevresindeki bir beylikten Tebriz'e uzanan bölgesel bir güce dönüştüğü dönemdir.", ic_not_d:"künye onu 'Tebriz'i alarak devleti güçlendiren' hükümdar diye anar.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA MEHMED (1380-1389)

{ t:"1382-01-01", b:"Kara Mehmed, Celâyirli Şehzade Ali'yi beş bin kişiyle yendi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","konu-askeri","konu-hanedan"],
  yer_id:"",
  d:"784 (1382) yılında Kara Mehmed, emrindeki beş bin kişilik kuvvetle Celâyirli Şehzade Ali'yi mağlûp etti. Sayıca küçük bir orduyla kazanılan bu zafer, Karakoyunlu Türkmen süvarisinin bölgedeki askerî ağırlığını gösterdi.",
  kaynak:"karakoyunlular" },

{ t:"1386-01-01", b:"Kara Mehmed, Akkoyunlular'ı Erzincan yakınında yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"Erzincan",
  d:"788 (1386) yılında Kara Mehmed, Erzincan yakınlarında Akkoyunlular'ı mağlûp etti. İki Türkmen hanedanı arasındaki ve bir buçuk asır sürecek olan düşmanlığın erken ve belirleyici çarpışmalarından biridir; Karakoyunlu bu dönemde üstün taraftır.",
  kaynak:"karakoyunlular" },

{ t:"1387-01-01", b:"Timur Erzurum'a kadar ilerledi", tur:"kayip",
  onem:4, dunya:3, kapsam:"dis", etiket:["askeri","toprak-kayip","timur","konu-askeri"],
  yer_id:"Erzurum",
  d:"789 (1387) yılında Timur, Doğu Anadolu'ya girerek Erzurum'a kadar olan toprakları ele geçirdi. Timur'un bölgeye gelişi Karakoyunlu tarihinin en uzun süreli dış tehdidini başlattı; hanedan bundan sonra otuz yıl boyunca varlığını Timurlu baskısı altında sürdürecektir.",
  kaynak:"karakoyunlular" },

{ t:"1388-01-01", b:"Kara Mehmed Tebriz'e girdi", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","toprak","baskent","konu-askeri","konu-idari"],
  yer_id:"Tebriz",
  d:"790 (1388) yılında Timur'un Azerbaycan'dan çekilmesinin ardından Kara Mehmed Tebriz'e girdi. Tebriz'in ele geçirilmesi Karakoyunlu için bir dönüm noktasıdır: devlet bundan sonra Van gölü havzasında bir beylik değil, Azerbaycan'ın merkezine oturmuş bir hanedan olarak anılacak, Tebriz zamanla başşehir olacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1389-04-01", b:"Kara Mehmed öldü", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","ic-savas","konu-askeri","konu-kisiler","konu-isyan","konu-hanedan"],
  yer_id:"",
  d:"Rebîülâhir 791 (Nisan 1389) ayında Kara Mehmed, Pîr Hasan ile giriştiği mücadelede hayatını kaybetti. Ölümü hanedan içinde bir taht kavgası başlattı ve Karakoyunlu birliği birkaç yıl boyunca bölünmüş kaldı.",
  kaynak:"karakoyunlular" },

{ t:"1390-01-01", b:"Döğer Sâlim Bey'in arabuluculuğu ve Pîr Hasan'ın ölümü", tur:"siyaset",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","siyaset","olum","konu-askeri","konu-siyasi","konu-kisiler","konu-isyan"],
  yer_id:"",
  d:"792 (1390) yılında Döğer Sâlim Bey, Kara Mehmed'in ölümünden sonra hanedan içinde bölünen taraflar arasında arabuluculuk yaptı; aynı yıl Pîr Hasan öldü. Bu iki gelişme, Kara Yûsuf'un rakipsiz kalarak Karakoyunlu'nun başına geçmesinin önünü açtı.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA YÛSUF · SÜRGÜN VE DÖNÜŞ (1390-1420)

{ t:"1392-01-01", b:"Kara Yûsuf bir yıl içinde iki kez Tebriz'e ulaştı", tur:"askeri",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","konu-askeri"],
  yer_id:"Tebriz",
  d:"794 (1392) yılında Kara Yûsuf bir yıl içinde iki defa Tebriz'e ulaşmayı başardı. Timurlu baskısı altında şehrin elden çıkıp yeniden alınması, Azerbaycan'ın bu dönemde hiçbir tarafın kalıcı olarak tutamadığı bir çekişme alanı olduğunu gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1394-07-31", b:"Timur Avnik Kalesi'ni 43 günlük kuşatmadan sonra aldı", tur:"kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","kusatma","toprak-kayip","timur","konu-askeri"],
  yer_id:"",
  d:"Timur, Karakoyunlu'nun kilit müstahkem mevkii Avnik Kalesi'ni kuşattı; kale kumandanı Mısır Hoca kırk üç günlük direnişin ardından 2 Şevval 796 (31 Temmuz 1394) günü teslim oldu. Gün hassasiyetli bu kayıt, Timur'un Doğu Anadolu'yu sistematik olarak tasfiye ettiği seferin en somut halkasıdır.", ic_not_d:"⚠️ Avnik Kalesi'nin atlas verisinde yerleşim kaydı YOKTUR, bu yüzden `yer_id` boş bırakıldı.",
  kaynak:"karakoyunlular" },

{ t:"1395-01-01", b:"Kara Yûsuf, Avnik kumandanı Atlamış'ı esir aldı", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","timur","konu-askeri"],
  yer_id:"",
  d:"797 (1395) yılında Kara Yûsuf, Timur'un Avnik'e tayin ettiği kumandan Atlamış'ı esir aldı. Timurlu hâkimiyetine karşı kazanılan bu başarı, Kara Yûsuf'un bölgede hâlâ etkili bir kuvvet olduğunu gösterdi ve Timur'un dikkatini bir kez daha Azerbaycan'a çevirdi.",
  kaynak:"karakoyunlular" },

{ t:"1396-01-01", b:"Timur Azerbaycan'a döndü", tur:"kayip",
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","timur","konu-askeri"],
  yer_id:"Tebriz",
  d:"798 (1396) yılında Timur Azerbaycan'a geri döndü. Bu dönüş, Kara Yûsuf'un bölgedeki tutunma çabasını sona erdirecek ve onu birkaç yıl içinde Anadolu'ya, oradan da Memlük topraklarına sürecek olan baskıyı başlattı.",
  kaynak:"karakoyunlular" },

{ t:"1400-01-01", b:"Kara Yûsuf Osmanlı topraklarına sığındı", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["siyaset","surgun","osmanli","konu-siyasi","konu-demografi"],
  yer_id:"",
  d:"802 (1400) yılında Timur karşısında tutunamayan Kara Yûsuf, Osmanlı topraklarına sığındı. Yıldırım Bayezid'in Kara Yûsuf'u teslim etmeyi reddetmesi, Timur ile Osmanlı arasındaki gerginliğin ve iki yıl sonraki Ankara Savaşı'nın sebeplerinden biri sayılır — yani Karakoyunlu hükümdarının şahsî kaderi, çağın en büyük savaşının fitillerinden biri olmuştur.",
  kaynak:"karakoyunlular" },

{ t:"1402-07-28", b:"ANKARA SAVAŞI — Kara Yûsuf'un sığındığı Osmanlı devleti çöktü", tur:"savas",
  onem:4, dunya:4, kapsam:"dis", etiket:["askeri","savas","timur","osmanli","konu-askeri"],
  yer_id:"",
  d:"Timur'un Yıldırım Bayezid'i Ankara'da yenmesi, Kara Yûsuf'un sığındığı gücü ortadan kaldırdı ve onu yeniden yollara düşürdü. Karakoyunlu açısından bu savaş bir yenilgi ya da zafer değil, Timurlu hâkimiyetinin artık Anadolu'yu da kapsadığının ilânıdır.", ic_not_d:"⚠️ `dunya:4` değeri var olan kronoloji dosyalarından DEVRALINDI, bu oturumda yeniden takdir edilmedi.",
  kaynak:"karakoyunlular (Kara Yûsuf bağlamı) — savaşın kendisi için var olan atlas kaydı" },

{ t:"1402-08-01", b:"Kara Yûsuf Bursa'dan Hille'ye gitti", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["siyaset","surgun","konu-siyasi","konu-demografi"],
  yer_id:"Hille",
  d:"Muharrem 805 (Ağustos 1402) ayında Kara Yûsuf, Ankara Savaşı'nın hemen ardından Bursa'dan ayrılıp Irak'taki Hille'ye geçti. Hille, Karakoyunlu hanedanının Irak'taki en kalıcı dayanağı olacak ve devletin sonuna kadar bir hanedan valiliği olarak sürecektir.",
  kaynak:"karakoyunlular" },

{ t:"1403-09-01", b:"Kara Yûsuf Şam'a kaçtı", tur:"siyaset",
  onem:3, dunya:1, kapsam:"dis", etiket:["siyaset","surgun","memluk","konu-siyasi","konu-demografi"],
  yer_id:"Şam",
  d:"Rebîülevvel 806 (Eylül 1403) ayında Kara Yûsuf Memlük idaresindeki Şam'a kaçtı. Sığındığı yerde hapsedilmesi, hanedanın en alçak noktasıdır: Karakoyunlu hükümdarı bu tarihte ne bir toprağa ne de bir orduya sahiptir.",
  kaynak:"karakoyunlular" },

{ t:"1405-01-01", b:"Kara Yûsuf Şam hapsinden çıkarıldı", tur:"siyaset",
  onem:4, dunya:1, kapsam:"dis", etiket:["siyaset","memluk","konu-siyasi"],
  yer_id:"Şam",
  d:"Receb 807 (Ocak 1405) ayında Kara Yûsuf Şam'daki hapisten serbest bırakıldı. Aynı yıl Timur'un ölmesiyle Azerbaycan'daki güç boşluğu doğacak ve serbest kalan Kara Yûsuf bu boşluğu dolduran isim olacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1405-02-18", b:"Timur'un ölümü — Karakoyunlu'nun önündeki engel kalktı", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","siyaset","timur","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"Timur'un ölümü, on sekiz yıldır Karakoyunlu'yu topraklarından süren baskıyı ortadan kaldırdı. Kara Yûsuf'un bir yıl içinde Azerbaycan'a dönüp iki büyük zafer kazanması doğrudan bu ölümün açtığı boşlukla mümkün olmuştur.", ic_not_d:"⚠️ `dunya:2` değeri var olan kronoloji dosyalarından DEVRALINDI.",
  kaynak:"karakoyunlular (bağlam) — tarih için var olan atlas kaydı" },

{ t:"1405-07-01", b:"Kara Yûsuf dönüş yoluna çıktı", tur:"siyaset",
  onem:4, dunya:1, kapsam:"ic", etiket:["siyaset","askeri","konu-askeri","konu-siyasi"],
  yer_id:"",
  d:"Muharrem 808 (Temmuz 1405) ayında Yûsuf Bey, Memlük topraklarından Azerbaycan'a dönüş yoluna çıktı. Beş yıllık sürgün böylece sona erdi; bundan sonraki on beş yıl Karakoyunlu'nun en güçlü dönemi olacaktır.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KARA YÛSUF · YÜKSELİŞ (1406-1420)

{ t:"1406-10-15", b:"Aras kıyısında Ebû Bekir Mirza'ya karşı zafer", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","timur","konu-askeri"],
  yer_id:"",
  d:"2 Cemâziyelevvel 809 (15 Ekim 1406) günü Kara Yûsuf, Aras nehri kıyısında Timurlu şehzadesi Ebû Bekir Mirza'yı mağlûp etti. Sürgünden dönüşünün ilk büyük zaferidir ve Karakoyunlu'nun Azerbaycan'a yeniden yerleşmesinin başlangıcı sayılır.", ic_not_d:"⚠️ Savaş bir nehir kıyısında geçtiği için `yer_id` boş bırakıldı; atlas verisinde nehir kaydı yoktur.",
  kaynak:"karakoyunlular" },

{ t:"1408-04-13", b:"Serdrûd zaferi — Azerbaycan Karakoyunlu'nun oldu", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","toprak","timur","konu-askeri"],
  yer_id:"Tebriz",
  d:"16 Zilkade 810 (13 Nisan 1408) günü Kara Yûsuf, Tebriz yakınlarındaki Serdrûd'da Timurlular'a karşı ikinci büyük zaferini kazandı ve Azerbaycan'ın hâkimiyetini kesin olarak eline aldı. Bu, Karakoyunlu'nun bir bölge beyliğinden Timurlu ardılı bir devlete dönüştüğü tarihtir.", ic_not_d:"⚠️ Savaş yeri Serdrûd'un atlas kaydı yoktur; `yer_id` en yakın kayıtlı merkez olan Tebriz'e verildi ve bu tercih burada AÇIKÇA yazılmıştır.",
  kaynak:"karakoyunlular" },

{ t:"1409-01-01", b:"Akkoyunlular yenildi, Artuklu hânedanı sona erdi", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","toprak","konu-askeri","konu-hanedan"],
  yer_id:"Mardin",
  d:"813 (1409) baharında Kara Yûsuf Akkoyunlu kuvvetlerini mağlûp etti ve aynı harekât sırasında Mardin'deki Artuklu hânedanına son verildi. Musul, Memlük idaresine bağlı el-Melikü's-Sâlih'e verildi. Doğu Anadolu'da üç asırlık bir hanedanın tasfiyesi, Türkmen devletlerinin bölgedeki kesin üstünlüğünü ilân eder.",
  kaynak:"karakoyunlular" },

{ t:"1410-08-30", b:"Esed zaferi — Celâyirli Sultan Ahmed idam edildi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","celayirli","konu-askeri","konu-kisiler"],
  yer_id:"Tebriz",
  d:"28 Rebîülâhir 813 (30 Ağustos 1410) günü Kara Yûsuf, Celâyirli Sultan Ahmed'i Esed mevkiinde yenilgiye uğrattı ve Ahmed idam edildi. Bu, Karakoyunlu'nun altmış yıl boyunca hem tâbi olduğu hem savaştığı Celâyirli Devleti'ni fiilen ortadan kaldıran çarpışmadır.", ic_not_d:"⚠️ Esed mevkiinin atlas kaydı yoktur; `yer_id` çarpışmanın Tebriz civarında geçmesi sebebiyle Tebriz'e verildi.",
  kaynak:"karakoyunlular" },

{ t:"1411-01-01", b:"Pîr Budak sultan ilân edildi, Bağdat fethedildi", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak","hukumdar","fetih","konu-askeri","konu-hanedan"],
  yer_id:"Bağdat",
  d:"814 (1411) yılında Kara Yûsuf oğlu Pîr Budak'ı sultan ilân etti ve Şah Mehmed Bağdat'ı fethetti. Kara Yûsuf'un kendisi için değil oğlu adına sultanlık ilân etmesi, hanedanın meşruiyet arayışını gösteren bir tasarruftur; Bağdat'ın alınması ise devleti Irak'a taşıyarak sınırlarını en geniş hâline yaklaştırdı.",
  kaynak:"karakoyunlular" },

{ t:"1412-01-01", b:"Kür boyunda Gürcü-Şirvan-Şeki ittifakı yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","kafkas","konu-askeri"],
  yer_id:"",
  d:"815 (1412) yılında Kara Yûsuf, Gürcü, Şirvan ve Şeki hükümdarlarının kurduğu ittifakı Kür nehri boyunda mağlûp etti. Zafer Karakoyunlu'nun kuzey sınırını güvenceye aldı ve Kafkasya hükümdarlarını hanedanın nüfuzunu tanımaya zorladı.", ic_not_d:"⚠️ Çarpışma bir nehir hattında geçtiği için `yer_id` boş bırakıldı.",
  kaynak:"karakoyunlular" },

{ t:"1415-01-01", b:"Cihan Şah Sultâniye valiliğine getirildi", tur:"idari",
  onem:4, dunya:1, kapsam:"ic", etiket:["idari","hukumdar","konu-idari","konu-hanedan"],
  yer_id:"Sultâniye",
  d:"818 (1415) yılında Kara Yûsuf oğlu Cihan Şah'ı Sultâniye valiliğine tayin etti. Bu tayin, Karakoyunlu'nun en uzun süre hüküm sürecek ve devlete en geniş sınırlarını kazandıracak hükümdarının siyasî eğitiminin başlangıcıdır.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1417-01-01", b:"Karayülük Osman Bey, Mardin-Âmid arasında yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"Mardin",
  d:"820 (1417) yılında Kara Yûsuf, Akkoyunlu hükümdarı Karayülük Osman Bey'i Mardin ile Âmid (Diyarbakır) arasında mağlûp etti. İki Türkmen hanedanının bu dönemdeki güç dengesini özetleyen çarpışmadır: Karakoyunlu üstün, Akkoyunlu ise Memlük himayesine sığınmak zorunda kalan taraftır.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1418-09-20", b:"Mercidâbık'ta Karayülük'e karşı ikinci zafer", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"",
  d:"18 Şâban 821 (20 Eylül 1418) günü Kara Yûsuf, Karayülük Osman Bey'i Mercidâbık'ta ikinci kez yendi; Karayülük Halep'e kaçmak zorunda kaldı.", ic_not_d:"⚠️ Mercidâbık'ın atlas verisinde yerleşim kaydı YOKTUR — aynı mevki bir asır sonra 1516 Osmanlı-Memlük savaşının da sahnesidir, yani atlas için iki ayrı dönemde gerekli bir noktadır.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1418-10-01", b:"Pîr Budak'ın ölüm haberi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Ramazan 821 (Ekim 1418) ayında Kara Yûsuf, sultan ilân ettiği oğlu Pîr Budak'ın öldüğü haberini aldı. Hanedanın veraset düzeni böylece bozuldu ve Kara Yûsuf'un iki yıl sonraki ölümünde açılacak taht kavgasının zemini hazırlanmış oldu.",
  kaynak:"karakoyunlular" },

{ t:"1420-11-13", b:"Kara Yûsuf Ucan'da öldü", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["olum","taht-degisikligi","hukumdar","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"7 Zilkade 823 (13 Kasım 1420) günü Kara Yûsuf, Şâhruh'un yaklaşan ordusuna karşı sefere çıkmışken Ucan yakınlarında öldü. Sürgünden dönüp Azerbaycan, Irak ve Doğu Anadolu'yu tek elde toplayan hükümdarın ölümü, devleti en güçlü olduğu anda başsız bıraktı.", ic_not_d:"⚠️ Ucan'ın atlas verisinde yerleşim kaydı YOKTUR; hanedanın kurucusunun öldüğü yer olduğu için nokta yazılması gereken bir mevkidir.",
  kaynak:"karakoyunlular" },

// ───────────────────────── İSKENDER MİRZA (1420-1438)

{ t:"1421-04-01", b:"İskender, Karayülük'ü Şeyhkendi'de yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri","konu-din"],
  yer_id:"",
  d:"Rebîülâhir 824 (Nisan 1421) ayında Kara Yûsuf'un oğlu İskender, Akkoyunlu hükümdarı Karayülük Osman Bey'i Şeyhkendi'de mağlûp etti. Babasının ölümünden sonra hanedanın başına geçen İskender, ilk işi olarak batı sınırındaki Akkoyunlu tehdidini bastırdı.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1421-07-30", b:"Eleşkirt'te Şâhruh'a yenilgi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","timur","toprak-kayip","konu-askeri"],
  yer_id:"",
  d:"29 Receb - 1 Şâban 824 (30 Temmuz - 1 Ağustos 1421) günlerinde İskender, Timurlu hükümdarı Şâhruh'un kuvvetleri karşısında Eleşkirt'te ağır bir yenilgi aldı. Bu yenilgi, Karakoyunlu'nun Timurlu vesâyetine yeniden girdiği ve İskender'in bütün saltanatı boyunca Şâhruh ile mücadele edeceği dönemi başlattı.", ic_not_d:"⚠️ Eleşkirt'in atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"karakoyunlular" },

{ t:"1425-01-01", b:"İskender Van'ı aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Van",
  d:"828 (1425) yılında İskender Van'ı ele geçirdi. Hanedanın çıkış bölgesi olan Van gölü havzasının merkezî kalesinin alınması, Timurlu yenilgisinden sonra Karakoyunlu'nun kendi çekirdek toprağını yeniden toparladığını gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1427-01-01", b:"Mâkû Kalesi ele geçirildi", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","konu-askeri"],
  yer_id:"Mâku",
  d:"830 (1427) yılında İskender, Mâkû Kalesi'ni Ermeniler'den aldı. Kale, Azerbaycan ile Doğu Anadolu arasındaki geçiş hattını denetleyen müstahkem bir mevkidir ve sonraki iki yüzyıl boyunca Osmanlı-Safevî mücadelesinde de aynı işlevi görecektir.",
  kaynak:"karakoyunlular" },

{ t:"1428-01-01", b:"Zencan ve Kazvin ilhak edildi", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","timur","konu-askeri"],
  yer_id:"Zencan",
  d:"831 (1428) yılında İskender, Şâhruh'un Sultâniye'deki nâibini yenerek Zencan ve Kazvin'i Karakoyunlu topraklarına kattı. Timurlu vesâyetine rağmen İran içlerine doğru genişleme, İskender devrinin ayırt edici siyasetidir.",
  kaynak:"karakoyunlular" },

{ t:"1429-09-17", b:"Selmâs'ta iki günlük savaş — İskender yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","timur","konu-askeri"],
  yer_id:"Selmâs (Dilman)",
  d:"17-18 Zilhicce 832 (17-18 Eylül 1429) günlerinde Selmâs yakınlarında iki gün süren bir savaş yapıldı ve İskender yenildi. Şâhruh ile İskender arasındaki mücadelenin en uzun soluklu çarpışmasıdır; Karakoyunlu bir kez daha Azerbaycan'ın denetimini kaybetti.",
  kaynak:"karakoyunlular" },

{ t:"1430-01-01", b:"İskender bölgedeki denetimi geri aldı", tur:"askeri",
  onem:3, dunya:1, kapsam:"ic", etiket:["askeri","toprak","konu-askeri"],
  yer_id:"Tebriz",
  d:"833 (1430) yılında İskender, Şâhruh'un bölgeye tayin ettiği Ebû Said'i bertaraf ederek Azerbaycan'daki denetimini yeniden kurdu. Selmâs yenilgisinden bir yıl sonra gelen bu toparlanma, Karakoyunlu'nun Timurlu baskısı altında bile kolay tasfiye edilemediğini gösterir.",
  kaynak:"karakoyunlular" },

{ t:"1434-11-01", b:"Şâhruh'un üçüncü seferi — Cihan Şah desteklendi", tur:"siyaset",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","siyaset","timur","hanedan","konu-askeri","konu-siyasi","konu-hanedan"],
  yer_id:"",
  d:"Rebîülâhir 838 (Kasım 1434) ayında Şâhruh üçüncü Azerbaycan seferine çıktı ve İskender'e karşı kardeşi Cihan Şah'ı destekledi. Timurlu hükümdarının hanedan içi bir rakibi öne sürmesi, Karakoyunlu'nun sonraki otuz yılını belirleyecek olan Cihan Şah devrini fiilen başlattı.",
  kaynak:"karakoyunlular" },

{ t:"1435-09-01", b:"Karayülük Osman Bey Erzurum'da öldü, İskender şehre girdi", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","olum","konu-askeri","konu-kisiler"],
  yer_id:"Erzurum",
  d:"Safer 839 (Eylül 1435) ayında Akkoyunlu hükümdarı Karayülük Osman Bey aldığı yaralar sebebiyle Erzurum'da öldü ve İskender şehre girdi. Elli yıldır Karakoyunlu'nun baş rakibi olan Akkoyunlu hükümdarının ölümü, iki hanedan arasındaki dengeyi geçici olarak Karakoyunlu lehine çevirdi.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1436-05-01", b:"Şâhruh, Cihan Şah'ı Azerbaycan valiliğine tayin etti", tur:"idari",
  onem:5, dunya:1, kapsam:"dis", etiket:["idari","siyaset","timur","konu-siyasi","konu-idari"],
  yer_id:"",
  d:"Şevval 839 (Mayıs 1436) ayında Şâhruh Ucan'a ulaştı, Cihan Şah'ı Azerbaycan valiliğine tayin ederek Horasan'a döndü. Cihan Şah böylece Timurlu onayıyla iktidara yerleşti; hükümdarlığının ilk yılları bir Timurlu tâbiiyeti olarak başladı ve ancak Şâhruh'un 1447'deki ölümünden sonra tam bağımsızlığa dönüştü.",
  kaynak:"karakoyunlular" },

{ t:"1438-05-01", b:"İskender, oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","hanedan","taht-kavgasi","konu-kisiler","konu-hanedan"],
  yer_id:"",
  d:"Zilkade 841 (Mayıs 1438) ayında İskender, kendi oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü. On sekiz yıl boyunca Timurlu baskısına direnen hükümdarın bir dış düşman eliyle değil hanedan içinden gelen bir suikastle ölmesi, Karakoyunlu veraset düzeninin kırılganlığının en açık örneğidir.", ic_not_d:"⚠️ Alıncak Kalesi'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"karakoyunlular" },

// ───────────────────────── CİHAN ŞAH · EN GENİŞ SINIRLAR (1438-1467)

{ t:"1438-04-19", b:"Cihan Şah tahta çıktı, 'Muzafferüddin' unvanını aldı", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","hukumdar","konu-hanedan"],
  yer_id:"Tebriz",
  d:"Kara Yûsuf'un dördüncü oğlu Cihan Şah, kardeşi İskender'in suikastle öldürülmesinin ardından 19 Nisan 1438'de tahta çıktı ve 'Muzafferüddin' unvanını aldı. Mardin'de doğduğu için babası ona önce 'Mardin Şah' adını düşünmüş, sonra Cihan Şah'ı tercih etmişti. Yirmi dokuz yıl sürecek saltanatı, Karakoyunlu'nun en geniş sınırlarına ulaştığı ve aynı zamanda en büyük kültür yatırımlarının yapıldığı dönemdir.",
  kaynak:"cihan-sah" },

{ t:"1440-01-01", b:"Cihan Şah Tiflis'i fethetti", tur:"fetih",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih","kafkas","konu-askeri"],
  yer_id:"Tiflis",
  d:"844 (1440) yılında Cihan Şah Gürcistan seferine çıktı ve Tiflis'i Gürcü Krallığı'ndan aldı. Kafkasya'ya yönelen bu ilk büyük harekât, Karakoyunlu'nun kuzey sınırını Kür'ün ötesine taşıdı ve Gürcü ve Şirvan hükümdarlarını Cihan Şah'ın üstünlüğünü tanımaya zorladı.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1445-01-01", b:"İkinci Gürcistan seferi; İsfahan Mirza'nın ölümü", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","olum","konu-askeri","konu-kisiler"],
  yer_id:"Tiflis",
  d:"849 (1445) yılında Cihan Şah ikinci Gürcistan seferini düzenledi; bir önceki yılın sonunda (Zilkade 848 / Şubat 1445) Bağdat hâkimi İsfahan Mirza ölmüştü. Bu ölüm, ertesi yıl Bağdat'ın Cihan Şah tarafından alınmasının önünü açacaktır.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Bağdat altı aylık kuşatmadan sonra alındı", tur:"fetih",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih","kusatma","konu-askeri"],
  yer_id:"Bağdat",
  d:"850 (1446) yılında Cihan Şah, kardeşi İspend'in ölümünün ardından altı ay süren bir kuşatmayla Bağdat'ı ele geçirdi. Irak'ın merkezinin alınmasıyla Karakoyunlu toprakları Azerbaycan, Arrân, Irak ve Doğu Anadolu'yu kapsayan bir bütün hâline geldi.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1447-03-13", b:"Şâhruh'un ölümü — Sultâniye ve Kazvin ilhak edildi", tur:"fetih",
  onem:5, dunya:1, kapsam:"dis", etiket:["toprak","fetih","timur","siyaset","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"Sultâniye",
  d:"851 (1447) yılında Timurlu hükümdarı Şâhruh'un ölümü üzerine Cihan Şah, Timurlu vesâyetinden tamamen kurtularak Sultâniye ve Kazvin'i topraklarına kattı. Otuz yıldır Karakoyunlu'yu bağlayan Timurlu üstünlüğü böylece sona erdi; Cihan Şah bundan sonra İran'ın en güçlü hükümdarıdır.", ic_not_d:"⚠️ `dunya:1` değeri var olan kronoloji dosyalarından DEVRALINDI.",
  kaynak:"karakoyunlular · cihan-sah" },

{ t:"1450-01-01", b:"Erzincan Karakoyunlu'ya geçti", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih","akkoyunlu","konu-askeri"],
  yer_id:"Erzincan",
  d:"854 (1450) yılında Cihan Şah Erzincan'ı ele geçirdi. Akkoyunlu nüfuz sahasındaki bu şehrin alınması, iki hanedan arasındaki mücadeleyi yeniden alevlendirdi ve genç Uzun Hasan'ın yükselişine giden krizi başlattı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1457-06-01", b:"Tarhanoğlu Rüstem, Uzun Hasan'a Âmid önünde yenildi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"Diyarbakır",
  d:"Receb 861 (Haziran 1457) ayında Cihan Şah'ın kumandanı Tarhanoğlu Rüstem, Âmid (Diyarbakır) yakınlarında Uzun Hasan tarafından ağır bir yenilgiye uğratıldı. Bu, Karakoyunlu'nun Akkoyunlu karşısında üstünlüğünü kaybetmeye başladığı dönüm noktasıdır; on yıl sonra Cihan Şah'ın hayatına mal olacak süreç burada başlar.",
  kaynak:"karakoyunlular · uzun-hasan" },

{ t:"1462-01-01", b:"Pîr Budak Bağdat valiliğine indirildi", tur:"idari",
  onem:4, dunya:1, kapsam:"ic", etiket:["idari","hanedan","ic-savas","konu-askeri","konu-idari","konu-isyan","konu-hanedan"],
  yer_id:"Bağdat",
  d:"866 (1462) yılında Cihan Şah, oğlu Pîr Budak'ı yalnızca Bağdat valiliğini kabul etmeye zorladı. Baba ile oğul arasındaki bu çekişme, devletin en güçlü göründüğü anda hanedan içinde açılan ve iki yıl sonra bir iç savaşa dönüşecek olan yarıktır.",
  kaynak:"karakoyunlular" },

{ t:"1464-12-15", b:"Bağdat'ın bir yıllık kuşatması başladı", tur:"kusatma",
  onem:4, dunya:1, kapsam:"ic", etiket:["askeri","kusatma","ic-savas","hanedan","konu-askeri","konu-isyan","konu-hanedan"],
  yer_id:"Bağdat",
  d:"15 Rebîülâhir 869 (15 Aralık 1464) günü Cihan Şah, isyan eden oğlu Pîr Budak'ın elindeki Bağdat'ı kuşatmaya başladı. Bir yılı aşkın süren bu kuşatma, Karakoyunlu ordusunun en verimli yıllarını bir iç savaşta tüketmesine yol açtı.",
  kaynak:"karakoyunlular" },

{ t:"1466-06-15", b:"Bağdat kuşatması bitti, Pîr Budak idam edildi", tur:"ic-savas",
  onem:4, dunya:1, kapsam:"ic", etiket:["ic-savas","olum","hanedan","idari","konu-askeri","konu-idari","konu-kisiler","konu-isyan","konu-hanedan"],
  yer_id:"Bağdat",
  d:"1 Zilkade 870 (15 Haziran 1466) günü Bağdat kuşatması sona erdi, Pîr Budak idam edildi ve şehrin valiliğine Tuvacı Alpavut Muhammed getirildi. Cihan Şah kendi oğlunu idam ettirerek isyanı bastırdı, ancak ordusu yıpranmış ve Akkoyunlu tehdidiyle yüzleşeceği anda zayıf düşmüştü.",
  kaynak:"karakoyunlular" },

{ t:"1467-11-10", b:"BİNGÖL BASKINI — Cihan Şah öldürüldü", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","olum","akkoyunlu","donum-noktasi","konu-askeri","konu-siyasi","konu-kisiler"],
  yer_id:"",
  d:"12 Rebîülâhir 872 (10 Kasım 1467) günü Cihan Şah, Bingöl-Kiğı arasında Uzun Hasan'ın şafak baskınında öldürüldü; altı bin asker, iki oğlu (Muhammedî ve Yûsuf) ve bütün emîrleri esir düştü. Cesedi Tebriz'de kendi yaptırdığı Muzafferiye Medresesi'ne gömüldü. Yirmi dokuz yıllık saltanatın ve fiilen Karakoyunlu Devleti'nin sonudur: hanedan bundan sonra iki yıl daha yaşayacak ama bir daha toparlanamayacaktır.", ic_not_d:"⚠️ Bingöl ve Kiğı'nın atlas verisinde yerleşim kaydı YOKTUR — bir hanedanın bittiği yerin haritada karşılığı bulunmuyor. `dunya:2` var olan kayıttan DEVRALINDI.",
  kaynak:"karakoyunlular · cihan-sah · uzun-hasan" },

// ───────────────────────── ÇÖKÜŞ (1467-1469)

{ t:"1468-07-01", b:"Hasan Ali'nin yenilgisi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"",
  d:"Zilhicce 872 (Temmuz 1468) ayında Cihan Şah'ın oğlu Hasan Ali, babasının ölümünden sonra hanedanı toparlama çabasında yenilgiye uğradı. Karakoyunlu artık bir devlet değil, kaçan bir hanedan kalıntısıdır.",
  kaynak:"karakoyunlular" },

{ t:"1468-09-01", b:"Merend'de Uzun Hasan'a ikinci yenilgi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","akkoyunlu","konu-askeri"],
  yer_id:"Merend",
  d:"Safer 873 (Eylül 1468) ayında Uzun Hasan, Hasan Ali'yi Merend'de bir kez daha mağlûp etti. Azerbaycan'ın merkezindeki bu yenilgiyle Karakoyunlu'nun Tebriz'e dönme ihtimali de ortadan kalktı.",
  kaynak:"uzun-hasan" },

{ t:"1469-04-01", b:"Hasan Ali öldürüldü — Karakoyunlu hanedanı sona erdi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","donum-noktasi","akkoyunlu","konu-askeri","konu-siyasi","konu-kisiler","konu-hanedan"],
  yer_id:"Hemedan",
  d:"Şevval 873 (Nisan 1469) ayında Uzun Hasan'ın oğlu Uğurlu Mehmed, Hemedan yakınlarında Hasan Ali'yi yenip öldürdü. Bayram Hoca'nın 1351'de kurduğu devlet, yüz on sekiz yıl sonra son hükümdarının ölümüyle tarih sahnesinden çekildi ve bütün toprakları Akkoyunlu'ya geçti.",
  kaynak:"karakoyunlular · uzun-hasan" },

{ t:"1469-06-01", b:"Yûsuf Mirza öldürüldü, son direniş kırıldı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["olum","askeri","akkoyunlu","konu-askeri","konu-kisiler"],
  yer_id:"",
  d:"873 (1469) yılında Uğurlu Mehmed, Karakoyunlu hanedanının son mukavemet odağı olan Yûsuf Mirza'yı yenip öldürdü. Hanedandan geriye yalnız Irak'taki Hille valiliği kaldı.",
  kaynak:"karakoyunlular" },

{ t:"1469-12-19", b:"Son Hille valisi idam edildi — Irak'ta Akkoyunlu düzeni kuruldu", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["olum","idari","akkoyunlu","toprak-kayip","konu-askeri","konu-idari","konu-kisiler"],
  yer_id:"Hille",
  d:"14 Cemâziyelâhir 874 (19 Aralık 1469) günü Karakoyunlu'nun son Hille valisi idam edildi ve Irak'ta Akkoyunlu hâkimiyeti kuruldu. Kara Yûsuf'un 1402'de sürgünde sığındığı Hille, altmış yedi yıl sonra hanedanın son toprağı olarak elden çıktı.",
  kaynak:"karakoyunlular" },

{ t:"1479-01-01", b:"Baharlı beylerinin diriliş girişimi Kirman'da başarısız oldu", tur:"isyan",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","isyan","akkoyunlu","konu-askeri","konu-isyan"],
  yer_id:"Kirman",
  d:"884 (1479) yılında Baharlı beyleri Horasan'dan hareketle Karakoyunlu Devleti'ni yeniden kurmaya giriştiler; Kirman'ı ele geçirdilerse de Akkoyunlular karşısında tutunamadılar. Bu, hanedanın son siyasî hareketidir.", ic_not_d:"⚠️ Künye aralığının (t:1469) DIŞINDADIR ve bilerek alınmıştır: bir devletin 'sonu'nun ne zaman kesinleştiğini ancak bu başarısız girişim gösterir.",
  kaynak:"karakoyunlular" },

// ───────────────────────── KÜLTÜR · MİMARÎ · İLİM · DİN · İKTİSAT

{ t:"1465-01-01", b:"Tebriz'de Gökmescid (Mescid-i Kebûd) inşasına başlandı", tur:"mimari",
  onem:5, dunya:2, kapsam:"ic", etiket:["mimari","kultur","din","kultur","imar","konu-din","konu-kultur","konu-imar"],
  yer_id:"Tebriz",
  d:"Cihan Şah, 870 (1465-66) yılında Tebriz'de mimar Muhammed el-Bevvâb'a bir külliye yaptırmaya başladı; mimarın adı çini kitâbede bugün hâlâ okunabilmektedir. Mavi çinilerle kaplı olduğu için halk arasında Mescid-i Kebûd (Gökmescid) diye anılan yapı, büyük ve hafifçe sivrilen bir kubbe ile onu çevreleyen üç alçak kubbeli mekândan oluşur ve Büyük Selçuklu mimarî ilkelerinin merkezî plana uyarlanmış hâlidir. Uzmanlarca İran'ın günümüzde sanat değeri en yüksek eserlerinden biri sayılır.",
  kaynak:"gokmescid · karakoyunlular · cihan-sah" },

{ t:"1467-11-10", b:"Gökmescid banisinin ölümüyle yarım kaldı", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","konu-kisiler","konu-kultur","konu-imar"],
  yer_id:"Tebriz",
  d:"Cihan Şah'ın Uzun Hasan tarafından öldürüldüğü gün Gökmescid henüz tamamlanmamıştı ve inşaat yarım kaldı. Yapı ancak sonraki yıllarda, Akkoyunlu hükümdarı Ebû Muzaffer Yâkub Bahadır Han devrinde, hanımı ve kızı Sâliha Hatun'un katkılarıyla bitirilebildi. Karakoyunlu'nun en büyük eserinin kaderi, hükümdarın ölümüyle aynı andadır. 📌 Ve eseri bitiren, onu öldürenin oğludur.", ic_not_d:"Bu madde bilerek Bingöl baskınıyla aynı güne yazıldı.",
  kaynak:"gokmescid" },

{ t:"1467-11-10", b:"Cihan Şah, Tebriz'de kendi yaptırdığı Muzafferiye Medresesi'ne gömüldü", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din","imar","konu-din","konu-kultur","konu-imar","konu-egitim"],
  yer_id:"Tebriz",
  d:"Bingöl baskınında öldürülen Cihan Şah'ın cesedi Tebriz'e getirilerek kendi yaptırdığı Muzafferiye Medresesi'ne defnedildi. Külliyenin medrese kanadının banisinin türbesi hâline gelmesi, Karakoyunlu hükümdarlarının kendi eserleriyle kurdukları bağı gösterir.",
  kaynak:"cihan-sah" },

{ t:"1438-04-19", b:"Cihan Şah'ın 'Hakîkî' mahlasıyla Türkçe divanı", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","kultur","konu-kultur"],
  yer_id:"Tebriz",
  d:"Cihan Şah, 'Hakîkî' mahlasıyla Türkçe şiirler yazdı ve Azerî edebiyatında müstakil bir yer edindi. Bir hükümdarın devlet dili olarak Farsça'nın hâkim olduğu bir çevrede Türkçe divan sahibi olması, Karakoyunlu'nun Türkmen kimliğini kültür alanında da sürdürdüğünün göstergesidir.", ic_not_d:"⚠️ TARİH HAKKINDA: kaynak divanın telif yılını VERMİYOR; madde, şairliğin hükümdarlık kimliğinin bir parçası olması sebebiyle cülûs gününe bağlandı. Bu bir TERCİHTİR, ölçüm değildir ve gizlenmiyor.",
  kaynak:"cihan-sah · karakoyunlular" },

{ t:"1438-04-19", b:"Hanedan içinde bir şairler halkası: Pîr Budak, Hüseyin Ali, Şah Saray ve Ârâyiş", gun:"Cihan Şah devri", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","sosyal","konu-hanedan","konu-sanat","konu-kultur","konu-imar","konu-sosyal"],
  yer_id:"Tebriz",
  d:"Cihan Şah'ın oğulları Pîr Budak ile Hüseyin Ali ve kızları Şah Saray ile Ârâyiş şair olarak tanınmıştır. Hanedanın hem erkek hem kadın üyelerinin edebî üretimde bulunması, Karakoyunlu sarayının yalnız askerî değil edebî bir muhit de olduğunu gösterir.", ic_not_d:"TARİH HAKKINDA: kaynak bu şairliklerin dönemini yıl olarak vermiyor; madde Cihan Şah'ın cülûsuna bağlandı ve bu bir tercihtir.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Cihan Şah'ın âlim himayesi ve Molla Câmî ile mektuplaşması", tur:"bilim",
  onem:3, dunya:1, kapsam:"ic", etiket:["bilim","kultur","din","konu-bilim","konu-din","konu-kultur"],
  yer_id:"Tebriz",
  d:"Cihan Şah, aralarında Celâleddin ed-Devvânî'nin de bulunduğu âlimleri himaye etti ve Molla Câmî ile edebî mektuplaşmalar yürüttü, sarayında ilim meclisleri kurdu.", ic_not_d:"⚠️ TARİH HAKKINDA: `celaleddin-ed-devvani` maddesi HTTP 200 döndürdüğü hâlde GÖVDESİ ÇEKİLEMEDİ, bu yüzden Devvânî'nin Karakoyunlu sarayındaki dönemi tarihlendirilemedi; madde devletin en güçlü olduğu Bağdat fethi yılına bağlandı. Bu bir tercihtir. 'TDV'de yok' DEMİYORUM — 'çekilemedi' diyorum.",
  kaynak:"karakoyunlular (himaye) · celaleddin-ed-devvani ÇEKİLEMEDİ" },

{ t:"1438-04-19", b:"Dört halife adına para basımı — Sünnî çizginin sürdüğünün delili", gun:"Karakoyunlu devri", tur:"din",
  onem:4, dunya:1, kapsam:"ic", etiket:["din","ekonomi","sosyal","konu-ekonomi","konu-din","konu-sosyal"],
  yer_id:"", kapsam_genis:true,
  d:"Karakoyunlu hükümdarları dört halifenin adını taşıyan sikkeler bastırdılar. Bu, aynı dönemde Şeyh Cüneyd-i Safevî gibi isimlerin öncülüğünde Şiî hareketlerin bölgede yayılmasına rağmen hanedanın resmî çizgisinde Sünnî unsurların sürdüğünü gösterir. Karakoyunlu'nun mezhep kimliği bu yüzden tek renkli değildir: sikke Sünnî, çevredeki tarikat hareketi Şiîdir ve ikisi aynı devlette yan yana durmaktadır.", ic_not_d:"TARİH HAKKINDA: kaynak sikkelerin basım yılını vermiyor; madde Cihan Şah'ın cülûsuna bağlandı, bir tercihtir. `kapsam_genis` sayılabilecek imparatorluk çapında bir uygulamadır, bu yüzden `yer_id` boştur.",
  kaynak:"karakoyunlular" },

{ t:"1446-01-01", b:"Malî teşkilât: muhassıl ve tahvildarlar eliyle şer'î ve örfî vergi düzeni", gun:"Karakoyunlu devri", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","ekonomi","hukuk","konu-idari","konu-ekonomi","konu-hukuk"],
  yer_id:"", kapsam_genis:true,
  d:"Karakoyunlu Devleti, muhassıl ve tahvildar gibi malî görevliler eliyle hem şer'î hem örfî vergileri toplayan bir maliye teşkilâtı işletiyordu; bu gelirler geniş saray bürokrasisini ve orduyu finanse ediyordu.", ic_not_d:"TARİH HAKKINDA: kaynak bu teşkilâtın kuruluş yılını vermiyor; madde devletin sınırlarının en geniş olduğu ve teşkilâtın en çok yüklendiği Bağdat fethi yılına bağlandı. Bir tercihtir. İmparatorluk çapında olduğu için `yer_id` boştur.",
  kaynak:"karakoyunlular" },

];

;
