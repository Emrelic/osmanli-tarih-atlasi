// ============================================================================
// KRONOLOJİ KIRILMA — Değişmez 2'nin dört açık kırılması
//
// Oturum: HAZIR KITA 21 · görev: oturumlar/KRONOLOJI-KIRILMA.md · 16 Ağustos 2026
//
// Dört kırılmanın dökümü TAHTADAN DEĞİL, ÜRETEÇTEN alındı: `py arac/denetle.py
// --ayrinti` onu zaten basıyor. Şartname dökümü VERİ ZAMAN'ın tahtaya
// yazacağını varsayıyordu; tahtanın 16 mesajı tarandı, döküm YOKTU. Aracın
// kendi çıktısı, aktarılmış bir dökümden daha yakın kaynaktır.
//
//   1856-01-01  kazanc  Cağbûb              en yakın madde 48 gün uzakta
//   1859-04-25  kazanc  Portsaid            en yakın madde 37 gün uzakta
//   1863-04-27  kazanc  İsmâiliye           en yakın madde 35 gün uzakta
//   1869-01-01  kazanc  Nâsıriye, Ramâdi    en yakın madde 90 gün uzakta
//
// Dördü de aynı cinsten: bir yerleşimin `kur:` günüyle başlayan bir `d:`/`v:`
// dönemi. Yani "el değiştirdi" değil, "yoktu, DOĞDU ve boyandı" kırılması.
// Süveyş berzahının iki şehri ile Irak'ın iki iskân kasabası 19. yüzyılda
// sıfırdan kurulmuştur; haritada o gün yeni bir petek açılır.
//
// ---------------------------------------------------------------------------
// 🔴 ÜÇÜNCÜ MADDENİN GÜNÜ NİÇİN 04-03, KIRILMA 04-27 İKEN
//
// İsmâiliye'nin verideki `kur:` günü 1863-04-27. TDV `ismailiye` ve
// `port-said` maddeleri şehrin YILINI (1863) ve kuruluş şartlarını veriyor,
// GÜNÜNÜ vermiyor. Akademik kaynaklar da 1862/1863 diyor, gün vermiyor.
// ⇒ Kaynaksız bir günü kronolojiye YAZMADIM. Bunun yerine aynı ±30 penceresi
//    içinde kalan, TDV'nin TAM GÜNÜNÜ verdiği bir Osmanlı olayına yaslandı:
//    Sultan Abdülaziz'in 3 Nisan 1863 Mısır ziyareti (`abdulaziz`).
//    Fark 24 gün — Değişmez 2 sağlanır ve uydurma tarih girmez.
// ⚠️ Bu, `yerlesimler_afrika.js`teki `kur:"1863-04-27"` gününün dayanaksız
//    olduğunu söylemez; ben DOĞRULAYAMADIM. O dosya benim değil, kaydediyorum.
//
// ---------------------------------------------------------------------------
// ⚠️ İKİ KAYNAK ÇELİŞKİSİ — gizlemiyorum, ikisi de TDV içi
//
// ① Kanal kazısının başlangıcı
//      `suveys`  : "kanal inşaatı 25 Nisan 1859'da başladı"   ← GÜN VERİYOR
//      `misir`   : "kanalın kazılmasına 1856 yılında başlandı" ← yıl veriyor
//    Müstakil madde (`suveys`) esas alındı; `misir`ın 1856'sı imtiyaz yılıdır
//    (5 Ocak 1856 Bâbıâli onayı, yine `suveys`).
//
// ② Cağbûb zâviyesinin yapımı
//      `cagbub`                : "1855'te bölgeye yerleşerek ... zâviye yaptıran"
//      `senusi-muhammed-b-ali` : "1854'te Trablusgarp'a döndüğünde ... ardından
//                                 Cağbûb'da büyük bir zâviye inşa ettirerek"
//    Verideki kırılma 1856 ve maddesi 1856'ya yazıldı — çünkü haritada değişen
//    şey zâviyenin taşı değil, OSMANLI TASARRUFUDUR: `cagbub` maddesinin
//    "1856'da Sultan Abdülmecid'in fermanı" cümlesi tam o tasarrufu anlatıyor.
//
// ---------------------------------------------------------------------------
// SLUG DENETİMİ — altısı da HTTP kodu VE GÖVDESİ okunarak doğrulandı
//
//   200 CANLI  cagbub · senusi-muhammed-b-ali · suveys · port-said ·
//              ismailiye · abdulaziz · midhat-pasa · bagdat · misir
//   302 ÖLÜ    portsaid · suveys-kanali · nasiriye · ramadi · muntefik ·
//              dulaym · sadun · ismail-pasa
//
// 🟢 `portsaid` ÖLÜ ama `port-said` CANLI — tire farkı. `§4③`ün "kaynak vardı,
//    adres yanlıştı" deseninin bir vakası daha.
// 🟢 `ismailiye` `②` TUZAĞINA DÜŞMEDİ: gövdesi okundu, madde İsmâiliyye
//    MEZHEBİ değil Süveyş Kanalı üzerindeki ŞEHİR. Başlık testi bunu ayırt
//    etmezdi ("İSMÂİLİYE" iki hâlde de doğru görünürdü).
//
// ---------------------------------------------------------------------------
// 🔴 TANECİKLİK BOŞLUĞU — dördüncü maddede, `§4` gereği AÇIKÇA
//
// TDV Irak'ı kapsıyor (`bagdat` · `basra` · `midhat-pasa` üçü de canlı ve
// zengin) ama Ramâdi ile Nâsıriye'yi ADIYLA anmıyor; `ramadi` · `nasiriye` ·
// `muntefik` · `dulaym` · `sadun` sluglarının hepsi ölü. Bu COĞRAFÎ değil
// TANECİKLİK boşluğudur. `kaynak:` alanına iskân siyasetini gerçekten anlatan
// en yakın canlı madde (`midhat-pasa`) kondu, kasaba adları oradan DEĞİL
// veriden geliyor ve bu satır onun kaydıdır.
// ============================================================================
window.OLAYLAR_7A4170 = [

{ t:"1856-01-01", k:"idari", etiket:["toprak-kazanc","siyaset"], b:"Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine bağlanması — Abdülmecid'in muafiyet fermanı", gun:"1856", yer:"Cağbûb, Bingazi, Sirenayka", yer_id:"Cağbûb", kisiler:"Sultan Abdülmecid, Muhammed b. Ali es-Senûsî", d:"Uzun yıllar Mekke'de kalan Muhammed b. Ali es-Senûsî Trablusgarp'a döndükten sonra Mısır sınırındaki Cağbûb vahasına yerleşerek hâkim kayalık üzerinde büyük bir zâviye yaptırdı; birkaç barakadan ibaret olan yer kısa sürede şehre dönüştü. 1856'da Sultan Abdülmecid'in fermanıyla tarikat mensuplarına ait emlâk vergiden muaf tutuldu ve müridlere zekât toplama yetkisi verildi. Bu ferman, Batı Afrika ve Sudan'ı Kahire'ye bağlayan kervan yolu üzerindeki vahayı Osmanlı malî ve idarî düzeninin bir parçası hâline getirdi ve Cağbûb'u ticaret merkezi olarak güçlendirdi. Bölge halkının halifeye bağlılığı, 1884 ve 1893'te burayı gezen miralay Sâdık el-Müeyyed'in seyahatnâmesiyle de doğrulanır.", kaynak:"cagbub", duygu:["🕌"] },

{ t:"1859-04-25", k:"kurulus", etiket:["toprak-kazanc","siyaset"], b:"Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu", gun:"25 Nisan 1859", yer:"Portsaid (Bûr Saîd), Menzile gölü, Süveyş berzahı", yer_id:"Portsaid", kisiler:"Ferdinand de Lesseps, Said Paşa, Sultan Abdülmecid", d:"Bâbıâli'nin 5 Ocak 1856'da onay verdiği Lesseps projesinin kazı çalışmaları 25 Nisan 1859'da başladı; kanal on yıl sonra, 16 Kasım 1869'da tamamlanacaktı. Kazının Akdeniz ucunda, Menzile gölü ile deniz arasındaki kıyı kordonunda işçiler için kurulan beş evlik baraka köyü Portsaid'in çekirdeğini oluşturdu. Şehre, kanal şirketinin yetkilileri tarafından dönemin Mısır valisi Said Paşa'ya ithafen 1860'ta 'Said limanı' anlamında bu ad verildi. Böylece Osmanlı haritasında, daha önce hiçbir yerleşimin bulunmadığı bir kıyı şeridinde yeni bir liman doğmuş oldu.", kaynak:"suveys", duygu:["🏛"] },

{ t:"1863-04-03", k:"siyaset", etiket:["siyaset","toprak-kazanc"], b:"Sultan Abdülaziz'in Mısır ziyareti ve Süveyş berzahında İsmâiliye'nin kuruluşu", gun:"3 Nisan 1863", yer:"İsmâiliye, Timsah gölü, Kahire, İskenderiye", yer_id:"İsmâiliye", kisiler:"Sultan Abdülaziz, Hidiv İsmâil Paşa, Yûsuf Kâmil Paşa", d:"Sultan Abdülaziz, Sadrazam Yûsuf Kâmil Paşa'nın teşvikiyle 3 Nisan 1863'te Mısır'a gitti ve büyük bir tezahüratla karşılandı; amaç, Kavalalı Mehmed Ali Paşa isyanından beri fiilen ayrı bir devlet hâlini almaya başlayan vilâyetin merkeze bağlılığını kuvvetlendirmekti. Aynı yıl berzahta, Timsah gölü kıyısındaki Tilâlülcisr tepelerinde kanal şirketinin idare merkezi kuruldu: önce mühendisler için Karyetüttimsah, ardından işçiler için Karyetülarab köyleri oturtuldu. Hidiv İsmâil Paşa'nın tatlı su kanalıyla yakından ilgilenip bu tepede kendisine bir köşk yaptırması üzerine yerleşim onun adıyla İsmâiliye diye anıldı. TDV şehrin kuruluşunu 1863'e koyar, gününü vermez; bu madde bu yüzden gününü kaynağın verdiği ziyaret tarihine bağlamıştır.", kaynak:"abdulaziz", duygu:["🏛"] },

{ t:"1869-01-01", k:"idari", etiket:["toprak-kazanc","siyaset"], b:"Midhat Paşa'nın Bağdat valiliği ve aşiret iskânı — Ramâdi ile Nâsıriye'nin kuruluşu", gun:"1869", yer:"Ramâdi, Nâsıriye, Bağdat, Basra, Fırat", yer_id:"Ramâdi", kisiler:"Midhat Paşa, Nâsır Paşa es-Sa'dûn", d:"Şûrâ-yı Devlet başkanlığından alınıp İstanbul'dan uzaklaştırılan Midhat Paşa, Musul ve Basra'yı da kapsayan Bağdat vilâyetini 1869-1872 arasında Altıncı Ordu kumandanlığı da uhdesinde olmak üzere geniş yetkilerle yönetti. Arazi Kanunnâmesi'ni ve yeni vilâyet kanununu burada uygulayarak toprakları tapuyla dağıttı, konar göçer aşiretleri yerleşik düzene ve devlet otoritesine bağladı. Bu iskân siyasetinin ürünü olarak 1869'da Fırat kıyısında Dülaym aşireti için Ramâdi, güneyde Müntefik mutasarrıfı Nâsır Paşa es-Sa'dûn eliyle de Nâsıriye kuruldu; her ikisi de o güne kadar yerleşim bulunmayan noktalarda doğdu ve haritaya ilk defa bu tarihte girdi. TDV'nin Midhat Paşa ve Bağdat maddeleri bu siyaseti anlatır, iki kasabayı adıyla anmaz.", kaynak:"midhat-pasa", duygu:["🏛"] }

];
