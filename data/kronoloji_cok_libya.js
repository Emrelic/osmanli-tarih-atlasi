// =====================================================================
// LİBYA / TRABLUSGARP — ÇOK KÜNYELİ KRONOLOJİ (KRONO-MAGRIB-0929, 29 Eylül 2026)
// Oturum: KRONO-MAGRIB-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
// 🔴 `Trablus` = TRABLUSGARP (Libya). Trablusşam (Lübnan) başka yerdir.
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_LIBYA → app.js cokTarafliKronolojiEkle: her madde
// `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez; t+b tekrarı atlanır).
// Künyeler (data/devletler.js'ten okundu, madde tarihi pencere içinde):
//   ispanya                1510-1530 İspanyol Trablus'u (1519 Tâcûrâ heyeti)
//   trablusgarp-ocagi      1551-01-01 → 1911-10-09  (valiler · dayılar ·
//                          Karamanlılar 1711-1835 · merkezî vilâyet 1835-1911)
//   senusi                 1837-01-01 → 1923-10-29
//   italya                 1911 sonrası işgal ve direniş
//   ingiltere · fransa · fransa-cumhuriyet · abd · rodos-sovalyeleri · tunus-ocagi
//                          yalnız ikinci taraf olarak
//   trablus-cumhuriyeti    🔴 KÜNYE YOK — ÖNERİLEN id (M-5416 kural 3; 1 madde,
//                          bkz. denetim/KRONO-MAGRIB-0929-KUNYE.md)
//
// ── MÜKERRER DİSİPLİNİ ─────────────────────────────────────────────
// kronoloji_kuzeyafrika.js'in Trablusgarp maddeleri (1551·1556·1711·1801·
// 1805·1835·1911·1912), ammarogullari künyesinin 6 maddesi, olaylar*.js
// (1510·1530·1551·1556·1577·1711·1835·1856·1911-12) TEKRARLANMADI.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Yalnız TDV İslâm Ansiklopedisi. `kaynak:` alanındaki tırnaklı metin TDV
// gövdesinden BİREBİR alıntıdır (her biri makine ile gövdede arandı).
// Kullanılan maddeler: trablusgarp · trablusgarp-savasi · libya · karamanli ·
// garp-ocaklari · dayi--garp-ocaklari · turgut-reis · bingazi · derne · fizan ·
// berka · cagbub · senusiyye · senusi-muhammed-b-ali · senusi-muhammed-mehdi ·
// senusi-ahmed-serif · idris-i--senusiler · omer-el-muhtar · enver-pasa
//
// ── TARİH KURALI ──────────────────────────────────────────────────
// Gün bilinmiyorsa t:"YYYY-01-01" ve `gun:` alanı hassasiyeti açıklar. Ay bilinen
// ama gün bilinmeyen maddeler (1914 Fizan · 1915 Sellûm · 1917 Akrama) yıl başına
// düşer; sıralamada aynı yılın günlü maddelerinden ÖNCE görünür, `gun:` doğrusunu söyler.
// `ic_not_d:` editoryal not (harita ile çelişki, TDV iç çelişkisi) — gösterilmez.
// =====================================================================

window.KRONOLOJI_COK_LIBYA = [

{ t:"1519-01-01", b:"Tâcûrâ heyeti İstanbul'da — Hadım Murad Ağa beylerbeyi unvanıyla gönderildi", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-siyasi"], yer_id:"Trablus", taraflar:["ispanya"],
  d:"İspanyol işgalinden kaçıp Tâcûrâ'ya sığınan Trablus halkı İstanbul'a heyet göndererek yardım istedi. Divân-ı Hümâyun, Hadım Murad Ağa'yı bir filo ve askerle beylerbeyi unvanıyla bölgeye yolladı; birlikler Tâcûrâ'da toplandı. Böylece Trablus'un 1551 fethine uzanan Osmanlı varlığı İspanyol kalesinin kapısında kurulmuş oldu.",
  kaynak:"TDV `trablusgarp`: \"925’te (1519) İstanbul’a bir heyet yollayan Trablusgarp halkı İspanyol istilâsına karşı yardım talebinde bulundu\" · TDV `libya`: \"1519’da Tâcûrâ’dan bir heyet İstanbul’a gelip kurtarılmalarını yeniden istedi\"",
  gun:"1519 (TDV gün vermez; Hicrî 925)",
  celiski:"TDV `garp-ocaklari`: \"1545-1546’da Trablusgarplılar Türkler’den yardım isteyince Murad Paşa onların yardımına koştu\" — trablusgarp/libya 1519 der.",
  ic_not_d:"Taraf olarak işgalci ispanya künyesi yazıldı (trablusgarp-ocagi 1551'de başlıyor). yer_id Trablus: Tâcûrâ listede yok, 40 km doğusunda." },

{ t:"1560-08-04", b:"Cerbe zaferinin ardından Piyâle Paşa isyancı Arapları te'dip için Trablusgarp'a geçti", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-askeri"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Cerbe'nin fethinden hemen sonra Osmanlı donanması askerleri gemilere bindirip Trablusgarp'a götürdü. Amaç, eyaletin iç kesimlerinde Turgut Reis'e karşı ayaklanan Arap kabilelerini cezalandırmaktı. Deniz zaferi böylece eyaletin iç asayişini pekiştirmeye çevrildi.",
  kaynak:"TDV `turgut-reis`: \"Cerbe’nin fethinden sonra Piyâle Paşa, askeri gemilere bindirerek 4 Ağustos’ta isyancı Araplar’ı te’dip etmek için Trablusgarp’a geçti\"",
  gun:"4 Ağustos 1560" },

{ t:"1565-06-23", b:"Trablusgarp Beylerbeyi Turgut Reis Malta kuşatmasında öldü", tur:"olum", onem:4, dunya:3, kapsam:"dis",
  etiket:["olum","konu-askeri","konu-siyasi"], yer_id:"Malta", taraflar:["trablusgarp-ocagi","rodos-sovalyeleri"],
  d:"Malta seferine gönüllü reislerle katılan Trablusgarp beylerbeyi Turgut Reis, 18 Haziran'da başından ağır yaralandı ve Saint Elmo Kalesi'nin alındığı gün öldü. Cenazesi kendi kadırgalarıyla Trablusgarp'a götürülüp yaptırdığı caminin hazîresine gömüldü. Dokuz yıllık valiliği eyaletin kabileleri devlete bağlaması ve şehrin refahıyla anılır.",
  kaynak:"TDV `turgut-reis`: \"24 Zilkade 972’de (23 Haziran 1565) Malta’daki Santarma (Saint Elmo) Kalesi’nin fethedildiği gün bu yara sebebiyle öldü\"",
  gun:"23 Haziran 1565" },

{ t:"1578-01-01", b:"Bingazi kesin olarak Osmanlı yönetimine katıldı — Trablusgarp'ın sancağı oldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], yer_id:"Bingazi", taraflar:["trablusgarp-ocagi"],
  d:"1551 Trablusgarp seferiyle Berka bölgesi Osmanlı hâkimiyetine girmişti; Bingazi şehri ise 1578'de kesin olarak Osmanlı yönetimine katıldı. Bundan sonra Bingazi, Trablusgarp eyaletinin bir sancağı olarak önce dayıların, sonra Karamanlı ailesinin idaresinde kaldı.",
  kaynak:"TDV `bingazi`: \"1551 Trablusgarp seferi sırasında Berka bölgesinin Osmanlı hâkimiyetine girmesinden sonra Bingazi de kesin olarak Osmanlı yönetimine katıldı (1578)\"",
  gun:"1578 (TDV gün vermez)",
  ic_not_d:"Harita Bingazi'yi 1551-08-15'ten beri OSMANLI gösteriyor; TDV 'kesin olarak' ifadesini 1578 için kullanıyor. Harita değişikliği ÖNERİLMİYOR (1551 seferi Berka'yı almıştı), yalnız CAKISMA'ya yazıldı." },

{ t:"1603-01-01", b:"Trablusgarp'ta dayılar dönemi başladı — yeniçeri reisleri yönetime hâkim oldu", tur:"siyaset", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyasi","konu-siyasi","konu-idari"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Yeniçerilerin baskısıyla Trablusgarp'ta kendi içlerinden seçtikleri 'dayı' lakaplı reislerin hâkimiyeti başladı; İstanbul'dan gelen beylerbeyileri giderek gölgede kaldı. Derne gibi taşra merkezlerinin yönetimi de ocaklıların eline geçti. Yine de TDV bu dönemde Osmanlı hâkimiyetinin sürdüğünü vurgular; ocak 1711'e kadar merkezden atanan valilerle dayılar arasında dengede yönetildi.",
  kaynak:"TDV `dayi--garp-ocaklari`: \"1603’ten itibaren Trablusgarp eyaletinde de yeniçerilerin baskıları sonunda dayılar hâkimiyeti başladı\" · TDV `derne`: \"Trablusgarp ocağına yeniçeriler ve dayılar hâkim olduktan sonra (1603) Derne’nin yönetimi de ocaklıların eline geçti\"",
  gun:"1603 (TDV gün vermez)" },

{ t:"1637-01-01", b:"Tunus'tan getirilen 800'ü aşkın Endülüslü müslüman Derne'ye yerleşti", tur:"sosyal", onem:2, dunya:1, kapsam:"ic",
  etiket:["sosyal","konu-kultur"], yer_id:"Derne", taraflar:["trablusgarp-ocagi"],
  d:"Osmanlı yöneticileri İspanya'dan sürülen Endülüslülerin Derne'ye yerleşmesini teşvik etti; 1630-31'deki ilk dalganın ardından 1637'de dört gemi Tunus'tan 800'den fazla göçmen getirdi. Beylerbeyi Kasım Paşa merkezden izin alarak onları iskân etti ve tarımı destekledi. Göçmenler şehrin tarım, zanaat ve ticaretinde belirgin bir canlanma sağladı.",
  kaynak:"TDV `derne`: \"1637’de de dört gemi Tunus’tan 800’den fazla Endülüslü müslümanı Derne’ye getirmişti\"",
  gun:"1637 (TDV gün vermez)" },

{ t:"1663-01-01", b:"İngiliz donanması Trablusgarp'ı top ateşine tuttu", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","ingiltere"],
  d:"Ocağın Akdeniz'deki ticaret gemilerine yönelik akınları ve Avrupalılardan vergi talebi büyük denizci devletlerle çatışma doğurdu. 1663'te bir İngiliz donanması şehri bombaladı. Bu, Avrupa donanmalarının Trablusgarp'a zorla kabul ettirme politikasının ilk örneklerindendir.",
  kaynak:"TDV `trablusgarp`: \"1663’te İngiliz, 1728’de Fransız donanması şehri top ateşine tuttu\"",
  gun:"1663 (TDV gün vermez)" },

{ t:"1715-01-01", b:"Karamanlı Ahmed Paşa Derne ve Bingazi'yi ele geçirdi — Berka'da Karamanlı egemenliği", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"Derne", taraflar:["trablusgarp-ocagi"],
  d:"Trablusgarp'ta iktidarı alan Ahmed Karamanlı, eyaletin doğusundaki Derne ve Bingazi'yi de denetimine aldı. Böylece Berka'da Karamanlı ailesinin egemenliği kuruldu. Ahmed Paşa 1713-1723 arasında Bingazi ve Fizan'daki isyanları gerektiğinde şiddetle bastırarak hâkimiyetini bütün ülkeye yaydı.",
  kaynak:"TDV `derne`: \"Karamanlı Ahmed Paşa Derne ile Bingazi’yi ele geçirdi (1715) ve böylece bölgede Karamanlı ailesinin egemenliği kuruldu\" · TDV `karamanli`: \"1713-1723 yılları arasında Trablusgarp’ın güneyinde Bingazi’de ve Fizan’da çıkan isyanları gerektiğinde şiddet kullanarak bastırdı\"",
  gun:"1715 (TDV gün vermez)" },

{ t:"1716-01-01", b:"Karamanlıların ilk Fizan seferi — vergisini vermeyen Evlâd-ı Muhammed üzerine", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer_id:"Murzuk (Fizan)", taraflar:["trablusgarp-ocagi"],
  d:"Evlâd-ı Muhammed sülâlesinin yönettiği Fizan, 1711'den sonra Karamanlı yönetimine tâbi oldu ama vergisini düzenli ödemedi. Karamanlılar 1716'da başlayıp 1718, 1732 ve 1811'de tekrarlanan seferler düzenledilerse de bölgeyi tam denetime alamadı. İlişkiler ancak 18. yüzyılın ikinci yarısında vergilerin düzenli ödenmesiyle yumuşadı.",
  kaynak:"TDV `fizan`: \"vergi alamadığı zamanlar Fizan üzerine askerî seferler düzenlediyse de (1716, 1718, 1732, 1811) bölgeyi tam olarak kontrol altına alamadı\"",
  gun:"1716 (TDV gün vermez; seferler 1716, 1718, 1732, 1811)" },

{ t:"1722-01-01", b:"Ahmed Karamanlı'ya paşalık unvanı verildi", tur:"hanedan", onem:3, dunya:1, kapsam:"dis",
  etiket:["hanedan","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"1711'de beylerbeyi olarak tanınan Ahmed Bey paşa unvanını ancak 1722'de aldı. Yeniçerilere güvenmeyen Ahmed Paşa yerli halktan bir milis kurdu ve korsanları himayesine aldı. Unvan, İstanbul'un hanedanın fiilî gücünü resmen kabullenmesinin bir basamağıydı.",
  kaynak:"TDV `karamanli`: \"Paşa unvanını ancak 1722’de alan Ahmed Bey yeniçerilere pek güvenmediğinden yerli halktan bir milis kuvveti oluşturdu\"",
  gun:"1722 (TDV gün vermez)" },

{ t:"1728-01-01", b:"Fransız donanması Trablusgarp'ı bombaladı", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","fransa"],
  d:"Karamanlı beylerinin Avrupa ticaret gemilerinden vergi alması Fransa ile gerginlik yarattı. 1728'de bir Fransız donanması şehri top ateşine tuttu. Buna rağmen Ahmed Paşa büyük Batılı devletlerle barış ve ticaret antlaşmalarını yenileme siyasetini sürdürdü.",
  kaynak:"TDV `trablusgarp`: \"1663’te İngiliz, 1728’de Fransız donanması şehri top ateşine tuttu\"",
  gun:"1728 (TDV gün vermez)" },

{ t:"1733-05-16", b:"Padişah fermanıyla Ahmed Karamanlı Trablusgarp valiliğinde bırakıldı", tur:"siyaset", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Ahmed Paşa, halkın kendisinden memnun olduğunu bildirerek görevinde kalmak istediğini İstanbul'a yazdı. Padişah bu istek doğrultusunda ferman çıkardı. Ferman, Karamanlı iktidarının Osmanlı meşruiyeti içinde sürdüğünü gösterir.",
  kaynak:"TDV `karamanli`: \"2 Zilhicce 1145 (16 Mayıs 1733) tarihinde padişah onun isteği doğrultusunda ferman çıkardı\"",
  gun:"16 Mayıs 1733" },

{ t:"1745-11-01", b:"Karamanlı Ahmed Paşa öldü — oğlu Mehmed Paşa vali oldu", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Hanedanın kurucusu Ahmed Paşa altmış yaşlarında öldü. Yerine geçen oğlu Mehmed, I. Mahmud tarafından vali olarak tanındı; böylece valiliğin babadan oğula geçmesi ilk kez gerçekleşti. Mehmed Paşa döneminde barış sürdü, ancak korsanlık Venedik ve Napoli ile anlaşmazlıklar doğurdu.",
  kaynak:"TDV `karamanli`: \"Ahmed Paşa altmış yaşlarında iken 6 Şevval 1158’de (1 Kasım 1745) öldü\"",
  gun:"1 Kasım 1745" },

{ t:"1754-01-01", b:"Mehmed Paşa öldü — Karamanlı Ali Paşa'nın uzun valiliği başladı", tur:"hanedan", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Mehmed Paşa'nın ölümüyle yerine oğlu Ali Bey geçti ve 1793'e kadar Trablusgarp beylerbeyiliği yaptı. İlk yıllarında Münşiye ve Sâhil bölgelerinde isyanlar çıktı; 1758'den sonra sükûnet sağlandı. Son yıllarında oğulları arasındaki çekişme hanedanı sarstı.",
  kaynak:"TDV `karamanli`: \"Mehmed Paşa 1754 yılında öldü. Mehmed Paşa’nın yerine oğlu Ali Bey (Paşa) geçti. 1754-1793 yılları arasında Trablusgarp beylerbeyiliği yapan\"",
  gun:"1754 (TDV gün vermez)" },

{ t:"1784-01-01", b:"Veba ve 1784-1786 kıtlığı — Trablusgarp ticareti geriledi", tur:"kriz", onem:3, dunya:1, kapsam:"ic",
  etiket:["kriz","konu-ekonomi"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Ahmed Paşa'nın ortalarından beri Akdeniz'de önemli bir ticaret merkezi olan Trablusgarp, 1767 ve 1784 veba salgınlarıyla sarsıldı. 1784-1786 yıllarındaki kıtlık bunu izledi. İki felaket eyaletin ticaretini geriletti ve hanedan içi çekişmelerin zeminini hazırladı.",
  kaynak:"TDV `karamanli`: \"Fakat 1767 ve 1784’teki veba salgını ve 1784-1786 yılları arasındaki kıtlık Trablusgarp ticaretinin gerilemesine yol açmıştır\"",
  gun:"1784 (TDV gün vermez; veba 1767 ve 1784, kıtlık 1784-1786)" },

{ t:"1793-01-01", b:"Ali Bulgur Trablusgarp'a girdi — Karamanlı ailesi Tunus'a sığındı", tur:"hanedan", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-hanedan","konu-siyasi"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","tunus-ocagi"],
  d:"Ali Paşa'nın oğulları arasındaki çekişmede Yûsuf kendini vali tayin ettirip Trablus'u kuşattı. Bu sırada Cezayir'den çıkarılan Ali Bulgur, valiliğin padişahça kendisine verildiğini ileri sürerek şehre girdi. Karamanlı ailesi Tunus'taki Hammûde Paşa'ya sığındı; Ali Bulgur Cerbe'yi de işgal etti.",
  kaynak:"TDV `karamanli`: \"Ali Bulgur, padişah tarafından Trablusgarp valiliğinin kendisine verildiğini ileri sürerek Trablusgarp’a girince (Temmuz 1793) Karamanlı ailesi Tunus’taki Hammûde Paşa’nın yanına sığındı\"",
  gun:"Temmuz 1793 (TDV gün vermez)" },

{ t:"1795-01-01", b:"Ali Bulgur yenilip Mısır'a kaçtı — Karamanlılar Trablusgarp'a döndü", tur:"hanedan", onem:4, dunya:1, kapsam:"dis",
  etiket:["hanedan","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","tunus-ocagi"],
  d:"Tunus beyinin desteklediği Karamanlılar Ali Bulgur'u yendi ve Bulgur Mısır'a kaçtı. Ali Paşa oğlu Ahmed lehine çekildi; ancak ertesi yıl Yûsuf şehri zaptederek Ahmed'i Malta'ya kaçmak zorunda bıraktı. İki yıllık kopuş, İstanbul'un tayin iddiasının Karamanlı iktidarını değiştiremediğini gösterdi.",
  kaynak:"TDV `karamanli`: \"Şubat 1795’te yenilen Ali Bulgur Mısır’a kaçtı\"",
  gun:"Şubat 1795 (TDV gün vermez)" },

{ t:"1797-01-01", b:"Yûsuf Paşa Karamanlı valilik fermanını aldı", tur:"hanedan", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Kardeşi Ahmed'i uzaklaştırarak Trablusgarp'ı ele geçiren Yûsuf, III. Selim tarafından vali olarak tanındı ve fermanını aldı. Yûsuf Paşa'nın otuz beş yıllık valiliği korsanlığın yeniden canlandığı, Avrupa ve ABD ile çatışmaların yoğunlaştığı dönemdir.",
  kaynak:"TDV `karamanli`: \"Resmen Osmanlı Padişahı III. Selim tarafından da valiliği tanınan Yûsuf 1797 yılında valilik fermanını aldı\"",
  gun:"1797 (TDV gün vermez)",
  celiski:"TDV `trablusgarp`: \"1798 yılına kadar idare Karamanlı ailesine mensup kimselere veraset yoluyla intikal etti. Karamanlı soyundan gelen Yûsuf Paşa’nın merkezden vali sıfatıyla tayini üzerine yeni bir dönem başladı\" — 1797 / 1798." },

{ t:"1805-06-12", b:"Barışın ardından Amerikalılar Derne'yi bombaladı — Ahmed Bey Mısır'a götürüldü", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Derne", taraflar:["trablusgarp-ocagi","abd"],
  d:"ABD, Yûsuf Paşa'nın kardeşi Ahmed Bey'i Derne'ye çıkarıp kabileleri ona bağlatmıştı; bu tehdit Yûsuf'u barışa zorladı. Antlaşma gereği Amerikalılar Ahmed Bey'i ailesiyle Mısır'a götürdü ve 12-13 Haziran'da Derne'yi top ateşine tuttu. Ardından Yûsuf'un oğlu Mehmed Bey şehri birkaç günde itaate aldı.",
  kaynak:"TDV `derne`: \"Anlaşma gereği Ahmed Bey’i Derne’den çıkararak ailesiyle birlikte Mısır’a götüren Amerikalılar, 12-13 Haziran 1805’te Derne’yi top ateşine tuttular\"",
  gun:"12-13 Haziran 1805" },

{ t:"1810-01-01", b:"Gadâmis bölgesi Trablusgarp eyaletine bağlandı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak","konu-idari"], yer_id:"Ğadâmis", taraflar:["trablusgarp-ocagi"],
  d:"Yûsuf Paşa döneminde Sahra kervan yolunun önemli durağı Gadâmis vahası eyalete bağlandı. Bu adım, Karamanlıların güneydeki vahalar ve kervan ticareti üzerindeki denetimini genişletme çabasının parçasıydı.",
  kaynak:"TDV `karamanli`: \"1810 yılında Gadâmis bölgesi Trablusgarp eyaletine bağlandı\"",
  gun:"1810 (TDV gün vermez)",
  ic_not_d:"yer_id: Gadâmis yer_id_gecerli listesinde yok. TDV'de ayrı madde yok (gadames/gadamis 302)." },

{ t:"1813-01-01", b:"Mehmed el-Muknî'nin seferiyle Fizan Trablusgarp'a yeniden bağlandı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak","konu-askeri"], yer_id:"Murzuk (Fizan)", taraflar:["trablusgarp-ocagi"],
  d:"Yûsuf Paşa, Mehmed el-Muknî kumandasında gönderdiği askerlerle Fizan'ı yeniden Trablusgarp'a bağladı. Evlâd-ı Muhammed'in yönettiği Fizan bu tarihe kadar vergisini düzenli ödememişti. Bağlılık kalıcı olmadı; 1831'de bölge Abdülcelîl'in eline geçti.",
  kaynak:"TDV `karamanli`: \"Yûsuf Paşa, 1813’te Mehmed el-Muknî kumandasında gönderdiği askerlerle Fizan’ı Trablusgarp’a yeniden bağladı\"",
  gun:"1813 (TDV gün vermez)",
  ic_not_d:"TDV fizan seferler arasında 1811'i sayıyor; karamanli bağlanmayı 1813'e koyuyor — iki ayrı aşama olabilir, çelişki sayılmadı." },

{ t:"1815-01-01", b:"Decatur ve Bainbridge'in Amerikan donanması Yûsuf Paşa'ya şartlarını kabul ettirdi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-askeri"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","abd"],
  d:"1805 barışından on yıl sonra yeni bir Amerikan donanması Trablusgarp önlerine geldi. Bainbridge ve Decatur kumandasındaki filo, Karamanlı beylerbeyine isteklerini zorla kabul ettirdi. Olay, ocağın haraç gelirinin Batılı donanmalar karşısında çözülmeye başladığını gösterir.",
  kaynak:"TDV `trablusgarp`: \"1815’te Bainbridge ve Stephen Decatur kumandasında yeni bir Amerikan donanması Trablusgarp önlerine kadar gelerek Karamanlı beylerbeyine isteklerini zorla kabul ettirdi\"",
  gun:"1815 (TDV gün vermez)" },

{ t:"1819-01-01", b:"Fransız-İngiliz donanması Trablusgarp'ı ablukaya aldı — hıristiyan esirler bırakıldı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi","konu-askeri"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi","fransa-cumhuriyet","ingiltere"],
  d:"Napolyon savaşlarının ardından Avrupa büyük güçleri Mağrib korsanlığına ortak baskı kurdu. Bir Fransız-İngiliz donanması Trablusgarp limanını abluka altına alarak hıristiyan mahkûm ve kölelerin serbest bırakılmasını sağladı. Eyaletin başlıca gelir kaynağı olan esir ve haraç düzeni ağır darbe aldı.",
  kaynak:"TDV `karamanli`: \"1819’da bir Fransız-İngiliz donanması Trablusgarp Limanı’nı abluka altına aldı, hıristiyan mahkûm ve kölelerin serbest bırakılmasını sağladı\"",
  gun:"1819 (TDV gün vermez)" },

{ t:"1831-01-01", b:"Abdülcelîl'in Evlâd-ı Süleyman kabilesi Fizan'ı ele geçirdi", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"Murzuk (Fizan)", taraflar:["trablusgarp-ocagi"],
  d:"Abdülcelîl başkanlığındaki Evlâd-ı Süleyman, Fizan'ın eski hâkimi Evlâd-ı Muhammed'i yenerek bölgeyi aldı. Vergi toplayamaz hale gelen Karamanlı yönetimine karşı ayaklanan Abdülcelîl, Fizan'dan Sirte'ye uzanan aşiretlerin başı oldu. Bu isyan 1842'ye kadar sürdü.",
  kaynak:"TDV `fizan`: \"Abdülcelîl başkanlığındaki evlâd-ı Süleyman kabilesi 1831’de evlâd-ı Muhammed’i yenerek Fizan’ı ele geçirdi\"",
  gun:"1831 (TDV gün vermez)" },

{ t:"1832-08-05", b:"Yûsuf Paşa oğlu Ali lehine çekildi — Karamanlı iç savaşı", tur:"hanedan", onem:4, dunya:2, kapsam:"ic",
  etiket:["hanedan","konu-hanedan","isyan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Ağır vergilere isyan eden Münşiye ve Sâhil halkı Trablus'u kuşatıp Yûsuf'un öteki oğlu Mehmed'i vali ilân etti. Yûsuf Paşa, İngilizlerin desteklediği Mehmed yerine Fransızların ve Bingazi halkının desteklediği oğlu Ali lehine valilikten çekildi. Aynı yıl şehirliler İstanbul'dan gelen arabulucuya doğrudan devlete bağlanmak istediklerini bildirdi.",
  kaynak:"TDV `karamanli`: \"5 Ağustos 1832 tarihinde Yûsuf, İngilizler tarafından desteklenen oğlu Mehmed’in yerine Bingazi halkı ve Fransızlar tarafından desteklenen diğer oğlu Ali’nin lehine valilikten feragat etti\"",
  gun:"5 Ağustos 1832" },

{ t:"1838-08-04", b:"Son büyük Karamanlı valisi Yûsuf Paşa Trablus'ta öldü", tur:"olum", onem:3, dunya:1, kapsam:"ic",
  etiket:["olum","konu-hanedan"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"1835'te hanedan tasfiye edildiğinde aile fertleri İstanbul'a gönderilmiş, yalnız çok yaşlı Yûsuf Paşa'nın Trablus'ta kalmasına izin verilmişti. Onun ölümüyle Karamanlı ailesinin Trablusgarp'taki varlığı fiilen sona erdi. Osmanlı Devleti aileye maaş bağladı ve Karamanlıların Avrupalı tüccarlara borçlarını üstlendi.",
  kaynak:"TDV `karamanli`: \"sadece Yûsuf Paşa’nın çok yaşlı olmasından dolayı Trablusgarp’ta kalmasına izin verildi; o da 4 Ağustos 1838 tarihinde vefat etti\"",
  gun:"4 Ağustos 1838" },

{ t:"1839-01-01", b:"Aşkar Ali Paşa Abdülcelîl'i Mısrâte yakınında yendi", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","isyan","konu-askeri"], yer_id:"Misrata", taraflar:["trablusgarp-ocagi"],
  d:"1835'te merkeze bağlanan eyalette Fizan'daki Osmanlı otoritesi, 1838'de atanan Aşkar Ali Paşa ile yeniden kurulabildi. Ali Paşa, Fizan'ı elinde tutan Abdülcelîl'i Mısrâte yakınında ağır bir yenilgiye uğrattı. Abdülcelîl bundan sonra gerilla savaşına geçti.",
  kaynak:"TDV `fizan`: \"Ali Paşa, Fizan’ı kontrol eden evlâd-ı Süleyman’ın reisi Abdülcelîl’i Mısrâte yakınlarında büyük bir yenilgiye uğrattı (1839)\"",
  gun:"1839 (TDV gün vermez)" },

{ t:"1842-01-01", b:"Abdülcelîl idam edildi — Fizan Trablusgarp'a bağlı kaza oldu", tur:"idari", onem:4, dunya:1, kapsam:"ic",
  etiket:["idari","isyan","konu-idari"], yer_id:"Murzuk (Fizan)", taraflar:["trablusgarp-ocagi"],
  d:"Gerilla savaşını sürdüren Abdülcelîl, Sirte taraflarında yakalanıp kardeşiyle birlikte idam edildi. Fizan böylece Evlâd-ı Süleyman'ın denetiminden çıktı ve merkezi Merzûk olmak üzere Trablusgarp'a bağlı bir kaza haline getirildi; kabile Kânim'e sürüldü. 1860'larda Fizan sancak statüsüne yükseltildi.",
  kaynak:"TDV `fizan`: \"Ancak 1842 Mayısında Sirte taraflarında yakalanarak kardeşiyle birlikte idam edildi\" · TDV `fizan`: \"Abdülcelîl’in öldürülmesiyle Fizan evlâd-ı Süleyman’ın kontrolünden çıktı ve Trablusgarp’a bağlı bir kaza haline getirildi (1842)\"",
  gun:"Mayıs 1842 (TDV gün vermez)",
  celiski:"TDV `libya`: \"Abdülcelîl 1841’de yakalanıp idam edilinceye kadar çarpışmaya devam etti\" — fizan 1842 Mayıs, derne de \"1831-1842\" der." },

{ t:"1843-01-01", b:"Senûsî Beyzâ Zâviyesi'ni kurdu — tarikatın Berka'daki ilk merkezi", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["din","konu-din"], yer_id:"Beyzâ (Kirene)", taraflar:["senusi","trablusgarp-ocagi"],
  d:"Mekke'den ayrılan Muhammed b. Ali es-Senûsî'ye Trablusgarp Valisi Ali Asgar Paşa, Bingazi ile Derne arasındaki bölgede zâviye kurma izni verdi. Senûsî 1843'te Beyzâ Zâviyesi'ni ve üç zâviye daha açtı. Senûsiyye'nin Berka'daki bu kuruluşu, tarikatın sonraki yüzyılda Libya'nın dinî ve siyasî gücü haline gelmesinin başlangıcıdır.",
  kaynak:"TDV `senusi-muhammed-b-ali`: \"1843’te Beyzâ Zâviyesi’ni kurdu ve üç zâviye daha açtı\"",
  gun:"1843 (TDV gün vermez)" },

{ t:"1855-01-01", b:"Şeyh Senûsî Cağbûb'a yerleşip merkez zâviyeyi kurdu", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["din","konu-din"], yer_id:"Cağbûb", taraflar:["senusi"],
  d:"Hicaz'dan dönen Muhammed b. Ali es-Senûsî, Mısır sınırındaki Cağbûb vahasına yerleşip büyük bir zâviye yaptırdı. Birkaç barakadan ibaret yer iki yılda bir şehre dönüştü ve tarikatın merkezi oldu; 8000 ciltlik bir kütüphane kuruldu. Cağbûb, Sudan ve Batı Afrika'yı Kahire'ye bağlayan kervan yolunun güvenli durağı haline geldi.",
  kaynak:"TDV `cagbub`: \"1855’te bölgeye yerleşerek vahaya hâkim kayalıkta bir zâviye yaptıran Şeyh Senûsî müridleriyle birlikte çevreyi kısa zamanda imar etti\"",
  gun:"1855 (TDV gün vermez)",
  celiski:"TDV `senusi-muhammed-b-ali`: \"1854’te Trablusgarp’a döndüğünde bir süre Uzeyyât Zâviyesi’nde kaldı, ardından Mısır sınırındaki Cağbûb’da büyük bir zâviye inşa ettirerek\" — 1854 dönüş, 1855 yerleşme; tam çelişki değil." },

{ t:"1856-01-01", b:"Şeyh Guma idam edildi — Cebel isyanı bitti, bölge tamamen merkeze bağlandı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"", odak_yer:["Yefren","Garyân","Nâlût"], taraflar:["trablusgarp-ocagi"],
  d:"Cebel bölgesinde 1835'ten beri direnen Şeyh Guma'ya önce imtiyaz tanınmış, sonra Trabzon'a sürülmüştü. 1854'te İngiliz konsolosunun yardımıyla dönünce ayaklanma yeniden başladı. 1856'da yakalanıp idam edilmesiyle yirmi bir yıllık mücadele sona erdi ve bölge tamamen merkeze bağlandı.",
  kaynak:"TDV `libya`: \"1856’da yakalanıp idam edilince yirmi bir yıl süren bir mücadeleden sonra bölge tamamen merkeze bağlanmış oldu\"",
  gun:"1856 (TDV gün vermez)",
  celiski:"TDV `derne`: \"1835-1858 yıllarındaki Şeyh Gume isyanlarının tesirleri Derne’de de hissedildi\" — libya 1856, derne 1858.",
  ic_not_d:"yer_id boş: Cebel (Cebeligarbî/Nefûse) listede yok. · ODAK: Cebel (Cebel-i Garbî) bölgesi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1859-09-07", b:"Senûsiyye'nin kurucusu Muhammed b. Ali es-Senûsî Cağbûb'da öldü", tur:"olum", onem:4, dunya:2, kapsam:"ic",
  etiket:["olum","konu-din","konu-hanedan"], yer_id:"Cağbûb", taraflar:["senusi"],
  d:"Yirmi iki yıllık irşad faaliyetinden sonra tarikatın kurucusu Cağbûb'da öldü ve oradaki zâviyeye gömüldü. Yerine henüz on altı yaşındaki oğlu Muhammed Mehdî ikinci postnişin oldu. Mehdî döneminde tarikat Büyük Sahrâ'ya ve Çad havzasına yayıldı.",
  kaynak:"TDV `senusi-muhammed-b-ali`: \"9 Safer 1276’da (7 Eylül 1859) Cağbûb’da vefat eden Muhammed b. Ali es-Senûsî buradaki zâviyeye defnedildi\"",
  gun:"7 Eylül 1859" },

{ t:"1862-01-01", b:"Fizan'da ticaret vergisi %12'den %2'ye indirildi — Sahrâ ticareti Trablus'ta tutuldu", tur:"ekonomi", onem:2, dunya:2, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi"], yer_id:"Murzuk (Fizan)", taraflar:["trablusgarp-ocagi"],
  d:"Fransızlar, Cezayir'i işgal ettikten sonra Sahrâ kervan ticaretini Trablusgarp'tan Cezayir'e çevirmeye çalışıyordu. Osmanlılar Fizan'daki ticarî vergileri büyük ölçüde indirerek kervanların Bornu-Merzûk-Trablus yolunda kalmasını sağladı. Bu güzergâh Fizan ve Trablus halkının başlıca geçim kaynağıydı.",
  kaynak:"TDV `fizan`: \"Osmanlılar ticarî vergileri % 12’den % 2’ye indirerek Sahrâ ticaretinin Cezayir’e yönelmesini önlediler (1862)\"",
  gun:"1862 (TDV gün vermez)" },

{ t:"1863-01-01", b:"Bingazi, Bâbıâli'ye doğrudan bağlı müstakil mutasarrıflık oldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], yer_id:"Bingazi", taraflar:["trablusgarp-ocagi"],
  d:"Bingazi, Trablusgarp'tan ayrılarak doğrudan İstanbul'a bağlı müstakil bir mutasarrıflığın merkezi yapıldı; eski imtiyazları kaldırılıp düzenli vergiye bağlandı. Mutasarrıflık Bingazi, Derne, Ucle-Câlû, Ecdâbiye ve Kufra kazalarından oluştu. İlk mutasarrıf Halil Paşa kabile isyanlarını bastırdı.",
  kaynak:"TDV `bingazi`: \"1863’te Berka’dan ayrılarak doğrudan Bâbıâli’ye bağlı müstakil bir mutasarrıflık merkezi haline getirildi\"",
  gun:"1863 (TDV gün vermez)",
  celiski:"TDV `libya`: \"1864’te Trablusgarp vilâyet, 1877’de Bingazi ayrı bir sancak oldu\" · TDV `trablusgarp`: \"1872’de Trablusgarp vilâyeti ve Bingazi müstakil sancağı adını aldı\" — Bingazi ayrılışı için 1863 / 1872 / 1877." },

{ t:"1864-01-01", b:"Vilâyet Nizamnâmesi uyarınca Trablusgarp eyaleti vilâyet oldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","reform","konu-idari"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"1864 vilâyet düzenlemesiyle Trablusgarp eyaleti öteki eyaletler gibi vilâyete dönüştürüldü. Bingazi ile birlikte beş sancaklık bir idarî birim kuruldu. Tanzimat reformları küçük nüfus ve dar gelir yüzünden yavaş ilerledi; eyalet merkeze vergi yollamadı, merkezden gelen ödenekle yaşadı.",
  kaynak:"TDV `trablusgarp`: \"1864’te çıkarılan Vilâyet-i Umûmiyye Kanunu gereğince bu eyalet de diğerleri gibi vilâyete dönüştürüldü ve Bingazi ile birlikte beş sancaklık bir idarî birlik kuruldu\"",
  gun:"1864 (TDV gün vermez)" },

{ t:"1865-10-06", b:"Abdülaziz fermanı Senûsî tekkelerini valilere karşı güvenceye aldı", tur:"din", onem:3, dunya:1, kapsam:"dis",
  etiket:["din","konu-din","konu-diplomasi"], yer_id:"Bingazi", taraflar:["senusi","trablusgarp-ocagi"],
  d:"1856 Abdülmecid fermanının ardından Abdülaziz de Senûsiyye'ye bir ferman verdi. Fermanla Hicaz, Trablusgarp ve Bingazi valileri Senûsî tekke ve medreselerine karşı harekette bulunmamaları konusunda uyarıldı. Osmanlı Devleti tarikatı çöl hinterlandındaki müttefiki olarak korumaya aldı.",
  kaynak:"TDV `senusiyye`: \"Abdülaziz tarafından verilen 15 Cemâziyelevvel 1282 (6 Ekim 1865) tarihli fermanda Hicaz, Trablusgarp ve Bingazi valileri Senûsî tekkelerine ve medreselerine\"",
  gun:"6 Ekim 1865" },

{ t:"1875-01-01", b:"Gât'a Osmanlı bayrağı çekildi — Tevârik kabilelerinin başvurusu", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["toprak","konu-siyasi"], yer_id:"Gât", taraflar:["trablusgarp-ocagi"],
  d:"Orta Afrika yolunun kilidi sayılan Gât halkı 1849'dan beri Fizan kaymakamına başvurarak asker istiyordu. Bâbıâli, Ezgar ve Hoggar Tevâriklerinin de başvurusu üzerine 1875'te Gât'a bayrak çekti ve kasaba kaza oldu. Adım, Fransa'nın Sahrâ'daki ilerleyişine karşı Fizan'ı güçlendirdi.",
  kaynak:"TDV `libya`: \"1875’te Gātlılar’a ek olarak Tevârik (Tuareg) aşiretlerinden Ezgarlar’ın hepsinin ve Hükkârlar’ın (Hoggarlar) büyük kısmının müracaatı üzerine Gāt’a Türk bayrağını çekti\" · TDV `fizan`: \"Gāt’ın 1875’te Osmanlı topraklarına katılarak kaza statüsü kazanması\"",
  gun:"1875 (TDV gün vermez)",
  ic_not_d:"Harita Gât'ı 1577'den beri OSMANLI gösteriyor; TDV katılımı 1875'e koyuyor. CAKISMA'ya yazıldı." },

{ t:"1879-01-01", b:"Bingazi Dahiliye Nezâreti'ne bağlı müstakil vilâyet oldu", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], yer_id:"Bingazi", taraflar:["trablusgarp-ocagi"],
  d:"1872'de Trablusgarp vilâyeti ve Bingazi müstakil sancağı biçiminde yeniden düzenlenen bölgede Bingazi, 1879'da doğrudan Dahiliye Nezâreti'ne bağlı müstakil bir birim oldu. Böylece bugünkü Libya'nın iki kıyı bölgesi İstanbul'a ayrı ayrı bağlandı.",
  kaynak:"TDV `trablusgarp`: \"fakat 1879’da Bingazi Dahiliye Nezâreti’ne doğrudan bağlı müstakil bir vilâyet oldu\"",
  gun:"1879 (TDV gün vermez)",
  celiski:"TDV `bingazi`: \"Bingazi 1872’de öneminden dolayı vilâyet merkezi haline getirildi ise de Hasan Tahsin Paşa’nın valiliği sırasında (1887-1890) yeniden Bâbıâli’ye bağlı müstakil mutasarrıflığın merkezi oldu\" — statü ve yıl farklı." },

{ t:"1881-01-01", b:"Trablusgarp-İstanbul telgraf hattı döşendi", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic",
  etiket:["ekonomi","konu-ekonomi","konu-idari"], yer_id:"Trablus", taraflar:["trablusgarp-ocagi"],
  d:"Afrika'daki son Osmanlı vilâyeti telgrafla İstanbul'a bağlandı; 1882'de Malta'ya denizaltı hattı izledi. Ardından vilâyet merkezinden Garyân, Zâviye, Züvâre, Mısrâte gibi iç merkezlere hatlar çekildi. Tunus'un Fransa'ca işgal edildiği yıl gelen bu bağlantı, vilâyetin savunma kaygısının parçasıydı.",
  kaynak:"TDV `trablusgarp`: \"1881’de Trablusgarp-İstanbul arasında telgraf hattı döşendi\"",
  gun:"1881 (TDV gün vermez)" },

{ t:"1895-04-17", b:"Muhammed Mehdî es-Senûsî merkezi Cağbûb'dan Kufra'ya taşıdı", tur:"din", onem:4, dunya:2, kapsam:"dis",
  etiket:["din","konu-din","konu-siyasi"], yer_id:"Cağbûb", taraflar:["senusi"],
  d:"İngiliz himayesindeki Mısır hidivinin İngilizlerle Cağbûb'a geleceği haberi üzerine Muhammed Mehdî buradan ayrılmaya karar verdi. Ailesi, kardeşi ve aralarında Ömer el-Muhtâr'ın da bulunduğu yüz kadar talebesiyle Kufra'daki Vâdiülarş'a yola çıktı. Tarikatın merkezinin güneye kayması Senûsiyye'nin Çad havzasına yönelişini hızlandırdı.",
  kaynak:"TDV `senusi-muhammed-mehdi`: \"Kufra’daki Vâdiülarş’a gitmek için 17 Nisan 1895 tarihinde kardeşi Muhammed Şerîf, ailesi ve aralarında Ömer el-Muhtâr’ın da bulunduğu\"",
  gun:"17 Nisan 1895",
  ic_not_d:"yer_id Cağbûb (hareket noktası); Kufra yer_id listesinde yok." },

{ t:"1902-01-01", b:"Muhammed Mehdî öldü — Ahmed Şerîf es-Senûsî tarikatın üçüncü şeyhi oldu", tur:"hanedan", onem:4, dunya:2, kapsam:"ic",
  etiket:["hanedan","konu-hanedan","konu-din"], yer_id:"", odak_yer:["Cağbûb","Beyzâ (Kirene)","Ecdâbiye"], taraflar:["senusi"],
  d:"Muhammed Mehdî'nin 1902'de ölümü üzerine oğlu İdrîs henüz küçük olduğundan yeğeni Ahmed Şerîf tarikatın başına geçti. Ahmed Şerîf, Fransızlara karşı Sahrâ'daki cihadı devraldı ve merkezi Kufra'da tuttu. Onunla Senûsiyye âdeta silâhlı mücadele eden bir yapıya dönüştü.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Amcasının 1902 yılında vefatı üzerine tarikatın üçüncü şeyhi olarak cihad hareketinin sorumluluğunu üstlendi\"",
  gun:"1902 (TDV gün vermez)",
  ic_not_d:"TDV senusiyye Mehdî'nin ölümünü 20 Ocak 1902 zâviye yıkımına bağlayan rivayeti aktarır; ölüm bu tarihten SONRA olmalı. 01-01 yalnız yıl işaretidir. Ölüm yeri Garû (Çad, omer-el-muhtar) — yer_id boş. · ODAK: Berka, tarikatın ana bölgesi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1911-10-23", b:"Neşet ve Ali Fethi beylerin birlikleri İtalyanlara ağır kayıp verdirdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Trablus", taraflar:["italya"],
  d:"Trablus'un işgalinden sonra şehrin dışında toplanan Türk birlikleri Neşet ve Ali Fethi beylerin kumandasında İtalyan kuvvetlerine zayiat verdirip yenilgiye uğrattı. Bu başarı, gönüllü subayların örgütlediği yerli direnişin etkisini gösterdi. Telâşa kapılan İtalya iki hafta sonra ilhak beyannâmesini yayımladı.",
  kaynak:"TDV `trablusgarp-savasi`: \"Neşet ve Ali Fethi beylerin kumanda ettikleri Türk birlikleri karşısındaki zayiat ve yenilgisi bunun bir göstergesi oldu (23 Ekim 1911)\"",
  gun:"23 Ekim 1911",
  ic_not_d:"trablusgarp-ocagi künyesi 1911-10-09'da bitiyor; taraf italya yazıldı." },

{ t:"1912-01-01", b:"Senûsî ihvanı Bingazi'ye saldırdı — İtalyanlar zor durumda kaldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Bingazi", taraflar:["senusi","italya"],
  d:"Ahmed Şerîf'in cihad çağrısıyla toplanan ve Osmanlı subaylarınca eğitilen Senûsî ihvanı İtalyan işgalindeki Bingazi'ye saldırdı. Aynı dönemde Enver Bey kumandasındaki birlikler Derne'ye büyük bir saldırı düzenledi. İtalyanlar kıyı şeridine hapsolmuş durumdaydı.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Mart 1912’de Senûsî ihvanı Bingazi’ye saldırarak İtalyanlar’ı zor duruma düşürdü\"",
  gun:"Mart 1912 (TDV gün vermez)" },

{ t:"1912-10-15", b:"Padişah fermanıyla Trablusgarp ve Bingazi'ye kâğıt üzerinde muhtariyet verildi", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi","konu-diplomasi"], yer_id:"Trablus", taraflar:["italya"],
  d:"Uşi barışından üç gün önceye tarihlenen bir fermanla Trablusgarp vilâyeti ve Bingazi sancağına muhtariyet verildi, bir nâib-i saltanat ve kadı tayin edildi. Amaç İslâm kamuoyuna İtalya'nın muhtar bir eyalete el koyduğunu göstermekti. Nâibliğe Şemseddin Bey getirildi; muhtariyet ve niyâbet kâğıt üzerinde kaldı.",
  kaynak:"TDV `trablusgarp-savasi`: \"15 Ekim tarihli olarak düzenlenen diğer bir belgeyle Trablusgarp vilâyeti ve Bingazi sancağına muhtariyet veren ve bir nâib-i saltanatla bir kadı tayin eden padişah emri\"",
  gun:"15 Ekim 1912" },

{ t:"1913-04-20", b:"Merc İtalyanlarca işgal edildi", tur:"isgal", onem:3, dunya:1, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Merc", taraflar:["italya","senusi"],
  d:"Uşi Antlaşması Libya halkını bağlamadı ve Berka'da mücadele sürdü. İtalyanlar kıyıdan içeriye ilk adım olarak Cebeliahdar eteğindeki Merc kasabasını işgal etti. Merc, İtalyanların Berka içlerine yayılmasının üssü oldu.",
  kaynak:"TDV `berka`: \"20 Nisan 1913’te Merc kasabası İtalyanlar tarafından işgal edildi\"",
  gun:"20 Nisan 1913" },

{ t:"1913-05-16", b:"Ahmed Şerîf General Mombretti'nin İtalyan ordusunu ağır yenilgiye uğrattı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"", odak_yer:["Bingazi","Derne"], taraflar:["senusi","italya"],
  d:"Osmanlı subaylarının Balkan Savaşı için çekilmesinden sonra direnişin kumandasını Ahmed Şerîf üstlendi. Senûsî kuvvetleri Mombretti kumandasındaki İtalyan ordusunu ağır bir yenilgiye uğrattı. Ahmed Şerîf yazışmalarını 'el-hükûmetü's-seniyye' mührüyle imzalayarak direnişin kendi yönetiminde süreceğini ilân etmişti.",
  kaynak:"TDV `senusi-ahmed-serif`: \"16 Mayıs 1913’te General Mombretti kumandasındaki İtalyan ordusunu ağır bir yenilgiye uğrattı\"",
  gun:"16 Mayıs 1913",
  ic_not_d:"Savaşın yeri TDV'de yok; yer_id boş. · ODAK: Berka cephesi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1914-01-01", b:"İtalyanlar Fizan'a girdi — kısa süre sonra geri çekildiler", tur:"isgal", onem:3, dunya:1, kapsam:"dis",
  etiket:["isgal","konu-askeri"], yer_id:"Murzuk (Fizan)", taraflar:["italya","senusi"],
  d:"Trablusgarp kıyılarını ele geçiren İtalyanlar Fizan'a ancak Ağustos 1914'te girebildi. Senûsî direnişi ve Birinci Dünya Savaşı yüzünden kısa sürede geri çekilmek zorunda kaldılar; Eylül 1914-Nisan 1915 arasında Trablusgarp çevresi ve Fizan'dan püskürtüldüler. Fizan ancak 1930'da yeniden işgal edildi.",
  kaynak:"TDV `fizan`: \"İtalyanlar Trablusgarp’ı ele geçirmekle beraber Fizan’a ancak Ağustos 1914’te girebildiler; fakat Senûsî direnişi ve I. Dünya Savaşı yüzünden geri çekilmek zorunda kaldılar\"",
  gun:"Ağustos 1914 (TDV gün vermez)",
  ic_not_d:"Harita 1912-10-18'den beri Fizan'ı italya gösteriyor — CAKISMA." },

{ t:"1915-01-01", b:"Osmanlı-Senûsî kuvvetleri Mısır'a saldırıp Sellûm'u aldı", tur:"savas", onem:3, dunya:3, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Sellûm", taraflar:["senusi","ingiltere"],
  d:"Osmanlı ve Alman subaylarının ısrarıyla Ahmed Şerîf, Mısır'daki İngilizlere saldırı emri verdi; Nûri Bey Alman denizaltısıyla gelmişti. Başlangıçta başarılı olan Osmanlı-Senûsî kuvvetleri Kasım 1915'te sınırdaki Sellûm'u ele geçirdi. Hedef Süveyş'i tehdit ederek İngiliz ordusunu iki ateş arasında bırakmaktı.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Osmanlı-Senûsî kuvvetleri başlangıçta başarılı oldu, 1915 Kasımında Sellûm ele geçirildi\"",
  gun:"Kasım 1915 (TDV gün vermez)",
  ic_not_d:"Brif kuralı gereği t yıl başı; olay Kasım 1915 (1915-04-29 maddesinden SONRA). Harita Sellûm'u bu dönemde Senûsî göstermiyor — CAKISMA." },

{ t:"1915-04-29", b:"Sirt yönünde ilerleyen İtalyan ordusu ağır yenilgiye uğradı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Sirte", taraflar:["senusi","italya"],
  d:"Sirte körfezi yönünde ilerlemeye çalışan İtalyan kuvvetleri ağır bir yenilgiye uğratıldı. Bu zaferle Ahmed Şerîf Sirenayka'nın içlerini ve Trablusgarp bölgesini denetimine aldı; 1915'te İtalyanlar yalnız Trablus, Hums, Bingazi, Derne gibi birkaç kıyı noktasını tutabiliyordu.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Sirt istikametinde ilerlemeye çalışan İtalyanlar 29 Nisan 1915’te ağır bir yenilgiye uğratıldı\"",
  gun:"29 Nisan 1915" },

{ t:"1916-03-02", b:"Senûsîler Fransız işgalindeki Canet'i geri aldı", tur:"savas", onem:2, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Cânet (Djanet)", taraflar:["senusi","fransa-cumhuriyet"],
  d:"Birinci Dünya Savaşı'nda Senûsî mücadelesi en yüksek noktasına çıktı. Güneyden ilerleyen Fransızların işgal ettiği ve bir zamanlar Osmanlı kazası olan Canet kasabası geri alındı. Aynı dönemde Avrupalı seyyah ve misyonerler Senûsî nüfuz bölgelerine giremez oldu.",
  kaynak:"TDV `senusiyye`: \"Büyük Sahrâ’dan kuzeye doğru ilerleyen Fransızlar’ın işgalindeki Canet kasabası 2 Mart 1916’da geri alındı\"",
  gun:"2 Mart 1916" },

{ t:"1916-03-24", b:"İngilizler Sellûm'u geri aldı — Senûsî gücü kırıldı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["savas","konu-askeri"], yer_id:"Sellûm", taraflar:["senusi","ingiltere"],
  d:"İngilizler Sellûm'u geri aldı ve ağır kayıp veren Ahmed Şerîf sadık kabilelerin bulunduğu Farfaro'ya çekildi. Mısır seferi Senûsîlerin ağır yara almasına ve Ahmed Şerîf'in siyasî gücünü büyük ölçüde yitirmesine yol açtı. Kısa süre sonra askerî ve siyasî yetkilerini yeğeni Muhammed İdrîs'e devretti.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Ancak İngilizler 24 Mart 1916’da Sellûm’u geri aldılar\"",
  gun:"24 Mart 1916" },

{ t:"1917-01-01", b:"Akrama Antlaşması — Muhammed İdrîs İngiliz ve İtalyanlarla uzlaştı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"Tobruk", taraflar:["senusi","italya","ingiltere"],
  d:"Tarikatın başına geçen Muhammed İdrîs, Mısır'daki İngilizler ve İtalyanlarla görüşerek Tobruk yakınındaki Akrama'da bir antlaşma imzaladı. Bingazi ve çevresinin sahibi kabul edilen İdrîs, İtalyan işgalini kısmen tanımış oldu. Antlaşma Ahmed Şerîf ile İdrîs arasındaki ayrılığı açığa çıkardı.",
  kaynak:"TDV `senusiyye`: \"1917 yılı Nisan ayında Tobruk yakınındaki Akrama’da bir antlaşma imzaladı\"",
  gun:"Nisan 1917 (TDV gün vermez)" },

{ t:"1918-08-30", b:"Ahmed Şerîf es-Senûsî Libya'dan ayrılıp İstanbul'a geldi", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyasi","konu-siyasi"], yer_id:"", odak_yer:["Ecdâbiye","Sirte"], taraflar:["senusi"],
  d:"Enver Paşa'nın daveti üzerine Ahmed Şerîf Sirte körfezindeki Ukayle'den bir Alman denizaltısıyla Pola'ya, oradan trenle İstanbul'a getirildi. İkinci gün VI. Mehmed'e Eyüp'te kılıç kuşattı ve vezirlik pâyesi aldı. Libya'daki Senûsî önderliği fiilen Muhammed İdrîs'e kaldı.",
  kaynak:"TDV `senusi-ahmed-serif`: \"Sirte körfezindeki Ukayle’den bir Alman denizaltısına bindirilip Avusturya’nın Pola Limanı’na, oradan Balkan treni ile 30 Ağustos 1918’de İstanbul’a getirildi\"",
  gun:"30 Ağustos 1918 (İstanbul'a varış; ayrılış TDV senusiyye: Ağustos 1918)",
  ic_not_d:"ODAK: Sirte körfezi (Ukayle) — Ukayle yerleşim olarak yok" },

{ t:"1918-10-30", b:"Mondros: Osmanlı subayları Libya'yı terk etmek zorunda kaldı — Afrika Grupları'nın sonu", tur:"son", onem:4, dunya:2, kapsam:"dis",
  etiket:["son","konu-askeri","konu-siyasi"], yer_id:"", odak_yer:["Trablus","Bingazi","Misrata"], taraflar:["senusi","italya"],
  d:"Uşi'den sonra da Afrika Grupları Komutanlığı adıyla İtalya'ya karşı savaşan Osmanlı subayları Mondros Mütarekesi'yle Afrika'yı terk etmek zorunda kaldı. Mütarekenin ön şartlarından biri Libya'daki Türk birliklerinin teslimiydi; bazı subaylar şahsî tercihle kalıp savaşı sürdürdü. Libya direnişi bundan sonra İstanbul'la bağını yitirdi.",
  kaynak:"TDV `idris-i--senusiler`: \"30 Ekim 1918’de imzalanan Mondros Mütarekesi’yle bütün Osmanlı subayları Afrika kıtasını terketmek zorunda kaldılar\" · TDV `trablusgarp`: \"1918’de imzalanan Mondros Mütarekesi’ne kadar Afrika Grupları Komutanlığı adı altında İtalya’ya karşı savaştı\"",
  gun:"30 Ekim 1918",
  ic_not_d:"Mondros'un kendisi Osmanlı merkez maddesidir; bu madde yalnız Libya cephesindeki sonucunu anlatır. Mükerrerlik kararı koordinatörün. · ODAK: bütün Libya cephesi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1919-01-01", b:"Mısrâte'de kısa ömürlü Trablus Cumhuriyeti", tur:"kurulus", onem:3, dunya:1, kapsam:"ic",
  etiket:["kurulus","konu-siyasi"], yer_id:"Misrata", taraflar:["trablus-cumhuriyeti"],
  d:"Mondros'tan sonra Libya'da kalan bazı Osmanlı subaylarının da katkısıyla Mısrâte'de Trablus Cumhuriyeti ilân edildi ve kısa süre yaşadı. Türkiye ile bağlantı imkânı kalmamıştı; Sevr ile Osmanlı Devleti'nin bu topraklarla ilgilenme hakkı da kaldırıldı.",
  kaynak:"TDV `libya`: \"1919’da Mısrâte’de kısa süre yaşayan Trablus Cumhuriyeti’ne katkıda bulunanları oldu\"",
  gun:"1919 (TDV gün vermez)",
  ic_not_d:"Trablus Cumhuriyeti için künye yok; ÖNERİLEN künye id'si `trablus-cumhuriyeti` yazıldı (M-5416 kural 3) — bkz. denetim/KRONO-MAGRIB-0929-KUNYE.md. Künye açılınca kendiliğinden bağlanır." },

{ t:"1920-10-25", b:"er-Recîme Antlaşması — İdrîs Ecdâbiye merkezli muhtar emirliğin emîri oldu", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["antlasma","konu-diplomasi"], yer_id:"Ecdâbiye", taraflar:["senusi","italya"],
  d:"Şeyh İdrîs İtalyanlarla er-Recîme antlaşmasını imzaladı; kendisine maaş bağlandı, karşılığında silâhlı Senûsîleri silâhsızlandırmayı üstlendi. İdrîs, merkezi Ecdâbiye olan Cağbûb, Ucle-Câlû ve Kufra'dan ibaret muhtar bölgenin emîri ilân edildi. 11 Kasım 1921'de Ebû Meryem anlaşması bunu izledi.",
  kaynak:"TDV `idris-i--senusiler`: \"İtalyanlar’la 25 Ekim 1920’de er-Recîme, 11 Kasım 1921’de Ebû Meryem anlaşmalarını imzalayan Şeyh İdrîs’e\"",
  gun:"25 Ekim 1920" },

{ t:"1922-01-01", b:"Şeyh İdrîs Mısır'a geçti — savaşın yönetimi Ömer el-Muhtâr'a verildi", tur:"siyaset", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyasi","konu-siyasi","konu-askeri"], yer_id:"", odak_yer:["Bingazi","Ecdâbiye"], taraflar:["senusi","italya"],
  d:"Antlaşmalar tam uygulanamayıp savaş Bingazi tarafına kayınca İdrîs tedavi gerekçesiyle Mısır'a geçti ve kardeşi Muhammed Rızâ'yı vekil bıraktı. Savaşın yönetimini Ömer el-Muhtâr'a verdi; Muhtâr direnişi 1931'e kadar sürdürdü. Aynı yıl faşist yönetim Berka'da tutumunu sertleştirdi.",
  kaynak:"TDV `idris-i--senusiler`: \"1922’de ileri gelen diğer şeyhler ve bazı kabile reisleriyle beraber tedavi olma gerekçesiyle Mısır’a geçen İdrîs yerine kardeşi Muhammed Rızâ’yı vekil bıraktı\"",
  gun:"1922 (TDV gün vermez)",
  ic_not_d:"ODAK: Berka cephesi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" },

{ t:"1923-01-01", b:"İtalya İdrîs'le anlaşmaları iptal etti — Tunus sınırındaki direniş kırıldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["savas","konu-askeri","konu-siyasi"], yer_id:"", odak_yer:["Zuvâre","Nâlût"], taraflar:["italya","senusi"],
  d:"Trablusgarp'a atanan yeni İtalyan sömürge valisi Şeyh İdrîs'le yapılmış bütün anlaşmaları iptal etti. Graziani'nin askerî kumandan olmasıyla sert bir tasfiye başladı ve aynı yıl Tunus sınırı bölgesindeki direniş kırıldı. Lozan Antlaşması'yla Türkiye de Trablusgarp ve Bingazi üzerindeki haklarından vazgeçti.",
  kaynak:"TDV `idris-i--senusiler`: \"1923’te Trablusgarp’a tayin edilen İtalyan sömürge valisi ülkesinin Şeyh İdrîs’le yaptığı bütün anlaşmaları iptal etti\"",
  gun:"1923 (TDV gün vermez)",
  ic_not_d:"ODAK: Tunus sınırı kesimi — odak bölge temsilidir (TDV olay yerini şehir adıyla vermez)" }

];
