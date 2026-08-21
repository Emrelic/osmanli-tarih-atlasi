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
  onem:5, dunya:1, kapsam:"dis", etiket:["kurulus","askeri","akin"],
  yer_id:"Trabzon",
  d:"Akkoyunlu Türkmenleri, Tur Ali Bey'in önderliğinde Trabzon Rum İmparatorluğu'na akınlar düzenlemeye başladı. Diyarbekir bölgesinde toplanan Bayındır boyuna mensup oymakların bir siyasî güç olarak ilk görünüşüdür; hanedanın adı da bu akınlar sırasında Bizans kaynaklarına geçmiştir.",
  kaynak:"akkoyunlular" },

{ t:"1348-01-01", b:"Trabzon kuşatması sonuçsuz kaldı", tur:"kusatma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma"],
  yer_id:"Trabzon",
  d:"Tur Ali Bey, Erzincan ve Bayburt hâkimleriyle birlikte Trabzon'u kuşattı; kuşatma sonuçsuz kaldı. Başarısızlığa rağmen üç beyliğin ortak hareket etmesi, Akkoyunlu'nun bölgede artık müttefik aranan bir güç olduğunu gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1362-01-01", b:"Pîr Hüseyin Bey Erzincan ve Bayburt'u aldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Erzincan",
  d:"Şebinkarahisar hâkimi Pîr Hüseyin Bey, Erzincan ve Bayburt'u ele geçirdi. Akkoyunlu, bu fetihlerle Diyarbekir bölgesindeki çekirdeğinden kuzeye, Karadeniz'e açılan yollara doğru genişledi.",
  kaynak:"akkoyunlular" },

{ t:"1378-01-01", b:"Pîr Hüseyin Bey öldü, Erzincan ve Bayburt Eretna'ya geçti", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["olum","toprak-kaybi"],
  yer_id:"Erzincan",
  d:"Pîr Hüseyin Bey'in ölümüyle Erzincan ve Bayburt Eretna emîrlerinin eline geçti. On altı yılda kazanılan kuzey toprakları tek bir ölümle kaybedildi; erken Akkoyunlu'nun toprak tutamama sorunu bu vakada açıkça görünür.",
  kaynak:"akkoyunlular" },

{ t:"1379-01-01", b:"Ahmed Bey, Eretna kuvvetlerini Erzincan'da yendi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas"],
  yer_id:"Erzincan",
  d:"Ahmed Bey, Eretna kuvvetlerini Erzincan'da mağlûp etti. Bir yıl önce kaybedilen bölgenin geri alınma girişimidir ve Akkoyunlu'nun Orta Anadolu beylikleriyle doğrudan temasa geçtiği dönemi başlatır.",
  kaynak:"akkoyunlular" },

// ───────────────────────── KARAYÜLÜK OSMAN BEY (1378-1435)

{ t:"1386-01-01", b:"Erzincan yakınında Karakoyunlu'ya yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu"],
  yer_id:"Erzincan",
  d:"788 (1386) yılında Karakoyunlu hükümdarı Kara Mehmed, Akkoyunlular'ı Erzincan yakınlarında mağlûp etti. İki Türkmen hanedanı arasındaki bir buçuk asırlık düşmanlığın erken çarpışmalarından biridir; bu dönemde üstün taraf Karakoyunlu'dur.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1394-01-01", b:"Ahmed Bey, Kadı Burhâneddin'in Erzincan seferine katıldı", tur:"ittifak",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","ittifak","sefer"],
  yer_id:"Erzincan",
  d:"Ahmed Bey, Sivas hükümdarı Kadı Burhâneddin'in Erzincan seferine katıldı. Akkoyunlu'nun bu tarihte hâlâ bölgesel bir güç yanında müttefik olarak yürüdüğü, kendi başına sefer düzenleyecek konumda olmadığı görülür — dört yıl sonra aynı Kadı Burhâneddin'i öldürecek olan hanedan için çarpıcı bir başlangıçtır.",
  kaynak:"akkoyunlular" },

{ t:"1398-01-01", b:"Karayülük Osman Bey, Kadı Burhâneddin'i esir alıp öldürdü", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","olum","toprak"],
  yer_id:"Sivas",
  d:"Karayülük Osman Bey, Sivas hükümdarı Kadı Burhâneddin'i esir alarak öldürdü. Orta Anadolu'nun en güçlü hükümdarlarından birinin Akkoyunlu eliyle ortadan kaldırılması, hanedanın bölgesel bir beylikten bir güç merkezine dönüştüğü andır; Sivas'ta doğan boşluk kısa süre sonra Osmanlı ve Timurlu arasında paylaşılacaktır.",
  kaynak:"akkoyunlular" },

{ t:"1402-07-28", b:"ANKARA SAVAŞI — Karayülük Timur'un safında", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["askeri","savas","timur","osmanli","ittifak"],
  yer_id:"",
  d:"Karayülük Osman Bey, Timur'un yanında Ankara Seferi'ne katıldı ve Yıldırım Bayezid'e karşı savaştı. Akkoyunlu'nun Timur'la kurduğu ittifak, hanedana Diyarbekir bölgesindeki hâkimiyetini pekiştirme imkânı verdi; buna karşılık rakip Karakoyunlu bu dönemde Timur'un düşmanı olarak sürgüne gitti. İki Türkmen hanedanının kaderi, Timur karşısında aldıkları ters tavırlarla ayrıştı. ⚠️ `dunya:4` var olan kayıtlardan DEVRALINDI.",
  kaynak:"akkoyunlular" },

{ t:"1407-01-01", b:"Çekim, Âmid önünde mağlûp edildi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas"],
  yer_id:"Diyarbakır",
  d:"Karayülük Osman Bey, Çekim'i Âmid (Diyarbakır) önünde mağlûp etti. Âmid, Akkoyunlu'nun bu tarihten sonra bir asır boyunca merkezi olacak şehirdir; künye de başkenti 'Diyarbekir → Tebriz' diye kaydeder.",
  kaynak:"akkoyunlular" },

{ t:"1409-01-01", b:"Mardin kuşatıldı, Artuklu hânedanı sona erdi", tur:"kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","kusatma","karakoyunlu"],
  yer_id:"Mardin",
  d:"813 (1409) yılında Mardin kuşatıldı ve şehirdeki Artuklu hânedanı sona erdi; bölgedeki üstünlük Kara Yûsuf'un elindeki Karakoyunlu'ya geçti. Üç asırlık bir hanedanın tasfiyesi, Doğu Anadolu'da artık yalnız Türkmen konfederasyonlarının hüküm süreceğini ilân etti.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1412-01-01", b:"Ergani yakınında Kara Yûsuf'a yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu"],
  yer_id:"",
  d:"Karayülük Osman Bey, Ergani yakınlarında Kara Yûsuf karşısında yenildi. Karakoyunlu'nun Timur sonrası yükselişi, Akkoyunlu'yu otuz yıl sürecek bir savunma konumuna itti. ⚠️ Ergani'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"akkoyunlular" },

{ t:"1417-01-01", b:"Kara Yûsuf'a yeniden yenilgi ve barış", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","antlasma","karakoyunlu"],
  yer_id:"Mardin",
  d:"820 (1417) yılında Karayülük Osman Bey, Mardin ile Âmid arasında Kara Yûsuf'a bir kez daha yenildi ve barış yapıldı. Akkoyunlu'nun bu dönemde varlığını savaşarak değil anlaşarak sürdürdüğü görülür.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1418-09-20", b:"Mercidâbık yenilgisinden sonra Karayülük Halep'e kaçtı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","memluk"],
  yer_id:"Halep",
  d:"18 Şâban 821 (20 Eylül 1418) günü Mercidâbık'ta Kara Yûsuf'a ikinci kez yenilen Karayülük Osman Bey, Memlük idaresindeki Halep'e sığındı. Akkoyunlu'nun Memlük himayesine girdiği bu dönem, hanedanın en zayıf yıllarıdır. ⚠️ Mercidâbık'ın atlas kaydı yoktur; `yer_id` Karayülük'ün sığındığı Halep'e verildi ve bu tercih açıkça yazıldı.",
  kaynak:"akkoyunlular · karakoyunlular" },

{ t:"1420-01-01", b:"Karayülük Tahran'da Pîr Ömer'i yendi, kısa süre sonra öldü", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas"],
  yer_id:"Tahran",
  d:"Karayülük Osman Bey, Tahran'da Pîr Ömer'i yenip esir aldı; kısa süre sonra kendisi öldü. ⚠️ NOT: TDV `akkoyunlular` maddesi burada bir ölümden söz eder, ancak aynı madde Karayülük Osman Bey'in 1435'te Erzurum'da öldüğünü de yazar — yani bu satırdaki 'öldü' ifadesi Pîr Ömer'e ait olmalıdır. Kaynağın kendi metnindeki bu belirsizlik GİZLENMİYOR, kaydediliyor.",
  kaynak:"akkoyunlular (metinde belirsizlik var, açıkça bildirildi)" },

{ t:"1421-04-01", b:"Şeyhkendi'de İskender'e yenilgi", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu"],
  yer_id:"",
  d:"Rebîülâhir 824 (Nisan 1421) ayında Karayülük Osman Bey, Kara Yûsuf'un oğlu İskender tarafından Şeyhkendi'de mağlûp edildi. Karakoyunlu'nun yeni hükümdarı, ilk işi olarak Akkoyunlu'yu bastırmıştı.",
  kaynak:"karakoyunlular · akkoyunlular" },

{ t:"1429-01-01", b:"Memlükler, Karayülük'ün oğlu Hâbil'i esir aldı", tur:"kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["memluk","hanedan"],
  yer_id:"",
  d:"832 (1429) yılında Memlükler, Karayülük Osman Bey'in oğlu Hâbil'i esir aldı. Bir zamanlar sığınılan Memlük Devleti'nin artık bir tehdit hâline gelmesi, Akkoyunlu'nun güneyde de sıkıştığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1430-01-01", b:"Hâbil Kahire'de öldü", tur:"kayip",
  onem:2, dunya:1, kapsam:"dis", etiket:["olum","hanedan","memluk"],
  yer_id:"Kahire",
  d:"833 (1430) yılında esir tutulan Hâbil Kahire'de öldü. Hanedan üyesinin esarette ölmesi, iki yıl sonra imzalanacak Memlük tâbiiyet anlaşmasının zeminini hazırladı.",
  kaynak:"akkoyunlular" },

{ t:"1431-01-01", b:"Memlükler'e tâbi kalma şartıyla barış yapıldı", tur:"antlasma",
  onem:4, dunya:1, kapsam:"dis", etiket:["antlasma","tabiiyet","memluk"],
  yer_id:"",
  d:"834 (1431) yılında Akkoyunlu, Memlükler'e bağlı kalma şartıyla barış yaptı. Hanedanın resmen bir başka devletin tâbiiyetine girdiği bu anlaşma, Uzun Hasan'ın bağımsız imparatorluk kuracağı dönemin ne kadar uzaktan başladığını gösterir. İmparatorluk çapında bir siyasî statü değişimi olduğu için belirli bir yere bağlanmadı.",
  kaynak:"akkoyunlular", kapsam_genis:true },

{ t:"1434-01-01", b:"Erzurum ele geçirildi", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Erzurum",
  d:"837 (1434) yılında Erzurum kuşatılıp ele geçirildi ve yönetimi Şeyh Hasan'a verildi. Memlük tâbiiyetine rağmen kuzeye doğru yapılan bu genişleme, Akkoyunlu'nun tâbiiyeti bir teslimiyet değil bir nefes alma olarak kullandığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1435-09-01", b:"Karayülük Osman Bey Erzurum'da öldü", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","taht-degisikligi","karakoyunlu"],
  yer_id:"Erzurum",
  d:"Safer 839 (Eylül 1435) ayında Karayülük Osman Bey, Erzurum'un kuzeybatısında Karakoyunlu hükümdarı İskender'e yenilerek aldığı yaralardan öldü. Elli yediye yakın yıl hanedanı yöneten, Kadı Burhâneddin'i ortadan kaldıran ve Timur'un yanında Ankara'da savaşan hükümdarın ölümü, Akkoyunlu'yu bir kuşak boyunca sürecek bir iç çekişmeye bıraktı.",
  kaynak:"akkoyunlular · karakoyunlular" },

// ───────────────────────── HAMZA BEY VE CİHANGİR (1435-1452)

{ t:"1437-06-10", b:"Hamza Bey, Bağdat hâkimi İsfahan Mirza'yı Mardin yakınında yendi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu"],
  yer_id:"Mardin",
  d:"5 Zilhicce 840 (10 Haziran 1437) günü Hamza Bey, Karakoyunlu'nun Bağdat hâkimi İsfahan Mirza'yı Mardin yakınlarında mağlûp etti ve Mardin'i tahkim etti. Karayülük'ün ölümünden sonraki iki yıl içinde kazanılan bu zafer, Akkoyunlu'nun çöküşe geçmediğini gösterdi. ⚠️ Bu çarpışma, o sırada on iki yaşındaki Uzun Hasan'ın yakından tanık olduğu ilk büyük savaştır.",
  kaynak:"uzun-hasan" },

{ t:"1439-01-01", b:"Uzun Hasan ve kardeşi Cihangir'in Mardin-Ergani akınları", tur:"askeri",
  onem:2, dunya:1, kapsam:"ic", etiket:["askeri","akin","hanedan"],
  yer_id:"Mardin",
  d:"842-843 (1439-1440) yıllarında genç Uzun Hasan, kardeşi Cihangir ile birlikte Mardin ve Ergani çevresinde akınlar düzenledi. Hanedanın sonraki en büyük hükümdarının askerî eğitimi bu küçük ölçekli harekâtlarla başladı.",
  kaynak:"uzun-hasan" },

{ t:"1440-01-01", b:"Uzun Hasan, Selçuk Şah Begüm ile evlendi", tur:"hanedan",
  onem:3, dunya:1, kapsam:"ic", etiket:["hanedan","sosyal"],
  yer_id:"Diyarbakır",
  d:"On beş yaşındaki Uzun Hasan, amcası Muhammed'in kızı Selçuk Şah Begüm ile evlendi. Hanedan içi bu evlilik, Uzun Hasan'ın taht mücadelesinde kendisine bir kanat kazandırdı; Selçuk Şah Begüm 1490 vebasına kadar hanedanın en nüfuzlu kadınlarından biri olarak kalacaktır.",
  kaynak:"uzun-hasan" },

{ t:"1444-10-01", b:"Hamza Bey öldü, Cihangir hanedanın başına geçti", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi"],
  yer_id:"Diyarbakır",
  d:"Receb 848 (Ekim 1444) ayında Hamza Bey öldü ve yerine Cihangir geçti. ⚠️ NOT: TDV `akkoyunlular` maddesi Hamza Bey'in ölümünü Ekim 1447'ye, `uzun-hasan` maddesi Ekim 1444'e koyuyor. İKİ TDV MADDESİ ÇELİŞİYOR; ikisi de kaydedildi, biri seçilip öteki gizlenmedi. Bu maddede `uzun-hasan`ın ayrıntılı biyografik anlatımı esas alındı.",
  kaynak:"uzun-hasan (⚠️ akkoyunlular maddesi 1447 diyor — çelişki açıkça bildirildi)" },

{ t:"1450-01-01", b:"Cihan Şah Erzincan'ı aldı — Akkoyunlu bunalımı derinleşti", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kaybi","karakoyunlu"],
  yer_id:"Erzincan",
  d:"854 (1450) yılında Karakoyunlu hükümdarı Cihan Şah Erzincan'ı ele geçirdi. Kaybedilen bu şehir, Cihangir'in Karakoyunlu ile barış yapmak zorunda kalmasına ve kardeşi Uzun Hasan'ın ondan ayrılarak kendi yolunu çizmesine yol açtı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1452-09-01", b:"UZUN HASAN ÂMİD'İ ELE GEÇİRDİ — 'ulu bey' ilân edildi", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["taht-degisikligi","hukumdar","baskent","ic-savas"],
  yer_id:"Diyarbakır",
  d:"Ramazan 856 (Eylül 1452) ayında yirmi yedi yaşındaki Uzun Hasan, bir hile ile Âmid'i (Diyarbakır) ele geçirerek 'ulu bey' ilân edildi; kardeşi Cihangir, Cihan Şah'a sığındı. Akkoyunlu tarihinin dönüm noktasıdır: hanedan bu tarihten sonra Memlük tâbiiyetinde savunmada duran bir beylik değil, otuz yıl içinde İran'ın tamamına uzanacak bir imparatorluk olacaktır.",
  kaynak:"uzun-hasan · akkoyunlular" },

// ───────────────────────── UZUN HASAN · YÜKSELİŞ (1452-1467)

{ t:"1457-06-01", b:"Âmid önünde Karakoyunlu ordusuna büyük zafer", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","donum-noktasi"],
  yer_id:"Diyarbakır",
  d:"Receb 861 (Haziran 1457) ayında Uzun Hasan, kardeşi Cihangir'i destekleyen Karakoyunlu ordusunu (kumandanı Tarhanoğlu Rüstem) Âmid yakınlarında ağır bir yenilgiye uğrattı. Bu zafer, yüz yıldır Karakoyunlu'nun üstün olduğu dengeyi tersine çevirdi ve on yıl sonraki Bingöl baskınına giden yolu açtı.",
  kaynak:"uzun-hasan · karakoyunlular" },

{ t:"1458-01-01", b:"Birinci Gürcistan seferi — Tiflis yağmalandı, altı kale alındı", tur:"sefer",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","sefer","toprak","kafkas"],
  yer_id:"Tiflis",
  d:"862 (1458) yılında Uzun Hasan ilk Gürcistan seferine çıktı; Tiflis'i yağmaladı ve altı kale ele geçirdi. Kafkasya'ya yönelen dört seferin ilkidir ve Akkoyunlu'nun artık kendi çekirdek bölgesinin dışına taşan bir güç olduğunu gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1461-01-01", b:"Fâtih Trabzon'u fethetti — Uzun Hasan engel olamadı, Despina ile evlendi", tur:"siyaset",
  onem:4, dunya:3, kapsam:"dis", etiket:["siyaset","osmanli","hanedan","toprak-kaybi"],
  yer_id:"Trabzon",
  d:"865 (1461) yılında Fâtih Sultan Mehmed Trabzon'u fethetti ve Uzun Hasan buna engel olamadı; Trabzon Komnenos hanedanından Despina Hatun ile evlenerek imparatorluk aileleriyle bağ kurdu. Bir asır önce Akkoyunlu'nun akın düzenlediği devletin Osmanlı eliyle ortadan kaldırılması, iki devletin Doğu Anadolu'da karşı karşıya geldiği ilk andır — Otlukbeli'ne giden sürecin başlangıcıdır.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1462-01-01", b:"Hasankeyf alındı, Eyyûbî kalıntısı sona erdi; Bayburt katıldı", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"",
  d:"866 (1462) yılında Uzun Hasan Hısnıkeyfâ'yı (Hasankeyf) ele geçirerek buradaki Eyyûbî hanedan kalıntısına son verdi ve Bayburt'u topraklarına kattı. Aynı yıl ikinci Gürcistan seferi de düzenlendi. ⚠️ Hasankeyf ve Bayburt'un atlas verisinde yerleşim kaydı YOKTUR; ikisi de Akkoyunlu sahasının içindedir.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1464-01-01", b:"Karamanoğlu İshak Bey'e Karaman yönetimi kazandırıldı", tur:"siyaset",
  onem:4, dunya:2, kapsam:"dis", etiket:["siyaset","ittifak","osmanli"],
  yer_id:"Karaman",
  d:"869 (1464-65) yılında Uzun Hasan, Karamanoğlu İshak Bey'e Karaman yönetimini kazandırdı. Akkoyunlu'nun Orta Anadolu'daki Osmanlı karşıtı beyliklere destek vermesi, iki devlet arasındaki gerginliği doğrudan bir çatışmaya taşıyan siyasettir.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1465-01-01", b:"Harput Dulkadıroğulları'ndan alındı", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Harput (Elazığ)",
  d:"869 (1465) yılında Harput, Dulkadıroğulları'ndan fethedildi. Fırat'ın yukarı havzasındaki bu kazanç, Akkoyunlu'nun batı sınırını Osmanlı nüfuz sahasının kıyısına taşıdı.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1467-11-10", b:"BİNGÖL BASKINI — Cihan Şah öldürüldü, Karakoyunlu çöktü", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","karakoyunlu","donum-noktasi","toprak"],
  yer_id:"",
  d:"12 Rebîülâhir 872 (10 Kasım 1467) günü Uzun Hasan, Karakoyunlu hükümdarı Cihan Şah'ı Bingöl civarında bir şafak baskınıyla öldürdü; altı bin asker, Cihan Şah'ın iki oğlu (Muhammedî ve Yûsuf) ile bütün emîrleri esir alındı. Bir asırdır Akkoyunlu'nun önünü kesen rakip hanedan bu tek gecede tasfiye edildi ve Azerbaycan, Irak ve İran'ın kapıları açıldı. ⚠️ Bingöl'ün atlas kaydı YOKTUR. `dunya:2` var olan kayıttan DEVRALINDI.",
  kaynak:"uzun-hasan · karakoyunlular · cihan-sah" },

// ───────────────────────── UZUN HASAN · İMPARATORLUK (1468-1478)

{ t:"1468-09-01", b:"Merend'de Hasan Ali yenildi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","karakoyunlu"],
  yer_id:"Merend",
  d:"Safer 873 (Eylül 1468) ayında Uzun Hasan, Cihan Şah'ın oğlu Hasan Ali'yi Merend'de mağlûp etti. Karakoyunlu'nun Azerbaycan'a dönme ihtimali böylece ortadan kalktı.",
  kaynak:"uzun-hasan" },

{ t:"1469-01-29", b:"Timurlu Ebû Said Mirza Han yenildi ve idam edildi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["askeri","savas","timur","olum"],
  yer_id:"",
  d:"15 Receb 873 (29 Ocak 1469) günü Uzun Hasan, Çağatay hükümdarı Ebû Said Mirza Han'ı yenerek idam ettirdi. Timurlu hanedanının başındaki hükümdarın bir Türkmen hükümdarı eliyle idam edilmesi, İran'da Timurlu çağının kapandığı ve Akkoyunlu çağının açıldığı andır.",
  kaynak:"uzun-hasan" },

{ t:"1469-04-01", b:"Hasan Ali öldürüldü — Karakoyunlu hanedanı sona erdi", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","olum","karakoyunlu","donum-noktasi"],
  yer_id:"Hemedan",
  d:"Şevval 873 (Nisan-Mayıs 1469) ayında Uzun Hasan'ın oğlu Uğurlu Mehmed, Hemedan yakınlarında Hasan Ali'yi öldürdü. Karakoyunlu Devleti tarih sahnesinden çekildi ve bütün toprakları Akkoyunlu'ya geçti.",
  kaynak:"uzun-hasan · karakoyunlular" },

{ t:"1469-06-01", b:"Kirman ele geçirildi", tur:"fetih",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Kirman",
  d:"874 (1469) yılında Kirman ele geçirildi. Akkoyunlu toprakları böylece İran'ın güneydoğusuna kadar uzandı; Diyarbekir'de kurulan hanedan artık bir Doğu Anadolu beyliği değil, İran platosunun büyük kısmına hükmeden bir imparatorluktur.",
  kaynak:"akkoyunlular" },

{ t:"1470-01-01", b:"Bağdat ele geçirildi", tur:"fetih",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak","fetih"],
  yer_id:"Bağdat",
  d:"875 (1470) yılında Bağdat ele geçirildi. Irak'ın merkezi, üç yıl önce Karakoyunlu'nun elindeyken şimdi Akkoyunlu'nundur; Uzun Hasan'ın imparatorluğu bu fetihle Basra körfezine açılan ticaret yollarını da kapsar hâle geldi.",
  kaynak:"akkoyunlular" },

{ t:"1472-01-01", b:"Venedik'e elçi gönderildi — ateşli silâh talebi", tur:"siyaset",
  onem:5, dunya:3, kapsam:"dis", etiket:["siyaset","ittifak","teknoloji","venedik","osmanli"],
  yer_id:"",
  d:"877 (1472) yılında Uzun Hasan, Hacı Muhammed'i elçi olarak Venedik'e göndererek ateşli silâh istedi. Bir Türkmen hükümdarının Osmanlı'ya karşı Avrupa'dan top ve tüfek talep etmesi, Otlukbeli'nde belirleyici olacak teknoloji farkının Akkoyunlu tarafından da GÖRÜLDÜĞÜNÜ kanıtlar; sorun bilgisizlik değil, silâhların zamanında ulaşmamasıydı. İmparatorluk çapında bir dış siyaset kararı olduğu için belirli bir yere bağlanmadı.",
  kaynak:"uzun-hasan", kapsam_genis:true },

{ t:"1472-08-01", b:"Yûsufça Mirza Eflâtunpınarı'nda yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","osmanli"],
  yer_id:"",
  d:"Rebîülevvel 877 (Ağustos 1472) ayında Uzun Hasan'ın sürgündeki Karamanoğlu şehzadelerini desteklemek için gönderdiği yirmi bin kişilik kuvvetin bir kolu, Osmanlı Anadolu Beylerbeyi Koca Dâvud Paşa tarafından Eflâtunpınarı'nda bozguna uğratıldı. Otlukbeli'nden bir yıl önceki bu yenilgi, Osmanlı ordusunun üstünlüğünün ilk somut işaretiydi. ⚠️ Eflâtunpınarı'nın atlas kaydı YOKTUR.",
  kaynak:"otlukbeli-savasi · uzun-hasan" },

{ t:"1473-02-01", b:"Venedik on altı top ve bin tüfek gönderdi — hiçbiri ulaşmadı", tur:"teknoloji",
  onem:5, dunya:2, kapsam:"dis", etiket:["teknoloji","ittifak","venedik","askeri"],
  yer_id:"",
  d:"Şubat 1473'te Venedik, Uzun Hasan'ın talebi üzerine on altı top ve bin tüfeği gemiyle yola çıkardı; sevkiyat Akkoyunlu'ya HİÇ ULAŞMADI. Altı ay sonra Otlukbeli'nde Akkoyunlu ordusu tam da bu silâhların yokluğu yüzünden Osmanlı topçusu karşısında çözüldü. 📌 Bu madde, bir savaşın sonucunu belirleyen şeyin bazen savaş alanında değil bir lojistik başarısızlıkta olduğunu gösterdiği için ayrı yazıldı.",
  kaynak:"uzun-hasan", kapsam_genis:true },

{ t:"1473-08-11", b:"OTLUKBELİ SAVAŞI — Osmanlı topçusu karşısında ağır yenilgi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["askeri","savas","osmanli","donum-noktasi","teknoloji"],
  yer_id:"",
  d:"16 Rebîülevvel 878 (11 Ağustos 1473 Çarşamba) günü Tercan yakınlarındaki Otlukbeli'nde (Üçağızlı) Akkoyunlu ordusu, Fâtih Sultan Mehmed'in ateşli silâhlarla donanmış ordusu karşısında ağır bir yenilgi aldı. Akkoyunlu tarafında yaklaşık 70.000 kişi vardı (40.000'i mızraklı zırhlı süvari); sağ kanadı yöneten Kör Zeynel Mirza savaş sırasında öldürüldü, sol kanatta Uğurlu Mehmed Mirza bulunuyordu. Angiolello'ya göre Akkoyunlu 10.000, Osmanlı yalnızca 1.000 kayıp verdi; Uzun Hasan'ın nişancısı Hoca Seyyid Mehmed Münşî dâhil çok sayıda kişi esir düştü. Savaş, klasik Türkmen süvari ordularının artık ateşli silâhlı düzenli birliklerle baş edemeyeceğini gösterdi ve Akkoyunlu bir daha toparlanamadı. ⚠️ Otlukbeli ve Tercan'ın atlas verisinde yerleşim kaydı YOKTUR — Osmanlı-Akkoyunlu ilişkisinin dönüm noktasının haritada karşılığı yok. `dunya:2` var olan kayıttan DEVRALINDI (kendi kanaatim 3'tü, bildirildi).",
  kaynak:"otlukbeli-savasi · uzun-hasan" },

{ t:"1473-08-23", b:"Fâtih Bayburt'u ve Şarkîkarahisar'ı aldı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","toprak-kaybi","osmanli"],
  yer_id:"Karahisâr-ı Şarkî (Şebinkarahisar)",
  d:"28 Rebîülevvel 878 (23 Ağustos 1473) günü Otlukbeli zaferinden on iki gün sonra Fâtih Sultan Mehmed Bayburt'u, ardından Şarkîkarahisar kalesini ele geçirdi. Osmanlı ordusu Akkoyunlu'yu takip etmedi ve savaş alanında iki üç gün kaldıktan sonra geri çekildi — yani Otlukbeli bir işgal değil, bir caydırma harekâtıydı ve Akkoyunlu'nun batıya bakışını kalıcı olarak kırdı. ⚠️ Bayburt'un atlas kaydı yoktur; `yer_id` kaydı bulunan Şarkîkarahisar'a verildi.",
  kaynak:"otlukbeli-savasi" },

{ t:"1473-01-01", b:"Bitlis uzun bir kuşatmadan sonra alındı", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","kusatma","toprak"],
  yer_id:"Bitlis",
  d:"1473'te Biçenoğlu Süleyman Bey uzun süren bir kuşatmanın ardından Bitlis'i ele geçirdi. Otlukbeli yenilgisiyle aynı yıla düşen bu kazanç, Akkoyunlu'nun batıda çökerken doğuda hâlâ genişleyebildiğini gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1474-01-01", b:"Uğurlu Mehmed'in isyanı — Şiraz alındı, Tebriz Çekirli'nin eline geçti", tur:"isyan",
  onem:5, dunya:1, kapsam:"ic", etiket:["isyan","ic-savas","hanedan"],
  yer_id:"Şiraz",
  d:"878 (1474) yılında Uzun Hasan'ın oğlu Uğurlu Mehmed İsfahan'dan isyan etti ve Şiraz'ı ele geçirdi; aynı sırada Çekirli aşireti Tebriz'i ele geçirdi ve Uğurlu Mehmed Osmanlılar'a sığındı. Otlukbeli yenilgisinden bir yıl sonra patlayan bu iç isyan, imparatorluğun dış yenilgiyi iç çözülmeye çevirdiğini gösterir.",
  kaynak:"uzun-hasan" },

{ t:"1475-07-01", b:"Uzun Hasan'ın kardeşi Üveys isyanda idam edildi", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["isyan","olum","hanedan"],
  yer_id:"",
  d:"Rebîülevvel 880 (Temmuz 1475) ayında Uzun Hasan'ın kardeşi Üveys, isyanı sebebiyle idam edildi. Hanedan içi tasfiyeler Uzun Hasan'ın son yıllarını belirledi.",
  kaynak:"uzun-hasan" },

{ t:"1476-01-01", b:"Dördüncü Gürcistan seferi — Kral Bagrat tâbi kılındı", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas","tabiiyet"],
  yer_id:"Tiflis",
  d:"881 (1476) yılında Uzun Hasan dördüncü Gürcistan seferine çıktı ve Kral Bagrat'ı tâbiiyete zorladı; seferden hasta olarak döndü. Bu, hükümdarın son askerî harekâtıdır.",
  kaynak:"uzun-hasan" },

{ t:"1477-12-01", b:"Uğurlu Mehmed Erzincan'da öldürüldü", tur:"hanedan",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan","ic-savas"],
  yer_id:"Erzincan",
  d:"Ramazan 882 (Aralık 1477) ayında isyan edip Osmanlılar'a sığınan Uğurlu Mehmed, Erzincan'da öldürüldü. Karakoyunlu hanedanına son veren komutanın kendi babasına isyan edip bir suikastle ölmesi, Akkoyunlu veraset düzeninin de en az rakibininki kadar kırılgan olduğunu gösterdi.",
  kaynak:"uzun-hasan" },

{ t:"1478-01-06", b:"UZUN HASAN ÖLDÜ — imparatorluk parçalanmaya başladı", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["olum","taht-degisikligi","donum-noktasi"],
  yer_id:"Tebriz",
  d:"Ramazan 882 bayramı günü (6 Ocak 1478) Uzun Hasan öldü ve kendi yaptırdığı Nasriyye bahçesine defnedildi. Yirmi altı yılda Diyarbekir'de bir beylikten Fırat'tan Horasan'a uzanan bir imparatorluk kurmuştu; ölümünden sonra hanedan yirmi üç yıl içinde birbiriyle savaşan hükümdarlara bölünecek ve Safevîlere yenik düşecektir. ⚠️ `dunya:1` var olan kayıttan DEVRALINDI.",
  kaynak:"uzun-hasan · akkoyunlular" },

// ───────────────────────── YÂKUB BEY (1478-1490)

{ t:"1478-06-01", b:"Halil, Hoy çayında yenildi — Yâkub Bey hükümdar oldu", tur:"hukumdar",
  onem:5, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas","hukumdar"],
  yer_id:"Hoy",
  d:"883 (1478) yılında Uzun Hasan'ın oğlu Halil, kardeşi Yâkub Bey'e karşı Hoy çayında yenildi ve Yâkub Bey hükümdar oldu. On iki yıl sürecek olan Yâkub Bey devri, Akkoyunlu'nun siyasî olarak duraklarken kültürel olarak zirveye çıktığı dönemdir.",
  kaynak:"akkoyunlular" },

{ t:"1480-01-01", b:"Memlükler'e karşı zafer — Urfa meselesi", tur:"savas",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","memluk"],
  yer_id:"Urfa",
  d:"885 (1480) yılında Yâkub Bey, Urfa meselesi sebebiyle çıkan çatışmada Memlükler'e karşı zafer kazandı. Elli yıl önce Memlük tâbiiyetine giren hanedanın artık aynı devleti yenebilecek durumda olması, Uzun Hasan'ın bıraktığı askerî mirasın gücünü gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1486-01-01", b:"Gürcistan seferi başarıyla sonuçlandı", tur:"sefer",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas"],
  yer_id:"Tiflis",
  d:"891 (1486) yılında Yâkub Bey Gürcistan'a başarılı bir sefer düzenledi. Babasının dört seferle kurduğu Kafkasya üstünlüğü sürdürülmüştür.",
  kaynak:"akkoyunlular" },

{ t:"1489-01-01", b:"Gürcistan'a yeni sefer", tur:"sefer",
  onem:2, dunya:1, kapsam:"dis", etiket:["askeri","sefer","kafkas"],
  yer_id:"Tiflis",
  d:"894 (1489) yılında Gürcistan'a yeni bir sefer düzenlendi. Yâkub Bey devrinin son askerî harekâtıdır; ertesi yılki veba salgını hanedanı savaşsız yıkacaktır.",
  kaynak:"akkoyunlular" },

{ t:"1490-01-01", b:"VEBA SALGINI — Yâkub Bey, Selçuk Şah Begüm ve Yûsuf Mirza öldü", tur:"salgin",
  onem:5, dunya:1, kapsam:"ic", etiket:["salgin","sosyal","olum","taht-degisikligi"],
  yer_id:"Tebriz",
  d:"895 (1490) yılında çıkan veba salgınında Selçuk Şah Begüm, Yûsuf Mirza ve hükümdar Yâkub Bey öldü; yerine Baysungur geçti ve Sofu Halil Bey, Mesîh Mirza'yı mağlûp etti. 🔴 Akkoyunlu'yu yıkıma sürükleyen şey bir savaş değil bir SALGINDIR: hanedanın hükümdarı, en nüfuzlu kadını ve bir şehzadesi aynı yıl ölünce devlet on bir yıl sürecek bir taht kavgasına girdi ve bu kavganın sonunda Safevîlere yenildi.",
  kaynak:"akkoyunlular" },

// ───────────────────────── PARÇALANMA (1490-1501)

{ t:"1492-05-01", b:"Rüstem Bey hükümdar oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas"],
  yer_id:"Tebriz",
  d:"Mayıs 1492'de Rüstem Bey hükümdar oldu. Veba salgınından sonraki iki yıl içinde tahtın üçüncü kez el değiştirmesi, Akkoyunlu'da artık istikrarlı bir merkezî iktidarın kalmadığını gösterir.",
  kaynak:"akkoyunlular" },

{ t:"1493-01-01", b:"Baysungur mağlûp edilip öldürüldü", tur:"ic-savas",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","olum","hanedan"],
  yer_id:"",
  d:"898 (1493) yılında Baysungur mağlûp edilerek öldürüldü. Hanedan üyelerinin birbirini ortadan kaldırdığı bu döngü, Safevî hareketinin güçlenmesi için gereken boşluğu yarattı.",
  kaynak:"akkoyunlular" },

{ t:"1497-05-01", b:"Rüstem Gürcistan'a kaçtı, Göde Ahmed Tebriz'de hükümdar oldu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas"],
  yer_id:"Tebriz",
  d:"Mayıs 1497'de Rüstem Gürcistan'a kaçtı ve Göde Ahmed Tebriz'de hükümdar ilân edildi; aynı yılın aralık ayında İbe Sultan, Murad'ı hükümdar ilân etti. Aynı yıl içinde iki rakip hükümdar ilânı, devletin fiilen ikiye bölündüğü anı işaret eder.",
  kaynak:"akkoyunlular" },

{ t:"1498-01-01", b:"Elvend hükümdar ilân edildi, Murad hapsedildi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht-degisikligi","ic-savas"],
  yer_id:"Tebriz",
  d:"903 (1498) yılında Elvend hükümdar ilân edildi, Murad Rûyindiz Kalesi'ne hapsedildi ve ardından Muhammedî Mirza hükümdar oldu. Bir yıl içinde üç ayrı hükümdar — merkezî otoritenin çöküşü artık geri döndürülemezdir. ⚠️ Rûyindiz Kalesi'nin atlas kaydı yoktur.",
  kaynak:"akkoyunlular" },

{ t:"1499-01-01", b:"Aziz Kendi savaşı — Muhammedî Mirza kazandı, İbe Sultan öldü", tur:"ic-savas",
  onem:3, dunya:1, kapsam:"ic", etiket:["ic-savas","savas","olum"],
  yer_id:"",
  d:"904 (1499) yılında Aziz Kendi'de yapılan savaşta Muhammedî Mirza galip geldi ve İbe Sultan öldü. ⚠️ Aziz Kendi'nin atlas verisinde yerleşim kaydı YOKTUR.",
  kaynak:"akkoyunlular" },

{ t:"1500-01-01", b:"DEVLET RESMEN İKİYE BÖLÜNDÜ — Elvend ve Murad", tur:"siyaset",
  onem:5, dunya:1, kapsam:"ic", etiket:["siyaset","ic-savas","donum-noktasi"],
  yer_id:"",
  d:"905 (1500) yılında Akkoyunlu Devleti resmen ikiye ayrıldı: Elvend'e Âmid, Azerbaycan ve Arrân; Murad'a Irakeyn, Kirman ve Fars düştü. 🔴 Bu bölünme, bir yıl sonra Şah İsmâil'in iki parçayı ayrı ayrı yenmesini mümkün kıldı — birleşik bir Akkoyunlu ordusu karşısında Safevî hareketinin başarı şansı çok daha düşük olurdu. İmparatorluk çapında bir yapı değişimi olduğu için belirli bir yere bağlanmadı.",
  kaynak:"akkoyunlular", kapsam_genis:true },

{ t:"1501-04-01", b:"ŞAH İSMÂİL TEBRİZ'E GİRDİ — Safevî Devleti kuruldu", tur:"kayip",
  onem:5, dunya:4, kapsam:"dis", etiket:["askeri","savas","toprak-kaybi","donum-noktasi","safevi"],
  yer_id:"Tebriz",
  d:"Nisan 1501'de Şah İsmâil, Elvend'i yenerek Tebriz'e girdi ve Safevî Devleti kuruldu. Akkoyunlu'nun başkenti ve Azerbaycan'ın merkezi elden çıktı. 🔴 AMA DEVLET BİTMEDİ: Murad'ın elindeki Irak, Fars ve Kirman on üç yıl daha Akkoyunlu idaresinde kaldı. `CLAUDE.md §3.5`: *merkezin kaybı ≠ devletin sonu* — bu ayrım yapılmazsa harita 1501'de biten bir Akkoyunlu gösterir ve yanılır.",
  kaynak:"akkoyunlular" },

// ───────────────────────── SON ON ÜÇ YIL (1501-1514)

{ t:"1503-01-01", b:"Murad, Hemedan yakınında yenildi", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["askeri","savas","safevi","toprak-kaybi"],
  yer_id:"Hemedan",
  d:"909 (1503) yılında Akkoyunlu hükümdarı Murad, Hemedan yakınlarında Safevîler karşısında yenildi. Batı İran'daki son direniş kırıldı; hanedan artık yalnız Irak'ta tutunabiliyordu.",
  kaynak:"akkoyunlular" },

{ t:"1505-01-01", b:"Elvend öldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["olum","hanedan"],
  yer_id:"",
  d:"911 (1505) yılında Tebriz'i kaybeden Elvend öldü. Bölünmüş devletin iki kolundan biri böylece sahipsiz kaldı ve geriye yalnız Murad'ın Irak kolu kaldı.",
  kaynak:"akkoyunlular" },

{ t:"1509-01-01", b:"Murad Bağdat'tan kaçtı — Irak da elden çıktı", tur:"kayip",
  onem:4, dunya:1, kapsam:"dis", etiket:["toprak-kaybi","safevi"],
  yer_id:"Bağdat",
  d:"915 (1509) yılında Murad Bağdat'tan kaçtı. Akkoyunlu'nun son toprak parçası da Safevîlerin eline geçti; hanedan bundan sonra beş yıl daha yaşar ama artık bir devlet değil, bir hükümdar adayıdır.",
  kaynak:"akkoyunlular" },

{ t:"1514-01-01", b:"MURAD ÖLDÜRÜLDÜ — Akkoyunlu Devleti tarih sahnesinden silindi", tur:"kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["olum","donum-noktasi","toprak-kaybi"],
  yer_id:"",
  d:"920 (1514) yılında son Akkoyunlu hükümdarı Murad öldürüldü ve Akkoyunlu Devleti tarih sahnesinden silindi. Tur Ali Bey'in 1340'ta Trabzon'a düzenlediği akınlarla başlayan yüz yetmiş dört yıllık hanedan böylece sona erdi. ⚠️ Aynı yıl Çaldıran'da Osmanlı ile Safevî karşı karşıya geldi: Akkoyunlu'nun bıraktığı boşluk artık iki büyük imparatorluk arasında paylaşılacaktır. TDV gün vermiyor, `YYYY-01-01` yazıldı — uydurulmadı.",
  kaynak:"akkoyunlular" },

// ───────────────────────── KÜLTÜR · İLİM · MİMARÎ · HUKUK · İKTİSAT

{ t:"1452-09-01", b:"HASAN PADİŞAH KANUNLARI — Akkoyunlu vergi kanunnâmesi", tur:"hukuk",
  onem:5, dunya:3, kapsam:"ic", etiket:["hukuk","idari","iktisat","reform"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, 'Hasan Padişah Kanunları' adıyla bilinen bir vergi kanunnâmesi düzenletti; çiftçiden, esnaftan, sanatkârdan ve tüccardan alınan vergilerin âdil biçimde tarh ve tahsili esasına dayanıyordu. 🔴 Bu kanunnâmenin önemi Akkoyunlu'yu aşar: Osmanlılar doğu eyaletlerinde fetihten sonra uzun süre bu kanunları uygulamayı sürdürdü, Safevîler de İran'da uzun süre kullandı. Yani hanedan yıkıldıktan sonra da hukuku yaşadı — Akkoyunlu'nun en kalıcı eseri bir kale ya da cami değil, bir vergi düzenidir. ⚠️ TARİH HAKKINDA: kaynak kanunnâmenin çıkarılış yılını vermiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı. Bu bir TERCİHTİR, ölçüm değildir.",
  kaynak:"uzun-hasan · akkoyunlular" },

{ t:"1452-09-01", b:"'Hasanbegî' sikkesi bastırıldı", tur:"iktisat",
  onem:3, dunya:1, kapsam:"ic", etiket:["iktisat","idari","para"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, iki akçe değerinde 'hasanbegî' adlı sikkeler bastırdı. Kendi adını taşıyan bir para birimi çıkarmak, Memlük tâbiiyetinden çıkan hanedanın egemenlik iddiasının iktisadî ilânıdır. ⚠️ TARİH HAKKINDA: kaynak basım yılını vermiyor; madde iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Bayındır damgası devlet arması yapıldı — Oğuz soy iddiası", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","siyaset","sosyal","kimlik"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan, Oğuz Han ve Bayındır Han soyundan gelişini vurguladı ve Bayındır damgasını sikkelerde, belgelerde ve sancaklarda kullanılan devlet arması hâline getirdi. Bir Türkmen konfederasyonunun kendini boy şeceresiyle meşrulaştırması, İslâm dünyasında hanedan meşruiyetinin İslâmî olduğu kadar SOY temelli de kurulabildiğini gösterir. ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Uzun Hasan'ın haftalık ilim meclisleri ve Ali Kuşçu'yu himayesi", tur:"bilim",
  onem:4, dunya:2, kapsam:"ic", etiket:["bilim","kultur","himaye"],
  yer_id:"Diyarbakır",
  d:"Uzun Hasan haftalık ilim meclisleri düzenledi ve dönemin en büyük matematikçi-astronomlarından Ali Kuşçu'yu himaye ederek ona iltifatta bulundu. 📌 Ali Kuşçu daha sonra Fâtih'in daveti üzerine İstanbul'a gidip Osmanlı ilim hayatının kurucu isimlerinden biri olacaktır — yani Otlukbeli'nde karşı karşıya gelen iki hükümdar, aynı âlimi ardarda himaye etmiştir. ⚠️ TARİH HAKKINDA: himayenin yılı kaynakta verilmiyor; madde Uzun Hasan'ın iktidara geldiği tarihe bağlandı, bir tercihtir.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Kitâb-ı Diyârbekriyye yazdırıldı — hanedanın kendi tarihi", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","bilim","tarih"],
  yer_id:"Diyarbakır",
  d:"Uzun Hasan, Ebû Bekr-i Tihrânî'ye Akkoyunlu hanedanının tarihini anlatan 'Kitâb-ı Diyârbekriyye'yi yazdırdı; ayrıca Âşık Paşa'nın Garibnâme'sini okuttu ve bir Kur'an tercümesi hazırlattı. Bir hanedanın kendi resmî tarihini yazdırması, kendisini geçici bir aşiret birliği değil kalıcı bir devlet sayması demektir. ⚠️ TARİH HAKKINDA: eserin telif yılı bu oturumda ölçülemedi — `kitab-i-diyarbekriyye` müstakil maddesi HTTP 200 döndürdü ama GÖVDESİ ÇEKİLEMEDİ. Madde iktidara geliş tarihine bağlandı; bu bir tercihtir ve eserin müstakil maddesi OKUNMADI.",
  kaynak:"uzun-hasan (⚠️ kitab-i-diyarbekriyye maddesi okunamadı)" },

{ t:"1478-01-06", b:"Nasriyye bahçesi — Uzun Hasan'ın kendi yaptırdığı türbe", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din"],
  yer_id:"Tebriz",
  d:"Uzun Hasan, kendi yaptırdığı Nasriyye bahçesine defnedildi. Hükümdarın kendi ölümünden önce defnedileceği yeri inşa ettirmesi, Akkoyunlu'nun Tebriz'i yalnız fethedilmiş bir şehir değil hanedanın kalıcı yurdu saydığını gösterir. ⚠️ Nasriyye bahçesinin atlas verisinde ayrı bir kaydı yoktur; `yer_id` şehre verildi.",
  kaynak:"uzun-hasan" },

{ t:"1452-09-01", b:"Cami, medrese, zâviye ve kervansaray imar programı", tur:"mimari",
  onem:4, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din","iktisat"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun Hasan cami, medrese, zâviye ve kervansaray olmak üzere birçok eser yaptırdı. 🔴 Bu eserlerin BÜYÜK KISMI GÜNÜMÜZE ULAŞMADI: Safevîler Tebriz'deki Akkoyunlu yapılarının çoğunu KASITLI olarak yıktı. Bir hanedanın mimarî mirasının ardılı tarafından bilerek silinmesi, Akkoyunlu'nun bugün Karakoyunlu'dan (Gökmescid ayakta) daha az görünür olmasının sebebidir — yani kaynak azlığı bir tesadüf değil, bir siyasetin sonucudur. ⚠️ TARİH HAKKINDA: kaynak tek tek yapıların tarihini vermiyor; imar programı iktidara geliş tarihine bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular · uzun-hasan" },

{ t:"1478-06-01", b:"Heşt Bihişt Sarayı — Venedikli tacirlerin hayranlıkla anlattığı yapı", tur:"mimari",
  onem:4, dunya:2, kapsam:"ic", etiket:["mimari","kultur","sanat"],
  yer_id:"Tebriz",
  d:"Yâkub Bey'in yaptırdığı 'Heşt Bihişt' (Sekiz Cennet) sarayı, Tebriz'i ziyaret eden Venedikli tacirler tarafından hayranlıkla tasvir edilmiştir. 📌 Bu yapının bilinmesini bir Müslüman kroniğe değil, AVRUPALI TÜCCARLARIN seyahat notlarına borçluyuz — Uzun Hasan'ın Venedik ittifakı, hanedanın mimarî mirasının kaydedilmesini de sağlamış oldu. ⚠️ TARİH HAKKINDA: sarayın inşa yılı kaynakta verilmiyor; madde Yâkub Bey'in cülûsuna bağlandı, bir tercihtir. `hest-bihist` slugu ölü (302) ölçüldü.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"TÜRKMEN MİNYATÜR MEKTEBİ — Safevî sanatının kaynağı", tur:"sanat",
  onem:5, dunya:3, kapsam:"ic", etiket:["sanat","kultur","himaye"],
  yer_id:"Tebriz",
  d:"Yâkub Bey döneminde minyatür sanatı büyük gelişme gösterdi; sanat tarihçileri bu dönemin üretimini 'Türkmen minyatür mektebi' diye adlandırır ve bu okulun Safevî minyatürleri üzerinde derin tesirler bıraktığını tespit ederler. 🔴 Akkoyunlu'nun en kalıcı kültürel mirası budur: devlet 1514'te yıkıldı, ama Tebriz atölyesinin üslûbu Safevî sarayında yaşamaya devam etti ve İran minyatürünün klasik çağını hazırladı. ⚠️ TARİH HAKKINDA: kaynak tek bir yıl vermiyor; madde Yâkub Bey'in cülûsuna bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"Yâkub Bey'in Türkçe ve Farsça şiirleri, Molla Câmî himayesi", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat","himaye"],
  yer_id:"Tebriz",
  d:"Yâkub Bey hem Türkçe hem Farsça şiir söylüyordu, Molla Câmî'yi himaye etti ve çevresinde birçok şair topladı. Karakoyunlu'da Cihan Şah'ın 'Hakîkî' mahlasıyla yaptığının Akkoyunlu'daki karşılığıdır: iki rakip Türkmen hanedanının hükümdarları da Türkçe şiir yazan ve aynı âlimi (Câmî) himaye eden kişilerdi. ⚠️ TARİH HAKKINDA: kaynak yıl vermiyor; cülûs tarihine bağlandı, bir tercihtir.",
  kaynak:"akkoyunlular" },

{ t:"1478-06-01", b:"Gökmescid'in tamamlanması — rakibin eserini bitirmek", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din"],
  yer_id:"Tebriz",
  d:"Karakoyunlu hükümdarı Cihan Şah'ın 1465'te başlattığı ve 1467'de öldürülmesiyle yarım kalan Gökmescid (Mescid-i Kebûd), Uzun Hasan'ın oğlu Ebû Muzaffer Yâkub Bahadır Han devrinde, hanımı ve kızı Sâliha Hatun'un katkılarıyla tamamlandı. 📌 Cihan Şah'ı öldürten hanedanın onun eserini bitirmesi, Tebriz'in mimarî mirasının hanedanlar üstü sayıldığını gösterir — siyasî düşmanlık, imar mirasına taşınmamıştır. ⚠️ TARİH HAKKINDA: tamamlanma yılı kaynakta verilmiyor, yalnız 'Yâkub Bey devrinde' deniyor; madde cülûs tarihine bağlandı, bir tercihtir.",
  kaynak:"gokmescid" },

];
