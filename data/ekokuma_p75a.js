// ============================================================================
// EK OKUMA — KURUMLAR VE MODERNLEŞME (PARTİ 0075, blok ①, EKOKUMA-KURUM-0075)
// ============================================================================
// Yazan: EKOKUMA-KURUM-0075 · 21 Eylül 2026 · maddeler H-0006 H-0008 H-0009
// H-0016 H-0027 H-0028 H-0036 H-0043 H-0047 (12 kart).
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_P75A tanımlar.
//    KİLİT: data/ ve arac/ donmuşken bu dosya denetim/ altında hazırlandı;
//    kilit kalkınca data/ekokuma_p75a.js olarak kopyalanacak ve app.js
//    `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_p75a" satırı 1.MURAT'ça
//    eklenecek (yükleyici index.html'de DEĞİL, js/app.js'te — bk. oturumlar/
//    EKOKUMA-KURUM-0075 teslim mesajı).
//
// ŞEMA: data/ekokuma_kurum.js ile BİREBİR — { id, tur, kisa, metin, kesinlik,
// olay, kaynak }. `olay:` günleri kronoloji maddelerinin kendi `t:` alanından
// (data/olaylar_ek14.js · olaylar_ek2.js · olaylar_ek5.js · olaylar_ek7.js ·
// olaylar_p0044.js) alındı; atlasın günü DAYANAK yapılmadı, yalnız bağ.
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): her TDV slug'ı HTTP koduyla tarandı, gövdesi
// okundu, cümle numarasıyla notlandı; metin KOPYALANMADI, özetlendi (alıntı
// en çok 15 kelime). TDV'nin kapsamadığı yerde akademik/kurumsal kaynak
// `kaynak:` alanında AÇIKÇA yazıldı. Bulunamayan şey `bulunamadı` diye yazıldı.
//   TDV 200 (okundu): nufus · ceride-nezareti · takvim-i-vekayi ·
//     ceride-i-havadis · tercuman-i-ahval · tasvir-i-efkar · vakanuvis ·
//     dellal · ulak · kahvehane · feshane · islimye · izmit · kagit · baruthane
//     · nisanci · defterdar · sadrazam · dahiliye-nezareti · hariciye-nezareti
//     · meclis-i-vukela · meclis-i-vala-yi-ahkam-i-adliyye · sura-yi-devlet ·
//     kaime · esham · sarraflik · duyun-i-umumiyye · sirket-i-hayriyye ·
//     bogazici · halic · bezmialem-valide-sultan · galata · beyoglu-mezarligi
//   TDV "bk." KÜÇÜK KALAN (ölü/yönlendirme, ④ tuzağı): galata-koprusu (bk.
//     HALİÇ) · istikraz (bk. KARZ) · maliye-nezareti (bk. DEFTERDAR) ·
//     tellal (bk. DELLÂL) · beykoz (bk. BOĞAZİÇİ) — asıl gövde yönlendirilen
//     maddede okundu. HTTP 302 (ölü): gazete · nufus-sayimi · sanayi · hereke
//     · meclis-i-vala · tunel · sarraf · nezaret. TDV'de TÜNEL maddesi
//     `bulunamadı`; Tünel için TDV'nin iki geçtiği yer + akademik makale.
//
// 🔴 TDV KENDİ İÇİNDE ÇELİŞEN YERLER (CLAUDE.md §4⑥ — taraf seçilmedi,
//    iki değer de kartta yazıldı):
//   ① Maliye Nezâreti: ceride-nezareti "28 Şubat 1838'de kuruldu" ↔ defterdar
//     "Şubat 1838 geçici, ertesi yıl geri döndü, 1841'de kesin".
//   ② Galata Köprüsü: bezmialem-valide-sultan "1844'te yaptırıldı" ↔ halic
//     "1845'te kurulmuştur".
//   ③ Tünel: beyoglu-mezarligi "17 Ocak 1875'te açıldı" ↔ galata "1876'da
//     açılırken" (akademik makale 17 Ocak 1875'i doğruluyor).
//   ④ Şûrâ-yı Devlet'e bölünme: meclis-i-vala "6 Mart 1868" ↔ sura-yi-devlet
//     "5 Mart 1868" (iki günlük fark).
//   ⑤ Nüfus tablosunun satır/sütun toplamları tam tutmuyor (birkaç yüz kişi).
// ============================================================================
window.EKOKUMA_P75A = [

// ── H-0006 · İlk düzenli nüfus sayımı (1830-31) ────────────────────────────
{ id:"teknik-ilk-nufus-sayimi-1830-31", tur:"teknik-bilimsel",
  kisa:"Yeniçeri Ocağı kalkınca devletin elinde yeni ordusunu kuracak insan listesi yoktu — ilk düzenli sayım önce askerlik ve vergi için, yalnız erkekleri sayarak yapıldı.",
  metin:"■ SAYIM DAHA ÖNCE YOK MUYDU?\n"
    +"Kayıt tutmak yeni değildi; yeni olan, bütün halkı tek düzende yazan bir sayımdı. Osmanlı Devleti 15. yüzyıldan itibaren fethettiği bölgelerin sosyal ve iktisadî unsurlarını tespit etmek, bu yolla asker ve vergi almak için “tahrir” yapıyordu; klasik tahrir defterleri her sancağın hâne hesabıyla vergiye tâbi nüfusunu, mahalle-köy-cemaat dağılımını ve gelirleri yazardı. Bu usul 16. yüzyıl sonlarında bırakıldı; yerine cizye, tımar yoklama ve avarız için ayrı ayrı defterler tutuldu (Başaran'ın makalesi Öztürk'e dayanarak aktarıyor). 1830-31 sayımı ise bir akademik çalışmanın ifadesiyle Müslim ve gayrimüslim erkek nüfusu BİRLİKTE içeren ilk sayımdı.\n\n"
    +"■ NİÇİN İHTİYAÇ DUYULDU\n"
    +"TDV'ye göre 18. yüzyıl sonlarından itibaren değişmek zorunda kalan sistem vergi, askerlik ve yönetim düzeni için veriye ihtiyaç duydu. Doğrudan tetikleyici Yeniçeri Ocağı'nın 1826'da kaldırılmasıydı: yeni ordunun (Asâkir-i Mansûre-i Muhammediyye) insan kaynağının ve toplumun ekonomik düzeyinin bilinmesi gerekiyordu. Vergi hesabı ikinci sebepti. Başaran'ın aktardığına göre daha önce 1828-29'da bir sayım denenmiş ama Rusya ile savaş yüzünden ülkenin tamamında uygulanamamış; işlemler savaştan sonra 1830-31'de yeniden başlatıldı.\n\n"
    +"■ AVRUPA'DA DURUM\n"
    +"TDV bugünkü anlamda nüfus sayımının 18. yüzyıl ortalarından itibaren yapılmaya başlandığını yazar ve tarihleri verir: İsveç 1748, Danimarka 1769, İspanya 1787, Amerika Birleşik Devletleri 1790, İngiltere ve Fransa 1801. Yani Osmanlı sayımı İngiltere-Fransa örneklerinden yaklaşık otuz yıl, İsveç örneğinden seksen yıldan fazla sonra geldi (sayfanın hesabı). Avrupa sayımlarının yöntemi ve Osmanlı'nın bunlardan esinlenip esinlemediği okunan maddelerde `bulunamadı` — TDV yalnız yılları veriyor.\n\n"
    +"■ KİMLER, NERELER SAYILDI\n"
    +"Yalnız erkekler yazıldı; din esasına göre kabaca etnik özellikler ve iş durumları belirlendi (TDV). Sayım Anadolu ve Rumeli'nin bir bölümünde yapılabildi: 1831'de toplanan icmâl Anadolu, Karaman, Çıldır, Cezâyir-i Bahr-i Sefîd, Rumeli ve Silistre eyâletlerini kapsıyor. Sayılamayan yerler için sonra ayrı girişimler yapıldı; örneğin Erzurum ve Van bölgelerinde sayım ancak 1836'da tamamlanabildi.\n\n"
    +"■ RAKAMLAR\n"
    +"TDV'nin tablosuna göre 1830 sayımında Anadolu ve Rumeli'deki toplam erkek nüfus 3.753.642'dir (Anadolu 2.383.876, Rumeli 1.369.766). Dinî-etnik dağılım: İslâm 2.501.425 · Hıristiyan reâyâ 1.178.171 · Kıptî 36.675 · Yahudi 17.012 · Ermeni 20.309. Rumeli sütununda gayrimüslim reâyâ erkekleri (811.546) Müslüman erkeklerden (513.448) çoktur. Sayım yapılan bölgeler için 1831 icmâline göre toplam nüfus yaklaşık 7,5 milyon görünüyor. Dikkat: tablodaki satır ve sütun toplamları birbirini birkaç yüz kişilik farkla tutmuyor; kart tablonun kendi “Toplam” satırını aktarıyor. Ayrıca 7,5 milyonun 3,75 milyon erkeğin iki katına yakın olduğu göze çarpıyor, ama TDV bu hesabı nasıl yaptığını yazmıyor — bu bir gözlemdir, sayfanın yorumlaması.\n\n"
    +"■ RAKAMLAR NASIL BULUNDU\n"
    +"Ödemiş defterlerini inceleyen bir akademik çalışma, Enver Ziya Karal'ın (1943) tespitine dayanarak şunu anlatıyor: devlet halkı ürkütmemek için “matlûb-ı âliye muvâfık” (istenilene uygun) ya da “mim işareti vaz olunan” gibi etiketlerle askerliğe elverişli kişileri kaydetti; İslâm nüfus genellikle “muvâfık” ve “gayri muvâfık” diye ikiye ayrıldı, gayri muvâfık kısım içinde bazen ihtiyar, sabi, saka, amel-mande gibi alt gruplar da ayrıldı. Defterlerde yaş, meslek ve özürlülük bilgisi var; sayım bir anda değil uzun bir zaman diliminde yapıldı, doğum-ölüm-göç kayıtları kırmızı mürekkeple güncellendi. TDV'nin Cerîde Nezâreti maddesine göre sayım memurlarının gittikleri yerlerden gönderdikleri istatistikî bilgiler İstanbul'da toplandı; bu defterleri korumak, vergileri kayıtlara göre yeniden hesaplamak ve nüfus değişikliklerini izlemek için 1831'de Cerîde Nezâreti kuruldu (Bâb-ı Defterî mektupçusu Said Efendi 7500 kuruş aylıkla nâzır oldu).\n\n"
    +"■ SONRASI\n"
    +"Bütün erkek nüfusun yazılıp her üç ayda bir vukuat defterlerinin İstanbul'a gönderilmesi kararlaştırıldı; sancaklara nüfus nâzırları, kazalara nüfus memurları, nahiyelere mukayyidler atandıysa da istenen sonuç alınamadı. Taşra teşkilâtı sonra önce Tahrîr-i Emlâk, kısa süre sonra Ahz-ı Asker idarelerine bağlanarak asıl işlevini yitirdi. TDV, Osmanlı Devleti'nin “ilk defa genel ve güvenilir” nüfus bilgisine ancak 1881'de kurulan Sicill-i Nüfûs İdaresi ile sahip olduğunu söyler.",
  kesinlik:"kesin",
  olay:["1830-12-01|nüfus"],
  kaynak:"TDV: nufus (Nebi Bozkurt; Osmanlı Dönemi bölümü Yunus Koç) · ceride-nezareti (Cevdet Küçük) · Mehmet Başaran, “1830–1842 Yılları Arasında Nüfus Defterleri Kapsamında Ödemiş ve Köyleri”, Adnan Menderes Üniversitesi Sosyal Bilimler Enstitüsü Dergisi 4/3, s. 307-321 (Karal 1943 ve Aydın 1990'a atıfla; dergipark.org.tr makale 392896)" },

// ── H-0008 · Takvîm-i Vekāyi — resmî gazete ─────────────────────────────────
{ id:"teknik-takvim-i-vekayi-resmi-gazete", tur:"teknik-bilimsel",
  kisa:"Devlet kendi sesini kendisi basmaya karar verdi — onu harekete geçiren, Mısır Valisi Mehmed Ali'nin gazetesiyle İzmir'de yabancıların çıkardığı gazetelerdi.",
  metin:"■ RESMÎ GAZETE NEDİR\n"
    +"Bir devletin kendi adına, kendi organı olarak yayımladığı gazete: kanun, atama, karar ve duyuruları kamuya ilk ağızdan duyurur. TDV, Takvîm-i Vekāyi'yi “devletin sesi olabilecek” resmî gazete olarak tanımlar. İlk sayısı 25 Cemâziyelevvel 1247'de (1 Kasım 1831) Türkçe çıktı; hedef, Avrupa'daki örneklere uygun biçimde iç ve dış kamuoyunu daha düzenli ve hızlı bilgilendirmekti.\n\n"
    +"■ HANGİ GEREKLİLİĞE DOĞDU\n"
    +"TDV üç etkiyi sayar. Avrupa'da gazeteciliğin 17. yüzyıl başlarından beri uzun bir geçmişi vardı; Osmanlı ülkesinde ise 18. yüzyıl sonlarından itibaren gazeteleri yabancılar kendi dillerinde çıkarıyordu. Mehmed Ali Paşa'nın yarı Türkçe yarı Arapça ilk sayısı 2 Aralık 1828'de Kahire'de çıkan Vekāyi-i Mısriyye'si ve Alexandre Blacque'ın İzmir'de birbiri ardınca çıkardığı Spectateur oriental ile Courrier de Smyrne gazeteleri Osmanlı yöneticilerini harekete geçirdi. TDV, II. Mahmud'un izin vermesini muhtemelen üç şeye bağlar: merkeziyetçilik ve reformculuk siyaseti, 1829'da Yunanistan'ın bağımsızlığıyla biten savaşta devletin görüşünü Batı ülkelerine ve kendi kamuoyuna anlatmakta yaşadığı güçlük ve Mehmed Ali'nin gazetesine bir tür alternatif olma düşüncesi.\n\n"
    +"■ ONDAN ÖNCE BU İŞİ KİM YAPIYORDU\n"
    +"Düzenli bir haber yayını yoktu. TDV'nin ilgili maddelerinden dört araç görülüyor: dellâllar (Dellâlbaşı'nın emrindeki haberci dellâllar bir haberi halka duyurur, padişah ölümü ve cülûsu gibi durumlarda devletin resmî memuru sayılırdı), ulaklar (emirleri ve haberleri menzilden menzile taşıyan posta düzeni), vak‘anüvis (devletin resmî tarihçisi) ve kahvehane sohbetleri. Bunların hiçbirini TDV “gazetenin öncüsü” diye adlandırmaz; hangisinin hangi işlevi karşıladığı sayfanın yorumlamasıdır — daha ayrıntılı karşılaştırma için bk. ayrı kart: gazeteciliğin doğuşu ve ilk Osmanlı gazeteleri.\n\n"
    +"■ İŞLEVLERİ\n"
    +"Gazete “Vukūât-ı Resmiyye ve Gayr-i Resmiyye” diye iki bölüme ayrılmıştı; “Umûr-ı Dâhiliyye, Mevâdd-ı Askeriyye, Es'âr, Fünûn, Tevcîhât, Tevcîhât-ı İlmiyye, Umûr-ı Hâriciyye, Garîbe” gibi alt başlıklar iç ve dış haberlere de yer verildiğini gösterir. Yani atama-tayin listeleri, fiyatlar (es'âr), askerî haberler ve dış olaylar aynı sayfalarda toplanıyordu. Zaman zaman “zeyil, ilâve, i‘lân, tenbihnâme, varaka-i mahsûsa” gibi eklerle acil duyurular yayımlandı.\n\n"
    +"■ NASIL ÇALIŞIRDI\n"
    +"İçerik, başta İstanbul olmak üzere ülkenin çeşitli yerlerindeki devlet memurlarınca derlenip Takvimhâne-i Âmire Nezâreti'ne gönderilen bilgi ve belgelerden seçilirdi. Her sayının müsveddesi basımdan önce sadâret kanalıyla saraya iletilirdi; bazen padişahın isteğiyle düzeltilir, ama genel olarak müsveddeler aynen basılırdı. Bâbıâli'nin haberlerini Sârım Efendi, Bâb-ı Seraskerî'nin haberlerini Said Bey toplardı. Gazete Türkçe yanında başka dillerde de çıktı: Fransızca Le Moniteur ottoman 5 Kasım 1831'de, Ermenice (Liro-Kir), Rumca, Arapça ve Farsça nüshalar 1832 başlarından itibaren. Yıllık 120 kuruşluk zorunlu abonelikle satıldı; diğer dillerdeki nüshalar hariç 3000'in biraz üstünde aboneye ulaştı. Haftada bir çıkması gerekirken ilk sekiz sayıdan sonra düzeni tutturamadı (yıllık 8, 19, 24 sayı).\n\n"
    +"■ ÖMRÜ\n"
    +"İlk dönem 16 Mart 1878'de 2119. sayıyla sona erdi (TDV bunu Rus savaşı ve toprak kayıplarıyla ilişkilendirir); ikinci dönem 26 Mart 1891'den 16 Mayıs 1892'ye sürdü; üçüncü dönem 28 Eylül 1908'den İstanbul hükümetinin sona erdiği 4 Kasım 1922'ye kadar 4608 sayı yayımladı. TDV gazetenin hedefine tamamen ulaşmakta yeterli bulunmadığını söyler; Cumhuriyet döneminde Cerîde-i Resmiyye / Resmî Gazete adıyla bir bakıma devamlılık gösterdi.",
  kesinlik:"kesin",
  olay:["1831-11-01|Takvîm"],
  kaynak:"TDV: takvim-i-vekayi (Nesimi Yazıcı) · vakanuvis (Bekir Kütükoğlu) · dellal (Yusuf Halaçoğlu) · ulak (Yusuf Halaçoğlu) · kahvehane (Ahmet Yaşar)" },

// ── H-0009 · Gazetecilik ve ilk Osmanlı gazeteleri ─────────────────────────
{ id:"teknik-gazetecilik-dogusu-ilk-osmanli-gazeteleri", tur:"teknik-bilimsel",
  kisa:"İlk gazeteleri bir Mısır valisi, bir İngiliz ve devletin kendisi çıkardı; “Türk basınının başlangıcı” ise devletten yardım almadan çıkan Tercümân-ı Ahvâl'e verilir.",
  metin:"■ GAZETECİLİK NASIL DOĞDU\n"
    +"TDV yalnız şunu söyler: Avrupa'da gazetenin ve gazeteciliğin 17. yüzyıl başlarından itibaren takip edilebilen uzun bir geçmişi vardır; Osmanlı ülkesinde ilk gazeteleri 18. yüzyıl sonlarında yabancılar kendi dillerinde İstanbul ve İzmir gibi merkezlerde çıkardı. Avrupa'daki ilk basılı gazetelerin adı, yeri ve doğuş nedenleri okunan maddelerde `bulunamadı`; bu kart o konuda tahmin yürütmüyor.\n\n"
    +"■ KLASİK DÖNEMDE HABERİ KİM TAŞIRDI\n"
    +"Düzenli bir gazetenin yerini tek bir kurum tutmuyordu; farklı işleri farklı araçlar görüyordu (tasnif sayfanın yorumlamasıdır):\n"
    +"• Dellâllar: Dellâlbaşı'nın emrinde çalışan haberci dellâllar bildirilen haberi çarşı pazar dolaşıp bağırarak halka duyururdu; yevmiye alırlardı. Padişah ölümü ve cülûsu gibi olayları halka bildirmek devletin resmî memuru olan dellâllara düşerdi (TDV: dellal).\n"
    +"• Ulaklar: emir ve haberleri menzilden menzile taşıyan posta düzeni; padişah, vezirler, kadılar ulak hükmü verebilirdi (TDV: ulak). Bu, devletin kendi içindeki haberleşmesiydi, halka açık yayın değildi.\n"
    +"• Vak‘anüvis: devletin resmî tarihçisi. Görevin devlet hizmeti olarak kurumlaşması 18. yüzyıl başında Amcazâde Hüseyin Paşa'nın sadrazamlığına rastlar; Naîmâ'ya 1716'da günde 120 akçe maaş bağlanmıştır; vak‘anüvisler kesintisiz kayıt için birbirlerinin notlarını devrederdi (TDV: vakanuvis). Ürün, halka dağıtılan bir sayı değil devletin arşivlik tarihiydi.\n"
    +"• Kahvehane: kahvehaneler 16. yüzyılın ikinci yarısından itibaren “devlet sohbeti” denilen dedikodu ve söylentilerin yayıldığı, siyasî iktidarın dikkatle izlediği ve bazen yasakladığı yerler olarak görüldü (TDV: kahvehane). Okuma mekânı olarak “kıraathane” adı Tanzimat sonrasına rastlar; ilk örnek Divanyolu'nda 1857'de açılan Sarafim Kıraathanesi'dir.\n\n"
    +"■ İLK GAZETELER\n"
    +"• Curnalü'l-Irâk: Kasım 1816'da Bağdat Valisi Kölemen Dâvud Paşa tarafından yayımlandığı ileri sürülen Türkçe-Arapça gazete; TDV bunu “ileri sürülen” diye hedgeler.\n"
    +"• Vekāyi-i Mısriyye: Mehmed Ali Paşa'nın, ilk sayısı 2 Aralık 1828'de Kahire'de çıkan yarı Türkçe yarı Arapça gazetesi.\n"
    +"• Takvîm-i Vekāyi: 1 Kasım 1831, İstanbul, resmî gazete (bk. ayrı kart).\n"
    +"• Cerîde-i Havâdis: 31 Temmuz 1840-26 Eylül 1864, toplam 1212 sayı. Sahibi 1815'te İzmir'e yerleşen İngiliz William Churchill; Churchill 1836'da Moda'da avlanırken bir çocuğu yaralayıp tutuklanmış, büyükelçi Ponsonby kapitülasyon haklarına dayanıp nota vermiş, olay büyüyünce Osmanlı hükümeti özür dilemiş ve tazminat olarak ona bir gazete yayımlama imtiyazı verilmişti. Gazete Takvimhâne'nin matbaa ve personel desteğiyle çıktı; padişah Abdülmecid maaş bağladı; satışı 150'yi aşmadı. TDV bu gazeteyi “gazete” kelimesinin Osmanlı basınında ilk kullanıldığı yayın olarak gösterir; ilk muhabir (İskenderiye, 1840), ilk ek, ölüm ilânı ve biyografi (1844), tefrika (1846), okuyucu mektubu ve savaş muhabirliği (Kırım, 1854) gibi yenilikleri getirdi.\n"
    +"• Tercümân-ı Ahvâl: 22 Ekim 1860'ta Âgâh Efendi'nin çıkardığı, 1860-1866 arasında 792 sayı yayımlanan gazete. TDV, devletten yardım almadan ilk defa bir Müslüman Türk vatandaşınca çıkarıldığı için “Türk basınının başlangıcı” kabul edildiğini söyler. Başmuharrir Şinâsi'nin yazdığı mukaddime imzalı başyazı geleneğini başlattı; halkın anlayacağı sade bir Türkçe hedeflendi.\n"
    +"• Tasvîr-i Efkâr: 27 Haziran 1862, Şinâsi, “dördüncü Türkçe gazete”; “Havadis ve maarife dair Osmanlı gazetesidir” ibaresini taşıyordu, haftada iki kez çıkıyordu.\n\n"
    +"■ İLK GAZETECİLER KİMLERDİ\n"
    +"Takvîm-i Vekāyi'in 1832'de başına Takvîm-i Vekāyi‘hâne-i Âmire ve Tab‘hâne-i Ma‘mûre nâzırı unvanıyla getirilen ilk yöneticisi Esad Efendi'dir; TDV, gazetenin Mukaddime'sini Sahaflar Şeyhîzâde Esad Efendi'nin yazdığını, aynı adı taşıyan bir Esad Efendi'nin de II. Mahmud'un atadığı vak‘anüvis olduğunu ayrı maddelerde yazar — iki maddenin aynı kişiyi kastetmesi muhtemeldir ama TDV bunu açıkça birleştirmez (sayfanın yorumlaması). Bâbıâli haberlerini Sârım Efendi, Seraskerî haberlerini Said Bey topladı. Fransızca nüshada Alexandre Blacque çalıştı. Cerîde-i Havâdis'in sahibi William Churchill, ilk yıllardaki yazarları arasında Münif (sonradan Maarif nâzırı), Ahmed Tevfik, Emin Firdevsî, Karslızâde Cemâleddin Mehmed sayılır. Tercümân-ı Ahvâl'in sahibi Âgâh Efendi, başmuharriri Şinâsi'dir. Cerîde-i Havâdis'te yazılar imzasızdı; yazarlar dolaylı kaynaklardan öğrenilebiliyor.",
  kesinlik:"kesin",
  olay:["1831-11-01|Takvîm","1862-06-27|Tasvir"],
  kaynak:"TDV: takvim-i-vekayi (Nesimi Yazıcı) · ceride-i-havadis (Ziyad Ebüzziya) · tercuman-i-ahval (Hamza Çakır) · tasvir-i-efkar (Nesimi Yazıcı) · vakanuvis (Bekir Kütükoğlu) · dellal · ulak (Yusuf Halaçoğlu) · kahvehane (Ahmet Yaşar)" },

// ── H-0016 · Osmanlı'da ilk fabrikalar ve atölyeler ─────────────────────────
{ id:"teknik-osmanli-ilk-fabrikalar-atolyeler", tur:"teknik-bilimsel",
  kisa:"“Fabrika” sözcüğü yeni, devlet imalathanesi eskiydi — 19. yüzyıl başında farklı olan, ordunun ihtiyacını dışarıdan almak yerine yerinde üretme fikriydi.",
  metin:"■ FABRİKADAN ÖNCE: DEVLETİN İMALATHANELERİ\n"
    +"Osmanlı'da büyük ölçekli devlet üretim tesisleri 19. yüzyıldan çok önce vardı: TDV baruthâneleri “devrin barut yapılan fabrikaları” olarak görmek gerektiğini yazar; tersane, tophâne ve darphâne de benzer devlet imalât yerleriydi (bk. TDV: baruthane, tophane, tersane, darphane). Kâğıtta ise TDV şu tabloyu verir: İbrâhim Müteferrika 1741'de Yalova'da bir kâğıt imalâthanesi kurmaya girişti; Darphâne sermayesiyle İngiliz-Hollanda kâğıdı ayarında üretim hedefleyen bir fabrika 1805'te Beykoz'da açıldı ve devlet dairelerine, Üsküdar Matbaası'na, orduya kâğıt sağlayacaktı. 19. yüzyıl ortasında bir Avrupalı gözlemci Beykoz gibi Türk fabrikalarının yeterli teşvik görmediğini, kâğıdın Avrupa'dan getirilmesinin daha ucuza geldiğini yazmıştır (Charles White'tan TDV aktarır).\n\n"
    +"■ II. MAHMUD DÖNEMİ: MODERN ANLAMDA İLK FABRİKALAR\n"
    +"• Feshâne (1833): Yeniçeri Ocağı'nın kaldırılmasından sonra yeni ordunun başlığı fes oldu; fes talebi önce Tunus ve Mısır'dan, sonra Avrupa'dan yıllık 500.000'i aşan miktarda ithalatla karşılandı. Dış ticaret dengesi açısından bu sürdürülemez bulunup yurt içi üretime geçildi: fes nâzırı Kâtibzâde Mustafa Efendi Tunus'tan 23 fes ustası ve Bursa'dan 15 kalfa getirtti; Mukātaat Hazinesi'nden ayrılan 1,5 milyon kuruşla 1833'te Kadırga'da üretim başladı, İzmit'te yıkama için bir dinkhâne kuruldu. 1839'da Eyüp Defterdar İskelesi'ne taşındı; 1842'de yünlü kumaş (çuha) tezgâhları eklendi, 1843'te buhar motoru geldi. Bir fesin maliyeti 1840'larda 34 kuruşken 1865'te 9 kuruşun altına indi; işçi sayısı 1860'larda 250 civarından 19. yüzyıl sonunda 450'yi aştı. Ayrıntılı hikâye için bk. ayrı kart: Feshâne'nin kuruluşu.\n"
    +"• İslimye dokuma fabrikası (1834): TDV, Bulgaristan'da bugün Sliven adını taşıyan İslimye'de 1834'te kurulmuş dokuma fabrikasının şehri Balkanlar'ın ilk endüstri şehri olarak öne çıkardığını yazar; ayrıca devlete ait bir dokuma fabrikasından ve meşhur aba imalâtından söz eder.\n"
    +"• İzmit Çuha Fabrikası (1845): Abdülmecid döneminde ordunun elbiselik kumaşı için açıldı, uzun süre hizmet verdi (TDV: izmit).\n\n"
    +"■ ÖTEKİLER\n"
    +"TDV Feshâne maddesi Feshâne'yi aynı tarihlerde devlet desteğiyle kurulan İslimye ve İzmit çuha fabrikaları, Bakırköy Veliefendi Basma Fabrikası, Hereke Kumaş Fabrikası ve Bursa İpek Fabrikası ile birlikte yerli dokuma sanayiinin çekirdeği olarak anar. Son üçünün kuruluş yılları okunan maddelerde `bulunamadı`; Hereke ve Bakırköy için TDV'de ayrı madde slug'ı ölü (HTTP 302) çıktı.\n\n"
    +"■ ORTAK ÖZELLİKLER\n"
    +"TDV'nin Feshâne anlatısından çıkan ortak çizgi: kuruluşun nedeni ordu ihtiyacı ve dış ticaret dengesiydi; yüksek kaliteli ham madde (ör. ince yapağı) ithal edildiği için ilk yıllar zararla kapandı; devlet fabrikadan 1864'te maliyet fiyatına mal almaya başlayınca kâr yalnız piyasa satışlarına dayandı; 1877'den itibaren Feshâne'nin bütün üretimi askerî ihtiyaca ayrıldı. Bu fabrikaların sivil sanayi burjuvazisi doğurup doğurmadığı TDV'de tartışılmıyor — kart bu soruya girmiyor.",
  kesinlik:"kesin",
  olay:["1833-06-01|Feshâne"],
  kaynak:"TDV: feshane (Tevfik Güran) · islimye (Machiel Kiel) · izmit (Metin Tuncel, İdris Bostan) · kagit (Osman Ersoy) · baruthane (Semavi Eyice)" },

// ── H-0027a · Klasik yüksek bürokrasi — nişancılık ve kalem ayağı ───────────
{ id:"teknik-klasik-burokrasi-nisanci-kalem-defterhane", tur:"teknik-bilimsel",
  kisa:"Padişahın imzası olan tuğrayı çekmek bir memuriyetti — nişancı, klasik devletin “kalem” ayağıydı ve 1836'da yerini bir bakanlığa bıraktı.",
  metin:"■ KLASİK YAPININ ÜÇ AYAĞI\n"
    +"Sadrazamdan kazaskere, defterdardan şeyhülislâma klasik devlet kademelerinin ana hatları ayrı bir kartta anlatılıyor (bk. kart: Osmanlı devlet kademeleri). Bu kart, orada olmayan parçayı — nişancılık ve onunla birlikte çalışan “kalem” düzenini — ekliyor. TDV'nin nişancı maddesine göre 15. yüzyıl başında mâlî işlemleri yürütmek üzere ayrı bir kurum olarak defterdarlık ortaya çıktı; Fâtih döneminde (1451-1481) bürokrasinin üçüncü ayağı Defterhâne-i Âmire kuruldu. Nişancı ise bürokratik işlemlere nezaret eden, padişahın tuğrasını çeken Dîvân-ı Hümâyun üyesiydi.\n\n"
    +"■ NİŞANCI NE YAPARDI\n"
    +"Başlıca görev ferman, nâme, ahidnâme ve berat gibi belgelerin üzerine padişahın tuğrasını çekmekti. 18. yüzyıl başına kadar devlet kanunlarını bilen ve gerektiğinde yeni kanun teklif eden görevli oldukları için “müftî-i kānun” adıyla da anılırlardı; Fâtih Kanunnâmesi'nin ve Kanûnî dönemi kanunlaştırma hareketinin hazırlanmasında nişancıların (Karamânî Mehmed Paşa, Celâlzâde Mustafa Çelebi) rolü büyüktür. Tahrir defterlerindeki tashihler yalnız nişancı tarafından yapılabilirdi; timar ve arazi anlaşmazlıklarında bu defterler kesin delil sayıldığından bu yetki önemliydi. Nişancı ve defterdarlar göreve seçildiklerinde diğer devlet ricâline verilen berat verilmez, yalnız hükümdarın şifahî emriyle tayin edilirlerdi.\n\n"
    +"■ KİMLER NİŞANCI OLURDU\n"
    +"16. yüzyılın başına kadar ilmiye zümresinden, inşâsı kuvvetli kişiler seçildi; sonra kalemiyede uzmanlaşmayla birlikte profesyonel bürokratlar tayin edilmeye başlandı. Bazı durumlarda nişancılık ile kubbe vezirliği tek kişide birleşirdi. 18. yüzyıldan itibaren nişancılıktan sadrazamlık gibi büyük mevkilere yükselme sona erdi; nişancılar yıllık tayin (şevval tevcîhatı) sistemine tâbi hâcegân rütbesindeki memurlar arasına girdi ve devletin “menâsıb-ı sitte” denilen altı yüksek mansıbı içinde (üç defterdar, nişancı, reîsülküttâb, defter emini) kâğıt üzerinde yer tuttu.\n\n"
    +"■ MERKEZ KAYARKEN NİŞANCININ YERİ\n"
    +"17. yüzyıl ortalarından itibaren Paşakapısı (Bâbıâli) Dîvân-ı Hümâyun'un yerine yeni idare merkezi olunca reîsülküttâb, sadâret kethüdâsı ve beylikçi en önemli bürokratlar oldu; TDV'ye göre reîsülküttâblık nişancının yerine bürokrasinin âmiri sayıldı, ama teşrifatta nişancının altında tutuldu. Defterhâne-i Âmire'nin başındaki defter emini de zamanla nişancıyla eşit hâle gelip onun işlerinden bir kısmını devraldı.\n\n"
    +"■ 1836 VE SONRASI\n"
    +"TDV, 1836'da nişancılığın kaldırılmasından sonra tuğra çekme işlerinin defter eminine verildiğini yazar; ancak 1836'da nişancılığın tamamen kaldırılıp kaldırılmadığı ya da yalnız tuğra işlerinin mi alındığı “açıkça belli değildir”. Tahrir defterlerindeki tashihlerin 1908'e kadar yine “tevkī‘” imzasıyla nişancılar tarafından yapıldığı görülür; bu, makamın imparatorluğun son zamanlarına kadar var olduğuna işaret eder. Yani kurum bir günde silinmedi; işlevleri Tanzimat'a giden yolda yeni bakanlıklara ve Bâbıâli'ye dağıldı. Bunun ayrıntısı için bk. ayrı kart: sultanın divanından nezâretlere (1836-1841).",
  kesinlik:"kesin",
  olay:["1838-02-28|Maliye"],
  kaynak:"TDV: nisanci (Erhan Afyoncu) · defterdar (Mübahat S. Kütükoğlu) · sadrazam (Mehmet İpşirli)" },

// ── H-0027b · Divandan nezâretlere: 1836-1841 ───────────────────────────────
{ id:"teknik-divandan-nezaretlere-maliye-nezareti", tur:"teknik-bilimsel",
  kisa:"Defterdarlık 28 Şubat 1838'de Maliye Nezâreti'ne dönüştü, ama bir yıl sonra geri geldi — kalıcı geçiş 1841'dir.",
  metin:"■ MERKEZ BÂBIÂLİ'YE KAYMIŞTI\n"
    +"17. yüzyıldan itibaren fiilî yetki Dîvân-ı Hümâyun'dan sadrazam kapısına (Bâbıâli) geçmiş, reîsülküttâb ve Divan kâtipleri sarayı bırakıp oraya yerleşmişti (bk. kart: Osmanlı idari yapısı ve değişimi). TDV Bâbıâli'yi 18. yüzyıl sonlarından itibaren Paşa Kapısı ve Sadâret Dairesi, nezâretlerin kurulmasından sonra da Osmanlı hükümeti anlamında kullanılan bir tabir olarak tanımlar. Tanzimat öncesi bu yapı II. Mahmud'un elinde bakanlıklara (nezâret) dönüştü.\n\n"
    +"■ 11 MART 1836: İLK NEZÂRETLER\n"
    +"II. Mahmud'un 23 Zilkade 1251 (11 Mart 1836) tarihli hatt-ı hümâyunuyla reîsülküttaplık Hariciye Nezâreti'ne, sadâret kethüdâlığı da Dahiliye (Umûr-ı Mülkiyye) Nezâreti'ne dönüştürüldü. Umûr-ı Mülkiyye'nin adı 9 Ekim 1837'de Dahiliye Nezâreti olarak değişti (Âkif Paşa nâzır oldu). Nezâretlerin ortak toplantı yeri Meclis-i Vükelâ'ydı: belgelerde Encümen-i Mahsûs, Meclis-i Meşveret gibi pek çok adla geçen, kuruluş tarihi belli olmayan (muhtemelen Meclis-i Meşveret'ten kademeli bir geçişle oluşan) bu meclis başvekil veya sadrazam başkanlığında toplanır, nezâretler arası koordinasyonu sağlar, hazırlanan tasarıları tezkireyle padişahın onayına sunardı. 1838'de kısa bir süre “sadrazam” yerine “başvekil” tabiri kullanıldı.\n\n"
    +"■ DEFTERDARLIKTAN MALİYE NEZÂRETİNE — TDV İKİ ANLATI VERİYOR\n"
    +"• Cerîde Nezâreti maddesi: “28 Şubat 1838 tarihinde defterdarlık tabirinin kullanılması yasaklanarak Maliye Nezâreti kuruldu”; Bâb-ı Defterdârî kalemleri yeniden düzenlendi, Cerîde ve Mevkūfat kalemleri birleştirildi.\n"
    +"• Defterdar maddesi (Cezar'a dayanır): 1837 sonlarında Hazîne-i Âmire ile Darphâne Hazinesi birleştirilince başdefterdarlık kaldırıldı; Şubat 1838'de iki hazine ayrılıp Hazîne-i Âmire Mansûre Hazinesi'yle birleştirilerek defterdarlık Maliye Nâzırlığı hâline getirildi; ertesi yıl hazineler yeniden ayrıldığından Hazîne-i Âmire'nin başına yine defterdar geçirildi. 1841'de iki hazine bu kez kesin olarak birleşince defterdarlık müessesesi yerini Maliye Nezâreti'ne bıraktı.\n"
    +"İki anlatı çelişmiyor, ölçek farklı: 28 Şubat 1838 ilk adımdır, ama bir yıl sonra geri alındı; kalıcı Maliye Nezâreti 1841'dir. TDV bunu tek cümlede uzlaştırmaz; hangi tarihin “kuruluş” sayılacağı okuyucunun tercihidir.\n\n"
    +"■ NE DEĞİŞTİ\n"
    +"Klasik düzende mâlî işleri Rumeli ve Anadolu defterdarları (ilerleyen yüzyıllarda ek defterdarlıklar) yürütür, defterdarlar Dîvân-ı Hümâyun'a katılırdı. Yeni düzende tek bir nâzır ve Bâbıâli'de toplanan Meclis-i Vükelâ vardı. Bu değişikliğin bir de yan etkisi kayıtlarda görülür: defterdarlığın kalemleri birleştirilirken Cerîde Nezâreti'nin nüfus ve vergi kayıtlarını tutma görevi de yeniden düzenlendi (bk. kart: ilk nüfus sayımı).\n\n"
    +"■ YÜKSEK BÜROKRASİ NASIL ŞEKİLLENDİ\n"
    +"TDV Hariciye Nezâreti maddesi, kökeni reîsülküttâblığa dayanan bu makamı “yüksek kademeli kalemiye memuriyetleri” arasında sayar ve III. Selim'den itibaren Avrupa'da elçilik ve konsolosluk açma girişimlerini, Küçük Kaynarca'dan sonra Avrupa modellerine uygun düzenlemelerin zorunlu görülmesine bağlar. Yani 1836-1841 arasında olan, klasik makamların (reîsülküttâb, sadâret kethüdâsı, defterdar) işlevlerini koruyarak yeni bakanlık adları altında yeniden dağıtılmasıdır; TDV bunu tek bir “yeni bürokrat sınıfı doğdu” cümlesiyle özetlemez — bu okuma sayfanın yorumlamasıdır.",
  kesinlik:"tartismali",
  olay:["1838-02-28|Maliye"],
  kaynak:"TDV: defterdar (Mübahat S. Kütükoğlu) · ceride-nezareti (Cevdet Küçük) · dahiliye-nezareti (Mehmet İpşirli) · hariciye-nezareti (Carter Vaughn Findley) · meclis-i-vukela (Ali Akyıldız) · sadrazam (Mehmet İpşirli)" },

// ── H-0028 · Meclis-i Vâlâ-yı Ahkâm-ı Adliyye ───────────────────────────────
{ id:"teknik-meclis-i-vala-yi-ahkam-i-adliyye", tur:"teknik-bilimsel",
  kisa:"Tanzimat'ın kanunlarını hazırlayan meclis, aynı zamanda Tanzimat'a aykırı davranan paşaları yargılayan mahkemeydi — otuz yıl sonra ikiye bölündü, iki parçası Danıştay ve Yargıtay'ın temeli oldu.",
  metin:"■ KURULUŞ\n"
    +"Meclis-i Vâlâ 24 Mart 1838'de kuruldu; başkanlığına eski seraskerlerden Koca Hüsrev Paşa getirildi, beş üyesi vardı. Padişah ve şeyhülislâmın huzurunda yapılan törenden sonra 31 Mart 1838'de çalışmaya başladı; çalışma yeri Gülhane Kasrı'ydı. Görevi, “tanzîmât-ı hayriyye, tanzîmât-ı mülkiyye” adı verilen reformları gerçekleştirmek için kanun ve nizamları hazırlamak, Dâr-ı Şûrâ-yı Bâbıâlî ve Dâr-ı Şûrâ-yı Askerî'nin düzenlediği mazbatalara son şeklini vermek ve çıkardığı kanunların uygulanıp uygulanmadığını denetlemekti. İç tüzüğü üyelerin görüşlerini serbestçe söylemesini ve kararların oy çokluğuyla alınmasını öngörüyordu.\n\n"
    +"■ ÖNCESİNDE YAPI NEYDİ\n"
    +"Klasik düzende karar Dîvân-ı Hümâyun'da, sonra Bâbıâli'de sadrazamın divanında verilirdi (bk. kart: Osmanlı idari yapısı ve değişimi); yasama ile yargı ayrı kurumlar değil, aynı divanın işiydi. TDV, Meşveret Meclisi dışında “kurumsallaşmış meclis” uygulamasının yaygın olmadığını, bu yüzden ilk yıllarda meclisin çalışmalarının aksadığını yazar: üyeler eski memuriyetlerini de sürdürüyordu, rütbe farkı yüzünden düşük rütbeli üyeler üstlerinin yanında fikir söyleyemiyordu; rütbeler eşitlenip üyelere ayrı nişanlar verilerek teşrifattaki yerleri belirlendi.\n\n"
    +"■ GÜLHANE SONRASI: TANZİMAT'IN MERKEZİ\n"
    +"Dâr-ı Şûrâ-yı Bâbıâlî ile yetki karışıklığı yüzünden 12 Ağustos 1839'da o meclis kaldırıldı, üyelerinin bir kısmı Meclis-i Vâlâ'ya aktarıldı. Gülhane Hatt-ı Hümâyunu'ndan sonra reform tespiti ve görüşmesi görevi Meclis-i Vâlâ'ya verildi, üye sayısı artırıldı; 8 Mart 1840'ta Bâbıâli'de yaptırılan yeni binaya taşındı. TDV, meclisin Tanzimat'a aykırı davranan yüksek rütbeli devlet adamlarını yargılama görevini de vurgular: Hüsrev Paşa, eski Dahiliye nâzırı Âkif Paşa, Nâfiz Paşa, Tâhir Paşa ve Hasib Paşa mecliste yargılanıp cezalandırıldı; muhalifler “Tanzîmât-ı Hayriyye'ye mugayir davranma” ithamıyla susturuldu. TDV'nin özeti: meclis Tanzimat'ın “hâmî-i hakîkî”si ve Hariciye Nezâreti'yle beraber reformların planlayıcısı ve denetleyicisi oldu.\n\n"
    +"■ MODERN KARŞILIĞI NE\n"
    +"Tek bir kurumla eşlemek zor, çünkü Meclis-i Vâlâ üç işi birden yapıyordu: kanun ve nizam hazırlamak, uygulamayı denetlemek ve üst bürokratları yargılamak. Zamanla bu işler ayrıldı: 26 Eylül 1854'te Meclis-i Âlî-i Tanzîmat kuruldu ve yasama yetkisini devraldı; Meclis-i Vâlâ küçük memurların azil-nasbı, veraset, inzibatî davalar, arazi anlaşmazlıkları gibi işlere baktı. 15 Temmuz 1861'de iki meclis Meclis-i Ahkâm-ı Adliyye adıyla birleştirildi (başkan Keçecizâde Fuad Paşa). 1868 Mart'ında (TDV'nin iki maddesi 5 ve 6 Mart tarihini veriyor) bu meclis Şûrâ-yı Devlet (başkan Midhat Paşa) ve Dîvân-ı Ahkâm-ı Adliyye (başkan Ahmed Cevdet Paşa) olarak ikiye ayrıldı. TDV bu düzenlemeyle yasama ile yargının birbirinden ayrıldığını, Şûrâ-yı Devlet'in Danıştay'ın, Dîvân-ı Ahkâm-ı Adliyye'nin Yargıtay'ın temelini oluşturduğunu yazar.\n\n"
    +"■ ÜYELERİ NASIL GELİRDİ\n"
    +"TDV'ye göre üyelik “mansıp” şeklinde verilirdi ve bir dönem iltimasla üye tayini yüzünden üye sayısı kırka çıkmış, kargaşa yüzünden hazırlanan mazbatalar imzalanamaz olmuştur; ardından sayı on dörde indirilmiştir (1858). Yani bugünkü anlamda seçimle gelen bir meclis değil, atamayla kurulan bir kuruldu (sayfanın yorumlaması: TDV'nin ifadelerinden çıkarım).",
  kesinlik:"kesin",
  olay:["1838-03-24|Meclis-i"],
  kaynak:"TDV: meclis-i-vala-yi-ahkam-i-adliyye (Ali Akyıldız) · sura-yi-devlet (Ali Akyıldız) · meclis-i-vukela (Ali Akyıldız) · ceride-nezareti (Cevdet Küçük)" },

// ── H-0036 · Kâime — Osmanlı'nın ilk kâğıt parası ────────────────────────────
{ id:"teknik-kaime-kagit-para", tur:"teknik-bilimsel",
  kisa:"İlk Osmanlı banknotu el yazısıyla basıldı, faiz getirdi, halk sevmedi ve kalpazanların ilk hedefi oldu — dünyada ise kâğıt paranın öyküsü bin yıl öncesine gider.",
  metin:"■ KÂİME NEDİR\n"
    +"Kāime sözlükte “ayakta duran, bir şeyin yerine geçen” demektir; sikkeyi temsilen dolaştığı için bu adı almıştır. Osmanlı maliyesinde daha önce uygulanan esham sisteminin geliştirilmiş biçimi olup eshamdan farkı beratsız kullanılmasıdır (esham için bk. kart: iltizam-mâlikâne-esham zinciri).\n\n"
    +"■ 1840'TA NASIL ÇIKTI\n"
    +"Tanzimat'ın ilk yıllarında maliyeye gelir bulma tartışılırken teklif, sonradan şeyhülislâm olacak Ârif Hikmet Bey'den geldi ve kabul edildi. Para ihtiyacı acil olduğu için kāimeler kalıbı çıkarılıp basılmayı beklemeden el yazısıyla piyasaya sürüldü. Toplam 160.000 lira (32.000 kese) tutarındaki ilk kāimeler Maliye Nâzırı Sâib Paşa zamanında “muhtemelen Haziran 1840'ta” çıkarıldı (TDV ay konusunda da kesin değildir). Tedavül süresi sekiz yıl, faizi yılda %12,5'ti; faiz iki taksitte ödeniyordu. Faiz, kāimeyi dolaşan eshamdan daha cazip kılmak içindi. Kāimenin karşılığı yoktu; yalnız ödenecek faizlerine İstanbul gümrüğü malından karşılık gösterildi.\n\n"
    +"■ NASIL İŞLEDİ\n"
    +"Halk böyle bir uygulamaya alışık olmadığı için kāimeler olumlu karşılanmadı; el yazısı olduğundan hemen kalpazanların dikkatini çekti, sahtesini ayırt etmek kolay değildi. Bir süre sonra taşrada tedavülü yasaklandı. 1841 yılbaşından itibaren iki yıl içinde el yazısı kāimeler matbularıyla değiştirildi; taklit edilmesin diye 1844 ve 1847'de farklı biçimlerde yeniden basıldı. Faiz 1843'te %12,5'ten %10'a, sonra %6'ya indirildi. 1851'de 100.000 liralık faizli kāime çekilip yerine 20 kuruşluk FAİZSİZ kāime çıkarıldı — TDV bunu kāimenin gerçek anlamda bir alışveriş aracı olması bakımından önemli bulur. Mart 1854'te Kırım Savaşı için yalnız savaş bölgesinde geçerli 10 ve 20 kuruşluk ordu kāimeleri hazırlandı (856.250 lira, 1857'de çekildi); 1856'da piyasadaki faizli kāime 1.720.000 liraya ulaştı. TDV, devletin kāimeyi çok defa kamuoyundan gizli çıkardığını da yazar.\n\n"
    +"■ İLK UYGULAMANIN SONU: 1861-1862\n"
    +"Kaldırma girişimleri (1848 “iâne-i umûmiyye” zorunlu yardımı, 1858 sterlin istikrazı) toplanan paraların başka işlere harcanmasıyla başarısız oldu. 13 Aralık 1861'de İstanbul'da kāimenin fiyatı olağanüstü düştü ve piyasada geçmez oldu; esnaf ve tüccar panik içinde dükkânlarını kapadı, camilerde halka dükkân açmaları telkin edildi. Mâlî konularda tek yetkili olarak sadrazamlığa getirilen Fuad Paşa'nın çalışmasıyla İngiltere'den alınan borçla kāimenin kaldırılmasına karar verildi: değerin %40'ı nakit, kalanı %6 faizli eshâm-ı cedîde olarak ödenecekti; 1862 Eylül başında tedavülden kaldırıldığı resmen ilân edildi.\n\n"
    +"■ İKİNCİ UYGULAMA: 1876-1878\n"
    +"Balkan karışıklıkları ve 1877-1878 Osmanlı-Rus Savaşı'nı finanse etmek için yeniden başvuruldu. 1863'te kāime çıkarma yetkisi ve tekeli Bank-ı Osmânî-yi Şâhâne'ye devredilmişti. Bu sefer takım ve seri numarası konuldu; önce cephede, 28 Ağustos 1876'da İstanbul'da piyasaya sürüldü. Toplam kāime miktarı 16 milyon liraya çıktı; 1 Nisan 1878'de çalışmaya başlayan komisyon toplanan kāimeleri meydanlarda yaktı. Devletin 1879 gelirinin neredeyse kāime kadar (18,5 milyon lira) olması TDV'ye göre çaresizliğin ölçüsüdür.\n\n"
    +"■ KÂĞIT PARA DÜNYADA: DÖRT ÖRNEK\n"
    +"• Çin (Song hanedanı): kâğıt para 10. yüzyıl sonlarında Sichuan'da özel finans firmalarının sikke, ipek ve başka değerler karşılığında verdiği “jiaozi” ile başladı; firmalar iflas edince devlet 1023'te basımı devraldı. 13. yüzyılda istilâ tehdidi askerî harcamaları artırınca Song'un aşırı miktarda basması ciddi değer kaybına yol açtı (Richard von Glahn, Hoover Enstitüsü).\n"
    +"• İsveç: Avrupa'nın ilk banknotları, 1657'de kurulan Stockholms Banco tarafından 1661'de çıkarıldı. Sebep ağır bakır plaka paranın (10 daler'lik bir parça yaklaşık 20 kg) taşınamazlığı ve bakırın gümüş karşısında değer kaybıydı; Johan Palmstruch “kreditivsedlar” çıkarma izni istedi. Notlar yuvarlak meblağlıydı, hamiline ve talep üzerine ödenebilirdi (Belçika Ulusal Bankası Müzesi).\n"
    +"• İngiltere: Bank of England 1694'te devlete bankerlik yapmak ve Fransa'ya karşı savaşı finanse etmek için özel banka olarak kuruldu; 1725'ten önce banknotlar el yazısıydı, 1725'te 20 sterlin ve üzeri için kısmen basılı notlar çıkarıldı (Bank of England).\n"
    +"• Fransa: assignat, Aralık 1789'da kilisenin müsadere edilen arazilerine dayanan 400 milyon livrelik ilk ihraçla çıktı; her yeni ihraç değer kaybını artırdı, 1793'te neredeyse geçmez oldu, Şubat 1796'da basım klişeleri halkın önünde imha edildi (New York Fed, Liberty Street Economics).\n"
    +"Çin ve Fransa örneklerinde kaynaklar aşırı basımın değer kaybına yol açtığını yazıyor; Osmanlı kāimesinde de TDV 1861 ve 1877 düşüşlerini anlatıyor. Bu üç durumu birbirine bağlayan bir çıkarım — karşılıksız ve gizlice artırılan basım güveni bitirir — sayfanın yorumlamasıdır; okunan kaynakların hiçbiri bu karşılaştırmayı Osmanlı için yapmıyor.",
  kesinlik:"kesin",
  olay:["1840-01-01|kâime"],
  kaynak:"TDV: kaime (Ali Akyıldız) · esham (Mehmet Genç) · Richard von Glahn, “The Rise and Demise of Paper Money in Imperial China”, Hoover Institution (hoover.org/research/rise-and-demise-paper-money-imperial-china) · NBB Museum (Belçika Ulusal Bankası): “The first notes from a European bank, a Swedish product” (museum.nbb.be) · Bank of England: About > History (bankofengland.co.uk/about/history) · New York Fed Liberty Street Economics, “Crisis Chronicles: The Collapse of the French Assignat…” (2014)" },

// ── H-0043a · Şirket-i Hayriyye öncesi Boğaz ve Haliç ulaşımı ────────────────
{ id:"teknik-bogaz-ulasimi-sirket-i-hayriyye-oncesi", tur:"teknik-bilimsel",
  kisa:"Boğaz'ın iki yakası arasında vapur yokken altı kürekli peremeler ve pazar kayıkları vardı; Şirket-i Hayriyye ise devletin “anonim şirket nedir?” sorusuna verdiği ders niteliğinde bir girişimdi.",
  metin:"■ BOĞAZ'DA VAPURDAN ÖNCE\n"
    +"TDV Boğaziçi maddesi şöyle anlatır: eskiden Boğaziçi'nde ulaşım altı kürekle çekilen peremeler ve geliri bir hayır eserine vakfedilen pazar kayıklarıyla sağlanırdı; Yuşa tepesi, Kanlıca, Çubuklu, Beykoz gibi mesirelere halk pazar kayıklarıyla giderdi. Padişahlar süslü saltanat kayıklarıyla Boğaz'da gezintiye çıkardı; bu sırada kayığı bostancıbaşı yönetir, kıyıdaki yalı, bahçe ve kasırlar hakkında padişaha bilgi verirdi. Yani TDV'nin cümlesi Boğaz'da vapurdan önce kürekle yürüyen taşıtların (perem, pazar kayığı) kullanıldığını gösteriyor; hat, ücret ve sefer sayısı gibi ayrıntılar okunan maddelerde `bulunamadı`.\n\n"
    +"■ 1851: İLK VAPUR VE ŞİRKET\n"
    +"Tanzimat'ın ilânı ve Kırım Harbi'nden sonra Boğaziçi'ne rağbet ve seyrüsefer artınca Tersâne-i Âmire vapurlarından biri Boğaziçi'nde oturan devlet memurlarına tahsis edildi; ama yalnız sabah-akşam çalışan bu seferler ihtiyacı karşılamadı. Bunun üzerine dönemin sadâret müsteşarı Keçecizâde Fuad Paşa ile Ahmed Cevdet Paşa'nın önerisiyle Şirket-i Hayriyye kuruldu (TDV Boğaziçi maddesi “1851” yazar). Şirketin açıkça belirtilen amacı, Avrupa'da büyük servet ve memuriyet sağlayan “anonim” şirketlere bir örnek göstermek ve Boğaz'da oturanların şehre gidiş gelişini kolaylaştırmaktı.\n\n"
    +"■ ŞİRKETİN YAPISI\n"
    +"Lâyiha Abdülmecid'ce onaylandıktan sonra çıkan fermanla İstanbul ile Boğaz'ın Anadolu ve Rumeli kıyısındaki iskeleler arasında vapur işletme imtiyazı ve tekeli 25 yıl için şirkete verildi; Haliç imtiyaza dahil edilmedi. Sermaye 45.000 lira olarak belirlenip her biri 30 liralık 1500 hisseye bölündü, sonra 500 hisse daha çıkarıldı. 7 Aralık 1850 itibarıyla Abdülmecid, annesi Bezmiâlem Vâlide Sultan, vükelâ, memurlar ve sermayedarlar 830 hisse almıştı; Vak‘anüvis Lutfi Efendi, Mustafa Reşid Paşa'nın memurları hisse almaya teşvik ettiğini, birçoğunun onun hatırı için senet aldığını, hatta memurların hisse için sarraf ve bankerlere borçlandığını yazar. Kamuoyu anonim şirkete alışık olmadığı için yönetim biçimini belirlemekte sorun çıktı; işletme 3 Ocak 1852'de altı yıllığına iltizama verildi, İngiltere'den getirilen dört yandan çarklı vapur 1852 ilkbaharında sefere başladı. İlk idare meclisi 27 Haziran 1854'te kuruldu. Şirketin bilinen ilk nizamnâmesi 31 Aralık 1872 tarihlidir. Tarih notu: TDV, lâyihanın onayını Takvîm-i Vekāyi sayı 436'ya (10 Muharrem 1267) dayandırır; aynı maddede 10 Rebîülevvel 1268 = 3 Ocak 1852 eşleşmesi verildiği için geri sayınca 10 Muharrem 1267 miladî 1850'nin Kasım ayına düşer (sayfanın hesabı). TDV Boğaziçi maddesi ise kuruluşu “1851” yazar; kuruluş yılı bu yüzden 1850 ya da 1851 diye anılabilir.\n\n"
    +"■ SUR İÇİNDEN BEYOĞLU'NA: HALİÇ\n"
    +"Şirketin imtiyazı Haliç'i kapsamıyordu; iki yaka arası Haliç'ten geçilirdi. TDV Haliç maddesine göre iki yakayı bağlayan ilk köprü 1836'da tamamlanan Hayrâtiye Köprüsü'ydü; 1453'te Fâtih'in kurduğu geçici fıçılı köprü uzun ömürlü olmamıştı, Leonardo da Vinci ve Michelangelo'nun köprü yapımı için çağrılması düşünülmüş ama sonuçlanmamıştı. Bu, köprülerden önce Haliç'in kayıkla geçildiği anlamına gelir (sayfanın yorumlaması: TDV bu geçişi kayıkçılık diye açıkça yazmıyor, ama sonraki köprülerin sandalcıları etkilediğini anlatıyor; bk. kart: Galata Köprüsü). 1836-1845 arasındaki ulaşımın ayrıntısı (kaç kayık, hangi iskele, ücret) okunan maddelerde `bulunamadı`.",
  kesinlik:"kesin",
  olay:["1851-01-01|Şirket-i Hayriyye"],
  kaynak:"TDV: sirket-i-hayriyye (Ali Akyıldız) · bogazici (M. Tayyib Gökbilgin; Boğaziçi'nde Nakil Vasıtaları ve Mesireler bölümü) · halic (Semavi Eyice)" },

// ── H-0043b · Galata Köprüsü ─────────────────────────────────────────────────
{ id:"teknik-galata-koprusu-ne-zaman-acildi", tur:"teknik-bilimsel",
  kisa:"“Galata Köprüsü ne zaman açıldı?” sorusuna TDV'nin iki maddesi iki yıl veriyor — 1844 ve 1845 — açılış gününü ise hiçbiri yazmıyor.",
  metin:"■ AKLA GELEN SORU: NE ZAMAN AÇILDI\n"
    +"TDV'nin iki maddesi farklı yıl verir: Bezmiâlem Vâlide Sultan maddesi “Galata Köprüsü (Cisr-i Cedîd veya Vâlide Köprüsü)” başlığı altında köprünün 1844'te ahşap dubalar üzerinde yüzer olarak yaptırıldığını ve on sekiz yıl hizmet verdiğini yazar; Haliç maddesi ise “1845'te Karaköy ile Eminönü arasında yine dubalı ve ahşap olarak Tersâne-i Âmire'de yapılan ilk Karaköy Köprüsü kurulmuştur” der (aynı köprü). İkisini uzlaştıran bir cümle yok. Sayfanın yorumlaması: “yaptırıldı” 1844'te verilen emri, “kurulmuştur” 1845'teki hizmete girişi anlatıyor olabilir, ama TDV bunu yazmaz. Açılış gününün bulunduğu bir kayıt okunan iki maddede yok: `bulunamadı`. TDV'nin kendi başlığı (galata-koprusu) ayrı madde değil, HALİÇ maddesine yönlendirme (“bk.”).\n\n"
    +"■ KÖPRÜLERİN SIRASI (TDV Haliç, Semavi Eyice)\n"
    +"• Hayrâtiye Köprüsü (Cisr-i Atîk), 1836: Haliç üzerinde iki yakayı bağlayan İLK köprü; II. Mahmud döneminde Tersane'de yaptırıldı, Azapkapı ile Unkapanı arasında, 600 arşın uzunluğunda; açılış töreninde padişah atla üzerinden geçti, geçiş parası alınmıyordu.\n"
    +"• 1845 (TDV Bezmiâlem: 1844): Karaköy-Eminönü arası ilk ahşap dubalı köprü; yaklaşık 500 m olduğu tahmin edilir; on sekiz yıl hizmet etti. Kurucusu, Bezmiâlem Vâlide Sultan'dır (TDV).\n"
    +"• 1863: yine ahşaptan ikinci Karaköy Köprüsü; 1875'e kadar hizmet verdi.\n"
    +"• 1863: Ayvansaray-Pîrîpaşa arasında sarraf Mıgırdiç Cezayirliyan'ın ahşap kazıklar üzerine yaptırdığı, geçenlerden para alınan “Yahudi Köprüsü” — kayıkla taşımacılık yapan sandalcılar işleri zarar gördüğü için açılışından on gün sonra yaktı.\n"
    +"• 1870-1875: demirden yeni köprü için Fransız Forges et Chantiers de la Méditerranée ile (1870) ve İngiliz George Wells'in temsilcisiyle (1872) yapılan anlaşmalar; Fransız-Alman savaşı yüzünden gecikti. TDV'ye göre Fransız firmasının köprüsü 1875'e doğru Azapkapı-Unkapanı Köprüsü olarak kuruldu (480 m, 26 duba, ihale 135.000 altın lira; 1912'de sökülüp Eyüp önlerine götürüldü); İngiliz firmanın 480 m uzunluğunda, 24 dubalı demir köprüsü üçüncü Karaköy Köprüsü olarak 1912'ye kadar Karaköy-Eminönü'nde durdu (bedel 95.000 altın lirayla anlaşılmışken yer değişikliği yüzünden 105.000 altın liraya çıktı).\n"
    +"• 27 Nisan 1912: Alman M.A.N. firmasının demir köprüsü (237.000 altın lira) törenle hizmete girdi; altında dükkân ve gazinolar, geçenlerden para alınması için özel jetonlar vardı. Eski köprü Unkapanı-Azapkapı arasına çekilip 28 yıl daha kullanıldı, 12 Şubat 1936 gecesi kar fırtınasında kopup dağıldı.\n\n"
    +"■ KÖPRÜ GELİNCE KİM KAYBETTİ\n"
    +"TDV, köprü geldikten sonra bile “köprüyü yaya geçmek istemeyenlerin” bindiği Eminönü-Karaköy kayık seferlerinin yakın tarihlere kadar sürdüğünü, Haliç'te köprülerin, vapurların ve fabrikaların Haliç'in gezinti-sayfiye özelliğini ortadan kaldırdığını yazar. Sandalcıların Yahudi Köprüsü'nü yakması, kayıkçılıkla köprü arasındaki rekabetin somut ifadesidir.",
  kesinlik:"tartismali",
  olay:["1851-01-01|Şirket-i Hayriyye"],
  kaynak:"TDV: halic (Semavi Eyice, bölüm: Haliç Köprüleri) · bezmialem-valide-sultan (M. Hüdai Şentürk; Galata Köprüsü başlığı) · galata-koprusu (bk. HALİÇ yönlendirmesi)" },

// ── H-0043c · Tünel ──────────────────────────────────────────────────────────
{ id:"teknik-tunel-karakoy-beyoglu-1875", tur:"teknik-bilimsel",
  kisa:"Bir Fransız turist 1867'de Galata yokuşunda yürüyen kalabalığı görüp yeraltı demiryolu tasarladı — Tünel 17 Ocak 1875'te açıldı.",
  metin:"■ NEDEN YAPILDI\n"
    +"Karaköy (Galata) bankacılık ve ticaret merkeziydi, Beyoğlu (Pera) eğlence ve sosyal hayatın; ikisini Yüksekkaldırım Yolu bağlıyordu. İTÜ Makine Fakültesi'nden bir makale Fransız mühendis Eugène-Henri Gavand'ın 1867'de İstanbul'a turist olarak geldiğini ve bu yolda çok sayıda insanın yürüdüğünü gördüğünü anlatır. Aynı makale, Gavand'a dayanarak günde yaklaşık 40.000 kişinin yürüdüğünü, yolun eğiminin %24, genişliğinin altı metre (yer yer dört metre) olduğunu aktarır. Gavand yer altı bir asansör biçiminde demiryolu önerdi.\n\n"
    +"■ İMTİYAZ VE AÇILIŞ\n"
    +"Proje Şûrâ-yı Devlet'te görüşüldü ve imtiyaz 10 Haziran 1869 tarihli iradeyle verildi; sözleşme Nâfia Nâzırı Dâvud Paşa ile Gavand arasında 6 Kasım 1869'da imzalandı. İmtiyaz süresi 42 yıl, hasılattan devlete pay %1,5, inşaat için devletten nakit yardım yok. 17 Ocak 1875'te açılış töreni yapıldı; ertesi gün halka açıldı (Gavand törende yoktu, makale bunu kırgınlığına yorar). Tünel'in uzunluğu 550,80 m, içindeki demiryolu 626 m; ortalama yolculuk süresi 2,5 dakika, toplam maliyet 4.125.554 frank; vagonlar halatla çekiliyor, halat düzeni 1968'e kadar Beyoğlu istasyonundaki sabit buhar makinesiyle çalıştı. Bilet 1. mevki tek gidiş 2 kuruş, 2. mevki 1 kuruştu; ilk 14 günde (18-31 Ocak) 75.000 yolcu taşındı (İTÜ makalesi).\n\n"
    +"■ TDV NE DİYOR\n"
    +"TDV'de TÜNEL diye ayrı bir madde `bulunamadı` (slug HTTP 302). Yalnız iki maddede geçiyor ve ikisi tarih konusunda farklı: Beyoğlu Mezarlığı maddesi Fransız mühendisi Henri Gavand'ın yaptığı Tünel'in 17 Ocak 1875'te hizmete açıldığını, kazı sırasında Gavand'ın mezarlığa zarar vermemeye özen gösterdiğini yazar; Galata maddesi ise mezarlığın yukarı ucuna gelen kabirlerin Tünel 1876'da açılırken kaldırılmasının bir mesele olduğunu söyler. 17 Ocak 1875, yukarıdaki makaledeki tarihle aynıdır; 1876 ise Gavand'ın planlarını Paris'te yayımladığı (1876) yıla denk geliyor — sayfanın gözlemi, TDV bu bağı kurmaz.\n\n"
    +"■ “DÜNYANIN İKİNCİ EN ESKİ METROSU” MU\n"
    +"İTÜ makalesi Tünel'i Londra'dan sonra dünyanın ikinci en eski yeraltı kentsel demiryolu olarak niteler. Böyle sıralamalar “yeraltı”, “metro” ve “füniküler” tanımına göre değişebilir; TDV'de bir sıralama yok, kart makalenin ifadesini aktarıyor.\n\n"
    +"■ 1869: ÜÇ “T”\n"
    +"Makale, 1869'u İstanbul toplu taşımacılığında dönüm noktası sayar: aynı yıl tren (Train), tramvay (Tram) ve Tünel (Tunnel) imtiyazları verildi. Sayfanın yorumlaması: Tünel'in yeni ulaşım araçlarından biri olarak birlikte anılması, Şirket-i Hayriyye'nin (1851) açtığı çizginin devamı sayılabilir.",
  kesinlik:"kesin",
  olay:["1851-01-01|Şirket-i Hayriyye"],
  kaynak:"TDV: beyoglu-mezarligi (Necdet İşli) · galata (Semavi Eyice, İlber Ortaylı) · Eren Kayaoğlu, Adem Candaş, Y. Ziya Kocabal, C. Erdem İmrak (İTÜ Makine Mühendisliği Fakültesi), “Early Application of Underground Funicular ‘Tunnel’ in Istanbul” (transport.itu.edu.tr, 2014) · TDV'de TÜNEL maddesi: bulunamadı" },

// ── H-0047 · Dış borç: klasik dönemde var mıydı ───────────────────────────────
{ id:"teknik-klasik-donemde-dis-borc-var-miydi", tur:"teknik-bilimsel",
  kisa:"Osmanlı yöneticileri dışarıdan borç almaktan şiddetle kaçındı; 1850-51'de imzalanan ilk anlaşma bile onaylanmadı — ilk borç sözleşmesi 24 Ağustos 1854'te yapıldı.",
  metin:"■ SORUNUN CEVABI\n"
    +"TDV'nin Düyûn-ı Umûmiyye maddesi soruya doğrudan yanıt verir: Osmanlı devlet adamları sık sık ortaya çıkan para darlığına ve bütçe açıklarına rağmen dışarıdan borç para almaktan şiddetle kaçınmışlardır; Tanzimat'tan önce bu konudaki birkaç teşebbüs de başarısız kalmıştır. Yani dış borç modern zamanın, Tanzimat sonrasının meselesidir. “Klasik dönem” için (yaklaşık 15-17. yüzyıl) yabancı bir devlet ya da bankadan alınan bir borca ait kayıt okunan maddelerde `bulunamadı`; bu, ‘hiç olmadı’ demek değildir, yalnız bu okumanın bulgusudur.\n\n"
    +"■ AÇIĞI İÇERİDEN KAPATMAK: ÜÇ ARAÇ\n"
    +"Devlet nakde ihtiyaç duyduğunda kendi tebaasına başvururdu:\n"
    +"• Esham (1775-1860'lı yıllar): TDV'nin “iç borçlanma sistemi” dediği bu usulde mukātaa gelirlerinin “faiz” denilen bir bölümü “sehim” denilen dilimlere bölünüp özel şahıslara peşin bir bedel (muaccele) karşılığında ömür boyu gelir olarak satılırdı. Kadın erkek, Müslim gayrimüslim, askerî veya reâyâ her tebaa sehim alabilirdi (ayrıntı için bk. kart: iltizam-mâlikâne-esham zinciri).\n"
    +"• Sarraflar: devlet adamlarına borç veren, 1760'lardan itibaren özellikle savaş yıllarında kısa vadeli borçlarla hazineyi finanse eden, iltizam ve mâlikânede kefil olan bankerlerdi. 18. yüzyılın son çeyreğinde devlete açtıkları krediler geri ödenmediği için bazı sarraflar iflas etti (TDV: sarraflik).\n"
    +"• Kâime (1840): karşılıksız ve faizli iç kâğıt para (bk. kart: kâime).\n\n"
    +"■ İLK DENEME: 1850-51\n"
    +"Mustafa Reşid Paşa, 1850-51 mâlî yılında hazinenin maaşları bile ödeyemeyecek duruma gelmesi üzerine ilk dış borç anlaşmasını imzaladı. Sultan Abdülmecid'in eniştesi Fethi Ahmed Paşa ile Damad Mehmed Ali Paşa dış borçlanmanın doğuracağı tehlikeleri padişaha anlatınca anlaşma onaylanmadı; hazine 2.200.000 lira tazminat ödeyerek sözleşmeyi feshetti.\n\n"
    +"■ 24 AĞUSTOS 1854: İLK SÖZLEŞME\n"
    +"Rusya'nın Akdeniz ticaretini ele geçirmesinden çekinen İngiltere ve Fransa'nın desteğiyle başlayan Kırım Harbi (1853-1856) maliyeyi daha da sarstı; Osmanlı yöneticileri İngiltere ve Fransa'nın kredi tekliflerini kabul ederek ilk borç anlaşmasını 24 Ağustos 1854'te imzaladılar — TDV'nin ifadesiyle bu, dış borçlanma döneminin başlangıcıdır. Borç savaş giderlerini karşılamadığı için 27 Haziran 1855'te ikinci anlaşma imzalandı; Mısır vergisi, Suriye ve İzmir gümrük gelirleri bu iki borca teminat gösterildi. TDV'nin tablosuna göre 1854 istikrazı 3.300.000 lira anapara, 2.640.000 lira ele geçen, %6 faizdi; 1855 istikrazı 5.500.000 lira anapara, 5.644.375 lira ele geçen, %4 faizdi (1855 tahvilleri esas değerinden fazlaya satıldı, TDV bunu tek istisna olarak belirtir).\n\n"
    +"■ ARDINDAN NE OLDU\n"
    +"1854'ten 1874'e kadar on beş dış borç anlaşması imzalandı; anapara toplamı 238.773.272 lira olduğu hâlde tahvillerin düşük fiyata satılması ve komisyonlar yüzünden ele geçen 127.120.220 liradır. Bu borçların yalnız %7,8'i Rumeli demiryoluna harcandı; büyük kısmı bütçe açığını kapatmaya, iç ve dış borç taksitlerine ve değeri düşen kâğıt-bakır paraların toplanmasına gitti. Sarraf maddesi ekliyor: İstanbul'da banker aileleri (Baltazzi, Zarifi, Kamondo ve başkaları) Avrupa finans çevrelerinden düşük faizle ve uzun vadeli aldıkları paraları devlete kısa vadeli ve yüksek faizli avans olarak veriyordu. 6 Ekim 1875 kararnâmesiyle dış borç taksitinin yarısı ödenip yarısı için yeni tahvil verileceği ilân edildi; Nisan 1876'da ödemeler durdu. Alacaklıları temsil eden Düyûn-ı Umûmiyye İdaresi 1881 Muharrem Kararnâmesi'yle kuruldu. TDV, 1854'te başlayan dış borçlanmanın Cumhuriyet'in 1928 anlaşmasıyla devamı da hesaba katılınca tam yüz yıl sürdüğünü yazar.",
  kesinlik:"kesin",
  olay:["1854-08-24|dış borç"],
  kaynak:"TDV: duyun-i-umumiyye (Cevdet Küçük, Tevfik Ertüzün) · esham (Mehmet Genç) · sarraflik (Ali Akyıldız, Nebi Bozkurt) · kaime (Ali Akyıldız)" },

];
