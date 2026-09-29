// =====================================================================
// FAS — ÇOK KÜNYELİ KRONOLOJİ (KRONO-MAGRIB-0929, 29 Eylül 2026)
// Oturum: KRONO-MAGRIB-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
// 📌 Fas Osmanlı'ya HİÇ tâbi olmadı — maddelerin çoğu `kapsam:"ic"`; bu bilinçli.
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_FAS → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez; t+b tekrarı atlanır).
// ⚠️ `KRONOLOJI_FAS` adı KULLANILMADI: `fas` künyesine `=` ile bağlanıp
//    künyenin kendi 7 maddesini EZERDİ (app.js derinKronolojiBindir).
// Künyeler (data/devletler.js'ten okundu, madde tarihi pencere içinde):
//   merini   1196-01-01 → 1549-01-01  (Merînîler + Vattâsîler)
//   sadi     1511-01-01 → 1659-01-01
//   fas      1549-01-01 → 1923-10-29  (Alevî / Filâlî şerifleri)
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// kronoloji_kuzeyafrika.js'in Merînî + Sâdî maddeleri, fas/sadi/merini
// künyelerinin kendi maddeleri (1549 · 1578 · 1591 · 1664 · 1672 · 1844 Isly ·
// 1912 Fes) ve olaylar*.js / kronoloji_portekiz · _ispanya'daki kale maddeleri
// (Sebte · Tanca · Arzila · Safi · Azemmûr · Mazagan · Agadir · Mamûra ·
// el-Arâiş · el-Hüseyme) TEKRARLANMADI.
// 1844 Tanca Antlaşması kronoloji_cok_cezayir.js'te de var (Cezayir bakışı) —
// TDV iki gün veriyor (10 Eylül / 26 Ekim); ikisi de `celiski:`de beyanlı.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Yalnız TDV İslâm Ansiklopedisi. `kaynak:` alanındaki tırnaklı metin TDV
// gövdesinden BİREBİR alıntıdır (her biri makine ile gövdede arandı).
// Kullanılan maddeler: fas · meriniler · vattasiler · sadiler · filaliler ·
// mevlay-resid · mevlay-ismail · miknas · tanca · titvan · sicilmase · merakes ·
// rabat · darulbeyza · sebte · sus · tinbuktu · ahmed-el-mansur ·
// abdurrahman-b-hisam · mevlay-suleyman · mevlay-hasan · abdulaziz-el-alevi ·
// abdulhafiz-el-alevi · abdulkerim-el-hattabi
// ⚠️ TDV `fes` şehir maddesi DEĞİL (başlık); Fes için `fas` maddesi kullanıldı.
//
// ── TARİH KURALI ──────────────────────────────────────────────────
// Gün bilinmiyorsa t:"YYYY-01-01" ve `gun:` alanı hassasiyeti açıklar.
// `ic_not_d:` editoryal not (harita ile çelişki, TDV iç çelişkisi) — gösterilmez.
// =====================================================================

window.KRONOLOJI_COK_FAS = [

{ t:"1248-01-01", b:"Merînîler Fas şehrini Muvahhidler'den aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Fas (Fez)", taraflar:["merini"],
  d:"Kuzeydoğu Fas'ta güçlenen Merînîler, Muvahhid devletini parça parça söküp önce Miknâs'ı, ardından Fas şehrini ele geçirdi. Fas şehri bundan sonra Merînîler'in idarî merkezi oldu; Sicilmâse ve Merakeş'in alınması bu adımı izledi.",
  kaynak:"TDV `fas`: \"1244’te Meknes, 1248’de Fas (şehir), 1255’te Sicilmâse ve 1269’da başşehir Merakeş’i ele geçirerek\"",
  gun:"1248 (TDV gün vermez)",
  ic_not_d:"Miknâs'ın yılı TDV'de tutarsız: `fas` 1244 der, `miknas` 634/1237'de alındığını, 1245-46'da Muvahhidler'in geri aldığını, iki yıl sonra tekrar Merînîler'e geçtiğini söyler. Madde yalnız Fas şehrini (1248) tarihler." },

{ t:"1333-01-01", b:"Merînî desteğiyle Cebelitârık Kastilya'dan geri alındı", tur:"toprak-kazanc", onem:3, dunya:3, kapsam:"dis",
  etiket:["toprak-kazanc","ittifak","konu-askeri","konu-diplomasi"], yer_id:"Cebelitarık (Gibraltar)", taraflar:["merini"],
  d:"Ebü'l-Hasan Ali, Gırnata Nasrî sultanı IV. Muhammed ile ittifak kurup ona kuvvet gönderdi. Bu destekle 1309-10'dan beri Kastilya elindeki Cebelitârık müslümanlara döndü; Merînîler'in Endülüs'teki son büyük müdahale dönemi böyle açıldı.",
  kaynak:"TDV `meriniler`: \"Ebü’l-Hasan’ın gönderdiği kuvvetlerin desteğiyle IV. Muhammed, 709 (1309-10) yılından beri Kastilyalılar’ın istilâsı altında bulunan Cebelitârık’ı geri aldı (733/1333).\"",
  gun:"733/1333 (TDV gün vermez)" },

{ t:"1468-01-01", b:"Portekiz donanması Enfâ'yı (Dârülbeyzâ) yağmalayıp yıktı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","toprak-kayip","konu-askeri"], yer_id:"Dârülbeyzâ (Anfa)", taraflar:["merini"],
  d:"Kendi reislerince yönetilen ve korsan üssü sayılan Enfâ'ya elli gemilik bir Portekiz donanması yöneldi. Halk Selâ ve Rabat'a çekildi; Portekizliler şehri yağmalayıp yaktı ve surlarını yıktı. Şehir 1515'te Portekizliler yeniden iskân edene kadar harabe kaldı.",
  kaynak:"TDV `darulbeyza`: \"1468 veya 1469 yılında elli gemiden oluşan büyük bir Portekiz donanmasının şehre yaklaştığını haber alan Enfâ halkı\"",
  gun:"1468 veya 1469 (TDV kesin yıl vermez; ilki yazıldı)" },

{ t:"1483-01-01", b:"Endülüslü göçmenler ıssız Tıtvân'ı yeniden kurdu", tur:"kurulus", onem:3, dunya:2, kapsam:"ic",
  etiket:["kurulus","sosyal","konu-idari"], yer_id:"Tıtvân (Tetuan)", taraflar:["merini"],
  d:"Doksan yıla yakın ıssız kalan Tıtvân'a Gırnata'nın düşüşünden önce Endülüs'ten gelen kafileler yerleşti. Vattâsî hâkimiyetindeki şehir böylece yeniden kuruldu ve kısa sürede Portekiz'e karşı mücadelenin kale-şehri oldu.",
  kaynak:"TDV `titvan`: \"888 veya 889 (1483 veya 1484) yılında Endülüs’ten Kuzey Afrika’ya göç eden kafileler Tıtvân’ı ıssız halde buldular.\"",
  gun:"1483 veya 1484 (TDV iki yıl verir; ilki yazıldı)",
  ic_not_d:"Harita kırılması 1484-01-01 (Tıtvân: —→merini). TDV 1483/1484 der; harita günü de ölçüm değil." },

{ t:"1539-01-01", b:"Muhammed eş-Şeyh ağabeyi Ahmed el-A'rec'i devirip Sâdî tahtına oturdu", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"", odak_yer:["Merakeş","Tarûdant"], taraflar:["sadi"],
  d:"Veraset ve ganimet paylaşımı yüzünden iki Sâdî kardeş arasında savaş çıktı. Kazanan Muhammed eş-Şeyh ağabeyini ve çocuklarını hapsetti; Portekiz'e karşı 1541 başarıları ve 1549'da Fas şehrinin alınması onun tek başına iktidarında gerçekleşti.",
  kaynak:"TDV `sadiler`: \"Savaşı kazanıp tahta oturan Mevlây Muhammed eş-Şeyh ağabeyini ve çocuklarını hapse attı (946/1539).\"",
  gun:"946/1539 (TDV gün vermez; `fas` \"1539-1540\" der)",
  ic_not_d:"ODAK: Sâdî merkezi (Merakeş · Sûs) — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1545-01-01", b:"Vâdidernâ Savaşı: Vattâsî sultanı Sâdîlere esir düştü", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["savas","hanedan","konu-askeri"], yer_id:"Zâgûre (Dr'a)", taraflar:["merini","sadi"],
  d:"1536 sınır antlaşması kısa sürdü; Sâdîler Fas'ın tamamını almak için yeniden saldırdı. Vâdidernâ'da yenilen Vattâsî sultanı Ebü'l-Abbas Ahmed esir alındı ve Vattâsîler iki yıllık bir fetret yaşadı; bu yenilgi 1549'da Fas şehrinin düşüşünün önünü açtı.",
  kaynak:"TDV `vattasiler`: \"Vâdidernâ’da meydana gelen savaşta yenilgiye uğrayan Ebü’l-Abbas Ahmed, Sa‘dî Sultanı Mevlây Muhammed eş-Şeyh el-Mehdî’ye esir düştü (952/1545).\"",
  gun:"952/1545 (TDV gün vermez)",
  ic_not_d:"ODAK: Vâdidernâ = Dr'a vadisi" },

{ t:"1550-01-01", b:"Sâdîler Tilimsân'ı alıp Türkleri çıkardı, Cezayir kuvvetleri şehri geri aldı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri","konu-diplomasi"], yer_id:"Tilimsan", taraflar:["sadi"],
  d:"Muhammed eş-Şeyh, Cezayir Beylerbeyi Hasan Paşa'nın Vehrân'la uğraşmasından yararlanıp Fas yolunun anahtarı Tilimsân'ı ele geçirdi. Hasan Paşa'nın gönderdiği ordu şehri geri aldı; Osmanlı-Sâdî düşmanlığı böylece açık savaşa döndü.",
  kaynak:"TDV `fas`: \"Tilimsân şehrini zaptedip (1550) buradaki Türkler’i Cezayir’e sürdü.\"",
  gun:"1550 (TDV gün vermez)" },

{ t:"1554-09-23", b:"Muhammed eş-Şeyh Fas'ı geri aldı; Ebû Hassûn öldürüldü, Vattâsîler sona erdi", tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["savas","hanedan","konu-askeri","konu-hanedan"], yer_id:"Fas (Fez)", taraflar:["sadi"],
  d:"Osmanlı kuvvetleri Cezayir'e dönünce Merakeş'e çekilmiş olan Muhammed eş-Şeyh yeniden Fas üzerine yürüdü. Osmanlı himayesindeki Ebû Hassûn savaş meydanında öldü ve Vattâsî hanedanı son buldu; Fas şehri yaklaşık dokuz ay Osmanlı nüfuzunda kalmış oldu.",
  kaynak:"TDV `fas`: \"Muhammed eş-Şeyh tekrar hücuma geçerek şehri aldı ve Ebû Hassûn öldürüldü (23 Eylül 1554).\"",
  gun:"23 Eylül 1554",
  celiski:"TDV `fas`: \"şehri aldı ve Ebû Hassûn öldürüldü (23 Eylül 1554)\" || TDV `vattasiler`: \"Yenilgiye uğrayan Sultan Ebû Hassûn savaş meydanında öldürüldü (24 Şevval 961 / 22 Eylül 1554).\"" },

{ t:"1581-01-01", b:"Ahmed el-Mansûr Sahra üzerine ordu gönderip bölgeyi hâkimiyetine aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"", odak_kimlik:"sadi", taraflar:["sadi"],
  d:"Vâdilmehâzin zaferinden sonra iç düzeni kuran Ahmed el-Mansûr, güneydeki Sahra'ya büyük bir ordu sevkederek bölgeyi kendine bağladı. Bu sefer, on yıl sonraki Sudan (Songay) seferinin ön adımı oldu.",
  kaynak:"TDV `ahmed-el-mansur`: \"Sahra üzerine büyük bir ordu sevkederek burayı hâkimiyeti altına alması (1581)\"",
  gun:"1581 (TDV gün vermez)",
  ic_not_d:"TDV hangi vahaların alındığını söylemez; yer_id bu yüzden boş. Harita 1659'da Advâr (Tuvât), Tîmîmûn (Gûrâre) vb.'yi sadi→fas gösteriyor — sadi'ye geçişin kırılması harita tarafında ayrıca sorulmalı. · ODAK: kamera Sâdî ülkesine — TDV seferin hedefini \"Sahra\" diye verir" },

{ t:"1589-01-01", b:"Temgrûtî başkanlığındaki Fas elçilik heyeti İstanbul'da", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-kultur"], yer_id:"İstanbul", taraflar:["sadi"],
  d:"1588 vergisini göndermeyen Ahmed el-Mansûr, Osmanlı donanmasının hazırlandığını duyunca vergi ve hediyelerle bir heyet yolladı. Ali et-Temgrûtî ile Muhammed el-Fiştâlî'nin heyeti padişahça iyi karşılandı; Temgrûtî bu yolculuğu en-Nefḥatü'l-miskiyye adlı sefaretnamesinde anlattı.",
  kaynak:"TDV `fas`: \"1589 Ağustosunda İstanbul’a varan ve Osmanlı padişahı tarafından çok iyi karşılanan Ali et-Temgrûtî (Temcrûtî) ve Muhammed el-Fiştâlî’den oluşan heyetin\"",
  gun:"Ağustos 1589 (TDV gün vermez)" },

{ t:"1627-01-01", b:"Sultan Zeydân öldü, oğulları arasında taht kavgası başladı", tur:"olum", onem:3, dunya:1, kapsam:"ic",
  etiket:["olum","hanedan","konu-hanedan"], yer_id:"Merakeş", taraflar:["sadi"],
  d:"Beklediği yardımı alamasa da Osmanlılar'a bağlı kalan Zeydân en-Nâsır'ın ölümü üzerine üç oğlu tahtı paylaşamadı. İç savaşlar ülkeyi zâviyeler ve yerel güçler arasında böldü ve Sâdîlerin çöküşünü hızlandırdı.",
  kaynak:"TDV `sadiler`: \"Osmanlılar’a bağlılığını sürdüren Zeydân’ın ölümünün (1036/1627) ardından üç oğlu arasında başlayan taht kavgaları\"",
  gun:"1036/1627 (TDV gün vermez)" },

{ t:"1640-01-01", b:"Filâlî Mevlây Muhammed Sicilmâse'yi Ebû Hassûn es-Simlâlî'den aldı", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","toprak-kazanc","konu-hanedan"], yer_id:"Sicilmâse (Tâfilelt)", taraflar:["fas"],
  d:"1630'lardan itibaren siyasete çıkan Alevî (Filâlî) şerifleri, güneyde Sûs ve Sicilmâse'yi elinde tutan Ebû Hassûn'a karşı mücadeleye girişti. Mevlây Muhammed b. Şerîf onun taraftarlarını Sicilmâse'den çıkarıp otoritesini kurdu; bugüne dek süren hanedanın ilk toprak üssü burası oldu.",
  kaynak:"TDV `filaliler`: \"Mevlây Muhammed, Ebû Hassûn taraftarlarını 1050 (1640) yılında Sicilmâse’den çıkardı ve orada otoritesini kurdu.\"",
  gun:"1050/1640 (TDV gün vermez)" },

{ t:"1666-06-06", b:"Mevlây Reşîd Fas şehrine girdi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","kusatma","konu-askeri"], yer_id:"Fas (Fez)", taraflar:["fas"],
  d:"Tâze'yi üs yapan Mevlây Reşîd, Dilâîler'den kopup bağımsızlık ilân eden Ebü'l-Abbas ed-Düreydî'nin elindeki Fas şehrini kuşattı. Muhasaradan sonra Fâsülcedîde'ye girdi, ardından direnişsiz Fâsülkadîm'den biat aldı; kuzeyin merkezi böylece Filâlîler'e geçti.",
  kaynak:"TDV `mevlay-resid`: \"Düreydî teslim olmayı reddedince muhasaradan sonra Fâsülcedîde’ye girdi (3 Zilhicce 1076 / 6 Haziran 1666).\"",
  gun:"6 Haziran 1666" },

{ t:"1667-01-01", b:"Kasrülkütâme, Miknâs ve Tıtvân Filâlî hâkimiyetine girdi", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Tıtvân (Tetuan)", taraflar:["fas"],
  d:"Mevlây Reşîd kırk bin kişilik orduyla kuzeybatıya yürüdü; bölge hâkimi Hızır b. Gaylân önce Asîlâ'ya, sonra Cezayir'e kaçtı. Kasrülkütâme alındıktan sonra Selâ ve öteki merkezlerden biat heyetleri geldi, Miknâs ve Tıtvân da ele geçirildi.",
  kaynak:"TDV `titvan`: \"1078’den (1667) itibaren Filâlî egemenliğine girdi\" · TDV `mevlay-resid`: \"Kasrülkütâme’yi aldıktan sonra (1078/1667) Fas şehrine döndü\"",
  gun:"1078/1667 (TDV gün vermez)" },

{ t:"1668-06-18", b:"Mevlây Reşîd Dilâ Zâviyesi'ni dağıttı", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["savas","din","konu-askeri","konu-din"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Orta Atlas'ta Fas şehri ve çevresine yarım asırdır hükmeden Dilâîler, Filâlîler'in en güçlü rakibiydi. Reşîd, Batnürrummân yakınında Şeyh Muhammed el-Hâcc'ı yenip zâviyeyi dağıttı ve binalarını yıktırdı; ülkenin kuzeyinde rakipsiz kaldı.",
  kaynak:"TDV `mevlay-resid`: \"Batnürrummân yakınında Şeyh Muhammed el-Hâcc’ı mağlûp ederek zâviyesini dağıttı (8 Muharrem 1079 / 18 Haziran 1668)\"",
  gun:"18 Haziran 1668" },

{ t:"1669-01-01", b:"Mevlây Reşîd Merakeş'i Şebbâne kabilesinden aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Merakeş", taraflar:["fas"],
  d:"Son Sâdî sultanını 1659'da öldürüp Merakeş'e yerleşen Şebbâne kabilesinin yönetimine Reşîd son verdi. Güneyin başşehri de alınınca Fas ile Merakeş, Sâdîler'in bölünmesinden beri ilk kez aynı hükümdarın eline geçti.",
  kaynak:"TDV `mevlay-resid`: \"1080’de (1669) Şebbâne kabilesinin yönetimindeki Merakeş üzerine giderek bu önemli şehri de ele geçirdi\"",
  gun:"1080/1669 (TDV gün vermez)" },

{ t:"1670-01-01", b:"Sûs'un alınmasıyla bütün Mağrib-i Aksâ Mevlây Reşîd'in elinde birleşti", tur:"birlesme", onem:5, dunya:2, kapsam:"ic",
  etiket:["birlesme","toprak-kazanc","konu-siyasi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Merakeş'ten sonra isyan hâlindeki Sûs'a yönelen Reşîd, Târûdânt ve çevresini itaat altına aldı. Fas şehrine döndüğünde bütün Mağrib-i Aksâ'yı tek hâkimiyette toplamıştı; TDV bu birliği bugünkü Fas devletinin temeli sayar.",
  kaynak:"TDV `mevlay-resid`: \"Sûs bölgesine yönelip Târûdânt ve çevresini itaat altına aldı, bölgede istikrarı sağladı (1081/1670).\"",
  gun:"1081/1670 (TDV gün vermez)" },

{ t:"1679-01-01", b:"Mevlây İsmâil Miknâs'ta büyük sarayını kurdurdu; şehir yeni başşehir oldu", tur:"idari", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","mimari","konu-idari"], yer_id:"Miknâs (Meknes)", taraflar:["fas"],
  d:"Sultan olmadan önce Miknâs valisi olan Mevlây İsmâil, Fas şehrini bırakıp Miknâs'ı merkez edindi. İsyancılardan esir aldığı binlerce kişiyi çalıştırarak büyük bir saray yaptırdı; şehir surları, kapıları ve ambarlarıyla yeniden inşa edildi.",
  kaynak:"TDV `miknas`: \"Eski başşehir Fas’ı bırakıp Miknâs’ı kendisine merkez edinen Mevlây İsmâil 1090 (1679) yılında burada büyük bir saray yaptırdı.\"",
  gun:"1090/1679 (TDV gün vermez)",
  ic_not_d:"TDV başşehir değişikliğine ayrı yıl vermez; 1679 sarayın yılıdır." },

{ t:"1681-01-01", b:"Mevlây İsmâil'in mücahidleri Mamûra'yı (Mehdiye) İspanyollardan aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Mamûra (Mehdiye)", taraflar:["fas"],
  d:"Sahil güvenliği ve Avrupalılara karşı akınlar için kurulan gönüllü mücahid birlikleri ani bir baskınla Mamûra'yı İspanyol garnizonundan aldı. Bu, Mevlây İsmâil'in kıyıdaki Avrupa üslerini birer birer geri alışının ilk halkasıydı.",
  kaynak:"TDV `mevlay-ismail`: \"1092 (1681) yılında yaptıkları âni bir baskınla Mehdiye’yi (Ma‘mûre) İspanyollar’ın elinden aldılar.\"",
  gun:"1092/1681 (TDV gün vermez)" },

{ t:"1684-01-01", b:"İngilizler Tanca'yı tahliye etti, şehir Fas'a döndü", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Tanca", taraflar:["fas"],
  d:"Çeyiz olarak İngiltere'ye geçen ve sürekli kuşatma altında tutulan Tanca'yı İngilizler bırakmak zorunda kaldı; çekilirken limanı ve istihkâmları dinamitle yıktılar. Şehrin fâtihi Ali b. Abdullah er-Rîfî camileri ve resmî binaları yeniden kurdu; Tanca XVIII. yüzyıl başında Fas'ın diplomatik merkezi oldu.",
  kaynak:"TDV `tanca`: \"Fas Filâlî Sultanı Mevlây İsmâil döneminde yeniden müslümanların eline geçti (1095/1684).\"",
  gun:"1095/1684 (TDV gün vermez)",
  celiski:"TDV `tanca`: \"yeniden müslümanların eline geçti (1095/1684)\" ve TDV `mevlay-ismail`: \"1095’te (1684) İngilizler’i Tanca’yı tahliye etmek zorunda bıraktılar.\" || TDV `filaliler`: \"Tanca (1678), Ma‘mûre (1681), Arâîş (1689) ve Asîlâ (1691)\"",
  ic_not_d:"Harita kırılması 1684-02-05 (ingiltere→fas). TDV gün vermez; t:1684-01-01 harita gününden 35 gün önce kalır (Değişmez 2 ±30). Harita günü akademik kaynağa dayanıyorsa madde günü oradan alınmalı; dayanmıyorsa harita 1684-01-01'e çekilmeli." },

{ t:"1691-01-01", b:"Mevlây İsmâil Asîlâ'yı (Arzila) yabancılardan geri aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Arzila (Asilah)", taraflar:["fas"],
  d:"Arâîş'in 1689'da geri alınmasından iki yıl sonra kuzey Atlas kıyısındaki Asîlâ da Fas'a döndü. Böylece Mevlây İsmâil, Sebte ve Melîle dışındaki Avrupa üslerinin çoğunu tasfiye etmiş oldu.",
  kaynak:"TDV `filaliler`: \"Arâîş (1689) ve Asîlâ (1691) gibi bölgeleri de yabancılardan geri aldı.\"",
  gun:"1691 (TDV gün vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK: harita Arzila'yı 1549'dan beri kesintisiz sadi/fas gösteriyor. TDV `ahmed-el-mansur` 1592'de İspanya'nın Asîle'yi Sa‘dîler'e terk ettiğini, `filaliler` XVII. yüzyıl başında Asîlâ'nın İspanyollar'da olduğunu söyler — ara yabancı dönemi haritada yok (CAKISMA'ya bak)." },

{ t:"1691-01-01", b:"Mevlây İsmâil'in Tilimsân'ı Cezayir Türklerinden alma girişimi başarısız kaldı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Tilimsan", taraflar:["fas"],
  d:"Doğu sınırını genişletmek isteyen Mevlây İsmâil Osmanlı Cezayiri'nin elindeki Tilimsân'a yürüdü, fakat Türk topçusunun direnişi karşısında geri çekildi. 1703'teki ikinci saldırı da sonuçsuz kaldı ve Fas-Cezayir sınırı Tilimsân'ın batısında kaldı.",
  kaynak:"TDV `fas`: \"1672’de sultan olan Mevlây İsmâil 1691’de Tilimsân’ı Türkler’den almaya yeltenmişse de başarılı olamamış\"",
  gun:"1691 (TDV gün vermez)" },

{ t:"1699-01-01", b:"Mevlây İsmâil ülkeyi beş eyalete ayırıp oğullarına paylaştırdı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","hanedan","konu-idari"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Mevlây İsmâil yönetimi kolaylaştırmak için ülkeyi beş eyalete bölüp başlarına oğullarını getirdi. Bu taksim kardeşler arasında kanlı savaşlara yol açtı ve onun ölümünden sonraki otuz yıllık anarşinin tohumlarını attı.",
  kaynak:"TDV `mevlay-ismail`: \"1111’de (1699) ülkeyi beş eyalete ayırıp oğulları arasında paylaştırdı.\"",
  gun:"1111/1699 (TDV gün vermez)" },

{ t:"1727-03-20", b:"Mevlây İsmâil öldü; otuz yıllık taht kavgaları başladı", tur:"olum", onem:5, dunya:2, kapsam:"ic",
  etiket:["olum","hanedan","kriz","konu-hanedan"], yer_id:"Miknâs (Meknes)", taraflar:["fas"],
  d:"Elli beş yıl hüküm süren ve Fas'ı en güçlü dönemine taşıyan Mevlây İsmâil öldü; yerine veliahdı Ahmed ez-Zehebî geçti. Abîd alayları ile Vedâye kabilesi sultan tayin eder hâle geldi; ülke ekonomik çöküş ve kıtlıkla geçen otuz yıllık bir anarşiye girdi.",
  kaynak:"TDV `mevlay-ismail`: \"Mevlây İsmâil 27 Receb 1139’da (20 Mart 1727) vefat etti.\"",
  gun:"20 Mart 1727" },

{ t:"1757-01-01", b:"III. Muhammed (Sîdî Muhammed b. Abdullah) tahta çıktı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Mevlây Abdullah'ın ölümüyle tahta geçen oğlu Mevlây Muhammed, birbirine karşıt grupların gücünü kırarak otuz yıllık anarşiye son verdi. Ulemâyı yanına alıp vergi düzenini oturttu, Avrupa tüccarına kolaylık tanıyarak ticaretin ağırlığını Atlas kıyısına kaydırdı.",
  kaynak:"TDV `fas`: \"1757’de ölen Abdullah’ın yerine sırasıyla oğulları Mevlây Muhammed (1757-1790), Mevlây Yezîd (1790-1792) ve torunu Mevlây Süleyman (1792-1822) geçti.\"",
  gun:"1757 (TDV gün vermez)" },

{ t:"1767-01-01", b:"Osmanlı'nın gönderdiği gemi ve ustalarla Fas heyeti ülkesine döndü", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-askeri"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Fas donanmasının yakaladığı Dubrovnik gemilerini padişahın aracılığıyla serbest bırakmasının ardından İstanbul'a giden heyet, kışı orada geçirip döndü. Padişahın hediyeleri arasında toplu bir gemi ile otuz kadar gemi ve top ustası vardı; ustalar ömürlerinin sonuna dek Selâ tersanesinde çalıştı.",
  kaynak:"TDV `fas`: \"Bu münasebetle İstanbul’a giden ve kışı orada geçiren Fas heyeti 1767 Mayısında ülkesine padişahın verdiği kıymetli hediyelerle döndü.\"",
  gun:"Mayıs 1767 (TDV gün vermez)" },

{ t:"1789-01-01", b:"III. Muhammed Osmanlı'ya esir, güherçile ve barut gönderdi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","ittifak","konu-diplomasi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Rusya ve Avusturya savaşları sırasında Fas sultanı dört firkateyn ile Malta korsanlarından kurtardığı 536 müslüman esiri İstanbul'a yolladı; güherçile ve barut da gönderildi. Haremeyn için yollanan altın külçeleri ise Mevlây Yezîd'in geri istemesi üzerine Aralık 1789'da iade edildi.",
  kaynak:"TDV `fas`: \"1789 yılındaki Rusya ve Avusturya savaşları sırasında ise III. Muhammed dört firkateyn ile Malta korsanlarının elinden kurtardığı 536 müslüman esiri gönderdi\"",
  gun:"1789 (TDV gün vermez)" },

{ t:"1790-01-01", b:"III. Muhammed öldü; Mevlây Yezîd tahta geçti, kargaşa dönemi başladı", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["olum","hanedan","konu-hanedan"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Otuz üç yıl hüküm süren III. Muhammed'in ölümüyle yoğun taht kavgaları başladı. Yerine geçen Mevlây Yezîd iki yıllık saltanatında İspanya ile savaştı ve güneydeki isyanlarla uğraştı.",
  kaynak:"TDV `filaliler`: \"1790’da Mevlây III. Muhammed’in ölümüyle ülkede yeni bir kargaşa dönemi başladı.\"",
  gun:"1790 (TDV gün vermez)" },

{ t:"1792-03-12", b:"Mevlây Süleyman Fas şehrinde sultan ilân edildi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"Fas (Fez)", taraflar:["fas"],
  d:"Yezîd'in ölümünden sonra kardeşler Merakeş'te Hişâm'ı, kuzeybatıda Mesleme'yi sultan ilân etmişti. Fas şehrindeki Abîd alayları ve halk Mevlây Süleyman'ı sultan seçti; Miknâs, Selâ ve Rabat'ın desteğiyle kardeşlerinin en güçlüsü oldu.",
  kaynak:"TDV `mevlay-suleyman`: \"Buradaki Abîd alayları ve halkın desteğiyle Mevlây Süleyman sultan ilân edildi (17 Receb 1206 / 12 Mart 1792).\"",
  gun:"12 Mart 1792" },

{ t:"1797-01-01", b:"Mevlây Süleyman Türklerin eline geçen Vecde'yi geri aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Vecde (Oujda)", taraflar:["fas"],
  d:"Beş yıllık taht kavgaları sırasında Cezayir Türkleri doğu sınırındaki Vecde'yi ele geçirmişti. Merakeş'te de biat alarak ülkeyi yeniden birleştiren Süleyman, Ticânî şeyhinin desteğiyle şehri geri aldı ve doğu sınırını güvenceye aldı.",
  kaynak:"TDV `mevlay-suleyman`: \"Beş yıl süren karışıklıklar sırasında Türkler tarafından ele geçirilen Vecde (Vücde) üzerine bir ordu gönderdi.\" · TDV `mevlay-suleyman`: \"Ticâniyye tarikatının kurucusu Seyyid Ahmed et-Ticânî’nin desteği sayesinde şehir geri alındı (1212/1797).\"",
  gun:"1212/1797 (TDV gün vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK: harita Vecde'yi 1659'dan 1923'e kesintisiz fas gösteriyor; TDV'ye göre Cezayir Türkleri 1790-97 arasında bir süre tuttu (geçiş yılı TDV'de yok)." },

{ t:"1817-01-01", b:"Mevlây Süleyman korsanlığı yasakladı", tur:"kanun", onem:3, dunya:2, kapsam:"dis",
  etiket:["kanun","diplomasi","konu-diplomasi","konu-ekonomi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Avrupa ile ihtilâftan kaçınan Mevlây Süleyman, Viyana Kongresi'nin korsanlığın kaldırılması kararına uyarak Fas korsanlığını yasakladı. Aynı içe kapanma siyasetiyle ihracatı yasaklayıp ithalâta yüzde elli gümrük koydu.",
  kaynak:"TDV `fas`: \"Avrupa ile temastan kaçınan Mevlây Süleyman herhangi bir ihtilâfa meydan vermemek için korsanlığı yasakladı (1817).\"",
  gun:"1817 (TDV gün vermez)" },

{ t:"1822-11-30", b:"Mevlây Abdurrahman b. Hişâm tahta geçti", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Berberî isyanlarıyla otoritesi sarsılan Mevlây Süleyman, kendi oğulları yerine yeğeni Abdurrahman'ı veliaht tayin etti ve dokuz gün sonra Merakeş'te öldü (28 Kasım 1822). Abdurrahman resmî vâris olarak tahta çıktı ve otuz yedi yıl hüküm sürdü.",
  kaynak:"TDV `abdurrahman-b-hisam`: \"Abdurrahman amcasının ölümü üzerine onun resmî vârisi olarak 30 Kasım 1822’de tahta geçti.\"",
  gun:"30 Kasım 1822" },

{ t:"1830-01-01", b:"Fas, Osmanlı'nın çekildiği Tilimsân ve çevresine nüfuz etmeye çalıştı", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","konu-siyasi","konu-diplomasi"], yer_id:"Tilimsan", taraflar:["fas"],
  d:"Fransızların Cezayir'i işgal etmesi üzerine hâmisiz kalan Tilimsân halkı Fas sultanına biat etmek istedi; ulemânın onayını alan Abdurrahman biatı kabul etti. Fransız baskısıyla adamlarını geri çekmek zorunda kaldıysa da bölgeyle ilgisini kesmedi; TDV bunu Osmanlı'nın bölgeyle organik bağının kopuşu sayar.",
  kaynak:"TDV `abdurrahman-b-hisam`: \"1830’da buradaki Osmanlı hâkimiyetinin kalkmasından faydalanarak Tlemsen (Tilimsân), Miliana ve Midia bölgelerini nüfuzu altına almaya çalıştı.\"",
  gun:"1830 (TDV gün vermez; Cezayir'in işgali Temmuz 1830)" },

{ t:"1844-10-26", b:"Tanca Antlaşması: Fas, Fransa'nın Cezayir hâkimiyetini tanıdı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"Tanca", taraflar:["fas"],
  d:"Isly yenilgisi ve Tanca ile Suveyre'nin bombalanmasından sonra Abdurrahman barış istedi. Antlaşmayla Fransa'nın Cezayir'deki hâkimiyeti tanındı; ertesi yıl sınır mukavelesi imzalandı ve Abdülkādir'e destek kesildi.",
  kaynak:"TDV `abdurrahman-b-hisam`: \"Bunun üzerine 26 Ekim 1844’te Tanca Antlaşması’nı imzalayarak Fransızlar’ın Cezayir hâkimiyetini kabul etti.\"",
  gun:"26 Ekim 1844",
  celiski:"TDV `abdurrahman-b-hisam`: \"26 Ekim 1844’te Tanca Antlaşması’nı imzalayarak\" ↔ TDV `cezayir`: \"Tanca Antlaşması’yla (10 Eylül 1844)\" ↔ TDV `abdulkadir-el-cezairi`: \"1844 Ekiminde imzalanan Tanca Antlaşması’yla\" — TDV kendi içinde çelişiyor; aynı antlaşma kronoloji_cok_cezayir.js'te 1844-09-10 ile duruyor (DÜZELTME B7)." },

{ t:"1860-02-05", b:"İspanya Tıtvân'ı işgal etti", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","savas","konu-askeri"], yer_id:"Tıtvân (Tetuan)", taraflar:["fas"],
  d:"Sebte'den harekete geçen İspanyol kuvvetleri Tıtvân'ı ele geçirdi ve Sebte sınırlarını genişletti. Ağır savaş tazminatı Fas'ı Londra'da borçlanmaya ve Avrupalı komiserlerin malî denetimini kabule itti; TDV bunu Avrupa nüfuzunun gediği sayar.",
  kaynak:"TDV `sebte`: \"Öte yandan 5 Şubat 1860’ta Tıtvân’ı (Tetuan) işgal eden İspanya sınırlarını Melîle’ye (Melilla) kadar genişletti.\"",
  gun:"5 Şubat 1860",
  celiski:"TDV `sebte`: \"5 Şubat 1860’ta Tıtvân’ı (Tetuan) işgal eden İspanya\" || TDV `fas`: \"önce Sebte’yi (Ceuta), ardından da Tıtvân’ı işgal ettiler (Ocak 1860)\"",
  ic_not_d:"HARİTADA KARŞILIĞI YOK: Tıtvân 1860-1862 İspanyol işgali haritada görünmüyor (TDV `titvan`: \"1860’ta Tıtvân’ı işgal eden İspanyollar 1862 yılında yapılan antlaşmayla şehri boşalttılar.\")." },

{ t:"1873-09-11", b:"Mevlây Hasan Merakeş'te sultan ilân edildi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"Merakeş", taraflar:["fas"],
  d:"Babası Sîdî Muhammed'in ölümü üzerine Merakeş'te sultan ilân edilen Mevlây Hasan hemen Fas, Azemmûr ve Miknâs'taki isyanlarla karşılaştı. Avrupalı subaylara eğittirdiği düzenli ordusuyla otuzdan fazla sefer yaptı ve Avrupa güçleri arasında denge siyasetinin en başarılı uygulayıcısı oldu.",
  kaynak:"TDV `mevlay-hasan`: \"Babası Mevlây Muhammed Sîdî’nin 18 Receb 1290’da (11 Eylül 1873) ölümünün ardından devlet adamları tarafından başşehir Merakeş’te sultan ilân edilen\"",
  gun:"11 Eylül 1873 (babasının ölüm günü; ilân günü ayrıca verilmez)" },

{ t:"1880-01-01", b:"Madrid Konferansı Fas'ın toprak bütünlüğünü ve ticaret eşitliğini kabul etti", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis",
  etiket:["diplomasi","antlasma","konu-diplomasi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Himaye ve imtiyaz sorunları üzerine Madrid'de toplanan konferansta büyük devletler Fas'ın toprak bütünlüğünü ve bütün ülkeler için ticaret eşitliğini tanıdı. Karar Fas'ı bir süre korudu ama ülkeyi büyük devletlerin nüfuz yarışının açık sahnesine çevirdi.",
  kaynak:"TDV `fas`: \"1880’de Madrid’de toplanan konferansta Fas’ın toprak bütünlüğü ve diğer ülkeler için ticaret eşitliği prensibi kabul edildi.\"",
  gun:"1880 (TDV gün vermez)" },

{ t:"1894-06-07", b:"Mevlây Hasan seferde öldü; 14 yaşındaki Abdülazîz tahta çıktı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","olum","konu-hanedan"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Berberîler'e karşı bir sefer dönüşünde Tâdlâ'da ölen Mevlây Hasan'ın yerine on dört yaşındaki oğlu Abdülazîz geçti. İşleri 1900'deki ölümüne dek başvezir Bâ Ahmed yürüttü; ardından sultanın otoritesi hızla zayıfladı.",
  kaynak:"TDV `mevlay-hasan`: \"Mevlây Hasan, 3 Zilhicce 1311 (7 Haziran 1894) tarihinde Berberîler’e karşı düzenlediği bir sefer dönüşünde Tâdlâ’da Vâdilabîd’de vefat etti.\"",
  gun:"7 Haziran 1894",
  celiski:"TDV `mevlay-hasan`: \"3 Zilhicce 1311 (7 Haziran 1894) tarihinde ... vefat etti\" || TDV `abdulaziz-el-alevi`: \"onun 9 Haziran 1894’te ölümü üzerine tahta geçti\"" },

{ t:"1902-01-01", b:"Bû Hamâre Tâzâ'da isyan çıkardı", tur:"isyan", onem:4, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"Tâze (Taza)", taraflar:["fas"],
  d:"Kendisini sultanın kardeşi ilân eden Cilâlî b. İdrîs ez-Zerhûnî (Bû Hamâre), Abdülazîz'in Avrupalılara yakınlığına ve vergi reformuna tepkiyi arkasına alarak Tâzâ'da ayaklandı. 1903'te başşehri tehdit etti ve 1906'ya kadar mücadelesini sürdürdü; zayıflayan sultan giderek Fransızlara yaslandı.",
  kaynak:"TDV `abdulaziz-el-alevi`: \"kendisini sultanın kardeşi ilân ederek 1902’de Tâzâ kasabasında isyan çıkardı ve 1903’te başşehri tehdit etmeye başladı.\"",
  gun:"1902 (TDV gün vermez)",
  celiski:"TDV `abdulaziz-el-alevi`: \"1902’de Tâzâ kasabasında isyan çıkardı\" || TDV `filaliler`: \"Özellikle 1904’te patlak veren Cilâlî b. İdrîs ez-Zerhûnî’nin (Bû Hamâre er-Rûkî) isyanları sultanı güç durumda bıraktı.\"" },

{ t:"1904-10-03", b:"Fransa-İspanya antlaşması: Akdeniz kıyısı İspanya'nın nüfuzuna bırakıldı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"İngiltere ile Entente Cordiale'i imzalayan Fransa, Fas üzerinde emeli olan İspanya ile de ayrı bir antlaşma yaptı. Sebte ve Tıtvân dahil Akdeniz kıyısı İspanya'ya bırakıldı; 1912'deki iki ayrı himaye bölgesinin çerçevesi burada çizildi.",
  kaynak:"TDV `fas`: \"İspanya’ya da 3 Ekim 1904 tarihli Fransa-İspanya antlaşmasıyla Akdeniz kıyısındaki Sebte ve Tıtvân bırakıldı.\"",
  gun:"3 Ekim 1904" },

{ t:"1906-04-07", b:"Cezîretülhadrâ (Algeciras) Konferansı kararları imzalandı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis",
  etiket:["antlasma","diplomasi","konu-diplomasi"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"II. Wilhelm'in Tanca ziyaretiyle doğan krizi çözmek için Ocak 1906'da on üç devletin katıldığı konferans toplandı. Sultanın hâkimiyeti ve ülkenin toprak bütünlüğü kâğıt üzerinde tanındı, fakat idare, maliye ve gümrükleri düzenleyen 123 maddelik antlaşma asayiş görevini Fransa'ya verdi; Fas'ta bu kararlar teslimiyet sayıldı.",
  kaynak:"TDV `abdulaziz-el-alevi`: \"Ancak, 7 Nisan 1906 tarihli konferans kararlarının Avrupa devletlerinin arzularına boyun eğmek şeklinde yorumlanmış olması\" · TDV `fas`: \"İspanya’nın Algeciras (Cezîretülhadrâ) şehrinde toplanan konferansta büyük bir zafer kazandı (Ocak 1906).\"",
  gun:"7 Nisan 1906 (kararların tarihi; konferans Ocak 1906'da toplandı)" },

{ t:"1907-01-01", b:"Fransa Vecde'yi işgal etti", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Vecde (Oujda)", taraflar:["fas"],
  d:"Merakeş'te bir Fransız doktorunun öldürülmesini bahane eden Fransa, birkaç gün içinde Cezayir sınırındaki Vecde'yi işgal etti. Bu, Algeciras sonrasında Fas topraklarına yapılan ilk doğrudan Fransız askerî müdahalesiydi.",
  kaynak:"TDV `fas`: \"Bir Fransız doktorunun öldürülmesini (19 Mart 1907) fırsat bilen Fransa olaydan birkaç gün sonra Vücde şehrini işgal etti\"",
  gun:"Mart 1907 — 19 Mart'taki cinayetten 'birkaç gün sonra' (TDV işgal gününü vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK: harita Vecde'yi 1923'e dek `fas` gösteriyor, işgal katmanı yok (OCAK_NOTU)." },

{ t:"1907-07-30", b:"Fransa Dârülbeyzâ'yı (Kazablanka) bombalayıp işgal etti", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Dârülbeyzâ (Anfa)", taraflar:["fas"],
  d:"Liman işlerinde çalışan Avrupalı işçilerle Şâviye kabilesi mensupları arasındaki çatışmada dokuz Avrupalının öldürülmesi üzerine Fransa şehri bombaladı ve karaya asker çıkardı. Fransızlar oradan güneye yayılarak Şâviye topraklarını fiilen işgal etti; işgal 1912 himayesine bağlandı.",
  kaynak:"TDV `abdulaziz-el-alevi`: \"Kazablanka’da ise dokuz Avrupalı işçinin öldürülmesini bahane ederek Kazablanka’yı işgal ettiler (30 Temmuz 1907).\"",
  gun:"30 Temmuz 1907",
  celiski:"TDV `abdulaziz-el-alevi`: \"Kazablanka’yı işgal ettiler (30 Temmuz 1907)\" || TDV `fas`: \"Nisan 1907’den itibaren Dârülbeyzâ civarında bulunan Fransızlar güneye doğru yayılarak\"",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU)." },

{ t:"1907-08-16", b:"Abdülhafîz Merakeş'te kardeşine karşı sultanlığını ilân etti", tur:"bolunme", onem:4, dunya:1, kapsam:"ic",
  etiket:["bolunme","isyan","konu-hanedan"], yer_id:"Merakeş", taraflar:["fas"],
  d:"Algeciras kararlarından sonra Abdülazîz'e karşı öfke tırmanınca güney kabileleri sultanlığı Merakeş valisi Abdülhafîz'e teklif etti. Abdülhafîz kardeşini tanımayarak Merakeş'te istiklâlini ilân etti ve Fas iki sultanlı bir ülkeye döndü.",
  kaynak:"TDV `abdulhafiz-el-alevi`: \"kardeşinin sultanlığını tanımayarak Merakeş bölgesinde istiklâlini ilân etti (16 Ağustos 1907).\"",
  gun:"16 Ağustos 1907" },

{ t:"1908-01-01", b:"İspanya Melîle çevresine müdahale edip önemli noktaları işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Melîle (Melilla)", taraflar:["fas"],
  d:"Fransa'nın Vecde ve Dârülbeyzâ işgallerini izleyen İspanya, benzer bahanelerle Melîle'nin çevresine asker sevk etti. Askerî bakımdan önemli gördüğü yerleri işgal ederek Rif'teki ilerleyişinin ilk adımını attı.",
  kaynak:"TDV `fas`: \"İspanya da benzer bahanelerle 1908’de Melîle’ye (Melilla) ve komşu bölgelere müdahale ederek askerî bakımdan önemli gördüğü yerleri işgal etti.\"",
  gun:"1908 (TDV gün vermez)" },

{ t:"1908-08-21", b:"Abdülazîz tahttan feragat etti, Abdülhafîz tek sultan oldu", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"Dârülbeyzâ (Anfa)", taraflar:["fas"],
  d:"Merakeş'e gönderdiği ordu 19 Ağustos 1908'de kardeşinin kuvvetlerine yenilince Abdülazîz Kazablanka'ya sığındı ve ulemânın baskısıyla tahttan çekildi. Abdülhafîz, Algeciras'ı ve seleflerinin antlaşmalarını kabul ettiğine dair teminat verdikten sonra Batılı devletlerce tanındı.",
  kaynak:"TDV `abdulaziz-el-alevi`: \"Bunun üzerine Kazablanka’ya sığındı; ulemânın da baskısıyla 21 Ağustos 1908’de tahtını bıraktı.\"",
  gun:"21 Ağustos 1908" },

{ t:"1911-01-01", b:"Fransız kuvvetleri kuşatılan Fas şehrini kurtarıp Miknâs dahil şehirleri işgal etti", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Fas (Fez)", taraflar:["fas"],
  d:"Ağır vergilere ve yabancı nüfuzuna karşı ayaklanan kabileler başşehre kadar ilerleyince Abdülhafîz Fransa'dan yardım istedi. General Moinier komutasındaki kuvvetler Fas şehrini muhasaradan kurtardı ve Miknâs gibi şehirleri işgal etti; bu harekât İkinci Fas (Agadir) Krizi'ni tetikledi.",
  kaynak:"TDV `fas`: \"Fransa yabancıların hayatını koruma bahanesiyle Fas’a asker çıkardı ve sultanı isyancılardan kurtardıktan sonra bazı şehirleri de işgal etti (Nisan 1911).\"",
  gun:"Nisan 1911 (TDV gün vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU). TDV `miknas`: \"Miknâs, Fransızlar’ın Afrika’da başlattıkları sömürgeleştirme faaliyetleri sırasında onların eline geçti (1911).\"" },

{ t:"1911-01-01", b:"İspanya Arâiş ve el-Kasr'a asker çıkardı", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"el-Arâiş (Larache)", taraflar:["fas"],
  d:"Fransızların Fas şehrine girmesi üzerine İspanya, 1904 antlaşmasına dayanarak kuzeye asker soktu ve Arâiş (Larache) ile el-Kasr'a yerleşti. Böylece gelecekteki İspanyol himaye bölgesinin Atlas kıyısı fiilen tutulmuş oldu.",
  kaynak:"TDV `fas`: \"İspanya da benzer bir bahaneyle Haziran 1911’de ülkenin kuzeyine asker soktu ve Lahsen ile el-Kasr’a girdi.\"",
  gun:"Haziran 1911 (TDV gün vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU)." },

{ t:"1911-07-19", b:"Fransız kuvvetleri Rabat ve Selâ'yı işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Rabat", taraflar:["fas"],
  d:"Fas şehrine yürüyüşün ardından Atlas kıyısındaki ikiz şehirler Rabat ve Selâ da Fransız kuvvetlerince işgal edildi. Himaye kurulunca Mareşal Lyautey yönetim merkezini Fas şehrinden Rabat'a taşıdı.",
  kaynak:"TDV `rabat`: \"19 Temmuz 1911’de Rabat ve Selâ, Fransız kuvvetleri tarafından işgal edildi.\"",
  gun:"19 Temmuz 1911",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU)." },

{ t:"1912-08-12", b:"Abdülhafîz tahttan çekildi, yerine Mevlây Yûsuf getirildi", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan","konu-hanedan"], yer_id:"", odak_kimlik:"fas", taraflar:["fas"],
  d:"Himaye antlaşmasından sonra askerlerin Fas şehrindeki ayaklanmasını (17 Mayıs 1912) bastıran Fransızlar, ülkeyi sultan adına yeniden zapta girişti ve Lyautey'i genel vali atadı. Himaye doğrudan idareye dönüşünce Abdülhafîz tahttan çekilip Fransa'ya gitti; yerine Fransızlarla iş birliğine yatkın kardeşi Mevlây Yûsuf geçti.",
  kaynak:"TDV `abdulhafiz-el-alevi`: \"Fransız himayesinin doğrudan idare şeklini alması üzerine Abdülhafîz de sultanlıktan çekilmeye ve Fransa’ya gitmeye mecbur oldu (12 Ağustos 1912).\"",
  gun:"12 Ağustos 1912" },

{ t:"1912-09-07", b:"Fransızlar Merakeş'e girdi", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Merakeş", taraflar:["fas"],
  d:"Himaye antlaşmasına dayanan Fransız kuvvetleri güneyin başşehri Merakeş'e girdi. Şehrin idaresini yerli Tihâmî el-Cilâvî Paşa'ya bırakarak nüfuzlarını çevredeki Berberî kabilelerine onun eliyle kabul ettirdiler.",
  kaynak:"TDV `merakes`: \"30 Mart 1912’de Sultan Abdülhafîz ile imzaladıkları antlaşma uyarınca himaye dönemini başlatan Fransızlar 7 Eylül’de Merakeş’e girdiler\"",
  gun:"7 Eylül 1912",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU)." },

{ t:"1913-01-01", b:"İspanya Tıtvân ve çevresini işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Tıtvân (Tetuan)", taraflar:["fas"],
  d:"İspanya, himaye antlaşmasıyla kendisine bırakılan kuzey bölgesinin merkezi Tıtvân'ı ve çevresini işgal etti. Aynı yıl şehir, sultanın Kuzey Mağrib vekili Mevlây Mehdî b. İsmâil'in idaresine verildi; İspanyol bölgesinin merkezi olarak 1956'ya dek kaldı.",
  kaynak:"TDV `titvan`: \"İspanya 1913’te Tıtvân dahil bölgeyi tekrar işgal etti.\"",
  gun:"1913 (TDV gün vermez)",
  ic_not_d:"HARİTADA KARŞILIĞI YOK (OCAK_NOTU)." },

{ t:"1923-01-01", b:"Tanca ülkelerarası bölge statüsüne geçti", tur:"idari", onem:3, dunya:3, kapsam:"dis",
  etiket:["idari","diplomasi","konu-diplomasi","konu-idari"], yer_id:"Tanca", taraflar:["fas"],
  d:"1912'de özel bir statü verilen Tanca, büyük devletlerin temsil edildiği bir meclisin yönettiği ülkelerarası bir bölgeye dönüştürüldü. Şehir 1956'da Fas'a bağlanıncaya kadar (II. Dünya Savaşı'ndaki İspanyol denetimi hariç) bu statüde kaldı.",
  kaynak:"TDV `tanca`: \"1912’de anlaşmayla özel bir statü verilen Tanca, 1923’te büyük devletlerin temsil edildiği bir meclis tarafından yönetilen ülkelerarası bir bölge haline getirildi.\"",
  gun:"1923 (TDV gün vermez)",
  ic_not_d:"TDV yalnız yıl verir. Atlas penceresi 1923-10-29'da biter; statünün yılın hangi ayında yürürlüğe girdiği TDV'de yok — pencere içinde kalıp kalmadığına akademik kaynakla bakılmalı." }

];
