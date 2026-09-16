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
  baslik:"Nevşehirli Damad İbrahim Paşa",
  ad:"Nevşehirli Damad İbrahim Paşa",
  kisa:"Helvacılar Ocağı'ndan sadrazamlığa yükselen bu adam Lâle Devri'ni ve Osmanlı'nın ilk Türk matbaasını başlattı — ama halkın 'zevk ve sefahat' dediği o devri bir isyan bitirdi, cesedi İstanbul sokaklarında sürüklendi.",
  metin:"1662 dolayında Nevşehir'de doğdu, 1689'da İstanbul'a geldi ve saraya önce Helvacılar, ardından Baltacılar Ocağı'ndan girdi. Şehzade Ahmed'in (sonraki III. Ahmed) hizmetinde bulunup onunla yakınlaştı; 1703 Edirne Vak'asını (aynı isyan Reisülküttab Râmi Mehmed Efendi'nin de sadrazamlığını bitirmişti — bkz. bu dosyadaki kimdir-rami-mehmed-pasa) atlatarak Dârüssaâde kethüdâsı yazıcılığına, oradan devlet işlerinde giderek artan bir nüfuza kavuştu. III. Ahmed'in kızı ve merhum Sadrazam (Silâhdar) Şehid Ali Paşa'nın dul eşi Fatma Sultan'la 19 Şubat 1717'de evlendirildi; 'dâmâd-ı şehriyârî' unvanıyla 1718'de sadrazamlığa atandı. İlk büyük icraatı, uzayan savaşları sonlandıran 1718 Pasarofça Antlaşması'ydı. Askerî masrafları kısarak hazineye TDV'nin verdiği rakamla 5675 divanî kese fazla sağladı. 1720-1721'de Yirmisekiz Çelebi Mehmed Efendi'yi özel bir elçilik heyetiyle Paris'e gönderdi; heyetin sefâretnâmesi Osmanlı sarayının Avrupa'ya kültürel açılımını hızlandırdı ve İstanbul'daki mimari ile bahçe tasarımını doğrudan etkiledi. Kâğıthane'de Sâdâbâd Kasrı'nı inşa ettirdi; bu eğlence ve imar dönemi, seçkinler arasında zevk göstergesi hâline gelen lale yetiştiriciliğinin simgesi olarak 'Lâle Devri' adıyla anıldı ve İstanbul'a sayısız eser kazandırdı. 1727'de İbrâhim Müteferrika eliyle ilk Türk matbaasının kurulmasını destekledi. Yangınla mücadele için tulumbacı teşkilâtını kurdu; bilim adamlarını, şairleri ve sanatçıları himaye edip tarihî ve felsefî eserlerin tercümesini teşvik etti. Ama halkın gözünde 'zevk ve sefahat' öne çıkan bu dönemde Afgan seferindeki yenilgi, yeni vergiler ve işsizlik hoşnutsuzluğu büyüttü. 1730'da patlak veren Patrona Halil İsyanı sırasında baskı altında kalan III. Ahmed, damadını feda etmek zorunda kaldı: İbrahim Paşa, 18 Rebîülevvel 1143 (1 Ekim 1730) günü damatlarıyla birlikte sarayda öldürüldü; cesedi İstanbul sokaklarında sürüklenip çeşitli hakaretlere uğradıktan sonra parçalanmış hâlde III. Ahmed Çeşmesi yakınında bırakıldı.",
  not:"İdamı kendi kararından çok, padişahın tahtını korumak için bir isyancı kitleye verdiği bir tavizdi — Pargalı İbrahim ve Kemankeş Mustafa'nın aksine, doğrudan bir saray entrikasının değil bir halk ayaklanmasının kurbanıydı. Fatma Sultan'ın önceki eşi Şehid Ali Paşa, 1716'da Petrovaradin Savaşı'nda şehid düşen sadrazamdır — bu evlilik, TDV'nin ayrı iki cümlesinden (kim olduğu + tarih) birleştirildi, doğrudan tek cümlede geçmiyor.",
  kesinlik:"kesin",
  olay:["1730-10-01"],
  kaynak:"TDV: damad-ibrahim-pasa-nevsehirli (16-17 Eylül 2026'da DALGA-0058/madde 2 için yeniden okundu, kart genişletildi: sadrazamlık öncesi kariyeri, Yirmisekiz Çelebi Mehmed Efendi elçiliği, lale yetiştiriciliğinin simgesel önemi, idam sahnesinin ayrıntısı, Fatma Sultan'ın önceki evliliği)" },

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
  metin:"1635'te Amasya'da doğdu, Köprülü Mehmed Paşa'nın oğluydu; devrin önde gelen âlimlerinden eğitim aldı ve İstanbul'un büyük medreselerinde müderrislik yaptıktan sonra idareye geçti. Babasının ölümü üzerine 8 Rebîülevvel 1072'de (1 Kasım 1661) vezîriâzam oldu ve on beş yılı aşkın süre bu görevde kaldı — bunun dokuz yılını bizzat sefer meydanlarında geçirdi. 1663'te Avusturya seferini yönetip Uyvar kalesini fethetti ve bu zaferi 'Allah muîn oldu fetheyledik Uyvar'ı' dizesiyle andı; ama ertesi yıl 1 Ağustos 1664'te Saint Gotthard (Szentgotthárd) meydanında ağır bir yenilgi aldı. Yine de sahadaki bu kayba rağmen yalnız on beş gün sonra, 16 Ağustos 1664'te, Osmanlı'yı Varad ve çevresinde tanıtan, esirlerin iadesini sağlayan ve yıllık haraç bağlayan elverişli Vasvar Antlaşması'nı imzalattı — meydanda kaybedip masada kazanan bir diplomasi örneği. En büyük başarısı, çeyrek asırdır süren Girit Savaşı'nı bitirmesiydi: 1666'da adaya bizzat geçip iki buçuk yıllık kuşatmanın ardından Eylül 1669'da Kandiye dahil bütün Girit'in teslimini sağladı. 1672'de Kamaniçe'yi ve öteki Lehistan kalelerini fethedip Bucaş Antlaşması'yla Podolya ve Ukrayna'yı geçici olarak Osmanlı nüfuzu altına aldı. Babasının aksine ılımlı, hoşgörülü, sabırlı ve azimli olarak tanınırdı; İstanbul Divanyolu'nda değerli yazmalarla donattığı Köprülü Kütüphanesi'ni kurdu — Osmanlı'nın ilk vakıf kütüphanelerinden biri — ve şair Nâbî, âlim Hezarfen Hüseyin Efendi ile hattat Derviş Ali gibi isimleri himaye etti; Kandiye ve Kamaniçe kuşatmalarını anlatan tarihler ısmarladı. 3 Kasım 1676'da siroz hastalığından öldü, İstanbul Çemberlitaş'ta babasının türbesine gömüldü; yerini önce Merzifonlu Kara Mustafa Paşa aldı.",
  not:"Baba-oğul karşılaştırması kaynağın kendi vurgusu: sert disiplinci baba, hoşgörülü ve bilgin oğul — ama ikisi de aynı askerî başarı çizgisini sürdürdü. TDV ayrıca Batılı kaynakların Osmanlı yenilgilerini abartıp başarılarını küçümseme eğilimine dikkat çeker; Saint Gotthard'ın Avrupa tarih yazımında 'Türkleri durduran zafer' diye büyütülmesi buna örnektir — oysa savaş sonrası masada kaybeden taraf Avusturya oldu.",
  kesinlik:"kesin",
  olay:["1661-11-01"],
  kaynak:"TDV: kopruluzade-fazil-ahmed-pasa (16 Eylül 2026'da DALGA-0054/H-0002 için yeniden okundu, kart genişletildi: Saint Gotthard/Vasvar, Köprülü Kütüphanesi ve himaye ettiği isimler, ölüm sebebi)" },

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
  kaynak:"TDV: sokullu-mehmed-pasa · koprulu-mehmed-pasa · kopruluzade-fazil-ahmed-pasa · kuyucu-murad-pasa · kemankes-mustafa-pasa · ragib-pasa · mustafa-resid-pasa · ali-pasa-mehmed-emin · midhat-pasa · ibrahim-pasa-makbul · merzifonlu-kara-mustafa-pasa" },

// ============================================================================
// DALGA-0053 EKİ (16 Eylül 2026 gece) — maddeler H-0003 H-0004 H-0005 H-0006 H-0007
// Kaynak: parti-emrelic-0053/PARTI.md. Ana kaynak Şuayp Ateş, "1075-1099/1664-1688
// Tarihli Anonim Bir Esere Göre II. Viyana Seferinde Sadrazam Kara Mustafa Paşa",
// ETÜ Sosyal Bilimler Enstitüsü Dergisi S.14 (Nisan 2022), s.203-221 (hakemli dergi
// makalesi, PDF bu oturumda TAM okundu — Read aracıyla, WebFetch metin katmanını
// göremedi, D107 "metin çıkarılamadı ≠ belgede metin yok" tuzağı burada da çıktı).
// Makale çağdaş kroniklerden (Vekâyi-i Viyana, Silahdâr Tarihi) doğrudan alıntı
// yapıyor; alıntılar burada 15 kelimeyi aşmayacak şekilde kısaltılıp aktarıldı.
// Parkan (H-0006) için TDV'de 1683 çarpışmasının ayrıntısı YOK (yalnız 1663 sonrası
// Ciğerdelen olayları var, taneciklik boşluğu — CLAUDE.md §4); akademik tekil kaynak
// bulunamadığı için kurumsal bir tarih portalı (Polish History, Lehistan Tarih Müzesi
// yayını) kullanıldı, kesinlik:"tartismali" ile işaretlendi.
// ============================================================================

// ── 22 · II. Viyana kararı: divan, itirazlar, gizli yürüyüş (H-0003) ───────
{ id:"sebep-sonuc-2viyana-karar-sureci", tur:"sebep-sonuc",
  kisa:"Sadrazam, kendisine karşı çıkan Budin beylerbeyini ve Kırım hanını 'korkaklık'la suçlayıp divanı susturdu; padişaha haber bile vermeden Viyana'ya yöneldi.",
  sebep:{ b:"27 Haziran 1683'te İstoni-Belgrad'da toplanan harp divanında Sadrazam Kara Mustafa Paşa'nın Yanıkkale'yi almadan doğrudan Viyana'ya yürüme kararını açıklaması; Budin Beylerbeyi Koca İbrahim Paşa, Kırım Hanı Murad Giray ve Orta Macar kralı Tökeli İmre'nin buna açıkça karşı çıkması", t:"1683-07-14" },
  sonuc:{ b:"Sadrazam'ın itiraz edenleri korkaklıkla suçlayıp ikisinin de düşmanlığını kazanması; Yanıkkale'yi geride bırakıp IV. Mehmed'e sefer rotası hakkında danışmadan bir mektupla haber vererek Viyana'ya ilerlemesi", t:"1683-07-14" },
  bag:"IV. Mehmed, Viyana'nın hedef olduğunu öğrenince şaşkınlığını gizlemedi: 'Kasdımız Yanık ve Komaron kaleleri idi. Viyana'ya gidileceği konuşulmamıştı... önceden söylemiş olsaydı izin vermezdim' dedi (Silahdâr) — yine de sadrazamı cesaretlendirmek için ona hil'at ve kılıç gönderdi. Padişah bizzat orduyla gitmeyip Belgrad'da av partileriyle kaldığı için, seferin bütün sorumluluğu ve Viyana fâtihi olma hevesi tek başına Kara Mustafa Paşa'ya kalmıştı.",
  metin:"Merzifonlu'nun Avusturya seferi hayali sadrazamlığının daha altıncı yılında (1676'dan altı yıl sonra, yani 1682) başlamıştı; bu fikrine padişahı ikna edebilmek için Valide Turhan Sultan'ı, yeniçerileri ve serhat beylerini harekete geçirmiş, Macarların Osmanlı himayesine girme talebini de gerekçe göstermişti. 1682 Ağustos'unda toplanan Divân-ı Hümâyun'da kendisine muhalefet edebilecek kimse yoktu; 1664 Vasvar Barış Antlaşması'nın süresi 1684'te dolacaktı ve bu artık dikkate alınmaması gereken bir antlaşma sayıldı. 1 Nisan 1683'te Edirne'den yola çıkan ordu Tuna kıyılarına vardığında Kara Mustafa Paşa serasker tayin edildi. Asıl dönüm noktası 27 Haziran 1683'teki İstoni-Belgrad divanıydı: sadrazam burada Yanıkkale'yi atlayıp doğrudan Viyana'yı hedeflediğini açıkladı, üç önemli müttefikini (Budin beylerbeyi, Kırım hanı, Tökeli İmre) karşısına aldı ve onları susturdu. Ordu Temmuz başında Viyana önlerine ulaştığında, şehri kaçan halkından zaten boşalmış buldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1683-07-14"],
  kaynak:"Şuayp Ateş, ETÜSBED S.14 (2022), s.204-206 — Silahdâr Tarihi (1928) II/39 · Uzunçarşılı, Osmanlı Tarihi III (2011) 461-473, 471-473 · Çolak, Bitmeyen Hesaplaşma (2008) 1-14 · Madlen, Viyana 1683 (2005) 24-26",
  ic_not:"Emre'nin isteği ayrıca bir KRONOLOJİ MADDESİ istiyordu ('2. Viyana kuşatmasına giden süreci anlatan bir kronoloji maddesi') — bu ek okuma dosyası olaylar_*.js'e yazamaz (§7, dosya yetkisi yok); kronoloji maddesi ihtiyacı koordinatöre ayrıca bildirilecek." },

// ── 23 · Neden Viyana, neden değil Yanıkkale? (H-0004) ─────────────────────
{ id:"tartisma-2viyana-neden-viyana-degil-yanikkale", tur:"tartisma",
  ad:"Yanıkkale, Komáron, Léva dururken neden doğrudan Viyana? Bir kumarın anatomisi",
  kisa:"Bir kâhin rüyasını yorup 'bu seferden vazgeç, yoksa pişman olursun' dedi; sadrazam onu hapsetti. Serhat beyleri uyardı; sözlerini dinlemeyeceğine yemin etti.",
  metin:"Padişahın fermanı açıktı: başta Yanıkkale-Komáron olmak üzere birkaç kale ve palangayı almak. Sadrazam bunu bilerek aştı — TDV'nin ve akademik kaynağın ortak vurgusu, kararın arkasında Kanûnî'nin bile açamadığı Viyana kapılarını açma hırsı ve şahsi şöhret olduğu yönünde. Karardan önce iki uyarı görmezden gelindi. Birincisi bir rüya yorumuydu: sadrazam, ayağına çizme giyip yedi başlı bir ejderhanın kendisine saldırdığı bir rüya gördü; İstanbul'un tanınmış kâhini Muabbir Hasan Efendi bunu 'ejderha Nemçe kralıdır, yedi kral ona itaat eder — bu seferin azametinden vazgeç, yoksa pişmanlık kesindir' diye yorumladı. Sadrazam öfkelenip kâhini hapsetti. İkincisi Budin serhaddinden gelen tecrübeli ihtiyarların uyarısıydı: Alman ordularının gücünü bilen bu kişiler sefere açıkça karşı çıktı; sadrazam sert azarlarla reddedip 'bundan sonra karşı çıkanın dilini makasla keserim' dedi. Askerî tarih açısından risk açıktı: kale kuşatmak için gereken ağır muhasara topları (kırk elli balyemez, on beş yirmi kolomborna) hiç getirilmemişti, yalnız 300 orta boy top vardı — çağdaş bir gözlemcinin (Kreutel'in aktardığı) sorusu: 'bu çeşit küçük toplarla böylesine kudretli bir kale nasıl dövülür?' Yakın kaleleri (Yanıkkale, Komáron, Léva, Hatta) atlayıp doğrudan bir başkenti kuşatmak, hem geri çekilme hattını hem ikmal yollarını müttefik topraklarının ortasında bırakmak demekti — nitekim ordunun atları için ot bile tükendi.",
  bag:"Tanınmış edebiyatçı Ahmet Hamdi Tanpınar'ın hükmü sert: 'Hiçbir şey Osmanlı İmparatorluğu'na Merzifonlu Kara Mustafa Paşa'nın hırsı kadar zararlı olmamıştır.' Akademik makalenin kendi değerlendirmesi ise daha ölçülü: İbn Haldun'a atıfla, her çağın kendi zorunlulukları içinde değerlendirilmesi gerektiğini, sorumluluğun tek başına Merzifonlu'ya yüklenmesinin çağdaş tarihlerin bir alışkanlığı olabileceğini hatırlatır.",
  not:"Kara Mustafa Paşa'nın şehri tahrip etmeden, 'kendisine bir ödül gibi' teslim alınmasını umarak kuşatmayı uzun tuttuğu (yağmayı geciktirdiği) da bir başka ayrı tercih hatası olarak kaynaklarda geçer — açgözlülük zamanı Osmanlı aleyhine işletti.",
  kesinlik:"kesin",
  olay:["1683-07-14"],
  kaynak:"Şuayp Ateş, ETÜSBED S.14 (2022), s.205-206 (Kreutel 1970: 30-31, 86 · Madlen 2005: 49-51) · TDV: merzifonlu-kara-mustafa-pasa" },

// ── 24 · Bozgunun sebepleri: teçhizat, taktik, ihanet (H-0005) ─────────────
{ id:"tartisma-2viyana-bozgun-sebepleri", tur:"tartisma",
  ad:"Viyana'da Osmanlı'yı yenen şey neydi? Top, sayı, yeniçeri ve bir hanın sessizliği",
  kisa:"Yeniçeriler tüfekleriyle siperlerde bekletilirken kale düşecek sanılıyordu; düşman geldiğinde asıl savaşan asker meydanda yoktu.",
  metin:"Kaynaklar bozgunu tek nedene bağlamaz, dört ayrı zaafı art arda sayar. TEÇHİZAT: Osmanlı topçusu hem sayıca hem nitelikçe yetersizdi — Avusturya topçusu 'sadrazamın emrindeki topçulardan daha iyiydi' ve daha Ağustos başında Türk karargâhında büyük kayıplara yol açmıştı (Jorga); büyük muhasara topları hiç getirilmemişti. SAYI: Osmanlı kuvvetinin mevcudu kaynaklarda 60.000'den 500.000'e kadar uçuk farklarla verilir; Danişmend'in ölçülü tahmini kuşatan ordunun 60.000, gelen Kutsal İttifak yardım kuvvetinin bundan on bin fazla (yaklaşık 70.000) olduğu yönündedir — yani sayı üstünlüğü iddia edildiği kadar kesin değildi. TAKTİK: asıl hata, kalenin düşmek üzere olduğunu sanan sadrazamın ateşli silah taşıyan yeniçerileri ve ordunun önemli bir kısmını siperlerde bekletip esas muharebeye hiç sokmamasıydı (İnalcık); bu grup meydanda yokken ordu büyük bir panikle geri çekilmek zorunda kaldı. İTTİFAK ÇÖZÜLMESİ: Tuna köprülerini korumakla görevli Kırım Hanı Murad Giray, düşman geçişine mukavemet göstermedi — tarihçi Jorga, Lehlerle gizli bir anlaşma ihtimaline işaret eden Leh belgelerinden söz eder; hanın kendi kâhyasının uyarılarını 'yalan delil' diye reddedip muharebeye katılmadığı da kayıtlıdır. Budin Beylerbeyi İbrahim Paşa'nın kuvvetleri de Alaman-dağı (Kahlenberg) çarpışmasında fazla direnmeden geri çekildi. LOJİSTİK: iki aydır süren kuşatmada atlar için ot bile tükenmiş, ordu büyük bir bıkkınlığa düşmüştü. Son olarak Sobieski'nin eşine yazdığı bir mektup, Eflak-Boğdan gibi 'aslen Hıristiyan' birliklerin savaş sırasında karşı tarafa geçtiğini de anlatır — Merzifonlu bu seferde fiilen yalnız bırakılmıştı.",
  not:"Bir görgü tanığı müzesi karşılaştırması ilginç bir çelişki taşır: Prof. Nevzat Tarhan, Viyana Arsenal Müzesi'nde sergilenen Avusturya silahlarının Osmanlı'nınkilerden 'çok daha eski ve gelişmemiş' göründüğünü aktarır — bu, kaynakların çoğunluğunun 'Avusturya topçusu üstündü' hükmüyle ÇELİŞİR; makale bu çelişkiyi çözmeden yan yana bırakır.",
  kesinlik:"tartismali",
  olay:["1683-09-12"],
  kaynak:"Şuayp Ateş, ETÜSBED S.14 (2022), s.206-208 (Jorga 2009: II/148-151 · Danişmend 1972: III/454-456 · İnalcık 2017: 187-222 · Madlen 2005: 49-51)" },

// ── 25 · Parkan'ın ikinci bozgunu (H-0006) ──────────────────────────────────
{ id:"savas-hikayesi-parkan-1683", tur:"savas-hikayesi",
  baslik:"Parkan Muharebesi (7-9 Ekim 1683)",
  kisa:"İlk gün Osmanlı pusu kurup kazandı, kral neredeyse öldürülüyordu; iki gün sonra aynı ordu bir nehir kıyısında sırtı köprüye dayalı halde kıstırıldı ve neredeyse yok oldu.",
  tarih_metin:"7-9 Ekim 1683",
  yer:"Parkan (Ciğerdelen / Párkány, bugün Štúrovo, Slovakya), Estergon'un Tuna karşı yakası",
  taraflar:[
    { ad:"Osmanlı kuvvetleri (Viyana'dan çekilen artçı)", komutan:"Kara Mehmed Paşa", kuvvet:"kaynakta kesin sayı verilmiyor (bir kaynağa göre 10.000-15.000)" },
    { ad:"Lehistan-Kutsal İttifak kuvvetleri", komutan:"Kral Jan Sobieski · Lorraine Dükü Charles", kuvvet:"kaynağa göre 14.000-15.000 (ikinci gün karşı saldırı kuvveti)" }
  ],
  oncesi:"Viyana'dan bozgunla çekilen Osmanlı kuvvetlerinin bir kısmı, Aşağı Macaristan'ı (Osmanlı'ya tâbi bölgeyi) ikmalden kesmemek için stratejik Estergon kalesini elde tutmaya çalışıyordu. Parkan, Estergon'un Tuna'nın karşı yakasındaki köprübaşıydı.",
  akis:"7 Ekim'de öncü birliği keşif yapmadan ilerleyen Sobieski'nin ordusu Kara Mehmed Paşa'nın kuvvetlerince pusuya düşürüldü; kralın kendisi kıl payı kurtuldu. Osmanlılar, kralın süvarisi sanılan bir voyvodanın cesedini bulup başını sadrazam kalıntı ordusuna gönderdi. Sobieski iki gün içinde düzeni yeniden kurup karşı saldırı hazırladı. 9 Ekim'de müttefik kuvvetler topçu üstünlüğünü kullanarak Osmanlı'nın sol kanadını kırdı; Kara Mehmed Paşa'nın birlikleri önlerinde Hron (Gran) nehrini ve yıkılan köprüyü, arkalarında ilerleyen düşman ordusunu bulup kaçış yolu bulamadı.",
  sonuc:"Bir kaynağa göre 10.000 Osmanlı askeri öldü, 1.500'ü esir alındı; Kara Mehmed Paşa yalnız 800 kişiyle kaçabildi. Bu ikinci bozgunun ardından Estergon kalesi kısa bir kuşatmanın sonunda 27 Ekim 1683'te müttefiklerin eline geçti — Habsburg taarruzunun Viyana sonrası ilk somut toprak kazancıydı.",
  tartisma:"TDV'nin `estergon` maddesi 1683 Ekim çarpışmasının komutan, tarih ve ayrıntılarını VERMİYOR — yalnız sonucu (Osmanlı yenilgisi, Estergon'un kaybı) kaydediyor; 1663 sonrası döneme dair ayrı bir Ciğerdelen olayını anlatıyor, iki olay karıştırılmamalı. Verilen kayıp rakamları (10.000 ölü) yalnız tek bir kurumsal tarih portalına dayanıyor, ikinci bağımsız akademik kaynakla ÇAPRAZLANAMADI — bu yüzden rakamlar ihtiyatla aktarılmalı.",
  kesinlik:"tartismali",
  olay:["1683-10-09"],
  kaynak:"Polish History (Lehistan Tarih Müzesi'nin kamuya açık tarih portalı), \"The Battle of Párkány (7-9 October 1683)\" · TDV: estergon (yalnız Estergon'un kaybı ve 27 Ekim tarihi için)",
  ic_not:"Atlasın kendi kaydı (olaylar_ek3.js, t:1683-10-09, kaynak:'estergon') zaten 'Parkan'da ikinci kez bozguna uğradı' diyor — bu kart HANGİ mekanizmayla (nehir+köprü tuzağı, topçu üstünlüğü) ikinci kez yenildiğini ekliyor, tekrar üretmiyor. Akademik tekil kaynak (hakemli makale) bu savaş için bu oturumda bulunamadı; §4 kırmızı çizgisi gereği kurumsal müze portalı 'standart akademik referans' değildir — bu yüzden kesinlik:'tartismali' ve ikinci kaynak arayışı bir sonraki oturuma bırakılmalı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── 26 · Merzifonlu'nun idamı ve Budin beylerbeyinin son sözleri (H-0007) ──
{ id:"magazin-merzifonlu-idam-budin-beylerbeyi", tur:"magazin",
  ad:"'Azl etmesin!' — kendi katilinin canını isteyen adam: Budin beylerbeyinin son sözleri",
  kisa:"Merzifonlu, bozgunun suçunu kendisini uyaran adama yükleyip onu idam ettirdi. O adam, ölmeden hemen önce padişaha kendisini öldüren sadrazamın canının bağışlanmasını rica etti.",
  metin:"Viyana'dan Yanıkkale'ye çekilirken Kara Mustafa Paşa bozgunun sorumlusu olarak Budin Beylerbeyi (Arnavut asıllı) Koca İbrahim Paşa'yı gösterdi ve 'bu bozguna sebep olan İbrahim Paşa'dır' diyerek onu orada idam ettirdi (Vekâyi-i Viyana kroniği). Oysa İbrahim Paşa, 27 Haziran divanında Viyana'ya doğrudan yürümeye açıkça karşı çıkan, sadrazamın 'korkaklık'la suçlayıp düşmanlığını kazandığı isimdi — yani felaketi önceden görüp uyaran kişi, felaketin faturasını ödeyen kişi oldu. Öztuna'nın aktardığı rivayete göre İbrahim Paşa, kendisini sevmemesine rağmen idam edilmeden hemen önce şu sözleri söyledi: 'Padişahımıza söyle, kaybımızı telafi edecek ancak budur [Mustafa Paşa'dır], azl etmesin!' — yani ölümüne sebep olan adamın makamda kalmasını istedi, devletin selameti için. Bu olağanüstü tavrın onu kurtaramayacağı adamı, birkaç ay içinde aynı akıbet bekliyordu: Viyana bozgununu haber alan IV. Mehmed, Belgrad'a bir hatt-ı şerif ve idam fermanı gönderdi; Merzifonlu Kara Mustafa Paşa 25 Aralık 1683'te Belgrad'da boğduruldu, malları müsadere edildi. Reîsülküttab da tutuklanıp İstanbul'da asıldı. Yerine sadrazam olarak Merzifonlu'nun eski kethüdası Kara İbrahim Paşa (Budin'de idam edilenle AYNI kişi değil, adaş) atandı.",
  not:"Merzifonlu'yu 'bu hale getiren' şeyin kibir mi hırs mı olduğu sorusuna kaynaklar aynı yönde cevap verir: ünlü edebiyatçı Tanpınar'ın 'hiçbir şey imparatorluğa onun hırsı kadar zararlı olmamıştır' sözü ve çağdaş kroniğin onu 'inatçı, garazkâr, haddinden fazla mağrur ve şöhret düşkünü' diye tarif etmesi (Kreutel) aynı portreyi çizer — ama aynı akademik makale bunun tek taraflı bir mahkûmiyet olabileceğini, sorumluluğun devrin diğer aktörlerine (Kırım hanı, Budin beylerbeyi dahil) de düştüğünü hatırlatır. İstanbul'da düşmanlarının 'göbek attığı' yönünde bir iddia bu oturumda okunan kaynaklarda BULUNAMADI — uydurulmadı, yazılmadı.",
  kesinlik:"kesin",
  olay:["1683-12-25"],
  kaynak:"Şuayp Ateş, ETÜSBED S.14 (2022), s.217-218 (Vekâyi-i Viyana vr. 22b, 26b-27a) · Öztuna, Büyük Türkiye Tarihi (1978), s.123, ETÜSBED dn.6 üzerinden aktarıldı · TDV: merzifonlu-kara-mustafa-pasa" },

// ============================================================================
// DALGA-0054 EKİ (16 Eylül 2026 gece) — maddeler H-0002 H-0009 H-0010 H-0012
// Yazmadan önce kontrol (DALGA-0054.md kuralı): "mezzomorto", "azak", "don-volga
// kanal" ibareleri diğer ekokuma_*.js dosyalarında (grep) ARANDI. Azak, isim
// olarak ekokuma_dunya.js (Kazak-karışıklığı kartı) ve ekokuma_rivayet.js
// (1700 İstanbul, 1711 Prut antlaşma kartları) içinde GEÇİYOR ama hiçbiri
// "Rusya Azak'ı neden istedi" sorusunu ayrı bir konu olarak İŞLEMİYOR — bu
// yüzden ayrı kart yazıldı, var olan kartlarla ÇAKIŞMADAN, onlara atıfla.
// Mezzomorto ve Don-Volga kanalı hiçbir ekokuma_*.js dosyasında YOK — mükerrer
// değil. H-0002 mükerrer değil, MEVCUT KART GENİŞLETİLDİ (yukarıda, 15. kart).
// ============================================================================

// ── 27 · Mezemorta Hüseyin Paşa ve lakabının kökeni (H-0009) ───────────────
{ id:"magazin-mezemorta-huseyin-pasa-lakap", tur:"magazin",
  ad:"'Yarı Ölü': Mezemorta Hüseyin Paşa lakabını nasıl kazandı?",
  kisa:"Gençliğinde İspanyollarla savaşta aldığı ağır bir yarayı atlattı ve bu ölümden dönüşü bütün hayatı boyunca taşıyacağı bir isimle andı — 'mezzomorto', İtalyanca 'yarı ölü'.",
  metin:"Hüseyin Paşa'nın 'Mezemorta' (bazı kaynaklarda 'Mezzomorto') lakabı, TDV'ye göre İtalyanca 'mezzomorto' (yarı ölü) kelimesinden gelir ve gençliğinde İspanyollarla girdiği bir çarpışmada aldığı ağır yarayı atlatmasından sonra kendisine verilmiştir. Uzun bir esaret döneminden fidyeyle kurtulan Hüseyin, 1674'ten itibaren Cezayir'de korsanlık faaliyetine başladı; 1683'te dönemin Cezayir yöneticisi Hasan Baba'yı devirip kendisi dayı ve beylerbeyi oldu, Tunus'taki isyanları bastırmak için asker gönderdi ve Fransa ile bir barış antlaşması imzaladı. Deniz kariyerinin zirvesi 1695'te geldi: Koyun Adaları'nda Venedik donanmasına karşı kazandığı zaferin ardından vezir rütbesiyle kaptan-ı deryalığa (donanma komutanlığı) getirildi. Aynı yıl içinde Midilli-Sakız açıklarındaki deniz savaşında Venedik donanmasını bir kez daha mağlup etti — Venedikliler on dört kalyon kaybetti — ve bu zaferin ardından kara kuvvetleri Sakız'ı 22 Şubat 1695'te geri aldı. 1696-1699 arasında Venedik'le pek çok deniz muharebesi daha yaptı. Karlofça Antlaşması'nın (1699) ardından son bir sefer için denize açıldı ve muhtemelen 20 Ağustos 1701'de Pare adası açıklarında öldü. Ölümünden kısa süre önce hazırlanan Bahriye Kanunnâmesi, donanmanın kalyon sayısının en az kırk olmasını şart koşarak Osmanlı deniz gücünde kalıcı bir düzenleme bıraktı.",
  not:"Mezemorta'nın kariyeri, korsanlıktan (Cezayir) resmî donanma komutanlığına (kaptan-ı deryalık) yükselen bir yol izler — 17. yüzyıl Osmanlı deniz gücünün Cezayir/Trablusgarp ocaklarıyla İstanbul donanması arasındaki personel akışının tipik bir örneğidir.",
  kesinlik:"kesin",
  olay:["1695-02-22"],
  kaynak:"TDV: mezemorta-huseyin-pasa" },

// ── 28 · Azak Kalesi'nin Rusya için önemi (H-0010) ──────────────────────────
{ id:"tartisma-azak-kalesinin-onemi", tur:"tartisma",
  ad:"Küçük bir kale, büyük bir hedef: Rusya Azak'ı neden bu kadar istedi?",
  kisa:"Bir nehir ağzındaki kale, koca bir imparatorluğun iki asırlık hedefiydi — çünkü Azak düşmeden Rusya'nın hiçbir gemisi Karadeniz'i göremezdi.",
  metin:"Azak (Azov), Don nehrinin Azak Denizi'ne döküldüğü noktada kurulmuş küçük ama konumu yüzünden orantısız derecede önemli bir kaleydi. TDV'nin `azak` maddesine göre kale tam olarak bu yüzden inşa edilmişti: 'Don Kazakları ve Rusların Karadeniz'e inmesini önlemek.' Rusya (Moskova) 16. yüzyılda henüz Karadeniz kıyısına hiç ulaşmamıştı; bütün güney sınırı bozkırda, Kazan (1552) ve Astarhan'ın (1556) alınmasıyla Hazar yönünde ilerlemişti, ama Karadeniz'e açılan tek fiziksel yol Azak'tan geçiyordu. Kale, Osmanlı için de simgesel bir sınırdı: ötesi 'Kıpçak bozkırı' ve Kırım Hanlığı'nın nüfuz alanıydı, Azak'ın kendisi ise Karadeniz'i bir 'Osmanlı gölü' olarak tutan zincirin en kuzeydeki halkasıydı. Don Kazakları kaleyi 1637'de bir baskınla ele geçirip 1642'ye kadar elde tuttu (bu atlasın kendi kaydı, ekokuma_dunya.js), ama bu erken teşebbüs kalıcı olmadı — Kazaklar kaleyi geri verip çekildi, çünkü arkalarında onları destekleyecek düzenli bir devlet ordusu yoktu. Asıl kalıcı değişim I. Petro ile geldi: 1695'teki ilk kuşatma başarısız olunca modern bir donanma inşa ettirip 19 Temmuz 1696'da ikinci kuşatmada kaleyi aldı. Bu, Rusya'nın bir Osmanlı kalesine KALICI olarak yerleştiği ilk andı ve Rusya'nın deniz gücü olma yolundaki ilk somut adımıydı (bu atlasın kendi kaydı). Azak'ın önemi salt askerî değildi: kalenin ele geçirilmesi Rusya'ya Karadeniz ticaretine, dolayısıyla Batı Avrupa'yla deniz yoluyla bağlantıya açılan tek kapıyı vaat ediyordu — bu yüzden 1711 Prut Antlaşması'yla geçici olarak geri verilse de (bu atlasın kendi kaydı, ekokuma_rivayet.js), Rusya'nın Karadeniz hedefi hiç değişmedi ve nihayet 1774 Küçük Kaynarca'yla kalıcılaştı.",
  not:"Bu kart, Azak'ın el değiştirme KRONOLOJİSİNİ değil NEDEN bu kadar istendiğini anlatır — tarih sırası ve antlaşma hükümleri için ekokuma_dunya.js'teki Kazak-karışıklığı kartına ve ekokuma_rivayet.js'teki 1700 İstanbul / 1711 Prut antlaşma kartlarına bakılabilir; burada tekrarlanmadı.",
  kesinlik:"kesin",
  olay:["1696-07-19"],
  kaynak:"TDV: azak" },

// ── 29 · Sokullu'nun Don-Volga kanal projesi (H-0012) ───────────────────────
{ id:"sebep-sonuc-don-volga-kanal-projesi", tur:"sebep-sonuc",
  kisa:"Osmanlı, Hazar'a donanma taşıyacak bir kanal kazmaya çalıştı — ama proje aynı anda üç ayrı yerden çöktü: mühendislik, müttefik ihaneti ve İstanbul'un dikkatinin Kıbrıs'a kayması.",
  sebep:{ b:"Rusya'nın 1552'de Kazan'ı, 1556'da Astarhan'ı ele geçirmesiyle Orta Asya müslümanlarının Hazar'ın kuzeyinden İstanbul'la bağlantısının ve hacca gitme yolunun kesilmesi; bölge halkının İstanbul'a elçi ve mektuplarla acil yardım istemesi", t:"1557-01-01" },
  sonuc:{ b:"Sadrazam Sokullu Mehmed Paşa'nın emriyle Kefe Beyi Kasım Paşa'nın 15.000 kişilik ordu ve teknisyenlerle Don-Volga bölgesine gidip Astarhan'ı geri almaya ve iki nehri birleştirecek bir kanal kazmaya girişmesi, ama seferin ve kanalın aynı yıl içinde başarısızlıkla sonuçlanması", t:"1569-01-01" },
  bag:"Projenin amacı yalnız Astarhan'ı geri almak değildi: TDV'nin `sokullu-mehmed-pasa` maddesine göre kanal tamamlansaydı Osmanlı donanması Hazar Denizi'ne taşınabilecek, hem Hint müslüman devletleriyle daha etkin ilişki kurulacak hem Portekiz'in bölgedeki sömürgeci faaliyetine karşı durulacaktı — yani salt bölgesel değil, kıtalar arası bir vizyon.",
  metin:"Proje kesif hem siyasi hem mühendislik hem diplomasi cephesinden aynı anda çöktü. SİYASİ: Kırım Hanı Devlet Giray sefere gizlice muhalefet etti; Kazan ve Astarhan'ın doğrudan Osmanlı idaresine gireceğinden (kendi hanlığının bu bölgeler üzerindeki hak iddiasının gölgede kalacağından) endişe ediyordu ve sefer sırasında gerekli yardımı bilerek esirgedi — TDV'nin ifadesiyle seferin başarısız olmasının kendi konumunu güçlendireceğine, böylece bu toprakları bizzat kendi kuvvetleriyle geri alabileceğine inanıyordu. DİPLOMATİK: sefer için Osmanlı'yı yönlendirenler arasında sayılan Nogaylar da harekât sırasında hiçbir yardımda bulunmadı — bu atlasın kendi kaydına göre 'bir seferi isteyip desteklememek, Nogay ordasının bölünmüşlüğünün somut bir örneği'ydi. MÜHENDİSLİK: Kasım Bey'in kuvvetleri 1569 ilkbaharında Tsaritsın (bugünkü Volgograd) yöresinde kanal kazısına fiilen başladı, ama arazi tahmin edilenden çok daha engebeli çıktı; Kırım hanının yardımsızlığıyla birleşince iş büsbütün çıkmaza girdi ve Kasım Bey geri çekildi — Osmanlı hükümeti bölgenin kanal için o an elverişsiz olduğu kanaatine vararak projeyi daha uygun bir zamana erteledi (fiilen bir daha hiç gerçekleştirilmedi). SİYASİ DİKKAT DAĞILMASI: TDV'nin Sokullu maddesi, aynı dönemde rakip devlet adamı Lala Mustafa Paşa'nın padişahı Kıbrıs seferine ikna etmeyi başardığını, bunun imparatorluğun bütün dikkat ve enerjisini Akdeniz'e çevirdiğini ve kanal girişimini gölgede bıraktığını ekler.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1569-01-01","1569-04-01","1569-06-01"],
  kaynak:"TDV: sokullu-mehmed-pasa · astarhan-hanligi",
  ic_not:"H-0012 'kronoloji maddemiz var mı' diye soruyordu — CEVAP: EVET, ZATEN VAR ve zengin: kronoloji_orta_asya.js (1557-01-01 hac yolu · 1569-04-01 arazide çöküş — mühendislik ayrıntısıyla), kronoloji_kirim.js (1569-01-01 Devlet Giray'ın gizli muhalefeti), kronoloji_rusya.js (1569-01-01 sefer) ve kronoloji_orta_asya.js (1569-06-01 Nogay desteksizliği). Bu yüzden denetim/YAMA-0054-VEZIR.json'a YENİ BİR KRONOLOJİ ÖNERİSİ YAZILMADI — önerilen dosya boş kalacaktı, üretilmedi (D001 sınıfı: var olan kaydı tekrar üretme). Bu kart yalnız dağınık dört kronoloji maddesini TEK bir sebep-sonuç anlatısında birleştirdi." },

// ============================================================================
// DALGA-0055 EKİ, Bölüm A (16 Eylül 2026 gece) — maddeler H-0003 H-0007
// Yazmadan önce kontrol: "Râmi Mehmed" adı ekokuma.js/ekokuma_antlasma2.js/
// ekokuma_rivayet.js'te GEÇİYOR ama üçü de yalnız Karlofça/İstanbul 1700
// görüşmelerindeki ROLÜNÜ anlatıyor — kendi hayatı, sadrazamlığı, Edirne
// Vakası'ndaki akıbeti hiçbirinde YOK. Mükerrer değil, eksik bir kişi kartı
// tamamlandı. "Kölemen" hiçbir ekokuma_*.js dosyasında geçmiyordu — mükerrer
// değil, yeni konu. Edirne Vakası'nın kendisi (darbenin örgütlenmesi, Feyzullah
// Efendi) bu dalgada EKO-PADISAH'a (madde 6) atanmış — o olay burada TEKRAR
// ANLATILMADI, yalnız Râmi Mehmed'in kişisel payına değinildi.
// ============================================================================

// ── 30 · Reisülküttab/Sadrazam Râmi Mehmed Paşa (H-0003) ────────────────────
{ id:"kimdir-rami-mehmed-pasa", tur:"kimdir",
  ad:"Râmi Mehmed Paşa",
  kisa:"Avrupalı delegeleri diplomatik ustalığıyla etkileyen barış mimarı, üç yıl sonra kendisini sadrazam yapan şeyhülislama karşı bir isyanı ateşleyip tahtını kaybetti.",
  metin:"1655'te İstanbul'da bürokrat bir aileye doğdu. Şiir yeteneği sayesinde divan-ı hümâyun kalemine girdi, Vezir Damad Musâhib Mustafa Paşa'nın kâtipliğini yaptı ve döneminin ünlü şairi Nâbî ile yakın dostluk kurup 1678-1679'da onunla birlikte hacca gitti. 1694'te reisülküttab (dışişlerine yakın bir görev) oldu; 1697'de Sadrazam Elmas Mehmed Paşa'yla anlaşmazlık yüzünden kısa süreliğine görevden alındıysa da aynı yıl Amcazâde Hüseyin Paşa döneminde makama geri döndü. Kariyerinin zirvesi 1699 Karlofça barış görüşmelerindeki rolüydü: Osmanlı heyetinin başında eski antlaşma metinlerini inceleyip uzmanlardan rapor alarak Avrupalı delegeleri diplomatik bilgisi ve ustalığıyla etkiledi (bu atlasın kendi kayıtları, ekokuma_rivayet.js ve ekokuma_antlasma2.js'te ayrıntılı anlatılır); dönüşte teklif edilen vezirlik rütbesini geri çevirdi. 1702'de bizzat Şeyhülislâm Feyzullah Efendi tarafından vezir yapılıp sadrazamlığa getirildi, ama şeyhülislâmın devlet işlerine aşırı müdahalesi yüzünden yetkisi ağır biçimde kısıtlandı. Rivayete göre bu gerilim yüzünden Ocak 1703'te iki yüz askeri isyana teşvik etti — bu kıvılcım, Temmuz 1703'te büyüyerek Feyzullah Efendi'nin linç edilip II. Mustafa'nın tahttan indirildiği Edirne Vak'asına dönüştü (bu olayın kendisi ayrı bir ek okuma konusudur). Râmi Mehmed olaydan kaçıp canını kurtardıysa da sadrazamlığını kaybetti. Kıbrıs valiliğinin ardından 1704'te Mısır valisi oldu, kıtlık koşullarıyla boğuşup 1705'te azledildi; Rodos'a sürgün edildi ve orada Mart 1708'de bağırsak hastalığından öldü.",
  not:"Kendi eliyle sadrazam yaptığı şeyhülislama karşı bir isyanı kışkırttığı iddiası TDV'de 'rivayete göre' diye geçer — olgu olarak değil.",
  kesinlik:"tartismali",
  olay:["1703-07-17"],
  kaynak:"TDV: rami-mehmed-pasa" },

// ── 31 · Bağdat Kölemenleri — kimdir, Mısır'dan farkı (H-0007) ─────────────
{ id:"tartisma-bagdat-kolemenleri", tur:"tartisma",
  ad:"Kölemen Mısır'a özgü sanılır — ama Bağdat'ı 127 yıl aynı sistem yönetti",
  kisa:"Kölemen, 'köle' kelimesinin Osmanlı Türkçesindeki biçimidir ve Arapça 'memlûk' (sahip olunan) ile aynı kurumu adlandırır — ama Bağdat'ınki, Mısır'ınkinin tam tersi bir sadakat hikâyesi anlatır.",
  metin:"'Kölemen', Arapça 'memlûk' kavramının Osmanlı Türkçesindeki karşılığıdır: köken olarak köle statüsünde alınıp özel eğitimden geçirilerek askerî ve idarî görevlere hazırlanan kullar. Bağdat'taki kölemen sistemi, 1704'te Bağdat valiliğine atanan Gürcü asıllı Hasan Paşa ile başladı. Hasan Paşa'nın kendisi İstanbul'dan gönderilmiş bir Osmanlı valisiydi, ama Tiflis köle pazarından satın aldığı Gürcü ve Çerkes çocuklarını özel bir mektepte yetiştirip kendi hane halkından bir yönetici ve asker kadrosu oluşturdu — amaç hem yeniçeri ocağını dengelemek hem sınır savunmasını güçlendirmekti. On dokuz yıllık valiliği boyunca aşiretleri sindirip bölgede istikrarı sağladı; oğlu Ahmed Paşa aynı siyaseti sürdürdü ve sistem 1749'da Süleyman Paşa'nın valiliğiyle iyice yerleşti. ASIL FARK Mısır'la buradaydı: Mısır Memlükleri devletin KURUCUSU ve BAĞIMSIZ yöneticileriydi (13.-16. yüzyıllarda kendi sultanlıklarını kurmuşlardı); Bağdat kölemenleri ise hiçbir zaman bağımsızlık ilan etmedi, kendilerini Osmanlı Devleti'nin RESMÎ TEMSİLCİLERİ olarak gördü ve merkeze bağlılıklarını hep korudu — yarı özerktiler ama isyancı değildiler. İSTANBUL'UN TEPKİSİ de bu yüzden beklenenin tersiydi: merkezî hükümet başlangıçta tepki göstermedi, hatta bölge istikrar kazandıkça kölemen yönetimini TOLERE ETTİ — çünkü Bâbıâli artık istediği kişiyi değil, nüfuzu eline geçirmiş kölemenlerden birini vali tayin etmek zorunda kalsa da, İran sınırını kendi kaynaklarıyla savunan bir yapıya sahip olmuş oluyordu. Bu denge ancak II. Mahmud'un merkezîleşme siyasetiyle bozuldu: 1831'de vali Dâvud Paşa âsi ilan edilip doksan günlük bir kuşatmayla tasfiye edildi ve 1704'ten beri süren kölemen yönetimi son buldu.",
  not:"Mısır'ın 1811 Kal'a Vak'ası'nda (Kavalalı Mehmed Ali'nin kölemen beylerini toplu katliamla tasfiyesi) ile Bağdat'ın 1831'deki sonu arasındaki fark da öğretici: Mısır'da kölemenler bir yabancı güce (Mehmed Ali) karşı direnip yok edildi, Bağdat'ta ise 'isyan eden vali' gerekçesiyle bizzat merkezî devlet tarafından tasfiye edildiler — ikisi de kölemen döneminin sonu ama farklı bir siyasi mantıkla.",
  kesinlik:"kesin",
  olay:["1704-01-01"],
  kaynak:"TDV: bagdat · Britannica: \"Hasan Pasha\" (Gürcü/Çerkes kökeni, Tiflis köle pazarı — TDV bu ayrıntıyı vermiyor, akademik ansiklopediden tamamlandı, CLAUDE.md §4 taneciklik kuralı)" },

// ============================================================================
// DALGA-0056 EKİ (16 Eylül 2026 gece, ACİL — 0055'ten önce sevk edildi) —
// maddeler 2a · 2c (H-0002'nin 1. ve 3. paragrafı; 2. paragraf — Katerina-
// Baltacı rivayeti — EKO-PADISAH'a ait, burada işlenmedi)
// Yazmadan önce kontrol: "Baltacı"/"Prut" ekokuma_savas.js'te ZATEN var — ama
// o kart (tur:"savas-hikayesi") OLAYI anlatır, TARTIŞMAYI değil. Mükerrer
// değil; iki kart o kartın anlattığı olguları TEKRARLAMADAN, ona atıfla,
// tartışma/analiz katmanı ekliyor.
// ============================================================================

// ── 32 · Baltacı Rus ordusunu neden imha etmedi? İki görüş (H-0002, 2a) ────
{ id:"tartisma-baltaci-prut-firsat-mi-kacirdi", tur:"tartisma",
  ad:"Baltacı fırsatı mı kaçırdı, yoksa doğru olanı mı yaptı? Prut'un iki yüzyıllık tartışması",
  kisa:"Çağdaş vak'anüvisler onu 'eli kolu bağlı düşmanı kaçırmak'la suçladı; kendisi ise Valide Sultan'a yazdığı mektuplarda ordunun imhasındansa siyasi kazanım almanın daha akıllıca olduğunu savundu. İkisi de tek başına bütün hikâyeyi anlatmıyor.",
  metin:"19-21 Temmuz 1711'de Prut kıyısında Çar I. Petro'nun ordusu gerçekten çaresizdi — bu atlasın kendi savaş-hikâyesi kartının (ekokuma_savas.js) anlattığı gibi, kuşatma altındaki Rus ordugâhında beyaz bayraklar açılmış, Kırım Hanı'nın ve İsveç kralının temsilcisi Poniatowski'nin 'Ruslar birkaç gün içinde savaşmadan teslim olacak' uyarıları dinlenmemiş, buna rağmen Baltacı yirmi dört saat içinde bir ateşkesi kabul etmişti. GÖRÜŞ BİR — ÇAĞDAŞ ELEŞTİRİ: Dönemin resmî vak'anüvisleri Silahdâr Tarihi ve Râşid Tarihi, Baltacı'nın bu kararsızlığını sert biçimde eleştirir; düşmanı ele geçirilebilir durumdayken kaçırmakla, yeterince saldırgan davranmamakla suçlarlar — kesin bir zafer fırsatının böyle elden kaçırıldığını ima ederler (Karaçay Türkal 2022). Halk hafızasında bu eleştiri, zamanla Çariçe Katerina'nın mücevherlerle Baltacı'yı satın aldığı efsanesine dönüştü — ama bu rivayetin kaynaklarda aslı olup olmadığı AYRI bir ek okuma konusudur, burada tekrarlanmadı. GÖRÜŞ İKİ — BALTACI'NIN KENDİ SAVUNMASI VE ASKERÎ GERÇEKLİK: Aynı akademik araştırmanın okuduğu mektuplarda Baltacı, Valide Gülnuş Sultan'a yazarak kararının hesaplı olduğunu savunur: ordunun sağlığını korumanın ve ani kayıplardan kaçınmanın önemini vurgular, dışarıdan (Avrupalı güçlerden) bir müdahale riskinden çekindiğini ve siyasi kazanımların bir imha savaşından daha akla yatkın olduğunu ileri sürer. Kaynaklar bu savunmayı 'büyük ölçüde zayıf ve kendini haklı çıkarmaya yönelik' bulur — ama askerî gerçekler de savunmasız değildi: Osmanlı ordusu da erzak sıkıntısı çekiyordu, sefer mevsimi ilerlemişti ve bir Çar'ı esir almak (ki bu bile garanti değildi — Petro esir düşerse kendisinin hükümdar sayılmamasını isteyen bir emirnâme hazırlamıştı) Avrupa'da beklenmedik bir diplomatik krize yol açabilirdi.",
  bag:"Modern araştırmanın (Karaçay Türkal 2022) asıl bulgusu şu: Baltacı'nın azli, 'kaçırılan askerî zafer' meselesinden çok, İstanbul'daki SARAY İÇİ GÜÇ DENGESİ değişikliklerine bağlanabilir — Valide Sultan'ın artan nüfuzu ve rakip devlet adamları arasındaki çekişme onun itibarını zedeledi. Yani çağdaş kroniklerin 'savaş meydanında fırsat kaçırdı' eleştirisiyle, onu gerçekte görevden götüren 'saray entrikası' AYRI iki mekanizmadır — ikisi sık sık aynı hikâye sanılır.",
  not:"Bu kart bir hüküm vermez: iki görüş de kaynaklı olarak yan yana konmuştur. Osmanlı'nın bu barıştan net bir kazanç sağlayıp sağlayamadığı sorusu ayrı bir kartta (`tartisma-prut-net-kazanc-neden-saglanamadi`) ele alınmıştır.",
  kesinlik:"tartismali",
  olay:["1711-07-21|Prut Antlaşması — Azak"],
  kaynak:"Merve Karaçay Türkal, \"Baltacı Mehmed Paşa'nın Azil Süreci ve Valide Gülnuş Sultan'a Gönderdiği Mektuplar\", Selçuk Üniversitesi Selçuklu Araştırmaları Dergisi (hakemli dergi, dergipark.org.tr/tr/pub/usad) · TDV: baltaci-mehmed-pasa" },

// ── 33 · Prut'ta Osmanlı neden net bir kazanç sağlayamadı? (H-0002, 2c) ────
{ id:"tartisma-prut-net-kazanc-neden-saglanamadi", tur:"tartisma",
  ad:"Kağıt üstünde zafer, sahada iki yıllık hayal kırıklığı: Prut'un kazancı neden gecikti?",
  kisa:"Amannâme'nin maddeleri elverişliydi — Azak geri, kaleler yıkık, İsveç kralı serbest. Ama kâğıttaki zafer sahaya hiç inmedi, çünkü kazanan tarafın elinde kazancı zorlayacak hiçbir kaldıraç kalmamıştı.",
  metin:"Bu atlasın kendi kaydına göre (ekokuma_savas.js, savas-hikayesi kartı) Prut Amannâmesi'nin şartları kâğıt üzerinde gerçekten Osmanlı lehineydi: Azak arazisi ve mühimmatıyla geri verilecek, Taygan-Kamenka-Yenikale yıkılacak, Rusya Lehistan'a ve Kazaklara karışmayacak, İsveç Kralı Demirbaş Şarl'ın ülkesine dönüşüne engel olunmayacaktı. Ama TAM İKİ YIL boyunca bu hükümlerin HİÇBİRİ hayata geçmedi — Rusya ancak yeni savaş ilanlarının ve tehditlerin ardından 24 Haziran 1713'te Edirne Antlaşması'yla taahhütlerini kabul etti (bu atlasın kendi kaydı, olaylar_ek5.js). Bunun yapısal sebepleri: BİRİNCİSİ, Osmanlı'nın elindeki tek gerçek kaldıraç Çar'ın ordusuydu ve o ordu — ele geçirilebilir durumdayken — top ve tüfekleriyle, bayrakları açık, davul zurna eşliğinde serbest bırakıldı; Rusya'nın barış şartlarına uyması için askerî bir zorlama aracı kalmamıştı. İKİNCİSİ, anlaşmayı imzalayan ve uygulamasını takip etmesi gereken Baltacı Mehmed Paşa, dönüşünden kısa süre sonra (20 Kasım 1711) azledilip sürgüne gönderildi — icra sürekliliği koptu, yerine gelen yönetim aynı dosyaya aynı ağırlıkla sahip çıkmadı. ÜÇÜNCÜSÜ, Çar'ın kendisi hiçbir zaman esir ya da rehin olmadığı için (Petro esir düşerse tahttan sayılmayacağına dair önceden bir emirnâme bile hazırlamıştı) antlaşmayı çiğnemenin kendisine doğrudan bir bedeli yoktu — yalnız yeniden savaş tehdidiyle karşılaşırdı, ki bu da nitekim 1712 ve 1713'te iki kez gerçekleşti. DÖRDÜNCÜSÜ, akademik araştırmanın (Karaçay Türkal 2022) vurguladığı gibi İstanbul'daki siyasi çekişme (Valide Sultan'ın nüfuzu, sadrazam değişiklikleri) hükümetin dış politikada tutarlı bir baskı sürdürmesini de zorlaştırdı.",
  not:"Sonuç itibariyle Osmanlı 1713'te istediğini aldı — ama savaş meydanındaki üstünlüğünü doğrudan diplomatik kazanca çeviremedi, iki yıllık bir zorlama sürecinden geçmek zorunda kaldı. Bu, 'net kazanç sağlanamaması' değil 'kazancın gecikmesi'dir; nihai sonuç Osmanlı lehine kapandı.",
  kesinlik:"kesin",
  olay:["1713-06-24"],
  kaynak:"Merve Karaçay Türkal, \"Baltacı Mehmed Paşa'nın Azil Süreci ve Valide Gülnuş Sultan'a Gönderdiği Mektuplar\", Selçuk Üniversitesi Selçuklu Araştırmaları Dergisi (hakemli) · TDV: baltaci-mehmed-pasa, ahmed-iii" }

];
