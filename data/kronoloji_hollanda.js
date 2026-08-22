// =====================================================================
// HOLLANDA — Birleşik Provinsler ve Krallık (pilot, 22 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye BAĞLANMADI;
//    bağlamayı koordinatör yapar (şartname §5).
//
// ── ŞEMA — KRONOLOJI-SARTNAME.md §3 ──────────────────────────────────
//   onem   1-5  BU DOSYANIN DEVLETİ (Hollanda) için ağırlık
//   dunya  1-5  OLAYIN kendisine ait — HER DOSYADA AYNI
//   yer_id      yerleşim adına BİREBİR (girdi.yukle ile doğrulandı)
//
// 🔴 `dunya` DEVRALINDI, UYDURULMADI — şartname §3.2: *aynı olay farklı
//    dosyalarda farklı `dunya` taşırsa KUSURDUR.* Seksen Yıl Savaşları
//    zaten `kronoloji_ispanya.js`te yazılı; değerleri oradan ALDIM:
//    ```
//    1588-08-08 Armada          dunya:4   (ispanya.js:375)
//    1621-04-09 ateşkesin sonu  dunya:3   (ispanya.js:414)
//    1625-06-05 Breda           dunya:2   (ispanya.js:419)
//    1639-10-21 Downs           dunya:3   (ispanya.js:429)
//    1648-01-30 Münster         dunya:4   (ispanya.js:449)
//    1648-10-24 Vestfalya       dunya:5   (kronoloji_habsburg.js — benim dosyam)
//    ```
//    ⚠️ Bu altı olayı MÜKERRER YAZMADIM: İspanya dosyasındaki karşılıkları
//    duruyor, burada yalnız **Hollanda tarafından** ve `onem`i Hollanda'ya
//    göre yazıldı. Aynı olay iki dosyada olabilir; `dunya`sı aynı olmalıdır.
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ────────────────────────────────
// Şartname §2: *savaş-siyaset kronolojisi yazmak kolay ve eksiktir.*
// Hollanda'da bu, bir üslup tercihi değil **tarihin kendisi**: 17. yüzyılda
// dünyanın en zengin devletiydi ve modern **anonim şirket · borsa · takas
// bankası · deniz hukuku · mikroskop** bu ülkede doğdu. Bir Hollanda
// kronolojisini savaşlardan kurmak, devletin asıl mirasını atlamak olurdu.
// ⇒ İktisadî ve ilmî kalemler burada dolgu değil **omurga**dır.
//
// ── KAPSAM ───────────────────────────────────────────────────────────
// **1568-1923.** Öncesi (Burgonya/Habsburg Hollandası) ayrı madde değil,
// açılış maddesinin içinde.
//
// ── KAYNAK (§4) — SLUG SINAVI BU OTURUMDA ÖLÇÜLDÜ ────────────────────
// ```
// 🟢 hollanda      200 — GÖVDESİ OKUNDU, Osmanlı ilişkileri çok zengin
// 🟢 kapitulasyon  200
// 🔴 felemenk 302 · haga 302 · amsterdam 302 · lahey 302 · grotius 302 ·
//    felemenkler 302
// ```
// ⚠️ Koordinatörün brifingi *"`felemenk` · `haga` denenebilir"* diyordu;
//    **ikisi de ÖLÜ çıktı.** Ölçüm brifingi çürüttü, `hollanda` tuttu.
// AKADEMİK KAYNAKLAR (gövdeleri okundu):
//   Leiden Üniversitesi (Grotius · Leiden Law School kronolojisi)
//   UvA-DARE — Petram, 'The world's first stock exchange … 1602-1700'
//   Huygens Instituut / KNAW — Wisselbank kaynak neşri · Leeuwenhoek mektupları
//   Oxford Faculty of History — Tulipmania
//   Rijksmuseum — VOC
//   depo: `data/kronoloji_ispanya.js` (İSPANYA KRONOLOJİ oturumu)
//
// 🔴 OKUMADIĞIM ESERE ATIF YAZMADIM.
// =====================================================================

window.KRONOLOJI_HOLLANDA = [

// I. İSYAN VE CUMHURİYETİN DOĞUŞU (1568-1609)

{ t:"1568-01-01", b:"Seksen Yıl Savaşları'nın başlaması — İspanya'ya karşı isyan", tur:"isyan", onem:5, dunya:3, kapsam:"dis", etiket:["isyan","askeri","din"], yer_id:"", kapsam_genis:true,
  d:"Habsburg Hollandası'nın on yedi vilâyeti, İspanyol merkezîleşmesine ve engizisyona karşı ayaklandı. Seksen yıl sürecek savaş, Avrupa'nın ilk başarılı bağımsızlık mücadelesi ve ilk büyük cumhuriyetçi devlet kuruluşudur.",
  kaynak:"TDV `hollanda` (gövdesi okundu): İspanya'ya karşı bağımsızlık mücadelesi anlatısı · ⚠️ GÜN DOĞRULANMADI (yıl damgası)" },

{ t:"1575-02-08", b:"Leiden Üniversitesi'nin kurulması", tur:"kultur", onem:4, dunya:3, kapsam:"ic", etiket:["bilim","kultur"], yer_id:"",
  d:"İsyanın en ağır günlerinde, kuşatmaya direnen Leiden'e ödül olarak bir üniversite kuruldu. Şarkiyat ve İslâm araştırmaları da dâhil, kurum kısa sürede Avrupa'nın ilk sıradaki ilim merkezlerinden biri hâline geldi; Grotius bu üniversitenin öğrencisidir.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda'da İslâm ve şarkiyat araştırmaları XVI. yüzyılın sonlarına doğru, Leiden Üniversitesi'nin kurulması (1575…)\" · Leiden Üniversitesi, 'Timeline: 450 years of Leiden Law School' · ⚠️ GÜN DOĞRULANMADI · ⚠️ yer_id BOŞ: Leiden yerleşim listesinde YOK (ölçüldü)" },

{ t:"1579-01-23", b:"Utrecht Birliği — kuzey vilâyetlerinin birleşmesi", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","ittifak"], yer_id:"Utrecht",
  d:"Kuzeydeki vilâyetler ortak savunma ve iç işlerde egemenlik esasına dayanan bir birlik kurdu. Bu metin Birleşik Provinsler'in fiilî anayasası oldu ve 1795'e kadar yürürlükte kaldı; TDV bağımsızlığın kazanıldığı tarih olarak 1579'u verir.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda, 1579 yılında İspanya'dan bağımsızlığını kazandıktan hemen sonra deniz aşırı ülkelere açılmak için büyük çaba harcadı\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1581-07-26", b:"Feragat Bildirisi — kralın azledilmesi", tur:"anayasa", onem:5, dunya:4, kapsam:"ic", etiket:["anayasa","isyan"], yer_id:"",
  d:"Genel Meclis, II. Felipe'yi hükümdarlıktan azlettiğini ilan etti: bir hükümdar tebaasına karşı yükümlülüklerini çiğnerse tebaanın onu görevden alma hakkı vardır. Bir halkın kralını hukukî gerekçeyle azlettiği bu metin, Avrupa siyasî düşüncesinde bir ilktir.",
  kaynak:"bulunamadı — okunan kaynaklarda GÜN doğrulanmadı · ⚠️ yer_id BOŞ: Lahey (Den Haag) yerleşim listesinde YOK, oysa Genel Meclis'in merkezidir (ölçüldü, koordinatöre bildirildi)" },

{ t:"1585-08-17", b:"Anvers'in düşüşü ve kuzeye göç", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", etiket:["askeri","ekonomi","sosyal"], yer_id:"Anvers (Antwerpen)",
  d:"İspanyol ordusu Anvers'i geri aldı ve Schelde nehri kapatıldı. Şehrin tüccarları, zanaatkârları ve sermayesi kuzeye — özellikle Amsterdam'a — göç etti; Altın Çağ'ın sermaye birikimi büyük ölçüde bu göçle kuruldu. Güneyin kaybı, kuzeyin zenginliğinin sebebidir.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1588-08-08", b:"İspanyol Armadası'nın bozgunu", tur:"savas", onem:4, dunya:4, kapsam:"dis", etiket:["askeri"], yer_id:"",
  d:"Manş'ta dağıtılan Armada, İspanya'nın Hollanda isyanını denizden boğma planını sona erdirdi. Cumhuriyet için bu, hayatta kalma ile yok olma arasındaki eşiktir.",
  kaynak:"depo `data/kronoloji_ispanya.js:375` (İSPANYA KRONOLOJİ oturumu) — `dunya:4` oradan devralındı, mükerrer değil Hollanda tarafı" },

{ t:"1602-03-20", b:"VOC'nin kurulması — dünyanın ilk anonim şirketi", tur:"ekonomi", onem:5, dunya:5, kapsam:"dis", etiket:["ekonomi","teknoloji"], yer_id:"Amsterdam",
  d:"Birleşik Doğu Hindistan Şirketi, rakip Hollanda şirketlerinin birleştirilmesiyle kuruldu ve devletten savaş açma, antlaşma yapma, kale inşa etme yetkisi aldı. Hisseleri halka açık satıldı; 1602'de açılan abonelik büyük ilgi gördü ve binlerce yatırımcı sermayesini şirketin odalarına yatırdı. VOC 1602-1800 arasında dünyanın en büyük ticaret ve denizcilik şirketiydi.",
  kaynak:"UvA-DARE, L. Petram, 'The world's first stock exchange: how the Amsterdam market for Dutch East India Company shares became a modern securities market, 1602-1700': \"When subscriptions in the VOC opened in 1602 they proved immensely popular, with thousands of investors placing their capital in the company's chambers\" · Rijksmuseum: \"the world's largest trading and shipping company from 1602 to 1800\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1602-03-21", b:"Amsterdam Borsası — hisse senedinin doğuşu", tur:"ekonomi", onem:4, dunya:5, kapsam:"ic", etiket:["ekonomi"], yer_id:"Amsterdam",
  d:"VOC hisseleri dünya tarihinde ilk kez büyük ölçekte alınıp satılmaya başlandı. Amsterdam piyasası 1630-1650 arasında vadeli işlem, açığa satış ve türev sözleşmeleriyle modern bir menkul kıymet piyasasına dönüştü; bugünkü borsanın atası budur.",
  kaynak:"UvA-DARE, Petram: \"In seventeenth-century Amsterdam, shares were traded on a large scale for the first time in world history\" · \"The Amsterdam stock market developed into a modern securities market during the period 1630-1650\" · ⚠️ GÜN DOĞRULANMADI (VOC ile aynı yıl; ayrı madde, çünkü şirket ile piyasa ayrı kurumlardır)" },

{ t:"1604-01-01", b:"Osmanlı'ya ilk başvuru — esirlerin serbest bırakılması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"İstanbul",
  d:"Hollandalılar ele geçirdikleri bir İspanyol kadırgasındaki müslüman esirleri serbest bırakıp padişaha bir mektupla gönderdiler; Cezayirli ve Tunuslu korsanların elindeki Hollandalılar için yardım ve kendi bayraklarıyla ticaret hakkı istediler. Başvuruya cevap verilemedi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollandalılar, Osmanlı Devleti ile doğrudan ilişki kurmak için 1604 yılında bir girişimde bulundular… Fakat çeşitli gaileler yüzünden Hollanda'nın bu ilk başvurusuna cevap verilemedi\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-01-31", b:"Amsterdam Wisselbank — Avrupa'nın ilk kamu takas bankası", tur:"ekonomi", onem:4, dunya:4, kapsam:"ic", etiket:["ekonomi","reform"], yer_id:"Amsterdam",
  d:"Amsterdam Şehir Meclisi, dolaşımdaki sikke kargaşasına düzen getirmek için Wisselbank'ı kurdu. Banka mevduata dayalı sabit değerli bir hesap parası yarattı; Amsterdam gulden'i iki yüzyıl boyunca Avrupa ticaretinin ölçü birimi oldu ve modern merkez bankacılığının öncüsü sayıldı.",
  kaynak:"Huygens Instituut / KNAW, 'Exchange Banks in Amsterdam, Middelburg, Delft and Rotterdam 1603-1820' kaynak neşri: \"The Exchange Bank (Wisselbank) in Amsterdam was founded in 1609 by the Municipal Council of Amsterdam in order to bring order to the chaos that surrounded ready cash at the time\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-04-09", b:"On İki Yıllık Ateşkes — fiilî bağımsızlığın tanınması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", etiket:["antlasma","diplomasi"], yer_id:"Anvers (Antwerpen)",
  d:"İspanya, isyancılarla ateşkes imzalayarak Birleşik Provinsler'i fiilen muhatap kabul etti. Bu on iki yıl, cumhuriyetin ticaretini, donanmasını ve kurumlarını savaşsız kurduğu dönemdir — Altın Çağ'ın kuluçkası.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"İspanya'nın Hollandalı isyancılarla mütareke imzalamasından (1609) sonra Osmanlılar Felemenk Cumhuriyeti ile ittifak yapmanın gerekliliğini anladılar\" · `dunya:3` ateşkesin SONU ile aynı (`ispanya.js:414`) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1609-11-01", b:"Grotius'un Mare Liberum'u — denizlerin serbestliği", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["bilim","kultur","ekonomi"], yer_id:"",
  d:"Leiden'in yayıncısı Elzevier, VOC'nin ısmarladığı Mare Liberum'u bastı; Hugo Grotius denizlerin bütün milletlere açık olduğunu, kimsenin okyanusu mülk edinemeyeceğini savundu. Metin, De jure praedae adlı büyük eserin bir parçasıydı ve bugün hâlâ deniz hukukunun kurucu ilkesidir — modern devletler hukuku bu risaleyle başlar.",
  kaynak:"Leiden Üniversitesi, 'Hugo Grotius: from Leiden student to founding father of international law' ve Grotius web sergisi: \"In 1609, the university's publisher Elzevier published Mare Liberum (The Freedom of the Seas), commissioned by the Dutch East India Company\"; De jure praedae'nin parçası olduğu; ilkenin bugün de deniz hukukunun temeli sayıldığı · ⚠️ GÜN DOĞRULANMADI · ⚠️ yer_id BOŞ: Leiden yok" },

// II. OSMANLI İLE İLİŞKİ VE ALTIN ÇAĞ (1610-1660)

{ t:"1610-01-01", b:"Kaptanıderyâ Halil Paşa'nın daveti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"İstanbul",
  d:"Akdeniz'de İspanyol donanmasına karşı mücadele eden Kaptanıderyâ Kayserili Halil Paşa, Venedik'teki Hollandalı tüccarlar eliyle Hollanda'ya bir mektup gönderdi. Mektupta padişahın serbest ticaret hakkı tanımaya karar verdiği belirtiliyor ve İstanbul'a bir temsilci gönderilmesi isteniyordu; ilişkiyi başlatan davet Osmanlı tarafından geldi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Halil Paşa'nın 1610'da gönderdiği mektup ve temsilci daveti (Erdbrink'e atıfla) · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1611-09-07", b:"Cornelis Haga'nın İstanbul'a yola çıkması", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"",
  d:"Genel Meclis, Halil Paşa'nın teklifini görüşüp Cornelis Haga başkanlığında bir heyet göndermeye karar verdi. Haga'nın tâlimatnâmesi iki maddeydi: esirlerin serbest bırakılması ve Hollanda bayrağı altında ticaret hakkı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"7 Eylül 1611'de yola çıkan Haga\" · ⚠️ yer_id BOŞ: Lahey yok" },

{ t:"1612-03-17", b:"Haga'nın İstanbul'a varışı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"İstanbul",
  d:"Bazı Avrupa ülkelerini dolaştıktan sonra Haga İstanbul'a ulaştı. Fransız ve İngiliz elçileri, İspanya'ya isyan hâlindeki bir topluluğun temsilcisinin kabulünün padişahın itibarını sarsacağını ileri sürerek huzura çıkmasını engellemeye çalıştılar.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"17 Mart 1612'de İstanbul'a geldi\"; Fransız ve İngiliz elçilerinin engelleme girişimi" },

{ t:"1612-05-01", b:"I. Ahmed'in Haga'yı kabulü — cumhuriyetin resmen tanınması", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", etiket:["diplomasi"], yer_id:"İstanbul",
  d:"Kaptanıderyâ Halil Paşa ve bazı devlet adamlarının yardımıyla Haga padişah tarafından kabul edildi. Böylece İspanya'ya karşı bağımsızlık mücadelesi veren Felemenk Birleşik Cumhuriyeti, Osmanlı Devleti tarafından resmen tanınmış oldu — bir Avrupa büyük gücünden önce.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Haga 1 Mayıs 1612'de I. Ahmed tarafından kabul edildi… Böylece Osmanlılar'ın düşmanı olan İspanya'ya karşı bağımsızlık mücadelesi veren Felemenk Birleşik Cumhuriyeti Osmanlı Devleti tarafından resmen tanınmış oldu\"" },

{ t:"1612-07-06", b:"Osmanlı ahidnâmesi — Hollanda kapitülasyonları", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["diplomasi","ekonomi","antlasma"], yer_id:"İstanbul",
  d:"Venedik, Fransa ve İngiltere elçilerinin bütün engellemelerine rağmen Haga I. Ahmed'den ahidnâme aldı. Fransa ve İngiltere'ye verilenlerle aynı olan bu belge, cumhuriyete İstanbul'da elçilik ve Osmanlı iskelelerinde konsolosluk açma hakkı ile adlî ve ticarî imtiyazlar tanıdı. Hollanda tüccarı artık kendi bayrağı altındaydı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"I. Ahmed'den bir ahidnâme almayı başardı (6 Temmuz 1612). Fransa ve İngiltere'ye verilenlerle aynı olan bu ahidnâmeyle Felemenk Birleşik Cumhuriyeti'ne İstanbul'da elçilik ve Osmanlı ülkesi dahilindeki iskelelerde konsolosluk açma hakkı verilmiş, bazı adlî ve ticarî imtiyazlar tanınmıştı\" (A. H. de Groot, The Ottoman Empire and the Dutch Republic'e atıfla)" },

{ t:"1613-01-01", b:"Ömer Ağa'nın Hollanda'ya gönderilmesi ve Haga'nın daimî elçi olması", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"",
  d:"Osmanlı hükûmeti yeni müttefikini tanımak için Halil Paşa'nın adamlarından Ömer Ağa'yı gönderdi; korsanların elinden kurtarılan esirlerle birlikte gelen elçi büyük merasimle karşılandı, genel meclisi ve şehirleri gezip müsbet intibalarla döndü. Padişahın isteği üzerine Genel Meclis Haga'nın İstanbul'da daimî elçi olarak kalmasına karar verdi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Ömer Ağa'nın görevi, karşılanışı ve dönüşü (1613); \"Padişahın isteği üzerine Hollanda Genel Meclisi Haga'nın dâimî elçi olarak İstanbul'da kalmasına karar verdi\" · ⚠️ yer_id BOŞ: Lahey yok" },

// V. SÖMÜRGE İMPARATORLUĞU VE TARAFSIZLIK (1600-1923)

{ t:"1619-05-30", b:"Batavia'nın kurulması — Doğu'daki başkent", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kazanc","ekonomi"], yer_id:"Batavia (Cakarta)",
  d:"VOC, Java'da Jayakarta'nın yerine Batavia'yı kurdu ve Asya ticaret ağının merkezi yaptı. Şehir üç yüz yılı aşkın süre Hollanda Doğu Hint İmparatorluğu'nun başkenti olarak kaldı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): Hollanda sömürgeciliği bölümü — bağımsızlıktan hemen sonra denizaşırı açılım · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1621-04-09", b:"On İki Yıllık Ateşkesin sona ermesi — savaşın yeniden başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri"], yer_id:"Amsterdam",
  d:"Ateşkes yenilenmedi ve İspanya ile savaş yeniden başladı. Bu ikinci evrede cumhuriyet artık isyancı bir vilâyet değil, denizaşırı imparatorluğu olan bir deniz gücüydü.",
  kaynak:"depo `data/kronoloji_ispanya.js:414` — `dunya:3` oradan devralındı" },

{ t:"1625-06-05", b:"Breda'nın kaybı", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", etiket:["askeri","kusatma"], yer_id:"",
  d:"Spínola'nın uzun kuşatması Breda'yı düşürdü; Velázquez'in tablosu teslim sahnesini İspanyol zaferinin simgesi yaptı. Kale 1637'de geri alındı.",
  kaynak:"depo `data/kronoloji_ispanya.js:419` — `dunya:2` oradan devralındı · ⚠️ yer_id BOŞ: Breda yok" },

{ t:"1629-04-14", b:"Christiaan Huygens'in doğumu", tur:"kultur", onem:3, dunya:4, kapsam:"ic", etiket:["bilim"], yer_id:"",
  d:"Diplomat ve şair Constantijn Huygens'in oğlu Lahey'de doğdu. Satürn'ün halkasını tanımlayan, sarkaçlı saati icat eden ve ışığın dalga kuramını kuran Christiaan Huygens, cumhuriyetin dünya ilmine en büyük katkısıdır.",
  kaynak:"Huygens Instituut / KNAW ve akademik kaynaklar: \"Christiaan Huygens was born on April 14, 1629, in Den Haag (The Hague), in the Dutch Republic. He was the son of Constantijn Huygens, a diplomat with a strong background in philosophy and the natural sciences\" · ⚠️ yer_id BOŞ: Lahey yok" },

{ t:"1632-11-24", b:"Spinoza'nın doğumu", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["kultur","din","bilim"], yer_id:"Amsterdam",
  d:"Baruch Spinoza, Amsterdam'ın Portekiz kökenli yahudi cemaatinin tanınmış bir ailesinde doğdu ve on yedi yaşında okulu bırakıp ailenin ithalat işine girdi. Aydınlanma'nın en radikal filozofu, cumhuriyetin görece hür yayın ikliminde yetişti — ama sansürlenen az sayıdaki yazardan biri olarak o iklimin sınırını da gösterdi.",
  kaynak:"UvA, 'Dutch Culture and Society in European Context' — Spinoza: \"born into a prominent family in Amsterdam's Portuguese-Jewish immigrant community in 1632, left school at seventeen to help run the family's importing business\"; \"Spinoza remains one of the anomalies as one of the few authors to be censored in what was an otherwise liberal publishing climate compared to other European states\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1637-02-03", b:"Lâle çılgınlığı — tarihin ilk spekülatif balonu", tur:"ekonomi", onem:4, dunya:4, kapsam:"ic", etiket:["ekonomi","sosyal"], yer_id:"Amsterdam",
  d:"1636-37 kışında lâle soğanı fiyatları olağanüstü yükseldi ve aniden çöktü. Arka planda VOC'nin devasa kârlarının beslediği eşi görülmemiş bir refah vardı; tüccar sınıfının serveti bahçelere ve lâleye akıyordu. Vaka, spekülatif balonun bilinen ilk örneği olarak iktisat tarihine geçti.",
  kaynak:"Oxford, Faculty of History — 'Tulipmania: A Garden Historian's Perspective': \"Tulip madness (Tulpenwoerde), which became known as Tulipomania, took place in the Dutch United Provinces in 1636 and 1637\"; 1630'ların eşi görülmemiş refahı ve VOC kârlarının rolü · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1639-10-21", b:"Downs Deniz Savaşı — İspanyol donanmasının imhası", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri"], yer_id:"",
  d:"Tromp komutasındaki Hollanda donanması İspanyol filosunu Downs açıklarında imha etti. İspanya'nın denizden Hollanda'ya asker taşıma imkânı bitti; deniz üstünlüğü kesin olarak el değiştirdi.",
  kaynak:"depo `data/kronoloji_ispanya.js:429` — `dunya:3` oradan devralındı" },

{ t:"1648-01-30", b:"Münster Antlaşması — bağımsızlığın tanınması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", etiket:["antlasma","anayasa"], yer_id:"Münster",
  d:"İspanya, Birleşik Provinsler'in bağımsızlığını resmen tanıdı ve seksen yıllık savaş sona erdi. Schelde'nin kapalı kalması da kabul edildi; Anvers'in ticaretinin Amsterdam'a akışı antlaşmayla kalıcılaştırıldı.",
  kaynak:"depo `data/kronoloji_ispanya.js:449` — `dunya:4` oradan devralındı" },

{ t:"1648-10-24", b:"Vestfalya Barışı — Avrupa düzeninde cumhuriyetin yeri", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", etiket:["antlasma","diplomasi"], yer_id:"Münster",
  d:"Genel barışla Birleşik Provinsler, İmparatorluk'tan ayrılmış egemen bir devlet olarak Avrupa sistemine girdi. Bir tüccar cumhuriyeti, kral hanedanlarının kurduğu düzende eşit taraf sayıldı.",
  kaynak:"depo `data/kronoloji_habsburg.js` (aynı oturum) — `dunya:5`, M-0880'de ilan edilen değerle birebir" },

{ t:"1652-04-06", b:"Kap kolonisinin kurulması", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", etiket:["toprak-kazanc","ekonomi"], yer_id:"Kap (Cape Town)",
  d:"VOC, Doğu Hindistan yolundaki gemilere ikmal için Ümit Burnu'nda bir istasyon kurdu. İstasyon zamanla yerleşimci kolonisine dönüştü; Afrikaner toplumunun ve dilinin kökeni buradadır.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

// III. DENİZ HÂKİMİYETİ, FELAKET YILI VE İNGİLTERE TACI (1650-1700)

{ t:"1652-07-10", b:"Birinci İngiliz-Hollanda Savaşı", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri","ekonomi"], yer_id:"",
  d:"İngiltere'nin Seyrüsefer Kanunu'yla Hollanda taşımacılığını dışlaması savaşa yol açtı. İki deniz cumhuriyeti, ticaret yollarının denetimi için üç savaştan ilkine girdi.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1667-06-19", b:"Medway baskını — Thames'te Hollanda donanması", tur:"savas", onem:4, dunya:3, kapsam:"dis", etiket:["askeri"], yer_id:"",
  d:"De Ruyter'in filosu Medway nehrini çıkıp İngiliz donanmasını demirlediği yerde yaktı ve amiral gemisini çekip götürdü. İngiliz tarihinde donanmanın yaşadığı en ağır aşağılanma, Hollanda tarihinde deniz gücünün zirvesidir.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1672-01-01", b:"Rampjaar — Felaket Yılı", tur:"kriz", onem:5, dunya:3, kapsam:"ic", etiket:["askeri","isyan","kriz"], yer_id:"", kapsam_genis:true,
  d:"Fransa, İngiltere ve iki piskoposluk aynı anda saldırdı; kara ordusu çöktü, vilâyetlerin yarısı işgal edildi. Hollandalıların kendi deyişiyle halk çılgın, hükûmet çaresiz, ülke kurtarılamazdı; su hattı açılarak toprak bilerek sular altında bırakıldı. Kardeşler De Witt linç edildi ve III. William iktidara geldi.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI; okunan akademik kaynaklarda doğrulanmadı" },

{ t:"1676-01-01", b:"Leeuwenhoek ve mikroskobik canlıların keşfi", tur:"kultur", onem:4, dunya:5, kapsam:"ic", etiket:["bilim","teknoloji"], yer_id:"",
  d:"Delft'li bez tüccarı Antoni van Leeuwenhoek, kendi yaptığı tek mercekli aletlerle serbest yaşayan mikroorganizmaları, mantar hiflerini, alyuvarları, kılcal dolaşımı, ağız bakterilerini ve spermatozoayı ilk kez belgeledi. Bulgularını Londra'daki Royal Society'ye iki yüzden fazla mektupla bildirdi; mikrobiyoloji Delft'in optik ve zanaat kültüründen doğdu.",
  kaynak:"Huygens Instituut / KNAW, 'Antoni van Leeuwenhoek — The Collected Letters' projesi ve akademik derleme: \"Using single-lens instruments, he documented the first observations of free-living microorganisms, fungal hyphae, red blood cells, capillary flow, oral bacteria, and spermatozoa in more than two hundred letters to the Royal Society of London\" · ⚠️ GÜN ve YIL DOĞRULANMADI (mektuplar 1670'lerden itibaren) · ⚠️ yer_id BOŞ: Delft yok" },

{ t:"1677-02-21", b:"Spinoza'nın ölümü ve Etika'nın yayımlanması", tur:"kultur", onem:4, dunya:4, kapsam:"ic", etiket:["kultur","din"], yer_id:"",
  d:"Spinoza öldüğü yıl başyapıtı Etika ölümünden sonra basıldı. Cumhuriyetin yayın iklimi Avrupa'nın en hürüydü; yine de Spinoza'nın eserleri yasaklandı — Lodewijk Meyer, Adriaen Koerbagh ve Balthasar Bekker'in yazılarıyla birlikte Avrupa çapında tartışma yarattı.",
  kaynak:"UvA, 'Dutch Culture and Society in European Context': Spinoza'nın sansürlenmesi ve radikal düşünce akımının Altın Çağ'ın son on yıllarında Avrupa'da yarattığı tartışma · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1688-11-05", b:"III. William'ın İngiltere'ye çıkması — Şanlı İhtilâl", tur:"hanedan", onem:5, dunya:5, kapsam:"dis", etiket:["askeri","hanedan","diplomasi"], yer_id:"",
  d:"Hollanda stadhouder'i William, Genel Meclis'in donattığı bir donanmayla İngiltere'ye çıktı ve tacı aldı. İki deniz gücü aynı hükümdarda birleşti; Fransa'ya karşı ittifak kuruldu, ama uzun vadede deniz ticaretinin ağırlığı Londra'ya kaydı — Hollanda için zafer ve gerileyişin başlangıcı aynı olaydır.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

// IV. GERİLEME, CUMHURİYETİN SONU VE KRALLIK (1700-1830)

{ t:"1713-04-11", b:"Utrecht Antlaşması — büyük güçlükten çıkış", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", etiket:["antlasma","diplomasi"], yer_id:"Utrecht",
  d:"İspanya Veraset Savaşı'nı bitiren antlaşmalar Utrecht'te imzalandı ve cumhuriyet güney sınırında bir kale hattı (Barrière) kazandı. Ama savaşın borcu devleti tüketmişti; Hollanda bundan sonra büyük güç siyasetinden çekildi ve ikinci sıra bir devlet oldu.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1795-01-19", b:"Batavya Cumhuriyeti — Fransız işgali ve eski düzenin sonu", tur:"son", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","isyan"], yer_id:"Amsterdam",
  d:"Fransız orduları donmuş nehirleri geçerek ülkeyi işgal etti; stadhouder İngiltere'ye kaçtı ve Birleşik Provinsler sona erdi. Yerine kurulan Batavya Cumhuriyeti, 1579 Utrecht Birliği'nin iki yüz on altı yıllık düzenini kaldırıp merkezî bir üniter devlet kurdu.",
  kaynak:"bulunamadı — GÜN DOĞRULANMADI" },

{ t:"1799-12-31", b:"VOC'nin tasfiyesi", tur:"son", onem:4, dunya:3, kapsam:"dis", etiket:["ekonomi"], yer_id:"Amsterdam",
  d:"Borç batağındaki şirketin imtiyazı yenilenmedi ve varlıkları devlete geçti. İki yüz yıl dünyanın en büyük ticaret şirketi olan VOC böylece sona erdi; sömürgeler doğrudan devlet idaresine girdi.",
  kaynak:"Rijksmuseum: VOC'nin \"1602 to 1800\" arasında dünyanın en büyük ticaret ve denizcilik şirketi olduğu · ⚠️ GÜN DOĞRULANMADI (kaynak 1800 diyor, tasfiye kararı 1799)" },

{ t:"1815-03-16", b:"Hollanda Krallığı'nın kurulması", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", etiket:["anayasa","hanedan"], yer_id:"Amsterdam",
  d:"Viyana Kongresi düzeninde, kuzey ile güney Hollanda birleştirilerek Orange hanedanı altında bir krallık kuruldu. Amaç Fransa'nın kuzey sınırında güçlü bir tampon devletti; iki yüz yıllık cumhuriyet geleneği monarşiyle yer değiştirdi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"Hollanda Krallığı, ticarete dayanan Protestan kuzey bölgesiyle sanayiin hâkim olduğu Katolik güney bölgesini bir arada tutmak için büyük çaba harcadı\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1830-08-25", b:"Belçika'nın ayrılması", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", etiket:["isyan","toprak-kayip","milliyetcilik"], yer_id:"Brüksel",
  d:"Güney bölgesinde çıkan ayaklanma sonucunda Belçika bağımsızlığını ilan etti. Uzun mücadelelerden sonra Hollanda bu bağımsızlığı 1839'da tanımak zorunda kaldı; Protestan-ticarî kuzey ile Katolik-sınaî güneyi bir arada tutma denemesi on beş yılda çöktü.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"1830 yılında çıkan bir ayaklanma sonucunda güney bölgesi Belçika adıyla bağımsızlığını ilân ederek Hollanda Krallığı'ndan ayrıldı. Uzun mücadelelerden sonra Hollanda bu bağımsızlığı tanımak zorunda kaldı (1839)\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1839-04-19", b:"Belçika bağımsızlığının tanınması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","toprak-kayip"], yer_id:"",
  d:"Londra Antlaşması'yla Hollanda Belçika'yı tanıdı ve sınır kesinleşti. Aynı antlaşma Belçika'nın tarafsızlığını büyük güçlerin güvencesine bağladı — 1914'te Almanya'nın ihlal edeceği belge budur.",
  kaynak:"TDV `hollanda` (gövdesi okundu): bağımsızlığın 1839'da tanınması · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1890-11-23", b:"Lüksemburg'un ayrılması", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", etiket:["hanedan","toprak-kayip"], yer_id:"",
  d:"Kişisel birlikle Hollanda kralına bağlı olan Lüksemburg, veraset kuralları gereği ayrıldı. Krallığın Avrupa'daki toprakları bugünkü sınırlarına indi.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"XIX. yüzyıl sonlarında Lüksemburg da Hollanda'dan ayrıldı (1890)\" · ⚠️ GÜN DOĞRULANMADI" },

{ t:"1914-08-01", b:"I. Dünya Savaşı'nda tarafsızlık", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", etiket:["diplomasi"], yer_id:"", kapsam_genis:true,
  d:"Hollanda savaşın dışında kalmayı başardı ve dört yıl boyunca tarafsızlığını korudu. Ülke hem Belçikalı mültecilerin sığınağı hem de abluka altındaki Almanya ile ticaretin kapısı oldu; tarafsızlık, 1830'dan beri sürdürülen çizginin en zorlu sınavıydı.",
  kaynak:"TDV `hollanda` (gövdesi okundu): \"I. Dünya Savaşı'nda tarafsız kalmayı başaran Hollanda Krallığı\" · ⚠️ GÜN DOĞRULANMADI" },

];
