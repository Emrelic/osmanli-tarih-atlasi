// EKO-VEZIR · DALGA-0064 H-0020 · Cami mimarisi tarzları ve dönemleri.
// Önce data/ekokuma_mimari.js ve ekokuma_mimari2.js okundu (CLAUDE.md §7 — o dosyalar
// başka oturuma ait, buraya kopyalanmadı). Onlarda zaten yoğun işlenen dönemler
// (klasik/Sinan: Üç Şerefeli, Şehzade, Süleymaniye, Selimiye; Osmanlı barok:
// Nuruosmaniye, Fatih Camii 1767-71 yeniden yapımı; Lâle Devri bağlamı: Sâdâbâd)
// burada TEKRAR ANLATILMADI — yalnız sentez kartında adlarıyla anılıp çapraz
// bağlandı. Bu dosya yalnız iki boşluğu dolduruyor: "erken Osmanlı" (Bursa Ulu
// Camii) ve "ampir/eklektik" (Nusretiye Camii — mimari.js'teki Dolmabahçe Sarayı
// bir SARAY, cami değil), artı beş dönemi bir arada özetleyen bir sentez kartı.
// tur:"teknik-bilimsel" kullanıldı — mimari.js'in kendi gerekçesiyle aynı: ayrı
// bir "mimari" tur EKOKUMA_TUR'da tanımlı değil, app.js değişikliği gerektirmeden
// mevcut bir tur'a oturtuldu.
window.EKOKUMA_CAMITARZ = [
  {
    id: "camitarz-bes-donem",
    tur: "teknik-bilimsel",
    baslik: "Osmanlı Cami Mimarisinde Beş Üslup Dönemi",
    kisa: "Erken Osmanlı'dan 19. yüzyıl ampir-eklektik üsluba, yaklaşık beş asırlık bir mimari yolculuk.",
    metin: "Osmanlı cami mimarisi tek bir üslupta donmadı; yaklaşık beş asır boyunca birbirini izleyen, her biri kendi dönemin zevkini ve teknik birikimini taşıyan aşamalardan geçti.\n\n" +
      "Erken dönemde (14-15. yüzyıl, Bursa ve İznik merkezli) 'çok kubbeli cami' ve 'ters T planlı zaviyeli cami' tipleri egemendi — kare veya dikdörtgen mekânı çok sayıda küçük-orta kubbeyle örtme arayışı, merkezî tek büyük kubbeye henüz ulaşamamış bir teknik aşamayı yansıtır.\n\n" +
      "Klasik dönem (16. yüzyıl, Mimar Sinan ve öncesi) merkezî kubbe sorununu çözdü: Üç Şerefeli Camii'nin (Edirne, 1437-1447) 'merkezî planlı camilerin ilk örneği' sayılan altı desteğinden başlayıp Şehzade ve Süleymaniye camileriyle olgunlaşan, Selimiye Camii'nde (Edirne) sekiz ayak üzerine oturan devasa tek kubbeyle zirveye ulaşan bir mühendislik ve estetik geleneğidir.\n\n" +
      "Lâle Devri (1718-1730) doğrudan yeni bir cami üslubu doğurmadı, ama Sâdâbâd gibi bahçe-kasır kompleksleriyle Batı'ya (özellikle Fransız bahçe sanatına) açılan bir zevk değişikliğini başlattı — bu değişiklik birkaç on yıl sonra cami mimarisine de yansıyacaktı.\n\n" +
      "Osmanlı barok (18. yüzyıl ortası) o açılımın cami mimarisindeki karşılığıdır: Nuruosmaniye Camii'nin (temeli 1749) kavisli cepheleri, oval avlusu ve yoğun bezemesi, klasik dönemin sade geometrisinden kesin bir kopuştur; Fatih Camii'nin 1766 depreminden sonra 1767-71'de barok üslupla yeniden inşası aynı geçişin ikinci büyük örneğidir.\n\n" +
      "Ampir/eklektik dönem (19. yüzyıl, özellikle II. Mahmud sonrası) Balyan ailesi mimarlarının elinde Avrupa'nın barok ve empire (ampir) üsluplarını harmanladı — Nusretiye Camii bu dönemin doğrudan örneğidir; aynı üslup sarayda Dolmabahçe'de de görülür.\n\n" +
      "Beş dönem art arda gelse de birbirini tümüyle silmedi: klasik dönem kompozisyon ilkeleri (merkezî kubbe, çift minare) sonraki dönemlerde de korunurken, yalnız cephe bezemesi ve süsleme dili değişti.",
    not: "Bu kart bir sentezdir; her dönemin somut örnek yapısı ayrı kartlarda anlatılır: klasik dönem için Üç Şerefeli Camii, Şehzade Camii, Süleymaniye, Selimiye; Osmanlı barok için Nuruosmaniye, Fatih Camii; Lâle Devri bağlamı için Sadâbad; erken Osmanlı ve ampir/eklektik için bu dosyadaki Bursa Ulucami ve Nusretiye Camii kartları.",
    kesinlik: "kesin",
    olay: [],
    kaynak: "TDV İslâm Ansiklopedisi: ulucami, nuruosmaniye-kulliyesi, sultan-ahmed-camii-ve-kulliyesi, nusretiye-camii — bu dosyada ve ekokuma_mimari*.js'te ayrı ayrı kaynaklanmış maddelerin sentezi.",
  },
  {
    id: "camitarz-bursa-ulucami",
    tur: "teknik-bilimsel",
    baslik: "Bursa Ulu Camii — Erken Osmanlı'nın Çok Kubbeli Başyapıtı",
    kisa: "1399-1400'de tamamlanan yirmi kubbeli Ulu Cami, merkezî tek kubbeye henüz ulaşmamış erken Osmanlı mimarisinin anıtsal örneğidir.",
    metin: "Bursa Ulu Camii, I. Bayezid (Yıldırım) döneminde inşa edilip 802 (1399-1400) yılında tamamlandı — minberindeki kitabe bu tarihi taşır. Mimarının kesin kimliği tartışmalıdır; Ali Neccâr ve Hacı İvaz Paşa adları kaynaklarda geçen adaylardandır.\n\n" +
      "Cami, yaklaşık 55×69 metrelik dikdörtgen bir alanı on iki kare kesitli ayak üzerine oturan yirmi kubbeyle örter — dönemin İslâm mimarisinde 'çok kubbeli cami' (ya da 'ulu cami') diye adlandırılan, tek büyük merkezî kubbe yerine çok sayıda eşit boyutlu kubbeyle geniş bir mekânı kapatma arayışının Anadolu'daki en büyük ve en olgun örneklerinden biridir. Ortadaki kubbenin altında, on iki kenarlı mermer bir şadırvanın üzerinde açık bir aydınlık feneri (oculus) bulunur; bu, hem mekâna doğal ışık hem havalandırma sağlayan işlevsel bir çözümdür.\n\n" +
      "Caminin minberi de kendi başına bir sanat eseridir: el-Hâc Muhammed b. Abdülazîz İbnü'd-Dakkî imzalı, çivi kullanılmadan geçme (kündekârî) teknikle işlenmiş ceviz ağacından yapılmış, 6666 parçadan oluştuğu (Kur'an'daki âyet sayısına denk geldiği) söylenir. İki yüzünde nadir görülen bir motif olarak yıldız ve gezegen (güneş sistemi) tasvirleri bulunur. Mihraptaki süsleme ise 1862'de Tevfik Paşa'nın yaptırdığı bir onarıma aittir.\n\n" +
      "Ulu Cami, İstanbul'un fethinden yarım asır önce, Osmanlı mimarisinin henüz kendi klasik üslubunu (tek büyük merkezî kubbe, ince kalem gibi çift minare) oluşturmadığı bir evrede, imparatorluğun başkenti Bursa'da yükselen bir 'geçiş dönemi' anıtıdır — bir sonraki asırda Üç Şerefeli ve Şehzade camileriyle olgunlaşacak merkezî kubbe arayışının henüz çok-kubbeli çözümde durduğu evreyi somutlaştırır.",
    not: "TDV'nin okunan metni Ulu Cami'yi doğrudan Yeşil Cami ya da Edirne Eski Cami ile karşılaştırmıyor; burada da böyle bir kıyaslama kurulmadı, yalnız kaynağın verdiği bilgiler aktarıldı.",
    kesinlik: "kesin",
    olay: ["1399-06-01"],
    kaynak: "TDV İslâm Ansiklopedisi, \"Ulucami\" (Bursa) — https://islamansiklopedisi.org.tr/ulucami",
  },
  {
    id: "camitarz-nusretiye-camii",
    tur: "teknik-bilimsel",
    baslik: "Nusretiye Camii — 19. Yüzyıl Ampir-Barok Karışımı Üslup",
    kisa: "Tophane'de 1823-1826 arasında inşa edilen Nusretiye Camii, Avrupa'nın barok ve empire (ampir) üsluplarını harmanlayan bir 19. yüzyıl Osmanlı cami örneğidir.",
    metin: "İstanbul Tophane'de 24 Şubat 1823'teki büyük bir yangının Top Arabacıları Kışlası ile birlikte yok ettiği eski mescidin yerine II. Mahmud'un emriyle yeni bir cami yaptırıldı. İnşaata Haziran 1823'te başlandı, yapı 8 Nisan 1826'da tamamlandı.\n\n" +
      "Caminin mimarı, 19. yüzyıl Osmanlı mimarisine damgasını vuran Balyan ailesinden Krikor Amira Kalfa'dır (Balyan). Yapı, TDV'nin kendi tanımıyla, 'Avrupa'nın barok ve empire (ampir) üsluplarının karma bir şekilde uygulandığı' bir örnektir — klasik Osmanlı cami şemasının (kare planlı harim, tek büyük kubbe, çift minare) üzerine 19. yüzyıl Avrupa mimarisinin kavisli, hareketli çizgileri ve yoğun neoklasik/ampir süsleme dili eklenmiştir. Dikdörtgen planlı harimin kubbesi dört büyük kemer ve köşe tromplarına (pandantif) oturur; çift şerefeli iki minare dikey vurguyu güçlendirir, dönemin tabiriyle 'gösterişli bir eser'dir.\n\n" +
      "Caminin 'Nusretiye' (zafer/yardım anlamına gelen 'nusret'ten) adı, II. Mahmud'un aynı dönemde Yeniçeri Ocağı'nı ortadan kaldırmasıyla (Vak'a-i Hayriyye, Haziran 1826) ilişkilendirilerek verilmiştir — yani caminin adı, dönemin en büyük siyasi-askerî dönüşümünü anmaktadır.\n\n" +
      "Nusretiye Camii, klasik/Sinan döneminin sade geometrik dili ile Osmanlı barokunun (Nuruosmaniye) kavisli cephelerinin ötesine geçip Avrupa'nın 19. yüzyıl üslup repertuarını doğrudan camiye taşıyan bir dönemin örneğidir; aynı üslup anlayışı birkaç on yıl sonra bir saray yapısı olarak Dolmabahçe'de de sürecektir.",
    not: "Kart yalnız camiyi anlatır; Dolmabahçe Sarayı (aynı üslup dönemi, ama bir saray) ayrı bir kartta işlenmiştir, burada tekrarlanmadı.",
    kesinlik: "kesin",
    olay: ["1826-06"],
    kaynak: "TDV İslâm Ansiklopedisi, \"Nusretiye Camii\" — https://islamansiklopedisi.org.tr/nusretiye-camii",
  },
];
