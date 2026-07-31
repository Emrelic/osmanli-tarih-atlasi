// ============================================================================
// DERİNLEŞTİRME PARTİSİ 10 — BALKAN EKSENİ (Oturum 11)
// ============================================================================
// Oturum 11'in kronoloji dosyası. Kapsam: `KOORDINASYON.md §4`'te Oturum 11'e
// verilen Balkan bloğu — hatalar 13'ün üç maddesi (A bloğu) ve hatalar 11'in
// 1859-1913 Balkan maddeleri (B bloğu).
//
// ✅ YAYINA BAĞLI (merkez oturum, 30 Temmuz 2026). `index.html`'de script satırı ve
//   `js/app.js`'te `.concat(window.OLAYLAR_EK10 || [])` var. Doğrulama:
//   `py arac/denetle_yayin.py`.
//
// ---------------------------------------------------------------------------
// A BLOĞU — hatalar 13, üç madde
// ---------------------------------------------------------------------------
// md.2  Varna etiketi   → BU DOSYADA MADDE YOK. Sebep ölçüldü ve veri/arayüz
//                          sorunu çıktı; kronoloji maddesi zaten var (1391-01-01
//                          "Karadeniz kıyısında Varna'nın alınışı" + 1444-11
//                          "Varna Zaferi"). Ölçüm `oturumlar/OTURUM-11-BALKAN.md §1`.
// md.14 İyon adaları     → 1479-08-01 maddesi (aşağıda A-1)
// md.15 Karadağ 1482     → 1482-01-01 maddesi (aşağıda A-2)
//
// ---------------------------------------------------------------------------
// B BLOĞU — hatalar 14, iki madde
// ---------------------------------------------------------------------------
// md.2  Kili/Akkirman boşluğu → B-1 (1484-07-15) ve B-2 (1484-08-04).
//                          Ölçüldü: haritada GEOMETRİK BOŞLUK YOK, gövdeler
//                          değiyor. Kullanıcının "boş bölge" dediği şey Bender ve
//                          Hotin'in `s:"bogdan"` taşıması — Boğdan haritada İKİ
//                          AYRI RENKTE çiziliyor. Ölçüm `OTURUM-11-BALKAN.md §5`.
// md.3  İnebahtı           → B-3 (1499-08-26). Venedik etiketi DOĞRU; eksik olan
//                          şehir işareti, Varna ile aynı sınıf. `§6`.
//
// ---------------------------------------------------------------------------
// C BLOĞU — hatalar 15, Macaristan-Erdel-Eflak-Boğdan (sekiz madde)
// ---------------------------------------------------------------------------
// md.13 üçlü isyan     → C-1 · C-2 · C-3 · C-4 (aşağıda). Kronolojide GERÇEK
//                        BOŞLUK çıktı: 1593-07-01 ile 1596-06-20 arasında üç
//                        voyvodalığa dair tek madde yok.
// md.20 + md.16 Hotin  → C-5 (1713-06-24).
// md.12 Yanova/Varad   → madde gerekmedi; ikisinin de maddesi var ve `v:`→`d:`
//                        geçişi veride doğru kurulmuş. Cevap: EVET, ikisi de
//                        vasal Erdel'den alındı. `OTURUM-11-BALKAN.md §10`.
// md.1 · md.5 · md.7 · md.10 · md.15 → veri ve renk sorunu, madde yazılmadı;
//                        ölçümler `§11` (Macaristan üç katman ve YEŞİL lekeler),
//                        `§12` (Eflak oranı), `§13` (Solnok).
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — hangi madde gün, hangisi ay/yıl
// ---------------------------------------------------------------------------
// Hiçbir maddeye kaynakta olmayan gün verilmedi (`CLAUDE.md §4`, `OGRENILENLER §8`).
//   1479-08-01 → gerçek hassasiyet AY. TDV yalnız yılı veriyor ("iki yıl sonra",
//                yani 1477 evliliğinden sonra = 1479). Ağustos, harekâtın standart
//                literatürdeki dönemlendirmesinden (Ağustos-Kasım 1479 Kefalonya
//                harekâtı); `gun:` alanında "Ağustos 1479" yazıyor.
//   1482-01-01 → gerçek hassasiyet YIL. `gun:` alanında "1482" yazıyor.
//   1484-07-15 → GÜN. TDV `kili`: "20 Cemâziyelâhir 889 / 15 Temmuz 1484".
//   1484-08-04 → GÜN. TDV `akkirman`: "4 Ağustos 1484".
//   1499-08-26 → GÜN. TDV `inebahti`: "kaledeki Venedikliler 26 Ağustos'ta
//                kasabayı Osmanlılar'a teslim ettiler."
//
// ---------------------------------------------------------------------------
// SLUG DOĞRULAMASI — hepsi `<title>` ile sınandı (2026-07-30)
// ---------------------------------------------------------------------------
//   CANLI : gedik-ahmed-pasa · karadag · ayamavra · varna · varna-savasi · iskodra
//           kili · akkirman · inebahti · bogdan · hotin   ← 30 Temmuz turu
//   ÖLÜ   : kefalonya  ← `<title>` = "Arama - TDV İslâm Ansiklopedisi".
//           Kefalonya'nın TDV'de müstakil maddesi YOKTUR; ada yalnız `ayamavra`
//           ve `gedik-ahmed-pasa` maddelerinin içinde geçer. Bu yüzden A-1'in
//           kaynağı `gedik-ahmed-pasa` — dört adayı da tek cümlede sayan madde odur.
//   TDV'de KARŞILIĞI YOK : Crnojeviç. Arama "madde başlıklarında sonuç
//           bulunamadı" diyor; `iskodra` maddesinde de Crnojeviç/Cetinje/Zeta
//           geçmiyor. A-2'nin 1482 yılı bu yüzden TDV'ye DAYANMIYOR — maddenin
//           metninde bu açıkça yazılı. Ayrıntı: `OTURUM-11-BALKAN.md §3`.
// ============================================================================

window.OLAYLAR_EK10 = [

// ---------------------------------------------------------------------------
// A-1) 1479 İYON ADALARI — antlaşma ile fethin ayrılması
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 13 md.14): "1479 arnavutluk ve İşkodra ile birlikte iyonya
// adalarıda ele geçiriliyor galiba bunu madde olarak yazmalısın yada madde
// içinde adaların isimlerini belirtmelisin."
//
// Haklı — ve altında bir tarih hatası var. Veride dört ada da 1479-01-25'te,
// yani İstanbul Antlaşması gününde Osmanlı'ya geçiyor. Antlaşma Venedik'le
// yapıldı ve İşkodra ile Arnavutluk kıyısını konu ediyordu; adalar ise
// VENEDİK'İN DEĞİL, Tocco ailesinin elindeydi ve aynı yılın YAZINDA ayrı bir
// donanma harekâtıyla alındı. İki ayrı olay tek güne bindirilmiş.
// Yerleşim tarihi düzeltmesi `yerlesimler.js`'e ait → `OTURUM-11-BALKAN.md §2`.

{ t:"1479-08-01", k:"fetih", etiket:["toprak-kazanc","denizcilik"],
  b:"İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra, Kefalonya, Zaklise, İthaki",
  gun:"Ağustos 1479", yer:"Ayamavra (Lefkada), Kefalonya, Zaklise (Zakynthos), İthaki — İyon Denizi",
  kisiler:"Fatih Sultan Mehmed, Gedik Ahmed Paşa, Leonardo III Tocco",
  d:"Aynı yılın ocak ayında Venedik'le imzalanan İstanbul Antlaşması İşkodra ve Arnavutluk kıyısını Osmanlı'da bırakmıştı; İyon adaları ise Venedik'in değil, Kefalonya-Zaklise kontluğunu elinde tutan Tocco ailesinin idaresindeydi ve ayrı bir harekâtla alındı. TDV'nin Ayamavra maddesine göre son dük Leonardo Tocco önce Fâtih'in akrabası Milica Brankoviç ile evlenerek sadakatini korumuş, 1464'te eşi ölünce 1477'de Napoli hanedanından Francesca Marzano ile evlenerek padişahı gücendirmişti. İki yıl sonra Avlonya beyi Gedik Ahmed Paşa kumandasındaki donanma Ayamavra'yı güneydeki Kefalonya ile birlikte ele geçirdi; Leonardo ve Francesca İtalya'ya kaçtı. Gedik Ahmed Paşa maddesi aynı harekâtta Zaklise'nin (Zanta) de alındığını kaydeder; Kefalonya kontluğuna bağlı İthaki de bu devirle Osmanlı idaresine girdi. Böylece Adriyatik ağzından Mora'ya uzanan deniz yolu bütünüyle denetim altına alındı. Adalardan Zaklise üç yıl sonra Venedik'e bırakılacak, Kefalonya ile İthaki 1500'de kaybedilecek, yalnız Ayamavra iki yüz yıl Osmanlı'da kalacaktı.",
  kaynak:"gedik-ahmed-pasa" },

// ---------------------------------------------------------------------------
// A-2) 1482 KARADAĞ — haritada beliren ama kronolojide adı geçmeyen kırılma
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 13 md.15): "Zakintos venediğe bırakılır iken karadağda ele
// geçiriliyor galiba ama kronolojide zikredilmiyor gerekirse ayrı madde yapılmalı."
//
// Ölçüldü, kullanıcı haklı ve sebebi tam olarak `CLAUDE.md §3 Değişmez 2`'nin
// tarif ettiği hata: `yerlesimler.js` Cetinje kaydı `kur:"1482-01-01"` ve
// `v:[{f:"1482-01-01", …, k:"Crnojeviç Zetası (Osmanlı tâbii)"}]` taşıyor.
// Yani 1 Ocak 1482'de haritada Karadağ'da yeni bir AÇIK TONLU (tâbi) gövde
// beliriyor. O gün kronolojideki tek madde Zaklise'nin Venedik'e bırakılması —
// değişim alakasız bir maddenin altında görünüyor.

{ t:"1482-01-01", k:"vassal", etiket:["toprak-kazanc","siyaset"],
  b:"Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merkez oluşu",
  gun:"1482", yer:"Cetinje, Lovçen eteği, Karadağ",
  kisiler:"II. Bayezid, İvan Crnojeviç",
  d:"İşkodra'nın 1479'da Osmanlı'da kalmasıyla arka bahçesindeki Zeta dağlık bölgesi de imparatorluğun sınırları içine düştü. Bölgeyi elinde tutan Crnojeviç ailesi, Fâtih'in ölümünden sonra tahta çıkan II. Bayezid'in hükümdarlığını tanıyıp haraca bağlanarak iç işlerinde serbest kaldı; İvan Crnojeviç merkezini ovadan çekip Lovçen dağının eteğindeki Cetinje'ye taşıdı ve şehri kurdu. İki yıl sonra buraya yaptırdığı manastır bölgenin dinî merkezi oldu. Böylece Karadağ, haritada doğrudan Osmanlı toprağı olarak değil, açık tonda bir tâbi bölge olarak belirir. TDV'nin Karadağ maddesi hanedanı ve Cetinje piskoposluğunu anar, hâkimiyetin 1514'te İskender Bey (Crnojeviç soyundan, Osmanlı sarayında yetişmiş) eliyle ayrı bir sancağa dönüştüğünü yazar; 1482 yılı ise TDV'de geçmez, Karadağ tarih yazımının verdiği tarihtir. Coğrafyanın sertliği yüzünden buradaki idare hiçbir zaman ovalardaki gibi sıkı işlemedi.",
  kaynak:"karadag" },

// ---------------------------------------------------------------------------
// B-1) 1484 KİLİ — Boğdan'ın iki limanından birincisi
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 14 md.2): "Kili ve Akkerman fethedilince ortada böyle bir
// boşluk mu kalıyor, Boğdan ile Akkerman arasında boş bölge."
//
// ⚠️ Bu madde MEVCUT `1484-08-03 | Kili ve Akkirman'ın fethi` maddesinin yerine
// geçmek üzere yazıldı. İki ayrı kuşatma, aralarında 20 gün var ve TDV ikisine de
// ayrı gün veriyor; tek güne bindirmek hem tarihi hem de kullanıcının "her yerin
// fethi ismiyle ayrı madde" kuralını çiğniyor. Eski maddenin kaldırılması merkez
// oturumdan istendi — `OTURUM-11-BALKAN.md §7`. Kaldırılana kadar mükerrer
// denetimi bu ikisini komşu gösterecek; beklenen davranış budur.

{ t:"1484-07-15", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Kili Kalesi'nin fethi — Tuna ağzının kilidi",
  gun:"15 Temmuz 1484 (20 Cemâziyelâhir 889)", yer:"Kili (Chilia), Tuna deltası, Boğdan sahili",
  kisiler:"II. Bayezid, Kırım Hanı Mengli Giray, Boğdan Voyvodası Büyük Ştefan",
  d:"Boğdan 1455 eylülünden beri yılda iki bin altın haraç ödeyen tâbi bir voyvodalıktı, ama Karadeniz'e açılan iki limanı hâlâ voyvodanın elindeydi ve Tuna'dan gelen ticaret oradan geçiyordu. II. Bayezid saltanatının ilk büyük seferini bu iki limana yaptı. On gün boyunca gece gündüz topa tutulan Kili Kalesi'nin kumandanı teslim olmak zorunda kaldı. Kale doğrudan Osmanlı idaresine alınıp sancak beyliği haline getirildi; XVI. yüzyılın ikinci yarısında Kazak tehlikesi yüzünden kaza yapılıp Rumeli beylerbeyiliğine bağlı Akkirman sancağına bağlandı. Buradan sonra Boğdan haritada iki kademeli görünür: içeride voyvodalık açık tonda tâbi toprak olarak durur, kıyıdaki iki liman ise koyu tonda doğrudan Osmanlı sancağıdır. TDV'nin Boğdan maddesi bu ikisini 'Boğdan'ın anahtarları ve kapıları' diye anar ve bölgenin II. Bayezid zamanında kesin olarak Osmanlı'ya bağlandığını yazar.",
  kaynak:"kili" },

// ---------------------------------------------------------------------------
// B-2) 1484 AKKİRMAN — yirmi gün sonraki ikinci kuşatma
// ---------------------------------------------------------------------------

{ t:"1484-08-04", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Akkirman'ın fethi — Dinyester ağzı ve Boğdan'ın Karadeniz kapısının kapanışı",
  gun:"4 Ağustos 1484", yer:"Akkirman (Cetatea Albă), Dinyester haliç ağzı, Boğdan sahili",
  kisiler:"II. Bayezid, Boğdan Voyvodası Büyük Ştefan",
  d:"Kili'nin tesliminden yirmi gün sonra ordu Dinyester ağzındaki Akkirman'ın önüne geldi ve kale 4 Ağustos'ta alındı. Şehir Boğdan'ın en işlek limanıydı; Fâtih devrinde voyvoda III. Petru 1455'te Osmanlı hâkimiyetini tanıyınca Akkirman tüccarlarına ticaret izni verilmişti, şimdi liman doğrudan devletin oldu. Fetihten sonra Rumeli beylerbeyiliğine bağlı bir sancak haline getirilen Akkirman, 1593'te yeni kurulan Özü eyaletine ilhak edildi. Böylece Boğdan'ın kuzeyden Hotin, güneyden Kili ve Akkirman ile çevrelenen dış kabuğu Osmanlı'nın doğrudan denetimine girmeye başladı; voyvodalık iç işlerinde serbest kaldı ama denize çıkışı kalmadı. Haritada arada boş bir bölge yoktur — koyu tonlu liman sancakları ile açık tonlu voyvodalık toprağı birbirine değer; ikisi arasındaki Bucak bozkırı 1538'e kadar hâlâ voyvodalığın parçasıdır.",
  kaynak:"akkirman" },

// ---------------------------------------------------------------------------
// B-3) 1499 İNEBAHTI — Sapienza'dan ayrılan kara olayı
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 14 md.3): "Sapienza deniz zaferinden önce İnebahtı bölgesinde
// arka planda Venedik yazıyor, bu hata mı? İnebahtı o anda Osmanlı'da değil ise
// o zaman haritada neden görünmüyor?"
//
// Etiket DOĞRU: İnebahtı 1407'den 1499'a Venedik'teydi. Görünmeyen şey şehir
// İŞARETİDİR ve sebebi arayüzde — `OTURUM-11-BALKAN.md §6`.
// ⚠️ Bu madde de mevcut `1499-08-28 | Sapienza deniz zaferi ve İnebahtı'nın fethi`
// maddesinden ayrılmak üzere yazıldı: deniz savaşı ile kalenin teslimi iki ayrı
// olaydır ve TDV teslim gününü 26 Ağustos veriyor.

{ t:"1499-08-26", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"İnebahtı'nın teslimi — Korint körfezinin ağzı Venedik'ten alınıyor",
  gun:"26 Ağustos 1499", yer:"İnebahtı (Lepanto / Naupaktos), Korint körfezi ağzı, Mora",
  kisiler:"II. Bayezid, Küçük Davud Paşa, Kemal Reis",
  d:"İnebahtı 1407'den beri Venedik'in elindeydi ve Korint körfezinin ağzını tutuyordu; körfezin içindeki bütün kıyı bu kalenin menziline bağlıydı. 1499 seferinde kale karadan kuşatıldı, İnebahtı açıklarında Venedik donanmasıyla çarpışan Osmanlı donanması ise denizden kuşatma kuvvetlerine yardımcı oldu. Kaledeki Venedikliler 26 Ağustos'ta kasabayı Osmanlılar'a teslim ettiler. Şehir bundan sonra yüz seksen sekiz yıl Osmanlı'da kaldı, 1687'de Mora'nın kaybıyla yeniden Venedik'e geçti, 1715'te geri alındı. Aynı yazın deniz muharebesi ile bu teslim iki ayrı olaydır: donanma çarpışması Mora'nın batı ucunda, Sapienza-Zonchio sularında cereyan etti; İnebahtı ise Korint körfezinin ağzında bir kara kuşatmasıyla düştü.",
  kaynak:"inebahti" },

// ===========================================================================
// C BLOĞU — hatalar 15: MACARİSTAN-ERDEL-EFLAK-BOĞDAN
// ===========================================================================
// Merkez oturumun tarifi: "Bu blok tek tek maddelerden değil, TEK BİR SORUDAN
// oluşuyor: Osmanlı'nın Orta Avrupa'daki üç katmanlı yapısı (doğrudan sancak /
// vasal prenslik / Habsburg tarafı) haritada doğru mu?"
//
// Ölçümlerin tamamı `oturumlar/OTURUM-11-BALKAN.md §9-§13`'te. Buraya YALNIZ
// kronolojide gerçek boşluk çıkan maddeler yazıldı:
//
//   md.13 üçlü isyan  → C-1 (1594-10-05) · C-2 (1594-11-13) · C-3 (1595-08-23)
//                        · C-4 (1595-10-01).  KRONOLOJİDE HİÇ YOKTU: 1593-07-01
//                        ile 1596-06-20 arasında Erdel/Eflak/Boğdan'a dair tek
//                        madde bile yok; en yakın madde 47 gün uzakta ve
//                        Yanıkkale ile ilgili.
//   md.20 + md.16 Hotin → C-5 (1713-06-24). Kullanıcı: "Kronolojide bununla
//                        alakalı bir metin ifade yok." DOĞRU — o günün maddesi
//                        (`Rusya ile Edirne Antlaşması`) Hotin'i yalnız otomatik
//                        kuyrukta anıyor, kalenin Boğdan'dan koparılışını
//                        anlatmıyor. Haritanın kırmızıya dönmesinin sebebi budur.
//   md.12 Yanova/Varad → MADDE YAZILMADI. İkisinin de maddesi zaten var ve
//                        ikisi de Erdel'i açıkça anıyor; veri de `v:`→`d:`
//                        geçişini doğru kuruyor. Cevap "EVET, vasaldan alındı" ve
//                        harita bunu zaten gösteriyor. Tek kusur Yanova'nın
//                        KAYIP tarihi — ayrıntı `§10`.
//   md.1 · md.5 · md.7 · md.10 · md.15 → MADDE YAZILMADI, hepsi veri/renk
//                        sorunu; düzeltme listesi `§4`, ölçümler `§11-§13`.
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ VE KAYNAK — C bloğu
// ---------------------------------------------------------------------------
// TDV bu dört maddenin ÖZÜNÜ veriyor ama GÜNÜNÜ vermiyor. `CLAUDE.md §4`
// uyarınca gün uydurulmadı; günü standart akademik literatürden gelen maddelerde
// bu durum `gun:` alanında ve aşağıda açıkça yazılıdır.
//   1594-10-05 → GÜN, literatürden. TDV `bogdan` yalnız yılı ve olayı veriyor:
//                "1594'te Türkler'e karşı Papa VIII. Clément'in himayesi altında
//                Avusturya Kralı II. Rudolf ile Erdel Prensi Zsigmond Báthory
//                arasında kurulan Kutsal İttifak'a girdi." Gün, Uzun Savaş
//                literatüründe üç voyvodanın ortak katılım kararı için verilen
//                5 Ekim 1594 tarihidir.
//   1594-11-13 → GÜN, literatürden. TDV `eflak` olayı doğruluyor ("vergi yüzünden
//                isyan etti") ama gün vermiyor.
//   1595-08-23 → GÜN, literatürden. TDV `eflak` muharebenin ADINI veriyor:
//                "Koca Sinan Paşa'nın idaresindeki orduya Kalûgerân'da bas[kın]".
//   1595-10-01 → gerçek hassasiyet AY. TDV `yergogu`: "1595 Ekiminde Eflak'tan
//                dönen orduyu takip eden akıncılar burada Eflak Voyvodası
//                Mihal'in baskınına uğradılar." `gun:` alanında "Ekim 1595".
//   1713-06-24 → GÜN, verideki kırılma günü. TDV `hotin` yıl veriyor:
//                "1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı idaresine
//                sokuldu ve önce bir nahiye, sonra da sancak statüsü verildi."
//
// SLUG DOĞRULAMASI — hepsi `<title>` ile sınandı (2026-07-31):
//   CANLI : erdel · eflak · bogdan · hotin · varad · yanova · yergogu · budin
//   ⚠️ `<title>` kontrolü tek tek yapıldı; hiçbiri "Arama - TDV İslâm
//      Ansiklopedisi" dönmedi.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// C-1) 1594 ÜÇLÜ İSYAN — kullanıcının sorduğu tarih
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 15 md.13): "Erdel, Eflak ve Boğdan vasal devletlerinin
// ÜÇÜNÜN BİRDEN Osmanlı'ya başkaldırdığı bir tarih var idi, bu bizim kronolojide
// yer almıyor sanki."
// Ölçüldü: yer ALMIYOR. Kronolojide 1593-07-01 (Uzun Savaş'ın başlaması) ile
// 1596-06-20 arasında üç voyvodalığa dair tek madde yok.

{ t:"1594-10-05", k:"siyaset", etiket:["isyan","diplomasi"],
  b:"Üç voyvodalığın birden ayaklanması — Erdel, Eflak ve Boğdan Kutsal İttifak'a giriyor",
  gun:"5 Ekim 1594", yer:"Erdel, Eflak ve Boğdan voyvodalıkları",
  kisiler:"III. Murad, Erdel Prensi Zsigmond Báthory, Eflak Voyvodası Cesur Mihail, Boğdan Voyvodası Aron Vodâ, Papa VIII. Clément, Avusturya Kralı II. Rudolf",
  d:"Uzun Savaş'ın ikinci yılında Osmanlı'nın Orta Avrupa'daki vasal kuşağı bir anda çözüldü. Papa VIII. Clément'in himayesinde kurulan Kutsal İttifak'a önce Erdel Prensi Zsigmond Báthory girdi; Báthory 28 Ağustos 1594'te savaşa karşı çıkan Osmanlı yanlısı beyleri tasfiye ederek içerideki muhalefeti kırmıştı. Ardından Eflak Voyvodası Cesur Mihail ile Boğdan Voyvodası Aron Vodâ da aynı ittifaka katılma kararı aldılar. Böylece Osmanlı'nın Tuna'nın kuzeyindeki üç tâbi prensliği — yüz elli yıldır haraç ödeyen, voyvodası İstanbul'ca onaylanan üç voyvodalık — aynı sonbaharda birden karşı tarafa geçti. Karar 28 Ocak 1595'te Prag'da imzalanan antlaşmayla resmîleşti. Bu, Osmanlı'nın Balkanlar'ın kuzeyindeki dolaylı yönetim düzeninin uğradığı en ağır sarsıntıydı; ayaklanma bastırılacak ama üç prensliğin sadakati bir daha 1526-1593 arasındaki kadar sağlam olmayacaktı.",
  kaynak:"bogdan" },

// ---------------------------------------------------------------------------
// C-2) 1594 KASIM — ayaklanmanın Tuna hattına vurması
// ---------------------------------------------------------------------------

{ t:"1594-11-13", k:"savas", etiket:["isyan","savas"],
  b:"Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın haritaya vurduğu an",
  gun:"13 Kasım 1594", yer:"Bükreş, Yergöğü, İbrail, Hırsova, Silistre ve Bender",
  kisiler:"Eflak Voyvodası Cesur Mihail, Boğdan Voyvodası Aron Vodâ",
  d:"Kutsal İttifak kararı bir ay sonra kanla uygulandı: Cesur Mihail Bükreş'te Osmanlı muhafız birliğini ve şehirdeki Levanten alacaklıları kılıçtan geçirdi. Ayaklanma aynı kış Tuna hattına yayıldı; Eflak kuvvetleri Yergöğü, İbrail, Hırsova ve Silistre'ye saldırdı, Boğdan tarafında ise Aron Vodâ Bender'deki Osmanlı muhafızlarına aynı baskını yaptı. Vurulan yerlerin seçimi tesadüf değildir: bunların hepsi voyvodalık toprağı değil, Tuna boyunda doğrudan Osmanlı idaresine bağlı kale ve kazalardı — Yergöğü kazası Niğbolu sancak beyliğine, İbrail 1538'den beri doğrudan devlete, Bender yine 1538'den beri Bucak sancağına bağlıydı. Yani isyan, vasal iç bölgeden değil, o bölgeyi çevreleyen doğrudan Osmanlı kabuğuna vurmuştu. Bu kabuk delinmeden Erdel-Eflak-Boğdan üçgeni Habsburg cephesine bağlanamazdı.",
  kaynak:"eflak" },

// ---------------------------------------------------------------------------
// C-3) 1595 KALÛGERÂN — bastırma seferi
// ---------------------------------------------------------------------------

{ t:"1595-08-23", k:"savas", etiket:["savas"],
  b:"Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi",
  gun:"23 Ağustos 1595", yer:"Kalûgerân (Călugăreni), Neajlov bataklığı, Eflak",
  kisiler:"III. Mehmed, Sadrazam Koca Sinan Paşa, Eflak Voyvodası Cesur Mihail",
  d:"Üç voyvodalığın birden elden çıkması üzerine sadrazam Koca Sinan Paşa büyük bir orduyla Tuna'yı geçti ve Eflak'ı yeniden itaat altına almak üzere yürüdü. Cesur Mihail açık savaşta karşı koyamayacağını bildiğinden orduyu Neajlov'un bataklık geçidinde, Kalûgerân'da bekledi ve dar araziye sıkışan kuvvetlere baskın verdi. Baskından sonra sayıca üstün Osmanlı ordusuna karşı duramayarak kuzeye, dağlara çekildi; Sinan Paşa Bükreş ve Târgovişte'yi işgal edip Eflak'ı doğrudan idareye bağlamayı denedi. Kalûgerân bu yüzden Osmanlı için bir yenilgi değil, seferin tamamlanmasını geciktiren bir baskındı; ama Mihail'in ordusunu koruyabilmiş olması, birkaç hafta sonra Erdel'den gelen yardımla karşı taarruza geçmesini mümkün kıldı.",
  kaynak:"eflak" },

// ---------------------------------------------------------------------------
// C-4) 1595 EKİM — geri çekilme ve Yergöğü baskını
// ---------------------------------------------------------------------------

{ t:"1595-10-01", k:"savas", etiket:["savas"],
  b:"Eflak'tan çekiliş ve Yergöğü baskını — bastırma seferinin sonuçsuz kalışı",
  gun:"Ekim 1595", yer:"Yergöğü (Giurgiu), Tuna'nın Eflak yakası",
  kisiler:"Sadrazam Koca Sinan Paşa, Eflak Voyvodası Cesur Mihail, Erdel Prensi Zsigmond Báthory",
  d:"Erdel prensinin kuvvetleriyle birleşen Cesur Mihail'in karşı taarruzu üzerine Sinan Paşa Târgovişte ve Bükreş'i boşaltıp Tuna'ya çekildi. Çekilişin en pahalı anı geçit başında yaşandı: 1595 ekiminde Eflak'tan dönen orduyu takip eden akıncılar Yergöğü'nde Mihail'in baskınına uğradılar. Sefer böylece Eflak'ı doğrudan idareye bağlama hedefine ulaşamadan bitti ve voyvodalık fiilen elden çıkmış olarak kaldı. Osmanlı otoritesi bu üçgende ancak yıllar içinde ve parça parça onarılabildi; Erdel'in itaate dönüşü 1604'te Bocskai ayaklanmasını, cephenin bütünüyle kapanması ise 1606 Zitvatorok Antlaşması'nı bekleyecekti. Haritada bu dönemin üç voyvodalığı hâlâ tâbi renkte görünüyor — ayaklanma yıllarının toprak karşılığı henüz veriye işlenmedi.",
  kaynak:"yergogu" },

// ---------------------------------------------------------------------------
// C-5) 1713 HOTİN — "kronolojide bununla alakalı bir metin ifade yok"
// ---------------------------------------------------------------------------
// Kullanıcı (hatalar 15 md.20): "Ruslarla Edirne Antlaşması sonrasında Hotin
// bölgesi KIRMIZIYA boyandı, bu bir hata mıdır? Kronolojide bununla alakalı bir
// metin ifade yok."  ·  (md.16): "Bu Hotin hep böyle TEK BAŞINA görünüyor."
//
// Renk DOĞRU, şikâyet de haklı: kırmızı gerçekten Hotin'in doğrudan Osmanlı
// idaresine geçtiğini gösteriyor, ama o günün mevcut maddesi (`Rusya ile Edirne
// Antlaşması`) İsveç, Kazak ve Lehistan şartlarını anlatıp Hotin'i yalnız
// otomatik "haritaya katılan yerleşimler" kuyruğunda anıyor. Aşağıdaki madde tam
// olarak o boşluğu doldurur. "Tek başına" görünmesi de doğrudur: Hotin 1713-1812
// arasında tâbi Boğdan'ın ortasında ayrı bir doğrudan Osmanlı sancağıdır.

{ t:"1713-06-24", k:"idari", etiket:["toprak-kazanc","idare"],
  b:"Hotin'in Boğdan'dan koparılması — voyvodalığın ortasında doğrudan Osmanlı sancağı",
  gun:"24 Haziran 1713", yer:"Hotin Kalesi, Dinyester'in sağ yakası, kuzey Boğdan",
  kisiler:"III. Ahmed, Boğdan Voyvodası Dimitrie Cantemir (1711'de Rusya'ya geçen voyvoda), Demirbaş Şarl",
  d:"Prut seferinde Boğdan voyvodası Dimitrie Cantemir'in Rusya tarafına geçmesi, voyvodalığın kuzey sınırının artık voyvodaya bırakılamayacağını gösterdi. Bunun üzerine Hotin 1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı idaresine sokuldu; önce bir nahiye, sonra sancak statüsü verildi. 1713'teki geçici Rus işgalinin ardından kale İstanbul'dan gönderilen Osmanlı ve Fransız teknik heyetinin nezaretinde yeniden tamir edilerek genişletildi ve Tuna'nın kuzeyindeki en güçlü Osmanlı istihkâmı hâline geldi. Haritada bu tarihten sonra Hotin'in tâbi voyvodalık tonundan çıkıp doğrudan Osmanlı rengine dönmesi, ve tâbi Boğdan'ın ortasında yalnız bir ada gibi durması işte bu idarî ayrılmanın karşılığıdır — bir çizim hatası değildir. Aynı yapı Bucak'ta 1538'den, Kili ve Akkirman'da 1484'ten beri zaten vardı: voyvodalık iç işlerinde serbest, sınır kaleleri devletin.",
  kaynak:"hotin" },

// ===========================================================================
// D BLOĞU — hatalar 11, Balkan ekseni 1877-1913 (md.38·39 · md.46-49 · md.54 ·
//           md.57·58)
// ===========================================================================
// ⚠️ ÖLÇÜM HATASI VE DÜZELTİLMESİ — bu blok 14 maddeyle yazıldı, 6'ya indi.
//    İlk tarama `grep 't:"187[5-9]-..." ... b:"..."` ile yapılmıştı; bu kalıp
//    `t:` ile `b:`nin AYNI SATIRDA olmasını şart koşuyor, oysa bu projedeki
//    kronoloji kayıtlarının çoğu çok satırlı. Tarama 1876-1913 aralığını neredeyse
//    boş gösterdi ve "93 Harbi kronolojide yok" gibi YANLIŞ bir sonuca götürdü.
//    Gerçekte Ayastefanos, Berlin, Edirne Mütarekesi, Doğu Rumeli 1885, Bosna
//    ilhakı, Londra, Edirne'nin geri alınışı ve İstanbul Antlaşması maddelerinin
//    HEPSİ zaten vardı (`olaylar.js`, `olaylar_ek.js`, `olaylar_ek5.js`).
//    Sekiz mükerrer madde `denetle.py`'nin 5. kontrolüyle yakalandı ve silindi.
//    📌 DERS: kronoloji dosyaları `grep` ile SAYILMAZ; `node -e` ile eval edilip
//    nesne olarak sayılır. Tek satırlık kayıt varsayımı bu projede geçersizdir.
//
// Geriye kalan altı madde gerçekten eksik olanlardır — hepsi 93 Harbi'nin askerî
// safhaları (`olaylar.js`'te yalnız ay hassasiyetli `1877-04` "93 Harbi" umbrella
// maddesi vardı) ve Balkan savaşlarının ilk iki haftası.
//
// 🟡 MERKEZE: iki umbrella madde emekli edilmeli (benim dosyam değil):
//    `olaylar.js`  1877-04  "93 Harbi (1877–78 Osmanlı-Rus Savaşı)"  → D-1 karşılıyor
//    `olaylar.js`  1912-10  "Balkan Savaşları başladı"                → D-5 karşılıyor
//    İkisi de ay hassasiyetli; CLAUDE.md §8 gün yazılmasını şart koşuyor ve ayın
//    1'ine genişleyip gün hassasiyetli yerleşim değişimlerinden ÖNCE sıralanıyorlar.
//
// Kaynak: TDV `doksanuc-harbi` ve `balkan-savasi` — ikisi de `<title>` ile canlı
// doğrulandı (31 Temmuz 2026).

// --- md.38·39 — 93 Harbi'ne giden yol ve safhaları ------------------------

{ t:"1877-04-24", k:"savas", etiket:["savas","diplomasi"],
  b:"Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması",
  gun:"24 Nisan 1877", yer:"Tuna ve Doğu Anadolu cepheleri",
  kisiler:"II. Abdülhamid, Serdârıekrem Abdülkerim Nâdir Paşa, Ahmed Muhtar Paşa, Grandük Nikola",
  d:"1876 Bulgar İsyanı'nın bastırılışı Avrupa kamuoyunda büyük infial uyandırmış, Rusya bunu Bâbıâli'yi yalnızlaştırmak için sonuna kadar kullanmıştı. İstanbul (Tersane) Konferansı'nın Bulgaristan'ı iki muhtar eyalete bölme teklifi ve ardından 31 Mart 1877 tarihli Londra Protokolü Osmanlı Devleti tarafından reddedilince Rusya 24 Nisan 1877'de savaş ilân etti. Rûmî takvimde 1293 yılına rastladığı için savaş Doksanüç Harbi adıyla anılır. Harekât Tuna ve Doğu Anadolu olmak üzere iki cephede yürüdü: Tuna'da 180.000 kişilik Osmanlı ordusu nehrin sol kıyısını birinci, Balkan dağlarını ikinci savunma hattı saymıştı; doğuda Ahmed Muhtar Paşa'nın 55.000 askeri Ardahan-Doğubayazıt arasında mevzilenmişti. Bu savaş haritada Osmanlı Rumelisi'nin çöküşünü başlatan olaydır — Bulgaristan, Sırbistan, Karadağ ve Romanya'nın bugünkü sınırlarının hepsi bu on beş ayın ürünüdür.",
  kaynak:"doksanuc-harbi" },

{ t:"1877-06-27", k:"kayip", etiket:["savas","toprak-kaybi"],
  b:"Rus ordusunun Tuna'yı geçmesi — Ziştovi ve Tırnova'nın düşüşü",
  gun:"27 Haziran 1877", yer:"Ziştovi (Sviştov), Tuna'nın sağ yakası",
  kisiler:"Grandük Nikola, Abdülkerim Nâdir Paşa",
  d:"Savaşın başlamasıyla Romanya topraklarına giren ve bu prensliği kendi tarafına çeken Ruslar, biri Dobruca diğeri Bükreş istikametinde olmak üzere iki koldan ilerledi. Tuna, Rusçuk ile Niğbolu arasından geçildi ve 27 Haziran'da Ziştovi, 1 Temmuz'da eski Bulgar başşehri Tırnova ele geçirildi. Tahliyesi emredildiği halde bu hususa itina gösterilmediği için Niğbolu da bir müddet direndikten sonra teslim oldu. Birinci savunma hattının bir hafta içinde yarılması İstanbul'da büyük paniğe yol açtı; saltanat merkezinin Bursa'ya nakledileceğine dair haberler bile yayıldı ve savaşın idaresi başşehirde kurulan bir askerî meclise devredildi.",
  kaynak:"doksanuc-harbi" },

{ t:"1877-07-19", k:"kayip", etiket:["savas","toprak-kaybi"],
  b:"Şıpka Geçidi'nin tahliyesi — Balkan hattının yarılması",
  gun:"19 Temmuz 1877", yer:"Şıpka Geçidi, Balkan (Stara Planina) dağları",
  kisiler:"General Gurko, Süleyman Paşa",
  d:"Balkan dağlarını aşan geçitlerin en stratejiği olan Şıpka'daki Osmanlı kuvvetleri Rus saldırılarına şiddetle karşı koydular; ancak yenileceklerine kanaat getirince 19 Temmuz'da geçidi gizlice tahliye ettiler. Böylece ikinci savunma hattı da açıldı ve General Gurko 22 Temmuz'da Eski Zağra'yı ele geçirdi. Karadağ tarafından yetişen Süleyman Paşa Gurko'yu yenilgiye uğratıp Balkanların güneyindeki işgal altındaki yerleri geri aldıysa da 21 Ağustos'tan itibaren aylarca süren taarruzlara rağmen Şıpka'yı geri alamadı. Haritada bu, Balkan sıradağlarının kuzeyi ile güneyi arasındaki savunma bütünlüğünün bir daha kurulamamasıdır: Tuna cephesindeki mücadele bundan sonra Plevne'de düğümlenecektir.",
  kaynak:"doksanuc-harbi" },

{ t:"1877-11-18", k:"kayip", etiket:["savas","toprak-kaybi"],
  b:"Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları",
  gun:"18 Kasım 1877", yer:"Kars Kalesi ve Erzurum-Aziziye tabyaları",
  kisiler:"Ahmed Muhtar Paşa, General Melikof, General Lazarof, Nene Hatun",
  d:"Doğu Anadolu'da Kars, Doğubayazıt ve Ardahan'a doğru üç koldan ilerleyen Ruslar 30 Nisan'da Doğubayazıt'ı almış, Ardahan'a girmiş, fakat Erzurum üzerine yürürken 15 Temmuz'da mağlûp edilerek sınır dışına atılmışlardı. Ahmed Muhtar Paşa'ya \"Gazi\" unvanını kazandıran bu başarı ağustosta General Lazarof'un yeniden taarruza geçmesiyle tersine döndü ve 18 Kasım'da Kars düştü. Daha uygun bir savunma için Erzurum'a çekilen Osmanlı kuvvetleri Aziziye tabyalarında, Nene Hatun'un ahaliyi teşvikiyle büyük bir mukavemet gösterdi. Kars, Ardahan ve Batum sekiz ay sonra Berlin'de harp tazminatının bir kısmına karşılık Rusya'ya bırakılacaktır.",
  kaynak:"doksanuc-harbi" },

// --- md.46-49 — Ayastefanos'tan Berlin'e ----------------------------------

// --- md.57·58 — Balkan savaşları -----------------------------------------

{ t:"1912-10-08", k:"savas", etiket:["savas","ittifak"],
  b:"I. Balkan Savaşı'nın başlaması — Karadağ'ın savaş ilânı",
  gun:"8 Ekim 1912", yer:"Arnavutluk ve Yenipazar sancağı",
  kisiler:"Karadağ Kralı Nikola, Sadrazam Gazi Ahmed Muhtar Paşa, Hariciye Nâzırı Noradungiyan Efendi",
  d:"Balkan devletleri, İttihat ve Terakkî'nin 3 Temmuz 1911 tarihli kanunla kiliseler meselesini çözmesinin ardından aralarındaki en büyük engeli kaldırmış, Rusya'nın kışkırtmasıyla 1912 boyunca birbirleriyle ittifak antlaşmaları imzalamışlardı (13 Mart'ta Bulgaristan-Yunanistan, ağustosta Karadağ-Bulgaristan, 6 Ekim'de Karadağ-Sırbistan). Bâbıâli bunu farketmedi; hatta Rusya'nın teminatına güvenerek Rumeli'deki 120 tâlimli taburu terhis etti. Dört devlet 3 Ekim'de ortak nota vererek Makedonya, Arnavutluk ve Girit'e muhtariyet istedi; cevap alamayınca 8 Ekim 1912'de Karadağ'ın savaş ilânıyla harekât başladı. 13 Ekim'de Sırbistan ve Bulgaristan elçilerinin pasaportları ellerine verildi, ertesi gün bu iki devlet, ardından Yunanistan savaş ilân etti. ⚠️ Kronolojide bu olay bugüne kadar ay hassasiyetli `1912-10` olarak duruyordu; CLAUDE.md §8 gün yazılmasını şart koşuyor.",
  kaynak:"balkan-savasi" },

{ t:"1912-10-23", k:"kayip", etiket:["savas","toprak-kaybi"],
  b:"Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş — Kumanova ve Selânik'in kaybı",
  gun:"23 Ekim 1912", yer:"Doğu Trakya (Çatalca hattı), Kumanova, Selânik",
  kisiler:"Tahsin Paşa, Gazi Ahmed Muhtar Paşa, Kâmil Paşa",
  d:"Osmanlı Şark Ordusu 23 Ekim 1912'de kendisinden üç kat kalabalık Bulgar ordusuna yenilerek İstanbul'un otuz kilometre batısındaki Çatalca hattına kadar çekildi; başşehir savaşın ilk ayında doğrudan tehdit altına girdi. Aynı günlerde Garp Ordusu 23-24 Ekim'de Kumanova'da Sırplar'a yenildi ve Tahsin Paşa 35.000 kişilik ordusuyla Selânik'te Yunanlılar'a teslim oldu. Bu bozgunlar üzerine 29 Ekim'de Gazi Ahmed Muhtar Paşa kabinesi istifa etti; Selânik'te sürgün hayatı süren II. Abdülhamid 1 Kasım'da İstanbul'a nakledildi. Çatalca hattı savaşın sonuna kadar tutuldu — Rumeli'nin beş yüz yıllık Osmanlı coğrafyası birkaç hafta içinde bu dar şeride indi.",
  kaynak:"balkan-savasi" },

// ===========================================================================
// E BLOĞU — BEKLEMEDE, BU DOSYADA DEĞİL
// ===========================================================================
// Böğürdelen (Šabac) zincirinin dört kırılması için TDV `bogurdelen`den
// dört madde yazıldı ve sonra BU DOSYADAN ÇIKARILDI. Sebep ölçüldü:
// yerleşim henüz `yerlesimler.js`te yok, dolayısıyla maddeler hiçbir
// kırılmaya denk gelmiyor ve `denetle.py` **Değişmez 2t** ile yakaladı —
// "kırılmasız madde" 67 tavanından 70e çıktı, SONUÇ: İHLAL VAR.
//
// ✅ Böğürdelen kaydı yerlesimler.js'e eklendi, dört madde aşağıda AYNI
//    ADIMDA yapıştırıldı (kaynak: oturumlar/OTURUM-11-BALKAN.md §19.5).
// ===========================================================================

{ t:"1476-02-01", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Böğürdelen'in Macarlara kaybı — Sava hattındaki ilk gedik",
  gun:"Şubat 1476", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"Fatih Sultan Mehmed, Macar Kralı Mátyás Corvin",
  d:"Fâtih Sultan Mehmed zamanında Osmanlı eline geçen ve daha önce Zaslon adıyla anılan mevkide 1471'de ahşap ve topraktan bir hisar yapılmıştı. Belgrad'ı tehdit eden bir noktada bulunduğu ve buradan Macaristan ile Avusturya'nın güney bölgelerine kolayca akın yapılabildiği için kale, adını da bu işlevden alıyordu — Böğürdelen, \"yandan vuran tabya\" demektir. Macar Kralı Mátyás Corvin 1475 sonlarına doğru kaleyi kuşattı ve 1476 şubatında ele geçirdi. Kuşatmayı anlatan Szabács viadala adlı Macar destanı, XV. yüzyıl Macar tarih şiirlerinin metni günümüze ulaşan en uzun örneklerindendir. Macarlar bölgede bir banlık kurdu ve kaleyi taştan yeniden tahkim ederek serhad hisar zincirinin halkası yaptılar. Osmanlılar 1492'de geri almayı denediler ve başaramadılar; kale kırk beş yıl Macar elinde kaldı.",
  kaynak:"bogurdelen" },

{ t:"1521-07-07", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Böğürdelen'in fethi — Kanûnî'nin aldığı ilk kale ve Belgrad kararının verildiği yer",
  gun:"7 Temmuz 1521", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"Kanûnî Sultan Süleyman, Rumeli Beylerbeyi Ahmed Paşa",
  d:"Kanûnî Sultan Süleyman'ın birinci Macaristan seferinde bölgeye gönderilen Rumeli Beylerbeyi Ahmed Paşa'nın kuvvetleri, şiddetli bir kuşatmanın ardından kaleyi 7 Temmuz 1521'de aldı. Böğürdelen, Kanûnî'nin saltanatında fethedilen ilk kaledir. Padişah fetihten sonra bizzat kaleye girdi ve şehrin imarını emretti; Belgrad'ın fethine dair kararlar da burada alındı — yani 29 Ağustos 1521'de düşecek olan Belgrad'ın planı Böğürdelen'de yapıldı. Kale bundan sonra iki yüz yıla yakın Osmanlı elinde kaldı; önce Rumeli, 1580'den itibaren Bosna eyaletine, ardından kısa süre Semendire ve nihayet İzvornik sancağına bağlandı. Haritada bu tarih Sava hattının Osmanlı lehine kapandığı gündür.",
  kaynak:"bogurdelen" },

{ t:"1788-04-24", k:"kayip", etiket:["toprak-kaybi","savas"],
  b:"Böğürdelen'in ikinci Avusturya işgali — Sava cephesinin açılması",
  gun:"24 Nisan 1788", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"I. Abdülhamid, Avusturya İmparatoru II. Joseph",
  d:"Avusturya'nın 9 Şubat 1788'de Rusya'nın yanında savaşa girmesinin ardından Sava hattı yeniden cephe oldu ve Böğürdelen 24 Nisan 1788'de Avusturya hâkimiyetine geçti. Kale daha önce 17 Ağustos 1717'de savaşsız olarak Avusturya'ya terkedilmiş ve Belgrad Antlaşması'na (1739) kadar elde tutulmuştu; o dönemde nüfusu öylesine azalmıştı ki şehirde otuz dört hıristiyan evi kalmış, hiç müslüman kalmamıştı. 1739-1788 arasındaki Osmanlı devrinde nüfus yeniden 1500-2000'e çıkmıştı. İkinci işgal Ziştovi Antlaşması'yla (4 Ağustos 1791) sona erecek ve kale Osmanlılar'a iade edilecekti.",
  kaynak:"bogurdelen" },

{ t:"1806-01-26", k:"kayip", etiket:["toprak-kaybi","isyan"],
  b:"Böğürdelen'in Kara Yorgi'ye teslimi — Birinci Sırp İsyanı'nda ilk kale",
  gun:"26 Ocak 1806", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"III. Selim, Karadjordje (Kara Yorgi) Petroviç",
  d:"1804'te Belgrad'daki dayı ve yamakların baskısına tepki olarak başlayan, sonra milliyetçi bir karakter kazanan ilk Sırp ihtilâli sırasında Böğürdelen Kalesi 26 Ocak 1806'da Kara Yorgi'ye teslim edildi. Sava üzerindeki bu kale, isyancıların ele geçirdiği ilk büyük Osmanlı istihkâmıdır ve Belgrad'ın düşüşünü haber verir. İsyan 1813'te bastırılıp Belgrad geri alınınca kale de Osmanlı idaresine döndü; ancak 1830 fermanının garnizon şartıyla Böğürdelen, Belgrad, Semendire ve Fethülislâm ile birlikte özerk Sırbistan'ın içinde Osmanlı askerinin kaldığı dört kaleden biri olarak tanımlandı ve 1867'de garnizonu çekilene kadar bu statüde kaldı.",
  kaynak:"bogurdelen" },

{ t:"1457-01-01", k:"fetih", etiket:["toprak-kazanc","idare"],
  b:"Podgorica'nın Osmanlı topraklarına katılması — Zeta ovasının denetim altına alınması",
  gun:"1457", yer:"Podgorica (Ribnica), Morača ile Ribnica'nın kavuştuğu yer, Zeta ovası",
  kisiler:"Fatih Sultan Mehmed",
  d:"İşkodra gölünün yirmi kilometre kuzeyinde, Morača ile Ribnica sularının birleştiği ovada kurulu kasaba kaynaklarda ilk defa 1216'da Ribnica, 1326'da Podgorica adıyla anılır. 1457'de Osmanlı topraklarına katıldı ve Zeta ovasının denetimi böylece Balšić-Crnojević hânedanlarının elinden çıktı. Fâtih Sultan Mehmed 1474-1478 yılları arasında iki nehrin kavşağındaki sarp kayalıklara bir kale ile cami inşa ettirdi; 1479'da İşkodra'nın fethinden sonra bölge yeni kurulan İşkodra sancağına bağlandı. 1485 tahririnde kırk hânelik hıristiyan bir kasaba olan Podgorica, 1529-30'da 800 kişiye ve kale içinde bir dizdarın emrindeki otuz iki kişilik garnizona, 1582'de 322 hâneye ulaştı. Evliya Çelebi 1662'de Fâtih Kalesi'nde üç yüz ev, ambarlar, cebehâneler ve yedi yüz muhafız saydı. Bu kayıtlar Zeta'nın ovası ile dağı arasındaki farkı da gösterir: ova sayılan, vergilendirilen ve garnizonlu bir Osmanlı kazasıdır — oysa XVIII. yüzyılda şehir, Karadağ dağlarındaki aşiretlerin baskınlarını önlemek için altı tabya ve üç kapılı surlarla tahkim edilmek zorunda kalacaktır. Podgorica 1876-1878 savaşının sonlarında Karadağ'ın eline geçti ve Berlin Antlaşması'yla orada kaldı.",
  kaynak:"podgorica" },

];
