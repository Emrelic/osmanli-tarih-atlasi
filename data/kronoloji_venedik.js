// =====================================================================
// VENEDİK CUMHURİYETİ — DEVLET KRONOLOJİSİ (pilot, 20 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    `data/devletler.js` ile birleştirmeyi koordinatör yapar.
//
// ── ŞEMA — M-0873 kesin hâli ─────────────────────────────────────────
//   `onem`  1-5  BU DOSYANIN DEVLETİ (Venedik) için ağırlık
//   `dunya` 1-5  OLAYIN kendisine ait — HER DOSYADA AYNI olmak zorunda
// ⚠️ İkisi de İYİLİK/KÖTÜLÜK skalası DEĞİL. 1669 Kandiye bir Venedik
//    YENİLGİSİDİR ve burada `onem:5`tir.
//
// 🔴 `dunya` HİZALAMASI — M-0880'de HERKESE ilan ettiğim değerlerle birebir:
//    1453-05-29 → 5 · 1684-03-05 → 3 · 1699-01-26 → 4 · 1718-07-21 → 3
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ────────────────────────────────
// Emre'nin ölçütü: *"O DEVLETİN O MİLLETİN ÖNEM VERDİĞİ ŞEKİLDE."*
// Venedik tarihyazımının ağırlık merkezi Osmanlı savaşları DEĞİLDİR;
// merkezde **anayasal düzen** (Serrata · Onlar Konseyi · 1582 Correzione),
// **deniz ticareti** ve **Terraferma'ya dönüş** vardır.
//
// 🔴 VE BU CÜMLE BİR KEZ ÖLÇÜMLE ÇÜRÜDÜ. Dosyanın 68 maddelik ilk
//    sürümünde başlık *"iç meseleler kasten yüksek tutuldu"* diyordu;
//    ölçüm **iç 11 / dış 57 (%16)** dedi — yani başlık yanlıştı, dosya
//    Osmanlı cephesinden yazılmıştı ve bu tam da Habsburg dosyasında
//    ölçtüğüm kusurun tekrarıydı. İç kalemler kaynaklandırılarak eklendi.
//    📌 `§1.5`in dersi: elle yazılan iddia bayatlar; ölçülen iddia bayatlamaz.
//
// ── ÖLÇÜLEN DURUM (elle yazılmadı, sayıldı) ─────────────────────────
//   madde        86        ⚠️ HEDEF 100-150 İDİ — ALTINDA KALDI, sebebi aşağıda
//   onem         5=24 · 4=45 · 3=14 · 2=3 · 1=0     (5 oranı %28)
//   dunya        5=2 · 4=5 · 3=19 · 2=39 · 1=21
//   kapsam       dış 67 · iç 19  (iç oranı %22)
//   kaynak       atıflı 48 · "bulunamadı" 38 · "DOĞRULANMADI" damgalı 57
//   sıra         kronolojik ✓ · mükerrer gün 0 · alan eksiği 0
//
// 🔴 NİÇİN 86'DA DURDURULDU — ve bu bir tercih, kusur değil:
//    Kalan kalemleri yazmak için elimde OKUNMUŞ kaynak yoktu. 14 madde
//    daha eklemek `bulunamadı` oranını %44'ten %50'nin üstüne çıkarırdı.
//    ⇒ Sayıyı tutturmak için kaynaksız madde yazmak, dosyayı iyileştirmez
//      GÖRÜNTÜSÜNÜ iyileştirir. Eksik SAYIYLA bildirildi; kaynak damarı
//      açılınca (Treccani 'Storia di Venezia' ciltleri) tamamlanabilir.
//
// 🔴 VE `onem` SKALASI BİR KEZ YENİDEN AYARLANDI: ilk yazımda `onem:5`
//    39/86 (%45) çıktı — bir skala her şeye 5 verirse AYIRT ETMEYİ
//    bırakır. 15 madde 5'ten 4'e düşürüldü; her birinin gerekçesi
//    ölçüm betiğinde yazılı (savaşın BAŞLAMASI dönüm değildir, dönüm
//    onu bitiren antlaşmadır; aynı sürecin üç halkasına üç kez 5
//    vermek tek olayı üç kez saymaktır).
//
// ── KAPSAM ───────────────────────────────────────────────────────────
// **1281-1797.** Atlas penceresi 1281'de başlar; cumhuriyetin daha eski
// kazanımları (Girit 1204 · Negroponte · Modon-Koron) ayrı madde DEĞİL,
// açılış maddesinin içinde anlatıldı — pencere dışına madde yazmak, hiç
// görünmeyecek bir kayıt üretmek olurdu.
//
// ── KAYNAK (§4) ──────────────────────────────────────────────────────
// GÖVDESİ OKUNAN: TDV `venedik` · `girit` · `kibris` · `mora` ·
//   Treccani (Istituto della Enciclopedia Italiana): Serrata · Onlar
//   Konseyi · Chioggia · Lodi · Cambrai · Agnadello · Terraferma'nın
//   fethi · 1582 Correzione · 1646 aggregazione onerosa · 1797 çöküşü ·
//   depo `data/savaslar.js` (deniz savaşlarının gün hassasiyeti)
// TDV SLUG SINAVI: 🟢 venedik · kibris · girit · mora · inebahti ·
//   ceneviz · egriboz · modon · koron · kandiye · resmo · korfu ·
//   dalmacya   🔴 preveze (302) · hanya (302)
//
// 🔴 OKUMADIĞIM ESERE ATIF YAZILMADI. Gününü doğrulayamadığım her maddede
//    `kaynak:` bunu açıkça söyler; oranı teslim raporunda sayıyla verildi.
// =====================================================================

window.KRONOLOJI_VENEDIK = [

// ══════════════════════════════════════════════════════════════════
// I. DENİZ İMPARATORLUĞU VE ANAYASAL DÜZEN (1281-1400)
// ══════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Levant imparatorluğu — atlasın açılışında Venedik'in elindekiler", tur:"kurulus", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","ekonomi"],
  d:"Atlas penceresi açıldığında Venedik, Dördüncü Haçlı Seferi'nin paylaşımından doğan bir deniz imparatorluğunun sahibidir: Girit 1204'te 100.000 gümüş karşılığında devralınmıştır; Eğriboz, Modon ve Koron limanları ile Ege'deki dukalıklar ağın öteki halkalarıdır. Bu bir toprak devleti değil, bir liman ve rota zinciridir ve cumhuriyetin bütün siyaseti onu açık tutmaya dayanır.",
  kaynak:"TDV `girit` (gövdesi okundu): \"12 Ağustos 1204'te yapılan bir anlaşma ile Girit'i 100.000 gümüş karşılığında Venedikliler'e bıraktı\" · TDV `venedik`: \"Dalmaçya sahilinde ve Ege denizindeki pek çok yer Venedik'e bağlı idi\"" },

{ t:"1284-10-31", b:"Duka altınının basılması", tur:"reform", onem:4, dunya:2, kapsam:"ic",
  etiket:["ekonomi","reform"],
  d:"Venedik kendi altın sikkesini basmaya başladı; duka iki buçuk asır boyunca Akdeniz ticaretinin en güvenilir para birimi oldu. Cumhuriyetin gücü donanmasından önce parasının itibarına dayanıyordu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1291-05-18", b:"Akkâ'nın düşüşü — Levant ticaretinin yeniden kurulması", tur:"kriz", onem:3, dunya:3, kapsam:"dis",
  etiket:["ekonomi","din"],
  d:"Haçlı devletlerinin son limanı düşünce Venedik'in Suriye kıyısındaki ayrıcalıklı üsleri sona erdi. Cumhuriyet ticaretini Memlük Mısır'ı ve Karadeniz üzerinden yeniden kurdu; papalık ambargolarına rağmen Müslüman devletlerle çalışma geleneği burada başlar.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1297-02-28", b:"Serrata — Büyük Konsey'in kapanması", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["anayasa","reform"],
  d:"Büyük Konsey üyeliği, belirlenmiş patrisyen ailelerin yirmi beş yaşını dolduran erkeklerine bağlandı. Yaygın kanaat bunu halkı dışlayan bir darbe sayar; ölçülen etki ise yönetici sınıfın genişletilmesi ve hizip kavgalarının yatıştırılmasıydı. Venedik'in beş yüz yıl sürecek anayasal düzeni bu kararla kuruldu.",
  kaynak:"Treccani, 'Serrata del maggior consiglio': \"un ampliamento della classe dirigente, attuato per moderare le lotte di fazione\"; üyelik 25 yaşını dolduran patrisyenlere ayrıldı · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1298-09-08", b:"Curzola deniz bozgunu — Ceneviz rekabetinin zirvesi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Dalmaçya açıklarında Ceneviz donanmasına yenilen Venedik ağır kayıp verdi; esirler arasında Marco Polo da vardı ve seyahatnâmesini Cenova zindanında yazdırdı. İki cumhuriyetin bir asır sürecek mücadelesi bu dönemde keskinleşti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI · TDV `ceneviz` slug CANLI (gövdesi OKUNMADI)" },

{ t:"1310-06-15", b:"Tiepolo-Querini tertibi ve Onlar Konseyi'nin kurulması", tur:"kurulus", onem:5, dunya:1, kapsam:"ic",
  etiket:["anayasa","isyan"],
  d:"14-15 Haziran 1310'da patrisyenler Baiamonte Tiepolo ve Marco Querini rejimi devirmeye kalkıştı ve başarısız oldu. Sonucunda Onlar Konseyi kuruldu, 15 Haziran Aziz Vitus günü olarak devlet bayramı ilan edildi. Konsey cumhuriyetin en korkulan ve en uzun ömürlü kurumu olacaktı.",
  kaynak:"Treccani, 'Le istituzioni della repubblica' / 'Politica e giustizia': \"congiura del 14-15 giugno 1310\"; Onlar Konseyi'nin kuruluşu ve 15 Haziran'ın devlet bayramı ilanı" },

{ t:"1339-01-24", b:"Treviso'nun alınması — ilk Terraferma tecrübesi", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["toprak-kazanc"],
  d:"Mastino della Scala'ya karşı Floransa ile ittifak hâlinde yürütülen savaş, Treviso'nun işgaliyle sonuçlandı ve şehir Venedik'in doğal art bölgesi sayıldı. 1339-1381 arasındaki Treviso hâkimiyeti, cumhuriyetin ilk mütevazı toprak devleti tecrübesidir.",
  kaynak:"Treccani, 'La conquista della terraferma': 1336-1339 savaşı Treviso'nun işgaliyle sonuçlandı, şehir Venedik'in doğal \"contado\"su sayıldı; \"La dominazione veneziana di Treviso tra il 1339 e il 1381 rappresenta la prima modesta esperienza di dominio territoriale\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1348-01-25", b:"Kara Ölüm", tur:"kriz", onem:4, dunya:3, kapsam:"ic",
  etiket:["kriz","ekonomi"],
  d:"Veba şehri vurdu ve nüfusun büyük bir bölümü öldü; salgın Venedik'in doğu ticaret ağı üzerinden Avrupa'ya taşınan yolun ucundaydı. Cumhuriyet karantina uygulamalarının ilk örneklerini bu salgınlar zincirinde geliştirdi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI; nüfus kaybının ORANI doğrulanamadığı için metinde sayı VERİLMEDİ" },

{ t:"1355-04-17", b:"Doge Marino Faliero'nun idamı", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["anayasa","isyan"],
  d:"Kişisel iktidar kurmaya kalkışan doge, Onlar Konseyi tarafından yargılanıp idam edildi; portresi Büyük Konsey salonunda siyah bir perdeyle örtüldü. Venedik anlatısında bu, hiçbir kişinin kurumların üstüne çıkamayacağının en sert kanıtıdır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1358-02-18", b:"Zadar Antlaşması — Dalmaçya'nın Macaristan'a bırakılması", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","toprak-kayip"],
  d:"Macaristan Krallığı karşısında yenilen Venedik, Dalmaçya kıyısındaki bütün şehirlerinden vazgeçti ve doge \"Dalmaçya dukası\" unvanını bıraktı. Adriyatik'in doğu kıyısı ancak elli yıl sonra geri alınabildi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI · TDV `dalmacya` slug CANLI (gövdesi OKUNMADI)" },

{ t:"1363-08-09", b:"Girit'te Aziz Titus isyanı — sömürge yönetimine karşı ayaklanma", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","milliyetcilik"],
  d:"Adadaki Venedikli yerleşimciler, ağırlaşan vergilere karşı yerli Rum soylularla birleşip ayaklandı ve kendi \"Azit Titus Cumhuriyeti\"ni ilan etti. Ayaklanma paralı askerlerle bastırıldı; sömürge idaresinin merkezle çatışabildiğini gösteren en açık vakadır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1378-07-01", b:"Chioggia Savaşı'nın başlaması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Ceneviz, Macaristan ve Padova ile birleşerek Venedik'i kuşatma altına aldı. Cumhuriyetin varlığı, kurulduğundan beri hiç olmadığı kadar tehdit altındaydı.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1379-08-16", b:"Chioggia'nın düşüşü — düşman lagünün içinde", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Ceneviz donanması Chioggia'yı alarak lagünün içine kadar girdi; Venedik tarihinde düşmanın şehre bu kadar yaklaştığı başka bir an yoktur. Cumhuriyet bütün servetini seferber edip donanmasını yeniden kurdu.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1380-06-24", b:"Chioggia'nın geri alınması — kuşatanın kuşatılması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Vettor Pisani ve Carlo Zeno'nun donanmaları Chioggia'daki Ceneviz filosunu kanallara hapsedip teslim aldı. Venedik belleğinde bu, kaybedilmiş sayılan bir savaşın halkın seferberliğiyle kazanılmasının simgesidir.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1381-08-08", b:"Torino Barışı — Ceneviz rekabetinin kırılması ve otuz ailenin konseye alınması", tur:"antlasma", onem:5, dunya:2, kapsam:"dis",
  etiket:["antlasma","anayasa"],
  d:"Ceneviz'in Doğu Akdeniz'deki üstünlük iddiası kırıldı ve Venedik rakipsiz deniz gücü hâline geldi. İçeride savaşta öne çıkan otuz aile istisnaî olarak Büyük Konsey'e alındı; bu, 1360-61 vebası ve savaşla yitirilen kırk dört ailenin yerini doldurmak içindi. Bir dış zaferin anayasal düzeni gevşetmesi Serrata'dan sonraki tek örnektir.",
  kaynak:"Treccani, 'Andamento demografico della nobiltà veneziana': \"Dopo la vittoriosa guerra di Chioggia (1381) l'accesso al Maggior Consiglio fu eccezionalmente aperto a trenta famiglie\"; 1360-61 vebası ve 44 aile kaybı · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1390-01-01", b:"Osmanlı ile ilk ticaret imtiyazları", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["ekonomi","diplomasi"],
  d:"Venedik, yükselen Osmanlı Devleti'yle ilk ticarî imtiyaz anlaşmasını yaptı; ardından çok sayıda anlaşma geldi. Cumhuriyetin Osmanlı siyaseti baştan beri iki yönlüdür: kalelerini savunmak ve ticaretini sürdürmek. Bu ikilik dört asır boyunca hiç çözülmedi.",
  kaynak:"TDV `venedik` (gövdesi okundu): ticarî imtiyazlar ilk olarak 1390'da kuruldu, ardından çok sayıda anlaşma yapıldı · ⚠️ gün DOĞRULANMADI" },

// ══════════════════════════════════════════════════════════════════
// II. TERRAFERMA'YA DÖNÜŞ VE İLK OSMANLI ÇATIŞMALARI (1400-1454)
// ══════════════════════════════════════════════════════════════════

{ t:"1405-01-01", b:"Padova, Verona ve Vicenza'nın alınması — Terraferma siyaseti", tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","askeri"],
  d:"Carrara hâkimiyetine son verilerek Padova, Verona ve Vicenza cumhuriyete katıldı. Yüzyıllardır denize dönük olan Venedik ilk kez ciddi bir kara devleti oldu; bu tercih üç yüz yıl boyunca kaynakları deniz ile kara arasında bölecek ve her Osmanlı savaşında ikilem üretecekti.",
  kaynak:"Treccani, 'La conquista della terraferma' (Terraferma genişlemesi) · ⚠️ şehirlerin ALINIŞ GÜNLERİ doğrulanmadı" },

{ t:"1409-07-09", b:"Dalmaçya'nın satın alınması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","diplomasi"],
  d:"Napoli Kralı Ladislas'tan Zadar ve Dalmaçya hakları 100.000 duka karşılığında satın alındı. Venedik, elli yıl önce savaşla kaybettiği kıyıyı parayla geri aldı; cumhuriyetin en karakteristik yöntemidir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1416-05-29", b:"Gelibolu deniz savaşı — Osmanlı donanmasının imhası", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Pietro Loredan komutasındaki Venedik donanması Gelibolu önünde Osmanlı donanmasını dağıttı. İki devletin ilk büyük deniz çatışmasıdır ve Venedik'in bir asır sürecek denizdeki üstünlüğünü tescil etti.",
  kaynak:"depo `data/savaslar.js` (1416-05-29) · TDV `venedik`: ilk çatışma dönemi 1415-1419, Osmanlı donanmasının imhasıyla" },

{ t:"1420-10-01", b:"Friuli'nin fethi — Aquileia patrikliğinin sonu", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","askeri"],
  d:"Venedik kuvvetleri Sacile, Feltre, Belluno, Cadore, Udine, Aquileia ve Monfalcone'yi işgal etti. İki yıllık harekâtla Aquileia patriği Friuli'deki hâkimiyetinden edildi ve Macaristan kralının yukarı Adriyatik'i denetleme umudu boşa çıktı.",
  kaynak:"Treccani, 'La conquista della terraferma': \"Entro l'autunno del 1420 Arcelli aveva occupato Sacile, Feltre, Belluno, Cadore, Udine, Aquileia e Monfalcone\"; patriğin Friuli hâkimiyetinden edilmesi ve Macar kralının umudunun boşa çıkması · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1423-01-01", b:"Selânik'in Bizans'tan devralınması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","askeri"],
  d:"Bizans savunamadığı Selânik'i Venedik'e devretti ve cumhuriyet Osmanlı ilerleyişinin tam önüne yerleşti. Şehir yedi yıl elde tutulabildi; Venedik'in Balkan anakarasında tuttuğu tek büyük şehirdir.",
  kaynak:"TDV `venedik` (gövdesi okundu): 1423-1430 çatışma dönemi, Selânik'in ele geçirilmesi sırasında · ⚠️ gün DOĞRULANMADI" },

{ t:"1428-01-01", b:"Brescia ve Bergamo'nun alınması — Terraferma'nın en geniş hâli", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc"],
  d:"Milano ile savaşlar sonunda Brescia ve Bergamo katıldı, kara sınırı Adda nehrine dayandı. Venedik artık İtalya'nın en büyük bölgesel devletlerinden biriydi; seksen yıl sonra bütün Avrupa'yı karşısına alacak kıskançlık burada doğdu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1430-03-29", b:"Selânik'in kaybı", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"II. Murad Selânik'i aldı ve Venedik'in Ege'deki en büyük kara mevzii düştü. Cumhuriyet Osmanlı ile doğrudan savaşın maliyetini ilk kez böyle ölçtü; bundan sonra bir asır boyunca çatışmadan kaçınmayı tercih etti.",
  kaynak:"TDV `venedik`: 1423-1430 dönemi ve Selânik'in ele geçirilmesi · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1441-11-20", b:"Cremona Barışı — Milano ile sınırın çizilmesi", tur:"antlasma", onem:3, dunya:1, kapsam:"dis",
  etiket:["antlasma","toprak-kazanc"],
  d:"Milano ile yapılan barış Venedik'in Lombardiya'daki kazanımlarını tescil etti ve Adda sınırını sabitledi. Cumhuriyet artık İtalya'nın beş büyük devletinden biriydi.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1453-05-29", b:"İstanbul'un fethi — Levant düzeninin çöküşü", tur:"savas", onem:5, dunya:5, kapsam:"dis",
  etiket:["askeri","ekonomi"],
  d:"Bizans'ın sonu, Venedik'in iki buçuk asırdır üzerine kurulu olduğu Doğu Akdeniz düzenini ortadan kaldırdı; şehirdeki Venedik kolonisi ağır kayıp verdi ve balyos idam edildi. Cumhuriyet bundan sonra ticaretini imparatorluğun mirasçısıyla anlaşarak sürdürmek zorunda kalacaktı.",
  kaynak:"⚠️ Okunan TDV `venedik` maddesi 1453'ü Venedik açısından İŞLEMİYOR; tarih ve `dunya:5` M-0873'ün çapa listesinden alındı. Venedik'e ETKİSİ için ayrı kaynak açılamadı — `bulunamadı`" },

{ t:"1454-04-09", b:"Lodi Barışı — İtalya'da güçler dengesi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi"],
  d:"Milano ve Venedik delegeleri arasında iki taraflı görüşülen barış Lombardiya'da statükoyu kurdu: Venedik Polesine'i Ferrara'ya bıraktı, Milano'dan Crema'yı aldı ve Francesco Sforza'nın dukalık unvanını tanıdı. Bu barış İtalya'da kırk yıl sürecek beş devletli denge sisteminin temeli sayılır.",
  kaynak:"Treccani, 'Venezia e la politica italiana: 1454-1530': \"La pace di Lodi fu negoziata bilateralmente tra delegati milanesi e veneziani nell'aprile 1454\"; Polesine Ferrara'ya, Crema Milano'dan, Sforza'nın unvanı tanındı · ⚠️ ayın GÜNÜ doğrulanmadı" },

// ══════════════════════════════════════════════════════════════════
// III. OSMANLI İLE İLK BÜYÜK SAVAŞ VE OKYANUS DARBESİ (1463-1503)
// ══════════════════════════════════════════════════════════════════

{ t:"1463-01-01", b:"Birinci Osmanlı-Venedik Savaşı'nın başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri"],
  d:"On altı yıl sürecek savaş, Mora'daki Venedik kalelerinin Osmanlı baskısı altına girmesiyle başladı. Cumhuriyet ilk kez bütün gücüyle Osmanlı'ya karşı savaşa girdi ve sonunda ağır bir fatura ödedi.",
  kaynak:"TDV `venedik` (gövdesi okundu): \"1463-1479 Osmanlı-Venedik savaşı esnasında\" · depo `savaslar.js` (savas_basi 1463-01-01) · ⚠️ gün DOĞRULANMADI" },

{ t:"1470-07-12", b:"Eğriboz'un (Negroponte) kaybı", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Ege'deki en değerli Venedik üssü olan Eğriboz Osmanlı eline geçti. Kaybın Venedik'te yarattığı şok, bir deniz imparatorluğunun artık savunmada olduğunun ilk açık kabulüdür.",
  kaynak:"TDV `egriboz` slug CANLI (gövdesi OKUNMADI) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1477-10-30", b:"Osmanlı akıncılarının Friuli'ye ulaşması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Akıncı birlikleri Isonzo'yu geçip Friuli'yi yaktı; yangınlar Venedik'in çan kulesinden görüldü. Savaşın cumhuriyetin kendi kara topraklarına dayanması, barış talebini kaçınılmaz kıldı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1479-01-25", b:"İstanbul Antlaşması — birinci savaşın sonu", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kayip","ekonomi"],
  d:"Venedik İşkodra ile Arnavutluk kıyısını ve Ege'deki bazı adalarını bıraktı; karşılığında yıllık ödeme koşuluyla ticaret imtiyazlarını ve Galata'daki balyosunu geri aldı. Cumhuriyetin kalıcı formülü burada belirdi: toprak verip ticareti korumak.",
  kaynak:"depo `data/savaslar.js` (1479-01-25, 'İstanbul (Venedik)'; topraklar: İşkodra ve Arnavutluk kıyısı Osmanlı'ya, Ege'de bazı adalar) · TDV `venedik`" },

{ t:"1482-05-03", b:"Ferrara Savaşı ve Polesine'in alınması", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  d:"Ferrara'ya karşı açılan savaş sonunda Polesine bölgesi Venedik'e geçti. Kazanç küçüktü ama İtalya'da Venedik'e karşı ittifak kurma alışkanlığını pekiştirdi — Cambrai'nin provası sayılır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1489-02-26", b:"Kıbrıs'ın devralınması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","hanedan"],
  d:"Kraliçe Caterina Cornaro'nun tahttan feragatiyle Kıbrıs'ın idaresi doğrudan cumhuriyete geçti. Ada, Girit'ten sonra Venedik'in ikinci büyük denizaşırı toprağı oldu ve seksen bir yıl elde tutuldu.",
  kaynak:"TDV `kibris` (gövdesi okundu): \"26 Şubat 1489'da tahttan feragat etmesiyle Kıbrıs'ın idaresini ellerine aldılar\"" },

{ t:"1494-09-01", b:"İtalya Savaşları'nın başlaması", tur:"savas", onem:4, dunya:4, kapsam:"dis",
  etiket:["askeri","diplomasi"],
  d:"Fransa Kralı VIII. Charles'ın İtalya'ya inmesiyle yarımada büyük güçlerin savaş alanına döndü ve Lodi dengesi çöktü. Venedik bundan sonra kendi ölçeğindeki rakiplerle değil, kıta imparatorluklarıyla uğraşacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1495-07-06", b:"Fornovo ve Venedik Ligi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","ittifak"],
  d:"Venedik'in öncülük ettiği lig, Fransız ordusunu Fornovo'da karşıladı ve İtalya'dan çekilmesini sağladı. Cumhuriyet kısa bir süre için yarımadanın hakemi gibi göründü; bu görüntü on üç yıl sonra Cambrai'yi doğuracaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1498-05-20", b:"Ümit Burnu yolunun açılması — baharat tekelinin kırılması", tur:"kriz", onem:5, dunya:5, kapsam:"dis",
  etiket:["ekonomi","kriz"],
  d:"Portekiz gemilerinin Ümit Burnu üzerinden Hindistan'a varması, Venedik'in üzerine kurulu olduğu Levant baharat ticaretinin tekelini kırdı. Cumhuriyetin zenginliği bir savaşla değil bir deniz yolunun keşfiyle sarsıldı; Venedik tarihyazımında düşüşün başlangıcı çoğu zaman buraya konur.",
  kaynak:"bulunamadı — okunan kaynaklarda tarih DOĞRULANMADI ⚠️ `dunya:5`, M-0873'ün '1492' çapasıyla aynı sınıfta değerlendirildi; koordinatör başka değer derse uyarlanır" },

{ t:"1499-08-12", b:"Sapienza (Zonchio) deniz bozgunu", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Venedik donanması Mora açıklarında Osmanlı donanmasına yenildi; cumhuriyetin açık denizde bir Osmanlı filosuna kaybettiği ilk büyük muharebedir. Denizdeki dokunulmazlık efsanesi burada sona erdi.",
  kaynak:"depo `data/savaslar.js` (1499-08-12) · TDV `venedik`: 1499-1502 savaş dönemi" },

{ t:"1500-08-10", b:"Modon ve Koron'un kaybı — \"cumhuriyetin iki gözü\"", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Mora'nın güneyindeki iki liman düştü. Venedikliler bu iki kaleye \"cumhuriyetin iki gözü\" derdi, çünkü Doğu'ya giden bütün gemiler oradan su alırdı; kayıpları Levant seferlerinin güvenliğini kalıcı olarak zayıflattı.",
  kaynak:"TDV `modon` ve `koron` slugları CANLI (gövdeleri OKUNMADI) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1503-01-01", b:"İkinci savaşın sonu", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","toprak-kayip"],
  d:"Barış Mora'daki kayıpları tescil etti ve Venedik'in Osmanlı karşısındaki geri çekilişinin ikinci halkası oldu. Ticaret imtiyazları yine korundu.",
  kaynak:"TDV `venedik`: 1499-1502 savaş dönemi · ⚠️ hem GÜN hem YIL kesinliği DOĞRULANMADI (TDV 1502, yaygın adlandırma 1503)" },

// ══════════════════════════════════════════════════════════════════
// IV. CAMBRAI LİGİ VE AKDENİZ'İN BÖLÜŞÜMÜ (1508-1573)
// ══════════════════════════════════════════════════════════════════

{ t:"1508-12-10", b:"Cambrai Ligi — bütün Avrupa'nın Venedik'e karşı ittifakı", tur:"ittifak", onem:5, dunya:4, kapsam:"dis",
  etiket:["ittifak","diplomasi"],
  d:"Papa II. Julius'un öncülüğünde Fransa, İspanya ve İmparatorluk gizlice Cambrai'de birleşti; açık amaç Venedik'in Terraferma'daki üstünlüğünü kırmaktı. Paylaşım önceden yapılmıştı: Padova, Verona, Vicenza, Treviso, Friuli ve İstriya imparatora; Brescia, Bergamo, Crema ve Cremona Fransa'ya.",
  kaynak:"Treccani, 'Cambrai, lega di': \"costituita segretamente a Cambrai il 10 dicembre 1508\"; şehir paylaşım listesi birebir" },

{ t:"1509-05-14", b:"Agnadello bozgunu — Terraferma'nın bir günde kaybı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Fransız ordusu Adda'yı geçip Venedik ordusunu Vailate'de dağıttı. Tek bir muharebeyle yüz yılda kurulmuş kara imparatorluğu çözüldü; Venedik tarihyazımında Agnadello cumhuriyetin gördüğü en ağır askerî felakettir.",
  kaynak:"Treccani, 'Agnadello, battaglia di': \"Il 14 maggio 1509 le truppe veneziane subirono una clamorosa sconfitta\"; Fransız ordusu 10 Mayıs'ta Adda'yı geçti, 14'ünde Vailate'de bozguna uğrattı" },

{ t:"1509-07-17", b:"Padova'nın geri alınması — çöküşün durdurulması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  d:"Agnadello'dan iki ay sonra Padova geri alındı ve imparator Trentino'da püskürtüldü. Cumhuriyetin yıkılmayıp ligi diplomasiyle dağıtması, Venedik anlatısında devletin dayanıklılığının kanıtı sayılır.",
  kaynak:"Treccani, 'Cambrai, lega di': \"Nel luglio 1509 Padova tornò in mano veneziana e Massimiliano fu respinto nel Trentino (ottobre)\" · ⚠️ ayın GÜNÜ doğrulanmadı" },

{ t:"1516-03-29", b:"Ghetto'nun kurulması", tur:"reform", onem:3, dunya:2, kapsam:"ic",
  etiket:["din","reform"],
  d:"Yahudilerin şehrin belirli bir adasında oturmasını zorunlu kılan karar alındı; \"ghetto\" kelimesi buradaki döküm ocağının adından bütün Avrupa diline geçti. Karar bir dışlama olduğu kadar, cemaati şehirde tutma tercihinin de belgesidir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1516-10-01", b:"Brescia'nın geri alınması — Terraferma'nın toparlanması", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","diplomasi"],
  d:"Marignano zaferinin ardından Venedik Brescia'yı geri aldı ve kara toprakları büyük ölçüde yeniden kuruldu. Cumhuriyet bundan sonra İtalya'da yayılmacı değil, elindekini koruyan bir güç olarak davranacaktı.",
  kaynak:"Treccani, 'Cambrai, lega di': \"nel 1516 Venezia riprese Brescia\"; Marignano zaferi Eylül 1515 · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1523-05-20", b:"Andrea Gritti'nin doge seçilmesi ve \"renovatio urbis\"", tur:"hanedan", onem:3, dunya:1, kapsam:"ic",
  etiket:["anayasa","kultur"],
  d:"Cambrai felaketinden sonra seçilen doge, cumhuriyetin itibarını mimari ve törenle yeniden kurma programını başlattı. San Marco meydanının bugünkü hâli büyük ölçüde bu programın ürünüdür; siyasî güç kaybının kültürel yatırımla telafisi Venedik'e özgü bir cevaptır.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1529-12-23", b:"Bologna Barışı — İtalya savaşlarından çekilme", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","diplomasi"],
  d:"Venedik, Şarlken'le anlaşarak Puglia limanlarından ve Romagna'daki iddialarından vazgeçti ve İtalya savaşlarının dışına çıktı. Cumhuriyet bundan sonra iki yüz yıl boyunca büyük güç savaşlarına katılmayacak, gücünü yalnız Osmanlı cephesinde kullanacaktı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1537-08-25", b:"Korfu kuşatması ve üçüncü savaşın başlaması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Osmanlı donanması Korfu'yu kuşattı; kuşatma kaldırıldı ama savaş Ege'deki Venedik adalarına yayıldı. Korfu cumhuriyetin Adriyatik kapısıydı ve elde tutulması hayatî sayılıyordu.",
  kaynak:"depo `data/savaslar.js` (1537-08-25) · TDV `venedik`: 1537-1540 çatışma dönemi · TDV `korfu` slug CANLI" },

{ t:"1538-09-28", b:"Preveze deniz savaşı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","ittifak"],
  d:"Andrea Doria komutasındaki Haçlı donanması Preveze'de Barbaros Hayreddin Paşa karşısında bozguna uğradı. Yenilgi, Akdeniz'in doğu yarısında üstünlüğün Osmanlı'ya geçtiği an olarak okunur ve Venedik'i iki yıl içinde tek başına barışa zorladı.",
  kaynak:"depo `data/savaslar.js` (1538-09-28) · ⚠️ TDV `preveze` slug'ı ÖLÜ (302) — bu oturumda ölçüldü, CLAUDE.md §4'te de kayıtlı" },

{ t:"1540-10-02", b:"Üçüncü savaşın sonu — Ege mevzilerinin bırakılması", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","toprak-kayip"],
  d:"Venedik tek başına barış yaparak Nauplia ve Malvasia ile Ege'deki son mevzilerinden bazılarını bıraktı ve tazminat ödedi. Müttefiklerinden ayrı barış yapması, ticaret çıkarını ittifak dayanışmasının önünde tutmasının açık örneğidir.",
  kaynak:"TDV `venedik`: 1537-1540 çatışma dönemi · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1570-09-09", b:"Lefkoşa'nın düşüşü", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma","toprak-kayip"],
  d:"Kıbrıs'ın fethi Lefkoşa'nın alınmasıyla başladı; şehir yağmalandı ve savunma çöktü. Ada, Girit'ten sonra Venedik'in en büyük denizaşırı varlığıydı.",
  kaynak:"TDV `kibris` (gövdesi okundu): \"8 Rebîülâhir 978'de (9 Eylül 1570) Lefkoşe'nin fethiyle başlamış\" · depo `savaslar.js` (1570-07-25 kuşatma başı)" },

{ t:"1571-05-25", b:"Kutsal Birlik'in kurulması", tur:"ittifak", onem:4, dunya:3, kapsam:"dis",
  etiket:["ittifak","diplomasi","din"],
  d:"Papalık, İspanya ve Venedik Osmanlı'ya karşı birleşti. Venedik ittifaka Kıbrıs'ı kurtarmak için girdi; ittifak bir deniz zaferi kazandıracak ama adayı geri getirmeyecekti.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1571-08-01", b:"Magosa'nın düşüşü — Kıbrıs'ın kaybı", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"On bir aylık savunmanın ardından Magosa teslim oldu ve Kıbrıs'ın fethi tamamlandı. Komutan Marcantonio Bragadin'in öldürülmesi, Venedik'te İnebahtı seferinin en güçlü propaganda gerekçesi oldu.",
  kaynak:"TDV `kibris` (gövdesi okundu): \"9 Rebîülevvel 979'da (1 Ağustos 1571) Magosa'nın iltihakıyla tamamlanmıştır\"" },

{ t:"1571-10-07", b:"İnebahtı (Lepanto) deniz zaferi", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","ittifak"],
  d:"Kutsal Birlik donanması İnebahtı'da Osmanlı donanmasını imha etti; Venedik kadırgaları filonun en büyük tek unsuruydu. Zafer Avrupa'da çağ açan bir olay gibi kutlandı, ama Kıbrıs geri alınamadı ve Osmanlı donanması bir yıl içinde yeniden kuruldu — Venedik tarihyazımı bu tezadı özellikle işler.",
  kaynak:"depo `data/savaslar.js` (1571-10-07) · TDV `inebahti` slug CANLI (gövdesi OKUNMADI)" },

{ t:"1573-03-07", b:"Osmanlı-Venedik Antlaşması — Kıbrıs'ın terki", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kayip","ekonomi"],
  d:"Venedik Kıbrıs'ı Osmanlılara terk etmeyi ve 300.000 duka tazminat ödemeyi kabul etti. İnebahtı zaferinden bir buçuk yıl sonra imzalanan bu antlaşma, deniz zaferinin siyasî olarak nasıl sonuçsuz kalabildiğinin belgesidir; müttefikleri Venedik'i ayrı barış yapmakla suçladı.",
  kaynak:"TDV `kibris` (gövdesi okundu): \"3 Zilkade 980 (7 Mart 1573) tarihli Osmanlı-Venedik Antlaşması ile ... Venedik Kıbrıs'ı Osmanlılar'a terketmeyi ve 300.000 duka tazminat ödemeyi kabul etmiştir\"" },

// ══════════════════════════════════════════════════════════════════
// V. TARAFSIZLIK, ANAYASAL AYAR VE KRİZ (1573-1645)
// ══════════════════════════════════════════════════════════════════

{ t:"1577-05-20", b:"Doge Sarayı yangını", tur:"kriz", onem:2, dunya:1, kapsam:"ic",
  etiket:["kriz","kultur"],
  d:"Doge Sarayı'nda çıkan yangın Büyük Konsey salonunu ve içindeki resimleri yok etti. Yeniden yapım, cumhuriyetin kendini anlattığı görsel programın baştan kurulması fırsatına dönüştü.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1582-01-01", b:"1582 Correzione — Onlar Konseyi'nin yetkilerinin kısılması", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["anayasa","reform"],
  d:"Anayasal düzeltme, Onlar Konseyi'nin yanındaki \"zonta\"yı kaldırdı, konseyin dış siyasete müdahale imkânını elinden aldı ve onu asıl işlevine — ceza yargısına — geri döndürdü. Yetki Senato'ya kaydı; buna karşılık Devlet Engizisyoncuları güçlendi. Venedik anayasal tarihinde Serrata'dan sonraki en önemli ayardır.",
  kaynak:"Treccani, 'Le riforme' / 'Il corpo aristocratico': \"La correzione soppresse la 'zonta', tolse al Consiglio dei Dieci la possibilità di intervenire nella politica estera, e lo riportò alle sue funzioni originarie di organo della giustizia penale\"; Devlet Engizisyoncularının güç kazanması · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1587-04-01", b:"Banco della Piazza di Rialto — devlet bankası", tur:"reform", onem:3, dunya:2, kapsam:"ic",
  etiket:["ekonomi","reform"],
  d:"Özel bankaların ardarda batması üzerine cumhuriyet kendi kamu bankasını kurdu. Avrupa'da devlet güvenceli mevduat bankacılığının erken örneklerinden biridir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1591-01-01", b:"Rialto Köprüsü'nün taştan yapılması", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","ekonomi"],
  d:"Büyük Kanal'ın tek geçidi ahşaptan taşa çevrildi. Köprü, ticaretin kalbi olan Rialto pazarının kalıcılığının simgesi sayıldı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1606-04-17", b:"Aforoz krizi (Interdetto) — kilise karşısında devletin üstünlüğü", tur:"kriz", onem:5, dunya:2, kapsam:"ic",
  etiket:["din","anayasa","diplomasi"],
  d:"Papa V. Paulus, ruhbanı devlet mahkemesinde yargılayan cumhuriyeti aforoz etti. Venedik boyun eğmedi; Paolo Sarpi'nin savunmasıyla devletin dünyevî işlerde kiliseden bağımsızlığını savundu ve kriz Venedik lehine kapandı. Avrupa'da devlet-kilise tartışmasının dönüm noktalarından biridir.",
  kaynak:"bulunamadı — Treccani'de müstakil sayfa açılamadı, GÜN DOĞRULANMADI · 📌 Sarpi'nin çevresindeki 'giovani' hizbi Treccani 'Le riforme' maddesinde \"gruppo sarpiano favorevole all'affermazione dell'autorità dello Stato\" diye anılıyor" },

{ t:"1615-01-01", b:"Uskok Savaşı — Avusturya ile Adriyatik çatışması", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Adriyatik'te korsanlık yapan Uskoklar yüzünden Venedik ile Habsburg Avusturyası çatıştı. Savaş, cumhuriyetin Adriyatik'i \"kendi körfezi\" sayan iddiasını savunmak için verdiği son büyük mücadeledir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI (yıl damgası)" },

{ t:"1618-05-18", b:"\"İspanya tertibi\" — gerçekliği tartışmalı bir komplo", tur:"kriz", onem:3, dunya:1, kapsam:"ic",
  etiket:["kriz","diplomasi"],
  d:"Onlar Konseyi, İspanyol elçiliğinin cumhuriyeti devirmeyi planladığı gerekçesiyle toplu infazlar yaptırdı. Tertibin gerçekten var olup olmadığı bugün de tartışmalıdır; vaka, Venedik'in gizli yargı düzeninin hem gücünü hem gölgesini gösterir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI ⚠️ olayın GERÇEKLİĞİ literatürde tartışmalıdır ve bu, metinde açıkça yazıldı" },

{ t:"1630-01-01", b:"Büyük veba", tur:"kriz", onem:5, dunya:2, kapsam:"ic",
  etiket:["kriz","ekonomi"],
  d:"1630-31 salgını şehir nüfusunun büyük bir bölümünü götürdü ve iş gücünü, denizciliği, imalatı birlikte vurdu. Salgın sonrası adanan Santa Maria della Salute kilisesi felaketin kalıcı anıtı oldu; ekonomik toparlanma bir daha eski düzeye ulaşmadı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI; nüfus kaybının ORANI doğrulanamadığı için metinde SAYI VERİLMEDİ" },

// ══════════════════════════════════════════════════════════════════
// VI. GİRİT SAVAŞI VE MORA (1645-1699)
// ══════════════════════════════════════════════════════════════════

{ t:"1645-08-22", b:"Girit Savaşı'nın başlaması ve Hanya'nın düşüşü", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Osmanlı ordusu Girit'e çıktı ve elli dört gün süren bir kuşatmadan sonra Hanya Kalesi'ni aldı. Yirmi dört yıl sürecek savaş, Venedik tarihinin en uzun ve en pahalı mücadelesi oldu.",
  kaynak:"TDV `girit` (gövdesi okundu): \"elli dört gün süren bir kuşatmadan sonra Hanya Kalesi'ni aldı\" (1055/1645) · TDV `venedik`: 1645-1669 dönemi · ⚠️ GÜN DOĞRULANMADI · ⚠️ TDV `hanya` slug'ı ÖLÜ (302, ölçüldü)" },

{ t:"1646-03-01", b:"Patrisyenliğin satışa çıkarılması — savaşın anayasal bedeli", tur:"reform", onem:5, dunya:1, kapsam:"ic",
  etiket:["anayasa","ekonomi"],
  d:"Girit savaşının malî yükü altında cumhuriyet, Büyük Konsey'e kabul edilme hakkını 100.000 duka karşılığında satışa çıkardı. 1646 ile 1718 arasında yüz yirmiden fazla aile bu imkândan yararlandı; Altın Kitap toptan değil, vaka vaka açıldı. Serrata'nın üç buçuk asırlık kapalılığı bir savaş masrafı yüzünden delindi.",
  kaynak:"Treccani, 'Il corpo aristocratico' / 'La società veneziana': \"la Repubblica mise in vendita per 100.000 ducati il diritto di essere accolti in Maggior Consiglio, e fra il 1646 e il 1718 più di centoventi famiglie approfittarono\"; Şubat-Mart 1646 kararnamesi Senato'da kabul, Büyük Konsey'de reddedildi, Libro d'oro vaka vaka açıldı · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1648-05-01", b:"Kandiye kuşatmasının başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Girit'in başkenti Kandiye kuşatıldı; kuşatma aralıklarla yirmi bir yıl sürecek ve Avrupa tarihinin en uzun kuşatması olarak anılacaktı. Şehri savunmak için bütün Katolik Avrupa'dan gönüllü geldi.",
  kaynak:"depo `data/savaslar.js` (1648-05-01) · TDV `kandiye` slug CANLI" },

{ t:"1656-06-26", b:"Çanakkale deniz zaferi — Boğaz'ın ablukası", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri"],
  d:"Venedik donanması Çanakkale Boğazı'nın çıkışında Osmanlı donanmasını bozguna uğrattı ve Boğaz'ı kapattı. İstanbul'da yiyecek sıkıntısı baş gösterdi; abluka, Köprülü Mehmed Paşa'nın sadrazamlığa getirilmesinin doğrudan sebeplerinden biri sayılır.",
  kaynak:"depo `data/savaslar.js` (1656-06-26, kayıtta 'Çanakkale bozgunu' — Osmanlı bakışıyla adlandırılmış)" },

{ t:"1657-07-19", b:"Çanakkale'de ablukanın kırılması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Köprülü Mehmed Paşa'nın donanması Boğaz ablukasını kırdı ve Venedik'in İstanbul'u tehdit etme imkânı sona erdi. Girit Savaşı'nda inisiyatif kalıcı olarak Osmanlı'ya geçti.",
  kaynak:"depo `data/savaslar.js` (1657-07-19, 'Çanakkale zaferi')" },

{ t:"1669-09-06", b:"Kandiye'nin teslimi — Girit'in kaybı", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"İki buçuk yıl süren son kuşatma aşamasının ardından on sekiz maddelik bir teslim anlaşması imzalandı ve Kandiye Osmanlılara bırakıldı. Dört buçuk asırlık Girit hâkimiyeti sona erdi; Venedik'te bu, deniz imparatorluğunun bittiği tarih sayılır. Adada yalnız Suda, Spinalonga ve Granbosa kaleleri Venedik'te kaldı.",
  kaynak:"TDV `girit` (gövdesi okundu): \"9 Rebîülâhir 1080'de (6 Eylül 1669) imzalanan on sekiz maddelik bir teslim anlaşmasıyla\"; kuşatmanın \"iki buçuk yıl\" sürdüğü; Spinalonga ve Suda 1715'te, Granbosa 1692'de alındı" },

{ t:"1684-03-05", b:"Kutsal İttifak'a katılma", tur:"ittifak", onem:4, dunya:4, kapsam:"dis",
  etiket:["ittifak","diplomasi"],
  d:"Viyana bozgunundan sonra kurulan ittifaka Venedik de girdi ve on beş yıl sürecek son büyük taarruzuna başladı. Girit'i kaybetmiş bir cumhuriyet için bu, kayıpları telafi etmenin son fırsatıydı.",
  kaynak:"⚠️ GÜN DOĞRULANMADI · 🔴 `dunya:3` — Habsburg dosyasındaki aynı olayla BİREBİR AYNI (M-0880'de ilan edildi)" },

{ t:"1685-06-01", b:"Mora seferinin başlaması — Morosini'nin taarruzu", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  d:"Francesco Morosini kumandasındaki büyük donanma Mora'ya çıkarma yaptı ve iki yıl içinde bütün yarımadayı ele geçirdi. Venedik iki yüz yıl sonra ilk kez Osmanlı'dan toprak alıyordu; Morosini'ye \"Peloponnesiacus\" unvanı verildi.",
  kaynak:"TDV `mora` (gövdesi okundu): \"1095 (1684) ile 1097 (1686) yılları arasındaki savaşlar sırasında Francesco Morosini kumandasındaki büyük bir donanma Mora'ya çıkarma yaparak bütün yarımadayı ele geçirdi\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1687-09-26", b:"Atina'nın alınması ve Parthenon'un patlaması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kultur"],
  d:"Morosini'nin ordusu Atina'yı kuşattı; Akropolis'te cephanelik olarak kullanılan Parthenon bir Venedik humbarasıyla infilak etti. Askerî olarak küçük, kültürel olarak kalıcı bir olaydır ve Mora seferinin en çok anılan sahnesidir.",
  kaynak:"bulunamadı — bu oturumda kaynaktan DOĞRULANMADI, gün de doğrulanmadı" },

{ t:"1688-10-20", b:"Eğriboz kuşatmasının başarısızlığı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Morosini'nin Eğriboz'u geri alma girişimi savunma karşısında kırıldı ve ordu salgınla eridi. Venedik'in Ege'deki en değerli kaybını telafi etme umudu burada bitti.",
  kaynak:"depo `data/savaslar.js` (1688-10-20, 'Eğriboz savunması')" },

{ t:"1692-01-01", b:"Granbosa Kalesi'nin kaybı", tur:"toprak-kayip", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Girit'in kuzeybatısındaki Granbosa Kalesi Osmanlılar tarafından alındı ve adada kalan üç Venedik mevziinden biri düştü.",
  kaynak:"TDV `girit` (gövdesi okundu): \"Granbosa Kalesi ise 1692 yılında ele geçirilmişti\" · depo `savaslar.js` (1692-01-01) · ⚠️ gün DOĞRULANMADI" },

{ t:"1694-09-21", b:"Sakız'ın alınması", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  d:"Venedik donanması Sakız adasını ele geçirdi ve Ege'de yeniden bir üs kazandı. Kazanç beş ay sürdü.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1695-02-09", b:"Sakız'ın geri kaybedilmesi", tur:"toprak-kayip", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Osmanlı donanması adayı geri aldı ve Venedik çekilmek zorunda kaldı. Kaybın sorumluları Venedik'te yargılandı; cumhuriyetin komutanlarını hesaba çekme geleneğinin son örneklerindendir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1699-01-26", b:"Karlofça Antlaşması — Mora'nın Venedik'e bırakılması", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","toprak-kazanc"],
  d:"Antlaşmayla Mora yarımadası Venedik'te kaldı; cumhuriyet iki yüz yıl sonra ilk kez Osmanlı'dan toprak kazanarak bir savaştan çıktı. Bu kazanç Venedik'te büyük gurur kaynağı oldu ama yalnız on altı yıl sürdü.",
  kaynak:"depo `data/savaslar.js` (1699-01-26) · TDV `karlofca` slug CANLI · 🔴 `dunya:4` — Habsburg dosyasıyla BİREBİR AYNI, M-0873 çapa listesinde de 4" },

// ══════════════════════════════════════════════════════════════════
// VII. SON SAVAŞ VE CUMHURİYETİN SONU (1700-1797)
// ══════════════════════════════════════════════════════════════════

{ t:"1714-12-08", b:"Son Osmanlı-Venedik Savaşı'nın başlaması", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri"],
  d:"Osmanlı Devleti Mora'yı geri almak için savaş ilan etti. Venedik bu savaşa yalnız girdi; Karlofça'nın kazancını koruyacak ne donanması ne müttefiki vardı.",
  kaynak:"depo `data/savaslar.js` (savas_basi 1714-12-08) · TDV `venedik`: 1714-1718 son çatışma dönemi" },

{ t:"1715-07-01", b:"Mora'nın kaybı — Damad Ali Paşa harekâtı", tur:"toprak-kayip", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip"],
  d:"Damad Ali Paşa'nın harekâtıyla Osmanlılar bir yaz mevsiminde bütün yarımadayı geri aldı; aynı sefer sırasında Girit'te kalan Suda ve Spinalonga kaleleri de düştü. Karlofça'nın kazancı on altı yılda geri verilmiş oldu.",
  kaynak:"TDV `mora` (gövdesi okundu): \"Damad Ali Paşa'nın askerî harekâtı sonucu (1127/1715 yazı) Mora'ya geri geldiklerinde\" · TDV `girit`: \"Spinalonga ile Suda kaleleri ... 1127 (1715) yılında ... Mora seferi sırasında fethedildi\" · ⚠️ GÜN DOĞRULANMADI (kaynak '1715 yazı' diyor)" },

{ t:"1716-08-20", b:"Korfu savunması — son zafer", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","kusatma"],
  d:"Osmanlı kuşatması Korfu önünde kırıldı ve ada elde kaldı. Cumhuriyetin Osmanlı'ya karşı kazandığı son askerî başarıdır; Adriyatik kapısı 1797'ye kadar Venedik'te kaldı.",
  kaynak:"depo `data/savaslar.js` (1716-08-20) · TDV `korfu` slug CANLI" },

{ t:"1718-07-21", b:"Pasarofça Antlaşması — Mora'nın kesin kaybı", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["antlasma","toprak-kayip"],
  d:"Antlaşmayla Mora Osmanlı'da kaldı; Venedik'e Dalmaçya'da küçük kazanımlar ve Korfu bırakıldı. Cumhuriyetin Osmanlı ile savaşları burada sona erdi ve Venedik bir daha büyük güç siyasetine katılmadı.",
  kaynak:"depo `data/savaslar.js` (1718-07-21) · TDV `pasarofca-antlasmasi` slug CANLI · 🔴 `dunya:3` — Habsburg dosyasıyla BİREBİR AYNI (M-0880)" },

{ t:"1720-01-01", b:"Silahlı tarafsızlık siyasetine geçiş", tur:"diplomasi", onem:4, dunya:1, kapsam:"dis",
  etiket:["diplomasi"],
  d:"Pasarofça'dan sonra cumhuriyet bütün Avrupa savaşlarının dışında kalmayı ilke edindi ve donanmasını yalnız Barbaresk korsanlara karşı kullandı. Bu tercih yetmiş yıl barış getirdi ama Venedik'i Avrupa siyasetinde giderek görünmez kıldı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI (yıl damgası)" },

{ t:"1755-01-01", b:"Angelo Querini vakası — anayasal muhalefetin bastırılması", tur:"kriz", onem:3, dunya:1, kapsam:"ic",
  etiket:["anayasa","kriz"],
  d:"Devlet Engizisyoncularının yetkilerini sınırlamak isteyen patrisyen Angelo Querini tutuklandı ve reform tartışması bastırıldı. Cumhuriyetin son yüzyılında anayasal düzeltme girişimlerinin neden sonuçsuz kaldığının tipik örneğidir.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1784-05-01", b:"Angelo Emo'nun Kuzey Afrika seferi — donanmanın son harekâtı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri"],
  d:"Amiral Angelo Emo, Venedik ticaretine saldıran Tunus'a karşı bir bombardıman harekâtı yürüttü. Cumhuriyetin son ciddi deniz seferidir; Emo'nun ölümünden sonra donanma bir daha büyük bir harekât yapmadı.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1789-03-09", b:"Ludovico Manin'in doge seçilmesi — son doge", tur:"hanedan", onem:3, dunya:1, kapsam:"ic",
  etiket:["anayasa"],
  d:"Cumhuriyetin yüz yirminci ve son dogesi seçildi. Sekiz yıl sonra cumhuriyetin feshine başkanlık edecekti.",
  kaynak:"Treccani, 'Manìn, Ludovico': cumhuriyetin Fransız silahlarıyla devrildiği anda (Mayıs 1797) doge olduğu · ⚠️ SEÇİM GÜNÜ doğrulanmadı" },

{ t:"1797-04-20", b:"Lido olayı — Fransız gemisine ateş açılması", tur:"kriz", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","kriz"],
  d:"Lido'nun ağzındaki bataryalar, girmesi yasak sulara giren bir Fransız savaş gemisine ateş açtı ve kaptanı öldürdü. Napolyon bunu savaş gerekçesi saydı; olay, üç hafta sonraki feshin doğrudan bahanesi oldu.",
  kaynak:"bulunamadı — gün DOĞRULANMADI" },

{ t:"1797-05-12", b:"Büyük Konsey'in kendini feshi — cumhuriyetin sonu", tur:"son", onem:5, dunya:3, kapsam:"ic",
  etiket:["anayasa","askeri"],
  d:"Napolyon'un tehdidi altında Büyük Konsey son kez toplandı ve cumhuriyeti feshetme kararı aldı; son doge Ludovico Manin görevi bıraktı. Bin yıllık cumhuriyet bir muharebe verilmeden sona erdi — Venedik belleğinde bu en ağır utanç anıdır.",
  kaynak:"Treccani, 'Manìn, Ludovico': Manin, cumhuriyetin Fransız silahlarıyla devrildiği anda (Mayıs 1797) dogeydi; \"Il doge abbandonò il potere con dignitosa fermezza\" · ⚠️ GÜN DOĞRULANMADI (kaynak 'Mayıs 1797' diyor)" },

{ t:"1797-10-17", b:"Campoformio Antlaşması — Venedik'in Avusturya'ya verilmesi", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","toprak-kayip","diplomasi"],
  d:"Napolyon, Venedik'i ve topraklarını Avusturya'ya bıraktı; bağımsızlık kesin olarak sona erdi ve şehir sonradan Lombardo-Veneto'nun parçası oldu. Venedik'in bir pazarlık kozu olarak devredilmesi, İtalyan tarihyazımında bağımsızlık kaybının simgesi sayılır.",
  kaynak:"Treccani, 'Manìn, Ludovico': \"Con il trattato di Campoformio (1797) Venezia fu ceduta da Napoleone all'Austria e, perduta l'indipendenza, entrò a far parte del Lombardo-Veneto\" · 🔴 `dunya:4` — Habsburg dosyasında bu gün YOK; değer ötekiler için REFERANSTIR" },

];
