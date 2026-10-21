// ŞEHİR TARİHÇESİ — K12 · üretici: arac/sehir_tarihce.py · şema: VERI-YAPISI.md
// Motor/denetle/site OKUMAZ — araştırma birikimi. Elle düzenleme: JSON'u düzelt, yeniden üret.
window.SEHIR_TARIHCE_K12 = [
 {
  "id": "aquincum-obuda-pest",
  "ad": "Aquincum-Óbuda-Pest",
  "atlas_ad": "Aquincum-Óbuda-Pest",
  "lat": 47.498,
  "lon": 19.04,
  "kat1900": 2,
  "adlar": [
   "Eravisci oppidum (Gellért-hegy)",
   "Akink",
   "Aquincum",
   "Contra-Aquincum",
   "Pest",
   "Ofen",
   "Óbuda",
   "Buda",
   "Aquincum-Óbuda-Pest"
  ],
  "ilk": {
   "t": "0000-01-01",
   "gun": "MÖ 1. yüzyıl",
   "nicelik": "arkeolojik",
   "kesinlik": "yuzyil",
   "kaynak": "BHM Aquincum Müzesi (Budapest Tarih Müzesi), 'A short history of Aquincum', https://www.aquincum.hu/en/muzeumtori/aquincum-tortenete-roviden/ (1st century BC girdisi: Eravisci, Gellért-hegyi oppidum; Gellért-hegyi oppidum atlas noktasına ~1,4 km, kendi hesabım). Yazılı tanık: bu noktaya (<=3 km: Gellért-hegy, Víziváros, Contra-Aquincum/Pest) ait yazılı tanık bu oturumda açılamadı (bulunamadı); Óbuda'daki Aquincum için Ptolemaios Geogr. 2.15 anıldığı WebSearch özetinde görüldü (tp-online.ku.de 403) ama sayfa açılmadı ve Óbuda atlas noktasından ~7 km (>3 km).",
   "tanik": "Their centre is the hilltop fortified settlement ( oppidum ) on Gellért Hill"
  },
  "kur": null,
  "ark": {
   "t": "0000-01-01",
   "gun": "MÖ 1. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "BHM Aquincum Müzesi, 'A short history of Aquincum' (1st century BC: Eravisci kabilesi, merkezleri Gellért-hegyindeki oppidum). Daha erken Kelt yerleşimi: 'Celts settle in the Carpathian basin' MÖ 4.-3. yy (Kelt mezar/urn bulguları Csepel XXI. bölge; bu noktaya özgü değil)."
  },
  "bit": null,
  "sahip": [
   {
    "f": "0000-01-01",
    "t": "0049-01-01",
    "d": "eravisci",
    "kunye_yok": true,
    "kesinlik": "yuzyil",
    "kaynak": "BHM Aquincum Müzesi, 'A short history of Aquincum' (MÖ 1. yy: Eravisci, Pest/Fejér/Tolna bölgesi); Treccani, Enciclopedia Italiana 'Budapest' (1930): Keltler Ó-Buda yerinde Akink adlı kenti kurmuşlardı (tarihsiz)",
    "ic_not": "KÜNYE YOK: önerilen id 'eravisci' (Kelt Eravisci kabilesi, Pest-Fejér-Tolna; müzeye göre MÖ 1. yy'da merkez Gellért-hegyi oppidum; kabilenin ömrü/bitişi bu oturumda kaynaktan bulunamadı, bitiş = Roma denetimi ~MS 49). Dönem başı MÖ 1. yüzyıl girdisinden (yüzyıl kesinliği; 0000-01-01 yalnız yer tutucu sınır). Roma denetiminin Tuna dirseğine ulaşması için iki kaynak çelişir: müze ~MS 49 (Claudius); Munteán 2021 (Hungarian Cultural Studies 14, Kaba 1963'ten) 'Romans conquered the region around AD 10'. Güvenli uç = daha geç (49) alındı. İlk dönem boyasız künye ister."
   },
   {
    "f": "0049-01-01",
    "t": "0395-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "BHM Aquincum Müzesi (MS ~49 Roma denetimi Tuna dirseğine; 89 Legio II Adiutrix; 106 Pannonia Inferior merkezi; ~124 municipium; 194 colonia); TDV 'Macaristan' (I. yüzyılda Pannonia eyaleti); TDV 'Budin' (Romalılar zamanında Buda'nın kuzeyinde sivil ve askerî yerleşim merkezleri)",
    "ic_not": "Roma denetimi: Víziváros'taki ala Hispanorum I garnizonu Budapeşte'nin bilinen en erken Roma askerî üssüdür (müze, ~MS 49, atlas noktasına ~1 km — kendi hesabım). Künye geçişi roma-imp→bati-roma: TDV Bizans 395'te Doğu/Batı ayrımı yazar; gün 395-01-17 yalnız atlas künyesindedir (kaynakta gün doğrulanmadı) => 395-01-01 (yıl). TDV Macaristan: IV. yüzyıl sonlarında Hunlar'ın önünden kaçan barbarlar (Got, Vandal, Alan) bölgeyi geçici ele geçirip 'Roma idaresine son verdi' der; Aquincum'un 375'te Valentinianus'a kış karargâhı sunamadığı (Treccani EAA 1973 'Aquincum') — bu dönemde fiilî Roma denetimi tartışmalı, dönem zincirde Roma olarak bırakıldı ve 433 devri ile (müze) sınırlandı."
   },
   {
    "f": "0395-01-01",
    "t": "0433-01-01",
    "d": "bati-roma",
    "kesinlik": "yil",
    "kaynak": "BHM Aquincum Müzesi ('VALENTINIAN III AD 433 Pannonia is ceded to the Huns'); TDV Bizans (395 Doğu/Batı ayrımı)",
    "ic_not": "Pannonia'nın 395'te Batı Roma'ya ait olduğunu açan sözcük kaynakta yok; Batı imparatoru Valentinianus III'ün 433 devri (müze) Batı payını örtük gösterir — beyanlı yaklaşıklık. Hun devir yılı için kaynaklar çelişir: müze 433; Munteán 2021 (Kaba 1963'ten) 'ceded to the Huns in 409'; TDV Macaristan 'Hun İmparatorluğu 420-455 Karpat havzasından yönetiliyordu' (devir günü vermez). Müzenin tarihli olay (433) esas alındı; çelişki beyan."
   },
   {
    "f": "0433-01-01",
    "t": "0455-01-01",
    "d": "hun-avrupa",
    "kesinlik": "yil",
    "kaynak": "BHM Aquincum Müzesi (433 Pannonia Hunlara bırakıldı); TDV Macaristan ('420-455 yılları arasında Hun İmparatorluğu Karpat havzasından yönetiliyordu')",
    "ic_not": "Başlangıç 433 (müze); TDV 420'den itibaren Hun yönetimini Karpat havzasından anlatır (Pannonia devri değil). Künye hun-avrupa 370-455 ile uyumlu."
   },
   {
    "f": "0455-01-01",
    "t": "0567-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "TDV Macaristan: 'Hunlar’ın çöküşünden sonra Pannonia bölgesi Ostrogotlar’ın yönetimine girdi. Büyük Ova’ya ve Transilvanya’ya (Erdel) Gepideler hâkimdi'; Treccani 'Avari' (EI): Alboin Pannonia'daki Langobard yurtlarını Avarlara bıraktı (568)",
    "ic_not": "Şehir VAR (müze: Hun dönemi mezarı XIV. bölge; geç Roma kalesi içinde yerleşim), ama sahip tarihsizdir: TDV Ostrogotları (tarihsiz; künye dogu-got yalnız 493-553), Gepidleri (Büyük Ova/Erdel), 567'de Langobard-Avar ittifakını anar; Treccani EI Pannonia'da Langobardlar der (568 öncesi). 112 yıllık aralık 1 kuşaktan uzun => __BOSLUK__; kaynak sırası tamamlanmadı (Prokopios/Jordanes/Bizans-Macar monografileri açılmadı)."
   },
   {
    "f": "0567-01-01",
    "t": "0796-01-01",
    "d": "avar",
    "kesinlik": "yil",
    "kaynak": "TDV Macaristan ('567’de bir Longobard-Avar ittifakı yendi ve Karpat havzasını ... birleştiren Avar Hanlığı iki yüzyıl hâkimiyetini sürdürdü'); Treccani 'Avari' (EI): 'Dal 568 gli Avari abitarono nella puszta ungherese'; yıkım: 791, 795, 796 savaşları",
    "ic_not": "İki kaynak başlangıçta 567 (TDV) / 568 (Treccani) çelişir; TDV esas = 567, künye avar 567-822. Bitiş: Treccani Avarların devletini 791/795/796 savaşlarının yıktığını söyler (güvenli uç 796); künye 822'de bitiyor (sonrası künyeye göre uzatma gerekmez). Aquincum'un Avar çekirdek bölgesi içinde (Tuna-Tisza arası/puszta) olduğu doğrudan kaynakta yok; Livius'un Aquincum sayfası 'In Late Antiquity, the Avars settled in Aquincum' der (Lendering; akademik olmayan popüler-akademik site, yalnız ikinci tanık)."
   },
   {
    "f": "0796-01-01",
    "t": "0900-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "TDV Macaristan ('IX. yüzyılda Zalavár merkezli eski Pannonia, Karolinglar’ın kontrolü altındaydı'; Macarlar '862’den itibaren' geçici; '900 yılı civarında Tuna ötesini yurt edindiler')",
    "ic_not": "104 yıllık aralık: Avar çöküşünden Macar Tuna-ötesi yerleşimine kadar Buda/Pest'in sahibi kaynakta yok. TDV yalnız Zalavár merkezli Pannonia'yı Karolinglara (Frank) bağlar (Aquincum o merkezden uzak, bu noktaya genişletilmedi); Büyük Moravya (künye 833-907) ve Bulgar iddiaları açılan kaynakta yok. Beyansız yaklaşıklık yazılmadı => __BOSLUK__."
   },
   {
    "f": "0900-01-01",
    "t": "1000-01-01",
    "d": "macar-prensligi",
    "kesinlik": "yil",
    "kaynak": "TDV Macaristan ('895-896’da Árpád’ın önderliğiyle Karpatlar’ı aşıp Transilvanya’yı ve Büyük Ova’yı, 900 yılı civarında Tuna ötesini yurt edindiler')",
    "ic_not": "f 900: 'Tuna ötesi' yurt edinme (Buda/Aquincum Tuna'nın sağ yakası); güvenli (daha geç) uç alındı; Pest (sol yaka/Büyük Ova kıyısı) için 895-896 olabilir ama tarihlenmedi. TDV Budin: 'Macarlar Karpat havzasına geldiklerinde önce burayı merkez yapmadılar.' Künye macar-prensligi 895-1000 ile uyumlu."
   }
  ],
  "olay": [
   {
    "t": "0049-01-01",
    "gun": "~MS 49",
    "k": "fetih",
    "b": "Roma denetimi Tuna dirseğine uzanır; ala Hispanorum I Víziváros'ta (Budapeşte'nin bilinen en erken Roma askerî üssü)",
    "kaynak": "BHM Aquincum Müzesi, 'A short history of Aquincum' (Claudius, around AD 49); çelişki: Munteán 2021 (Kaba 1963) ~MS 10",
    "tanik": "Extension of Roman control until the Danube bend."
   },
   {
    "t": "0089-01-01",
    "gun": "89",
    "k": "kurulus",
    "b": "Legio II Adiutrix Óbuda'da kalıcı üs kurar (Aquincum lejyon kampı; Óbuda atlas noktasından ~7 km kuzey)",
    "kaynak": "BHM Aquincum Müzesi; Munteán 2021 (HCS 14): kamp 88-91 arası inşa",
    "tanik": "The Legio II Adiutrix builds a permanent base in Óbuda."
   },
   {
    "t": "0106-01-01",
    "gun": "106",
    "k": "diger",
    "b": "Pannonia ikiye bölünür; Aquincum Pannonia Inferior'ın merkezi olur",
    "kaynak": "BHM Aquincum Müzesi (Trajan, AD 106); çelişki: kaynaklarda 103 da anıldı (WebSearch özeti, doğrulanmadı)",
    "tanik": "Aquincum becomes the seat of Pannonia Inferior."
   },
   {
    "t": "0124-01-01",
    "gun": "~124",
    "k": "diger",
    "b": "Sivil kent (Civil Town) municipium statüsü alır; surlar",
    "kaynak": "BHM Aquincum Müzesi (around AD 124); Munteán 2021: 'In AD 124 ... municipium'",
    "tanik": "The Civil Town gains municipium status, town walls are built."
   },
   {
    "t": "0194-01-01",
    "gun": "194",
    "k": "diger",
    "b": "Askerî kent ve sivil kent birlikte colonia olur (Septimius Severus)",
    "kaynak": "BHM Aquincum Müzesi (AD 194); Munteán 2021 (HCS 14) 'colonia in 194' — çift teyit (müze + hakemli makale; ikisi de ikincil). Çelişki: Treccani, Enc. dell'Arte Antica 'Aquincum' (1973, F. Parise Badoni) 'costituzione di A. a colonia (198)'",
    "tanik": "The Aquincum Military Town and Civil Town receives the rank of colonia together."
   },
   {
    "t": "0260-01-01",
    "gun": "260",
    "k": "yikim",
    "b": "Quadi, Roxolani ve Sarmatların limes saldırısı; lejyon kalesi, askerî ve sivil kentte yıkım izleri",
    "kaynak": "BHM Aquincum Müzesi (Gallienus, AD 260)",
    "tanik": "Signs of destruction in the legionary fortress, Military Town and Civil Town."
   },
   {
    "t": "0294-01-01",
    "gun": "294",
    "k": "diger",
    "b": "Diocletianus reformu: Pannonia dörde bölünür; Aquincum Valeria eyaletinin askerî merkezi",
    "kaynak": "BHM Aquincum Müzesi (AD 294)",
    "tanik": "Aquincum becomes the military centre of the province of Valeria"
   },
   {
    "t": "0332-01-01",
    "gun": "~332",
    "k": "kurulus",
    "b": "Geç Roma kalesi inşa edilir (Constantinus I)",
    "kaynak": "BHM Aquincum Müzesi (around AD 332)",
    "tanik": "Under Constantine the Great, the Late Roman fortress is constructed."
   },
   {
    "t": "0395-01-01",
    "gun": "395",
    "k": "diger",
    "b": "künye geçişi: roma-imp -> bati-roma (Theodosius sonrası imparatorluğun Doğu/Batı ayrımı; gün 395-01-17 yalnız atlas künyesinde)",
    "kaynak": "TDV, 'Bizans' (Büyük Theodosios 379-395)",
    "tanik": "iki oğlu Arkadios ve Honorios arasında Doğu ve Batı Roma olmak üzere ikiye ayrıldı"
   },
   {
    "t": "0433-01-01",
    "gun": "433",
    "k": "kayip",
    "b": "Pannonia Hunlara bırakılır (Valentinianus III)",
    "kaynak": "BHM Aquincum Müzesi (AD 433); çelişki: Munteán 2021 (Kaba 1963) 409",
    "tanik": "Pannonia is ceded to the Huns."
   },
   {
    "t": "0455-01-01",
    "gun": "455",
    "k": "diger",
    "b": "Hun İmparatorluğu'nun Karpat havzasından yönetimi sona erer (TDV: 420-455); Pannonia Hun sonrası Ostrogotlara geçer (tarihsiz)",
    "kaynak": "TDV, 'Macaristan'",
    "tanik": "420-455 yılları arasında Hun İmparatorluğu Karpat havzasından yönetiliyordu"
   },
   {
    "t": "0567-01-01",
    "gun": "567",
    "k": "fetih",
    "b": "Langobard-Avar ittifakı Gepidleri yener; Avar Hanlığı Karpat havzasını birleştirir",
    "kaynak": "TDV, 'Macaristan'; Treccani 'Avari' (EI): 568",
    "tanik": "567’de bir Longobard-Avar ittifakı yendi"
   },
   {
    "t": "0796-01-01",
    "gun": "796",
    "k": "kayip",
    "b": "Frank (Pipin, Friuli Markgrafı Henrik) seferleri Avar devletini yıkar (791, 795, 796 savaşları)",
    "kaynak": "Treccani, Enciclopedia Italiana 'Avari' (1930), https://www.treccani.it/enciclopedia/avari_(Enciclopedia-Italiana)/",
    "tanik": "guerre che nel 791, 795 e 796 gli mossero"
   },
   {
    "t": "0900-01-01",
    "gun": "~900",
    "k": "fetih",
    "b": "Macarlar Tuna ötesini (Pannonia) yurt edinir",
    "kaynak": "TDV, 'Macaristan'",
    "tanik": "900 yılı civarında Tuna ötesini yurt edindiler"
   },
   {
    "t": "1000-01-01",
    "gun": "1000-1001",
    "k": "diger",
    "b": "künye geçişi: macar-prensligi -> macaristan (I. István 1000-1001'de taç giyen ilk Macar kralı; yıl aralığı kaynakta kesin değil — atlas başlangıcı 1000-01-01)",
    "kaynak": "TDV, 'Macaristan'",
    "tanik": "1000-1001’de taç giyen ilk kral olan I. István Macar Devleti’nin kurucusudur"
   },
   {
    "t": "1241-01-01",
    "gun": "1241",
    "k": "yikim",
    "b": "Moğol (Tatar) istilası Buda'yı harap eder (1000 sonrası; zincire girmez)",
    "kaynak": "Treccani, Enciclopedia Italiana 'Budapest' (1930): 'Buda fu devastata dai Tartari nel 1241'",
    "tanik": "Buda fu devastata dai Tartari nel 1241"
   },
   {
    "t": "1242-01-01",
    "gun": "1241-1242 sonrası (alt sınır)",
    "k": "kurulus",
    "b": "IV. Béla istiladan sonra Tuna'nın sağ yakasında taş kale (bugünkü Buda Kalesi) yaptırır; Buda adı buraya geçer, eski kent 'Eski Buda' (Óbuda) olur (1000 sonrası; zincire girmez)",
    "kaynak": "TDV, 'Budin' (Géza Dávid); Treccani, EI 'Budapest' — çift teyit (TDV Türkçe + Treccani İtalyanca)",
    "tanik": "burada taştan bir kale inşa ettirdi"
   }
  ],
  "ic_not": "ATLAS NOKTASI BÖLGE TEMSİLCİSİDİR (47.498, 19.040; Buda/Pest Tuna kıyısı). SAF AQUINCUM (Óbuda lejyon kampı ve kent) ~7 km kuzeyde (Óbuda ~47.56-47.57, 19.04; kendi hesabım) => >3 km kuralı gereği saf Aquincum bu kayda yazılmaz, AYRI KAYIT ÖNERİLİR: 'Aquincum (Óbuda)' (47.5625, 19.04 yakını), ilk yazılı tanık Ptolemaios Geogr. 2.15 (tp-online.ku.de arama özeti: Ακούϊγκον; sayfa 403, AÇILAMADI), lejyon kampı 89 (BHM Aquincum Müzesi), municipium ~124, colonia 194. Bu kayıt, ≤3 km içindeki yerleşimlerden (Víziváros Roma kalesi ~MS 49, ~1 km; Gellért-hegyi Eravisci oppidumu MÖ 1. yy, ~1,4 km; Contra-Aquincum/Pest) başlatıldı; hesaplar benim, kaynak değil. Dolayısıyla ilk.nicelik 'arkeolojik' (bu noktaya ait yazılı tanık bulunamadı); Treccani EI: 'Keltler Ó-Buda yerinde Akink adlı kenti kurdu' (tarihsiz) — kur yazılmadı. Buda KALESİ 1241-42 sonrasıdır (IV. Béla; TDV+Treccani çift teyit) ve bu nokta o kaleden >1000 yıl önce başlar; Ofen/Pest adları: Treccani EI (fırın/Ofen, Slavca Pest, Macarlar öncesi). KAYNAKLAR: BHM Aquincum Müzesi 'A short history of Aquincum' (kurumsal arkeoloji sitesi, hakemli değil); Munteán 2021 Hungarian Cultural Studies 14 (hakemli e-dergi; ikincil); Treccani EAA 1973 + EI 1930 (Aquincum madde slug'ı EI'de açılmadı); TDV Macaristan/Budin/Bizans/Avarlar. AÇILAMAYAN: Pleiades yer sayfası (arama alakasız), tp-online 403, Livius Singidunum/Belgrade zaman aşımı, Brill/Pauly, Budapest Régiségei tam metin, Acta Arch. Hung. 2021 PDF boş döndü. Unvan boşluk: 455-567 ve 796-900 __BOSLUK__. 1000 dikişi: atlas macaristan 1000-01-01 ile zincir sonu macar-prensligi; künye geçişi olayı yazıldı."
 },
 {
  "id": "bahcesaray",
  "ad": "Bahçesaray",
  "atlas_ad": "Bahçesaray",
  "lat": 44.753,
  "lon": 33.861,
  "kat1900": 4,
  "adlar": [
   "Bahçesaray",
   "Bakhchysarai (Бахчисарай)"
  ],
  "ilk": {
   "t": "1503-01-01",
   "gun": "1503",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi 'Bahçesaray', https://islamansiklopedisi.org.tr/bahcesaray (curl ile okundu)",
   "tanik": "1503’te şimdi Han Sarayı adıyla bilinen sarayı yaptırarak Bahçesaray’ın temelini attı",
   "ic_not": "TDV: I. Mengli Giray Han Çürüksu kıyısına 1503'te Han Sarayı'nı yaptırarak 'Bahçesaray’ın temelini attı'; XVI. yy'a kadar ormanlık, Altın Orda valileri/ilk Kırım hanları yazlık gelirdi (yerleşim yok). Yakındaki Kırk Yer / Eski Yurt ayrı yerleşimlerdir (≤3 km? Kırk Yer 'hemen güneyinde' — mükerrer taraması yapılmadı)."
  },
  "kur": {
   "t": "1503-01-01",
   "gun": "1503",
   "kesinlik": "yil",
   "kaynak": "TDV 'Bahçesaray', https://islamansiklopedisi.org.tr/bahcesaray",
   "tanik": "1503’te şimdi Han Sarayı adıyla bilinen sarayı yaptırarak Bahçesaray’ın temelini attı"
  },
  "ark": null,
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1503-01-01",
    "gun": "1503",
    "k": "kurulus",
    "b": "I. Mengli Giray Han Han Sarayı'nı yaptırarak Bahçesaray'ın temelini atar.",
    "kaynak": "https://islamansiklopedisi.org.tr/bahcesaray",
    "tanik": "1503’te şimdi Han Sarayı adıyla bilinen sarayı yaptırarak Bahçesaray’ın temelini attı"
   }
  ],
  "ic_not": "ZİNCİR YOK (şehir 1503'te kuruluyor; atlas da 1503'te başlıyor). ATLAS DÜZELTME ÖNERİSİ: atlasın ilk sahip günü 1503-01-01 'osmanli' görünüyor (atlas_ilk_gunleri çıktısı); 1503'te Bahçesaray Kırım Hanlığı topraklarındadır (TDV: I. Mengli Giray'ın yapısı; Osmanlı himayesi 1475'ten ama toprak hanlığındır) — ilk dönemin d: 'kirim' olması gerekir, 1503-1774 arası kayıt boş (atlas s: 1774'te başlıyor). Kırk Yer/Salaçık ayrı yerleşimler."
 },
 {
  "id": "barselona",
  "ad": "Barselona",
  "atlas_ad": "Barselona",
  "lat": 41.387,
  "lon": 2.17,
  "kat1900": 2,
  "adlar": [
   "Barkeno(s)",
   "Barcino",
   "Barsinona/Berşinüne/Berşelûne",
   "Barsciluna",
   "Barchinona",
   "Barcelona"
  ],
  "ilk": {
   "t": "-0200-12-31",
   "gun": "MÖ 3. yüzyıl sonu",
   "nicelik": "ilk_anilis",
   "kesinlik": "yuzyil",
   "kaynak": "Princeton Encyclopedia of Classical Sites (1976), 'BARCINO (Barcelona)' — https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0006:entry=barcino",
   "tanik": "who minted silver drachmae at the end of the 3d c. B.C.",
   "ic_not": "İlk anılış (Laietani oppidumu 'BARKENOS' İber yazılı sikke efsanesi) alt sınırdır; aralığın (MÖ 3. yy sonu) SON ucu alındı (MÖ 201 = -0200-12-31). Roma kolonisi 'Colonia Iulia Augusta Paterna Faventia Barcino' Augustus'a atfedilir (Princeton: 'indicating that it was founded by Augustus'; tarih yok). ÇELİŞKİ: TDV 'Berşelûne': 'ilk sakinleri İberler’dir. Şehir milâttan önce 237’de Kartacalı Hamilcar Barca’nın eline geçmiş ve onun şerefine Barcino adını almıştır' — Princeton 'This is unacceptable' (Barca etimolojisi; ad Avienus'ta saf İber biçimiyle 'Barcilo') ve Treccani 'l'impero cartaginese non s'è mai esteso al nord dell'Ebro' der. TDV esas kuralı gereği çelişki beyan edilir; MÖ 237 kuruluş değil etimoloji rivayeti olarak okundu ve dönem başlangıcı yapılmadı (Kartaca künyesi bu şehre yazılmadı)."
  },
  "kur": {
   "t": "0014-01-01",
   "gun": "MS 14'e kadar (Augustus dönemi)",
   "kesinlik": "belirsiz",
   "kaynak": "Princeton Encyclopedia 'BARCINO'; Treccani, Enciclopedia Italiana, 'Barcellona' — https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
   "tanik": "indicating that it was founded by Augustus"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0200-12-31",
    "t": "-0026-01-16",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yuzyil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
    "ic_not": "Treccani: 'Venuta sotto il dominio romano, dall'inizio della seconda guerra punica ai tempi d'Augusto fu colonia romana' (II. Pön savaşı başı = MÖ 218; metin Barcino'nun kolonilik evresini Augustus'a atar — ifade bulanık). Roma hâkimiyeti MÖ 218'den (Hispania Citerior), ilk anılış MÖ 201'den önce; başlangıç ilk anılıştır. İber-Laietani dönemi için sahip tanığı bulunamadı."
   },
   {
    "f": "-0026-01-16",
    "t": "0395-01-17",
    "d": "roma-imp",
    "kesinlik": "gun",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/; Princeton 'BARCINO'",
    "ic_not": "Colonia Iulia Augusta Paterna Faventia Barcino; Tarraconensis eyaleti; Antoninler ve geç imparatorlukta gelişir (Treccani)."
   },
   {
    "f": "0395-01-17",
    "t": "0415-01-01",
    "d": "bati-roma",
    "kesinlik": "yil",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/; Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
    "ic_not": "t: Vizigot girişi 415 (yıl)."
   },
   {
    "f": "0415-01-01",
    "t": "0715-01-01",
    "d": "vizigot",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune; Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
    "ic_not": "ÇİFT TEYİT (415): TDV ve Treccani EI. Vallia Toulouse'a taşıdı, Amalarik döneminde yeniden merkez (Treccani); konsiller 540 ve 589. Vizigot künyesi 711'de biter; fetih 96/715 → dönem 715'e uzatıldı (hayalet uyarısı)."
   },
   {
    "f": "0715-01-01",
    "t": "0756-05-15",
    "d": "emevi",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune",
    "ic_not": "ÇELİŞKİ (fetih yılı): TDV 'Berşelûne' fethin 95'ten önce (714), 96 (715) ya da Makkarî'ye göre 105 (723) olduğunu belirtir ve '96’da fethin gerçekleştiği sonucuna varmak mümkündür' der; Treccani 'Spagna': 'gli Arabi s'impadronirono di Barcellona intorno al 718'. TDV esas: 96 H = 715. TDV ayrıca 'ilk fetihten bir süre sonra yeniden Franklar’ın eline geçmiş, 723’te ikinci defa fethedilmiştir' der (süre/gün yok → dönem AÇILMADI). Künye GENİŞLET (Emevî valileri 756'ya kadar)."
   },
   {
    "f": "0756-05-15",
    "t": "0801-12-25",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune; Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
    "ic_not": "Kurtuba'ya uzaklık nedeniyle yarı bağımsız Müslüman valiler (Treccani); Matrûh'un isyanı 791'de bastırıldı (TDV)."
   },
   {
    "f": "0801-12-25",
    "t": "1137-01-01",
    "d": "barselona-kontlugu",
    "kesinlik": "gun",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune",
    "ic_not": "Frank fethi 25 Aralık 801 (Treccani) — Marca Hispanica merkezi. 985'te el-Mansûr şehri ele geçirdi, 987'de Kont I. Borell geri aldı (TDV; 2 yıllık kısa işgal, dönem açılmadı); Treccani 914 ve 995 geçici Arap geri alışlarını belirtir. 888'den itibaren bağımsız Katalonya Kontluğu merkezi (TDV). t: 1137 yıl hassasiyeti (Treccani Petronilla ile evlilik)."
   },
   {
    "f": "1137-01-01",
    "t": "1281-01-01",
    "d": "aragon",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/ (+ 'contea di Barcellona' bölümü); TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune",
    "ic_not": "Barselona Kontluğu Aragon ile birleşir (Aragon Tacı). Atlas ilk dönemi (1281-01-01 aragon) ile aynı sahip: dikiş olay istemez."
   }
  ],
  "olay": [
   {
    "t": "-0200-12-31",
    "gun": "MÖ 3. yüzyıl sonu",
    "k": "diger",
    "b": "Barcino adı İber yazılı sikke efsanesinde (BARKENOS) ilk görünür; Laietani oppidumu gümüş drahmi basar.",
    "kaynak": "Princeton Encyclopedia 'BARCINO (Barcelona)'",
    "tanik": "who minted silver drachmae at the end of the 3d c. B.C."
   },
   {
    "t": "0014-01-01",
    "gun": "MS 14'e kadar (Augustus dönemi)",
    "k": "kurulus",
    "b": "Augustus'a atfedilen Roma kolonisi Colonia Iulia Augusta Paterna Faventia Barcino (tarihsiz).",
    "kaynak": "Princeton Encyclopedia 'BARCINO'; Treccani 'Barcellona'",
    "tanik": "indicating that it was founded by Augustus"
   },
   {
    "t": "-0026-01-16",
    "gun": "16 Ocak MÖ 27",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti → Roma İmparatorluğu (Octavianus 'Augustus' unvanını alır).",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/",
    "tanik": "16 January 27: Imperator Caesar Divi filius Augustus"
   },
   {
    "t": "0395-01-17",
    "gun": "17 Ocak 395",
    "k": "diger",
    "b": "künye geçişi: Roma İmparatorluğu → Batı Roma (Theodosius I ölür, imparatorluk Arcadius/Honorius arasında bölünür).",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "tanik": "17 January 395: natural death"
   },
   {
    "t": "0415-01-01",
    "gun": "415",
    "k": "fetih",
    "b": "Vizigotlar Ataulf komutasında Barselona'ya girer; şehir Vizigot saray ve hükümet merkezi olur.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune; Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/",
    "tanik": "entrati i Visigoti in Barcellona sotto il comando di Ataulfo, nel 415"
   },
   {
    "t": "0715-01-01",
    "gun": "96 H / 715",
    "k": "fetih",
    "b": "Mûsâ b. Nusayr komutasındaki İslâm ordusu Berşelûne'yi fetheder; halka can-mal-din güvencesi tanınır.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune",
    "tanik": "96’da ise fethin gerçekleştiği sonucuna varmak mümkündür"
   },
   {
    "t": "0756-05-15",
    "gun": "15 Mayıs 756",
    "k": "diger",
    "b": "künye geçişi: Emevî valileri (Yûsuf el-Fihrî) → bağımsız Endülüs Emevî Emirliği; I. Abdurrahman Musâre savaşını kazanır, Kurtuba'ya girer (11 Mayıs'ta karargâh, 15 Mayıs sabahı saldırı). Barselona için: Kurtuba'ya uzak yarı özerk valiler (Treccani).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-i (HAKKI DURSUN YILDIZ)",
    "tanik": "15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı"
   },
   {
    "t": "0801-12-25",
    "gun": "25 Aralık 801",
    "k": "fetih",
    "b": "Franklar (Louis) Barselona'yı alır; şehir Marca Hispanica'nın başkenti olur.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune (801)",
    "tanik": "La conquista da parte dei Franchi (25 dicembre 801)"
   },
   {
    "t": "0985-01-01",
    "gun": "985",
    "k": "isgal",
    "b": "el-Mansûr Barselona'yı ele geçirir; 987'de Kont I. Borell geri alır (kısa işgal, dönem açılmadı).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/berselune",
    "tanik": "ve şehir 985’te ele geçirildi. Ancak 987’de Kont I. Borell tarafından geri alındı"
   },
   {
    "t": "1137-01-01",
    "gun": "1137",
    "k": "antlasma",
    "b": "Ramon Berenguer IV Aragon Kraliçesi Petronilla ile evlenir; Barselona Kontluğu Aragon ile birleşir.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/barcellona_(Enciclopedia-Italiana)/ ('Barcellona (contea)')",
    "tanik": "che sposa Petronilla d'Aragona nel 1137, la contea di Barcellona si unisce con l'Aragona"
   }
  ],
  "ic_not": "Kuruluş tarihi bulunamadı: Barcino kolonisi Augustus'a atfedilir ama tarih yok; ilk yazılı tanık (sikke efsanesi) MÖ 3. yy sonu. TDV'nin MÖ 237 Hamilcar rivayeti Princeton ve Treccani'ce reddedilir (beyan). Çift teyit: 415 Vizigot girişi (TDV + Treccani), 801 Frank fethi (Treccani gün; TDV yıl), Aragon birleşmesi 1137 (Treccani yıl; TDV yıl vermez). Fetih yılı çelişkisi: TDV 715, Treccani 'Spagna' ≈718. Zincir atlas ilk gününde (1281-01-01 Aragon) biter."
 },
 {
  "id": "belgrad",
  "ad": "Belgrad",
  "atlas_ad": "Belgrad",
  "lat": 44.818,
  "lon": 20.457,
  "kat1900": 2,
  "adlar": [
   "Singidunum",
   "Belgrad (Beograd)",
   "Nándorfehérvár",
   "Weizenburg"
  ],
  "ilk": {
   "t": "0200-01-01",
   "gun": "2. yüzyılın ikinci yarısı",
   "nicelik": "ilk_anilis",
   "kesinlik": "yuzyil",
   "kaynak": "Arkeoloji Enstitüsü Belgrad (Archaeological Institute, Belgrade), 'SINGIDUNUM – BELGRADE', https://ai.ac.rs/en/7651/ (2023): 'the first mention of Singidunum comes from Ptolemy’s Geography from the second half of the 2nd century'; Treccani, Enciclopedia Italiana 'Belgrado' (1930): Singidunum, 'in Ptol., III, 9, 3'",
   "tanik": "the first mention of Singidunum comes from Ptolemy’s “Geography”"
  },
  "kur": null,
  "ark": {
   "t": "0001-01-01",
   "gun": "1. yüzyılın ilk yarısı",
   "kesinlik": "yuzyil",
   "kaynak": "Arkeoloji Enstitüsü Belgrad, 'SINGIDUNUM – BELGRADE' (https://ai.ac.rs/en/7651/): 'as early as the first half of the first century AD' Roma varlığı; Treccani, Enc. dell'Arte Antica 'Singidunum' (G. Novak, 1966): Keltler (Scordisci) tarafından tarih öncesi iskân yerine kuruldu, Augustus zamanında Roma'ya geçti; TDV 'Belgrad' (Djuric-Zamolo): Scordisci MÖ III. yy'da Karaburma'da ilk yerleşimi kurdu."
  },
  "bit": null,
  "sahip": [
   {
    "f": "0200-01-01",
    "t": "0395-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Treccani, EAA 'Singidunum' (1966): 'passò ai tempi di Augusto sotto la dominazione romana'; Arkeoloji Enstitüsü Belgrad (https://ai.ac.rs/en/7651/): IV Flavia lejyonu, municipium ~2. yy ortası, colonia Severus hanedanı; TDV 'Belgrad'",
    "ic_not": "Dönem başı ilk.t (Ptolemaios, 2. yy ikinci yarısı, güvenli uç 200); Roma dönemi aslında daha eskidir (ark ~MS 1. yy ilk yarı; Augustus dönemi). colonia tarihi çelişkisi: EAA 1966 'non diventò colonia prima del 239'; EI 1930 'dopo Settimio Severo; prima iscrizione ... 287 d. C.'; Arkeoloji Enstitüsü 'Severus hanedanı zamanı'. Künye geçişi 395: TDV Bizans (Büyük Theodosios 379-395; imparatorluk Doğu/Batı'ya ikiye ayrıldı); gün 395-01-17 yalnız atlas künyesinde => 395-01-01."
   },
   {
    "f": "0395-01-01",
    "t": "0441-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "TDV 'Bizans' (330-1453 Balkan yarımadası; 395 Doğu/Batı ayrımı); TDV 'Belgrad'; Treccani EI 'Belgrado': IV. yy'da Hristiyan piskoposluk merkezi, 336 Ariusçu sinod",
    "ic_not": "Singidunum'un 395'te Doğu'ya düştüğünü doğrudan bildiren cümle açılan kaynaklarda yok; TDV Bizans maddesi imparatorluğu 'Balkan yarımadası...' ile tanımlar ve Iustinianos'un kenti yeniden surlamasıyla uyumlu => beyanlı yaklaşıklık (kesinlik yil)."
   },
   {
    "f": "0441-01-01",
    "t": "0565-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "TDV 'Belgrad': 441'de Hunlar tarafından tamamen tahrip edildi; V. yy ikinci yarısında Gotlar, Gepidler ve Herullar'ın saldırısı; Treccani EAA: 441'de Hunlar, sonra Sarmatlar, sonunda Gotlar; Treccani EI: Hunlar, Sarmatlar, Gotlar tarafından işgal ve harap",
    "ic_not": "Şehir var (saldırıya uğruyor), ama sahip tarihsiz: Hun, Sarmat, Got, Gepid, Herul işgalleri sıralanır, el değiştirme günleri verilmez. Bizans'ın yeniden sahipliği Iustinianos'un surlarıyla (saltanat 527-565, TDV Bizans) kanıtlı; dayanak günü bulunamadı => f en geç tanık olarak 565 (saltanat sonu), önceki aralık 124 yıl > 1 kuşak => __BOSLUK__. Prokopios (De aedif.) açılmadı."
   },
   {
    "f": "0565-01-01",
    "t": "0601-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "TDV 'Belgrad': 'Bizans İmparatoru I. Iustinianos yıkılmış olan şehrin etrafını surlarla çevirip tahkim ettirdi'; Treccani EAA: 'Giustiniano la rinnovò e la cinse di mura'; Treccani EI: Iustinianos kenti savunma için yeniden kurdu, kale VII. yy başında Avarlarca alındı",
    "ic_not": "f 565 = en geç tanık (Iustinianos saltanatı 527-565; TDV Bizans: 'Iustinianos (527-565)'), güvenli uç. Bitiş 601 = 'VII. yüzyılın başı' (kesinlik yüzyıl), yüzyılın ilk yılı alındı; TDV: 568'de Avarlar Pannonia'yı alınca Singidunum Bizans-Avar çarpışmalarının sürekli savaş alanı oldu."
   },
   {
    "f": "0601-01-01",
    "t": "0878-01-01",
    "d": "__BILINMIYOR__",
    "kesinlik": "belirsiz",
    "kaynak": "TDV 'Belgrad': 'VII. yüzyılın başlarında Avar ve Slavlar’ın saldırılarıyla tamamen yıkıldı. Bundan sonra şehrin tarihi bir müddet meçhul kalmaktadır'; Treccani EI: 'D'allora in poi, e fino al sec. IX, mancano notizie di Singidunum'",
    "ic_not": "Şehrin bu dilimde var olup olmadığı iki kaynakta da bilinmiyor (yıkım + haber yokluğu). Avar elinde alındığı VII. yy başı (Treccani EI) ama sürekli sahiplik bilgisi yok => __BILINMIYOR__. Çift teyit: TDV (Türkçe) ve Treccani EI (İtalyanca) aynı boşluğu bildirir. Karaburma'daki Scordisci yerleşimi (MÖ III. yy; TDV) atlas noktasından ~4 km (kendi hesabım) => >3 km, bu kayda yazılmadı; öneri: ayrı kayıt 'Karaburma (Scordisci)'."
   },
   {
    "f": "0878-01-01",
    "t": "1014-01-01",
    "d": "birinci-bulgar",
    "kesinlik": "yil",
    "kaynak": "TDV 'Belgrad': '878 tarihli bir belgede ilk defa Slav kökenli Belgrad ismiyle bir piskoposluk merkezi olarak zikredilmektedir'; Treccani EI 'Belgrado': yeniden anıldığında Slavca adıyla 'ed è in possesso dei Bulgari'; TDV 'Bizans': 'Nihayet 1014 yılında kazandığı zaferle Bulgar Devleti’ni yıkarak arazisini imparatorluğa ilhak etti'",
    "ic_not": "f 878 = ilk yeniden anılış yılı (TDV) ve Treccani'nin 'Bulgarların elinde' dediği dönem (IX. yy) — iki kaynağın birleştirilmesi çıkarımdır; BEYANLI YAKLAŞIKLIK. Bitiş 1014: Belgrad'ın Bulgar elinden çıkış günü kaynakta yok; TDV Bizans Bulgar Devleti'nin 1014'te yıkılıp topraklarının ilhakını yazar (devlet ilhakından çıkarım). TDV Belgrad ayrıca 'Bulgarlar, Bizanslılar ve Macarlar arasında sık sık el değiştirmiştir' der (tarihsiz). Künye birinci-bulgar 681-1018: dönem künye içinde; künye bitişi (1018) ile TDV (1014) arasında fark: künye düzeltme önerisi ayrı."
   },
   {
    "f": "1014-01-01",
    "t": "1124-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani EI 'Belgrado': 'Nel sec. XI e XII a Belgrado risiedeva uno stratega bizantino'; TDV 'Bizans' (1014 Bulgar Devleti'nin ilhakı)",
    "ic_not": "Bu 110 yıl içindeki olası kısa kesintiler (Peçenek/Macar/Haçlı) açılan kaynaklarda yok; 'XI. ve XII. yy'da Bizans stratejosu orada oturuyordu' (Treccani EI). Dönem başı 1014 yukarıdaki çıkarımdır."
   },
   {
    "f": "1124-01-01",
    "t": "1154-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "Treccani EI 'Belgrado': 'Occupata e distrutta dai Magiari nel 1124, fu rioccupata e ricostruita dai Bizantini nel 1154'",
    "ic_not": "Treccani Macar işgalini 1124'te, Bizans yeniden işgalini 1154'te verir; aradaki 30 yıl Macar elinde varsayıldı ('rioccupata' sözcüğüne dayalı çıkarım; beyan). Macar bakışı (Hungarian-Serbian akademik kaynak) açılmadı."
   },
   {
    "f": "1154-01-01",
    "t": "1183-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani EI 'Belgrado': Bizanslılarca 1154'te yeniden işgal ve inşa; 'gli Ungheresi occuparono di nuovo Belgrado sotto l'imperatore Andronico Comneno (1180-1183)'",
    "ic_not": "Bitiş 'en geç tanıktan': Treccani Macar işgalini Andronikos Komnenos (1180-1183) dönemine koyar, günü vermez; güvenli (geç) uç 1183 alındı, Bizans dönemi 1183'e uzatıldı (beyan; önceki sahibin son tanığı ile 1183 arası 29 yıl, kuşaktan kısa)."
   },
   {
    "f": "1183-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "Treccani EI 'Belgrado': 'Belgrado si trova sotto la sovranità degli Ungheresi' (XII. yy sonundan sonra, 'salvo una breve interruzione', doğrudan ya da Sırp vasal prensler aracılığıyla); Aleksandar Uzelac, 'Patrimony of Queen Jelena', Crkvene studije 22 (2025), Institute of History Belgrade, http://doi.fil.bg.ac.rs/pdf/journals/ccs_cs/2025/ccs_cs-2025-22-22-16.pdf, DOI 10.18485/ccs_cs.2025.22.22.16",
    "ic_not": "1281 DİKİŞİ ATLASLA ÇELİŞİR: atlas Belgrad 1281-01-01'de d:sirbistan başlatıyor. Uzelac 2025 (Sırp Tarih Enstitüsü hakemli dergisi): Mačva (Syrmia Ulterior; Belgrad'ı içerir) 1272-1279 arası Macar hükümetinin atadığı kral memurlarınca (banlar), 1280-1284 arası Kraliçe-anne Elizabeth (Kuman) tarafından yönetildi; Elizabeth en son 11 Haziran 1284'te anılır; Dragutin'e Mačva ve Belgrad 1284'ün ikinci yarısında (Danilo II'ye göre güz 1284'ten önce) Ladislaus IV tarafından 'fief' olarak verildi — Macar tacının resmî egemenliği sürdü (sonradan Dragutin 1316'ya kadar). Yani 1281-01-01'de Belgrad Macar denetimindeydi; ilk Sırp (Nemanjić/Dragutin) yönetimi 1284 sonudur. Treccani EI de Macar egemenliğini 'doğrudan ya da Sırp vasal prensler aracılığıyla' diye aynı yönde verir. Kısa Bulgar ele geçirişi (XII. yy sonu, 'poco dopo' Macarlara bırakıldı; süresi bilinmediği için dönem AÇILMADI, olay yazıldı) ve 1265-66 Uroš I'in başarısız Mačva saldırısı ('kısa süre Sırp denetimi'; Belgrad'ın ayrıca anılmadığı) beyan. Atlas 1281-1427 'sirbistan' kaydının TDV ile de çelişkisi vardır: TDV Belgrad 1354'te Stefan Duşan fethini yazar (Uzelac'ın dayandığı Ćirković 1981 'Beograd pod kraljem Dušanom?' soru işaretiyle)."
   }
  ],
  "olay": [
   {
    "t": "0200-01-01",
    "gun": "2. yüzyılın ikinci yarısı",
    "k": "diger",
    "b": "Singidunum ilk kez Ptolemaios'un Coğrafya'sında anılır; IV Flavia lejyonu adıyla birlikte (Moesia Superior)",
    "kaynak": "Arkeoloji Enstitüsü Belgrad, https://ai.ac.rs/en/7651/; Treccani EI 'Belgrado' (Ptol. III,9,3)",
    "tanik": "the first mention of Singidunum comes from Ptolemy’s “Geography”"
   },
   {
    "t": "0150-01-01",
    "gun": "2. yüzyılın ortası",
    "k": "diger",
    "b": "Singidunum municipium statüsü alır (ortası/ikinci yarı; kaynaklarda aralık: EAA 169 sonrası)",
    "kaynak": "Arkeoloji Enstitüsü Belgrad (https://ai.ac.rs/en/7651/): municipium 'during the middle of the 2nd century'; Treccani EAA 'Singidunum': 'dopo il 169 d. C.'",
    "tanik": "the status of municipium Singidunum was obtained during the middle of the 2nd century"
   },
   {
    "t": "0287-01-01",
    "gun": "287 (colonia olarak anıldığı ilk yazıt; colonia statüsü daha erken)",
    "k": "diger",
    "b": "Singidunum'u colonia olarak anan ilk yazıt (CIL III 1660); EAA 239 der, Arkeoloji Enstitüsü 'Severus hanedanı'",
    "kaynak": "Treccani EI 'Belgrado' (CIL III 1660); Treccani EAA 'Singidunum' ('non diventò colonia prima del 239')",
    "tanik": "è del 287 d. C."
   },
   {
    "t": "0395-01-01",
    "gun": "395",
    "k": "diger",
    "b": "künye geçişi: roma-imp -> bizans (imparatorluğun Doğu/Batı ayrımı; gün 395-01-17 yalnız atlas künyesinde)",
    "kaynak": "TDV, 'Bizans' (Büyük Theodosios 379-395)",
    "tanik": "iki oğlu Arkadios ve Honorios arasında Doğu ve Batı Roma olmak üzere ikiye ayrıldı"
   },
   {
    "t": "0441-01-01",
    "gun": "441",
    "k": "yikim",
    "b": "Hunlar Singidunum'u tamamen tahrip eder (ardından Sarmatlar, Gotlar)",
    "kaynak": "TDV, 'Belgrad'; Treccani EAA 'Singidunum': 'Nel 441 fu conquistata dagli Unni'",
    "tanik": "441’de de Hunlar tarafından tamamen tahrip edilmiştir"
   },
   {
    "t": "0565-01-01",
    "gun": "527-565 (Iustinianos saltanatı; güvenli uç 565)",
    "k": "kurulus",
    "b": "Iustinianos Singidunum'u yeniden inşa edip surlarla çevirir",
    "kaynak": "TDV, 'Belgrad'; Treccani EAA 'Singidunum'; Treccani EI (Procop., De aedif.)",
    "tanik": "Bizans İmparatoru I. Iustinianos yıkılmış olan şehrin etrafını surlarla çevirip tahkim ettirdi"
   },
   {
    "t": "0601-01-01",
    "gun": "7. yüzyılın başı",
    "k": "yikim",
    "b": "Avarlar ve Slavlar Singidunum'u alır/tamamen yıkar (bunu izleyen dönem kaynaksız)",
    "kaynak": "TDV, 'Belgrad'; Treccani EI 'Belgrado': 'la fortezza fu presa dagli Avari al principio del sec. VII'",
    "tanik": "la fortezza fu presa dagli Avari al principio del sec. VII"
   },
   {
    "t": "0878-01-01",
    "gun": "878",
    "k": "diger",
    "b": "Slavca 'Belgrad' adıyla ilk kez bir piskoposluk merkezi olarak anılır; sahip Bulgarlar (Treccani: yeniden anıldığında)",
    "kaynak": "TDV, 'Belgrad'; Treccani EI 'Belgrado'",
    "tanik": "878 tarihli bir belgede ilk defa Slav kökenli Belgrad ismiyle bir piskoposluk merkezi olarak zikredilmektedir"
   },
   {
    "t": "1014-01-01",
    "gun": "1014",
    "k": "fetih",
    "b": "II. Basileios Bulgar Devleti'ni yıkıp topraklarını ilhak eder; Belgrad Bizans eline geçer (Belgrad'a özgü gün bulunamadı; devlet ilhakından çıkarım)",
    "kaynak": "TDV, 'Bizans'; Treccani EI 'Belgrado' (XI-XII. yy Bizans stratejosu)",
    "tanik": "Nihayet 1014 yılında kazandığı zaferle Bulgar Devleti’ni yıkarak arazisini imparatorluğa ilhak etti"
   },
   {
    "t": "1124-01-01",
    "gun": "1124",
    "k": "fetih",
    "b": "Macarlar Belgrad'ı işgal edip yıkar",
    "kaynak": "Treccani, Enciclopedia Italiana 'Belgrado' (1930), https://www.treccani.it/enciclopedia/belgrado_(Enciclopedia-Italiana)/",
    "tanik": "Occupata e distrutta dai Magiari nel 1124"
   },
   {
    "t": "1154-01-01",
    "gun": "1154",
    "k": "fetih",
    "b": "Bizanslılar Belgrad'ı yeniden işgal edip yeniden inşa eder",
    "kaynak": "Treccani EI 'Belgrado'",
    "tanik": "fu rioccupata e ricostruita dai Bizantini nel 1154"
   },
   {
    "t": "1183-01-01",
    "gun": "1180-1183 (güvenli uç 1183)",
    "k": "fetih",
    "b": "Macarlar Belgrad'ı yeniden alır (Andronikos Komnenos döneminde)",
    "kaynak": "Treccani EI 'Belgrado'",
    "tanik": "gli Ungheresi occuparono di nuovo Belgrado sotto l'imperatore Andronico Comneno (1180-1183)"
   },
   {
    "t": "1200-01-01",
    "gun": "12. yüzyılın sonu (güvenli uç)",
    "k": "diger",
    "b": "Kısa süreli Bulgar ele geçirişi: 'poco dopo' Macarlara bırakılır; süresi bilinmediği için sahiplik dönemi AÇILMADI",
    "kaynak": "Treccani EI 'Belgrado'",
    "tanik": "Belgrado è in possesso dei Bulgari, che poco dopo dovettero abbandonarla agli Ungheresi"
   },
   {
    "t": "1265-01-01",
    "gun": "1265 sonu-1266 başı",
    "k": "sefer",
    "b": "Kral Uroš I'in Mačva'ya (Belgrad'ı içeren Syrmia Ulterior) saldırısı; Mačva kısa süre Sırp denetimine geçti (Belgrad'ın ayrıca anıldığı bir cümle bulunamadı; süre kısa, dönem AÇILMADI)",
    "kaynak": "Uzelac 2025, Crkvene studije 22 (Institute of History, Belgrade): 'Mačva came under Serbian control for a short time' (dipnot 34 bağlamı); gün: yıl düzeyi",
    "tanik": "the unsuccessful actions of Uroš I in acquiring the territory"
   },
   {
    "t": "1281-01-01",
    "gun": "1281 (1272-1284 Macar yönetimi dönemi)",
    "k": "diger",
    "b": "Mačva (Belgrad dahil) 1280-1284 Kraliçe-anne Elizabeth (Kuman) yönetiminde; 1272-1279 Macar kral memurları (banlar) — atlas başlangıç iddiası (d:sirbistan 1281) bu kaynakla uyuşmaz",
    "kaynak": "Uzelac 2025, Crkvene studije 22, DOI 10.18485/ccs_cs.2025.22.22.16",
    "tanik": "by the Queen-mother Elizabeth the Cuman (between 1280 and 1284)"
   },
   {
    "t": "1284-06-11",
    "gun": "1284 (11 Haziran sonrası, güz öncesi; alt sınır)",
    "k": "diger",
    "b": "Ladislaus IV Mačva'yı ve Belgrad'ı Dragutin'e (eski Sırp kralı, Ladislaus'un eniştesi) fief olarak verir; Macar tacının resmî egemenliği sürer (1281 sonrası; zincire girmez, atlas düzeltmesi için kayıt)",
    "kaynak": "Uzelac 2025, Crkvene studije 22 (dipnot 6: 'The transfer of power took place after June 11, 1284'); Danilo II: güz 1284'ten önce",
    "tanik": "bestowed Mačva and Belgrade, along with the regions of Usora and Soli"
   }
  ],
  "dikis_beyan": "Atlas Belgrad'ı 1281-01-01'de d:sirbistan ile başlatıyor; kaynak YOK. Uzelac 2025 (Crkvene studije 22, Sırp Tarih Enstitüsü): 1281'de Mačva/Belgrad Macar denetiminde (1280-84 Kraliçe-anne Elizabeth), Dragutin'e devir 1284'ün ikinci yarısında (11 Haziran 1284'ten sonra, Danilo II'ye göre güzden önce). ÖNERİ: atlasta Belgrad 1281-1284 macaristan, 1284 (ikinci yarı) sonrası Dragutin'in 'Sremski kralj' yönetimi (künye sirbistan-nemanjic 1166-1402 Nemanjić hanedanı olarak uygun, ayrı 'Sırmiya/Dragutin' künyesi gerekmez ama Macar fief statüsü beyan edilmeli); sonra 1316 (Dragutin ölümü) ve 1354 (TDV: Stefan Duşan alır) kontrol edilmeli. Atlas iddiası 1281-01-01 için yer tutucu olay YAZILMADI.",
  "ic_not": "KAYNAK ZİNCİRİ: TDV 'Belgrad' (Djuric-Zamolo, 1992; Scordisci MÖ III. yy Karaburma, Roma lejyon kampı MS I. yy sonu, 441 Hun yıkımı, VII. yy başı Avar-Slav yıkımı, 878 piskoposluk, 1354 Duşan, 1403 Lazareviç); Treccani EI 'Belgrado' (1930; Romanelli-Novak-Pernice-Milone: Singidunum antik tarihi, Ptol. III,9,3, IV Flavia, colonia, 441, Iustinianos, Avarlar VII. yy başı, IX. yy sonrası Bulgar, XI-XII. yy Bizans stratejosu, 1124/1154/1180-83, Macar egemenliği); Treccani EAA 'Singidunum' (Novak 1966); Arkeoloji Enstitüsü Belgrad 'Singidunum–Belgrade' (2023, https://ai.ac.rs/en/7651/); Uzelac 2025 (Sırp Tarih Enstitüsü, hakemli). ÇİFT TEYİT: 441 Hun yıkımı (TDV + Treccani EAA/EI); Iustinianos surları (TDV + Treccani EAA/EI); VII. yy başı Avar-Slav yıkımı ve ardından haber yokluğu (TDV + Treccani EI); Ptolemaios ilk anılış (Arkeoloji Enstitüsü + Treccani EI, ikisi de Ptol. III,9,3 / 'Geography'). ÇELİŞKİ: colonia tarihi (239 EAA; Severus sonrası EI/Arkeoloji Enstitüsü; 287 ilk yazıt). Singidunum antik yeri (Kalemegdan kalesi, ~44.823, 20.45) atlas noktasına ~0,6 km (kendi hesabım): >3 km kuralı İHLAL YOK. Karaburma (Scordisci, ~44.815, 20.508) ~4 km => ayrı kayıt önerisi. AÇILAMAYAN: Livius Singidunum/Belgrade (zaman aşımı), Pleiades, Srpska enciklopedija, Istorija Beograda I (Sırp akademik monografi), Fine 'Late Medieval Balkans' (WebSearch yalnız Vikipedi dipnotu), Durham tezi PDF. Boşluklar: 441-565 __BOSLUK__; 601-878 __BILINMIYOR__ (Hun sonrası Got/Gepid/Herul ve Avar-Slav belirsizliği). Künye uyarıları: birinci-bulgar bitişi 1018 vs TDV 1014."
 },
 {
  "id": "bergamo",
  "ad": "Bergamo",
  "atlas_ad": "Bergamo",
  "lat": 45.698,
  "lon": 9.677,
  "kat1900": 2,
  "adlar": [
   "Bergomum",
   "Bergamo"
  ],
  "ilk": {
   "t": "-0148-01-01",
   "gun": "MÖ 149 (en geç uç)",
   "nicelik": "ilk_anilis",
   "kesinlik": "belirsiz",
   "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/ (Cato'nun Origines'i, Plinius NH 3.124-125 aracılığıyla); Cato'nun ölüm yılı: Treccani, Enciclopedia Italiana, 'Catone, Marco Porcio', https://www.treccani.it/enciclopedia/marco-porcio-catone_(Enciclopedia-Italiana)/ ('morì nel 149')",
   "tanik": "la città fu fondata da famiglie di stirpe Orobica"
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0148-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "belirsiz",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/: 'gl'Insubri vennero debellati (197)'; 'il territorio degli Orumbovii fu organizzato nella colonia di Bergomum'",
    "ic_not": "Başlangıç = ilk yazılı tanığın (Cato) en geç ucu; Roma hâkimiyeti MÖ 197 civarı (Insubres yenilgisi, Treccani) ve Bergomum'un koloni/municipium oluş tarihi kaynakta YOK ('S'ignora quando la città sia diventata municipio'). Bu aralık Roma Cumhuriyeti künyesiyle BEYANLI yaklaşıklıktır. Öncesi (Orobii/Kelt Cenomani) yazılı tanıkla tarihlenemedi."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/: 'Fu municipio della regione XI (Transpadana)'; 'Bergamo nel 452 d. C. fu presa e saccheggiata da Attila.'",
    "ic_not": "Ortak İtalya zinciri (Bergamo/Brescia/Bologna/Ferrara paralel araştırıldı): 395 Roma bölünmesi bu şehirler için toprak değişimi olmadığından roma-imp dönemi 476'ya uzatıldı (künye roma-imp 395-01-17'de bitiyor, bati-roma 476-08-28'e dek: hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476 yıl hassasiyetli (künye odoakar 476-08-23); 493/553 yıl hassasiyetli. 13 Ocak MÖ 27 günü Ovidius'tan, yılı bu oturumda doğrulanmadı (g2 araştırması Cassius Dio'ya dayanıyordu)."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "ic_not": "Bergamo'nun Odoakar'a bağlılığı genel İtalya çerçevesinden (Treccani Odoacre: 'rex gentium'); şehre özgü tanık yok."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi. Gotlar İtalya'ya 489'da girdi (Treccani Ostrogoti)."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/; Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/: 'i Greci si rinchiudono nel sistema difensivo Oderzo, Padova'",
    "ic_not": "Bergamo'nun 553-569 arası Bizans sayılması genel İtalya çerçevesinden çıkarımdır (beyanlı yaklaşıklık); şehre özgü tanık yok."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "gun",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/: 'Divenuta centro d'uno dei ducati del regno longobardo'; Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "ic_not": "Başlangıç Milano'nun alınış günüdür (Treccani); Bergamo'nun alınış tarihi kaynakta yok (en geç tanık: Treccani Longobardi'de Bergamo dükü isyanı, Authari dönemi). Künye langobard 568'de başlıyor."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/: 'in epoca franca fu sede comitale'",
    "ic_not": "Bu dönemde 894'te Alman kralı Arnulf kuşatması vardır (Treccani); sahiplik Karolenj İtalya künyesiyle."
   },
   {
    "f": "0962-02-02",
    "t": "1112-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/: 'nei sec. 10° e 11° ebbe a capo il vescovo'",
    "ic_not": "Başlangıç yıl-hassasiyetli künye geçişi (Otto I imparator); şehir fiilen piskoposun idaresinde, teorik sahip Alman kralı/imparator. Bitiş = kasaba hükümetinin (konsüller) en geç tanığı 1112 (EI)."
   },
   {
    "f": "1112-01-01",
    "t": "1281-01-01",
    "d": "bergamo-komunu",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/: 'la prima menzione dei suoi consoli risale, nei documenti, al 1112'",
    "ic_not": "Künye bergamo-komunu 1112'de başlıyor; atlasın ilk sahibiyle aynı."
   }
  ],
  "olay": [
   {
    "t": "-0148-01-01",
    "gun": "MÖ 149 (en geç uç)",
    "k": "diger",
    "b": "Cato (Origines) Bergomum'un Orobii soyundan ailelerce kurulduğunu yazdı (ilk anılış; kuruluş geleneği)",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/",
    "tanik": "la città fu fondata da famiglie di stirpe Orobica"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (27 MÖ) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi ve öldürdü; İtalya Doğu Got krallığına geçti (Ostrogotların İtalya'ya girişi 489)",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/; Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Re barbarico (n. circa 434 - m. Ravenna 493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0452-01-01",
    "gun": "452",
    "k": "fetih",
    "b": "Attila Bergamo'yu aldı ve yağmaladı",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/",
    "tanik": "Bergamo nel 452 d. C. fu presa e saccheggiata da Attila."
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Lombardiya şehirleri Longobard krallığına bağlandı (Bergamo/Brescia için kesin alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0894-01-01",
    "gun": "894",
    "k": "fetih",
    "b": "Alman kralı Arnulf'un kuşatması ve yangını (Macar akınlarıyla birlikte, şehri neredeyse yerle bir etti)",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/",
    "tanik": "patiti successivamente per opera del re Arnolfo di Germania (894) e degli Ungheri"
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu); Otto 951'de Pavia'da İtalya kralı ilan edilmişti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1112-01-01",
    "gun": "1112",
    "k": "diger",
    "b": "komün hükümetinin (konsüller) belgelerde ilk anılışı; piskopos yönetiminden komün yönetimine geçiş",
    "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Bergamo', https://www.treccani.it/enciclopedia/bergamo_(Enciclopedia-Italiana)/",
    "tanik": "la prima menzione dei suoi consoli risale, nei documenti, al 1112"
   }
  ],
  "ic_not": "İlk anılış NİCELİĞİ: Cato'nun şehrin kuruluşuna dair gelenek anlatısı (Origines, kayıp eser; yalnız Plinius aracılığıyla Treccani EI'de aktarılıyor); Plinius metni bu oturumda doğrudan açılamadı (thelatinlibrary adresi boş), bu yüzden kaynak Treccani'nin aktarımıdır. Tarih Cato'nun ölüm yılıdır (MÖ 149, güvenli uç); Origines'in yazım yılı belirsiz ('dopo il 168' Treccani). KURULUŞ tarihi bulunamadı (Treccani: preromano buluntular 'non forniscono dati precisi'; Justinus/Strabon/Ptolemaios tarihsiz). Arkeolojik katman bulunamadı. Treccani 'Gallia Cisalpina': Bergomum'un Orumbovii topraklarında koloni olarak düzenlendiği söylenir (tarihsiz). Çift teyit yok. Atlas 1281'de bergamo-komunu ile başlıyor; zincir aynı sahiple bitiyor."
 },
 {
  "id": "bolonya",
  "ad": "Bolonya",
  "atlas_ad": "Bolonya",
  "lat": 44.494,
  "lon": 11.343,
  "kat1900": 2,
  "adlar": [
   "Felsina",
   "Velzna",
   "Bononia",
   "Bologna"
  ],
  "ilk": {
   "t": "-0188-01-01",
   "gun": "MÖ 189",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/ (Livius 37.57'ye atıfla)",
   "tanik": "colonia latina di 3000 uomini, nel 189 a. C."
  },
  "kur": {
   "t": "-0188-01-01",
   "gun": "MÖ 189",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/; Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/ ('la colonia latina di Bononia (189)'). Çift teyit (EI Bologna + EI Gallia Cisalpina; ikisi de aynı Treccani/EI ailesi, bağımsız birincil: Livius 37.57 atıfı)",
   "tanik": "la colonia latina di Bononia (189)"
  },
  "ark": {
   "t": "-1000-01-01",
   "gun": "MÖ 2. binyıl sonu",
   "kesinlik": "belirsiz",
   "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/ (Porta D'Azeglio–Porta Saragozza, tunç çağı yerleşimi)",
   "tanik": "risale agli ultimi tempi del secondo millennio a. C."
  },
  "bit": null,
  "sahip": [
   {
    "f": "-0188-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'La dominazione dei Galli Boi in Bononia ... ebbe fine ... nel 191'; Latin koloni 189",
    "ic_not": "Boii MÖ 191'de yenildi, koloni MÖ 189'da kuruldu."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'tuttavia la città sostenne gagliardamente l'impeto dei Visigoti guidati da Alarico nel 410'",
    "ic_not": "Ortak İtalya zinciri (Bergamo/Brescia/Bologna/Ferrara paralel araştırıldı): 395 Roma bölünmesi bu şehirler için toprak değişimi olmadığından roma-imp dönemi 476'ya uzatıldı (künye roma-imp 395-01-17'de bitiyor, bati-roma 476-08-28'e dek: hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476 yıl hassasiyetli (künye odoakar 476-08-23); 493/553 yıl hassasiyetli. 13 Ocak MÖ 27 günü Ovidius'tan, yılı bu oturumda doğrulanmadı (g2 araştırması Cassius Dio'ya dayanıyordu)."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'Durante il dominio di Teodorico e dei suoi successori, Bologna continuò press'a poco nelle condizioni in cui si trovava sotto l'Impero'",
    "ic_not": "Bitiş yıl hassasiyetli (Monte Lattaro 553)."
   },
   {
    "f": "0553-01-01",
    "t": "0756-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'Da Ravenna continuò a dipendere Bologna nel periodo della dominazione bizantina'",
    "ic_not": "Bizans yönetiminin Bologna'daki başlangıç günü kaynakta yok; 553 Got direnişinin sonudur (en geç uç). 727-728'de Liutprand Bologna'yı yağmaladı ama kalıcı Longobard hâkimiyeti yazılmadı (EI Bologna: 'i Longobardi rimasero a occidente del Panaro'). ÇELİŞKİ: EI Longobardi maddesi Alboin'un Bologna'yı da aldığını yazar ('impadronendosi di Parma, Reggio, Modena e Bologna'); EI Bologna maddesi bunu reddeder — Bologna maddesi (şehre özgü) esas alındı. Bitiş 756 = Pipin bağışı (EI Longobardi)."
   },
   {
    "f": "0756-01-01",
    "t": "1114-01-01",
    "d": "papalik",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'Bologna, con l'Esarcato, fu concessa al papa'; 'La città si venne quindi a trovare in una sorta di doppia soggezione, a Ravenna e a Roma'",
    "ic_not": "BEYANLI YAKLAŞIKLIK: EI 'doppia soggezione ... e un po' ai Carolingi' der; Karolenj/Alman etkisi ve yerel kont idaresi dönem boyunca değişkendi ('rapporti ... ad ogni momento cangianti'). Bologna 1106'da Guastalla konsilinde Ravenna'dan dinî bağımsızlık kazandı."
   },
   {
    "f": "1114-01-01",
    "t": "1274-01-01",
    "d": "bologna-komunu",
    "kunye_yok": true,
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'costituirsi in comune indipendente ... atterrando la rocca ... (1114)'",
    "ic_not": "Önerilen künye id 'bologna-komunu' (Bologna komünü; ömür: en geç ~1114 ('primi elementi ... poco dopo il mille') – papalık hâkimiyeti 1274/1360; EI: kuramsal olarak imparatorluk fiefi, uygulamada bağımsız). Künye yok."
   },
   {
    "f": "1274-01-01",
    "t": "1281-01-01",
    "d": "papalik",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/: 'la rinuncia fatta da Rodolfo d'Asburgo nel 1274 al suo sovrano diritto ... pongono Bologna nelle mani del papa'",
    "ic_not": "BEYANLI YAKLAŞIKLIK: Treccani Bologna'yı 1274'ten itibaren 'papanın elinde' sayar; EI aynı yerde 'XIV. yy başında Bologna Kilise yönetimi altında', 1360'ta Albornoz fiilî yerleşik yönetim kurar der. Atlas papalik'i 1281'de başlatıyor; 1274-1281 bu çerçevede beyanlıdır. (Papalık künyesi 756'dan itibaren)."
   }
  ],
  "olay": [
   {
    "t": "-0188-01-01",
    "gun": "MÖ 189",
    "k": "kurulus",
    "b": "Roma Latin kolonisi Bononia kuruldu (3000 koloni; Felsina/Boii yerleşiminin yerinde)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/; Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/",
    "tanik": "colonia latina di 3000 uomini, nel 189 a. C."
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (27 MÖ) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi ve öldürdü; İtalya Doğu Got krallığına geçti (Ostrogotların İtalya'ya girişi 489)",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/; Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Re barbarico (n. circa 434 - m. Ravenna 493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0410-01-01",
    "gun": "410",
    "k": "sefer",
    "b": "Alarik'in Vizigotları Bononia'ya saldırdı, şehir direndi",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/ (Zosimos VI.10'a atıfla)",
    "tanik": "la città sostenne gagliardamente l'impeto dei Visigoti guidati da Alarico nel 410"
   },
   {
    "t": "0727-01-01",
    "gun": "727-728",
    "k": "sefer",
    "b": "Liutprand'ın Longobardları Bologna'yı yağmaladı (süresi bilinmeyen kısa ele geçirme: dönem açılmadı, Bizans zinciri sürdü)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "Solo sotto Liutprando essi giunsero a Bologna, che barbaramente devastarono (727-728)"
   },
   {
    "t": "0756-01-01",
    "gun": "756",
    "k": "antlasma",
    "b": "Pipin 754 ve 756 seferleriyle Astolf'u Rum topraklarından vazgeçirdi, yönetimi papaya verdi; Bologna Ekzarhlıkla birlikte papaya bırakıldı",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/; Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "in due brevi spedizioni (754 e 756) costringe Astolfo a rinunciare alle terre"
   },
   {
    "t": "1106-01-01",
    "gun": "1106",
    "k": "diger",
    "b": "Guastalla konsili Bologna kilisesinin Ravenna'dan bağımsızlığını onayladı (komün öncesi gelişme)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "sancita poi dal concilio di Guastalla (1106)"
   },
   {
    "t": "1114-01-01",
    "gun": "1114",
    "k": "isyan",
    "b": "Bologna imparator adına dikilen kaleyi yıktı; bağımsız komün",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "atterrando la rocca che era stata eretta e tenuta nel nome di lui (1114)"
   },
   {
    "t": "1132-01-01",
    "gun": "1132",
    "k": "diger",
    "b": "Lothar von Supplinburg'a Bologna kapıları kapattı (Medicina'da konakladı)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "l'imperatore Lotario di Supplimburgo dovette piantar le tende a Medicina"
   },
   {
    "t": "1249-01-01",
    "gun": "1249",
    "k": "fetih",
    "b": "Fossalta zaferi: Bologna Kral Enzo'yu esir aldı (22 yıl tuttu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "Con la fortunata battaglia di Fossalta del 1249"
   },
   {
    "t": "1274-01-01",
    "gun": "1274",
    "k": "antlasma",
    "b": "Habsburglu Rudolf Ekzarhlık toprakları üzerindeki egemenlik hakkından Kilise lehine vazgeçti; Bologna papanın eline geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Bologna', https://www.treccani.it/enciclopedia/bologna_(Enciclopedia-Italiana)/",
    "tanik": "la rinuncia fatta da Rodolfo d'Asburgo nel 1274 al suo sovrano diritto"
   }
  ],
  "ic_not": "NİCELİK KARARI: yazılı tanık (Livius 37.57'ye atıfla MÖ 189 Latin kolonisi) varken ark yazılı tanığa öncelik veremez → ilk = kuruluş MÖ 189 (Roma Bononia'sı). Aynı yerde daha eski yerleşim ARKEOLOJİK: tunç çağı sonu (MÖ 2. binyıl sonu), Villanova kulübeleri (MÖ VII. yy'a kadar), Etrüsk Felsina (EI: 'inizio verso la fine del sec. VI' MÖ), Felsina'nın MÖ IV. yy ortasında Galya Boii tarafından yıkılması. Atlas başlangıcını MÖ 2. binyıl sonuna çekme kararı Emre'nindir; o durumda Etrüsk (etrusk-sehir-devletleri) ve Boii (künyesiz) dönemleri kaynaklı eklenebilir (Treccani 'Bologna'); bu oturumda yazılmadı. Çift teyit: 189 Bononia kolonisi iki ayrı Treccani EI maddesinde (Bologna, Gallia Cisalpina). Atlas: Bolonya 1281'de papalik ile başlıyor; EI 1274'ü verir, 1274-1281 beyanlı. Dikişte olay gerekmedi çünkü zincir papalik ile bitiyor. 395 bölünmesi, Ostrogot-Bizans geçişinin şehre özgü günü ve Bizans-Longobard sınır savaşları (Bologna'nın Longobard eline kalıcı geçmemesi) EI'nin dediği kadarıyla yazıldı."
 },
 {
  "id": "brasso-brasov",
  "ad": "Brassó (Braşov)",
  "atlas_ad": "Brassó (Braşov)",
  "lat": 45.6427,
  "lon": 25.5887,
  "kat1900": 2,
  "adlar": [
   "Corona",
   "Brasau",
   "Kronstadt",
   "Brassó",
   "Braşov"
  ],
  "ilk": {
   "t": "1211-01-01",
   "gun": "1211",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Braşov' (R. Riccardi): treccani.it/enciclopedia/brasov_(Enciclopedia-Italiana)/ ; destek: Magyar Katolikus Lexikon 'Brassó' (lexikon.katolikus.hu/B/Brassó.html): 'A német lovagrend ... érkezett telepesek alapították' + 'Barcaság': 1211/24 Töton Tarikatı'nın egemenliği; TDV 'Erdel': 'Almanlar (Saksonlar) tarafından Kronstadt adıyla kurulan Braşov'",
   "tanik": "I Cavalieri teutonici, chiamati dai sovrani ungheresi, fondarono Braṣov nel 1211"
  },
  "kur": {
   "t": "1211-01-01",
   "gun": "1211",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana (1930), 'Braşov' (treccani.it/enciclopedia/brasov_(Enciclopedia-Italiana)/)",
   "tanik": "I Cavalieri teutonici, chiamati dai sovrani ungheresi, fondarono Braṣov nel 1211"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1211-01-01",
    "t": "1225-01-01",
    "d": "teuton-sovalyeleri",
    "kesinlik": "yil",
    "kaynak": "Treccani 'Braşov' (EI 1930): 'Cacciati nel 1225, la città rimase sede dei coloni sassoni'; MKL 'Barcaság': 1211/24 a német lovagrend uralta (Macar kralı II. András'ın armağanı, sonra egemenlik hevesleri yüzünden kovuldu)",
    "ic_not": "KÜNYE AŞIMI (hayalet uyarısı beklenir): atlas künyesi teuton-sovalyeleri (boyasız) 1230-01-01'de başlıyor; kaynaklı Barcaság (Burzenland) dönemi 1211-1225. Sınıflandırma: aynı polity (Töton Tarikatı) sürüyor, yalnız künyenin başlangıcı Prusya'ya göre kurulmuş ⇒ künyeyi GENİŞLET ya da Burzenland için ayrı 'teuton-burzenland' künyesi aç (öneri: ayrı künye 1211-1225; Prusya künyesiyle toprak bitişik değil). Macar Krallığı üstün egemenliği (tarikat Macar kralının çağrısıyla geldi, 'chiamati dai sovrani ungheresi') burada yazılmadı: fiilî yönetici tarikat. Bitiş: Treccani 1225 (kovulma); MKL aralığı '1211/24' (üst ucu 1224): ÇELİŞKİ, Treccani şehir cümlesine doğrudan bağlı olduğundan alındı; MKL 1224 ile 1 yıl fark beyan edilir. Başlangıç 1211'in günü kaynakta yok (yıl)."
   },
   {
    "f": "1225-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "Treccani 'Braşov' (EI 1930): 'Cacciati nel 1225, la città rimase sede dei coloni sassoni'; Treccani 'Transilvania' (EI 1937): 'Quando il re Andrea riuscì a disfarsi dell'Ordine Teutonico'; MKL 'Brassó': 'Kir. vár volt'; TDV 'Macaristan': 1241-1242 Moğol istilâsı Macaristan'ı vurdu",
    "ic_not": "Tarikat sürgünüyle (II. András, 1225) bölge doğrudan Macar Krallığı'na döndü (künye macaristan 1000-1527; ömür içinde). 1241-42 Moğol istilası sırasında Barcaság/Brassó yıkıldı (olay), ama egemenlik değişmedi (Moğollar kalıcı yönetim kurmadı: TDV 'Macaristan': Bela dönüp ülkeyi yeniden takviye etti). Dönem sonu 1281-01-01 = atlas başlangıcı (atlas ilk sahibi macaristan; dikiş aynı sahip, ek olay gerekmez)."
   }
  ],
  "olay": [
   {
    "t": "1211-01-01",
    "gun": "1211",
    "k": "kurulus",
    "b": "Töton Şövalyeleri Macar kralının çağrısıyla Barcaság'a yerleşti; Treccani'ye göre şehri (Corona/Kronstadt) kurdular",
    "kaynak": "Treccani EI 'Braşov' (1930); MKL 'Barcaság' (1211/24: a német lovagrend uralta)",
    "tanik": "I Cavalieri teutonici, chiamati dai sovrani ungheresi, fondarono Braṣov nel 1211"
   },
   {
    "t": "1225-01-01",
    "gun": "1225",
    "k": "diger",
    "b": "Töton Şövalyeleri Barcaság'dan kovuldu; şehir Saksonların yurdu olarak kaldı, Macar Krallığı'na doğrudan bağlandı",
    "kaynak": "Treccani EI 'Braşov' (1930); Treccani EI 'Transilvania' (Privilegium Andreanum 1224); MKL 'Barcaság' (aralık 1211/24)",
    "tanik": "Cacciati nel 1225, la città rimase sede dei coloni sassoni"
   },
   {
    "t": "1234-01-01",
    "gun": "1234",
    "k": "diger",
    "b": "ilk yazılı anılış: Corona (Kuman piskoposluğu içinde Hungária'da)",
    "kaynak": "MKL 'Brassó' (lexikon.katolikus.hu/B/Brassó.html); ayrıntı: Szilágyi/Névtani Értesítő 1986 (DOI 10.29178/NevtErt.1986.8): '1234/15. sz.: ... dyoc. Cumanie Corona /Györffy 1966: 827/' (kaydın 15. yy kopyası olabilir; Wagner 1977'ye göre 1235 Brassovia formu)",
    "tanik": "1234: Corona"
   },
   {
    "t": "1241-01-01",
    "gun": "1241-1242",
    "k": "diger",
    "b": "Moğol (Tatar) istilası Barcaság'ı vurdu; Brassovia kalesi yıkıldı, sonra yeniden inşa edildi",
    "kaynak": "MKL 'Brassó': Brassovia kalesi; MKL 'Barcaság': 1241 Tatar baskını",
    "tanik": "A tatárdúláskor (1241-42) elpusztult, de újjáépítették"
   },
   {
    "t": "1252-01-01",
    "gun": "1252",
    "k": "diger",
    "b": "ad kaydı: Brasau",
    "kaynak": "MKL 'Brassó' (1252: Brasau)",
    "tanik": "1234: Corona , 1252: Brasau"
   }
  ],
  "ic_not": "İLK ANILIŞ/KURULUŞ SEÇİMİ: Treccani (EI 1930, eski ama akademik) Töton Şövalyeleri'nin şehri 1211'de kurduğunu açıkça yazar; MKL (Magyar Katolikus Lexikon) 'Töton Şövalyeleri ile gelen yerleşimciler kurdu' der ve bölgeyi 1211/24 tarikat egemenliğinde gösterir; TDV 'Erdel' yalnız 'Almanlar (Saksonlar) tarafından Kronstadt adıyla kurulan' der (tarih yok). Üç kaynak kuruluş yönünde uyumlu; kuruluş yılı yalnız Treccani'de açık (1211). ZAYIF NOKTA: Modern araştırmada Töton Şövalyeleri dönemi (1211-1225) kale (Feldioara/Marienburg, Brassovia vb.) kuruculuğu tartışmalıdır; ben bu oturumda akademik makale ile 1211 şehir kuruluşunu doğrulayamadım. Daha temkinli alternatif: ilk = ilk_anilis 1234 (MKL 'Corona'; Névtani Értesítő 1986'da 1234/15. yy kopyası ve 1235 'Srassovia' Wagner 1977 formu) ve sahip zinciri 1234→1281 macaristan; karar Emre'ye bırakılır. Hayalet uyarısı: teuton-sovalyeleri künyesi 1230'da başlıyor (bkz. sahip[0].ic_not). Moğol 1241 yıkımı şehre değil kaleye/bölgeye bağlı (MKL cümlesi 'Brassovia' kalesi hakkında). Ad bilgisi: TDV 'Erdel': Braşov adı eski Bulgarca 'Bozsug'dan; Kronstadt/Corona adlarının Latince 'Corona' ile eşleşmesi tartışmalıdır (Névtani Értesítő 1986: Kisch'e göre Kronstadt ad 'Krone'ye bağlı değil). Atlas çelişkisi YOK: atlas ilk dönem macaristan 1281-01-01 ve zincirin son sahibi macaristan. Atlasta bir olay/künye geçişi yazılmaz (1281 sonrası bu dosyaya girmez)."
 },
 {
  "id": "brescia",
  "ad": "Brescia",
  "atlas_ad": "Brescia",
  "lat": 45.539,
  "lon": 10.221,
  "kat1900": 2,
  "adlar": [
   "Brixia",
   "Brexia",
   "Brescia"
  ],
  "ilk": {
   "t": "-0196-01-01",
   "gun": "MÖ 197",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Livius (Titus Livius), Ab Urbe Condita 32.30 (https://www.thelatinlibrary.com/livy/liv.32.shtml); olayın yılı: Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/ ('gl'Insubri vennero debellati (197)') — Livius'un anlattığı Cethegus seferi MÖ 197'ye yerleştirildi (çıkarım, bkz. ic_not)",
   "tanik": "Brixiamque quod caput gentis erat"
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0196-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'I Cenomani conclusero spontaneamente con Roma un trattato di alleanza'; Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/",
    "ic_not": "Cenomani (başkenti Brixia) Roma ile MÖ 225-222'den beri müttefikti (Treccani Cenomani, EI 1931: 'tennero un contegno autonomo in favore dei Romani'); fiilî Roma hâkimiyeti beyanlı yaklaşıklıktır — federatlıktan tam entegrasyona geçiş günü kaynakta yok. 'cenomani' künyesi yoktur; Roma künyesine bağlandı."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'Colonia Civica Augusta Brixia'; 'Nel 452 la città fu presa e saccheggiata da Attila.'",
    "ic_not": "Ortak İtalya zinciri (Bergamo/Brescia/Bologna/Ferrara paralel araştırıldı): 395 Roma bölünmesi bu şehirler için toprak değişimi olmadığından roma-imp dönemi 476'ya uzatıldı (künye roma-imp 395-01-17'de bitiyor, bati-roma 476-08-28'e dek: hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476 yıl hassasiyetli (künye odoakar 476-08-23); 493/553 yıl hassasiyetli. 13 Ocak MÖ 27 günü Ovidius'tan, yılı bu oturumda doğrulanmadı (g2 araştırması Cassius Dio'ya dayanıyordu)."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Brescia'nın 553-569 arası Bizans sayılması İtalya genel çerçevesinden çıkarımdır (beyanlı yaklaşıklık); şehre özgü tanık yok."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "gun",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'Sotto i Longobardi Brescia divenne sede di un ducato'; Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "ic_not": "Başlangıç Milano'nun alınış günü (Treccani); Brescia'nın alınış günü kaynakta yok. Künye langobard 568'de başlıyor."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'Del periodo dai Carolingi agli Ottoni non ci restano che poche notizie confuse'",
    "ic_not": "Şehre özgü sahiplik tanığı yok; Longobard krallığının Franklara geçişinden çıkarım (beyanlı)."
   },
   {
    "f": "0962-02-02",
    "t": "1127-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'il vescovo Olderico faceva nel 1038 a vantaggio di essi cessione dei privilegi cedutigli dall'imperatore Corrado II'",
    "ic_not": "Teorik sahip Alman kralı/imparator (1038'de Conrad II'nin piskoposa imtiyazı); bitiş = konsüllerin ilk belgesi 1127 (EI: 'tra il 1120 e 1127'; en geç uç alındı, künye brescia-komunu 1120'de başlıyor)."
   },
   {
    "f": "1127-01-01",
    "t": "1281-01-01",
    "d": "brescia-komunu",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/: 'soltanto in un documento del 1127 i rappresentanti cittadini sono chiamati col nome di consoli'",
    "ic_not": "Atlasın ilk sahibiyle aynı."
   }
  ],
  "olay": [
   {
    "t": "-0196-01-01",
    "gun": "MÖ 197",
    "k": "diger",
    "b": "Brixia, Cenomani'nin başkenti olarak anıldı (Cenomani Insubres'ten ayrılıp Roma tarafına geçiyor) — ilk anılış",
    "kaynak": "Livius AUC 32.30; Treccani, Enciclopedia Italiana, 'Gallia Cisalpina', https://www.treccani.it/enciclopedia/gallia-cisalpina_(Enciclopedia-Italiana)/",
    "tanik": "Brixiamque quod caput gentis erat"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (27 MÖ) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi ve öldürdü; İtalya Doğu Got krallığına geçti (Ostrogotların İtalya'ya girişi 489)",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/; Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Re barbarico (n. circa 434 - m. Ravenna 493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0452-01-01",
    "gun": "452",
    "k": "fetih",
    "b": "Attila Brescia'yı aldı ve yağmaladı",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/",
    "tanik": "Nel 452 la città fu presa e saccheggiata da Attila."
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Lombardiya şehirleri Longobard krallığına bağlandı (Bergamo/Brescia için kesin alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu); Otto 951'de Pavia'da İtalya kralı ilan edilmişti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1038-01-01",
    "gun": "1038",
    "k": "diger",
    "b": "Piskopos Olderico, Conrad II'den aldığı imtiyazları şehrin özgür adamlarına devretti (komün yolunda ilk adım)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/",
    "tanik": "il vescovo Olderico faceva nel 1038 a vantaggio di essi cessione dei privilegi"
   },
   {
    "t": "1127-01-01",
    "gun": "1127",
    "k": "diger",
    "b": "konsüllerin belgede ilk anılışı; komün yönetimi",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Brescia', https://www.treccani.it/enciclopedia/brescia_(Enciclopedia-Italiana)/",
    "tanik": "soltanto in un documento del 1127 i rappresentanti cittadini sono chiamati col nome di consoli"
   }
  ],
  "ic_not": "İlk anılış NİCELİĞİ: Livius'un metni Brixia'yı 'Cenomani'nin başı' olarak anar; olayın yılı (MÖ 197) metinden değil Treccani'nin 'Insubri debellati (197)' kaydından ÇIKARILDI (Livius 32.30 Cethegus'un MÖ 197 seferini anlatır; bu eşleme bu oturumda başka kaynakla çift doğrulanmadı). Livius'un yazım tarihi daha geç (MÖ 1. yy); Catullus 67 ('Brixia Veronae mater') de MÖ 1. yy tanığıdır (ölüm 'non prima del 54', Treccani). Kuruluş efsanesi: Livius 5.35 ('ubi nunc Brixia ac Verona urbes sunt') ve Treccani: Cenomani Alpleri aşınca kurdu — tarihsiz gelenek, yazılmadı. Treccani: 'Non si ha sicura notizia che siano avvenute nella città di Brescia scoperte dell'età neolitica e del bronzo' → ark yok. Çelişki: Treccani EI Brescia Strabon'un Brixia'yı Insubres'e verdiğini, öteki yazarların Cenomani'ye ait saydığını belirtir. Çift teyit yok."
 },
 {
  "id": "bukres",
  "ad": "Bükreş",
  "atlas_ad": "Bükreş",
  "lat": 44.427,
  "lon": 26.103,
  "kat1900": 1,
  "adlar": [
   "Bucureşti",
   "Bükreş"
  ],
  "ilk": {
   "t": "1459-09-20",
   "gun": "20 Eylül 1459",
   "nicelik": "ilk_anilis",
   "kesinlik": "gun",
   "kaynak": "Gabriel Constantin, 'Bucureştii în vremea lui Vlad Ţepeş', Bucureşti. Materiale de Istorie şi Muzeografie XXV (Muzeul Municipiului Bucureşti, 2011), s. 28-29 (bmim.muzeulbucurestiului.ro/fisiere/25-Bucuresti-Materiale-de-Istorie-si-Muzeografie-XXV-2011_030.pdf); çelişki: TDV 'Bükreş' (N. Beldiceanu): 'ilk defa 1368'de Cetatea Dambovitei ismi ile geçmekte' (islamansiklopedisi.org.tr/bukres)",
   "tanik": "Vlad Ţepeş a emis documentul I la 20septembrie1459"
  },
  "kur": null,
  "ark": {
   "t": "1350-01-01",
   "gun": "14. yüzyılın ikinci yarısı",
   "kesinlik": "yuzyil",
   "kaynak": "Constantin, BMIM XXV (2011), s. 28 (1950'ler-60'lar Curtea Veche kazıları: Vlad Ţepeş'in kalesinin altında XIV. yy ikinci yarısına ait trapezoidal kule/tahkimat)",
   "tanik": "peste ruinele unei fortificaţii construite în cea de a doua jumătate a secolului al XIV-iea"
  },
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1458-01-01",
    "gun": "1458-1459",
    "k": "kurulus",
    "b": "Vlad Ţepeş, Braşovlu ustaların yardımıyla Curtea Veche'de 'Cetatea Bucureşti' / 'Cetatea Dâmboviţa' kalesini inşa etti",
    "kaynak": "Constantin, BMIM XXV (2011), s. 28",
    "tanik": "aceasta a fost ridicată în anii 1458- 1459 cu ajutorul meşterilor braşoveni"
   },
   {
    "t": "1459-09-20",
    "gun": "20 Eylül 1459",
    "k": "diger",
    "b": "Vlad Ţepeş'in Bucureşti'den verdiği ilk belge: adın bilinen en eski yazılı anılışı (ilk anılış)",
    "kaynak": "Constantin, BMIM XXV (2011), s. 28-29",
    "tanik": "Vlad Ţepeş a emis documentul I la 20septembrie1459"
   }
  ],
  "ic_not": "ATLAS ÇELİŞKİSİ (1281 başlangıcı): ilk yazılı tanık 1459-09-20 > atlas başlangıcı 1281-01-01. Atlas Bükreş noktasını macaristan 1281-01-01 → 1330, eflak 1330-1462 olarak açıyor; kaynak bunu desteklemiyor (1281-1459 arasında yazılı tanık yok). Bu yüzden sahip zinciri BOŞ bırakıldı (denetim 'ilk.t atlas başlangıcından sonra' uyarısı beklenir). Öneri: Bükreş noktası 1459-09-20 öncesinde gösterilmesin (motor kur/bit penceresi = ilk.t'den başlasın); macaristan 1281-1330 dönemi kaynaksız (Bükreş bölgesi Macar krallığı toprağı olduğuna dair tanık bulunamadı: Eflak/Basarab devleti 1330 Posada öncesi 'Terra Transalpina' Macar nominal egemenliği olabilir ama bu oturumda açılmadı); eflak dönemi nokta ilk.t'den itibaren geçerli. KAYNAK SEÇİMİ: TDV 1368 'Cetatea Dâmboviţei' ismiyle geçtiğini yazar, ancak (a) bu ad Bükreş'in kendi adı değildir, yeri kesin olmayan ad eşitlemesidir (VERI-YAPISI kuralı: başlangıç sayılmaz), (b) Treccani 'Bucarest' (Enciclopedia on line): 'L'origine di B. e l'etimologia del nome sono incerte', (c) Constantin 2011: 'Cetatea Dâmboviţa' adı 1458-59'da Vlad Ţepeş'in inşa ettiği Bükreş kalesinin yan adıdır. Bu yüzden adı kesin taşıyan en eski belge (1459-09-20) alındı; TDV-esas kuralı ile çelişki beyan edilir ve karar Emre'ye bırakılır (alternatif ilk: TDV 1368, yıl hassasiyeti, yer eşitlemesi belirsiz). 1459 tarihi için ikinci akademik tanık bulunamadı (Newsweek RO ve Wikipedia 20.09.1459'u aktarır ama popüler/ikincil olduğu için kaynak sayılmadı; Wikipedia 13 Haziran 1458 tarihli Latince bir belgeden de söz eder — bu oturumda doğrulanmadı). Tanik metni PDF OCR çıktısından birebir alındı ('20septembrie1459' bitişik). ARKEOLOJİ: Curtea Veche kazılarında XIV. yy ikinci yarısına ait kule/tahkimat var (ark alanı); yazılı tanık (1459) mevcut olduğundan arkeolojik katman ilk olmadı; arkeolojik tarih (XIV. yy ikinci yarısı, 1350-1399) yazılı tanıktan eskidir ama o da 1281'den sonradır — atlas başlangıcı 1281 ile ÇELİŞİR: arkeolojik bulgu da 1281'de şehir olduğunu göstermez. Treccani: 'Residenza invernale dei principi di Valacchia alla metà del 15° sec.'. Bükreş modern noktası (44.427, 26.103) ile Curtea Veche (~44.4318, 26.1018) arası < 1 km."
 },
 {
  "id": "ferrara",
  "ad": "Ferrara",
  "atlas_ad": "Ferrara",
  "lat": 44.836,
  "lon": 11.619,
  "kat1900": 1,
  "adlar": [
   "Ferrara",
   "Ducatus Ferrariae"
  ],
  "ilk": {
   "t": "0799-01-01",
   "gun": "8. yüzyıl (en geç uç)",
   "nicelik": "ilk_anilis",
   "kesinlik": "yuzyil",
   "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
   "tanik": "I primi documenti che riguardano Ferrara non sono anteriori al sec. VIII"
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0799-01-01",
    "t": "0988-01-01",
    "d": "papalik",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'alla caduta di Desiderio (774), il ducato passò ai pontefici, che vi esercitarono giurisdizione mediante l'arcivescovo di Ravenna'",
    "ic_not": "Zincir ilk anılışın en geç ucu olan 799'da açıldığı için 774 devri (EI) burada olay olarak değil dönem başlangıcında örtük: papalık yönetimi 774'ten beri; ilk.t 8. yy aralığının güvenli ucudur. 8. yy'ın ikinci yarısında Ferrara Longobard yönetimindeydi ('un Ducatus Ferrariae fu effettivamente soggetto al potere longobardo nella seconda metà del sec. VIII'); bu aralık (langobard) ilk.t'den önce kaldığından zincire girmedi."
   },
   {
    "f": "0988-01-01",
    "t": "1158-01-01",
    "d": "canossa-markizligi",
    "kunye_yok": true,
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'conferita poi in feudo da papa Giovanni XV al marchese Tedaldo di Canossa e discendenti (988)'; 'la contessa Matilde, nel 1101, riacquistò il dominio di Ferrara con le armi'",
    "ic_not": "Önerilen künye id 'canossa-markizligi' (Canossa Markiziliği/Toskana; ömür: en geç 988'den kontes Matilde dönemi 1101'e; sonrası EI'de yok). EI AYNI YERDE 'quasi certo che Ferrara non rinunziò mai a reggersi in libero governo' ve komün (konsüller) der; 1101-1158 aralığında Canossa hâkimiyeti sürdü mü yoksa komün mü fiilî sahipti belirsiz — 1158 imparatorluk işgali en geç ucu. Beyanlı yaklaşıklık. Künye yok."
   },
   {
    "f": "1158-01-01",
    "t": "1164-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'Occupata da truppe imperiali nel 1158, la città fu soggetta a Federico Barbarossa fino al 1164'",
    "ic_not": "Kuşatma/işgal; künye almanya 962'den."
   },
   {
    "f": "1164-01-01",
    "t": "1184-01-01",
    "d": "ferrara-adelardi",
    "kunye_yok": true,
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'il prevalere del partito guelfo capeggiato da Guglielmo III degli Adelardi portò Ferrara a entrare nella lega lombarda'",
    "ic_not": "Önerilen künye id 'ferrara-adelardi' (Adelardi/Guelf komün hükümeti, Lombard Birliği üyesi; ömür 1164 civarı – 1184 Guglielmo III ölümü). Başlangıç 1164 = Barbarossa hâkimiyetinin sonu; 'più tardi' ifadesi tarih vermez (beyanlı). Künye yok."
   },
   {
    "f": "1184-01-01",
    "t": "1222-01-01",
    "d": "ferrara",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'Marchesella, sposa di Azzo VI d'Este, gli portò in retaggio il dominio di Ferrara'",
    "ic_not": "Künye 'ferrara' (Este) 1240'ta başlıyor → hayalet uyarısı: aynı polity (Este Ferrarası) sürüyor → künyeyi 1184'e GENİŞLET önerilir. EI: 'breve periodo di governo comune fra Azzo VII e Salinguerra II' bu aralıkta (tarihsiz); Este-Salinguerra çekişmesi sürdü."
   },
   {
    "f": "1222-01-01",
    "t": "1240-01-01",
    "d": "salinguerra-torelli",
    "kunye_yok": true,
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/: 'nel 1222, riuscì a quest'ultimo di cacciare l'emulo dalla città e di rimanerne signore fino al 1240'",
    "ic_not": "Önerilen künye id 'salinguerra-torelli' (Salinguerra II Torelli yönetimi 1222-1240, Gibelin). Künye yok."
   }
  ],
  "olay": [
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Desiderius'un düşmesiyle Ferrara dükalığı papalara geçti (ilk.t'den önce; dönem başlangıcına yansıtıldı)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/; Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "alla caduta di Desiderio (774), il ducato passò ai pontefici"
   },
   {
    "t": "0988-01-01",
    "gun": "988",
    "k": "diger",
    "b": "Papa XV. Ioannes Ferrara'yı Canossalı Tedaldo'ya fief verdi",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "conferita poi in feudo da papa Giovanni XV al marchese Tedaldo di Canossa e discendenti (988)"
   },
   {
    "t": "1101-01-01",
    "gun": "1101",
    "k": "fetih",
    "b": "Kontes Matilde Ferrara üzerindeki hâkimiyeti silahla geri aldı",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "la contessa Matilde, nel 1101, riacquistò il dominio di Ferrara con le armi"
   },
   {
    "t": "1158-01-01",
    "gun": "1158",
    "k": "fetih",
    "b": "İmparatorluk birlikleri Ferrara'yı işgal etti; Barbarossa hâkimiyeti 1164'e dek",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "Occupata da truppe imperiali nel 1158"
   },
   {
    "t": "1164-01-01",
    "gun": "1164",
    "k": "diger",
    "b": "Barbarossa hâkimiyetinin sonu; Adelardi önderliğinde Guelf komün, Lombard Birliği'ne katıldı",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "soggetta a Federico Barbarossa fino al 1164"
   },
   {
    "t": "1184-01-01",
    "gun": "1184",
    "k": "diger",
    "b": "Guglielmo III Adelardi öldü; Ferrara hâkimiyeti Marchesella eliyle Este'ye geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "Marchesella, sposa di Azzo VI d'Este, gli portò in retaggio il dominio"
   },
   {
    "t": "1222-01-01",
    "gun": "1222",
    "k": "fetih",
    "b": "Salinguerra II Azzo VII d'Este'yi şehirden kovdu",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "riuscì a quest'ultimo di cacciare l'emulo dalla città"
   },
   {
    "t": "1240-01-01",
    "gun": "1240",
    "k": "fetih",
    "b": "Salinguerra Guelf koalisyonunca yenildi; Ferrara kesin olarak Este'nin eline geçti (atlas başlangıcı)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ferrara', https://www.treccani.it/enciclopedia/ferrara_(Enciclopedia-Italiana)/",
    "tanik": "Ferrara cadde in definitivo possesso degli Este"
   }
  ],
  "ic_not": "İlk anılış NİCELİĞİ: EI 'belgeler VIII. yy'dan önce değil' der, yıl vermez; güvenli uç 799 alındı. Kuruluş (Bizans kalesi? Ferrara'nın Ravenna Ekzarhlığı içinde olduğu 'indubbiamente' denir) ve arkeolojik katman bu oturumda bulunamadı. Atlas Ferrara'yı 1240'ta ferrara künyesiyle başlatıyor; zincir 1240'ta bitiyor, son sahip Salinguerra ≠ ferrara olduğundan 1240 olayı yazıldı. Kaynak sorunu: yalnız Treccani EI (1932) kullanıldı; Pauly/TDV konu dışı; çift teyit yok. EI'nin 774 devri ile 8. yy ikinci yarısı Longobard dükalığı arasında ilk.t'den önce kalan aralık (langobard ~?-774) zincire girmedi. 988-1158 ve 1164-1184 dönemleri beyanlı yaklaşıklıklardır (EI Ferrara'nın fiilen komün olduğunu söyler)."
 },
 {
  "id": "granada",
  "ad": "Granada",
  "atlas_ad": "Granada",
  "lat": 37.177,
  "lon": -3.599,
  "kat1900": 2,
  "adlar": [
   "Gırnâta (Garnâta, Agarnâta)",
   "Granada"
  ],
  "ilk": {
   "t": "0712-01-01",
   "gun": "712",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata (Gırnata), Tarih bölümü",
   "tanik": "dolayısıyla Gırnata da 712 yılı ortalarında fethedildi",
   "ic_not": "İlk anılış alt sınırdır, kuruluş DEĞİL; TDV 'Gırnata’nın bu sıralarda küçük bir yerleşim merkezi olduğu anlaşılmaktadır'; 'tesbit edilebilen ilk sakinleri Turdulos' (İber kabilesi, tarihsiz). Roma dönemi Iliberis/Elvira modern noktadan ayrı yerdedir (Atarfe civarı; 3 km kuralı: ayrı kayıt önerisi). ÇELİŞKİ: Treccani EI 'Granata' 'non vi è traccia dell'esistenza di una città nel luogo dell'attuale Granata prima dell'età musulmana ... sorto subito dopo la conquista (principio del sec. VII [sic])' der — TDV'de zaten Müslüman fethinde küçük yerleşim; fark: Treccani ilk iskânı Arap karargâhına bağlar. Aynı yüzyıl içinde (VIII) kaynaklar uyumlu, TDV esas."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0712-01-01",
    "t": "0756-05-15",
    "d": "emevi",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "ic_not": "Valiler dönemi: TDV 'Bu tarihten IX. yüzyılın son çeyreğine kadar Gırnata’da meydana gelen olaylar hakkında yeterli bilgi yoktur.' Künye GENİŞLET önerisi (Emevî 750'de biter)."
   },
   {
    "f": "0756-05-15",
    "t": "1013-01-01",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata; abdurrahman-i",
    "ic_not": "889'da Arap-müvelled çatışması (Yahyâ b. Sükâle, Sevvâr b. Hamdûn), III. Abdurrahman 300/912'de 'Gırnata’yı devletin kesin hâkimiyeti altına aldı'. Zîrîler 399/1009'da Müstaîn'in verdiği Gırnata'ya yerleşti (vali), 403/1013'te bağımsızlık."
   },
   {
    "f": "1013-01-01",
    "t": "1090-01-01",
    "d": "granada-ziriler",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "ic_not": "Habbûs (411/1021), Bâdîs (1038-1073); Zîrî künyesi 1013-1090."
   },
   {
    "f": "1090-01-01",
    "t": "1148-05-22",
    "d": "murabitlar",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata; murabitlar",
    "ic_not": "Murâbıt hükümdarının akrabası valilerle yönetildi. t: hicrî 543 ∩ 1148 = 1148-05-22. Murâbıt künyesi 1147-03-23'te biter; dönem 1148'e uzatıldı (hayalet uyarısı; künye GENİŞLET/ardıl önerisi)."
   },
   {
    "f": "1148-05-22",
    "t": "1156-02-25",
    "d": "beni-ganiye",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'beni-ganiye' (Murâbıt devamı; TDV murabitlar: 'Murâbıt hâkimiyetini tekrar kurmaya çalışan Benî Gāniye') — 543/1148'de Gırnata Benî Gāniye'nin eline geçer, Yahyâ b. Gāniye'nin ölümüyle Meymûn b. Yiddâr idareyi alır, 551/1156'da Muvahhidler'e teslim. f: hicrî 543 ∩ 1148; t: hicrî 551 ∩ 1156 = 1156-02-25 (tablo takvimi)."
   },
   {
    "f": "1156-02-25",
    "t": "1228-01-01",
    "d": "muvahhidler",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "ic_not": "İbn Merdenîş saldırıları (1162, 1166) püskürtüldü; Muvahhidler 609/1212 İkāb yenilgisinden sonra zayıfladı."
   },
   {
    "f": "1228-01-01",
    "t": "1238-05-12",
    "d": "ibn-hud-murcia",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'ibn-hud-murcia' (Mürsiye'de emirliğini ilân eden İbn Hûd, Abbâsî halifesine bağlı; 625/1228 Gırnata'yı aldı; 630/1232 elçi onunla Gırnata'da görüştü). 1 yıl sonra İşbîliye Valisi Seyyid Ebû Zeyd şehri geri almış, sonra İbn Hûd yeniden almış — süre bilinmiyor, dönem AÇILMADI, olay yazıldı. t: atlas dikişi 1238-05-12 (Nasrî). Not: 'murcia-ibn-merdenis' künyesi (1147-1172) başka hânedandır."
   }
  ],
  "olay": [
   {
    "t": "0712-01-01",
    "gun": "92-93 H / 712",
    "k": "fetih",
    "b": "Müslümanlar Iliberis vilâyetini alır; Gırnata küçük bir yerleşim olarak fethedilir.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "dolayısıyla Gırnata da 712 yılı ortalarında fethedildi"
   },
   {
    "t": "0756-05-15",
    "gun": "15 Mayıs 756",
    "k": "diger",
    "b": "künye geçişi: Emevî valileri (Yûsuf el-Fihrî) → bağımsız Endülüs Emevî Emirliği; I. Abdurrahman Musâre savaşını kazanır, Kurtuba'ya girer (11 Mayıs'ta karargâh, 15 Mayıs sabahı saldırı). Gırnata için: TDV 'Gırnata’yı ele geçirip' Yûsuf el-Fihrî'nin sonraki hazırlıkları.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-i (HAKKI DURSUN YILDIZ)",
    "tanik": "15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı"
   },
   {
    "t": "1013-01-01",
    "gun": "403 H / 1013",
    "k": "kayip",
    "b": "Zîrîler merkezî idarenin zayıflığından yararlanıp Gırnata'da bağımsızlığını ilân eder.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "Zîrîler 403 (1013) yılında bağımsızlıklarını ilân ettiler"
   },
   {
    "t": "1090-01-01",
    "gun": "1090",
    "k": "fetih",
    "b": "Murâbıtlar Gırnata'yı zaptedip Zîrî dönemini sona erdirir.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "1090 yılında Murâbıtlar Gırnata’yı zaptedip Zîrî dönemini sona erdirdiler"
   },
   {
    "t": "1148-05-22",
    "gun": "543 H / 1148",
    "k": "kayip",
    "b": "Gırnata Benî Gāniye'nin eline geçer (Murâbıt otoritesinin çöküşü).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "Gırnata 543 (1148) yılında Benî Gāniye’nin eline geçti"
   },
   {
    "t": "1156-02-25",
    "gun": "551 H / 1156",
    "k": "fetih",
    "b": "Meymûn b. Yiddâr şehri Muvahhidler'e teslim eder.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "birkaç yıl sonra Muvahhidler’e teslim etmek zorunda kaldı (551/1156)"
   },
   {
    "t": "1228-01-01",
    "gun": "625 H / 1228",
    "k": "fetih",
    "b": "Mürsiye emîri İbn Hûd Gırnata'yı ele geçirir.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "da Gırnata’yı ele geçirdi (625/1228)"
   },
   {
    "t": "1229-01-01",
    "gun": "626 H / 1229",
    "k": "fetih",
    "b": "İşbîliye Valisi Seyyid Ebû Zeyd bir yıl sonra şehri geri alır; İbn Hûd sonra yeniden hâkim olur (dönem açılmadı).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "İşbîliye Valisi Seyyid Ebû Zeyd bir yıl sonra şehri geri almayı başardıysa da"
   },
   {
    "t": "1238-05-12",
    "gun": "26 Ramazan 635 / 12 Mayıs 1238",
    "k": "kurulus",
    "b": "Muhammed b. Yûsuf b. Nasr Gırnata'yı ele geçirerek Nasrî Devleti'ni kurar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/girnata",
    "tanik": "Gırnata’yı ele geçirerek Nasrî Devleti’ni kurdu (26 Ramazan 635 / 12 Mayıs 1238)"
   }
  ],
  "ic_not": "Granada'nın kaynaklı yazılı tarihi 712 fethinden başlıyor; öncesi (İber Turdulos, Roma Iliberis/Elvira) modern nokta ile aynı yer olduğu kaynakta gösterilmedi (Treccani: öncesinde şehir izi yok). Çift teyit: Nasrî kuruluş yılı 1238 (TDV günlü; Treccani 'Granata (1238)' yıl). Zincir atlas ilk gününde (1238-05-12) biter."
 },
 {
  "id": "gyulafehervar",
  "ad": "Erdel Belgradı (Gyulafehérvár)",
  "atlas_ad": "Erdel Belgradı (Gyulafehérvár)",
  "lat": 46.0678,
  "lon": 23.58,
  "kat1900": 2,
  "adlar": [
   "Apulum",
   "Bălgrad",
   "Alba Transilvana",
   "Gyulafehérvár",
   "Alba Iulia"
  ],
  "ilk": {
   "t": "0106-01-01",
   "gun": "106",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Muzeul Naţional al Uniunii Alba Iulia, 'The Roman castrum of the 13th Gemina Legion' (apulum.ro/index.php/patrimoniu_en/fortificatie/493); ikinci tanık: turism.apulum.ro 'Ruta obiectivelor romane din Alba Iulia' ('între anii 106 și 132', castrum Traianus'un fethinden sonra, 'Pe locul actualei cetăți' = bugünkü kale yerinde); Treccani EI 'Dacia' (Apulum = Alba Iulia, XIII Gemina kampı); Treccani 'Decebalo' (105-106)",
   "tanik": "which was elevated after Dacia was occupied (in 106 A.D.)"
  },
  "kur": {
   "t": "0106-01-01",
   "gun": "106",
   "kesinlik": "yil",
   "kaynak": "apulum.ro 'The Roman castrum of the 13th Gemina Legion' (Muzeul Naţional al Uniunii): kampın ilk (toprak, castrum estivum) evresi Dakya'nın işgalinden (106) sonra yükseltildi; turism.apulum.ro: 'Pe locul actualei cetăți' (aynı nokta)",
   "tanik": "which was elevated after Dacia was occupied (in 106 A.D.)"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0106-01-01",
    "t": "0275-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "apulum.ro: 'The castrum existed actively until the army and the Roman administration left the province (271 – 275 A.D)'; MKL 'Gyulafehérvár': 'Kr. u. 271-ig a XIII. Gemina légió táborhelye'; Treccani 'Dacia' (EI 1931): Aureliano evacuò la provincia; Treccani 'Decebalo': 'la Dacia diviene provincia romana'",
    "ic_not": "Başlangıç 106: Treccani 'Decebalo' savaşı 101-102 ve 105-106 olarak verir ve Decebalus'un ölümüyle Dakya'nın eyalet olduğunu söyler; yıl 106 apulum.ro kamp tarihlemesinden alındı (gün yok). Künye dakya (-0081..0106) boyasız: bu şehir Roma öncesi Dakya'ya ait yazılmadı çünkü bu NOKTADA (castrum yeri) Dakya dönemi için yazılı/arkeolojik tanık bulunamadı. Bitiş AÇIK UÇLU: kaynaklar 271 (MKL, 'Kr. u. 271-ig') ile 275 (apulum.ro '271-275', Aurelianus ölümü Treccani 'Aureliano': 275) arasında değişir; güvenli (geç) uç 275 alındı. Künye roma-imp 395'e dek sürer; 275 dönemi künye ömrü içinde (hayalet yok)."
   },
   {
    "f": "0275-01-01",
    "t": "0896-01-01",
    "d": "__BILINMIYOR__",
    "kesinlik": "yil",
    "kaynak": "MKL 'Gyulafehérvár': 3. yy'da Dakların ve Gotların yıkımı; 'a hunok, gepidák, avarok idejében eltűnt; az első dunai bolgár kagánok idején ismét benépesült'; TDV 'Macaristan': Hun, sonra Gepid (Erdel) ve 567'den Avar Hanlığı bölgeye hâkim",
    "ic_not": "Şehir bu aralıkta VAR MIYDI, kimindi sorusu kaynaklarda kesin yok: MKL yerleşimin Hun/Gepid/Avar zamanında 'eltűnt' (kayboldu) olduğunu, Birinci Bulgar Kağanları döneminde yeniden iskân edildiğini söyler (Bălgrad adı bu dönemden; MKL ad listesi) ama HİÇBİR tarih vermez. TDV 'Macaristan' bölge düzeyinde: Hunlar Karpat havzasını yönetti (420-455), sonra 'Büyük Ova'ya ve Transilvanya'ya (Erdel) Gepideler hâkimdi', 567'de Longobard-Avar ittifakı yendi, Avar Hanlığı iki yüzyıl hükmetti. Bu bölge-düzeyi bilgi şehrin varlığını ve sahibini kanıtlamadığı için ne gepid (455-567) ne avar (567-822) ne birinci-bulgar (681-1018) olarak yazılmadı; bölge sahipliği ve Bulgar döneminin tarihlenmesi için Rumen/Macar arkeoloji literatürü (Bălgrad Bulgar dönemi katmanı, 'Alba Iulia IX-X. yy') ayrıca araştırılmalı. Bitiş 896: TDV 'Macaristan' 895-896'da Árpád önderliğinde Transilvanya'nın alınışı (aralığın üst ucu)."
   },
   {
    "f": "0896-01-01",
    "t": "1002-01-01",
    "d": "macar-prensligi",
    "kesinlik": "yil",
    "kaynak": "TDV 'Macaristan': '895-896'da Árpád'ın önderliğiyle Karpatlar'ı aşıp Transilvanya'yı ve Büyük Ova'yı ... yurt edindiler'; MKL 'Gyulafehérvár': 'A honfoglalás után 1002-ig a Gyulák, a 11. sz: a Csanád nemzetség birtoka, várispánság'",
    "ic_not": "KÜNYE AŞIMI (hayalet uyarısı beklenir, 2 yıl): macar-prensligi 895-01-01 → 1000-01-01; Gyula'nın Erdel beyliği 1002'ye dek sürüyor (MKL). Sınıflandırma: aynı polity (Macar kabile konfederasyonunun bir kolu, 'Gyula' unvanlı yerel beyi) sürüyor ⇒ künyeyi GENİŞLET (1002) ya da 'gyula-beyligi-erdel' ayrı künye aç (öneri: genişlet; Gyula'nın hükümdar olarak Macar kralına başkaldırdığı 1002/1003 sonrası el değişimi olay olarak aşağıda). Başlangıç 896: TDV aralığın üst ucu (895-896); fetihten bu noktaya kadar Gyula'nın gelişi ayrıca tarihlenmedi. Wikipedia 'Gyula III' 1003 der (ikincil, kaynak sayılmadı); MKL 1002 alındı."
   },
   {
    "f": "1002-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "MKL 'Gyulafehérvár': '1002-ig a Gyulák' sonra Csanád nemzetség birtoku, várispánlık, '1009: ppi székhely', '1201: Alba Transilvana', '1241: a mongolok elpusztították, IV. Béla kir. újjáépítette', 'IV. (Kun) László 1279'; TDV 'Macaristan': 1000-1001'de I. István taç giydi, Karpat havzasını birleştirdi",
    "ic_not": "Macaristan Krallığı (künye macaristan 1000-1527). Başlangıç 1002 (Gyula'nın düşüşü, MKL); künye başlangıcı 1000-01-01'den 2 yıl sonra, ömür içinde. 1241 Moğol yıkımı sahipliği değiştirmedi (IV. Béla yeniden inşa etti: MKL). Dönem sonu 1281-01-01 = atlas başlangıcı (atlas ilk sahibi de macaristan; dikiş aynı sahip, ek olay gerekmez)."
   }
  ],
  "olay": [
   {
    "t": "0106-01-01",
    "gun": "106",
    "k": "kurulus",
    "b": "Traianus'un Dakya fethinden sonra XIII Gemina Legio'nun Apulum kampı kuruldu; Decebalus'un ölümüyle Dakya Roma eyaleti oldu",
    "kaynak": "apulum.ro 'The Roman castrum of the 13th Gemina Legion'; Treccani 'Decebalo' (105-106)",
    "tanik": "which was elevated after Dacia was occupied (in 106 A.D.)"
   },
   {
    "t": "0275-01-01",
    "gun": "271-275 (üst uç)",
    "k": "kayip",
    "b": "Aurelianus Dakya'yı boşalttı: ordu ve Roma idaresi eyaletten çekildi; Apulum kampı terk edildi",
    "kaynak": "apulum.ro (271-275); MKL 'Gyulafehérvár' (Kr. u. 271-ig); Treccani 'Aureliano': 'Aureliano giudicò necessario di abbandonare la Dacia'",
    "tanik": "until the army and the Roman administration left the province (271 – 275 A.D)"
   },
   {
    "t": "0896-01-01",
    "gun": "895-896 (üst uç)",
    "k": "fetih",
    "b": "Árpád önderliğindeki Macarlar Karpatlar'ı aşıp Transilvanya'yı yurt edindi; Gyulafehérvár Gyula'ların merkezi (Gyula'nın beyliği)",
    "kaynak": "TDV 'Macaristan' (islamansiklopedisi.org.tr/macaristan); MKL 'Gyulafehérvár': 'honfoglalás után 1002-ig a Gyulák'",
    "tanik": "895-896’da Árpád’ın önderliğiyle Karpatlar’ı aşıp Transilvanya’yı ve Büyük Ova’yı"
   },
   {
    "t": "1002-01-01",
    "gun": "1002",
    "k": "fetih",
    "b": "Gyula'ların Erdel beyliği sona erdi; I. István yönetimine girdi (Gyulafehérvár kral kalesi/ várispánlık)",
    "kaynak": "MKL 'Gyulafehérvár'; TDV 'Macaristan' (I. István Karpat havzasını birleştirdi)",
    "tanik": "A honfoglalás után 1002-ig a Gyulák"
   },
   {
    "t": "1009-01-01",
    "gun": "1009",
    "k": "diger",
    "b": "Erdel piskoposluğunun (Katolik) merkezi oldu",
    "kaynak": "MKL 'Gyulafehérvár': '1009: ppi székhely'",
    "tanik": "1009: ppi székhely"
   },
   {
    "t": "1201-01-01",
    "gun": "1201",
    "k": "diger",
    "b": "ad kaydı: Alba Transilvana",
    "kaynak": "MKL 'Gyulafehérvár'",
    "tanik": "1201: Alba Transilvana"
   },
   {
    "t": "1241-01-01",
    "gun": "1241",
    "k": "diger",
    "b": "Moğollar şehri yıktı; IV. Béla yeniden inşa etti ve kraliyet serbest şehri yaptı",
    "kaynak": "MKL 'Gyulafehérvár'",
    "tanik": "1241: a mongolok elpusztították, IV . Béla kir. újjáépítette"
   },
   {
    "t": "1246-01-01",
    "gun": "1246",
    "k": "diger",
    "b": "ad kaydı: Alba",
    "kaynak": "MKL 'Gyulafehérvár'",
    "tanik": "1246: Alba"
   }
  ],
  "ic_not": "ÜRETİM: Kayıt Roma castrum kuruluşundan (106) başlıyor; castrum 'bugünkü kalenin yerinde' (turism.apulum.ro) ⇒ atlas noktası (46.0678, 23.58) ile <1 km: antik Apulum bu noktaya yazıldı. Sivil Apulum (canabae/Colonia Aurelia Apulensis, Partoş) ve Dakya dönemi AYRI/yakın kayıt gerektirebilir; bu oturumda mesafeleri kaynakta ölçülmedi. PTOLEMAIOS 'Apoulon': Wikipedia modern tanımlama olarak Craiva/Piatra Craivii (~20 km kuzey) der (ikincil, doğrulanmadı) ⇒ Dakya döneminin Apulon'u bu noktaya yazılmadı; önerilen ayrı kayıt: 'Piatra Craivii (Apulon?)'. Ptolemaios'un kendi metni bu oturumda açılamadı (penelope Thayer sayfası boş). MKL: 'Ter-én Kr. e. 2-1. évezredi, kora vaskori erődítményt tártak föl' — yeri ayrıntısız olduğu için ark yazılmadı. DAKYA SAHİPLİĞİ: künye dakya (-0081..0106) bu nokta için kaynaklı tanık bulunamadığı için yazılmadı (ilk.t = 106). ARALIK: 275→896 __BILINMIYOR__ (bkz. sahip[1]); gepid/avar/birinci-bulgar künyeleri bölge düzeyinde TDV tanıklığı olduğu için KULLANILMADI. ATLAS 1281: atlas macaristan 1281-01-01 ile uyumlu; öneri yok. ŞEHİR İLK ANILIŞI (Roma sonrası): MKL 'Gyulafehérvár' adlarını sayar (Bălgrad, Alba Iulia, Weissenburg) ve ilk Orta Çağ tarihi olarak '1002-ig a Gyulák / 1009 piskoposluk' verir; 1009 piskoposluğu MKL'ye göre kesin (Wikipedia/Explore Carpathia ikincil). BULGAR İZİ: MKL 'az első dunai bolgár kagánok idején ismét benépesült' tarihsiz; Bălgrad adının kaynağı (Bulgar/Slav 'beyaz kale') ayrıca doğrulanmadı. Wikipedia/Explore Carpathia tek dayanak olmadığı için hiçbir tarih yalnızca onlardan alınmadı. Kaynak notu: MKL (Magyar Katolikus Lexikon, akademik Macar ansiklopedisi) açıldı; Kristó 'Korai magyar történeti lexikon' açılamadı."
 },
 {
  "id": "kamanice",
  "ad": "Kamaniçe",
  "atlas_ad": "Kamaniçe",
  "lat": 48.674,
  "lon": 26.574,
  "kat1900": 2,
  "adlar": [
   "Kamaniçe",
   "Kamieniec Podolski",
   "Kam'janec'-Podil's'kyj (Кам'янець-Подільський)",
   "Kamenets-Podolskiy (Каменец-Подольский)"
  ],
  "ilk": {
   "t": "1100-01-01",
   "gun": "11. yüzyıl",
   "nicelik": "ilk_anilis",
   "kesinlik": "yuzyil",
   "kaynak": "Dariusz Kołodziejczyk, 'Kamaniçe', TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kamanice (curl ile okundu)",
   "tanik": "Tarihi XI. yüzyıla kadar iner.",
   "ic_not": "TDV 'Tarihi XI. yüzyıla kadar iner' der: yerleşimin/anılışın neyi tarihlediği belirsiz (kuruluş mu, anılış mı, arkeolojik mi). Aralık XI. yy → güvenli uç 1100-01-01. ÇELİŞKİ: ESBE (Каменец-Подольск, V. R—v): 'Достоверные сведения о К.-Подольске восходят лишь к началу XIV в.' (Gedimin ele geçirir). Popüler/ikincil kaynaklar yazılı ilk belge olarak Yuri Koriatoviç'in Ocak 1374 Magdeburg hakkı belgesini gösterir (akademik teyit açılamadı: Khoptiar, Repertorium Podolskie makalesi PDF indirilemedi). Kaleyle ilgili XI-XII. yy yapı katmanları ikincil kaynaklarda geçer (teyitsiz). TDV esas alındı, çelişki beyan edildi; çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1100-01-01",
    "t": "1281-01-01",
    "d": "__BILINMIYOR__",
    "kesinlik": "belirsiz",
    "kaynak": "bulunamadı (TDV: 'Tarihi XI. yüzyıla kadar iner'; ESBE: güvenilir bilgi XIV. yy başından)",
    "ic_not": "Şehrin 1100-1281 arasında var olup olmadığı ve sahibi kaynakla gösterilemedi (kiev-rusu 882-1240 / galicya-volhinya 1199-1340 / altinorda adaydır ama TDV de ESBE de sahip vermez). Atlas 'polonya-erken' diyor: TDV 'XIV. yüzyılda Litvanyalılar tarafından alınan Kamaniçe 1430’da Polonya Krallığı’na dahil edildi' — Polonya 1281'de ÇELİŞİYOR."
   }
  ],
  "dikis_beyan": "Atlas Kamaniçe'yi 1281-01-01'de 'polonya-erken' açıyor; TDV Kamaniçe: 'XIV. yüzyılda Litvanyalılar tarafından alınan Kamaniçe 1430’da Polonya Krallığı’na dahil edildi'; ESBE: güvenilir bilgi XIV. yy başından (Gedimin). 1281 Polonya iddiası için kaynak BULUNAMADI — atlas başlangıç sahibi çürük olabilir.",
  "olay": [
   {
    "t": "1100-01-01",
    "gun": "11. yüzyıl",
    "k": "diger",
    "b": "TDV: Kamaniçe'nin tarihi XI. yüzyıla kadar iner (tür belirsiz).",
    "kaynak": "https://islamansiklopedisi.org.tr/kamanice",
    "tanik": "Tarihi XI. yüzyıla kadar iner."
   }
  ],
  "ic_not": "ATLAS DÜZELTME ÖNERİSİ: atlas 1281-1569 'polonya-erken' diyor; TDV Polonya'ya katılışı 1430 verir (öncesi Litvanya, XIV. yy). Podolya 1362 Mavi Sular sonrası Litvanya'ya geçer, öncesi Altın Orda (ikincil, Vikipedi-türü kaynak — kullanılmadı, tek dayanak olamaz). Kaynak sırası: TDV, ESBE okundu; İSAM/TTK/DergiPark ve Ukrayna akademik kaynakları (Encyclopedia of Ukraine siteyi açmadı) bu oturumda yetersiz."
 },
 {
  "id": "kasimov",
  "ad": "Kasimov",
  "atlas_ad": "Kasimov",
  "lat": 54.945,
  "lon": 41.393,
  "kat1900": 3,
  "adlar": [
   "Городец Мещерский (Gorodets Meşçerskiy)",
   "Meşçerskiy Gorodets",
   "Han-Kirman",
   "Kāsım",
   "Касимов (Kasimov)"
  ],
  "ilk": {
   "t": "1152-01-01",
   "gun": "1152",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "ЭСБЕ 'Касимов, город' (А. Ф. Селиванов), https://ru.wikisource.org/wiki/ЭСБЕ/Касимов,_город (curl ile okundu)",
   "tanik": "К. основан в 1152 г. вел. кн. суздальским Юрием Долгоруким",
   "ic_not": "Kuruluş 1152 yalnız ESBE'de (Selivanov) ve Tatişçev geleneğine dayanır; vakayinamede 1152 kuruluşu için yazılı tanık YOK, kaynakta açık değil. ESBE: ilk adı Gorodets / Meşçerskiy Gorodets; 1376'da Moğollarca yıkılır, 600 sajen (~1,3 km) yukarıda yeniden kurulur ('Новый Низовой город'); 1452'de Tsarevich Kasım'a verilince Kasımov adı. TDV Kāsım Hanlığı (Taşağıl): Rusça kaynaklarda şehir Meşçerskiy/Gorodets, hanlık 1445[?]/1452-56. Yer 3 km içinde (yeni konum ~1,3 km). Bağımsız ikinci akademik tanık BULUNAMADI (çift teyit yok); tarih UYARISI: 1152 gelenek, ilk güvenilir yazılı anılış bu oturumda açılamadı (ESBE 1376 yıkımı)."
  },
  "kur": {
   "t": "1152-01-01",
   "gun": "1152",
   "kesinlik": "yil",
   "kaynak": "ЭСБЕ 'Касимов, город', https://ru.wikisource.org/wiki/ЭСБЕ/Касимов,_город",
   "tanik": "К. основан в 1152 г. вел. кн. суздальским Юрием Долгоруким"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1152-01-01",
    "t": "1157-01-01",
    "d": "kiev-rusu",
    "kesinlik": "yil",
    "kaynak": "ЭСБЕ 'Касимов, город' (kurucu: Suzdal Büyük Knezi Yuri Dolgoruki); ЭСБЕ 'Андрей Юрьевич Боголюбский' (Yuri 1157'de ölür)",
    "ic_not": "Kurucu Yuri Dolgoruki'nin Suzdal toprakları — Kiev Rus'u künyesi parçalanma dönemi knezliklerini kapsar (yaklaşık, beyanlı)."
   },
   {
    "f": "1157-01-01",
    "t": "1281-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "bulunamadı (ESBE 1157-1281 arası sahiplik tanığı vermez)",
    "ic_not": "Şehir VAR (kuruluşu 1152, Aleksandr Nevski'nin ölümü 1263'te Gorodets Meşçerskiy'de — ESBE: 'считается местом смерти', yıl verilmez). Sahip bulunamadı: Murom-Ryazan/Meşçera kenarı; ryazan künyesi (1129-1521) ve vladimir-suzdal (1157-1281) adaydır ama kaynaksız — yaklaşıklık beyansız yazılmaz."
   }
  ],
  "dikis_beyan": "Atlas Kasimov'u 1281-01-01'de 'altinorda', 1325'te 'moskova' açıyor; 1157-1281 sahibi ve 1281 devri için kaynak aranıp BULUNAMADI (ESBE yalnız kuruluş, 1263 Nevski ölümü [yılsız], 1376 yıkım, 1452 Kasım). Altın Orda sahipliği 1281 için doğrulanmadı.",
  "olay": [
   {
    "t": "1152-01-01",
    "gun": "1152",
    "k": "kurulus",
    "b": "Suzdal Büyük Knezi Yuri Dolgoruki Gorodets'i (Meşçerskiy Gorodets) kurar (Tatişçev geleneği).",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Касимов,_город",
    "tanik": "К. основан в 1152 г. вел. кн. суздальским Юрием Долгоруким"
   },
   {
    "t": "1157-01-01",
    "gun": "1157",
    "k": "diger",
    "b": "künye geçişi: Kiev Rus'u → (sahip bulunamadı); Yuri Dolgoruki Kiev knezi olarak ölür.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Андрей_Юрьевич_Боголюбский",
    "tanik": "он овладел окончательно Киевом и † киевским князем (в 1157 г.)"
   }
  ],
  "ic_not": "ATLAS UYARISI: atlas 1281-1325 'altinorda', 1325'ten 'moskova' (Gorodets'in Moskova'ya bağlanışı için bu oturumda kaynak açılmadı). TDV Kāsım Hanlığı: Kasım hanları Moskova'ya 'vasal'; hanlık 1445[?]/1452-1456."
 },
 {
  "id": "kassa-kosice",
  "ad": "Kassa (Košice)",
  "atlas_ad": "Kassa (Košice)",
  "lat": 48.714,
  "lon": 21.258,
  "kat1900": 2,
  "adlar": [
   "Villa Cassa",
   "Cassa",
   "Kassa",
   "Košice",
   "Cassovia",
   "Kaschau"
  ],
  "ilk": {
   "t": "1230-01-01",
   "gun": "1230",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Magyar Katolikus Lexikon, 'Kassa' (lexikon.katolikus.hu/K/Kassa.html); Slovak ayrıntı: sk.wikipedia 'Dejiny Košíc' (Jágerská kapitula Ľubina belgesi, 1230; tek dayanak sayılmadı, Halaga'ya atıf)",
   "tanik": "1230: okl. említi ~t, melynek lakói a Várhegyen erődítményt emeltek."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1230-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "Magyar Katolikus Lexikon, 'Kassa' ('v. Abaúj-Torna vm.' kral şehri, 1249: 'már kir. város'); Treccani, Enciclopedia Italiana, 'Košice' (1933): 'Nel sec. XIV ottenne dal re Ladislao d'Ungheria il diritto municipale'",
    "ic_not": "Künye macaristan 1000-01-01..1527-01-01; ömür içinde. Sahiplik, kasabanın Macar Krallığı'nın Abaúj (Abaúj-Torna) vármegyesinde bir kral yerleşimi (Villa Cassa, 'kráľovská osada' — Dejiny Košíc) olduğuna dayanır. Zincir 1281-01-01'de atlasın ilk sahibi macaristan ile birleşir; dikiş yok (aynı sahip), olay gerekmiyor."
   }
  ],
  "olay": [
   {
    "t": "1230-01-01",
    "gun": "1230",
    "k": "diger",
    "b": "Villa Cassa'nın (kral yerleşimi) ve kilisesinin bilinen ilk yazılı anılışı (Eğri/Jágerská kapitula belgesi); ilk anılış, kuruluş değil",
    "kaynak": "Magyar Katolikus Lexikon, 'Kassa' (plébánia: '1230: Cassa. 1257: már létezett'); sk.wikipedia 'Dejiny Košíc' (Halaga'ya atıf; tek dayanak değil)",
    "tanik": "1230: okl. említi ~t, melynek lakói a Várhegyen erődítményt emeltek."
   },
   {
    "t": "1241-01-01",
    "gun": "1241",
    "k": "diger",
    "b": "Moğol (Tatar) istilâsında Kassa tahrip edildi; ardından Béla IV'ün Sakson/Alman 'hospes' iskânı",
    "kaynak": "Magyar Katolikus Lexikon, 'Kassa' (tatárok feldúlták); yıl 1241: sk.wikipedia 'Dejiny Košíc' (Moğol istilâsı Uhorsko'ya 1241; MKL ve Treccani yıl vermez, beyan edildi); Treccani 'Košice' (1933)",
    "tanik": "A tatárok feldúlták, de 1249: már kir. város."
   },
   {
    "t": "1249-01-01",
    "gun": "1249",
    "k": "diger",
    "b": "1249'da Kassa kral şehri/iki 'villa' (Üst ve Alt Košice); Alman (Sakson) kolonistlere hospes ayrıcalığı (libertas hospitum de Kassa)",
    "kaynak": "Magyar Katolikus Lexikon, 'Kassa' (1249: már kir. város); Treccani, Enciclopedia Italiana, 'Košice' (1933): 1249'da iki 'ville'; sk.wikipedia 'Dejiny Košíc' (1249 listina, libertas hospitum de Kassa)",
    "tanik": "La prima notizia sicura che si ha su Košice, è del 1249"
   }
  ],
  "ic_not": "SONUÇ: İlk anılış 1230 (MKL: 'okl. említi'; sk.wikipedia'nın atıf zinciri: Eğri/Jágerská kapitula'nın Ľubina belgesi, Villa Cassa, Šimon ve Peter'in arazi satışı, 9 hrivna). ÇELİŞKİ (beyan): Treccani, Enciclopedia Italiana (1933) 'Košice' maddesi 'ilk KESİN haber 1249' der; 1230 belgesini anmaz. MKL (belge yılı olarak 1230 veriyor, 'ilk KESİN haber' sınırlaması koymuyor) esas alındı; Treccani 1249 daha geç ve 1230'u dışlamaz. Sahiplik (Macaristan) iki tarihte de aynıdır, zincir etkilenmez; eğer 1230 çürütülürse ilk.t 1249'a iner. İlk anılış kuruluş DEĞİL: Treccani 'Verso la fine del sec. XIII divenne città' (XIII. yy sonu şehir hakkı, Alman kolonizasyonu), MKL geleneği: Géza I (1074-77) döneminde yerleştirilen Saksonlar Eski Kassa'nın yanında yerleşti (gelenek, tarihsiz; kur yazılmadı). Atlas dikişi: macaristan 1281'de sürüyor, düzeltme gerekmiyor. KAYNAK SINIRLARI: Encyclopaedia Beliana 'Košice' maddesi bulunamadı (404/madde yok); DergiPark/TDV'de Kassa şehri maddesi yok (TDV 'kaşa/košice/kaşau/kassa' aramaları: yalnız Kassâb vb.); Magdoško, 'Suburbs of Medieval Košice' (Mesto a dejiny 2023, doi 10.33542/cah2023-2-01) açık erişimli ama Zenodo PDF'i 403 verdi, açılamadı; Lexikon stredovekých miest na Slovensku (HÚ SAV 2010) ve Halaga'nın eserleri yalnız sk.wikipedia dipnotlarından biliniyor, doğrudan açılmadı => 1230 için ikinci bağımsız AKADEMİK kaynak yok (çift teyit değil). Kassa vs Košice adı: Slovak/Macar ad değişimi bu kayıtta adlar'da; atlas adı 'Kassa (Košice)'. 1290 (Jágerský biskup Andrej II Košice'yi Abaúj başdiyakozluğundan muaf etti; civitas terimi) 1281 sonrasıdır, bu kayda yazılmadı."
 },
 {
  "id": "kaunas",
  "ad": "Kaunas",
  "atlas_ad": "Kaunas",
  "lat": 54.897,
  "lon": 23.886,
  "kat1900": 2,
  "adlar": [
   "Kaunas",
   "Kovno (Ковно)",
   "Kowno",
   "Kawen"
  ],
  "ilk": {
   "t": "1361-01-01",
   "gun": "1361",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Algirdas Žalnierius, 'Kaunas Castle', Archaeological investigations in independent Lithuania (1990-2010), Vilnius 2012, s. 218-225, https://www.lituanistika.lt/content/50742 (özet, curl ile okundu)",
   "tanik": "Kaunas castle was first mentioned in written sources in 1361.",
   "ic_not": "Yazılı ilk anılış KALE: 1361 (ertesi yıl 1362'de Töton Tarikatı yıkar). Aynı özet: yerleşme X-XII. yy'a iner (Žalnierius 2002, Kauno istorijos metraštis 3, s. 7-36, https://www.vdu.lt/cris/entities/publication/2596f7b2-5f3c-4c68-aad9-ff64b23505e2: 'the settlement dates back to the Xth - XIIth century'): ark alanında. Kural: yazılı tanık varsa ilk o; arkeolojik yerleşme atlas 1281'den ÖNCE olduğu için ATLAS UYARISI aşağıda. Kuruluş tarihi yok; Wigand von Marburg (Yeni Prusya Vakayinamesi) birincil metni açılamadı (Vikipedi-türü kaynak Wigand ile Henry of Schöningen'i karıştırıyor, kullanılmadı)."
  },
  "kur": null,
  "ark": {
   "t": "0901-01-01",
   "gun": "10.-12. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "A. Žalnierius, 'Pirmoji Kauno pilis', Kauno istorijos metraštis 2002, 3, s. 7-36, https://www.vdu.lt/cris/entities/publication/2596f7b2-5f3c-4c68-aad9-ff64b23505e2",
   "tanik": "the settlement dates back to the Xth - XIIth century"
  },
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1361-01-01",
    "gun": "1361",
    "k": "diger",
    "b": "Kaunas kalesinin yazılı kaynaklarda ilk anılışı.",
    "kaynak": "A. Žalnierius, Kaunas Castle (2012), https://www.lituanistika.lt/content/50742",
    "tanik": "Kaunas castle was first mentioned in written sources in 1361."
   },
   {
    "t": "1362-01-01",
    "gun": "1362",
    "k": "yikim",
    "b": "Kaunas kalesi Töton Tarikatı ordusunca yıkılır.",
    "kaynak": "A. Žalnierius, Kaunas Castle (2012), https://www.lituanistika.lt/content/50742",
    "tanik": "During the following year, the Teutonic Order destroyed the castle."
   }
  ],
  "ic_not": "ZİNCİR YOK: ilk.t 1361 atlasın başlangıcından (1281-01-01) sonra. ATLAS UYARISI: atlas Kaunas'ı 1281'de 'litvanya-buyuk-dukalik' (künye 1236+) açıyor; yazılı tanık 1361 (kale), arkeolojik yerleşme X-XII. yy (ark) — 1281 yazılı kaynakla desteklenmiyor. Kaunas kalesinin inşası eski literatürde XIII. yy ikinci yarısı - XIV. yy başı sayılıyordu; Žalnierius (2012) buna karşı: taş kale 1350'lerin sonunda başlamış, XIII. yy ikinci yarısında inşa edilemezdi. Litvanya Büyük Dukalığı'nın Kaunas bölgesinde 1281 hâkimiyetine tanık BULUNAMADI (Visuotinė lietuvių enciklopedija vle.lt Cloudflare engelledi, Encyclopaedia Lituanica açılamadı)."
 },
 {
  "id": "kefe",
  "ad": "Kefe",
  "atlas_ad": "Kefe",
  "lat": 45.032,
  "lon": 35.382,
  "kat1900": 3,
  "adlar": [
   "Theudosia (Theodosia)",
   "Caphum",
   "Kaffa",
   "Kefe",
   "Feodosiya (Феодосия)"
  ],
  "ilk": {
   "t": "-0500-01-01",
   "gun": "MÖ 6. yüzyıl",
   "nicelik": "kurulus",
   "kesinlik": "yuzyil",
   "kaynak": "Yücel Öztürk, 'Kefe', TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kefe (curl ile okundu)",
   "tanik": "bir Milet kolonisi olarak ortaya çıktığı belirtilir",
   "ic_not": "TDV: 'Kefe’nin kuruluş tarihi hakkında kesin bilgi bulunmamakla beraber buranın milâttan önce VI. yüzyıldan itibaren önem kazandığı, bir Milet kolonisi olarak ortaya çıktığı belirtilir' (kesin değil, 'belirtilir'). Aralık MÖ 600-501 → güvenli uç MÖ 501 = -0500. Demosthenes/Strabon Theodosia'yı bu yerle (Kaffa) aynı sayar (Perseus notu 'Theudosia (Kaffa), an ancient colony of Miletus'). TDV iç çelişki: 'Kepoi, Kapha veya Kafa ismi ilk defa Konstantinos Porfirogennetos’un eserinde geçer (m.ö. IV. yüzyıl)' — Porfirogennetos MS 10. yy'dır, TDV tarihi MÖ yazmış olgu hatası; kullanılmadı. Süreklilik: antik Theodosia ile ortaçağ Kefe arası kesinti/süreklilik kaynakla gösterilmedi (TDV tek şehir sayar). Bkz. ic_not."
  },
  "kur": {
   "t": "-0500-01-01",
   "gun": "MÖ 6. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "TDV 'Kefe', https://islamansiklopedisi.org.tr/kefe",
   "tanik": "bir Milet kolonisi olarak ortaya çıktığı belirtilir"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0500-01-01",
    "t": "-0352-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "bulunamadı (sahip tanığı yok); bağlam: Strabon 7.4.4, https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Strabo/7D*.html",
    "ic_not": "Milet kolonisi polis; Strabon: liman 'in earlier times was a boundary between the countries of the Bosporians and the Taurians' (Bosporos'a bağlı değil, tarihsiz). Ayrı polis künyesi yok; kuruluşundan Leukon dönemine sahip tanığı bulunamadı."
   },
   {
    "f": "-0352-01-01",
    "t": "0370-01-01",
    "d": "bosporos-krallik",
    "kesinlik": "yil",
    "kaynak": "Demosthenes, Against Leptines 20.33 (Perseus perseus-eng2, https://cts.perseids.org/read/greekLit/tlg0014/tlg020/perseus-eng2/28-34); Strabon 7.4.4-5",
    "ic_not": "f 'en geç tanıktan': Leukon (Bosporos hükümdarı, saltanat 393-353 Perseus notu) Theudosia'da depo açmıştır → şehir Bosporos Krallığı'ndadır; f = Leukon'un saltanat sonu (MÖ 353 = -0352, güvenli uç). Önceki dönem (boşluk) f'ye uzar, beyanlıdır. t=0370 künye ömründen (bosporos-krallik t 0370); Strabon sonrası (MÖ 1. yy - MS 4. yy) Theodosia/Bosporos bağı için ayrı tanık bu oturumda AÇILMADI — künye ömrü üzerinden BEYANLI yaklaşıklık (Pontus/Roma vassallığı ayrıştırılmadı)."
   },
   {
    "f": "0370-01-01",
    "t": "1242-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "belirsiz",
    "kaynak": "bulunamadı; TDV 'Kefe': 'Kefe Bizans’a bağlı bir liman durumundaydı' (tarihsiz)",
    "ic_not": "TDV, 'IV. yüzyıldan itibaren ... Türk devletleri zamanında ... Kefe Bizans’a bağlı bir liman durumundaydı' der ama süre/gün vermez; Bizans künyesi ile süreklilik yazılamaz (Hazar, Kıpçak/Kuman dönemleri ayrışmaz). Sahip aralığı için TDV dışı kaynak (Belleten, Vasiliev, Rus/Ukrayna akademik) bu oturumda açılamadı."
   },
   {
    "f": "1242-01-01",
    "t": "1266-01-01",
    "d": "altinorda",
    "kesinlik": "yil",
    "kaynak": "TDV 'Batu Han', https://islamansiklopedisi.org.tr/batu-han; TDV 'Kefe'",
    "ic_not": "Batu Han 1242'de yurduna döner, Saray'ı kurar; Kefe, Kerç, Sudak, Azak 'kısa zamanda tekrar eski ticarî canlılıklarını kazandılar' (Altın Orda idaresi). Künye altinorda f=1242-01-01 (TDV 'Altın Orda Hanlığı' 1241-1502)."
   },
   {
    "f": "1266-01-01",
    "t": "1281-01-01",
    "d": "kefe-gazaria",
    "kesinlik": "yil",
    "kaynak": "TDV 'Kefe', https://islamansiklopedisi.org.tr/kefe",
    "ic_not": "Cenevizliler Altın Orda'dan yerleşme izniyle 1266 civarı gelir, sonra 'buraya hâkim oldular' (hâkimiyet günü TDV'de yok). Künye kefe-gazaria f=1266 atlasın 1281 'ceneviz' dönemine kesintisiz bağlanır; 1266-1281 arası egemenlik fiilen Altın Orda'da olabilir (TDV tarihlemez)."
   }
  ],
  "dikis_beyan": "Dikiş 'ayrı sahip' değil etiket farkıdır: atlas 'ceneviz' (BOYALAR anahtarı), zincirin son dönemi 'kefe-gazaria' (Ceneviz Gazaria, TDV: Cenevizliler 1266 civarı yerleşir) — aynı polity; devletler.js'te kefe-gazaria künyesinin harita: alanı yok, denetim bu yüzden ayrı sahip sayıyor. 1281-01-01 için ayrı devir olayı YOK (kaynak aranmadı çünkü devir değil). Önerim: künyeye harita:\"ceneviz\" eklenmesi.",
  "olay": [
   {
    "t": "-0500-01-01",
    "gun": "MÖ 6. yüzyıl",
    "k": "kurulus",
    "b": "Theodosia, Milet kolonisi olarak ortaya çıkar (TDV: kesin tarih bilinmiyor).",
    "kaynak": "https://islamansiklopedisi.org.tr/kefe",
    "tanik": "bir Milet kolonisi olarak ortaya çıktığı belirtilir"
   },
   {
    "t": "-0352-01-01",
    "gun": "MÖ 353",
    "k": "diger",
    "b": "Bosporos hükümdarı Leukon (saltanat 393-353) Theudosia'da depo açmıştır: şehir en geç bu tarihte Bosporos Krallığı'nda.",
    "kaynak": "Demosthenes, Against Leptines 20.33 + Perseus notu (https://cts.perseids.org/read/greekLit/tlg0014/tlg020/perseus-eng2/28-34)",
    "tanik": "he has opened another depot at Theudosia"
   },
   {
    "t": "0370-01-01",
    "gun": "4. yüzyıl",
    "k": "diger",
    "b": "künye geçişi: Bosporos Krallığı → (sahip bulunamadı); IV. yy'dan itibaren Asya'dan gelen Türk yayılması (yalnız yüzyıl hassasiyetinde).",
    "kaynak": "https://islamansiklopedisi.org.tr/kefe",
    "tanik": "IV. yüzyıldan itibaren Asya’dan Avrupa istikametinde vuku bulan Türk yayılması"
   },
   {
    "t": "1242-01-01",
    "gun": "1242",
    "k": "diger",
    "b": "künye geçişi: Batu Han Eflak ve Boğdan üzerinden dönüp Cuci ulusunun/Altın Orda'nın merkezini Saray'da kurar; Kefe Altın Orda idaresine girer.",
    "kaynak": "https://islamansiklopedisi.org.tr/batu-han",
    "tanik": "Eflak ve Boğdan üzerinden 1242 yılında yurduna döndü"
   },
   {
    "t": "1266-01-01",
    "gun": "1266 civarı",
    "k": "kurulus",
    "b": "Cenevizliler Altın Orda'dan izin alarak Kefe'ye yerleşir (Ceneviz kolonisi başlangıcı).",
    "kaynak": "https://islamansiklopedisi.org.tr/kefe",
    "tanik": "Altın Orda’dan yerleşme izni almak suretiyle Kefe’ye gelen Cenevizliler (1266 yılı civarı)"
   }
  ],
  "ic_not": "Atlas 'ceneviz' 1281 (enklav) ile dikiş aynı polity (bkz. dikis_beyan). ATLAS DÜZELTME ÖNERİSİ: atlasın Kefe zinciri 1281 öncesini kapsamıyor; 1281 'Ceneviz' tarihi TDV'ye göre egemenlik Altın Orda'dadır, Cenevizliler yalnız izinli yerleşimcidir (hâkimiyet sonradan) — atlasın 1281 'ceneviz' iddiası künyenin f=1266'sına dayanır, hâkimiyet günü TDV'de yok. TDV iç tutarsızlıkları: Kalka 1239 (gerçek 1223). Antik Theodosia ile Kefe aynı yer (Perseus notu). Rusça akademik kaynak (Rus Biyografi, Yanin vb.) bu yer için açılamadı; Strabon 7.4.4: liman 'in earlier times was a boundary between the countries of the Bosporians and the Taurians'."
 },
 {
  "id": "klis",
  "ad": "Klis",
  "atlas_ad": "Klis",
  "lat": 43.559,
  "lon": 16.519,
  "kat1900": 2,
  "adlar": [
   "Klis"
  ],
  "ilk": {
   "t": "0852-03-04",
   "gun": "4 Mart 852",
   "nicelik": "ilk_anilis",
   "kesinlik": "gun",
   "kaynak": "Hrvatska enciklopedija (LZMK), 'Klis', https://www.enciklopedija.hr/clanak/klis; 'Trpimir I.', https://www.enciklopedija.hr/clanak/trpimir-i",
   "tanik": "Prvi se put spominje u ispravi iz 852. kao dvor kneza Trpimira",
   "ic_not": "İLK ANILIŞ, kuruluş değil. Trpimir Bağışı'nın (listina) geleneksel tarihi 4 Mart 852'dir (LZMK 'Trpimir I.': 'Tradicionalni joj je datum 4. III. 852.'); yeni yorumlar 840-844 (çoğunlukla 841) arasına çeker. İlk anılışta güvenli uç = aralığın SON ucu (852-03-04) alındı. Öncesi: LZMK 'U pretpovijesti gradinsko naselje, potom kasnorimski castrum' (tarihsiz) ve Krčine mağarasında neolitik izler (tarihsiz); yazılı tanık olduğu için arkeolojik katman başlangıç sayılmadı. TDV 'Klis' (N. Moačanin, 2002) yalnız Osmanlı dönemini (1537) verir; 852 TDV'de YOK. Çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0852-03-04",
    "t": "1102-01-01",
    "d": "hirvatistan-kralligi",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Trpimir I.' https://www.enciklopedija.hr/clanak/trpimir-i ('Središte vlasti bilo mu je na području Klisa i Solina'); LZMK 'Klis' ('Klis je bio središte starohrvatske županije'); LZMK 'Tomislav' https://www.enciklopedija.hr/clanak/tomislav",
    "ic_not": "Künye hirvatistan-kralligi 925-01-01'de başlar; 852-925 arası Trpimir ('dux Chroatorum') ve ardılları aynı Hırvat siyasî yapısıdır (prenslik -> krallık): HAYALET uyarısı beklenir, öneri: künyeyi 852'ye GENİŞLET. Bitiş: Koloman 1102'de Biograd'da Hırvatistan ve Dalmaçya kralı olarak taçlandı (LZMK 'Koloman'). Klis'in 852-1102 arasında Hırvat hükümdar elinde kaldığı LZMK'nın 'Klis narodnih vladara središte županije' ifadesinden (X. yy, Porfirogennetos) çıkarılmıştır; yıllara göre tek tek tanık yok."
   },
   {
    "f": "1102-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Koloman' https://www.enciklopedija.hr/clanak/koloman; LZMK 'Klis'",
    "ic_not": "Hırvat-Macar kral birliği (Koloman 1102). LZMK 'Klis': 'Od XII. st. Klis su držali različiti gospodari: splitski nadbiskup, templari, u XIII. st. splitski knez Domald' — kalenin fiilî sahipleri vasal/yerel; üst egemenlik Hırvat-Macar tacı olarak bırakıldı (beyanlı yaklaşıklık, dönem içi el değiştirme günleri kaynakta yok). Atlas 1281 'macaristan' ile aynı."
   }
  ],
  "olay": [
   {
    "t": "0852-03-04",
    "gun": "4 Mart 852",
    "k": "diger",
    "b": "Klis'in ilk yazılı anılışı: Trpimir'in sarayı (curtis); Trpimir Bağışı (tarih tartışmalı, 840-852)",
    "kaynak": "LZMK 'Klis', https://www.enciklopedija.hr/clanak/klis",
    "tanik": "Prvi se put spominje u ispravi iz 852. kao dvor kneza Trpimira"
   },
   {
    "t": "1102-01-01",
    "gun": "1102",
    "k": "taht",
    "b": "Koloman Biograd'da Hırvatistan ve Dalmaçya kralı taçlanır: Hırvat-Macar kral birliği",
    "kaynak": "LZMK 'Koloman', https://www.enciklopedija.hr/clanak/koloman",
    "tanik": "u Biogradu bio okrunjen za kralja Hrvatske i Dalmacije"
   }
  ],
  "ic_not": "Klis atlasta k=2 (sancak, 1537-1648 Osmanlı). Atlas 1281'de 'macaristan' ile başlıyor; zincir aynı sahiple bitiyor. TDV maddesinde (kasaba) Osmanlı öncesi kayıt yok. kat1900: LISTE.tsv'de Klis yok; atlas k=2 esas alınarak 2 yazıldı (doğrulanmadı). LZMK tek (Hırvat ulusal) ansiklopedidir; ikinci bağımsız teyit bulunamadı."
 },
 {
  "id": "krakov",
  "ad": "Krakov",
  "atlas_ad": "Krakov",
  "lat": 50.065,
  "lon": 19.945,
  "kat1900": 2,
  "adlar": [
   "Krakov (Kraków)",
   "Cracovia",
   "Krakau"
  ],
  "ilk": {
   "t": "0985-01-01",
   "gun": "985",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Hrvatska enciklopedija (LZMK), 'Krakov', https://www.enciklopedija.hr/clanak/krakov",
   "tanik": "Prvi se put spominje 985.",
   "ic_not": "İLK ANILIŞ, kuruluş değil. EI 'Cracovia' (F. Kopera 1930; https://www.treccani.it/enciclopedia/cracovia_(Enciclopedia-Italiana)/): 'Il nome di Cracovia appare per la prima volta nel sec. X' (Ibrâhîm b. Yaʿkûb, al-Bekrî aracılığıyla) — yüzyıl hassasiyeti, LZMK'nın 985'i ile çelişmez. Başka literatürde Ibrâhîm b. Yaʿkûb seyahati ≈965-966 verilir; bu oturumda açılıp doğrulanamadığı için YAZILMADI (güvenli uç 985). Efsane (Krak, Wawel ejderhası) gelenektir (EI). Öncesi 'prapovijesno doba' ve Vislan (Wiślanie) merkezi (LZMK), tarihsiz."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0985-01-01",
    "t": "0999-01-01",
    "d": "bohemya",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Krakov': 'Nakon vladavine češkog kneza Boleslava I. (od oko 955)'; https://www.enciklopedija.hr/clanak/krakov",
    "ic_not": "LZMK Çek (Přemyslid) egemenliğini oko 955'ten itibaren verir. Künye bohemya 1000-01-01'de başlar: HAYALET uyarısı beklenir; aynı polity sürüyorsa künyeyi GENİŞLET (öneri: Přemyslid Bohemya Dükalığı, ≈955). Dönem başı ilk anılış yılıdır; Bohemya egemenliğinin başlangıcı (≈955) ilk anılıştan eski olduğu için dönem 985'te açıldı. Polonya/Čeh egemenliği tarihçesi literatürde tartışmalı (Jagiellonian Üniv. kaynakları açılmadı)."
   },
   {
    "f": "0999-01-01",
    "t": "1281-01-01",
    "d": "polonya-erken",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Krakov': 'Krakov je 999. osvojio poljski kralj Boleslav I. Hrabri'; EI 'Cracovia'",
    "ic_not": "Bolesław Chrobry 999 (LZMK). Piast parçalanması: 'veliki knez' makamı 1138'den Kraków'dadır (LZMK); EI: 'Nelle lotte politiche tra i principi della dinastia dei Piasti ... Cracovia è fino al '200 oggetto di continue contese' — şehir dük düzeyinde el değiştirse de (örn. Silezya Piastları) hepsi Piast Polonyası içinde kalır; atlas 'polonya-erken' ile aynı."
   }
  ],
  "olay": [
   {
    "t": "0985-01-01",
    "gun": "985",
    "k": "diger",
    "b": "Kraków'un ilk yazılı anılışı (LZMK; EI: X. yüzyıl, Ibrâhîm b. Yaʿkûb)",
    "kaynak": "LZMK 'Krakov', https://www.enciklopedija.hr/clanak/krakov",
    "tanik": "Prvi se put spominje 985."
   },
   {
    "t": "0999-01-01",
    "gun": "999",
    "k": "fetih",
    "b": "Polonya kralı I. Boleslaw Chrobry Kraków'u Bohemya'dan alır",
    "kaynak": "LZMK 'Krakov', https://www.enciklopedija.hr/clanak/krakov",
    "tanik": "Krakov je 999. osvojio poljski kralj Boleslav I. Hrabri"
   },
   {
    "t": "1138-01-01",
    "gun": "1138",
    "k": "idari",
    "b": "Kraków 'büyük dük' (senior) makamının merkezi olur; Polonya Piast dükalıklarına bölünür",
    "kaynak": "LZMK 'Krakov', https://www.enciklopedija.hr/clanak/krakov",
    "tanik": "sjedište velikoga kneza (od 1138)"
   },
   {
    "t": "1241-01-01",
    "gun": "1241",
    "k": "fetih",
    "b": "Tatar (Moğol) istilasında Kraków neredeyse tamamen yıkılır; sahiplik değişmez",
    "kaynak": "Treccani, 'Cracovia', https://www.treccani.it/enciclopedia/cracovia/",
    "tanik": "Semidistrutta dai Tatari nel 1241"
   },
   {
    "t": "1257-01-01",
    "gun": "1257",
    "k": "idari",
    "b": "Bolesław Utangaç (Pudico) Magdeburg hukukuna dayalı ayrıcalıkları verir (kent özerkliği)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Cracovia', https://www.treccani.it/enciclopedia/cracovia_(Enciclopedia-Italiana)/",
    "tanik": "ottennero da Boleslao il Pudico (1257) privilegi speciali"
   }
  ],
  "ic_not": "Atlas k=1 (1320-1569 başkent) ve 1281'de 'polonya-erken' ile başlıyor; zincir aynı sahiple bitiyor. Atlas 'Krakov' adı Lehçe Kraków'dur. kat1900: LISTE.tsv'de Kraków satırı yok; 2 yazıldı (doğrulanmadı). Atlas düzeltme önerisi: 1138-1281 arasında Kraków Silezya Piastlarının (Henryk Brodaty/Pobożny 1232-41) elinde de kalmıştır (EI 'contese'); bu oturumda gün tanığı açılmadı, atlasa dokunulmadı."
 },
 {
  "id": "lizbon",
  "ad": "Lizbon",
  "atlas_ad": "Lizbon",
  "lat": 38.722,
  "lon": -9.139,
  "kat1900": 1,
  "adlar": [
   "Alis Ubbo (Fenike geleneği)",
   "Olysipo/Olisipo",
   "Felicitas Iulia",
   "Ulyssipona",
   "Üşbûne (Leşbûne)",
   "Lixboa",
   "Lisboa"
  ],
  "ilk": {
   "t": "-0137-01-01",
   "gun": "MÖ 138",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Princeton Encyclopedia of Classical Sites (1976), 'OLISIPO (Lisbon)' — https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0006:entry=olisipo; Strabon, Geography 3.3.1 (Loeb, LacusCurtius, https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Strabo/3C*.html)",
   "tanik": "The site was occupied by the Romans in 138 B.C.",
   "ic_not": "İlk anılış alt sınırdır, kuruluş DEĞİL. Strabon: Brutus Callaicus 'to command the bar of the river, he fortified Olysipo' (Loeb dipnotu: 136 MÖ'e kadar süren kampanya); Princeton 138 MÖ der ve 'mevcut köyü mü çevirdi, yoksa yanına castrum mu kurdu belli değil' ekler. Treccani: Fenike 'Alis Ubbo' (gelenek, tarihsiz). Princeton 'Geç Paleolitik yerleşim' der (kazı tarihi yok, ark yazılmadı). TDV: 'Şehrin kuruluşuna dair kesin bilgi yoktur.'"
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0137-01-01",
    "t": "-0026-01-16",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Princeton 'Olisipo'; Strabon 3.3.1",
    "ic_not": "MÖ 138'den: konsül D. Junius Brutus şehri tahkim eder."
   },
   {
    "f": "-0026-01-16",
    "t": "0395-01-17",
    "d": "roma-imp",
    "kesinlik": "gun",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/; Treccani 'Lisbona'",
    "ic_not": "Treccani: Olissipo 'Felicitas Iulia', Lusitania'nın Scalabitanus conventus'una bağlı, Emerita'dan sonra ikinci şehir."
   },
   {
    "f": "0395-01-17",
    "t": "0468-01-01",
    "d": "bati-roma",
    "kesinlik": "yil",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/; Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/lisbona_(Enciclopedia-Italiana)/",
    "ic_not": "t: Treccani 468 (yıl)."
   },
   {
    "f": "0468-01-01",
    "t": "0716-01-01",
    "d": "vizigot",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/lisbona_(Enciclopedia-Italiana)/; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "ic_not": "Treccani: 468'de Germenler (Svevler Olissipo'yu almak için indi, Vizigotlar yolu kesip şehri aldı). Svev/Vizigot sıra belirsizliği: Treccani Vizigot der, tarihsiz. TDV: 'Roma, Alanlar ve Vizigotlar’ın hâkimiyetine girdiği bilinmektedir'. Vizigot künyesi 711'de biter; Lizbon'un fethi 97/716 → dönem 716'ya uzatıldı (hayalet uyarısı)."
   },
   {
    "f": "0716-01-01",
    "t": "0756-05-15",
    "d": "emevi",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "ic_not": "Abdülazîz b. Mûsâ fethi (97/716); Valiler dönemi — künye GENİŞLET önerisi (Emevî künyesi 750'de biter)."
   },
   {
    "f": "0756-05-15",
    "t": "1012-07-23",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune; endulus",
    "ic_not": "II. Alfonso 182/798'de Üşbûne'yi ele geçirdi, 193/808'de geri alındı (TDV) — Treccani 'occupò varie volte' der: akın niteliği, dönem AÇILMADI. Sâbûr es-Saklebî'nin bağımsızlığı: hicrî 403 (1012-13)."
   },
   {
    "f": "1012-07-23",
    "t": "1094-01-21",
    "d": "eftasiler",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/eftasiler; usbune",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'eftasiler' (Sağrülednâ/Batalyevs taifası; Sâbûr es-Saklebî 403/1012-13, Eftasî hânedanı 413/1022 – 487/1094 veya 488/1095). f: hicrî 403 ∩ 1012 = 1012-07-23. 486/1093'te Eftasî Ömer el-Mütevekkil döneminde Üşbûne Kastilya Kralı VI. Alfonso'ya geçer, Murâbıtlar 'bir buçuk yıl sonra' geri alır (TDV 'usbune'); bu kısa Kastilya sahipliği (≈18 ay, türetilmiş bitiş) dönem AÇILMADAN olay olarak yazıldı. t: hicrî 487 ∩ 1094 = 1094-01-21. ÇELİŞKİ: TDV 'murabitlar' maddesi Üşbûne'nin Murâbıtlar'ca alınışını 506/1112-13'ün 'beş yıl' sonrası (≈1117) gösterir; TDV kendi içinde çelişir, şehir maddesi (usbune) esas alındı."
   },
   {
    "f": "1094-01-21",
    "t": "1147-03-23",
    "d": "murabitlar",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune; murabitlar",
    "ic_not": "Murâbıt künyesinin t'si 1147-03-23 (Merakeş'in Muvahhid'e düşüşü); Lizbon'un fiilî özerkliği (küçük meclis) Murâbıt çekilmesiyle 1139-1147 arasında başlar — TDV günü vermez. Sınır künye bitişine konuldu (beyanlı yaklaşıklık)."
   },
   {
    "f": "1147-03-23",
    "t": "1147-10-24",
    "d": "lizbon-ozerk-meclis",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune ('küçük bir meclis tarafından özerk biçimde yönetilen Üşbûne')",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'lizbon-ozerk-meclis' — 'o yıllarda küçük bir meclis tarafından özerk biçimde yönetilen' şehir. Başlangıç tarihi tanıktan 'en geç 1147' alınmadı; Murâbıt künye bitişi (1147-03-23) kullanıldı. t: atlas dikişi 1147-10-24 (Portekiz)."
   }
  ],
  "olay": [
   {
    "t": "-0137-01-01",
    "gun": "MÖ 138",
    "k": "fetih",
    "b": "Roma konsülü D. Junius Brutus Olisipo'yu tahkim eder; Romalılar şehri işgal eder.",
    "kaynak": "Strabon 3.3.1 (Loeb, LacusCurtius); Princeton 'Olisipo'",
    "tanik": "he fortified Olysipo"
   },
   {
    "t": "-0026-01-16",
    "gun": "16 Ocak MÖ 27",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti → Roma İmparatorluğu (Octavianus 'Augustus' unvanını alır).",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/",
    "tanik": "16 January 27: Imperator Caesar Divi filius Augustus"
   },
   {
    "t": "0395-01-17",
    "gun": "17 Ocak 395",
    "k": "diger",
    "b": "künye geçişi: Roma İmparatorluğu → Batı Roma (Theodosius I ölür, imparatorluk Arcadius/Honorius arasında bölünür).",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "tanik": "17 January 395: natural death"
   },
   {
    "t": "0468-01-01",
    "gun": "468",
    "k": "fetih",
    "b": "Lizbon Germen elinde (Svev saldırısı, Vizigot müdahalesi) Roma yönetiminden çıkar.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/lisbona_(Enciclopedia-Italiana)/",
    "tanik": "Nel 468 Lisbona cadde in potere dei Germani."
   },
   {
    "t": "0716-01-01",
    "gun": "97 H / 716",
    "k": "fetih",
    "b": "Üşbûne, Mûsâ b. Nusayr'ın oğlu Abdülazîz tarafından fethedilir.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "tanik": "Abdülazîz b. Mûsâ tarafından fethedildi (97/716)"
   },
   {
    "t": "0756-05-15",
    "gun": "15 Mayıs 756",
    "k": "diger",
    "b": "künye geçişi: Emevî valileri (Yûsuf el-Fihrî) → bağımsız Endülüs Emevî Emirliği; I. Abdurrahman Musâre savaşını kazanır, Kurtuba'ya girer (11 Mayıs'ta karargâh, 15 Mayıs sabahı saldırı).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-i (HAKKI DURSUN YILDIZ)",
    "tanik": "15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı"
   },
   {
    "t": "0798-01-01",
    "gun": "182 H / 798",
    "k": "isgal",
    "b": "Asturias Kralı II. Alfonso Üşbûne'yi ele geçirir; Müslümanlar ancak 193/808'de geri alır (kısa işgal/akın).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "tanik": "II. Alfonso 182’de (798) Üşbûne’yi ele geçirdi"
   },
   {
    "t": "1012-07-23",
    "gun": "403 H / 1012-13",
    "k": "kayip",
    "b": "Batı Endülüs valisi Sâbûr es-Saklebî Batalyevs merkezli bağımsızlığını ilân eder; Üşbûne onun Sağrülednâ'sındadır (Eftasîler'in öncülü).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/eftasiler; usbune",
    "tanik": "Sâbûr da Batalyevs (Badajoz) merkez olmak üzere Sağrülednâ’da bağımsız olarak hüküm sürmeye başladı (403/1012-13)"
   },
   {
    "t": "1093-01-01",
    "gun": "486 H / 1093",
    "k": "fetih",
    "b": "Eftasî döneminde Üşbûne, Leon, Şentere ve Şenterîn ile birlikte Kastilya Kralı VI. Alfonso'nun eline geçer; Murâbıtlar bir buçuk yıl sonra Üşbûne ve Şenterîn'i geri alır (dönem açılmadı).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "tanik": "Murâbıtlar, Üşbûne ve Şenterîn’i, bir buçuk yıl sonra hıristiyanlardan geri alabildi."
   },
   {
    "t": "1094-01-21",
    "gun": "487 H / 1094",
    "k": "fetih",
    "b": "Eftasîler hânedanı Murâbıtlar'ca yıkılır; Üşbûne Murâbıt hâkimiyetine girer.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/eftasiler",
    "tanik": "Böylece Eftasîler hânedanı yıkılmış oldu (487/1094 veya 488/1095)."
   },
   {
    "t": "1147-03-23",
    "gun": "18 Şevval 541 / 23 Mart 1147",
    "k": "kayip",
    "b": "Muvahhidler Merakeş'i alıp Murâbıtlar'ı ortadan kaldırır (künye sonu); Lizbon özerk meclis yönetiminde kalır.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/murabitlar",
    "tanik": "Murâbıtlar’ı ortadan kaldırdılar (18 Şevval 541 / 23 Mart 1147)"
   },
   {
    "t": "1147-10-24",
    "gun": "27 Cemâziyelevvel 542 / 24 Ekim 1147",
    "k": "fetih",
    "b": "Alfonso Henriques, haçlı donanmasının yardımıyla dört aylık kuşatmadan sonra Üşbûne'yi alır; Müslüman hâkimiyeti sona erer.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/usbune",
    "tanik": "Böylece Üşbûne’de müslüman hâkimiyeti sona erdi."
   }
  ],
  "ic_not": "Fenike geleneği (Treccani 'Alis Ubbo') ilk anılış sayılmadı. TDV 'Roma, Alanlar ve Vizigotlar' ifadesindeki Alan dönemi ve Svev sırası kaynak tarihi vermediği için dönem açılmadı. Çift teyit: Roma işgali MÖ 138 (Princeton) ↔ Strabon (Brutus Callaicus kampanyası); Lizbon 1147-10-24 (TDV, atlas künyesi) — Treccani yalnız 'Alfonso Henrique conquistò definitivamente' der. Zincir atlas ilk gününde (1147-10-24) biter. Atlas notu: atlas Lizbon 'Murâbıt 1147-03-23→10-24 künyesiz YAZILMADI' demişti; bu dosyada o aralık 'lizbon-ozerk-meclis' (TDV) olarak yazıldı."
 },
 {
  "id": "madrid",
  "ad": "Madrid",
  "atlas_ad": "Madrid",
  "lat": 40.417,
  "lon": -3.704,
  "kat1900": 1,
  "adlar": [
   "Mecrît (Mecrîṭ)",
   "Magerit/Maidrit",
   "Madrid"
  ],
  "ilk": {
   "t": "0886-12-31",
   "gun": "852-886 arası (en geç 886)",
   "nicelik": "kurulus",
   "kesinlik": "belirsiz",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid (Madrid; kaynak: Himyerî, er-Ravżü’l-miʿṭâr, s. 523)",
   "tanik": "Himyerî, Mecrît’in Endülüs Emevî Emîri I. Muhammed (852-886) tarafından kurulduğunu söyler",
   "ic_not": "Aralık veren kaynakta güvenli uç alındı: Emîr I. Muhammed'in saltanatı 852-886; TDV 'Kale büyük ihtimalle ... 252 (866) yılından kısa bir süre sonra yaptırılmıştır' (kuruluş ≈866 sonrası, yine en geç 886). Efsane/hipotez: 'II. yüzyılda kurulduğu yerde bulunan Matrice köyü' (Asín) — TDV 'Vizigot ve Roma dönemlerinde Matrice adını taşıyan bir şehirden bahsedilmez'; bölgedeki yerleşimin 'oldukça eski' olduğu kaynaksız. Roma/Vizigot kuruluşu bulunamadı."
  },
  "kur": {
   "t": "0886-12-31",
   "gun": "852-886 arası (en geç 886)",
   "kesinlik": "belirsiz",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid (Madrid; kaynak: Himyerî, er-Ravżü’l-miʿṭâr, s. 523)",
   "tanik": "Himyerî, Mecrît’in Endülüs Emevî Emîri I. Muhammed (852-886) tarafından kurulduğunu söyler"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0886-12-31",
    "t": "1031-01-01",
    "d": "endulus-emevi",
    "kesinlik": "belirsiz",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid; abdurrahman-iii",
    "ic_not": "TDV: 'III. Abdurrahman zamanında (912-961) valilerin yönettiği bir şehir durumundaydı'; 933'te II. Ramiro'nun saldırısı. 961-1031 arası ayrıca tanık yok (devlet sonu 1031 alındı)."
   },
   {
    "f": "1031-01-01",
    "t": "1036-01-01",
    "d": "endulus-tavaif",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus; madrid",
    "ic_not": "TDV Madrid: 'Mülûkü’t-tavâif devrinde Tuleytula’da hüküm süren Zünnûnîler’in hâkimiyeti altına giren şehir' — giriş tarihi verilmiyor. Zünnûnî künyesi 1036'da başlar; 1031-1036 genel taifa olarak yazıldı, sahibi tarihsiz (beyanlı yaklaşıklık: 'en erken olası')."
   },
   {
    "f": "1036-01-01",
    "t": "1083-05-21",
    "d": "toledo-zunnunler",
    "kesinlik": "belirsiz",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid; tuleytula",
    "ic_not": "f 'en erken olası' (Zünnûnî künyesi 1036): TDV Madrid'in Zünnûnî'ye geçişini tarihlemez. t: hicrî 476 ∩ 1083 = 1083-05-21 (tablo takvimi); TDV: 'Tuleytula’nın işgalinden yaklaşık iki yıl önce 476 (1083)'. Gün Toledo 25 Mayıs 1085'ten ≈2 yıl önce olduğu için tutarlı."
   },
   {
    "f": "1083-05-21",
    "t": "1281-01-01",
    "d": "kastilya",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid",
    "ic_not": "1109'da Murâbıtlar Madrid'i ele geçirdi ama salgın yüzünden merkezler tahliye edildi (TDV; kısa işgal, dönem açılmadı). Atlas ilk dönemi 1281-01-01 kastilya ile aynı sahip."
   }
  ],
  "olay": [
   {
    "t": "0886-12-31",
    "gun": "852-886 arası (en geç 886)",
    "k": "kurulus",
    "b": "Emîr I. Muhammed, Vâdirremle eteğinde kale yaptırır; çevresinde şehir oluşur (Himyerî rivayeti).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid",
    "tanik": "Himyerî, Mecrît’in Endülüs Emevî Emîri I. Muhammed (852-886) tarafından kurulduğunu söyler"
   },
   {
    "t": "0933-01-01",
    "gun": "933",
    "k": "savas",
    "b": "II. Ramiro Madrid'e saldırır (şehir Müslüman elindedir; sahiplik değişmez).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid; abdurrahman-iii",
    "tanik": "II. Ramiro’nun 933 yılında müslümanların elinde bulunan Madrid’e saldırmasıyla"
   },
   {
    "t": "1031-01-01",
    "gun": "1031",
    "k": "diger",
    "b": "künye geçişi: Endülüs Emevî Devleti (Kurtuba Hilâfeti) yıkılır; mülûkü't-tavâif (tâife emirlikleri) dönemi başlar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus (Endülüs; Emevîler 756-1031)",
    "tanik": "Böylece 756’da bağımsız bir emirlik olarak kurulan Endülüs Emevî Devleti yıkılmış oldu (422/1031)"
   },
   {
    "t": "1036-01-01",
    "gun": "427 H / 1036",
    "k": "fetih",
    "b": "Zünnûnîler Toledo'yu başşehir yapar; Madrid mülûkü't-tavâif döneminde bu emirliğin hâkimiyetine girer (tarihsiz, f 'en erken olası').",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid; tuleytula",
    "tanik": "Mülûkü’t-tavâif devrinde Tuleytula’da hüküm süren Zünnûnîler’in hâkimiyeti altına giren şehir"
   },
   {
    "t": "1083-05-21",
    "gun": "476 H / 1083",
    "k": "fetih",
    "b": "Kastilya Kralı VI. Alfonso Madrid'i ele geçirir (Toledo'nun işgalinden ≈2 yıl önce); büyük cami yıkılıp yerine kilise yapılır.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid",
    "tanik": "476 (1083) yılında Kastilya Kralı VI. Alfonso tarafından ele geçirildi"
   },
   {
    "t": "1109-01-01",
    "gun": "1109",
    "k": "isgal",
    "b": "Murâbıt Sultanı Ali b. Yûsuf Madrid ve bazı Kastilya şehirlerini alır; orduda salgın yüzünden merkezler tahliye edilir (kısa işgal).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/madrid",
    "tanik": "Madrid ve Kastilya topraklarındaki diğer bazı şehirleri ele geçirdi"
   }
  ],
  "ic_not": "Madrid'in kuruluşu (Müslüman kalesi) TDV/Himyerî'ye göre; Roma/Vizigot dönemi şehir kaydı yok. 1031-1083 arası sahiplik 'en erken olası' sınırlarla yazıldı: ZÜNNÛNÎ başlangıcı bulunamadı. Çift teyit YOK (yalnız TDV; Treccani 'Madrid' maddesi (https://www.treccani.it/enciclopedia/madrid_(Enciclopedia-Italiana)/) açıldı ama bu oturumda kuruluş/1083 için okunmadı). Zincir atlas ilk gününde (1281-01-01 Kastilya) biter."
 },
 {
  "id": "mantova",
  "ad": "Mantova",
  "atlas_ad": "Mantova",
  "lat": 45.156,
  "lon": 10.791,
  "kat1900": 2,
  "adlar": [
   "Mantua",
   "Mantova"
  ],
  "ilk": {
   "t": "-0213-01-01",
   "gun": "MÖ 214",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Treccani, 'Mantova' (Enciclopedia on line), https://www.treccani.it/enciclopedia/mantova/",
   "tanik": "Roma vi fondò una colonia, Mantua, ricordata già nel 214",
   "ic_not": "İLK ANILIŞ (Treccani: 'ricordata già nel 214' a.C.; Treccani'nin dayandığı birincil metin bu oturumda açılmadı, tek kaynak). EI 'Mantova' (1934; https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/) ayrıca 41 MÖ'de Sezar gazileri için toprak müsaderesini verir ('Nel periodo delle guerre civili, ebbe parte del territorio confiscato ... (41 a. C.)'); Etrüsk kökeni ve Kelt (Cenomani) işgali tarihsiz. Kuruluş tarihi bulunamadı (kur null): Treccani 'Fondata (6°-5° sec. a.C.) forse dagli Etruschi' yalnız tahminî aralık, yazılı tanık değil — ark olarak yazıldı."
  },
  "kur": null,
  "ark": {
   "t": "-0499-01-01",
   "gun": "MÖ 6.-5. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/: 'Fondata (6°-5° sec. a.C.) forse dagli Etruschi'"
  },
  "bit": null,
  "sahip": [
   {
    "f": "-0213-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/: 'Roma vi fondò una colonia, Mantua, ricordata già nel 214'; EI 'Mantova' (https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/): 'Municipio, ebbe con la regione transpadana la cittadinanza romana'",
    "ic_not": "Roma bağlılığı (Treccani 'colonia'; EI 'municipio'; 'restandole fedele durante l'insurrezione celtica') beyanlı yaklaşıklıktır: Roma Cumhuriyeti künyesi; öncesi Etrüsk/Kelt (Cenomani) tarihsiz."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "ic_not": "Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0553-01-01",
    "t": "0601-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/: 'dal 601 passò ai Longobardi'; EI 'Longobardi': Mantova Bizans savunma hattında (569)",
    "ic_not": "Bitiş 601 = Treccani 'Mantova' yılı. EI 'Mantova': 'fortificata dagli esarchi bizantini, presa, perduta e ripresa dai Longobardi' — Longobard-Bizans el değişimleri tarihsiz; dönem içi geçici kayıplar olay olarak yazılmadı."
   },
   {
    "f": "0601-01-01",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/: 'dal 601 passò ai Longobardi'",
    "ic_not": "Kalıcı Longobard hâkimiyeti 601 (Treccani), EI ile ('ripresa') uyumsuz ayrıntı: EI'ye göre bir kez kaybedilip geri alındı (tarihsiz). Bitiş: Pavia'nın düşüşü (haziran 774)."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "Treccani, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok (Longobard krallığının Franklara geçişinden çıkarım, beyanlı). EI Mantova: piskoposluk 827'de (Laiulfo) mevcut."
   },
   {
    "f": "0962-02-02",
    "t": "0977-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, Ottone I (962); EI 'Mantova' (https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/)",
    "ic_not": "Dönem başı künye geçişi (Otto I). Bitiş: 'f en geç tanıktan' — Canossa'dan Atto Adalberto'nun Mantova kontu olarak ilk belgesi 977 (EI); 962-977 arası kısa, beyanlı."
   },
   {
    "f": "0977-01-01",
    "t": "1115-01-01",
    "d": "canossa",
    "kesinlik": "yil",
    "kaynak": "EI 'Mantova' (https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/): 'Atto Adalberto è designato come conte di Mantova in un documento del 977'; 'dopo la morte di Matilde (1115)'",
    "ic_not": "Künyesiz sahip: Canossa Markgraflığı/Kontluğu (önerilen id 'canossa'; ömür en geç ≈977-1115 Mantova'da; EI: 'possedimenti feudali dei Canossa'; Matilde ölümü 1115). Matilde ile Henry IV çatışmasında Mantova 'tra le città più infide per Matilde': 1091'de Henry IV'e teslim oldu (olay, dönem açılmadı).",
    "kunye_yok": true
   },
   {
    "f": "1115-01-01",
    "t": "1272-07-04",
    "d": "mantova-komunu",
    "kesinlik": "yil",
    "kaynak": "EI 'Mantova' (https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/): 'dopo la morte di Matilde (1115)' komün eğilimi; 'Un documento del 1126 reca per la prima volta l'indicazione di cinque consoli'",
    "ic_not": "Künyesiz sahip: Mantova komünü (önerilen id 'mantova-komunu'). f=1115 BEYANLI yaklaşıklık: komün eğilimi Matilde ölümünden sonra, ilk konsül belgesi 1126 (EI; 1115-1126 arası fiilî durum belirsiz). Piskopos otoritesi 1235'te siyasi alandan çekildi (EI). Bitiş: Bonacolsi darbesi 4 Temmuz 1272.",
    "kunye_yok": true
   },
   {
    "f": "1272-07-04",
    "t": "1281-01-01",
    "d": "bonacolsi",
    "kesinlik": "gun",
    "kaynak": "EI 'Mantova' (https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/): 'cacciò da Mantova il 4 luglio 1272 il podestà Guido da Correggio'",
    "ic_not": "Künye bonacolsi 1273-01-01'de başlar (HAYALET uyarısı, ≈6 ay); EI ve Treccani Pinamonte Bonacolsi'yi 'primo signore' sayar, olay günü 1272-07-04. Atlas 1281'de 'mantua' harita anahtarını taşır (künye mantua 1328'de başlar) — künye bonacolsi esas alındı."
   }
  ],
  "olay": [
   {
    "t": "-0213-01-01",
    "gun": "MÖ 214",
    "k": "diger",
    "b": "Mantua'nın ilk anılışı (Treccani: Roma'nın kurduğu koloni)",
    "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/",
    "tanik": "Roma vi fondò una colonia, Mantua, ricordata già nel 214"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi; İtalya Doğu Got krallığına geçti (künye dogu-got 493-03-05)",
    "kaynak": "Treccani, 'Teodorico', https://www.treccani.it/enciclopedia/teodorico/",
    "tanik": "sconfitto il re degli Eruli Odoacre (493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0601-01-01",
    "gun": "601",
    "k": "fetih",
    "b": "Mantova Longobardların eline geçer (EI: bir kez daha kaybedilip geri alınır, tarihsiz)",
    "kaynak": "Treccani, 'Mantova', https://www.treccani.it/enciclopedia/mantova/",
    "tanik": "dal 601 passò ai Longobardi"
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "0977-01-01",
    "gun": "977",
    "k": "idari",
    "b": "Canossa'dan Atto Adalberto Mantova kontu olarak ilk belgelenir",
    "kaynak": "Enciclopedia Italiana, 'Mantova', https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/",
    "tanik": "Atto Adalberto è designato come conte di Mantova in un documento del 977"
   },
   {
    "t": "1091-04-11",
    "gun": "11 Nisan 1091",
    "k": "kusatma",
    "b": "Mantova Henry IV'e teslim olur, imtiyazları genişler (Matilde karşısında); sahiplik dönemi açılmadı",
    "kaynak": "Enciclopedia Italiana, 'Mantova', https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/",
    "tanik": "Arresasi l'11 aprile 1091 a Enrico IV"
   },
   {
    "t": "1115-01-01",
    "gun": "1115",
    "k": "diger",
    "b": "Matilde di Canossa ölür; Mantova'da komün eğilimi güçlenir (ilk konsül belgesi 1126)",
    "kaynak": "Enciclopedia Italiana, 'Mantova', https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/",
    "tanik": "dopo la morte di Matilde (1115)"
   },
   {
    "t": "1272-07-04",
    "gun": "4 Temmuz 1272",
    "k": "taht",
    "b": "Pinamonte Bonacolsi podestà Guido da Correggio'yu kovar: Bonacolsi senyörlüğü",
    "kaynak": "Enciclopedia Italiana, 'Mantova', https://www.treccani.it/enciclopedia/mantova_(Enciclopedia-Italiana)/",
    "tanik": "cacciò da Mantova il 4 luglio 1272 il podestà Guido da Correggio"
   }
  ],
  "dikis_beyan": "Atlas 1281'de harita anahtarı 'mantua' (künye mantua 1328-01-01'de başlar) yazıyor; gerçek sahip bonacolsi (künye 1273-1328, harita anahtarı 'bonacolsi'). Atlasın 1281 'mantua' iddiası künyeyle uyumsuz (hayalet): önerilen düzeltme atlas dönemini 'bonacolsi' yapmak. 1281 tarihli ayrı olay YOK.",
  "ic_not": "Atlas Mantova 1281'de 'mantua' ile başlıyor (bkz. dikis_beyan). EI ile Treccani çelişkisi: Longobard fethi Treccani 'dal 601', EI 'presa, perduta e ripresa' (tarihsiz) — Treccani yılı alındı. Çift teyit YOK (Treccani online + EI aynı kurum)."
 },
 {
  "id": "merakes",
  "ad": "Merakeş",
  "atlas_ad": "Merakeş",
  "lat": 31.63,
  "lon": -7.981,
  "kat1900": 2,
  "adlar": [
   "Merrâküş",
   "Marrakesh"
  ],
  "ilk": {
   "t": "1062-01-14",
   "gun": "454 H / 1062",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/merakes (Merakeş)",
   "tanik": "kuruluş çalışmaları, yaygın kabule göre Murâbıt Emîri Ebû Bekir b. Ömer tarafından 454’te (1062) başlatılmış",
   "ic_not": "Hicrî 454 ∩ 1062: 1 Muharram 454 = 1062-01-14 (atlas ile aynı; benim tabular hesabım 01-15 verdi, 1 günlük tablo farkı, atlas günü alındı). TDV: '459/1067 veya 462/1070 yıllarında başlatıldığı da rivayet edilir'; 'Yûsuf b. Tâşfîn zamanında muhtemelen 470’te (1077-78) tamamlanmış ve Murâbıtlar’ın başşehri olmuştur'. 'adının menşei hakkında kesin bilgi yoktur'. Atlas başlangıcı ile ilk gün aynı: zincir BOŞ, uyarı beklenir. Öncesi yerleşim kaynağı bulunamadı."
  },
  "kur": {
   "t": "1062-01-14",
   "gun": "454 H / 1062",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/merakes (Merakeş)",
   "tanik": "kuruluş çalışmaları, yaygın kabule göre Murâbıt Emîri Ebû Bekir b. Ömer tarafından 454’te (1062) başlatılmış"
  },
  "ark": null,
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1062-01-14",
    "gun": "454 H / 1062",
    "k": "kurulus",
    "b": "Murâbıt Emîri Ebû Bekir b. Ömer Merakeş'in kuruluş çalışmalarını başlatır (Masmûde kabilelerini denetlemek için ordugâh-şehir).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/merakes",
    "tanik": "kuruluş çalışmaları, yaygın kabule göre Murâbıt Emîri Ebû Bekir b. Ömer tarafından 454’te (1062) başlatılmış"
   },
   {
    "t": "1077-01-01",
    "gun": "470 H / 1077-78",
    "k": "kurulus",
    "b": "Yûsuf b. Tâşfîn zamanında kuruluş tamamlanır; şehir Murâbıtlar'ın başşehri olur (muhtemelen).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/merakes",
    "tanik": "Yûsuf b. Tâşfîn zamanında muhtemelen 470’te (1077-78) tamamlanmış ve Murâbıtlar’ın başşehri olmuştur"
   }
  ],
  "ic_not": "Şehir kuruluşu ile atlas başlangıcı aynıdır (Murâbıt) → sahiplik zinciri yok. Tek kaynak TDV (Treccani 'Marrākesh' maddesi bu oturumda açılamadı — slug bulunamadı). Çift teyit YOK. 1062 ↔ 1067 ↔ 1070 rivayet farkı beyan edildi."
 },
 {
  "id": "miknas",
  "ad": "Miknâs (Meknes)",
  "atlas_ad": "Miknâs (Meknes)",
  "lat": 33.895,
  "lon": -5.555,
  "kat1900": 3,
  "adlar": [
   "Miknâs (Miknâse, Miknâsetüzzeytûn)",
   "Meknès",
   "Meknes"
  ],
  "ilk": {
   "t": "1017-01-01",
   "gun": "11. yüzyıl (917 + ≈bir asır)",
   "nicelik": "kurulus",
   "kesinlik": "yuzyil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/zenate (Zenâte), Miknâse; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas (AHMET KAVAS)",
   "tanik": "Yaklaşık bir asır sonra kurulan Miknâs şehri",
   "ic_not": "TÜRETİLMİŞ GÜN: TDV 'Miknâs' 305 (917) Miknâse kabilesi köyler kurdu, 'V. (XI.) yüzyılda bu köyler birleşerek Miknâs şehrini oluşturdu'; TDV 'Zenâte' 917 yerleşiminden 'Yaklaşık bir asır sonra kurulan Miknâs şehri' der → 917+100 ≈ 1017 (yüzyıl hassasiyeti; gün/ay yok). Yerleşimin kendisi (köyler) 917 hicrî 305 ∩ 917 = 0917-06-24 (olay). 'Şehrin yer aldığı bölgenin Romalılar’a ve daha sonraki döneme ait tarihi hakkında bilgi yoktur' (TDV). ÇELİŞKİ: Treccani EI 'Meknes': 'La città, sorta per opera degli Almoràvidi che vi si stabilirono fortificandovisi' — TDV'ye göre şehir 1069'da Murâbıtlar'a barışla teslim olduğunda zaten vardı ve etrafı Murâbıt döneminde surlarla çevrildi; TDV esas, Treccani beyan."
  },
  "kur": {
   "t": "1017-01-01",
   "gun": "11. yüzyıl (917 + ≈bir asır)",
   "kesinlik": "yuzyil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/zenate (Zenâte), Miknâse; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas (AHMET KAVAS)",
   "tanik": "Yaklaşık bir asır sonra kurulan Miknâs şehri"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1017-01-01",
    "t": "1069-01-01",
    "d": "miknase-kabilesi",
    "kesinlik": "yuzyil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/zenate",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'miknase-kabilesi' (Zenâte'nin Miknâse kolu; yerel hâkim Hayr b. Harez ez-Zenâtî — TDV miknas 'Miknâs hâkimi'). TDV zenate: '(şehir) Murâbıtlar’a itaat edinceye kadar (461/1069) bu kabilenin egemenliğinde kaldı.' Aynı madde: XI. yy ikinci yarısında Fas şehri üzerinde Mağrâve/Benî İfren/Miknâse mücadelesi, Miknâse çekildi. Künye açılırsa işaret kalkar. Dönemin f'si yüzyıl hassasiyetinde türetilmiş (ilk.ic_not)."
   },
   {
    "f": "1069-01-01",
    "t": "1150-01-01",
    "d": "murabitlar",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas; murabitlar; zenate",
    "ic_not": "t: atlas dikişi 1150-01-01 (Muvahhid; TDV miknas: 'Miknâs 545 (1150) yılında Muvahhidler’in hâkimiyetine girdi'). ÇELİŞKİ (TDV kendi içinde): TDV 'murabitlar': Muvahhid kuvvetleri 'Fas, Miknâse, Selâ şehirlerini ve nihayet Merakeş’i ele geçirerek ... Murâbıtlar’ı ortadan kaldırdılar (23 Mart 1147)' — 1147 öncesi Miknâs'ı da aldıkları ima edilir; şehir maddesi (1150) esas alındı. Murâbıt künyesi 1147-03-23'te biter (hayalet uyarısı). 1120/1139-40 Muvahhid kuşatmaları başarısız (TDV miknas)."
   }
  ],
  "olay": [
   {
    "t": "0917-06-24",
    "gun": "305 H / 917",
    "k": "kurulus",
    "b": "Miknâse kabilesi Tâze'den gelip Bûfikran vadisinin iki yakasında köyler kurar (ilk iskân).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas; zenate",
    "tanik": "305 (917) yılında Tâze’den (Tâzâ) bugünkü Miknâs’ın olduğu bölgeye gelen Miknâse kabilesi"
   },
   {
    "t": "1017-01-01",
    "gun": "11. yüzyıl",
    "k": "kurulus",
    "b": "Köyler birleşerek Miknâs şehrini oluşturur (TDV: 'V. (XI.) yüzyılda'; Zenâte maddesi: '917'den yaklaşık bir asır sonra').",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas; zenate",
    "tanik": "V. (XI.) yüzyılda bu köyler birleşerek Miknâs şehrini oluşturdu"
   },
   {
    "t": "1069-01-01",
    "gun": "461 H / 1069",
    "k": "fetih",
    "b": "Murâbıt Sultanı Yûsuf b. Tâşfîn'in ordusu karşısında Miknâs hâkimi Hayr b. Harez ez-Zenâtî şehri barış yoluyla teslim eder.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas; zenate",
    "tanik": "O da teklifi kabul ederek şehri barış yoluyla Murâbıtlar’a teslim etti (461/1069)"
   },
   {
    "t": "1120-01-01",
    "gun": "514 H / 1120",
    "k": "kusatma",
    "b": "Muvahhid hareketi Miknâs'ta şiddetli direnişle karşılaşır; Abdülmü'min'in kuşatması (534/1139-40) sonuçsuz kalır.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas",
    "tanik": "Muvahhid Sultanı Abdülmü’min el-Kûmî şehri kuşattıysa da ele geçiremedi (534/1139-40)"
   },
   {
    "t": "1150-01-01",
    "gun": "545 H / 1150",
    "k": "fetih",
    "b": "Miknâs Muvahhidler'in hâkimiyetine girer; şehir yıkılıp yağmalanır, kışladaki askerler öldürülür.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/miknas",
    "tanik": "Miknâs 545 (1150) yılında Muvahhidler’in hâkimiyetine girdi"
   }
  ],
  "ic_not": "Meknes: şehir kuruluşu TDV'de iki maddede tutarlı ama dolaylı (917 iskân + ≈bir asır → ≈1017; V/XI. yy); Treccani 'Murâbıtlar kurdu' der → çelişki beyan. Çift teyit YOK. ATLAS: 1150 Muvahhid başlangıcı TDV 'miknas' ile uyumlu; TDV 'murabitlar' 1147 Muvahhid ilerleyişini ima eder (TDV iç çelişkisi). Zincir atlas ilk gününde (1150-01-01) biter."
 },
 {
  "id": "modena",
  "ad": "Modena",
  "atlas_ad": "Modena",
  "lat": 44.647,
  "lon": 10.925,
  "kat1900": 2,
  "adlar": [
   "Mutina",
   "Modena"
  ],
  "ilk": {
   "t": "-0182-01-01",
   "gun": "MÖ 183",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Enciclopedia Italiana, 'Modena', https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/; Livius 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml)",
   "tanik": "Colonia civium romanorum, insieme alla vicina Parma, nel 183",
   "ic_not": "Roma vatandaş kolonisi Mutina MÖ 183 (EI; Livius 39.55: 'eodem anno Mutina et Parma coloniae ciuium Romanorum sunt deductae' — Livius yılı kendisi vermez, konsül yılı EI/Treccani'den: 183). KURULUŞ nicelik notu: aynı yerde daha eski Boii/Ligur merkezi var (EI: 'il centro fu occupato con la regione (ager Boicus) dai Boi'; Roma bölgeyi III. yy sonunda aldı ve 'ne fecero il luogo più fortificato'), Treccani 'Modena': Via Emilia (187 MÖ) sırasında Romalılar 'edificarono un centro (Mutina)'. Roma kolonisi tarihi yazılı tanıklı kuruluş olarak alındı; Boii katmanı tarihsiz. Çift teyit: EI + Livius (bağımsız birincil) ve Treccani online 'Modena' (187 Via Emilia, 183'ü vermez)."
  },
  "kur": {
   "t": "-0182-01-01",
   "gun": "MÖ 183",
   "kesinlik": "yil",
   "kaynak": "Enciclopedia Italiana, 'Modena', https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/; Livius 39.55",
   "tanik": "Colonia civium romanorum, insieme alla vicina Parma, nel 183"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0182-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "EI 'Modena' (https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/): 'Colonia civium romanorum, insieme alla vicina Parma, nel 183'; Livius, Ab urbe condita 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml)"
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "ic_not": "Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/: 'rex gentium'",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi. Gotlar İtalya'ya 489'da girdi (Treccani Ostrogoti)."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Ostrogoti' https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/; EI 'Longobardi' https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "ic_not": "Modena'nın 553-569 Bizans sayılması İtalya genel çerçevesinden çıkarımdır (beyanlı); EI 'Modena': 'Nulla sappiamo di essa nell'età di Odoacre e dei Goti'."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "yil",
    "kaynak": "EI 'Longobardi' (https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/): 'impadronendosi di Parma, Reggio, Modena e Bologna'; EI 'Modena' (https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/)",
    "ic_not": "Başlangıç Milano'nun alınış günü (569-09-03, EI); Alboin'in Modena'yı alışı şehre özgü gün vermez. EI 'Modena': Longobard-Bizans sürekli savaşı ('i Greci da Bologna e i Longobardi da Reggio'), 590'da Bizanslılar Frankların müttefiki olarak 'rioccupato' (süresi bilinmeyen kısa ele geçirme: dönem AÇILMADI)."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "EI 'Longobardi' https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/; EI 'Modena' (https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/)",
    "ic_not": "Şehre özgü tanık yok (Longobard krallığının Franklara geçişinden çıkarım); 891'de piskopos Leodoino'ya imparator Guido surlama hakkı verir (EI)."
   },
   {
    "f": "0962-02-02",
    "t": "1135-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "EI 'Modena' (https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/): 961'de Ottone I Canossa'lı Adalberto Azzo'ya kontluk verir; 'il primo sicuro ricordo con i consoli è del 1135'",
    "ic_not": "Künye geçişi 962 (Otto I). Şehir piskoposun fiilî idaresinde, kontluk Canossa (961-1115). Bitiş: komün konsüllerinin ilk güvenli anılışı 1135 ('f en geç tanık'; EI: 'almeno nella sostanza, si può credere più antica')."
   },
   {
    "f": "1135-01-01",
    "t": "1281-01-01",
    "d": "modena-komunu",
    "kesinlik": "yil",
    "kaynak": "EI 'Modena' (https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/): 'L'età comunale che a Modena va dal 1135 al 1288 (prima signoria estense)'",
    "ic_not": "Künyesiz sahip: Modena komünü (önerilen id 'modena-komunu'; ömür 1135-1288, EI). ÇELİŞKİ: atlas 1281'de 'ferrara' (Este) başlatıyor, EI ilk Este senyörlüğünü 1288 verir (bkz. dikis_beyan).",
    "kunye_yok": true
   }
  ],
  "olay": [
   {
    "t": "-0182-01-01",
    "gun": "MÖ 183",
    "k": "kurulus",
    "b": "Roma vatandaş kolonisi Mutina (Parma ile birlikte) kurulur; Boii'nin yenilgisi",
    "kaynak": "Livius 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml); EI 'Modena' https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/",
    "tanik": "eodem anno Mutina et Parma coloniae ciuium Romanorum sunt deductae"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi; İtalya Doğu Got krallığına geçti (künye dogu-got 493-03-05)",
    "kaynak": "Treccani, 'Teodorico', https://www.treccani.it/enciclopedia/teodorico/",
    "tanik": "sconfitto il re degli Eruli Odoacre (493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Alboin'in ordusu Po'nun güneyindeki şehirlere yayıldı (şehre özgü alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0590-01-01",
    "gun": "590",
    "k": "fetih",
    "b": "Bizanslılar Frankların müttefiki olarak Mutina'yı yeniden işgal eder (süresi bilinmeyen kısa ele geçirme; dönem açılmadı)",
    "kaynak": "EI 'Modena', https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/",
    "tanik": "che nel 590 i Greci, alleati ai Franchi, avevano rioccupato con le armi"
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1135-01-01",
    "gun": "1135",
    "k": "diger",
    "b": "Modena komünü konsüllerle ilk güvenli anılışı: piskopos/kont idaresinden komün yönetimine geçiş",
    "kaynak": "EI 'Modena', https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/",
    "tanik": "il cui primo sicuro ricordo con i consoli è del 1135"
   },
   {
    "t": "1249-01-01",
    "gun": "1249",
    "k": "fetih",
    "b": "Fossalta yenilgisi: Modena 10 yıl Bologna vesayeti ve Guelf partisi (sahiplik dönemi açılmadı)",
    "kaynak": "EI 'Modena', https://www.treccani.it/enciclopedia/modena_(Enciclopedia-Italiana)/",
    "tanik": "La sconfitta della Fossalta (1249) obbligò Modena a subire per 10 anni una tutela bolognese"
   }
  ],
  "dikis_beyan": "Atlas Modena'yı 1281-01-01'de 'ferrara' (Este) ile başlatıyor (kaynaksız, ONCE1281 dönemi yok). EI 'Modena': 'L'età comunale che a Modena va dal 1135 al 1288 (prima signoria estense)' — Este egemenliği 1288'de başlar; 1281-1288 arası komün. Atlas 1281 iddiasını destekleyen tanık bulunamadı; atlasa dokunulmadı, düzeltme önerisi: 1281-1288 komün (künyesiz) ya da kaynak göster. 1281 tarihli olay YOK.",
  "ic_not": "Çift teyit: Roma kolonisi 183 (EI + Livius). TDV 'Modena' arama sayfası (7 madde içeriği) yalnız arama sonucu; madde yok. Zincirde Longobard dönemi Bologna/Reggio savaş bölgesi olarak beyanlı yaklaşıklıktır."
 },
 {
  "id": "mora-tripolice",
  "ad": "Mora (Tripoliçe)",
  "atlas_ad": "Mora (Tripoliçe)",
  "lat": 37.51,
  "lon": 22.379,
  "kat1900": 2,
  "adlar": [
   "Trobolitsa",
   "Tripolitsa",
   "Tripoliçe",
   "Tripoli (Tripolis)"
  ],
  "ilk": {
   "t": "1467-01-01",
   "gun": "1467",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Machiel Kiel, 'Tripoliçe', TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr/tripolice, 2012)",
   "tanik": "Trobolitsa ilk defa 1467’de Stefano Magno tarafından zikredilmiştir."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1467-01-01",
    "gun": "1467",
    "k": "diger",
    "b": "Trobolitsa (Tripoliçe) adının bilinen ilk yazılı anılışı: Venedikli Stefano Magno",
    "kaynak": "Machiel Kiel, 'Tripoliçe', TDV İslâm Ansiklopedisi (islamansiklopedisi.org.tr/tripolice)",
    "tanik": "Trobolitsa ilk defa 1467’de Stefano Magno tarafından zikredilmiştir."
   }
  ],
  "ic_not": "SONUÇ: Atlas noktası (37.51, 22.379) Tripoliçe kasabasıdır. TDV (M. Kiel): 'Bir şehir olarak Osmanlı döneminde ortaya çıkmış'; ad 900 öncesi Slavcadan; ilk yazılı anılış 1467 (Stefano Magno). 1467 > atlas başlangıcı (1281): ZİNCİR BOŞ bırakıldı, denetimin 'atlas başlangıcı düzeltilmeli' uyarısı BEKLENİR. ATLAS DÜZELTME ÖNERİSİ: 'Mora (Tripoliçe)' noktasının 1281-1349 Bizans dönemi (ve sonraki mora-despotlugu dönemi) kaynaklı değildir; nokta 1467'den önce çizilmemeli (ya da, Emre'nin 'yarımada sahibi bölge sahibi + beyan' kuralıyla, yaklaşıklık olarak beyan edilmeli) — karar Emre'nindir. KANIT/SINIRLAR: (a) Tek akademik ilk anılış kaynağı TDV Tripoliçe (Kiel); ikinci bağımsız akademik kaynak AÇILAMADI (Treccani 'tripolitza' maddesi içerik vermedi, Treccani Enciclopedia Italiana 'Tripoli' maddesinde Arkadya Tripolitsa'sı geçmedi; OpenAlex 'Trobolitsa' araması sonuç vermedi; Yunanca arama yolu denenip sonuç alınamadı). en.wikipedia (tek dayanak sayılmadı, yalnız tutarlılık) da 1467'yi 'Bizans terk edilmiş yerler listesi' ile aynı anar. (b) TDV: önceki devirde Arkadya'nın başlıca şehri Muchli idi (antik Tegea'nın devamı), Tripoliçe'nin 12 km DOĞUSUNDA — 3 km'den uzak, bu kayıtta yazılmadı; ayrı kayıt önerisi: 'Muchli (Tegea)' ve antik Mantinea/Pallantion (TDV: antik üç şehir; Tripoli adı bunlara değil Slavca kökene dayanır) ayrı kayıt olarak araştırılmalı. (c) Ahaya Prinkepsliği künyesi (1205-1430) Tripoliçe'ye BAĞLANMADI: TDV Mora maddesi Peloponnesos genelinde 1204 sonrası Frank yönetimini (Achaea Prensliği) anlatır ama Trobolitsa'yı anmaz; kasabanın o devirde varlığı kaynakta yok => zincirde Frank/Bizans yazmak beyansız yaklaşıklık olurdu. BÖLGE (yarımada) ÇERÇEVESİ, yalnız bağlam (TDV 'Mora'; M. Kiel & J. Alexander, 2020): 1204 sonrası Mora Frank yönetimine girip Achaea Prensliği'nin parçası oldu; Pelagonia savaşı (Ekim 1259) sonrası Bizanslılar Monemvasia, Mistra, Mani, Geraki'yi ele geçirdi (1262); 1278 Villehardouin'in ölümüyle Frank Prensliği 1289'a kadar Anjou hânedanına geçti; 1349'da Kantakuzenos Mora Despotluğu'nu kurdu (Manuel); 1383-1407 Theodore Palaiologos döneminde 150.000'e varan Arnavut iskânı; Tripoliçe yöresi 1460'ta Osmanlı idaresine girdi (TDV Tripoliçe). Bu bölge olayları şehre değil yarımadaya aittir; Tripoliçe'nin kendi tanığı değildir. TDV'de Tripoliçe maddesi var (islamansiklopedisi.org.tr/tripolice) ve Mora maddesi var (/mora). Gün hassasiyeti yok: yıl (1467-01-01 kuralı)."
 },
 {
  "id": "moskova",
  "ad": "Moskova",
  "atlas_ad": "Moskova",
  "lat": 55.756,
  "lon": 37.617,
  "kat1900": 2,
  "adlar": [
   "Москва (Moskva)",
   "Moskov",
   "Moskova"
  ],
  "ilk": {
   "t": "1147-01-01",
   "gun": "1147",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "ЭСБЕ (Брокгауз-Ефрон) 'Москва', A. Ф. Селиванов vd., https://ru.wikisource.org/wiki/ЭСБЕ/Москва (curl ile okundu); aynı metin Brockhaus: booksite.ru/fulltext/bro/kga/3/3036.htm",
   "tanik": "Первое летописное слово о М. относится к 1147 г.",
   "ic_not": "İlk anılış (İpatiev vakayinamesi, Yuri Dolgoruki'nin Svyatoslav Olgoviç'i ziyafete çağırması: 'Приди ко мне брате в М.') kuruluş DEĞİL, alt sınırdır. Yıl 1147 (6655 AM); gün/ay kaynakta yok (4 Nisan 1147 yalnız popüler sitelerde, kullanılmadı). Tver Vakayinamesi'ne atfedilen 1156 'şehrin kurulması' ESBE'de de geçer (olay). Moskova kuruluşuna ilişkin gelenek: 880/1117/1140/1147/1156 (popüler derleme; akademik teyit yok). İpatiev/Tver vakayinamesi ve PSRL birincil metni bu oturumda AÇILAMADI; Kuçkin/Rybakov/Yanin yayınları açılamadı — tek ikincil dayanak ESBE (ikinci bağımsız akademik tanık BULUNAMADI, çift teyit yok)."
  },
  "kur": null,
  "ark": {
   "t": "0850-01-01",
   "gun": "9. yüzyıl ortası",
   "kesinlik": "yuzyil",
   "kaynak": "ЭСБЕ 'Москва' (1890-1907), https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
   "tanik": "арабских монет половины IX в. вблизи Кремля"
  },
  "bit": null,
  "sahip": [
   {
    "f": "1147-01-01",
    "t": "1157-01-01",
    "d": "kiev-rusu",
    "kesinlik": "yil",
    "kaynak": "ЭСБЕ 'Москва' (Суздальская земля, Юрий Долгорукий); ЭСБЕ 'Андрей Юрьевич Боголюбский' (Юрий † киевским князем 1157)",
    "ic_not": "Moskova Rostov-Suzdal topraklarında (Yuri Dolgoruki'nin vatanı). Ayrı Rostov-Suzdal künyesi 1157'den önce yok; kiev-rusu (882-1240) künyesi parçalanma dönemi knezliklerini kapsar — yaklaşık, beyanlıdır."
   },
   {
    "f": "1157-01-01",
    "t": "1281-01-01",
    "d": "vladimir-suzdal",
    "kesinlik": "yil",
    "kaynak": "ЭСБЕ 'Москва': 'передовой пригородом Владимира'; 1238 sonrası Suzdal knez paylaşımları (1246 Mihail, 1271 Daniil)",
    "ic_not": "ESBE: Moskova Vladimir'in 'передовой пригород'u (1156 duvarlanma), 1238'de Batu tarafından yağmalanır (olay), 1246'da Yaroslav Vsevolodoviç'in Suzdal şehirlerini paylaştırması ile Mihail'e düşer, 1271'de Daniil bağımsız vâris knezliği başlatır. Altın Orda üst-egemenliği (vergi: TDV Altın Orda 'bağımlı Rus knezliklerinden alınan vergiler') bu künyeyle kodlanamaz; vassallık atlas künyesinde 1242 sonrası ayrı yazılmadı. Künye t=1281-01-01 ile atlas dikişi: dikis_beyan."
   }
  ],
  "dikis_beyan": "Atlas Moskova'yı 1281-01-01'de 'altinorda' açıyor (1283'te moskova). 1281-01-01 için olay/tanık BULUNAMADI: ESBE Moskova'yı 1246'dan 1271'e Suzdal-Vladimir hanedanının knezliği (Mihail Horobrit, Aleksandr Nevski, Daniil) sayıyor; Altın Orda tahakkümü (1238 yağma sonrası) künyesiz vassallık, 1281 tarihli bir devir kaydı değil. TDV Altın Orda: devletin gelirleri 'bağımlı Rus knezliklerinden' alınır.",
  "olay": [
   {
    "t": "1147-01-01",
    "gun": "1147",
    "k": "diger",
    "b": "Moskova'nın İpatiev vakayinamesinde ilk anılışı: Yuri Dolgoruki, Svyatoslav Olgoviç'i 'Moskov'a çağırır.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
    "tanik": "Первое летописное слово о М. относится к 1147 г."
   },
   {
    "t": "1156-01-01",
    "gun": "1156",
    "k": "kurulus",
    "b": "Moskova knez çiftliği Andrey Bogolyubski'nin Vladimir knezliği sırasında duvarlarla çevrilerek şehir (grad) olur.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
    "tanik": "моск. княжеская усадьба тотчас же построилась городом (в 1156 г.)"
   },
   {
    "t": "1157-01-01",
    "gun": "1157",
    "k": "diger",
    "b": "künye geçişi: Kiev Rus'u → Vladimir-Suzdal; Yuri Dolgoruki Kiev knezi olarak ölür, oğlu Andrey Suzdal-Vladimir'de kalıcı olarak yönetir.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Андрей_Юрьевич_Боголюбский",
    "tanik": "он овладел окончательно Киевом и † киевским князем (в 1157 г.)"
   },
   {
    "t": "1213-01-01",
    "gun": "1213",
    "k": "diger",
    "b": "Yuri Vsevolodoviç'in kardeşi Vladimir Moskova'da ayrı knezlik kurmaya çalışır, kısa sürede Pereyaslavl'a gönderilir.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
    "tanik": "В 1213 г. в нем засел было на княжение брат вел. кн. Юрия Всеволодовича, Владимир"
   },
   {
    "t": "1238-02-01",
    "gun": "Şubat 1238",
    "k": "kayip",
    "b": "Batu Han'ın ordusu Moskova'yı yağmalar ve yakar (Vladimir Yuryeviç esir).",
    "kaynak": "https://islamansiklopedisi.org.tr/batu-han",
    "tanik": "Pek çok şehir ele geçirildikten sonra 1238 Şubatında Moskova"
   },
   {
    "t": "1246-01-01",
    "gun": "1246",
    "k": "idari",
    "b": "Yaroslav Vsevolodoviç'in ölümü sonrası Suzdal şehirlerinin paylaşımında Moskova oğlu Mihail Horobrit'e düşer.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
    "tanik": "Ярослава Всеволодовича (1246 г.), по его разделу городов Суздальского княжества"
   },
   {
    "t": "1271-01-01",
    "gun": "1271",
    "k": "idari",
    "b": "Daniil Aleksandroviç, Tver knezi Yaroslav'ın ölümü üzerine kendi başına Moskova'da hüküm sürmeye başlar (vâris knezliğin başlangıcı).",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Москва",
    "tanik": "По смерти Ярослава в 1271 г. десятилетний моск. князь Даниил стал княжить самостоятельно"
   }
  ],
  "ic_not": "ÇELİŞKİ (Moskova'nın yağma tarihi): TDV Batu Han maddesi 1238 Şubat'ı verir (esas alındı, 'ay'); ESBE yalnız '1238 г.' der; İngilizce Vikipedi 'Siege of Moscow (1238)' 15-20 Ocak 1238 (tek dayanak olamaz, kullanılmadı). Dikiş: dikis_beyan. KİLİTLİ BORÇ: Moskova'nın 1157'de vladimir-suzdal künyesine geçmesi künye f=1157-01-01'e dayanır; Yuri ölüm yılı 1157 (ESBE), gün yok. Yanin/Kuçkin/Sedov monografileri ve PSRL açılamadı."
 },
 {
  "id": "nikolayev",
  "ad": "Nikolayev (Mikolayiv)",
  "atlas_ad": "Nikolayev (Mikolayiv)",
  "lat": 46.975,
  "lon": 31.9946,
  "kat1900": 3,
  "adlar": [
   "Nikolayev (Николаев)",
   "Mykolaiv (Миколаїв)"
  ],
  "ilk": {
   "t": "1784-01-01",
   "gun": "1784",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "ЭСБЕ 'Николаев, город Херсонской губернии', https://ru.wikisource.org/wiki/ЭСБЕ/Николаев,_город_Херсонской_губернии (curl ile okundu)",
   "tanik": "Основан, в виде укрепления, кн. Потемкиным в 1784 г.",
   "ic_not": "ESBE: Potemkin 1784'te tahkimat olarak kurdu. ÇELİŞKİ: ikincil kaynaklar (Vikipedi-türü, kullanılamaz) tersane 1788, resmî ad 27 Ağustos 1789 verir. ESBE esas alındı; ikinci akademik tanık (Ukrayna Tarihi Ansiklopedisi, Rus Biyografi) BULUNAMADI. Antik Olbia ≤3 km değil (yaklaşık 40 km). Yer Bug-Ingul birleşimi (ESBE)."
  },
  "kur": {
   "t": "1784-01-01",
   "gun": "1784",
   "kesinlik": "yil",
   "kaynak": "ЭСБЕ 'Николаев, город Херсонской губернии'",
   "tanik": "Основан, в виде укрепления, кн. Потемкиным в 1784 г."
  },
  "ark": null,
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1784-01-01",
    "gun": "1784",
    "k": "kurulus",
    "b": "Knez Potemkin Nikolayev'i tahkimat olarak kurar.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Николаев,_город_Херсонской_губернии",
    "tanik": "Основан, в виде укрепления, кн. Потемкиным в 1784 г."
   }
  ],
  "ic_not": "ZİNCİR YOK (şehir 1784'te kuruluyor; atlasın ilk günü 1784-01-01 'rusya', kur 1784 ile uyumlu). 1784 öncesi bölge sahipliği (Hacıbey/Özü Eyaleti Osmanlı, Kırım/Nogay) bu şehir için gerekmez; kuruluş yılı ikincil kaynaklarla 1788-89 arasında çelişir (bkz. ilk.ic_not) — atlasın 1784 başlangıcı ESBE'ye dayanır, Vikipedi/yerel kaynak 1788-89 diyor; ikinci akademik teyit gerekir. kat1900 değeri LISTE.tsv'de bulunmadı (3 tahmin)."
 },
 {
  "id": "nitra",
  "ad": "Nitra (Nyitra)",
  "atlas_ad": "Nitra (Nyitra)",
  "lat": 48.3069,
  "lon": 18.0864,
  "kat1900": 2,
  "adlar": [
   "Nitrava",
   "Nitra",
   "Neutra",
   "Nyitra"
  ],
  "ilk": {
   "t": "0828-01-01",
   "gun": "828",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Enciclopedia Italiana, 'Nitra' (Migliorini-Kristen 1934), https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/; Conversio Bagoariorum et Carantanorum (ed. Bartoňková, Magnae Moraviae fontes historici III, Praha 1969) — yıl: J. Poulík, World Archaeology 10(2) 1978, 158-171 (Wikipedia 'Christianization of Moravia' dipnotundan)",
   "tanik": "Nitra viene ricordata già nel principio del sec. IX, come sede del principe Pribina",
   "ic_not": "İLK ANILIŞ (Salzburg başpiskoposu Adalram'ın 'Nitrava'da Pribina'nın mülkünde kilise kutsaması, Conversio). EI yalnız 'principio del sec. IX' der (yüzyıl); 828 yılı Conversio'dan Wikipedia 'Christianization of Moravia' (Poulík 1978 atfıyla) üzerinden alındı — Conversio'nun kendisi ve Poulík bu oturumda AÇILMADI; bazı kaynaklar 827 verir (Adalram 821-836). Tek bağımsız yazılı tanık Conversio'dur; yıl tek dolaylı kaynağa dayanır. Nitrava = Nitra özdeşliği 'tam oybirliğiyle' değil (Wikipedia). Çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0828-01-01",
    "t": "0833-01-01",
    "d": "nitra-prensligi",
    "kesinlik": "yil",
    "kaynak": "EI 'Nitra' https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/: 'sede del principe Pribina'; EI 'Pribina': 'Principe (m. 861) di Nitra'",
    "ic_not": "Künye nitra-prensligi 805-01-01 → 833-01-01 (Pribina Nitra Prensliği)."
   },
   {
    "f": "0833-01-01",
    "t": "0906-01-01",
    "d": "buyuk-moravya",
    "kesinlik": "yil",
    "kaynak": "EI 'Moravia' (https://www.treccani.it/enciclopedia/moravia_(Enciclopedia-Italiana)/): 'Già Mojmír estese il suo dominio anche sulla Slovacchia occidentale, donde cacciò il principe di Nitra, Pribina'",
    "ic_not": "EI Mojmír'i 'circa 830-846' verir, Pribina'yı kovma yılı vermez; künye geçişi 833 künyeden (nitra-prensligi t, buyuk-moravya f) alındı (yıl). Bitiş EI 'verso il 906' (Macarlar merkezini yıktı); künye buyuk-moravya 907-01-01'de biter."
   },
   {
    "f": "0906-01-01",
    "t": "1001-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "yil",
    "kaynak": "EI 'Moravia' (https://www.treccani.it/enciclopedia/moravia_(Enciclopedia-Italiana)/): 'verso il 906 ne distrussero il centro, e la tennero sotto il proprio dominio'; EI 'Nitra': 'nei primi anni del sec. XI S. Stefano d'Ungheria s'impadronì di Nitra'",
    "ic_not": "Nitra'nın 906-1001 arası sahibi kaynakta YOK: EI 'Moravia' Macarların Moravya'yı 955 Lech'e dek elinde tuttuğunu söyler (Nitra'yı anmaz), EI 'Nitra' ise İstvan'ın XI. yy başında Nitra'yı 'ele geçirdiğini' (yani önceki sahip Macar değil) verir; çelişkiyi çözen tanık bulunamadı. Künye macar-prensligi (895-1000) önerilmedi (beyansız yaklaşıklık olurdu). Boşluk doldurma merdiveni: ①TDV (madde yok) ②EI ③Slovak/Macar akademik kaynaklar AÇILAMADI ④Nitra o devirde var mıydı: EI 'sede vescovile' (Svatopluk dönemi piskoposluk, Viching) — var; abi merkez adayı: Bratislava/Pozsony? (kaynak yok)."
   },
   {
    "f": "1001-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "EI 'Nitra' (https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/): 'Quando nei primi anni del sec. XI S. Stefano d'Ungheria s'impadronì di Nitra'",
    "ic_not": "f yüzyıl hassasiyeti ('primi anni del sec. XI'): 1001 = yüzyılın ilk yılı, en erken uç (künye macaristan 1000-01-01). Kral Bela IV 1248'de Nitra'yı 'libera città regia' yaptı; XIII. yy sonlarında şehir piskoposların dünyevi iktidarına verildi (EI) — üst egemenlik Macaristan Krallığı."
   }
  ],
  "olay": [
   {
    "t": "0828-01-01",
    "gun": "828",
    "k": "diger",
    "b": "Nitrava'da (Nitra) Pribina'nın mülkünde ilk Hristiyan kilise kutsanır: Nitra'nın ilk yazılı anılışı",
    "kaynak": "EI 'Nitra', https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/; Conversio Bagoariorum et Carantanorum",
    "tanik": "Nitra viene ricordata già nel principio del sec. IX, come sede del principe Pribina"
   },
   {
    "t": "0833-01-01",
    "gun": "833 (EI: Mojmír circa 830-846)",
    "k": "fetih",
    "b": "Moravya prensi Mojmír Nitra prensi Pribina'yı kovar; Nitra Büyük Moravya'ya katılır",
    "kaynak": "EI 'Moravia', https://www.treccani.it/enciclopedia/moravia_(Enciclopedia-Italiana)/",
    "tanik": "cacciò il principe di Nitra, Pribina"
   },
   {
    "t": "0906-01-01",
    "gun": "906",
    "k": "fetih",
    "b": "Macarlar Büyük Moravya'nın merkezini yıkar ve bölgeyi hâkimiyetlerine alır (EI: Moravya; Nitra'ya özgü tanık yok)",
    "kaynak": "EI 'Moravia', https://www.treccani.it/enciclopedia/moravia_(Enciclopedia-Italiana)/",
    "tanik": "i quali verso il 906 ne distrussero il centro"
   },
   {
    "t": "1001-01-01",
    "gun": "1001 (11. yüzyıl başı)",
    "k": "fetih",
    "b": "Macar kralı İstvan (Aziz Stefan) Nitra'yı ele geçirir ve bölgenin müstahkem merkezi yapar",
    "kaynak": "EI 'Nitra', https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/",
    "tanik": "Quando nei primi anni del sec. XI S. Stefano d'Ungheria s'impadronì di Nitra"
   },
   {
    "t": "1248-01-01",
    "gun": "1248",
    "k": "idari",
    "b": "Kral Bela IV Nitra'yı özgür kraliyet kenti ('libera città regia') yapar",
    "kaynak": "EI 'Nitra', https://www.treccani.it/enciclopedia/nitra_(Enciclopedia-Italiana)/",
    "tanik": "nel 1248 fu elevata dal re Bela IV a libera città regia"
   }
  ],
  "ic_not": "Atlas Nitra'yı 1281'de 'macaristan' ile başlatır (kaynak TDV nitra slug'ı yok); zincir aynı sahiple biter. TDV 'nitre' slug'ı 798 karakterlik boş sayfa; arama sayfası 7 madde içeriği (Nitra madde değil). Atlas ek öneri: künye nitra-prensligi (805-833) ve buyuk-moravya (833-907) boyalı/boyasız durumu bu oturumda ölçülmedi (DEVLETLER-1300-oncesi.json'da var). Nitra/Slovak akademik ansiklopedileri (Beliana) 404 verdi, Britannica 403."
 },
 {
  "id": "novgorod",
  "ad": "Novgorod",
  "atlas_ad": "Novgorod",
  "lat": 58.521,
  "lon": 31.271,
  "kat1900": 2,
  "adlar": [
   "Новгород (Novgorod)",
   "Veliky Novgorod",
   "Novgorod-Rus",
   "Holmgard"
  ],
  "ilk": {
   "t": "0862-01-01",
   "gun": "862",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "P. S. Stefanovich, 'Сказание о призвании варягов или origo gentis Russorum?', Древнейшие государства Восточной Европы 33, https://dgve.igh.ru/issues/33/articles/708/download (PDF, pdftotext ile okundu)",
   "tanik": "В ПВЛ Сказание изложено под 6370 (862) г.",
   "ic_not": "Povest vremennykh let (PVL) 6370 (862) maddesi: Rurik (İpatiev/Radziwill/Mosk. Akad. listelerinde önce Ladoga'da, sonra Sineus ve Truvor'un ölümüyle 'сруби город над Волховом, и прозваша и Новъгород'; Lavrentiev'de yer adı eksik, Troitsk'ta 'сѣде Новѣгородѣ'). Stefanovich: 862 PVL yazarının 'самых приблизительных прикидок' hesabıdır — yıl bir tahmin; legend ('призвание варягов'), kuruluş değil ilk anılış olarak işaretlendi. Gün/ay yok. PVL 6367 (859) maddesinde Novgorod adı geçmez (varyag haracı). ESBE: 'в IX в. около Ильменя ... имевшее город Н.' (yüzyıl). PSRL birincil metni açılamadı; Yanin/Sedov/Kuçkin monografileri açılamadı (yalnız Tolochko'nun Yanin atfı ve Tarabardina dendro özeti). Çift teyit YOK."
  },
  "kur": null,
  "ark": {
   "t": "0901-01-01",
   "gun": "10. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "O. A. Tarabardina, 'Dendrochronological Studies of Medieval Novgorod (Based on the Findings of Archaeological Excavations 1991-2006)', Archaeology, Ethnology & Anthropology of Eurasia 37(1), 2009, https://archaeology.nsc.ru/en/publications/jr-aeae-en/09-37-1/annot-09/",
   "tanik": "between the 10th and 15th cent."
  },
  "bit": null,
  "sahip": [
   {
    "f": "0862-01-01",
    "t": "0882-01-01",
    "d": "rurik-novgorod",
    "kesinlik": "yil",
    "kaynak": "Stefanovich, DGVE 33 (PVL 6370/862); ESBE 'Новгород Великий'",
    "kunye_yok": true,
    "ic_not": "Rurik'in Novgorod'u (PVL: Rurik Sineus ve Truvor'un ölümünden sonra yönetimi tek elde toplar). Künye ÖNERİSİ: 'Rurik Knezliği (Novgorod), 862-882'; kiev-rusu künyesi 882'de başlar. Yıl PVL hesabı (yaklaşık)."
   },
   {
    "f": "0882-01-01",
    "t": "1136-01-01",
    "d": "kiev-rusu",
    "kesinlik": "yil",
    "kaynak": "Stefanovich, DGVE 33 (Oleg'in Kiev'e gelişi 6390); ESBE 'Новгород Великий' (Oleg Novgorod'dan güneye gider, haraç)",
    "ic_not": "Künye kiev-rusu f=0882-01-01; Oleg 6390 (=882 AM hesabı 6390−5508) Kiev'e gelir. ESBE: Novgorod Kiev knezlerine bağlı, haraç öder (Vladimir, Yaroslav). Yıl PVL hesabı."
   },
   {
    "f": "1136-01-01",
    "t": "1281-01-01",
    "d": "novgorod",
    "kesinlik": "yil",
    "kaynak": "P. P. Tolochko, 'О новгородских «вольностях в князьях»', Vertograd 2018 (inslav.ru); V. L. Yanin'e atıf",
    "ic_not": "Novgorod Cumhuriyeti künyesi f=1136-01-01; Tolochko: Vsevolod Mstislaviç'in 1136'da kovulması; gün/ay (28 Mayıs) kaynakta yok (popüler sitelerde var, kullanılmadı). ESBE: Moğol istilası Novgorod'a ulaşmaz ('до Крестца и поворотили назад')."
   }
  ],
  "olay": [
   {
    "t": "0862-01-01",
    "gun": "862",
    "k": "diger",
    "b": "PVL: Rurik Novgorod'u yönetim merkezi yapar ('Волхов üzerinde şehir kurar'; Novgorod adı; yıl PVL hesabı).",
    "kaynak": "Stefanovich, DGVE 33 (https://dgve.igh.ru/issues/33/articles/708/download)",
    "tanik": "сруби город над Волховом, и прозваша и Новъгород"
   },
   {
    "t": "0882-01-01",
    "gun": "882",
    "k": "diger",
    "b": "künye geçişi: Rurik Knezliği → Kiev Rus'u; Oleg Novgorod'dan güneye (Kiev'e) gider, Novgorodlulara 300 grivna haraç koyar.",
    "kaynak": "ESBE 'Новгород Великий'; Stefanovich DGVE 33 (6390)",
    "tanik": "Олег ушел из Н. на Ю, обложив новгородцев данью в 300 гривен"
   },
   {
    "t": "1136-01-01",
    "gun": "1136",
    "k": "isyan",
    "b": "Novgorodlular knez Vsevolod Mstislaviç'i kovar; 'knezde özgürlük' ilkesi yerleşir (Yanin).",
    "kaynak": "P. P. Tolochko, Vertograd 2018, https://inslav.ru/sites/default/files/2018_vertograd_tolochko_p.pdf",
    "tanik": "изгнанием из Новгорода Всеволода Мстиславича в 1136 г."
   },
   {
    "t": "1169-01-01",
    "gun": "1169",
    "k": "kusatma",
    "b": "Andrey Bogolyubski'nin Novgorod kuşatması başarısız kalır.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Новгород_Великий",
    "tanik": "потерпел полную неудачу при осаде Н. в 1169 г."
   },
   {
    "t": "1236-01-01",
    "gun": "1236",
    "k": "taht",
    "b": "Yaroslav Vsevolodoviç'in oğlu Aleksandr (sonradan Nevski) Novgorod'a knez olur.",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Новгород_Великий",
    "tanik": "В 1236 г. в Н. вокняжился сын Ярослава Всеволодовича Александр."
   },
   {
    "t": "1242-01-01",
    "gun": "1242",
    "k": "savas",
    "b": "Aleksandr Nevski Livonyalı Almanları Çud Gölü buzunda yener (Buz Savaşı).",
    "kaynak": "https://ru.wikisource.org/wiki/ЭСБЕ/Новгород_Великий",
    "tanik": "разбитыми им на льду Чудского оз. (Ледовое побоище 1242 г.)"
   }
  ],
  "ic_not": "Dikiş kesintisiz: son dönem 'novgorod' atlasın ilk sahibi 'novgorod' (1281). Boyalı künye: novgorod (boyali). 862-882 'rurik-novgorod' künyesiz (kunye_yok). Novgorod'un Moğol vergisi: TDV Berke Han maddesi '1259’da Novgorod Rostov, Suzdal ve Yaroslav…' ifadesi tam metni açılamadı (nüfus sayımı/haraç; olay yazılmadı). Yanin 'Я послал тебе бересту' dendro 953 iddiası doğrulanamadı: Tarabardina yalnız '10th-15th' der; en erken dendro 920-930'lar ikincil (Vikipedi) — yazılmadı."
 },
 {
  "id": "pamplona",
  "ad": "Pamplona",
  "atlas_ad": "Pamplona",
  "lat": 42.813,
  "lon": -1.646,
  "kat1900": 2,
  "adlar": [
   "Pompelo/Pompaelo (Pompeiopolis)",
   "Pampilona",
   "Benblûne",
   "Pamplona"
  ],
  "ilk": {
   "t": "-0074-01-01",
   "gun": "MÖ 75",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/pamplona_(Enciclopedia-Italiana)/ (1935), 'Pamplona' (Storia); Strabon, Geography 3.4.10 (Loeb, LacusCurtius)",
   "tanik": "Fu fondata da Pompeo nel 75 a. C.",
   "ic_not": "ÇELİŞKİ: Princeton Encyclopedia of Classical Sites 'POMPAELO': 'nothing definitely proves the foundation of Pompaelo by Pompey ... the remains excavated in the area of the present cathedral have yielded no evidence earlier than the Empire'; 'Apparently there was a previous settlement on the site ... but confirmatory data are lacking'. Strabon (3.4.10) şehri 'Pompelo or, as one might say, Pompeiopolis' diye anar (tarih yok). Treccani'nin MÖ 75'i kuruluş iddiası olarak alındı, kazı verisi desteklemiyor (zayıf kayıt). Alternatif: ilk anılış Strabon/Plinius HN 3.24 (tarihleri bu oturumda doğrulanmadı)."
  },
  "kur": {
   "t": "-0074-01-01",
   "gun": "MÖ 75",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/pamplona_(Enciclopedia-Italiana)/ (1935), 'Pamplona' (Storia); Strabon, Geography 3.4.10 (Loeb, LacusCurtius)",
   "tanik": "Fu fondata da Pompeo nel 75 a. C."
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0074-01-01",
    "t": "-0026-01-16",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/pamplona_(Enciclopedia-Italiana)/",
    "ic_not": "Pompeius'un Sertorius savaşı (Treccani: MÖ 75 kuruluşu)."
   },
   {
    "f": "-0026-01-16",
    "t": "0395-01-17",
    "d": "roma-imp",
    "kesinlik": "gun",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/; Princeton 'Pompaelo'",
    "ic_not": "Princeton: Plinius HN 3.24'te 'stipendiary town', Conventus Caesaraugustanus; Antonine Itinerary istasyonu."
   },
   {
    "f": "0395-01-17",
    "t": "0466-01-01",
    "d": "bati-roma",
    "kesinlik": "yil",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "ic_not": "t: Isidorus Era DIV (466)."
   },
   {
    "f": "0466-01-01",
    "t": "0711-01-01",
    "d": "vizigot",
    "kesinlik": "yil",
    "kaynak": "Isidorus, Historia Gothorum 34; Princeton 'Pompaelo' ('episcopal see in the Visigothic period and that King Wamba rebuilt it'); Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/pamplona_(Enciclopedia-Italiana)/",
    "ic_not": "ÇOK ZAYIF TUTUNMA: Treccani 'Occupata da Visigoti, Franchi e Arabi, ma sempre per breve tempo, la città riuscì in massima a mantenere la sua indipendenza' (Vaskonlar). Princeton: Isidorus Vizigot fethi (Chr.Gall. 651.664), Gregorius Turonensis Hist. Franc. II.29: Childebert ve Clothar'ın ele geçirişi (Frank saldırısı, süre yok). Vizigot künyesi 711'de biter."
   },
   {
    "f": "0711-01-01",
    "t": "0850-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "yuzyil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/ ; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-ii",
    "ic_not": "BEYANLI BOŞLUK (şehir VAR, sahibi tarihsiz): Treccani 'Spagna': 'sembra che Pamplona sia stata dominio di Mūsà e poi di ‛Oqba (734-40)'; 778'de Charlemagne 'conquistò Pamplona' (Roncevaux'da yenildi); Mayıs 842'de Muhammed b. Abdurrahman 'Benblûne’yi zaptetti' (TDV abdurrahman-ii); Navarra/Pamplona 'devleti' IX. yy ilk yarısında İñigo Arista ile görünür. f: 'en geç' tanıktan 850 (Treccani 'prima metà sec. IX'); atlas künyesi 'navarra' 824'te başlar — atlas referans değildir, 824 kaynaksız bulundu. Kesintisiz sahip kanıtlanamadı."
   },
   {
    "f": "0850-01-01",
    "t": "1281-01-01",
    "d": "navarra",
    "kesinlik": "yuzyil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/; navarra_(Enciclopedia-Italiana)/",
    "ic_not": "Treccani Navarra: 'Capitale del regno di Navarra sin dal sec. IX'. 924'te III. Abdurrahman Pamplona'ya girip şehri yağmalar (Treccani: 'saccheggiata e in parte distrutta (924)'; TDV 'hiçbir mukavemetle karşılaşmadan Benblûne’ye girdi') — kısa saldırı, dönem açılmadı. Atlas ilk dönemi 1281-01-01 navarra ile aynı sahip."
   }
  ],
  "olay": [
   {
    "t": "-0074-01-01",
    "gun": "MÖ 75",
    "k": "kurulus",
    "b": "Pompeius'a atfedilen kuruluş (Pompeiopolis); kazı verisi MÖ 75'i desteklemiyor.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/pamplona_(Enciclopedia-Italiana)/",
    "tanik": "Fu fondata da Pompeo nel 75 a. C."
   },
   {
    "t": "-0026-01-16",
    "gun": "16 Ocak MÖ 27",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti → Roma İmparatorluğu (Octavianus 'Augustus' unvanını alır).",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/",
    "tanik": "16 January 27: Imperator Caesar Divi filius Augustus"
   },
   {
    "t": "0395-01-17",
    "gun": "17 Ocak 395",
    "k": "diger",
    "b": "künye geçişi: Roma İmparatorluğu → Batı Roma (Theodosius I ölür, imparatorluk Arcadius/Honorius arasında bölünür).",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "tanik": "17 January 395: natural death"
   },
   {
    "t": "0466-01-01",
    "gun": "Era DIV = MS 466",
    "k": "fetih",
    "b": "Vizigot kralı Euricus Pampilona ve Caesaraugusta'yı alır.",
    "kaynak": "Isidorus, Historia Gothorum 34",
    "tanik": "qui captam inde Pampilonam et Caesaraugustam, misso exercitu, capit"
   },
   {
    "t": "0711-01-01",
    "gun": "92 H / 711",
    "k": "kayip",
    "b": "Müslümanlar Lekke'de Vizigot ordusunu bozguna uğratır (Vizigot Krallığı sonu); Pamplona'nın sahipliği tarihsizleşir.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "92 (711) yılında Târık b. Ziyâd kumandasındaki İslâm ordusu, Lekke vadisinde"
   },
   {
    "t": "0778-01-01",
    "gun": "778",
    "k": "fetih",
    "b": "Charlemagne Pireneleri aşıp Pamplona, Huesca ve Gerona'yı alır; Roncevaux'da Basklara yenilir.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/",
    "tanik": "passò i Pirenei e conquistò Pamplona, Huesca e Gerona"
   },
   {
    "t": "0842-05-01",
    "gun": "Mayıs 842",
    "k": "fetih",
    "b": "Emîr II. Abdurrahman'ın oğlu Muhammed Pamplona'yı zaptetmiştir (kısa Müslüman ele geçirişi).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-ii",
    "tanik": "Mayıs 842’de Benblûne’yi (Pamplona) zaptetti"
   },
   {
    "t": "0850-01-01",
    "gun": "9. yüzyılın ilk yarısı",
    "k": "kurulus",
    "b": "Pamplona merkezli Navarra kralı İñigo Arista (Treccani: 'prima metà sec. IX'); atlas künyesi 824, kaynakta yıl yok.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/",
    "tanik": "in Navarra si ebbe come re di Pamplona un Iñigo Arista"
   },
   {
    "t": "0924-01-01",
    "gun": "924",
    "k": "isgal",
    "b": "III. Abdurrahman Pamplona'ya girer, şehir yağmalanıp kısmen yıkılır (kısa; Navarra devam eder).",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-iii",
    "tanik": "inseguito sino a Pamplona, che fu saccheggiata e in parte distrutta (924)"
   }
  ],
  "ic_not": "Pamplona: kuruluş MÖ 75 (Treccani) ↔ Princeton kazıları İmparatorluk öncesi veri vermiyor — çelişki beyan; en güçlü yazılı tanık Strabon'un 'Pompelo or Pompeiopolis' kaydı (tarihsiz). 711-850 BEYANLI BOŞLUK; 466-711 Vizigot sahipliği zayıf (Vaskon bağımsızlığı). ATLAS ÖNERİSİ: 'navarra' künyesi f=824 kaynaksız bulundu; kaynakta yalnız 'IX. yy ilk yarısı'. Çift teyit: Isidorus 466 ↔ Treccani 'Spagna' ≈470 (aynı olay, yıl farkı). Zincir atlas ilk gününde (1281-01-01 Navarra) biter."
 },
 {
  "id": "parma",
  "ad": "Parma",
  "atlas_ad": "Parma",
  "lat": 44.801,
  "lon": 10.328,
  "kat1900": 2,
  "adlar": [
   "Parma"
  ],
  "ilk": {
   "t": "-0182-01-01",
   "gun": "MÖ 183",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "Treccani, 'Parma' (Enciclopedia on line), https://www.treccani.it/enciclopedia/parma/; Livius 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml)",
   "tanik": "Colonia romana fondata nel 183 a.C. nell’agro dei Boi",
   "ic_not": "Roma vatandaş kolonisi Parma MÖ 183 (Treccani; Livius 39.55: 'eodem anno Mutina et Parma coloniae ciuium Romanorum sunt deductae', 2000 kişi, 8 iugera). Çift teyit: Treccani + Livius (Livius yılı vermez, konsül yılı Treccani/EI'den). Aynı yerde öncesi: Boii toprağı (Livius 'in agro qui proxime Boiorum, ante Tuscorum fuerat') — yerleşim tarihi yok; Terramare/arkeoloji bu oturumda bulunamadı."
  },
  "kur": {
   "t": "-0182-01-01",
   "gun": "MÖ 183",
   "kesinlik": "yil",
   "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/; Livius 39.55",
   "tanik": "Colonia romana fondata nel 183 a.C. nell’agro dei Boi"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0182-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/: 'Colonia romana fondata nel 183 a.C. nell’agro dei Boi'; Livius, Ab urbe condita 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml)"
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "ic_not": "Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/: 'rex gentium'",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi. Gotlar İtalya'ya 489'da girdi (Treccani Ostrogoti)."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/: 'sotto la dominazione bizantina (dal 553)'",
    "ic_not": "Bitiş Milano'nun Longobardlara açıldığı gün (EI 'Longobardi'); Parma'nın alınış günü kaynakta yok (en geç tanık: Alboin'in Po güneyinde 'Parma, Reggio, Modena e Bologna'yı aldığı, EI)."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "yil",
    "kaynak": "EI 'Longobardi' (https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/): 'impadronendosi di Parma, Reggio, Modena e Bologna'; Treccani 'Parma': 'Sotto i Longobardi P. fu sede di ducato'",
    "ic_not": "Parma'ya özgü alınış günü yok; Milano günü (569-09-03) yaklaşıklık. EI: Autari döneminde Parma dükü Franklara geçmeyi dener (tarihsiz)."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "Treccani, 'Parma' (https://www.treccani.it/enciclopedia/parma/): 'di contea dopo la conquista franca (774)'; EI 'Longobardi'",
    "ic_not": "Haziran 774 = Pavia'nın düşüşü (EI); Treccani yalnız yıl (774) verir. IX.-XI. yy'da piskopos iktidarı öne çıktı (Treccani)."
   },
   {
    "f": "0962-02-02",
    "t": "1104-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Parma' (https://www.treccani.it/enciclopedia/parma/): 'Scoppiato il conflitto fra Papato e Impero per le investiture, la chiesa di P. sostenne la parte imperiale'; Treccani 'Ottone I'",
    "ic_not": "Künye geçişi 962 (Otto I). Bitiş: Matilde'nin fethi (1104)."
   },
   {
    "f": "1104-01-01",
    "t": "1106-01-01",
    "d": "canossa",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Parma' (https://www.treccani.it/enciclopedia/parma/): 'Nel 1104 P. fu conquistata dalla contessa Matilde di Canossa'",
    "ic_not": "Künyesiz sahip: Canossa (önerilen id 'canossa'). Kısa dönem; 1106'da piskopos seçimiyle şehir Kilise yanına geçti ('sanzionò il passaggio della diocesi e della città a fianco della Chiesa') — komün sürecinin başlangıcı (Treccani: komün XI. yy sonunda kuruldu).",
    "kunye_yok": true
   },
   {
    "f": "1106-01-01",
    "t": "1281-01-01",
    "d": "parma-komunu",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Parma' (https://www.treccani.it/enciclopedia/parma/): 'la pace fu stipulata (1149) non dal vescovo ma dai consoli di Parma'",
    "ic_not": "Künyesiz sahip: Parma komünü (önerilen id 'parma-komunu'). f=1106 BEYANLI: Treccani komünün 'alla fine dell'11° sec.' kurulduğunu söyler, tek tarih yok; 1149 konsüller antlaşma yapar. 1254-1259 Ghiberto da Gente senyörlüğü (olay; komün biçimleri sürdü), 1298'de popolari. Atlas 1281'de __BOSLUK__ (bkz. dikis_beyan).",
    "kunye_yok": true
   }
  ],
  "olay": [
   {
    "t": "-0182-01-01",
    "gun": "MÖ 183",
    "k": "kurulus",
    "b": "Roma vatandaş kolonisi Parma (Mutina ile) kurulur; Boii toprağı",
    "kaynak": "Livius 39.55 (https://www.thelatinlibrary.com/livy/liv.39.shtml); Treccani 'Parma' https://www.treccani.it/enciclopedia/parma/",
    "tanik": "eodem anno Mutina et Parma coloniae ciuium Romanorum sunt deductae"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi; İtalya Doğu Got krallığına geçti (künye dogu-got 493-03-05)",
    "kaynak": "Treccani, 'Teodorico', https://www.treccani.it/enciclopedia/teodorico/",
    "tanik": "sconfitto il re degli Eruli Odoacre (493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Alboin'in ordusu Po'nun güneyindeki şehirlere yayıldı (şehre özgü alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1104-01-01",
    "gun": "1104",
    "k": "fetih",
    "b": "Matilde di Canossa Parma'yı fetheder",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/",
    "tanik": "Nel 1104 P. fu conquistata dalla contessa Matilde di Canossa"
   },
   {
    "t": "1106-01-01",
    "gun": "1106",
    "k": "diger",
    "b": "Bernardo degli Uberti piskopos seçilir; şehir ve piskoposluk Kilise yanına geçer (komün dönemi)",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/",
    "tanik": "nel 1106 l’elezione a vescovo di Bernardo degli Uberti sanzionò il passaggio"
   },
   {
    "t": "1149-01-01",
    "gun": "1149",
    "k": "antlasma",
    "b": "Piacenza ile Pelavicino lehenleri anlaşması piskoposça değil Parma konsüllerince imzalanır (komün güvenli anılışı)",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/",
    "tanik": "la pace fu stipulata (1149) non dal vescovo ma dai consoli di Parma"
   },
   {
    "t": "1254-01-01",
    "gun": "1254-1259",
    "k": "taht",
    "b": "Ghiberto da Gente'nin senyörlüğü (komün kurumları sürdü; dönem açılmadı)",
    "kaynak": "Treccani, 'Parma', https://www.treccani.it/enciclopedia/parma/",
    "tanik": "Tra il 1254 e il 1259 P. fu sotto la signoria di Ghiberto da Gente"
   }
  ],
  "dikis_beyan": "Atlas Parma'yı 1281-01-01'de '__BOSLUK__' ile başlatıyor (BEYAN AVRUPA-SINIR-0077: 1395 öncesi sahip künyesiz komün/senyörlük). Bu zincir 1106-1281 arası 'parma-komunu' (künyesiz) olarak aynı beyanı DESTEKLER: boşluk künye açılınca kapanır. 1281 tarihli olay YOK (dikiş beyanlı).",
  "ic_not": "Çift teyit: kuruluş 183 (Treccani + Livius). TDV 'Parma' maddesi yok (arama 579 içerik / 4 başlık: Parma ile ilgili madde yok). EI 'Parma' (1935) ayrıca açılmadı; Treccani online yeterli. Zincirde Bizans/Longobard/Frank geçişleri İtalya genel çerçevesidir (beyanlı)."
 },
 {
  "id": "pisa",
  "ad": "Pisa",
  "atlas_ad": "Pisa",
  "lat": 43.716,
  "lon": 10.397,
  "kat1900": 2,
  "adlar": [
   "Pisae",
   "Colonia Iulia Opsequens",
   "Pisa"
  ],
  "ilk": {
   "t": "-0217-01-01",
   "gun": "MÖ 218",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Livius, Ab urbe condita 21.39 (https://www.thelatinlibrary.com/livy/liv.21.shtml); EI 'Pisa' (https://www.treccani.it/enciclopedia/pisa_(Enciclopedia-Italiana)/)",
   "tanik": "cum Pisas navibus venisset",
   "ic_not": "İLK ANILIŞ (kuruluş değil): Hannibal savaşı, Consul P. Cornelius Scipio gemilerle Pisae'ye gelir (MÖ 218; Livius'un yıl başlığı bu oturumda yeniden doğrulanmadı, Hannibal savaşı bağlamı EI 'fedeltà di Pisa nella guerra contro Annibale'). Daha eski ama TARİHSİZ anılışlar: Lykophron Alexandra 1241, Polybios 2.16.2, Cato (Servius'ta) — EI 'Fonti'. EI: 'Pisa deve però le sue origini di città ai Romani' (kuruluş Roma'ya atfedilir) ama aynı metin Etrüsk öncesi/sonrası 'popolazioni' ve 'Di antichissima origine' der — kuruluş tarihi bulunamadı (kur null). Arkeolojik: Treccani 'Pisa' (Arte): 'un tumulo circolare (8°-7° sec. a.C.), cenotafio di un principe etrusco' — yazılı tanık olduğundan ark olarak yazıldı, başlangıç değil. Çift teyit YOK (Livius + EI farklı olay dayanağı: EI Livius'a atıf yapar)."
  },
  "kur": null,
  "ark": {
   "t": "-0699-01-01",
   "gun": "MÖ 8.-7. yüzyıl",
   "kesinlik": "yuzyil",
   "kaynak": "Treccani, 'Pisa' (Enciclopedia on line, Arte), https://www.treccani.it/enciclopedia/pisa/: 'un tumulo circolare (8°-7° sec. a.C.), cenotafio di un principe etrusco'"
  },
  "bit": null,
  "sahip": [
   {
    "f": "-0217-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Livius, Ab urbe condita 21.39 (https://www.thelatinlibrary.com/livy/liv.21.shtml); EI 'Pisa' (https://www.treccani.it/enciclopedia/pisa_(Enciclopedia-Italiana)/): 'fedeltà di Pisa nella guerra contro Annibale'; Treccani 'Pisa': cittadinanza romana 89 a.C.",
    "ic_not": "BEYANLI yaklaşıklık: EI 'si misero ben presto in relazione con essa forse mediante un foedus' (müttefik); Roma vatandaşlığı MÖ 89, Octavianus kolonisi 'Opsequens Iulia Pisana' (EI) — resmî toprak statüsü dönemlere göre değişir, hepsi Roma Cumhuriyeti künyesi altında."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "ic_not": "Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/: 'rex gentium'",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi. Gotlar İtalya'ya 489'da girdi (Treccani Ostrogoti)."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "EI 'Pisa' (https://www.treccani.it/enciclopedia/pisa_(Enciclopedia-Italiana)/): 'passa a Odoacre, agli Ostrogoti, ai Bizantini'",
    "ic_not": "EI: Gregorius Magnus 603'te Pisa dromonlarını anar, 'autonoma rispetto a Longobardi e a Bizantini'; Bitiş Milano'nun düştüğü gün (EI 'Longobardi'); Pisa'ya özgü gün yok (beyanlı)."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "yil",
    "kaynak": "EI 'Pisa' (https://www.treccani.it/enciclopedia/pisa_(Enciclopedia-Italiana)/): 'Pisa fu soggetta poi ai Longobardi'; EI 'Longobardi': 'scende a Lucca'",
    "ic_not": "Başlangıç yaklaşıklık: EI 'Longobardi' Alboin'in 'Lucca'ya inip belki Chiusi'ye ilerlediğini' söyler; Pisa'nın Longobard fethi tarihsiz. EI 'Pisa': 730 belgesinde 'duca di Pisa Gregorio'."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "EI 'Pisa' (https://www.treccani.it/enciclopedia/pisa_(Enciclopedia-Italiana)/): 'Più tardi la città fece parte del regno d'Italia, compresa nella marca di Toscana'",
    "ic_not": "Şehre özgü sahiplik günü yok (Frank fethi Haziran 774 genel çerçeve). EI: 808'de Pisa donanması Frank gemileriyle Bizans/Venedik'e karşı savaştı, 828'de Lucca markisi komutasında (Pisa Frank markalığında)."
   },
   {
    "f": "0962-02-02",
    "t": "1050-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Pisa' (https://www.treccani.it/enciclopedia/pisa/): 'Compresa nella marca di Toscana'; 'Verso il 1050 compaiono nei documenti i consoli'",
    "ic_not": "Künye geçişi 962. Bitiş: 'Verso il 1050' konsüllerin belgelerde ilk görünüşü (Treccani online); EI 'Pisa' ilk konsül anısını 1080-1085 (bir Sardinya belgesinde) verir — ÇELİŞKİ: daha erken uç (1050) alındı, künye piza 1000-01-01'de başlar. 1004'te Saracenler şehri kısa süre işgal etti (olay; dönem açılmadı)."
   },
   {
    "f": "1050-01-01",
    "t": "1281-01-01",
    "d": "piza",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Pisa' (https://www.treccani.it/enciclopedia/pisa/): 'Verso il 1050 compaiono nei documenti i consoli'",
    "ic_not": "Künye piza (Pisa Cumhuriyeti) 1000-01-01 → 1406-10-09. 1284 Meloria yenilgisi atlas sonrasıdır."
   }
  ],
  "olay": [
   {
    "t": "-0217-01-01",
    "gun": "MÖ 218",
    "k": "diger",
    "b": "Pisae'nin ilk tarihli anılışı: Roma konsülü P. Cornelius Scipio gemilerle Pisae'ye çıkar (Hannibal savaşı)",
    "kaynak": "Livius, Ab urbe condita 21.39 (https://www.thelatinlibrary.com/livy/liv.21.shtml)",
    "tanik": "cum Pisas navibus venisset"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi; İtalya Doğu Got krallığına geçti (künye dogu-got 493-03-05)",
    "kaynak": "Treccani, 'Teodorico', https://www.treccani.it/enciclopedia/teodorico/",
    "tanik": "sconfitto il re degli Eruli Odoacre (493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Alboin'in ordusu Po'nun güneyindeki şehirlere yayıldı (şehre özgü alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1004-01-01",
    "gun": "1004",
    "k": "fetih",
    "b": "Saracenler Pisa'yı kısa süre işgal eder (süresi bilinmeyen kısa ele geçirme; dönem açılmadı)",
    "kaynak": "Treccani, 'Pisa', https://www.treccani.it/enciclopedia/pisa/",
    "tanik": "che nel 1004 occuparono la città per breve tempo"
   },
   {
    "t": "1050-01-01",
    "gun": "1050 (Verso il 1050)",
    "k": "diger",
    "b": "Belgelerde konsüllerin ilk görünüşü: komün yönetimi; Alman imparatorluk egemenliği fiilen sembolik kalır",
    "kaynak": "Treccani, 'Pisa', https://www.treccani.it/enciclopedia/pisa/",
    "tanik": "Verso il 1050 compaiono nei documenti i consoli"
   }
  ],
  "ic_not": "Atlas Pisa 1281'de 'piza' ile başlar; zincir aynı sahiple biter. ÇELİŞKİ (komün/konsül yılı): Treccani online 'verso il 1050' vs EI 'fra il 1080 e il 1085 ... il primo ricordo dei consoli (carta sarda)'; erken uç alındı. TDV 'Pisa' maddesi yok (arama: 3 başlık/126 içerik, Pisa şehri maddesi yok; 'Piza' slug'ı da arama sayfasına döndü). Livius'un MÖ 218 yılı konsül yılından türetildi (bu oturumda doğrulanmadı)."
 },
 {
  "id": "siena",
  "ad": "Siena",
  "atlas_ad": "Siena",
  "lat": 43.319,
  "lon": 11.331,
  "kat1900": 2,
  "adlar": [
   "Saena (Sena Iulia)",
   "Siena"
  ],
  "ilk": {
   "t": "0070-01-01",
   "gun": "MS 70",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Tacitus, Historiae 4.45 (https://www.thelatinlibrary.com/tacitus/tac.hist4.shtml); EI 'Siena' (https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/)",
   "tanik": "Manlius Patruitus senator pulsatum se in colonia Seniensi coetu multitudinis",
   "ic_not": "İLK ANILIŞ (kuruluş değil): Tacitus Hist. 4.45, Vespasianus dönemi (MS 70; yıl Historiae 4'ün kronolojik bağlamından, 4.45'in kendisi yıl vermez). EI: Siena 'è nominata assai di rado dagli scrittori antichi, in Plinio (Colonia Seniensis) e in Tolomeo' — Plinius ve Ptolemaios tarihsiz/daha geç. Kuruluş: EI 'nel nome stesso tradisce l'origine quale colonia militare di Cesare o più verosimilmente dei triumviri' — TARİHSİZ, kur YAZILMADI. Arkeoloji: EI 'tombe e ceramiche etrusche tarde, suppellettili preistoriche sporadiche' (tarihsiz). Çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "0070-01-01",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Tacitus, Historiae 4.45 (https://www.thelatinlibrary.com/tacitus/tac.hist4.shtml); EI 'Siena' (https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/): 'Colonia Seniensis' (Plinius)",
    "ic_not": "Sena Iulia Roma kolonisi (Sezar/triumvirler dönemi, tarihsiz). Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0493-01-01",
    "t": "0553-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "ic_not": "Şehre özgü tanık yok; İtalya genel çerçevesi."
   },
   {
    "f": "0553-01-01",
    "t": "0569-09-03",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti' https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/; EI 'Longobardi' https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "ic_not": "Siena'nın 553-569 Bizans sayılması İtalya genel çerçevesinden çıkarım (beyanlı); Toskana'nın Longobard fethi tarihsiz."
   },
   {
    "f": "0569-09-03",
    "t": "0774-06-01",
    "d": "langobard",
    "kesinlik": "yil",
    "kaynak": "EI 'Siena' (https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/): 'fosse governata da gastaldi, di cui il più antico a noi noto è Willerad'",
    "ic_not": "Başlangıç yaklaşıklık: Milano'nun alınış günü (EI 'Longobardi'); Siena'ya özgü tanık: gastald Willerad 678'de yaşıyor (en geç tanık). EI: Rotari döneminde piskoposluk 'restaurazione'/kuruluş."
   },
   {
    "f": "0774-06-01",
    "t": "0962-02-02",
    "d": "karolenj-italya",
    "kesinlik": "ay",
    "kaynak": "EI 'Siena' (https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/): 'Con la conquista franca, l'autorità dei gastaldi passò nei conti'",
    "ic_not": "Haziran 774 Pavia düşüşü (EI 'Longobardi'); Siena'ya özgü gün yok."
   },
   {
    "f": "0962-02-02",
    "t": "1147-01-01",
    "d": "almanya",
    "kesinlik": "yil",
    "kaynak": "EI 'Siena' (https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/): 'Li troviamo nominati per la prima volta in un atto del 1147'; 'sotto la cui tutela il comune nasceva'",
    "ic_not": "Künye geçişi 962 (Otto I). X. yy sonrası kont yetkisi yalnız kırsala, piskopos siyasî yetki kazandı (EI); komün XI. yy boyunca piskopos vesayetinde doğdu. Bitiş = atlasın başlangıcı (siena, 1147-01-01): konsüllerin ilk anılışı."
   }
  ],
  "olay": [
   {
    "t": "0070-01-01",
    "gun": "MS 70",
    "k": "diger",
    "b": "Siena'nın (colonia Seniensis) ilk yazılı anılışı: Senato'da Manlius Patruitus'un Sena'da dövülmesi",
    "kaynak": "Tacitus, Historiae 4.45 (https://www.thelatinlibrary.com/tacitus/tac.hist4.shtml)",
    "tanik": "Manlius Patruitus senator pulsatum se in colonia Seniensi coetu multitudinis"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma otoritesi sona erdi (Odoacer'in Romulus Augustulus'u devirmesi); İtalya Odoakar krallığına geçti",
    "kaynak": "Treccani, 'Odoacre', https://www.treccani.it/enciclopedia/odoacre/",
    "tanik": "fu a capo della ribellione che depose Romolo Augustolo (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Teodorik Odoacer'i yendi; İtalya Doğu Got krallığına geçti (künye dogu-got 493-03-05)",
    "kaynak": "Treccani, 'Teodorico', https://www.treccani.it/enciclopedia/teodorico/",
    "tanik": "sconfitto il re degli Eruli Odoacre (493)"
   },
   {
    "t": "0553-01-01",
    "gun": "553",
    "k": "fetih",
    "b": "Monte Lattaro'da Ostrogot direnişi kırıldı; İtalya Bizans yönetimine geçti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ostrogoti', https://www.treccani.it/enciclopedia/ostrogoti_(Enciclopedia-Italiana)/",
    "tanik": "Si spezzò con lui al Monte Lattaro (553) la resistenza degli Ostrogoti"
   },
   {
    "t": "0569-09-03",
    "gun": "3 Eylül 569",
    "k": "fetih",
    "b": "Longobardlar Milano'yu aldı (569; bazılarına göre 568); Alboin'in ordusu Po'nun güneyindeki şehirlere yayıldı (şehre özgü alınış günü kaynakta yok)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Il 3 settembre 569 (secondo alcuni 568), Milano apre loro le porte."
   },
   {
    "t": "0678-01-01",
    "gun": "678",
    "k": "idari",
    "b": "Longobard gastaldı Willerad Siena'da anılır (en geç Longobard yönetim tanığı; sahiplik dönemi zaten Longobard)",
    "kaynak": "EI 'Siena', https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/",
    "tanik": "governata da gastaldi, di cui il più antico a noi noto è Willerad"
   },
   {
    "t": "0774-06-01",
    "gun": "Haziran 774",
    "k": "fetih",
    "b": "Pavia'nın düşmesiyle Longobard krallığı sona erdi; Frank (Karolenj İtalya) hâkimiyeti",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Longobardi', https://www.treccani.it/enciclopedia/longobardi_(Enciclopedia-Italiana)/",
    "tanik": "Verona e poi Pavia, assediate, caddero (giugno 774, Pavia)."
   },
   {
    "t": "0962-02-02",
    "gun": "2 Şubat 962",
    "k": "diger",
    "b": "künye geçişi: Otto I imparatorluk tacını aldı (Alman/Kutsal Roma İmparatorluğu)",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Ottone I il Grande', https://www.treccani.it/enciclopedia/ottone-i-il-grande-imperatore-e-re-di-germania_(Enciclopedia-Italiana)/",
    "tanik": "Il 2 febbraio 962 O. ricevette dal papa la corona imperiale"
   },
   {
    "t": "1147-01-01",
    "gun": "1147",
    "k": "diger",
    "b": "Konsüller ilk kez bir belgede anılır: piskopos vesayetinden laik komün yönetimine geçiş (Siena komünü)",
    "kaynak": "EI 'Siena', https://www.treccani.it/enciclopedia/siena_(Enciclopedia-Italiana)/",
    "tanik": "Li troviamo nominati per la prima volta in un atto del 1147"
   }
  ],
  "ic_not": "Atlas Siena 1147-01-01'de (ONCE1281-GERIYE, konsüllerin ilk anılışı) 'siena' ile başlar; zincir 1147'de biter ve son sahibi almanya, atlasın ilk sahibi siena (komün) — dikiş olayı 1147 (EI). Atlas düzeltme önerisi: atlasın Siena başlangıcı 1147 (konsül anılışı) EI ile uyumlu; künye siena f=1125 Treccani/EI'de doğrulanmadı (atlas kaydı zaten aynı notu taşır). TDV 'Siena' maddesi yok (arama: 2 içerik, madde yok). Roma dönemi 70 öncesi (ilk anılıştan önce) tarihsiz. -0026-01-13 olayı bu şehirde yok (ilk anılış MS 70, Roma İmparatorluğu künyesiyle başlar)."
 },
 {
  "id": "sogut",
  "ad": "Söğüt",
  "atlas_ad": "Söğüt",
  "lat": 40.019,
  "lon": 30.181,
  "kat1900": 4,
  "adlar": [
   "Söğüt",
   "Söğüd",
   "Bey Söğüdü"
  ],
  "ilk": {
   "t": "1300-01-01",
   "gun": "13. yüzyılın ikinci yarısı",
   "nicelik": "kurulus",
   "kesinlik": "yuzyil",
   "kaynak": "İlhan Şahin, 'Söğüt', TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sogut (curl ile okundu)",
   "tanik": "XIII. yüzyılın ikinci yarısında gerçekleşmiş olmalıdır",
   "ic_not": "TDV: 'Söğüt’ün tarihî süreç içinde bir yerleşme yeri halinde ne zaman ortaya çıktığı kesin olarak bilinmemektedir'; yerleşme olarak ortaya çıkışı Osmanlı Beyliği'nin kurulma aşaması olan XIII. yy'ın ikinci yarısına konuyor ('olmalıdır' = tahmin, tanıklık değil). Aralık 1250-1300, güvenli uç = 1300-01-01. Sagouados eşitlemesi TDV'ye göre 'ispat edilememiştir' → başlangıç sayılmadı. Yazılı ilk anılış (Osman/Ertuğrul dönemi tarihlenmiş belge) bu oturumda bulunamadı. nicelik 'kurulus' tanıklık değil TDV'nin tahmini kuruluş aralığıdır."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [],
  "olay": [
   {
    "t": "1300-01-01",
    "gun": "13. yüzyılın ikinci yarısı",
    "k": "kurulus",
    "b": "TDV: Söğüt'ün yerleşme yeri olarak ortaya çıkışı XIII. yy ikinci yarısında gerçekleşmiş olmalı (tahmin).",
    "kaynak": "https://islamansiklopedisi.org.tr/sogut",
    "tanik": "XIII. yüzyılın ikinci yarısında gerçekleşmiş olmalıdır"
   }
  ],
  "ic_not": "ZİNCİR YOK: güvenli uç ilk.t=1300 atlasın başlangıcından (1281-01-01) SONRA; kural gereği 1281 öncesi sahip yazılmaz. ATLAS DÜZELTME ÖNERİSİ: atlas Söğüt'ü 1281'de Osmanlı olarak açıyor ('miras', künyesiz); TDV yerleşmenin ortaya çıkışını 'XIII. yüzyılın ikinci yarısı' (1250-1300) aralığına koyar, 1281 bu aralığa düşer ama gün/yıl teyidi yok. Ertuğrul'un Söğüt'ü Alâeddin'den aldığı (Selçuklu) rivayeti TDV'de tarihsizdir → olay yazılmadı."
 },
 {
  "id": "temesvar",
  "ad": "Temeşvar",
  "atlas_ad": "Temeşvar",
  "lat": 45.76,
  "lon": 21.23,
  "kat1900": 2,
  "adlar": [
   "Temesvár",
   "Temeschwar",
   "Temšvar",
   "Tımışvar",
   "Timişoara"
  ],
  "ilk": {
   "t": "1212-01-01",
   "gun": "1212",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, 'Tımışvar' (Mihai Maxim, 2012), https://islamansiklopedisi.org.tr/timisvar",
   "tanik": "Adı tarihî kayıtlarda ilk defa 1212 ve 1266’da yer alır.",
   "ic_not": "İLK ANILIŞ (TDV: '1212 ve 1266'). TDV ayrıca 'Şehir Macar Krallığı tarafından 1030’da ilhak edildi' der — bu iddia için birincil/akademik tanık bu oturumda bulunamadı ve ilk anılıştan (1212) 182 yıl önce olduğu için başlangıç YAPILMADI (güvenli uç: ilk adlı tanık). Kuruluş/arkeolojik katman: TDV 'Bega ırmağı kıyısında kurulmuştur' (tarihsiz); Roma/antik katman bu oturumda bulunamadı. Çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1212-01-01",
    "t": "1281-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "TDV 'Tımışvar' https://islamansiklopedisi.org.tr/timisvar: 'Şehir Macar Krallığı tarafından 1030’da ilhak edildi'; 'Adı tarihî kayıtlarda ilk defa 1212'",
    "ic_not": "Macaristan Krallığı (künye 1000-01-01). TDV 1030 ilhakını verir (1212'den eski); 1212-1281 arası tek sahip, el değiştirme yok (1241 Moğol istilası Banat'ı vurur; şehre özgü sahiplik değişimi tanığı bulunamadı). Atlas 1281 'macaristan' ile aynı."
   }
  ],
  "olay": [
   {
    "t": "1212-01-01",
    "gun": "1212",
    "k": "diger",
    "b": "Temeşvar'ın ilk yazılı anılışı (ikincisi 1266)",
    "kaynak": "TDV İslâm Ansiklopedisi, 'Tımışvar', https://islamansiklopedisi.org.tr/timisvar",
    "tanik": "Adı tarihî kayıtlarda ilk defa 1212 ve 1266’da yer alır."
   }
  ],
  "ic_not": "TDV 'temesvar' slug'ı 'TEMEŞVAR bk. TIMIŞVAR' yönlendirmesidir; gövde 'timisvar' slug'ındadır. TDV: 1307'de Charles Robert krallık sarayı yaptırdı (atlas dönemi sonrası). Atlas düzeltme önerisi YOK; TDV'nin 1030 ilhakı ilk anılış dışı olduğundan zincire yazılmadı (aranırsa 1030'a çekilebilir, kaynak açılmalı)."
 },
 {
  "id": "toledo",
  "ad": "Toledo",
  "atlas_ad": "Toledo",
  "lat": 39.863,
  "lon": -4.028,
  "kat1900": 2,
  "adlar": [
   "Toletum",
   "Tuleytula (Tuleytıle)",
   "Tolétho",
   "Toledo"
  ],
  "ilk": {
   "t": "-0192-01-01",
   "gun": "MÖ 193",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Princeton Encyclopedia of Classical Sites (1976), 'TOLETUM (Toledo)', M. Pellicer Catalán — https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0006:entry=toletum; Livius (Livy), Ab urbe condita 35.7.8 ve 35.22.8 (https://la.wikisource.org/wiki/Ab_urbe_condita/Liber_XXXV)",
   "tanik": "first mentioned in 193 B.C. as small but strongly fortified",
   "ic_not": "İlk anılış alt sınırdır, kuruluş DEĞİL. TDV 'Kuruluşu Tunç devrine kadar iner' der (tarih vermez; arkeolojik tarihli kaynak bulunamadı → ark yazılmadı). Livy: 'Toletum ibi parua urbs erat, sed loco munito' (35.22.8) ve 'apud Toletum oppidum ... dimicauit' (35.7.8). Princeton MÖ 193, Livy'nin konsüler yıl düzeni ile MÖ 192'ye kayabilir — Princeton'ın yılı alındı (-0192)."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0192-01-01",
    "t": "-0026-01-16",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "Princeton Encyclopedia 'Toletum'; Livy 35.22.8 (Toletum cepit)",
    "ic_not": "M. Fulvius Nobilior Toletum'u alır (Livy); 'apud Toletum oppidum' savaşı. Önceki (Carpetani/Kelt-İber) dönem için yazılı sahip tanığı yok."
   },
   {
    "f": "-0026-01-16",
    "t": "0395-01-17",
    "d": "roma-imp",
    "kesinlik": "gun",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula ('milâttan sonra 193’te Roma hâkimiyetine girdi' — TDV Roma hâkimiyetini 193 MS yazar; MÖ 193 Livy ile uyuşmaz, çelişki beyanı)",
    "ic_not": "ÇELİŞKİ: TDV 'milâttan sonra 193'te Roma hâkimiyetine girdi' der (muhtemelen MÖ 193; metin 'sonra' yazıyor); Princeton+Livy MÖ 193/192. Livy birincil kaynak olduğu için Roma tarafı MÖ 193 alındı; TDV tarihi olgu hatası sayılmadı, yalnız beyan."
   },
   {
    "f": "0395-01-17",
    "t": "0470-01-01",
    "d": "bati-roma",
    "kesinlik": "onyil",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Spagna' (Storia) — https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/",
    "ic_not": "t: Treccani 'verso il 470 ... Eurico poté divenire signore di gran parte della Spagna' (on yıl hassasiyeti). Alanlar Cartaginense'ye 411'de yerleşti (Treccani: 'gli Alani nella Lusitania e nella Cartaginense'), 418'de Visigot Walia onları yendi; aradaki kısa Alan/Roma değişimleri dönem AÇILMADAN beyan edildi (kaynak tarihsiz kalıyor)."
   },
   {
    "f": "0470-01-01",
    "t": "0712-01-01",
    "d": "vizigot",
    "kesinlik": "yil",
    "kaynak": "Treccani 'Spagna'; TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula ('Vizigot Krallığı’nın başşehri Tuleytula’ya ulaştı (93/712)'); Treccani 'Toledo' ('residenza dei re visigoti (con Leovigildo)')",
    "ic_not": "Toledo VI. yy ikinci yarısında Leovigild'le Vizigot başşehri olur (TDV). Vizigot künyesi 711'de biter; Toledo 93/712'de teslim olduğu için dönem 712'ye uzatıldı (hayalet uyarısı)."
   },
   {
    "f": "0712-01-01",
    "t": "0756-05-15",
    "d": "emevi",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula; endulus",
    "ic_not": "TDV: 'Siyasal tarih bağlamında şehirde Valiler dönemindeki (714-756) gelişmeler hakkında hemen hiç bilgi yoktur.' Emevî Hilâfeti künyesi 750'de biter, Endülüs valileri 756'ya kadar sürer (künye GENİŞLET önerisi)."
   },
   {
    "f": "0756-05-15",
    "t": "0896-02-19",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula; abdurrahman-i",
    "ic_not": "TDV: Hakem döneminde (796-822) Tuleytula en önemli isyan merkezlerinden biridir (797, 807 Hendek Vak‘ası, 815, 829-831; 222/837'de II. Abdurrahman 'şehri tamamen itaat altına aldı'); 238/852 ve 242/857'de yeniden isyan, Emîr Muhammed itaat aldırdı ama 'çok geçmeden ... bağları koparttılar'. Kopuşun tam günü yok; en geç tanık 283/896 (aşağı). Dönem sınırı 896'ya konuldu."
   },
   {
    "f": "0896-02-19",
    "t": "0932-08-02",
    "d": "tuleytula-ozerk",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "kunye_yok": true,
    "ic_not": "KÜNYE YOK: önerilen id 'tuleytula-ozerk' — Toledo'nun Kurtuba'ya karşı fiilî bağımsızlığı (Şentemeriye Berberîleri → Benî Kasî 283/896-293/906 → şehir halkının kendi idaresi 906-932). Ömür 896-02-19 (hicrî 283 ∩ 896 ilk günü) – 932-08-02 (TDV günü). ÇELİŞKİ: Treccani 'Nuovamente a partire dall'886 Toledo è ribelle a Cordova e per un quarantennio ... stato indipendente' (886'dan ≈926); TDV esas alındı (896-932), Treccani beyan. Künye açılırsa işaret kalkar."
   },
   {
    "f": "0932-08-02",
    "t": "1031-01-01",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula; endulus",
    "ic_not": "III. Abdurrahman muhasarasıyla Toledo merkezî idareyi yeniden tanır (2 Ağustos 932); X. yy boyunca bağlılık sürer."
   },
   {
    "f": "1031-01-01",
    "t": "1036-01-01",
    "d": "endulus-tavaif",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula; endulus",
    "ic_not": "Emevî otoritesi Kurtuba ile sınırlı kalınca Toledo'da 'Kadı Ebû Bekir Yaîş b. Muhammed el-Esedî başkanlığında ... bir meclis' idareyi üstlenir (TDV, tarihsiz; 1031 devlet sonu ile 1036 Zünnûnî girişi arası)."
   },
   {
    "f": "1036-01-01",
    "t": "1085-01-01",
    "d": "toledo-zunnunler",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula ('Zünnûnîler 427’de (1036) Tuleytula’ya girdiler')",
    "ic_not": "f: hicrî 427 ∩ 1036 = 1036-01-01. t: atlas dikişi 1085-01-01 (yıl). Gerçek teslim günü Treccani'ye göre 25 Mayıs 1085 (olay aşağıda); künye t=1085-05-08. ATLAS DÜZELTME ÖNERİSİ: Toledo'nun Kastilya başlangıcı 1085-01-01 yerine 1085-05-25 (Treccani EI 'Toledo') olmalı."
   }
  ],
  "olay": [
   {
    "t": "-0192-01-01",
    "gun": "MÖ 193",
    "k": "fetih",
    "b": "Roma komutanı M. Fulvius Toletum'u kuşatıp alır (küçük ama müstahkem şehir, Vettonların yardımı yenilir).",
    "kaynak": "Livy 35.22.8 (https://la.wikisource.org/wiki/Ab_urbe_condita/Liber_XXXV); Princeton Encyclopedia 'Toletum'",
    "tanik": "Toletum ibi parua urbs erat, sed loco munito"
   },
   {
    "t": "-0026-01-16",
    "gun": "16 Ocak MÖ 27",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti → Roma İmparatorluğu (Octavianus 'Augustus' unvanını alır).",
    "kaynak": "Livius.org (J. Lendering), 'Augustus', https://www.livius.org/articles/person/augustus/",
    "tanik": "16 January 27: Imperator Caesar Divi filius Augustus"
   },
   {
    "t": "0395-01-17",
    "gun": "17 Ocak 395",
    "k": "diger",
    "b": "künye geçişi: Roma İmparatorluğu → Batı Roma (Theodosius I ölür, imparatorluk Arcadius/Honorius arasında bölünür).",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "tanik": "17 January 395: natural death"
   },
   {
    "t": "0470-01-01",
    "gun": "470 civarı",
    "k": "fetih",
    "b": "Vizigot kralı Euricus İspanya'nın büyük kısmına hâkim olur (Galiçya ve Lusitania'nın bir bölgesi Svev'de kalır); Toledo Vizigot elinde.",
    "kaynak": "Treccani, Enciclopedia Italiana, 'Spagna' (Storia)",
    "tanik": "verso il 470 il loro re Eurico poté divenire signore di gran parte della Spagna"
   },
   {
    "t": "0712-01-01",
    "gun": "93 H / 712",
    "k": "fetih",
    "b": "Târık b. Ziyâd Vizigot başşehri Tuleytula'ya ulaşır; halk çoğunlukla şehri terk etmiştir, ciddi direnç olmaz.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "Vizigot Krallığı’nın başşehri Tuleytula’ya ulaştı (93/712)"
   },
   {
    "t": "0756-05-15",
    "gun": "15 Mayıs 756",
    "k": "diger",
    "b": "künye geçişi: Emevî valileri (Yûsuf el-Fihrî) → bağımsız Endülüs Emevî Emirliği; I. Abdurrahman Musâre savaşını kazanır, Kurtuba'ya girer (11 Mayıs'ta karargâh, 15 Mayıs sabahı saldırı). Toledo için TDV: 'Siyasal tarih ... Valiler dönemindeki (714-756) gelişmeler hakkında hemen hiç bilgi yoktur.'",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-i (HAKKI DURSUN YILDIZ)",
    "tanik": "15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı"
   },
   {
    "t": "0896-02-19",
    "gun": "283 H / 896",
    "k": "isyan",
    "b": "Şentemeriye Berberîleri, ardından Benî Kasî Tuleytula'ya egemen olur (Kurtuba'dan fiilî kopuş).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "önce Şentemeriye (Santaver) Berberîleri, ardından Benî Kasî ailesi Tuleytula’ya egemen oldu (283/896)"
   },
   {
    "t": "0932-08-02",
    "gun": "2 Ağustos 932",
    "k": "antlasma",
    "b": "III. Abdurrahman muhasaradan sonra Toledo halkı güvenceler alıp merkezî idarenin egemenliğini tanır.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "Şehir halkı birtakım güvenceler aldıktan sonra merkezî idarenin egemenliğini tanıdı (2 Ağustos 932)"
   },
   {
    "t": "1031-01-01",
    "gun": "1031",
    "k": "diger",
    "b": "künye geçişi: Endülüs Emevî Devleti (Kurtuba Hilâfeti) yıkılır; mülûkü't-tavâif (tâife emirlikleri) dönemi başlar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus (Endülüs; Emevîler 756-1031)",
    "tanik": "Böylece 756’da bağımsız bir emirlik olarak kurulan Endülüs Emevî Devleti yıkılmış oldu (422/1031)"
   },
   {
    "t": "1036-01-01",
    "gun": "427 H / 1036",
    "k": "fetih",
    "b": "Zünnûnîler Toledo'ya girer, şehri emirliklerinin başşehri yapar (meclis yönetiminin sonu).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "Zünnûnîler 427’de (1036) Tuleytula’ya girdiler ve burayı emirliklerinin başşehri yaptılar"
   },
   {
    "t": "1085-01-01",
    "gun": "478 H / 1085",
    "k": "antlasma",
    "b": "Yahyâ el-Kādir şehri teslim için VI. Alfonso ile gizli antlaşma yapar (TDV yalnız yıl verir; atlas dikişi bu yıl hassasiyetindedir).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tuleytula",
    "tanik": "Yahyâ el-Kādir şehri teslim etmek için VI. Alfonso ile gizli bir antlaşma yaptı (478/1085)"
   },
   {
    "t": "1085-05-25",
    "gun": "25 Mayıs 1085",
    "k": "fetih",
    "b": "VI. Alfonso Toledo'ya girer; şehir iki yıl sonra Kastilya'nın başşehri olur.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/toledo_(Enciclopedia-Italiana)/",
    "tanik": "il 25 maggio 1085 Alfonso VI entrava in Toledo"
   }
  ],
  "ic_not": "ilk_anilis: Livy/Princeton MÖ 193; kuruluş tanığı yok (TDV: Tunç devri, tarihsiz). Çelişkiler: (1) TDV 'milâttan sonra 193’te Roma hâkimiyeti' ↔ Princeton/Livy MÖ 193; (2) Treccani Toledo bağımsızlığı 886'dan ≈ ↔ TDV 896-932; (3) Toledo günü: TDV yalnız 478/1085, Treccani 25 Mayıs 1085, künye 1085-05-08, atlas 1085-01-01. Çift teyit: Vizigot başşehri (TDV + Treccani aynı yüzyıl), Müslüman fethi 711/712 (TDV 93/712 ↔ Treccani 711: yıl çelişkisi, TDV esas). Zincir atlas ilk gününde (1085-01-01 Kastilya) biter."
 },
 {
  "id": "valladolid",
  "ad": "Valladolid",
  "atlas_ad": "Valladolid",
  "lat": 41.652,
  "lon": -4.724,
  "kat1900": 2,
  "adlar": [
   "Valladolid"
  ],
  "ilk": {
   "t": "1079-01-01",
   "gun": "1079",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/valladolid_(Enciclopedia-Italiana)/ (1937), 'Valladolid' (Storia)",
   "tanik": "nel 1079, fu infeudata da Alfonso VI al conte Pedro Ansurez",
   "ic_not": "İlk anılış alt sınırdır (bu oturumda doğrulanabilen en eski tarihli tanık), kuruluş DEĞİL. Treccani: 'Le origini della città sono assai oscure. Si è tentato di identificarla con varî centri romani, ma con poco successo. Il nome è molto probabilmente di origine arabo' ve 'poca importanza fino al sec. XI'. Britannica (WebSearch özetinde, curl 403 verdi → doğrulanamadı) ilk anılışı 1074 tarihli bir Alfonso VI–Pedro Ansúrez mektubu olarak veriyor ('appears to be'); Wikipedia 1072 diyor (ikincil). 1074/1072 kabul edilmedi. Dialnet PDF (M. Martínez Martín, Historia. Instituciones. Documentos, 2006) bağlantı hatası verdi. TDV'de Valladolid maddesi yok ('valladolid' araması yalnız ilgisiz geçişler)."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1079-01-01",
    "t": "1281-01-01",
    "d": "kastilya",
    "kesinlik": "yil",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/valladolid_(Enciclopedia-Italiana)/",
    "ic_not": "Kont Pedro Ansúrez'in Alfonso VI tarafından verilen feodu (Leon-Kastilya Kralı); başkenti haline getirdi. Atlas ilk dönemi 1281-01-01 kastilya ile aynı sahip (künye 'kastilya' 1035-1479; Alfonso VI aynı zamanda Leon kralı — leon-kralligi künyesi de aday, Treccani 'Vecchia Castiglia' der)."
   }
  ],
  "olay": [
   {
    "t": "1079-01-01",
    "gun": "1079",
    "k": "idari",
    "b": "Alfonso VI Valladolid'i Kont Pedro Ansúrez'e verir; Ansúrez şehri feodlarının başkenti yapıp belediye düzeni verir.",
    "kaynak": "Treccani, Enciclopedia Italiana, https://www.treccani.it/enciclopedia/valladolid_(Enciclopedia-Italiana)/",
    "tanik": "nel 1079, fu infeudata da Alfonso VI al conte Pedro Ansurez"
   }
  ],
  "ic_not": "Valladolid için kuruluş ve 1079 öncesi tarihli tanık bulunamadı (Treccani: kökenler 'assai oscure'). TDV maddesi yok. Çift teyit YOK. Zincir atlas ilk gününde (1281-01-01 Kastilya) biter."
 },
 {
  "id": "varsova",
  "ad": "Varşova",
  "atlas_ad": "Varşova",
  "lat": 52.23,
  "lon": 21.011,
  "kat1900": 2,
  "adlar": [
   "Warszawa",
   "Varšava",
   "Varsavia",
   "Varşova"
  ],
  "ilk": {
   "t": "1224-01-01",
   "gun": "1224",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Enciclopedia Italiana, 'Varsavia' (Treccani, 1937), https://www.treccani.it/enciclopedia/varsavia_(Enciclopedia-Italiana)/; Hrvatska enciklopedija 'Varšava' https://www.enciklopedija.hr/clanak/varsava",
   "tanik": "Nel 1224 essa è menzionata quale villaggio",
   "ic_not": "İLK ANILIŞ (EI: 1224'te 'villaggio' olarak). LZMK 'Varšava': 'u dokumentima prvi put spominje u XIII. st.' — yüzyıl düzeyinde uyumlu (kısmî teyit, tarih bağımsız değil). Kuruluş: LZMK 'Stare Miasto razvilo se znatno ranije kao predgrađe utvrde mazovskih knezova' (tarihsiz). Çift teyit YOK (yalnız yüzyıl uyumu). Polonya akademik ansiklopedileri (PWN) bu oturumda açılmadı."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "1224-01-01",
    "t": "1281-01-01",
    "d": "polonya-erken",
    "kesinlik": "yil",
    "kaynak": "EI 'Varsavia' (https://www.treccani.it/enciclopedia/varsavia_(Enciclopedia-Italiana)/): 'Nello stesso sec. XIII i principi di Masovia vi costruirono il loro castello'; 'in rapporto di vassallaggio' (Masovia-Polonya)",
    "ic_not": "Sahip: Mazovya Dükalığı (Piast Mazovya prensleri; künyesiz alt-polity); EI: Mazovya 1526'ya dek Polonya krallığıyla 'vassallaggio' ilişkisinde. Atlas bu alanı 'polonya-erken' (966-1569) boyar: 1224-1281 için atlasla tutarlı yaklaşıklık, BEYANLI. Mazovya'nın siyasi bağımsızlık derecesi XIII. yy'da değişkendir, gün tanığı yok. Atlas 1281 'polonya-erken' ile aynı."
   }
  ],
  "olay": [
   {
    "t": "1224-01-01",
    "gun": "1224",
    "k": "diger",
    "b": "Varşova'nın ilk yazılı anılışı (köy olarak)",
    "kaynak": "EI 'Varsavia', https://www.treccani.it/enciclopedia/varsavia_(Enciclopedia-Italiana)/",
    "tanik": "Nel 1224 essa è menzionata quale villaggio"
   }
  ],
  "ic_not": "kat1900: LISTE.tsv Varşova Rus İmp. 'Varshavskaya guberniya' kat 2. Mazovya dükleri XIII. yy'da kale yaptırdı (tarihsiz). 1339 şehir hakları (LZMK), atlas sonrası. Atlas Varşova'da 1281 polonya-erken ile başlıyor; atlas düzeltme önerisi yok."
 },
 {
  "id": "zadar",
  "ad": "Zadar (Zara)",
  "atlas_ad": "Zadar (Zara)",
  "lat": 44.124,
  "lon": 15.232,
  "kat1900": 2,
  "adlar": [
   "Idassa",
   "Jader (Iader)",
   "Diadora",
   "Zara",
   "Zadar"
  ],
  "ilk": {
   "t": "-0383-01-01",
   "gun": "MÖ 384",
   "nicelik": "ilk_anilis",
   "kesinlik": "yil",
   "kaynak": "Enciclopedia Italiana, 'Zara' (Treccani), https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/ (Faros/Lesina steli, Iadastinoi)",
   "tanik": "che è la prima menzione storica degli abitanti di Zara",
   "ic_not": "İLK ANILIŞ (şehir halkı 'Iadastinoi', Pharos/Hvar adalılarının MÖ 384 zaferi steli; kaynak EI 'Zara'): halk adı, yer adı değil — yer için en erken tarihli tanık budur. Pseudo-Skylax 21 'Idassa' (tarihsiz, EI) ve MÖ III. yy yazıtı ikinci tanık. Kuruluş/ark: Nin (Aenona) civarı Neolitik istasyon ('a pochi chilometri da Zara') ve Tunç/Demir Çağı mezarları (EI) — Nin Zadar'dan >3 km, antik Zadar yerleşimi için tarihsiz; Roma kolonisi 'Jader' MÖ 35-33 İlk Dalmaçya Savaşı sonrası (EI) kuruluş tarihi vermez. Eski Liburna yerleşimi modern Zadar noktasında olup olmadığı EI'de açık ('proprio in quei luoghi'). Çift teyit YOK."
  },
  "kur": null,
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0383-01-01",
    "t": "-0128-01-01",
    "d": "liburn-kabileleri",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'abitato da quella popolazione illirica ... Liburnia'",
    "ic_not": "Künyesiz sahip: Liburn kabile birliği (önerilen id 'liburn-kabileleri'; ömür ≈-0383...-0128). EI: şehir Liburnia'nın başlıca şehri; İllirya birliğinden ayrılıp Roma'ya yönelme 129 MÖ'den sonra olası.",
    "kunye_yok": true
   },
   {
    "f": "-0128-01-01",
    "t": "-0026-01-13",
    "d": "roma-cumhuriyeti",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'dopo la marcia del console C. Sempronio Tuditano (129 a. C.)'",
    "ic_not": "BEYANLI yaklaşıklık: EI Roma fethi yok, 'tributo da essi pagato' der; 'forse allora Zara divenne sede di conciliabula'. Bitiş künye geçişi; kolonya Jader MÖ 35-33 (EI)."
   },
   {
    "f": "-0026-01-13",
    "t": "0476-01-01",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "ic_not": "Roma kolonisi Jader (duoviri, tribu Sergia). Ortak İtalya zinciri (şehre özgü tanık yok; İtalya genel çerçevesi, beyanlı yaklaşıklık). Künye roma-imp 395-01-17'de biter, bati-roma 476-08-28'e dek: bu şehirlerde toprak değişmediği için roma-imp 476'ya uzatıldı (hayalet uyarısı beklenir; öneri: roma-imp'i bati-roma'yı kapsayacak biçimde genişlet). 476/493/553 yıl hassasiyetli; künye odoakar 476-08-23, dogu-got 493-03-05'te başlar."
   },
   {
    "f": "0476-01-01",
    "t": "0493-01-01",
    "d": "odoakar",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'sotto i regni italici di Odoacre e di Teodorico'",
    "ic_not": "EI: 476 sonrası Zara çiçeklenir; Julius Nepos 'impero dalmatico' (480) — Odoacer Dalmaçya'yı 480-482'de aldı (bu oturumda kaynak AÇILMADI); 476-480 Nepos dönemi dönem açılmadı (beyanlı)."
   },
   {
    "f": "0493-01-01",
    "t": "0540-01-01",
    "d": "dogu-got",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'Verso il 540 fu tolta ai Goti e restituita all'impero'",
    "ic_not": "Bitiş yıl hassasiyeti ('verso il 540')."
   },
   {
    "f": "0540-01-01",
    "t": "0805-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'divenne il centro principale della Dalmazia bizantina e residenza dello stratego imperiale'; LZMK 'Zadar' https://www.enciklopedija.hr/clanak/zadar",
    "ic_not": "615 Avar-Slav istilası ve Salona'nın yıkılışı sonrası Bizans Dalmaçyası merkezi; 751'de Ravenna'nın düşüşü ile ekzarhlık işlevlerini devraldı (EI). Bitiş: 805-806'da Charlemagne sarayında temsil (en erken Frank tanığı)."
   },
   {
    "f": "0805-01-01",
    "t": "0812-01-01",
    "d": "frank",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'nell'805-806, quando alla corte di Carlomagno la provincia è rappresentata dal duca Paolo'; LZMK 'Zadar': 'Početkom IX. st. kratkotrajno je bio pod franačkom vlašću'",
    "ic_not": "f yıl hassasiyeti: Frank hâkimiyeti başlangıç günü kaynakta yok; 805-806 en erken tanık (EI), LZMK 'IX. yy başı kısa süreli'. Bitiş Aachen Antlaşması 812."
   },
   {
    "f": "0812-01-01",
    "t": "1000-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Zadar' (https://www.enciklopedija.hr/clanak/zadar): 'mirom u Aachenu (812) grad pripao Bizantu'; 'Godine 923. gradom je kao bizantski prokonzul upravljao hrvatski vladar Tomislav'",
    "ic_not": "923'te Tomislav 'Bizans prokonsülü' sıfatıyla yönetir (LZMK), yani üst egemenlik Bizans'ta; X. yy'da Zadar 'političkim središtem bizantske Dalmacije' (LZMK). Bitiş: Venedik 'oko 998-1000' ilk fethi (LZMK; EI 'nel 1000 fa omaggio al doge') — aralığın son ucu 1000."
   },
   {
    "f": "1000-01-01",
    "t": "1024-01-01",
    "d": "venedik",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'nel 1000 fa omaggio al doge'",
    "ic_not": "LZMK: Orseolo II 'oko 998-1000' fethi, 'nedugo potom' Hırvat hükümdar I. Stjepan'ı tanıdı; EI: 1000'de dojea haraç, 1024'te çözülme — ÇELİŞKİ (LZMK kısa süre sonra Hırvat tanıma der, EI 1024). Dönem EI'ye göre; LZMK farkı beyan."
   },
   {
    "f": "1024-01-01",
    "t": "1050-01-01",
    "d": "bizans",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'Ma già nel 1024 si scuote e, sotto l'alta sovranità bizantina, riprende il suo ruolo'",
    "ic_not": "Bizans üst egemenliği altında özerk (EI); LZMK 1050'de Hırvat hükümdara 'samovoljno podvrgnuo' der."
   },
   {
    "f": "1050-01-01",
    "t": "1105-01-01",
    "d": "hirvatistan-kralligi",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Zadar' (https://www.enciklopedija.hr/clanak/zadar): 'se 1050. grad samovoljno podvrgnuo vlasti hrvatskoga vladara'; 'Nakon polustoljetne vlasti hrvatskih vladara'",
    "ic_not": "Künye hirvatistan-kralligi 925-1102: Zadar Koloman'ı 1105'te tanıdığı için dönem 1105'e uzatıldı (künye t 1102, +3 yıl; HAYALET uyarısı): öneri künyeyi 1105'e GENİŞLET. Petar Krešimir IV (rex Dalmatiae) bu dönemde (LZMK)."
   },
   {
    "f": "1105-01-01",
    "t": "1115-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Zadar' (https://www.enciklopedija.hr/clanak/zadar): 'Zadar je 1105. priznao vlast hrvatsko-ugarskoga kralja Kolomana'",
    "ic_not": "Hırvat-Macar kral birliği (Koloman)."
   },
   {
    "f": "1115-01-01",
    "t": "1180-01-01",
    "d": "venedik",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Zadar' (https://www.enciklopedija.hr/clanak/zadar): '1115. zauzeo ga je mletački dužd Ordelafo Faliero'; 'Godine 1180. Zadrani su prihvatili vlast hrvatsko-ugarskoga kralja Bele III.'",
    "ic_not": "BEYANLI yaklaşıklık: LZMK 'U XII. st. Venecija je stalno nastojala podvrgnuti grad'; EI 'il sec. XII ... è tutto un fluttuare tra la sovranità veneziana e ungherese' — 1115-1180 arası tek tek el değiştirme günleri kaynakta YOK; 1159-1180 dört isyan (LZMK). Dönem Venedik olarak yazıldı (en az iki kaynak: fetih 1115, 1180'de Macar tanıma)."
   },
   {
    "f": "1180-01-01",
    "t": "1202-01-01",
    "d": "macaristan",
    "kesinlik": "yil",
    "kaynak": "LZMK 'Zadar' (https://www.enciklopedija.hr/clanak/zadar): 'Godine 1180. Zadrani su prihvatili vlast hrvatsko-ugarskoga kralja Bele III.'",
    "ic_not": "Bitiş: IV. Haçlı Seferi'nde Dandolo'nun fethi 1202."
   },
   {
    "f": "1202-01-01",
    "t": "1242-01-01",
    "d": "venedik",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'Enrico Dandolo, coadiuvato dalle genti della IV crociata, non stabilisce definitivamente il dominio della Repubblica'; LZMK 'Zadar': 'Najteži napad pretrpio je 1202.'",
    "ic_not": "Haçlı ordusuyla fetih (Kasım 1202; gün bu oturumda yok)."
   },
   {
    "f": "1242-01-01",
    "t": "1247-01-01",
    "d": "__BOSLUK__",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'Altri brevi distacchi, come quelli del 1242-47, ... non pregiudicano in alcun modo la continuità del regime dei dogi'",
    "ic_not": "1242-1247 'distacco' (Venedik'ten kopuş): sahibi EI'de adlandırılmaz (Macar-Hırvat kralı Bela IV'ün 1242'de Zadar'a sığınması bilgisi bu oturumda AÇILMADI). EI süreklilik der; dönem BOŞLUK + beyan. Boşluk doldurma merdiveni: ①TDV (Zara maddesi yok) ②LZMK 'Zadar' (yalnız 'XIII. i XIV. st. podignuto je više pobuna') ③Macar kaynakları AÇILAMADI. Abi merkez yok."
   },
   {
    "f": "1247-01-01",
    "t": "1281-01-01",
    "d": "venedik",
    "kesinlik": "yil",
    "kaynak": "EI 'Zara' (https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/): 'come quelli del 1242-47'",
    "ic_not": "Atlas Zadar'ı 1281-01-01'de 'venedik' (enklav) ile başlatır; aynı sahip."
   }
  ],
  "olay": [
   {
    "t": "-0383-01-01",
    "gun": "MÖ 384",
    "k": "diger",
    "b": "Pharos (Hvar) adalıları Iadastinoi'yi yener (stel): Zadar halkının ilk tarihî anılışı",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "che è la prima menzione storica degli abitanti di Zara"
   },
   {
    "t": "-0128-01-01",
    "gun": "MÖ 129",
    "k": "diger",
    "b": "Konsül C. Sempronius Tuditanus'un Liburnia seferi: Liburnlar Roma'ya haraç öder (fetih değil; Zara Roma'ya yönelir)",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "dopo la marcia del console C. Sempronio Tuditano (129 a. C.)"
   },
   {
    "t": "-0026-01-13",
    "gun": "MÖ 27 (13 Ocak)",
    "k": "diger",
    "b": "künye geçişi: Roma Cumhuriyeti -> İmparatorluk (Octavianus'a Augustus adı)",
    "kaynak": "Ovidius, Fasti 1.587-590 (https://www.thelatinlibrary.com/ovid/ovid.fasti1.shtml); yıl (MÖ 27) bu oturumda yeniden doğrulanmadı",
    "tanik": "et tuus Augusto nomine dictus avus"
   },
   {
    "t": "0476-01-01",
    "gun": "476",
    "k": "diger",
    "b": "künye geçişi: Batı Roma'nın sonu (EI: Zara sonrasında çiçeklenmeye devam etti; Dalmaçya Julius Nepos'tan Odoacer'e)",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "dopo il tramonto dell'Impero d'Occidente (476)"
   },
   {
    "t": "0493-01-01",
    "gun": "493",
    "k": "fetih",
    "b": "Doğu Got Teodorik İtalya'ya hâkim olur; Zara Odoacer'den Ostrogot krallığına geçer (EI: 'regni italici di Odoacre e di Teodorico')",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "sotto i regni italici di Odoacre e di Teodorico"
   },
   {
    "t": "0540-01-01",
    "gun": "540 (verso il 540)",
    "k": "fetih",
    "b": "Zara Gotlardan alınıp imparatorluğa (Bizans) geri verilir",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "Verso il 540 fu tolta ai Goti e restituita all'impero"
   },
   {
    "t": "0805-01-01",
    "gun": "805-806",
    "k": "diger",
    "b": "Charlemagne sarayında Dalmaçya'yı Zadar'lı dük Paolo ve piskopos Donato temsil eder: kısa Frank hâkimiyeti dönemi",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "nell'805-806, quando alla corte di Carlomagno la provincia è rappresentata dal duca Paolo"
   },
   {
    "t": "0812-01-01",
    "gun": "812",
    "k": "antlasma",
    "b": "Aachen Antlaşması: Zadar Bizans'a bırakılır",
    "kaynak": "LZMK 'Zadar', https://www.enciklopedija.hr/clanak/zadar",
    "tanik": "mirom u Aachenu (812) grad pripao Bizantu"
   },
   {
    "t": "1000-01-01",
    "gun": "1000",
    "k": "fetih",
    "b": "Venedik dojesi Orseolo II Zadar'ı alır; Zadar dojeye haraç öder (doje 'Dalmaçya dükü' unvanını alır)",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "nel 1000 fa omaggio al doge"
   },
   {
    "t": "1024-01-01",
    "gun": "1024",
    "k": "isyan",
    "b": "Zadar Venedik egemenliğinden çözülür ve Bizans üst egemenliğine döner",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "Ma già nel 1024 si scuote"
   },
   {
    "t": "1050-01-01",
    "gun": "1050",
    "k": "diger",
    "b": "Zadar kendi isteğiyle Hırvat hükümdarının egemenliğini tanır",
    "kaynak": "LZMK 'Zadar', https://www.enciklopedija.hr/clanak/zadar",
    "tanik": "se 1050. grad samovoljno podvrgnuo vlasti hrvatskoga vladara"
   },
   {
    "t": "1105-01-01",
    "gun": "1105",
    "k": "diger",
    "b": "Zadar Hırvat-Macar kralı Koloman'ın egemenliğini tanır",
    "kaynak": "LZMK 'Zadar', https://www.enciklopedija.hr/clanak/zadar",
    "tanik": "Zadar je 1105. priznao vlast hrvatsko-ugarskoga kralja Kolomana"
   },
   {
    "t": "1115-01-01",
    "gun": "1115",
    "k": "fetih",
    "b": "Venedik dojesi Ordelafo Falier Zadar'ı alır",
    "kaynak": "LZMK 'Zadar', https://www.enciklopedija.hr/clanak/zadar",
    "tanik": "1115. zauzeo ga je mletački dužd Ordelafo Faliero"
   },
   {
    "t": "1180-01-01",
    "gun": "1180",
    "k": "diger",
    "b": "Zadar Hırvat-Macar kralı III. Bela'nın egemenliğini kabul eder",
    "kaynak": "LZMK 'Zadar', https://www.enciklopedija.hr/clanak/zadar",
    "tanik": "Godine 1180. Zadrani su prihvatili vlast hrvatsko-ugarskoga kralja Bele III."
   },
   {
    "t": "1202-01-01",
    "gun": "1202",
    "k": "fetih",
    "b": "IV. Haçlı Seferi ordusuyla Doje Enrico Dandolo Zadar'ı alıp yıkar; Venedik hâkimiyeti 'kesin' olarak kurulur",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "Enrico Dandolo, coadiuvato dalle genti della IV crociata"
   },
   {
    "t": "1242-01-01",
    "gun": "1242-1247",
    "k": "isyan",
    "b": "Zadar Venedik'ten kopar ('distacco' 1242-47)",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "come quelli del 1242-47"
   },
   {
    "t": "1247-01-01",
    "gun": "1242-1247 (1247)",
    "k": "fetih",
    "b": "Zadar Venedik'e geri döner (distacco sonu)",
    "kaynak": "EI 'Zara', https://www.treccani.it/enciclopedia/zara_(Enciclopedia-Italiana)/",
    "tanik": "come quelli del 1242-47"
   }
  ],
  "ic_not": "Çok kaynaklı ama çoğu yıl hassasiyetinde. ÇELİŞKİLER: (1) LZMK Zadar 998-1000 Venedik fethini ve ardından Hırvat tanımayı yazar, EI 1000 omaggio + 1024 Bizans'a dönüş; dönem sınırları EI'ye göre. (2) 1115-1180 arası Venedik/Macar dönemi EI 'fluttuare', LZMK 1115 fetih + 1180 Macar tanıma: dönem Venedik. Atlas Zadar'ı 1281'de 'venedik' (enklav, 1281-1358) ile başlatır; zincir aynı sahiple biter. TDV 'Zadar'/'Zara': 'zara' slug'ı 1788 içerik/23 başlık arama sayfası (başka Zara'lar); şehir maddesi yok. Zadar kuruluşu (kolonya MÖ 35-33) kuruluş tarihi vermediği için kur null."
 },
 {
  "id": "zaragoza",
  "ad": "Zaragoza",
  "atlas_ad": "Zaragoza",
  "lat": 41.649,
  "lon": -0.888,
  "kat1900": 2,
  "adlar": [
   "Salduba",
   "Caesaraugusta (Caesar Augusta)",
   "Sarakusta",
   "Medînetülbeyzâ",
   "Zaragoza"
  ],
  "ilk": {
   "t": "-0023-01-01",
   "gun": "MÖ 24",
   "nicelik": "kurulus",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta (Sarakusta), madde başı",
   "tanik": "Milâttan önce 24 yılında Roma İmparatoru Augustus tarafından",
   "ic_not": "TDV: Augustus, 'İberler’e ait tarihî Salduba kalıntıları üzerinde askerî bir üs olarak' kurdu; yani Roma kolonisi Caesaraugusta bir İber yerleşiminin (Salduba) üstündedir. Salduba'ya tarihli yazılı tanık bu oturumda açılmadı (Strabon 3.4.10 yalnız 'On the Iberus is a city called Caesar Augusta' der — LacusCurtius Loeb); bu yüzden kuruluş olarak Caesaraugusta alındı, Salduba öncesi 'bulunamadı'. MÖ 24 → astronomik -0023."
  },
  "kur": {
   "t": "-0023-01-01",
   "gun": "MÖ 24",
   "kesinlik": "yil",
   "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta (Sarakusta), madde başı",
   "tanik": "Milâttan önce 24 yılında Roma İmparatoru Augustus tarafından"
  },
  "ark": null,
  "bit": null,
  "sahip": [
   {
    "f": "-0023-01-01",
    "t": "0395-01-17",
    "d": "roma-imp",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta; Livius.org 'Augustus' + 'Theodosius I'",
    "ic_not": "Roma kolonisi olarak kurulduğu günden Batı Roma'ya künye geçişine kadar Roma İmparatorluğu."
   },
   {
    "f": "0395-01-17",
    "t": "0466-01-01",
    "d": "bati-roma",
    "kesinlik": "gun",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "ic_not": "t 'Isidore Era DIV' yılından (MS 466): Batı Roma künyesi 476-08-28'de biter, burada daha erken kesildi. Svevler Zaragoza'yı bir ara aldı (Treccani 'Spagna': 'poterono ... giungere a conquistare Saragozza', 5. yy ortası, tarihsiz) — süre bilinmiyor, dönem AÇILMADI."
   },
   {
    "f": "0466-01-01",
    "t": "0714-01-01",
    "d": "vizigot",
    "kesinlik": "yil",
    "kaynak": "Isidorus Hispalensis, Historia Gothorum 34 (https://www.thelatinlibrary.com/isidore/historia.shtml); Treccani 'Spagna' (https://www.treccani.it/enciclopedia/spagna_(Enciclopedia-Italiana)/)",
    "ic_not": "Isidorus: Era DIV (= MS 466, İspanya Era'sı − 38; Euricus'un tahta çıkış yılı) başlığı altında 'nec mora' sonrası Pampilona ve Caesaraugusta'nın alınışı. 'f en geç tanıktan' değil, kaynağın verdiği yıl; Euricus ölümü (Era DXXI = 483) en geç sınırdır. Vizigot künyesi 711'de biter; Zaragoza'nın Müslüman fethi 95/714 olduğu için dönem 714'e uzatıldı (hayalet uyarısı beklenir). Treccani: 'verso il 470 ... Eurico' (≈470) — yıl farkı beyan edilir."
   },
   {
    "f": "0714-01-01",
    "t": "0756-05-15",
    "d": "emevi",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta; endulus (Fetih ve valiler dönemi 711-756)",
    "ic_not": "Emevî valileri dönemi: Emevî Hilâfeti künyesi 750-08-05'te biter, Endülüs valileri 756'ya kadar sürer (Yûsuf el-Fihrî 'Emevîler’in son genel valisi', TDV). Künye GENİŞLET önerisi. Hicrî 95 ∩ 714 = 714-01-01 (TDV 'Mûsâ b. Nusayr’ın fethettiği', 95/714)."
   },
   {
    "f": "0756-05-15",
    "t": "1031-01-01",
    "d": "endulus-emevi",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus; abdurrahman-i; sarakusta",
    "ic_not": "Tücîbî valileri (276/889'dan) Emevî adına yönetir; Münzir b. Yahyâ 400/1010'dan sonra 'hükümdarlığını ilân eder' (TDV sarakusta, günü yok): fiilî bağımsızlık 1010'dan sonra başlar ama TDV 'Endülüs Emevî Devleti yıkıldı' (1031) diyerek devlet sonunu verir; sınır devlet sonuna konuldu (beyanlı yaklaşıklık)."
   },
   {
    "f": "1031-01-01",
    "t": "1039-09-23",
    "d": "endulus-tavaif",
    "kesinlik": "yil",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus (Mülûkü’t-tavâif 1031-1090); sarakusta",
    "ic_not": "Tücîbî hânedanı (Münzir b. Yahyâ, Yahyâ, II. Münzir) taifa olarak sürer; II. Münzir öldürülünce Hûdîler. Künye 'endulus-tavaif' ömrü 1009-1110."
   },
   {
    "f": "1039-09-23",
    "t": "1110-01-01",
    "d": "zaragoza-hudiler",
    "kesinlik": "gun",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta; hudiler",
    "ic_not": "f: hicrî 431 ∩ 1039 = 1039-09-23 (kesişimin ilk günü, tablo takvimi, Jülyen); künye f=1039-01-01. t: TDV 'Murâbıtlar’ın Endülüs’te hâkimiyet altına aldıkları son merkez (503/1110)'; Ahmed el-Müstaîn'in ölümü 1 Receb 503 / 24 Ocak 1110, sonra Hûdî istiklâli sona erer. Atlas 1110-01-01 (yıl) ile dikiş; olay 24 Ocak (23 gün)."
   }
  ],
  "olay": [
   {
    "t": "-0023-01-01",
    "gun": "MÖ 24",
    "k": "kurulus",
    "b": "Augustus, İber Salduba kalıntıları üzerinde Caesaraugusta'yı askerî üs olarak kurar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta",
    "tanik": "Milâttan önce 24 yılında Roma İmparatoru Augustus tarafından"
   },
   {
    "t": "0395-01-17",
    "gun": "17 Ocak 395",
    "k": "diger",
    "b": "künye geçişi: Roma İmparatorluğu → Batı Roma (Theodosius I ölür, imparatorluk Arcadius/Honorius arasında bölünür).",
    "kaynak": "Livius.org (J. Lendering), 'Theodosius I', https://www.livius.org/articles/person/theodosius-i/",
    "tanik": "17 January 395: natural death"
   },
   {
    "t": "0466-01-01",
    "gun": "Era DIV = MS 466",
    "k": "fetih",
    "b": "Vizigot kralı Euricus, Pampilona ve Caesaraugusta'yı alır, 'Yukarı Hispania'yı (Tarraconensis) boyunduruğuna sokar.",
    "kaynak": "Isidorus, Historia Gothorum 34 (https://www.thelatinlibrary.com/isidore/historia.shtml)",
    "tanik": "qui captam inde Pampilonam et Caesaraugustam, misso exercitu, capit"
   },
   {
    "t": "0714-01-01",
    "gun": "95 H / 714",
    "k": "fetih",
    "b": "Mûsâ b. Nusayr Sarakusta'yı fetheder; 404 yıl sürecek İslâm hâkimiyeti başlar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta",
    "tanik": "95 (714) yılında Mûsâ b. Nusayr’ın fethettiği Sarakusta"
   },
   {
    "t": "0778-01-01",
    "gun": "161 H / 778",
    "k": "kusatma",
    "b": "Frank Kralı Charlemagne Sarakusta önüne gelir, yenilerek geri çekilir; sahiplik değişmez.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta",
    "tanik": "Frank Kralı Charlemagne, Sarakusta önlerine geldiyse de yenilerek geri çekildi (161/778)"
   },
   {
    "t": "0756-05-15",
    "gun": "15 Mayıs 756",
    "k": "diger",
    "b": "künye geçişi: Emevî valileri (Yûsuf el-Fihrî) → bağımsız Endülüs Emevî Emirliği; I. Abdurrahman Musâre savaşını kazanır, Kurtuba'ya girer (11 Mayıs'ta karargâh, 15 Mayıs sabahı saldırı).",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/abdurrahman-i (HAKKI DURSUN YILDIZ)",
    "tanik": "15 Mayıs sabahı Yûsuf el-Fihrî’nin üzerine saldırdı"
   },
   {
    "t": "0889-01-01",
    "gun": "276 H / 889",
    "k": "idari",
    "b": "Ebû Yahyâ Muhammed et-Tücîbî vali atanır; Emevî sonuna dek sürecek Tücîbîler dönemi başlar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta",
    "tanik": "276 (889) yılında Ebû Yahyâ Muhammed et-Tücîbî’nin vali tayin edilmesiyle"
   },
   {
    "t": "1031-01-01",
    "gun": "1031",
    "k": "diger",
    "b": "künye geçişi: Endülüs Emevî Devleti (Kurtuba Hilâfeti) yıkılır; mülûkü't-tavâif (tâife emirlikleri) dönemi başlar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/endulus (Endülüs; Emevîler 756-1031)",
    "tanik": "Böylece 756’da bağımsız bir emirlik olarak kurulan Endülüs Emevî Devleti yıkılmış oldu (422/1031)"
   },
   {
    "t": "1039-09-23",
    "gun": "431 H / 1039",
    "k": "fetih",
    "b": "Süleyman b. Hûd Sarakusta'yı zaptedip Hûdîler hânedanını kurar.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sarakusta; hudiler",
    "tanik": "Hûdîler adıyla bir devlet kuran Süleyman b. Hûd"
   },
   {
    "t": "1110-01-24",
    "gun": "24 Ocak 1110",
    "k": "taht",
    "b": "Hûdî emîri Ahmed el-Müstaîn ölür; hemen ardından Murâbıt ordusu Sarakusta'ya yönelir, halk Murâbıtlar'ı davet eder: Hûdî istiklâli biter, şehir Murâbıtlar'ın.",
    "kaynak": "TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/hudiler; sarakusta",
    "tanik": "Böylece Hûdîler’in istiklâli sona ermiş oldu."
   }
  ],
  "ic_not": "Zaragoza kuruluşu TDV'ye göre MÖ 24 (Roma kolonisi, Salduba üstünde). Çok dilli ek kaynak: Strabon (Loeb, LacusCurtius) 'Caesar Augusta' adını verir; Princeton Encyclopedia of Classical Sites 'Caesaraugusta' maddesi Perseus 503 verdi (açılamadı). Dönem sınırı notları: Vizigot 466 (Isidorus) ↔ Treccani ≈470; Hûdî başlangıcı hicrî 431 kesişimi 1039-09-23 (TDV 'Hûdîler hânedanı 431/1039'). Zincir atlas ilk gününde (1110-01-01 Murâbıt) biter. Çift teyit YOK."
 }
];
