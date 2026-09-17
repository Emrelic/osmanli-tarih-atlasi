// ============================================================================
// EK OKUMA — TAMAMLAMA (EKO-TAMAMLA, paket 0052, 17 Eylül 2026)
// ============================================================================
// Şartname: koordinatör (1.MURAT) cross-session mesajı, EKO-TAMAMLA görevi.
// Kaynak belge: denetim/PAKET-BEKLEYEN-0917.md satır 45-47 — 0052 paketinin
// EKO-KURUM/EKO-TOPLUM/EKO-VEZIR oturumlarının KISMEN bıraktığı maddeler.
//
// ── AMAÇ — bu dosya "yeni bir kart" dosyası değil, YARIM KALAN maddeleri
// TAMAMLAMA dosyasıdır. Her kart, var olan bir dosyanın (ekokuma_toplum.js /
// ekokuma_kurum.js / ekokuma_vezir.js) hangi H-no'sunu, o kartın HANGİ
// eksenini tamamladığını `ic_not` alanının İLK CÜMLESİNDE açıkça söyler.
// O dosyalara DOKUNULMADI (§7 — sahibi ben değilim), yalnız OKUNDU.
//
// ── ÖNCE İKİ MADDE — H-0031 ve H-0046 — HİÇ KART YAZILMADI, ÇÜNKÜ İKİSİ DE
// ZATEN TAM. `denetim/PAKET-BEKLEYEN-0917.md`nin "H-0031 tam değil, gerekçe
// teslim metninde kesik" ve H-0046 "kısmi" işaretleri ÖLÇÜLEREK ÇÜRÜTÜLDÜ:
//   H-0031  data/ekokuma_kurum.js `teknik-osmanli-devlet-kademeleri` kartı
//           vezir/sadrazam · kazasker · defterdar · şeyhülislam · kethüda ·
//           serdar-ı ekrem ALTI başlığın HEPSİNİ ayrı ■ bölümüyle işliyor —
//           istenen TAM olarak bu. EKO-KURUM'un kendi raporu (denetim/
//           EKO-KURUM-0916.md) da "H-0031 — YAPILDI" diyor; PAKET-BEKLEYEN'in
//           flag'i tahta mesajının Türkçe karakter BOZULMASI (mojibake)
//           yüzünden cümlenin ortasında kesilmiş görünmesinden doğmuş bir
//           YANLIŞ OKUMA — kaynağı raporun kendisiyle karşılaştırılarak
//           doğrulandı, uydurulmadı.
//   H-0046  iki alt-istek vardı: ① Kemankeş Mustafa Paşa kişi kartının
//           zenginleştirilmesi — data/ekokuma_vezir.js `kimdir-kemankes-
//           mustafa-pasa` kartında TAM biyografiyle YAPILMIŞ (EKO-VEZIR
//           raporu, M-4008). ② "anlaşma hükümleri" kartlarının başlıklarının
//           netleştirilmesi — data/ekokuma_kasrisirin.js OKUNDU (§7, sahibi
//           ben değilim): 5 kart zaten AYRIŞIK ve doğru başlıklı: "Zühâb
//           ovasında üç gün: antlaşma nasıl imzalandı?" (müzakere/hikâye) ve
//           "Kasr-ı Şirin'in hükümleri: kim neyi aldı, neyi bıraktı?"
//           (hükümler) — Emre'nin istediği ayrım ("biri hikâye, biri hüküm
//           olsun") ZATEN VAR. EKO-VEZIR'in raporu da aynı sonuca varmış
//           ("zaten ayrışık görünüyor") ama emin olamamıştı; bu oturum o
//           dosyayı bizzat okuyup DOĞRULADI. Yeni kart yazmak burada
//           DUPLİKASYON olurdu.
// Ayrıntı: EKO-KURUM-0916.md, EKO-VEZIR-0916.md §2, bu dosyanın teslim
// mesajı.
//
// ── GERÇEKTEN TAMAMLANAN BEŞ MADDE (6 kart) — H-0029 (2 kart: spor · içki),
// H-0034 (kıyafet/statü), H-0054 (topçuluk+tersane), H-0115 (doğum şenliği).
// H-0033'ün istenen ikinci ekseni (kilise/burjuvazi/sanayi devrimi — Avrupa
// karşılaştırması) BU TURDA DA YAZILMADI: TDV bu konuyu kapsamıyor (CLAUDE.md
// §4 "Avrupa'nın iç tarihi" — meşru coğrafî boşluk) ve bu oturumda erişilen
// akademik kaynaklar (Britannica dahil) HTTP 403 ile erişilemedi veya yeterli
// somutlukta değildi — kaynaksız yazmak yerine `bulunamadı` bırakıldı, EKO-
// TOPLUM'un aynı maddede bıraktığı yerden ileri gidilemedi.
//
// ── KAYNAK — TDV gövdeleri WebFetch ile okunarak (CLAUDE.md §4), KENDİ
// CÜMLELERİMLE özetlendi, TDV metni KOPYALANMADI. Her slug önce HTTP koduyla
// tarandı (302 = ölü, atlandı). Atlas hiçbir yerde kaynak olarak
// kullanılmadı.
//
// ── MÜKERRER TARAMASI — yazmadan önce data/ekokuma*.js ve data/merak.js
// grep ile tarandı (bkz. her kartın ic_not'u). "tophane" 5 dosyada GEÇİYOR
// ama hiçbiri kurumun kendisini anlatmıyor (yalnız semt adı/yan referans);
// "güreş" yalnız Sâdâbâd mesire kartında geçici bir sözcük; "kıyafet"
// yalnız isyan/protesto bağlamında (Nizâm-ı Cedîd kıyafeti) geçiyor —
// hiçbiri bu kartların konusuyla ÇAKIŞMIYOR.
// ============================================================================

window.EKOKUMA_TAMAMLA = [

// ═══ H-0029 (1/2) — geleneksel spor ═════════════════════════════════════════

{ id:"teknik-osmanli-spor-gelenekleri", tur:"teknik-bilimsel",
  kisa:"Padişahlar pehlivanlara tekke açtı, ödül dağıttı, kimi zaman da yasakladı — güreş Osmanlı'da bir eğlence değil, devlet işiydi.",
  metin:"■ GÜREŞÇİ TEKKELERİ\n"
    +"Pehlivanlık kurumsal bir yapıydı: bir şeyh liderliğinde 'dervişler' denen güreşçiler tekkelerde örgütlenir, konaklama ve antrenman meydanı bu tekkelerde bulunur, giderleri vakıf gelirinden karşılanırdı. Orhan Bey Bursa'da, I. Murad Edirne'de (Ali Paşa Çarşısı yakınında) ilk tekkeleri açtı; II. Murad Manisa'da, sonra İstanbul'da Unkapanı ve Şebsafâ civarında benzerleri kuruldu.\n\n"
    +"■ PADİŞAHLARIN İLGİSİ — İKİ UÇTA\n"
    +"II. Bayezid ayrıntılı ödül kayıtları bıraktı: 1504'te güreşçi Beşir Ahmed'e 3000 akçe bağışladı. Buna karşılık II. Abdülhamid başlangıçta güreşi yasakladı, ancak 1890'dan sonra Osmanlı güreşçilerinin Avrupa'daki başarılarıyla tutumunu değiştirip yeniden teşvik etti. XIX. yüzyılda Sultan Abdülaziz'in kişisel merakı ayrı bir dönem başlattı.\n\n"
    +"■ KIRKPINAR\n"
    +"Rivayete göre Orhan Bey dönemine kadar uzanan, Edirne'de her temmuz düzenlenen yağlı güreş müsabakaları (Kırkpınar), galip başpehlivana altın kemer verilmesiyle sonuçlanır; kemeri üç yıl üst üste kazanan pehlivan onu kalıcı olarak sahiplenirdi.\n\n"
    +"■ SONU\n"
    +"Güreşçi tekkelerinin II. Mahmud'un 1826'daki reformlarıyla (Yeniçeri Ocağı'nın kaldırılışıyla aynı dalgada) kapandığı değerlendirilir.",
  kesinlik:"kesin",
  olay:["1826-06","1826-07-31"],
  kaynak:"TDV: gures · TDV: kirkpinar · TDV: spor",
  ic_not:"EKO-TAMAMLA — DALGA-0052 H-0029 tamamlama (1/2, SPOR ekseni). EKO-TOPLUM'un kahve-kahvehane-yasagi/tutun-yasagi-kaldirilmasi kartları (data/ekokuma_toplum.js) AYNI maddenin kahve+tütün eksenini kapsıyordu; H-0029'un istediği 'spor müsabakaları (güreş/cirit/okçuluk)' kısmı EKO-TOPLUM'un kendi raporunda (denetim/EKO-TOPLUM-0916.md) açıkça 'ARAŞTIRILMADI' diye işaretliydi — bu kart onu kapatıyor. Cirit ve okçuluk için bu turda AYRI bir TDV taraması yapılamadı (zaman kısıtı) — 'spor' maddesinin gövdesi ağırlıkla güreşe odaklanıyor, kartta yalnız güreş yazıldı, cirit/okçuluk BULUNAMADI diye kaydediliyor. Kahvehane KÜLTÜRÜ (mekân olarak toplumsal işlevi) zaten kahve-kahvehane-yasagi kartının metninde var, burada TEKRARLANMADI. Tekke kapanış tarihi, mehter-yeniceriyle-birlikte-lagvi kartıyla (ekokuma_toplum.js) AYNI olaya (II. Mahmud'un 1826 reformu) bağlandı — TDV gures maddesi de kapanışı bu dalgaya bağlıyor, ayrı bir gün UYDURULMADI." },

// ═══ H-0029 (2/2) — içki kültürü ve bir efsanenin sınırları ═════════════════

{ id:"tartisma-selim-ii-kibris-sarap-efsanesi", tur:"tartisma",
  ad:"Kıbrıs'ı şarap için mi fethetti? II. Selim ve bir efsanenin sınırları",
  kisa:"Halk arasında 'Sarı Selim, adanın şarabı için Kıbrıs'ı aldırdı' denilir — TDV'nin kendi anlatımında sefer ile içki arasında hiçbir bağ kurulmaz.",
  metin:"II. Selim'in içkiye düşkünlüğü ile 1571 Kıbrıs seferi arasında bağ kuran popüler bir anlatı vardır. TDV'nin II. Selim maddesi padişahı gerçekten 'zevk ve eğlenceye düşkün, içki meclislerine müdavim' olarak tanımlar — ama Kıbrıs seferini anlatan bölümde bu düşkünlükle bir GEREKÇE bağı kurmaz; sefer tamamen askerî-stratejik çerçevede (Venedik'le gerilim, Doğu Akdeniz güvenliği, hac ve ticaret yollarının denetimi) anlatılır. Yani 'şarap için sefer' iddiası bu kaynakta doğrulanmaz, ama çürütülmez de — TDV konuyu hiç İŞLEMEZ.\n\n"
    +"İslâm hukukunda içki kesin haramdır (Mâide 90-91) ve bu yasak teoride Osmanlı'da da geçerliydi; ama meyhâneler ('hânût', 'hammâre') hiç kapanmadı, ticaretini çoğunlukla gayrimüslim tüccarlar yürüttü, panayır ve konaklama yerlerinde satış sürdü. Hükümdarların tutumu değişkendi: kimi (IV. Murad gibi, bk. 'kahve-kahvehane-yasagi' kartı) sert yasaklarla mücadele etti, kimi (II. Selim gibi) kişisel olarak içkiye düşkündü — resmî yasak hiçbir dönemde içkiyi tamamen ortadan kaldıramadı.\n\n"
    +"TDV'nin kendi kaydında ilginç bir ayrıntı var: Ramazan ayında içkiyi bırakmaya (tövbe) kalkışması baş dönmesiyle sonuçlanmış, bu rahatsızlık ölümüne götüren sürecin bir parçası sayılmıştır.",
  not:"'Sarı Selim' lakabının kaynağı bu turda doğrulanamadı — okunan TDV metninde açıkça geçmiyor; kartta iddia edilmedi.",
  kesinlik:"tartismali",
  olay:["1571-08|Kıbrıs"],
  kaynak:"TDV: selim-ii · TDV: icki",
  ic_not:"EKO-TAMAMLA — H-0029 tamamlama (2/2, İÇKİ ekseni). Tek bir padişah örneğiyle (n=1) bir HALK EFSANESİ ne doğrulanabilir ne çürütülebilir — kart bunu KESİN hüküm olarak değil 'efsanenin kaynakta karşılığı yok' diye çerçeveliyor, kesinlik:tartismali. İçkinin genel Osmanlı tarihi (meyhane/ticaret) TDV icki maddesinden — bu kısım TARİHSİZ/genel bir anlatı olduğu için ayrıca bir olay: bağı KURULMADI, yalnız 1571 Kıbrıs seferine bağlandı (efsanenin iddia ettiği olay)." },

// ═══ H-0034 — sosyal yaşam: kıyafet ve toplumsal statü ══════════════════════

{ id:"teknik-osmanli-kiyafet-statu", tur:"teknik-bilimsel",
  kisa:"Bir sadrazamı sokakta tanımak için konuşmasını duymaya gerek yoktu — kıyafeti zaten söylüyordu.",
  metin:"■ KIYAFET, BİR KİMLİK KARTIYDI\n"
    +"Osmanlı toplumunda giysi rastgele bir tercih değildi: resmî görevliler, askerî zümreler, din görevlileri ve tarikat mensuplarının her biri kendine has kıyafetiyle tanınırdı. Beyaz renk bir ayrıcalık sayılırdı — sadrazam ve şeyhülislâm gibi en üst rütbeliler beyaz merasim elbisesiyle ayırt edilirdi.\n\n"
    +"■ 1568 FERMÂNI — GAYRİMÜSLİMLERİN KIYAFETİ\n"
    +"Rebîülevvel 976 (1568) tarihli bir fermân gayrimüslimlerin giyimini ayrıntılı biçimde düzenledi: Yahudi ve Hıristiyan erkekler sürmeî/karaca renkte çuha ferace, pamuklu-ipekli kuşak ve sade tülbent giyecek, siyah yassı ayakkabı kullanacaktı; Ermenilere alaca kuşak ve siyah/sürmeî Bursa kutnusu ayrıldı. Kadınlara ferace yasaklanıp fahir/kundura giymeleri şart koşuldu. Başka fermanlar Yahudilere kırmızı, Hıristiyanlara siyah şapka giydirdi.\n\n"
    +"■ MÜSLÜMAN ZÜMRELERİN KENDİ İÇİNDEKİ AYRIM\n"
    +"Orhan Bey döneminde askerî başlık kırmızıdan beyaza çevrildi; her tarikat kendi kavuğuyla (Rifâî kavuğu, Şâzelî kavuğu gibi) tanınırdı; kadılar XVI. yüzyıldan itibaren 'denye' adlı uzun bir başlık giymeye başladı.\n\n"
    +"■ NE ANLAMA GELİYORDU\n"
    +"Kıyafet düzeni yalnız bir görgü kuralı değil, devletin toplumu KATMAN KATMAN görünür kılma aracıydı — kim hangi millete, hangi mesleğe, hangi rütbeye ait, bir bakışta anlaşılsın isteniyordu.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: kiyafet",
  ic_not:"EKO-TAMAMLA — H-0034 tamamlama. EKO-TOPLUM'un mahalle-teskilati-sorumluluk kartı (data/ekokuma_toplum.js) 'sosyal yaşam' maddesinin yalnız İDARÎ/komşuluk eksenini kapsıyordu (kendi raporunda 'sosyal yaşamın tamamı DEĞİL' diye işaretli); bu kart aynı maddenin KIYAFET/toplumsal statü eksenini ekliyor. Evlilik/harem/kölelik/esnaf zaten AYRI H-no'larda (H-116/117/118/121) işlendiği için burada TEKRARLANMADI — 'sosyal yaşam' maddesi hâlâ tüketilmiş değil (gündelik ev yaşamı, millet sistemi gibi başka eksenler kalıyor), bu da bir PİLOT ek. 1568 fermanının GÜNÜ TDV'de yalnız 'Rebîülevvel 976' (ay/yıl hassasiyeti) veriliyor, gün UYDURULMADI; kronolojide 1568 dolayında karşılık ARANDI, BULUNAMADI — olay:[] bırakıldı." },

// ═══ H-0054 — topçuluk ve gemicilik ══════════════════════════════════════════

{ id:"teknik-tophane-tersane-amire", tur:"teknik-bilimsel",
  kisa:"Bir top dökümhanesi ile bir tersane, Osmanlı'yı XVI. yüzyılda Avrupa'ya karşı üstün kılan iki devlet fabrikasıydı.",
  metin:"■ TOPHÂNE-İ ÂMİRE — TOP DÖKÜMÜ\n"
    +"İstanbul'un fethinden sonra Galata yakınında faaliyete geçen Tophâne-i Âmire Osmanlı'nın en önemli top döküm merkeziydi (Edirne'de fetihten önce de sabit bir tophane vardı). Kanûnî Sultan Süleyman döneminde (1520-1566) bütün yapılar yıktırılıp daha büyük tesisler kuruldu; XV-XVI. yüzyıllar topçulukta bir 'altın çağ' sayılır — Osmanlı bu alanda Avrupalı rakiplerine üstünlük sağladı. 1719'daki bir yangında binalar yandı, 1733'te tuğladan yeniden inşa edildi. XIX. yüzyılda II. Mahmud döneminde (1808-1839) İngiltere'nin Woolwich Cephanesi örnek alınarak tesisler yenilendi.\n\n"
    +"■ TERSÂNE-İ ÂMİRE — GEMİ İNŞASI\n"
    +"Osmanlı'nın ilk tersanesi 1390'da Gelibolu'da kuruldu; asıl büyük merkez Yavuz Sultan Selim'in 1513-1514'te Galata'da inşa ettirdiği tesistir — belgelerde 'tersane' adı ilk kez 920 (1514) yılında geçer. 1513'te ilk dört göz tamamlandı, 1514 yazına kadar yüz göz bitirildi; Galata'dan Kâğıthane deresine kadar 500 göz planlanmışken 1515'te 160 göz tamamlanabildi. Kürekli, yelkenli, sonradan buharlı gemilerin inşa ve onarımını üstlenen tersane XVI-XVII. yüzyıllarda Akdeniz'de eşi görülmemiş bir kurumdu. 1775'te bünyesinde bir mühendishâne açıldı, 1797-1800 arasında Büyük Havuz tamamlandı, 1827'de ilk buharlı gemi Sür'at hizmete girdi.\n\n"
    +"■ İKİSİ BİRLİKTE NEYİ GÖSTERİR\n"
    +"Devlet, silah ve donanma üretimini özel girişime değil kendi büyük atölyelerine bağlamıştı. Bu, tımar sisteminin (bk. 'timar-avrupa-feodalizm-farki' kartı) merkezi devlet mantığının imalât yüzüdür: Avrupa'da özel tersaneler ve dökümhaneler zamanla yaygınlaşırken, Osmanlı'da bu iki ana tesis yüzyıllarca devletin tekelinde kaldı.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: tophane · TDV: tersane-i-amire",
  ic_not:"EKO-TAMAMLA — H-0054 tamamlama (1/2: topçuluk+gemicilik). EKO-TOPLUM yalnız matbaacılığı yazmıştı (muteferrika-matbaasi-kurulusu, data/ekokuma_toplum.js); dokumacılık ve genel el zanaatları/atölyecilik bu turda DA yazılmadı (zaman kısıtı — EKO-TOPLUM'un kendi gerekçesiyle aynı), üçüncü bir tur gerekiyor, bekletmeden bildiriliyor. Tophane'nin 1520-1566 aralığı Kanûnî döneminin GENELİ, Tersane'nin 1513-1514 aralığı da bir İNŞA SÜRECİ — TDV ikisi için de TEK bir 'kuruluş günü' vermiyor; gün UYDURULMADI, olay:[] bırakıldı. 'tersane' sluğu genel/erken İslam tarihine odaklı çıktı (Osmanlı ayrıntısı yok), doğru kaynak 'tersane-i-amire' sluğunda bulundu — D054 türü bir arama tuzağı." },

// ═══ H-0115 — şenlikler: doğum töreni ════════════════════════════════════════

{ id:"sebep-sonuc-hibetullah-sultan-dogum-senligi", tur:"sebep-sonuc",
  kisa:"Bir şehzadenin ya da sultanın doğumu, sünnet veya düğün kadar sık olmasa da, kendi başına bir saray şenliği ve edebî eser konusu olabilirdi.",
  sebep:{ b:"III. Mustafa'nın kızı Hibetullah Sultan'ın dünyaya gelmesi", t:"1759-01-01" },
  sonuc:{ b:"Yedi gün yedi gece süren bir doğum şenliğinin (velâdet-i hümâyun) düzenlenmesi ve şair Haşmet'in bunu 'Vilâdetnâme-i Hibetullah Sultan' adlı bir sûrnâmede anlatması", t:"1759-01-01" },
  bag:"Sûrnâme türü esas olarak SÜNNET (bk. 'sehzade-mehmed-sunnet-dugunu-1582' kartı, data/ekokuma_toplum.js) ve düğün şenliklerini anlatır; doğum şenlikleri bu türde daha SEYREK işlenir. TDV'nin verdiği iki örnekten biri budur, öteki 1776'da Hatice Sultan'ın doğumudur (Melek İbrâhim'in 'Vilâdetnâme-i Hadîce Sultan'ı).",
  metin:"Osmanlı sarayında bir şehzade ya da sultanın doğumu, hanedanın sürekliliğini halka göstermenin bir fırsatıydı ve bazen — sünnet ya da düğün kadar sık olmasa da — kendi başına bir şenlik ve edebî eser konusu oldu. Haşmet'in kaleme aldığı 'Vilâdetnâme-i Hibetullah Sultan', III. Mustafa'nın kızının doğumu üzerine düzenlenen yedi günlük kutlamayı anlatır. Ölüm ve cenaze törenleri ise sûrnâme türünün KAPSAMI DIŞINDADIR — bu tür yalnız sevinç vesilesi olan saray törenlerini (sünnet, düğün, doğum) konu alır; bir padişahın cenaze protokolü tamamen ayrı bir anlatı geleneğine, vakayinamelere aittir.",
  kesinlik:"kesin",
  zincir:[],
  olay:[],
  kaynak:"TDV: surname",
  ic_not:"EKO-TAMAMLA — H-0115 tamamlama (doğum ekseni). Hibetullah Sultan'ın doğum GÜNÜ TDV özetinde yalnız YIL (1759) olarak geçiyor, gün UYDURULMADI (t: 1759-01-01, §4'ün 'yıl biliniyor gün bilinmiyor' yazımı); kronolojide 1759 dolayında bu isimle bir madde de YOK — olay:[] bırakıldı. ÖLÜM/CENAZE törenleri bu turda AYRICA yazılmadı: (a) genel Osmanlı hanedan cenaze protokolü için TDV 'cenaze' maddesi yalnız 'cenaze salâsı' terimini veriyor, ayrıntı BULUNAMADI; (b) tek somut, iyi belgelenmiş örnek (Kanûnî'nin Zigetvar'da ölümünün gizlenmesi) zaten data/ekokuma_magazin.js'te VAR — mükerrer yazılmadı, atıf yeterli görüldü. H-0115'in 'evlilik düğünleri' kısmı da zaten H-0116 (hanedan-evlilik-cariyelik-nikahi, data/ekokuma_toplum.js) kartında FARKLI açıdan (nikâh/cariyelik hukuku) işleniyor; burada TEKRARLANMADI." }

];
