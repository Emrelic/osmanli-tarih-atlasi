// ============================================================================
// EK OKUMA — 1883-1909 DİLİMİ
// ============================================================================
// AD ALANI: bu dosya YALNIZ window.EKOKUMA_P76E tanımlar.
// Yükleyici satırı koordinatördedir; index.html'e dokunulmadı.
//
// KAYNAK YÖNTEMİ: TDV İslâm Ansiklopedisi birincil. Gövdesi çekilip okunan
// ve kullanılan maddeler: sudan · osman-dikne · habes-eyaleti · bagdat-
// demiryolu · rumeli-demiryolu · hicaz-demiryolu · almanya · ittihat-ve-
// terakki-cemiyeti · mesrutiyet · meclis-i-mebusan · otuzbir-mart-vakasi ·
// tevfik-fikret · yemen · residiler · suudiler · darulaceze · makedonya ·
// bulgaristan · zelzele · gazi-edhem-pasa
//
// TUZAĞA DÜŞÜLEN VE ÇÖZÜLEN SLUGLAR:
//   habesistan  -> gövde yalnız "bk. ETİYOPYA"; asıl madde habes-eyaleti
//                  slugunda bulundu ve ondan okundu (canlı yönlendirme kütüğü).
//   demiryolu   -> müstakil madde yok, arama sayfası döndü; Rumeli ve Bağdat
//                  hatları kendi maddelerinden okundu.
//   domeke-muharebesi -> 0 sonuç. TDV olay değil yer-kişi ansiklopedisi:
//                  "dömeke" araması gazi-edhem-pasa · izzet-pasa-ahmed ·
//                  tesalya maddelerine düştü; gazi-edhem-pasa okundu.
//   abdulhamid-ii -> gövde çekildi ama 1905 suikastını ve Fikret'i
//                  KAPSAMIYOR; suikastın edebî yüzü tevfik-fikret
//                  maddesinden alındı, suikastın faili için TDV'de dayanak
//                  BULUNAMADI ve karta yazılmadı.
//
// BULUNAMADI (kayda geçer, kartta uydurulmadı):
//   · Müleydâ Savaşı'nın GÜNÜ: residiler maddesi savaşı adıyla anmıyor,
//     suudiler maddesi YIL veriyor (1891), gün vermiyor. Kart yıl hassasiyetinde.
//   · Tokar'ın Mehdî kuvvetlerine geçiş GÜNÜ: osman-dikne maddesi Doğu Sudan
//     çarpışmalarını gün gün sayıyor ama Tokar'ın teslim gününü vermiyor.
//   · 1894 depreminin can kaybı: zelzele maddesinden çekilen rakamlar hangi
//     depremi tarihlediği ayırt edilemediği için KULLANILMADI.
//   · Arabistanlı Lawrence filmi ve popüler kültür: TDV kapsamı dışı; kartta
//     yalnız hattın kendi akıbeti anlatıldı, film anılmadı.
//
// ŞEMA: mevcut ek okuma dosyalarıyla birebir —
//   { id, tur, kisa|ad, metin, kesinlik, olay, kaynak }
// `olay:` değerleri "YYYY-MM-DD|<madde metninden bir parça>" biçimindedir ve
// kronoloji maddesinin `t:` ve `b:` alanlarından ÖLÇÜLEREK alınmıştır.
// `gorsel:` hiçbir kartta yok — kamu malı/CC0 olduğu doğrulanmış görsel
// bulunmadı.
// ============================================================================
window.EKOKUMA_P76E = [

// ── Şeykan ──────────────────────────────────────────────────────────────────
{ id:"sebep-sonuc-seykan-1883", tur:"sebep-sonuc",
  kisa:"Bir çöl vaizinin adamları, tüfekli bir orduyu nasıl yok etti?",
  metin:"Kasım 1883'te Kordofan'ın Şeykan denen kesiminde on bin kişilik bir ordu ortadan kalktı. Kumandanı emekli bir İngiliz subayıydı, askeri Mısırlıydı, karşısındakiler ise birkaç yıl önce kimsenin adını duymadığı bir vaizin müridleriydi. Bu nasıl oldu?\n\n"
    +"■ KARŞIDAKİ KİMDİ\n"
    +"Muhammed Ahmed, mehdîlik iddiasıyla ortaya çıkmadan önce Kordofan ve Cibâlünnûbe'yi dolaşıp güvendiği kimselere davetini açmış, sonra Ebâ adasında merkezini kurmuştu. Sudan genel valisi Mehmed Rauf Paşa ona iddiasından vazgeçmesi karşılığında bir teklif götürdü; teklif reddedildi ve üzerine gönderilen birlikler yenildi. Yani Şeykan, hareketin ilk zaferi değil, üst üste gelen zaferlerin sonuncusuydu. Ocak 1883'te Kordofan'ın merkezi Ubeyyid çoktan düşmüştü.\n\n"
    +"■ MAĞLUP OLAN ORDU NE İDİ\n"
    +"Şeykan'da dağılan kuvvet bir Osmanlı ordusu değildi. Mısır'ın kendi askeriydi ve Mısır ordusu bu tarihte yeni bir yenilgiden çıkmış, dağıtılmış ve alelacele yeniden kurulmuş bir ordudur. Kumanda, Mısır hizmetine girmiş İngiliz subaylara bırakılmıştı; asker acemi, yol uzun, su azdı. Çölde ilerleyen bir kolun en büyük düşmanı karşısındaki değil, kendi kuyruğudur: ikmal hattı bir kez kesilince ateş gücünün hiçbir anlamı kalmaz. Şeykan'da olan tam budur.\n\n"
    +"■ \"NASIL OLUYOR DA ŞUNU YENEMİYOR, BUNU YENİYOR\"\n"
    +"Bu soru tarihte sık sorulur ve hemen her zaman aynı yanılgıya dayanır: iki savaşın aynı ölçekte olduğu varsayımına. Mısır'ın Anadolu'daki başarısı ile Sudan'daki başarısızlığı aynı kuvvetin iki sınavı değildir. Biri limanlardan beslenen, yolları olan, nüfusu yoğun bir coğrafyada; öteki yüzlerce kilometre susuz çölün ötesinde, her fişeğin deve sırtında taşındığı bir coğrafyada geçer. Üstelik Sudan'da devlet, yerli halka vergi memuru ve köle taciri olarak görünüyordu; Mehdî ise o memura karşı çıkan herkesi tek bayrak altında toplayabiliyordu. Bir tarafın tüfeği vardı, öteki tarafın ise sebebi.\n\n"
    +"■ SONRASI\n"
    +"Şeykan'dan sonra Sudan'da devlet otoritesi fiilen çözüldü. Mehdî 26 Ocak 1885'te Hartum'a girdi ve büyük camide kılınan cuma namazında bizzat imamlık etti. Bu, bir isyanın bittiği değil, bir devletin kurulduğu andır.",
  kesinlik:"kesin",
  olay:["1883-11-05|Şeykan bozgunu"],
  kaynak:"TDV: sudan (gövde okundu — Muhammed Ahmed el-Mehdî'nin ortaya çıkışı, Rauf Paşa'nın teklifi, Ubeyyid'in alınışı, Hartum'a giriş 26 Ocak 1885) · TDV: osman-dikne (Mısır birliklerinin bu dönemdeki durumu için)" },

// ── Doğu Sudan: Mehdî oraya nasıl ulaştı ────────────────────────────────────
{ id:"kimdir-osman-dikne", tur:"kimdir",
  ad:"Osman Dikne — Kızıldeniz kıyısının kendi adamı",
  metin:"Mehdî hareketinin merkezi Sudan'ın batısındaydı: Kordofan, Ebâ adası, sonra Hartum. Buna rağmen daha 1883 yazında Kızıldeniz kıyısında, yani ülkenin öbür ucunda Mehdî adına çarpışan bir kuvvet vardı. Arada yüzlerce kilometre, hâlâ Mısır idaresindeki topraklar duruyordu. Bu kuvvet oraya yürüyerek gitmedi; zaten oradaydı.\n\n"
    +"■ KİM\n"
    +"Doğu Sudan'daki Mehdî emîrlerinin en tanınmışı Osman Dikne'dir. Kökeni hakkında kaynaklar ayrılır: bir rivayet 1836'da Sevâkin'de doğduğunu söyler, bir başkası Fransız asıllı olup Georges Nisbet adını taşıdığını iddia eder. Hangisi doğru olursa olsun, Mehdî onu Doğu Sudan'da Bece (Beja) kabilelerine emîr tayin etti — yani dışarıdan bir ordu göndermek yerine, bölgenin kendi insanını bölgenin başına geçirdi.\n\n"
    +"■ NE YAPTI — kaynağın verdiği takvim\n"
    +"5 Ağustos 1883'te beş yüz-altı yüz adamıyla İngiliz-Mısır kuvvetine saldırdı. 11 Eylül'de Kubâb'da bir Mısır birliğiyle çarpıştı. 15 Ekim'de Ebint'te Mısır askerlerini ve sivilleri kılıçtan geçirdi. 5 Kasım'da Kızıldeniz sahilinde bir Mısır kuvvetini yok etti. 2 Aralık'ta Temeynâb'da 1100 kişilik bir Mısır birliğini mağlûp etti. Ertesi yıl 4 Şubat'ta sahile ikinci saldırısını yaptı, 8 Şubat'ta Ûkâk baskınında başarı kazandı, 29 Şubat'ta General Graham kumandasındaki büyük bir İngiliz birliğine ağır zayiat verdirdi ve 12 Mart 1884'te Teemmây'da son büyük saldırısını gerçekleştirdi.\n\n"
    +"■ NİÇİN ÖNEMLİ\n"
    +"Bu takvim, doğudaki ayaklanmanın batıdan gelen bir ordunun eseri olmadığını gösterir. Mehdî devleti 1884'te bitişik bir ülke değildi: batıda Kordofan, doğuda Kızıldeniz kıyısı Mehdî adına hareket ediyor, aradaki Nil hattı (Berber, Hartum, Dongola, Sennâr) hâlâ Mısır elinde duruyordu. Arada kalan şerit, ancak 1884 Mayısında Berber'in, 1885 Ocağında Hartum'un düşmesiyle kapandı. Yani haritadaki o tuhaf boşluk bir çizim hatası değil, o yılın gerçeğidir.\n\n"
    +"Osman Dikne, kendisinden sonra gelen bütün rejimlere direnip 1926'da Vâdîhalfâ'da öldü.",
  kesinlik:"kesin",
  olay:["1884-07-18|Zeyla","1883-11-05|Şeykan bozgunu"],
  kaynak:"TDV: osman-dikne (gövde okundu — doğum rivayetleri, Bece kabilelerine emîr tayini, 1883-1884 çarpışma takvimi, ölümü) · TDV: sudan (Hartum'a giriş 26 Ocak 1885)" },

// ── Habeş Eyaleti ───────────────────────────────────────────────────────────
{ id:"teknik-habes-eyaleti", tur:"teknik-bilimsel",
  kisa:"Habeş eyaleti Habeşistan mıydı? Bir eyalet adı, bir ülkeyi kapsamak zorunda değildir.",
  metin:"Osmanlı taşra teşkilâtında \"Habeş eyaleti\" diye bir birim vardır ve adı yanıltıcıdır: Habeş krallığını, yani bugün Etiyopya dediğimiz yayla ülkesini kapsamaz. Kapsadığı şey Kızıldeniz'in Afrika kıyısı ve o kıyının limanlarıdır.\n\n"
    +"■ KURULUŞ\n"
    +"Eyalet 5 Temmuz 1555'te resmen kuruldu; ilk beylerbeyi Özdemir Paşa'dır. İlk merkez Sevâkin oldu, sonra Masavva' öne çıktı; 1559'da iç kesimde Debârvâ askerî üs olarak kuruldu.\n\n"
    +"■ NERELER BAĞLIYDI\n"
    +"Masavva', Arkiko, Sevâkin, Zeyla', Beylûl, Ayzâb, Berberâ ve Dehlek adaları. Akik ve Arkiko gibi sancaklara bölünmüştü; 1573'te Yukarı Mısır'dan İbrim de eyalete katıldı. Kâğıt üzerinde eyaletin menzili Mısır sınırından Doğu Afrika'da Mombasa'ya kadar uzanıyordu — ama bu menzil bir kıyı şeridi ve liman dizisidir, bir kara ülkesi değil.\n\n"
    +"■ DEMEK Kİ\n"
    +"\"Habeş eyaleti\" tabiri, o kıyının karşısındaki büyük coğrafyanın adından türemiştir; idarenin fiilen tuttuğu yer, denizden beslenebilen noktalardır. Bu, Kızıldeniz'deki Osmanlı varlığının niteliğini de açıklar: amaç yaylayı fethetmek değil, Portekiz'in ve sonra başkalarının Kızıldeniz'e girmesini engellemek, hac yolunu ve Hicaz'ı emniyete almaktı. Liman tutmak bunun için yeter; iç bölge tutmak ise gereksiz ve pahalıdır.\n\n"
    +"■ SONU\n"
    +"XIX. yüzyılda eyalet Cidde idaresiyle birleştirildi. 1865'te limanlar Mısır hidivi İsmâil Paşa'ya devredildi; 1880'lerden itibaren kıyı, İtalyan ve öteki Avrupa güçlerinin eline geçti. Zeyla' ve Berberâ'nın 1884'te İngiltere'ye geçişi, üç yüz otuz yıllık bir kıyı idaresinin son halkasıdır.",
  kesinlik:"kesin",
  olay:["1884-07-18|Zeyla","1884-01-01|Zeyla"],
  kaynak:"TDV: habes-eyaleti (gövde okundu — 5 Temmuz 1555 kuruluşu, Özdemir Paşa, merkezler, bağlı liman ve sancakların listesi, 1573 İbrim, Cidde ile birleştirilmesi, 1865'te Mısır'a devir). NOT: `habesistan` slugu yalnız \"bk. ETİYOPYA\" yönlendirmesi döndürdüğü için asıl madde bu slugda arandı ve bulundu." },

// ── Osmanlı demiryolları ────────────────────────────────────────────────────
{ id:"teknik-osmanli-demiryollari", tur:"teknik-bilimsel",
  kisa:"Devletin parası yoktu, demiryolu ise pahalıydı: hat nasıl yapıldı, bedeli kim ödedi?",
  metin:"Osmanlı demiryolu tarihinin anahtarı teknik değil malîdir. Devlet hattı kendi yapamıyordu; yabancı şirkete imtiyaz veriyor, karşılığında şirketin zararını üstleniyordu. Bu usulün adı kilometre garantisiydi ve bütün hikâye oradan çıkar.\n\n"
    +"■ KİLOMETRE GARANTİSİ NASIL İŞLERDİ\n"
    +"Şirket hattı yapar ve işletir; hattın her kilometresi için devlet ona yılda belli bir geliri taahhüt eder. Hat kazanırsa şirket kazanır, kaybederse farkı devlet öder. Yani riskin tamamı devlette, kârın tamamı şirkettedir. Bu, hattı olmayan bir ülkenin hat sahibi olmasının tek yoluydu; ama hattın geçtiği yerin kalkınmasından çok, kilometrenin uzunluğunun önemli hâle gelmesi gibi bir sakatlığı da vardı.\n\n"
    +"■ RUMELİ HATTI — büyük ölçek, büyük fatura\n"
    +"17 Nisan 1869'da Baron Maurice de Hirsch ile Rumeli Demiryolları Mukavelesi imzalandı: İstanbul'dan başlayıp Bosna üzerinden Selânik'e ve Sava nehrine uzanacak yaklaşık iki bin kilometrelik bir ağ. Devletin aradığı şey askerî idi — Balkanlarda çıkan isyanlara asker yetiştirebilmek ve Avrupa ile bütünleşmek. Taahhüt edilen bedel doksan dokuz yıl boyunca yılda 28 milyon franktı; hesabın sonunda devletin yaklaşık 2.772.000.000 franklık bir yükün altına girdiği, Hirsch'in ise 350 milyon frank civarında kazandığı kaydedilir.\n"
    +"İlk parça 4 Ocak 1871'de açıldı: Yedikule-Küçükçekmece, on beş kilometre. 17 Haziran 1873'te İstanbul-Sarımbey-Belova işletmeye girdi; 1875'in ilk yarısında Üsküp-Mitroviçe ve Tırnova-Yanbolu tamamlandı. Avrupa bağlantısı ise 12 Ağustos 1888'de kuruldu: Şark Ekspresi ilk kez Sirkeci'den Viyana'ya hareket etti.\n\n"
    +"■ ANADOLU HATTI — aynı usul, başka sermaye\n"
    +"24 Eylül 1888'de Haydarpaşa-Ankara hattı imtiyazı Alfred von Kaulla'ya verildi, sözleşme 4 Ekim 1888'de imzalandı. Devlet her kilometre için senede 15.000 franklık garanti verdi. 4 Mart 1889'da Anadolu Demiryolları Şirketi kuruldu.\n\n"
    +"■ FATURANIN TAHSİLİ\n"
    +"Bu usulün bedeli yalnız para değildi. 1878'den sonra Rumeli hattının önemli bir kesimi artık Osmanlı toprağında değildi; 1909'da devlet, Doğu Rumeli'deki hatları 42 milyon franklık bir tazminat karşılığında Bulgarlara bıraktı. Yani devlet, kaybettiği toprakta kendi yaptırdığı hattın bedelini ikinci kez ödedi.",
  kesinlik:"kesin",
  olay:["1888-09-24|Haydarpaşa-Ankara demiryolu"],
  kaynak:"TDV: rumeli-demiryolu (gövde okundu — 17 Nisan 1869 mukavelesi, güzergâh, 28 milyon frank/yıl taahhüdü, 4 Ocak 1871 · 17 Haziran 1873 · 1875 · 12 Ağustos 1888 tarihleri, toplam yük ve Hirsch'in kazancı, 1909'da 42 milyon franklık tazminat) · TDV: bagdat-demiryolu (24 Eylül 1888 imtiyazı, 4 Ekim 1888 sözleşmesi, 15.000 frank/km garantisi, 4 Mart 1889 şirket kuruluşu). NOT: müstakil bir `demiryolu` maddesi bulunamadı; bilgi iki hattın kendi maddelerinden derlendi." },

// ── Alman imtiyazının anlamı ────────────────────────────────────────────────
{ id:"sebep-sonuc-alman-imtiyazi-1888", tur:"sebep-sonuc",
  kisa:"1888'de verilen bir demiryolu imtiyazı, otuz yıl sonra bir ittifakın adı oldu. Nasıl?",
  metin:"24 Eylül 1888'de imzalanan şey görünüşte sıradandı: Haydarpaşa ile Ankara arasında hat yapma ve işletme hakkı. Ama bu imtiyaz, Osmanlı Devleti'nin dış siyasetinin ekseninin kaydığı noktadır.\n\n"
    +"■ BELGENİN KENDİSİ\n"
    +"İmtiyaz Alfred von Kaulla'ya verildi, sözleşme 4 Ekim 1888'de imzalandı ve Deutsche Bank hem işletmeye açılmış Haydarpaşa-İzmit hattının işletme hakkını hem de Ankara'ya uzanacak hattın inşa imtiyazını aldı. Devlet kilometre başına senede 15.000 frank garanti etti. 4 Mart 1889'da Anadolu Demiryolları Şirketi kuruldu. Bu tarihten sonra Alman finans çevrelerinin Osmanlı ekonomisindeki ağırlığı hızla arttı.\n\n"
    +"■ DEVLET NİÇİN ALMANYA'YI SEÇTİ\n"
    +"Cevap, Almanya'nın ne yaptığında değil, ne YAPMADIĞINDA. İngiltere Mısır'daydı, Fransa Tunus ve Cezayir'deydi, Rusya doğuda toprak istiyordu. Almanya'nın ise müslüman bir sömürgesi yoktu ve Osmanlı toprağından pay talebi de yoktu. Sömürgesi olmayan bir büyük devlet, toprak isteyen üç büyük devleti dengelemenin en ucuz yoluydu. Askerî tarafı da hazırdı: Prusya ordusuna duyulan hayranlık yüz yıl geriye gidiyordu, 1835-1839'da Helmuth von Moltke Osmanlı ordusunda görev yapmış, sonra Colmar von der Goltz Paşa silâh siparişlerinde belirleyici rol oynayarak Krupp ve Mauser fabrikalarından büyük alımların yolunu açmıştı.\n\n"
    +"■ ALMANYA NİÇİN İSTEDİ\n"
    +"Hızla sanayileşen bir ülke için Osmanlı toprağı pazar, ham madde kaynağı ve Doğu'ya açılan yoldu; ayrıca İngiltere, Fransa ve Rusya'nın nüfuzunu dengelemek işine geliyordu. \"Doğu'ya açılma\" Almanya'da bir propaganda ve prestij meselesi hâline gelmişti.\n\n"
    +"■ BAĞDAT'A UZANMASI\n"
    +"Ankara'da duran hat oradan doğuya uzatıldı: 23 Aralık 1899'da ön imtiyaz, 21 Ocak 1902'de esas imtiyaz anlaşması, 21 Mart 1903'te Konya-Ereğli kesiminin finansman mukavelenâmesi, 13 Nisan 1903'te Bağdat Demiryolu Şirketi'nin kuruluşu. Şirket her kilometre için nominal değeri 275.000 frank olan Osmanlı tahvilleri aldı; orman, maden ve taş ocağından yararlanma hakkı, malzemenin gümrüksüz ithali ve askerî taşımalara öncelik de sözleşmeye girdi. İmtiyaz doksan dokuz yıllıktı, ilk otuz yılın sonunda devlete satın alma hakkı tanıyordu.\n\n"
    +"■ STRATEJİK ANLAMI\n"
    +"Bağdat'a inen bir hat, Berlin'den Basra körfezine kesintisiz bir kara yolu demekti — ve bu yol, İngiltere'nin Hindistan'a giden deniz yolunun yanından geçiyordu. İngiltere projeyi tam bu yüzden tehlikeli gördü ve müdahale etti. Aynı hat Osmanlı için de aynı şeyi ifade ediyordu ters yönden: Anadolu hububatını İstanbul'a taşımak, orduyu doğu vilâyetlerine günlerle değil saatlerle ulaştırmak ve yüz binlerce muhaciri hat boyunca iskân etmek.\n\n"
    +"■ HİCAZ HATTI NİÇİN AYRI BİR ŞEY\n"
    +"Bağdat hattı yabancı sermayeyle, imtiyazla, kilometre garantisiyle yapıldı. Hicaz hattı ise bağışla yapıldı ve bu bilinçli bir tercihti: hattın amacı ticaret değil, hac yolunu kısaltmak ve halifenin İslâm dünyasındaki konumunu göstermekti. Fonun yaklaşık üçte biri bağışlardan, üçte ikisi pul, harç ve maden imtiyazı gibi kaynaklardan geldi. Aynı devir, iki hat, iki bambaşka finans mantığı — ve iki ayrı siyasî mesaj.\n\n"
    +"İstanbul-Bağdat bağlantısı ancak Ekim 1918'de tamamlanabildi; hat 10 Ocak 1928'de Türkiye Cumhuriyeti tarafından satın alınarak devletleştirildi.",
  kesinlik:"kesin",
  olay:["1888-09-24|Haydarpaşa-Ankara demiryolu"],
  kaynak:"TDV: bagdat-demiryolu (gövde okundu — 24 Eylül 1888 imtiyazı ve Alfred von Kaulla, 4 Ekim 1888 sözleşmesi, 15.000 frank/km, 4 Mart 1889 şirket, 1899-1903 uzatma takvimi, 275.000 franklık tahviller, 99 yıllık imtiyaz, Ekim 1918 bağlantı, 10 Ocak 1928 devletleştirme) · TDV: almanya (Osmanlı'nın Almanya'yı tercih sebebi, Moltke 1835-1839, von der Goltz ve Krupp-Mauser alımları, Deutsche Bank'ın 1888 imtiyazı) · TDV: hicaz-demiryolu (bağış finansmanı ve üçte bir/üçte iki oranı)" },

// ── İttihâd-ı Osmânî ────────────────────────────────────────────────────────
{ id:"sebep-sonuc-ittihadi-osmani-1889", tur:"sebep-sonuc",
  kisa:"Dört tıbbiye öğrencisi bir cemiyet kurdu; on dokuz yıl sonra o cemiyet padişahı anayasaya döndürdü.",
  metin:"2 Haziran 1889'da Mekteb-i Tıbbiyye-i Şâhâne'de dört öğrenci bir gizli cemiyet kurdu ve adını İttihâd-ı Osmânî koydu. Kurucular İbrâhim Temo, Abdullah Cevdet, İshak Sükûtî ve Mehmed Reşid'dir.\n\n"
    +"■ NİÇİN TIBBİYE\n"
    +"Tesadüf değildir. Askerî tıbbiye, imparatorluğun her yerinden gelen, parasız okuyan, yatılı kalan ve Avrupa'nın tabiî bilimlerini Fransızca takip eden bir öğrenci topluluğunu tek çatı altında toplayan nadir kurumlardan biriydi. Gizli bir cemiyet için gereken üç şey — ortak dil, ortak şikâyet ve birbirini tanıyan küçük bir çevre — orada hazırdı.\n\n"
    +"■ ADIN DEĞİŞMESİ\n"
    +"Cemiyet 1895'te Ahmed Rızâ'nın etkisiyle \"Osmanlı İttihat ve Terakkî Cemiyeti\" adını aldı. Ad değişikliği aynı zamanda bir ağırlık merkezi değişikliğidir: hareket İstanbul'daki bir öğrenci halkasından, Paris ve Cenevre'de yayın yapan bir sürgün muhalefetine dönüşüyordu.\n\n"
    +"■ TEŞKİLÂT\n"
    +"Üyeler hücre sistemine göre örgütlendi ve yemin ederek girdi. Hücre usulünün mantığı basittir: bir üye ancak kendi hücresindeki birkaç kişiyi tanır, dolayısıyla yakalanan bir kişi bütün ağı ele veremez. Bu, otuz yıl sürecek bir istibdat devrinde ayakta kalmanın teknik cevabıdır.\n\n"
    +"■ 1908\n"
    +"Cemiyet, Resneli Niyazi Bey ve Enver Bey gibi subayların dağa çıkmasıyla başlayan hareketi örgütledi ve Kānûn-ı Esâsî'nin yeniden yürürlüğe konmasını sağladı. Hareketin önde gelen isimleri arasında Ahmed Rızâ, Bahâeddin Şâkir, Dr. Nâzım, Talat, Enver ve Cemal Paşalar sayılır.\n\n"
    +"■ SON\n"
    +"Cemiyet 1918 Mondros Mütarekesi'nden sonra resmen feshedildi, mensupları 1926'da tasfiye edildi. Kuruluşundan tasfiyesine otuz yedi yıl geçti; bu sürenin ilk on dokuz yılı gizlilikte, sonraki on yılı iktidarda geçti.",
  kesinlik:"kesin",
  olay:["1889-06-02|İttihâd-ı Osmânî"],
  kaynak:"TDV: ittihat-ve-terakki-cemiyeti (gövde okundu — 2 Haziran 1889 kuruluşu, dört kurucu ve Mekteb-i Tıbbiyye-i Şâhâne, 1895'te ad değişikliği ve Ahmed Rızâ, hücre ve yemin usulü, Resneli Niyazi ve Enver Bey, önde gelen isimler, 1918 feshi ve 1926 tasfiyesi)" },

// ── Şammar / Hâil Râşidîleri ────────────────────────────────────────────────
{ id:"kimdir-sammar-hail-residileri", tur:"kimdir",
  ad:"Râşidîler — Necid'i Suûdîler'den alan Hâil emirleri",
  metin:"Orta Arabistan'ın XIX. yüzyıl sonundaki hâkimi Suûdîler değil, çok daha az tanınan bir hanedandı: Hâil merkezli Râşidîler.\n\n"
    +"■ KİMDİR BUNLAR\n"
    +"Şemmer kabilesinin Abde kolundandırlar. 1835'te Abdullah b. Reşîd, Cebelişemmer bölgesinin merkezi olan Hâil emirliğini ele geçirdi ve hanedanı kurdu. Bölgenin adı da buradan gelir: Cebelişemmer, yani Şemmer dağları.\n\n"
    +"■ OSMANLI İLE İLİŞKİ\n"
    +"Râşidîler Osmanlı hâkimiyetini kabul ettiler ve savaş dönemlerinde devletten destek gördüler. Bu, Orta Arabistan'daki Osmanlı siyasetinin tipik biçimidir: çölde doğrudan idare kurmak yerine, oradaki güçlü aşiret yapısını tanımak ve onun üzerinden hâkimiyet göstermek.\n\n"
    +"■ SUÛDÎLERLE HESAPLAŞMA\n"
    +"Necid'in hâkimiyeti için iki hanedan çarpıştı. Kasîm bölgesindeki Müleydâ'da Muhammed b. Reşîd'in ordusu, Abdurrahman b. Faysal önderliğindeki Suûd kuvvetlerini ağır bir yenilgiye uğrattı; bu, İkinci Suûdî Devleti'nin fiilî sonu oldu. Suûd ailesi Küveyt'e sürgüne gitti ve Necid'in tamamı Râşidî hâkimiyetine girdi.\n\n"
    +"🔴 TARİHİN HASSASİYETİ: Kaynaklar bu savaşın YILINI veriyor (1891) ama GÜNÜNÜ vermiyor. Müleydâ adı Râşidîler maddesinde hiç geçmez; Suûdîler maddesi çarpışmanın 1889'a kadar sürdüğünü ve 1891'de Suûd ailesinin Riyad'dan tamamen çıkarıldığını söyler. Yaygın olarak anılan gün tarihleri bu kaynaklarda desteklenmemektedir.\n\n"
    +"■ SONU\n"
    +"Râşidîler ile Suûdîler arasındaki mücadele 1902'den itibaren kesintisiz sürdü — o yıl Abdülazîz b. Abdurrahman, Küveyt'ten yanına aldığı adamlarla Riyad'a dönüp şehre girdi. Râşidîler 1921'de Suûdîler tarafından kesin yenilgiye uğratıldı ve Hâil emirliği tarihe karıştı. Yani Orta Arabistan'da otuz yıl boyunca iki hanedan aynı toprağı sahiplendi; sonunda kaybeden taraf bugün çoğunlukla hatırlanmayan taraf oldu.",
  kesinlik:"tartismali",
  olay:["1891-01-01|Müleydâ"],
  kaynak:"TDV: residiler (gövde okundu — 1835'te Abdullah b. Reşîd'in Hâil'i alması, Şemmer kabilesinin Abde kolu, Cebelişemmer, Osmanlı hâkimiyetinin kabulü, 1902'den itibaren Suûdî mücadelesi, 1921'deki son) · TDV: suudiler (Müleydâ'nın tarafları Abdurrahman b. Faysal ve Muhammed b. Reşîd, 1891'de Suûd ailesinin Riyad'dan çıkarılması, 1902'de Abdülazîz'in Riyad'a dönüşü). BULUNAMADI: savaşın GÜNÜ — iki maddenin hiçbiri gün vermiyor, kart yıl hassasiyetinde bırakıldı." },

// ── İstanbul depremleri ─────────────────────────────────────────────────────
{ id:"teknik-istanbul-depremleri", tur:"teknik-bilimsel",
  kisa:"Bir şehir, dört yüz yılda kaç kez yıkılıp yeniden kurulur?",
  metin:"İstanbul'un tarihi, fetihler ve saltanat değişimleri kadar sarsıntılarla da bölünür. Büyük İstanbul ve Marmara depremleri arasında 1509, 1719, 1766 ve 1894 tarihleri ayrıca anılır.\n\n"
    +"■ 1509 — \"KÜÇÜK KIYAMET\"\n"
    +"14 Eylül 1509'da şehri vuran deprem, devrinde halk arasında doğrudan bu adla anıldı. Surlarda, camilerde ve pek çok binada ağır hasar meydana geldi, çok sayıda can kaybı oldu. II. Bayezid'in emriyle şehirde geniş çaplı bir onarım ve imar seferberliği başlatıldı.\n\n"
    +"■ 1766 — FÂTİH CAMİİ'NİN ÇÖKÜŞÜ\n"
    +"Mayıs 1766'daki büyük depremde Fâtih Camii'nin ana kubbesi tamamen çöktü, duvarları onarılamayacak derecede hasar gördü. III. Mustafa'nın emriyle mimarlar Sarım İbrahim Efendi ve İzzet Mehmed Bey yönetiminde 1767'de başlayan yeniden inşa, eski plandan farklı yeni bir tasarımla 1771'de tamamlandı. Yani bugün görülen Fâtih Camii, bir depremin ürünüdür.\n\n"
    +"■ 1894 — MERKEZ ÜSSÜ KÖRFEZDE\n"
    +"10 Temmuz 1894'te İzmit körfezi açıklarında meydana gelen deprem İstanbul'u ağır biçimde vurdu; surlar dahil birçok cami ve tarihî yapı hasar gördü. Depremin can kaybına dair rakamlar kaynaklarda birbirine karışmaktadır ve burada bir sayı verilmemiştir.\n\n"
    +"■ DEPREMİN ANLAMI NASIL OKUNURDU\n"
    +"Osmanlı idaresi büyük sarsıntıları ahlâkî bir uyarıyla birlikte ele alırdı: depremden sonra halk günahtan sakındırılır, bazen şarap ve eğlence yasaklanırdı. Halk arasında deprem kıyamet alâmeti sayılır, Kur'an'daki son gün tasvirleriyle birlikte düşünülürdü. Bu yüzden deprem kayıtları yalnız yıkım listesi değil, aynı zamanda bir devrin dünya görüşünün belgesidir.\n\n"
    +"■ NEREDEN BİLİYORUZ\n"
    +"Bu olayların kaydı vakayinâmelerde, resmî fermanlarda ve onarım defterlerinde tutulmuştur. Bir yapının hangi yıl hangi mimarla yeniden yapıldığı çoğu zaman depremin şiddetini, yazılı tasvirlerden daha kesin anlatır.",
  kesinlik:"kesin",
  olay:["1894-07-10|1894 İstanbul depremi","1509-09-14|Küçük Kıyamet","1766-05-01|İstanbul depremi"],
  kaynak:"TDV: zelzele (gövde okundu — 1509 \"küçük kıyamet\", 1719, 1766 ve 10 Temmuz 1894 depremlerinin büyük Marmara depremleri arasında sayılması; depremin ahlâkî yorumu, şarap ve eğlence yasakları, kıyamet alâmeti telakkisi; kaynak türleri) · TDV: istanbul (1509 için) · TDV: fatih-camii-ve-kulliyesi (1766'da kubbenin çökmesi, 1767-1771 yeniden inşası, mimarları). BULUNAMADI: 1894 depreminin can kaybı — çekilen rakamların hangi depremi tarihlediği ayırt edilemediği için karta YAZILMADI." },

// ── Dârülaceze ve hayır kurumları ───────────────────────────────────────────
{ id:"teknik-darulaceze-ve-hayir-kurumlari", tur:"teknik-bilimsel",
  kisa:"Dilenciliği yasaklamak kolaydır; dilenene yer bulmak zordur. Bir devlet bunu nasıl denedi?",
  metin:"2 Şubat 1896'da Okmeydanı sırtlarında açılan Dârülaceze, Osmanlı'nın sosyal politika alanındaki en görünür denemesidir — ve çıkış noktası bir hayır duygusundan çok bir şehir meselesidir.\n\n"
    +"■ FİKİR NEREDEN ÇIKTI\n"
    +"II. Abdülhamid 30 Mart 1890 tarihli bir fermanla, sokaklarda dilenen kimsesiz çocukları ve sakatları koruyacak bir müessese kurulmasını istedi. Yani kurumun doğuşu, dilenciliğin bir güvenlik ve nizam meselesi olarak görülmesiyle başlar; çare yasak değil, barınak olarak tarif edilmiştir.\n\n"
    +"■ YAPIM VE PARA\n"
    +"Tasarı ve planlama 1890-1892 arasında yapıldı, temeli 10 Kasım 1892'de Halil Rifat Paşa attı. İnşaatı Tersâne-i Âmire kalfası Vasilaki Efendi yönetti. Başlangıçta 100.000 lira öngörülen bütçe 70.000 liraya indirildi. Para şu kaynaklardan toplandı: padişahın 17.000 liralık hediyesi, bağışlar, piyango biletleri, tiyatro geliri ve mâbedlerdeki yardım sandıkları.\n\n"
    +"■ KİME AÇIKTI\n"
    +"Kimsesiz çocuklar, yaşlılar, güçsüzler ve sakatlar. Kuruluş ilkesi açıkça konmuştu: din ve milliyet farkı gözetilmeyecekti. Bu ilke mimarîye de yansıdı — avluda cami, kilise ve havra birlikte inşa edildi. Aynı çatı altında üç ibadethane, kurumun ne demek istediğinin en kısa ifadesidir.\n\n"
    +"■ İÇİNDE NE VARDI\n"
    +"Açılışta ilk olarak 150 kadın alındı. Kurum yalnız bir barınak değildi: 200 yatak kapasiteli bir hastahane, bir yetimhane ve 0-7 yaş çocuklar için bir süthane kuruldu. Eğitim de vardı — 1896-1907 arasında 48 kişi diploma aldı, 6 kişi hafız oldu; 1907'de kurumda 130 erkek, 22 kız öğrenci kayıtlıydı.\n\n"
    +"■ NİÇİN BU DEVİR\n"
    +"Dârülaceze tek başına bir olay değil, bir kurumlaşma dalgasının parçasıdır. Aynı devir, yetim ve fakir çocukların okutulduğu mektepler, yeni hastahaneler ve modern tıp mektebi çevresinde kurulan sağlık kurumlarıyla birlikte okunmalıdır. Ortak nokta şudur: daha önce vakıf eliyle, parça parça ve mahallî olarak görülen işler, bu devirde merkezî bütçesi, nizamnâmesi ve kadrosu olan kurumlara dönüştürülmeye çalışıldı.",
  kesinlik:"kesin",
  olay:["1896-02-02|Dârülaceze"],
  kaynak:"TDV: darulaceze (gövde okundu — 30 Mart 1890 fermanı, 1890-1892 planlama, 10 Kasım 1892 temel atma ve Halil Rifat Paşa, mimar Vasilaki Efendi, 100.000 → 70.000 lira bütçe, 17.000 liralık padişah hediyesi ve öteki gelir kalemleri, din-milliyet farkı gözetilmemesi, cami-kilise-havra, 2 Şubat 1896 açılışı ve ilk 150 kadın, 200 yataklı hastahane, süthane, 1896-1907 diploma ve 1907 öğrenci sayıları)" },

// ── İngiltere niçin Sudan'a indi ────────────────────────────────────────────
{ id:"sebep-sonuc-ingiltere-sudan-1896", tur:"sebep-sonuc",
  kisa:"Hartum'u on bir yıl boyunca geri almadılar, sonra birden aldılar. Ne değişti?",
  metin:"İngiltere 1885'te Hartum'u kaybetti ve Sudan'dan çekildi. On bir yıl boyunca oraya dönmedi. 1896'da ise Nil boyunca güneye doğru düzenli, yavaş ve pahalı bir ilerleme başlattı. Arada geçen sürede Sudan değişmemişti; Sudan'ın etrafı değişmişti.\n\n"
    +"■ ÖNCE NİL, SONRA SUDAN\n"
    +"İngiltere 1882'den beri Mısır'ı fiilen idare ediyordu ve Mısır'ın hayatı tek bir nehre bağlıydı. Nil'in yukarı havzasını elinde tutan, Mısır'ın boğazını elinde tutar. Bu yüzden Sudan, kendi başına bir kıymet olarak değil, Mısır'ın emniyet kuşağı olarak görüldü. \"Sudan'ı almak\" kararı aslında \"Nil'i kimseye bırakmamak\" kararıdır.\n\n"
    +"■ RAKİPLERİN YAKLAŞMASI\n"
    +"1890'larda Avrupa devletleri Afrika'nın iç kesimlerine doğru yarışıyordu ve Nil'in yukarı havzasına başka bayrakların ulaşması ihtimali belirdi. Bir kez bu ihtimal doğunca, on bir yıllık kayıtsızlık bir anda tehlikeye dönüştü.\n\n"
    +"■ DEMİRYOLUYLA YAPILAN SAVAŞ\n"
    +"1896'da Dongola'nın geri alınmasıyla başlayan sefer, meydan muharebesi kadar mühendislik işidir: ordu ilerledikçe arkasından demiryolu döşenir, ikmal hattı kopmaz ve çölün kendisi bir müttefik olmaktan çıkar. Şeykan'da Mısır ordusunu öldüren şeyin — susuz çölde kopan ikmal — bu kez tersine çevrilmesidir. Sonunda Mehdî Devleti, 2 Eylül 1898'de Kerkeri (Omdurman) savaşıyla yıkıldı; seferin başında İngilizler Horatio Herbert Kitchener'i Abdullah et-Teâyişî'nin üzerine sevketmişlerdi.\n\n"
    +"■ SONUÇ NE OLDU\n"
    +"Sudan, kâğıt üzerinde Mısır ile İngiltere'nin ortak idaresine verildi; fiilen ise İngiliz idaresine girdi. Mısır'ın adı, Mısır'ın hakkını değil İngiltere'nin hukukî gerekçesini taşıyordu: Sudan hukuken Mısır'ın kaybedilmiş vilâyeti sayıldığı için, oraya \"dönmek\" işgal değil iade gibi anlatılabiliyordu.\n\n"
    +"■ OSMANLI AÇISINDAN\n"
    +"Bu toprak, hukuken hâlâ Mısır hidivliği üzerinden Osmanlı'ya bağlı sayılan bir alandı. Ama karar İstanbul'da alınmadı, para İstanbul'dan çıkmadı, asker İstanbul'dan gitmedi. Sudan'ın yeniden fethi, bir imparatorluğun kâğıt üzerindeki hakları ile fiilî gücü arasındaki mesafenin en açık ölçüsüdür.",
  kesinlik:"kesin",
  olay:["1896-09-23|Dongola"],
  kaynak:"TDV: sudan (gövde okundu — Kitchener'in Abdullah et-Teâyişî üzerine sevki, 2 Eylül 1898 Kerkeri savaşı ve Mehdî Devleti'nin yıkılışı, Gordon'un ölümünün İngiliz işgaline zemin hazırlaması) · TDV: osman-dikne (Doğu Sudan cephesi)" },

// ── Dömeke ──────────────────────────────────────────────────────────────────
{ id:"savas-hikayesi-domeke-1897", tur:"savas-hikayesi",
  kisa:"Otuz günde Atina yolu açıldı; sonra ordu geri çağrıldı. Meydanda kazanılan bir savaş masada nasıl kaybedilir?",
  metin:"1897 Osmanlı-Yunan Savaşı, XIX. yüzyılın son çeyreğinde Osmanlı ordusunun kazandığı tek büyük meydan savaşıdır. Ve aynı zamanda, kazanmanın niçin yetmediğinin en açık dersidir.\n\n"
    +"■ CEPHE\n"
    +"Savaş 18 Nisan 1897'de ilân edildi. Alasonya ordu kumandanlığından başkumandanlığa getirilen Edhem Paşa, aynı gün Milona'da ilk zaferi kazandı. Yenişehir 25 Nisan'da, Tırhala 12 Mayıs'ta alındı. 17 Mayıs 1897'de Dömeke'de Yunan ordusu büyük bir bozguna uğratıldı. Ordu Termopil geçidini yirmi dört saatte aşarak Atina yolunu açtı.\n\n"
    +"■ SONRA NE OLDU\n"
    +"Hiçbir şey. Daha doğrusu: Atina'ya girilmedi, cephe durduruldu, mesele masaya taşındı. Osmanlı ordusunun önünde askerî bir engel kalmamıştı; ama siyasî engel askerî engelden sertti. Avrupa'nın büyük devletleri Yunanistan'ın bir Osmanlı zaferiyle çökmesine razı değildi; savaşın sonucu, savaş meydanında değil onların onayında belirlendi.\n\n"
    +"■ \"MEYDANDA KAZANILMIŞ, MASADA KAYBEDİLMİŞ\"\n"
    +"Bu tabir yaygındır ve büyük ölçüde haklıdır — ama tam olarak neyi anlattığına dikkat etmek gerekir. Kaybedilen şey toprak değildir; kaybedilen, kazanılan zaferin siyasî karşılığıdır. Osmanlı Devleti bu savaşta yenilmedi, yenemedi. Çünkü XIX. yüzyılın sonunda Osmanlı'nın bir komşusuyla baş başa savaş yapma imkânı fiilen kalmamıştı: her çatışma, otomatik olarak altı devletin ortak meselesi hâline geliyordu.\n\n"
    +"■ EDHEM PAŞA'NIN PAYINA DÜŞEN\n"
    +"Edhem Paşa \"gazi\" unvanına lâyık görüldü ve murassa' İmtiyaz nişanı aldı. Kazanan kumandana devletin verebildiği şey buydu — zaferin kendisi zaten elinden alınmıştı.\n\n"
    +"🔴 KAYNAKLAR AYRILIYOR: Savaşın başlangıç günü için kaynaklarda hem 17 hem 18 Nisan 1897 geçer; ilkin sınırdaki çarpışmaların, ikincisinin ise resmî ilânın tarihi olduğu anlaşılmaktadır.",
  kesinlik:"kesin",
  olay:["1897-04-17|Osmanlı-Yunan Savaşı"],
  kaynak:"TDV: gazi-edhem-pasa (gövde okundu — 18 Nisan 1897 savaş ilânı, Alasonya'dan başkumandanlığa geçiş, 18 Nisan Milona, 25 Nisan Yenişehir, 12 Mayıs Tırhala, 17 Mayıs 1897 Dömeke, Termopil geçidinin 24 saatte aşılması, \"gazi\" unvanı ve murassa' İmtiyaz nişanı). NOT: `domeke-muharebesi` slugu 0 sonuç verdi; TDV'nin arama sayfası \"dömeke\"yi gazi-edhem-pasa · izzet-pasa-ahmed · tesalya maddelerinin GÖVDESİNDE buldu — olay maddesi değil kişi maddesi okundu." },

// ── Alman yakınlaşması ──────────────────────────────────────────────────────
{ id:"sebep-sonuc-alman-osmanli-yakinlasmasi-1898", tur:"sebep-sonuc",
  kisa:"Bir imparator Kudüs'te \"üç yüz milyon müslümanın dostuyum\" dedi. Bu cümle kime söylenmişti?",
  metin:"II. Wilhelm 18 Ekim 1898'de İstanbul'a geldi, 25 Ekim'de Hayfa'da, 29 Ekim'de Kudüs'teydi. Kudüs'te kendini üç yüz milyon müslümanın dostu ilân etti ve Zeytindağı'nda bir Alman kilisesi açtı. Bu yolculuk, iki devletin birbirinde aradığı şeyin en açık sergisidir.\n\n"
    +"■ ALMANYA NE ARIYORDU\n"
    +"Hızla sanayileşen bir ülke için Osmanlı toprağı üç şeydi: pazar, ham madde kaynağı ve Doğu'ya açılan yol. Buna bir dördüncüsü eklenir — İngiltere, Fransa ve Rusya'nın Osmanlı üzerindeki nüfuzunu dengeleme isteği. \"Doğu'ya açılım\" Almanya'da bir prestij ve propaganda meselesi hâline gelmişti.\n"
    +"Kudüs'teki cümle bu yüzden asıl Osmanlılara değil, İngiltere'ye söylenmiştir. İngiltere'nin idaresindeki müslüman sömürgeler dünyanın en kalabalık müslüman nüfusunu barındırıyordu; Alman imparatorunun kendini o nüfusun dostu ilân etmesi, doğrudan o sömürgelere gönderilmiş bir mesajdı.\n\n"
    +"■ OSMANLI NE ARIYORDU\n"
    +"Cevap yine olumsuzdadır. İngiltere Mısır'daydı, Fransa Kuzey Afrika'daydı, Rusya doğuda toprak istiyordu. Almanya'nın ise müslüman bir sömürgesi yoktu; II. Abdülhamid'in Almanya'yı tercih etmesinin başında bu gelir. Toprak istemeyen bir büyük devlet, toprak isteyen üçünü dengelemenin en ucuz aracıydı.\n\n"
    +"■ ZEMİN ZATEN HAZIRDI\n"
    +"Bu yakınlaşma 1898'de başlamadı. 1790'da imzalanan Osmanlı-Prusya İttifakı ilk resmî adımdı; 1798'de Berlin'e ilk elçi tayin edildi. 1835-1839'da Helmuth von Moltke ve heyeti Osmanlı ordusunda görev yaptı. Colmar von der Goltz Paşa, silâh siparişlerinde belirleyici rol oynayarak Krupp ve Mauser fabrikalarından büyük alımların yolunu açtı. II. Wilhelm zaten 1889'da da İstanbul'a gelmişti.\n\n"
    +"■ FATURA\n"
    +"Yakınlaşmanın somut karşılığı demiryoluydu. 1888'de Deutsche Bank Haydarpaşa-İzmit hattının işletme ve Ankara hattının inşa imtiyazını aldı; 5 Mart 1903'te imzalanan anlaşmayla Almanya, Ankara'dan Bağdat-Basra'ya uzanacak hattın imtiyazını kazandı. İngiltere bu projeyi Hindistan sömürgesi için tehlikeli gördü ve müdahale etti.\n\n"
    +"■ VE RİSK\n"
    +"Denge siyasetinin bilinen bir zaafı vardır: dengelediğin güç bir gün kendi ağırlığını dayatır. Sömürgesi olmadığı için seçilen ortak, on altı yıl sonra imparatorluğu kendi savaşına ortak edecekti.",
  kesinlik:"kesin",
  olay:["1898-10-18|Wilhelm"],
  kaynak:"TDV: almanya (gövde okundu — 1790 ittifakı, 1798'de ilk elçi, Moltke 1835-1839, von der Goltz ve Krupp-Mauser alımları, 1889 ve 1898 ziyaretleri, 18 Ekim İstanbul · 25 Ekim Hayfa · 29 Ekim Kudüs takvimi, \"üç yüz milyon müslümanın dostu\" ilânı ve Zeytindağı kilisesi, Almanya'nın ve Osmanlı'nın yaklaşma sebepleri, 5 Mart 1903 Bağdat Demiryolu anlaşması ve İngiliz tepkisi)" },

// ── Mürzsteg ────────────────────────────────────────────────────────────────
{ id:"sebep-sonuc-murzsteg-1903", tur:"sebep-sonuc",
  kisa:"Bir reform programı, egemenliğin nerede bittiğini gösterir. Makedonya'da ne oldu?",
  metin:"Ekim 1903'te Rusya ve Avusturya-Macaristan imparatorları, Makedonya için bir reform programı hazırladılar. Osmanlı hükûmeti bu programı başta istemedi, sonra kabul etmek zorunda kaldı. Bu iki cümle arasındaki mesafe, II. Meşrutiyet'e giden yolun kendisidir.\n\n"
    +"■ MESELE NASIL DOĞDU\n"
    +"1877-1878 savaşından sonra imzalanan Ayastefanos Antlaşması, Makedonya'yı büyük ölçüde içine alan bir Büyük Bulgaristan kurmuştu. Berlin Antlaşması bunu bozdu ve Makedonya'yı Osmanlı idaresinde bıraktı. Ama bölgeyi geri vermek, bölgeye yönelik iştahı ortadan kaldırmadı: Bulgarlar, Sırplar ve Yunanlılar aynı topraklar üzerinde kilise, okul ve nüfus istatistiği üzerinden bir üstünlük yarışına girdiler. Rakamların kendisi bir silâha dönüştü.\n\n"
    +"■ KOMİTACILIK VE İLİNDEN\n"
    +"1893'te kurulan İç Makedon İhtilâl Örgütü, 1903 yazında İlinden isyanını başlattı. İsyan başarısız oldu — ama uluslararası sonucu, askerî sonucundan çok daha ağır oldu: Avrupa kamuoyunda \"Makedonya idare edilemiyor\" kanaatini pekiştirdi.\n\n"
    +"■ PROGRAMIN ÖZÜ\n"
    +"Mürzsteg programı, Avrupalı askerî ve sivil temsilcilerin bir umumi müfettişle işbirliği içinde bölgede görev almasını öngörüyordu. Yani reformun kendisi değil, reformun DENETİMİ dışarıya devredildi. Osmanlı hükûmetinin itirazı da tam buradaydı: egemenlik hakları zedeleniyordu.\n\n"
    +"■ SİYASÎ SONUCU — asıl mesele\n"
    +"Bir devletin kendi vilâyetinde, başka devletlerin memurları eliyle nizam kurmayı kabul etmesi, o vilâyetin fiilen elden çıkmaya başladığının ilânıdır. Bunu en keskin biçimde gören kesim, o vilâyetlerde görev yapan genç subaylardı. Nitekim 1908'de İngiliz ve Rus hükümdarlarının Reval'de Makedonya'daki Osmanlı hâkimiyetini ortadan kaldıracak bir reform hazırladığı söylentileri yayılınca, İttihatçılar harekete geçti ve 24 Temmuz 1908'de II. Meşrutiyet ilân ettirildi.\n\n"
    +"Yani Mürzsteg, Makedonya'yı kurtarmadı; Makedonya'yı kaybetmemek için ayaklanan bir subay kuşağı yarattı.",
  kesinlik:"kesin",
  olay:["1903-10-02|Mürzsteg"],
  kaynak:"TDV: makedonya (gövde okundu — Ayastefanos'un Büyük Bulgaristan'ı ve Berlin Antlaşması'nın düzeltmesi, Bulgar-Sırp-Yunan kültür ve istatistik mücadelesi, 1893'te IMRO'nun kuruluşu ve 1903 İlinden isyanı, Ekim 1903 Mürzsteg programının Rusya-Avusturya imparatorlarınca hazırlanışı, Avrupalı temsilcilerin umumi müfettişle işbirliği ve Osmanlı'nın isteksiz kabulü, 1908 Reval söylentileri ve 24 Temmuz 1908 ilânı)" },

// ── Yemen vizyonu ───────────────────────────────────────────────────────────
{ id:"sebep-sonuc-yemen-israri", tur:"sebep-sonuc",
  kisa:"Kırk yıl kan ve para: Osmanlı Yemen'i niçin bırakmadı?",
  metin:"Yemen, Osmanlı Devleti'nin en uzak, en pahalı ve en az kazançlı vilâyetlerinden biriydi. Buna rağmen devlet orayı kırk yıl boyunca bırakmadı ve Birinci Dünya Savaşı'nda bile elinde tuttu. Bunun sebebi Yemen'in kendisi değil, Yemen'in nerede olduğudur.\n\n"
    +"■ BEŞ SEBEP\n"
    +"Kızıldeniz üzerindeki kontrol; Süveyş'in güvenliği; Hicaz'ın korunması; hilâfet prestiji; ve İngiliz Aden'ine karşı bir denge kurmak. Beşi de tek bir cümlede toplanabilir: Yemen, kutsal toprakların güney kapısıdır. O kapıyı elinde tutmayan bir devletin halife sıfatı, Kızıldeniz'de karşılıksız kalır.\n\n"
    +"■ İKİNCİ HÂKİMİYET\n"
    +"Ahmed Muhtar Paşa 1871'de vali tayin edildi, San'a'yı alarak devlet otoritesini yeniden kurdu ve ülkeyi vilâyet hâlinde teşkilâtlandırdı. İlk dönemde halkın desteğini gördüğü için yaklaşık yirmi yıllık bir istikrar sağlandı.\n\n"
    +"■ İMAM YAHYÂ\n"
    +"1889'da Zeydîler İmam Yahyâ Hamîdüddin liderliğinde ayaklandı; 1902'de çok daha kapsamlı bir isyan başladı. 1905'te İmam Yahyâ San'a'yı kuşattığında şehirde açlık baş gösterdi. Ahmed Feyzi Paşa kumandasında gönderilen yardım kuvvetleri ağır kayıplar verdi ve şehir isyancılara teslim edilmek zorunda kalındı.\n\n"
    +"■ ÇÖZÜM: KAZANMAK DEĞİL, ANLAŞMAK\n"
    +"Ahmed İzzet Paşa elli bin kişilik bir orduyla San'a kuşatmasını kaldırdı ve 13 Ekim 1911'de imamla bir antlaşma imzalandı: yirmi iki alenî madde, beş gizli madde. Zeydî bölgelerinin yönetimi İmam Yahyâ'ya bırakıldı, dış ilişki hakkı verilmedi, yıllık 20.000 Osmanlı altın lirası ödenmesi kararlaştırıldı. Yani devlet, kırk yılda silâhla alamadığını sözleşmeyle aldı: hukukî bağ korundu, fiilî idare devredildi.\n\n"
    +"■ VE SAVAŞ\n"
    +"Bu barış savaş boyunca sürdü. İmam Yahyâ, Kızıldeniz'deki Osmanlı ordusunun ihtiyaçlarının karşılanmasına yardım etti ve San'a'daki 7. Kolordu birlikleri Asîr ile Aden'deki harekâta destek verdi. Mondros'tan sonra, 5 Mart 1919'da Yemen'de 3883 kişilik asker ve sivil memur kadrosu Hudeyde'de İngilizler'e teslim oldu. Lozan Antlaşması'yla Yemen hukuken Osmanlı toprağı olmaktan çıktı.\n\n"
    +"■ NİÇİN İNAT\n"
    +"Yemen'de ısrarın karşılığı bir gelir kalemi değildi. Karşılık semboliktir ve semboller ucuz değildir: halifeliğin Kızıldeniz'deki görünürlüğü, o sularda başka bir bayrağın tek başına kalmaması ve Hicaz'ın güneyden emniyette olması. Devlet bunun bedelini, adı türkülere geçen bir asker kaybıyla ödedi.",
  kesinlik:"kesin",
  olay:["1905-04-01|San'a"],
  kaynak:"TDV: yemen (gövde okundu — Kızıldeniz/Süveyş/Hicaz/hilâfet prestiji/Aden dengesi sebepleri, Ahmed Muhtar Paşa'nın 1871 valiliği ve vilâyet teşkilâtı, 1889 ve 1902 isyanları, 1905'te San'a kuşatması ve açlık, Ahmed Feyzi Paşa'nın kayıpları ve şehrin teslimi, Ahmed İzzet Paşa'nın 50.000 kişilik ordusu, 13 Ekim 1911 Daan Antlaşması'nın 22 alenî + 5 gizli maddesi ve 20.000 altın lira, savaş dönemi işbirliği ve 7. Kolordu, 5 Mart 1919'da 3883 kişinin Hudeyde'de teslimi)" },

// ── Yıldız Suikastı ─────────────────────────────────────────────────────────
{ id:"tartisma-yildiz-suikasti-1905", tur:"tartisma",
  kisa:"Bir bomba bir buçuk dakika geç patladı. Bir şair bu gecikmeye ağıt yaktı — ve o şiir bugün hâlâ tartışılıyor.",
  metin:"21 Temmuz 1905'te cuma selâmlığından çıkan II. Abdülhamid'i hedef alan bombalı saldırı başarısız oldu. Padişah, bir kısa gecikme yüzünden patlama anında arabasının yanında değildi. Olayın kendisinden çok, bıraktığı iz tartışma konusudur.\n\n"
    +"■ ŞİİR\n"
    +"Tevfik Fikret, suikast üzerine \"Bir Lahza-i Teahhur\" adlı şiirini yazdı; şiir 1906'da yayımlandı ve II. Meşrutiyet'in ilânından önceki yıllarda elden ele dolaştı. Ad, tam da o kısa gecikmeyi — suikastın başarısızlığa uğramasına sebep olan bir anlık teahhuru — anlatır.\n\n"
    +"■ TARTIŞMA BURADA BAŞLIYOR\n"
    +"Şiirin değerlendirilmesi kaynaklara göre keskin biçimde ayrılır. Bir okuma, Fikret'i istibdada karşı duran bir şair olarak görür: 1902'de yazdığı \"Sis\"te II. Abdülhamid devrinin İstanbul'una lânetler yağdırmıştır ve \"Bir Lahza-i Teahhur\" bu tutumun devamıdır. Başka bir okuma ise aynı şiiri, suikastı düzenleyenleri alkışlamak olarak niteler ve ağır bir itham getirir. Bu iki okuma aynı metinden çıkar ve aralarındaki fark, metnin kendisinden çok, suikastı kimin niçin düzenlediğine verilen cevaba bağlıdır.\n\n"
    +"■ FİKRET'İN KENDİ ÇİZGİSİ\n"
    +"Fikret'in siyasî hedefi tek bir padişah değildi. 1912'de yazdığı \"Doksan Beşe Doğru\" ve \"Hân-ı Yağmâ\", istibdadı deviren İttihatçılara karşı yazılmış ağır hicivlerdir. Yani aynı şair, önce saltanata sonra saltanatı devirenlere aynı sertlikte çıkmıştır; onu tek bir tarafın adamı saymak, ikisini de yanlış okumaktır.\n\n"
    +"🔴 BURADA DURULUYOR: Suikastı düzenleyen kişi ve örgüt, Ermeni siyasî hareketleriyle bağlantısı ve olayın arkasındaki saikler konusunda bu kartta hüküm verilmemiştir — başvurulan ansiklopedi maddesinin gövdesi bu konuları kapsamıyordu ve dayanaksız bir isnat yazmaktansa boşluk bırakılmıştır.",
  kesinlik:"tartismali",
  olay:["1905-07-21|Yıldız Suikastı"],
  kaynak:"TDV: tevfik-fikret (gövde okundu — şiirin adı \"Bir Lahza-i Teahhur\", 1906'da yayımlanışı ve elden ele dolaşması, adın anlamı, 1902 tarihli \"Sis\" ve istibdada bakışı, 1912'de \"Doksan Beşe Doğru\" ile \"Hân-ı Yağmâ\", ve maddenin şiire yönelttiği ağır eleştiri). BULUNAMADI: `abdulhamid-ii` maddesinin çekilen gövdesi 1905 suikastını, failini ve arka planını KAPSAMIYOR — bu sebeple fail ve saik konusunda hüküm verilmedi." },

// ── II. Meşrutiyet'in ilanı ─────────────────────────────────────────────────
{ id:"sebep-sonuc-ikinci-mesrutiyet-1908", tur:"sebep-sonuc",
  kisa:"Otuz yıl rafta duran bir anayasa, bir telgrafla geri geldi. O günü yaşayanlar ne gördü?",
  metin:"23-24 Temmuz 1908'de otuz yıldır askıda olan Kānûn-ı Esâsî yeniden yürürlüğe kondu. Kararın alınış biçimi kadar, duyuluş biçimi de bu olayın karakterini belirler.\n\n"
    +"■ TELGRAFLA YAPILAN İHTİLÂL\n"
    +"Hareket Rumeli'de başladı ve İstanbul'a önce telgrafla ulaştı. Bu teknik ayrıntı, olayın siyasî mantığını da taşır: taşradaki bir ordu ile merkez arasındaki mesafe, telgraf hattı sayesinde saatlere inmişti. İstibdadı ayakta tutan şeylerden biri — merkezin taşrayı gecikmeyle duyması ve taşranın merkeze ulaşamaması — teknik olarak ortadan kalkmıştı. Aynı hat, otuz yıl boyunca jurnali taşımıştı; şimdi ültimatomu taşıyordu.\n\n"
    +"■ DAĞA ÇIKANLAR\n"
    +"Hareketi tetikleyen, Rumeli'deki genç subayların dağa çıkmasıydı; bunların en çok anılan ikisi Resneli Niyazi Bey ve Enver Bey'dir. Cemiyet bu isyanı örgütledi ve anayasanın geri getirilmesini sağladı. Burada dikkat edilecek nokta, hareketin bir saray darbesi ya da bir halk ayaklanması olmamasıdır: taşradaki ordunun içinden, teşkilâtlı bir cemiyet eliyle çıkmıştır.\n\n"
    +"■ NİÇİN TAM O YIL\n"
    +"1908'de İngiliz ve Rus hükümdarlarının Reval'de buluşup Makedonya'daki Osmanlı hâkimiyetini ortadan kaldıracak bir reform hazırladığı söylentileri yayıldı. Makedonya'da görev yapan subaylar için bu, vatan toprağının pazarlık masasına konması demekti. II. Meşrutiyet'in ilânı, bu korkuya verilmiş bir cevaptır.\n\n"
    +"■ CEMİYET KİMLERDEN OLUŞUYORDU\n"
    +"Çekirdek 2 Haziran 1889'da Mekteb-i Tıbbiyye-i Şâhâne'de kuruldu: İbrâhim Temo, Abdullah Cevdet, İshak Sükûtî ve Mehmed Reşid. 1895'te Ahmed Rızâ'nın etkisiyle ad \"Osmanlı İttihat ve Terakkî Cemiyeti\" oldu; merkez İstanbul'dan Paris ve Cenevre şubelerine yayıldı. Örgütlenme hücre sistemine göreydi ve üyeler yemin ederek giriyordu. Önde gelen isimler arasında Ahmed Rızâ, Bahâeddin Şâkir, Dr. Nâzım, Talat, Enver ve Cemal Paşalar anılır.\n\n"
    +"■ SEVİNÇ VE SONRASI\n"
    +"İlânı izleyen günlerde şehirlerde büyük kutlamalar yapıldı; farklı din ve milletlerden toplulukların birlikte kutladığı sahneler, devrin en çok anlatılan görüntüleridir. Bu birliktelik havasının ne kadar sürdüğü ise ayrı bir meseledir: aynı anayasa, dokuz ay sonra İstanbul'da silâhla tartışılacaktı.",
  kesinlik:"kesin",
  olay:["1908-07-23|Meşrutiyet'in ilanı"],
  kaynak:"TDV: ittihat-ve-terakki-cemiyeti (gövde okundu — 2 Haziran 1889 kuruluşu ve dört kurucu, 1895'te ad değişikliği ve Ahmed Rızâ, Paris-Cenevre şubeleri, hücre ve yemin usulü, Resneli Niyazi ve Enver Bey'in dağa çıkışı, önde gelen isimler) · TDV: mesrutiyet (23-24 Temmuz 1908 ilânı ve 1908 İhtilâli, cemiyetin propaganda faaliyeti) · TDV: makedonya (1908 Reval söylentileri ve 24 Temmuz 1908 ilânı arasındaki bağ)" },

// ── Hicaz Demiryolu ─────────────────────────────────────────────────────────
{ id:"teknik-hicaz-demiryolu", tur:"teknik-bilimsel",
  kisa:"Kırk günlük hac yolunu dört güne indiren hat, sekiz yıl sonra çölde parça parça söküldü.",
  metin:"1 Eylül 1908'de Hicaz Demiryolu Medine'ye ulaştı. Şam'dan Medine'ye 1464 kilometre. Bu hattın hem yapılışı hem yıkılışı, Osmanlı'nın son otuz yılının özeti gibidir.\n\n"
    +"■ ÜÇ AMAÇ\n"
    +"Hat askerî, siyasî ve dinî amaçları birlikte taşıyordu. En somut vaadi hac yolculuğuyla ilgiliydi: kırk-elli günlük yolu dört-beş güne indirecek, hacı sayısını artıracak ve masrafları ciddi biçimde azaltacaktı. Yanına iki şey daha eklenir: uzak vilâyete asker ve haber ulaştırabilmek, ve halifenin İslâm dünyasındaki konumunu gözle görülür bir eserle göstermek.\n\n"
    +"■ PARASI NEREDEN GELDİ — asıl fark burada\n"
    +"Devrin öteki hatları yabancı imtiyaz ve kilometre garantisiyle yapılırken, Hicaz hattı bağış sistemiyle finanse edildi. Hindistan'dan Mısır'a, Rusya'dan Fas'a kadar müslümanlar, devlet adamları ve halk katkıda bulundu. Fon gelirinin yaklaşık üçte biri bağışlardan, üçte ikisi pul, harç ve maden imtiyazı gibi kaynaklardan sağlandı. Bu tercih tesadüf değildir: imtiyazla yapılan bir hat, kutsal topraklara yabancı bir şirketi sokardı.\n\n"
    +"■ YAPIM\n"
    +"II. Abdülhamid 2 Mayıs 1900'de inşaatı emretti ve 1 Eylül 1900'de resmî açılışı yaptı. Hat 1903'te Amman'a, 1904'te Maan'a ulaştı; 1905'te Hayfa şubesi tamamlanıp işletmeye girdi. 1908'de Medine'ye varıldı ve 1 Eylül 1908'de işletmeye açılış töreni bizzat padişah tarafından düzenlendi. Hat 1,05 metre açıklıkta dar hatla döşendi; 43 mühendis çalıştı — 17'si Türk, 12'si Alman, kalanı başka ülkelerden.\n\n"
    +"■ SAVAŞ VE İSYAN\n"
    +"Birinci Dünya Savaşı'nda hat askerî taşımacılıkta kritik rol oynadı — ve tam bu yüzden hedef oldu. 1916'da Şerîf Hüseyin İngilizlerle iş birliği yaparak isyan etti; çöldeki hat, isyanın başlıca hedefi hâline geldi. Bir demiryolu bu coğrafyada ordunun ta kendisidir: rayı sökersen kolordu çölde kalır. Hattın kaderi böylece cephedeki kaderle aynılaştı ve Medine 10 Ocak 1919'da teslim olduğunda Osmanlı hâkimiyeti sona erdi.\n\n"
    +"■ GERİYE KALAN\n"
    +"Hattın güney kesimi bir daha tam olarak işletilemedi. Kum altında kalan traversler, devrilmiş lokomotifler ve yarım kalan istasyonlar, bir imparatorluğun son büyük mühendislik eserinin bugüne ulaşan hâlidir. Şam-Amman kesimi kullanılmaya devam etti; Medine'ye giden kesim ise durdu.",
  kesinlik:"kesin",
  olay:["1908-09-01|Hicaz Demiryolu"],
  kaynak:"TDV: hicaz-demiryolu (gövde okundu — askerî/siyasî/dinî amaçlar ve hac yolunun 40-50 günden 4-5 güne inmesi, bağış finansmanı ve üçte bir/üçte iki oranı, 2 Mayıs 1900 emri, 1 Eylül 1900 resmî açılış, 1903 Amman · 1904 Maan · 1905 Hayfa şubesi, 1908'de Medine ve 1464 km, 1,05 m dar hat, 43 mühendis ve milliyet dağılımı, I. Dünya Savaşı'nda askerî rolü, 1916 Şerîf Hüseyin isyanı, 10 Ocak 1919'da Medine'nin teslimi)" },

// ── Meclis-i Meb'ûsan ve seçim ──────────────────────────────────────────────
{ id:"teknik-1908-secimleri-ve-meclis", tur:"teknik-bilimsel",
  kisa:"1908'de oy kullanan kimdi — ve daha önemlisi, kim kullanamadı?",
  metin:"17 Aralık 1908'de Meclis-i Meb'ûsan otuz yıllık bir aradan sonra yeniden toplandı. Meclisin kimlerden oluştuğunu anlamak için önce onu seçen usulü bilmek gerekir.\n\n"
    +"■ İKİ DERECELİ SEÇİM\n"
    +"Seçim doğrudan değildi. Halk önce birinci seçmenleri (müntehib-i evvel) seçer, onlar ikinci seçmenleri (müntehib-i sânî) belirler, mebusu ise ikinci seçmenler seçerdi. Bu usulün iki yüzü vardır: bir yandan geniş coğrafyada okuma yazma oranının düşük olduğu bir ülkede işleyebilen tek pratik yöntemdi; öte yandan seçmen ile mebus arasına bir süzgeç koyduğu için, teşkilâtlı bir cemiyetin sonucu belirlemesini kolaylaştırıyordu.\n\n"
    +"■ TEMSİL ÖLÇÜSÜ\n"
    +"Mebuslar sancak esasına göre dağıtıldı; erkek nüfusu 25.000 ile 75.000 arasında olan sancaklardan birer mebus seçildi.\n\n"
    +"■ KİM SEÇEBİLİRDİ, KİM SEÇİLEBİLİRDİ\n"
    +"Seçmen olmak için asgarî yaş 25, mebus olmak için 30'du. Sistem erkek seçmen esasına dayanıyordu — yani KADINLAR seçme ve seçilme hakkından tamamen dışarıdaydı. Nüfus cüzdanı şartı kondu ve mükerrer oy önlendi.\n\n"
    +"■ BU NE DEMEKTİ\n"
    +"Seçim hakkı evrensel değildi ama dinî bir ayrım da taşımıyordu: gayrimüslim Osmanlı tebaası seçim sürecinin içindeydi ve mecliste temsil edildi. Yani 1908 seçimi \"herkesin oy verdiği\" bir seçim değil, \"belli şartları taşıyan erkek tebaanın\" seçimidir. Dışarıda kalanlar arasında kadınlar tamamen, mülk ve yaş şartlarını taşımayanlar ise kısmen yer alır.\n\n"
    +"■ SONUÇ\n"
    +"Seçimleri İttihatçılar ezici bir çoğunlukla kazandı.\n\n"
    +"■ MECLİS NE YAPABİLİYORDU\n"
    +"Kanun teklif edebilir, bütçeyi inceleyebilir, hükûmeti denetleyebilirdi; gensoru önergesiyle hükûmeti düşürme yetkisi de vardı ve bu yetki 1909'da fiilen kullanıldı — Kıbrıslı Kâmil Paşa hükûmeti güvensizlik oyuyla düşürüldü.\n\n"
    +"■ 1909 DEĞİŞİKLİĞİ — asıl dönüm\n"
    +"1909'daki Kānûn-ı Esâsî tâdilâtı, yasama-yürütme dengesini meclis lehine ciddi biçimde değiştirdi ve Avrupa monarşilerine benzer bir yapı kurdu. İki somut sonucu vardır: hükûmet üyeleri meclise karşı sorumlu hâle geldi ve padişahın meclisi fesih yetkisi sınırlandı. Değiştirilen 53. madde meclislere kanun tanzimi yetkisi verdi; 10. ve 118. maddeler şer'î hükümleri içerecek biçimde düzenlendi.\n\n"
    +"Yani 1876 anayasası bir padişah bağışı olarak doğmuştu; 1909'da meclisin kendi eliyle değiştirdiği bir metne dönüştü. Aradaki fark, meşrutiyetin sözden kuruma geçtiği andır.",
  kesinlik:"kesin",
  olay:["1908-12-17|Meclis-i Meb"],
  kaynak:"TDV: meclis-i-mebusan (gövde okundu — iki dereceli seçim usulü, sancak başına mebus ve 25.000-75.000 erkek nüfus ölçüsü, seçmen için 25 / mebus için 30 yaş, erkek seçmen esası, nüfus cüzdanı ve mükerrer oyun önlenmesi, İttihatçıların ezici çoğunluğu, meclisin yetkileri ve 1909'da Kıbrıslı Kâmil Paşa hükûmetinin düşürülmesi, 1909 değişikliğinde hükûmetin meclise karşı sorumluluğu ve fesih yetkisinin sınırlanması) · TDV: mesrutiyet (17 Aralık 1908 açılışı, 1909 tâdilâtının yasama lehine dengeyi değiştirmesi, 53. madde ile 10. ve 118. maddeler). BULUNAMADI: toplam mebus sayısı ve etnik/dinî dağılım — iki maddenin de çekilen gövdesi rakam vermiyor, karta YAZILMADI." },

// ── 31 Mart ─────────────────────────────────────────────────────────────────
{ id:"tartisma-otuzbir-mart-1909", tur:"tartisma",
  kisa:"Meşrutiyete kimler karşıydı? Cevap \"gericiler\" demekten daha karışık.",
  metin:"Rûmî 31 Mart 1325 / Milâdî 13 Nisan 1909'da İstanbul'da çıkan ayaklanma, meşrutiyetin ilânından yalnızca dokuz ay sonra gerçekleşti. \"Kim niçin karşıydı\" sorusunun cevabı tek bir grup değildir; birbirinden çok farklı sebeplerle aynı anda rahatsız olmuş birkaç kümedir.\n\n"
    +"■ BİRİNCİ KÜME — TASFİYE EDİLEN SUBAYLAR\n"
    +"Orduda alaylı (mektepten değil kışladan yetişme) ve mektepli subaylar arasında eski bir çatışma vardı. Meşrutiyetten sonra alaylıların tasfiyesine girişilmesi, yıllarını orduda geçirmiş bir kesimi bir anda mesleksiz bıraktı. Bu kümenin şikâyeti anayasayla değil, kendi geleceğiyle ilgiliydi.\n\n"
    +"■ İKİNCİ KÜME — YERİNİ KAYBEDENLER\n"
    +"II. Abdülhamid devrinin kadroları imtiyazlarını kaybetmişti. Bir rejim değişikliğinde en hızlı örgütlenen kesim, çoğu zaman en çok kaybeden kesimdir.\n\n"
    +"■ ÜÇÜNCÜ KÜME — SİYASÎ MUHALEFET\n"
    +"İttihat ve Terakkî'nin hükûmet işlerine müdahalesi ve baskıcı tutumu, meşrutiyeti destekleyen kesimler içinde bile tepki doğurdu. Ahrar Fırkası çevresi ve muhafazakâr kesimler bu tepkinin siyasî ifadesiydi. Yani ayaklananların bir kısmı meşrutiyete değil, meşrutiyeti getirenlerin iktidarı kullanma biçimine karşıydı — bu ikisini birbirine karıştırmak, olayı yanlış okumanın en kestirme yoludur.\n\n"
    +"■ DÖRDÜNCÜ KÜME — DİNÎ TALEP\n"
    +"Derviş Vahdetî ve İttihâd-ı Muhammedî Cemiyeti çevresi olaya şeriat talebiyle katıldı.\n\n"
    +"■ FİTİL\n"
    +"7 Nisan 1909'da gazeteci Hasan Fehmi'nin fâili meçhul cinayeti ortamı gerdi. 12-13 Nisan gecesi 4. Avcı Taburu askerleri şeriat talebiyle ayaklandı. Ellerinde beyaz, yeşil ve kırmızı bayraklar bulunan üç-dört bin civarında isyancı Ayasofya meydanında toplandı ve Meclis-i Meb'ûsan'ı işgal etti. Talepleri arasında Kâmil Paşa'nın sadârete getirilmesi ve İttihat ve Terakkî'nin ilgası vardı.\n\n"
    +"■ BASTIRILMASI\n"
    +"Hareket Ordusu 19 Nisan'dan itibaren gelmeye başladı ve 24 Nisan'da şehrin kontrolünü tamamen ele geçirdi. 27 Nisan 1909'da II. Abdülhamid hal' edildi, yerine Mehmed Reşad geçti. Derviş Vahdetî dahil pek çok isyancı idam edildi.\n\n"
    +"■ TARTIŞMA NEREDE\n"
    +"Padişahın olaydaki rolü, bu devrin en çok tartışılan meselelerinden biridir ve kaynaklar burada keskin biçimde ayrılır. Ayaklanmanın sonucunda tahtını kaybeden kişinin aynı ayaklanmayı düzenlemiş olması iddiası, taraftarlarınca ve karşıtlarınca bugüne kadar farklı okunmuştur. Bu kartta bir hüküm verilmemiştir: ayaklanmanın bastırılmasından sonra hal' edildiği kesindir, ayaklanmanın çıkarılmasındaki payı ise kesin değildir.",
  kesinlik:"tartismali",
  olay:["1909-04-13|31 Mart Vakası"],
  kaynak:"TDV: otuzbir-mart-vakasi (gövde okundu — Rûmî 31 Mart 1325 / 13 Nisan 1909, İttihat ve Terakkî'nin müdahaleci tutumu, alaylı-mektepli çatışması ve alaylıların tasfiyesi, eski kadroların imtiyaz kaybı, Ahrar Fırkası ve muhafazakâr muhalefet, 7 Nisan 1909 Hasan Fehmi cinayeti, 12-13 Nisan gecesi 4. Avcı Taburu, bayraklar ve 3-4000 isyancı, Ayasofya meydanı ve meclisin işgali, Kâmil Paşa ve cemiyetin ilgası talepleri, Hareket Ordusu'nun 19 Nisan'dan itibaren gelişi ve 24 Nisan'da kontrolü alması, 27 Nisan 1909 hal'i ve Mehmed Reşad, Derviş Vahdetî'nin idamı)" },

// ── Bulgaristan sınırı ──────────────────────────────────────────────────────
{ id:"teknik-bulgaristan-sinirinin-cizilisi", tur:"teknik-bilimsel",
  kisa:"Bulgaristan'ın sınırı üç kez çizildi: bir antlaşmada, bir darbede, bir protokolde.",
  metin:"19 Nisan 1909'da İstanbul'da imzalanan protokolle Osmanlı Devleti, altı ay önce tek taraflı ilân edilmiş Bulgaristan bağımsızlığını resmen tanıdı. Ama o sınırın nasıl oluştuğu bundan otuz bir yıl önce başlayan bir hikâyedir ve üç ayrı aşaması vardır.\n\n"
    +"■ BİRİNCİ ÇİZGİ — 1878, MASA\n"
    +"1877-1878 savaşından sonra imzalanan Ayastefanos Antlaşması, Makedonya'yı da büyük ölçüde içine alan bir Büyük Bulgaristan öngörmüştü. Berlin Antlaşması bunu önemli ölçüde küçülttü: Tuna ile Balkanlar arasında Sofya, Niğbolu, Ziştovi, Rusçuk, Silistre, Varna, Şumnu, Lofça ve Tırnova'yı içine alan muhtar bir prenslik kuruldu.\n"
    +"Geri kalan kesim tamamen Osmanlı'ya dönmedi: Filibe, İslimye, Eski Zağra, Tatarpazarcığı, Burgaz ve Hasköy sancaklarından ayrı statülü bir Doğu Rumeli vilâyeti oluşturuldu. Yani Berlin, tek bir Bulgaristan yerine ikiye bölünmüş bir Bulgaristan yarattı.\n\n"
    +"■ İKİNCİ ÇİZGİ — 1885, EMRİVAKİ\n"
    +"Bu bölünme yedi yıl sürdü. 1885'te Bulgaristan Prensliği Doğu Rumeli vilâyetini de topraklarına kattı. Berlin'de masa başında çizilen ayrım, sahada bir emrivakiyle silindi.\n\n"
    +"■ ÜÇÜNCÜ ÇİZGİ — 1908-1909, TANIMA\n"
    +"5 Ekim 1908'de Bulgaristan bağımsızlığını ilân ederek prenslik statüsünden çıktı. 19 Nisan 1909'daki İstanbul protokolüyle Osmanlı bunu tanıdı. Görüşmeler yalnız bağımsızlığı değil, Rumeli demiryolu ve tazminat meselelerini de kapsadı: devlet, kaybettiği topraktaki hatları 42 milyon franklık bir tazminat karşılığında bıraktı.\n\n"
    +"■ \"BULGARLAR YOĞUN OLDUKLARI HER YERDE KATILABİLDİ Mİ?\"\n"
    +"Hayır. Ayastefanos'un öngördüğü Büyük Bulgaristan Makedonya'yı da içine alıyordu; Berlin bunu geri aldı ve Makedonya Osmanlı idaresinde kaldı. Bulgar hareketi bundan sonra otuz beş yıl boyunca Makedonya'yı hedefledi — bölgedeki komitacılık mücadelesinin ve 1903 İlinden isyanının arka planı budur. Yani etnik yoğunluk sınırı belirlemedi; sınırı büyük devletlerin dengesi belirledi.\n\n"
    +"■ GERİDE KALANLAR\n"
    +"Sınır değişirken nüfus yerinde kalmadı. 1877-1878 savaşı sırasında ve sonrasında 500.000 ile 600.000 arasında Türk'ün öldürüldüğü veya göçe zorlandığı kaydedilir. Tek bir sancağın rakamı ölçeği gösterir: Filibe sancağında Türk nüfusu 1875'te 300.000 iken 1878'de 15.000'e düşmüştür. Göç bir defalık da olmadı — resmî kayıtlara göre 1893-1902 arasında 72.524 müslüman Türk göç etti; 1913 Balkan Savaşı sonunda 115.883 kişi resmî iskân talebinde bulundu.\n\n"
    +"Bir sınırın çizilmesi bir harita işlemidir; o sınırın iki yanındaki insanların yer değiştirmesi ise onlarca yıl sürer.",
  kesinlik:"kesin",
  olay:["1909-04-19|Türk-Bulgar Protokolü","1885-09-18|Doğu Rumeli"],
  kaynak:"TDV: bulgaristan (gövde okundu — Ayastefanos'un Büyük Bulgaristan'ı ve Berlin'in küçültmesi, prensliğe giren şehirlerin listesi, Doğu Rumeli vilâyetini oluşturan altı sancak, 1885'te birleşme, 5 Ekim 1908 bağımsızlık ilânı, 1909 İstanbul protokolünün Rumeli demiryolu ve tazminat meselelerini kapsaması, 500.000-600.000 rakamı, Filibe sancağında 1875'te 300.000 → 1878'de 15.000, 1893-1902 arası 72.524 göçmen, 1913'te 115.883 iskân talebi) · TDV: rumeli-demiryolu (1909'da 42 milyon franklık tazminat) · TDV: makedonya (Ayastefanos-Berlin farkı ve Makedonya'nın Osmanlı'da kalması)" }

];
