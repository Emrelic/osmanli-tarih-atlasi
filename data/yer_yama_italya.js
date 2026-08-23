/* yer_yama_italya.js — OLAY MAHALLI ATAMASI · kronoloji_italya.js
 *
 * AD ALANI: window.YER_YAMA_ITALYA   (koordinatorun M-1124'te verdigi ad;
 *   CLAUDE.md §7 son maddesi: dosya adindaki ayirt edici parca degisken
 *   adinda da olacak — bes dosya tek ad paylasirsa %74 sessiz kayip olur)
 *
 * Oturum: ITALYA SEHIR DEVLETLERI KRONOLOJI (eski ad: OPUS HAZIR KITA 53)
 * Gorev: tahta M-1124, onay M-1144.  Uygulayici: arac/yama_uygula.js
 * 🔴 data/kronoloji_italya.js'e TEK BAYT YAZILMADI — yamayi koordinator uygular.
 *
 * OLCUM: 192 madde · yer_id DOLU 119 · kapsam_genis 1 · EKSIK 72
 *        (koordinatorun "72 eksik" sayisi BIREBIR tuttu)
 *
 * UC KOVA — careleri TERS oldugu icin ayrildi:
 *        yer_id        39   havuzda BIREBIR var
 *        eksik_nokta   33   yer BELLI, havuzda YOK -> dogrudan koordinat
 *        kapsam_genis   0   (asagida NICIN sifir oldugu yaziyor)
 *
 * 🔴 KAPSAM_GENIS NICIN 0 — bu bir KARAR, "bakmadim" degil:
 *    72'nin tamami ya tek bir imza/muharebe yerine ya tek bir sehre
 *    baglanabiliyor. En zorlanan ikisi 1848-03-23 ve 1859-04-29 (savas
 *    ILANLARI); ikisi de ilan edildikleri baskente baglandi, cunku bir
 *    ilan bir andir ve bir yerde olur.
 *
 * 🔴 IKINCIL YER TUZAGI — koordinator "en cok senin dosyanda" dedi, ONBIR kez cikti:
 *    1302 Caltabellotta  metin SICILYA'yi anlatir      -> yer CALTABELLOTTA
 *    1381 Torino Barisi  metin BOZCAADA'yi anlatir     -> yer TORINO
 *    1454 Lodi Barisi    metin BUTUN ITALYA'yi anlatir -> yer LODI
 *    1559 Cateau         metin MILANO'yu anlatir       -> yer LE CATEAU
 *    1713 Utrecht        metin NAPOLI'yi anlatir       -> yer UTRECHT
 *    1768 Korsika satisi metin KORSIKA'yi anlatir      -> yer VERSAILLES
 *    1859 Zurih          metin LOMBARDIYA'yi anlatir   -> yer ZURIH
 *    1882 Uclu Ittifak   metin ITALYA'yi anlatir       -> yer VIYANA
 *    1912 Usi            metin TRABLUS'u anlatir       -> yer LOZAN (Ouchy semti)
 *    1918 Villa Giusti   metin AVUSTURYA'yi anlatir    -> yer PADOVA
 *    1471 Ferrara Duku   metin FERRARA'yi anlatir      -> yer ROMA (tevcih yeri)
 *
 * 🔴 "KOLAYCA BASKENT" TUZAGI — uc kez:
 *    1417 Martin V secimi   Roma DEGIL  -> KONSTANZ (konsil)
 *    1378 rakip papa secimi Roma DEGIL  -> FONDI (konklav)
 *    1866 III. Bagimsizlik  Roma/Torino DEGIL -> FLORANSA (1865-71 baskenti)
 *    1900 Umberto suikasti  Roma DEGIL  -> MONZA
 *
 * 🟢 TURKCE-YAZIM TUZAGI (M-1141, DOGU AFRIKA'nin bulgusu) UYGULANDI:
 *    33 eksik_nokta adayinin HER BIRI Turkce/yerel yazim varyantlariyla
 *    da tarandi (Kaporetto · Kobarid · Versay · Marinyano · Pavya · Kioca ·
 *    Monca · Rieka · Kalatafimi · Milaco · Kapua · Kato · Kambre ...).
 *    Sonuc: 33'un 33'u gercekten havuzda YOK. Iki sahte eslesme elendi:
 *      "Kirmasti (M.Kemalpasa)" = BURSA'daki Mustafakemalpasa, Izmir Nif DEGIL
 *      "Talodi" = Sudan, Lodi DEGIL
 *    🟢 VE BIR GERCEK KURTARIS: "Curzola" havuzda yok ama
 *      "Korçula (Kurzola)" VAR -> eksik_nokta yazilacakken yer_id oldu.
 *
 * KAYNAK (§4): TDV once. Bu partide TDV govdesi okunmus sluglar:
 *    ceneviz · galata · kefe · sakiz-adasi · karadeniz · italya
 *    Ek olarak HTTP ile sinananlar — CANLI: trablusgarp · trablusgarp-savasi ·
 *    rodos · oniki-ada · habesistan · lozan-antlasmasi · antalya
 *    OLU (302): usi-antlasmasi · ouchy · adua · avignon · trent-konsili ·
 *    konstanz-konsili  ⇒ bunlarda dayanak standart akademik cografi referans
 *    ve ACIKCA boyle yazildi. Vikipedi KULLANILMADI.
 */
window.YER_YAMA_ITALYA = [

{ dosya:"kronoloji_italya.js", t:"1294-12-13",
  b:"Celestine V'in istifası — tarihte ilk gönüllü papalık istifası",
  yer_id:"Napoli",
  kaynak:"Celestine V istifasini Napoli'de Castel Nuovo'da acikladi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1303-09-07",
  b:"Anagni Olayı — Fransız ajanlarının papayı tutuklaması",
  eksik_nokta:{ ad:"Anagni", enlem:41.735, boylam:13.152 },
  kaynak:"Olay Anagni'deki papalik sarayinda gecti — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1309-03-09",
  b:"Avignon Papalığı'nın başlaması",
  yer_id:"Avignon",
  kaynak:"Papalik makaminin Avignon'a tasinmasi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1348-01-01",
  b:"Kara Ölüm Avignon'u vurur",
  yer_id:"Avignon",
  kaynak:"Maddenin konusu Avignon'daki salgin — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1378-09-20",
  b:"Rakip papa VII. Clement'in seçilmesi — skizma resmileşir",
  eksik_nokta:{ ad:"Fondi", enlem:41.356, boylam:13.427 },
  kaynak:"Rakip konklav Roma'da degil FONDI'de toplandi (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1417-11-11",
  b:"Martin V'in seçilmesi — Batı Skizması'nın sona ermesi",
  yer_id:"Konstanz",
  kaynak:"Secim Konstanz Konsili'nde yapildi, Roma'da DEGIL (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1545-12-13",
  b:"Trent Konsili'nin açılması",
  yer_id:"Trento",
  kaynak:"Konsil Trento'da acildi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1563-12-04",
  b:"Trent Konsili'nin kapanması",
  yer_id:"Trento",
  kaynak:"Konsil Trento'da kapandi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1302-08-31",
  b:"Caltabellotta Antlaşması — bölünmenin resmileşmesi",
  eksik_nokta:{ ad:"Caltabellotta", enlem:37.577, boylam:13.216 },
  kaynak:"Antlasmanin imza yeri Caltabellotta; metin Sicilya'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1495-07-06",
  b:"Fornovo Savaşı — İtalyan Ligi'nin Fransızları geri püskürtmesi",
  eksik_nokta:{ ad:"Fornovo di Taro", enlem:44.693, boylam:10.1 },
  kaynak:"Muharebe Taro vadisinde Fornovo yakininda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1503-12-29",
  b:"Garigliano Savaşı — İspanya'nın Napoli'yi kesin ele geçirmesi",
  eksik_nokta:{ ad:"Garigliano", enlem:41.246, boylam:13.813 },
  kaynak:"Muharebe Garigliano nehri gecidinde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1713-04-11",
  b:"Utrecht Antlaşması — Napoli'nin Avusturya'ya geçmesi",
  yer_id:"Utrecht",
  kaynak:"IMZA YERI Utrecht; metin Napoli'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1734-05-25",
  b:"Bitonto Muharebesi — Bourbon Napoli Krallığı'nın kuruluşu",
  eksik_nokta:{ ad:"Bitonto", enlem:41.107, boylam:16.69 },
  kaynak:"Muharebe Bitonto onunde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1815-05-20",
  b:"Joachim Murat'ın yenilgisi — Napolyoncu Napoli'nin sonu",
  eksik_nokta:{ ad:"Tolentino", enlem:43.209, boylam:13.284 },
  kaynak:"Murat'in yenilgisi Tolentino Muharebesi'dir — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1821-03-07",
  b:"Avusturya müdahalesiyle anayasanın iptali",
  eksik_nokta:{ ad:"Rieti", enlem:42.404, boylam:12.863 },
  kaynak:"Avusturya mudahalesinin belirleyici carpismasi Rieti/Antrodoco'da — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1860-05-11",
  b:"Garibaldi'nin Bin'i Marsala'ya çıkar",
  eksik_nokta:{ ad:"Marsala", enlem:37.799, boylam:12.436 },
  kaynak:"Cikarma Marsala limanina yapildi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1860-05-15",
  b:"Calatafimi Savaşı — Bin'in ilk zaferi",
  eksik_nokta:{ ad:"Calatafimi", enlem:37.914, boylam:12.861 },
  kaynak:"Muharebe Calatafimi yakininda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1860-07-20",
  b:"Milazzo Savaşı — Sicilya'nın son Bourbon direnişinin kırılması",
  eksik_nokta:{ ad:"Milazzo", enlem:38.221, boylam:15.241 },
  kaynak:"Muharebe Milazzo yarimadasinda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1860-10-01",
  b:"Volturno Savaşı — Bourbon karşı taarruzunun kırılması",
  eksik_nokta:{ ad:"Santa Maria Capua Vetere", enlem:41.081, boylam:14.253 },
  kaynak:"Volturno carpismasinin merkezi Santa Maria Capua Vetere — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1861-02-13",
  b:"Gaeta'nın düşüşü — Bourbon direnişinin sonu",
  eksik_nokta:{ ad:"Gaeta", enlem:41.213, boylam:13.571 },
  kaynak:"Kusatma ve teslim Gaeta kalesinde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1261-03-13",
  b:"Nymphaeum Antlaşması — Karadeniz kapısının açılması",
  eksik_nokta:{ ad:"Nif (Kemalpasa)", enlem:38.427, boylam:27.415 },
  kaynak:"Nymphaion/Nif, Izmir'in doğusunda; TURKCE yazim (Kemalpasa) da havuzda arandi, YOK — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1284-08-06",
  b:"Meloria Deniz Savaşı — Pisa'nın deniz gücü olarak sonu",
  eksik_nokta:{ ad:"Meloria sigligi", enlem:43.545, boylam:10.22 },
  kaynak:"Deniz savasi Livorno aciklarindaki Meloria sigliginda; Livorno da havuzda YOK — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1298-09-08",
  b:"Curzola deniz zaferi — Venedik rekabetinin zirvesi",
  yer_id:"Korçula (Kurzola)",
  kaynak:"Savas Korcula adasi aciklarinda; havuzda TURKCE-yerel yazimla KAYITLI — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1346-01-01",
  b:"Kefe kolonisinin kurulması",
  yer_id:"Kefe",
  kaynak:"TDV kefe" },

{ dosya:"kronoloji_italya.js", t:"1347-01-01",
  b:"Kefe kuşatması ve Kara Ölüm'ün Avrupa'ya taşınması",
  yer_id:"Kefe",
  kaynak:"TDV kefe — kusatma ve salginin cikis noktasi" },

{ dosya:"kronoloji_italya.js", t:"1379-08-16",
  b:"Chioggia'nın ele geçirilmesi — Venedik lagününe girilmesi",
  eksik_nokta:{ ad:"Chioggia", enlem:45.219, boylam:12.279 },
  kaynak:"Venedik lagununun guney kapisi Chioggia — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1381-08-08",
  b:"Torino Barışı — Chioggia Savaşı'nın sona ermesi",
  yer_id:"Torino",
  kaynak:"IMZA YERI Torino; metin Bozcaada'yi anlatir (ikincil yer tuzagi) — TDV ceneviz" },

{ dosya:"kronoloji_italya.js", t:"1453-05-29",
  b:"İstanbul'un fethi — Galata'nın (Pera) Osmanlı'ya bağlanması",
  yer_id:"İstanbul",
  kaynak:"TDV galata — Galata/Pera Istanbul icindedir" },

{ dosya:"kronoloji_italya.js", t:"1455-01-01",
  b:"Sakız Adası'nın Maona şirketi idaresine geçmesi",
  yer_id:"Sakız",
  kaynak:"TDV sakiz-adasi" },

{ dosya:"kronoloji_italya.js", t:"1461-08-15",
  b:"Amasra kolonisinin Osmanlı'ya düşmesi",
  yer_id:"Amasra",
  kaynak:"TDV ceneviz" },

{ dosya:"kronoloji_italya.js", t:"1475-06-01",
  b:"Kefe'nin Osmanlı'ya düşmesi",
  yer_id:"Kefe",
  kaynak:"TDV kefe" },

{ dosya:"kronoloji_italya.js", t:"1566-04-14",
  b:"Sakız Adası'nın Osmanlı'ya ilhakı — son Ege kolonisinin kaybı",
  yer_id:"Sakız",
  kaynak:"TDV sakiz-adasi" },

{ dosya:"kronoloji_italya.js", t:"1768-05-15",
  b:"Korsika'nın Fransa'ya satılması",
  eksik_nokta:{ ad:"Versailles", enlem:48.804, boylam:2.121 },
  kaynak:"IMZA YERI Versailles; metin Korsika'yi anlatir (ikincil yer tuzagi). Bastia (Korsika) havuzda VAR ama olay orada gecmedi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1454-04-09",
  b:"Lodi Barışı — İtalyan Ligi'nin kurulması",
  eksik_nokta:{ ad:"Lodi", enlem:45.314, boylam:9.503 },
  kaynak:"IMZA YERI Lodi; metin butun Italya'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1515-09-13",
  b:"Marignano Savaşı — Fransa'nın Milano'yu geri alması",
  eksik_nokta:{ ad:"Melegnano", enlem:45.359, boylam:9.323 },
  kaynak:"Marignano bugunku Melegnano — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1525-02-24",
  b:"Pavia Savaşı — Fransa Kralı'nın esir düşmesi",
  eksik_nokta:{ ad:"Pavia", enlem:45.185, boylam:9.156 },
  kaynak:"Muharebe Pavia onundeki Visconti parkinda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1559-04-03",
  b:"Cateau-Cambrésis Antlaşması — İspanyol Milano'sunun teyidi",
  eksik_nokta:{ ad:"Le Cateau-Cambrésis", enlem:50.101, boylam:3.545 },
  kaynak:"IMZA YERI Le Cateau; metin Milano'yu anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1706-09-07",
  b:"Torino Savaşı — Fransızların Milano'dan çıkarılması",
  yer_id:"Torino",
  kaynak:"Kusatma ve meydan savasi Torino onunde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-11-10",
  b:"Zürih Antlaşması — Lombardiya'nın Sardinya-Piyemonte'ye bırakılması",
  yer_id:"Zürih",
  kaynak:"IMZA YERI Zurih; metin Lombardiya'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1260-09-04",
  b:"Montaperti Savaşı — Siena'nın Floransa'yı ağır yenilgiye uğratması",
  eksik_nokta:{ ad:"Montaperti", enlem:43.32, boylam:11.451 },
  kaynak:"Muharebe Siena'nin doğusundaki Montaperti tepesinde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1348-01-01",
  b:"Kara Ölüm'ün Siena'yı vurması — katedral genişletme projesinin terki",
  yer_id:"Siena",
  kaynak:"Maddenin konusu Siena'daki salgin — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1555-04-17",
  b:"Siena'nın Floransa-İspanyol kuvvetlerine teslimi",
  yer_id:"Siena",
  kaynak:"Teslim sehrin kendisinde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1240-01-01",
  b:"Este ailesinin Ferrara'da beyliğini kurması",
  yer_id:"Ferrara",
  kaynak:"Este senyorlugunun kuruldugu sehir — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1471-01-01",
  b:"Papalık'ın 'Ferrara Dükü' unvanını tanıması",
  yer_id:"Roma",
  kaynak:"Papalik tevcihi ROMA'da yapildi; metin Ferrara'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1516-01-01",
  b:"Ariosto'nun 'Çılgın Orlando'yu yayımlaması",
  yer_id:"Ferrara",
  kaynak:"Ilk baski Ferrara'da yapildi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1598-01-01",
  b:"Ferrara'nın Papalık Devleti'ne ilhakı",
  yer_id:"Ferrara",
  kaynak:"Ilhak edilen sehir Ferrara — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-01-01",
  b:"Modena'nın Sardinya-Piyemonte'ye katılması",
  yer_id:"Modena",
  kaynak:"Katilim karari Modena'da alindi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1416-02-19",
  b:"Savoya'nın dükalığa yükseltilmesi",
  yer_id:"Chambéry",
  kaynak:"Imparatorluk tevcihi Savoya baskenti Chambery'de — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1798-12-09",
  b:"Piyemonte'nin Fransa'ya ilhakı",
  yer_id:"Torino",
  kaynak:"Ilhak karari ve kralin tahttan cekilmesi Torino'da — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1848-03-23",
  b:"I. Bağımsızlık Savaşı'nın başlaması",
  yer_id:"Torino",
  kaynak:"Savas ilani Torino'da yapildi (ilan bir andir ve bir yerde olur; kapsam_genis DEGIL) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1849-03-23",
  b:"Novara Savaşı yenilgisi — Carlo Alberto'nun tahttan çekilmesi",
  eksik_nokta:{ ad:"Novara", enlem:45.446, boylam:8.622 },
  kaynak:"Muharebe Novara onunde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1858-07-21",
  b:"Plombières görüşmesi — Cavour-Napolyon III gizli anlaşması",
  eksik_nokta:{ ad:"Plombières-les-Bains", enlem:47.965, boylam:6.458 },
  kaynak:"Gizli gorusme Plombieres kaplicalarinda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-04-29",
  b:"II. Bağımsızlık Savaşı'nın başlaması",
  yer_id:"Torino",
  kaynak:"Savasin acilisi Piyemonte baskentinden ilan edildi (kapsam_genis DEGIL, ayni gerekce) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-06-04",
  b:"Magenta Savaşı",
  eksik_nokta:{ ad:"Magenta", enlem:45.465, boylam:8.879 },
  kaynak:"Muharebe Magenta kasabasinda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-06-24",
  b:"Solferino Savaşı",
  eksik_nokta:{ ad:"Solferino", enlem:45.373, boylam:10.567 },
  kaynak:"Muharebe Solferino ve San Martino tepelerinde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1859-07-11",
  b:"Villafranca Ateşkesi",
  eksik_nokta:{ ad:"Villafranca di Verona", enlem:45.352, boylam:10.845 },
  kaynak:"Ateskes Villafranca'da imzalandi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1862-08-29",
  b:"Aspromonte — Garibaldi'nin Roma seferinin durdurulması",
  eksik_nokta:{ ad:"Aspromonte", enlem:38.17, boylam:15.9 },
  kaynak:"Carpisma Aspromonte daglarinda — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1866-06-20",
  b:"III. Bağımsızlık Savaşı'nın ilanı",
  yer_id:"Floransa",
  kaynak:"Savas ilani o tarihte BASKENT olan FLORANSA'dan yapildi (1865-71); Roma degil, Torino degil — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1867-11-03",
  b:"Mentana Savaşı — Garibaldi'nin ikinci Roma girişiminin durdurulması",
  eksik_nokta:{ ad:"Mentana", enlem:42.032, boylam:12.643 },
  kaynak:"Muharebe Roma yakinindaki Mentana'da — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1882-05-20",
  b:"Üçlü İttifak'ın imzalanması",
  yer_id:"Viyana",
  kaynak:"Uclu Ittifak VIYANA'da imzalandi; metin Italya'yi anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1896-03-01",
  b:"Adwa Savaşı yenilgisi",
  yer_id:"Adua",
  kaynak:"Muharebe Adua'da; TDV habesistan" },

{ dosya:"kronoloji_italya.js", t:"1900-07-29",
  b:"I. Umberto'nun suikastı",
  eksik_nokta:{ ad:"Monza", enlem:45.584, boylam:9.274 },
  kaynak:"Suikast Monza'da; Roma'da DEGIL (kolayca-baskent tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1911-09-29",
  b:"Trablusgarp Savaşı'nın ilanı",
  yer_id:"Roma",
  kaynak:"Savas ilani Roma'da; TDV trablusgarp-savasi" },

{ dosya:"kronoloji_italya.js", t:"1911-10-05",
  b:"Trablus'un işgali",
  yer_id:"Trablus",
  kaynak:"TDV trablusgarp" },

{ dosya:"kronoloji_italya.js", t:"1912-05-04",
  b:"Rodos ve Oniki Ada'nın işgali",
  yer_id:"Rodos",
  kaynak:"TDV oniki-ada" },

{ dosya:"kronoloji_italya.js", t:"1912-10-18",
  b:"Uşi (Ouchy/Lozan) Antlaşması",
  yer_id:"Lozan",
  kaynak:"Ouchy, LOZAN'in gol kiyisindaki semtidir; metin Trablus'u anlatir (ikincil yer tuzagi). TDV lozan-antlasmasi (1923 icin) — usi-antlasmasi slugu OLU (302, olculdu)" },

{ dosya:"kronoloji_italya.js", t:"1915-04-26",
  b:"Londra Gizli Antlaşması",
  yer_id:"Londra",
  kaynak:"Gizli antlasma Londra'da imzalandi — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1917-10-24",
  b:"Caporetto Bozgunu",
  eksik_nokta:{ ad:"Caporetto (Kobarid)", enlem:46.246, boylam:13.579 },
  kaynak:"Taarruz Caporetto/Kobarid kesiminde basladi; TURKCE ve yerel yazim havuzda arandi, YOK — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1918-10-24",
  b:"Vittorio Veneto Zaferi'nin başlaması",
  eksik_nokta:{ ad:"Vittorio Veneto", enlem:45.977, boylam:12.302 },
  kaynak:"Taarruz Vittorio Veneto ekseninde — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1918-11-03",
  b:"Villa Giusti Mütarekesi — Avusturya-Macaristan'ın teslimi",
  yer_id:"Padova",
  kaynak:"Villa Giusti PADOVA yakinindadir; metin Avusturya-Macaristan'i anlatir (ikincil yer tuzagi) — standart akademik cografi referans + maddenin kendi kaynak alani" },

{ dosya:"kronoloji_italya.js", t:"1919-04-28",
  b:"Antalya ve çevresinin işgali",
  yer_id:"Antalya",
  kaynak:"TDV antalya" },

{ dosya:"kronoloji_italya.js", t:"1919-09-12",
  b:"D'Annunzio'nun Fiume'yi işgali",
  eksik_nokta:{ ad:"Fiume (Rijeka)", enlem:45.327, boylam:14.442 },
  kaynak:"Isgal Fiume/Rijeka sehrinde; iki yazim da havuzda arandi, YOK — standart akademik cografi referans + maddenin kendi kaynak alani" },

];
