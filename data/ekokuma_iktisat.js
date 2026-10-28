// ============================================================================
// EK OKUMA — OSMANLI EKONOMİSİ VE AVRUPA KARŞILAŞTIRMASI (ekokuma_iktisat)
// AD ALANI: yalnız window.EKOKUMA_IKTISAT (js/app.js _EKOKUMA_DOSYA_ADLARI'nda).
// ============================================================================
// Yazan: KUTU-P1-1015 · 15 Ekim 2026 · paket 0052 / H-0033. Emre: "Osmanlı
// ekonomisi neye dayanıyordu, devletin gelirleri, halkın geçimi, ekonomik yapı;
// bunların Ortaçağ Avrupası ve yenileşen Avrupa'daki yapılarla farkları: sanayi
// devrimi, aydınlanma, feodalizm, kilise, kral ve soylular."
//
// MEVCUT KARTLARLA ÇAKIŞMA (data/ekokuma*.js tarandı): tımar-feodalizm farkı
// (ekokuma_toplum "timar-avrupa-feodalizm-farki", ekokuma_bolge0073), lonca/esnaf
// teşkilâtı (ekokuma_toplum "lonca-esnaf-teskilati"), vergi sistemi ve iltizam
// (ekokuma_kurum, ekokuma_kurum2), Balta Limanı / Düyûn-ı Umûmiye / malikâne /
// esham / tağşiş (ekokuma_ekonomi), sanayi devrimi icatları (ekokuma_dunya).
// Bu dosya bunları TEKRAR ETMEZ: sipahinin değil köylünün tarafını, loncanın
// teşkilâtını değil kâr-faiz-sermaye hesabını, icatları değil Osmanlı'daki
// eşzamanlı "yatırım çözülmesi"ni anlatır.
//
// KAYNAKLAR (bu oturumda GET edildi, gövde okundu):
//   TDV osmanlilar §E "İktisadî ve Ticarî Yapı" — Mehmet Genç (2007)
//     https://islamansiklopedisi.org.tr/osmanlilar#9-iktisadi-ve-ticari-yapi-normal
//   TDV osmanlilar §D "Malî Yapı" — Erol Özvar (2007)
//     https://islamansiklopedisi.org.tr/osmanlilar#8-mali-yapi
//   TDV avrupa §III "Tarih" — Kemal Beydilli (1991)  https://islamansiklopedisi.org.tr/avrupa#3-tarih
//   TDV avrupa §II "Din" — Kürşat Demirci (1991)     https://islamansiklopedisi.org.tr/avrupa#2-din
//   TDV ilmiye — Mehmet İpşirli (2000)               https://islamansiklopedisi.org.tr/ilmiye
// İnalcık ve Pamuk'un kitapları bu oturumda açılıp okunamadı; kaynak alanına
// YAZILMADI (yalnız Genç/Özvar'ın andığı yerde onların atfıyla geçer).
// TDV'de "feodalite", "kapitalizm", "aydınlanma", "sanayi" adlı müstakil madde
// YOK (arama sayfası döndü); Avrupa tarafı bu yüzden "avrupa" maddesinden.
//
// BAĞ: her olay "t|alt dizgi" — t data/olaylar*.js'teki maddenin t'siyle
// birebir, alt dizgi b'de geçer (node ile sınandı).
// Metin TDV'den özetlendi, kopyalanmadı; doğrudan alıntılar 15 kelimenin altında.
// ============================================================================
window.EKOKUMA_IKTISAT = [

{ id:"iktisat-uc-ilke-provizyonizm",
  baslik:"Osmanlı ekonomisi neye dayanıyordu? Üç ilke: iaşe, hazine, gelenek",
  tur:"sebep-sonuc",
  kisa:"Osmanlı yöneticisi için ekonominin amacı zenginleşmek değil, herkesin ihtiyacının bol ve ucuz karşılanmasıydı. Bu yüzden ithalatı kolaylaştırıp ihracatı kıstılar — Avrupa'nın merkantilizminin tam tersi.",
  metin:"■ Birinci ilke: önce ihtiyaç (provizyonizm)\nTDV'deki Mehmet Genç'e göre klasik dönem Osmanlı yöneticisinin iktisat anlayışı 'ihtiyaç' kavramına dayanıyordu. Ekonominin görevi, ülke içinde malın bol, kaliteli ve ucuz olmasını sağlamaktı. Temel birim kazaydı: bir kasaba ve ona bağlı onlarca köy, başında bir kadı. Kazada üretilen mal önce kazanın ihtiyacına, sonra orduya ve saraya, sonra kalabalık İstanbul'a, sonra öbür bölgelere giderdi. Ancak bütün bunlardan artarsa ihracata izin verilirdi.\n\n■ İkinci ilke: hazine (fiskalizm)\nİkinci hedef hazinenin gelirini korumaktı. Ama verimliliğin düşük, taşımanın çok pahalı olduğu bir ekonomide gelir artırmak zordu. Genç, Osmanlı bütçelerinin 1580'lerden 1780'lere kadar altın-gümüş değeriyle pek büyümediğini ve hemen hep açık verdiğini yazar. İki ilke çatıştığında genellikle hazine feda edilir, halkın iaşesi korunurdu.\n\n■ Üçüncü ilke: gelenek\nKurumlar XVI. yüzyıl ortasında olgunlaşınca üçüncü ilke eklendi: eski dengeyi korumak. Anlaşmazlıklarda hep aynı formül kullanılırdı: 'kadimden olagelene' aykırı iş yapılmasın. Bir kanunnâme 'kadim'i, öncesini kimsenin hatırlamadığı şey diye tanımlar.\n\n■ Avrupa ile fark: merkantilizm\nAynı yüzyıllarda Avrupa'da, Kemal Beydilli'nin TDV'deki Avrupa maddesine göre, merkantilizm hâkimdi: değerli madenin dışarı çıkmasını aktif bir dış ticaretle önlemek, yerli sanayii yüksek gümrük duvarlarıyla korumak. Amaç devletin gücünü artırmaktı. Osmanlı ise tersini yapıyordu: ihracatı sınırlayıp vergilendiriyor, ithalatı düşük gümrükle serbest bırakıyordu. Genç'e göre kapitülasyonlar da bu anlayıştan beslendi. Bu yüzden devlet en güçlü olduğu zamanlarda bile onları kısmadı, aksine genişletti.",
  kesinlik:"kesin",
  olay:["1536-02-18|kapitülasyonlar","1740-05-30|Kapitülasyonlar sürekli"],
  kaynak:"TDV: osmanlilar §E İktisadî ve Ticarî Yapı (Mehmet Genç) · TDV: avrupa §III Tarih (Kemal Beydilli)",
  ic_not:"'Provizyonizm, fiskalizm, gelenekçilik' terimleri Genç'indir; karttaki Türkçe karşılıklar (iaşe, hazine, gelenek) okura kolaylık için. Kapitülasyonlarla bağ Genç'in kendi cümlesine dayanır; siyasî 'zaaf mı araç mı' tartışması ekokuma_tartisma'daki kartta.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-devletin-gelirleri-butce",
  baslik:"Devletin parası nereden gelirdi? Hazine, tımar ve vakıf",
  tur:"sebep-sonuc",
  kisa:"1527-1528 bütçesine göre kamu gelirinin yarısı merkezî hazineye, üçte biri tımarlı sipahilere, sekizde biri vakıflara gidiyordu. Hazinenin parası da en çok askere maaş olarak çıkıyordu.",
  metin:"■ Üç kese\nTDV'deki Erol Özvar maddesine göre Osmanlı'da kamu gelirleri üç kesede toplanırdı. Birincisi İstanbul'daki merkezî hazineydi. İkincisi tımarlardı: bu gelirler hazineye hiç girmez, savaşa asker getirme karşılığında doğrudan sipahiye bırakılırdı. Üçüncüsü vakıflardı: yarı özerk, ama devlet denetiminde. Ömer Lutfi Barkan'ın yayımladığı 1527-1528 bütçesine göre gelirlerin yüzde 51'i hazineye, yüzde 37'si dirliklere, yüzde 12'si vakıf ve mülklere gidiyordu.\n\n■ Hazinenin üç kaynağı\nMerkezî hazinenin geliri esas olarak üç kalemdi. Cizye, çalışabilecek durumdaki gayrimüslim erkeklerden alınan şer'î vergiydi ve neredeyse tamamı hazineye girerdi. Avârız, devletin ihtiyaca göre halka yüklediği vergiydi; XVII. yüzyıldan sonra düzenli hâle geldi. Mukātaa ise gümrükten madene, her türlü iktisadî faaliyetten alınan vergilerdi. Devlet, kolayca nakde dönüşen büyük mukātaaları hazineye, nakde dönüşmesi zor olanları tımara ve vakfa bırakırdı.\n\n■ Para nereye giderdi?\nEn büyük gider asker ve memur maaşıydı. Özvar'a göre bu maaşlar XVI-XVIII. yüzyıllarda bütçenin yüzde 45-70'ini tutuyordu ve savaş çıktıkça artıyordu. Ardından sarayın ve ordunun iaşesi, hac ve Mekke-Medine'ye gönderilen surre geliyordu.\n\n■ Açık nasıl kapatılırdı?\nXVII. yüzyıldan sonra giderler gelirden hızlı arttı; Girit savaşları ve Viyana bozgunu sonrası özellikle sıkıntılıydı. Açık; vergi gelirlerinin peşin parayla iltizama verilmesiyle, devlet adamlarından ve tüccardan borçla, maaş geciktirmeyle ve yeni olağanüstü vergilerle kapatıldı. XVIII. yüzyılın ilk yarısında maliye rahatladı. Ancak Rus savaşları yeniden yıktı: önce esham ve kâime ile iç borca, XIX. yüzyıl ortasında da dış borca gidildi.\n\n■ Avrupa ile fark\nBeydilli'ye göre Avrupa'da kralların merkezî gücü, ancak feodal beyler zayıflayınca kurulabildi. Yeni bürokrasiler, düzenli maliyeler ve sürekli ordular Yüzyıl Savaşları'ndan sonraki Fransa'da ortaya çıktı. Osmanlı'da ise toprak gelirinin büyük kısmı en baştan devletin tahririndeydi. Sipahi bu geliri kendi malı olarak değil, görev karşılığında alıyordu.",
  kesinlik:"kesin",
  olay:["1432-06-01|Tımar sisteminin","1652-06-20|denk bütçe","1775-06-01|Esham"],
  kaynak:"TDV: osmanlilar §D Malî Yapı (Erol Özvar) · TDV: avrupa §III Tarih (Kemal Beydilli)",
  ic_not:"Yüzdeler Özvar'ın Barkan'a atfıyla verdiği 1527-1528 rakamlarıdır (tımar dahil bütün gelirlere göre). Bütçe içi oranla hesaplanınca hazine payı %72 çıkar; karta yazılmadı, karışıklık olmasın diye. Kronolojide 1527-1528 bütçesine ait bir madde yok; kart tımar kurumsallaşması, 1652 denk bütçe ve 1775 esham maddelerine bağlandı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-koylu-serf-miydi",
  baslik:"Osmanlı köylüsü serf miydi? Mîrî toprak ve Avrupa'nın toprağa bağlı köylüsü",
  tur:"tartisma",
  kisa:"Toprak devletindi, köylü onu satamaz, terk edemezdi. Bu, Avrupa'daki serfliğe benziyor gibi görünür. Ama Barkan'ın çalışmalarına dayanan TDV maddesi, bu benzetmenin yüzeysel olduğunu söyler.",
  metin:"■ Mîrî toprak nedir?\nMehmet Genç'in TDV maddesine göre Anadolu ve Rumeli'deki tarım topraklarının büyük kısmı 'mîrî' idi. Mülkiyet devletteydi, köylü ailesi ise toprağı işleme hakkını tapu karşılığında alırdı. Bir aile işletmesi toprağın verimine göre 60 ile 150 dönüm arasındaydı. Köylü toprağı izinsiz satamaz, vakfedemez, bağışlayamazdı. Mazeretsiz üç yıl boş bırakırsa toprak elinden alınır, başkasına verilirdi. Toprağını bırakıp giderse on yıl içinde geri getirilebilir ya da 'çiftbozan resmi' adlı ağır bir vergi öderdi.\n\n■ Peki bu serflik değil mi?\nGenç, bu kurallara yüzeysel bakıp Osmanlı köylüsünü toprağa bağlı köleye, yani serfe benzetmenin mümkün olmadığını yazar. Bunun Ömer Lutfi Barkan'ın ayrıntılı çalışmalarında açıkça gösterildiğini de ekler. Toprağı işlemek istemeyen köylüyü zorlayan bir kural yoktu. Tek yaptırım, toprağın işlemeye razı başka bir köylüye verilmesiydi. Giden köylü de bir tür tazminat ödeyerek yükümlülükten kurtulabiliyordu. Bu tazminat normal çift resminin yedi-on katına kadar çıkabilen çiftbozan resmiydi.\n\n■ Köylünün gözünden\nKöylü öldüğünde toprak bölünmeden ve miras vergisi alınmadan oğluna geçerdi. Genç'e göre köylü, hukuken devletin olan bu toprağı psikolojik olarak kendi öz malı gibi görüyordu. Ailesiyle istediği gibi sürüyor, kanundaki ölçülü vergiyi ödeyip kalanını serbestçe tüketiyordu. Genç, bu çift yönlü güvencenin Osmanlı'nın Balkanlar'da hızla yayılıp yüzyıllarca kalmasında az etkili olmadığını düşünür.\n\n■ Çiftlikler ve sonu\nXVII. yüzyıldan itibaren büyük çiftlikler oluştu. Ama Genç'e göre bunlar çoğunlukla boş arazilerde kuruldu, köylüler direndi ve devlet bu çiftlikleri meşru saymadı. Çiftlik sahipleri Avrupa'daki gibi kapitalist bir tarım dönüşümü yaratamadı. Toprak dağılımı Osmanlı'nın sonuna kadar büyük ölçüde eşitlikçi kaldı. Genç'e göre Tanzimat'tan sonra devlet ekonomideki eski kontrollerini yirmi beş-otuz yılda bıraktı; toprak üzerindeki kontrol ise bunun dışında kaldı.\n\n■ Avrupa tarafı\nTDV'nin Avrupa maddesi, ortaçağdan beri geçerli olan ve toplumsal tabakalaşmaya (état) dayanan düzenin ancak XVIII. yüzyıl sonunda Fransız İhtilâli ile sarsıldığını yazar. Sipahi ile feodal beyin farkı için ayrıca 'Tımar ve Avrupa feodalizmi' kartına bakın.",
  kesinlik:"tartismali",
  olay:["1432-06-01|Tımar sisteminin","1858-06-06|Arazi Kanunnâmesi"],
  kaynak:"TDV: osmanlilar §E İktisadî ve Ticarî Yapı (Mehmet Genç; Barkan'a atıfla) · TDV: avrupa §III Tarih (Kemal Beydilli)",
  zincir:["timar-avrupa-feodalizm-farki"],
  ic_not:"kesinlik 'tartismali': serflik benzetmesi literatürde tartışılan bir konudur; kart Genç-Barkan görüşünü aktarır, karşı görüşü okumadım (yazılmadı). 1858 Arazi Kanunnâmesi bağı Genç'in 'toprak üzerindeki kontrol hariç' cümlesine dayanır; kanunnâmenin içeriği bu kartta anlatılmadı (TDV arazi-kanunnamesi okunmadı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-esnaf-burjuvazi-neden-yok",
  baslik:"Osmanlı'da neden burjuvazi doğmadı? Yüzde 10 kâr, yüzde 20 faiz ve gedik",
  tur:"tartisma",
  kisa:"Narhta meşru kâr yüzde 10 civarındaydı. Kredi bulmanın bedeli ise yüzde 20 civarı faizdi. Bu hesapla esnaf ve tüccarın sermaye biriktirmesi neredeyse imkânsızdı.",
  metin:"■ Kârın tavanı\nMehmet Genç'in TDV maddesine göre devlet, malın ucuz olması için esnafa ve tüccara tanıdığı kârı bilinçli olarak düşük tutuyordu. XVI. yüzyıldan XIX. yüzyıl ortasına kadar meşru kâr genellikle yüzde 5-15 arasındaydı. 1680 tarihli bir kanunnâme narhta meşru kârı yüzde 10 diye yazar; çok zahmetli işlerde bu oran en fazla yüzde 20'ye çıkabilirdi. Narh konmayan yerlerde bile sistem kârı bu ortalamaya çekiyordu. Her üretim aşaması ayrı bir esnaf grubuydu ve biri kârını artırırsa öbürünün kârı düşüyordu.\n\n■ Faizin bedeli\nSermaye büyütmek için kredi gerekirdi. Ama faiz yalnız birkaç alanda serbestti: sarraflar, yetim malları ve para vakıfları. Genç'e göre bu alanlarda faiz yüzde 12-25, ortalama yüzde 20 civarındaydı. Yüzde 10 kârla çalışan biri yüzde 20 faizle borç alamazdı. Nakit sermayenin asıl gittiği yer de vergi kiralama işi, yani iltizamdı. Terekeler bu tabloyu doğrular. XVII-XVIII. yüzyıl Bursa, Şam ve Kahire'sinde bir esnafın ortalama serveti 400-1000, bir tüccarınki 1500-4000 kuruş arasındaydı.\n\n■ Gedik: tekel ve eşitlik\nLoncalar zamanla dışarıya kapandı. XVII. yüzyıldan itibaren 'gedik' denen tekel hakkı yayıldı: bir işi yalnız o loncanın üyesi yapabilir, üye de başka iş yapamazdı. Usta, kalfa ve çırak sayısı da sınırlıydı. Esnaf eşitliği bizzat savunuyordu. 1813'te şeritçiler, tezgâh sayısını beşe çıkaran ustalardan şikâyet etti ve fazla tezgâhların fakir ustalara verilmesini istedi; istekleri kabul edildi. Genç bunu şöyle özetler: Osmanlı yönetimi birikimci ve gelişmeci değil, bölüşümcü ve refahı yaygınlaştırıcı yolu seçti.\n\n■ Ama beceri üstündü\nBu düzen zanaat ustalığını da korudu. Genç'in aktardığına göre Fransız konsolos Beaujour 1797'de bakır ve demir işçiliğine hayran kaldı. Lyonlu Flachat da 1750'lerde İstanbul'dan boyacı ve maroken ustaları götürdü.\n\n■ Avrupa tarafı\nBeydilli'ye göre Avrupa'da XIV. yüzyıldan itibaren orta sınıf ticaretle güçlendi. Aydınlanma düşüncesini de daha çok bu burjuvazi taşıdı. Osmanlı'da şehirli üretici sınıf vardı, ama Avrupa'daki gibi sermaye biriktiren bir burjuvaziye dönüşmesi bu kurallarla engellenmişti.",
  kesinlik:"tartismali",
  olay:["1727-06-01|Gedik sisteminin","1794-06-01|esnaf loncalarının"],
  kaynak:"TDV: osmanlilar §E İktisadî ve Ticarî Yapı (Mehmet Genç) · TDV: avrupa §III Tarih (Kemal Beydilli)",
  zincir:["lonca-esnaf-teskilati"],
  ic_not:"Son paragraftaki 'burjuvaziye dönüşmesi engellenmişti' cümlesi Genç'in sermaye birikimi sınırlıydı / devlet bunu sınırlandırdı hükmünün okura uyarlanmış hâlidir; Genç 'burjuvazi' kelimesini kullanmaz. kesinlik 'tartismali' bu yüzden. Gedik maddesi 1727 kronolojide 'resmen yerleşme' diyor; Genç 'XVII. yüzyıldan itibaren', 'XVIII. yüzyıldan itibaren büyük yaygınlık' der — çelişki değil, ayrı aşamalar.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-kilise-ilmiye-karsilastirma",
  baslik:"Kilise ile ilmiye: din adamı kralı aforoz edebilir miydi?",
  tur:"tartisma",
  kisa:"Avrupa'da papa imparatoru aforoz edebiliyor, kilise kendi vergisini topluyordu. Osmanlı'da ilmiye ise padişahın atadığı bir devlet sınıfıydı. Ayrıcalıklıydı, ama ayrı bir güç merkezi değildi.",
  metin:"■ Avrupa: iki kılıç\nTDV'nin Avrupa maddesinde Kemal Beydilli, Roma piskoposunun IV. yüzyıldan beri öteki piskoposluklardan üstün olduğunu ileri sürdüğünü anlatır. Zamanla papalar, kilise ve ilahî kanuna dayanmayan dünyevî hükümdarlığın değersiz olduğunu savundu. Piskoposları kimin atayacağı kavgası büyüdü. Papa VII. Gregorius, Alman Kralı IV. Heinrich'i aforoz etti (1075-1077). Kürşat Demirci'nin bölümüne göre XIV. yüzyıldan itibaren kilise de zenginleşti. Papalık kilise gelirlerini tek elde toplamaya çalıştı ve vergi toplamayı bankalara bıraktı. Demirci'ye göre din ile para işinin iç içe geçmesi, Reform'a kadar giden yozlaşmanın temel kaynağıydı.\n\n■ Osmanlı: devletin içinde bir sınıf\nMehmet İpşirli'nin TDV ilmiye maddesine göre ilmiye, medreseden yetişen ulemanın oluşturduğu eğitim, yargı ve fetva teşkilâtıydı. Yönetici askerî sınıfın parçasıydı. Atamalar XVII. yüzyıldan itibaren şeyhülislâmın teklifi, sadrazamın arzı ve padişahın hatt-ı hümâyunuyla yapılırdı. Yani ulema, ayrı bir egemenlik iddiasıyla tahtın karşısında duran bir kilise değildi.\n\n■ Ama ayrıcalıklıydı\nİpşirli'ye göre ilmiye, askerî sınıf içinde en geniş ayrıcalıklara sahipti. Vergi muafiyeti öbürlerinden genişti. Askerî görevlilere idam dahil her ceza verilebilirken ulemaya en ağır ceza azil ya da sürgündü; idam çok nadirdi. II. Murad, Molla Fenârî'nin soyuna müderrisliğe yüksek dereceden başlama ayrıcalığı tanıdı. Bu ayrıcalık zamanla bütün ulema ailelerine yayıldı. Yirmi kadar aile en yüksek makamları kolayca elde etti. İpşirli bu 'mevâlîzâde' ayrıcalığının mesleği geriletip bozduğunu yazar.\n\n■ Aydınlanmanın kiliseye darbesi\nBeydilli'ye göre Aydınlanma Avrupa'da kilise otoritesini sarstı. 1773'te Cizvit tarikatı Rusya ve Prusya dışında her yerde kapatıldı. Yer yer kiliselerin geniş mülklerine el konuldu, manastırların sayısı azaltıldı. Osmanlı ilmiyesinin sorunu ise başkaydı. İpşirli'nin aktardığına göre XVI. yüzyıl sonunda Âlî Mustafa Efendi ve Selânikî, ayrıcalıkların, kayırmanın ve rüşvetle verilen kadılıkların mesleği bozduğundan yakınıyordu.",
  kesinlik:"tartismali",
  olay:["1425-01-01|Şeyhülislamlık makamının","1634-01-08|şeyhülislâm idamı"],
  kaynak:"TDV: avrupa §III Tarih (Kemal Beydilli) · TDV: avrupa §II Din (Kürşat Demirci) · TDV: ilmiye (Mehmet İpşirli)",
  ic_not:"kesinlik 'tartismali': kilise-ilmiye karşılaştırmasını TDV tek bir maddede yapmaz; kart üç TDV bölümünü yan yana koyar. Âlî ve Selânikî'nin şikâyeti TDV ilmiye'de 'XVI. yüzyıl sonları' bağlamında anılır. 1634 Ahîzâde idamı bağı, 'idam çok nâdir' hükmünün istisnasını göstermek için. Kronolojide 1075-77 aforoz ve 1773 Cizvit maddesi yok.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-sanayi-devrimi-yatirim-cozulmesi",
  baslik:"Avrupa'da sanayi devrimi olurken Osmanlı'da ne oluyordu? Yetmiş yıllık 'yatırım çözülmesi'",
  tur:"sebep-sonuc",
  kisa:"Sanayi devrimi 1775'ten sonra İngiltere'de başladı. Aynı yıllarda savaş yükü altındaki Osmanlı devleti, büyük tüccar terekelerine el koymaya başladı. Mehmet Genç buna Osmanlı tarihinin paradoksal ironisi der.",
  metin:"■ Avrupa: makine, fabrika, işçi\nKemal Beydilli'nin TDV Avrupa maddesine göre sanayi inkılâbı 1775'ten sonra önce İngiltere'de başladı. Sonra Belçika, Almanya ve Fransa'ya geçti. Mekanik dokuma tezgâhları, madenlerde buharlı pompalar ve ıslah edilmiş yüksek fırınlar üretimi kökten değiştirdi. Bedeli de ağırdı: 14-16 saatlik iş günleri, düşük ücretle çalıştırılan kadın ve çocuklar, sağlıksız işçi mahalleleri. İşçiler çaresizliklerini makinelere bağladı ve makine kırıcılık başladı. İngiltere 1812'de buna ölüm cezası getirdi. Beydilli'ye göre sanayi inkılâbı XIX. yüzyılda sosyalizmin doğuşunun başlıca sebebi oldu.\n\n■ Osmanlı: sermayenin erimesi\nMehmet Genç'e göre Osmanlı'da aynı yıllarda tersi yaşanıyordu. 1770'lerden itibaren Rus savaşlarının ağır yükü altında devlet, ölen esnaf ve tüccarın büyükçe terekelerine el koymaya başladı. Hukuken hakkı olmadığı için bunu savaştan sonra ödenecek zorunlu borç olarak yaptı ve karşılığında esham verdi. Genç bunu açıkça 'yatırım çözülmesi' diye adlandırır. İş yerindeki sermaye nakde çevriliyor ve savaşta harcanıyordu. Devletin malı ucuza satın alma hakkı olan mîrî mübâyaa da savaşta ağırlaştı. En çok zararı büyümeye çalışan üreticiler gördü.\n\n■ Paradoks\nGenç'e göre bu süreç XVIII. yüzyılın son çeyreğinden Tanzimat'a kadar yaklaşık yetmiş yıl sürdü. Bu, tam da Avrupa'da sanayi devriminin yerleştiği ve sermaye birikiminin hızlanması gereken dönemdi. Genç bu çakışmayı Osmanlı tarihinin paradoksal ironilerinden biri sayar.\n\n■ Devlet fabrikacı oluyor\nSonra devlet bizzat üretime girdi. Yeni ordu için silah ve mühimmatın yanında yelken bezi, yünlü kumaş, deri, fes, kâğıt gibi malları da kendi fabrikalarında üretti. 1826'dan sonra afyon, yün, ipek, zeytinyağı gibi pek çok malın ticaretini 'yed-i vâhid' adıyla tekeline aldı. 1838 Balta Limanı Antlaşması bu tekelleri kaldırdı. Genç'e göre XIX. yüzyıl ortasından sonraki gelişme çabalarına rağmen modern büyümeye geçiş bir asır gecikti. Gecikmenin başlıca sebeplerinden biri bu yetmiş yıllık çözülmeydi.",
  kesinlik:"kesin",
  olay:["1775-06-01|Esham","1838-08-16|Balta Limanı"],
  kaynak:"TDV: osmanlilar §E İktisadî ve Ticarî Yapı (Mehmet Genç) · TDV: avrupa §III Tarih (Kemal Beydilli)",
  zincir:["feshane-osmanli-sanayilesme-girisimi"],
  ic_not:"Balta Limanı'nın tekelleri kaldırdığı bilgisi ekokuma_ekonomi'deki TDV baltalimani-muahedesi okumasına dayanır (o kart: 'tekel kaldırma'). Sanayi devriminin icatları ekokuma_dunya'da; burada tekrarlanmadı. Kronolojide yed-i vâhid (1826) maddesi yok.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"iktisat-aydinlanma-osmanliya-etkisi",
  baslik:"Aydınlanma Osmanlı'ya nereden girdi? Akıl, anadil ve Balkan milliyetçiliği",
  tur:"sebep-sonuc",
  kisa:"Rönesans Katolik dünyada kaldı, ama Aydınlanma laik karakteri sayesinde Ortodoks Balkanlar'a da girdi. Anadilde okul ve ibadet fikri, çok milletli imparatorlukları tehdit eden milliyetçiliği besledi.",
  metin:"■ Aydınlanma nedir?\nKemal Beydilli'nin TDV'deki Avrupa maddesine göre Aydınlanma, XVII. yüzyılın sonlarında belirginleşen ve bütün XVIII. yüzyıl boyunca süren bir fikir hareketiydi. Gelenek, batıl inanç, din ve devlet otoritesinin yerine aklı, eleştiri cesaretini, vicdan hürriyetini ve dinî hoşgörüyü koymak istiyordu. Daha çok burjuvazi tarafından taşındı. Büyük Friedrich ve II. Joseph gibi hükümdarlar da onu benimsedi.\n\n■ Ne değiştirdi?\nBeydilli'ye göre etkisi en çok devlet ve hukukta görüldü. Her insanın doğuştan hür olduğu ve devletin bir toplum sözleşmesiyle kurulduğu fikri 1776 Amerika ve 1789 Fransa anayasa hareketlerinin ilkeleri oldu. Kuvvetler ayrılığı geliştirildi. İşkence ve cadı yargılamaları yasaklandı. Kanunda yazmayan bir cezanın verilemeyeceği savunuldu (Beccaria). Kilise mülklerine yer yer el konuldu ve 1773'te Cizvitler kapatıldı.\n\n■ Osmanlı'ya giden yol\nBeydilli bu hareketi Rönesans'tan ayırır. Rönesans Katolik damgalıydı, Aydınlanma ise laikti. Bu yüzden Ortodoks-Bizans kültür sahasına da girebildi ve Yahudiler üzerinde de etkili oldu. Kiliselerde Latince yerine halkın dilinde ayin yapılması aklın gereği sayıldı. Öğretim ve ibadetin anadilde yapılması, özellikle Doğu ve Güneydoğu Avrupa halklarında millî duyguları uyandırdı. Beydilli'nin vardığı sonuç açıktır: çok milletli imparatorlukları, yani Avusturya'yı ve Osmanlı'yı tehdit eden yeni bir çağ başlıyordu.\n\n■ Haritada okumak\nBeydilli'ye göre Viyana Kongresi'nden sonraki Avrupa'da Aydınlanma ve Fransız İhtilâli'nin fikirleri, hürriyetçi ve milliyetçi akımlar olarak yaşamaya devam etti. Haritada XIX. yüzyıl boyunca Balkanlar'da Osmanlı renginin parça parça çekilmesi, bu fikirlerin siyasete dönüştüğü yüzyılın görüntüsüdür.",
  kesinlik:"kesin",
  olay:["1789-07-14|Bastille"],
  kaynak:"TDV: avrupa §III Tarih (Kemal Beydilli)",
  ic_not:"Viyana sonrası milliyetçilik-hürriyetçilik cümlesi Beydilli'nin 'Viyana Sistemi ve İhtilâller' paragrafından. Kronolojide Aydınlanmaya özgü madde yok; kart 1789 Bastille maddesine bağlandı. Aydınlanmanın Osmanlı aydınlarına (Yeni Osmanlılar vb.) etkisi bu kartta anlatılmadı — ayrı kart adayı.",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];
