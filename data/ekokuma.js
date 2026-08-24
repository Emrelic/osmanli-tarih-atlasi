// ============================================================================
// EK OKUMA KARTLARI — sebep-sonuç · magazin
// ============================================================================
// Yazan: VERİ İÇERİK oturumu, 7 Ağustos 2026. Şartname: `EK-OKUMA.md`.
// Görev: `oturumlar/VERI-ICERIK-GOREV.md` KALEM 1 (H-0017 · H-0018) + KALEM 3
// (H-0016). Kullanıcının kendi sözü: "yeniçeri ocağı nedir, kuruluşu,
// teşkilatı" · "vassallık nedir" · "Ankara'nın sahibi AHİLER olarak
// görünüyor, bu ahilerin ne olduğu".
//
// 🔴 BU DOSYA `index.html`in statik yükünde YOK, ana yüke KATILMAZ — kart
//    türü VAR, panel kendiliğinden bağlanır (EK-OKUMA.md §③, js/app.js:3344
//    "ANSİKLOPEDİ EKSENİ Kural ①"). index.html'e SATIR EKLEMEDİM — o KOORDİNATÖR'ün
//    işi (CLAUDE.md §7), buradaki tek görev veriyi doğru şemayla yazmaktı.
//
// ── ÜÇÜNCÜ KART TÜRÜ YOK — kasıtlı seçim ──────────────────────────────────
// Görev metni bu ikisini "ansiklopedi kartı" diye anıyordu ama js/app.js:3376
// (EKOKUMA_TUR) yalnız İKİ tur değerini tanır ve BUTONA çevirir: "sebep-sonuc"
// ve "magazin". Üçüncü bir tur (ör. "ansiklopedi") yazsaydım kart hiçbir
// zaman görünmezdi — app.js'e dokunmak da yetkim dışında (§③). Bu yüzden
// Yeniçeri, Vassallık ve Ahîler kartlarını gerçek `sebep→sonuç` çiftleri
// olarak kurdum: kurumun DOĞUŞ ânını (somut, tarihli bir olay) sebep-sonuç
// zincirine oturttum, `metin:`e kurumun teşkilat/işleyiş anlatımını koydum.
// "ANSİKLOPEDİ EKSENİ" (js/app.js:3344) yalnız bu üç kart TÜRÜNÜN ORTAK ADI —
// ayrı bir dördüncü şema DEĞİL; MERAK.md'nin kendi başında da aynı ayrım var.
//
// ── OLAY BAĞLANTISI — her karta GERÇEK kronoloji tarihi ────────────────────
// `olay:[...]` alanındaki her tarih `data/olaylar*.js`de BİREBİR var olan bir
// `t:` değeridir (app.js:3374 `liste.indexOf(o.t)` — birebir eşleşmeli, yoksa
// buton hiç çıkmaz). Üçü de o maddeler okunarak doğrulandı, uydurulmadı.
//
// ── KAYNAK — TDV, <title> ve gövde okunarak sınandı (CLAUDE.md §4) ─────────
//   yeniceri  → HTTP 200, <title>YENİÇERİ>, gövdede "Gelibolu'da Acemi
//               Ocağı" ve kuruluş tartışması okundu (ordu tuzağına düşülmedi)
//   eflak     → HTTP 200, <title>EFLAK>, "Segedin Antlaşması...haraç...tâbi
//               olması...ikili hükümranlık" pasajı okundu
//   murad-ii  → HTTP 200, <title>MURAD II>, Semendire (1439) ve Edirne-
//               Segedin (1444) olaylarının bağlamı doğrulandı
//   ahilik    → HTTP 200, <title>AHÎLİK>, "Moğol istilâsı sırasında ahî
//               birlikleri şehirlerin yönetimine...hâkim olmuşlardır" ve
//               Köprülü'nün "Ankara ve Ahîler" (1926) bibliyografyası okundu
//   ankara    → HTTP 200, <title>ANKARA>, "Ankara 1354 yılında...Süleyman
//               Paşa tarafından Osmanlı ülkesine katıldı" cümlesi okundu
//   kosedag-savasi → HTTP 200, <title>KÖSEDAĞ SAVAŞI>, tarih için okundu
//               (İbn Bîbî 1 Temmuz, İbnü'l-Adîm 3 Temmuz 1243 diyor — iki
//               kaynak ayrışıyor, metne bu ayrışma da yazıldı)
//
// ── ŞEMA (EK-OKUMA.md §① sözleşmesi) ────────────────────────────────────────
//   { id, tur:"sebep-sonuc", sebep:{b,t}, sonuc:{b,t}, bag, metin, kesinlik,
//     zincir:[...], olay:[...], kaynak }
// ============================================================================

window.EKOKUMA = [

{ id:"yeniceri-ocagi-kurulusu", tur:"sebep-sonuc",
  kisa:"Ocağın kuruluş günü belli değil — üç ayrı pâdişah için üç ayrı tarih savunuluyor.",
  sebep:{ b:"Orhan Gazi'den itibaren Rumeli'ye geçiş ve artan fetihlerle beylik ordusunun sürekli, merkeze bağlı ve maaşlı bir piyade gücüne duyduğu ihtiyaç", t:"1352-03-01" },
  sonuc:{ b:"I. Murad'ın cülûsuyla pençik sisteminin ve Gelibolu'daki Acemi Ocağı'nın — Yeniçeri teşkilatının çekirdeğinin — kurulması", t:"1362-03" },
  bag:"TDV'ye göre savaş esirlerinin beşte birinin (pençik) alınıp eğitilerek daimî orduya katılması fikri Orhan döneminin sonlarıyla I. Murad devri arasında tedricen olgunlaştı; tarihçiler kesin kuruluş ânını hâlâ tartışıyor, bazıları Yıldırım Bayezid dönemini işaret ediyor.",
  metin:"Yeniçeri, kapıkulu ocağının piyade sınıfıydı: devşirme ve pençik yoluyla toplanan gençler Acemi Ocağı'nda yetiştirildikten sonra 'orta' adlı bölüklere yazılırdı. Orta sayısı Kanûnî döneminde 165'e, sonra 196'ya ulaştı; ocak çorbacı ve ağa rütbeleriyle örgütlenmiş, merkezden düzenli maaş (ulûfe) alan bir kurumdu. II. Mahmud, 15-16 Haziran 1826'daki Vak'a-i Hayriyye ile ocağı topa tutarak kaldırdı.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1352-03-01","1362-03","1826-06"],
  kaynak:"TDV: yeniceri" },

{ id:"tabi-devlet-vassallik", tur:"sebep-sonuc",
  kisa:"Sırbistan ilhak edildi, Eflak edilmedi — aynı devlet beş yıl arayla niçin iki zıt çözüm seçti?",
  sebep:{ b:"Sırbistan'ın 1439'da doğrudan ilhak edilip sancak hâline getirilmesinin, Tuna'nın ötesindeki uzak toprakları savunma ve idare masrafı bakımından tutulamaz kılması", t:"1439-08-27" },
  sonuc:{ b:"Edirne-Segedin Antlaşması'nda Eflak'ın haraç veren, kendi voyvodasınca yönetilen tâbi (vasal) bir statüde tanınması — sonraki üç asrın Eflak-Boğdan-Erdel-Kırım modeli", t:"1444-06-12" },
  bag:"TDV'nin Eflak maddesine göre bu antlaşma 'ikili bir hükümranlık' kurdu: voyvoda haraç ödeyip iç işlerinde serbest kalıyor, toprak tımara bölünmüyordu — aynı dönemde doğrudan ilhak edilip eyalet yapılan Sırbistan'ın tam tersi bir çözüm.",
  metin:"Tâbi (vasal) devlet, Osmanlı'nın fethettiği toprağı ilhak etmeden yerli hanedanı haraç ve asker karşılığında başında bıraktığı yönetim biçimiydi. Eflak, Boğdan, Erdel, Kırım Hanlığı ve Hicaz Şerifliği bu modelin farklı görünümleriydi; ortak nokta toprağın tımara bölünmemesi, yerli idare ve dinin sürmesiydi. Doğrudan eyalet idaresinden daha ucuza aynı denetimi sağladığı için özellikle savunması pahalı sınır bölgelerinde tercih edildi.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1439-08-27","1444-06-12"],
  kaynak:"TDV: eflak · murad-ii" },

{ id:"ahi-birlikleri-ankara", tur:"sebep-sonuc",
  kisa:"Ankara'yı hangi devlet yönetiyordu? Bir asır boyunca cevap 'hiçbiri' oldu.",
  sebep:{ b:"Anadolu Selçuklu merkezî otoritesinin Kösedağ bozgunuyla çökmesi ve esnaf-dinî fütüvvet birliklerinin (ahî) birçok şehirde fiilî yerel yönetime dönüşmesi", t:"1243-07-01" },
  sonuc:{ b:"Ahî yönetimindeki Ankara'nın, Orhan Gazi'nin oğlu Süleyman Paşa tarafından Osmanlı idaresine katılması", t:"1354-08-01" },
  bag:"TDV'nin Ahîlik maddesine göre bu birlikler özellikle Moğol istilâsı sırasında birçok Anadolu şehrinde mahallî otorite hâline geldi; Ankara bunun en belgeli örneğidir (Köprülü, \"Ankara ve Ahîler\", 1926) ve şehir 1354'e kadar bu yönetim altında kaldı. Kösedağ'ın günü kaynaklarda ayrışır (İbn Bîbî 1 Temmuz, İbnü'l-Adîm 3 Temmuz 1243 der).",
  metin:"Ahîlik, İslâm dünyasının fütüvvet (yiğitlik-cömertlik) geleneğinden doğan bir esnaf ve zanaatkâr teşkilatıydı; şeyh, halife ve nakip kademeleriyle örgütlenir, çıraklık-kalfalık-ustalık silsilesiyle mesleğe girişi, mal ve fiyat denetimini düzenlerdi. Merkezî otorite zayıfladığında salt esnaf birliği olmaktan çıkıp şehrin fiilî yönetimini üstlenebiliyordu — Ankara 1354'e kadar tam olarak böyle yönetildi; harita bu yüzden o pencerede Ankara'yı 'ahiler' sahipli gösteriyor.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1354-08-01"],
  kaynak:"TDV: ahilik · ankara" },

// ── parti-0007 / H-0004 · İÇERİK oturumu, 10 Ağustos 2026 ───────────────────
// `tabi-devlet-vassallik` kartının kardeşi: o DEVLETLERİN, bu TEBAANIN statüsünü
// anlatıyor. Emre'nin sözü: "osmanlıların ele geçirdikleri hristiyan ülkelerde
// halkla ilgili girdikleri yönetsel ilişkiler nelerdir."
// Tartışmalı taraf (zorlama var mıydı) `merak.js` → `hristiyan-tebaa-zorlama-mi`
// kartında; burada TANIM ve İŞLEYİŞ var. İkisi kasten ayrıldı.

{ id:"zimmi-cizye-millet-duzeni", tur:"sebep-sonuc",
  kisa:"Cizye dört asır sürdü; onu kaldıran şey bir savaş ya da fetih değildi — peki neydi?",
  sebep:{ b:"İstanbul'un fethiyle imparatorluğun en kalabalık gayrimüslim cemaatlerinin tek merkezde tebaa hâline gelmesi ve bu nüfusun idaresi için kurumsal bir çerçeveye ihtiyaç duyulması", t:"1453-05-29" },
  sonuc:{ b:"Islahat Fermanı ile cizyenin kaldırılıp gayrimüslimlere askerlik yükümlülüğünün getirilmesi — dört asırlık zimmet düzeninin hukuken sona ermesi", t:"1856-02-18" },
  bag:"TDV Zimmî maddesi klasik düzenin \"Tanzimat'tan sonra önemli ölçüde ortadan kaldırıldığını\" yazar; Cizye maddesi 1856 Islahat Fermanı'nın cizyeyi kaldırdığını ve yerine 1907'ye kadar süren bedel-i askerînin geçtiğini kaydeder. Millet maddesine göre Ermeni milleti 1461'de Fâtih'in İstanbul'da bir patrik tayin etmesiyle kurulmuştu; 1856'dan sonra cemaat idaresine laik unsurlar girdi ve patrikhânelerin yetkileri azaldı.",
  metin:"Zimmî, dârülislâmda vatandaş olarak yaşayan ve kendisine güvence verilen gayrimüslimdir: canı ve malı dokunulmaz, ibadeti serbest, kendi aralarındaki davalarda kendi mahkemesine gitme hakkı vardır; karşılığında devletin hâkimiyetini tanır ve cizye öder. Cizye yalnız hür, ergin, çalışabilir ve ödeme gücü olan erkeklerden alınır — kadın, çocuk, yaşlı, âmâ, kötürüm, fakir ve ibadete çekilmiş din adamları muaftır — ve Osmanlı'da âlâ (48 dirhem), evsat (24) ve ednâ (12) olmak üzere üç sınıfa ayrılırdı. Cemaatler millet teşkilatıyla yönetilirdi; bu teşkilat etnik ya da dil aidiyetine değil din ve mezhep esasına dayanırdı, bu yüzden Ermeniler Gregoryen, Katolik ve Protestan olarak üç ayrı millet sayılıyordu. Patrik ve hahambaşı devlet adına vergi toplar, cemaati yönetir, hukuk uygular ve eğitimi denetlerdi; ama bu yetki devletin denetimindeydi — yalnız XVII. yüzyılda elli sekiz Rum patriği değiştirilmiştir.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1453-05-29","1421-06-01","1856-02-18"],
  kaynak:"TDV: zimmi · cizye · millet · devsirme" }
,

// ══════════════════════════════════════════════════════════════════════════
// 📜 ANTLAŞMA HÜKÜMLERİ — ZENGİNLEŞTİRME KATMANI
// ══════════════════════════════════════════════════════════════════════════
// 🔴 BU KARTLAR TEMEL KAYDI TEKRAR ETMEZ. Antlaşma butonunun temeli
//    `window.ANTLASMALAR` (data/savaslar.js) ve 41/41 kaydında `ozet` +
//    `topraklar` ZATEN dolu. Buraya yazılan şey yalnız TDV'den çıkarılan
//    MADDE MADDE ayrıntıdır.
//    ⇒ Aynı olgu iki yerde durursa biri bayatlar; temel orada, detay burada.
//
// Bağlanma: `olay:[t]` — `ekKartBagliMi` bunu bugünkü hâliyle okur, kod
// değişikliği GEREKMEZ. Gösterim: `tur:"antlasma"` özel dala düşmez,
// SON ÇARE dalına düşer ve `metin` dökülür.
// ⚠️ BUTONDA GÖRÜNMESİ için `EKOKUMA_TUR["antlasma"].kaynak`ın bu kayıtları
//    da katması gerekiyor (tek satır, koordinatörde) — o satır inmeden bu
//    kartlar SESSİZCE görünmez. Kayıt zararsız, yalnız beklemede.
//
// KAYNAK: her kart TDV gövdesi OKUNARAK yazıldı; madde numaraları TDV'nin
// kendi verdiği numaralardır. Uydurulmuş tek bir hüküm yoktur.

{ id:"antlasma-karlofca-1699", tur:"antlasma", olay:["1699-01-26"],
  metin:"Macaristan cephesi: Tımışvar (Banat) eyaleti dışında Erdel dâhil bütün Macaristan Avusturya'ya bırakıldı. Sınır, Tisa nehrinin Tuna'ya döküldüğü yerden Bossut suyunun Sava'ya karıştığı yere kadar düz bir çizgi olarak kabul edildi; Baçka tarafları Avusturya'da kaldı, Titel bölgesi eski hâline bırakıldı. Avusturya, Osmanlı safında savaşan İmre Tököli ve mensuplarının Macar sınırlarından çekilmesini istedi; Râmi Mehmed Efendi bunu, Macaristan'da kalan taraftar ve akrabalarının serbestçe Osmanlı ülkesine geçebilmesi şartıyla kabul etti. Rusya cephesi: Azak ve çevresi Rusya'ya bırakıldı; buna karşılık Osmanlı hükümeti Karadeniz'in emniyeti için Kerç Boğazı'nda Yenikale'yi inşa ettirdi. 🔴 Ve bir talep REDDEDİLDİ: Rus elçisinin Karadeniz'de ticaret gemilerine serbest dolaşım isteği kabul edilmedi — aynı hak yetmiş beş yıl sonra Küçük Kaynarca'da verilecekti.",
  kesinlik:"kesin",
  kaynak:"TDV: karlofca (gövde okundu)" },

{ id:"antlasma-pasarofca-1718", tur:"antlasma", olay:["1718-07-21"],
  metin:"İki ayrı antlaşma imzalandı. AVUSTURYA ile yirmi madde: ilk yedi madde sınırların tayin ve tesbitine dairdir, kesin sınır tesbiti komiserlere bırakıldı. Bütün Banat bölgesi, Eflak'ın Oltu ırmağına kadar uzanan batı yarısı (Küçük Eflak), Sırbistan'ın Belgrad dâhil kuzey kısmı ve Kuzey Bosna Avusturya'ya bırakıldı. Sonraki maddelerde genellikle Karlofça şartlarına uyuldu: karşılıklı tecavüz hâlinde emniyetin sağlanması, Kudüs'te Katolik kutsal mezar rahiplerinin himayesi, esirlerin serbest bırakılması veya mübadelesi. VENEDİK ile yirmi altı madde: Venedik son savaşta kaybettiği yerlerin tamamını ve iki yıllık tazminat istedi; Osmanlı yalnız savaş sırasında zaptettiği Çuka (Cerigo) adasını iade etti — Bosna ile Ragusa arasında Venedik'e serbest bir yol bırakılması ve bu güzergâhtaki üç palankanın Osmanlı sınırına alınması şartıyla. Mora Osmanlı'da kaldı. TİCARET: tazminat talebine karşılık ithalât ve ihracatta gümrük vergisi %5'ten %3'e düşürüldü; ticaret antlaşmasının ilk dört maddesi Avusturya tüccarının Osmanlı ülkesinde serbestçe alışverişine ve bir defaya mahsus %3 gümrüğe izin veriyordu. Piyasadaki bütün para türleri kabul edilecek, para ve değerli madenlerden gümrük alınmayacaktı.",
  kesinlik:"kesin",
  kaynak:"TDV: pasarofca-antlasmasi (gövde okundu)" },

{ id:"antlasma-kucuk-kaynarca-1774", tur:"antlasma", olay:["1774-07-21"],
  metin:"Görüşmelerin düğümlendiği üç konu vardı: Kırım'a serbestiyet verilmesi (şeriata aykırı görülüyordu), askerî bakımdan hayatî sayılan kalelerin terki ve tazminat. Varılan hükümler: Kırım'a istiklâl tanındı. Kerç, Yenikale ve Kılburun Rusya'nın elinde kaldı; Özü Rusya'ya bırakılırken karşısındaki Bender Osmanlı'ya teslim edildi. Rusya'nın savaş sırasında ele geçirdiği Memleketeyn (Eflak-Boğdan), Besarabya, Akkirman, Kili, İsmâil ve Bender kaleleri dâhil bütün yerler iade edilecekti; Akdeniz'de ele geçirdiği yerler de iade edilmekteydi (md. 7). Beyoğlu'nda ana yol üzerinde Rus itikadınca bir Ortodoks kilisesi inşasına izin verilecek ve Rusya bu kilisenin himayesini üstlenecekti. Rus hacıları kutsal yerleri serbestçe ziyaret edebilecekti. Rus ticaret gemileri Karadeniz ve Akdeniz'de serbestçe dolaşacak, diğer devletlere verilmiş imtiyazlardan istifade edecek ve gerekli yerlerde konsolosluk açabileceklerdi — Karlofça'da reddedilen talep. Osmanlı Devleti üç taksit hâlinde 15.000 kese (4,5 milyon ruble) tazminat ödeyecekti (ek münferit madde).",
  kesinlik:"kesin",
  kaynak:"TDV: kucuk-kaynarca-antlasmasi (gövde okundu)" },

{ id:"antlasma-berlin-1878", tur:"antlasma", olay:["1878-07-13"],
  metin:"Berlin, Ayastefanos'un kurduğu büyük Bulgaristan'ı ÜÇE böldü. ① Sınırları daraltılmış bir Bulgaristan prensliği: Osmanlı Devleti'ne tâbi, iç işlerinde serbest, prensi halk tarafından seçilip Bâbıâli'ce tasdik ve büyük devletlerin muvafakatiyle tayin edilen, Osmanlı askerinin bulunmadığı bir yapı. ② Şarkî Rumeli eyaleti: idarî yönden bağımsız, ama siyasî ve askerî yönden Osmanlı'ya tâbi; Avrupa devletlerinin tasvibiyle Bâbıâli'nin beş yıl süreyle tayin edeceği bir hıristiyan vali tarafından idare edilecekti. ③ Makedonya: ıslahat yapılmak şartıyla Osmanlı'ya bırakıldı. Ayrıca Sırbistan'ın bağımsızlığı tanındı ve kendisine Niş ile Pirot verildi; Yunanistan'a bir miktar toprak verilecek; Bosna-Hersek Avusturya tarafından işgal edilecekti. Doğu cephesinde Kars, Ardahan ve Batum harp tazminatının bir kısmına karşılık Rusya'ya bırakıldı, Doğubayazıt ve Eleşkirt vadisi Osmanlı'da kaldı. Tazminatın miktarı sonradan belirlendi: 8 Şubat 1879 İstanbul Antlaşması'yla, Rusya'ya bırakılan yerlerin bedeli düşüldükten sonra 802.500.000 frank olarak tesbit edildi ve yedi yılda yirmi bir eşit taksitte ödenmesi kararlaştırıldı; 14 Mayıs 1882'de yıllık 350.000 liralık taksitlere çevrildi ve âşâr vergisi teminat gösterildi.",
  kesinlik:"kesin",
  kaynak:"TDV: berlin-antlasmasi (gövde okundu)" }

];
