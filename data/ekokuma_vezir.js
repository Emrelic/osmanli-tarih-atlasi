// ============================================================================
// EK OKUMA — SADRAZAMLAR VE DEVLET ADAMLARI (EKO-VEZIR, dalga 0052)
// ============================================================================
// Yazan: EKO-VEZIR · 16 Eylül 2026 · paket parti-emrelic-0052, maddeler:
//   H-0023 H-0026 H-0030 H-0046 H-0059 H-0060 H-0061 H-0062 H-0063 H-0064
//   H-0065 H-0066 H-0067 H-0068 H-0073 H-0080
// Koordinatör: 1.MURAT · rapor: denetim/EKO-VEZIR-0916.md
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_VEZIR tanımlar.
//    _ekHavuz() regex'i (/^EKOKUMA(_[A-Z0-9]+)?$/) onu kendiliğinden toplar;
//    YÜKLEYİCİ satırını (`_EKOKUMA_DOSYA_ADLARI`) UI oturumu ekleyecek —
//    bu oturum js/app.js'e dokunmadı (DALGA-0052.md §1).
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): TDV İslâm Ansiklopedisi birincil, HER slug
// gerçekten okundu (arama sonucu sayfası çıkanlar tekrar arandı, doğru
// slug'a ulaşılamayan kişide bu dosyanın kendi ic_not'unda işaretlendi).
// Metinler KOPYALANMADI, özetlendi; alıntı ≤15 kelime. Atlas referans
// değildir — tarihler kaynaktan, `olay:` bağları ise `data/olaylar*.js`de
// GERÇEKTEN VAR OLAN `t:` değerleridir (grep ile tek tek doğrulandı).
//
// 🔴 DÜZELTME NOTU: H-0063 "Rüstem Paşa ve Koca Ragıp Paşa ... idamları"
// diye soruyordu — TDV'nin kendi maddeleri İKİSİNİN DE TABİİ ÖLÜMLE
// öldüğünü yazıyor (Rüstem Paşa 12 Temmuz 1561 istiskadan, Ragıp Paşa
// 8 Nisan 1763 hastalıktan). Kartlara İDAM YAZILMADI, düzeltme metne
// açıkça konuldu (CLAUDE.md §4: kaynağın söylemediği bir uydurma değil,
// atlasın/sorunun varsaydığı bir şey kaynakla ÇÜRÜYORSA bu bildirilir).
//
// 🟡 H-0046 KAPSAM DIŞI KALDI: Kasrı Şirin içindeki Kemankeş Mustafa Paşa
// kartının "yetersiz" olduğu ve anlaşma-hükümleri kartlarının başlıklarının
// düzeltilmesi isteniyordu — ama o kartlar `data/ekokuma_kasrisirin.js`de
// (bu oturumun YAZMA YETKİSİ olmayan bir dosya, CLAUDE.md §7). Kontrol
// edildi: o dosyadaki üç kart başlığı zaten ayrışık görünüyor ("Zühâb
// ovasında üç gün" · "Kasr-ı Şirin'in hükümleri" · "Kurucu belge mi kurucu
// efsane mi") — şikâyetin hangi karta değdiği bu oturumdan anlaşılamadı.
// Bunun yerine H-0059 ile birleştirilip BU dosyada TDV `kemankes-mustafa-
// pasa` (gerçek slug — "kemankes-kara-mustafa-pasa" YOKTUR, aranırken
// bulundu) tam okunarak zengin bir kişi kartı yazıldı; kasrisirin.js'in
// kendi kartının zenginleştirilmesi/başlık düzeltmesi koordinatöre
// TESLİM mesajında ayrıca bildirilecek.
// ============================================================================
window.EKOKUMA_VEZIR = [

// ── 1 · Evliya Çelebi (H-0023) ──────────────────────────────────────────────
{ id:"kimdir-evliya-celebi", tur:"kimdir",
  ad:"Evliya Çelebi",
  kisa:"Kırk yıl hiç durmadan gezdi, on cilt yazdı ve hiç evlenmedi — çünkü bir rüyada 'şefaat' diyecekken ağzından 'seyahat' çıkmıştı.",
  metin:"İstanbul'da 25 Mart 1611'de doğdu; babası saray kuyumcubaşısıydı ve bu yakınlık ona saray çevresini açtı. TDV'ye göre kırk yıl sürecek gezi hayatının başlangıcını kendisi 19 Ağustos 1630'daki bir rüyaya bağlar: Ahî Çelebi Camii'nde kalabalık bir cemaatle Hz. Peygamber'i gördüğü rüyasında heyecanından 'şefaat yâ Resûlellah' diyecek yerde 'seyahat yâ Resûlellah' der; rivayete göre Hz. Peygamber bu dil sürçmesine tebessüm ederek ona hem şefaat hem seyahat müjdesini verir. İlk seyahatini 1640'ta İstanbul dışına, Bursa'ya yaptı. Melek Ahmed Paşa gibi devlet adamlarının yakın çevresinde bulunması, Osmanlı ülkesinin hemen her köşesini — Kafkasya'dan Sudan'a, Mısır'dan Viyana'ya — dolaşmasına imkân verdi. On ciltlik Seyahatnâme'sinin ilk cildi İstanbul'a ayrılmış, sonraki ciltler gezdiği bölgeleri anlatır; eser Türk kültür tarihi için eşi görülmemiş bir kaynaktır. Hiç evlenmedi. 1684 dolayında hayatını kaybettiğinde eser onuncu ciltte yarım kaldı.",
  not:"Ölüm sebebini veya kesin gününü veren bir kayıt okunan TDV gövdesinde yoktu; 'yaklaşık 1684' ifadesi kaynağın kendi belirsizliğidir.",
  kesinlik:"kesin",
  olay:["1611-03-25"],
  kaynak:"TDV: evliya-celebi" },

// ── 2 · Evliya Çelebi'nin güvenilirliği (H-0026) ───────────────────────────
{ id:"tartisma-evliya-celebi-guvenilirlik", tur:"tartisma",
  ad:"Nasıl bilirdiniz? Evliya Çelebi'nin abartıları ve neden hâlâ okunduğu",
  kisa:"Bir köyde kadınların fil doğurduğunu yazan adam, tarihçilerin en çok başvurduğu Osmanlı kaynaklarından biri — ve bu ikisi birbirini yalanlamıyor.",
  metin:"TDV'nin kendi değerlendirmesi açık: Evliya Çelebi 'mübalağalı haberler vermekten' hoşlanır ve zaman zaman anlattığı şeyi renklendirmek için uydurma bir haber ya da olay ortaya atar. Verdiği örnekler arasında fillerin geçtiği bir köyde kadınların fil doğurduğu gibi olağanüstü anlatılar sayılır; rakamları ve mesafeleri de sık sık abartılıdır. Bu atlasın kendi kayıtlarında da aynı ihtiyat görülür: Lâgarî Hasan Çelebi'nin 1632'de roketle uçtuğu rivayetinin TEK KAYNAĞI Evliya Çelebi'dir, başka çağdaş bir tanıklık yoktur ve TDV bunu yalnız 'teorik olarak mümkün' diye kaydeder, doğrular ya da yalanlamaz. Araştırmacıların çoğunluğu bu abartıları kötü niyetli bir sahtekârlık değil, esere 'popüler karakter' kazandırma ve okuyucunun ilgisini çekme çabası olarak okur — Seyahatnâme bir divan tarihi değil, bir gezi anlatısıdır ve türün kendi üslûp geleneği vardır. Bu yüzden tarihçiler onu tek başına değil, başka kaynaklarla (tahrir defterleri, elçi raporları, öteki vekayinameler) karşılaştırarak kullanır; bir ayrıntı yalnız Evliya'da geçiyorsa 'rivayet' damgasıyla aktarılır, sayısal veya somut bir olgu iddiası başka kaynakla doğrulanmadan olgu sayılmaz.",
  not:"Bu atlasta Evliya Çelebi kaynaklı bir madde 'rivayet' etiketi taşıyorsa, bu Evliya'nın yalan söylediği anlamına gelmez — yalnız başka bir tanıkla doğrulanmadığı anlamına gelir.",
  kesinlik:"tartismali",
  olay:["1632-01-01"],
  kaynak:"TDV: evliya-celebi" },

// ── 3 · İdam edilen devlet adamları — genel örüntü (H-0030) ────────────────
{ id:"tartisma-idam-edilen-devlet-adamlari", tur:"tartisma",
  ad:"Makam en tehlikeli koltuktu: Osmanlı'da idam edilen sadrazamlar ve şeyhülislamlar",
  kisa:"On dört yıl sadrazamlık yapıp hançerle öldürülen de vardı, dört ay sadrazamlık yapıp aynı akıbete uğrayan da — makamın kendisi bir garanti değildi.",
  metin:"Osmanlı'da vezîriâzamlık, imparatorluğun en güçlü ama en güvencesiz makamıydı: sadrazam padişahın 'mutlak vekili' sayılırdı, ama bu yetki onu saraya, orduya ve rakip hizip mensuplarına karşı korumazdı. Bu atlasın kendi kayıtlarına göre listeye giren isimlerin bir kısmı savaş yenilgisinin (Merzifonlu Kara Mustafa Paşa, Viyana'nın ardından 1683'te), bir kısmı saray içi rekabetin (Pargalı İbrahim Paşa, 1536; Kemankeş Mustafa Paşa, 1644), bir kısmı bir isyanın bedelini üstlenmenin (Nevşehirli Damad İbrahim Paşa, Patrona Halil İsyanı'nda 1730) kurbanı oldu. Sınıf yalnız sadrazamlarla sınırlı değildi: 1634'te idam edilen Ahîzâde Hüseyin Efendi ile bu geleneğe, çok daha köklü bir dokunulmazlığa sahip ilmiye sınıfına da sıçradı — o güne kadar bir kadı ya da şeyhülislam en ağır ihtimalle sürgün edilirdi, hiç idam edilmemişti. Örüntünün en eski halkası bu dosyadaki isimlerden daha gerideydi: İstanbul'un fethinden hemen sonra, 1453'te idam edilen Çandarlı Halil Paşa, hem eski Türk aristokrat vezir ailelerinin sonunu hem de devşirme kökenli vezirler çağının başlangıcını simgeler. Ortak payda güç değil GÜVENSİZLİKTİ: en tecrübeli, en başarılı sadrazamlar bile bir yenilgiden, bir söylentiden ya da bir sultan değişikliğinden sonra aynı akıbetle karşılaşabiliyordu.",
  not:"Bu kart bir sayım değil bir örüntü kartıdır; idam edilen her isim için ayrı kişi kartları aynı dosyada (Gedik Ahmed Paşa · Pargalı İbrahim Paşa · Kemankeş Mustafa Paşa · İpşir Mustafa Paşa · Merzifonlu Kara Mustafa Paşa · Nevşehirli Damad İbrahim Paşa · Çandarlı Halil Paşa) ve Ahîzâde Hüseyin Efendi'nin kendi kartında bulunabilir.",
  kesinlik:"kesin",
  olay:["1634-01-08"],
  kaynak:"TDV: candarli-halil-pasa · ibrahim-pasa-makbul · kemankes-mustafa-pasa · merzifonlu-kara-mustafa-pasa · damad-ibrahim-pasa-nevsehirli · ahizade-huseyin-efendi" },

// ── 4 · Ahîzâde Hüseyin Efendi (H-0030) ─────────────────────────────────────
{ id:"kimdir-ahizade-huseyin-efendi", tur:"kimdir",
  ad:"Ahîzâde Hüseyin Efendi",
  kisa:"O güne kadar bir şeyhülislamın göreceği en ağır ceza sürgündü; IV. Murad bu kuralı ilk kez bozdu.",
  metin:"1572'de doğdu, kadılık Selim II döneminde görev yapan Ahîzâde Mehmed Efendi'nin oğluydu. İstanbul'un önde gelen medreselerinde müderrislik, ardından çeşitli şehirlerde kadılık yaptıktan sonra 1632'de şeyhülislam oldu. IV. Murad, halktan gelen şikâyetler üzerine İznik kadısını soruşturmadan idam ettirince Hüseyin Efendi, ilmiye sınıfının haklarına saygı gösterilmesini isteyerek Valide Sultan'a başvurdu. Bu itiraz, onun padişahı tahttan indirme planları içinde olduğu söylentisine dönüştürüldü. IV. Murad İstanbul'a döndüğünde önce şeyhülislamı ve oğlunu Kıbrıs'a sürgüne gönderdi, ardından bir idam fermanı çıkardı; Hüseyin Efendi Büyükçekmece yakınlarında idam edilip cesedi kumla gizlenerek gömüldü. Bu, sürgünün geleneksel ceza olduğu ilmiye sınıfından idam edilen ilk isimdi ve dönemin tarihçileri bunu ulemâ ile devlet arasındaki dengenin bozulmasının bir işareti olarak kaydetti.",
  not:"İdamı, iki yıl önce 1632'de tahta çıkan IV. Murad'ın otoritesini sertleştirme sürecinin erken bir kilometre taşıdır.",
  kesinlik:"kesin",
  olay:["1634-01-08"],
  kaynak:"TDV: ahizade-huseyin-efendi" },

// ── 5 · Kemankeş (Kara) Mustafa Paşa (H-0046 + H-0059) ─────────────────────
{ id:"kimdir-kemankes-mustafa-pasa", tur:"kimdir",
  ad:"Kemankeş (Kara) Mustafa Paşa",
  kisa:"Hazineye yılda 6000 kese fazla kazandıran mali disiplini, onu saray çevresinde o kadar çok düşman kazandırdı ki altı yıl sonra aynı disiplin bahane edilip boğduruldu.",
  metin:"Avlonya'da doğdu; genç yaşta yeniçeri ocağına girdi, okçuluktaki (kemankeşlik) becerisiyle lakabını aldı. Askerî kademelerde yükselip donanmaya geçti; Şubat 1637'de hem sadrazam kaymakamlığına hem kaptan-ı deryalığa getirildi. 1638 Bağdat Seferi'nde Tayyar Mehmed Paşa'nın şehid düşmesi üzerine 24 Aralık 1638'de vezîriâzam oldu. Safevîlerle barış görüşmelerini yürütüp 17 Mayıs 1639'da, sınırları Kanûnî Sultan Süleyman ile Şah Tahmasb dönemindeki hatta göre çizen Kasr-ı Şirin Antlaşması'nı imzalattı — bu antlaşma bugünkü Türkiye-İran sınırının temelini oluşturur. Sadrazamlığının asıl ağırlığı ekonomideydi: yeniçeri ve sipahi mevcudunu üçte bire indirdi, tahrirlerle vergiyi düzene soktu, para ayarını düzeltti, yolsuzlukları temizledi; TDV'nin verdiği rakamla bu tasarruf devlete yılda 6000 kese fazla kazandırdı. Ama bu sıkı denetim, Kösem Sultan ve Cinci Hoca Hüseyin Efendi gibi rakiplerini karşısına aldı. Ocak 1644'te Sultan İbrahim onu görevden alıp idam ettirdi; 31 Ocak 1644'te Hocapaşa Çarşısı'nda cellât Kara Ali tarafından boğduruldu ve Çarşıkapı'daki kendi türbesine gömüldü. Siyasetin dışında da iz bıraktı: çeşme, köprü, okul ve cami gibi hayır eserleri yaptırdı, Sivas'ta bugünkü Yıldızeli'nin (Sivas Yenişehri) kurucusudur.",
  not:"Devlete kazandırdığı fayda (mali disiplin, Kasr-ı Şirin sınırı) ile idam gerekçesi (yolsuzluk suçlaması) aynı kaynağın işaret ettiği kişilerin — sıkı denetiminden rahatsız olan saray çevresinin — elinden çıktı; TDV bu ikisini doğrudan birbirine bağlar.",
  kesinlik:"kesin",
  olay:["1638-12-24"],
  kaynak:"TDV: kemankes-mustafa-pasa" },

// ── 6 · Gedik Ahmed Paşa (H-0060) ───────────────────────────────────────────
{ id:"kimdir-gedik-ahmed-pasa", tur:"kimdir",
  ad:"Gedik Ahmed Paşa",
  kisa:"Osmanlı ordusunu ilk kez İtalya toprağına çıkaran kumandan, yeni padişahın kendisinden şüphelenmesi yüzünden bir saray ziyafetinde boğduruldu.",
  metin:"Bugünkü Sırbistan'da, Vranye yakınlarındaki Punuševce köyünde doğdu; II. Murad döneminde saraya içoğlanı olarak alındı ve kale inşasındaki ustalığıyla 'Gedik' lakabını kazandı. II. Mehmed döneminde hızla yükselip 1462 dolayında Anadolu beylerbeyi oldu. Askerî kariyerinin başlıca halkaları: Koyluhisar'ın alınması (1461), Karaman topraklarının ilhakı (1469), Alanya ile Silifke ve Kızkalesi kıyı kalelerinin fethi (1471-1472), 1473'te Akkoyunlu tehdidine karşı kazanılan Otlukbeli zaferindeki kritik rolü. En cüretkâr harekâtı 1475'teki Kırım seferiydi: Haziran 1475'te Ceneviz'in Kırım kolonisi Kefe'yi, ardından Sudak ve Azak'ı alıp Kırım Hanlığı üzerinde Osmanlı üstünlüğünü tesis etti. 1480'de İtalya'nın güneyindeki Otranto'yu fethederek Osmanlı ordusunu ilk kez İtalyan anakarasına çıkardı; bu kazanım kısa ömürlü olsa da döneminin en cesur seferlerinden sayılır. II. Mehmed'in 1481'deki ölümünün ardından Bayezid ile Cem arasındaki taht kavgasında nominal olarak Bayezid'i destekledi, ama yeteneğinden ve olası bir Cem'e kayma ihtimalinden kuşkulanan II. Bayezid, 18 Kasım 1482'de onu Edirne'de bir saray ziyafetinde boğdurarak idam ettirdi.",
  not:"İdam gerekçesi doğrudan bir ihanet değil, yeteneğinden duyulan kuşkuydu — TDV bunu açıkça 'nüfuzundan duyulan kaygı' diye kaydeder.",
  kesinlik:"kesin",
  olay:["1482-11-18"],
  kaynak:"TDV: gedik-ahmed-pasa" },

// ── 7 · Sokullu Mehmed Paşa (H-0061) ────────────────────────────────────────
{ id:"kimdir-sokullu-mehmed-pasa", tur:"kimdir",
  ad:"Sokullu Mehmed Paşa",
  kisa:"Lepanto'da donanmayı kaybettiği yıl 'Kıbrıs'ı aldık, siz bir sakalı kestiniz; sakal yeniden uzar' dedirtecek kadar hızlı bir donanma daha kurdu — on dört yıl sonra bir dervişin hançeri onu durdurdu.",
  metin:"1505'te Bosna'da, Vişegrad yakınlarındaki Sokoloviç köyünde Hıristiyan bir ailede doğdu, devşirme yoluyla saraya alındı. Mileşeva Manastırı'nda eğitim gördükten sonra saray hizmetine girdi; askerî ve idari görevlerde gösterdiği yetenekle 1554'te vezir, 1565'te vezîriâzam oldu. Üç padişah (Kanûnî, II. Selim, III. Murad) döneminde on dört yıl sadrazamlık yaptı — Osmanlı tarihinin en uzun soluklu sadrazamlarından biridir. Timişvar (1552) ve Szigetvar (1566) fetihlerinde rol aldı; 1571'de İnebahtı'da donanma neredeyse tamamen yok olunca, aynı kışın içinde yeni bir filo inşa ettirip Avrupalı gözlemcileri Osmanlı'nın dayanıklılığı karşısında şaşırttı. Avusturya ile barışı sürekli yeniledi, Lehistan tahtına 1575 dolayında İstvan Báthory'nin geçmesinde etkili oldu. İstanbul'dan Edirne'ye, Lüleburgaz'dan Payas'a kadar cami, medrese, kervansaray ve hamamlardan oluşan pek çok külliye yaptırdı. 12 Ekim 1579'da, ikindi divanına dilekçe verecekmiş gibi yaklaşan Boşnak bir derviş tarafından hançerlenerek öldürüldü; TDV suikastin, idam edilen Hamzavî şeyhinin intikamıyla bağlantılı olabileceğini tartışır, kimi tarihçiler ise III. Murad'ın onu görevden uzaklaştırmak istediğini ileri sürer.",
  not:"Suikastin arkasındaki asıl fail ve saik TDV'de dahi kesinleşmemiş, birden fazla açıklama yan yana aktarılır.",
  kesinlik:"tartismali",
  olay:["1579-10-12"],
  kaynak:"TDV: sokullu-mehmed-pasa" },

// ── 8 · Pargalı (Makbul/Maktul) İbrahim Paşa (H-0062) ──────────────────────
{ id:"kimdir-pargali-ibrahim-pasa", tur:"kimdir",
  ad:"Pargalı İbrahim Paşa",
  kisa:"Kanûnî'nin en yakın dostu ve devletin fiilî ikinci adamıydı; on üç yıl sonra aynı padişah, hiçbir gerekçe göstermeden onu bir iftar sofrasından idam sehpasına yolladı.",
  metin:"Bugünkü Yunanistan'da, Parga yakınlarında doğdu; gençliğinde Manisa'da Şehzade Süleyman'ın hizmetine girdi. 'Pargalı', 'Frenk' ve — idamından sonra — 'Maktul' lakaplarıyla anıldı. Süleyman'ın tahta çıkışının ardından hızla yükselip 1523'te has odabaşılıktan doğrudan vezîriâzamlığa getirildi. 1524'te Kahire'de mali ve idari düzenlemeler yaparak Mısır'daki nizamı sağladı. 1526 Mohaç Meydan Muharebesi'nin kazanılmasında önemli rol oynadı. 1533-1535 Irakeyn Seferi'nde Tebriz ve Bağdat'ın fethini yönetti; 1533'te Habsburg elçileriyle yürüttüğü barış müzakerelerinde Osmanlı Devleti'ni başarıyla temsil etti. On üç yıllık sadrazamlığı boyunca Kanûnî'nin en yakın dostu ve devletin fiilî ikinci adamı sayıldı. 14-15 Mart 1536 gecesi, iftara çağrıldığı sarayda hiçbir gerekçe gösterilmeden ansızın boğdurularak idam edildi. Kaynaklar idam sebebi olarak üç ana etkeni sayar: saltanat hırsı iddiaları, Şehzade Mustafa ile yakınlığı ve Hürrem Sultan'ın husumeti, Bağdat fethinin ardından takındığı 'serasker sultan' unvanı ve büyüklenen tavrı. Çağdaşı Celâlzâde Mustafa Çelebi, davranışında bir 'ahlâkî bozulma' meydana geldiğini yazar. İdamı, Osmanlı merkez yönetiminde vezîriâzamların bile mutlak güvenliğe sahip olmadığını gösteren bir dönüm noktası sayılır.",
  not:"İdamın TEK bir sebebi yok — kaynaklar saray içi rekabeti, gurur suçlamasını ve şehzade siyasetini iç içe geçmiş etkenler olarak anlatır.",
  kesinlik:"kesin",
  olay:["1536-03-15"],
  kaynak:"TDV: ibrahim-pasa-makbul" },

// ── 9 · Rüstem Paşa (H-0063) ────────────────────────────────────────────────
{ id:"kimdir-rustem-pasa", tur:"kimdir",
  ad:"Rüstem Paşa",
  kisa:"15 milyon duka altın bıraktığı söylenen en zengin sadrazamlardan biriydi — ve İDAM EDİLMEDİ; azledildi, iki yıl sonra geri döndü, sonunda kendi yatağında öldü.",
  metin:"1500 dolayında Saraybosna yakınlarında doğdu, yeniçeri ocağından yetişti. Kanûnî'nin kızı Mihrimah Sultan'la evlenmesi (1539 dolayı vezirlik) kariyerini hızlandırdı; 2 Aralık 1544'te ilk kez vezîriâzam oldu ve dokuz yıl bu görevde kaldı. 1553'te Nahcıvan seferinde Şehzade Mustafa'nın idamını hazırlayan isimlerden sayılması yüzünden görevden alındı ve iki yıl kenara çekildi; 29 Eylül 1555'te, aynı gün idam edilen Kara Ahmed Paşa'nın yerine Hürrem ve Mihrimah sultanların desteğiyle ikinci kez sadrazam oldu ve 1561'e kadar bu görevi sürdürdü. Habsburglarla ateşkes müzakerelerini yürütüp yıllık ödemeli bir barış sağladı. Hayır eserleri Hırvatistan'dan Kudüs'e kadar uzanır; İstanbul'daki Rüstem Paşa Camii (1555-1561, Mimar Sinan) en tanınmışıdır. 12 Temmuz 1561'de, TDV'nin ifadesiyle 'istiskâdan' (ödem/su toplanması hastalığından) tabii şekilde öldü; İstanbul'daki Şehzade Camii külliyesindeki türbesine gömüldü. İDAM EDİLMEDİ.",
  not:"Bu madde H-0063'ün 'idamları' varsayımını düzeltir: Rüstem Paşa tabii ölümle öldü. Onu Şehzade Mustafa idamıyla anmak farklı bir tartışmadır — kendi ölümüyle karıştırılmamalı.",
  kesinlik:"kesin",
  olay:["1544-12-02"],
  kaynak:"TDV: rustem-pasa" },

// ── 10 · Koca Ragıp Paşa (H-0063) ───────────────────────────────────────────
{ id:"kimdir-koca-ragib-pasa", tur:"kimdir",
  ad:"Koca Ragıp Paşa",
  kisa:"Yedi Yıl Savaşları Avrupa'yı yakıp yıkarken Osmanlı'yı bu yangının dışında tutmayı başaran şair-sadrazam, altı yıllık görevinin sonunda kendi yatağında öldü.",
  metin:"1694'te doğdu; kariyerine Defterhâne kâtipliğinden başladı, diplomatik ve idari görevlerle yükseldi. 1741'de reîsülküttâb (dışişleri bakanlığına yakın bir görev), 1757'de vezîriâzam oldu ve altı yıl bu makamda kaldı. Sadrazamlığının en dikkat çeken başarısı dış politikadaydı: Avrupa'yı büyük güçler arasında saran Yedi Yıl Savaşları (1756-1763) sırasında Osmanlı Devleti'ni bu çatışmanın tamamen dışında tutmayı, Avrupa dengesini gözeten temkinli bir barış siyasetiyle başardı. İç yönetimde İstanbul'daki gıda kıtlığını önlemeye ve yangın zararlarını karşılamaya çalıştı, Dârüssaâde ağalığının aşırı nüfuzunu sınırlandırdı, askerî düzenlemelere girişti; Kumkapı sahilinin doldurulup Ermeni mahallesinin genişletilmesi ve Lâleli Camii'nin inşası gibi imar işlerini yürüttü. Aynı zamanda döneminin tanınmış şair ve tarihçilerindendi. 24 Ramazan 1176 / 8 Nisan 1763 gecesi vefat etti, Koska'daki kendi türbesine gömüldü. İDAM EDİLMEDİ — III. Mustafa döneminin en uzun soluklu ve dengeli sadrazamlığı, savaşla değil tabii ölümle son buldu.",
  not:"Bu madde de H-0063'ün 'idamları' varsayımını düzeltir: Ragıp Paşa tabii ölümle öldü.",
  kesinlik:"kesin",
  olay:["1763-04-08"],
  kaynak:"TDV: ragib-pasa" },

// ── 11 · Çandarlı Halil Paşa'nın idamı — anlamı (H-0064) ───────────────────
{ id:"tartisma-candarli-halil-pasa-idami", tur:"tartisma",
  ad:"Bir çağın kapanışı: Çandarlı Halil Paşa'nın idamı ne anlama geliyordu?",
  kisa:"İstanbul'u fetheden padişah, fethe mesafeli duran sadrazamını —ailesinin dört kuşaktır aynı makamda oturduğu bir hanedanın son temsilcisini— fetihten kırk gün sonra idam ettirdi. Sıradan bir infaz değildi; bir çağ kapanıyordu.",
  metin:"Çandarlı Halil Paşa, babası Çandarlı İbrâhim Paşa'nın ölümünün ardından vezîriâzamlığa yükseldi ve II. Murad'ın tam güvenini kazandı; Mayıs 1426'da zaten kazasker olarak görev yapıyordu. Varna (1444) ve II. Kosova (1448) savaşlarında politik açıdan önemli roller üstlendi, Eflak prensi Drakul'u Osmanlı safına çekti, Rumelihisarı'nın inşası ve İstanbul kuşatma hazırlıklarında hizmet verdi — yani fethin ALTYAPISINI kurdu. Ama kuşatmanın kendisine mesafeli durduğu, II. Mehmed'in genç ve tecrübesiz kararlarına karşı ihtiyatlı bir çizgi izlediği bilinir. Fetihten hemen sonra, rüşvet aldığı yönündeki söylentiler ve aleyhine düzenlenmiş bazı ithamlar bahane edilerek 30 Mayıs 1453'te azledilip tutuklandı; kırk gün sonra idam edildi. TDV'nin kendi ifadesi gerekçenin 'bahane' olduğunu ima eder — asıl sebep açıkça yazılmaz. Bu idamın önemi tek bir kişinin ölümünden büyüktür: Çandarlı ailesi, Osmanlı Beyliği'nin kuruluşundan beri (Yeniçeri Ocağı'nın kurucularından Çandarlı Kara Halil dahil) nesiller boyu vezirlik makamını elinde tutan, Türk kökenli eski bir aristokrat aileydi. Halil Paşa'nın idamıyla bu gelenek sona erdi; ondan sonra sadrazamlık makamı giderek devşirme kökenli, doğrudan padişaha bağlı kullara emanet edilecekti. Bu yüzden 1453, yalnız bir başkentin değil, Osmanlı bürokrasisinin de bir çağının kapandığı yıldır.",
  not:"Aynı soyadı taşıyan iki ayrı kişiyle karıştırılmamalı: 14. yüzyılın Çandarlı Kara Halil'i (Yeniçeri Ocağı'nın kurucularından, I. Murad döneminde) ile 1453'te idam edilen torunu/soyundan gelen Çandarlı Halil Paşa farklı kuşaklardır.",
  kesinlik:"kesin",
  olay:["1453-06-01"],
  kaynak:"TDV: candarli-halil-pasa" },

// ── 12 · Nevşehirli Damad İbrahim Paşa (H-0065) ─────────────────────────────
{ id:"kimdir-nevsehirli-damad-ibrahim-pasa", tur:"kimdir",
  ad:"Nevşehirli Damad İbrahim Paşa",
  kisa:"Lâle Devri'ni ve Osmanlı'nın ilk Türk matbaasını başlattı — ama halkın 'zevk ve sefahat' dediği o devri bir isyan bitirdi, ve III. Ahmed kendi damadını canlı kalabilmek için feda etmek zorunda kaldı.",
  metin:"1662'de Nevşehir'de doğdu. Saray kademelerinde yükselip III. Ahmed'in kızı Fatma Sultan'la evlendirildi (1717) ve 'dâmâd-ı şehriyârî' unvanıyla 1718'de sadrazamlığa atandı. İlk büyük icraatı, uzayan savaşları sonlandıran 1718 Pasarofça Antlaşması oldu. Askerî masrafları kısarak hazineye TDV'nin verdiği rakamla 5675 divanî kese fazla sağladı. Kâğıthane'de Sâdâbâd Kasrı'nı inşa ettirdi; bu eğlence ve imar dönemi 'Lâle Devri' adıyla anıldı ve İstanbul'a sayısız eser kazandırdı. 1727'de İbrâhim Müteferrika eliyle ilk Türk matbaasının kurulmasını destekledi. Yangınla mücadele için tulumbacı teşkilâtını kurdu, bilim adamlarını korudu. Ama halkın gözünde 'zevk ve sefahat' öne çıkan bu dönemde Afgan seferindeki yenilgi, yeni vergiler ve işsizlik hoşnutsuzluğu büyüttü. 1730'da patlak veren Patrona Halil İsyanı sırasında baskı altında kalan III. Ahmed, damadını feda etmek zorunda kaldı; İbrahim Paşa 1 Ekim 1730'da sarayda öldürüldü.",
  not:"İdamı kendi kararından çok, padişahın tahtını korumak için bir isyancı kitleye verdiği bir tavizdi — Pargalı İbrahim ve Kemankeş Mustafa'nın aksine, doğrudan bir saray entrikasının değil bir halk ayaklanmasının kurbanıydı.",
  kesinlik:"kesin",
  olay:["1730-10-01"],
  kaynak:"TDV: damad-ibrahim-pasa-nevsehirli" },

// ── 13 · Kuyucu Murad Paşa (H-0066) ─────────────────────────────────────────
{ id:"kimdir-kuyucu-murad-pasa", tur:"kimdir",
  ad:"Kuyucu Murad Paşa",
  kisa:"90 yaşına yakın bir ihtiyar, iki yılda Anadolu'yu saran büyük Celâlî ayaklanmalarının hepsini tek tek söndürdü — ve lakabını bir kuyuya düşen atından değil, düşmanlarını doldurduğu kuyulardan aldı.",
  metin:"1522 dolayında doğdu, devşirme usulüyle saraya alındı ve orada yetişti; 1575-1580 arasında Yemen beylerbeyiliği yaptı, ardından yasa dışı servet biriktirdiği şüphesiyle Yedikule zindanına kapatıldı. Serbest kaldıktan sonra askerî alanda öne çıktı: 1596 Haçova Meydan Muharebesi'ne katıldı, 1585 Tebriz seferinde atıyla birlikte bir kuyuya düşmesiyle 'Kuyucu' lakabını kazandığı rivayet edilir. Aralık 1606'da vezîriâzam oldu ve Anadolu'yu kasıp kavuran Celâlî isyanlarını bastırmaya odaklandı: Canbolatoğlu Ali Paşa'yı 23-24 Ekim 1607'de Oruç Ovası'nda, Kalenderoğlu Mehmed'i 9 Ağustos 1608'de Alaçayır'da ağır yenilgiye uğrattı. TDV'nin verdiği rivayete göre bu tasfiyede 60-70 bin dolayında Celâlî ortadan kaldırıldı; öldürdüğü isyancıları derin kuyulara doldurduğu rivayeti de lakabının bir başka açıklamasıdır. Diplomaside Habsburglarla 1606 Zitvatorok Antlaşması'nı sonuçlandırdı ve mali istikrarı yeniden kurmaya çalıştı. Ağustos 1611'de, yaklaşık doksan yaşındayken, rakibi Nasuh Paşa tarafından zehirlendiği iddiasıyla öldü; İstanbul'daki külliyesi bugün de ayaktadır.",
  not:"TDV, hem 60-70 bin rakamını hem de 'kuyulara doldurma' ayrıntısını 'rivayet edilir' diye vermiş, olgu olarak sunmamıştır — bu atlas da aynı ihtiyatla aktarır.",
  kesinlik:"tartismali",
  olay:["1607-10-23"],
  kaynak:"TDV: kuyucu-murad-pasa" },

// ── 14 · Köprülü Mehmed Paşa (H-0067) ───────────────────────────────────────
{ id:"kimdir-koprulu-mehmed-pasa", tur:"kimdir",
  ad:"Köprülü Mehmed Paşa",
  kisa:"Seksen yaşına yakın bir aşçı çırağı, mührü ancak padişaha ve valide sultana kendi koşullarını dikte ettirdikten sonra aldı — ve on üç sadrazamın sekiz yılda tükettiği bir devleti beş yılda yeniden ayağa kaldırdı.",
  metin:"Atanmadan önceki dönemde devlet, sekiz yılda on üç sadrazamın birbirini kovaladığı derin bir kargaşa içindeydi; 1656'da Venedik donanması Çanakkale Boğazı'nı abluka altına alıp Bozcaada ve Limni'yi işgal etmiş, İstanbul'da yiyecek fiyatları fırlamıştı. Seksen yaşına yakın Köprülü Mehmed Paşa mührü ancak Vâlide Turhan Sultan ve IV. Mehmed'e ağır şartlar kabul ettirdikten sonra aldı: tayinlerine karışılmayacak, aleyhinde söylenene inanılmayacaktı. 15 Eylül 1656'da göreve başlar başlamaz devlet disiplinini sert biçimde yeniden kurmaya girişti; Kadızâdeliler hareketinin önderlerini (idam yerine) Kıbrıs'a sürdü. Askerî cephede 19 Temmuz 1657'de Venedik filosunu Çanakkale önünde bozguna uğratıp 25 Ağustos'ta Bozcaada'yı, kasım ayında Limni'yi geri aldı — Çanakkale ablukası kırıldı, İstanbul'un tahıl yolu yeniden açıldı. 1658'de Erdel Prensi II. György Rákóczi'nin Osmanlı himayesini çiğnemesine karşılık Yanova'yı (Ineu) fethetti ve prensliğe sert bir hatırlatma yaptı. 1659'da Abaza Hasan Paşa'nın taşra beylerbeyilerini arkasına alan büyük isyanını Halep'te bastırarak sadaret makamının otoritesini kesinleştirdi. 1660'ta Erdel'e açılan kilit kale Varad'ı aldı. Ekim 1661'de öldü; yerine oğlu Fâzıl Ahmed Paşa geçti ve babasının kurduğu disiplini bir nesil daha sürdürdü — Köprülüler hanedanı bu şekilde Osmanlı tarihinin en uzun soluklu sadrazam ailesi oldu.",
  not:"Köprülüler hanedanı bu dört isimle sınırlı değildir: torun Amcazâde Hüseyin Paşa (Karlofça'yı imzalayan sadrazam) ve daha sonraki nesiller de sadaret makamına ulaştı; bu dosyada yalnız ailenin en tanınan üç ismi (Mehmed, Fâzıl Ahmed, Merzifonlu — damat ve yetiştirme) ayrı kartlarla işlendi.",
  kesinlik:"kesin",
  olay:["1656-09-15"],
  kaynak:"TDV: koprulu-mehmed-pasa" },

// ── 15 · Köprülüzade Fazıl Ahmed Paşa (H-0067) ──────────────────────────────
{ id:"kimdir-koprulu-fazil-ahmed-pasa", tur:"kimdir",
  ad:"Köprülüzâde Fâzıl Ahmed Paşa",
  kisa:"Babası sert bir disiplinle devleti ayağa kaldırmıştı; o, aynı otoriteyi hoşgörü ve bilgiyle sürdürüp on beş yılda Girit'i, Podolya'yı ve Ukrayna'yı Osmanlı topraklarına kattı.",
  metin:"1635'te Amasya'da doğdu, Köprülü Mehmed Paşa'nın oğluydu; devrin önde gelen âlimlerinden eğitim aldı ve İstanbul'un büyük medreselerinde müderrislik yaptıktan sonra idareye geçti. Babasının ölümü üzerine 8 Rebîülevvel 1072'de (1 Kasım 1661) vezîriâzam oldu ve on beş yılı aşkın süre bu görevde kaldı — döneminin en uzun soluklu sadrazamlarından biri. 1663'te Avusturya seferini yönetip Uyvar kalesini fethetti ve bu zaferi 'Allah muîn oldu fetheyledik Uyvar'ı' dizesiyle andı. En büyük başarısı, çeyrek asırdır süren Girit Savaşı'nı bitirmesiydi: 1666'da adaya bizzat geçip iki buçuk yıllık kuşatmanın ardından Eylül 1669'da Kandiye dahil bütün Girit'in teslimini sağladı. 1672'de Kamaniçe'yi ve öteki Lehistan kalelerini fethedip Bucaş Antlaşması'yla Podolya ve Ukrayna'yı geçici olarak Osmanlı nüfuzu altına aldı. Babasının aksine ılımlı, hoşgörülü, sabırlı ve azimli olarak tanınırdı; âlimleri, şairleri ve sanatçıları himaye etti, fethettiği topraklarda kütüphaneler kurdurdu ve İstanbul'da Köprülü külliyesini yaptırdı. Kasım 1676'da öldü; yerini önce Merzifonlu Kara Mustafa Paşa aldı.",
  not:"Baba-oğul karşılaştırması kaynağın kendi vurgusu: sert disiplinci baba, hoşgörülü ve bilgin oğul — ama ikisi de aynı askerî başarı çizgisini sürdürdü.",
  kesinlik:"kesin",
  olay:["1661-11-01"],
  kaynak:"TDV: kopruluzade-fazil-ahmed-pasa" },

// ── 16 · Merzifonlu Kara Mustafa Paşa (H-0067) ──────────────────────────────
{ id:"kimdir-merzifonlu-kara-mustafa-pasa", tur:"kimdir",
  ad:"Merzifonlu Kara Mustafa Paşa",
  kisa:"Dört yaşında yetim kalıp Köprülü ailesinin himayesinde büyüyen bir çocuk, otuz yıl sonra Viyana kapılarına kadar ordu yürüttü — ve orada aldığı yenilgiyle hayatını kaybetti.",
  metin:"1634-35'te (1044 AH) Merzifon'da doğdu; dört yaşındayken babasını Bağdat kuşatmasında kaybedince Köprülü Mehmed Paşa'nın himayesinde büyüdü ve iyi bir medrese eğitimi aldı. Çeşitli idari görevlerden geçip kaptan-ı deryalığa, ardından Kasım 1676'da (1087 AH) vezîriâzamlığa yükseldi. 1678'de Çehrin Seferi'ni yönetip müstahkem kaleyi alarak Dinyeper sınırını güvence altına aldı. En büyük ve en talihsiz girişimi 1683 Viyana Kuşatması oldu: Orta Avrupa'ya Osmanlı nüfuzunu yaymak ve kişisel şöhret kazanmak isteyen Mustafa Paşa, rivayete göre 500 bin kişilik bir kuvvet topladı, ama ağır muhasara topçusundan yoksundu. Kuşatma 14 Temmuz 1683'te başladı; iki aylık bir çıkmazın ardından Polonya Kralı III. Jan Sobieski'nin yardım ordusu 12 Eylül 1683'te saldırdı. Kendi cephesinde beş altı saat direndiyse de müttefik kanatların çökmesiyle geri çekilmek zorunda kaldı, yüzlerce top ve büyük bir erzak stoku geride bırakarak Belgrad'a çekildi. Saraydaki rakipleri —kızlar ağası ve baş imrahor başta olmak üzere— bu felaketi fırsat bildi; bahar seferi için yeniden toplanma planları olmasına rağmen 25 Aralık 1683'te idam edildi. Malları müsadere edildi, naaşı Belgrad'a gömüldü; bazı kaynaklara göre başı İstanbul'daki Saruca Paşa Camii külliyesine defnedildi.",
  not:"Viyana bozgunu Osmanlı'nın Orta Avrupa'daki en uzun genişleme dönemini bitiren dönüm noktasıdır; Merzifonlu'nun idamı cepheyi düzeltmedi, yalnız sorumluluğu bir kişiye yükledi.",
  kesinlik:"kesin",
  olay:["1676-11-05"],
  kaynak:"TDV: merzifonlu-kara-mustafa-pasa" },

// ── 17 · Mustafa Reşid Paşa (H-0068) ────────────────────────────────────────
{ id:"kimdir-mustafa-resid-pasa", tur:"kimdir",
  ad:"Mustafa Reşid Paşa",
  kisa:"Paris ve Londra'da öğrendiği Avrupa diplomasisini bir fermana döktü ve 1839'da Gülhane'de okuttu — Tanzimat'ın mimarı sayılır, ama altı kez sadrazam olup altı kez de aynı kadar sert muhalefetle karşılaştı.",
  metin:"1800'de İstanbul'da doğdu. Diplomat olarak Paris ve Londra elçiliklerinde görev yapıp Avrupa diplomasisini yakından öğrendi. Abdülmecid'in tahta çıkışıyla merkezî siyasette belirleyici bir konuma yükseldi. En önemli başarısı, devletin ayakta kalmasının başlıca şartı saydığı Tanzimat Fermanı'nın 3 Kasım 1839'da Gülhane'de ilan edilmesini sağlamasıdır; bu ferman modern hukuk, eğitim reformları ve idari ıslahatların zeminini hazırladı — karma ticaret mahkemeleri kuruldu, işkence yasaklandı, bir eğitim bakanlığı oluşturuldu. Dış politikada İngiltere'nin gücüne güvenerek Mısır Valisi Mehmed Ali Paşa'nın genişlemeci tehdidinden devleti korudu; Kırım Savaşı'nda (1853-1856) Batılı devletleri Osmanlı safına çekmeyi başardı. Koca Hüsrev Paşa'nın başını çektiği muhafazakâr cepheden yoğun muhalefet gördü, kariyeri boyunca altı kez sadrazamlığa getirildi ve altı kez görevden alındı. Resmî yazışmaları sadeleştirip halkın anlayabileceği 'kaba Türkçe'nin kullanımını yaygınlaştırdı. 1858'de öldü. Tanzimat'ın temelini atması nedeniyle Genç Osmanlılar'dan Jön Türkler'e kadar sonraki reform hareketlerine ilham kaynağı oldu.",
  not:"TDV'nin okunan gövdesi kesin ölüm tarihini vermiyor; yalnız '1800-1858' aralığı geçiyor, bu yüzden ölüm günü karta yazılmadı.",
  kesinlik:"kesin",
  olay:["1839-11-03"],
  kaynak:"TDV: mustafa-resid-pasa" },

// ── 18 · Mehmed Emin Âli Paşa (H-0068) ──────────────────────────────────────
{ id:"kimdir-ali-pasa-mehmed-emin", tur:"kimdir",
  ad:"Mehmed Emin Âli Paşa",
  kisa:"Reşid Paşa'nın yanında yetişip onun İngiltere çizgisinden Fransa'ya kayan bir dış politika izledi; beş kez sadrazam, yedi kez dışişleri bakanı oldu ve öldüğünde 'yerine konamaz' denildi.",
  metin:"1814'te İstanbul'da doğdu; 1830'da Bâb-ı Âlî'de göreve başladı, Mustafa Reşid Paşa'nın yanında Viyana, Londra ve Petersburg'da diplomatik tecrübe kazandı. 1852'de, henüz otuz sekiz yaşındayken Reşid Paşa'nın yerine ilk kez sadrazam oldu; kariyeri boyunca beş kez vezîriâzamlık, yedi kez hariciye nazırlığı yaptı. En önemli diplomatik başarısı, Kırım Savaşı'nı sona erdiren 1856 Paris Antlaşması'ndaki rolüydü; Osmanlı Devleti'ni konferansta temsil etti, ama bazı eleştirmenler devlet çıkarlarını yeterince savunamadığını düşündü. İç siyasette Tanzimat reformlarını sürdürdü, Mısır Valisi İsmâil Paşa'nın yolsuzluklarına karşı çıkarak Mısır'ın tam kopuşunu önledi; Bulgar kilisesi meselesinde patrikhane fermanını geciktirerek devlet çıkarını korumaya çalıştı. Hocası Reşid Paşa'nın aksine İngiltere yerine Fransa'ya yakın bir dış politika izledi, Rusya'nın yayılmacı niyetlerini erkenden fark etti. Sırbistan kaleleri ve Girit isyanı konusundaki uzlaşmacı tutumu Ziya Paşa gibi muhaliflerden ağır eleştiri aldı. Fuad Paşa'nın 1869'daki ölümünden sonra devlet işlerinin tam denetimini eline aldı; son yıllarına dış siyasetteki ağır gelişmeler ve artan mali sıkıntılar damgasını vurdu. 7 Eylül 1871'de öldü, Süleymaniye Camii'ne gömüldü. Yaşarken pek sevilmese de tarih onun tecrübeli devlet adamlığını yeri doldurulamaz saydı.",
  not:"Ölümünden sonraki beş yıl içinde maliye iflas etti, Balkanlar ayaklandı ve saltanat değişikliği kaçınılmaz hâle geldi — bu atlasın kendi kaydı Âli Paşa'nın ölümünü Tanzimat kadrosunun sonu olarak işaretler.",
  kesinlik:"kesin",
  olay:["1871-09-07"],
  kaynak:"TDV: ali-pasa-mehmed-emin" },

// ── 19 · Midhat Paşa (H-0068) ───────────────────────────────────────────────
{ id:"kimdir-midhat-pasa", tur:"kimdir",
  ad:"Midhat Paşa",
  kisa:"Anayasayı yazan adam, kendi yazdığı anayasanın padişahına 49 gün dayanabildi; ölümü resmen 'şîrpençe hastalığı', gerçekte Tâif zindanında boğulmaydı.",
  metin:"1822'de İstanbul'da Ahmed Şefik adıyla doğdu, Divân-ı Hümâyun kaleminden başlayarak bürokraside yükseldi. 1861'de Niş valisiyken güvenliği sağlaması, yol ve köprü inşaatlarıyla tanındı. En önemli idari başarıları Tuna Vilâyeti valiliğinde (1864-1868) geldi: yeni vilâyet nizamnâmesini uyguladı, ziraat bankaları kurdu, ilk vilâyet gazetesini çıkardı, ulaşım altyapısını geliştirdi. Bağdat valiliğinde (1869-1872) tarımı geliştirdi, aşiretleri devlete bağladı, Dicle ve Fırat'ta vapur işletmeciliğini örgütledi. Aralık 1876'da sadrazam olup anayasal yönetimin öncülüğünü yaptı; Osmanlı Devleti'nin ilk anayasası Kānûn-ı Esâsî'nin hazırlanmasında merkezi rol oynadı ve anayasa 23 Aralık 1876'da ilan edildi. Meşrutî bir yönetimin devletin iç çekişmelerini ve dış müdahaleleri önleyebileceğine inanıyordu; ama II. Abdülhamid'le anayasanın uygulanması konusunda çatıştı ve sadrazamlığı yalnız 49 gün sürdü. Görevden alınıp kısa bir sürgünün ardından 1881'de tutuklandı, Sultan Abdülaziz'in ölümüne karışmakla suçlanıp yargılandı; idam cezası önce ömür boyu hapse çevrildi, Tâif'e sürüldü. 7-8 Mayıs 1884 gecesi esrarengiz koşullarda öldü; resmî açıklama 'şîrpençe hastalığı' idi, TDV kaydına göre gerçekte hücresinde boğularak öldürüldü. Ölümü, II. Abdülhamid döneminde anayasal muhalefetin tasfiyesinin simgesi oldu.",
  not:"Ölüm sebebi (boğulma) ile resmî açıklama (hastalık) arasındaki fark, TDV'nin kendi kaydında açıkça belirtilir — kart bu ikisini ayırt ederek verir.",
  kesinlik:"kesin",
  olay:["1884-05-08"],
  kaynak:"TDV: midhat-pasa" },

// ── 20 · İpşir Mustafa Paşa — 'Deyyus-u Ekber' (H-0073) ────────────────────
{ id:"magazin-ipsir-mustafa-pasa-deyyus", tur:"magazin",
  ad:"'Deyyûs-i Ekber' — İpşir Mustafa Paşa'ya halk neden bu lakabı taktı?",
  kisa:"Bir isyanı bastırıp sadrazam olan İpşir Paşa, dört ay sonra kendisi de idam edildi — ama tarihe onu geçiren şey bu değil, arkasında bıraktığı ağır bir lakap oldu.",
  metin:"Abaza kökenli İpşir Mustafa Paşa, dayısı Abaza Paşa'nın himayesinde yetişti; çeşitli valilik ve beylerbeyilik görevlerinden sonra Sivas valiliğine atandı. Burada, İstanbul'un istediği vergiyi ödemeyi reddedip isyan eden Sivas beylerbeyi Varvar Ali Paşa'yı Mayıs 1648'de yenip ortadan kaldırdı — TDV'nin kaydına göre Varvar Ali 20 Mayıs 1648'de idam edilip başı İstanbul'a gönderildi. Bu başarı İpşir'in nüfuzunu artırdı; 1654'te Derviş Mehmed Paşa felç olunca sadaret mührü ona verildi. Kısa sadrazamlığında bir nizamnâme hazırlatıp rüşvet ve câizeyi kaldırmayı, makamların ehliyete göre dağıtılmasını hedefledi — ama yalnız dört ay sonra İstanbul'a döndüğünde muhalif güçlerle karşı karşıya kaldı. Sipahiler ve yeniçeriler birleşip Kara Murad Paşa'yı istediler; sarayda toplanan devlet ricalinden hiç kimse onu savunmayınca mührü kendisi teslim etti ve 11 Mayıs 1655'te idam edildi. Halkın ona taktığı 'deyyûs-i ekber' (en büyük deyyus/namussuz) lakabının somut, belgelenmiş bir gerekçesi TDV'nin okunan kaydında AÇIKÇA YAZMAZ — kaynak yalnız lakabın varlığını aktarır, kökenini açıklamaz. Bu, çağının siyasi hicvinin sık kullandığı ağır bir yakıştırma olabilir; ama bu atlas bunu doğrulanmamış bir iddia olarak, olgu gibi sunmadan aktarır.",
  not:"'Deyyûs-i ekber' lakabının gerekçesi ÇÖZÜLEMEDİ — okunan TDV kaydı yalnız lakabı anıyor, hangi olaya dayandığını söylemiyor. Uydurmak yerine 'bulunamadı' diye kaydedildi (CLAUDE.md §4).",
  kesinlik:"tartismali",
  olay:["1648-05-01"],
  kaynak:"TDV: ipsir-mustafa-pasa" },

// ── 21 · Osmanlı'nın en başarılı sadrazamları (H-0080) ──────────────────────
{ id:"tartisma-en-basarili-sadrazamlar", tur:"tartisma",
  ad:"On üç sadrazam sekiz yılda tükenirken, bazıları neden onlarca yıl akılda kaldı?",
  kisa:"Emre'nin önerdiği liste TDV'yle karşılaştırıldı — çoğu doğrulandı, birkaçının 'başarısı' aslında bir sonraki nesle devrettiği mirastan ibaretti.",
  metin:"Osmanlı sadrazamlarının çoğu birkaç ay ile birkaç yıl arasında görev yapıp iz bırakmadan gitti; aşağıdakiler kalıcı bir kurumsal ya da askerî miras bıraktıkları için öne çıkar (bu dosyanın kendi kartlarından, tarih sırasıyla): SOKULLU MEHMED PAŞA üç padişah döneminde on dört yıl görev yaptı, Lepanto'da yok olan donanmayı bir kışta yeniden kurdu. KÖPRÜLÜ MEHMED PAŞA sekiz yılda on üç sadrazamın tükettiği bir devleti beş yılda yeniden disipline soktu. KÖPRÜLÜZÂDE FÂZIL AHMED PAŞA on beş yılı aşkın sadrazamlığında Girit'i, Podolya'yı ve Ukrayna'yı kattı. KUYUCU MURAD PAŞA doksan yaşına yakın bir ihtiyarken Anadolu'yu saran büyük Celâlî dalgasını iki yılda söndürdü. KEMANKEŞ MUSTAFA PAŞA mali disiplinle hazineye yılda 6000 kese kazandırdı ve bugünkü Türkiye-İran sınırının temelini imzaladı. KOCA RAGIP PAŞA Avrupa'yı saran Yedi Yıl Savaşları'nın dışında kalmayı başaran temkinli bir barış siyasetçisiydi. MUSTAFA REŞİD PAŞA Tanzimat Fermanı'nı ilan ettirip modern Osmanlı hukukunun temelini attı. MEHMED EMİN ÂLİ PAŞA otuz yıllık Tanzimat diplomasisinin son ve en tecrübeli ismiydi. MİDHAT PAŞA Osmanlı'nın ilk anayasasını hazırladı. Emre'nin önerdiği listede yer alan PARGALI İBRAHİM PAŞA ve MERZİFONLU KARA MUSTAFA PAŞA da büyük fetihler (Mohaç, Irakeyn Seferi / Çehrin) yönetti, ama ikisi de idamla sonuçlanan bir düşüşle anılır — 'başarı' ile 'trajik son' bu iki isimde iç içedir. Çandarlı Halil Paşa ve Gedik Ahmed Paşa da döneminin en yetenekli kumandanlarındandı, ama Emre'nin 'en başarılı' listesine değil, bu dosyanın idam-örüntüsü tartışmasına dahil edildi çünkü ölümleri kariyerlerinin en belirleyici anı sayılıyor.",
  not:"Bu bir sıralama değil bir derlemedir; 'en başarılı 10' iddiası öznel olduğu için sayı sabitlenmedi — burada TDV'nin kendi metninde somut icraatla desteklenen isimler bir araya getirildi. Mahmutpaşa ve Çandarlı Mehmed Paşa (Emre'nin listesindeki iki isim) için bu oturumda ayrı TDV doğrulaması yapılamadı; kart bu ikisini içermiyor.",
  kesinlik:"tartismali",
  olay:["1656-09-15"],
  kaynak:"TDV: sokullu-mehmed-pasa · koprulu-mehmed-pasa · kopruluzade-fazil-ahmed-pasa · kuyucu-murad-pasa · kemankes-mustafa-pasa · ragib-pasa · mustafa-resid-pasa · ali-pasa-mehmed-emin · midhat-pasa · ibrahim-pasa-makbul · merzifonlu-kara-mustafa-pasa" }

];
