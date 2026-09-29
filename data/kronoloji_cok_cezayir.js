// =====================================================================
// CEZAYİR — ÇOK KÜNYELİ KRONOLOJİ (KRONO-MAGRIB-0929, 29 Eylül 2026)
// Oturum: KRONO-MAGRIB-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_CEZAYIR → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez; t+b tekrarı atlanır).
// Künyeler (data/devletler.js'ten okundu, madde tarihi pencere içinde):
//   cezayir-ocagi       1516-01-01 → 1830-07-05
//   abdulkadir          1832-11-22 → 1847-12-23
//   cezayir-fransiz     1830-07-05 → 1962-07-05  (atlas 1923-10-29'da biter)
//   tunus-ocagi         Tunus-Cezayir savaşlarında ikinci taraf
// Zeyyânî (zeyyani) maddeleri kronoloji_kuzeyafrika.js'te — burada tekrarlanmadı.
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// Künyelerin kendi maddeleri (1516 kuruluş · 1519 bağlılık · 1837 Tafna ·
// 1847 teslim …) ve olaylar*.js (1519·1555·1671·1708·1732·1792·1827·1830·
// 1831·1832·1833·1837·1838·1841·1843·1844·1854·1857·1882) TEKRARLANMADI.
// 1837 Tafna ve 1847 teslim maddeleri `abdulkadir` künyesinde zaten
// olduğu için buradakiler yalnız `cezayir-fransiz`e bağlandı.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Yalnız TDV İslâm Ansiklopedisi. `kaynak:` alanındaki tırnaklı metin TDV
// gövdesinden BİREBİR alıntıdır (her biri makine ile gövdede arandı).
// Kullanılan maddeler: cezayir · oruc-reis · barbaros-hayreddin-pasa ·
// abdulvadiler · tilimsan · garp-ocaklari · kostantine · bune · hasan-pasa ·
// kilic-ali-pasa · vehran · muasker · abdulkadir-el-cezairi · mizab · kabiliye
//
// ── TARİH KURALI ──────────────────────────────────────────────────
// Gün bilinmiyorsa t:"YYYY-01-01" ve `gun:` alanı hassasiyeti açıklar.
// `ic_not_d:` editoryal not (harita ile çelişki, TDV iç çelişkisi) — gösterilmez.
// =====================================================================

window.KRONOLOJI_COK_CEZAYIR = [

{ t:"1516-01-01", b:"Don Diego'nun İspanyol donanması Cezayir önünde püskürtüldü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Oruç Reis'in Cezayir'de tutunması üzerine İspanya büyük bir donanma ve kara kuvveti gönderip kaleyi kuşattı. Oruç Reis'in savunması karşısında İspanyollar ağır kayıpla geri çekildi. Zafer, yeni kurulan idarenin ilk ciddi sınavıydı.",
  kaynak:"TDV `oruc-reis`: \"Don Diego kumandasında 140 parça gemiden oluşan bir donanma 15.000 kişilik kuvvetle Cezayir’e gönderildi (922/1516)\"",
  gun:"922/1516 (TDV gün vermez)" },

{ t:"1517-01-01", b:"Tenes'in zaptı", tur:"fetih", onem:3, dunya:1, kapsam:"ic",
  etiket:["askeri","konu-askeri"], yer_id:"Tenes", taraflar:["cezayir-ocagi"],
  d:"İspanyollarla iş birliği yapan yerli kabileler cezalandırıldıktan sonra Cezayir'in batısındaki Tenes, Hızır Reis'in de katıldığı harekâtla alındı. Böylece Cezayir ile Tilimsân arasındaki kıyı şeridi Barbarosların eline geçti.",
  kaynak:"TDV `oruc-reis`: \"Hızır Reis’in katılımıyla Cezayir yakınlarındaki Tenes zaptedildi (1517)\"",
  gun:"1517 (TDV gün vermez)" },

{ t:"1518-01-01", b:"Oruç Reis Tilimsân'dan çıkışta şehid düştü", tur:"olum", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri","konu-hanedan"], yer_id:"Tilimsan", taraflar:["cezayir-ocagi"],
  d:"Abdülvâdî emîrinin çağırdığı İspanyol ve yerli kuvvetleri Tilimsân'ı kuşattı; Oruç Reis şehri aylarca savundu. Cephanesi tükenince küçük bir grupla şehirden çıktı, yolda sıkıştırılıp öldürüldü. Kardeşi İshak da aynı yıl düştü; Cezayir'in idaresi Hızır Reis'e kaldı.",
  kaynak:"TDV `oruc-reis`: \"Çarpışma sırasında yaralanan Oruç Reis daha sonra öldürüldü (924/1518 yazı)\"",
  gun:"924/1518 yazı (TDV gün vermez)" },

{ t:"1519-01-01", b:"Moncada'nın Cezayir çıkarması Hızır Reis'çe püskürtüldü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Sicilya kral nâibi Hugo de Moncada'nın seksen gemilik filosu Cezayir yakınına asker çıkardı ve Hızır Reis'e yenildi. Avrupalılar bu savaştan sonra Hızır'ı da ağabeyi gibi 'Barbarossa' diye andı. Zafer, Hızır Reis'in Osmanlı'ya bağlanmadan önceki konumunu güçlendirdi.",
  kaynak:"TDV `barbaros-hayreddin-pasa`: \"seksen gemiden oluşan bir filonun 1519 Ağustosunda Harras bölgesine yaptığı çıkartma Hızır Reis tarafından püskürtüldü\"",
  gun:"Ağustos 1519 (TDV gün vermez)" },

{ t:"1519-01-01", b:"Kostantîne Hasan Ağa tarafından zaptedildi", tur:"fetih", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Konstantin", taraflar:["cezayir-ocagi"],
  d:"Barbaros Hayreddin'in adamlarından Hasan Ağa doğu Cezayir'in iç kesimindeki Kostantîne'yi Hafsîlerden aldı. Şehir sonraki on beş yılda el değiştirdi; kalıcı Osmanlı hâkimiyeti ancak 1533-34'te kuruldu.",
  kaynak:"TDV `kostantine`: \"Kostantîne, 1519 veya 1520 yılında Osmanlılar’ın Cezayir beyi Barbaros Hayreddin Paşa’nın adamlarından Hasan Ağa tarafından zaptedildi\"",
  gun:"1519 veya 1520 (TDV, E. Mercier'e atfen; gün vermez)",
  ic_not_d:"Harita Konstantin'i 1519-09-01'den 1830'a kesintisiz Osmanlı çiziyor; TDV 1526 Hafsî geri alışını ve 1533-34 garnizonunu ayrıca veriyor (aşağıdaki iki madde)." },

{ t:"1524-01-01", b:"Barbaros Hayreddin Cezayir'i bırakıp Cicelli'ye çekildi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Tunus Hafsî sultanının saldırısı ve kendi tayin ettiği Kabîliye emîri Ahmed b. Kādî'nin isyanı üzerine Hayreddin Cezayir şehrini terk etti. Cicelli'de toparlanan Barbaros birkaç yıl sonra halkın çağrısıyla dönüp Ahmed b. Kādî'yi yendi ve şehri geri aldı.",
  kaynak:"TDV `cezayir`: \"bir ara Cezayir şehrini bırakarak Cicelli’ye çekilmek zorunda kaldıysa da (1524) üç yıl sonra yine halkın isteğiyle geri döndü\"",
  gun:"1524 (TDV gün vermez)",
  celiski:"TDV `garp-ocaklari`: \"1525’te Cezayir’in kesin olarak zaptından sonra Cezayir ve Cicelli sultanı ilân edilen Hızır Reis’in\" || `cezayir` ve `kabiliye` dönüşü 1524'ten 'üç yıl sonra' verir; `garp-ocaklari` kesin zaptı 1525'e koyar.",
  ic_not_d:"Harita 1524-1527 arasında Cezayir şehrini Osmanlı gösteriyor; TDV bu aralıkta şehrin Ahmed b. Kādî'de olduğunu söyler (yıl kesin değil)." },

{ t:"1526-01-01", b:"Hafsîler Kostantîne'yi geri aldı", tur:"toprak-kayip", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Konstantin", taraflar:["cezayir-ocagi"],
  d:"Hasan Ağa'nın aldığı Kostantîne Hafsîlerce geri alındı. Şehir bir yıl sonra yeniden Türklerin eline geçti ama bu kez de kalıcı bir garnizon kurulmadı.",
  kaynak:"TDV `kostantine`: \"Hafsîler’in 1526’da geri aldığı şehir bir yıl sonra tekrar Osmanlılar’ın eline geçtiyse de\"",
  gun:"1526 (TDV gün vermez)",
  ic_not_d:"Harita bu kaybı göstermiyor (Konstantin 1519-09-01'den beri kesintisiz OSMANLI)." },

{ t:"1530-01-01", b:"Penyon (Adakale) İspanyollardan alındı, Cezayir limanı kuruldu", tur:"fetih", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Cezayir şehrinin hemen önündeki adacıkta İspanyolların tuttuğu Penon kalesi Barbaros tarafından alındı. Ada kıyıya bir mendirekle bağlandı ve korunaklı bir liman elde edildi. Bu, Cezayir'i Batı Akdeniz'in en güçlü korsan ve donanma üssüne çeviren adımdır.",
  kaynak:"TDV `cezayir`: \"1530’da da Cezayir şehri önünde İspanyollar’ın kontrolündeki küçük bir adada yer alan Penon Kalesi’ni (Adakale) ele geçirdi\" · TDV `barbaros-hayreddin-pasa`: \"Barbaros İspanyollar’ın elindeki Adakale’yi de (Penon) alarak (1530) buraya bir dalgakıran yaptırdı\"",
  gun:"1530 (TDV gün vermez; iki madde de 1530 der, 1529 değil)" },

{ t:"1533-01-01", b:"Kostantîne'ye Osmanlı garnizonu kondu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], yer_id:"Konstantin", taraflar:["cezayir-ocagi"],
  d:"Birkaç kez el değiştiren Kostantîne'ye Osmanlılar bu tarihte bir garnizon yerleştirdi ve şehirde tam hâkimiyet sağladı. Kostantîne bundan sonra Cezayir'in ikinci önemli şehri ve Doğu beyliğinin merkezi oldu.",
  kaynak:"TDV `kostantine`: \"ancak 940’ta (1533-34) Osmanlılar bir garnizon kurarak tam hâkimiyet sağladılar\"",
  gun:"940/1533-34 (TDV gün vermez; ilk Miladî yıl yazıldı)" },

{ t:"1533-01-01", b:"Barbaros İstanbul'a çağrıldı; Cezayir'de yerine Hasan Ağa kaldı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Kanûnî'nin daveti üzerine Barbaros Hayreddin yirmi gemiyle Cezayir'den ayrılıp İstanbul'a gitti. Cezayir'in idaresini evlâtlığı Hasan Ağa'ya bıraktı. Hayreddin bir daha Cezayir'e dönmedi; ocak bundan sonra beylerbeyi vekilleri eliyle yönetildi.",
  kaynak:"TDV `barbaros-hayreddin-pasa`: \"Yerine evlâtlığı Kara Hasan’ı bırakan Barbaros yirmi tekne ile Cezayir’den yola çıkarak\"",
  gun:"1533 (ayrılış günü verilmez; İstanbul'da kabul 11 Cemâziyelâhir 940 / 28 Aralık 1533)" },

{ t:"1534-01-01", b:"Bûne (Annâbe) Tunus'la birlikte Barbaros'un eline geçti", tur:"fetih", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Annaba", taraflar:["cezayir-ocagi"],
  d:"Hafsî hanedanındaki taht kavgasından yararlanan Barbaros Hayreddin Paşa Tunus'u alırken doğu Cezayir kıyısındaki Bûne de Türklerin eline geçti. Bu kazanç ertesi yıl V. Karl'ın Tunus seferiyle kaybedildi.",
  kaynak:"TDV `bune`: \"1534’te Hafsî hânedanındaki saltanat çekişmeleri sırasında bir emîrin yardım istemesi üzerine Tunus’la beraber Bûne de Barbaros Hayreddin Paşa kumandasındaki Türkler’in eline geçti\"",
  gun:"1534 (TDV Bûne için gün vermez)",
  ic_not_d:"Harita kırılması 1534-09-22 (Tunus'un alınışı, `barbaros-hayreddin-pasa`: '22 Eylül'). Komşu gün kuralı uygulanacaksa kayda 'gün komşudan: Tunus · TDV barbaros-hayreddin-pasa' yazılmalı; ben uygulamadım. Harita Bûne'yi 1534 öncesi zeyyani çiziyor; TDV `bune` şehri Hafsî gösterir." },

{ t:"1535-01-01", b:"V. Karl Bûne'yi Hafsîlerden alıp İspanyol garnizonu yerleştirdi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Annaba", taraflar:["cezayir-ocagi"],
  d:"Tunus seferinden sonra V. Karl, tahta yeniden oturttuğu Hafsî sultanından Bûne'yi alıp kaleye 600 kişilik bir İspanyol garnizonu koydu. Türkler ve yerli halk kaleyi hemen kuşatmaya başladı; kuşatma beş yıl sürdü.",
  kaynak:"TDV `bune`: \"Bûne’yi ondan alarak kalesine 600 kişilik bir garnizon yerleştirdi\" · TDV `bune`: \"beş yıllık bir direnişten (1535-1540) sonra İspanyollar kaleyi boşaltmak zorunda kaldılar\"",
  gun:"1535 (TDV: 1534'ün 'ertesi yıl'ı; gün vermez)",
  ic_not_d:"Harita 1535'te Annaba'yı zeyyani→(boş) çiziyor; TDV'ye göre sahip İspanya (garnizon), çevresi kuşatan Türkler." },

{ t:"1540-01-01", b:"İspanyollar Bûne'yi boşalttı, şehir Cezayir'e geçti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Annaba", taraflar:["cezayir-ocagi"],
  d:"Beş yıllık kuşatmaya dayanamayan İspanyol garnizonu Bûne kalesini boşalttı. Şehir bundan sonra Cezayir donanmasının doğudaki büyük deniz üssü oldu ve 1832'deki Fransız işgaline kadar Türklerde kaldı.",
  kaynak:"TDV `bune`: \"beş yıllık bir direnişten (1535-1540) sonra İspanyollar kaleyi boşaltmak zorunda kaldılar\" · TDV `bune`: \"Bu tarihte Türkler’in eline geçen Bûne\"",
  gun:"1540 (TDV gün vermez)" },

{ t:"1541-01-01", b:"V. Karl'ın Cezayir seferi fırtına ve bozgunla sonuçlandı", tur:"savas", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"İmparator V. Karl'ın bizzat katıldığı büyük İspanyol donanması Cezayir'i almak için sefere çıktı. Fırtına ve savunma karşısında sefer tam bir hezimetle bitti. Bozgun, Cezayir'in Osmanlı elinde kalıcılaşmasını ve İspanya'nın Mağrib iddiasının gerilemesini sağladı.",
  kaynak:"TDV `cezayir`: \"İmparator V. Karl’ın da katıldığı İspanya donanmasının Cezayir seferi tam bir hezimetle sonuçlandı (1541)\" · TDV `barbaros-hayreddin-pasa`: \"V. Karl’ın Cezayir’e karşı giriştiği 1541 seferi ise fırtına yüzünden hezimete dönüştü\"",
  gun:"1541 (TDV gün vermez)" },

{ t:"1544-01-01", b:"Barbaros'un oğlu Hasan Paşa Cezayir beylerbeyi oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Hasan Ağa'nın ölümünden sonra Barbaros Hayreddin'in isteğiyle oğlu Hasan önce babasına vekâleten Cezayir beylerbeyiliğine getirildi. Hasan Paşa üç ayrı dönemde Cezayir'i yönetti ve Tilimsân ile Fas meselesinde belirleyici oldu.",
  kaynak:"TDV `hasan-pasa`: \"1544’te babasının isteğiyle, bir yıl önce ölen Hasan Ağa’nın yerine babasına vekâleten Cezayir beylerbeyiliğine getirildi\"",
  gun:"1544 (TDV gün vermez)" },

{ t:"1556-01-01", b:"Sâlih Paşa'nın ölümüyle Vehrân seferi yarıda kaldı", tur:"kusatma", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Oran", taraflar:["cezayir-ocagi"],
  d:"Cezayir beylerbeyi Sâlih Paşa, Piyâle Paşa'nın donanmasının desteğiyle İspanyol elindeki Vehrân'ı almaya girişti. Beylerbeyinin ölmesi üzerine harekât sonuçsuz kaldı ve Vehrân 1708'e kadar İspanya'da kaldı.",
  kaynak:"TDV `vehran`: \"1556 yılında Cezayir Beylerbeyi Sâlih Paşa zamanında Piyâle Paşa tarafından Vehrân’ı yeniden fethetme girişimi de beylerbeyinin ölümü üzerine sonuçsuz kaldı\"",
  gun:"1556 (TDV gün vermez)" },

{ t:"1557-01-01", b:"Hasan Paşa kuşatılan Tilimsân'ı Faslılardan kurtardı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Tilimsan", taraflar:["cezayir-ocagi"],
  d:"Sâlih Reis'in ölümünü fırsat bilen Sa'dî sultanı Tilimsân'ı kuşattı. İkinci kez Cezayir'e gönderilen Hasan Paşa 14.000 kişilik bir ordu yollayıp şehirdeki Türk muhafızları kurtardı. Tilimsân böylece Cezayir ocağının batı sınır kalesi olarak kaldı.",
  kaynak:"TDV `tilimsan`: \"ikinci defa beylerbeyi olarak Cezayir’e gelen Hasan Paşa, 1557’de kuşatma altındaki Tilimsân’a 14.000 kişilik bir ordu gönderip kāid Sefa’yı ve muhafızları kurtardı\"",
  gun:"1557 (TDV gün vermez)",
  ic_not_d:"Korpusta 1557 'Muhammed eş-Şeyh Osmanlı ordusunca öldürüldü' (Fas) maddesi var; bu madde ondan ayrı olay (Tilimsân'ın kurtarılması)." },

{ t:"1558-01-01", b:"Müstegānim önünde İspanyollar yenildi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Mustagānim", taraflar:["cezayir-ocagi"],
  d:"Vehrân'daki İspanyollar Müstegānim'i kuşattı; Hasan Paşa onları yenilgiye uğrattı. Bu zafer, batı Cezayir kıyısında İspanyolların Vehrân ve Mersalkebîr dışına taşmasını engelledi.",
  kaynak:"TDV `hasan-pasa`: \"23 Ekim 1557’de Sa‘dî hükümdarını öldürtmeyi başaran Hasan Paşa, ertesi yıl Müstegānim’i kuşatan İspanyollar’ı yenilgiye uğrattı\"",
  gun:"1558 (TDV: 1557'nin 'ertesi yıl'ı; gün vermez)" },

{ t:"1561-01-01", b:"Yeniçeriler Beylerbeyi Hasan Paşa'yı zincire vurup İstanbul'a yolladı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Hasan Paşa'nın Kabîlîlerden yeni bir ordu kurma girişimini kendilerini dışlamak sayan Cezayir yeniçerileri ayaklandı. Beylerbeyini zincire vurup İstanbul'a gönderdiler. Ocak askerinin beylerbeyinin üstünde söz sahibi olduğunu gösteren ilk büyük olaydır; Hasan Paşa ertesi yıl yeniden atandı.",
  kaynak:"TDV `hasan-pasa`: \"yeniçeriler bir kenara bırakıldıkları düşüncesiyle ayaklandılar ve Hasan Paşa’yı zincire vurarak İstanbul’a gönderdiler (Eylül 1561)\"",
  gun:"Eylül 1561 (TDV gün vermez)" },

{ t:"1563-01-01", b:"Hasan Paşa Vehrân ve Mersalkebîr'i kuşattı, geri çekildi", tur:"kusatma", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Oran", taraflar:["cezayir-ocagi"],
  d:"Yeniden beylerbeyi olan Hasan Paşa İspanyolların batı Cezayir'deki iki kalesi Vehrân ile Mersalkebîr'i kuşattı. İspanya'dan yardım kuvvetleri gelince kuşatmayı kaldırmak zorunda kaldı. İki kale 1708'e kadar İspanyol elinde kaldı.",
  kaynak:"TDV `hasan-pasa`: \"1563’te Oran’ı ve Mersalkebîr’i kuşattıysa da İspanya’dan yardımcı kuvvetlerin gelmesi üzerine çekilmek zorunda kaldı\" · TDV `vehran`: \"Cezayir Beylerbeyi Hasan Paşa, 1563’te şehri tekrar kuşattı\"",
  gun:"1563 (TDV gün vermez)" },

{ t:"1568-06-27", b:"Kılıç (Uluç) Ali Cezayir beylerbeyi oldu", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-hanedan"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Cezayir reislerinden yetişen Uluç Ali Cezayir beylerbeyiliğine atandı. Döneminde Cezayir'den Tunus üzerine seferler düzenlendi. Beylerbeyiler devrinin son valisi odur; ondan sonra Cezayir üç yıllık paşalarla yönetildi.",
  kaynak:"TDV `kilic-ali-pasa`: \"2 Muharrem 976’da (27 Haziran 1568) Cezayirigarb beylerbeyi oldu\"",
  gun:"2 Muharrem 976 / 27 Haziran 1568" },

{ t:"1578-01-01", b:"Fransızlara Annâbe yakınında Bastion ticaret merkezi izni", tur:"ekonomi", onem:2, dunya:2, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi"], yer_id:"Annaba", taraflar:["cezayir-ocagi"],
  d:"Cezayir, Fransızların Bûne (Annâbe) yakınında mercan avcılığı için bir ticaret merkezi kurmasına izin verdi. İzin vergi ödemek ve kale yapmamak şartına bağlandı. Bastion, sonraki iki yüzyıl Fransa-Cezayir ilişkilerinin ekonomik düğüm noktası oldu.",
  kaynak:"TDV `cezayir`: \"1578’de mercan avlamak, vergi vermek ve kale inşa etmemek şartlarıyla Fransızlar’ın kurmalarına izin verilen Annâbe (Bone) yakınlarındaki Bastion ticaret merkezi\"",
  gun:"1578 (TDV gün vermez)" },

{ t:"1587-01-01", b:"Beylerbeyilik sona erdi, üç yıllık paşalar devri başladı", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["idari","konu-idari"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Kılıç Ali Paşa'dan sonra Cezayir'e İstanbul'dan üçer yıllığına paşalar atanmaya başladı. Paşalar padişahın temsilcisi sayıldı ama fiilî güç yeniçeri ocağına ve reislere kaydı. Valiliğin törensel bir makama dönüşmesi Cezayir'in özerkleşme sürecinin başlangıcıdır.",
  kaynak:"TDV `cezayir`: \"1587’den itibaren Cezayir İstanbul tarafından üç yıllığına tayin edilen paşalar devrine girdi\" · TDV `cezayir`: \"Bunların zamanında padişahın otoritesi kabul edilmekle beraber bu otorite etkisiz bir haldeydi\"",
  gun:"1587 (TDV gün vermez)" },

{ t:"1629-03-21", b:"Fransa ile Cezayir arasında Marsilya Antlaşması", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Osmanlı ile ticaret antlaşması bulunmasına rağmen Cezayir korsanlarından zarar gören Fransa, deniz ticaretinin güvenliği için Cezayir'le ayrıca antlaşma yapmak zorunda kaldı. Cezayir'in Avrupa devletleriyle kendi adına antlaşma yapan bir güç olduğunu gösterir; yedi yıl sonra İngiltere ve Hollanda da aynı yolu izledi.",
  kaynak:"TDV `cezayir`: \"Cezayir dayısıyla deniz ticareti güvenliği için Marsilya’da 21 Mart 1629 tarihinde ayrıca bir antlaşma yapmak zorunda kaldı\"",
  gun:"21 Mart 1629",
  ic_not_d:"TDV 1629 için 'Cezayir dayısı' der; aynı madde dayılar devrini 1671'den başlatır. Karşı taraf büyük ihtimalle paşa/divandır; alıntı olduğu gibi bırakıldı." },

{ t:"1659-01-01", b:"Ağa Halil valiyi İzmir'e yolladı: Cezayir'de ağalar devri", tur:"idari", onem:5, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-idari"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Bütün yetkilerini kullanmak isteyen yeni vali Ali Paşa'yı yeniçeri ağası Halil Ağa bir gemiye bindirip İzmir'e gönderdi. Köprülü Mehmed Paşa önce vali göndermeyeceğini bildirip Cezayir'i cezalandırdı, sonra İstanbul durumu kabullendi. Yönetim yeniçeri ağalarına geçti; Cezayir'in fiilî özerkliği bu tarihte başlar.",
  kaynak:"TDV `cezayir`: \"1659’da vali tayin edilen Ali Paşa Cezayir’de bütün yetkilerini kullanmak isteyince Halil Ağa onu maiyetiyle beraber bir kalyonla İzmir’e gönderdi; böylece ağalar devri başladı\"",
  gun:"1659 (TDV gün vermez)",
  ic_not_d:"Harita tâbiliği 1671'den başlatıyor; TDV fiilî kopuşu 1659'a koyar (bk. OCAK_NOTU)." },

{ t:"1673-01-01", b:"Mevlây İsmâil'in Tilimsân saldırısı püskürtüldü", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Tilimsan", taraflar:["cezayir-ocagi"],
  d:"Fas'ın Alevî sultanı Mevlây İsmâil Tilimsân'ı almayı başlıca hedefi yaptı ve şehre saldırdı. Cezayir'in savunması karşısında başarılı olamadı; saldırılar 1681 ve 1693'te de tekrarlandı ve aynı sonla bitti. Cezayir-Fas sınırı bu çatışmalarla Tilimsân'ın batısında sabitlendi.",
  kaynak:"TDV `tilimsan`: \"Bu amaçla 1673, 1681 ve 1693 yıllarında saldırı düzenlediyse de Osmanlılar karşısında başarılı olamadı\"",
  gun:"1673 (ilk saldırı; 1681 ve 1693'te tekrar; TDV gün vermez)" },

{ t:"1710-01-01", b:"Bektaş Dayı öldürüldü, Sökeli Ali Çavuş dayı oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Bir yeniçerinin ailesine saldırdığı için Bektaş Dayı katledildi ve yerine Sökeli Ali Çavuş seçildi. Dayıların çoğunun şiddetle görevden alındığı Cezayir'de bu değişiklik, bir yıl sonra dayılık ile paşalığın birleşmesine yol açacak dönemi açtı.",
  kaynak:"TDV `cezayir`: \"Mart 1710’da Bektaş Dayı bir yeniçerinin ailesine saldırdığı için katledildi, yerine Sökeli Ali Çavuş dayı oldu\"",
  gun:"Mart 1710 (TDV gün vermez)" },

{ t:"1711-01-01", b:"Dayı Sökeli Ali beylerbeyi (paşa) unvanını da aldı", tur:"idari", onem:5, dunya:2, kapsam:"dis",
  etiket:["idari","konu-idari","konu-siyasi"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Sökeli Ali Çavuş İstanbul'un atadığı yeni beylerbeyini karaya çıkarmadan geri gönderdi ve iki makamın birleştirilmesini istedi. İstek kabul edildi, dayıya beylerbeyi rütbesi verildi. Bundan sonra fermanlar 'Cezayir beylerbeyi ve dayısı'na yazıldı; merkezin atadığı vali kalmadı.",
  kaynak:"TDV `cezayir`: \"1711’de Sarkan İbrâhim Paşa Cezayir beylerbeyi tayin edilince Sökeli Ali Çavuş onun karaya çıkmasına izin vermeyerek İstanbul’a geri gönderdi\" · TDV `cezayir`: \"kendisine beylerbeyi rütbesi verilerek paşa oldu\"",
  gun:"1711 (TDV gün vermez)" },

{ t:"1729-01-01", b:"Bâbıâli Cezayir'e Osmanlı limanlarını kapattı", tur:"kriz", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Avusturya ile yapılan barışa uymayan ve yeni valiyi karaya çıkarmayan Dayı Abdi Paşa yüzünden Bâbıâli Cezayir'i ağır biçimde uyardı. İtaat etmezlerse Osmanlı topraklarından yararlanamayacakları bildirildi, doğu Akdeniz limanlarına Cezayir gemilerine yardım edilmemesi emredildi. Kriz, Patrona Halil İsyanı'ndan sonra 1731 affıyla kapandı.",
  kaynak:"TDV `cezayir`: \"aksi takdirde Osmanlı topraklarından faydalanmalarının yasaklanacağı, düşmanlarından korunmayacakları ve cezalandırılacakları bildirildi (1729)\" · TDV `cezayir`: \"Aralık 1731 tarihli bir fermanla affedildiler\"",
  gun:"1729 (TDV gün vermez)" },

{ t:"1805-01-01", b:"Derkāvî isyanı: Tilimsân ve Muasker elden çıktı, Mukalleş Mehmed Bey bastırdı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["din","konu-din","konu-siyasi"], yer_id:"Tilimsan", taraflar:["cezayir-ocagi"],
  d:"Derkāviyye şeyhi Abdülkādir b. Şerîf'in ayaklanması batı Cezayir'i sardı; Muasker isyancıların eline geçti, Tilimsân'daki Türk muhafızları iç kaleye sığındı. Garp beyi Mukalleş lakaplı Mehmed Bey isyanı ağır biçimde bastırdı. Tarikat merkezli bu isyan, ocağın taşradaki otoritesinin çözüldüğünü gösterir.",
  kaynak:"TDV `tilimsan`: \"1805’te vuku bulan bu ayaklanma sırasında Tilimsân’daki Osmanlı muhafızları Meşver Kalesi’ne sığındı\" · TDV `muasker`: \"1805 yılında şeyh Abdülkādir b. Şerîf, Muasker’i ele geçirdiyse de\"",
  gun:"1805 (TDV gün vermez)" },

{ t:"1807-01-01", b:"Tunuslu Süleyman Kâhya Kostantîne'yi kuşattı", tur:"kusatma", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Konstantin", taraflar:["cezayir-ocagi","tunus-ocagi"],
  d:"1804'te Kabîliyeli murâbıt İbnü'l-A'reş'in isyanıyla sarsılan Kostantîne'yi bu kez bir Tunus ordusu kuşatıp topa tuttu. Cezayir'den gelen takviye kuvveti üzerine kuşatma kaldırıldı. Olay, iki Garp ocağının birbirine karşı savaşabildiğini gösterir.",
  kaynak:"TDV `kostantine`: \"1804’te Türkler’e karşı isyan eden Kabîliyeli Murâbıtlar’dan İbnü’l-A‘reş’e bağlı güçlerin saldırmasıyla durum daha da kötüleşti\" · TDV `kostantine`: \"Bundan üç yıl sonra da bir Tunus ordusunun başında hücuma kalkan Süleyman Kâhya bir süre şehri kuşatarak topa tuttu\"",
  gun:"1807 (TDV: 1804'ten 'üç yıl sonra'; gün vermez)",
  ic_not_d:"tunus-ocagi penceresi devletler.js'te 1574-01-01 → 1881-05-12; 1807 içinde." },

{ t:"1816-01-01", b:"Lord Exmouth'un İngiliz-Hollanda donanması Cezayir'i bombaladı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","konu-askeri","konu-diplomasi"], yer_id:"Cezayir", taraflar:["cezayir-ocagi"],
  d:"Viyana Kongresi'nin korsanlığın kaldırılması kararını uygulamayı üstlenen İngiltere, Hollanda filosuyla birlikte Cezayir'e bir donanma gönderdi. Şehir bombalandı, Cezayir gemileri batırıldı. Dayı hıristiyan esirleri teslim etmeyi ve tazminat ödemeyi kabul etti; Cezayir korsanlığının sonu bu bombardımanla başladı.",
  kaynak:"TDV `cezayir`: \"Avrupa devletleriyle anlaşarak Cezayir’e Lord Exmont kumandasında bir donanma gönderdi (1816)\"",
  gun:"1816 (TDV gün vermez)" },

{ t:"1817-01-01", b:"Fransa'nın Bastion ticaret merkezi geri verildi", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-ekonomi"], yer_id:"Annaba", taraflar:["cezayir-ocagi"],
  d:"Napolyon'un Mısır seferi üzerine Osmanlı baskısıyla Fransa'ya savaş açan Cezayir, Annâbe yakınındaki Fransız Bastion ticaret merkezine el koymuştu. Merkez bu tarihte Fransa'ya iade edildi. Fransa-Cezayir ekonomik bağının yeniden kurulması, on yıl sonraki borç ve yelpaze krizinin zeminidir.",
  kaynak:"TDV `cezayir`: \"Fransız ticaret merkezi ancak 1817’de geri verildi\"",
  gun:"1817 (TDV gün vermez)",
  ic_not_d:"TDV el koymayı 'Napolyon’un 1789’da Mısır’a saldırması' ile tarihliyor; 1789 dizgi hatası (Mısır seferi korpusta 1798). El koyma ayrı madde yapılmadı." },

{ t:"1833-01-01", b:"Emîr Abdülkādir Tilimsân'ı aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyasi","konu-siyasi"], yer_id:"Tilimsan", taraflar:["abdulkadir"],
  d:"Osmanlı askerlerinin ve kuloğullarının iç kaleye çekildiği Tilimsân'ı Emîr Abdülkādir alarak kendi devletine kattı. Batı Cezayir'in en önemli şehri böylece Fransızlara karşı kurulan direniş devletinin parçası oldu.",
  kaynak:"TDV `tilimsan`: \"Emîr Abdülkādir el-Cezâirî 1833’te Tilimsân’ı alarak kendi topraklarına kattı\"",
  gun:"1833 (TDV gün vermez)",
  ic_not_d:"HARİTA: Tilimsan 1830-07-05'te doğrudan fransa-cumhuriyet'e geçiyor. TDV `tilimsan`: Osmanlı idaresi 1833'e kadar, sonra Abdülkādir, Fransız kısmi işgali 1836, Tâfnâ ile iade 1837, kesin işgal 1842." },

{ t:"1834-07-22", b:"Fransa Kuzey Afrika Genel Valiliği'ni kurdu", tur:"idari", onem:4, dunya:3, kapsam:"dis",
  etiket:["idari","konu-idari"], yer_id:"Cezayir", taraflar:["cezayir-fransiz"],
  d:"İlk yıllardaki kararsızlığı bırakan Kral Louis-Philippe hükümeti Cezayir'i kalıcı olarak elde tutmaya karar verdi ve bir genel valilik kurdu. 1840'a kadar Fransa yalnız kıyı şehirlerini ve birkaç kilit noktayı tutan 'sınırlı işgal' siyaseti izledi.",
  kaynak:"TDV `cezayir`: \"Fransız Kuzey Afrika Genel Valiliği’ni kurdu (22 Temmuz 1834)\"",
  gun:"22 Temmuz 1834" },

{ t:"1835-01-01", b:"Fransızlar Abdülkādir'in merkezi Muasker'e girdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Muaskar", taraflar:["cezayir-fransiz","abdulkadir"],
  d:"Fransız kuvvetleri Emîr Abdülkādir'in başkenti Muasker'e girdi; baruthâne ve silah imalathanesini yıkıp şehri ertesi gün terk ettiler. Abdülkādir şehri geri aldı. Baskın kalıcı bir işgal değil, Fransız 'sınırlı işgal' döneminin cezalandırma seferiydi.",
  kaynak:"TDV `cezayir`: \"1835’te Emîr Abdülkadir’in merkezi Muasker’i ele geçiren Fransız kuvvetleri\"",
  gun:"1835 (TDV `cezayir`; gün vermez)",
  celiski:"TDV `muasker`: \"Muasker 1836 yılında Fransız ordusu tarafından işgal edildi\" || `cezayir` 1835, `muasker` 1836 der." },

{ t:"1837-05-30", b:"Tâfnâ Antlaşması: Fransa Abdülkādir'in batı ve güneydeki hâkimiyetini tanıdı", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Tilimsan", taraflar:["cezayir-fransiz"],
  d:"General Bugeaud'yu yenen Emîr Abdülkādir, Fransa'yı batı ve güney Cezayir'deki hâkimiyetini ve silahlanmasını tanıyan bir antlaşmaya zorladı. Emîr ülkenin üçte ikisine hâkim oldu; Tilimsân da ona bırakıldı. Fransa ise batıdaki kuvvetlerini doğuya kaydırıp aynı yıl Kostantîne'yi aldı.",
  kaynak:"TDV `cezayir`: \"Tâfnâ Antlaşması imzalandı (30 Mayıs 1837)\" · TDV `abdulkadir-el-cezairi`: \"30 Mayıs 1837’de Tâfnâ Antlaşması’nı imzalaması, onu memleketin üçte ikisine hâkim kıldı\"",
  gun:"30 Mayıs 1837",
  ic_not_d:"yer_id Tilimsan: antlaşma şehri Abdülkādir'e bıraktığı için (TDV `tilimsan`); imza yeri Tâfnâ ırmağı listede yok." },

{ t:"1842-01-01", b:"Fransa Tilimsân'ı ikinci kez ve kalıcı olarak işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"Tilimsan", taraflar:["cezayir-fransiz","abdulkadir"],
  d:"Tâfnâ Antlaşması'nı yok sayan Fransızlar Tilimsân'ı yeniden işgal etti; bu kez şehir 1962'ye kadar Fransız idaresinde kaldı. İşgali kabul etmeyen pek çok aile şehri terk edip Fas'a ve Osmanlı ülkelerine göç etti.",
  kaynak:"TDV `tilimsan`: \"Ancak 1842’de antlaşmayı yok sayıp ikinci işgal dönemini başlattılar\"",
  gun:"1842 (TDV gün vermez)",
  ic_not_d:"Harita Tilimsan'ı 1830-07-05'ten beri Fransız çiziyor; bu kırılma haritada yok." },

{ t:"1844-09-10", b:"Tanca Antlaşması: Fas Abdülkādir'e desteği kesti", tur:"antlasma", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Tanca", taraflar:["abdulkadir","cezayir-fransiz"],
  d:"İssi (Isly) yenilgisinden sonra Fas sultanı Fransa ile antlaşma imzalayıp Emîr Abdülkādir'e yardım etmemeyi ve onu topraklarında barındırmamayı kabul etti. Abdülkādir'in son dış dayanağı böylece çöktü; emîr gerilla savaşına döndü.",
  kaynak:"TDV `cezayir`: \"Tanca Antlaşması’yla (10 Eylül 1844)\"",
  gun:"10 Eylül 1844 (TDV `cezayir`)",
  celiski:"TDV `abdulkadir-el-cezairi`: \"1844 Ekiminde imzalanan Tanca Antlaşması’yla\" || `cezayir` 10 Eylül, `abdulkadir-el-cezairi` Ekim 1844 der." },

{ t:"1845-01-01", b:"Abdülkādir Sîdî İbrâhîm'de bir Fransız birliğini bozguna uğrattı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","konu-askeri"], yer_id:"", odak_yer:["Nedrûme","Tilimsan"], taraflar:["abdulkadir","cezayir-fransiz"],
  d:"Fas'tan Cezayir topraklarına dönen Emîr Abdülkādir, Sîdî İbrâhîm'de bir Fransız birliğini yendi. Zafere rağmen artan Fransız baskısı kabileleri emîrden uzaklaştırdı ve Abdülkādir 1846 yazında yeniden Fas'a sığınmak zorunda kaldı.",
  kaynak:"TDV `abdulkadir-el-cezairi`: \"bir Fransız birliğini 1845 Ekiminde Şîdî-Brâhîm’de bozguna uğrattıysa da\"",
  gun:"Ekim 1845 (TDV gün vermez)",
  ic_not_d:"Sîdî İbrâhîm yer listesinde yok; yer_id boş. · ODAK: Sîdî İbrâhîm yerleşim olarak yok; batı Cezayir-Fas sınırı — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1847-01-01", b:"Osmanlı Devleti Fransız işgalini tanıdı, Cezayir üzerindeki haklarından vazgeçti", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Cezayir", taraflar:["cezayir-fransiz"],
  d:"1830'dan beri işgali yalnız protesto etmekle yetinen Osmanlı hükümeti Fransız işgalini tanıdı. Cezayir üzerindeki haklarının sona erdiğini ilan etti. Üç yüzyıllık Garp ocağı böylece hukuken de Osmanlı'dan koptu.",
  kaynak:"TDV `cezayir`: \"1847’de Fransız işgalini tanıyarak Cezayir üzerindeki haklarının sona erdiğini ilân etti\"",
  gun:"1847 (TDV gün vermez)" },

{ t:"1847-12-23", b:"Emîr Abdülkādir Fransızlara teslim oldu", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"", odak_yer:["Nedrûme","Tilimsan"], taraflar:["cezayir-fransiz"],
  d:"Fas sultanının kuvvetleri de yenilince Emîr Abdülkādir Fransızlara teslim oldu. Kendisine verilen söze rağmen beş yıl Fransa'da tutuldu, sonra Bursa ve Şam'a yerleşti. Teslim, batı Cezayir'deki örgütlü direnişin ve Abdülkādir devletinin sonudur.",
  kaynak:"TDV `abdulkadir-el-cezairi`: \"Sultanın kuvvetlerinin yenilmesi üzerine, 23 Aralık 1847’de Fransızlar’a teslim oldu\" · TDV `cezayir`: \"Muhammed b. Abdullah’ı teslim olmaya mecbur ettiler (23 Aralık 1847)\"",
  gun:"23 Aralık 1847",
  ic_not_d:"TDV teslim yerini vermez; yer_id boş. · ODAK: batı Cezayir-Fas sınırı — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1848-01-01", b:"Kostantîne'nin son beyi Ahmed Bey esir alındı", tur:"son", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"", odak_yer:["Batna","Biskra"], taraflar:["cezayir-fransiz"],
  d:"1837'de Kostantîne'yi kaybeden kuloğlu Ahmed Bey Sahrâ'ya çekilip on bir yıl Fransızlara karşı savaştı. Bu tarihte teslim alındı ve esarette öldü. Onun teslimiyle doğu Cezayir'deki son Osmanlı kökenli direniş sona erdi, ülkenin büyük kısmı Fransız denetimine girdi.",
  kaynak:"TDV `cezayir`: \"Ardından Ahmed Bey de teslim alınınca (1848) ülkenin büyük bölümü Fransız kuvvetlerinin denetimi altına girmiş oldu\" · TDV `kostantine`: \"Ahmed Bey Sahrâ’ya çekilip on bir yıl süreyle Fransızlar’a karşı savaştı, ancak sonunda esir düştü\"",
  gun:"1848 (TDV gün vermez)",
  ic_not_d:"konstantin-beyligi künyesi 1844-03-04'te bittiği için taraf yalnız cezayir-fransiz. Teslim yeri TDV'de yok. · ODAK: Ahmed Bey'in çekildiği Sahrâ kenarı — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1870-01-01", b:"Cezayir askerî idareden sivil idareye geçirildi", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["idari","konu-idari"], yer_id:"Cezayir", taraflar:["cezayir-fransiz"],
  d:"Arap Büroları eliyle yürütülen kırk yıllık askerî yönetim kaldırıldı ve Cezayir Paris'teki İçişleri Bakanlığı'na bağlandı. Değişiklik Avrupalı yerleşimcilerin ağırlığını arttırdı; hemen ardından büyük Mukrânî ayaklanması patladı.",
  kaynak:"TDV `cezayir`: \"1870’te sivil idareye geçirilen Cezayir Paris’teki İçişleri Bakanlığı’na bağlandı\"",
  gun:"1870 (TDV gün vermez)" },

{ t:"1871-01-01", b:"Mukrânî ayaklanması", tur:"isyan", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"Tîzî Vezzû (Kabiliye)", taraflar:["cezayir-fransiz"],
  d:"Askerî idarenin kalkmasının hemen ardından Muhammed el-Mukrânî'nin çevresinde toplanan iki yüze yakın kabile ayaklandı; hareket ülkenin hemen tamamına yayıldı. Rahmâniyye tarikatı mensupları isyanda öne çıktı, Kabîliye'den on binlerce kişi katıldı. Sömürge yönetimi isyanları ancak 1884'te kanlı biçimde bastırabildi.",
  kaynak:"TDV `cezayir`: \"Muhammed el-Mukrânî’nin liderliğinde toplanan 200’e yakın kabile, hemen hemen ülkenin tamamına yayılan bir ayaklanma başlattı (1871)\" · TDV `kabiliye`: \"aynı yılda çıkan Muhammed el-Mukrânî ayaklanmasına da 180.000 Kabîliyeli katıldı\"",
  gun:"1871 (TDV gün vermez)" },

{ t:"1882-01-01", b:"Vakıflara el konması üzerine Mizâb isyanı", tur:"isyan", onem:2, dunya:1, kapsam:"ic",
  etiket:["din","konu-din","konu-siyasi"], yer_id:"Gardâye", taraflar:["cezayir-fransiz"],
  d:"Sömürge idaresinin Cezayir'deki vakıfları devlet mülküne çevirmesi, İbâzî Mizâb vadisinde de büyük tepki doğurdu ve isyana yol açtı. Olay, Fransız yönetiminin Sahrâ kapısındaki vahalara da doğrudan müdahale etmeye başladığını gösterir.",
  kaynak:"TDV `mizab`: \"Fransa’nın Cezayir’deki vakıfları sömürge idaresinin mülkü haline getirmesi, ülkenin diğer yerlerinde olduğu gibi Mizâb’da da büyük tepkilere ve 1882 yılında isyana sebep oldu\"",
  gun:"1882 (TDV gün vermez)" },

{ t:"1920-01-01", b:"Emîr Hâlid 'Jeune Algérien' teşkilâtını kurdu", tur:"siyaset", onem:3, dunya:2, kapsam:"ic",
  etiket:["siyasi","konu-siyasi"], yer_id:"Cezayir", taraflar:["cezayir-fransiz"],
  d:"Emîr Abdülkādir'in torunu Emîr Hâlid, haklarda eşitlik, İslâmî kimliğin korunması ve yerli halka seçme hakkı talep eden bir teşkilât kurdu. Emîr Hâlid'in üç yıl sonra sürgüne gönderilmesiyle dağıldı ama Cezayir millî hareketinin ilk örgütlü adımlarından biri oldu.",
  kaynak:"TDV `cezayir`: \"Emîr Abdülkādir’in torunu Emîr Hâlid önderliğinde 1920 yılında kurulan Jeune Algérien adlı milliyetçi ve reformcu teşkilâtın\"",
  gun:"1920 (TDV gün vermez)" }

];
