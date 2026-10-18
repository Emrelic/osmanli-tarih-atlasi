// ============================================================================
// EK OKUMA — OSMANLI DEVLET MAKAMLARI: KLASİK DÖNEMDEN NEZARETLERE (18 Ekim 2026)
// ============================================================================
// Emre'nin isteği: "sadrazamlık, veziriazamlık, seraskerlik, kazasker, defterdar,
// nişancı, vezirler, beylerbeyi, kadı, ulema, şeyhülislamlık — bu makamları klasik
// dönemden başlayarak ilerki döneme kadar devlet teşkilatının nasıl olduğuna dair
// ek okumalar yapalım."
//
// 🔴 AD ALANI: bu dosya YALNIZ window.EKOKUMA_MAKAM tanımlar. Yükleyici satırı
//    js/app.js `_EKOKUMA_DOSYA_ADLARI`ndadır (ekokuma_nasil'den sonra).
//
// ŞEMA: data/ekokuma_p75a.js (teknik-bilimsel) ile BİREBİR —
//   { id, baslik, tur, kisa, metin, kesinlik, olay, kaynak }.
//   `olay:` "gün|kelime" — gün kronoloji maddesinin günü, kelime o maddenin
//   başlığında geçer (18 Ekim 2026'da denetle ile ölçüldü).
//
// ÇAKIŞMA ÖNLEME — zaten var olan kartlar TEKRARLANMADI:
//   teknik-osmanli-devlet-kademeleri (ekokuma_kurum)       vezir·kazasker·defterdar·şeyhülislam·kethüda·serdar özeti
//   teknik-osmanli-idari-yapi-degisimi (ekokuma_kurum)     Divan → Bâbıâli, eyalet-sancak özeti
//   teknik-klasik-burokrasi-nisanci-kalem-defterhane (p75a) NİŞANCI — bu dosyada ayrıca YOK
//   teknik-divandan-nezaretlere-maliye-nezareti (p75a)     DEFTERDAR → Maliye — bu dosyada ayrıca YOK
//   teknik-meclis-i-vala-yi-ahkam-i-adliyye (p75a) · teknik-sura-yi-devlet-1868-idari-yargi (p76d)
//   teknik-eyaletten-vilayete-1864 (p76d) · teknik-osmanli-hukuk-sistemi (ekokuma_kurum)
// Bu dosya o özetlerin ALTINA iner: her makamın kendi evrimi (klasik → 19. yy →
// sonu) ve hepsini bağlayan dönüşüm tablosu.
//
// KAYNAK YÖNTEMİ — CLAUDE.md "Kaynak kuralı": yalnız TDV İslâm Ansiklopedisi.
// 18 Ekim 2026'da her slug HTTP koduyla tarandı, sonra gövde okunup ÖZETLENDİ
// (kopya yok). Okunan: sadrazam (İpşirli) · vezir · serasker (Y. Çelik) ·
// seyhulislam · kazasker (İpşirli) · beylerbeyi (İpşirli) · kapudan-pasa
// (İ. Bostan) · reisulkuttab · hariciye-nezareti · meclis-i-vukela · ilmiye
// (İpşirli) · kadi · eyalet · divan-i-humayun.
//   302 (ölü slug, kullanılmadı): vezir-i-azam · seraskerlik · mesihat · kaptan-pasa
//   "kaptan-i-derya" → yalnız "bk. KAPUDAN PAŞA" yönlendirmesi; asıl madde kapudan-pasa.
//   "bab-i-ali" → gövde yalnız kısa tanım; ayrıntı İDDİA EDİLMEDİ (yalnız tanım kullanıldı).
//   "vezir" maddesi ~1703'te (Râmi Mehmed) kesiliyor; kubbealtı vezirlerinin tuğ/
//   rütbe ayrıntısı bu maddede YOK ⇒ yazılmadı.
// ============================================================================
window.EKOKUMA_MAKAM = [

// ── 1 · Sadrazamlık ─────────────────────────────────────────────────────────
{ id:"makam-sadrazamlik-evrimi", baslik:"Sadrazamlık — vezir-i âzamdan başvekile", tur:"teknik-bilimsel",
  kisa:"Padişahın vekili olan makam altı yüzyılda ulemâ vezirinden kul vezire, kul vezirden bürokrata, sonunda başvekile dönüştü.",
  metin:"■ ADI VE KÖKENİ\n"
    +"Sadrazamlık, Selçuklu başvezirliğinin devamı sayılır ve TDV'ye göre “padişah vekili olarak” devletin başlıca sorumlusudur. Makamın adı olarak vezîr-i a'zam 16. yüzyıl sonuna kadar yaygındı; sadrazam şekli 16. yüzyılın ikinci yarısından itibaren yerleşti.\n\n"
    +"■ ULEMÂ VEZİRLER DÖNEMİ (14. yüzyıl – 1453)\n"
    +"Orhan Bey'in Temmuz 1348 tarihli temliknâmesinde şahit olarak geçen Hacı Paşa ilk vezirlerdendir; ilk vezirler ulemâ sınıfından seçilirdi, çünkü İslâm müesseselerini ve hukukunu bilmeleri aranıyordu. 1385'te Çandarlı Kara Halil Hayreddin tam yetkili sadrazam tayin edildi; 1453'e kadar Çandarlı ailesinden vezirler makamı neredeyse sürekli ellerinde tuttu. 1453'te Fâtih'in emriyle Çandarlı Halil tutuklanıp idam edilince yerine kul sisteminden gelen asker kökenli biri getirildi — TDV vezir maddesi bunu vezirlik kurumunda “devrim niteliğinde” bir değişiklik sayar.\n\n"
    +"■ KUL VEZİRLER (1453 – 17. yüzyıl)\n"
    +"Fâtih Kanunnâmesi vezirleri tüm işlerde “vekîl-i mutlak” olarak tanımlar; Divan-ı Hümâyun'un başkanlığı da bu dönemde sultandan sadrazama geçti. TDV'nin sayımına göre 1453-1654 arasında görev yapan 71 sadrazamdan yalnız dokuzu Türk kökenliydi, gerisi devşirmeydi. Kanûnî döneminde İbrâhim Paşa'ya vezirlikle birlikte seraskerlik unvanının da verilmesi, makamın siyasî ağırlığını gösteren örneklerdendir.\n\n"
    +"■ KÖPRÜLÜLER ve İKİNDİ DİVANI\n"
    +"17. yüzyılda fiilî yetki Divan'dan sadrazamın kendi ikindi divanına kaydı; Divan-ı Hümâyun 18. yüzyılda büyük ölçüde törensel kaldı. Kösem Sultan'ın niyâbeti sırasında vezirler kayırmacılık ve rüşvet yüzünden sık sık azledildi; 1656'da saray Köprülü Mehmed Paşa'ya geniş yetkiler verdi ve Köprülüler ulemâyla ittifak ederek yaklaşık yarım yüzyıl iktidarda kaldı (ailenin yedi sadrazamı oldu).\n\n"
    +"■ BÜROKRAT SADRAZAMLAR\n"
    +"1699 Karlofça Antlaşması'ndan sonra bürokrat kökenli sadrazamlar belirginleşti; sadâretle bağlantılı dış ilişkiler biriminin başı Reîsülküttâb Râmi Mehmed Efendi 1703'te sadrazam oldu. Sadrazam konağı olan Paşa Kapısı 18. yüzyıl sonlarından itibaren “Paşa Kapısı ve Sadâret Dairesi” anlamında, nezaretler kurulduktan sonra da Osmanlı hükümeti anlamında “Bâbıâli” diye anıldı.\n\n"
    +"■ NEZARETLER ÇAĞI ve SON\n"
    +"1843'ten itibaren sadrazamın has, pîşkeş ve câize gelirleri kaldırılıp maaş bağlandı; TDV 1838'de “başvekil” adının kısa süreli kullanıldığını da kaydeder. Kānûn-ı Esâsî'ye göre Meclis-i Vükelâ sadrazamın başkanlığında toplanacaktı; II. Meşrutiyet'te kabine Meclis-i Meb'ûsan'a karşı sorumlu oldu. Son sadrazam Ahmed Tevfik Paşa'nın 4 Kasım 1922'de istifasıyla makam fiilen sona erdi; yerini Ankara hükûmetinin başvekili aldı.",
  kesinlik:"kesin",
  olay:["1523-06-27|İbrahim Paşa","1656-09-15|Köprülü","1453-06-01|Çandarlı Halil"],
  kaynak:"TDV: sadrazam (Mehmet İpşirli) · vezir · serasker (seraskerlik/Kanûnî dönemi İbrâhim Paşa) · bab-i-ali (kısa tanım) · meclis-i-vukela · divan-i-humayun" },

// ── 2 · Vezirler: ulemâdan kula, kuldan saraya ──────────────────────────────
{ id:"makam-vezirler-ulemadan-kula", baslik:"Vezirler kimdi? Ulemâdan kula, kuldan saray çevresine", tur:"teknik-bilimsel",
  kisa:"Osmanlı'nın ilk veziri Orhan'ın kardeşi değil, ulemâdan Alâeddin Paşa'ydı — 'ikinci vezir sadrazam olur' kuralı da 16. yüzyıl sonunda sıkça çiğnendi.",
  metin:"■ İLK VEZİRLER\n"
    +"TDV vezir maddesine göre vezirle aynı anlamda paşa, sahib, âsaf, vekil, nâzır ve lala gibi sözcükler kullanılırdı; Divan-ı Hümâyun'daki en üst vezir “vezîriâzam”, yani sadrazamdı. Vekāyi‘nâmelerin aksine ilk Osmanlı veziri Orhan'ın kardeşi değil, ulemâ sınıfından Alâeddin Paşa'dır. İlk vezirler arasında Ahmed b. Mahmûd, Hacı Paşa ve Sinâneddin Yûsuf da sayılır; Hacı Paşa'nın adı Temmuz 1348 tarihli bir temliknâmede şahit olarak geçer. Bu vezirlerin çoğu göreve gelmeden önce kadılık yapmıştı.\n\n"
    +"■ ASKER-ULEMÂ REKABETİ ve 1453\n"
    +"1443-1453 arasında Çandarlı Halil ile Şehâbeddin Paşa arasındaki çekişme, asker ve ulemâ kökenli vezirlerin rekabetinin en çarpıcı örneğidir ve Halil'in düşüşüyle bitti. 1453'te Fâtih'in Halil'i idam ettirmesinden sonra vezirlerin çoğu devşirme kökenli oldu; 1430-1550 arasında çok sayıda Arnavut ve Slav kökenli vezir ve sadrazam görev yaptı. Yine de kalemiye ve ilmiye kökenli, maliye veya nişancılıkta deneyimli kişiler vezir yapılmaya devam etti: Karamanî Nişancı Mehmed Paşa, Fâtih'in ölümünün ardından 1481'de yeniçeriler tarafından öldürüldü, yerine asker kökenli İshak ve Gedik Ahmed paşalar geldi.\n\n"
    +"■ VEZİR NASIL SEÇİLİRDİ?\n"
    +"Tayin sultanın hatt-ı hümâyunuyla yapılırdı; sadrazam vezir tavsiyesinde yetkiliydi, ama kapı ağası, vâlide sultan ve musâhip gibi saray çevresi de etkiliydi. Vezirin belirli bir alandaki uzmanlığına bakıldığı söylenir: Mahmud Paşa Fâtih'in Sırbistan planları, Makbul İbrâhim Paşa Kanûnî'nin Avrupa seferleri düşünülerek seçilmiştir. Yeni padişahın tahta geçmesi divanda değişim demekti; TDV bunu Fâtih, II. Bayezid, Yavuz, II. Selim ve III. Murad'ın tahta geçişleriyle örnekler.\n\n"
    +"■ KURAL ÇİĞNENİRKEN\n"
    +"16. yüzyıl sonunda ikinci vezirin sadrazamlığa yükseleceği kuralı sıkça ihlal edildi: üçüncü veya dördüncü vezir, beylerbeyi, yeniçeri ağası ve hatta divan dışındaki silâhdar da sadrazam yapıldı. III. Mehmed döneminde şehzadelerin sancağa çıkma âdetinin bitmesi sonrasında yeni sultan ve vezirlerin belirlenmesinde saray hizipleri etkili oldu; 17. yüzyılda küçük yaşta tahta çıkan padişahlar döneminde vezir seçimi vâlide sultanların elindeydi. Bu gidişi 1656'da Köprülü Mehmed Paşa'ya verilen geniş yetkiler durdurdu.\n\n"
    +"■ KARLOFÇA'DAN SONRA\n"
    +"Viyana bozgunundan (1683) Karlofça'ya (1699) kadar süren savaşlarda Celâlî çevrelerinden de yararlanıldı: Bozoklu Mustafa Paşa 1693-1694'te sadrazamdı. Reîsülküttâb Râmi Mehmed Efendi'nin 1703'te sadrazam olması, TDV'ye göre vezirlerin niteliğinin ve kökeninin değiştiği sürecin işaretidir.",
  kesinlik:"kesin",
  olay:["1453-06-01|Çandarlı Halil","1656-09-15|Köprülü"],
  kaynak:"TDV: vezir (metin 1703'te kesiliyor; kubbealtı vezirlerinin rütbe/tuğ ayrıntısı bu maddede yok, yazılmadı) · sadrazam" },

// ── 3 · Divan-ı Hümâyun'un işleyişi ─────────────────────────────────────────
{ id:"makam-divan-i-humayun-uyeleri-toplanti", baslik:"Kubbealtı'nda bir sabah — Divan-ı Hümâyun'da kim otururdu?", tur:"teknik-bilimsel",
  kisa:"Divan'da sadrazamla kazaskerler, defterdarlar ve nişancı otururdu; gündemi hazırlayan reîsülküttâb ise üye bile değildi.",
  metin:"■ ÜYELER\n"
    +"TDV'ye göre Dîvân-ı Hümâyun, 15. yüzyıl ortasından 17. yüzyılın ilk yarısına kadar Osmanlı'nın en önemli karar organıydı. Kök olarak Türk meşveret meclislerine ve Büyük Selçuklu Dîvân-ı A'lâ'sına dayanır; II. Murad döneminde Edirne'de imparatorluk divanı biçimini almaya başladı. Fâtih, padişahın başkanlığını kaldırıp bu görevi sadrazama verdi ve divana son şeklini kazandırdı.\n"
    +"Asıl üyeler sadrazam, sayıları üç ile yedi arasında değişen kubbealtı vezirleri, Rumeli ve Anadolu kazaskerleri, nişancı ile Rumeli ve Anadolu defterdarlarıydı. Gündemi belirleyen reîsülküttâb üye değildi ama divanın kilit kişisiydi. Şeyhülislâmın divanda resmî bir yeri yoktu.\n\n"
    +"■ TOPLANTI DÜZENİ\n"
    +"Toplantılar Topkapı Sarayı'nda Kubbealtı'nda yapılır, sabahtan öğleye kadar sürerdi. 16. yüzyılda divan haftada dört beş gün toplandı; 17. yüzyıl başında haftada iki güne indi ve sonrasında seyrekleşti. Bazı kararlar divanda kesinleşirdi, bazıları “arza çıkarılırdı” — padişaha sunulurdu; padişah kafesli pencereden toplantıyı dinleyebilirdi.\n\n"
    +"■ HALKA AÇIK KAPI\n"
    +"Herkes divana dilekçe verebilirdi; divan kadıların hükümlerini inceleyip bozabilirdi. Yani divan aynı anda yürütme organı ve en yüksek mahkemeydi. TDV, divanda toplumsal grupların temsil edilmemesini onun Batı'daki meclislere kıyasla gelişememesinin sınırı olarak gösterir.\n\n"
    +"■ YETKİNİN KAYMASI\n"
    +"Divanın yetkileri giderek sadrazamın ikindi divanına kaydı. 18. yüzyılda divan büyük ölçüde törensel hâle geldi; II. Mahmud'un reformları işlevini bitirdi, ancak devletin sonuna kadar yasal ve siyasî işlevi olmayan törensel bir kurum olarak korundu.",
  kesinlik:"kesin",
  olay:["1451-06-01|Divan-ı Hümayun"],
  kaynak:"TDV: divan-i-humayun · sadrazam · kazasker · defterdar · nisanci · reisulkuttab" },

// ── 4 · Şeyhülislâmlık ──────────────────────────────────────────────────────
{ id:"makam-seyhulislamlik-evrimi", baslik:"Şeyhülislâmlık — bursa müftüsünden devletin ikinci direğine", tur:"teknik-bilimsel",
  kisa:"Mütevazı bir fetva makamı olarak başladı; Ebüssuûd'la yükselip padişah indirme fetvalarına kadar uzandı ve 1924'te kalktı.",
  metin:"■ BAŞLANGIÇ\n"
    +"“Şeyhülislâm” sözcüğü 10. yüzyıldan beri önde gelen âlimler için bir onur unvanıydı; Osmanlı'da Molla Fenârî'nin 1425'te (828) Bursa müftülüğüne atanması müftülüğün ve şeyhülislâmlığın başlangıcı sayılır. İlk hâlinde mütevazı bir fetva makamıydı. 16. yüzyılda İstanbul müftüsüne bu ad verilir oldu; Zenbilli Ali Efendi, Kemalpaşazâde ve Sâdî Çelebi dönemlerinde makamın etkisi arttı. Görevden alınan ilk şeyhülislâm Çivizâde Muhyiddin Mehmed Efendi'dir.\n\n"
    +"■ EBÜSSUÛD ve ZİRVE\n"
    +"Ebüssuûd Efendi'nin yaklaşık otuz yıllık şeyhülislâmlığı makamda kalıcı iz bıraktı. Şeyhülislâm fetva verir, müftülerin ve öteki dinî görevlilerin atamasını denetler, meşveret meclislerine katılırdı. 17. yüzyıldan itibaren ilmiye tayinleri (kazasker ve kadı atamaları dahil) onun eline geçti.\n\n"
    +"■ SİYASETİN İÇİNDE\n"
    +"Fetvalar padişah indirmeyi meşrulaştırmak için de kullanıldı; TDV Sultan İbrâhim'in tahttan indirilmesini örnek verir. 17. yüzyılda sadrazamlarla çekişme arttı; 1703 ve 1730 isyanlarına karışılması makamın itibarını azalttı. Beş asırda 131 müftü ve şeyhülislâm görev yaptı, ortalama görev süresi yaklaşık üç buçuk yıldır. Bazıları idam edildi: Ahîzâde Hüseyin, Hocazâde Mesud ve Seyyid Feyzullah.\n\n"
    +"■ YENİÇERİSİZ DÖNEM\n"
    +"1826'da Yeniçeri Ocağı kaldırıldıktan sonra makam Bâb-ı Meşîhat'e taşındı. 19. yüzyılda şeyhülislâmlar kabine üyesi oldu. TDV Vak'a-i Hayriyye'den sonra, Tanzimat ve II. Meşrutiyet dönemlerinde gerilemenin daha belirgin hâle geldiğini yazar.\n\n"
    +"■ SON\n"
    +"Hilâfetin kaldırıldığı 1924'te Şer'iyye ve Evkaf Vekâleti dağıtıldı ve yerine Diyanet İşleri Reisliği kuruldu; şeyhülislâmlık tarihe karıştı.",
  kesinlik:"kesin",
  olay:["1425-01-01|Şeyhülislamlık","1545-10-01|Ebüssuûd","1634-01-08|şeyhülislâm"],
  kaynak:"TDV: seyhulislam · ilmiye (Mehmet İpşirli) · kazasker" },

// ── 5 · Kazasker, kadı ve ilmiye merdiveni ──────────────────────────────────
{ id:"makam-kazasker-kadi-ilmiye-merdiveni", baslik:"Kazasker, kadı, müderris — ilmiye nasıl yükselirdi?", tur:"teknik-bilimsel",
  kisa:"Medresede başlayan kariyer kadılıktan mevleviyet pâyelerine, oradan İstanbul kadılığına ve kazaskerliğe uzanırdı; kazasker aynı zamanda atamaların da kapısıydı.",
  metin:"■ KAZASKERLİK\n"
    +"Kazasker (kādı'l-asker) askerî davalara bakan kadıdır; TDV'ye göre makam Osmanlı'da I. Murad'ın ilk yıllarında, 762/1361 ya da 763/1362'de resmîleşti ve ilk kazasker Çandarlı Kara Halil oldu. Fâtih döneminde Rumeli ve Anadolu kazaskerlikleri ayrıldı; Yavuz'un kurduğu kısa ömürlü Arap-Acem kazaskerliği Anadolu'ya katıldı. Geç 16. yüzyıla kadar atamaları sadrazam önerir, 17. yüzyıldan itibaren şeyhülislâm sadrazamın onayıyla belirler, son sözü padişah söylerdi. Fâtih Kanunnâmesi günlük 500 akçe maaş tespit etmişti.\n"
    +"İşlevi zamanla değişti: ordu davalarından kadı ve müderris atama-azline kaydı, Divan-ı Hümâyun'da şer'î konulara bakmaya ve kendi konağında mahkeme kurmaya vardı. 1914'te Rumeli ve Anadolu kazasker mahkemeleri birleştirildi ve imparatorluğun sonuna kadar öyle sürdü.\n\n"
    +"■ MEDRESEDEN KADILIĞA\n"
    +"İlmiye — şeyhülislâm, nakîbüleşraf, kazasker, kadı ve müderrislerden oluşan ulemâ zümresi — seyfiye ve kalemiye ile birlikte devletin üç ana meslek grubundan biriydi. Medrese eğitiminden icazetle çıkanlar mülâzemet (bekleme/staj) dönemine girer, sonra kaza kadılığından başlayarak mevleviyet pâyeli merkezlere yükselirdi. TDV, 17. yüzyıldan itibaren belirginleşen basamakları aşağıdan yukarıya şöyle sıralar: devriye, mahreç, bilâd-ı hamse, Haremeyn, taht kadılığı (İstanbul) ve kazaskerlik. Kadı tayini padişah beratıyla olurdu; Anadolu ve Rumeli kazaskerlerinin daireleri atama ve terfileri yürütüp rûznâmçe defterlerine kaydederdi.\n\n"
    +"■ KADININ GÖREVLERİ\n"
    +"Kadının yetki alanı kazaydı; mahkeme sicilleri hem dava zabıtlarını hem ticarî ve noterlik belgelerini taşırdı. Kadı yalnız yargıç değildi: sefer hazırlığı, erzak ve asker temini, kale denetimi, narh ve çarşı denetimi, vakıf ve medrese denetimi de ona düşerdi; tutuklama ve arama için kadı emri gerekirdi. Fâtih kadıların harçlarını belirledi, hiyerarşiyi kurdu ve Sahn-ı Semân medreseleri kadılık eğitiminin merkezi oldu. Kadı-beylerbeyi ilişkisi tartışmalıdır: kadı askerî ve idarî işlerde beylerbeyinden tam bağımsız sayılmazdı, ama vakıf ve medreseler üzerindeki denetiminde bağımsızdı.\n\n"
    +"■ İMTİYAZ ve AŞINMA\n"
    +"İlmiye mensupları vergi ve ceza bakımından ayrıcalıklıydı; ağır ceza çoğu zaman azil veya sürgündü, idam çok nadirdi. Molla Fenârî ailesine tanınıp sonra öteki ilmiye ailelerine yayılan mevâlîzâde imtiyazı ise mesleği zayıflatan bir uygulama olarak eleştirilmiştir.\n"
    +"Yetki kaybı 18. yüzyılda yerel güçlerin işe karışmasıyla başladı; 1826'da Yeniçeri Ocağı'nın kaldırılması kadının asayiş işlevini sarstı; vakıf gelirlerinin devlet bütçesine alınması medreselere ağır zarar verdi (TDV ilmiye maddesi Evkâf-ı Hümâyun Nezâreti'ni 1826'ya, kadı maddesi kadının vakıf denetiminin kalkışını 1836'da Evkaf Nezareti'nin kurulmasına bağlar; iki madde tarihte ayrışır). Fransız mevzuatından uyarlanan karma nizamî mahkemeler şer'î mahkemeleri nikâh, miras, talak ve alacak davalarıyla sınırladı; şer'î mahkemeler 9 Nisan 1924 (4 Ramazan 1342) tarihli kanunla kaldırıldı. 1914 tarihli Kadılara Müteallik Kanun kadı olmak için Medresetü'l-kudât mezuniyetini şart koşmuştu.",
  kesinlik:"kesin",
  olay:["1470-06-01|Sahn-ı Semân","1331-03-03|medrese","1826-06-15|Yeniçeri"],
  kaynak:"TDV: kazasker (Mehmet İpşirli) · kadi · ilmiye (Mehmet İpşirli) · seyhulislam" },

// ── 6 · Beylerbeyi ve eyalet ────────────────────────────────────────────────
{ id:"makam-beylerbeyi-eyalet-sistemi", baslik:"Beylerbeyi ve eyalet — taşranın en büyük birimi nasıl işledi?", tur:"teknik-bilimsel",
  kisa:"Lala Şahin'le başlayan beylerbeyilik 17. yüzyılda vezirlere verilen eyaletlere, 1864'te valiliğe dönüştü; 'eyalet' sözcüğü ise 16. yüzyıl sonundan önce belgelerde yoktu.",
  metin:"■ KURULUŞ\n"
    +"TDV'ye göre beylerbeyi, eyaletin askerî ve idarî âmiriydi; kaynaklarda mîr-i mîrân, emîrü'l-ümerâ ve vali adlarıyla da geçer (vali 17. yüzyıldan sonra yaygınlaştı). Kurumun kökleri Bizans'ta değil, Türk-İslâm devletlerinde, özellikle Anadolu Selçuklularında aranır. İlk Rumeli beylerbeyi I. Murad döneminde Lala Şahin Paşa'dır; Yıldırım Bayezid 1393'te Timurtaş Paşa'yı Anadolu beylerbeyi yaptı. Rumeli beylerbeyi her zaman protokolde en önde gelirdi.\n\n"
    +"■ EYALET, SANCAK ve ‘EYALET’ KELİMESİ\n"
    +"Eyalet sancaklara (livâ) bölünür, beylerbeyinin oturduğu merkez sancağa paşa sancağı denirdi. TDV, eyalet teriminin resmî kullanımının 16. yüzyıl sonlarında, muhtemelen 1591'de başladığını, III. Murad dönemi belgelerinde sözcüğün geçmediğini belirtir. 1520 tarihli bir vesikaya göre Rumeli'de 30, Anadolu'da 20, Karaman'da 8, Rum'da 5, Arap'ta 15 ve Diyarbekir'de 9 sancak vardı. 1609'da Ayn Ali Efendi 32 eyalet sayar: 23'ü timarlı, 9'u sâlyâneli. Sâlyâneli eyaletler (Mısır, Bağdat, Yemen, Habeş, Basra, Lahsâ, Cezâyir-i Garb, Trablusgarp, Tunus) yıllık gelirini doğrudan hazineye aktarırdı; timarlı eyaletlerin geliri ise timar olarak dağıtılırdı.\n\n"
    +"■ BEYLERBEYİ NE YAPARDI?\n"
    +"Beylerbeyiler çoğunlukla seyfiye sınıfından, devşirme ve Enderun yoluyla yetişir, çoğu sonra vezir ya da sadrazam olurdu. Timar tevcih eder (1530'dan sonra daha çok küçük timarları), asayişi sağlar, şikâyetleri dinler, savaşta ordu sevk eder, gerektiğinde serdar da atanırdı. Eyalet divanına başkanlık ederdi; divanda hazine defterdarı, timar defterdarı ve kadı otururdu. Ancak kadı ve mal defterdarı beylerbeyine bağlı değildi, yeniçeri ağaları da bağımsızdı.\n\n"
    +"■ KISA GÖREV, VEZİR VALİLER\n"
    +"İlk dönemde uzun olan görev süreleri 16. yüzyıl ortasından sonra yaklaşık bir yıla düştü; 17-18. yüzyılda beylerbeyileri yılda birkaç kez değiştirildi. 1640'tan itibaren eyaletler giderek vezirlere verildi.\n\n"
    +"■ ÇÖZÜLME ve VİLÂYET\n"
    +"18. yüzyılda timar düzeni bozuldu, vergi iltizamla toplanmaya başladı; âyanlar güçlendi ve bazı yerlerde yerel hanedanlar kuruldu. II. Mahmud 1812'den itibaren merkezî otoriteyi yeniden kurmaya çalıştı: 1826'da eyaletler müşirliklere verildi, 1839 Tanzimatı'yla malî işler muhassıllara devredildi. 1864'te eyalet sistemi yerini vilâyetlere bıraktı.",
  kesinlik:"kesin",
  olay:["1362-09-01|Rumeli Beylerbeyliği","1393-01-01|Anadolu Beylerbeyliği","1864-11-08|Vilâyet"],
  kaynak:"TDV: beylerbeyi (Mehmet İpşirli) · eyalet" },

// ── 7 · Kapudan paşa ────────────────────────────────────────────────────────
{ id:"makam-kapudan-pasa-donanma-komutani", baslik:"Kapudan paşa — Gelibolu sancakbeyinden Bahriye Nâzırı'na", tur:"teknik-bilimsel",
  kisa:"Donanmanın başı önce bir sancakbeyiydi; Barbaros'la ayrı bir eyalet, sonra vezirlik rütbesi aldı ve 1867'de Bahriye Nezareti'ne dönüştü.",
  metin:"■ ADI\n"
    +"“Kapudan” İtalyanca capitán'dan gelir ve 15. yüzyıl ortasından itibaren donanma komutanı için kullanılmaya başlandı. TDV'ye göre “kapudan paşa” sözü 1551'de Sinan Paşa, 1565'te Piyâle Paşa için geçer; “kapudân-ı deryâ” ise esas olarak 18. yüzyıldan itibaren yaygınlaştı.\n\n"
    +"■ GELİBOLU SANCAKBEYİ\n"
    +"Donanmanın örgütlenmesinde emeği geçen ilk kapudan muhtemelen Sarıca Paşa'dır; Yıldırım Bayezid onu 1390'da Gelibolu sancakbeyliğine, tersane ve donanmayı kurmakla görevlendirdi. Barbaros Hayreddin'e kadar kapudanlar Gelibolu sancakbeyi olarak donanmaya komuta etti.\n\n"
    +"■ BARBAROS ve YENİ EYALET\n"
    +"Şubat 1534'te (TDV; atlasın kronoloji maddesi 6 Nisan 1534 yazar, gün farkı ayrıca incelenmektedir) Barbaros Hayreddin Paşa Cezayir (Ege adaları) beylerbeyiliğine atanarak paşa unvanıyla kapudan oldu; eyalet “Cezâyir-i Bahr-i Sefîd ve kapudânî” diye de anıldı. Merkezi önce Rodos, sonra Gelibolu oldu; 16. yüzyıl ortasında sancak sayısı altıya çıktı. Barbaros'un atanması Lutfi Paşa'nın görevini ikinci kapudanlığa düşürdü. Gelibolu sancakbeyi iken yıllık hass geliri 550.000 akçe olan kapudanın geliri beylerbeyi olunca 700.000 akçeye çıktı.\n\n"
    +"■ VEZİRLİK RÜTBESİ\n"
    +"Piyâle Paşa 1567'de vezir oldu; 1587'de İbrahim Paşa ikinci vezir, 1591'de Cigalazâde Sinan Paşa dördüncü vezir rütbesiyle kapudanlığa getirildi. Bundan sonra 17. yüzyıl boyunca kapudan paşaların hepsi vezirdi; 18. yüzyılda üç tuğlu vezir pâyesiyle atama yapıldı. XVI. yüzyılda kapudanlık genelde denizcilikten yetişenlere verilirdi; Müezzinzâde Ali Paşa yeniçeri ağalığından, Derviş Mehmed Paşa bostancıbaşılıktan, Merzifonlu Kara Mustafa Paşa Diyarbekir beylerbeyiliğinden gelmişti.\n\n"
    +"■ YETKİLER\n"
    +"Denizcilikle ilgili bütün atamalar, Cezayir eyaletindeki timar ve zeâmetlerin tevcihi, denizcilik işlerinde hüküm verme ve tuğra çekme, tersane muhasebe defterlerinin tutturulması onun işiydi. 1701 tarihli Bahriye Kanunnâmesi'ne göre bütün derya beylerinin başıydı. Tersanede kendi divanhânesinde otururdu; donanmanın seferden çıkışında ve dönüşünde padişah onu Yalı Köşkü'nde kabul eder, hil'at giydirirdi.\n\n"
    +"■ YENİDEN KURUŞLAR ve SON\n"
    +"İnebahtı (1571) yenilgisinden sonra Kılıç Ali Paşa, Çeşme (1770) sonrası Cezayirli Gazi Hasan Paşa donanmayı yeniden kurdu; Navarin (1827) sonrasında Dârendeli İzzet Mehmed Paşa bu işe ağırlık verdi. Kapudan paşalık 17 Mart 1867'de Bahriye Nezâreti'nin kurulmasıyla kaldırıldı.",
  kesinlik:"kesin",
  olay:["1534-04-06|Barbaros"],
  kaynak:"TDV: kapudan-pasa (İdris Bostan; “kaptan-ı derya” slug'ı yalnız yönlendirme) · beylerbeyi · vezir" },

// ── 8 · Reîsülküttâb → Hariciye ─────────────────────────────────────────────
{ id:"makam-reisulkuttab-hariciye-nezareti", baslik:"Reîsülküttâb — Divan kâtiplerinin başı nasıl dışişleri bakanı oldu?", tur:"teknik-bilimsel",
  kisa:"Nişancının emrindeki kâtip amiri, 17. yüzyılda Bâbıâli'nin üç büyük memurundan biri, 1836'da Hariciye Nâzırı oldu.",
  metin:"■ NİŞANCININ EMRİNDE\n"
    +"Reîsülküttâblık, bir grup kâtibin başkanlığı demekti ve kuruluş zamanı kesin bilinmez: en eski bilgi Fâtih'in Teşkilât Kanunnâmesi'ndedir (ancak onun tarihlendirilmesi tartışmalıdır); Yavuz dönemine ait 1515 tarihli kayıtlar da makamın varlığına işaret eder. 16. yüzyılda reîsülküttâb nişancının emrinde Dîvân-ı Hümâyun kâtiplerini yönetir, arzuhal okur, tahvil hükmü hazırlar, berat yazdırırdı. Yüzyıl sonlarında nişancının bazı işleri ona geçti.\n\n"
    +"■ BÂBIÂLİ'YE TAŞINMA\n"
    +"17. yüzyıl ortalarında Divan'ın yerini Bâbıâli aldıkça reîsülküttâb da oraya taşındı ve sadrazam ve sadâret kethüdâsıyla birlikte Bâbıâli'nin üç büyük memuriyetinden biri oldu. Bağlı kalemler Beylik, Tahvil, Ruûs ve Âmedî idi; Âmedî Kalemi'nin kuruluşu genellikle 1766 dolaylarına tarihlenir. Nişancılık ise bu süreçte itibarî bir makama indi.\n\n"
    +"■ DIŞ İLİŞKİLERİN YÜRÜTÜCÜSÜ\n"
    +"18. yüzyılda sürekli elçilerin artmasıyla reîsülküttâb dış ilişkilerin başlıca muhatabı oldu ve vezirliğe yakın siyasî nüfuz kazandı. Karlofça Antlaşması'nda başdelege olan Râmi Mehmed Efendi bu rolün öncüsü sayılır; 1703'te sadrazam da oldu. III. Selim'in 1793'ten itibaren Avrupa başkentlerinde elçilik ve konsolosluk açma girişimleri kalıcı bir dış işleri sistemi doğurmadı; 1821'de Rum tercümanların görevine son verilince Müslüman tercüman yetiştirmek üzere Tercüme Odası kuruldu.\n\n"
    +"■ 1836 DÖNÜŞÜMÜ\n"
    +"II. Mahmud reîsülküttâba “Hariciye nâzırı” unvanını verdi ve 1836'da Hariciye Nezâreti'ni kurdu (TDV'nin Hariciye Nezareti maddesine göre ilk nâzır Mehmed Âkif Paşa). Nezâret “rütbe-i ûlâ” pâyesi aldı; kısa süre sonra iç işleriyle ilgili kalemler ondan ayrıldı, 1838'de Dahiliye ve Hariciye memurları ilk kez ayrıldı. Nezâret önce Viyana sefiri Rıfat Bey'in konağında çalıştı. Mustafa Reşid, Fuad ve Âlî Paşalar zamanı nezâretin en parlak dönemidir; hariciye nâzırlığından sadrazamlığa yükselmek olağan hâle geldi. 1885-1909 arasında yalnız iki nâzır atandı (Kürd Said Paşa ve Ahmed Tevfik Paşa); II. Abdülhamid dış politikada doğrudan rol oynuyordu. Nezâretin ilk genel nizamnâmesi Şubat 1914'te yayımlandı.",
  kesinlik:"kesin",
  olay:["1836-06-01|Hariciye Nezareti"],
  kaynak:"TDV: reisulkuttab · hariciye-nezareti · nisanci · sadrazam" },

// ── 9 · Seraskerlik ve Harbiye ──────────────────────────────────────────────
{ id:"makam-seraskerlik-harbiye-nezareti", baslik:"Seraskerlik — Yeniçeri Ocağı'nın yerini alan ağa kapısı", tur:"teknik-bilimsel",
  kisa:"Serasker bir ordu komutanıydı; 1826'dan sonra kalıcı bir makama dönüştü, 1908'e kadar sürdü ve aynı gün Harbiye Nezareti'ne bırakıldı.",
  metin:"■ ESKİ UNVAN\n"
    +"“Serasker” Farsça ser (baş) ile Arapça asker'den gelir, “başasker, ordu kumandanı” demektir. Klasik dönemde serasker ve serdar birlikte kullanıldı; Fâtih Kanunnâmesi'nde terim yoktur. TDV'ye göre Kanûnî döneminde İbrâhim Paşa'ya vezirlik yanında seraskerlik unvanı verildiği belirtilir.\n\n"
    +"■ 1826: YENİ ORDU, YENİ MAKAM\n"
    +"Yeniçeri Ocağı 1826'da Vak'a-i Hayriyye ile kaldırıldı; yeni ordunun (Asâkir-i Mansûre-i Muhammediyye) komutanına serasker unvanı verildi. İlk serasker Ağa Hüseyin Paşa'dır; yanında Hacı Sâib Efendi (nâzır) ve Yektâ Efendi (kâtip) görevlendirildi. Makam Ağa Kapısı'nda kuruldu (adı Serasker Paşa Kapısı oldu), daha sonra Beyazıt'taki Eski Saray'a taşındı. Seraskerlik ocağın asayiş, yangın ve zabıta görevlerini de devraldı; deniz kuvvetleri ise kaptan paşalarda kaldı. Koca Hüsrev Paşa kuruluşun ardından yaklaşık on yıl serasker kaldı ve teşkilatın gelişmesine büyük katkı yaptı.\n\n"
    +"■ SADRAZAM VE ŞEYHÜLİSLÂMLA AYNI SIRADA\n"
    +"1836 teşrifat düzenlemesiyle serasker protokolde şeyhülislâm ve sadrazamla aynı seviyeye çıkarıldı. Mart 1836'da seraskerliğe bağlı Dâr-ı Şûrâ-yı Askerî kuruldu; Tophane Müşirliği 1832'de, Redif teşkilatı 1834'te, Seraskerlik Müsteşarlığı 1838'de ihdas edildi. Bugünkü Dâire-i Umûr-ı Askeriyye binası Abdülaziz döneminde (1864-1866) yaptırıldı. Seraskerlik ile sadrazamlığın tek kişide birleştiği de görüldü: Keçecizâde Fuad Paşa 1 Haziran 1863'te hem sadrazam hem serasker oldu (askerî işler harbiye nâzırına bırakıldı); Hüseyin Avni Paşa 13 Şubat 1874'te sadrazam olduğunda aynı uygulama yinelendi.\n\n"
    +"■ AŞINMA\n"
    +"1876 Kānûn-ı Esâsî'siyle başkomutanlığın padişaha verilmesi seraskerliği askerî silsilenin en üst rütbesi olmaktan çıkardı. 1879'da seraskerlik ve Dâr-ı Şûrâ-yı Askerî kaldırılıp yerine Harbiye Nezâreti kuruldu; 1884'te her ikisi yeniden ihya edildi. 1853 Kırım Savaşı'nda ve 1877-1878 harbinde başkomutanlar sadrazam olmadan serdâr-ı ekrem unvanıyla gönderildi.\n\n"
    +"■ SON\n"
    +"22 Temmuz 1908'de Küçük Said Paşa sadrazam olunca önceki hükûmetin serasker Mehmed Rızâ Paşa'sını kabinesine almadı ve Ömer Rüşdü Paşa'yı harbiye nâzırı atadı; Harbiye Nezâreti aynı gün kuruldu ve seksen iki yıllık seraskerlik sona erdi — II. Meşrutiyet'in ilanından bir gün önce.",
  kesinlik:"kesin",
  olay:["1826-06-15|Vak'a-i Hayriyye"],
  kaynak:"TDV: serasker (Yüksel Çelik) · sadrazam · seyhulislam" },

// ── 10 · Meclis-i Vükelâ — kabine ───────────────────────────────────────────
{ id:"makam-meclis-i-vukela-kabine", baslik:"Meclis-i Vükelâ — Osmanlı'da kabine nasıl doğdu?", tur:"teknik-bilimsel",
  kisa:"Divan'ın ve ikindi divanının yerini alan bakanlar kurulu, 1922'de son sadrazamın istifasına kadar çalıştı — ama kuruluş tarihi bilinmiyor.",
  metin:"■ DOĞUŞ\n"
    +"TDV'ye göre Meclis-i Vükelâ II. Mahmud döneminde merkezî idarede yapılan düzenlemelerle ve nezaretlerin kurulmasıyla oluştu; kuruluş tarihi bilinmez, çünkü muhtemelen Meclis-i Meşveret'ten geçişle doğdu. Belgelerde Encümen-i Mahsûs, Meclis-i Hâss-ı Vükelâ, Meclis-i Âlî-i Vükelâ ve Hey'et-i Vükelâ gibi adlarla geçer.\n\n"
    +"■ ÜYELER\n"
    +"Sadrazamın (başvekil) başkanlığında toplanırdı; her nâzır kendi nezâretinden sorumluydu, meclis görüşülen işleri sadrazam aracılığıyla padişah onayına sunardı. 1840'lar-1850'lerde üyeler arasında sadrazam, şeyhülislâm, serasker, Meclis-i Vâlâ (sonra Tanzimat) başkanı, Maliye, Ticaret, Hariciye ve Evkāf-ı Hümâyun nâzırları, sadâret müsteşarı, Darphâne/Hazîne-i Hâssa nâzırı, Zaptiye ve Tophane müşirleri, kaptan-ı deryâ, Dîvân-ı Deâvî nâzırı ve vâlide kethüdâsı vardı; kadro idarî değişikliklerle zamanla değişti.\n\n"
    +"■ YEMİN ve HUKUKÎ ÇERÇEVE\n"
    +"1839'da vükelânın padişah huzurunda yemin etmesi zorunlu kılındı; 11 Aralık 1849'da yemin nizamnâmesi hazırlandı. 1 Temmuz 1872 düzenlemesiyle kanun değişiklikleri önce Şûrâ-yı Devlet'te, ardından Meclis-i Vükelâ'da görüşülüp padişaha sunulacaktı.\n\n"
    +"■ MEŞRUTİYET: SORUMLU KABİNE\n"
    +"Kānûn-ı Esâsî meclisin görev ve sorumluluğunu belirledi ve onu Meclis-i Meb'ûsan'a karşı sorumlu kıldı: sadrazam hükûmet başkanı olarak üyeleri seçer, padişah onaylardı; Meb'ûsan hükûmeti düşürebilirdi. 31 Mart 1909'da iç tüzük meclisin toplanma ve karar usullerini düzenledi; 1912'de görev alanı üç gruba ayrıldı (genel siyaset, ortak sorumluluk gerektiren işler, başka kanunların verdiği görevler).\n\n"
    +"■ SON\n"
    +"Meclis kuruluşundan 4 Kasım 1922'de son sadrazam Ahmed Tevfik Paşa'nın istifasına kadar işledi.",
  kesinlik:"kesin",
  olay:["1877-03-19|Meb'ûsan","1868-03-05|Şûrâ-yı Devlet","1838-03-24|Meclis-i Vâlâ"],
  kaynak:"TDV: meclis-i-vukela · sadrazam" },

// ── 11 · Dönüşüm tablosu ────────────────────────────────────────────────────
{ id:"makam-klasik-makamlarin-nezarete-donusumu", baslik:"Klasik makamların akıbeti — kim hangi nezârete dönüştü?", tur:"teknik-bilimsel",
  kisa:"Reîsülküttâb Hariciye'ye, defterdar Maliye'ye, kapudan paşa Bahriye'ye, serasker Harbiye'ye, beylerbeyi valiye dönüştü; şeyhülislâmlık ise 1924'te Diyanet'e bıraktı.",
  metin:"Bu kart, öteki makam kartlarının ortak sonucunu tek yerde toplar. Her satır TDV'nin ilgili maddesinden alındı.\n\n"
    +"■ 1826 – 1841: ÇEKİRDEK DÖNÜŞÜM\n"
    +"• Nişancı → 1836'da tuğra çekme işi defter eminine verildi; TDV, nişancılığın o tarihte tamamen kalkıp kalkmadığının açık olmadığını, tashih işlerindeki “tevkī‘” imzasının 1908'e kadar sürdüğünü yazar.\n"
    +"• Reîsülküttâb → 1836'da Hariciye Nezâreti.\n"
    +"• Defterdar → 1838'de Maliye Nâzırlığı kuruldu; 1841'de iki hazine kesin olarak birleşti ve defterdarlık Maliye Nezâreti'ne dönüştü.\n"
    +"• Yeniçeri ağası / ocak → 1826'da ocağın kaldırılmasıyla Seraskerlik (Ağa Kapısı).\n"
    +"• Divan-ı Hümâyun → törensel kabuk; fiilî yetki sadrazamın divanına, sonra Meclis-i Vükelâ'ya.\n\n"
    +"■ TANZİMAT SONRASI\n"
    +"• Beylerbeyi (eyalet) → 1864'te vilâyet ve vali.\n"
    +"• Kapudan paşa → 17 Mart 1867'de Bahriye Nezâreti.\n"
    +"• Sadrazam → Meclis-i Vükelâ'nın başkanı; Kānûn-ı Esâsî'ye göre kabine Meb'ûsan'a karşı sorumlu.\n\n"
    +"■ MEŞRUTİYET ve SON\n"
    +"• Serasker → 22 Temmuz 1908'de Harbiye Nezâreti (1879'da kısa süreli bir deneme olmuştu; 1884'te seraskerlik geri geldi).\n"
    +"• Kazasker → 1914'te Rumeli ve Anadolu kazasker mahkemeleri tek mahkemede birleşti.\n"
    +"• Sadrazam → 4 Kasım 1922'de Ahmed Tevfik Paşa'nın istifasıyla son bulur; Meclis-i Vükelâ aynı gün sona erer.\n"
    +"• Kadı ve şer'î mahkemeler → 9 Nisan 1924 tarihli kanunla kaldırıldı.\n"
    +"• Şeyhülislâm → 1924'te Şer'iyye ve Evkaf Vekâleti dağıtıldı, yerini Diyanet İşleri Reisliği aldı.\n\n"
    +"■ OKUMA ÖNERİSİ\n"
    +"Her satırın ayrıntısı kendi kartındadır: Sadrazamlık · Vezirler · Divan-ı Hümâyun · Şeyhülislâmlık · Kazasker-kadı-ilmiye · Beylerbeyi-eyalet · Kapudan paşa · Reîsülküttâb-Hariciye · Seraskerlik · Meclis-i Vükelâ. Nişancı ve defterdar için ayrıca “Nişancı, kalem ve defterhane” ile “Divandan nezaretlere” kartlarına bakın.",
  kesinlik:"kesin",
  olay:["1838-02-28|Defterdarlığın","1836-06-01|Hariciye Nezareti","1826-06-15|Vak'a-i Hayriyye"],
  kaynak:"TDV: nisanci · reisulkuttab · hariciye-nezareti · defterdar · kapudan-pasa · serasker · beylerbeyi · eyalet · kazasker · kadi · seyhulislam · sadrazam · meclis-i-vukela" },

];
