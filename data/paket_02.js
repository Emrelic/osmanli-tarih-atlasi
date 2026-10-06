/* PAKET 02 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   7 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/olaylar_7a4170.js ==== */
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

{ t:"1856-01-01", k:"idari", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi","konu-idari"], b:"Senûsiyye'nin çöl merkezi Cağbûb'un Osmanlı düzenine bağlanması — Abdülmecid'in muafiyet fermanı", gun:"1856", yer:"Cağbûb, Bingazi, Sirenayka", yer_id:"Cağbûb", kisiler:"Sultan Abdülmecid, Muhammed b. Ali es-Senûsî", d:"Uzun yıllar Mekke'de kalan Muhammed b. Ali es-Senûsî Trablusgarp'a döndükten sonra Mısır sınırındaki Cağbûb vahasına yerleşerek hâkim kayalık üzerinde büyük bir zâviye yaptırdı; birkaç barakadan ibaret olan yer kısa sürede şehre dönüştü. 1856'da Sultan Abdülmecid'in fermanıyla tarikat mensuplarına ait emlâk vergiden muaf tutuldu ve müridlere zekât toplama yetkisi verildi. Bu ferman, Batı Afrika ve Sudan'ı Kahire'ye bağlayan kervan yolu üzerindeki vahayı Osmanlı malî ve idarî düzeninin bir parçası hâline getirdi ve Cağbûb'u ticaret merkezi olarak güçlendirdi. Bölge halkının halifeye bağlılığı, 1884 ve 1893'te burayı gezen miralay Sâdık el-Müeyyed'in seyahatnâmesiyle de doğrulanır.", kaynak:"cagbub", duygu:["🕌"] },

{ t:"1859-04-25", k:"kurulus", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi","konu-ulastirma"], b:"Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu", gun:"25 Nisan 1859", yer:"Portsaid (Bûr Saîd), Menzile gölü, Süveyş berzahı", yer_id:"Portsaid", kisiler:"Ferdinand de Lesseps, Said Paşa, Sultan Abdülmecid", d:"Bâbıâli'nin 5 Ocak 1856'da onay verdiği Lesseps projesinin kazı çalışmaları 25 Nisan 1859'da başladı; kanal on yıl sonra, 16 Kasım 1869'da tamamlanacaktı. Kazının Akdeniz ucunda, Menzile gölü ile deniz arasındaki kıyı kordonunda işçiler için kurulan beş evlik baraka köyü Portsaid'in çekirdeğini oluşturdu. Şehre, kanal şirketinin yetkilileri tarafından dönemin Mısır valisi Said Paşa'ya ithafen 1860'ta 'Said limanı' anlamında bu ad verildi. Böylece Osmanlı haritasında, daha önce hiçbir yerleşimin bulunmadığı bir kıyı şeridinde yeni bir liman doğmuş oldu.", kaynak:"suveys", duygu:["🏛"] },

{ t:"1863-04-03", k:"siyaset", etiket:["siyaset","toprak-kazanc","konu-askeri","konu-siyasi"], b:"Sultan Abdülaziz'in Mısır ziyareti ve Süveyş berzahında İsmâiliye'nin kuruluşu", gun:"3 Nisan 1863", yer:"İsmâiliye, Timsah gölü, Kahire, İskenderiye", yer_id:"İsmâiliye", kisiler:"Sultan Abdülaziz, Hidiv İsmâil Paşa, Yûsuf Kâmil Paşa", d:"Sultan Abdülaziz, Sadrazam Yûsuf Kâmil Paşa'nın teşvikiyle 3 Nisan 1863'te Mısır'a gitti ve büyük bir tezahüratla karşılandı; amaç, Kavalalı Mehmed Ali Paşa isyanından beri fiilen ayrı bir devlet hâlini almaya başlayan vilâyetin merkeze bağlılığını kuvvetlendirmekti. Aynı yıl berzahta, Timsah gölü kıyısındaki Tilâlülcisr tepelerinde kanal şirketinin idare merkezi kuruldu: önce mühendisler için Karyetüttimsah, ardından işçiler için Karyetülarab köyleri oturtuldu. Hidiv İsmâil Paşa'nın tatlı su kanalıyla yakından ilgilenip bu tepede kendisine bir köşk yaptırması üzerine yerleşim onun adıyla İsmâiliye diye anıldı. Şehrin kuruluşu 1863 yılına tarihlenir; kesin günü bilinmez.", ic_not_d:"eski: TDV şehrin kuruluşunu 1863'e koyar, gününü vermez; bu madde bu yüzden gününü kaynağın verdiği ziyaret tarihine bağlamıştır.", kaynak:"abdulaziz", duygu:["🏛"] },

{ t:"1869-01-01", k:"idari", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi","konu-idari","konu-demografi"], b:"Midhat Paşa'nın Bağdat valiliği ve aşiret iskânı — Ramâdi ile Nâsıriye'nin kuruluşu", gun:"1869", yer:"Ramâdi, Nâsıriye, Bağdat, Basra, Fırat", yer_id:"Ramâdi", kisiler:"Midhat Paşa, Nâsır Paşa es-Sa'dûn", d:"Şûrâ-yı Devlet başkanlığından alınıp İstanbul'dan uzaklaştırılan Midhat Paşa, Musul ve Basra'yı da kapsayan Bağdat vilâyetini 1869-1872 arasında Altıncı Ordu kumandanlığı da uhdesinde olmak üzere geniş yetkilerle yönetti. Arazi Kanunnâmesi'ni ve yeni vilâyet kanununu burada uygulayarak toprakları tapuyla dağıttı, konar göçer aşiretleri yerleşik düzene ve devlet otoritesine bağladı. Bu iskân siyasetinin ürünü olarak 1869'da Fırat kıyısında Dülaym aşireti için Ramâdi, güneyde Müntefik mutasarrıfı Nâsır Paşa es-Sa'dûn eliyle de Nâsıriye kuruldu; her ikisi de o güne kadar yerleşim bulunmayan noktalarda doğdu ve haritaya ilk defa bu tarihte girdi.", ic_not_d:"TDV'nin Midhat Paşa ve Bağdat maddeleri bu siyaseti anlatır, iki kasabayı adıyla anmaz.", kaynak:"midhat-pasa", duygu:["🏛"] }

];

;
/* ==== data/olaylar_ek8.js ==== */
// data/olaylar_ek8.js — KRONOLOJI EK 8
// 🔴 27 Agustos 2026 ONARIM: bu dosya 15 Agustos'tan beri VAR ve
//    index.html onu YUKLUYOR. Koordinatorun sartnamesi onu yanlislikla
//    'yeni dosya' diye tarif etti; isci dosyayi YENIDEN YAZDI ve 8 madde
//    dustu. Sonuc: Degismez 2 · 521 kirilma 0 acik -> 3 ACIK.
//    Onarim: HEAD surumu ile yeni maddeler BIRLESTIRILDI, hicbiri silinmedi.
// ⚠️ BU DOSYAYA YAZAN: EKLE, YENIDEN YAZMA. Var olan maddeler baska
//    kirilmalarin Degismez 2 karsiligidir.
//
// 🔴🔴 12 EYLÜL 2026 — AYNI HATA İKİNCİ KEZ YAŞANDI VE BU SEFER DÜZELTİLDİ.
//    KITA 3 — DALGA 2 KRONOLOJİSİ oturumu, şartnamesinde bu dosya YİNE
//    "YENİ dosya" diye tarif edildiği için Write ile TAMAMEN ÜZERİNE
//    YAZDI (15 eski madde bir an için diskten SİLİNDİ — commit
//    EDİLMEDİ, git HEAD'de sağlam kaldığı için kurtarıldı). Oturumun
//    kendisi git status'ta "M" (yeni değil, DEĞİŞTİRİLMİŞ) görünce
//    şüphelendi, `git show HEAD:data/olaylar_ek8.js` ile eski hâli
//    geri getirdi ve BİRLEŞTİRDİ — hiçbir madde kalıcı olarak
//    kaybolmadı. Bu artık İKİNCİ VAKA: "YENİ dosya" iddiası bu isim
//    için güvenilmez hâle geldi — bir SONRAKİ oturum bu dosyaya
//    görev alırsa ÖNCE `git log -- data/olaylar_ek8.js` ile geçmişine
//    baksın, şartnameye körü körüne güvenmesin (D036/D178 sınıfı).
//    Aşağıdaki 15 madde 27 Ağustos'tan kalma (Osmanlı/dünya karışık,
//    "OLAYLAR EK 8" adının ilk kullanımı); ondan sonraki 19 madde
//    12 Eylül DALGA 2 KRONOLOJİSİ partisi (Okyanusya/Sibirya-Bozkır/
//    Orta Asya, kaynak zinciri: HAZIRLIK-DALGA2 → PAKET-DALGA2 →
//    bu dosya, D036 ile bağımsız doğrulandı).
//
// KAPSAM DIŞI BIRAKILAN 3 ADAY (bu dosyaya YAZILMADI, "bulunamadı"):
//   kazan (1521-01-01), mogulistan (1462-01-01),
//   buhara-halk-cumhuriyeti (1922-07-07) — üçü de PAKET-DALGA2'nin
//   "③ ÜÇ BULUNAMAYAN" bölümünde TEK dayanağın Wikipedia olduğu,
//   akademik kaynağın (varsa) erişilemediği açıkça yazılı; §4
//   "Vikipedi TEK DAYANAK DEĞİLDİR" kuralı KATI uygulandı.
//   tui-tonga-imparatorlugu: HAZIRLIK'ın kendi kararıyla zaten BOŞ
//   (sözlü-gelenek dönemi, gün/yıl çözünürlüğü akademik kaynakta yok).
window.OLAYLAR_EK8 = [
 {
  "t": "1460-01-01",
  "b": "İzvornik (Zvornik) kalesinin fethi",
  "tur": "fetih",
  "onem": 2,
  "dunya": 1,
  "kapsam": "ic",
  "etiket": [
   "toprak-kazanc",
   "savas",
   "konu-askeri"
  ],
  "yer_id": "İzvornik (Zvornik)",
  "d": "Drina kıyısındaki İzvornik kalesi 1460'ta Osmanlı tarafından fethedildi. TDV İslâm Ansiklopedisi'ne göre idarî ve askerî açıdan elverişli konumu sebebiyle önce bir kaza merkezi yapıldı, 1480'de aynı adı taşıyan sancağın merkezine dönüştürüldü ve 1491'de taş surlarla tahkim edilerek altı cami, sekiz tekke ve hamamlarıyla önemli bir idarî-ticarî merkeze dönüştü.", "ic_not_d": "TARİH HAKKINDA: TDV yalnız yıl veriyor, gün vermiyor.",
  "kaynak": "izvornik"
 },
 {
  "t": "1509-02-03",
  "b": "Diu Deniz Savaşı — Portekiz'in Hint Okyanusu'nda üstünlüğü",
  "tur": "savas",
  "onem": 4,
  "dunya": 2,
  "kapsam": "dis",
  "etiket": [
   "savas",
   "denizcilik",
   "konu-askeri"
  ],
  "yer_id": "Diu",
  "d": "Gücerat Sultanlığı adına bölgeyi yöneten Melik Ayaz'ın Memlük destekli donanması, bu kıyılarda ikmal üssü kurmaya çalışan Portekiz genel valisi Francisco de Almeida'nın filosu karşısında Diu açıklarında ağır bir yenilgiye uğradı. Bu yenilgi Portekiz'e Hint Okyanusu'nda kalıcı deniz üstünlüğü kazandırdı ve Memlük-Gücerat deniz gücünü kırdı; Osmanlı'nın 1517 sonrası devraldığı Kızıldeniz-Hint Okyanusu mücadelesinin (Cidde savunması, 1538 Diu kuşatması) arka planını oluşturan güç dengesizliğinin başlangıcı sayılır.",
  "kaynak": "diu"
 },
 {
  "t": "1515-01-01",
  "b": "Nusaybin ve Cizre-Mardin çevresinin İdrîs-i Bitlisî eliyle Osmanlı'ya katılması", "gun": "921 (1515) yılı sonları",
  "tur": "fetih",
  "onem": 2,
  "dunya": 2,
  "kapsam": "ic",
  "etiket": [
   "askeri",
   "konu-askeri"
  ],
  "ic_not_etiket": "toprak-kazanc KALDIRILDI (GEMINI-DOGRULA 0919): aynı katılışı olaylar_ok107.js '1515-09-19 Nusaybin, Derik ve Silopi'nin Osmanlı'ya katılması' GÜNLÜ anlatıyor ve Nusaybin/Cizre kırılmasını o kapatıyor; bu madde onun yıl düzeyli mükerreri.",
  "yer_id": "Nusaybin",
  "d": "Çaldıran seferi (1514) sonrasında Doğu Anadolu'da yürütülen ilhak sürecinde İdrîs-i Bitlisî'nin bölgedeki Sünnî Kürt beyleriyle kurduğu ilişkiler sayesinde Nusaybin, 921 (1515) yılı sonlarında savaşsız biçimde Osmanlı topraklarına katıldı.", "ic_not_d": "TDV kesin ay/gün vermiyor, yalnız 'yılın sonlarında' diyor.  Komşu kasabalar Derik (Malikiye) ve Silopi aynı bölgesel teslim dalgasının parçası olabilir ama TDV'de müstakil maddeleri yok — bulunamadı, tarihleri buraya dayandırılmadı.",
  "kaynak": "nusaybin"
 },
 {
  "t": "1526-01-01",
  "b": "Kalender Şah isyanı",
  "tur": "isyan",
  "onem": 3,
  "dunya": 1,
  "kapsam": "ic",
  "etiket": [
   "isyan",
   "savas",
   "konu-askeri",
   "konu-isyan"
  ],
  "yer_id": "Elbistan",
  "d": "Anadolu'daki malî sıkıntılar, yeni idarî düzenlemelerden duyulan hoşnutsuzluk ve Safevî propagandasının etkisiyle Çiçekli, Akça Koyunlu, Masadlı ve Bozoklu gibi büyük Türkmen aşiretleriyle daha önceki Baba Zünnûn isyanından kalan gruplar Kalender Şah'ın çevresinde toplanıp yaklaşık otuz bin kişilik bir güce ulaştı. İsyancılar önce Rum Beylerbeyi'ni yenilgiye uğrattı; Sadrazam Makbul İbrâhim Paşa'nın asker toplayıp haklarını vaad etmesiyle Kalender'in desteği eridi ve isyan Elbistan civarında bastırıldı, Kalender Şah ile Veli Dündar Haziran 1527'de öldürüldü.",
  "kaynak": "kalender-sah"
 },
 {
  "t": "1554-08-22",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "savas",
   "konu-askeri"
  ],
  "b": "Şehrizor'un fethi — Zalm Kalesi'nin alınışı",
  "gun": "22 Ağustos 1554",
  "yer": "Şehrizor (Zalm Kalesi), Kürdistan",
  "yer_id": "Şehrizor",
  "kisiler": "Baltacı Mehmed Paşa, Kanûnî Sultan Süleyman",
  "d": "Kanûnî'nin Nahçıvan seferi sırasında Bağdat Beylerbeyi Osman Paşa, Şehrizor yöresini ele geçirmekle görevlendirilmişti; onun ölümü üzerine Bağdat beylerbeyi olan Baltacı Mehmed Paşa, bölgenin merkezî kalesi Zalm'ı kuşatarak 22 Ağustos 1554'te (23 Ramazan 961) aldı. Böylece Zağros'un batı yamacındaki Şehrizor havzası Osmanlı idaresine girdi ve Bağdat ile Kürdistan arasındaki bağlantı güvenceye alındı; bölge önce sancak hâline getirilerek Murad Bey'e verildi. 1563'te Beylerbeyi Muzaffer Paşa yeni eyalet merkezi olarak Gülanber Kalesi'ni inşa etti; kale 1623'te Şah Abbas'ın emriyle yıktırılacak, 1638'de Hüsrev Paşa döneminde yeniden kurulacaktı.",
  "kaynak": "sehrizor — TDV birebir: 'Kanûnî'nin Nahcıvan seferi esnasında Bağdat Beylerbeyi Osman Paşa, Şehrizor yöresini ele geçirmekle görevlendirildi.' · '…Osman Paşa'nın vefatı üzerine Bağdat beylerbeyi olan Baltacı Mehmed Paşa tarafından zaptedildi (23 Ramazan 961 / 22 Ağustos 1554).' · 'Bölge sancak haline getirilerek Murad Bey'e verildi.' · (H-0017, 13 Eylül 2026: aynı fethin 1554-01-01 tarihli ikinci maddesi olaylar_ek5.js'ten kaldırıldı; kaynaklı bağlamı buraya taşındı)",
  "duygu": [
   "🎉"
  ]
 },
 {
  "t": "1577-01-01",
  "k": "vassal",
  "etiket": [
   "toprak-kazanc",
   "diplomasi",
   "konu-askeri",
   "konu-siyasi",
   "konu-idari",
   "konu-diplomasi"
  ],
  "b": "Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sahra kervan kavşağı",
  "gun": "1577",
  "ic_not_gun": "atlas verisindeki kırılma günü; TDV asıl olayı 1551'e bağlıyor [0046/H-0001 · PAKET-A3: okur metninden taşındı]",
  "yer": "Murzuk (Fizan), Gât, Sokna, Câlû, Sebha, Ubârî, Vaddân (Cufre), Zilla (Zella), Merâde, Tırgan (Traghan), Zevîle (Zawila), el-Katrûn",
  "kisiler": "Evlâd-ı Muhammed hanedanı, Trablusgarp beylerbeyi",
  "d": "Trablusgarp beylerbeyiliğinin baskısı sonucunda Sahra'nın kervan kavşağı Fizan, merkezi Murzuk olmak üzere Osmanlı tâbiiyetini kabul etti. TDV İslâm Ansiklopedisi'nin Fizan maddesine göre bölgeyi yöneten Evlâd-ı Muhammed hanedanı, düzenli vergi ödemek şartıyla iç işlerinde serbest bırakıldı; Fizan, 1551'de alınan Trablus eyaletine bağlı bir sancak olarak teşkilâtlandırıldı. Böylece Trablus-Murzuk-Bornu hattındaki köle, altın ve deve ticareti Osmanlı denetimine girdi. Bu dolaylı idare 1711'de Karamanlılar'ın, 1842'de ise doğrudan kaza teşkilâtının eline geçecekti.",
  "ic_not_d": "⚠️ TDV BU SÜRECİ 1551'E BAĞLAR, 1577'YE DEĞİL. Atlas verisinde bu 12 yerleşimin `hafsi` (Tunus Hafsî Devleti) dönemi 1577-01-01'e kadar sürüyor ve bu tarihte Osmanlı tâbiiyetine geçiyor — ama Hafsî Devleti'nin kendisi 1574-09-13'te sona erdi (`oturumlar/NOKTA-HALKA2-3.md`'nin önceki tespiti: 2,3 yıllık bir 'hayalet', çözülmemiş bilinen borç). Bu madde o iç tarihe DOĞRU İÇERİĞİ bağlıyor; tarihin kendisinin 1551'e çekilip çekilmeyeceği ayrı bir karardır, VERİ SAHİPLİK'e devredilmiştir. [0046/H-0001 · PAKET-A3 13 Eylül 2026: okur metninden taşındı, silinmedi]",
  "kaynak": "fizan",
  "duygu": [
   "🎌"
  ],
  "yer_id": "Murzuk (Fizan)"
 },
 {
  "t": "1586-01-01",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "konu-askeri"
  ],
  "b": "Nahçıvan ve Ordubad'ın Osmanlı idaresine girmesi",
  "gun": "1586 (Bilge 2017, Vakanüvis 2 s.51-52; TDV nahcivan yıl vermiyor) — kaynak yalnız yılı veriyor, gün bilinmiyor",
  "yer": "Nahçıvan, Ordubad, Aras vadisi",
  "yer_id": "Nahçıvan",
  "kisiler": "Ferhad Paşa, Özdemiroğlu Osman Paşa",
  "d": "1583'te Revan'ın alınıp beylerbeyilik merkezi yapılmasının ardından Aras vadisi boyunca güneydoğuya inen kuvvetler Nahçıvan ile Ordubad'ı Osmanlı idaresine bağladı; iki şehir yeni kurulan Revan eyaletinin sancakları oldu. TDV İslâm Ansiklopedisi'nin Nahcıvan maddesine göre şehirde ilk defa kalıcı Osmanlı idaresi bu savaş sırasında kuruldu — 1553'teki Nahcıvan seferinde şehir alınmış ama yalnızca yağmalanıp terk edilmişti. Böylece Revan ile Tebriz arasındaki ordu yolu açıldı ve aynı yılın eylülünde Tebriz'e girilebildi. Şah Abbas 1603'te Nahçıvan'ı geri alacaktı.",
  "kaynak": "nahcivan · Bilge 2017 (Vakanüvis 2, s.51-52)",
  "duygu": [
   "🎉",
   "😔"
  ]
 },
 {
  "t": "1603-03-01", "kesinlik": "ay",
  "b": "Deli Hasan Paşa isyanı ve Bosna beylerbeyiliğiyle yatıştırılması", "gun": "Şevval 1011 (Mart 1603)",
  "ic_not_t": "önceki kayıt 1603-01-01 (yıl kodu; 1603'ün üç maddesi aynı güne yığılıyordu — 0081/H-0050). TDV mehmed-iii 'Şevval 1011 / Mart 1603' AY verir, gün vermez ⇒ 1603-03-01 + kesinlik:ay. ⚠️ Şevval 1011 ≈ 14 Mart–12 Nisan 1603; ay kodu hicrî ayın ~13 gün önünde (BALKAN-MACAR-0081 §H-0050) · UYGULA-OLAYLAR-0930",
  "tur": "isyan",
  "onem": 3,
  "dunya": 1,
  "kapsam": "ic",
  "etiket": [
   "isyan",
   "siyaset",
   "konu-siyasi",
   "konu-idari",
   "konu-isyan"
  ],
  "yer_id": "Kütahya",
  "d": "Celâlî lideri Karayazıcı Abdülhalim'in 1602'de ölümünün ardından hareketin başına geçen kardeşi Deli Hasan, süregelen Avusturya savaşlarının Celâlî gruplarına tanıdığı hareket serbestîsinden yararlanarak Kütahya'yı istilâ edip Afyonkarahisar üzerine yürüdü. Devletin aynı anda Avusturya ve İran cepheleriyle uğraştığı bu dönemde mesele 'tatlılıkla' çözüldü: Deli Hasan'a paşalık rütbesi ve Bosna beylerbeyiliği verilerek isyan hareketi 1603'te resmen sona erdirildi.", "ic_not_d": "TDV yalnız yıl veriyor, ay/gün belirtmiyor. · EK2 §4: yukarıdaki 'TDV yalnız yıl veriyor' notu YANLIŞTI — TDV mehmed-iii 'Şevval 1011 / Mart 1603' veriyor (ay düzeyi). t:1603-01-01 kaba güvenli düzeyde kaldı (§4: ay metne yazılır)",
  "kaynak": "celali-isyanlari"
 },
 {
  "t": "1637-06-18",
  "k": "kayip",
  "etiket": [
   "toprak-kayip",
   "savas",
   "konu-askeri"
  ],
  "b": "Azak Kalesi'nin Don Kazaklarına kaybı",
  "gun": "18 Haziran 1637",
  "yer": "Azak (Azov), Don ağzı",
  "yer_id": "Azak",
  "kisiler": "Don Kazakları, IV. Murad",
  "d": "Don Kazakları 21 Nisan 1637'de kuşattıkları Azak Kalesi'ni iki ay sonra ele geçirdiler; Karadeniz'in kuzeydoğu kapısı ve Don ticaretinin kilidi olan kale ilk defa Osmanlı elinden çıktı. TDV İslâm Ansiklopedisi'nin Azak maddesine göre Kazaklar kaleyi 1637'de aldı, 1641'de Deli Hüseyin Paşa kumandasındaki üç ay süren büyük kuşatmaya dayandı ve ancak 1642'de Kırım Hanı Mehmed Giray'ın gelişiyle kaleyi boşalttı. Devlet o sırada Bağdat cephesiyle meşguldü; kalenin beş yıl elde tutulamaması Karadeniz'in 'Osmanlı gölü' olma vasfının ilk çatlağıdır.",
  "kaynak": "azak",
  "duygu": [
   "😔"
  ]
 },
 {
  "t": "1657-11-15",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "savas",
   "konu-askeri"
  ],
  "b": "Limni ve Semadirek'in geri alınışı",
  "gun": "Kasım 1657",
  "yer": "Limni, Semadirek (kuzey Ege)",
  "yer_id": "Limni",
  "kisiler": "Köprülü Mehmed Paşa, IV. Mehmed",
  "d": "Bozcaada'nın 31 Ağustos 1657'de kurtarılmasından sonra Köprülü Mehmed Paşa donanmayı kuzeye yönlendirdi ve Venedik'in on altı aydır elinde tuttuğu Limni ile Semadirek'i geri aldı. TDV İslâm Ansiklopedisi'nin Limni maddesine göre ada Temmuz 1656'da Venedik'in eline geçmiş, Kasım 1657'de geri alınmıştı. Böylece Çanakkale Boğazı'nın ağzındaki Venedik ablukası tamamen kırıldı ve İstanbul'un tahıl yolu yeniden güvene alındı; sadrazamın olağanüstü yetkilerle geldiği ilk yılın en somut kazancı budur.",
  "kaynak": "limni",
  "duygu": [
   "🎉"
  ]
 },
 {
  "t": "1688-09-11",
  "b": "Knin'in Venedik'e kaybı — 166 yıllık Dalmaçya sınır kalesi düştü",
  "tur": "kayip",
  "onem": 3,
  "dunya": 2,
  "kapsam": "ic",
  "etiket": [
   "askeri",
   "toprak-kayip",
   "serhat",
   "venedik",
   "konu-askeri"
  ],
  "yer_id": "Knin",
  "d": "1683 Viyana bozgunundan sonra çok cepheli açılan savaşta Venedik kuvvetleri Dalmaçya içlerine ilerledi. Dalmaçya generali Girolamo Cornaro'nun kuşattığı Knin, on iki günlük bir muhasaradan sonra beylerbeyi Mehmed Paşa tarafından teslim edildi. Knin, 1522'de Gazi Hüsrev Bey'in fethettiği ve 166 yıl Osmanlı elinde kalan Dalmaçya sınır hattının kilit kalesiydi; kaybı bölgeyi büyük ölçüde Venedik'e açtı.", "ic_not_d": "TDV dönemin genel kayıp listesinde 'Bosna'daki Knin ve civarındaki kaleler ise Venedikliler'in eline geçmişti' diye anar ama gün vermez.",
  "kaynak": "suleyman-ii (TDV, genel bağlam — gün vermiyor) + Ive Mažuran, Hrvati i Osmansko Carstvo, Zagreb 1998, s.262-263 (kesin tarih; TDV bu taneciği kapsamıyor, CLAUDE.md §4)"
 },
 {
  "t": "1779-04-01",
  "k": "fetih",
  "etiket": [
   "toprak-kazanc",
   "konu-askeri"
  ],
  "b": "Basra'nın İran işgalinden geri alınışı",
  "gun": "1779",
  "yer": "Basra, Şattülarab",
  "kisiler": "Kerim Han Zend, Süleyman Ağa (Büyük Süleyman Paşa)",
  "d": "Kerim Han Zend'in 1776'da ele geçirdiği Basra, hanın 1779 başında ölümü üzerine İran'da başlayan taht kavgası yüzünden boşaltıldı. Üç yıllık işgal sırasında şehri savunan ve esir düşen Süleyman Ağa geri dönerek Basra mütesellimi, ardından Bağdat valisi oldu. Körfez ticareti Osmanlı denetimine döndü; işgal boyunca İngiliz Doğu Hindistan Şirketi acentesi Basra'dan Kuveyt'e taşınmış ve Kuveyt'in liman olarak yükselişi böyle başlamıştı.",
  "kaynak": "basra",
  "duygu": [
   "🎉"
  ],
  "yer_id": "Basra"
 },
 {
  "t": "1830-02-03",
  "k": "antlasma",
  "etiket": [
   "diplomasi",
   "toprak-kayip",
   "konu-askeri",
   "konu-diplomasi"
  ],
  "b": "Londra Protokolü — Yunanistan'ın bağımsızlığının tanınması",
  "gun": "3 Şubat 1830",
  "yer": "Londra",
  "yer_id": "Londra",
  "kisiler": "II. Mahmud, Reşid Mehmed Paşa",
  "d": "İngiltere, Fransa ve Rusya'nın Londra'da imzaladığı protokol, Edirne Antlaşması'nın öngördüğü özerkliği aşarak Yunanistan'ı BAĞIMSIZ bir devlet olarak tanıdı. Hükümler: Mora yarımadası, Attika ve Eğriboz ile Kiklad adaları yeni devlete bırakıldı; sınır Arta-Volos hattında çizildi; Osmanlı Devleti'ne tazminat ödenmesi kararlaştırıldı; devletin yönetim biçimi 'bağımsız monarşi' olarak belirlendi. Bu, imparatorluktan kopan İLK bağımsız devlettir ve sonraki Balkan bağımsızlıklarının hukukî örneğini kurmuştur.",
  "kaynak": "yunanistan",
  "duygu": [
   "🤝"
  ]
 },
 {
  "t": "1835-01-01",
  "b": "Abdullah b. Reşîd Hâil emirliğini ele geçirdi — Şammar (Reşîdî) hânedanının kuruluşu",
  "tur": "kurulus",
  "onem": 2,
  "dunya": 1,
  "kapsam": "dis",
  "etiket": [
   "siyaset",
   "kurulus",
   "konu-siyasi",
   "konu-hanedan"
  ],
  "yer_id": "Hâil",
  "d": "1818'de Mehmed Ali Paşa kuvvetlerinin Dir'iyye'yi düşürmesiyle Cebelişemmer bölgesi Suûdî hâkimiyetinden çıktı ve emirlik İbn Ali ailesinin elinde kaldı. Osmanlı hâkimiyetinin yeniden tesisini destekleyen Abdullah b. Reşîd, kardeşi Ubeyd ile birlikte İbn Ali ailesine karşı giriştiği mücadeleyi 1835'te kazanarak Hâil emirliğini ele geçirdi ve Reşîdî hânedanının hâkimiyetini kurdu.", "ic_not_d": "TDV kaynağı yalnız yılı veriyor, gün belirtmiyor.  VERİ NOTU: data/yerlesimler.js'teki Hâil kaydı bu değişimi 1836-01-01 olarak taşıyor (1 yıl fark) — Değişmez 2 senkronu için yerleşim tarihinin 1835-01-01'e çekilmesi gerekir; bu düzeltme Yerleşim/Entegrasyon oturumuna aittir, benim yetkim dışında.",
  "kaynak": "residiler"
 },
 {
  "t": "1920-08-10",
  "k": "antlasma",
  "etiket": [
   "toprak-kayip",
   "diplomasi",
   "konu-askeri",
   "konu-diplomasi"
  ],
  "b": "Sevr Antlaşması — imparatorluğun paylaşım metni",
  "gun": "10 Ağustos 1920",
  "yer": "Sèvres, Paris",
  "kisiler": "Vahdettin, Damad Ferid Paşa, Rıza Tevfik, Hâdi Paşa",
  "d": "Osmanlı hükümetinin İtilâf devletleriyle imzaladığı ve imparatorluğu fiilen tasfiye eden metin. Hükümler: Doğu Trakya ve İzmir bölgesi Yunanistan'a; Doğu Anadolu'da bağımsız Ermenistan ve özerk Kürdistan öngörüldü; Suriye Fransa'ya, Irak ile Filistin İngiltere'ye manda olarak bırakıldı; Boğazlar uluslararası komisyona devredildi; ordu 50.700 kişiye indirildi, kapitülasyonlar geri geldi, maliye İtilâf denetimine verildi. Ankara'daki Büyük Millet Meclisi antlaşmayı HİÇ TANIMADI ve imzalayanları vatan haini ilân etti; metin yürürlüğe girmedi, yerine 1923'te Lozan geldi. Haritada karşılığı olmamasının sebebi budur — Sevr hukuken hiç uygulanmadı.",
  "kaynak": "sevr-antlasmasi",
  "duygu": [
   "🤝"
  ],
  "yer_id": "Paris"
 },

{ t:"1819-11-01", tur:"din", etiket:["din","toplum","hanedan-degisimi","konu-hanedan","konu-din","konu-sosyal"], kapsam:"dis", b:"ʻAi Noa — Hawaii'de geleneksel kapu sisteminin sona erdirilmesi", kapsam_genis:true, gun:"Kasım 1819 (gün kaynaklarda yok)", yer:"Kailua-Kona, Hawaii adası", kisiler:"II. Kamehameha (Liholiho), Kraliçe Kaʻahumanu", d:"Kamehameha I'in ölümünden altı ay sonra, yeni kral Liholiho annesi Kaʻahumanu'nun desteğiyle kadın-erkek ayrı yemek yeme yasağını (ʻaikapu) bilerek çiğnedi. 'ʻAi Noa' (serbest yemek) olarak anılan bu eylem geleneksel kapu din-hukuk sistemini resmen sona erdirdi; adalardaki eski tapınaklar (heiau) kısa sürede yıkıldı. Batı misyonerlerinin gelişinden (1820) önceki en büyük dinî-siyasî kırılmadır.", kaynak:"bulunamadı — TDV kapsamı dışı (Pasifik). Akademik temel eser R. S. Kuykendall, The Hawaiian Kingdom I (1938) arandı, OKUNAMADI (archive.org yalnız ödünç). Ay (Kasım 1819) yalnız Wikipedia + Punahou okul bülteni + UH Hilo ders notunda — bunlar §4 gereği dayanak DEĞİL; kayıt AKADEMİK DAYANAKSIZ olarak işaretlendi (KAYNAK-DOGRULA 19 Eyl 2026). Gün hiçbir kaynakta yok." },

{ t:"1840-10-08", tur:"kurulus", etiket:["idari","anayasa","konu-siyasi","konu-idari","konu-islahat","konu-hukuk"], kapsam:"dis", b:"Hawaii'nin ilk yazılı anayasası ilan edildi", yer_kon:[21.3069,-157.8583], gun:"8 Ekim 1840", yer:"Honolulu", kisiler:"III. Kamehameha", d:"Krallığın ilk tam yazılı anayasası ilan edildi; kral yetkisini kısıtlayan, temsilî bir meclis kuran bu belge Hawaii'yi anayasal monarşiye dönüştürdü.", kaynak:"bulunamadı — akademik/kurumsal kaynak: UH Law School Archival Collections (birincil kaynak neşri)" },

{ t:"1887-07-06", tur:"siyaset", etiket:["anayasa","darbe-askeri","konu-siyasi","konu-darbe","konu-islahat","konu-hukuk"], kapsam:"dis", b:"Süngü Anayasası — Kral Kalākaua'nın yetkileri budandı", yer_kon:[21.3069,-157.8583], gun:"6 Temmuz 1887 (imza); 7 Temmuz ilan", yer:"Honolulu", kisiler:"Kral Kalākaua, 'Hawaiian League' silahlı milisleri", d:"Silahlı bir milis grubu Kral Kalākaua'yı tehdit ederek krallığın yetkilerini büyük ölçüde budayan yeni bir anayasayı imzalamaya zorladı; belge 'Süngü Anayasası' (Bayonet Constitution) olarak anılır ve tahtı fiilen beyaz yerleşimci elitin denetimine soktu.", kaynak:"1887 Constitution of the Kingdom of Hawaii (Wikisource, belgenin kendi dateline'ı: 'SIGNED BY HIS MAJESTY KALAKAUA, JULY 6, AND PROMULGATED JULY 7, 1887') + Punawaiola/UH Mānoa 'Iulai 6' sayfası — BİRİNCİL KAYNAK" },

{ t:"1894-07-04", tur:"kurulus", etiket:["idari","hanedan-degisimi","konu-siyasi","konu-idari","konu-hanedan"], kapsam:"dis", b:"Hawaii Cumhuriyeti ilan edildi", yer_kon:[21.3069,-157.8583], gun:"4 Temmuz 1894", yer:"Honolulu", kisiler:"Sanford B. Dole", d:"1893'te Kraliçe Liliuokalani'yi deviren komplocular geçici hükümeti resmî bir cumhuriyete dönüştürdü; Sanford Dole başkan ilan edildi. Bu ara-rejim 1898'deki ABD ilhakına kadar sürdü.", kaynak:"bulunamadı — akademik/kurumsal kaynak: US State Dept FRUS 1894 + Britannica" },

{ t:"1893-02-18", tur:"hukumdar", etiket:["hanedan-degisimi","konu-kisiler","konu-hanedan"], kapsam:"dis", b:"I. George Tupou'nun ölümü, II. George Tupou'nun tahta çıkışı (Tonga)", yer_kon:[-21.1394, -175.2018], gun:"18 Şubat 1893 (ölüm); taç giyme 17 Mart 1893", yer:"Nukuʻalofa", kisiler:"I. George Tupou (öldü), II. George Tupou (tahta çıktı)", d:"Kurucu kral I. George Tupou'nun ölümüyle torununun torunu II. George Tupou tahta geçti; taç giyme töreni 17 Mart 1893'te Nukuʻalofa'da yapıldı.", kaynak:"bulunamadı — akademik/kurumsal kaynak: Britannica + Find a Grave çapraz kontrol edildi" },

{ t:"1918-04-05", tur:"hukumdar", etiket:["hanedan-degisimi","konu-kisiler","konu-hanedan"], kapsam:"dis", b:"II. George Tupou'nun ölümü, Sālote Tupou III'ün tahta çıkışı (Tonga)", yer_kon:[-21.1394, -175.2018], gun:"5 Nisan 1918 (ölüm); 6 Nisan ilan; taç giyme 11 Ekim 1918", yer:"Nukuʻalofa", kisiler:"II. George Tupou (öldü, verem), Sālote Tupou III (tahta çıktı)", d:"II. George Tupou veremden öldü; 18 yaşındaki kızı Sālote ertesi gün kraliçe ilan edildi, taç giyme töreni 11 Ekim 1918'de yapıldı.", ic_not_d:"⚠️ KAYNAK ÇELİŞKİSİ ÖLÇÜLDÜ VE ÇÖZÜLDÜ: encyclopedia.com bir noktada '12 Nisan 1908' yazıyordu — bu tarih MANTIKEN İMKÂNSIZ (8 yaşında kraliçe olmak, üstelik o tarihte zaten evli/başbakan eşi olmak çelişir) ve dizgi hatası (1908→1918) sayılıp elendi; gün ikinci akademik kaynakla (Wood-Ellem) teyit edildi.", kaynak:"Wood-Ellem, 'Queen Sālote of Tonga' (Auckland University Press, 1999) — ikinci bağımsız akademik kaynakla teyit edildi" },

{ t:"1893-09-19", tur:"siyaset", etiket:["reform","toplum","konu-siyasi","konu-islahat","konu-sosyal"], kapsam:"dis", b:"Yeni Zelanda kadınlara oy hakkı tanıyan ilk kendi kendini yöneten ülke oldu", yer_kon:[-41.2865,174.7762], gun:"19 Eylül 1893", yer:"Wellington", kisiler:"Vali Lord Glasgow", d:"Vali Lord Glasgow'un imzaladığı yeni Seçim Yasası ile Yeni Zelanda, kadınlara parlamento seçimlerinde oy hakkı tanıyan dünyanın ilk kendi kendini yöneten ülkesi oldu.", kaynak:"nzhistory.govt.nz — Yeni Zelanda hükûmetinin resmî tarih kurumu, birincil/kurumsal kaynak" },

{ t:"1901-06-11", tur:"toprak-kazanc", etiket:["idari","konu-askeri","konu-idari"], kapsam:"dis", b:"Yeni Zelanda sınırları Cook Adaları ve Niue'yi kapsayacak şekilde genişledi", kapsam_genis:true, gun:"11 Haziran 1901", yer:"Rarotonga / Cook Adaları, Niue", kisiler:"-", d:"Yeni Zelanda'nın sınırları Cook Adaları (Rarotonga, Aitutaki ve güney adaları ile kuzey Cook Adaları) ve Niue'yi kapsayacak şekilde genişletildi; bu adalar Yeni Zelanda'ya bağlı bölge oldu.", kaynak:"teara.govt.nz — Te Ara, Yeni Zelanda Ansiklopedisi, resmî/akademik kaynak" },

{ t:"1468-01-01", tur:"hukumdar", etiket:["hanedan-degisimi","konu-kisiler","konu-hanedan"], kapsam:"dis", b:"Kâsım Han'ın ölümü, Danyal Han'ın tahta çıkışı (Kasım Hanlığı)", yer_kon:[54.945,41.393], gun:"873 (1468)", ic_not_gun:"873 (1468) — TDV gün vermiyor", yer:"Kasimov", kisiler:"Kâsım Han (öldü), Danyal Han (tahta çıktı)", d:"Hanlığın kurucusu Kâsım Han'ın 873/1468'de ölümüyle yerine oğlu Danyal geçti; Danyal 1486'ya kadar hüküm sürdü.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1573-01-01", tur:"siyaset", etiket:["din","hanedan-degisimi","konu-siyasi","konu-hanedan","konu-din"], kapsam:"dis", b:"Kasım Hanlığı hükümdarının Hıristiyanlığa geçişi ve hanlıktan alınması", yer_id:"Kasimov", gun:"1573", ic_not_gun:"1573 — TDV gün vermiyor", yer:"Kasimov / Moskova", kisiler:"Sain Bulat Han (Simeon Bekbulatoviç)", d:"Hanlığın başındaki hükümdar 'Semen (Simeon)' adını alıp Hıristiyan oldu; Ruslar müslüman tebaanın tepkisini hesaba katarak onu hanlıktan aldılar. Bu kişi kısa süre sonra Korkunç İvan tarafından 'çarın ve Rusya'nın büyük beyi' unvanıyla Moskova'da nominal hükümdar ilan edildi (1575) — Kasım Hanlığı ile Moskova tahtı arasındaki en çarpıcı kesişme.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih ve bağlam)" },

{ t:"1609-01-01", tur:"kayip", etiket:["askeri","isyan","konu-askeri","konu-isyan"], kapsam:"dis", b:"Rus kuvvetlerinin Kasım şehrini zaptı, Uraz Muhammed Han", yer_kon:[54.945,41.393], gun:"1609", ic_not_gun:"1609 — TDV gün vermiyor", yer:"Kasimov", kisiler:"Uraz Muhammed Han, II. Sahte Dimitri", d:"Rusya'daki İç Karışıklıklar Devri'nin (Smuta) yansıması olarak Rus kuvvetleri Kâsım şehrini kuşatıp zaptetti, halkının çoğunu kılıçtan geçirdi. Hanlığın başındaki Uraz Muhammed, II. Sahte Dimitri'yi desteklediği için hedef alınmıştı; ertesi yıl (1610) kendisi de bir komployla öldürüldü.", kaynak:"kasim-hanligi (TDV — CANLI, madde gövdesinde birebir tarih ve bağlam)" },

{ t:"1921-08-14", tur:"kurulus", etiket:["idari","konu-siyasi","konu-idari"], kapsam:"dis", b:"Tannu Tuva Halk Cumhuriyeti bağımsızlığını ilan etti", yer_kon:[51.7191, 94.4378], gun:"14 Ağustos 1921", yer:"Tuva", kisiler:"-", d:"Tuvan Halk Devrimci Partisi önderliğinde bağımsızlık ilan edildi; ilk anayasanın ilk maddesi devletin 'uluslararası ilişkilerde Sovyet Rusya'nın himayesi altında' hareket ettiğini belirtiyordu.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1922-03-03", tur:"idari", etiket:["idari","konu-idari"], kapsam:"dis", b:"Tannu Tuva hükûmeti fiilen göreve başladı", yer_kon:[51.7191, 94.4378], gun:"3 Mart 1922", yer:"Tuva", kisiler:"-", d:"Şubat 1922'deki ilk parti toplantısının ardından kurulan hükûmet fiilen göreve başladı.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1923-10-12", tur:"idari", etiket:["idari","konu-idari"], kapsam:"dis", b:"Tannu Tuva'nın ilk Büyük Kurultayı toplandı", yer_kon:[51.7191, 94.4378], gun:"12 Ekim 1923", yer:"Tuva", kisiler:"-", d:"Ülkenin ilk Büyük Kurultayı (Halk Meclisi) toplandı; bu, devletin kurumsallaşma sürecinde ilk büyük temsilî toplantısıdır.", kaynak:"nit.tuva.asia — \"Novye issledovaniya Tuvy\" (Tuva'nın Yeni Araştırmaları), Tuva tarih-kültürü üzerine hakemli açık erişim dergi, Scopus/WoS/DOAJ indeksli, ISSN 2079-8482" },

{ t:"1793-05-20", tur:"hukumdar", etiket:["hanedan-degisimi","konu-kisiler","konu-hanedan"], kapsam:"dis", b:"Timur Şah'ın ölümü, Zaman Şah'ın cülûsu (Dürrânî Devleti)", yer_kon:[34.528,69.172], gun:"20 Mayıs 1793", yer:"Kabil", kisiler:"Timur Şah (öldü), Zaman Şah (tahta çıktı)", d:"Yirmi yılı aşkın süre ülkeyi içeriden konsolide eden Timur Şah'ın ölümüyle, Kandehar-Herat-Kabil valisi üç kardeş taht için çekişti; başkenti elinde tutan Kabil valisi Zaman Şah 20 Mayıs 1793'te şah oldu. Bu veraset krizi, hânedanın parçalanma sürecinin fiilen başlangıcıdır.", ic_not_d:"(Not: tarih önceki bir taslakta 18 Mayıs 1793 — Timur Şah'ın ölüm günü — olarak yanlış girilmişti; madde metni zaten Zaman Şah'ın CÜLÛSUNU anlatıyordu, tarih metinle 20 Mayıs'a hizalandı — bkz. denetim/PAKET-DALGA2-0911.json ②.)", kaynak:"TDV, afganistan (gövde okundu, KAYNAK-DOGRULA 19 Eyl 2026) — AYNEN: «Timur Şah'ın ölümü üzerine (1793), yerine geçen oğlu Zaman Şah'ın yedi yıllık iktidar döneminde…» (YIL). ⚠️ 20 Mayıs GÜNÜ TDV'de ve akademik kaynakta BULUNAMADI — gün yalnız Wikipedia 'Zaman Shah Durrani'de; New World Encyclopedia (Wikipedia türevi) ve Wikipedia dayanak olarak KALDIRILDI. TDV 'ahmed-sah-durrani' maddesi bu olayı kapsamıyor (önceki not)." },

{ t:"1920-04-26", tur:"kurulus", etiket:["idari","hanedan-degisimi","konu-siyasi","konu-idari","konu-hanedan"], kapsam:"dis", b:"Hârizm Halk Cumhuriyeti ilan edildi", yer_kon:[41.3783,60.3639], gun:"26 Nisan 1920", yer:"Hive", kisiler:"-", d:"1917 Ekim İhtilâli sonrası Hive Hanı'nın devrilmesinin ardından Hârizm Halk Cumhuriyeti ilân edildi.", kaynak:"harizm (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1921-09-05", tur:"siyaset", etiket:["idari","konu-siyasi","konu-idari"], kapsam:"dis", b:"Hârizm Sovyet Sosyalist Cumhuriyeti'ne dönüşüm", yer_kon:[41.3783,60.3639], gun:"5 Eylül 1921", yer:"Hive", kisiler:"-", d:"Ülke, adını ve statüsünü değiştirerek Hârizm Sovyet Sosyalist Cumhuriyeti oldu; idari-yasal yapı Sovyet sistemine göre yeniden düzenlendi.", kaynak:"harizm (TDV — CANLI, madde gövdesinde birebir tarih)" },

{ t:"1920-10-08", tur:"kurulus", etiket:["idari","hanedan-degisimi","konu-siyasi","konu-idari","konu-hanedan"], kapsam:"dis", b:"Buhara Halk Sovyet Cumhuriyeti ilan edildi", yer_kon:[39.7681,64.421], gun:"8 Ekim 1920", yer:"Buhara", kisiler:"Feyzullah Hocayev", d:"Kızıl Ordu'nun 28-31 Ağustos 1920'de Buhara Emirliği'ni yıkıp Emir Alim Han'ı Doğu Buhara'ya kaçırmasının ardından, Feyzullah Hocayev başkanlığında Buhara Halk Sovyet Cumhuriyeti ilân edildi.", kaynak:"TDV, ozbekistan — AYNEN: «1920'de Buhara Halk Sovyet Cumhuriyeti ile Hîve'de Hârizm Halk Cumhuriyeti teşkil edildi» (YIL) · TDV, buhara — AYNEN: «1920 yılı Ağustos sonunda son emîr Âlim Han Kızılordu'nun şehri işgali sonunda tahtından uzaklaştırıldı ve 6 Ekim 1920'de Buhara Hanlığı ilga edildi». ⚠️ 8 Ekim GÜNÜ TDV'de ve akademik kaynakta BULUNAMADI (TDV hanlığın ilgasına 6 Ekim diyor); soviethistory.msu.edu ifadesi bu turda okunmadı; Wikipedia dayanak olarak KALDIRILDI (KAYNAK-DOGRULA 19 Eyl 2026)" },

{ t:"1921-09-01", tur:"siyaset", etiket:["anayasa","reform","konu-siyasi","konu-islahat","konu-hukuk"], kapsam:"dis", b:"Buhara Halk Sovyet Cumhuriyeti yeni anayasası kabul edildi", yer_kon:[39.7681,64.421], gun:"Eylül 1921 (gün kaynaklarda yok)", yer:"Buhara", kisiler:"-", d:"Rus 1918 anayasasının aksine özel toprak/üretim mülkiyetine izin veren ve proleter-olmayanlara da oy hakkı tanıyan yeni bir anayasa kabul edildi (devrik emirin akrabaları ve büyük toprak sahipleri hariç).", kaynak:"bulunamadı — akademik kaynak: soviethistory.msu.edu (Buhara Halk Sovyet Cumhuriyeti Anayasası metni, MSU arşivi) + Wikipedia çapraz" },

{ t:"1924-01-01", tur:"kayip", etiket:["idari","toprak-kayip","hanedan-degisimi","konu-askeri","konu-idari","konu-hanedan"], kapsam:"dis", b:"Hârizm SSC ve Buhara Halk Sovyet Cumhuriyeti'nin millî sınırlandırmayla sona ermesi — Özbekistan/Türkmenistan SSC'lerinin kuruluşu", odak_yer:["Hîve","Buhara","Taşkent"], kapsam_genis:true, gun:"1924 (kaynaklar farklı günler verir)", ic_not_gun:"gün KAYNAKLAR ARASINDA ÇELİŞİYOR — künyenin kendi f:/t: günü DEVRALINDI, bkz. not", yer:"Hive, Buhara, Taşkent", kisiler:"Feyzullah Hocayev", d:"Sovyet 'millî sınırlandırma' (natsionalno-territorialnoe razmezhevanie) kararıyla Hârizm Sovyet Sosyalist Cumhuriyeti ile Buhara Halk Sovyet Cumhuriyeti ilga edildi; toprakları yeni kurulan Özbekistan ve Türkmenistan Sovyet Sosyalist Cumhuriyetleri arasında paylaştırıldı (Hîve'nin doğusu Özbekistan'a, batısı Türkmenistan'a). TDV'nin `harizm` maddesi: '1924'te Hîve Hanlığı'nın doğu kesimleri Özbekistan SSC'ye, batı tarafı da Türkmenistan SSC'ye bırakıldı' — yalnız YIL veriyor.", ic_not_d:"⚠️ KAYNAK ÇELİŞKİSİ BİLDİRİLİYOR, ÇÖZÜLMEDİ: akademik kaynaklar sürecin BİRDEN FAZLA kararla ilerlediğini gösteriyor — Türkistan MİK'in 16 Eylül 1924 kararı, Buhara/Hârizm kurultaylarının Eylül-Ekim 1924 toplantıları, SSCB Merkezî Yürütme Kurulu'nun 14 Ekim 1924 kararı, ve cumhuriyetlerin fiilen SSCB'ye 27 Ekim 1924'te birer birlik cumhuriyeti olarak katılıp aynı anda ilga edilmesi — tek bir 'kesin gün' YOK, süreç ~6 haftaya yayılıyor. §4'ün kuralı gereği (künyenin f:/t: günü bir KAYNAK DEĞİLDİR ama BURADA TERSİ: benim kaynağım künyeden DAHA hassas görünüyor ama KENDİ İÇİNDE tutarsız) daha hassas ama çelişik bir gün UYDURMAK yerine künyenin kendi t: günü (1924-01-01, TDV'nin yalnız yıl vermesinin YYYY-01-01 karşılığı) DEVRALINDI — 5 Eylül 2026 `KRONOLOJİ BOŞ KÜNYE` emsaliyle aynı karar: 'kaba tarih yazılmaz, künyenin günü devralınır, künyenin gününün de kaynaksız olduğu bildirilir.'", kaynak:"harizm (TDV — CANLI, yalnız yıl) + soviethistory.msu.edu (Michigan State, süreç kararları ama TEK gün vermiyor) — KITA 3'ün DALGA2 görevi TAMAMLANDIKTAN SONRA, KITA 1'in PAKET-T künye penceresini 1924-01-01'e çekmesi (M-3544) üzerine EK olarak yazıldı" }

];

;
/* ==== data/olaylar_ek9.js ==== */
// ============================================================================
// DERİNLEŞTİRME PARTİSİ 9 — OSMANLI AFRİKASI'NIN EKSİK KIRILMA MADDELERİ
// ============================================================================
// Bu parti Oturum 14'ün (Osmanlı Afrikası, 153 nokta) BORCUNU kapatır.
//
// Oturum 14 `olaylar*.js`'e yazma yetkisi olmadan çalıştı. Her `d:`/`v:` dönem
// sınırı Değişmez 2 gereği ±30 gün içinde bir kronoloji maddesi istediği için,
// gerçek tarihi kapsanmayan yedi yerleşimin sınırı mevcut bir kırılmaya
// YUVARLANDI ve dosyada `⚠️` ile işaretlendi. Üç dönem ise (Tabarka'nın
// Ceneviz devri, Kerene'nin Mısır işgali, Tokar'ın Mehdî devri) maddesi
// olmadığı için HİÇ YAZILAMADI.
//
// `OGRENILENLER.md §8`: **bilinmeyen tarih yuvarlanmaz, komşusundan alınır.**
// Bu dosya o kuralı uygular — önce madde yazılır, sonra tarih gerçeğine çekilir.
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — hangi madde gün, hangisi yıl
// ---------------------------------------------------------------------------
// Altı maddenin günü kaynaktan doğrulandı:
//   1741-06-12 Tabarka · 1843-06-12 Sîdî Bel Abbès · 1852-12-04 Ağvât ·
//   1874-11-02 El-Fâşir · 1883-12-23 Slatin'in teslimi · 1884-06-03 Hewett
// Beş maddede yalnız YIL doğrulanabildi ve `CLAUDE.md §4` gereği `YYYY-01-01`
// yazıldı; gerçek ay `gun` alanında duruyor:
//   1840 Kesela · 1841 Muaskar · 1843 Şelif-Tenes (Nisan) · 1844 Nedrûme ·
//   1872 Bogos · 1882 Mîzâb (Kasım) · 1884 Tokar
// Uydurma gün YAZILMADI. Gün bulunduğunda madde ve yerleşim birlikte
// düzeltilmelidir.
//
// ---------------------------------------------------------------------------
// KAYNAK — kullanılan slugların hepsi doğrulandı
// ---------------------------------------------------------------------------
// Zaten doğrulanmış kümeden (data/olaylar*.js `kaynak:` alanları):
//   cezayir · tilimsan · huseyniler · hidiv · sudan · kavalali-mehmed-ali-pasa
// Bu oturumda `<title>` ile YENİ doğrulananlar (CLAUDE.md §4 ölü slug tuzağı):
//   darfur      → "DÂRFÛR - TDV İslâm Ansiklopedisi"      ✓ CANLI
//   habesistan  → "HABEŞİSTAN - TDV İslâm Ansiklopedisi"  ✓ CANLI
//                 (kısa çapraz gönderme maddesi: "bk. ETİYOPYA")
//
// ⚠️ ENTEGRASYON: bu dosya `index.html`'e <script> satırı ve `js/app.js`'in
// 778-785. satırlarındaki concat zincirine EKLENMEDİKÇE yüklenmez. Denetim
// `data/olaylar*.js` deseniyle okuduğu için TEMİZ görünür ama yayın maddeleri
// göstermez — `olaylar_ek8.js` bu yüzden dört commit boyunca 404 verdi
// (`OGRENILENLER.md §4`). `py arac/denetle_yayin.py` ile doğrulanmalı.
// ============================================================================

window.OLAYLAR_EK9 = [

// ---------------------------------------------------------------------------
// A) CEZAYİR — Fransız işgalinin kasaba kasaba tarihleri
// ---------------------------------------------------------------------------
// Oturum 14 bu altı yeri 1844-03-04 (Biskra) ve 1854-12-02 (Tuggurt)
// kırılmalarına yuvarlamıştı. Aşağıdaki maddeler yazıldıktan sonra
// yerlesimler_afrika.js'te gerçek tarihlerine çekildiler.

{ t:"1841-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Muaskar'ın (Mascara) Fransız işgali — Abdülkādir'in başkentinin kaybı",
  gun:"1841", yer:"Muaskar (Mascara), Vehrân eyaleti", kisiler:"Abdülkādir el-Cezâirî, Mareşal Bugeaud",
  d:"Bugeaud'nun 1841'de valiliğe gelmesiyle Fransız stratejisi değişti: kıyıda tutunmak yerine iç şehirleri tek tek işgal etmek. Vehrân, Mostagānim ve Medea'dan çıkan hareketli kollar Abdülkādir'in düzenli devletinin merkezlerini aldı; darphanesi, barut imalâthanesi ve tahıl ambarlarıyla gerçek bir başkent olan Muaskar bunların en önemlisiydi. Emîr bundan sonra sabit bir merkez kurmaktan vazgeçip ordusunu 'smala' denen göçer kampa çevirdi.", ic_not_d:"Günü kaynaklarda kesinleşmediği için burada yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Muaskar" },

{ t:"1843-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Şelif vadisi ve Tenes'in işgali — Orléansville'in kurulması",
  gun:"1843 (Nisan)", yer:"Şelif vadisi, Tenes, Dahra", kisiler:"Mareşal Bugeaud",
  d:"Abdülkādir'i takip edebilmek için Fransızlar 1843 Nisanında Şelif vadisinin ortasında Orléansville adlı yeni bir şehir kurdular; aynı yıl kıyıdaki Tenes limanı da işgal edildi. Böylece Cezayir ile Vehrân arasındaki iç koridor Fransız denetimine girdi ve Dahra dağlarındaki direniş kuşatıldı. Aynı yılın 16 Mayısında Abdülkādir'in göçer kampı 'smala' tesadüfen bulunup dağıtıldı.", ic_not_d:"Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Şelif" },

{ t:"1843-06-12", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Sîdî Bel Abbès müstahkem kampının kurulması",
  gun:"12 Haziran 1843", yer:"Sîdî Bel Abbès, Vehrân eyaleti", kisiler:"Mareşal Bugeaud, General Bedeau",
  d:"Bugeaud 12 Haziran 1843'te General Bedeau'ya Sîdî Bel Abbès'te hendekli ve surlu bir müstahkem kamp kurma emrini verdi; inşaata 18 Haziranda başlandı ve aynı yılın kasımında Yabancı Lejyon'un bir taburu buraya yerleşti. Kamp, Vehrân ile Tilimsan arasındaki iç ovayı denetleyen kalıcı bir üs oldu.", ic_not_d:"Oturum 14 bu noktayı 1844-03-04'e yuvarlamıştı; gerçek tarih budur.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Sîdî Bel Abbès" },

{ t:"1844-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Nedrûme ve Fas sınır kuşağının Fransız denetimine geçişi",
  gun:"1844", yer:"Nedrûme, Tilimsan çevresi, Fas sınırı", kisiler:"Mareşal Bugeaud, Abdülkādir el-Cezâirî",
  d:"Abdülkādir'in 1843'te Fas'a çekilmesinden sonra Tilimsan'ın kuzeybatısındaki Nedrûme ve Trâra kıyısı Fransız denetimine girdi. 14 Ağustos 1844'teki Isly Muharebesi Fas ordusunu bozguna uğrattı ve iki ülke arasındaki sınır 18 Mart 1845 Lâlla Mağniye Sözleşmesi'yle çizildi; Nedrûme bu çizginin Cezayir tarafında kaldı.", ic_not_d:"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"tilimsan", duygu:["😔"], yer_id:"Nedrûme" },

{ t:"1852-12-04", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Ağvât'ın (Laghouat) düşüşü — Sahra kapısının açılması",
  gun:"4 Aralık 1852", yer:"Ağvât (Laghouat)", kisiler:"General Pélissier",
  d:"General Pélissier altı bin kişilik bir kuvvetle 21 Kasım 1852'de Ağvât'ı kuşattı ve 4 Aralıkta şehir kanlı bir hücumla düştü. Ağvât, Tell ile Sahra arasındaki geçişi tutan vaha şehriydi; düşmesi Fransız ilerleyişini çöl kervan yollarına açtı ve Mîzâb konfederasyonunun bir yıl içinde vergiye bağlanmasının önünü hazırladı.", ic_not_d:"Oturum 14 bu tarihi 1854-12-02'ye (Tuggurt) yuvarlamak zorunda kalmıştı.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Ağvât" },

{ t:"1882-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Mîzâb vahalarının (Gardâye) ilhakı",
  gun:"1882 (Kasım)", yer:"Gardâye, Mîzâb vahaları", kisiler:"—",
  d:"Mîzâb'ın İbâzî şehirleri 1852'de Fransa'ya vergi ödemeyi kabul etmiş ama iç idarelerini korumuştu; otuz yıl sonra, 1882'de bölge doğrudan Fransız topraklarına katıldı ve Gardâye askerî idareye bağlandı. Böylece kuzey Sahra'nın son özerk kuşağı da hukuken sona erdi.", ic_not_d:"Ayı bilinmekle birlikte günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Gardâye" },

// ---------------------------------------------------------------------------
// B) DARFUR — sultanlığın Mısır'a ilhakı ve Mehdî'ye geçişi
// ---------------------------------------------------------------------------
// Oturum 14 Darfur'a HİÇ NOKTA KOYMAMIŞTI çünkü `darfur` kimliği renkler.py'de
// yoktu ve `funj` yazmak açık bir hata olurdu (Darfur hiçbir zaman Func'a bağlı
// değildi). Bu iki madde, El-Fâşir'in `v:` sınırlarını kapatır.

{ t:"1874-11-02", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Darfur Sultanlığı'nın Mısır'a ilhakı — Zübeyr Paşa El-Fâşir'e girdi",
  gun:"2 Kasım 1874", yer:"El-Fâşir, Menevâşî, Darfur", kisiler:"Zübeyr Rahmet Paşa, Sultan İbrâhim Muhammed el-Hüseyin",
  d:"Fildişi ve köle ticaretiyle güçlenen Zübeyr Rahmet Paşa, Remington tüfekleriyle donattığı kuvvetlerle 25 Ekim 1874'te Menevâşî'de Fur ordusunu dağıttı; Sultan İbrâhim muharebede öldü. Zübeyr 2 Kasımda El-Fâşir'e çarpışmadan girdi ve 1603'ten beri süren Keyra hânedanının hükümdarlığı fiilen sona erdi. Darfur böylece Kavalalı Mısır'ının Sudan eyaletlerine katıldı; ama Keyra ailesinin dağlardaki direnişi 1891'e kadar sürdü.",
  kaynak:"darfur", duygu:["🎉"], yer_id:"El-Fâşir" },

{ t:"1883-12-23", k:"kayip", etiket:["toprak-kayip","isyan","konu-askeri","konu-isyan"],
  b:"Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın teslimi",
  gun:"23 Aralık 1883", yer:"Darfur, Dara, El-Fâşir", kisiler:"Rudolf Slatin Paşa, Şeyh Madibbo b. Ali, Muhammed Ahmed el-Mehdî",
  d:"Darfur genel valisi Slatin Paşa, 1882'den beri Rizeykāt kabilesinin Mehdîci ayaklanmasıyla uğraşıyordu; askerlerinin yenilgileri onun hıristiyan oluşuna yüklediğini düşünerek 1883'te açıkça müslüman oldu ve Abdülkādir adını aldı. Hicks Paşa'nın ordusunun kasım 1883'te Kordofan'da yok edilmesinden sonra direnişin anlamı kalmadı ve 23 Aralık 1883'te Emîr Madibbo'ya teslim oldu. Darfur'daki küçük Mısır karakolları da kısa sürede aynı yolu izledi; on yıllık Türk-Mısır idaresi bitti.",
  kaynak:"darfur", duygu:["😔"], yer_id:"Darfur" },

// ---------------------------------------------------------------------------
// C) TABARKA — iki yüz yıllık Ceneviz devrinin sonu
// ---------------------------------------------------------------------------
// Oturum 14 Tabarka'yı öteki Tunus noktaları gibi 1574'te Osmanlı yazmıştı,
// çünkü 1741 devralması için madde yoktu. Gerçekte ada 1544'ten beri Cenevizli
// Lomellini ailesinin elindeydi ve hiç Osmanlı idaresine girmemişti.

{ t:"1741-06-12", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Tabarka'nın Cenevizlilerden alınması — Lomellini mercan imtiyazının sonu",
  gun:"12 Haziran 1741", yer:"Tabarka adası, Tunus", kisiler:"Ali Paşa (Hüseynî), Lomellini ailesi",
  d:"Şarlken'in 1544'te Tunus beyiyle yaptığı antlaşmadan sonra Cenevizli Lomellini ailesi Tabarka adasına yerleşmiş ve iki yüz yıl boyunca mercan imtiyazını elinde tutmuştu; ada, Osmanlı Tunus'unun ortasında hıristiyan bir ticaret karakolu olarak kaldı. Hüseynî hânedanından Ali Paşa, ailenin adayı elden çıkarma girişimini haber alınca kuvvet gönderdi ve 12 Haziran 1741'de adayı ele geçirdi; bin beş yüz kadar hıristiyan Tunus'a nakledildi. Tabarka bu tarihten sonra Tunus ocaklığının idaresine girdi.",
  kaynak:"huseyniler", duygu:["🎉"], yer_id:"Tabarka" },

// ---------------------------------------------------------------------------
// D) BOGOS (KERENE) — Mısır'ın Habeşistan içine tek kalıcı ilerleyişi
// ---------------------------------------------------------------------------

{ t:"1872-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Bogos (Kerene) bölgesinin Mısır'a ilhakı",
  gun:"1872", yer:"Kerene, Bogos, Bilen ülkesi", kisiler:"Werner Munzinger Paşa, Hidiv İsmâil",
  d:"Hidiv İsmâil'in Kızıldeniz'in batı kıyısında kurduğu 'Doğu Sudan ve Kızıldeniz Sahili' vilâyetinin valisi Werner Munzinger Paşa, 1872'de Bilen halkının yaşadığı Bogos bölgesini ve merkezi Kerene'yi Mısır'a bağladı. Bu, Mısır'ın Habeş yaylasının kenarına yaptığı en kalıcı ilerleyişti ve Habeşistan ile on iki yıl süren bir sınır anlaşmazlığı başlattı.", ic_not_d:"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"hidiv", duygu:["🎉"], yer_id:"Kerene" },

{ t:"1884-06-03", k:"antlasma", etiket:["antlasma","toprak-kayip","diplomasi","konu-askeri","konu-diplomasi"],
  kapsam:"dis", onem:3, b:"Hewett (Adua) Antlaşması — Bogos'un Habeşistan'a bırakılması",
  gun:"3 Haziran 1884", yer:"Adua, Habeşistan", kisiler:"Amiral William Hewett, Yohannes IV, Hidiv Tevfik",
  d:"Mehdî ayaklanması Sudan'daki Mısır garnizonlarını kuşatınca İngiltere, Habeşistan'ın yardımını almak için 3 Haziran 1884'te Adua'da Yohannes IV ile antlaşma imzaladı. Antlaşmanın ikinci maddesi Bogos'u Habeşistan'a geri veriyor, karşılığında Habeşistan kuşatılmış garnizonların Masavva üzerinden tahliyesine yol açıyordu. Kerene böylece on iki yıllık Mısır idaresinden çıktı; beş yıl sonra bölge İtalyan Eritresi'ne katılacaktı.",
  kaynak:"habesistan", duygu:["🤝"], yer_id:"Adua" },

// ---------------------------------------------------------------------------
// E) TOKAR — Doğu Sudan'ın sekiz yıllık Mehdî devri
// ---------------------------------------------------------------------------

{ t:"1884-01-01", k:"kayip", etiket:["toprak-kayip","isyan","konu-askeri","konu-isyan"],
  b:"Doğu Sudan'ın Mehdî kuvvetlerine geçişi — Tokar'ın kaybı",
  gun:"1884", yer:"Tokar, Sinkat, Sevâkin ardalanı", kisiler:"Osman Digna, Muhammed Ahmed el-Mehdî",
  d:"Mehdî'nin doğu Sudan'daki halifesi Osman Digna, 1883 sonbaharından itibaren Bece kabilelerini ayaklandırarak Sevâkin'in ardalanını ele geçirdi; Sinkat ve Tokar garnizonları kuşatıldı ve 1884 başında bölge tamamen Mehdî idaresine girdi. Sevâkin limanı İngiliz-Mısır elinde kaldığı için kıyı ile içerisi sekiz yıl boyunca ayrı iki idare altında durdu. Tokar 1891 Şubatında geri alındı.", ic_not_d:"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"sudan", duygu:["😔"], yer_id:"Tokar" },

// ---------------------------------------------------------------------------
// F) KESELA — Taka bölgesinin fethi
// ---------------------------------------------------------------------------
// Oturum 14 Kesela'nın kuruluş gününü bilmediği için 1840-07-15'i SEÇMİŞTİ
// (Londra Antlaşması maddesiyle aynı güne düşsün diye). Bu madde o seçimi
// gereksiz kılar; yerleşim kaydı 1840-01-01'e çekildi.

{ t:"1840-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Taka bölgesinin fethi ve Kesela'nın kurulması",
  gun:"1840", yer:"Kesela, Taka, Atbara-Gaş havzası", kisiler:"Ahmed Paşa Ebû Vidân, Kavalalı Mehmed Ali Paşa",
  d:"Sudan hükümdarı Ahmed Paşa Ebû Vidân, 1840'ta Atbara ile Gaş nehirleri arasındaki Taka bölgesini Mısır idaresine bağladı ve Kesela şehrini askerî karargâh olarak kurdu. Şehir, Sennâr ile Sevâkin arasındaki kervan yolunu ve Habeş sınır kuşağını denetleyen bir mudîriyet merkezi oldu.", ic_not_d:"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"kavalali-mehmed-ali-pasa", duygu:["🎉"], yer_id:"Kesela" },

// ===========================================================================
// İKİNCİ PARTİ (hatalar 11 · md.18/41/42/43/44/51/56)
// ===========================================================================
// Aşağıdaki on üç madde ÖLÇÜLMÜŞ bir kusuru kapatır. Değişmez 2 "her kırılmanın
// ±30 gün içinde maddesi olsun" der ve denetim 451/451 ile TEMİZ raporluyor —
// ama maddenin DOĞRU madde olduğunu sormuyor. Ölçüldü, üç kırılma alâkasız bir
// maddenin altında beliriyordu:
//
//   Konstantin 1837-10-13  →  "Cebel-i Dürûz ayaklanması"   (+2 gün, SURİYE)
//   Zeyla      1884-01-01  →  "Reji İdaresi kuruldu"        (+0 gün, TÜTÜN)
//   Murzuk     1577-01-01  →  "İstanbul Rasathanesi kuruldu"(+0 gün)
//
// Kullanıcının md.18'de sorduğu "Cezayir'den Fransa'ya geçen parça bu maddeyle
// mi ilgili" sorusunun cevabı budur: HAYIR. Cebel-i Dürûz Suriye'de Havran'da,
// Konstantin Cezayir'in doğusunda; iki gün arayla düştükleri için denetim ikisini
// eşleştirmişti. Bu maddelerden sonra eşleşme +0 güne iner.
//
// TDV slugları — hepsi bu turda <title> ile doğrulandı:
//   urabi-pasa            → "URÂBÎ PAŞA - TDV İslâm Ansiklopedisi"            ✓
//   trablusgarp-savasi    → "TRABLUSGARP SAVAŞI - TDV İslâm Ansiklopedisi"    ✓
//   muhammed-ahmed-el-mehdi → "MUHAMMED AHMED el-MEHDÎ - …"                   ✓
//   aden                  → "ADEN - TDV İslâm Ansiklopedisi"                  ✓
//   tunus                 → "TUNUS - TDV İslâm Ansiklopedisi"                 ✓
//   senusiyye             → "SENÛSİYYE - TDV İslâm Ansiklopedisi"             ✓
//   abdulkadir-el-cezairi → "ABDÜLKĀDİR el-CEZÂİRÎ - …"                       ✓
// ===========================================================================

// ---------------------------------------------------------------------------
// G) KONSTANTİN — md.18'in gerçek sebebi
// ---------------------------------------------------------------------------

{ t:"1837-10-13", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Konstantin'in düşüşü — doğu Cezayir beyliğinin sonu",
  gun:"13 Ekim 1837", yer:"Konstantin (Kostantîne), doğu Cezayir", kisiler:"Ahmed Bey, Mareşal Valée, General Damrémont",
  d:"Cezayir'in 1830'da düşmesinden sonra doğu beylerbeyliği dağılmadı: son bey Ahmed, Konstantin'de kendi idaresini sürdürdü ve Osmanlı adına hareket ettiğini ilân etti. Fransızların 1836'daki ilk seferi bozgunla bitti; ikinci sefer 6 Ekim 1837'de şehri kuşattı, kumandan Damrémont 12 Ekimde top ateşiyle öldü ve 13 Ekimde surlar aşılarak şehir sokak sokak alındı. Ahmed Bey dağlara çekildi ve ancak 1848'de teslim oldu. Bu tarih, Cezayir'in doğusunda üç yüz yıllık Osmanlı-Türk idaresinin fiilî bitişidir.", ic_not_d:"Denetim bu kırılmayı iki gün sonraki Cebel-i Dürûz ayaklanması maddesiyle eşleştiriyordu — bu madde o eşleşmeyi düzeltir.",
  kaynak:"cezayir", duygu:["😔"], yer_id:"Konstantin" },

// ---------------------------------------------------------------------------
// G1) EMÎR ABDÜLKĀDİR — md.23'ün cevabı
// ---------------------------------------------------------------------------
// Kullanıcının sorusu: "Cezayir işgalinden sonra hâlâ Osmanlı pembesi görünen
// iç bölgeler: bağ kaldı mı?" Cevap HAYIR — ve sebebi ölçüldü: 27 kayıt
// `v:"Cezayir Ocaklığı (dayı idaresi)"` etiketini 1830-07-05'ten SONRA da
// taşıyor (Tuggurt'ta 24 yıl, Biskra'da 14, Konstantin'de 7). Ocaklık 5 Temmuz
// 1830'da lağvedildi; o topraklarda 1830'dan sonra duran şey Osmanlı değil,
// doğuda Ahmed Bey'in beyliği, batıda Emîr Abdülkādir'in devletiydi.
// Bu madde, düzeltmenin ihtiyaç duyduğu kırılmayı önceden açar.

{ t:"1832-11-22", k:"fetih", etiket:["isyan","konu-askeri","konu-isyan"],
  b:"Emîr Abdülkādir'in devletinin kuruluşu — batı Cezayir'de direnişin merkezîleşmesi",
  gun:"22 Kasım 1832", yer:"Muaskar, Tagdempt, batı ve orta Cezayir", kisiler:"Abdülkādir el-Cezâirî, Muhyiddin el-Hasenî",
  d:"Cezayir'in düşüşünden sonra dağılan direniş, Kādirî şeyhi Muhyiddin'in oğlu genç Abdülkādir etrafında toplandı; 22 Kasım 1832'de Muaskar yakınlarında kabile reisleri ona 'emîrü'l-mü'minîn' sıfatıyla biat etti. Kurduğu yapı bir kabile ittifakı değil düzenli bir devletti: darphanesi, barut imalâthanesi, vergi düzeni ve Tagdempt'te bir başkenti vardı. Fransa 1837 Tâfnâ Antlaşması'yla hâkimiyetini resmen tanıdı. Abdülkādir Osmanlı'ya değil Fas sultanı Abdurrahman'ın metbûiyetine sığındı; yani bu topraklar 1832'den sonra Osmanlı tâbiiyeti DEĞİLDİR. 23 Aralık 1847'de teslim oldu ve Osmanlı Devleti de aynı yıl Cezayir üzerindeki haklarının sona erdiğini ilân etti.",
  kaynak:"abdulkadir-el-cezairi", duygu:["🎉"], yer_id:"Muaskar" },

// ---------------------------------------------------------------------------
// G2) FİZAN — YAZILDI, SONRA SİLİNDİ (çakışma kaydı)
// ---------------------------------------------------------------------------
// Murzuk'un 1577-01-01 kırılması ölçüldüğünde "İstanbul Rasathanesi kuruldu"
// maddesine +0 gün bağlıydı; Sahra'nın ortasındaki 215.417 km²'lik petek bir
// rasathane maddesinin altında el değiştiriyordu. Buraya bir madde yazdım.
//
// 🔴 BAŞKA BİR OTURUM AYNI ANDA AYNI GÜNE YAZMIŞ: `olaylar_ek8.js`,
// "Fizan'ın Osmanlı tâbiiyetine girmesi — Murzuk", kaynak:"fizan".
// Mükerrer denetimi yakaladı (aynı kişi + AYNI gün). Benimki silindi —
// ek8'inki daha önce yazılmış ve içerik olarak yeterli.
//
// Kalan tek fark rapora taşındı: TDV `fizan` maddesi sancak teşkilâtını
// **1551 Trablus fethine** bağlıyor, 1577'ye ayrı bir hüküm vermiyor.
// Atlastaki 1577 tarihinin kaynağı doğrulanamadı → OTURUM-14-DUZELTMELER.md §4.

// ---------------------------------------------------------------------------
// H) MISIR'IN İNGİLİZ İŞGALİ — md.41 · md.42
// ---------------------------------------------------------------------------
// ⚠️ Bu iki madde işgalin ADIMLARIDIR. İşgalin kendisi için mevcut
// "1882-09 Mısır'ın İngiliz işgali" maddesi duruyor; ama AY hassasiyetinde ve
// CLAUDE.md §8 gün istiyor. Düzeltmesi merkez oturumda (bkz. OTURUM-14-DUZELTMELER.md).

{ t:"1882-07-11", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"İskenderiye'nin bombardımanı ve İngiliz çıkarması",
  gun:"11-12 Temmuz 1882 (bombardıman) · 15 Temmuz (işgal)", yer:"İskenderiye", yer_id:"İskenderiye", kisiler:"Ahmed Urâbî Paşa, Amiral Seymour, Hidiv Tevfik",
  d:"Urâbî Paşa'nın önderliğindeki subay hareketi hidivi denetim altına alınca İngiltere Süveyş yolunun güvenliğini bahane ederek müdahale etti. Amiral Seymour'un filosu 11-12 Temmuz 1882'de İskenderiye'nin sahil tabyalarını bombaladı; şehirde çıkan yangın ve yağmadan sonra 15 Temmuzda İngiliz birlikleri karaya çıktı. Osmanlı Devleti hukuken hükümran olduğu bir vilâyetinde bu harekâta engel olamadı ve müdahaleye katılma çağrısını da cevapsız bıraktı. Böylece otuz iki yıl sürecek işgalin ilk adımı atılmış oldu.",
  kaynak:"urabi-pasa", duygu:["😔"] },

{ t:"1882-09-13", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması",
  gun:"13 Eylül 1882", yer:"Tellülkebîr, Şarkıyye", kisiler:"Ahmed Urâbî Paşa, General Garnet Wolseley",
  d:"Wolseley kuvvetlerini Süveyş Kanalı üzerinden İsmâiliye'ye çıkarıp çölden yürüterek 13 Eylül 1882 şafağında Tel el-Kebîr'deki Mısır siperlerine baskın yaptı; muharebe bir saatte bitti. Urâbî ertesi gün teslim oldu ve İngiliz süvarisi aynı gün Kahire'ye girdi. Bu tarihten sonra Mısır'ın malî, askerî ve dış işleri fiilen İngiliz denetimine geçti; Osmanlı hükümranlığı ise hukuken 1914'e kadar sürdü.", ic_not_d:"Atlasta bu ikilik `isg:` işgal örtüsüyle gösterilir: taban rengi tâbi Mısır, üstündeki tarama İngiliz denetimi.",
  kaynak:"urabi-pasa", duygu:["😔"], yer_kon:[30.5636,31.9928] },

// ---------------------------------------------------------------------------
// I) TRABLUSGARP SAVAŞI — md.56, İtalyan çıkarmaları adım adım
// ---------------------------------------------------------------------------
// Bugün haritada Libya 1912-10-15'e (Uşi) kadar hiç değişmiyor; oysa İtalyan
// işgali BİR YIL ÖNCE, Ekim 1911'de tamamlandı. Aradaki on iki ay `isg:` örtüsü
// ister — düzeltme listesi merkez oturumda.

{ t:"1911-10-08", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Tobruk'a İtalyan çıkarması — Trablusgarp'ta ilk işgal",
  gun:"8 Ekim 1911", yer:"Tobruk, Berka (Cyrenaica)", kisiler:"—",
  d:"İtalya 29 Eylül 1911'de savaş ilân etti ve donanması 25-26 Eylülde kıyıyı abluka altına aldı. İlk kara harekâtı 8 Ekimde Tobruk'a yapıldı: küçük Osmanlı garnizonu iç bölgeye çekildi ve liman çarpışmasız işgal edildi. Tobruk, Mısır sınırına en yakın Osmanlı limanıydı; düşmesi Berka'nın doğu kanadını açtı ve İtalyan kuvvetlerinin kıyı boyunca batıya yürümesini kolaylaştırdı.",
  kaynak:"trablusgarp-savasi", duygu:["😔"], yer_id:"Tobruk" },

{ t:"1911-10-09", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Trablus şehrinin İtalyanlara teslim olması",
  gun:"9 Ekim 1911", yer:"Trablus (Tripoli)", kisiler:"Neşet Bey, Amiral Faravelli",
  d:"Trablus üç gün bombardımandan sonra 9 Ekim 1911'de teslim oldu. Osmanlı kuvvetleri şehri savunmak yerine Aziziye ve Garyan'a çekilerek iç bölgede direnişi örgütlemeyi seçtiler; Enver ve Mustafa Kemal beylerin katıldığı bu direniş, İtalyanları savaşın sonuna kadar kıyı şeridine hapsetti. Yani şehir düştüğü hâlde vilâyetin içi Osmanlı denetiminde kaldı.", ic_not_d:"atlasta bu, taban rengi Osmanlı, üstü İtalyan taraması olarak gösterilmelidir.",
  kaynak:"trablusgarp-savasi", duygu:["😔"], yer_id:"Trablus" },

{ t:"1911-10-16", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Derne'nin İtalyan çıkarmasıyla elden çıkışı",
  gun:"16 Ekim 1911", yer:"Derne, Berka", kisiler:"—",
  d:"Tobruk'tan sonra sıra Berka'nın ikinci limanı Derne'ye geldi; şehir 16 Ekim 1911'de işgal edildi. Derne çevresindeki yayla, Senûsiyye tarikatının en yoğun olduğu bölgeydi ve Şeyh Ahmed Şerîf'in cihad çağrısıyla toplanan mücahitler İtalyanları liman çevresinde kuşatılmış hâlde tuttu. İşgal şehirle sınırlı kaldı, ardalanına hiç yayılamadı.",
  kaynak:"trablusgarp-savasi", duygu:["😔"], yer_id:"Derne" },

{ t:"1911-10-21", k:"kayip", etiket:["savas","konu-askeri","konu-idari"],
  b:"Bingazi'ye İtalyan çıkarması — Berka sancağının merkezinin kaybı",
  gun:"21 Ekim 1911", yer:"Bingazi", yer_id:"Bingazi", kisiler:"—",
  d:"Berka'nın merkezi Bingazi 21 Ekim 1911'de, kıyıdaki dördüncü ve en önemli çıkarmayla işgal edildi. Böylece İtalya, savaş ilânından üç hafta sonra Trablusgarp vilâyetinin bütün büyük limanlarını (Trablus, Tobruk, Derne, Bingazi) elinde tutuyordu; ama hiçbirinin ardalanına giremedi. Savaşın kalan bir yılı, kıyıdaki bu dört noktadan içeri doğru sonuçsuz hamlelerle geçti.",
  kaynak:"trablusgarp-savasi", duygu:["😔"] },

{ t:"1911-11-05", k:"kayip", etiket:["diplomasi","konu-askeri","konu-diplomasi"],
  b:"İtalya'nın tek taraflı ilhak kararnâmesi",
  gun:"5 Kasım 1911", yer:"Roma · Trablusgarp ve Berka", kisiler:"—",
  d:"İtalya, savaş sürerken 5 Kasım 1911'de bir kararnâme çıkararak Trablusgarp ve Berka'yı ilhak ettiğini ilân etti. Osmanlı Devleti bunu tanımadı ve savaş bir yıl daha sürdü; ilhak ancak 18 Ekim 1912 Uşi Antlaşması'yla hukukî geçerlilik kazandı. Kararnâme bu yüzden haritada Osmanlı rengini değiştirmez — hukukî sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi taralı işgal olarak gösterilir.", ic_not_d:"eski: Kararnâme bu yüzden haritada TABAN RENGİNİ değiştirmez — de jure sahiplik 1912'ye kadar Osmanlı'dadır, İtalyan denetimi işgal örtüsüdür.",
  kaynak:"trablusgarp-savasi", duygu:["😔"], yer_id:"Roma" },

// ---------------------------------------------------------------------------
// J) MEHDÎ DEVLETİ — md.43, ilerleyiş ve geri fetih
// ---------------------------------------------------------------------------
// Bugün veride yalnız 1885-01-26 (Hartum) ve 1899-01-19 (İngiltere) var; yani
// Mehdî devleti tek hamlede doğup tek hamlede yıkılıyor gibi görünüyor.
// Aşağıdaki dört madde arasını doldurur.

{ t:"1883-11-05", k:"kayip", etiket:["toprak-kayip","savas","isyan","konu-askeri","konu-isyan"],
  b:"Şeykan bozgunu — Hicks Paşa ordusunun yok edilişi",
  gun:"5 Kasım 1883", yer:"Şeykan, Kordofan", kisiler:"William Hicks Paşa, Muhammed Ahmed el-Mehdî",
  d:"Kahire'den gönderilen ve yaklaşık on bin kişilik Mısır kuvvetine kumanda eden emekli İngiliz subayı Hicks Paşa, Kordofan çölünde susuz ve kılavuzsuz ilerlerken 5 Kasım 1883'te Şeykan'da Mehdî kuvvetlerince kuşatıldı ve ordu neredeyse tamamen imha edildi. Bu bozgun Sudan'daki Mısır idaresinin belkemiğini kırdı: bir ay içinde Darfur ve Bahrülgazâl teslim oldu, Kordofan'ın tamamı Mehdî'ye geçti. Hartum'un düşüşüne giden yol buradan başlar.",
  kaynak:"muhammed-ahmed-el-mehdi", duygu:["😔"], yer_id:"Kordofan (Ubeyyid)" },

{ t:"1896-09-23", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Dongola'nın geri alınışı — Nil boyu seferinin başlaması",
  gun:"23 Eylül 1896", yer:"Dongola, Kerma, Nil'in üçüncü çağlayanı", kisiler:"Herbert Kitchener, Abdullah b. Muhammed et-Teâyişî",
  d:"İtalyanların Adua'da yenilmesinden sonra İngiltere, Mısır ordusunu Kitchener kumandasında Nil boyunca güneye yürüttü. Demiryolu çölde ilerledikçe ikmal sorunu çözüldü ve Dongola vilâyeti 23 Eylül 1896'da geri alındı. On bir yıllık Mehdî idaresi burada sona erdi; sefer iki yıl daha sürerek Ümmüdurman'a ulaşacaktı.", ic_not_d:"Atlasta Dongola'nın Mehdî döneminin bu tarihte bitmesi gerekir — bugün Hartum'la aynı güne (1899) bağlı görünüyor.",
  kaynak:"sudan", duygu:["🎉"], yer_id:"Dongola" },

{ t:"1898-09-02", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Ümmüdurman Muharebesi — Mehdî devletinin yıkılışı",
  gun:"2 Eylül 1898", yer:"Ümmüdurman (Omdurman), Hartum karşısı", kisiler:"Herbert Kitchener, Abdullah b. Muhammed et-Teâyişî",
  d:"Kitchener'ın topçu ve makineli tüfekle donanmış İngiliz-Mısır ordusu 2 Eylül 1898'de Ümmüdurman önünde Halife Abdullah et-Teâyişî'nin kuvvetlerini birkaç saatte dağıttı. Ertesi gün Hartum'a girildi ve on üç yıl önce Gordon'un öldürüldüğü sarayda bayrak çekildi. Mehdî devletinin başkenti düştü; Halife 1899 sonunda takip harekâtında öldürüldü. Fiilî hâkimiyet bu tarihte el değiştirir — 19 Ocak 1899 ise idarenin hukukî çerçevesini kuran antlaşmadır.",
  kaynak:"sudan", duygu:["🎉","😔"], yer_id:"Hartum" },

{ t:"1899-01-19", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"Kondominyum Antlaşması — Sudan'ın İngiliz-Mısır ortak idaresi",
  gun:"19 Ocak 1899", yer:"Kahire · Sudan", kisiler:"Lord Cromer, Butros Gali Paşa",
  d:"Ümmüdurman'dan dört ay sonra Kahire'de imzalanan antlaşma Sudan'ı 'Anglo-Mısır Sudanı' adıyla iki devletin ortak idaresine bağladı: iki bayrak birlikte çekilecek, genel vali hidiv tarafından İngiltere'nin muvafakatiyle atanacaktı. Uygulamada idare tamamen İngilizlerin elindeydi. Osmanlı Devleti, Sudan üzerindeki haklarının Mısır üzerinden kendisine ait olduğunu ileri sürerek antlaşmaya taraf olmadı ve tanımadı; ama fiilen dışarıda kaldı.",
  kaynak:"sudan", duygu:["🤝"], yer_id:"Kahire" },

// ---------------------------------------------------------------------------
// K) KIZILDENİZ — md.44, Zeyla'nın yanlış maddeye bağlanması
// ---------------------------------------------------------------------------

{ t:"1884-01-01", k:"kayip", etiket:["toprak-kayip","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Zeyla ve Somali sahilinin İngiliz idaresine geçişi",
  gun:"1884", yer:"Zeyla, Berbera, Bulhar, Somali sahili", kisiler:"Hidiv Tevfik, Aden siyasî mukimi",
  d:"Mehdî ayaklanması Mısır'ın Sudan ve Kızıldeniz garnizonlarını çökertince Kahire, Habeş kıyısındaki uzak karakollarını boşaltmak zorunda kaldı. Aden'deki İngiliz idaresi 1884'te Zeyla ve Berbera'ya asker çıkardı; ertesi yıl Somali kabile reisleriyle himaye antlaşmaları imzalanarak İngiliz Somalilandı kuruldu. 1559'dan beri Habeş eyaletine bağlı olan Zeyla böylece elden çıktı.", ic_not_d:"Denetim bu kırılmayı aynı güne düşen 'Reji İdaresi' maddesiyle eşleştiriyordu; bu madde o eşleşmeyi düzeltir. Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"aden", duygu:["😔"], yer_id:"Zeyla" },

// ---------------------------------------------------------------------------
// L) TUNUS — md.51, işgalin ikinci adımı
// ---------------------------------------------------------------------------
// ⚠️ md.51'in asıl talebi mevcut "1881-05-12 Tunus'un işgali ve Düyûn-ı
// Umûmiyye" maddesinin AYRILMASIDIR. İki olayın birbiriyle ilgisi yok:
// Düyûn-ı Umûmiyye 20 Aralık 1881 Muharrem Kararnâmesi'yle kuruldu ve TDV'nin
// `duyun-i-umumiyye` maddesi Tunus'tan hiç söz etmiyor. Zaten doğru tarihli
// ayrı bir madde de var (1881-12-20). Birleşik maddenin düzeltilmesi merkez
// oturumda; bu madde işgalin tamamlanışını ekler.

{ t:"1883-06-08", k:"kayip", etiket:["antlasma","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Mersâ (La Marsa) Sözleşmesi — Tunus himayesinin tamamlanması",
  gun:"8 Haziran 1883", yer:"Mersâ (La Marsa), Tunus", kisiler:"Ali Bey, Paul Cambon",
  d:"12 Mayıs 1881 tarihli Bardo (Kasrüssaîd) Antlaşması Tunus'un dış işlerini Fransa'ya bırakmış ama iç idareyi beye bırakmıştı; iki yıl sonra 8 Haziran 1883'te imzalanan Mersâ Sözleşmesi malî ve idarî reformları da Fransız denetimine verdi ve himayeyi tamamladı. Osmanlı Devleti Tunus üzerindeki hükümranlık iddiasını sürdürdü ve işgali hiçbir zaman tanımadı, ama fiilî bir karşı adım atamadı. Böylece 1574'ten beri Osmanlı ocaklığı olan Tunus resmen Fransız himayesine girdi.",
  kaynak:"tunus", duygu:["😔"], yer_id:"Tunus" },

// ---------------------------------------------------------------------------
// N) NAPOLYON'UN MISIR İŞGALİ — md.6
// ---------------------------------------------------------------------------
// Kullanıcı: "Napolyon'un Mısır işgali haritada görünmüyor." Doğru — veride
// 1798-1801 arası HİÇBİR İZ yok; Kahire 1517'den 1805'e kesintisiz `d:`.
// Bu bir İŞGAL, yani `isg:` örtüsü sınıfı: Osmanlı hükümranlığı hukuken sürdü,
// Fransa üç yıl fiilen orada oldu. Örtü önerisi OTURUM-14-DUZELTMELER.md §16.
//
// ⚠️ Oturum 2'nin D-4 kuralı gereği örtünün BAŞI ve SONU maddeli olmak zorunda;
// aşağıdaki 1798-07-01 ve 1801-09-02 maddeleri tam onun için yazıldı.
//
// 🔴 İKİ MADDE YAZILDI, SONRA SİLİNDİ — mükerrer denetimi yakaladı:
//   1798-07-01 "Napolyon'un Mısır'a çıkarması"  ×  olaylar.js    1798-07     (oran 0.60)
//   1801-09-02 "Fransızların Mısır'dan tahliyesi" × olaylar_ek5.js 1801-10-09 (oran 0.60)
// Napolyon devri kronolojide ZATEN vardı (olaylar.js 1798-07 · ek5'te
// 1798-09-03 savaş ilânı · 1799-05-20 Akkâ Savunması · 1801-10-09 tahliye);
// eksik olan HARİTA tarafıydı, kronoloji değil. Yazmadan önce 1798-1801
// aralığını taramamıştım — 1830-1914'ü taramıştım. Aynı hatanın (Fizan) ikinci
// tekrarı: DOSYA ayrı, TARİH UZAYI ORTAK.
// Örtünün iki ucu zaten maddeli olduğu için D-4 kendiliğinden sağlanıyor:
//   başı 1798-07 (+0 gün) · sonu 1801-10-09 (+0 gün)
//
// KALAN İKİ MADDE gerçekten eksikti ve mükerrer değil:
//   1798-07-21 Piramitler — Kahire'nin düşüşü hiçbir yerde yoktu
//   1799-03-18 Akkâ kuşatmasının BAŞLAMASI — ek5'teki 1799-05-20 kuşatmanın
//              PÜSKÜRTÜLMESİ, ayrı olay (63 gün arayla, denetim ayırt etti)
//
// 🔴 KAYNAK DURUMU AÇIKÇA: TDV'nin `kahire` maddesi yalnızca "1798" yılını
// veriyor, gün vermiyor; `aris` maddesi 18 Şubat 1799 (Arîş'in işgali),
// 17 Kasım 1799 (Osmanlıların geri alışı) ve 24 Ocak 1800 (Arîş Antlaşması)
// veriyor ama tahliyeyi "aynı yıl" diye geçiyor — bu tarihen eksiktir, Arîş
// Antlaşması İngiltere'ce reddedildi ve Fransızlar 1801'e kadar kaldı.
// Yalnız Akkâ kuşatmasının günü TDV'de kesin: 18 Mart 1799 (`akka`).
// Piramitler'in günü standart kayıttan alındı ve maddede işaretlendi.

{ t:"1798-07-21", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Piramitler Muharebesi ve Kahire'nin Fransızlarca alınması",
  gun:"21 Temmuz 1798 (gün standart kayıttan)", yer:"Îmbâbe, Giza, Kahire", kisiler:"Napolyon Bonapart, Murad Bey, İbrâhim Bey",
  d:"Napolyon İskenderiye'den Nil boyunca güneye yürüdü ve 21 Temmuz 1798'de Giza karşısındaki Îmbâbe'de Murad Bey'in Kölemen süvarisini karşıladı. Kare düzenindeki Fransız piyadesi süvari hücumlarını kırdı; Kölemen ordusu dağıldı ve Kahire iki gün sonra direnişsiz teslim oldu. Murad Bey Yukarı Mısır'a, İbrâhim Bey Suriye'ye çekildi. Fransızlar Kahire'de bir dîvân kurup idareyi ulemâ eliyle yürütmeye çalıştılar; 1798 Ekiminde ve 1800 Martında iki büyük Kahire ayaklanması çıktı.",
  kaynak:"kahire", duygu:["😔"], yer_id:"Kahire" },

{ t:"1799-03-18", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Napolyon'un Akkâ kuşatması — Suriye seferinin durdurulması",
  gun:"18 Mart 1799", yer:"Akkâ (Acre), Filistin sahili", kisiler:"Napolyon Bonapart, Cezzâr Ahmed Paşa, Sidney Smith",
  d:"Osmanlı'nın Mısır'ı geri almak için hazırladığı kuvvetleri dağıtmak isteyen Napolyon 1799 başında Suriye'ye yürüdü; Arîş'i 18 Şubatta, Yafa'yı martta aldı ve 18 Mart 1799'da Akkâ'yı kuşattı. Cezzâr Ahmed Paşa'nın savunması ve İngiliz amirali Sidney Smith'in denizden desteği kuşatmayı iki ay boyunca kırdı; kuşatma topları denizde ele geçirildiği için surlar aşılamadı. Napolyon mayısta çekildi ve bu yenilgi Fransız işgalinin en uç noktası oldu.", ic_not_d:"Bu tarih atlasta toprak değiştirmez — işgalin sınırını gösterdiği için yazılmıştır.",
  kaynak:"akka", duygu:["😔"], yer_id:"Akkâ" },

// ---------------------------------------------------------------------------
// M) ALÂİYE — Afrika DIŞI, tek istisna
// ---------------------------------------------------------------------------
// ⚠️ Bu madde Anadolu'ya ait; bu dosya Afrika içindir. Petek kilidi sırasında
// merkez oturumun açık bıraktığı Alâiye sorusuna bakıldı ve cevap bir kırılma
// düzeltmesi gerektirdi. Elimdeki tek kronoloji dosyası burası olduğu için
// buraya yazıldı — başka dosyaya taşınması gerekiyorsa taşınabilir.
//
// SORU: Alâiye ayrı bir beylik mi, Karamanoğulları'nın kolu mu?
// CEVAP: ikisi de değil — ÖNCE kol, SONRA Memlük toprağı.
// TDV `alaiye-beyligi` (<title> ✓ CANLI) birebir: "Karaman b. Savcı Bey
// tarafından 1427 yılında 5000 altın karşılığında Memlük Sultanı Barsbay'a
// satıldı." Yani beyliğin son 44 yılı Karamanlı değil MEMLÜK'tür.
//
// Veride bugün `alaiye` dönemi 1471'e kadar sürüyor; 1427'de bitmeli ve araya
// `memluk` girmeli (OTURUM-14-DUZELTMELER.md §14). Bu madde o kırılmayı açar.
//
// ⚠️ 1427-01-01'de ZATEN İKİ MADDE VAR (Tâceddinoğulları'nın ilhakı ·
// Belgrad'ın Macaristan'a bırakılması). Değişmez 2 onlarla +0 gün geçerdi ama
// Alâiye'nin satılışı Niksar'ın ilhakı maddesinin altında belirirdi — §11'deki
// yanlış-eşleşme sınıfı. Mükerrer denetimi bu üçünü ayırt ediyor (ortak kişi ve
// ortak kök yok); yine de uygulamadan önce kontrol edilmeli.

{ t:"1427-01-01", k:"kayip", etiket:["toprak-kayip","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Alâiye'nin Memlük Sultanı Barsbay'a satılması",
  gun:"1427", yer:"Alâiye (Alanya), İçel sahili", yer_id:"Alanya", kisiler:"Karaman b. Savcı Bey, Memlük Sultanı Barsbay",
  d:"1293'te Karamanoğlu Mecdüddin Mahmud Bey'in ele geçirdiği Alâiye, Karamanoğulları'nın bir kolu tarafından yönetilen ayrı bir beylik hâline gelmişti; İbn Battûta 1333'te idarenin Karamanoğlu Yûsuf Bey'de olduğunu kaydeder. Karaman b. Savcı Bey 1427'de şehri beş bin altın karşılığında Memlük Sultanı Barsbay'a sattı ve Alâiye Memlük idaresine girdi. Akdeniz'in bu kilit limanı böylece Osmanlı'nın güneye açılan yolunda Memlük elinde bir engel oldu; 1471'de Gedik Ahmed Paşa kuşatınca son bey Kılıcarslan şehri teslim etti.", ic_not_d:"Günü doğrulanamadığı için yıl hassasiyetinde yazılmıştır.",
  kaynak:"alaiye-beyligi", duygu:["😔"] },

];

;
/* ==== data/olaylar_ek10.js ==== */
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

{ t:"1479-08-01", k:"fetih", etiket:["toprak-kazanc","denizcilik","konu-askeri"],
  b:"İyon adalarının fethi — Tocco düklüğünün sonu: Ayamavra, Kefalonya, Zaklise, İthaki",
  gun:"Ağustos 1479", yer:"Ayamavra (Lefkada), Kefalonya, Zaklise (Zakynthos), İthaki — İyon Denizi", yer_id:"Ayamavra (Lefkada)",
  kisiler:"Fatih Sultan Mehmed, Gedik Ahmed Paşa, Leonardo III Tocco",
  d:"Aynı yılın ocak ayında Venedik'le imzalanan İstanbul Antlaşması İşkodra ve Arnavutluk kıyısını Osmanlı'da bırakmıştı; İyon adaları ise Venedik'in değil, Kefalonya-Zaklise kontluğunu elinde tutan Tocco ailesinin idaresindeydi ve ayrı bir harekâtla alındı. TDV'nin Ayamavra maddesine göre son dük Leonardo Tocco önce Fâtih'in akrabası Milica Brankoviç ile evlenerek sadakatini korumuş, 1464'te eşi ölünce 1477'de Napoli hanedanından Francesca Marzano ile evlenerek padişahı gücendirmişti. İki yıl sonra Avlonya beyi Gedik Ahmed Paşa kumandasındaki donanma Ayamavra'yı güneydeki Kefalonya ile birlikte ele geçirdi; Leonardo ve Francesca İtalya'ya kaçtı. Gedik Ahmed Paşa maddesi aynı harekâtta Zaklise'nin (Zanta) de alındığını kaydeder; Kefalonya kontluğuna bağlı İthaki de bu devirle Osmanlı idaresine girdi. Böylece Adriyatik ağzından Mora'ya uzanan deniz yolu bütünüyle denetim altına alındı. Adalardan Zaklise üç yıl sonra Venedik'e bırakılacak, Kefalonya ile İthaki 1500'de kaybedilecek, yalnız Ayamavra iki yüz yıl Osmanlı'da kalacaktı.",
  fethedilen:["Ayamavra (Lefkada)","Kefalonya","İthaki","Zaklise (Zakynthos)"],
  kaynak:"gedik-ahmed-pasa", duygu:["🎉"] },

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

{ t:"1482-01-01", k:"vassal", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi"],
  b:"Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merkez oluşu",
  gun:"1482", yer:"Cetinje, Lovçen eteği, Karadağ", yer_id:"Cetinje",
  kisiler:"II. Bayezid, İvan Crnojeviç",
  d:"İşkodra'nın 1479'da Osmanlı'da kalmasıyla arka bahçesindeki Zeta dağlık bölgesi de imparatorluğun sınırları içine düştü. Bölgeyi elinde tutan Crnojeviç ailesi, Fâtih'in ölümünden sonra tahta çıkan II. Bayezid'in hükümdarlığını tanıyıp haraca bağlanarak iç işlerinde serbest kaldı; İvan Crnojeviç merkezini ovadan çekip Lovçen dağının eteğindeki Cetinje'ye taşıdı ve şehri kurdu. İki yıl sonra buraya yaptırdığı manastır bölgenin dinî merkezi oldu. Böylece Karadağ, haritada doğrudan Osmanlı toprağı olarak değil, açık tonda bir tâbi bölge olarak belirir. TDV'nin Karadağ maddesi hanedanı ve Cetinje piskoposluğunu anar, hâkimiyetin 1514'te İskender Bey (Crnojeviç soyundan, Osmanlı sarayında yetişmiş) eliyle ayrı bir sancağa dönüştüğünü yazar; 1482 yılı ise TDV'de geçmez, Karadağ tarih yazımının verdiği tarihtir. Coğrafyanın sertliği yüzünden buradaki idare hiçbir zaman ovalardaki gibi sıkı işlemedi.",
  statu_vasal:["Cetinje"], kaybedilen:["Zaklise (Zakynthos)"],
  ic_not_b:"🔴 SINIFLANDIRMA DÜZELTMESİ — 21 Eylül 2026, KRONO-EKSIK-0921, 1.MURAT hükmü M-4953(a). Bu ad `fethedilen:` alanındaydı ve haritada FETİH rengiyle rozet veriyordu; oysa maddenin kendi k: alanı zaten vassal, kendi anlatısı haraca bağlanarak iç işlerinde serbest kaldığını söylüyor ve yerleşim kaydında o gün başlayan kırılma v: (tâbilik) kovasında. Üç tanık da tâbilik diyordu, rozet fetih gösteriyordu — js/app.js:3343ün Yayça vakasıyla aynı sınıf. Kaybedilen alanına DOKUNULMADI.",
  kaynak:"karadag", duygu:["🎌"] },

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

{ t:"1484-07-15", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Kili Kalesi'nin fethi — Tuna ağzının kilidi",
  gun:"15 Temmuz 1484 (20 Cemâziyelâhir 889)", yer:"Kili (Chilia), Tuna deltası, Boğdan sahili", yer_id:"Kili",
  kisiler:"II. Bayezid, Kırım Hanı Mengli Giray, Boğdan Voyvodası Büyük Ştefan",
  d:"Boğdan 1455 eylülünden beri yılda iki bin altın haraç ödeyen tâbi bir voyvodalıktı, ama Karadeniz'e açılan iki limanı hâlâ voyvodanın elindeydi ve Tuna'dan gelen ticaret oradan geçiyordu. II. Bayezid saltanatının ilk büyük seferini bu iki limana yaptı. On gün boyunca gece gündüz topa tutulan Kili Kalesi'nin kumandanı teslim olmak zorunda kaldı. Kale doğrudan Osmanlı idaresine alınıp sancak beyliği haline getirildi; XVI. yüzyılın ikinci yarısında Kazak tehlikesi yüzünden kaza yapılıp Rumeli beylerbeyiliğine bağlı Akkirman sancağına bağlandı. Buradan sonra Boğdan haritada iki kademeli görünür: içeride voyvodalık açık tonda tâbi toprak olarak durur, kıyıdaki iki liman ise koyu tonda doğrudan Osmanlı sancağıdır. TDV'nin Boğdan maddesi bu ikisini 'Boğdan'ın anahtarları ve kapıları' diye anar ve bölgenin II. Bayezid zamanında kesin olarak Osmanlı'ya bağlandığını yazar.",
  fethedilen:["Kili"],
  statu_dogrudan:["Kili"],
  kaynak:"kili", duygu:["🎉"] },

// ---------------------------------------------------------------------------
// B-2) 1484 AKKİRMAN — yirmi gün sonraki ikinci kuşatma
// ---------------------------------------------------------------------------

{ t:"1484-08-04", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Akkirman'ın fethi — Dinyester ağzı ve Boğdan'ın Karadeniz kapısının kapanışı",
  gun:"4 Ağustos 1484", yer:"Akkirman (Cetatea Albă), Dinyester haliç ağzı, Boğdan sahili", yer_id:"Akkirman",
  kisiler:"II. Bayezid, Boğdan Voyvodası Büyük Ştefan",
  d:"Kili'nin tesliminden yirmi gün sonra ordu Dinyester ağzındaki Akkirman'ın önüne geldi ve kale 4 Ağustos'ta alındı. Şehir Boğdan'ın en işlek limanıydı; Fâtih devrinde voyvoda III. Petru 1455'te Osmanlı hâkimiyetini tanıyınca Akkirman tüccarlarına ticaret izni verilmişti, şimdi liman doğrudan devletin oldu. Fetihten sonra Rumeli beylerbeyiliğine bağlı bir sancak haline getirilen Akkirman, 1593'te yeni kurulan Özü eyaletine ilhak edildi. Böylece Boğdan'ın kuzeyden Hotin, güneyden Kili ve Akkirman ile çevrelenen dış kabuğu Osmanlı'nın doğrudan denetimine girmeye başladı; voyvodalık iç işlerinde serbest kaldı ama denize çıkışı kalmadı. Haritada arada boş bir bölge yoktur — koyu tonlu liman sancakları ile açık tonlu voyvodalık toprağı birbirine değer; ikisi arasındaki Bucak bozkırı 1538'e kadar hâlâ voyvodalığın parçasıdır.",
  fethedilen:["Akkirman"],
  statu_dogrudan:["Akkirman"],
  kaynak:"akkirman", duygu:["🎉"] },

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

{ t:"1499-08-26", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"İnebahtı'nın teslimi — Korint körfezinin ağzı Venedik'ten alınıyor",
  gun:"26 Ağustos 1499", yer:"İnebahtı (Lepanto / Naupaktos), Korint körfezi ağzı, Mora", yer_id:"İnebahtı",
  kisiler:"II. Bayezid, Küçük Davud Paşa, Kemal Reis",
  d:"İnebahtı 1407'den beri Venedik'in elindeydi ve Korint körfezinin ağzını tutuyordu; körfezin içindeki bütün kıyı bu kalenin menziline bağlıydı. 1499 seferinde kale karadan kuşatıldı, İnebahtı açıklarında Venedik donanmasıyla çarpışan Osmanlı donanması ise denizden kuşatma kuvvetlerine yardımcı oldu. Kaledeki Venedikliler 26 Ağustos'ta kasabayı Osmanlılar'a teslim ettiler. Şehir bundan sonra yüz seksen sekiz yıl Osmanlı'da kaldı, 1687'de Mora'nın kaybıyla yeniden Venedik'e geçti, 1715'te geri alındı. Aynı yazın deniz muharebesi ile bu teslim iki ayrı olaydır: donanma çarpışması Mora'nın batı ucunda, Sapienza-Zonchio sularında cereyan etti; İnebahtı ise Korint körfezinin ağzında bir kara kuşatmasıyla düştü.",
  fethedilen:["İnebahtı"],
  kaynak:"inebahti", duygu:["🎉"] },

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
//   🔴 PAKET-KRON3 13 Eylül 2026: aşağıdaki 1594-10-05 ve 1594-11-13 "literatürden
//      gün" iddiaları SINANDI ve akademik kaynakta BULUNAMADI → maddeler 1594-08-28
//      (Erdel'in kopuşu, HoT günü) ve 1594-11-01 (kesinlik ay) oldu; gerekçe maddelerin
//      ic_not_gun alanında, rapor denetim/PAKET-KRON3-0913.md. Aşağıdaki eski metin tarihçedir.
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

{ t:"1594-08-28", k:"siyaset", etiket:["isyan","diplomasi","konu-siyasi","konu-diplomasi","konu-isyan"],
  b:"Üç voyvodalığın ayaklanması başlıyor — Erdel Kutsal İttifak'a geçti, Osmanlı yanlısı beyler tutuklandı",
  gun:"28 Ağustos 1594", yer:"Erdel, Eflak ve Boğdan voyvodalıkları",
  ic_not_gun:"PAKET-KRON3 13 Eylül 2026 (1.MURAT M-3870 hükmü): eski t 1594-10-05 ve gun '5 Ekim 1594' KAYNAKSIZDI — PAKET-ISYAN'ın okuduğu TDV eflak/bogdan/erdel ve History of Transylvania I (HoT) s.118'de bu gün yok; bu paket de akademik kaynakta bulamadı (5 Ekim yalnız Vikipedi 'Holy League (1594)' maddesinde geçiyor — KAYNAKSIZ, SİLİNDİ). Madde artık kendi gününü taşıyan olayı, ERDEL'İN KOPUŞUNU anlatır: HoT s.118 — 28 Ağustos 1594'te savaşa karşı çıkan Osmanlı yanlısı muhalefet tutuklandı (gün). Boğdan'ın resmî geçişi A.-M. Crăciun, 'Tratatele lui Sigismund Báthory cu Țara Românească și Moldova (1595)', Crisia LIII (2023): 16 Ağustos 1594 belgesi; Eflak'ın Liga'ya katılışı aynı eserde 'sonbahar', HoT'de Kasım — Eflak/Boğdan'ın açık ayaklanması bir sonraki maddededir (1594-11-01, kesinlik ay). TDV bogdan yalnız '1594'. '28 Ocak 1595 Prag' cümlesi bu pakette SINANMADI.",
  kisiler:"III. Murad, Erdel Prensi Zsigmond Báthory, Eflak Voyvodası Cesur Mihail, Boğdan Voyvodası Aron Vodâ, Papa VIII. Clément, Avusturya Kralı II. Rudolf",
  d:"Uzun Savaş'ın ikinci yılında Osmanlı'nın Orta Avrupa'daki vasal kuşağı bir anda çözüldü. Papa VIII. Clément'in himayesinde kurulan Kutsal İttifak'a yaz sonunda Boğdan ve Erdel geçti: Boğdan Voyvodası Aron Vodâ 16 Ağustos 1594'te hıristiyan tarafına katılışını bir belgeyle resmîleştirdi, Erdel Prensi Zsigmond Báthory de 28 Ağustos 1594'te savaşa karşı çıkan Osmanlı yanlısı beyleri tasfiye ederek içerideki muhalefeti kırdı. Eflak Voyvodası Cesur Mihail aynı yılın sonbaharında ittifaka katıldı. Böylece Osmanlı'nın Tuna'nın kuzeyindeki üç tâbi prensliği — yüz elli yıldır haraç ödeyen, voyvodası İstanbul'ca onaylanan üç voyvodalık — aynı sonbaharda birden karşı tarafa geçti. Karar 28 Ocak 1595'te Prag'da imzalanan antlaşmayla resmîleşti. Bu, Osmanlı'nın Balkanlar'ın kuzeyindeki dolaylı yönetim düzeninin uğradığı en ağır sarsıntıydı; ayaklanma bastırılacak ama üç prensliğin sadakati bir daha 1526-1593 arasındaki kadar sağlam olmayacaktı.",
  kaynak:"bogdan + History of Transylvania I (ed. B. Köpeczi, MTA Tarih Enstitüsü) s.118-119 + A.-M. Crăciun, Crisia LIII (2023)", duygu:["🏛"], kapsam_genis:true, odak_kimlik:["eflak","bogdan","erdel"] },

// ---------------------------------------------------------------------------
// C-2) 1594 KASIM — ayaklanmanın Tuna hattına vurması
// ---------------------------------------------------------------------------

{ t:"1594-11-01", kesinlik:"ay", k:"savas", etiket:["isyan","savas","konu-askeri","konu-isyan"],
  b:"Bükreş ayaklanması ve Tuna kalelerine saldırı — isyanın haritaya vurduğu an",
  gun:"Kasım 1594", yer:"Bükreş, Yergöğü, İbrail, Hırsova, Silistre ve Bender", yer_id:"Bükreş",
  ic_not_gun:"PAKET-KRON3 13 Eylül 2026 (1.MURAT M-3870 hükmü): eski t 1594-11-13 ve gun '13 Kasım 1594' akademik kaynakta BULUNAMADI. History of Transylvania I (HoT) s.118 yalnız 'November' (PAKET-ISYAN okudu); TDV bogdan '1594 yılı sonlarında Yaş ve Bükreş'te … bütün Türk ve Rumlar öldürüldü'; Crăciun, Crisia LIII (2023) Eflak'ın Liga'ya sonbaharda katıldığını yazar, gün vermez. 13 Kasım yalnız Vikipedi ve popüler tarih sitelerinde (historia.ro vb.) geçiyor — KAYNAKSIZ, SİLİNDİ (§4). ⇒ t:1594-11-01 + kesinlik:'ay' (p0037 emsali). §4 pencere şartı: YYYY-01-01 maddeyi isyan taramasının Eflak/Boğdan penceresinden (isy-eflak-1594 · isy-bogdan-1594 f:1594-11-01, kesinlik ay) önceye atardı. data/savaslar.js'in iki ayaklanma kaydı da aynı güne çekildi.",
  kisiler:"Eflak Voyvodası Cesur Mihail, Boğdan Voyvodası Aron Vodâ",
  d:"Kutsal İttifak kararı bir ay sonra kanla uygulandı: Cesur Mihail Bükreş'te Osmanlı muhafız birliğini ve şehirdeki Levanten alacaklıları kılıçtan geçirdi. Ayaklanma aynı kış Tuna hattına yayıldı; Eflak kuvvetleri Yergöğü, İbrail, Hırsova ve Silistre'ye saldırdı, Boğdan tarafında ise Aron Vodâ Bender'deki Osmanlı muhafızlarına aynı baskını yaptı. Vurulan yerlerin seçimi tesadüf değildir: bunların hepsi voyvodalık toprağı değil, Tuna boyunda doğrudan Osmanlı idaresine bağlı kale ve kazalardı — Yergöğü kazası Niğbolu sancak beyliğine, İbrail 1538'den beri doğrudan devlete, Bender yine 1538'den beri Bucak sancağına bağlıydı. Yani isyan, vasal iç bölgeden değil, o bölgeyi çevreleyen doğrudan Osmanlı kabuğuna vurmuştu. Bu kabuk delinmeden Erdel-Eflak-Boğdan üçgeni Habsburg cephesine bağlanamazdı.",
  kaynak:"eflak · bogdan + History of Transylvania I (ed. B. Köpeczi, MTA Tarih Enstitüsü) s.118-119 (Kasım)", duygu:["⚔️","😔"] },

// ---------------------------------------------------------------------------
// C-3) 1595 KALÛGERÂN — bastırma seferi
// ---------------------------------------------------------------------------

{ t:"1595-08-23", k:"savas", etiket:["savas","konu-askeri"],
  b:"Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi",
  gun:"23 Ağustos 1595", yer:"Kalûgerân (Călugăreni), Neajlov bataklığı, Eflak",
  kisiler:"III. Mehmed, Sadrazam Koca Sinan Paşa, Eflak Voyvodası Cesur Mihail",
  d:"Üç voyvodalığın birden elden çıkması üzerine sadrazam Koca Sinan Paşa büyük bir orduyla Tuna'yı geçti ve Eflak'ı yeniden itaat altına almak üzere yürüdü. Cesur Mihail açık savaşta karşı koyamayacağını bildiğinden orduyu Neajlov'un bataklık geçidinde, Kalûgerân'da bekledi ve dar araziye sıkışan kuvvetlere baskın verdi. Baskından sonra sayıca üstün Osmanlı ordusuna karşı duramayarak kuzeye, dağlara çekildi; Sinan Paşa Bükreş ve Târgovişte'yi işgal edip Eflak'ı doğrudan idareye bağlamayı denedi. Kalûgerân bu yüzden Osmanlı için bir yenilgi değil, seferin tamamlanmasını geciktiren bir baskındı; ama Mihail'in ordusunu koruyabilmiş olması, birkaç hafta sonra Erdel'den gelen yardımla karşı taarruza geçmesini mümkün kıldı.",
  kaynak:"eflak", duygu:["⚔️"], yer_kon:[44.2,25.99] },

// ---------------------------------------------------------------------------
// C-4) 1595 EKİM — geri çekilme ve Yergöğü baskını
// ---------------------------------------------------------------------------

{ t:"1595-10-01", k:"savas", etiket:["savas","konu-askeri"],
  b:"Eflak'tan çekiliş ve Yergöğü baskını — bastırma seferinin sonuçsuz kalışı",
  gun:"Ekim 1595", kesinlik:"ay", yer:"Yergöğü (Giurgiu), Tuna'nın Eflak yakası", yer_id:"Yergöğü (Giurgiu)",
  kisiler:"Sadrazam Koca Sinan Paşa, Eflak Voyvodası Cesur Mihail, Erdel Prensi Zsigmond Báthory",
  d:"Erdel prensinin kuvvetleriyle birleşen Cesur Mihail'in karşı taarruzu üzerine Sinan Paşa Târgovişte ve Bükreş'i boşaltıp Tuna'ya çekildi. Çekilişin en pahalı anı geçit başında yaşandı: 1595 ekiminde Eflak'tan dönen orduyu takip eden akıncılar Yergöğü'nde Mihail'in baskınına uğradılar. Sefer böylece Eflak'ı doğrudan idareye bağlama hedefine ulaşamadan bitti ve voyvodalık fiilen elden çıkmış olarak kaldı. Osmanlı otoritesi bu üçgende ancak yıllar içinde ve parça parça onarılabildi; Erdel'in itaate dönüşü 1604'te Bocskai ayaklanmasını, cephenin bütünüyle kapanması ise 1606 Zitvatorok Antlaşması'nı bekleyecekti.", ic_not_d:"(PAKET-KRON3 13 Eylül 2026 güncellemesi — eski not 'harita hâlâ tâbi renkte, veriye işlenmedi' BAYATTI.) Üç voyvodalık haritada bilerek tâbi renginde kalır (Emre C2 kararı); üstüne kaynaklı İSYAN TARAMASI biner: data/isyan_tarama.js (PAKET-ISYAN, ef94ad8) — Eflak 1594-11 → 1600-11-15 · Boğdan 1594-11 → 1595-11 ve 1600-05 → 1601-01-12 · Erdel 1594-08-28 → 1601-08-03, ardından Habsburg idaresi 1605-09-14'e dek. Bu madde o taramaya bağlıdır; açıldığı gün üç voyvodalık da taralı görünür.",
  kaynak:"yergogu", duygu:["⚔️"] },

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

{ t:"1713-06-24", k:"idari", etiket:["toprak-kazanc","idari","konu-askeri","konu-idari"],
  b:"Hotin'in Boğdan'dan koparılması — voyvodalığın ortasında doğrudan Osmanlı sancağı",
  gun:"24 Haziran 1713", yer:"Hotin Kalesi, Dinyester'in sağ yakası, kuzey Boğdan",
  kisiler:"III. Ahmed, Boğdan Voyvodası Dimitrie Cantemir (1711'de Rusya'ya geçen voyvoda), Demirbaş Şarl",
  d:"Prut seferinde Boğdan voyvodası Dimitrie Cantemir'in Rusya tarafına geçmesi, voyvodalığın kuzey sınırının artık voyvodaya bırakılamayacağını gösterdi. Bunun üzerine Hotin 1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı idaresine sokuldu; önce bir nahiye, sonra sancak statüsü verildi. 1713'teki geçici Rus işgalinin ardından kale İstanbul'dan gönderilen Osmanlı ve Fransız teknik heyetinin nezaretinde yeniden tamir edilerek genişletildi ve Tuna'nın kuzeyindeki en güçlü Osmanlı istihkâmı hâline geldi. Haritada bu tarihten sonra Hotin'in tâbi voyvodalık tonundan çıkıp doğrudan Osmanlı rengine dönmesi, ve tâbi Boğdan'ın ortasında yalnız bir ada gibi durması işte bu idarî ayrılmanın karşılığıdır — bir çizim hatası değildir. Aynı yapı Bucak'ta 1538'den, Kili ve Akkirman'da 1484'ten beri zaten vardı: voyvodalık iç işlerinde serbest, sınır kaleleri devletin.",
  statu_dogrudan:["Hotin"],
  kaynak:"hotin", duygu:["📋"], yer_id:"Hotin" },

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
//                  ✓ 13 Eylül 2026 (KART-MADDE-CELISKI-0913): emekli edildi, 1912-10-08 ile birleştirildi
//    İkisi de ay hassasiyetli; CLAUDE.md §8 gün yazılmasını şart koşuyor ve ayın
//    1'ine genişleyip gün hassasiyetli yerleşim değişimlerinden ÖNCE sıralanıyorlar.
//
// Kaynak: TDV `doksanuc-harbi` ve `balkan-savasi` — ikisi de `<title>` ile canlı
// doğrulandı (31 Temmuz 2026).

// --- md.38·39 — 93 Harbi'ne giden yol ve safhaları ------------------------

{ t:"1877-04-24", k:"savas", etiket:["savas","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması",
  gun:"24 Nisan 1877", yer:"Tuna ve Doğu Anadolu cepheleri",
  kisiler:"II. Abdülhamid, Serdârıekrem Abdülkerim Nâdir Paşa, Ahmed Muhtar Paşa, Grandük Nikola",
  d:"1876 Bulgar İsyanı'nın bastırılışı Avrupa kamuoyunda büyük infial uyandırmış, Rusya bunu Bâbıâli'yi yalnızlaştırmak için sonuna kadar kullanmıştı. İstanbul (Tersane) Konferansı'nın Bulgaristan'ı iki muhtar eyalete bölme teklifi ve ardından 31 Mart 1877 tarihli Londra Protokolü Osmanlı Devleti tarafından reddedilince Rusya 24 Nisan 1877'de savaş ilân etti. Rûmî takvimde 1293 yılına rastladığı için savaş Doksanüç Harbi adıyla anılır. Harekât Tuna ve Doğu Anadolu olmak üzere iki cephede yürüdü: Tuna'da 180.000 kişilik Osmanlı ordusu nehrin sol kıyısını birinci, Balkan dağlarını ikinci savunma hattı saymıştı; doğuda Ahmed Muhtar Paşa'nın 55.000 askeri Ardahan-Doğubayazıt arasında mevzilenmişti. Bu savaş haritada Osmanlı Rumelisi'nin çöküşünü başlatan olaydır — Bulgaristan, Sırbistan, Karadağ ve Romanya'nın bugünkü sınırlarının hepsi bu on beş ayın ürünüdür.",
  kaynak:"doksanuc-harbi", duygu:["⚔️"], kapsam_genis:true, yer_kon:[47.0105,28.8638] },

{ t:"1877-05-09", k:"kayip", etiket:["toprak-kayip","siyaset","konu-siyasi","konu-askeri"],
  b:"Romanya'nın bağımsızlığını ilân etmesi — Eflak-Boğdan tâbiliğinin sonu",
  gun:"9 Mayıs 1877", yer:"Bükreş", yer_id:"Bükreş", kisiler:"Prens I. Carol",
  d:"93 Harbi'nin ilânından iki hafta sonra Romanya Prensliği bağımsızlığını ilân etti ve savaşa Rusya'nın yanında girdi; Plevne kuşatmasındaki payı Osmanlı yenilgisinde belirleyici oldu. Dört yüz yılı aşkın Eflak ve Boğdan tâbiliği böylece fiilen sona erdi; bağımsızlık Berlin Kongresi'nde (1878) uluslararası tanıma kazandı. Harita bu tarihten itibaren Romanya'yı tâbi değil kendi rengiyle bağımsız devlet olarak gösterir.",
  kaynak:"romanya", duygu:["😔"] },
  // PAKET-0076-BITIR-1004 · 0076/H-0037 — TDV romanya: "9 Mayıs 1877 tarihinde bağımsızlığını ilân etti" (taslak: denetim/SINIR-CIZGI-0076-YAMA-olaylar.js ①)

{ t:"1832-01-01", k:"kayip", etiket:["toprak-kayip","diplomasi","konu-diplomasi"],
  b:"İzdin (Lamia) Yunanistan sınırları içinde kaldı — Arta-Volos hattı",
  gun:"1832", yer:"İzdin (Lamia)", yer_id:"İzdin (Lamia)",
  d:"Bağımsız Yunan devletinin kuzey sınırı 1832'de Arta körfezinden Volos körfezine uzanan hatta çizildi. Osmanlı döneminde (1424-1832) Eğriboz sancağına bağlı bir kaza merkezi olan İzdin, bu hattın güneyinde kaldığı için Yunanistan'a geçti; Tesalya'nın geri kalanı (Yenişehir, Tırhala) 1881'e kadar Osmanlı'da kaldı.",
  kaynak:"izdin", duygu:["😔"] },
  // PAKET-0076-BITIR-1004 · 0076/H-0045 — TDV izdin (M. Kiel): "Osmanlılar zamanında (1424-1832)" · "1832'de Yunanlılar bağımsız bir devlet olarak ortaya çıktıktan sonra İzdin bu devletin sınırları içinde kaldı". Gün kaynakta YOK ⇒ YYYY-01-01 (D210).

{ t:"1877-06-27", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Rus ordusunun Tuna'yı geçmesi — Ziştovi ve Tırnova'nın düşüşü",
  gun:"27 Haziran 1877", yer:"Ziştovi (Sviştov), Tuna'nın sağ yakası",
  kisiler:"Grandük Nikola, Abdülkerim Nâdir Paşa",
  d:"Savaşın başlamasıyla Romanya topraklarına giren ve bu prensliği kendi tarafına çeken Ruslar, biri Dobruca diğeri Bükreş istikametinde olmak üzere iki koldan ilerledi. Tuna, Rusçuk ile Niğbolu arasından geçildi ve 27 Haziran'da Ziştovi, 1 Temmuz'da eski Bulgar başşehri Tırnova ele geçirildi. Tahliyesi emredildiği halde bu hususa itina gösterilmediği için Niğbolu da bir müddet direndikten sonra teslim oldu. Birinci savunma hattının bir hafta içinde yarılması İstanbul'da büyük paniğe yol açtı; saltanat merkezinin Bursa'ya nakledileceğine dair haberler bile yayıldı ve savaşın idaresi başşehirde kurulan bir askerî meclise devredildi.",
  kaynak:"doksanuc-harbi", duygu:["😔"], yer_kon:[43.62,25.35] },

{ t:"1877-07-19", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Şıpka Geçidi'nin tahliyesi — Balkan hattının yarılması",
  gun:"19 Temmuz 1877", yer:"Şıpka Geçidi, Balkan (Stara Planina) dağları",
  kisiler:"General Gurko, Süleyman Paşa",
  d:"Balkan dağlarını aşan geçitlerin en stratejiği olan Şıpka'daki Osmanlı kuvvetleri Rus saldırılarına şiddetle karşı koydular; ancak yenileceklerine kanaat getirince 19 Temmuz'da geçidi gizlice tahliye ettiler. Böylece ikinci savunma hattı da açıldı ve General Gurko 22 Temmuz'da Eski Zağra'yı ele geçirdi. Karadağ tarafından yetişen Süleyman Paşa Gurko'yu yenilgiye uğratıp Balkanların güneyindeki işgal altındaki yerleri geri aldıysa da 21 Ağustos'tan itibaren aylarca süren taarruzlara rağmen Şıpka'yı geri alamadı. Haritada bu, Balkan sıradağlarının kuzeyi ile güneyi arasındaki savunma bütünlüğünün bir daha kurulamamasıdır: Tuna cephesindeki mücadele bundan sonra Plevne'de düğümlenecektir.",
  kaynak:"doksanuc-harbi", duygu:["😔"], yer_kon:[42.75,25.33] },

{ t:"1877-11-18", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları",
  gun:"18 Kasım 1877", yer:"Kars Kalesi ve Erzurum-Aziziye tabyaları",
  kisiler:"Ahmed Muhtar Paşa, General Melikof, General Lazarof, Nene Hatun",
  d:"Doğu Anadolu'da Kars, Doğubayazıt ve Ardahan'a doğru üç koldan ilerleyen Ruslar 30 Nisan'da Doğubayazıt'ı almış, Ardahan'a girmiş, fakat Erzurum üzerine yürürken 15 Temmuz'da mağlûp edilerek sınır dışına atılmışlardı. Ahmed Muhtar Paşa'ya \"Gazi\" unvanını kazandıran bu başarı ağustosta General Lazarof'un yeniden taarruza geçmesiyle tersine döndü ve 18 Kasım'da Kars düştü. Daha uygun bir savunma için Erzurum'a çekilen Osmanlı kuvvetleri Aziziye tabyalarında, Nene Hatun'un ahaliyi teşvikiyle büyük bir mukavemet gösterdi. Kars, Ardahan ve Batum sekiz ay sonra Berlin'de harp tazminatının bir kısmına karşılık Rusya'ya bırakılacaktır.",
  kaynak:"doksanuc-harbi", duygu:["😔"], yer_id:"Kars" },

// --- md.46-49 — Ayastefanos'tan Berlin'e ----------------------------------

// --- md.57·58 — Balkan savaşları -----------------------------------------

{ t:"1912-10-08", k:"savas", etiket:["savas","ittifak","toprak-kayip","konu-askeri","konu-diplomasi"],
  b:"I. Balkan Savaşı'nın başlaması — Karadağ'ın savaş ilânı",
  gun:"8 Ekim 1912", yer:"Arnavutluk ve Yenipazar sancağı",
  kisiler:"Karadağ Kralı Nikola, Sadrazam Gazi Ahmed Muhtar Paşa, Hariciye Nâzırı Noradungiyan Efendi",
  d:"Balkan devletleri, İttihat ve Terakkî'nin 3 Temmuz 1911 tarihli kanunla kiliseler meselesini çözmesinin ardından aralarındaki en büyük engeli kaldırmış, Rusya'nın kışkırtmasıyla 1912 boyunca birbirleriyle ittifak antlaşmaları imzalamışlardı (13 Mart'ta Bulgaristan-Yunanistan, ağustosta Karadağ-Bulgaristan, 6 Ekim'de Karadağ-Sırbistan). Bâbıâli bunu farketmedi; hatta Rusya'nın teminatına güvenerek Rumeli'deki 120 tâlimli taburu terhis etti. Dört devlet 3 Ekim'de ortak nota vererek Makedonya, Arnavutluk ve Girit'e muhtariyet istedi; cevap alamayınca 8 Ekim 1912'de Karadağ'ın savaş ilânıyla harekât başladı. 13 Ekim'de Sırbistan ve Bulgaristan elçilerinin pasaportları ellerine verildi, ertesi gün bu iki devlet, ardından Yunanistan savaş ilân etti. Savaş sırasında ordu içindeki siyasî görüş ayrılıkları yenilgide büyük rol oynadı.", ic_not_d:"13 Eylül 2026 · KART-MADDE-CELISKI-0913 — BİRLEŞTİRME: olaylar.js'teki ay hassasiyetli `1912-10` 'Balkan Savaşları başladı' maddesi AYNI olayın mükerreriydi (kendi gun'u '8 Ekim 1912 (Karadağ'ın savaş ilanı)' diyordu; denetle.py önek ölçütü de bu çifti gerçek mükerrer diye listelemişti). O madde SİLİNDİ, bu madde tek kayıt. TAŞINAN: etiket `toprak-kayip`; son cümle — TDV `balkan-savasi`: 'Savaş sırasında ordu içindeki siyasî görüş ayrılıkları yenilgide büyük rol oynadı.' Çatalca çekilişi 1912-10-23 maddesinde, Edirne'nin geri alınışı olaylar_ek.js 1913-07-21 maddesinde zaten var. TAŞINMAYAN — bulunamadı: eski maddenin kaynağı `balkan` ÖLÜ slug (302); 'seferberliğini tamamlayamayan ordu', 'yüz binlerce muhacir İstanbul'a aktı', kisiler 'Nâzım Paşa' `balkan-savasi` gövdesinde geçmiyor. Kaybolmasın diye eski metin aynen: «Karadağ'ın savaş ilanını Bulgaristan, Sırbistan ve Yunanistan izledi; seferberliğini tamamlayamayan ve siyasî çekişmelerle bölünmüş Osmanlı ordusu birkaç hafta içinde Rumeli'yi kaybetti, ordu Çatalca hattına çekildi ve yüz binlerce muhacir İstanbul'a aktı. Müttefiklerin ganimet kavgasına dönüşen II. Balkan Savaşı'nda (Temmuz 1913) Edirne ve Doğu Trakya geri alındı; ama beş asırlık Rumeli, birkaç ayda elden çıkmıştı.» Eski maddede `kapsam_genis:true` vardı; bu madde yer_yama ile Yenipazar'a bağlı, bayrak taşınmadı. İZ: yer_yama.js'teki {dosya:olaylar.js, t:1912-10} kaydı artık karşılıksız.",
  kaynak:"balkan-savasi", duygu:["⚔️"], yer_id:"Yenipazar (Novi Pazar)" },

{ t:"1912-10-23", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Şark Ordusu'nun bozgunu ve Çatalca hattına çekiliş — Kumanova ve Selânik'in kaybı", odak_yer:["Çatalca","Selanik"],
  gun:"23 Ekim 1912", yer:"Doğu Trakya (Çatalca hattı), Kumanova, Selânik",
  kisiler:"Tahsin Paşa, Gazi Ahmed Muhtar Paşa, Kâmil Paşa",
  d:"Osmanlı Şark Ordusu 23 Ekim 1912'de kendisinden üç kat kalabalık Bulgar ordusuna yenilerek İstanbul'un otuz kilometre batısındaki Çatalca hattına kadar çekildi; başşehir savaşın ilk ayında doğrudan tehdit altına girdi. Aynı günlerde Garp Ordusu 23-24 Ekim'de Kumanova'da Sırplar'a yenildi ve Tahsin Paşa 35.000 kişilik ordusuyla Selânik'te Yunanlılar'a teslim oldu. Bu bozgunlar üzerine 29 Ekim'de Gazi Ahmed Muhtar Paşa kabinesi istifa etti; Selânik'te sürgün hayatı süren II. Abdülhamid 1 Kasım'da İstanbul'a nakledildi. Çatalca hattı savaşın sonuna kadar tutuldu — Rumeli'nin beş yüz yıllık Osmanlı coğrafyası birkaç hafta içinde bu dar şeride indi.",
  kaynak:"balkan-savasi", duygu:["😔"], kapsam_genis:true },

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

{ t:"1476-02-01", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Böğürdelen'in Macarlara kaybı — Sava hattındaki ilk gedik",
  gun:"Şubat 1476", yer:"Böğürdelen (Šabac), Sava nehri kıyısı", yer_id:"Böğürdelen (Šabac)",
  kisiler:"Fatih Sultan Mehmed, Macar Kralı Mátyás Corvin",
  d:"Fâtih Sultan Mehmed zamanında Osmanlı eline geçen ve daha önce Zaslon adıyla anılan mevkide 1471'de ahşap ve topraktan bir hisar yapılmıştı. Belgrad'ı tehdit eden bir noktada bulunduğu ve buradan Macaristan ile Avusturya'nın güney bölgelerine kolayca akın yapılabildiği için kale, adını da bu işlevden alıyordu — Böğürdelen, \"yandan vuran tabya\" demektir. Macar Kralı Mátyás Corvin 1475 sonlarına doğru kaleyi kuşattı ve 1476 şubatında ele geçirdi. Kuşatmayı anlatan Szabács viadala adlı Macar destanı, XV. yüzyıl Macar tarih şiirlerinin metni günümüze ulaşan en uzun örneklerindendir. Macarlar bölgede bir banlık kurdu ve kaleyi taştan yeniden tahkim ederek serhad hisar zincirinin halkası yaptılar. Osmanlılar 1492'de geri almayı denediler ve başaramadılar; kale kırk beş yıl Macar elinde kaldı.",
  kaybedilen:["Böğürdelen (Šabac)"],
  kaynak:"bogurdelen", duygu:["😔"] },

{ t:"1521-07-07", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Böğürdelen'in fethi — Kanûnî'nin aldığı ilk kale ve Belgrad kararının verildiği yer",
  gun:"7 Temmuz 1521", yer:"Böğürdelen (Šabac), Sava nehri kıyısı", yer_id:"Böğürdelen (Šabac)",
  kisiler:"Kanûnî Sultan Süleyman, Rumeli Beylerbeyi Ahmed Paşa",
  d:"Kanûnî Sultan Süleyman'ın birinci Macaristan seferinde bölgeye gönderilen Rumeli Beylerbeyi Ahmed Paşa'nın kuvvetleri, şiddetli bir kuşatmanın ardından kaleyi 7 Temmuz 1521'de aldı. Böğürdelen, Kanûnî'nin saltanatında fethedilen ilk kaledir. Padişah fetihten sonra bizzat kaleye girdi ve şehrin imarını emretti; Belgrad'ın fethine dair kararlar da burada alındı — yani 29 Ağustos 1521'de düşecek olan Belgrad'ın planı Böğürdelen'de yapıldı. Kale bundan sonra iki yüz yıla yakın Osmanlı elinde kaldı; önce Rumeli, 1580'den itibaren Bosna eyaletine, ardından kısa süre Semendire ve nihayet İzvornik sancağına bağlandı. Haritada bu tarih Sava hattının Osmanlı lehine kapandığı gündür.",
  fethedilen:["Böğürdelen (Šabac)"],
  kaynak:"bogurdelen", duygu:["🎉"] },

{ t:"1788-04-24", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Böğürdelen'in ikinci Avusturya işgali — Sava cephesinin açılması",
  gun:"24 Nisan 1788", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"I. Abdülhamid, Avusturya İmparatoru II. Joseph",
  d:"Avusturya'nın 9 Şubat 1788'de Rusya'nın yanında savaşa girmesinin ardından Sava hattı yeniden cephe oldu ve Böğürdelen 24 Nisan 1788'de Avusturya hâkimiyetine geçti. Kale daha önce 17 Ağustos 1717'de savaşsız olarak Avusturya'ya terkedilmiş ve Belgrad Antlaşması'na (1739) kadar elde tutulmuştu; o dönemde nüfusu öylesine azalmıştı ki şehirde otuz dört hıristiyan evi kalmış, hiç müslüman kalmamıştı. 1739-1788 arasındaki Osmanlı devrinde nüfus yeniden 1500-2000'e çıkmıştı. İkinci işgal Ziştovi Antlaşması'yla (4 Ağustos 1791) sona erecek ve kale Osmanlılar'a iade edilecekti.",
  kaybedilen:["Böğürdelen (Šabac)"],
  kaynak:"bogurdelen", duygu:["😔"], yer_id:"Böğürdelen (Šabac)" },

{ t:"1806-01-26", k:"kayip", etiket:["toprak-kayip","isyan","konu-askeri","konu-isyan"],
  b:"Böğürdelen'in Kara Yorgi'ye teslimi — Birinci Sırp İsyanı'nda ilk kale",
  gun:"26 Ocak 1806", yer:"Böğürdelen (Šabac), Sava nehri kıyısı",
  kisiler:"III. Selim, Karadjordje (Kara Yorgi) Petroviç",
  d:"1804'te Belgrad'daki dayı ve yamakların baskısına tepki olarak başlayan, sonra milliyetçi bir karakter kazanan ilk Sırp ihtilâli sırasında Böğürdelen Kalesi 26 Ocak 1806'da Kara Yorgi'ye teslim edildi. Sava üzerindeki bu kale, isyancıların ele geçirdiği ilk büyük Osmanlı istihkâmıdır ve Belgrad'ın düşüşünü haber verir. İsyan 1813'te bastırılıp Belgrad geri alınınca kale de Osmanlı idaresine döndü; ancak 1830 fermanının garnizon şartıyla Böğürdelen, Belgrad, Semendire ve Fethülislâm ile birlikte özerk Sırbistan'ın içinde Osmanlı askerinin kaldığı dört kaleden biri olarak tanımlandı ve 1867'de garnizonu çekilene kadar bu statüde kaldı.",
  kaybedilen:["Böğürdelen (Šabac)"],
  kaynak:"bogurdelen", duygu:["😔"], yer_id:"Böğürdelen (Šabac)" },

{ t:"1457-01-01", k:"fetih", etiket:["toprak-kazanc","idari","konu-askeri","konu-idari"],
  b:"Podgorica'nın Osmanlı topraklarına katılması — Zeta ovasının denetim altına alınması",
  gun:"1457", yer:"Podgorica (Ribnica), Morača ile Ribnica'nın kavuştuğu yer, Zeta ovası", yer_id:"Podgorica",
  kisiler:"Fatih Sultan Mehmed",
  d:"İşkodra gölünün yirmi kilometre kuzeyinde, Morača ile Ribnica sularının birleştiği ovada kurulu kasaba kaynaklarda ilk defa 1216'da Ribnica, 1326'da Podgorica adıyla anılır. 1457'de Osmanlı topraklarına katıldı ve Zeta ovasının denetimi böylece Balšić-Crnojević hânedanlarının elinden çıktı. Fâtih Sultan Mehmed 1474-1478 yılları arasında iki nehrin kavşağındaki sarp kayalıklara bir kale ile cami inşa ettirdi; 1479'da İşkodra'nın fethinden sonra bölge yeni kurulan İşkodra sancağına bağlandı. 1485 tahririnde kırk hânelik hıristiyan bir kasaba olan Podgorica, 1529-30'da 800 kişiye ve kale içinde bir dizdarın emrindeki otuz iki kişilik garnizona, 1582'de 322 hâneye ulaştı. Evliya Çelebi 1662'de Fâtih Kalesi'nde üç yüz ev, ambarlar, cebehâneler ve yedi yüz muhafız saydı. Bu kayıtlar Zeta'nın ovası ile dağı arasındaki farkı da gösterir: ova sayılan, vergilendirilen ve garnizonlu bir Osmanlı kazasıdır — oysa XVIII. yüzyılda şehir, Karadağ dağlarındaki aşiretlerin baskınlarını önlemek için altı tabya ve üç kapılı surlarla tahkim edilmek zorunda kalacaktır. Podgorica 1876-1878 savaşının sonlarında Karadağ'ın eline geçti ve Berlin Antlaşması'yla orada kaldı.",
  fethedilen:["Podgorica"],
  kaynak:"podgorica", duygu:["🎉"] },

{ t:"1448-01-01", k:"fetih", etiket:["toprak-kazanc","idari","konu-askeri","konu-idari","konu-imar"],
  b:"Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun kurulması",
  gun:"1448", yer:"Hodidjed, Saray ovası (Vrhbosna), orta Bosna",
  kisiler:"II. Murad, Üsküp beyi İshak Bey, oğlu Îsâ Bey",
  d:"Bosna kralları 1428-1429'da haraca bağlandıktan sonra Osmanlılar krallığın içine doğru kalıcı biçimde yerleşmeye başladı. 1428-1435 arasında Hodidjed kasabası alındı; 852'de (1448) Hodidjed vilâyeti Saray ovasıyla birlikte tamamen Osmanlı idaresine girdi. Bu, Bosna'nın fethinden on beş yıl önce krallığın ortasında kurulmuş bir uç sahasıdır ve voyvoda unvanı taşıyan Üsküp beyi Îsâ Bey tarafından idare edilmiştir — çevresinde hâlâ Osmanlı'ya tâbi Bosna beyleri bulunduğu için bölge çift taraflı denetim altındaydı. Şehrin kendisi de bu dönemde doğdu: 1462'den önce İshak Bey ya da oğlu Îsâ Bey ilk müslüman mahallesini kurdu, 862'de (1458) Fâtih adına Hünkâr Camii yapıldı ve Brodec köyünün ekinliği imar edilerek Saray kasabası ortaya çıktı. 1463'teki fetih Bosna Krallığı'nı ortadan kaldırdı; Saray ovası ise o tarihte zaten on beş yıldır Osmanlı toprağıydı.",
  fethedilen:["Saraybosna"],
  kaynak:"saraybosna", duygu:["🎉"], yer_id:"Saraybosna" },

{ t:"1465-01-01", k:"fetih", etiket:["toprak-kazanc","idari","konu-askeri","konu-idari"],
  b:"Foça'nın alınışı — Hersek Düklüğü'ne ilk girişin açılması",
  gun:"1465", yer:"Foça (Foča), Drina vadisi, Hersek", yer_id:"Foça (Foča)",
  kisiler:"Fatih Sultan Mehmed, Hersek Dükü Stjepan Vukçiç-Kosaça",
  d:"Bosna Krallığı 1463'te ortadan kaldırıldıktan sonra sıra, krallıktan ayrılıp kendi düklüğünü kuran Stjepan Vukçiç-Kosaça'nın topraklarına geldi. Drina vadisinde, İstanbul'u Dubrovnik'e bağlayan ticaret yolunun kavşağında bulunan Foça 1465'te Osmanlı idaresine girdi. Şehrin önemi hemen anlaşıldı: 1470'te yeni teşkil edilen Hersek sancağının merkezi yapıldı — yani Hersek'in idarî çekirdeği, düklüğün kendisi daha yıkılmadan Foça'da kuruldu. Düklüğün tamamının ilhakı 1483'e kadar sürecekti. Foça bundan sonra elverişli iklimi ve yol kavşağındaki konumu sayesinde bir ticaret ve idare merkezi olarak gelişti. Haritada bu tarih, Bosna'nın fethinden sonra güneye doğru ikinci dalganın başladığı gündür.",
  fethedilen:["Foça (Foča)"],
  kaynak:"foca", duygu:["🎉"] },

{ t:"1469-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Livno ve batı Bosna'nın kesin ilhakı — Venedik sınırının kurulması",
  gun:"1468-1469", ic_not_gun:"(TDV kesin gün vermiyor)", yer:"Livno (İhlevne), Livno ovası, batı Bosna", yer_id:"Livno (İhlevne)",
  kisiler:"Fatih Sultan Mehmed, Ivaniš Vlatković",
  d:"Livno ovasına hâkim plato üzerindeki kale, 1448-1454 arasında Hersek Düklüğü'nün kurucusu Stjepan Vukçiç-Kosaça'nın elindeydi. 1463 Bosna seferinde kısa bir süre Osmanlı kuvvetlerince işgal edilmiş, ancak aynı yıl geri alınmıştı; 1466'da şehrin hâkimi Ivaniš Vlatković'tir. TDV'nin ifadesiyle kesin Osmanlı hâkimiyeti büyük bir ihtimalle 1468-1469'da gerçekleşti ve 1485 tahriri Livno'yu artık Osmanlı toprağı olarak kaydeder. Bu, Bosna fethinin batı ucunun kapanmasıdır: Livno, düz ova boyunca yalnız otuz altı kilometre ötedeki Venedik topraklarına komşu, tehlikeli bir sınır kasabası hâline geldi ve bu konumunu 1521-1522'de Bosna Valisi Gazi Hüsrev Bey'in Venedik kalelerini almasına kadar korudu.",
  fethedilen:["Livno (İhlevne)"],
  kaynak:"livno", duygu:["🎉"] },

{ t:"1512-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Srebrenik banatlığının ilhakı — kuzey Bosna'da Macar hattının ilk kırılması",
  gun:"1512", yer:"Srebrenik, kuzeydoğu Bosna", yer_id:"Srebrenik",
  kisiler:"II. Bayezid",
  d:"Bosna Krallığı 1463'te yıkıldıktan sonra Mátyás Corvin karşı taarruza geçmiş ve krallığın kuzeyinde Osmanlı ilerleyişini durduran iki banatlık kurmuştu: batıda Yayça, kuzeydoğuda Srebrenik. Bunlar Macaristan'ın Bosna'daki ileri savunma hattıydı ve Sava ile Bosna arasındaki koridoru kapatıyorlardı. Srebrenik banatlığı 1512'de ele geçirildi; böylece hattın doğu kanadı çöktü ve İzvornik sancağı kuzeye doğru genişleyebildi. Batı kanadındaki Yayça ise on altı yıl daha dayanacak, ancak Mohaç'tan sonra 1528'de alınabilecekti.", ic_not_d:"⚠️ Srebrenik, Drina üzerindeki Srebrenica ile karıştırılmamalıdır; ikisi ayrı yerlerdir.",
  fethedilen:["Srebrenik"],
  kaynak:"bosna-hersek", duygu:["🎉"] },

{ t:"1402-07-28", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Ankara bozgununun ardından Eflak Voyvodası Mircea Dobruca'yı yeniden aldı — Silistre, Köstence, Babadağı, İshakçı",
  gun:"1402 (Ankara Savaşı'nın ardından; gün kaynakta yok)", yer:"Dobruca (Silistre, Köstence, Babadağı, İshakçı)", yer_id:"Silistre",
  kisiler:"Eflak Voyvodası I. Mircea",
  d:"Yıldırım Bayezid'in Ankara'da Timur'a yenilmesi Tuna boyundaki Osmanlı hâkimiyetini sarstı. Eflak Voyvodası Mircea bu boşluktan yararlanarak Dobruca'ya yeniden girdi; Silistre, Köstence, Babadağı çevresi ve Tuna kıyısındaki İshakçı Fetret yılları boyunca onun elinde kaldı. Mircea, Çelebi Mehmed'e karşı Mûsâ Çelebi'yi destekledi. Silistre'yi 1418'deki ölümüne kadar tuttu.",
  kaynak:"silistre", duygu:["😔"] },
  // PAKET-0076-DOBRUCA-1004 (A) — TDV silistre: "Ankara Savaşı'nda (1402) … Mircea Silistre'yi tekrar aldı ve 1418'de ölümüne kadar elinde tuttu" · TDV kostence: "1402'de Mircea buraya hâkim olmuşsa da" · TDV dobruca: "Mircea Ankara Savaşı'ndan sonraki karışıklıklar sırasında tekrar Dobruca'ya girmiş". Gün = Ankara günü (TDV olayı Ankara'ya bağlıyor; Mircea'nın giriş günü BULUNAMADI).

{ t:"1416-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Babadağı ve çevresinin Osmanlı'ya geçişi — Mircea ile oğlu Mihail yenildi",
  gun:"819 (1416)", yer:"Babadağı (Babadag)", yer_id:"Babadağı (Babadag)",
  kisiler:"Çelebi Sultan Mehmed, Eflak Voyvodası I. Mircea, Mihail",
  d:"Çelebi Mehmed, Eflak Voyvodası Mircea ile oğlu Mihail'i yendikten sonra Kuzey Dobruca'daki Babadağı ve çevresini Osmanlı hâkimiyetine aldı. Babadağı, Saltuk Baba'nın adını taşıyan ve XIII. yüzyıl Türkmen yerleşimiyle kurulan bir kasabaydı.",
  kaynak:"babadagi", duygu:["🎉"] },
  // PAKET-0076-DOBRUCA-1004 (A) — TDV babadagi: "Babadağı ve çevresi, Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea ile oğlu Mihail'i mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)". Gün kaynakta YOK ⇒ YYYY-01-01 (D210).

{ t:"1419-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Silistre ve Dobruca'nın geri alınışı — Mircea'nın ölümünden sonra",
  gun:"822 (1419) ilkbaharı", yer:"Silistre, Köstence, İshakçı, Dobruca", yer_id:"Silistre",
  kisiler:"Çelebi Sultan Mehmed",
  d:"Eflak Voyvodası Mircea'nın 1418'de ölmesinin ardından Eflak'ta çıkan karışıklık, Çelebi Sultan Mehmed'e Silistre'yi ve Dobruca'yı geri alma fırsatı verdi. 1419 ilkbaharında Silistre, Köstence ve Dobruca'nın büyük kısmı yeniden Osmanlı idaresine girdi; Enisala (Yenisale) ile İshakçı kaleleri onarılıp sınır kalesi (serhat) yapıldı; Dobruca bundan sonra 1878'e kadar Osmanlı'da kaldı.",
  kaynak:"silistre", duygu:["🎉"] },
  // PAKET-0076-DOBRUCA-1004 (A) — TDV silistre: "822 (1419) ilkbaharında Çelebi Sultan Mehmed'in Silistre'yi ve bütün Dobruca'yı tekrar almasına fırsat tanıdı" · TDV kostence: "Osmanlılar 1419'da Constanta ile beraber" · TDV tulca: "1419'da Dobruca Osmanlı toprakları içine alındı". Mevsim ⇒ YIL (D210). · İsakçı (PAKET-0076-ISHAKCI-1004): Stănică 2016 s. 4 — Enisala ve Isaccea 'become serhat … repaired and fortified by order of Sultan Mehmed I' (1419 ya da 1420 ilkbaharı okuması).

{ t:"1420-01-01", k:"fetih", etiket:["toprak-kazanc","idari","konu-askeri","konu-idari"],
  b:"Aşağı Tuna'nın kapanması — Yergöğü, Turnu ve Orşova'nın ilhakı",
  gun:"1420", yer:"Yergöğü (Giurgiu), Turnu (Kule), Orşova (Fethülislâm)", yer_id:"Yergöğü (Giurgiu)",
  kisiler:"Çelebi Sultan Mehmed, Eflak Voyvodası I. Mircea (ö. 1418)",
  d:"Fetret devri kapandıktan sonra Çelebi Mehmed'in Tuna hattını düzene sokma hamlesi 1420'de meyvesini verdi. Eflak Voyvodası Koca Mircea'nın kendi toprağı üzerinde, masrafını tuz satışıyla karşılayarak yaptırdığı Yergöğü Kalesi bu yıl Osmanlı eline geçti (Dobruca bir yıl önce, 1419 ilkbaharında geri alınmıştı — TDV silistre) ve Tuna'nın sağ kıyısındaki Turnu (Kule/Holovnik) ile Orşova — sonraki adıyla Fethülislâm — ilhak edildi. Böylece nehrin iki yakası birden denetim altına alınmış oldu. Yergöğü'nün önemi coğrafyasındandır: Tuna'nın sol, yani Eflak yakasında kurulmuş bir Osmanlı kalesidir ve karşı kıyıdaki Rusçuk ile aynı geçidin iki ucunu tutar. Osmanlı belgeleri bu ikiliği açıkça yazar — Rusçuk için 'Yergöğü beri yaka', Giurgiu için 'Yergöğü öte yaka' denir. Kale 1427'de Eflaklılar tarafından geri alınacak, 1449'da tekrar Osmanlı denetimine girecek ve Yergöğü kazası Niğbolu sancağına bağlanarak voyvodalık içinde doğrudan idare edilen bir ada hâline gelecekti. Haritada Eflak'ın Tuna boyunun neden koyu renk olduğunun cevabı burada başlar.",
  fethedilen:["Yergöğü (Giurgiu)"],
  kaynak:"yergogu", duygu:["🎉"] },

];

;
/* ==== data/olaylar_ek11.js ==== */
// ============================================================================
// DERİNLEŞTİRME PARTİSİ 11 — hatalar 13, ANADOLU BLOĞU
// ============================================================================
// Oturum 13. Kullanıcının hatalar 13'te bildirdiği yedi maddenin kronoloji
// karşılığı. Ölçüm ve düzeltme listesi: `oturumlar/OTURUM-13-ANADOLU.md`.
//
// ---------------------------------------------------------------------------
// 🔴 index.html'e SATIR EKLENMELİ — bu dosya bugün tarayıcıya YÜKLENMİYOR
// ---------------------------------------------------------------------------
// `OGRENILENLER.md §15`: `olaylar_ek9.js` tam bu sebeple 13 madde boyunca
// görünmez kaldı — `denetle.py` `data/olaylar*.js` desenini okuyup SAYIYOR ve
// TEMİZ diyor, tarayıcı ise dosyayı hiç yüklemiyor. index.html Oturum 13'ün
// dosyası değildir; satırı sahibi ekleyecek:
//     <script src="data/olaylar_ek11.js?v=rNN"></script>
// (olaylar_ek9.js satırının hemen altına; ?v damgası da yükseltilmeli.)
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — üç maddenin de günü kaynakta YOK
// ---------------------------------------------------------------------------
// Üçü de yıl hassasiyetinde; `CLAUDE.md §4` gereği `YYYY-01-01` yazıldı ve
// gerçek belirsizlik `gun` alanında duruyor. Uydurma gün yazılmadı.
//   1401 — TDV `bagdat` yalnız "803 (1401)" diyor, ay/gün vermiyor.
//   1422 — TDV `aydinogullari` yalnız "(1422)" diyor.
//   1426 — TDV `aydinogullari` "829 (1425-26)", `cuneyd-bey` "1426" diyor.
//          İki madde arasındaki farkın kendisi kayda geçirildi.
//
// ---------------------------------------------------------------------------
// KAYNAK — kullanılan üç slug da `<title>` ile doğrulandı (2026-07-30)
// ---------------------------------------------------------------------------
//   bagdat          → "BAĞDAT - TDV İslâm Ansiklopedisi"          ✓
//   aydinogullari   → "AYDINOĞULLARI - TDV İslâm Ansiklopedisi"   ✓
//   cuneyd-bey      → "CÜNEYD BEY - TDV İslâm Ansiklopedisi"      ✓
// Ölü olduğu ölçülen ve KULLANILMAYAN: `duzmece-mustafa` (arama sayfası).
// Doğrusu `mustafa-celebi` ✓ CANLI.
// ============================================================================

window.OLAYLAR_EK11 = [

// ---------------------------------------------------------------------------
// A) hatalar 13 md.4 — Timur'un Bağdat'ı ikinci işgali
// ---------------------------------------------------------------------------
// Kronolojide 1393-08-29 maddesi zaten vardı (olaylar_ek5.js); 1401'deki
// ikinci ve asıl yıkıcı işgalin maddesi YOKTU.
// ⚠️ Bu madde tek başına haritayı değiştirmez: `yerlesimler.js`'te Bağdat
// 1281-1508 arası TEK bir `iran` dönemi taşıyor ve bu blok Celâyirli,
// Timurlu, Karakoyunlu ve Akkoyunlu devirlerinin dördünü birden siliyor.
// Ölçüm ve önerilen zincir: OTURUM-13-ANADOLU.md §2.

{ t:"1401-01-01", k:"savas", etiket:["yikim","konu-askeri"],
  b:"Timur Bağdat'ı ikinci defa işgal etti — şehrin Abbâsî mahalleleri yıkıldı",
  gun:"1401 (803 h.; ay ve gün kaynakta yok)", yer:"Bağdat, Irâk-ı Arab", yer_id:"Bağdat",
  kisiler:"Timur, Ahmed Celâyir",
  d:"Timur Bağdat'ı sekiz yıl arayla iki defa aldı. 1393'teki ilk işgalde şehir fazla zarar görmemişti; 1401'deki ikincisi ise Bağdat'ın kültür hayatına indirilen ikinci ağır darbe sayılır — halk kılıçtan geçirildi, Abbâsî devrinden kalma mahalle ve binaların çoğu tahrip edildi. Celâyirli hükümdarı Ahmed 1405'te şehre dönüp yıkılan surları ve çarşıları onarmaya çalıştıysa da vakit bulamadı; Bağdat 1410'da Karakoyunlu Türkmenleri'nin eline geçti. Bu iki işgal, Ankara Savaşı'na giden yolda Timur'un Osmanlı ve Memlûk sınırlarına ne kadar yaklaştığını gösteren en somut adımlardan biridir.",
  kaynak:"bagdat", duygu:["⚔️","😔"] },

// ---------------------------------------------------------------------------
// B) hatalar 13 md.9-10 — Aydınoğulları'nın son müstakil devri
// ---------------------------------------------------------------------------
// Kullanıcı haritada Aydınoğulları'nın Düzmece Mustafa ayaklanması sırasında
// Osmanlı idaresinden çıktığını gördü ve "eğer gerçekse kronolojide görünmesi
// lazım" dedi. Ölçüm doğruladı: `yerlesimler.js` sekiz kayıtta `aydin`
// dönemini geri açıyor, ama o kırılmayı açıklayan tek madde "Düzmece Mustafa
// ayaklanması" ve içinde Aydınoğulları HİÇ geçmiyor. İki madde o boşluğu
// kapatır.

{ t:"1422-01-01", k:"kayip", etiket:["toprak-kayip","siyaset","konu-askeri","konu-siyasi"],
  b:"Cüneyd Bey Aydın-ili'nin başına döndü — Aydınoğulları yeniden müstakil",
  gun:"1422 (ay ve gün kaynakta yok)", yer:"İzmir, Ayasuluk, Tire, Birgi — Aydın-ili", yer_id:"İzmir",
  kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Mustafa Çelebi (Düzmece Mustafa)",
  d:"Çelebi Mehmed 1414-15'te İzmir'i alıp Cüneyd Bey'i Niğbolu sancak beyliğine göndererek Aydın-ili'ni Osmanlı idaresine bağlamıştı. Cüneyd, Çelebi Mehmed'in ölümünden sonra Bizans'ın taht iddiacısı olarak öne sürdüğü Mustafa Çelebi'nin yanında yeniden sahneye çıktı ve ona vezirlik dahi yaptı. II. Murad, eski beyliğini geri vereceği vaadiyle onu bu ittifaktan ayırdı; Cüneyd de İzmir'e dönüp Ayasuluk'u ele geçirdi ve Aydınoğlu Mustafa Bey'i öldürerek beyliğin başına geçti. Böylece Aydın-ili, Düzmece Mustafa buhranının içinden Osmanlı idaresinden çıkmış olarak doğdu.", ic_not_d:"Yılın ayı ve günü kaynakta bulunmadığı için tarih yıl hassasiyetinde yazılmıştır.",
  kaynak:"aydinogullari", duygu:["😔"] },

{ t:"1426-01-01", k:"fetih", etiket:["siyaset","konu-askeri","konu-siyasi","konu-kisiler"],
  ic_not_etiket:"toprak-kazanc KALDIRILDI (GEMINI-DOGRULA 0919): Aydın-ili'nin el değiştirmesi olaylar_ek.js '1425-06-01 Batı Anadolu beyliklerinin yeniden ilhakı' maddesinin kırılmasında; bu madde olayın SONU (TDV aydinogullari 829/1425-26, cuneyd-bey 1426).",
  b:"Cüneyd Bey ve ailesinin idamı — Aydınoğulları Beyliği'nin sonu",
  gun:"1426", ic_not_gun:"(829 h.; TDV iki maddede 1425-26 ve 1426 diyor, gün yok)",
  yer:"İpsili (Sisam karşısı), Aydın-ili", yer_id:"Sisam", kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Anadolu Beylerbeyi Hamza Bey",
  d:"Aydın-ili'ne yeniden hâkim olan Cüneyd Bey'in Anadolu beylerini kışkırtması ve Venedik ile temas araması üzerine II. Murad, Anadolu Beylerbeyi Hamza Bey'i onun üzerine gönderdi. Oğlu Kurd Hasan Akhisar yakınlarında yenilip esir düşünce Sisam adası karşısındaki İpsili'ye çekilen Cüneyd, Karamanoğlu'ndan beklediği yardım gelmeyince ve Osmanlı ile birlikte hareket eden Cenevizliler onu denizden ablukaya alınca teslim olmak zorunda kaldı; bütün soyuyla birlikte ortadan kaldırıldı. Aydınoğulları toprakları böylece tamamıyla Osmanlı idaresine girdi.", ic_not_d:"⚠️ Tarihte TDV kendi içinde ayrışıyor: `aydinogullari` maddesi 829 (1425-26), `cuneyd-bey` maddesi 1426 veriyor; haritadaki 1425-06-01 kırılması ikisinden de erkendir (bkz. OTURUM-13-ANADOLU.md §4).",
  kaynak:"cuneyd-bey", duygu:["🎉","😔"] },


// ---------------------------------------------------------------------------
// C) hatalar 14 md.4 — AKKOYUNLU'NUN ÇÖZÜLÜŞÜ (1502-1510)
// ---------------------------------------------------------------------------
// Kullanıcı "Akkoyunlu devletinin çözülüşü ve Şah İsmail'in Tebriz'e girişi
// maddesinde buna dair gösterim olmalı haritada" dedi. Ölçüm, sorunun eksik
// gösterim DEĞİL mükerrer madde olduğunu gösterdi: olaylar_ek5.js'teki
// 1501-01-01 maddesi 189 günlük ölü bölgenin ortasında duruyor, haritayı
// kırdıran madde ise olaylar_ek7.js'teki 1501-07-01. Ayrıntı:
// OTURUM-13-ANADOLU.md §14.
//
// Aşağıdaki beş madde, merkezin istediği şeyi karşılıyor: çözülüş TEK BİR GÜN
// değil, 1501'den 1510'a uzanan bir SÜREÇTİR ve her adımının haritada
// karşılığı vardır.
//
// 🔴 YAPISAL BULGU — bu maddelerin var olma sebebi:
// `CLAUDE.md §3` Değişmez 2 komutu `(y.d||[]).concat(y.v||[])` döngüsü kuruyor;
// `y.s` YOK. Yani yabancı devletlerin toprak değişimleri BUGÜNE KADAR HİÇ
// denetlenmedi. Ölçüldü: 543 `s:` kırılmasının 112'sinin ±30 gün içinde maddesi
// yok. Aşağıdaki beş kırılma o 112'nin en kalabalık beşidir (10 + 37 + 28 + 46
// + 24 = 145 kayıt). Ölçüt GEVŞETİLMEDİ; denetim genişletilmeli.
//
// TARİH HASSASİYETİ — beşinin de günü kaynakta yok
// TDV `safeviler` yıl veriyor, gün vermiyor. `CLAUDE.md §4` gereği veride
// hâlihazırda duran kırılma günü kullanıldı ve gerçek belirsizlik `gun`
// alanına yazıldı. Uydurma gün yazılmadı.
//
// KAYNAK — iki slug da doğrulanmış kümede
//   safeviler     → "SAFEVÎLER - TDV İslâm Ansiklopedisi"     ✓ (2026-07-31)
//   akkoyunlular  → mevcut `kaynak:` kümesinde                ✓
// ⚠️ `ismail-i` slug'ı DOĞRULANAMADI (oturum limiti) ve kullanılmadı.

{ t:"1502-01-01", k:"siyaset", etiket:["siyaset","savas","konu-askeri","konu-siyasi"],
  b:"Erzurum ve Van havzası Safevî'ye geçti — Akkoyunlu'nun kuzey kanadı çöktü",
  gun:"1502 (ay ve gün kaynakta yok)", yer:"Erzurum, Van, Erciş, Kemah", yer_id:"Erzurum",
  kisiler:"Şah İsmail, Akkoyunlu Elvend Bey",
  d:"Şerûr'da Elvend Bey'i yenip 1501 yazında Tebriz'e giren Şah İsmâil, ertesi yıl kuzeybatı istikametinde ilerleyerek Erzurum'dan Van gölü havzasına uzanan hattı hâkimiyeti altına aldı. Akkoyunlu Devleti Uzun Hasan'ın ölümünden sonra zaten taht kavgalarıyla ikiye bölünmüştü: Elvend Bey Azerbaycan ve Diyarbekir'i, amcazadesi Murad ise Irâk-ı Acem ve Fars'ı tutuyordu. Bu bölünme Safevî ilerleyişini kolaylaştırdı; bölge on kayıt hâlinde bir yıl içinde el değiştirdi. Erzurum bundan sonra on altı yıl Safevî elinde kaldı ve Osmanlı hâkimiyetine ancak Çaldıran'dan sonra, 1518-19'da girdi.",
  kaynak:"akkoyunlular", duygu:["🏛"] },

{ t:"1503-01-01", k:"siyaset", etiket:["siyaset","savas","konu-askeri","konu-siyasi"],
  b:"Murad Bey'in Hemedan yenilgisi: Irâk-ı Acem ve Fars Safevî'ye geçti",
  gun:"1503 (908 h.; ay ve gün kaynakta yok)", yer:"Hemedan, Isfahan, Şîraz, Kâşân — Irâk-ı Acem ve Fars", yer_id:"Hemedan",
  kisiler:"Şah İsmail, Akkoyunlu Sultan Murad",
  d:"Akkoyunlu tahtının ikinci iddiacısı Sultan Murad, Şah İsmâil'e karşı Hemedan yakınlarında yapılan savaşta ağır bir yenilgiye uğradı ve Bağdat'a kaçtı. Bu tek savaşla Irâk-ı Acem, Fars ve Kirman bölgeleri Safevî idaresine girdi; haritada bu bölgeler aynı anda el değiştirir. Akkoyunlu Devleti'nin çözülüşünün en büyük tek adımı budur — Tebriz'in kaybı hânedanı başkentsiz bırakmıştı, Hemedan yenilgisi ise topraksız bıraktı.", ic_not_d:"⚠️ Bu kırılma bugüne kadar kronolojide karşılıksızdı: ona en yakın madde on sekiz gün ötedeki Osmanlı-Venedik Savaşı'nın sona ermesiydi, yani kullanıcı İran'ın el değiştirdiğini görürken ekranda Venedik barışını okuyordu. · eski: haritada otuz yedi yerleşim aynı anda el değiştirir.",
  kaynak:"safeviler", duygu:["🏛","😔"] },

{ t:"1507-01-01", k:"siyaset", etiket:["siyaset","savas","konu-askeri","konu-siyasi"],
  b:"Şah İsmail'in Diyarbekir seferi: Akkoyunlu'nun son merkezleri düştü",
  gun:"1507 (912-913 h.; ay ve gün kaynakta yok)", yer:"Diyarbekir, Âmid, Mardin, Urfa, Harput, Siverek", yer_id:"Diyarbakır",
  kisiler:"Şah İsmail, Akkoyunlu hânedanı",
  d:"Azerbaycan ve İran platosunu ele geçiren Şah İsmâil 1507'de batıya, Akkoyunlu hânedanının doğduğu Diyarbekir bölgesine yöneldi. Âmid'den Mardin'e, Urfa'dan Harput'a uzanan hat iki hamlede Safevî idaresine girdi ve Akkoyunlular fiilen ortadan kalktı. Bu sefer aynı zamanda Safevî sınırını ilk defa Osmanlı ve Memlûk sınırlarına dayadı; Çaldıran'a giden gerilimin coğrafî zemini böyle kuruldu.", ic_not_d:"⚠️ Hânedanın tarihî sonu bu tarih değildir: TDV'ye göre Elvend Bey 1505'te Âmid'de ölmüş, hânedan ise 1514'te Murad'ın ölümüyle sona ermiştir; 1507 toprağın son kaybıdır.",
  kaynak:"safeviler", duygu:["🏛"] },

{ t:"1508-01-01", k:"siyaset", etiket:["siyaset","savas","konu-askeri","konu-siyasi"],
  b:"Bağdat'ın Safevî'ye geçişi — Irâk-ı Arab el değiştirdi",
  gun:"1508 (914 h.; ay ve gün kaynakta yok)", yer:"Bağdat, Kerbelâ, Necef, Musul — Irâk-ı Arab", yer_id:"Bağdat",
  kisiler:"Şah İsmail",
  d:"Hemedan yenilgisinden sonra Bağdat'a sığınan Akkoyunlu Sultan Murad'ın ardından Şah İsmâil 1508'de Irâk-ı Arab'a girdi ve Bağdat'ı aldı. Kerbelâ ve Necef'teki türbelerin Safevî idaresine geçmesi, hareketin mezhebî iddiası bakımından Tebriz'in alınması kadar önemliydi. Haritada Irâk-ı Arab aynı gün el değiştirir; bu, çözülüşün son ve en geniş coğrafî adımıdır. Bağdat 1534'te Kanûnî'nin Irakeyn Seferi'ne kadar Safevî elinde kaldı.", ic_not_d:"eski: Haritada kırk altı yerleşim aynı gün el değiştirir;",
  kaynak:"safeviler", duygu:["🏛"] },

{ t:"1510-12-02", k:"savas", etiket:["savas","siyaset","konu-askeri","konu-siyasi"],
  kapsam:"dis", onem:4, b:"Merv Savaşı: Özbekler ağır yenilgiye uğradı, Merv ve Herat alındı",
  gun:"1510 sonu", ic_not_gun:"(916 h.; TDV yalnız yılı veriyor, veri 1510-12-02 taşıyor)",
  yer:"Merv, Herat — Horasan", yer_id:"Merv (Mari)", kisiler:"Şah İsmail, Şeybânî Han (Muhammed Şeybânî)",
  d:"Batıda Akkoyunlu mirasını tamamlayan Şah İsmâil doğuya, Horasan'a yürüdü ve Merv önlerinde Özbekler'i ağır bir yenilgiye uğrattı; Şeybânî Han savaş meydanında öldü. Merv ve Herat Safevî hâkimiyetine girdi ve Safevî Devleti Fırat'tan Ceyhun'a uzanan sınırlarına kavuştu. Böylece 1501 yazında Tebriz'e girişle başlayan süreç dokuz yılda tamamlanmış oldu: Akkoyunlu mirası bütünüyle Safevî idaresine geçti ve Osmanlı Devleti doğusunda kendi büyüklüğünde ikinci bir devletle komşu hâle geldi.",
  kaynak:"safeviler", duygu:["⚔️","😔"] },


// ---------------------------------------------------------------------------
// ÇAPRAZ İBERYA PARTİSİ — Oturum 0, 3 Ağustos 2026
// ---------------------------------------------------------------------------
// ÇAPRAZ İBERYA oturumu Portekiz ve İspanya kaynaklarından çapraz sorgu
// yaptı; aşağıdaki dört madde onun D1·D5·D6 bulgularının kronoloji
// karşılığıdır. Dördü de haritada AÇILAN bir kırılmanın karşılığını verir
// (Değişmez 2 borcu doğurmasınlar diye aynı partide yazıldı).
// ⚠️ İlk üçünde `kaynak:` alanı YOK ve bu bilerekdir: alan TDV linki
//    üretiyor, TDV'de karşılığı olmayan maddeye slug yazmak ÖLÜ LİNK olur.
//    Kaynak metnin içinde adıyla anılıyor.

{ t:"1581-04-16", k:"siyaset", etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  kapsam:"dis", b:"İberya Birliği: Portekiz tacı İspanya kralına geçti",
  gun:"16 Nisan 1581", yer:"Tomar — Portekiz",
  kisiler:"II. Felipe (Portekiz kralı I. Filipe), Kardinal Kral Henrique",
  d:"Kardinal Kral Henrique'nin vârissiz ölümüyle açılan veraset kavgası Alcântara Muharebesi'nde (25 Ağustos 1580) İspanya lehine kapandı ve Tomar'da toplanan Portekiz Cortes'i 16 Nisan 1581'de II. Felipe'yi Portekiz kralı olarak tanıdı. Tomar şartlarına göre Portekiz kendi kurumlarını, parasını ve dilini koruyacak, yönetime yalnız Portekizliler atanacak, Madrid'de ayrı bir Portekiz konseyi bulunacaktı — yani birleşme kişisel birlikti, ilhak değil.", ic_not_d:"Atlas aynı hukukî durumu Felemenk ve Milano için `ispanya` diye boyadığından anakara Portekiz de altmış yıl boyunca aynı şekilde işlendi; buna karşılık Estado da Índia (Goa, Diu, Malaka, Makao) Portekiz tacı altında kaldığı için `portekiz` bırakıldı. Kaynak: Britannica, History of Portugal — Union of Spain and Portugal, 1580-1640.", duygu:["🏛"], yer_kon:[39.6,-8.42] },

// ⚠️ `toprak-kayip` YAZIM HATASIYDI, doğrusu `toprak-kaybi` (öteki 183 kayıt öyle
// yazıyor). Önemsiz görünür, değil: `denetle.py`nin `kirilmasiz_madde()` sayacı
// tam bu etikete bakıyor — yanlış yazılan etiket, toprak iddiası taşıyan maddeyi
// "kırılmasız" sayıp Değişmez 2t tavanını boş yere yer.
{ t:"1640-12-01", k:"siyaset", etiket:["siyaset","toprak-kayip","konu-askeri","konu-siyasi"],
  kapsam:"dis", b:"Restauração: Portekiz bağımsızlığını geri aldı",
  gun:"1 Aralık 1640", yer:"Lizbon", yer_id:"Lizbon",
  kisiler:"IV. João (Braganza Dükü), Kont-Dük Olivares",
  d:"Katalonya isyanının İspanya'yı meşgul ettiği günlerde Lizbon'da bir grup soylu saraya baskın yaparak İspanyol idaresini devirdi ve Braganza Dükü'nü IV. João adıyla kral ilan etti. Altmış yıllık İberya Birliği böylece sona erdi; ancak Sebte İspanya'da kalmayı seçti ve bu 1668 Lizbon Antlaşması'yla tanındı. Portekiz'in Habsburg savaşlarına eklemlendiği bu pencere Asya'daki kayıplarının da çerçevesidir: Hürmüz 1622'de, Malaka 1641'de, Kolombo 1656'da elden çıktı; Tanca ile Bombay ise bağımsızlığın bedeli olarak İngiltere'ye verildi. Kaynak: Britannica, History of Portugal — Restoration.", duygu:["🏛"] },

{ t:"1539-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Zebîd'in Osmanlı hâkimiyetine kesin girişi",
  gun:"1539 başı (kesin gün kaynakta yok; üst sınır 10 Mart 1539)",
  yer:"Zebîd — Yemen", yer_id:"Zebîd", kisiler:"Hadım Süleyman Paşa",
  d:"Diu kuşatmasını 5 Kasım 1538'de kaldıran donanma dönüş yolunda Yemen kıyısına uğradı ve Zebîd kesin olarak Osmanlı idaresine bağlandı; Hadım Süleyman Paşa şehirden 10 Mart 1539'da ayrılıp 1 Nisan'da Cidde'ye vardı. Şehir 1517'den beri eski Memlûk beylerinin elinde Osmanlı adına yönetiliyordu; bu tarihle doğrudan idareye geçti.", ic_not_d:"⚠️ Atlas bu geçişi uzun süre 3 Ağustos 1538'de gösteriyordu, oysa o gün alınan yer Aden'dir. Düzeltmenin kaynağı: Ertuğrul Önalp, \\\"Hadım Süleyman Paşa'nın 1538 yılındaki Hindistan Seferi\\\", OTAM (Ankara Üniversitesi Osmanlı Tarihi Araştırma ve Uygulama Merkezi Dergisi) — tam metin okundu.", duygu:["🎉"] },

{ t:"1662-01-30", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  kapsam:"dis", b:"Tanca İngiltere'ye devredildi",
  gun:"30 Ocak 1662", yer:"Tanca — Fas", yer_id:"Tanca",
  kisiler:"II. Charles, Catherine de Braganza, Peterborough Kontu",
  d:"Portekiz'in bağımsızlık savaşında İngiliz desteğini sağlamak için yapılan evlilik antlaşmasının (23 Haziran 1661) ikinci maddesi Tanca'yı Catherine de Braganza'nın çeyizi olarak İngiltere'ye bırakıyordu. Sandwich Kontu'nun filosu 29 Ocak 1662'de demirledi ve ertesi gün Peterborough Kontu'nun töreniyle resmî devir yapıldı. İngilizler şehri 1684'te terk edecekti.", ic_not_d:"Atlas bu kaydı önce 23 Ocak 1661 olarak taşıyordu — antlaşma günüyle fiilî devir günü arasında bir karışma; Bombay için zaten fiilî devir tarihi (18 Şubat 1665) yazıldığından aynı ölçüt Tanca'ya da uygulandı.", duygu:["🤝"] },



// ---------------------------------------------------------------------------
// IRAN'IN UC HANEDANI — Oturum 0, 3 Agustos 2026
// ---------------------------------------------------------------------------
// RENK olctu: `d:"iran"` tasiyan 130 donemden 123'u `1736-03-08 → 1923-10-29`
// gibi TEK BIR PENCEREDE uc ayri hanedani birlestiriyordu. Asagidaki iki
// madde o pencerenin iki kirilma gununu tasiyor.
// 📌 `1747-06-20` UYDURULMADI: veride 5 kayit onu zaten tasiyordu.
// ⚠️ Aradaki 1747-1796 penceresi bilerek `iran` birakildi — o kirk dokuz
//    yilda Iran gercekten parcaliydi (ayni gun Horasan'da Afsar, Siraz'da
//    Zend, Tahran'da Kacar) ve genel etiketin en mesru oldugu yer orasi.
//    Sehir sehir bolunmesi ayri bir TDV taramasi istiyor, uydurulmayacak.

{ t:"1747-06-20", k:"siyaset", etiket:["siyaset","suikast","konu-siyasi","konu-kisiler"],
  kapsam:"dis", onem:4, b:"Nâdir Şah'ın öldürülmesi — Afşar hâkimiyetinin dağılışı",
  gun:"20 Haziran 1747", yer:"Fethâbâd, Horasan",
  kisiler:"Nâdir Şah Afşar",
  d:"Safevî tahtını sona erdirip 1736'da kendi adına saltanat ilân eden, Hindistan seferiyle Delhi'ye kadar giden ve Osmanlı ile üç savaş yapıp 1746 Kerden Antlaşması'yla barışan Nâdir Şah, kendi muhafızları tarafından çadırında öldürüldü. Ardından İran tek elden yönetilemedi: Horasan'da Afşar kalıntısı, güneyde Zend, kuzeyde yükselen Kaçar kırk dokuz yıl boyunca ülkeyi paylaştı. Osmanlı doğu sınırı bu dağınıklık sayesinde uzun süre sakin kaldı.", duygu:["🏛"], yer_kon:[37.1,58.5] },

{ t:"1796-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-hanedan"],
  kapsam:"dis", onem:4, b:"Kaçar hânedanının İran'a hâkim oluşu",
  gun:"1796 (gün kaynakta yok; devlet dizini bu tarihi Afşar'ın bitişi olarak taşıyor)",
  yer:"Tahran", yer_id:"Tahran", kisiler:"Ağa Muhammed Şah Kaçar",
  d:"Kaçar aşiretinin reisi Ağa Muhammed Han, Zend hâkimiyetini yıkıp Horasan'daki son Afşar direncini de kırarak İran'ı yeniden tek elde topladı ve Tahran'ı başkent yaptı. Kırk dokuz yıllık parçalanma dönemi böylece kapandı; bundan sonra Osmanlı'nın doğu komşusu 1923'e kadar Kaçar İran'ı olacaktı.", ic_not_d:"⚠️ Atlas 1747-1796 arasını bilerek genel `İran` etiketiyle gösteriyor: o pencerede ülke gerçekten bölünmüştü ve şehir şehir hangi hânedanın elinde olduğu ayrı bir kaynak taraması gerektiriyor.", duygu:["🏛"] },


];

;
/* ==== data/olaylar_ek12.js ==== */
// ============================================================================
// DERİNLEŞTİRME PARTİSİ 12 — CERBE 1560 (PETEK/NOKTA oturumu, 3 Ağustos 2026)
// ============================================================================
// ⚠️ HENÜZ YAYINA BAĞLI DEĞİL. Bağlamak için İKİ satır gerekiyor ve ikisi de
//    benim dosyam değil:
//      index.html   <script src="data/olaylar_ek12.js?v=rNN"></script>
//      js/app.js    .concat(window.OLAYLAR_EK12 || [])
//    ⇒ Oturum 0 / ARAYÜZ bağlar. Bağlanmadan madde SAYILMAZ; `olaylar_ek9`
//      vakası (dosya yazıldı, yayına bağlanmadı) bu yüzden yaşandı.
//
// ── NİÇİN VAR ───────────────────────────────────────────────────────────────
// Kendi ölçümümün kapanışı. `yerlesimler.js`teki Cerbe kaydı şöyle:
//     s:[{1281-01-01 → 1560-05-14, hafsi}]   d:[{1560-05-14 → 1705-07-17}]
// İki kusur ölçüldü:
//   ① İSPANYOL DÖNEMİ HİÇ YOK — ada 1560'ta Haçlı donanmasının elindeydi.
//   ② FETİH GÜNÜ YANLIŞ GÜNE BAĞLI — 1560-05-14, TDV'ye göre **deniz
//      zaferinin** günüdür; kale iki ay sonra, **30 Temmuz 1560**'ta düştü.
//
// ②'yi düzeltmek `1560-07-30` kırılması açar ve o güne madde YOKTU: en yakın
// madde 1560-05-14 "Cerbe Deniz Zaferi", **77 gün** uzakta — Değişmez 2 eşiği
// 30 gün. Yani tarihi düzeltmek AÇIK KIRILMA doğururdu.
// ⇒ Bu dosya o borcu ÖNCEDEN kapatıyor: madde önce, tarih sonra.
//    (Mankup'ta da aynı desen kuruldu: `yerlesimler_ek2.js`, 1475-12-01.)
//
// ── 🔴 OTURUM 0'A: CERBE KAYDI `yerlesimler_ek4.js`e YAZILAMAZ ─────────────
// Koordinatör "ya sen yerlesimler_ek4.js'e düzeltilmiş kaydı yazarsın" dedi.
// ÖLÇTÜM: **BU MÜMKÜN DEĞİL.** `arac/girdi.py` `yukle()` aynı adı iki dosyada
// görünce ValueError fırlatıyor:
//     if y["ad"] in nereden: raise ValueError("AD ÇAKIŞMASI: …")
// "Cerbe (Djerba)" zaten `yerlesimler.js`te (bağlı) olduğu için ikinci bir
// kayıt yükleyiciyi ÇÖKERTİR — üretim başlamadan düşer.
// ⇒ Düzeltme YALNIZCA `yerlesimler.js` içinde, yerinde yapılabilir.
//   Önerilen son hâl (madde bağlandıktan SONRA):
//     s:[{1281-01-01 → 1560-03-01, hafsi},
//        {1560-03-01 → 1560-07-30, ispanya},
//        {1881-05-12 → 1923-10-29, fransa}]
//     d:[{1560-07-30 → 1705-07-17, y:"kusatma"}]
//     v:[{1705-07-17 → 1881-05-12, k:"Tunus Ocaklığı (Hüseynîler)"}]
//   ⚠️ `1560-03-01` bir YER TUTUCUYDU — 🟢 13 Eylül 2026: TDV `piyale-pasa`
//     GÜNÜ veriyor (12 Mart 1560) ⇒ önerilen değer `1560-03-12` (KITA 14).
//     s:→s: geçişi olduğu için kırılma üretmez; Değişmez 2'yi etkilemez.
//     `d:` başlangıcı ise TDV'nin verdiği KESİN gündür.
//   ⚠️ `y:"savas"` → `y:"kusatma"` olmalı: TDV "iki ay kadar süren
//     kuşatmadan sonra" diyor, deniz muharebesi ayrı olaydır.
// ============================================================================

window.OLAYLAR_EK12 = [

// ---------------------------------------------------------------------------
// A-1 — Haçlı donanmasının Cerbe'yi işgali
// ---------------------------------------------------------------------------
// 🔴 GÜN BULUNDU (KITA 14, 13 Eylül 2026 — KITA 20 savaş pilotu bulgusu):
// TDV `cerbe` yalnız "1560 yılı başlarında" diyor; ama TDV `piyale-pasa`
// GÜNÜ veriyor: "İspanya yönetimindeki müttefik hıristiyan donanması
// 14 Cemâziyelâhir 967'de (12 Mart 1560) Cerbe adasını işgal etti."
// ⇒ `t:` yer tutucu 1560-01-01'den 1560-03-12'ye çekildi. Önceki "ay ve gün
//   kaynakta yok" hükmü tek maddeye (cerbe) bakmıştı.
// 📌 Bu madde Değişmez 2 için GEREKLİ DEĞİL (İspanyol dönemi s:→s: geçişi,
//   kırılma üretmez). 1560-01-01 ve 1560-03-12'nin ±30 gün penceresinde
//   kırılma YOK (ARAC-KITA14-PENCERE-0913.py ile ölçüldü) — taşıma hiçbir
//   kırılmayı açmıyor, yanlışlıkla da kapatmıyor.
{ t:"1560-03-12", k:"savas", etiket:["savas","konu-askeri"],
  b:"Haçlı donanması Cerbe'yi işgal etti — Turgut Paşa'nın üssü elden çıktı",
  gun:"12 Mart 1560 (14 Cemâziyelâhir 967)", yer:"Cerbe (Djerba), Trablusgarp", yer_id:"Cerbe (Djerba)",
  kisiler:"Turgut Paşa, Piyâle Paşa",
  d:"İspanya, Papalık, Malta, Ceneviz ve Floransa gemilerinden kurulu Haçlı donanması, Turgut Reis'in 1551'den beri akın üssü olarak kullandığı Cerbe'yi hedef aldı. Fırtınalar ve salgın yüzünden ada önlerine ancak 1560 yılı başlarında ulaşabildi; 12 Mart 1560'ta adayı işgal edip bir kale inşa etti. Haberi alan Piyâle Paşa 28 Mart'ta 120 kadırgalık donanmasıyla İstanbul'dan yola çıktı. İşgal uzun sürmedi: Osmanlı donanması mayısta Cerbe önünde müttefikleri yendi, kale de temmuz sonunda geri alındı. Bu sefer, Preveze'den sonra Akdeniz'de Osmanlı üstünlüğünü pekiştiren ikinci büyük deniz harekâtının başlangıcıdır.",
  kaynak:"cerbe + piyale-pasa — TDV piyale-pasa birebir: 'İspanya yönetimindeki müttefik hıristiyan donanması 14 Cemâziyelâhir 967’de (12 Mart 1560) Cerbe adasını işgal etti. Bunun üzerine Piyâle Paşa, 120 kadırgadan oluşan donanmasıyla 1 Receb 967’de (28 Mart 1560) İstanbul’dan yola çıktı.' · TDV cerbe: '1560 yılı başlarında' (gün vermiyor). · Düzeltme (KITA 14, 13 Eylül 2026): t: 1560-01-01 → 1560-03-12; önceki metindeki 'beş ay içinde' ifadesi çıkarıldı (işgal 12 Mart, kale 30 Temmuz).", duygu:["⚔️","😔"] },

// ---------------------------------------------------------------------------
// A-2 — Cerbe kalesinin düşüşü  🔴 ASIL BORÇ KAPATAN MADDE
// ---------------------------------------------------------------------------
// TDV `cerbe`: deniz muharebesi **14 Mayıs 1560**, kale ise "iki ay kadar
// süren kuşatmadan" sonra **"30 Temmuz 1560 günü"** alındı. İki ayrı olay,
// iki ayrı gün — atlas ikisini tek güne (14 Mayıs) bindirmişti.
// ⇒ Bu madde bağlandıktan sonra Cerbe kaydının `d:` başlangıcı
//   1560-05-14'ten 1560-07-30'a çekilebilir; kırılma bu maddeye basar.
{ t:"1560-07-30", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Cerbe kalesinin düşüşü — adanın Osmanlı idaresine geçişi",
  gun:"30 Temmuz 1560", yer:"Cerbe (Djerba)", yer_id:"Cerbe (Djerba)",
  kisiler:"Piyâle Paşa, Turgut Paşa",
  d:"Piyâle Paşa'nın 14 Mayıs 1560'taki deniz zaferinden sonra Haçlı kuvvetleri adada inşa ettikleri kaleye kapandı; Trablusgarp beylerbeyi Turgut Paşa'nın kuvvetleri karadan kuşattı. İki ay süren muhasara 30 Temmuz 1560'ta kalenin düşmesiyle bitti ve ada Trablusgarp beylerbeyiliğine bağlandı. Deniz zaferi ile kalenin fethi arasında yetmiş yedi gün vardır; ada 14 Mayıs'ta değil 30 Temmuz'da fiilen el değiştirmiştir.", ic_not_d:"haritada toprak değişimi ikincisine (30 Temmuz) bağlanmalıdır",
  kaynak:"cerbe", duygu:["🎉","😔"] },

// ---------------------------------------------------------------------------
// GEMINI-DOGRULA — 19 Eylül 2026 (M-4598). denetim/YAMA-KIRILMASIZ-0919.json ve
// YAMA-SESSIZ-BORC-0919.json'daki veri düzeltmelerinin kırılmalarına basan
// kaynaklı maddeler. Her maddede kaynak cümlesi AYNEN; gün kaynaktan değilse
// açıkça yazıldı.
// ---------------------------------------------------------------------------
{ t:"1527-09-23", k:"kayip", etiket:["toprak-kaybi","konu-askeri"],
  b:"Ferdinand Budin'i ele geçirdi — Szapolyai başşehirden çıkarıldı",
  gun:"23 Eylül 1527", ic_not_gun:"TDV kendi içinde çelişiyor: suleyman-i '23 Eylül 1527', budin '1527 Ağustosu'. Günü veren tek cümle suleyman-i'deki olduğu için o alındı.",
  yer:"Budin (Buda), Peşte", yer_id:"Budin", kisiler:"I. Ferdinand, János Szapolyai, Kanûnî Sultan Süleyman",
  d:"Mohaç'tan sonra Macar tahtında iki kral çıkmıştı: soyluların bir kısmı János Szapolyai'yi, bir kısmı Habsburg Ferdinand'ı seçmişti. Ferdinand 1527'de Budin'i ele geçirip Szapolyai'yi başşehirden çıkardı; Szapolyai Sultan Süleyman'dan yardım istedi. Bu, 1529 Viyana seferinin ilk hedefinin Budin olmasının sebebidir.",
  kaynak:"TDV suleyman-i AYNEN: '23 Eylül 1527'de Ferdinand, Szapolyai'yi Budin'den çıkarınca içerideki ağır krize rağmen Kanûnî Sultan Süleyman ve İbrâhim Paşa bütün dikkatlerini buraya yöneltti.' · TDV budin AYNEN: '1527 Ağustosunda Buda'yı ele geçiren Ferdinand'a karşı János Szapolyai Sultan Süleyman'dan yardım istedi.'" },

{ t:"1537-01-01", k:"vassal", etiket:["toprak-kazanc","siyaset","konu-askeri","konu-siyasi"],
  b:"Barbaros'un Ege adaları seferi — Nakşa Dükalığı Osmanlı kontrolüne girdi",
  gun:"944-945 (1537-1538)", ic_not_gun:"Kaynak yalnız hicrî yıl aralığı veriyor; tarih alanı YIL düzeyindedir (§4), ay-gün yok.",
  yer:"Nakşa (Naxos), Paros ve çevre adalar", yer_id:"Nakşa", kisiler:"Barbaros Hayreddin Paşa",
  d:"1207'den beri Venedik vesâyetinde Latin dükleri tarafından yönetilen Nakşa Dükalığı, Barbaros Hayreddin Paşa'nın adalar seferiyle Osmanlı kontrolü altına girdi. Adanın statüsüne dokunulmadı; dükalık Osmanlı'ya tâbi olarak sürdü ve 1540 Osmanlı-Venedik antlaşmasıyla hâkimiyet hakkı resmen Osmanlılar'a devredildi.",
  kaynak:"TDV naksa AYNEN: 'Nakşa ve civarındaki adalar, 944-945 (1537-1538) yıllarında Barbaros Hayreddin Paşa'nın adalar seferiyle Osmanlı kontrolü altına girdi.' · '1540'taki Osmanlı-Venedik antlaşmasıyla hâkimiyet hakkı resmen Osmanlılar'a devredildi.' · 'Ancak adanın statüsüne dokunulmadı ve düklük Yasef Nasi'ye verildi (974/1566).'" },

{ t:"1913-08-31", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Gümülcine merkezli Garbî Trakya Hükûmet-i Muvakkatesi ilân edildi",
  gun:"31 Ağustos 1913", yer:"Gümülcine, Batı Trakya", yer_id:"Gümülcine", kisiler:"Müderris Sâlih Efendi",
  d:"Bükreş Antlaşması (10 Ağustos 1913) Batı Trakya'yı Bulgaristan'a bırakınca bölgenin Türk halkı Gümülcine merkezli geçici bir hükümet ilân etti; Dedeağaç'ın alınmasından sonra hükümet bağımsızlığını 'Garbî Trakya Hükûmet-i Müstakillesi' adıyla duyurdu. Büyük devletlerin müdahalesiyle Osmanlı hükümeti onu desteklemedi; 29 Eylül 1913 İstanbul Antlaşması Batı Trakya'yı Bulgarlar'a bıraktı ve hükümet 25 Ekim 1913'e kadar ancak elli yedi gün yaşadı.",
  kaynak:"TDV bati-trakya AYNEN: '31 Ağustos 1913'te merkezi Gümülcine olmak üzere Garbî Trakya Hükûmet-i Muvakkatesi ilân edildi.' · '25 Ekim 1913'e kadar Bulgaristan'a teslimi şart koşulan Batı Trakya'da Garbî Trakya Hükûmet-i Müstakillesi varlığını ancak elli yedi gün sürdürebildi.'" },

{ t:"1814-02-04", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Danzig'de Rus-Prusya ikili iktidarı sona erdi — Napolyon'un serbest şehri Prusya'ya döndü",
  gun:"4 Şubat 1814", yer:"Danzig (Gdańsk)", yer_id:"Gdansk", kisiler:"I. Aleksandr",
  d:"Tilsit barışıyla (9 Temmuz 1807) Prusya'dan ayrılıp Fransız koruması altında serbest şehir yapılan Danzig'i Napolyon'un kuvvetleri 1813 kuşatmasından sonra terk etti. 2 Ocak – 4 Şubat 1814 arasında şehirde Rus-Prusya ikili iktidarı sürdü; Çar Aleksandr'ın Danzig ve Vistül ağzını alma planından vazgeçmesiyle şehir Prusya idaresine geçti.",
  kaynak:"Gedanopedia (Encyklopedia Gdańska), 'WOLNE MIASTO GDAŃSK, 1807–1815' AYNEN: 'Po opuszczeniu przez wojska napoleońskie miasta na krótko, między 2 stycznia a 4 lutego 1814, doszło w nim do dwuwładzy.' · 'Sytuację wyjaśniło wycofanie się z końcem stycznia 1814 cara Aleksandra I z planów zajęcia przez Rosję Gdańska i ujścia Wisły.' · kuruluş: '… traktatów … francusko-pruskiego z 9 VII 1807 zawartych w Tylży …'" },

{ t:"1920-11-15", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi"],
  b:"Danzig Serbest Şehri Milletler Cemiyeti koruması altında kuruldu",
  gun:"15 Kasım 1920", yer:"Danzig (Gdańsk)", yer_id:"Gdansk",
  d:"Versay Antlaşması'yla Almanya'dan ayrılan Danzig, 10 Ocak 1920'den itibaren müttefik büyük devletlerin geçiş idaresinde kaldı; 15 Kasım 1920'de Milletler Cemiyeti'nin koruması altında Polonya ile gümrük birliği içindeki serbest şehir olarak kuruldu.",
  kaynak:"Gedanopedia (Encyklopedia Gdańska), 'WOLNE MIASTO GDAŃSK, 1920–1939' AYNEN: 'Od 10 I do 15 XI 1920, w okresie przejściowym, II WMG znajdowało się pod zarządem głównych mocarstw sprzymierzonych.' · '9 I 1920 podpisano protokół przejęcia Gdańska przez aliantów, w wyniku którego Niemcy straciły wszelkie prawa na jego obszarze.'" },

{ t:"1815-05-03", k:"siyaset", kapsam:"dis", etiket:["siyaset","diplomasi","konu-diplomasi"],
  b:"Viyana'da Krakov serbest, bağımsız ve tarafsız şehir ilân edildi",
  gun:"3 Mayıs 1815", ic_not_gun:"Gün Encyclopædia Britannica 1911'de YOK; künye krakow-serbest-sehri'nin kaynağından (Hertslet, The Map of Europe by Treaty, No. 14, '21st April / 3rd May 1815') — bu turda yeniden okunmadı.",
  yer:"Krakov", yer_id:"Krakov",
  d:"Viyana Kongresi'nde Rusya, Avusturya ve Prusya, Krakov şehrini çevresiyle birlikte üç devletin koruması altında serbest bir devlet yaptı; Viyana Nihai Senedi bu düzeni tescil etti.",
  kaynak:"Encyclopædia Britannica 1911, 'Cracow' (Wikisource) AYNEN: 'by the Final Act of the congress signed at Vienna in 1815, \"the town of Cracow, with its territory, is declared to be for ever a free, independent and strictly neutral city, under the protection of Russia, Austria and Prussia.\"' · gün: Hertslet No. 14 (künyeden)" },

{ t:"1846-11-11", k:"siyaset", kapsam:"dis", etiket:["siyaset","diplomasi","konu-diplomasi"],
  b:"Krakov Serbest Şehri kaldırıldı, Avusturya'ya katıldı",
  gun:"11 Kasım 1846", ic_not_gun:"EB1911 yalnız 'November 1846' veriyor; gün künye krakow-serbest-sehri'nin kaynağından (Hertslet No. 202, Avusturya imparatorunun ilhak beyannamesi) — bu turda yeniden okunmadı.",
  yer:"Krakov", yer_id:"Krakov",
  d:"Şubat 1846 Krakov ayaklanmasını bahane eden Rusya, Avusturya ve Prusya, Viyana'daki konferansta serbest şehri kaldırıp Avusturya topraklarına katmaya karar verdi; İngiltere ve Fransa'nın itirazları sonuç vermedi.",
  kaynak:"Encyclopædia Britannica 1911, 'Cracow' (Wikisource) AYNEN: 'as the outcome of a conference at Vienna (November 1846) the three courts … decided to extinguish the state of Cracow and to incorporate it with the dominions of Austria.' · gün: Hertslet No. 202 (künyeden)" },

{ t:"1893-01-01", k:"fetih", kapsam:"dis", etiket:["askeri","konu-askeri"],
  b:"Bornu, Râbih b. Zübeyr'in hâkimiyetine girdi",
  gun:"1893", ic_not_gun:"Kaynak yalnız YIL veriyor (§4).",
  yer:"Bornu (Kukava, Dikeo)", yer_id:"Dikva (Dikeo)", kisiler:"Râbih b. Zübeyr",
  d:"Bagirmi ve Vedây'ı sarsan Sudanlı savaş beyi Râbih b. Zübeyr Bornu'yu ele geçirdi; 1896'ya kadar ülkenin tamamını alıp Dikeo'yu merkez edindi.",
  kaynak:"TDV bornu AYNEN: '… Bornu, Bagirmi Sultanı Râbih b. Zübeyir'in hâkimiyetine girdi (1893).' · '1896'ya kadar ülkenin tamamını ele geçiren ve Dikeo'yu merkez edinen Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp edilerek öldürülünce yerine oğlu hâkimiyetini devam ettirmek istedi, fakat Fransızlar karşısında tutunamadı.'" },

{ t:"1900-01-01", k:"savas", kapsam:"dis", etiket:["savas","konu-askeri"],
  b:"Râbih b. Zübeyr Fransızlara yenilip öldürüldü — Bornu'daki hâkimiyeti çözüldü",
  gun:"1900", ic_not_gun:"TDV yalnız YIL veriyor; ay-gün yazılmadı (§4). TDV bornu 'Fransız sömürge ordusu', TDV cad 'Dikoa'daki (Dikwa) savaşta esir düştü' diyor.",
  yer:"Bornu", yer_id:"Dikva (Dikeo)", kisiler:"Râbih b. Zübeyr",
  d:"Fransız sömürge ordusuna yenilen Râbih öldürüldü; oğlu hâkimiyeti sürdürmek istediyse de tutunamadı ve Bornu 1902'de Fransa, İngiltere ve Almanya arasında paylaşıldı.",
  kaynak:"TDV bornu AYNEN: '… Râbih 1900'de Fransız sömürge ordusu tarafından mağlûp edilerek öldürülünce yerine oğlu hâkimiyetini devam ettirmek istedi, fakat Fransızlar karşısında tutunamadı.' · TDV cad AYNEN: '… Dikoa'daki (Dikwa) savaşta esir düştü ve öldürüldü (1900).'" },

];

;
/* ==== data/olaylar_ek13.js ==== */
// ============================================================================
// DERİNLEŞTİRME PARTİSİ 13 — ÇAPRAZ İBERYA'nın kronoloji borcu
// ============================================================================
// Yazan: ÇAPRAZ İBERYA oturumu, 3 Ağustos 2026.
//
// 🔴 DOSYA ADI DEĞİŞTİ — koordinatör `olaylar_ek12.js` dedi, ORASI DOLUYDU.
// ---------------------------------------------------------------------------
// Devir mesajı "yeni dosya" diyordu; ölçtüm, değildi: `olaylar_ek12.js` aynı
// gün PETEK/NOKTA oturumu tarafından Cerbe 1560 için açılmış ve İKİ MADDE
// taşıyor (1560-01-01 Haçlı işgali · 1560-07-30 kalenin düşüşü).
// `Write` ile üzerine yazsaydım ikisi de SESSİZCE kaybolurdu — `CLAUDE.md §7`
// tam bu vakayı tarif ediyor. ⇒ Parti 13'e geçildi, ek12'ye DOKUNULMADI.
// 📌 Ve devrin kendisi kusurlu değildi, YAŞI kusurluydu: koordinatör mesajı
//    yazarken ek12 boştu. İki oturum aynı sıradaki adı aynı saatte seçti.
//
// 🔴 YAYINA BAĞLI DEĞİL — bağlamak için İKİ satır gerekiyor, ikisi de benim
//    dosyam değil:
//      index.html   <script src="data/olaylar_ek13.js?v=rNN"></script>
//      js/app.js    .concat(window.OLAYLAR_EK13 || [])
//    ⚠️ `OGRENILENLER.md §15`: `olaylar_ek9.js` tam bu sebeple 13 madde boyunca
//    görünmez kaldı — `denetle.py` `data/olaylar*.js` desenini okuyup SAYAR ve
//    TEMİZ der, tarayıcı ise dosyayı hiç yüklemez. Bağlanmadan "var" sayılmasın.
//
// ---------------------------------------------------------------------------
// İŞ ① — TUNUS 1569 ve 1573
// ---------------------------------------------------------------------------
// Koordinatörün talebi: "İhtiyacım iki tarih ve iki paragraf." Sebebi ÇAPRAZ
// İBERYA'nın D4 bulgusu: atlas Tunus'u 1535-1574 arası KESİNTİSİZ İspanyol
// gösteriyor ve içindeki dört yıllık Osmanlı penceresini yutuyordu.
// Koordinatör şehri `hafsi`ye çevirdi ama 1569-1573 penceresini AÇMADI, çünkü
// o iki güne madde yoktu. Bu dosya o borcu kapatır; kırılmayı koordinatör açar.
//
// TDV TURU — üç adres `<title>` ile sınandı:
//   /tunus            🟢 CANLI  "TUNUS - TDV İslâm Ansiklopedisi"
//   /kilic-ali-pasa   🟢 CANLI  "KILIÇ ALİ PAŞA - TDV İslâm Ansiklopedisi"
//   /uluc-ali         🟡 CANLI ama MÜSTAKİL MADDE DEĞİL — "bk. KILIÇ ALİ PAŞA"
//                        yönlendirmesi. `kaynak:` alanına YAZILMADI.
//
// 🔴 1569 TARİHİNDE KAYNAKLAR AYRIŞIYOR — ve ayrışma TDV'NİN KENDİ İÇİNDE
//   TDV `tunus`          : "1569'daki Osmanlılar'ın ikinci müdahalesi"
//   TDV `kilic-ali-pasa` : Tunus seferine çıkış "Şevval 977 (Mart 1570)"
//   batı literatürü      : Ekim 1569'da Cezayir'den kara yoluyla hareket,
//                          Beja'da Hafsî sultanı yenilip Tunus'a giriş
//   ⇒ Koordinatörün talimatı ("kaynaklar ayrışıyorsa İKİSİNİ DE YAZ")
//     uygulandı: üç okuma da maddenin `gun:` ve `d:` alanlarında adıyla duruyor.
//     Hangisinin seçileceği söylenmedi — o karar koordinatörün.
//
// ⚠️ `t:` İÇİN UYARI — kural uygulandı ama kuralın burada bilinen bir sakıncası var
//   `1569-01-01` yazıldı; gerekçe `CLAUDE.md §4`'ün yazılı kuralıdır:
//   "Gün bilinmiyorsa YYYY-01-01 yaz." AMA hiçbir kaynak Ocak 1569 demiyor;
//   en erken okuma Ekim 1569. Harita kırılması bu güne konursa Tunus, sefer
//   başlamadan ~9 ay önce Osmanlı boyanır.
//   ⇒ `KARAR-DEHLEK.md §5`'in ölçtüğü şema boşluğunun (`hassasiyet:`) yeni bir
//     vakası: doğru cevap "1569 sonbaharı" ve şema bunu ifade edemiyor.
//   ⇒ Koordinatör kırılmayı başka bir güne koyarsa BU MADDENİN `t:`si de
//     onunla BİRLİKTE taşınmalıdır (Değişmez 2 ±30 gün).

window.OLAYLAR_EK13 = [

// ---------------------------------------------------------------------------
// A-1 — Uluç Ali Paşa'nın Tunus'u alışı   🔴 1569-1573 penceresini AÇAN madde
// ---------------------------------------------------------------------------
{ t:"1569-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Uluç Ali Paşa'nın Tunus'u alışı — Hafsî-İspanyol düzeninin sonu",
  gun:"1569", ic_not_gun:"(TDV `tunus`: \\\"1569'daki ikinci müdahale\\\" · TDV `kilic-ali-pasa`: sefere çıkış Şevval 977 / Mart 1570 · batı literatürü: Ekim 1569'da hareket — gün hiçbirinde YOK)",
  yer:"Tunus, Beja — İfrîkıye", yer_id:"Tunus",
  kisiler:"Uluç (Kılıç) Ali Paşa, III. Mevlây Ahmed",
  d:"Şarlken 1535'te Tunus'u aldığında şehri kendisi yönetmemiş, Hafsî sultanı Mevlây Hasan'ı tahta geri oturtmuştu; TDV'nin ifadesiyle Tunus şehri \\\"1569'daki Osmanlılar'ın ikinci müdahalesine kadar İspanyollar'ın himayesinde ve III. Mevlây Ahmed'in idaresinde\\\" kaldı. 27 Haziran 1568'de Cezayir beylerbeyiliğine getirilen Uluç Ali karadan Tunus üzerine yürüdü, Beja'da Hafsî sultanını yenerek şehre girdi; Mevlây Ahmed İspanyol presidiosu Halkulvâdî'ye sığındı. Böylece körfez ikiye bölündü — şehir Osmanlı, liman kalesi İspanyol — ve bu bölünme dört yıl sürdü.", ic_not_d:"Seferin tarihinde kaynaklar ayrışır ve ayrışma TDV'nin kendi içindedir: `tunus` maddesi 1569, `kilic-ali-pasa` maddesi Şevval 977 (Mart 1570) der; ikisi de gün vermez.",
  kaynak:"tunus", duygu:["🎉"] },

// ---------------------------------------------------------------------------
// A-2 — Don Juan de Austria'nın Tunus'u geri alışı
// ---------------------------------------------------------------------------
// TDV `tunus` GÜN VERİYOR: "10 Ekim 1573". Yer tutucu gerekmedi.
{ t:"1573-10-10", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Don Juan de Austria'nın Tunus'u geri alışı — İnebahtı'nın karadaki tek karşılığı",
  gun:"10 Ekim 1573",
  yer:"Tunus, Halkulvâdî", yer_id:"Tunus",
  kisiler:"Don Juan de Austria, Kılıç Ali Paşa, Ramazan Paşa, Haydar Paşa",
  d:"İnebahtı'dan (1571) sonra Kutsal İttifak dağıldığı hâlde İspanya tek başına Kuzey Afrika'ya yüklendi: TDV'nin ifadesiyle \"10 Ekim 1573'te İspanyollar, Tunus'ta kontrolü ele geçirmek amacıyla yeni bir harekâta giriştiler. Tunus'u alıp burada 8000 asker bıraktılar.\" Don Juan de Austria kumandasındaki bu harekât, İnebahtı zaferinin karada karşılık bulduğu tek yerdir; ne var ki kalıcı olmadı ve şehir on bir ay sonra geri alındı. İşgalin devirdiği şey kurulmuş bir Osmanlı idaresiydi: 2 Zilhicce 980'de (5 Nisan 1573) Tunus kumandanı Kılıç Ali Paşa, kaymakamı Ramazan Paşa, beylerbeyi Haydar Paşa idi.",
  kaynak:"tunus", duygu:["😔"] },

// ===========================================================================
// İŞ ② — PORTEKİZ FASI KRONOLOJİSİ (D3'ün borcu)
// ===========================================================================
// Koordinatör D3'ü uygularken sekiz maddesiz yabancı kırılması doğdu ve
// bunları çekirdek tavanına yazmayıp KUYRUĞA aldı (`denetle.py`
// KUYRUK_DOSYALARI'na `yerlesimler_ek3.js` eklendi). Aşağıdaki dokuz madde
// o kuyruğu indirir.
//
// 🔴 TDV BU COĞRAFYAYI KAPSAMIYOR — ve bu ölçüldü, varsayılmadı
//   islamansiklopedisi.org.tr/arama/?q=asfi  → Safi · Agadir · Azemmûr ·
//   Mazagan · Arzila için MÜSTAKİL MADDE YOK (dönen 91 eşleşme "el-asfiyâ"
//   kelimesinin tasavvuf maddelerindeki geçişleri).
//   ⇒ `CLAUDE.md §4`: "TDV'nin kapsamadığı coğrafyalar için standart akademik
//     referans yeterlidir." Kaynaklar metnin içinde adıyla anıldı.
//   ⚠️ `kaynak:` alanı YALNIZ TDV `fas` maddesinin gerçekten konuştuğu üç
//     maddede var (A-6·A-7·A-8). Ötekilere slug YAZILMADI — TDV'de karşılığı
//     olmayan maddeye slug yazmak ÖLÜ LİNK üretir (ek11'de kurulan desen).
//   islamansiklopedisi.org.tr/fas 🟢 CANLI — "FAS - TDV İslâm Ansiklopedisi"
//
// 🔴 KOORDİNATÖRE: "1541 TEK MADDE" İSTENDİ, İKİ MADDE YAZILDI — sebebi Değişmez 2
//   Talep: "Bu bir madde, üç kırılmayı birden kapatır."
//   ÖLÇÜM: kapatamaz. Üç kayıp AYNI YILDA ama aynı ayda değil:
//       Agadir          kuşatma 16 Şubat → düşüş 12 MART 1541   (gün KESİN)
//       Safi · Azemmûr  tahliye EKİM 1541 (Eylül-Ekim'de tamamlandı)
//   Aradaki fark ~7 ay; Değişmez 2 eşiği ±30 GÜN. Tek madde üçünü ancak
//   üç kırılma da aynı güne konursa kapatır — o da Safi ve Azemmûr'u yedi ay
//   erkene çekmek, yani veriyi tarihe uydurmak yerine tarihi veriye uydurmak
//   olurdu. ⇒ A-6 (Mart) ve A-7 (Ekim) ayrı yazıldı.
//   📌 Sebep bağı korundu: A-7 kaybı A-6'ya bağlar, "sebebi tek" kalır.

// ---------------------------------------------------------------------------
// A-3 — Arzila'nın alınışı
// ---------------------------------------------------------------------------
// Gün KESİN. Aynı seferin Tanca ayağı atlasta zaten var (1471-08-28).
{ t:"1471-08-24", k:"fetih", etiket:["toprak-kazanc","konu-askeri","konu-imar","konu-ulastirma"],
  kapsam:"dis", b:"Arzila'nın Portekiz tarafından alınışı — Fas kıyısında ikinci köprübaşı",
  gun:"24 Ağustos 1471", yer:"Arzila (Asîlâ) — Fas",
  kisiler:"V. Afonso (Portekiz kralı)",
  d:"V. Afonso 30.000 kişilik bir kuvvet ve 400 parçalık donanmayla bizzat Fas kıyısına çıktı ve Vattâsî idaresindeki Arzila'yı 24 Ağustos 1471'de aldı. Şehrin düşmesi Tanca'nın direncini kırdı; Tanca dört gün sonra, 28 Ağustos'ta savaşsız teslim oldu. Portekiz böylece Sebte (1415) ve Kasrüssagīr'den (1458) sonra Fas'ın Atlas kıyısında üçüncü ve dördüncü mevziisini kurdu; kral bu seferden sonra unvanına \"Afrika'nın efendisi\" ibaresini ekletti.", duygu:["🎉"], yer_id:"Arzila (Asilah)" },

// ---------------------------------------------------------------------------
// A-4 — Safi   ⚠️ BAŞLANGIÇ TARİHİNDE KAYNAKLAR AYRIŞIYOR
// ---------------------------------------------------------------------------
// 1488 = Portekiz nüfuzunun/himayesinin kuruluşu · 1508 = fiilî işgal.
// İkisi de yazıldı; koordinatör kırılmayı hangisine koyacağına karar verir.
{ t:"1488-01-01", k:"vassal", etiket:["toprak-kazanc","konu-askeri","konu-siyasi"],
  kapsam:"dis", b:"Safi'nin Portekiz nüfuzuna girmesi",
  gun:"1488", ic_not_gun:"(kaynaklar ayrışır: 1488 himaye · 1508 fiilî işgal. Gün hiçbirinde yok)",
  yer:"Safi (Asfi) — Fas Atlas kıyısı", yer_id:"Safi (Asfi)",
  d:"Atlas kıyısının en işlek tahıl ve balıkçılık limanı olan Safi, 1488'de Portekiz nüfuzuna girdi; şehir bir süre yerli yöneticiler eliyle Portekiz himayesinde yönetildi ve 1508'de doğrudan işgal edildi. Kaynaklar bu iki aşamayı farklı ağırlıklandırdığı için başlangıç tarihi 1488 ile 1508 arasında değişir; ikisi de aynı sürecin uçlarıdır. Safi elli üç yıl Portekiz elinde kaldı ve 1541'de Agadir'in düşüşünün ardından boşaltıldı.", duygu:["🎌"] },

// ---------------------------------------------------------------------------
// A-5 — Santa Cruz do Cabo de Gué (Agadir)
// ---------------------------------------------------------------------------
// 🔴 NOKTA ZATEN VARDI, dönem yoktu — D3'ün "en ucuz düzeltme"si.
{ t:"1505-01-01", k:"kurulus", etiket:["toprak-kazanc","konu-askeri","konu-siyasi"],
  kapsam:"dis", b:"Santa Cruz do Cabo de Gué'nin kuruluşu — Agadir'de Portekiz kalesi",
  gun:"1505 (gün ve ay kaynakta yok; taca devir 1513)",
  yer:"Agadir (Santa Cruz do Cabo de Gué) — Sûs kıyısı", yer_id:"Agadir",
  kisiler:"João Lopes de Sequeira",
  d:"Sûs kıyısında, o güne dek Portekiz'in ulaşmadığı bir noktada özel teşebbüsle kurulan Santa Cruz do Cabo de Gué kalesi 1505'te inşa edildi ve 1513'te Portekiz tacına devredildi. Kale, Sûs vadisinin şeker ve altın ticaretini denetleyerek Merakeş'in güneybatı çıkışını kapatıyordu; bu yüzden Sa'dî hareketinin ilk büyük hedefi oldu. 1533'teki kuşatma püskürtüldü, 1541'deki ise başarıya ulaştı ve Portekiz'in Fas'taki çöküşünü başlattı.", duygu:["🌱"] },

// ---------------------------------------------------------------------------
// A-6 — Azemmûr'un alınışı
// ---------------------------------------------------------------------------
{ t:"1513-09-03", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  kapsam:"dis", b:"Azemmûr'un alınışı — Ümmürrebî' ağzının denetimi",
  gun:"3 Eylül 1513", ic_not_gun:"Correia & Lopes, 'Azemmour, Morocco: Early Sixteenth-century Portuguese Defences' (EAUM Univ. of Minho / CHAM): '…in 1513, on September 3rd.' Önceki '1 Eylül' yalnız Vikipedi'ye dayanıyordu (KIRILMASIZ-9, 19 Eyl 2026, 1.MURAT M-4632).",
  yer:"Azemmûr — Ümmürrebî' nehri ağzı, Fas", yer_id:"Azemmûr",
  kisiler:"Jaime (Braganza Dükü)",
  d:"Braganza Dükü Jaime kumandasındaki Portekiz ordusu Ümmürrebî' nehrinin ağzındaki Azemmûr'a 3 Eylül 1513'te direnişle karşılaşmadan girdi. Şehrin alınması hem nehir ağzının hem de iç bölgeye açılan tahıl yolunun denetimini verdi ve ertesi yıl 12 km güneybatısında Mazagan kalesinin kurulmasının önünü açtı. Azemmûr yirmi sekiz yıl Portekiz elinde kaldı.", duygu:["🎉"] },

// ---------------------------------------------------------------------------
// A-7 — Mazagan kalesinin kurulması
// ---------------------------------------------------------------------------
// 📌 Bu, Portekiz'in Fas'ta EN UZUN tuttuğu yerdir — 255 yıl (A-10'a bakınız).
{ t:"1514-01-01", k:"kurulus", etiket:["toprak-kazanc","konu-askeri","konu-siyasi"],
  kapsam:"dis", b:"Mazagan kalesinin kurulması — Fas'ta en uzun kalacak Portekiz mevzii",
  gun:"1514 yazı (gün kaynakta yok; kale 1541-42'de yeniden ve çok daha güçlü inşa edildi)",
  yer:"Mazagan (el-Cedîde) — Fas Atlas kıyısı",
  d:"Azemmûr'un alınmasının ertesi yılı, 1514 yazında kıyıda Mazagan hisarı inşa edildi. 1541'deki genel çöküşten sonra Portekiz, Fas'taki bütün mevzilerini bırakırken Mazagan'ı bırakmadı; tersine kaleyi İtalyan tarzı burçlarla baştan yaptırdı ve şehir iki yüz elli beş yıl boyunca elde tutuldu. 1562'deki büyük kuşatma da püskürtüldü. Mazagan, Portekiz'in Fas'taki son mevzii olarak 1769'da boşaltılacaktı.", duygu:["🌱"], yer_id:"Mazagan (El Jadida)" },

// ---------------------------------------------------------------------------
// A-8 — Agadir'in düşüşü   🔴 1541 ÇÖKÜŞÜNÜN TETİĞİ, GÜN KESİN
// ---------------------------------------------------------------------------
{ t:"1541-03-12", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  kapsam:"dis", b:"Agadir'in düşüşü — Sa'dîler'in Portekiz'i Fas'tan söküşü başlıyor",
  gun:"12 Mart 1541 (kuşatma 16 Şubat 1541'de başladı)",
  yer:"Agadir (Santa Cruz do Cabo de Gué) — Sûs", yer_id:"Agadir",
  kisiler:"Muhammed eş-Şeyh (Sa'dî sultanı), Guterre de Monroy (vali)",
  d:"Sa'dî sultanı Muhammed eş-Şeyh 16 Şubat 1541'de Santa Cruz kalesini kuşattı ve 12 Mart'ta zaptetti; vali Guterre de Monroy dahil altı yüz kadar Portekizli esir düştü.", ic_not_d:"TDV `fas` maddesi olayın siyasî ağırlığını şöyle veriyor: \\\"Muhammed'in 1539-1540'ta kardeşi Ahmed el-A'rec'i saf dışı bırakması ve 1541'de de Agādîr'i ele geçirmesi Fas'taki nüfuzunu bir hayli arttırdı.\\\" Kalenin düşüşü tek bir mevziin kaybı değil, Portekiz'in Fas siyasetinin çöküşüydü: yedi ay içinde Safi ve Azemmûr da boşaltıldı.",
  kaynak:"fas", duygu:["😔"] },

// ---------------------------------------------------------------------------
// A-9 — Safi ve Azemmûr'un boşaltılması
// ---------------------------------------------------------------------------
// ⚠️ AY KAYNAKLI, GÜN DEĞİL. HPIP (Portekiz Etkisi Mirası Portalı) ve Jorge
// Correia'nın Azemmûr çalışması tahliyenin Eylül-Ekim 1541'de tamamlandığını
// veriyor; TDV `fas` yalnız "aynı yıl" diyor. `t:` sourced AYIN 1'ine konuldu
// — YYYY-01-01 yer tutucusu KULLANILMADI, çünkü o Agadir'in düşüşünden ÖNCEYE
// düşer ve sebep-sonuç sırasını ters çevirirdi.
{ t:"1541-10-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  kapsam:"dis", b:"Safi ve Azemmûr'un boşaltılması — Portekiz Atlas kıyısından çekiliyor",
  gun:"Ekim 1541 (tahliye Eylül-Ekim'de tamamlandı; gün kaynakta yok)",
  yer:"Safi (Asfi), Azemmûr — Fas Atlas kıyısı", yer_id:"Safi (Asfi)",
  kisiler:"III. João (Portekiz kralı), Muhammed eş-Şeyh",
  d:"Agadir'in 12 Mart 1541'de düşmesi ve Fas sultanıyla umulan ittifakın kurulamaması üzerine III. João, Atlas kıyısındaki iki büyük mevziin boşaltılmasını emretti; Safi ve Azemmûr'un tahliyesi 1541 sonbaharında, Eylül-Ekim aylarında tamamlandı. Böylece tek yılda üç mevzi elden çıktı ve Portekiz'in Fas kıyısındaki elli yıllık yayılması tersine döndü; geriye Sebte, Tanca, Arzila, Kasrüssagīr ve yeni tahkim edilen Mazagan kaldı.", ic_not_d:"TDV `fas` maddesi aynı zinciri \"Portekizliler aynı yıl Azemmûr'u… boşaltmak zorunda kaldılar\" diye kaydeder.",
  kaynak:"fas", duygu:["😔"] },

// ---------------------------------------------------------------------------
// A-10 — Arzila'nın boşaltılması   ⚠️ TDV 1550, batı literatürü 1549 DİYOR
// ---------------------------------------------------------------------------
// TDV `fas`: "1550'de de Kasrüssagīr ile Asîlâ'yı boşaltmak zorunda kaldılar."
// Batı literatürü Arzila için 1549, Kasrüssagīr için 1550 verir.
// ⇒ İKİSİ DE YAZILDI (koordinatörün kuralı). `t:` batı okumasına konuldu
//   çünkü koordinatörün kuyruk listesi "1549 Arzila" diyor; TDV okuması
//   metinde duruyor ve kırılma 1550'ye taşınırsa `t:` de taşınmalıdır.
{ t:"1549-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  kapsam:"dis", b:"Arzila'nın boşaltılması — Portekiz kuzey kıyısını daraltıyor",
  gun:"1549", ic_not_gun:"(TDV `fas` 1550 der ve Kasrüssagīr ile birlikte anar; gün hiçbirinde yok)",
  yer:"Arzila (Asîlâ) — Fas kuzey kıyısı",
  kisiler:"III. João (Portekiz kralı), Muhammed eş-Şeyh",
  d:"Malî bunalım ve Sa'dî baskısının birleşmesiyle III. João, 1471'den beri elde tutulan Arzila'yı boşalttı. Portekiz'in Fas'taki varlığı böylece Sebte, Tanca ve Mazagan'a indi. Arzila 1577'de kısa süre yeniden işgal edilecek, 1589'da kesin olarak bırakılacaktı.", ic_not_d:"TDV `fas` maddesi tarihi bir yıl sonraya koyar ve şehri komşusuyla birlikte anar: \"Portekizliler… 1550'de de Kasrüssagīr ile Asîlâ'yı boşaltmak zorunda kaldılar\"; aynı yıl Fas şehri de Sa'dîler'in eline geçti.",
  kaynak:"fas", duygu:["😔"], yer_id:"Arzila (Asilah)" },

// ---------------------------------------------------------------------------
// A-11 — Mazagan'ın boşaltılması   🔴 GÜN KESİN — Portekiz Fası'nın sonu
// ---------------------------------------------------------------------------
{ t:"1769-03-11", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  kapsam:"dis", b:"Mazagan'ın boşaltılması — Portekiz'in Fas'taki son mevzii düştü",
  gun:"11 Mart 1769 (tahliye filosu Lizbon'dan 1 Şubat'ta hareket etti)",
  yer:"Mazagan (el-Cedîde) — Fas Atlas kıyısı",
  kisiler:"Sultan III. Muhammed b. Abdullah, Dinis Gregório (vali), Bernardo Ramires Esquível",
  d:"Alevî sultanı III. Muhammed b. Abdullah'ın 1769 başında başlattığı kuşatma karşısında 592 kişilik garnizon tutunamadı; Lizbon'dan 1 Şubat'ta yola çıkan tahliye filosu 11 Mart 1769'da son askerleri gemiye aldı ve şehri en son vali Dinis Gregório terk etti. Böylece 1415'te Sebte'nin alınmasıyla başlayan Portekiz'in Fas'taki varlığı üç buçuk asır sonra sona erdi. Mazagan, 1541'deki genel çöküşten sonra elde tutulan tek Atlas kıyısı mevziiydi ve iki yüz elli beş yılla Portekiz'in Fas'ta en uzun tuttuğu yer oldu.", duygu:["😔"], yer_id:"Mazagan (El Jadida)" },

// ===========================================================================
// İŞ ③ — BAHREYN (D9'un borcu)
// ===========================================================================
// Koordinatör: "1521-1602 penceresi elimde ama kayıtta 1281'den 1861'e hiçbir
// sahiplik yok; Değişmez 1b delik kabul etmiyor, zincirin TAMAMI gerekmeden
// tek satır yazamıyorum." Aşağıdaki yedi madde zinciri kronoloji tarafından
// kapatır. ⚠️ VERİ tarafında İKİ ENGEL kaldı — ilerleme dosyasında (§İŞ ③).
//
// TDV `bahreyn` 🟢 CANLI — "BAHREYN - TDV İslâm Ansiklopedisi", `<title>` sınandı.
//
// 🔴 1559'DA TDV İLE BATI LİTERATÜRÜ ÇELİŞİYOR — ve fark KIRILMA ÜRETİP
//    ÜRETMEMEK kadar büyük. İkisi de A-13'te yazıldı, seçim YAPILMADI.
//
// ⚠️ Ortaçağ halkası: TDV hanedan sırasını veriyor ama TARİH VERMİYOR
//    ("adanın sırasıyla Uyûnîler, Salgurlular, Tabîler, Cebrîler idaresinde
//    kaldığı … görülmektedir"). Tarihler bu yüzden komşu kayıtların
//    (Katîf · Lahsa: `usfuri 1281→1417`, `cebri 1417→1524`) deseninden ve
//    genel literatürden geliyor — A-12'nin `gun:` alanında açıkça yazılı.

// ---------------------------------------------------------------------------
// A-12 — Cebrîler'in Bahreyn'e hâkim olması
// ---------------------------------------------------------------------------
{ t:"1417-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi"],
  kapsam:"dis", onem:2, b:"Bahreyn adalarının Cebrîler'in eline geçmesi",
  gun:"1417 dolayı (Cebrî hânedanının kuruluşu XV. yüzyıl başına tarihlenir)", ic_not_gun:"eski gun: 1417 (TDV hanedan sırasını verir, TARİH VERMEZ; yıl komşu Katîf ve Lahsa kayıtlarının deseninden alındı — literatür Cebrî hanedanının kuruluşunu XV. yüzyıl başına koyar)",
  yer:"Bahreyn (Evâl adaları), Katîf, Lahsa",
  d:"TDV Bahreyn maddesi adanın \"sırasıyla Uyûnîler, Salgurlular, Tabîler, Cebrîler idaresinde kaldığı ve Cebrîler devrinde çoğunluğun Şiîler'den Sünnîler'e geçtiği\" kaydını düşer; hiçbirine tarih vermez. Genel literatürde Cebrî hanedanı XV. yüzyılın başında, Katîf'teki son Cervânî hükümdarını devirerek kuruldu ve en parlak devrinde (Acvâd b. Zâmil, ö. 1496) Basra körfezinin bütün Arap kıyısını, Lahsa'yı, Katîf'i ve Bahreyn adalarını denetledi. Acvâd'ın ardından Evâl adaları Mukrin b. Zâmil'e geçti — 1521'de Portekizliler'e yenilecek olan hükümdar odur.",
  kaynak:"bahreyn", duygu:["🏛"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-13 — Portekiz'in Bahreyn'i alışı
// ---------------------------------------------------------------------------
{ t:"1521-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  kapsam:"dis", onem:4, b:"Portekiz'in Bahreyn'i alışı — Cebrî hâkimiyetinin sonu",
  gun:"1521", ic_not_gun:"(TDV: \\\"Portekizliler, 1521'de Bahreyn'i ele geçirdiler\\\"; ay ve gün yok)",
  yer:"Bahreyn (Evâl adaları)",
  kisiler:"António Correia, Mukrin b. Zâmil (Cebrî hükümdarı)",
  d:"Cebrî hükümdarı Mukrin b. Zâmil'in Hürmüz'e vergi ödemeyi reddetmesi üzerine Portekiz donanması ile Portekiz'e tâbi Hürmüz Krallığı'nın kuvvetleri adaya çıktı; Mukrin savaşta yenildi ve Bahreyn 1521'de Portekiz idaresine girdi. Ada bundan sonra seksen yıl boyunca Hürmüz üzerinden, çoğunlukla Sünnî İranlı valiler eliyle yönetildi. Bahreyn'in incisi ve stratejik konumu, adayı körfezdeki Osmanlı-Portekiz çekişmesinin doğrudan hedefi hâline getirecekti.",
  kaynak:"bahreyn", duygu:["😔"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-14 — 1559 Osmanlı seferi   🔴 TDV ile BATI LİTERATÜRÜ ÇELİŞİYOR
// ---------------------------------------------------------------------------
// Koordinatör: "başarısız sefer kırılma üretmez: madde yazılır, veri değişmez.
// Bu atlasın en sevdiğim kayıt türü." ⚠️ BU VARSAYIM TDV'DE TUTMUYOR:
//   TDV `bahreyn` : Osmanlılar "1559 yılında Bahreyn'i ele geçirip orada bir
//                   üs" kurdu — ve DEVAMINDAKİ cümle hükmü kesinleştiriyor:
//                   "Daha sonra TEKRAR Portekizliler'in idaresine geçen
//                    adalar, 1602'de İran'a bağlı kuvvetler tarafından
//                    dışarı çıkarılmalarına kadar onların idaresinde kaldı."
//                   ⇒ "tekrar" kelimesi, arada Portekiz idaresinin KESİLDİĞİNİ
//                     söylüyor. TDV'ye göre 1559 BAŞARILI bir ele geçirmedir.
//   batı literatürü : Lahsa beylerbeyi Mustafa Paşa'nın kuşatması BAŞARISIZ;
//                   Hürmüz'den gelen Portekiz takviyesi, veba, teslim şartları.
// ⇒ FARK ŞEMAYA DOKUNUYOR: TDV okuması Bahreyn'e bir `d:` (Osmanlı) dönemi
//   açar ve o dönem HARD Değişmez 2 kırılması üretir (yabancı `2s` kuyruğu
//   değil). Batı okumasında hiçbir kırılma doğmaz, yalnız bu madde yazılır.
// 🔴 SEÇİM YAPILMADI — brifingim gereği ("hangisini seçtiğini SÖYLEME").
{ t:"1559-01-01", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Osmanlı'nın Bahreyn seferi — körfezde Portekiz'e karşı son büyük hamle",
  gun:"1559 (gün ve ay hiçbir kaynakta yok)",
  yer:"Bahreyn (Evâl adaları)",
  kisiler:"Mustafa Paşa (Lahsa beylerbeyi)",
  d:"Basra'nın 1546'da ilhakı ve Lahsa eyaletinin kurulmasıyla körfezin Arap kıyısına yerleşen Osmanlı Devleti, adanın inci ticaretini ve Portekiz'in Hürmüz hattını hedef alarak Lahsa beylerbeyi Mustafa Paşa kumandasında Bahreyn üzerine yürüdü. Seferin sonucu kaynaklarda ayrışır: TDV İslâm Ansiklopedisi Osmanlılar'ın \"1559 yılında Bahreyn'i ele geçirip orada bir üs\" kurduğunu, adaların \"daha sonra tekrar Portekizliler'in idaresine\" geçtiğini yazar; batı literatürü ise kuşatmanın başarısız olduğunu, Hürmüz'den denizden gelen Portekiz takviyesinin Osmanlı kuvvetlerini püskürttüğünü ve her iki tarafı da kıran bir veba salgınının ardından Osmanlılar'ın teslim şartları istediğini kaydeder. İki anlatı sonucun kendisinde ayrılır; ortak olan, Bahreyn'in Osmanlı elinde kalıcı olmadığıdır.",
  kaynak:"bahreyn", duygu:["🐎","😔"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-15 — Safevî fethi
// ---------------------------------------------------------------------------
{ t:"1602-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi"],
  kapsam:"dis", b:"Safevîler'in Bahreyn'i Portekiz'den alması",
  gun:"1602", ic_not_gun:"TDV ay/gün vermez",
  yer:"Bahreyn (Evâl adaları)",
  kisiler:"Şah I. Abbas, Allahverdi Han",
  d:"Şah I. Abbas'ın gönderdiği kuvvetler adadaki isyancılarla birleşerek Portekiz garnizonunu kaleden çıkardı; TDV'nin ifadesiyle adalar \"1602'de İran'a bağlı kuvvetler tarafından\" Portekizliler'in elinden alındı. Bahreyn böylece seksen bir yıllık Portekiz idaresinden çıkıp Safevî hâkimiyetine girdi ve yüz on beş yıl İran'a bağlı kaldı. Bu, Portekiz'in körfezdeki çözülmesinin ilk halkasıdır; yirmi yıl sonra Hürmüz'ün kendisi de İngiliz-İran ortak harekâtıyla düşecekti.",
  kaynak:"bahreyn", duygu:["🏛"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-16 — Umman istilâsı
// ---------------------------------------------------------------------------
{ t:"1717-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi"],
  kapsam:"dis", b:"Ummanlılar'ın Bahreyn'i istilâsı — Safevî hâkimiyetinin sonu",
  gun:"1717 (gün ve ay kaynakta yok)",
  yer:"Bahreyn (Evâl adaları)",
  d:"Safevî Devleti'nin son yıllarındaki çözülme sırasında Ya'rubî hanedanı idaresindeki Umman donanması adayı istilâ etti ve Safevî hâkimiyeti sona erdi. Bunu izleyen otuz beş yıl körfezin en karışık dönemidir: ada Umman, İran ve yerel Arap güçleri arasında birkaç kez el değiştirdi.", ic_not_d:"⚠️ Bu pencerenin iç ayrıntısı bu turda kesinleştirilemedi; kayıt yazılırken tek blok mu yoksa birkaç dönem mi olacağı ayrı bir ölçüm ister.",
  kaynak:"bahreyn", duygu:["🏛"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-17 — Âl-i Mezkûr dönemi
// ---------------------------------------------------------------------------
{ t:"1753-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi"],
  kapsam:"dis", b:"Bahreyn'in Bûşehr'deki Âl-i Mezkûr idaresine geçmesi",
  gun:"1753 (gün ve ay kaynakta yok)",
  yer:"Bahreyn (Evâl adaları), Bûşehr",
  kisiler:"Âl-i Mezkûr ailesi",
  d:"Aslen Umman'dan gelip Bûşehr'e yerleşen ve Huvele sayılan Âl-i Mezkûr ailesi, 1753'te Bûşehr'deki üslerinden hareketle Bahreyn'i idareleri altına aldı. Aile İran'ın körfez kıyısındaki Arap topluluklarına önderlik ediyor ve adayı İran adına yönetiyordu; son temsilcisi Nasr Âl-i Mezkûr, Bahreyn valiliğine Zend idaresince atanmıştı. Bu, adanın Âl-i Halîfe'den önceki son yönetimidir.",
  kaynak:"bahreyn", duygu:["🏛"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-18 — Âl-i Halîfe'nin fethi   🔴 RENK KİMLİĞİ YOK (ilerleme dosyası §İŞ ③)
// ---------------------------------------------------------------------------
{ t:"1783-01-01", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-hanedan"],
  kapsam:"dis", b:"Âl-i Halîfe'nin Bahreyn'i fethi — bugüne kadar süren hanedanın kuruluşu",
  gun:"1783", ic_not_gun:"(TDV: \\\"Bahreyn 1783 yılında Utûb kabilesinden Âl-i Halîfe'nin hâkimiyetine girdi\\\"; ay ve gün yok)",
  yer:"Bahreyn (Evâl adaları), Zübâre — Katar yarımadası",
  kisiler:"Ahmed b. Muhammed b. Halîfe, Nasr Âl-i Mezkûr",
  d:"Zend idaresinin Bahreyn valisi Nasr Âl-i Mezkûr, Katar yarımadasındaki Zübâre'yi kuşattı; Ahmed b. Muhammed b. Halîfe kumandasındaki Utûb kuvvetleri kuşatmayı kırdı ve karşı taarruza geçerek aynı yıl Bahreyn'i aldı. TDV'nin kaydı kısadır: \"Bahreyn 1783 yılında Utûb kabilesinden Âl-i Halîfe'nin hâkimiyetine girdi.\" Ahmed b. Muhammed bu zaferden sonra \"el-Fâtih\" lakabıyla anıldı ve kurduğu hanedan adada bugüne kadar hüküm sürdü.",
  kaynak:"bahreyn", duygu:["🏛"], yer_id:"Manama (Bahreyn)" },

// ---------------------------------------------------------------------------
// A-19 — İngiltere ile antlaşma   ⚠️ TDV 21 MAYIS, ATLAS 31 MAYIS
// ---------------------------------------------------------------------------
// Manama kaydındaki mevcut dönem: `ingiltere 1861-05-31 → 1923-10-29`.
// TDV `bahreyn` ise 21 Mayıs 1861 diyor. On günlük fark; İKİSİ DE yazıldı.
{ t:"1861-05-31", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  kapsam:"dis", onem:3, b:"Bahreyn'in İngiltere ile antlaşması — körfezde himaye düzenine giriş",
  gun:"31 Mayıs 1861", ic_not_gun:"(atlas bu günü taşıyor; TDV `bahreyn` 21 Mayıs 1861 der — on günlük fark çözülmedi)",
  yer:"Bahreyn (Evâl adaları)",
  kisiler:"Şeyh Muhammed b. Halîfe, kardeşi Ali",
  d:"TDV'nin kaydına göre \\\"21 Mayıs 1861'de İngiltere ile Bahreyn'i temsilen Şeyh Muhammed'in kardeşi Ali, bölgede köle ticaretini ve korsanlığı meneden bir anlaşma imzaladılar\\\"; İngiliz belgelerinde aynı antlaşma (Perpetual Truce of Friendship and Peace) 31 Mayıs 1861 tarihini taşır. Antlaşma Bahreyn'in dış ilişkilerini İngiltere'ye bağlayan himaye düzeninin ilk halkasıdır ve ada, Osmanlı'nın 1871'de Lahsa ile Katîf'e yeniden yerleşmesinden sonra da bu düzenin dışında kaldı.", ic_not_d:"⚠️ İki tarih arasındaki on günlük fark bu turda çözülemedi; atlas bugün 31 Mayıs'ı taşıyor.",
  kaynak:"bahreyn", duygu:["🤝"], yer_id:"Manama (Bahreyn)" },

// ===========================================================================
// İŞ ④ — MARDİN ÇELİŞKİSİ (PETEK/NOKTA'nın iddia denetiminden)
// ===========================================================================
// Koordinatörün sorusu: "Koçhisar 1516'da mı 1517'de mi? Mardin kalesi
// şehirden sonra mı düştü — yani ikisi de doğru olabilir mi?"
// CEVAP: 🟢 EVET, ikisi de doğru olabilir — ÇÜNKÜ AYNI OLAYA AİT DEĞİLLER.
//
// ── ÖLÇÜM ───────────────────────────────────────────────────────────────────
//   veri  Mardin  safevi 1507-01-01 → 1517-05-01 · OSMANLI 1517-05-01 →
//   veri  Urfa    safevi 1507-01-01 → 1516-05-01 · OSMANLI 1516-05-01 →
//   madde 1516-05-01 "Koçhisar (Kızıltepe) Savaşı ve Mardin ile Urfa'nın fethi"
//   ⇒ URFA maddeyle UYUŞUYOR. Ayrışan yalnız MARDİN — ve madde ikisini
//     TEK BAŞLIKTA anıyor. Kusur veride değil, MADDENİN KAPSAMINDA.
//
// ── TDV TURU — iki slug 🟢, biri ÖLÜ ────────────────────────────────────────
//   /mardin                🟢 CANLI  "MARDİN - TDV İslâm Ansiklopedisi"
//   /biyikli-mehmed-pasa   🟢 CANLI  "BIYIKLI MEHMED PAŞA - TDV İslâm …"
//   /koc-hisar             🔴 MADDE YOK — arama 36 içerik eşleşmesi, 0 başlık.
//                             Koçhisar müstakil madde DEĞİL. `kaynak:` yazılmadı.
//
// ── İKİ TDV MADDESİ NE DİYOR ────────────────────────────────────────────────
//   TDV mardin (birebir):
//     "…Bıyıklı Mehmed Paşa idaresindeki Osmanlı ordusu Koçhisar (bugünkü
//      Kızıltepe) yakınlarında Dede Garkın sahrasında Koruk mevkiinde Kara
//      Han'ı yendi (MAYIS 1516)."
//     "Fakat Safevî kuvvetleri KALEYE ÇEKİLDİ (EKİM 1515)."
//     şehrin zaptı: "1516 SONLARINDA (VEYA MAYIS 1517) burayı zaptetti"
//   TDV biyikli-mehmed-pasa (birebir):
//     "Koçhisar yakınlarında Dede Garkın sahrasında vuku bulan ve bütün gün
//      süren savaşta Kara Han'ın başı kesildi ve ordusu dağıldı (MAYIS 1516)."
//     "Bu arada Mardin şehri de fethedildi, fakat KALESİ ANCAK DOKUZ AY SONRA
//      teslim alındı."
//
// ── HÜKÜM ───────────────────────────────────────────────────────────────────
//   ① KOÇHİSAR SAVAŞI = MAYIS 1516. Kümenin EN SAĞLAM olgusu; İKİ TDV maddesi
//     de aynı ayı veriyor. ⇒ Mevcut maddenin `t:"1516-05-01"`i DOĞRU.
//   ② MARDİN KALESİ ŞEHİRDEN SONRA DÜŞTÜ — koordinatörün hipotezi TUTTU.
//     Safevîler Ekim 1515'te kaleye çekildi; kale "ancak dokuz ay sonra"
//     teslim oldu. Şehir ile kale AYRI TARİHLERDE düştü.
//   ③ ⚠️ AMA TDV KENDİ İÇİNDE TEREDDÜTLÜ ve iki madde birbiriyle de ayrışıyor:
//        mardin                : şehrin zaptı "1516 sonları VEYA Mayıs 1517"
//        biyikli-mehmed-pasa   : şehir erken, kale "dokuz ay sonra"
//     Bu ikisi tek bir takvime oturmuyor. ⇒ Verideki `1517-05-01`,
//     TDV `mardin`in PARANTEZ İÇİ İKİNCİ OKUMASINA ("veya Mayıs 1517")
//     karşılık geliyor — yani veri UYDURMA DEĞİL, ama TDV'nin ilk tercihi de değil.
//   ⇒ 🔴 KARAR KOORDİNATÖRÜN. Ben iki okumayı da yazdım, seçmedim.
//
// ── 🔴 ASIL KUSUR: MARDİN'İN KIRILMASI YANLIŞ MADDENİN ALTINDA BELİRİYOR ────
//   `1517-05-01` kırılmasına en yakın maddeler bugün:
//        1517-04-18  "Portekiz donanmasının Cidde'ye saldırısı"     13 gün
//        1517-05-19  "İskenderiye'nin donanmayla teslim alınması"   18 gün
//   İkisi de ±30 gün içinde ⇒ DEĞİŞMEZ 2 TEMİZ RAPORLUYOR. Ama kullanıcı
//   Mardin'in fethini Kızıldeniz ya da İskenderiye maddesinin altında görüyor —
//   `CLAUDE.md §3`'ün "değişim, o güne rastgele denk gelen alakasız bir
//   maddenin altında belirir — kullanıcının en çok şikâyet ettiği hata bu"
//   dediği şeyin ta kendisi. Denetim temiz, gösterim yanlış.
//   ⇒ A-20 bu boşluğu kapatır.

{ t:"1517-05-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Mardin kalesinin teslimi — Diyarbekir'in güneyinde Safevî direncinin sonu",
  gun:"Mayıs 1517", ic_not_gun:"(TDV `mardin`: şehrin zaptı \\\"1516 sonlarında VEYA Mayıs 1517\\\"; TDV `biyikli-mehmed-pasa`: şehir alındı, \\\"kalesi ancak dokuz ay sonra teslim alındı\\\". Gün hiçbirinde YOK)",
  yer:"Mardin, Diyarbekir", yer_id:"Mardin", kisiler:"Bıyıklı Mehmed Paşa, Kara Han (Safevî valisi)",
  d:"Çaldıran'dan sonra Diyarbekir bölgesine yürüyen Bıyıklı Mehmed Paşa Mardin'i kuşattığında Safevî kuvvetleri Ekim 1515'te kaleye çekildi; şehir Osmanlı eline geçtiği hâlde kale direndi. Safevî valisi Kara Han'ın takviyeyle karşı taarruza geçmesi Mayıs 1516'daki Koçhisar (Kızıltepe) Savaşı'yla sonuçlandı — Dede Garkın sahrasında bütün gün süren muharebede Kara Han'ın başı kesildi ve ordusu dağıldı. Kale ise TDV'nin ifadesiyle \"ancak dokuz ay sonra\" teslim oldu.", ic_not_d:"TDV `mardin` maddesi zaptı \"1516 sonlarında (veya Mayıs 1517)\" diye iki okumayla verir. ⚠️ Bu madde, atlasın Mardin için taşıdığı 1517 Mayıs tarihinin karşılığıdır ve Koçhisar Savaşı maddesinden (1516-05-01) AYRI bir olaydır: biri meydan muharebesi, öteki kalenin teslimi. İkisi bir yıl arayla durur ve ikisi de doğrudur.",
  kaynak:"mardin", duygu:["🎉"] },

// ===========================================================================
// İŞ ⑤ — ORHAN GAZİ'NİN ÖLÜMÜ (koordinatörün 8'lik eksik listesinden)
// ===========================================================================
// 🔴 TDV'DE MÜSTAKİL MADDE YOK — ARAYÜZ 2'nin bulgusunu BAĞIMSIZ doğruladım:
//   /arama/?q=orhan gazi  → Madde Başlıkları'nda 5 sonuç ve BEŞİ DE YAPI:
//     orhan-gazi-camii-ve-imareti · orhan-gazi-kulliyesi · orhan-gazi-turbesi
//     lala-sahin-pasa-kulliyesi · geyikli-baba-kulliyesi
//   ⇒ Osmanlı'nın İKİNCİ HÜKÜMDARININ TDV'de biyografik maddesi YOK.
//     Ölü slug tuzağı DEĞİL (sayfalar gerçek sonuç veriyor); madde gerçekten yok.
//   ⇒ `CLAUDE.md §4`: "TDV'nin kapsamadığı … için standart akademik referans
//     yeterlidir." `kaynak:` alanı YAZILMADI (ölü link üretmesin).
//
// ⚠️ GÜN YOK: literatür Mart 1362'de birleşiyor, bir kısmı Nisan 1362 diyor.
//    `padisahlar.js` `to:"1362-03"` taşıyor ⇒ `t:` onunla hizalandı.

{ t:"1362-03-01", k:"taht", etiket:["siyaset","konu-siyasi","konu-kisiler","konu-hanedan"],
  b:"Orhan Gazi'nin vefatı — beylikten devlete geçen kırk yılın sonu",
  gun:"Mart 1362", ic_not_gun:"(gün bilinmiyor; kaynakların bir kısmı Nisan 1362 der. `padisahlar.js` 1362-03 taşıyor)",
  yer:"Bursa", yer_id:"Bursa", kisiler:"Orhan Gazi, I. Murad, Süleyman Paşa",
  d:"Osman Gazi'nin 1324'te ölümüyle beyliğin başına geçen Orhan Gazi, otuz sekiz yıllık idaresinde Osmanlı'yı bir uç beyliğinden Marmara'nın iki yakasına oturmuş bir devlete dönüştürdü: Bursa (1326), İznik (1331) ve İzmit (1337) alındı, Karesi Beyliği ilhak edildi, ilk akçe basıldı (1327), ilk medrese İznik'te kuruldu (1331) ve Rumeli'ye geçiş Çimpe (1352) ile Gelibolu (1354) üzerinden kalıcı hâle geldi. Rumeli fütuhatını yürüten büyük oğlu Süleyman Paşa'yı 1357'de bir av kazasında kaybetti; kendisi Mart 1362'de Bursa'da vefat etti ve yerine oğlu I. Murad geçti.", ic_not_d:"⚠️ TDV İslâm Ansiklopedisi'nde Orhan Gazi'nin müstakil bir maddesi bulunmadığından bu kayıt akademik literatüre dayanmaktadır (Halil İnalcık; Colin Imber, The Ottoman Empire 1300-1650; Feridun Emecen; Cemal Kafadar, Between Two Worlds).", vefat_id:"orhan", duygu:["👑"] },

];

;
