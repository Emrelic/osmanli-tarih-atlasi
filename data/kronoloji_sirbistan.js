// =====================================================================
// SIRBİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026)
// Oturum: SIRBİSTAN KRONOLOJİ · koordinatör: OSMANGAZI
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    koordinatör bağlar. Bu dosya `devletler.js`e DOKUNMAZ.
//
// ── KAPSAM — DÖRT KÜNYE, ÜÇ DEĞİL ─────────────────────────────────────
// Şartname üç künyeden bahsediyordu (sirbistan-nemanjic · sirbistan-
// prensligi · sirbistan-kralligi); ölçüm DÖRDÜNCÜSÜNÜ buldu ve
// koordinatöre bildirildi (M-1020): `sirp-despotlugu` (1402-1459-06-20).
// Dördünün `devletler.js`teki `ozet` alanları birbirini açıkça zincirler
// ("Devam: bkz. [[sirp-despotlugu]]" → "...4 asırlık kopukluk var" →
// [1459-1804 BOŞLUK, KASITLI — Osmanlı doğrudan idaresi, ayrı Sırp
// devleti yok] → sirbistan-prensligi → sirbistan-kralligi). Bu dosya
// 1217-1918 arası dört evreyi de kapsıyor.
//
// 1459-1804 arası (345 yıl) için ayrı bir devlet kimliği YOKTUR ve
// KASITLI: `sirp-despotlugu` künyesinin kendi özeti "modern Sırbistan'la
// 4 asırlık kopukluk var" diyor. Bu pencerede yazılan maddeler (Peç
// Patrikliği, Büyük Göç, Belgrad Antlaşması) Sırp bakış açısından
// önemlidir ama bir SIRP DEVLETİ yoktur — metnin kendisi bunu açıkça
// söylüyor, `d:` alanına devlet uydurulmadı.
//
// ── ŞEMA ÇELİŞKİSİ — bildirildi (M-1022), KORPUS GELENEĞİ izlendi ─────
// Şartname `d:` alanını "devlet kimliği" olarak tanımlıyordu. Var olan
// 25 `kronoloji_*.js` dosyasının TAMAMI tarandı: `d:` HİÇBİRİNDE devlet
// kimliği değil, 2-4 cümlelik AÇIKLAMA METNİDİR (olaylar*.js'teki `d:`
// ile aynı gelenek) ve `arac/denetle_kronoloji.py` bu alanı hiç
// denetlemiyor. Bu dosya KORPUS GELENEĞİNE uydu: `d:` açıklama metni,
// hangi Sırp siyasi yapısının (Nemanjić / Despotluk / devletsiz-Osmanlı
// dönemi / Prenslik / Krallık) geçerli olduğu METNİN İÇİNDE açıkça
// belirtiliyor.
//
// ── `dunya` ALANI — PAYLAŞILAN OLAYLARDA DEVRALINDI ───────────────────
//   1389-06-15 I. Kosova Savaşı        dunya:4  (kronoloji_bizans.js)
//   1448-10-17 II. Kosova Savaşı       dunya:3  (kronoloji_macaristan.js)
//   1739-09-18 Belgrad Antlaşması      dunya:3  (kronoloji_habsburg.js)
//     ⚠️ kronoloji_kirim.js AYNI olaya dunya:2 veriyor — İKİ DOSYA
//     BİRBİRİYLE ÇELİŞİYOR (benim yazdığım değil, var olan bir kusur).
//     Bildirildi (M-1021); habsburg'un değeri alındı çünkü coğrafi
//     bağlam (Balkan/Tuna sınırı) oraya daha yakın.
//   1829-09-14 Edirne Antlaşması       dunya:3  (kronoloji_rusya.js)
//   1878-03-03 Ayastefanos Antlaşması  dunya:3  (kronoloji_rusya.js)
//   1878-07-13 Berlin Antlaşması       dunya:4  (kronoloji_rusya.js ·
//                                       kronoloji_almanya.js ·
//                                       kronoloji_habsburg.js ·
//                                       kronoloji_ingiltere.js — DÖRDÜ
//                                       DE 4'te birleşiyor)
//   1908-10-06 Bosna-Hersek ilhak krizi dunya:4 (kronoloji_habsburg.js)
//     ⚠️ habsburg dosyası bu günü "GÜN DOĞRULANMADI" diye işaretlemiş;
//     aynı çekince burada da taşınıyor.
//
// ── TARİH ÇELİŞKİLERİ — bildirildi (M-1021), TDV/araştırılmış tarih
//    kullanıldı, düzeltme BU DOSYADA YAPILMADI (devletler.js ve
//    olaylar_ek.js benim dosyam değil) ────────────────────────────────
//   Semendire'nin ilk düşüşü: devletler.js `1439-08-18` diyor,
//     olaylar_ek.js `1439-08-27` diyor. Duşan-dönemi tarihleri
//     (1346-04-16 · 1355-12-20 · 1371-09-26) devletler.js'te akademik
//     literatürle BİREBİR eşleştiği için o künyenin dikkatle
//     araştırıldığı görüldü ⇒ burada devletler.js'in `1439-08-18`
//     tarihi kullanıldı.
//   Özerklik fermanı: devletler.js `sirbistan-prensligi` künyesi
//     `1830-08-30` diyor; TDV `sirbistan` maddesinin kendi cümlesi
//     "17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar
//     bir idare elde etti" diyor. `CLAUDE.md §4`: TDV çelişirse TDV
//     esastır ⇒ bu dosyada `1830-10-17` kullanıldı.
//
// ── KAYNAK (`CLAUDE.md §4`) ────────────────────────────────────────────
// TDV birincil, HTTP koduyla ve gövde okunarak doğrulandı:
//   CANLI (200, gövde okundu) → sirbistan · kosova · semendire ·
//     belgrad · nis · uskup · karadag · berlin-antlasmasi ·
//     ayastefanos-antlasmasi
//   ÖLÜ (302) → karayorgi · milos-obrenovic · karadorde-petrovic ·
//     obrenovic · birinci-sirp-isyani · ikinci-sirp-isyani ·
//     stefan-dusan · sirp-despotlugu · nemanya · lazar-hrebeljanovic ·
//     pec-patrikligi
//   ⇒ Sırp hükümdar/isyan liderleri için TDV'nin müstakil maddesi YOK;
//     anlatı genel `sirbistan` maddesine dağılmış (macaristan.js'teki
//     Hunyadi János vakasının aynısı). `kaynak:` alanına `TDV \`sirbistan\`
//     ...` diye yazıldı.
// TDV'nin kapsamadığı ayrıntılar (1594 Banat ayaklanması BULUNAMADI —
// dahil edilmedi; 1903 Mayıs Darbesi TDV'de yok, akademik kaynağa
// dayandı) `CLAUDE.md §4`teki "taneciklik boşluğu" kuralına göre
// işaretlendi: standart akademik referans (B. Jelavich, "History of the
// Balkans", Cambridge University Press, 1983 — 19. yüzyıl Sırp
// tarihinin standart İngilizce el kitabı) kullanıldı, `kaynak:` alanında
// AÇIKÇA belirtildi.
//
// ── YOĞUNLUK — kota DEĞİL ──────────────────────────────────────────────
// 1594 Banat ayaklanması ve 1833 altı nahiye ilhakı gibi bazı bilinen
// olaylar bu turda BULUNAMADI/atlandı (kaynak hızlı doğrulanamadı);
// dolgu yapılmadı, sayı kaynağın verdiği kadar.
// =====================================================================

window.KRONOLOJI_SIRBISTAN = [

// ───────────────────────── NEMANJİÇ KRALLIĞI/İMPARATORLUĞU (1217-1402)

{ t:"1217-01-01", b:"Sırbistan Krallığı ilan edildi (Stefan İlk-Taçlı)", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","siyasi"],
  yer_id:"",
  d:"Stefan Nemanja'nın oğlu Stefan, papadan aldığı taçla kendini kral ilan etti ve Nemanjić hanedanının krallığını kurdu. Bu tarih Sırp devlet geleneğinin başlangıcı sayılır ve devletler.js'teki `sirbistan-nemanjic` künyesinin f: tarihidir.",
  kaynak:"TDV `sirbistan`: '1217'de burada Sırbistan Krallığı ilân edildi.'" },

{ t:"1331-01-01", b:"Stefan Duşan tahta çıktı", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Stefan Duşan'ın tahta çıkışıyla Sırp Krallığı'nın en geniş sınırlarına ulaşacağı ve imparatorluğa dönüşeceği dönem başladı; Bizans'ın Balkanlar'daki zayıflığından yararlanarak Makedonya, Epir ve Teselya'ya doğru genişledi.",
  kaynak:"TDV `sirbistan` — genel hanedan anlatısı; tahta çıkış yılı devletler.js `sirbistan-nemanjic` künyesiyle doğrulandı." },

{ t:"1346-04-16", b:"Duşan imparatorluk tacı giydi (Üsküp meclisi)", tur:"hukumdar",
  onem:5, dunya:3, kapsam:"dis", etiket:["hukumdar","siyasi"],
  yer_id:"Üsküp",
  d:"Duşan kendini 'Sırpların ve Rumların çarı' ilan ederek Bizans'a rakip bir imparatorluk kurdu, başkentini Serez'e taşıdı. TDV maddesi olayı '1345'te' verip gün belirtmiyor; taç giyme töreninin gününü (Paskalya, 16 Nisan 1346, Üsküp) standart akademik literatür kesinleştiriyor.",
  kaynak:"TDV `sirbistan`: '1345'te kendisini Sırplar'ın ve Yunanlılar'ın çarı ve hükümdarı ilân etti.' Gün: akademik (J.V.A. Fine, The Late Medieval Balkans, 1994) — devletler.js künyesiyle de örtüşüyor." },

{ t:"1355-12-20", b:"Duşan'ın ani ölümü, imparatorluğun parçalanması başladı", tur:"bolunme",
  onem:4, dunya:2, kapsam:"ic", etiket:["olum","bolunme"],
  yer_id:"",
  d:"Duşan'ın beklenmedik ölümüyle güçlü merkezî otorite çöktü; imparatorluk bölgesel beyliklere (Vukašin Mrnjavčević, Lazar Hrebeljanović ve diğerleri) parçalanmaya başladı. Bu parçalanma on altı yıl sonra Çirmen'de, otuz dört yıl sonra Kosova'da Osmanlı karşısındaki toplu direnç zaafının temelini oluşturdu.",
  kaynak:"TDV `sirbistan`: devletin '...Duşan'ın ölümüyle parçalandı' (devletler.js `sirbistan-nemanjic` özeti); gün akademik literatürle doğrulandı." },

{ t:"1371-09-26", b:"Çirmen (Meriç) Savaşı — ağır yenilgi", tur:"savas",
  onem:4, dunya:3, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"Parçalanmış Sırp beylikleri Vukašin ve Uglješa kardeşlerin ordusu, Meriç nehri kıyısında Osmanlı akıncı kuvvetlerine ağır bir yenilgiye uğradı; Makedonya'daki Sırp direnişinin belkemiği burada kırıldı ve Kosova'ya giden yol açıldı.",
  kaynak:"TDV `sirbistan`: '1371 Çirmen ve 1389 Kosova savaşları ile Osmanlı ordularına karşı yenilgiye uğrayan Sırplar...' Gün akademik kaynaktan (26 Eylül 1371, standart tarih)." },

{ t:"1389-06-15", b:"I. Kosova Savaşı — Sırp Krallığı Osmanlı tâbiiyetine girdi", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["savas","ittifak"],
  yer_id:"",
  d:"Knez Lazar önderliğindeki Balkan ittifakı Kosova Ovası'nda I. Murad karşısında yenildi; I. Murad savaş meydanında öldürüldü, Lazar da esir düşüp idam edildi. Yenilgiyle Sırp Krallığı Osmanlı'ya haraca bağlandı ve bu tarih Sırp millî hafızasında (Kosova destanı, Vidovdan/Aziz Vitus günü anması) merkezi bir yer tutar. dunya puanı kronoloji_bizans.js'teki aynı olayla eşleştirildi.",
  kaynak:"TDV `kosova`: 'Osmanlılar Balkanlar'da daha kalıcı olarak yerleşmiş ve Sırp Krallığı Osmanlı tâbiiyetine girmişti.'" },

// ───────────────────────── SIRP DESPOTLUĞU (1402-1459)

{ t:"1402-01-01", b:"Sırp Despotluğu'nun kuruluşu (Stefan Lazareviç)", tur:"kurulus",
  onem:4, dunya:2, kapsam:"ic", etiket:["kurulus","siyasi"],
  yer_id:"",
  d:"Ankara Savaşı'nda (1402) Osmanlı yenilgisinin doğurduğu Fetret Devri'nden yararlanan Stefan Lazareviç, Bizans'tan 'despot' unvanını aldı ve Sırp Despotluğu'nu kurdu; başkent önce Belgrad oldu. Bu, Nemanjiç krallığının Osmanlı vasallığı altında dönüşmüş devamıdır (devletler.js `sirp-despotlugu` künyesi).",
  kaynak:"TDV `sirbistan` genel anlatısı + akademik (Fine, The Late Medieval Balkans) — gün TDV'de verilmiyor, YYYY-01-01." },

{ t:"1427-01-01", b:"Đurađ Branković despot oldu, başkent Semendire'ye taşındı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","idari"],
  yer_id:"Semendire",
  d:"Stefan Lazareviç'in ölümü üzerine yeğeni Đurađ Branković despot oldu; Osmanlı baskısı karşısında daha savunmaya elverişli Semendire'yi (Smederevo) yeni başkent yaptı ve burada güçlü bir kale inşa ettirdi.",
  kaynak:"TDV `semendire` maddesi genel anlatısı + devletler.js `sirp-despotlugu` künyesi." },

{ t:"1439-08-18", b:"Semendire'nin ilk düşüşü", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kayip","kusatma"],
  yer_id:"Semendire",
  d:"II. Murad'ın kuşatmasıyla despotluğun başkenti Semendire ilk kez Osmanlı'ya düştü; Sırbistan geçici olarak doğrudan ilhak edildi. Beş yıl sonra Edirne-Segedin Antlaşması'yla iade edilecektir. Gün devletler.js künyesinden alındı; olaylar_ek.js aynı olayı 1439-08-27 olarak veriyor — çelişki bildirildi (M-1021), düzeltme bu dosyanın kapsamı dışında.",
  kaynak:"TDV `semendire` + devletler.js `sirp-despotlugu` künyesi (1439-08-18)." },

{ t:"1444-08-15", b:"Edirne-Segedin Antlaşması ile Semendire ve despotluk toprakları iade edildi", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kazanc"],
  yer_id:"Semendire",
  d:"II. Murad ile Macar Kralı I. Ulászló arasındaki barışın bir parçası olarak Sırp Despotluğu'nun toprakları Đurađ Branković'e iade edildi; despotluk kısa bir soluklanma dönemine girdi. Bu barış aynı yıl sonunda Varna'da Macar tarafınca bozulacaktır.",
  kaynak:"devletler.js `sirp-despotlugu` künyesi + TDV `semendire`." },

{ t:"1448-10-17", b:"II. Kosova Savaşı — despotluğun tarafsızlığı", tur:"savas",
  onem:2, dunya:3, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"Hunyadi János'un Osmanlı'ya karşı düzenlediği haçlı seferi, Sırp Despotluğu topraklarından geçerken Đurađ Branković'in desteğini ALAMADI; despotluk, 1444'te iade edilen topraklarını yeniden tehlikeye atmamak için tarafsız kaldı ve hatta bazı kaynaklara göre Macar ordusunun geçişini engelledi. II. Murad'ın zaferiyle Osmanlı'nın Balkanlar'daki konumu kalıcılaştı. dunya puanı kronoloji_macaristan.js'teki aynı olayla eşleştirildi.",
  kaynak:"kronoloji_macaristan.js (1448-10-17, dunya:3) + akademik (Fine) — despotluğun tarafsızlığı için." },

{ t:"1459-06-20", b:"Semendire'nin düşüşü — Sırp Despotluğu'nun sonu", tur:"son",
  onem:5, dunya:3, kapsam:"dis", etiket:["toprak-kayip","son"],
  yer_id:"Semendire",
  d:"Fâtih Sultan Mehmed'in kuşatmasıyla Semendire teslim oldu ve Sırp Despotluğu ortadan kalktı; Sırbistan bir Osmanlı sancağı hâline geldi. Bu tarihten 1804'e (Birinci Sırp Ayaklanması) kadar 345 yıl boyunca ayrı bir Sırp devleti YOKTUR — devletler.js'in kendi ifadesiyle 'modern Sırbistan'la 4 asırlık kopukluk var.'",
  kaynak:"TDV `sirbistan`: '1459'da Smederevo'nun (Semendire) ele geçirilişiyle Sırp Despotluğu ortadan kaldırıldı.'" },

// ───────────────────────── OSMANLI DOĞRUDAN İDARESİ (1459-1804) — ayrı Sırp devleti YOK

{ t:"1463-01-01", b:"Peç (İpek) Patrikliği kaldırıldı", tur:"din",
  onem:3, dunya:1, kapsam:"ic", etiket:["din"],
  yer_id:"",
  d:"Sırp Ortodoks Kilisesi'nin bağımsız patrikliği kaldırıldı; Sırp kiliseleri doğrudan Fener Rum Ortodoks Patrikhânesi'ne bağlandı. Bu dönemde Sırbistan'ın kendi devleti yoktur; kilise, Sırp kimliğinin sürdüğü tek kurumsal çatıydı.",
  kaynak:"TDV `sirbistan` — gün verilmiyor, YYYY-01-01." },

{ t:"1557-01-01", b:"Peç Patrikliği ihya edildi (Sokollu Mehmed Paşa)", tur:"din",
  onem:4, dunya:2, kapsam:"ic", etiket:["din"],
  yer_id:"",
  d:"Sırp asıllı Sadrazam Sokollu Mehmed Paşa'nın da rolüyle, doksan dört yıl önce kaldırılmış olan Peç Patrikliği yeniden ihya edildi; ilk patrik Sokollu'nun akrabası Makarije Sokolović oldu. İhya, Sırp Ortodoks kimliğinin Osmanlı idaresi altında kurumsal olarak sürmesini sağladı.",
  kaynak:"TDV `sirbistan`: 'XVI. yüzyılın ortalarında Sokullu Mehmed Paşa'nın da rolüyle daha önce kaldırılmış olan Peç (İpek) patrikliği yeniden ihya edildi (1557).'" },

{ t:"1690-01-01", b:"Büyük Sırp Göçü (Arsenije III Crnojević)", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"ic", etiket:["goc","din"],
  yer_id:"",
  d:"Osmanlı-Avusturya savaşında (1683-1699) Habsburg tarafını tutan Sırplar, savaş Osmanlı lehine döndüğünde Osmanlı misillemesinden korkarak Patrik Arsenije III Crnojević önderliğinde Kosova ve çevresini terk edip kuzeye, Habsburg topraklarındaki Karlofça'ya göç etti (tahminen on binlerce aile). Göç, Kosova'nın etnik demografisini kalıcı biçimde değiştirdi ve modern Sırp-Arnavut anlaşmazlığının köklerinden biri sayılır.",
  kaynak:"TDV `sirbistan`: 'Patrik Arsenije III. Crnojević, 1690 yılında büyük bir grupla Kosova'yı terkederek Karlofça'ya göç etti.' Gün verilmiyor, YYYY-01-01." },

{ t:"1739-09-18", b:"Belgrad Antlaşması — kuzey Sırbistan yeniden Osmanlı'ya döndü", tur:"toprak-kazanc",
  onem:3, dunya:3, kapsam:"dis", etiket:["antlasma","toprak-kazanc"],
  yer_id:"Belgrad",
  d:"1717-1739 arası yirmi iki yıl Habsburg idaresinde kalan Belgrad ve kuzey Sırbistan, Osmanlı-Avusturya savaşını bitiren Belgrad Antlaşması'yla yeniden Osmanlı'ya geçti. dunya puanı kronoloji_habsburg.js'teki aynı olayla eşleştirildi; kronoloji_kirim.js aynı olaya dunya:2 veriyor — iki dosya arasındaki bu çelişki bildirildi (M-1021), burada habsburg değeri alındı.",
  kaynak:"TDV `avusturya` (kronoloji_habsburg.js'te alıntılanan): 'Avusturya Pasarofça'da kazandığı yerleri…ve Belgrad'ı geri vermiştir.'" },

{ t:"1766-01-01", b:"Peç Patrikliği kalıcı olarak kaldırıldı", tur:"din",
  onem:3, dunya:1, kapsam:"ic", etiket:["din"],
  yer_id:"",
  d:"Peç Patrikliği bu kez kalıcı olarak kaldırıldı ve bölgedeki Sırp kiliseleri yeniden Fener Rum Ortodoks Patrikhânesi'ne bağlandı; Sırp kilisesinin kurumsal özerkliği 1832'ye (Sırp Ortodoks Kilisesi'nin özerklik kazanmasına) kadar kesintiye uğradı.",
  kaynak:"TDV `sirbistan`: '1766'da kaldırılarak bölgedeki kiliseler yeniden Fener Rum Ortodoks Patrikhânesi'ne bağlandı.'" },

// ───────────────────────── SIRBİSTAN PRENSLİĞİ (1804-1882) — ulusal hareket, özerklik, bağımsızlık

{ t:"1804-02-14", b:"Birinci Sırp Ayaklanması başladı (Kara Yorgi)", tur:"isyan",
  onem:5, dunya:3, kapsam:"dis", etiket:["isyan","kurulus"],
  yer_id:"",
  d:"Belgrad sancağındaki yeniçeri (dahi) zorbalığına ve 'knezlerin katliamı'na (Seča knezova, Ocak 1804) tepki olarak Georgije Petrović (Kara Yorgi/Karadjordje) önderliğinde Orašac meclisinde ayaklanma ilan edildi. Bu tarih devletler.js `sirbistan-prensligi` künyesinin f: tarihidir ve modern Sırp devlet sürekliliğinin başlangıcı sayılır.",
  kaynak:"TDV `sirbistan`: '1804'te Karadjordje (Djordje Petkoviç) liderliğinde Sırp isyanı patlak verdi.' Gün: devletler.js künyesi + akademik (B. Jelavich, History of the Balkans, 1983)." },

{ t:"1806-01-01", b:"Belgrad'ın Sırp isyancılarca ele geçirilmesi", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","toprak-kazanc"],
  yer_id:"Belgrad",
  d:"Kara Yorgi'nin kuvvetleri Belgrad kalesini ele geçirdi; TDV maddesi şehirdeki Müslüman halka yönelik büyük bir katliama girişildiğini belirtiyor. Belgrad'ın alınışı isyanın zirvesini oluşturdu, ama Osmanlı-Rus savaşının (1806-1812) gölgesinde kaldı. Gün kesin doğrulanamadı, YYYY-01-01.",
  kaynak:"TDV `sirbistan`: 'Belgrad'ı ele geçiren Sırp birlikleri şehirdeki müslümanlara karşı büyük katliama girişti.'" },

{ t:"1813-01-01", b:"Ayaklanmanın bastırılması, Belgrad'ın geri alınışı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Belgrad",
  d:"Bükreş Antlaşması'yla (1812) Rusya ile barışan Osmanlı Devleti, ayaklanmayı bastırmak için serbest kalan gücünü Sırbistan'a yöneltti; Belgrad yeniden ele geçirildi ve Kara Yorgi Avusturya'ya kaçtı. Doğrudan Osmanlı idaresi kısa süreliğine yeniden kuruldu; iki yıl içinde İkinci Ayaklanma patlak verecektir.",
  kaynak:"TDV `sirbistan`: '1813'te tamamıyla bastırılarak Belgrad ele geçirildi.'" },

{ t:"1815-04-23", b:"İkinci Sırp Ayaklanması (Miloš Obrenović)", tur:"isyan",
  onem:5, dunya:3, kapsam:"dis", etiket:["isyan"],
  yer_id:"",
  d:"Knez Miloš Obrenović önderliğinde Takovo meclisinde ikinci ayaklanma ilan edildi. Birincinin aksine Miloš, tam bağımsızlık yerine müzakere yoluyla özerklik hedefledi; bu pragmatik çizgi 1830 fermanına giden yolu açtı ve Obrenović hanedanının temelini attı.",
  kaynak:"TDV `sirbistan`: 'İkinci Sırp isyanı Miloş Obrenoviç isimli bir Sırp knezinin önderliğinde 1815 yılında patlak verdi.' Gün: devletler.js künyesi + akademik (Jelavich)." },

{ t:"1826-10-07", b:"Akkerman Sözleşmesi — Sırp haklarının genişletilmesi garanti edildi", tur:"antlasma",
  onem:2, dunya:2, kapsam:"dis", etiket:["antlasma","diplomasi"],
  yer_id:"",
  d:"Osmanlı-Rus Akkerman Sözleşmesi'nin bir maddesi, 1812 Bükreş Antlaşması'nda Sırplara tanınan hakların genişletilerek uygulanmasını Osmanlı Devleti'ne taahhüt ettirdi; Rusya böylece Sırp özerklik davasının resmî hâmisi konumunu pekiştirdi.",
  kaynak:"akademik: B. Jelavich, History of the Balkans (1983) — TDV `sirbistan` maddesi bu antlaşmadan ayrıca bahsetmiyor, akademik kaynağa dayanıldı (`CLAUDE.md §4` taneciklik kuralı)." },

{ t:"1829-09-14", b:"Edirne Antlaşması — Osmanlı-Rus savaşının sonu, Sırp özerkliğinin yolu açıldı", tur:"antlasma",
  onem:3, dunya:3, kapsam:"dis", etiket:["antlasma"],
  yer_id:"Edirne",
  d:"1828-1829 Osmanlı-Rus Savaşı'nı bitiren Edirne Antlaşması, Sırbistan'a yeni haklar tanıyan bir fermanın çıkarılmasını öngördü; bu ferman bir yıl sonra (1830) yayımlanacaktır. dunya puanı kronoloji_rusya.js'teki aynı olayla eşleştirildi.",
  kaynak:"TDV `sirbistan`: Osmanlı Devleti 'bir fermanla Sırplar'a yeni haklar tanıdı' — kronoloji_rusya.js (1829-09-14, dunya:3)." },

{ t:"1830-10-17", b:"Özerklik fermanı (Hatt-ı Şerif) yayımlandı", tur:"antlasma",
  onem:5, dunya:3, kapsam:"dis", etiket:["antlasma","kurulus"],
  yer_id:"",
  d:"Osmanlı Devleti'nin verdiği imtiyaz fermanıyla Sırbistan, Osmanlı'ya bağlı ama kendi prensi (Miloš Obrenović, kalıtsal unvanla) ve kendi idaresiyle yönetilen özerk bir prenslik hâline geldi. ⚠️ TARİH: devletler.js `sirbistan-prensligi` künyesi bu olayı `1830-08-30` olarak veriyor; TDV maddesinin kendi cümlesi '17 Ekim 1830' diyor. `CLAUDE.md §4` gereği TDV esas alındı, çelişki bildirildi (M-1021).",
  kaynak:"TDV `sirbistan`: '17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti.'" },

{ t:"1867-01-01", b:"Osmanlı garnizonları Sırp kalelerinden çekildi", tur:"toprak-kazanc",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","idari"],
  yer_id:"Belgrad",
  d:"Özerk Sırp yönetimi, Osmanlı askerî idaresinde kalan son dört kaledeki (Belgrad, Fethülislâm, Semendire, Böğürdelen) garnizonların geri çekilmesini sağladı; Sırbistan'daki fiilî Osmanlı askerî varlığı burada sona erdi ve tam bağımsızlığa giden yolda kritik bir eşik aşıldı. TDV gün vermiyor, YYYY-01-01.",
  kaynak:"TDV `sirbistan`: '1867'de Özerk Sırp yönetimi Osmanlı askerî idaresinde bulunan Belgrad, Fethülislâm, Semendire ve Böğürdelen kalelerindeki garnizonların geri çekilmesiyle buralardaki egemenliğini güçlendirdi.'" },

{ t:"1876-06-30", b:"Sırbistan Osmanlı Devleti'ne savaş ilan etti", tur:"savas",
  onem:4, dunya:3, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"1875'te Bosna-Hersek'te başlayan Hristiyan köylü ayaklanmalarının Balkanlar'a yayılması üzerine Sırbistan ve Karadağ Osmanlı Devleti'ne savaş ilan etti; Sırp ordusu Rus gönüllü general Çernayev komutasında saldırıya geçti ama yenilgiye uğradı — nihai bağımsızlık ancak 1877-78 Osmanlı-Rus Savaşı'nın sonunda gelecektir.",
  kaynak:"TDV `sirbistan`: '1875'te Bosna-Hersek'te başlayan isyanlar üzerine Sırbistan ve Karadağ Osmanlı Devleti'ne karşı savaşa girdi.' Gün: akademik (Jelavich)." },

{ t:"1878-03-03", b:"Ayastefanos (San Stefano) Antlaşması — bağımsızlık ilk kez tanındı", tur:"antlasma",
  onem:4, dunya:3, kapsam:"dis", etiket:["antlasma"],
  yer_id:"",
  d:"1877-78 Osmanlı-Rus Savaşı'nı bitiren Ayastefanos Antlaşması'yla Osmanlı Devleti, Romanya, Karadağ ve Sırbistan'ın bağımsızlıklarını ilk kez kabul etti; Sırbistan'a Niş şehri de verildi. Antlaşma, Avrupa devletlerinin (özellikle İngiltere'nin) itirazıyla dört ay sonra Berlin'de yeniden ele alınacaktır. dunya puanı kronoloji_rusya.js'teki aynı olayla eşleştirildi.",
  kaynak:"TDV `ayastefanos-antlasmasi`: 'Osmanlı Devleti Romanya, Karadağ ve Sırbistan'ın bağımsızlıklarını kabul edecekti' — kronoloji_rusya.js (1878-03-03, dunya:3)." },

{ t:"1878-07-13", b:"Berlin Antlaşması — bağımsızlık kesinleşti, Niş ve Pirot katıldı", tur:"antlasma",
  onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","kurulus"],
  yer_id:"",
  d:"Ayastefanos'un Avrupa güçlerince revize edilmesiyle imzalanan Berlin Antlaşması, Sırbistan'ın tam bağımsızlığını uluslararası düzeyde kesin biçimde tescil etti ve Niş ile Pirot şehirlerini Sırbistan'a bıraktı. Dört asır süren Osmanlı bağlılığı burada resmen sona erdi. dunya puanı dört ayrı kronoloji dosyasıyla (rusya, almanya, habsburg, ingiltere) eşleştirildi — dördü de 4'te birleşiyor.",
  kaynak:"TDV `berlin-antlasmasi`: 'Sırbistan'ın bağımsızlığı tanınacak, kendisine Niş ve Pirot verilecekti.'" },

// ───────────────────────── SIRBİSTAN KRALLIĞI (1882-1918)

{ t:"1882-03-06", b:"Sırbistan Krallığı ilan edildi (I. Milan)", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","hukumdar"],
  yer_id:"Belgrad",
  d:"Bağımsızlığın uluslararası tanınmasının ardından Prens Milan Obrenović kendini kral ilan etti ve Prenslik, Sırbistan Krallığı'na dönüştü. Bu tarih devletler.js `sirbistan-kralligi` künyesinin f: tarihidir.",
  kaynak:"TDV `sirbistan`: 'Prens Milan Obrenoviç 1882'de krallığını ilân etti.'" },

{ t:"1885-11-14", b:"Sırp-Bulgar Savaşı başladı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"Bulgaristan'ın Doğu Rumeli eyaletini ilhak ederek Balkan güç dengesini bozmasına tepki olarak Sırbistan Bulgaristan'a savaş açtı; kısa savaş Sırbistan'ın Slivnitsa'da yenilgisiyle sonuçlandı ve Avusturya-Macaristan arabuluculuğuyla durduruldu. Gün akademik kaynaktan (standart tarih 14 Kasım 1885).",
  kaynak:"TDV `sirbistan`: 'Bulgaristan 1885'te Doğu Rumeli eyaletini ilhak edince Sırbistan Bulgaristan'a savaş açtı.' Gün: akademik (Jelavich)." },

{ t:"1903-06-11", b:"Mayıs Darbesi — Obrenović hanedanının sonu, Karađorđević'e geçiş", tur:"siyasi",
  onem:4, dunya:2, kapsam:"ic", etiket:["siyasi","hukumdar"],
  yer_id:"Belgrad",
  d:"Bir grup subay Kral I. Aleksandar Obrenović ile eşi Kraliçe Draga'yı saray baskınında öldürdü; taht, Kara Yorgi'nin torunu I. Petar Karađorđević'e geçti. Darbe, Sırbistan'ın dış politikasını Avusturya-Macaristan'dan uzaklaştırıp Rusya'ya yaklaştıran bir dönüm noktası oldu. TDV `sirbistan` bu olaydan bahsetmiyor — `CLAUDE.md §4` taneciklik kuralı gereği standart akademik kaynağa dayanıldı.",
  kaynak:"bulunamadı — TDV bu ayrıntıyı kapsamıyor; dayanak: akademik (B. Jelavich, History of the Balkans, 1983)." },

{ t:"1908-10-06", b:"Bosna-Hersek'in ilhakı — Sırbistan'ın savaş tehdidi", tur:"kriz",
  onem:5, dunya:4, kapsam:"dis", etiket:["kriz","diplomasi"],
  yer_id:"",
  d:"Avusturya-Macaristan'ın otuz yıldır fiilen idare ettiği Bosna-Hersek'i resmen ilhak etmesi Sırbistan'da büyük öfkeyle karşılandı; Sırbistan (Rusya'nın desteğiyle) seferberlik ilan edip savaş tehdidinde bulundu, ancak Rusya'nın 1905 sonrası zayıflığı nedeniyle geri adım atmak zorunda kaldı. Kriz, 1914'e giden Sırp-Avusturya geriliminin başlangıç noktalarından biridir. dunya puanı kronoloji_habsburg.js'teki aynı olayla eşleştirildi; o dosya günü 'GÜN DOĞRULANMADI' diye işaretlemiş, aynı çekince burada da geçerli.",
  kaynak:"kronoloji_habsburg.js (1908-10-06, dunya:4) — TDV `avusturya`: 'otuz yıldır fiilen idare ettiği Bosna-Hersek'i resmen ilhak etmiştir (1908)' · ⚠️ GÜN DOĞRULANMADI (habsburg dosyasından devralındı)." },

{ t:"1912-10-08", b:"Birinci Balkan Savaşı'na giriş — Kosova ve Vardar Makedonyası alındı", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["savas","toprak-kazanc"],
  yer_id:"",
  d:"Balkan İttifakı'nın (Sırbistan, Bulgaristan, Yunanistan, Karadağ) bir parçası olarak Sırbistan Osmanlı Devleti'ne savaş ilan etti; birkaç hafta içinde Kosova ile Üsküp ve Manastır'ı içine alan Vardar Makedonyası'nı ele geçirdi. 1389'dan beri Sırp millî hafızasının merkezinde duran Kosova, beş asır sonra Sırbistan'a geri döndü. Tarih devletler.js `sirbistan-kralligi` künyesiyle eşleşiyor.",
  kaynak:"TDV `sirbistan`: Sırbistan '...Kosova'yı ve Üsküp ile Manastır'ı da içine alan Vardar Makedonyası'nı topraklarına kattı.'" },

{ t:"1913-08-10", b:"Bükreş Antlaşması — İkinci Balkan Savaşı'nın sonu, toprak kazanımları kesinleşti", tur:"antlasma",
  onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","toprak-kazanc"],
  yer_id:"",
  d:"Eski müttefiki Bulgaristan'a karşı savaşan Sırbistan, Bükreş Antlaşması'yla Birinci Balkan Savaşı'nda kazandığı Vardar Makedonyası topraklarını kalıcı olarak güvence altına aldı; Sırbistan'ın yüzölçümü ve nüfusu neredeyse iki katına çıktı. Bu kazanım, bir yıl sonra patlak verecek I. Dünya Savaşı'nda Avusturya-Macaristan'ın Sırbistan'ı büyüyen bir tehdit olarak görmesine katkıda bulundu.",
  kaynak:"TDV `sirbistan` genel anlatısı + akademik (Jelavich, History of the Balkans) — antlaşmanın tam tarihi (10 Ağustos 1913) standart kaynaklarla doğrulandı." },

{ t:"1918-12-01", b:"Sırp-Hırvat-Sloven Krallığı'nın kuruluşuyla birleşme", tur:"son",
  onem:5, dunya:3, kapsam:"dis", etiket:["kurulus","son"],
  yer_id:"Belgrad",
  d:"I. Dünya Savaşı'nın sonunda Sırbistan Krallığı, Avusturya-Macaristan'ın dağılmasından doğan Sloven-Hırvat-Sırp Devleti ile birleşerek Sırp-Hırvat-Sloven Krallığı'nı (sonradan Yugoslavya) kurdu; Sırbistan Krallığı bağımsız bir devlet olarak burada sona erdi. Tarih devletler.js `sirbistan-kralligi` künyesinin t: tarihidir — bu dosyanın kapsamı burada kapanıyor.",
  kaynak:"devletler.js `sirbistan-kralligi` künyesi (t:'1918-12-01') + TDV `sirbistan` genel anlatısı." },

];
