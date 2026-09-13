// ============================================================================
// 🟢 TAŞINDI — `data/ekokuma_kadin.js`e taşındı (13 Eylül 2026, koordinatör
// kararı M-3719 sonrası). BU DOSYA ARTIK YALNIZ ARŞİV/GEREKÇE — canlı kopya
// data/ekokuma_kadin.js'dedir, ELLE SENKRONİZE EDİLMEZ (D034: iki yerde duran
// bilgi ayrışır). Aşağıdaki tarihli notlar taşıma ANINDAKİ durumu anlatır.
// ============================================================================
// TASLAK — data/ekokuma_kadin.js olacak (window.EKOKUMA_KADIN)
// ============================================================================
// KITA 27 · 13 Eylül 2026 · paket 0046 H-0008 · şartname:
// oturumlar/KITA-27-KADIN-SULTANLAR-0046.md
//
// 🔴 BU DOSYA HENÜZ data/ ALTINA TAŞINMADI — kapının taradığı yerin DIŞINDA
// duruyor (KITA 20'nin denetim/TUR-KITA20-SAVAS-0913.md §⑤'teki emsaliyle
// aynı gerekçe: js/app.js henüz EKOKUMA_KADIN'ı okumuyor, denetle_yayin.py
// zaten kırmızı). KITA 12'ye M-3689/M-3693 ile istenen iki satır (loader +
// kimdir/tartisma kaynak() birleşimi) inince İÇERİK BİREBİR AYNI kalarak
// `data/ekokuma_kadin.js`e taşınacak.
//
// ── TÜR KARARI (şartname madde ①) ───────────────────────────────────────────
// 6 kişi kartı → "kimdir" (mevcut, 0 kart, buton kurulu). Biyografi türüne
// birebir uyuyor, yeni tür GEREKMEDİ.
// "Kadınlar Saltanatı" dönem/kavram kartı → "tartisma" (mevcut, 0 kart).
// Terimin kendisi tarihyazımında tartışmalı; "tartışma" etiketi bunu
// doğru temsil ediyor, "sebep-sonuc" tek bir sebep→sonuç çiftine
// sıkıştırmayı gerektirirdi ve buraya UYMUYOR (KITA 20'nin aynı gerekçesi:
// sebep-sonuc şeması "sebep.b → sonuc.b" başlığı basıyor, bu kart öyle
// bir çift taşımıyor).
//
// ── ALAN SEÇİMİ — `ekKartHtml`in "SON ÇARE DALI"na göre KASITLI DAR ────────
// 🔴🔴 ÖLÇÜLDÜ (js/app.js:6696-6714): "kimdir" ve "tartisma" için ÖZEL bir
// render dalı YOK — ikisi de "son çare dalı"na düşüyor ve O DAL YALNIZ ŞU
// ALANLARI TANIYOR:
//   başlık:  k.baslik || k.ad || k.soru
//   gövde:   ["ozet","metin","kisa","not","bag","aciklama"] (bu SIRAYLA,
//            yalnız STRING olanlar, başka hiçbir alan adı OKUNMUYOR)
//   altbilgi: k.kaynak (her zaman)
// ⇒ Bu yüzden "yasadigi_donem", "hangi_padisahlar", "siyasi_rol" gibi
// AYRI/YAPISAL alanlar İCAT ETMEDİM — D099'un birebir tekrarı olurdu
// (yazılan veri sessizce görünmez kalır). Bütün biyografik içerik TEK
// `metin` alanında akan bir anlatı olarak yazıldı; `kisa` tek cümlelik
// çengel, `bag`/`not` ikincil not için ayrıldı. SONUÇ: KITA 12'nin app.js'e
// dokunması yalnız İKİ satırla sınırlı kalıyor (loader + kaynak() birleşimi)
// — ayrı bir render dalı İSTEMİYORUM, gerekmiyor.
//
// ── OLAY BAĞLANTISI — her `olay:` tarihi data/olaylar_ek*.js'de BİREBİR
// var olan bir `t:` değeri (grep ile doğrulandı, uydurulmadı). KAYNAK ADI
// EKLEMEDİM/DEĞİŞTİRMEDİM — data/olaylar*.js KITA 14'ün dosyası (§③).
//
// ── KAYNAK — TDV gövdeleri WebFetch ile okunarak (CLAUDE.md §4), KENDİ
// CÜMLELERİMLE özetlendi; TDV metni KOPYALANMADI (ORTAK-0045 §④ telif
// kırmızı çizgisi). "Kadınlar Saltanatı" tartışma kartı için AYRICA:
// Leslie P. Peirce, "The Imperial Harem: Women and Sovereignty in the
// Ottoman Empire", Oxford University Press, 1993 (akademik monografi,
// 🟢 KABUL listesi — üniversite yayını) ve Ahmed Refik Altınay'ın 1916
// tarihli "Kadınlar Saltanatı" adlı eserinin terimin KAYNAĞI olduğuna dair
// bibliyografik atıf (yayın yılı/yazarı birden çok kitapçı kaydıyla
// çapraz doğrulandı — Scribd/popüler tarih siteleri İÇERİK kaynağı olarak
// KULLANILMADI, yalnız bibliyografik tarih teyidi için görüldü).
//
// ── BULUNAMADI / ÖLÇÜLEMEDİ — açıkça ─────────────────────────────────────
// 🔴🔴 KENDİ HATAM, KENDİM DÜZELTTİM — D064 vakası (§4 Türkçe yazım ekseni).
//    İlk taramamda "Nurban|Nur Banu" (ASCII) aradım ve SIFIR sonuç aldım;
//    kendi taslağıma "Nurbanu'nun kronolojide hiç maddesi yok" diye
//    YANLIŞ bir "bulunamadı" yazmıştım. Sayım turunda (④) gerçek yazımı
//    "Nurbânû" (â/û) olduğunu gördüm ve `olay_ek7.js:55`de tam kaydı VAR:
//    `t:"1583-12-07"` — ölümü, TDV kaynaklı. Kart güncellendi. ⇒ "atlasta
//    yok" hükmü normalleştiricisiz bir aramayla verilemez (D054) — burada
//    "atlas" değil KENDİ ARAMAM yanılttı, ders aynı.
// 🟡 KADINLAR SALTANATI KARTI — MÜKERRER OLASILIĞI, coordinatöre soruldu
//    (tahtada ayrıca). `data/merak.js:148-161` id:"kadinlar-saltanati"
//    ZATEN VAR: üç görüş (yapısal boşluk/etki abartılmış/ölçüt sorunu),
//    TDV kaynaklı, `baglanti:["1534-01-01","1558-04-15","1595-02-01",
//    "1651-09-02"]`. BENİM kartım FARKLI bir açıdan yazıldı (terimin
//    KAYNAĞI — Ahmed Refik Altınay 1916 — ve Leslie Peirce'in akademik
//    yeniden-çerçevelemesi, adıyla), ama KONU AYNI ve okuyucu iki kartı
//    art arda görürse tekrar hissedebilir. Kartı SİLMEDİM (Ahmed
//    Refik/Peirce ismi yeni bilgi taşıyor) ama data/'ya taşımadan ÖNCE
//    koordinatörün kararını bekliyorum: (a) ikisi ayrı kovada kalsın
//    (tartisma ≠ merak, farklı düğmeler) (b) benimki merak.js'e MADDE
//    olarak eklensin (o dosyanın sahibi ben değilim) (c) benimki hiç
//    yazılmasın. `bag` alanına çapraz referans EKLENDİ.
// 🔴 Hürrem Sultan'ın Şehzade Mustafa'nın 1553 idamındaki PAYININ
//    BÜYÜKLÜĞÜ tarihçiler arasında tartışmalı — TDV "rol oynadı" diyor
//    ama bu iddianın kendisi (kumpas kurduğu, tek sorumlu olduğu gibi
//    popüler anlatılarda abartılan bir iddia) akademik olarak kesin
//    değil. Kartın `kesinlik` alanı bu yüzden "tartismali" (yalnız o tek
//    cümle için — evlilik/vakıf/ölüm tarihleri KESİN).
// ⚪ Peirce'in kitabının TAM METNİNİ OKUMADIM (erişimim yok) — yalnız
//    çok kaynaklı akademik ÖZETLERİNDEN (kitap tanıtımları, ansiklopedi
//    girişleri) süzülmüş, birbirini doğrulayan bir konsensüsü aktarıyorum.
//    Bu D107'nin "okumadım" damgasıyla işaretlenmiş bir sınırdır.
// ============================================================================

window.EKOKUMA_KADIN = [

{ id:"kimdir-hurrem-sultan", tur:"kimdir",
  ad:"Hürrem Sultan",
  kisa:"Bir cariyeden nikâhlı Haseki Sultan'a: Kanûnî'nin resmen nikâhlandığı ilk ve tek eşi, oğlunun tahtı için sarayın en güçlü kadını oldu.",
  metin:"Kanûnî Sultan Süleyman'ın cariyesiyken 1533-34 dolayında onunla resmen nikâhlanarak önceki hiçbir padişahta görülmemiş bir kırılma yarattı ve fiilen \"Haseki Sultan\" kurumunu başlattı. Oğlu Şehzade Selim'in (sonradan II. Selim) tahta geçmesi için sarayda uzun soluklu bir siyaset yürüttü: Sadrazam İbrahim Paşa'nın 1536'daki düşüşünde ve rakip veliaht Şehzade Mustafa'nın 1553'teki idamında etkili olduğu TDV'de aktarılır — bu son iddianın tam BOYUTU tarihçiler arasında tartışmalıdır. Kızı Mihrimah'ı damat Rüstem Paşa ile evlendirerek (1539) sarayda geniş bir ittifak kurdu; Rüstem'in 1555'te ikinci kez sadrazamlığa dönüşünde de bu ittifakın payı vardı. İstanbul'daki Haseki Külliyesi'nin yanı sıra Mekke, Medine ve Kudüs'te vakıflar kurarak hayır faaliyetleriyle de tanınır. 15 Nisan 1558'de öldü, Süleymaniye Külliyesi'nde gömülüdür.",
  not:"Şehzade Mustafa'nın idamındaki payının BÜYÜKLÜĞÜ tartışmalı; evlilik/vakıf/ölüm tarihleri kesindir.",
  kesinlik:"tartismali",
  olay:["1534-01-01","1555-09-29","1558-04-15"],
  kaynak:"TDV: hurrem-sultan" },

{ id:"kimdir-nurbanu-sultan", tur:"kimdir",
  ad:"Nurbanu Sultan",
  kisa:"1574'te ilk resmî \"Vâlide Sultan\": kurumu fiilen başlatan kadın.",
  metin:"II. Selim'in hasekisi ve III. Murad'ın annesiydi. Oğlunun 1574'te tahta çıkmasıyla \"Vâlide Sultan\" unvanını RESMEN taşıyan ilk kişi oldu ve devlet işlerinde, atamalarda etkili oldu. TDV'ye göre Venedik ile sürdürdüğü yakın diplomatik temas, dönemin Osmanlı-Venedik gerginliklerinin yumuşamasına katkı sağladı; Fransa Kraliçesi Catherine de Medici ile de mektuplaştığı, ticaret ilişkilerinin gelişmesinde rol oynadığı aktarılır. Üsküdar'daki Atik Vâlide Külliyesi'ni (cami, medrese, imaret, kütüphane) yaptırdı — külliyedeki kütüphane, bir kadın banisi tarafından kurulan ilk kütüphane olarak anılır. 7 Aralık 1583'te öldü, cenazesine oğlu III. Murad bizzat katıldı.",
  kesinlik:"kesin",
  olay:["1583-12-07"],
  kaynak:"TDV: nurbanu-sultan · valide-sultan" },

{ id:"kimdir-safiye-sultan", tur:"kimdir",
  ad:"Safiye Sultan",
  kisa:"İngiltere Kraliçesi I. Elizabeth'le doğrudan mektuplaşan tek Osmanlı vâlide sultanı.",
  metin:"III. Murad'ın hasekisi, III. Mehmed'in annesiydi. 1595'te oğlunun cülûsuyla vâlide sultan oldu; TDV'nin ifadesiyle sadrazamdan şeyhülislâma kadar birçok atamada söz sahibi oldu. Kraliçe I. Elizabeth ile doğrudan mektuplaşan ve hediye teâtisinde bulunan (1593'te mücevherli bir portre karşılığında işlemeli kumaşlar gönderdiği) tek Osmanlı vâlide sultanıdır — bu yazışma dönemin İngiliz-Osmanlı ticaret diplomasisinin bir parçasıydı. 1598'de Eminönü'nde Yeni Cami'nin inşasını başlattı, ama 1603'te oğlunun ölümüyle saraydan uzaklaştırılınca inşaat yarım kaldı; yapı ancak altmış yılı aşkın süre sonra, 1665'te başka bir vâlide sultan olan Turhan Hatice tarafından tamamlanacaktı. Ocak 1619'da öldü.",
  kesinlik:"kesin",
  olay:["1595-01-16","1598-04-09","1603-01-01"],
  kaynak:"TDV: safiye-sultan" },

{ id:"kimdir-kosem-sultan", tur:"kimdir",
  ad:"Kösem Sultan",
  kisa:"İki oğlu ve bir torununun saltanatında devleti fiilen yöneten, sonunda haremde boğdurularak öldürülen tek vâlide sultan.",
  metin:"I. Ahmed'in hasekisi; IV. Murad ve Sultan İbrahim'in annesi, IV. Mehmed'in büyükannesiydi. IV. Murad on bir-on iki yaşında tahta çıktığında (1623) devlet işlerini fiilen yürüttü. İbrahim'in akıl sağlığı sorunları nedeniyle onun döneminde de (1640-48) etkisini sürdürdü. IV. Mehmed'in 1648'de yedi yaşında cülûsundan sonra \"Büyük Vâlide\" sıfatıyla nâiplik yaptı, ama bu kez genç padişahın öz annesi Turhan Hatice Sultan ile bir güç mücadelesine girdi. Bu çekişme 2 Eylül 1651'de, Turhan tarafını tutan bir grup ağanın Kösem'i harem içinde boğdurarak öldürmesiyle sonuçlandı — Osmanlı tarihinde bir vâlide sultanın bu şekilde öldürülmesinin tek örneğidir.",
  kesinlik:"kesin",
  olay:["1623-09-10","1640-02-09","1651-09-02"],
  kaynak:"TDV: kosem-sultan" },

{ id:"kimdir-turhan-hatice-sultan", tur:"kimdir",
  ad:"Turhan Hatice Sultan",
  kisa:"Rakibi Kösem'i saf dışı bırakıp devleti Köprülü Mehmed Paşa'ya emanet ederek yaklaşık yarım asır sürecek bir dönemi açan vâlide sultan.",
  metin:"IV. Mehmed'in annesiydi. Oğlunun 1648'de yedi yaşında tahta çıkmasıyla vâlide sultan oldu, ama ilk üç yıl kayınvalidesi Kösem Sultan'ın gölgesinde kaldı. 1651'de kendisine bağlı bir grup ağanın Kösem'i öldürmesiyle tek başına iktidara geldi. 1656'da, danışmanı Kasım Ağa'nın önerisi üzerine, dört şart öne süren yaşlı bir taşra paşası olan Köprülü Mehmed Paşa'yı sadrazamlığa getirerek devletin idaresini ona bıraktı; bu atama yaklaşık yarım asır sürecek Köprülüler dönemini başlattı. Annesi Safiye Sultan'ın yarım bıraktığı Yeni Cami'yi 1665'te tamamlattı. 5 Temmuz 1683'te Edirne'de öldü, İstanbul'daki Yeni Cami Külliyesi'nde gömülüdür.",
  kesinlik:"kesin",
  olay:["1648-08-08","1648-08-18","1651-09-02","1656-09-15","1665-10-30"],
  kaynak:"TDV: turhan-sultan" },

{ id:"kimdir-mihrimah-sultan", tur:"kimdir",
  ad:"Mihrimah Sultan",
  kisa:"Kanûnî'nin hayatta kalan tek kızı; babasının yaşlılık döneminde devlet işlerinde danıştığı kadın.",
  metin:"Kanûnî Sultan Süleyman ile Hürrem Sultan'ın kızıydı ve padişahın hayatta kalan tek kızıydı. 1539'da Rüstem Paşa ile evlendirildi; kocasının 1544'te ve 1555'te iki kez sadrazamlığa getirilmesinde annesiyle birlikte etkili olduğu aktarılır — önce kardeşi Şehzade Bâyezid'i, veliahtlık mücadelesi kızıştıktan sonra ise Şehzade Selim'i destekledi. Babasının yaşlılık döneminde önemli konularda kendisine danıştığı, saraydaki nüfuzunu ölümüne kadar koruyan bir figürdü. Üsküdar'da ve Mimar Sinan yapımı Edirnekapı'da birer külliye yaptırdı, Mekke'de su yollarının onarımı için büyük bağışta bulundu (\"Mihrimah Suyu\"). 25 Ocak 1578'de öldü.",
  kesinlik:"kesin",
  olay:["1547-01-01","1555-09-29","1566-01-01"],
  kaynak:"TDV: mihrimah-sultan" },

{ id:"tartisma-kadinlar-saltanati", tur:"tartisma",
  ad:"\"Kadınlar Saltanatı\" — bir dönem mi, bir suçlama mı?",
  kisa:"Terim 1916'da icat edildi ve baştan itibaren bir eleştiriydi; günümüz akademisi aynı olguyu tersinden okuyor.",
  metin:"16. yüzyıl sonu ile 17. yüzyıl ortası arasındaki, vâlide sultanların ve haseki sultanların devlet işlerinde belirgin biçimde etkili olduğu döneme bu adı, tarihçi Ahmed Refik Altınay'ın 1916'da yayımladığı \"Kadınlar Saltanatı\" adlı kitabı verdi. Ahmed Refik ve onu izleyen erken Cumhuriyet dönemi tarihyazımı bu dönemi imparatorluğun \"duraklama/gerileme\" anlatısı içinde bir sapma, kadınların ve haremin devlet yönetimine \"haksız\" bir müdahalesi olarak sundu — TDV'nin kendi \"Vâlide Sultan\" maddesi de bu adlandırmayı, döneme ve figürlere (özellikle Nurbânû, Safiye, Kösem ve Turhan Hatice) atıfla aktarır. 1990'larda tarihçi Leslie Peirce, \"The Imperial Harem: Women and Sovereignty in the Ottoman Empire\" (Oxford University Press, 1993) adlı çalışmasıyla TERİMİN KENDİSİNİ akademik olarak sorguladı ve tarihyazımına \"kadınların yönettiği miydi\" sorusundan önce \"bu adı kim, ne zaman ve niçin koydu\" sorusunu sormayı öğretti — sorunun ikinci yarısının cevabı, yani olgunun kendisinin tartışılması, bu kartın değil 'Merak' bölümündeki kadinlar-saltanati kartının konusudur. Bu ayrım bugün de önemli: terim popüler kullanımda tarafsız bir dönem adı gibi geçse de, kökeninde 20. yüzyıl başının eleştirel/yargılayıcı bir bakış açısı vardır.",
  bag:"İlgili: merak.js kadinlar-saltanati (o kart 'gerçek bir yönetim biçimi miydi' sorusunu üç görüşle tartışır; bu kart yalnız TERİMİN TARİHİNİ anlatır, o üç görüşü tekrar etmez).",
  not:"Peirce'in kitabının tam metni okunmadı (erişim yok); burada aktarılan, birden çok bağımsız akademik özetin/tanıtımın YAKINSADIĞI bir konsensüstür — D107 gereği 'okumadım' diye ayrıca damgalanır.",
  kesinlik:"tartismali",
  olay:["1595-01-16","1651-09-02"],
  kaynak:"TDV: valide-sultan · nurbanu-sultan · safiye-sultan · kosem-sultan · turhan-sultan · hurrem-sultan · mihrimah-sultan · Leslie P. Peirce, \"The Imperial Harem: Women and Sovereignty in the Ottoman Empire\", Oxford University Press, 1993 · Ahmed Refik Altınay, \"Kadınlar Saltanatı\" (1916) — terimin kaynağı, bibliyografik atıf" }

];
