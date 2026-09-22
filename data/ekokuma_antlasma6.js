// ============================================================================
// EK OKUMA — ANTLAŞMALAR, ALTINCI DALGA (ekokuma_antlasma6)
//            kartsız kalan antlaşma maddelerinin en merkezîleri
// ============================================================================
// Yazan: EKOKUMA-ANTLASMA-0921 · 21 Eylül 2026
//
// NİÇİN VAR: `js/app.js` `_EKOKUMA_DOSYA_ADLARI` listesinde "ekokuma_antlasma6"
// satırı vardı ama dosya hiç yazılmamıştı (yükleyici `onerror` ile sessizce
// atlıyordu). Ölçüm (denetim/ARAC-EKOKUMA-ANTLASMA-0921.js): `k:"antlasma"`
// kategorili 131 kronoloji maddesinin 43'ünde HİÇ ek okuma kartı görünmüyordu.
// Bu dosya o 43'ün en merkezî 11'ini kapatır.
//
// 🔴 KAPSAM NOTU: app.js'teki satırın yanındaki eski not "Osmanlı dışı
// antlaşmalar <1700" diyordu; o plan gerçekleşmedi ve ÖLÇÜM başka bir küme
// gösterdi (kartsız maddelerin ağırlığı 1739-1920 arasında ve çoğu Osmanlı'nın
// taraf olduğu antlaşmalar). Dosya ölçümün gösterdiği kümeye yazıldı.
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_ANTLASMA6 tanımlar.
//    Yükleyici satırı ZATEN duruyor (js/app.js), index.html'e satır GEREKMEZ —
//    ek okuma dosyaları dinamik <script> enjeksiyonuyla yükleniyor.
//
// ŞEMA: ekokuma_antlasma4/5 ile aynı — id · tur:"sebep-sonuc" · baslik · kisa ·
//   sebep{b,t} · sonuc{b,t} · bag (= ÖNEMİ) · surec · hukumler[] · metin ·
//   kesinlik · zincir · olay · kaynak · ic_not (çizilmez).
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): TDV İslâm Ansiklopedisi birincil; her kartın
// dayandığı madde `kaynak` alanında adıyla yazılıdır. TDV'nin kapsamadığı tek
// kart (Viyana Kongresi) için kamu malı 1911 Encyclopædia Britannica (Wikisource
// neşri) kullanıldı ve bu, kartın kaynak alanında AÇIKÇA belirtildi. Vikipedi
// kullanılmadı. Metinler kopyalanmadı, özetlendi.
//
// ÖLÜ SLUGLAR (D211 ①): `belgrad-antlasmasi`, `nis-antlasmasi` ve
// `viyana-kongresi` 302 döndürür (arama sayfasına gider). Yerine yer/kişi
// maddesi okundu (D217): `belgrad`, `azak`, `mahmud-i--osmanli`, `viyana`.
// ============================================================================
window.EKOKUMA_ANTLASMA6 = [

// ── 1489 · KIBRIS'IN VENEDİK'E GEÇİŞİ ──────────────────────────────────────
{ id:"antlasma6-kibris-1489", tur:"sebep-sonuc",
  baslik:"Kıbrıs'ın Venedik'e devri (1489): Doğu'daki son Haçlı devletinin sonu",
  kisa:"Venedikli bir kraliçe Kıbrıs tahtından feragat etti; ada bir krallık olmaktan çıkıp Venedik'in eyaleti oldu — ve seksen iki yıl sonra Osmanlı fethinin hedefi bu eyalet olacaktı.",
  sebep:{ b:"1488'de bir Osmanlı filosunun Magosa önünde görünmesi ve Venedik'in adanın savunulmasından endişe etmesi", t:"1488-01-01" },
  sonuc:{ b:"Kraliçe Caterina Cornaro'nun tahttan feragati ve adanın idaresinin Venedik'e geçmesi", t:"1489-02-26" },
  bag:"Önemi: Doğu Akdeniz'deki son Haçlı devleti böylece ortadan kalktı ve Kıbrıs bir hanedan krallığı olmaktan çıkıp doğrudan bir deniz devletinin sömürgesi hâline geldi. Ada artık Venedik donanmasının Doğu Akdeniz'deki ileri karakoluydu; Osmanlı Devleti ile Venedik arasındaki deniz rekabetinin merkezine yerleşti ve 1570-71 Kıbrıs seferinin hedefi bu Venedik idaresi oldu.",
  surec:"Kıbrıs Krallığı XIV. yüzyıldan beri Ceneviz ve Venedik'in ekonomik nüfuzu altında eriyordu: 1374'te Cenevizliler Kıbrıs kralıyla anlaşarak adada doksan yıl boyunca ekonomik hâkimiyeti ellerinde tuttular ve iki İtalyan cumhuriyetinin çekişmesi adanın ekonomisini çökertti. Kraliçenin tarafını tutan Cenevizliler'e karşı Venedikliler'le ittifak yapan Kral James 1472'de Venedikli Caterina Cornaro ile evlendi; böylece Venedik hanedanın içine girmiş oldu. 1488'de bir Osmanlı filosunun Magosa (Famagusta) önünde görünmesi Venedik'i adanın savunulması bakımından endişeye düşürdü.",
  hukumler:[
    "Kraliçe Caterina Cornaro 26 Şubat 1489'da tahttan feragat etti.",
    "Adanın idaresi Venedik Cumhuriyeti'nin eline geçti.",
    "Venedik, adadaki hâkimiyetini sağlama almak için Memlük Sultanı Kayıtbay'a eskiden olduğu gibi haraç ödemeyi kabul ettiğini bildirdi."
  ],
  metin:"Devrin hukuk düzeninde Kıbrıs, Memlük sultanlığına haraç ödeyen bir krallıktı; Venedik bu yükümlülüğü devraldığını Kahire'ye bildirdi ve elçisi sultana hediyelerle birlikte iki yıllık haraç olarak 16.000 duka getirdi. Yani devir, adanın hukukî bağını koparmadı — yalnız o bağı taşıyan eli değiştirdi. Memlük Devleti 1517'de Osmanlı Devleti'ne katılınca bu haraç alacağı da el değiştirecek ve Osmanlı tarafının Kıbrıs üzerindeki iddiasının hukukî dayanaklarından biri hâline gelecekti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1489-02-26|Katerina"],
  kaynak:"TDV İslâm Ansiklopedisi, 'KIBRIS' (1374 Ceneviz anlaşması ve doksan yıllık ekonomik hâkimiyet; 1472'de James'in Caterina Cornaro ile evlenmesi; 1488'de Osmanlı filosunun Magosa önünde görünmesi; 26 Şubat 1489 feragati ve idarenin Venedik'e geçişi; 'Doğu'daki son Haçlı devletini ortadan kaldıran Venedik'in Memlük Sultanı Kayıtbay'a haraç ödemeyi kabul etmesi; elçinin iki yıllık haraç olarak 16.000 duka getirmesi)",
  ic_not:"Bu bir antlaşma değil bir feragat ve devirdir; kronoloji maddesi `k:\"antlasma\"` kategorisinde durduğu için bu dosyaya alındı. 1570-71 Kıbrıs seferiyle kurulan bağ TDV'nin bu maddesinden DEĞİL, kartın kendi çerçevelemesinden gelir — tarih iddiası taşımaz." },

// ── 1739 · RUSYA İLE BARIŞ ─────────────────────────────────────────────────
{ id:"antlasma6-rusya-1739", tur:"sebep-sonuc",
  baslik:"Rusya ile barış (1739): Azak Ruslar'da kalır ama tahkim edilmez",
  kisa:"Belgrad'ı geri alan Osmanlı ordusu Avusturya'yı savaştan çıkardı; müttefikini kaybeden Rusya da barışa oturdu ve Azak'ı silahsız bir kale olarak aldı.",
  sebep:{ b:"Rusların Azak Kalesi'ne saldırması ve Kırım'a yürümesiyle başlayan 1736-1739 savaşı", t:"1736-07-13" },
  sonuc:{ b:"Rusya ile barışın imzalanması (11 Ramazan 1152)", t:"1739-12-12" },
  bag:"Önemi: I. Mahmud devrinin bu barışı, Osmanlı Devleti'nin XVIII. yüzyılda kazanılmış bir savaşla bitirdiği son büyük antlaşma oldu. Azak Rusya'da kaldı ama tahkim edilemeyecekti; Kabartay bölgesi tarafsız sayıldı. Yani Rusya Karadeniz'e ve Kafkasya'ya açılma hedefine ulaşamadı — bu hedef, otuz beş yıl sonra Küçük Kaynarca'ya kadar ertelendi.",
  surec:"Savaşın gerekçesi bir geçiş meselesiydi: I. Mahmud, Kırım kuvvetlerinin İran sınırındaki Osmanlı kuvvetlerine destek için Kafkasya'daki Kabartay bölgesinden geçmesini emretmiş, Ruslar burasının kendilerine ait olduğunu ileri sürerek protesto etmiş, emrin geri alınmasına rağmen bunu bahane ederek Mart 1736'da Azak Kalesi'ne saldırmış ve Orkapı'ya yürümüştü. 13 Temmuz 1736'da Ruslar Azak Kalesi'ni, Gözleve'yi, Orkapı'yı ve Kılburun'u zaptetti, Bahçesaray ile Akmescid'de tahribatta bulundu. 1738'de Dinyester'i geçmek isteyen Ruslar püskürtüldü, Azak'tan Karadeniz'e çıkan Rus donanması Kaptanıderyâ Süleyman Paşa kumandasındaki Osmanlı filosu tarafından yakıldı. Nisan 1739'da İstanbul'dan yola çıkan ve İvaz Mehmed Paşa'nın kumanda ettiği ordunun hedefi Belgrad'dı; Belgrad-Hisarcık arasındaki muharebelerde Avusturyalılar yenilerek şehir geri alındı. 28 Eylül 1739'da Avusturya ile yirmi yedi yıllığına yapılan anlaşma savaşı bitirdi ve Avusturyalılar Tuna'nın kuzeyine çekildi. Hotin'i almış olmasına rağmen müttefikinin savaştan çekilmesinin de rolüyle Rusya barış yapmak zorunda kaldı.",
  hukumler:[
    "Azak Kalesi Ruslar'da kalacak, fakat tahkim edilmeyecekti.",
    "Kabartay bölgesi tarafsız olacaktı."
  ],
  metin:"Barışın tarihi 11 Ramazan 1152 / 12 Aralık 1739'dur. Avusturya ile Belgrad'da yapılan anlaşma ise ondan üç ay önce, 28 Eylül 1739'da imzalanmıştı; iki barış birlikte 1736-1739 savaşını kapattı. Belgrad şehri bu barışla Osmanlılar'a teslim edildi ve XVIII. yüzyılın geri kalanında Osmanlı serhaddinin en ileri noktası olarak kaldı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1739-12-12|Rusya"],
  kaynak:"TDV İslâm Ansiklopedisi, 'MAHMUD I' (Kabartay geçişi ve Rus protestosu; Mart 1736 Azak saldırısı; 13 Temmuz 1736 zaptları; 1738 Dinyester ve Rus donanmasının yakılması; Nisan 1739 seferi ve Belgrad'ın geri alınması; 28 Eylül 1739 Avusturya anlaşması; Rusya ile barış 11 Ramazan 1152 / 12 Aralık 1739; 'Azak Kalesi Ruslar'da kalacak, fakat tahkim edilmeyecek, Kabartay bölgesi tarafsız olacaktı') · TDV İslâm Ansiklopedisi, 'AZAK' ('1713 Edirne Antlaşması'yla Osmanlılar'a bırakılan Azak 1736'da tekrar Rus idaresine girdi ve Belgrad Antlaşması'na (1739) göre istihkâmları yıkılmak şartıyla Rusya'ya terkedildi') · TDV İslâm Ansiklopedisi, 'BELGRAD' (şehrin Belgrad Antlaşması ile Osmanlılar'a teslim edilmesi)",
  ic_not:"`belgrad-antlasmasi` ve `nis-antlasmasi` sluglari 302 (ÖLÜ) — yer ve kişi maddeleri okundu (D217). 🔴 KAYNAKLAR ARASI FARK: TDV 'MAHMUD I' Avusturya antlaşmasını 28 Eylül 1739 diye veriyor; genel tarih yazımında yaygın gün 18 Eylül 1739'dur. Kart Avusturya gününü TDV'nin dediği gibi yazdı, ÇEKİRDEK MADDE ise Rusya barışıdır (12 Aralık 1739) ve o gün TDV ile birebir tutuyor. Azak'ın hukukî durumu iki TDV maddesinde farklı vurgulanıyor ('Ruslar'da kalacak fakat tahkim edilmeyecek' / 'istihkâmları yıkılmak şartıyla Rusya'ya terkedildi'); ikisi de kartta verildi." },

// ── 1790 · YERGÖĞÜ MÜTAREKESİ ──────────────────────────────────────────────
{ id:"antlasma6-yergogu-1790", tur:"sebep-sonuc",
  baslik:"Yergöğü Mütarekesi (1790): Avusturya cephesinin kapanışı",
  kisa:"Prusya'nın baskısıyla Avusturya savaştan çekilmeye zorlandı; sadrazamın Yergöğü'ndeki çadırında imzalanan altı maddelik senet, iki cepheli savaşın birini kapattı.",
  sebep:{ b:"Prusya'nın Silezya'ya yürümesi ve Avusturya'yı barışa zorlayan Reichenbach Konvansiyonu", t:"1790-07-27" },
  sonuc:{ b:"Yergöğü'ndeki sadrazam çadırında dokuz ay vadeli mütarekenin imzalanması", t:"1790-09-18" },
  bag:"Önemi: 1787'de Rusya'ya açılan savaşa Avusturya'nın 1788'de katılmasıyla Osmanlı Devleti iki cephede birden savaşıyordu. Yergöğü mütarekesi bu cephelerden birini kapattı ve ordunun Rusya'ya yönelmesinin önünü açtı. Bir de usul bakımından önemlidir: daha sonra Ruslar'la Kalas'ta yapılan mütareke ile kıyaslandığında Yergöğü, barış görüşmelerini herhangi bir ÖN ŞART olmadan başlatan bir antlaşmadır. Ziştovi barışı (1791) bu senedin açtığı yoldan geldi.",
  surec:"İmparator II. Joseph malî zorluklar ve iç isyanlar yüzünden barış istiyordu; kardeşi II. Leopold da aynı görüşteydi. Prusya kralı, Bâbıâli'ye müttefik olarak üstüne düşeni yerine getirdiğini göstermek ve Avusturya'yı toprak takası planını kabule zorlamak üzere haziran başlarında ordusuyla Silezya'ya hareket etti; 18 Haziran'da Bohemya sınırındaki Reichenbach yakınlarında Schönwalde köyünde karargâh kurdu. Avusturya boyun eğmek zorunda kaldı ve 27 Temmuz 1790'da Reichenbach Konvansiyonu imzalandı. III. Selim önce, Rusya üzerine yürüyecek ordunun geçmesi için Avusturya'nın işgal altında tuttuğu Eflak'tan yol açılmasını şart koştu; Prusya temsilcisi Albay Spiridion von Lusi bunun Reichenbach mutabakatında yer almadığını, ancak barıştan sonra mümkün olabileceğini bildirdi. 6 Eylül 1790'da İstanbul'da toplanan meşveret meclisi ön şartlardan vazgeçerek süratle mütareke yapılması kararına vardı. Lusi'nin kaleme aldığı taslak tercüme edilip kısmen düzeltildi, Prens Coburg'a yollandı; metin karşılıklı tashihlerden sonra imzalandı.",
  hukumler:[
    "Mütareke altı maddeydi ve 1791 Haziranına kadar, dokuz ay vadeliydi.",
    "Sınır boylarındaki kuvvetlerin büyük ölçüde geri çekilmesi öngörüldü.",
    "Eflak'ı işgal altında tutan Avusturya burada yalnız asayişi sağlayacak miktarda kuvvet bulunduracak, bu kuvvetler yerlerinde kalacak ve Kule, Yergöğü, İbrâil nahiyelerine girmeyecekti.",
    "Beşinci maddeye göre mütareke, aracı devletler Prusya, İngiltere ve Felemenk'in iştirakiyle barış müzakerelerine başlamak ve görüşme yerine delege gönderilmesine medar olmak üzere akdedilmişti; görüşmelerin dokuz ay içinde neticelendirilmesi gerekiyordu."
  ],
  metin:"Metin, Yergöğü'ndeki sadrazam çadırında 9 Muharrem 1205 Pazar günü (18 Eylül 1790) Prusya temsilcisi Lusi'nin aracılığıyla, Prens Coburg adına imparatorluk saray tercümanı Baron Ignaz von Stürmer ve Sadrazam Şerif Hasan Paşa tarafından imzalandı; mübadele edilip Stürmer eliyle Prens Coburg'a götürüldü. Barış görüşmeleri 23 Aralık 1790'da Ziştovi'de başladı ve yedi ay sürdü; toplam on sekiz genel oturum yapıldı. Tartışmanın düğümü 'status quo' tabirinin ne anlama geldiğiydi: Osmanlı delegeleri bunun savaş öncesi duruma dönüş (status quo ante bellum), yani ele geçirilen kalelerin iadesi demek olduğunda ısrar ederken Avusturya 'status quo strict' esasını istiyordu. Ziştovi Antlaşması 4 Ağustos 1791'de imzalandı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1790-09-18|Yergöğü"],
  kaynak:"TDV İslâm Ansiklopedisi, 'ZİŞTOVİ ANTLAŞMASI' (II. Joseph ve II. Leopold'ün barış isteği; Prusya kralının Silezya hareketi ve 18 Haziran'da Schönwalde karargâhı; 27 Temmuz 1790 Reichenbach Konvansiyonu; III. Selim'in Eflak'tan yol açılması şartı ve Lusi'nin cevabı; 6 Eylül 1790 meşveret meclisi kararı; taslağın hazırlanışı; 'Metin, Yergöğü'ndeki sadrazam çadırında 9 Muharrem 1205 Pazar günü (18 Eylül 1790) … imzalandı'; dokuz ay vadeli altı maddelik mütareke; kuvvetlerin geri çekilmesi ve Kule, Yergöğü, İbrâil nahiyeleri; beşinci maddenin aracı devletler ve dokuz aylık süre hükmü; Kalas mütarekesiyle kıyas; 23 Aralık 1790 Ziştovi görüşmeleri, on sekiz oturum, 'status quo' tartışması; 4 Ağustos 1791 imza)",
  ic_not:"`yergogu-mutarekesi` diye bir TDV maddesi yok; mütareke Ziştovi Antlaşması maddesinin içinde anlatılıyor (D217: olay slug'ı yerine kapsayıcı madde)." },

// ── 1792 · YAŞ TASDİKNÂMELERİNİN MÜBADELESİ ────────────────────────────────
{ id:"antlasma6-yas-tasdik-1792", tur:"sebep-sonuc",
  baslik:"Yaş tasdiknâmelerinin mübadelesi (1792): barışın hukuken kesinleşmesi",
  kisa:"Antlaşma 10 Ocak'ta imzalanmıştı; ama barış, hükümdarların tasdiknâmeleri 10 Şubat'ta el değiştirdiğinde devletler hukuku bakımından kesinlik kazandı.",
  sebep:{ b:"Yaş'ta on beş oturumda yürütülen görüşmelerin barış antlaşmasıyla sonuçlanması (10 Ocak 1792)", t:"1792-01-10" },
  sonuc:{ b:"On yedinci toplantıda tasdiknâmelerin mübadele merasiminin yapılması", t:"1792-02-10" },
  bag:"Önemi: Bir antlaşmanın imzası ile yürürlüğü aynı şey değildir — bu madde tam o farkın maddesidir. Antlaşma 15 Cemâziyelevvel 1206'da (10 Ocak 1792) imzalandı, sadrazam 23 Cemâziyelevvel'de (18 Ocak) onayladı, ama hükümdarların tasdiknâmelerinin beş hafta içinde mübadelesi öngörüldüğü için delegeler yerinde kaldı ve barış ancak 16 Cemâziyelâhir 1206'da (10 Şubat 1792) kesinlik kazandı. 1787-1792 savaşının kapanış tarihi budur.",
  surec:"Ziştovi'deki Osmanlı heyeti, 19 Ağustos 1791'de İstanbul'dan gelen tâlimatla Yaş'taki görüşmeler için de görevlendirilmişti; 31 Ağustos 1791'de Avusturya ile yapılan barışın tasdiknâmelerini mübadele ettikten sonra yola çıktı ve 7 Eylül'de Silistre'de orduya intikal etti. Yaş görüşmeleri 10 Kasım 1791'de başladı ve on beş oturum sürdü. Asıl düğüm Turla (Dinyester) nehrinin sınır kabul edilmesiydi: Rusya bundan vazgeçmiyordu, Prusya'nın ittifak şartlarını yerine getiremeyeceği de anlaşılınca sadrazama barış için izin verildi. Ön barış belgesine (mukaddime-i sulhiyye) göre Turla nehrinin sol kıyısı Rusya'ya, sağ kıyısı Osmanlı Devleti'ne ait olmak üzere yeni sınır kabul edildiğinden Yaş'ta bu konuda değişiklik talebine yer verilmedi.",
  hukumler:[
    "Antlaşma bir mukaddime, on üç madde ve bir hâtimeden oluştu.",
    "Mukaddime-i sulhiyyenin birinci maddesi Küçük Kaynarca Antlaşması'nı onaylıyordu.",
    "İkinci madde Turla (Dinyester) nehrinin sınır kabul edileceğini öngörüyordu.",
    "Üçüncü madde, iade edilecek Memleketeyn'in (Eflak ve Boğdan) daha önceki antlaşmalarla tanınan imtiyazlarını teyit ediyordu.",
    "Dördüncü maddeye göre ikinci madde dışında kalan yerlerde sınırlar savaştan önceki hâline dönecek, istilâya uğramış topraklardaki kaleler barıştan sonra tahliye edilecekti.",
    "On birinci ve on ikinci maddeler senetlerin ve tasdiknâmelerin beş hafta içinde mübadelesini düzenliyordu."
  ],
  metin:"Mübadele merasimi 16 Cemâziyelâhir 1206 (10 Şubat 1792) tarihinde yapılan on yedinci toplantıda icra edildi; böylece barış devletler hukuku açısından da kesinlik kazandı. Sonuç Osmanlı Devleti için ağırdı: Turla'dan sınır kesildi, toprak kaybedildi ve Kırım'ın geri alınması hayali sona erdi. Turla'dan sınır kesilmesinin 'Tuna'yı sınır kabul etmekle aynı' olduğunu söyleyen III. Selim'e, son bir zafer beklentisine rağmen barış kararı almaktan başka seçenek kalmamıştı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1792-02-10|Yaş"],
  kaynak:"TDV İslâm Ansiklopedisi, 'YAŞ ANTLAŞMASI' (19 Ağustos 1791 tâlimatı, 31 Ağustos 1791 Ziştovi tasdiknâme mübadelesi ve 7 Eylül'de Silistre; 10 Kasım 1791'de başlayan on beş oturum; Turla meselesi ve III. Selim'in değerlendirmesi; mukaddime-i sulhiyyenin beş maddesi; antlaşmanın mukaddime + on üç madde + hâtime yapısı; 11. ve 12. maddelerin mübadele hükmü; '16 Cemâziyelâhir 1206 (10 Şubat 1792) tarihinde yapılan on yedinci toplantıda gönderilen tasdiknâmelerin mübadele merasimi icra edildi, böylece barış devletler hukuku açısından da kesinlik kazandı'; 'Yaş Antlaşması ile Turla'dan sınır kesildi ve yine toprak kaybedilerek Kırım'ın geri alınması hayali sona erdi')",
  ic_not:"İmza günü (10 Ocak 1792) ile mübadele günü (10 Şubat 1792) AYRI maddelerdir; bu kart mübadele maddesine bağlıdır ve imza gününü yalnız bağlam olarak anar." },

// ── 1815 · VİYANA KONGRESİ NİHAÎ SENEDİ ────────────────────────────────────
{ id:"antlasma6-viyana-1815", tur:"sebep-sonuc",
  baslik:"Viyana Kongresi Nihaî Senedi (1815): Napolyon sonrası Avrupa'nın haritası",
  kisa:"Bütün ayrı antlaşmaları tek bir belgede toplayan Nihaî Senet, Waterloo'dan birkaç gün önce imzalandı — savaş daha bitmemişken barışın haritası çizilmişti.",
  sebep:{ b:"Napolyon'un hükümranlığının çökmesi ve Avrupa'yı yeniden düzene sokacak kongrenin Viyana'da toplanması", t:"1814-01-01" },
  sonuc:{ b:"Bütün ayrı antlaşmaları bir araya getiren Nihaî Senedin imzalanması", t:"1815-06-09" },
  bag:"Önemi: Viyana Kongresi'yle Avrupa'da muhafazakâr 'restorasyon' dönemi başladı ve Viyana bu dönemin siyasî merkezi hâline geldi. Kongrenin kurduğu düzen, 1848'de Avrupa'nın hemen her tarafına yayılan halk ayaklanmalarına kadar sürdü. Osmanlı Devleti kongrenin tarafı değildi; ama kongrenin kurduğu büyük devletler dengesi ('Avrupa ahengi') XIX. yüzyıl boyunca Osmanlı toprakları üzerindeki her krizin çözüldüğü çerçeve oldu.",
  surec:"Müttefik hükümdarların İngiltere'yi ziyareti ve başka gecikmeler yüzünden kongre 1814 sonbaharına ertelendi; temsilciler o zaman geldi. Başlıca katılımcılar Avusturya, Rusya, Prusya, Büyük Britanya ve Fransa'ydı, fakat bütün Avrupa devletleri temsilci gönderdi. Görüşmelerin en çetin konusu Polonya ve Saksonya meselesiydi.",
  hukumler:[
    "Polonya'nın geri kalanı, kendisine ait bir anayasa vaadiyle Rusya'nın hâkimiyetine ayrı bir krallık olarak katıldı.",
    "Prusya Saksonya'nın ancak beşte ikisini aldı; buna karşılık Ren boylarında geniş topraklar kazandı.",
    "Hollanda'nın Belçika ve Lüksemburg üzerindeki hâkimiyeti teyit edildi; Limburg ve Liège de ona eklendi.",
    "Avusturya Lombardiya ve Venedik'i elinde tuttu; Cenova Sardinya Krallığı'na verildi, Parma meşrû vâris Marie Louise'e bırakıldı.",
    "İsviçre'ye, sonraki federalizmine giden yolu açan bir anayasa verildi."
  ],
  metin:"Nihaî Senet, ayrı ayrı yapılmış bütün antlaşmaları tek bir belgede toplayarak 9 Haziran 1815'te, Waterloo Muharebesi'nden birkaç gün önce imzalandı. Kongrenin kurduğu düzen Avrupa'da 1848'e kadar sürdü; o yılın mart, mayıs ve özellikle ekim aylarında patlayan ayaklanmalar Viyana Kongresi'yle başlayan baskıcı restorasyon dönemini sona erdirdi ve Viyana bu gelişmelerden birinci derecede etkilendi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1815-06-09|Viyana"],
  kaynak:"🔴 BU KARTIN BİRİNCİL KAYNAĞI TDV DEĞİLDİR — TDV İslâm Ansiklopedisi'nde Viyana Kongresi'nin müstakil maddesi yoktur (`viyana-kongresi` slug'ı 302 döner) ve 'VİYANA' maddesi kongreyi yalnız yıl düzeyinde anar. Kullanılanlar: ① TDV İslâm Ansiklopedisi, 'VİYANA' ('Napolyon'un hükümranlığının çökmesinin ardından Viyana'da Avrupa'yı yeniden düzene sokacak büyük kongre toplandı (1814-1815) ve şehir yeni muhafazakâr dönemin (restorasyon) siyasî merkezi haline geldi'; 1848 ayaklanmalarının restorasyon dönemini sona erdirmesi) — yıl ve dönem çerçevesi buradan. ② 1911 Encyclopædia Britannica, 'Vienna, Congress of' (Wikisource neşri, KAMU MALI): 'The Final Act, embodying all the separate treaties, was signed on the 9th of June 1815, a few days before the battle of Waterloo'; kongrenin 1814 sonbaharına ertelenmesi; Polonya, Saksonya, Hollanda, İtalya, İsviçre ve Prusya'nın Ren kazanımlarına dair hükümler — GÜN ve hükümler buradan.",
  ic_not:"Kaynak ② 1911 tarihlidir, güncel literatürle bu turda karşılaştırılmamıştır; emsali `data/ekokuma_antlasma5.js`teki aynı yöntemdir. Osmanlı Devleti kongreye taraf değildi; kartın son cümlesindeki 'Avrupa ahengi' çerçevelemesi bir tarih iddiası değil, okura verilen bağlamdır." },

// ── 1899 · SUDAN KONDOMİNYUMU ──────────────────────────────────────────────
{ id:"antlasma6-sudan-1899", tur:"sebep-sonuc",
  baslik:"Sudan Kondominyumu (1899): kâğıt üstünde ortak, fiilen İngiliz idare",
  kisa:"Antlaşma Sudan'ı İngiltere ile Mısır'ın ortak hâkimiyetine veriyordu; gerçekte yönetim İngilizler'in elinde kaldı, masrafı ise Mısır ödedi.",
  sebep:{ b:"Mehdî hareketinin kurduğu devletin İngiliz-Mısır harekâtıyla yıkılması", t:"1898-01-01" },
  sonuc:{ b:"Sudan'da yönetimin çerçevesini oluşturan antlaşmanın imzalanması", t:"1899-01-19" },
  bag:"Önemi: Mısır 1517'den beri Osmanlı Devleti'ne bağlıydı ve Sudan XIX. yüzyılda Mısır valiliği eliyle yönetiliyordu; 1899 düzenlemesi bu bağı hukuken koparmadan fiilen devre dışı bıraktı. 'Condominium' adı Mısırlılar'ın bölgedeki nüfuzunu göz önünde bulundurmak için seçilmişti; ama 1920'ye kadar ortak yönetim en geniş anlamıyla İngilizler'in elinde kalırken giderler Mısır tarafından finanse edildi.",
  surec:"Muhammed Ahmed el-Mehdî'nin kurduğu devlet, İngiliz-Mısır kuvvetlerinin büyük askerî harekâtına rağmen 1899 yılına kadar ayakta kalmayı başardı. Mısır birlikleri bu isyanlar sebebiyle daha 1883'te bölgenin bir kısmından çekilmişti. Kahire'de İngiltere adına en üst yetkili olarak bulunan Lord Cromer, Sudan'da Mısırlılar'ın nüfuzunu göz önünde bulundurarak 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.",
  hukumler:[
    "Sudan, İngiltere ile Mısır'ın ortak hâkimiyeti (condominium) altındaki bir ülke sayıldı.",
    "Antlaşma yönetimin çerçevesini çizdi ve Sudan'ın kontrolü fiilen İngiltere'nin eline geçti."
  ],
  metin:"Sudan'da İngiliz idaresini gerçek anlamda yerleştiren isim Francis Reginald Wingate oldu; 1899-1916 arasında burada kalarak İngiliz sömürgeciliğini kurdu. Ortak hâkimiyet devrinde Vâdîhalfâ ile Hartum ve Cezîre ile Ubeyyid arasında demiryolu yapıldı, Kızıldeniz sahilinde liman inşa edildi. I. Dünya Savaşı ortak hâkimiyet yönetiminde bazı değişiklikler getirdi; 1945'te yapılan yeni bir antlaşmayla Mısır'ın Sudan üzerindeki hakları yeniden tanındı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1899-01-19|Kondominyum"],
  kaynak:"TDV İslâm Ansiklopedisi, 'SUDAN' ('19 Ocak 1899'da Sudan'da yönetimin çerçevesini oluşturan bir antlaşmanın imzalanmasıyla Sudan'ın kontrolü fiilen İngiltere'nin eline geçmiş oldu'; 'Kahire'de İngiltere adına en üst yetkili olarak bulunan Lord Cromer, Sudan'da Mısırlılar'ın nüfuzunu göz önünde bulundurarak 19 Ocak 1899'da \"condominium\" (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı'; Mehdî devletinin 1899'a kadar ayakta kalması; 1883'te Mısır birliklerinin çekilmesi; Wingate'in 1899-1916 arası; '1920'ye kadar ortak yönetim en geniş anlamıyla İngilizler'in elinde kalırken giderler Mısır tarafından finanse edildi'; demiryolu ve liman; 1945 antlaşması)",
  ic_not:"TDV gövdesinde 'kondominyum' Türkçe imlâsı geçmez, 'condominium' geçer; kart okura Türkçe başlıkla gelir, alıntı kaynak alanında aslıyla durur." },

// ── 1906 · REFAH İTİLÂFNÂMESİ (AKABE MESELESİ) ─────────────────────────────
{ id:"antlasma6-akabe-1906", tur:"sebep-sonuc",
  baslik:"Refah itilâfnâmesi (1906): Akabe meselesini kapatan sekiz madde",
  kisa:"İngiltere on gün içinde Sînâ'nın boşaltılmasını isteyen bir ültimatom verdi; beş ay sonra imzalanan sekiz maddelik itilâfnâme, bugün hâlâ tartışılan Refah-Taba hattını çizdi.",
  sebep:{ b:"II. Abdülhamid'in Akabe'yi ve Sînâ'da Tâbe'yi işgal ettirmesi üzerine İngiltere'nin 3 Mayıs 1906'da ültimatom vermesi", t:"1906-05-03" },
  sonuc:{ b:"Sekiz maddelik itilâfnâme ile yeni sınırın tesbiti", t:"1906-10-01" },
  bag:"Önemi: Bu hat, Osmanlı Devleti ile Mısır arasında çizilmiş bir idarî sınır olarak başladı ve bugünkü Mısır-İsrail sınırının doğrudan atasıdır. İtilâfnâmeyle Akabe meselesi halledildi; ancak bölgedeki Osmanlı-İngiliz rekabeti I. Dünya Savaşı sonlarına kadar devam etti.",
  surec:"Hicaz demiryolunun güneye inmesiyle Sînâ yarımadasının ve özellikle Akabe Kalesi'nin Osmanlılar açısından önemi artmıştı. İngilizler ise Arap yarımadasını Akabe, Küveyt ve San'a üçgeni içinde kontrol altına almak, Süveyş Kanalı'nın emniyetini sağlamak ve Hindistan yolunu ellerinde tutmak istiyorlardı; Mısır'dan sonra 1882'den itibaren bir hareket üssü hâline getirdikleri Akabe'yi de, Mısır muhafız kıtasını kendi kuvvetleriyle destekleyerek elde etmeyi planladılar. II. Abdülhamid yaverlerinden Rüşdü Bey'i bir askerî fırka ile Akabe'ye gönderip orayı işgal ettirdi; Rüşdü Bey Akabe'ye girdikten sonra Sînâ'da Tâbe'yi de aldı. Bunun üzerine daha geniş bir askerî harekâta hazırlanan ve Avrupa tarafından da desteklenen İngiltere 3 Mayıs 1906'da ültimatom vererek on gün içinde Sînâ yarımadasının boşaltılmasını istedi. Mısır'ı kendi mülkiyetinde sayan ve İngiliz işgalini reddeden II. Abdülhamid, kararlı bir politikayla yeni sınırı belirleyecek komisyonun Türkler ve Mısırlılar'dan teşekkül etmesini sağladı.",
  hukumler:[
    "İtilâfnâme sekiz maddeden meydana geldi ve yeni sınırı tesbit etti.",
    "Tâbe Mısır'a bırakıldı.",
    "Akabe Osmanlı Devleti'ne bırakıldı.",
    "Direklerle tesbit edilecek düz hattın Refah'ta son bulması kararlaştırıldı."
  ],
  metin:"İtilâfnâme 1 Ekim 1906'da imzalandı. Sınırın 'direklerle tesbit edilecek düz hat' olarak tarif edilmesi, sonraki yüzyılda bu hattın tek tek direk yerleri üzerinden tartışılmasına yol açacaktı. İtilâfnâmeyle Akabe meselesi halledilmiş, ancak bölgedeki Osmanlı-İngiliz rekabeti I. Dünya Savaşı sonlarına kadar devam etmiştir.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1906-10-01|Refah"],
  kaynak:"TDV İslâm Ansiklopedisi, 'AKABE MESELESİ' (Hicaz demiryolu ve Akabe'nin önemi; İngilizler'in Akabe-Küveyt-San'a üçgeni ve Süveyş hedefi, 1882'den itibaren hareket üssü; Rüşdü Bey'in Akabe'yi ve ardından Tâbe'yi işgali; '3 Mayıs 1906'da verdiği ültimatomla, on gün içinde Sînâ yarımadasının boşaltılmasını istedi'; komisyonun Türk ve Mısırlılar'dan teşekkülü; '1 Ekim 1906'da imzalanan ve sekiz maddeden meydana gelen itilâfnâmeyle yeni sınır tesbit edildi. Buna göre Tâbe Mısır'a, Akabe Osmanlı Devleti'ne bırakıldı ve direklerle tesbit edilecek düz hattın Refah'ta son bulması kararlaştırıldı'; meselenin halli ve rekabetin I. Dünya Savaşı sonlarına kadar sürmesi)",
  ic_not:"TDV maddesi sınırın Mısır-Osmanlı arasında çizildiğini söyler; Mısır o tarihte hukuken Osmanlı'ya bağlı ama fiilen İngiliz işgali altındadır — kart bu ikiliği 'Mısır'ı kendi mülkiyetinde sayan ve İngiliz işgalini reddeden' ifadesiyle kaynağın kendi cümlesinden aktarır." },

// ── 1913 · BÜKREŞ ANTLAŞMASI ───────────────────────────────────────────────
{ id:"antlasma6-bukres-1913", tur:"sebep-sonuc",
  baslik:"Bükreş Antlaşması (1913): müttefiklerin kendi aralarındaki savaşın sonu",
  kisa:"Birinci Balkan Savaşı'nın galipleri ganimeti paylaşamayıp birbirine girdi; Bükreş'te imzalanan barış İkinci Balkan Savaşı'nı bitirdi ve Osmanlı Devleti Edirne'yi bu arada geri aldı.",
  sebep:{ b:"Birinci Balkan Savaşı'nın Londra Antlaşması'yla bitmesi ve galiplerin paylaşım kavgası", t:"1913-05-30" },
  sonuc:{ b:"Bulgaristan'la Sırbistan, Yunanistan ve Karadağ arasında Bükreş Antlaşması", t:"1913-08-10" },
  bag:"Önemi: Osmanlı Devleti bu antlaşmanın tarafı değildir — ve asıl önemi buradadır. Birinci Balkan Savaşı'nın galipleri kendi aralarında savaşınca Osmanlı tarafına, kaybettiği Edirne'yi geri alma fırsatı doğdu; İkinci Balkan Savaşı'nın hesaplaşması Bükreş'te galipler arasında kapandı, Osmanlı Devleti ile ayrı antlaşmalar ise sonraki aylarda imzalandı.",
  surec:"Birinci Balkan Savaşı sonunda 30 Mayıs 1913'te Londra Antlaşması imzalanmıştı; bu düzenlemeyle Edirne, Trakya ve Dedeağaç Bulgaristan'a; Selânik, Güney Makedonya ve Girit Yunanistan'a; Kuzey ve Orta Makedonya Sırbistan'a; Silistre de Romanya'ya bırakıldı. Paylaşım kavgası galipleri birbirine düşürünce Bulgaristan dört devletle birden savaşır hâle geldi. Müttefiklerin Sofya'ya doğru ilerlediği sırada İttihat ve Terakkî yönetimi fırsattan faydalanarak harekete geçti ve Bulgaristan'ın kuvvetsiz bıraktığı Edirne 21 Temmuz'da hiçbir mukavemet görülmeden Bulgarlar'dan geri alındı.",
  hukumler:[
    "Antlaşma 10 Ağustos 1913'te Bulgaristan ile Sırbistan, Yunanistan ve Karadağ arasında imzalandı ve İkinci Balkan Savaşı'nı sona erdirdi."
  ],
  metin:"Osmanlı Devleti Bükreş'te taraf değildi; kendi barışlarını ayrı ayrı yaptı. Osmanlı-Bulgar antlaşması 29 Eylül 1913'te İstanbul'da, Osmanlı-Yunan antlaşması 14 Kasım 1913'te Atina'da imzalandı. Yirmi maddelik İstanbul Antlaşması'na göre Edirne Osmanlı Devleti'nde kaldı. 16 Aralık 1913'te büyük devletler İmroz, Bozcaada ve Meis'i Türkiye'ye bırakan, öteki adaları ise başka ellere veren kararlarını tebliğ etti. Bulgaristan'ın Batı Trakya'yı ve Ege denizi kıyısını Yunanistan'a bırakması ise bu antlaşmayla değil, altı yıl sonra I. Dünya Savaşı'nı bitiren Neuilly Antlaşması'yla (27 Kasım 1919) oldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1913-08-10|Bükreş"],
  kaynak:"TDV İslâm Ansiklopedisi, 'BALKAN SAVAŞI' ('Balkan Savaşı 10 Ağustos 1913'te Bulgaristan'la Sırbistan, Yunanistan ve Karadağ arasında imzalanan Bükreş Antlaşması ile sona erdi'; 30 Mayıs 1913 Londra Antlaşması; 'Edirne, Trakya ve Dedeağaç Bulgaristan'a; Selânik, Güney Makedonya ve Girit Yunanistan'a; Kuzey ve Orta Makedonya Sırbistan'a; Silistre de Romanya'ya bırakıldı'; Edirne'nin 21 Temmuz'da geri alınması; 29 Eylül 1913 İstanbul ve 14 Kasım 1913 Atina antlaşmaları; yirmi maddelik İstanbul Antlaşması; 16 Aralık 1913 ada kararı) · TDV İslâm Ansiklopedisi, 'BULGARİSTAN' (Batı Trakya ve Ege kıyısının Neuilly Antlaşması ile kaybedilmesi)",
  ic_not:"🔴 ÇEKİRDEK MADDE İLE KAYNAK AYRILIYOR: bağlandığı kronoloji maddesinin başlığı 'Batı Trakya ve Kavala havzası Bulgaristan'dan Yunanistan'a geçti' diyor. TDV'nin 'BULGARİSTAN' maddesi Batı Trakya'nın tamamının ve Ege kıyısının 27 Kasım 1919 Neuilly Antlaşması'yla kaybedildiğini söyler; 'BALKAN SAVAŞI' maddesi de Londra düzenlemesinde Trakya'yı ve Dedeağaç'ı Bulgaristan'da gösterir. Kart bu yüzden Batı Trakya iddiasını TEKRARLAMADI, kaynağın dediğini yazdı. Madde başlığının düzeltilmesi bu oturumun kalemi değildir; koordinatöre bildirildi." },

// ── 1919 · SAINT-GERMAIN ANTLAŞMASI ────────────────────────────────────────
{ id:"antlasma6-saintgermain-1919", tur:"sebep-sonuc",
  baslik:"Saint-Germain Antlaşması (1919): imparatorluktan küçük bir cumhuriyete",
  kisa:"Bir imparatorluğun merkezi, kendi büyüklüğünde bir devlet olmaktan çıktı; tamirat borcu ve Almanya ile birleşme yasağı yeni Avusturya'nın iki temel kısıtı oldu.",
  sebep:{ b:"I. Dünya Savaşı'nın Avusturya-Macaristan'ın yenilgisiyle sona ermesi", t:"1918-11-11" },
  sonuc:{ b:"Avusturya'nın müttefiklerle Saint-Germain Barış Antlaşması'nı imzalaması", t:"1919-09-10" },
  bag:"Önemi: Osmanlı Devleti'nin yüzyıllarca en yakın kara rakibi olan Habsburg düzeninin hukuken tasfiyesidir. Aynı savaşın sonunda Osmanlı Devleti Mondros Mütarekesi'ni imzalamıştı (30 Ekim 1918); Saint-Germain, Neuilly ve Trianon'la birlikte yenilen devletlere dayatılan barış düzeninin Osmanlı ayağı Sevr olacak, o düzen ise Türkiye'de kabul edilmeyecekti.",
  surec:"Savaştan sonra 16 Şubat 1919'da yapılan seçimler sonunda bir kurucu meclis oluştu; bu meclisin hazırladığı yeni anayasa 1 Ekim 1920'de yürürlüğe kondu. Avusturya müttefiklerle barış antlaşmasını bu süreç içinde imzaladı.",
  hukumler:[
    "Antlaşma Avusturya'ya bir tamirat (savaş tazminatı) borcu yükledi.",
    "Antlaşma Avusturya'nın Almanya ile ilişkilerini ileri götürmesine imkân vermiyordu."
  ],
  metin:"Tamirat borcunun ülke ekonomisine getirdiği yük, Milletler Cemiyeti kanalıyla dışarıdan alınan ekonomik yardımlarla giderilmeye çalışıldı; ancak bu yardımların 1926'da son bulması ve 1929'daki ekonomik kriz ülkeyi iflâsın eşiğine getirdi. Almanya ile yakınlaşmanın antlaşmayla kapatılmış olması Avusturya'yı İtalya ile ilişkileri geliştirmeye yöneltti ve 1930'da iki devlet arasında bir dostluk antlaşması imzalandı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1919-09-10|Saint-Germain"],
  kaynak:"TDV İslâm Ansiklopedisi, 'AVUSTURYA' ('Savaştan sonra Avusturya müttefiklerle Saint-Germain Barış Antlaşması'nı imzaladı (10 Eylül 1919)'; tamirat borcunun yükü, Milletler Cemiyeti yardımları, 1926 ve 1929; 'Saint-Germain Antlaşması'nın Almanya ile ilişkileri ileri götürmesine imkân vermemesi, Avusturya'yı İtalya ile ilişkileri geliştirmeye yöneltti ve 1930'da iki devlet arasında bir dostluk antlaşması imzalandı'; 16 Şubat 1919 seçimleri ve 1 Ekim 1920 anayasası) · TDV İslâm Ansiklopedisi, 'BİRİNCİ DÜNYA SAVAŞI' (30 Ekim 1918 Mondros Mütarekesi)",
  ic_not:"TDV'nin 'AVUSTURYA' maddesi antlaşmanın toprak hükümlerini madde madde vermiyor; kart bu yüzden toprak listesi YAZMADI — hüküm listesi bilerek kısadır. Ardıl devletlerin sınırları için ayrı kaynak gerekir; bu turda okunmadı." },

// ── 1919 · NEUILLY ANTLAŞMASI ──────────────────────────────────────────────
{ id:"antlasma6-neuilly-1919", tur:"sebep-sonuc",
  baslik:"Neuilly Antlaşması (1919): Bulgaristan'ın Ege'ye çıkışının kapanması",
  kisa:"Balkan Savaşı'nda kazandığı Batı Trakya'yı ve Ege kıyısını kaybeden Bulgaristan, denize açılan kapısını kapattı — bu kayıp, ülkenin sonraki yirmi yıllık dış siyasetini belirledi.",
  sebep:{ b:"Bulgaristan'ın I. Dünya Savaşı'na İttifak devletleri yanında girmesi ve yenilgiyle mütareke imzalayarak savaştan çekilmesi", t:"1918-09-29" },
  sonuc:{ b:"Savaşı sona erdiren Neuilly Antlaşması'nın imzalanması", t:"1919-11-27" },
  bag:"Önemi: Bulgaristan'ın Ege denizine çıkışını kapatan antlaşmadır. Balkan savaşlarında Osmanlı Devleti'nden alınan Batı Trakya ve Dedeağaç hattı bu antlaşmayla Yunanistan'a geçti; Bulgaristan'ın 'denize çıkış' meselesi II. Dünya Savaşı'na kadar Balkan siyasetinin kalıcı konularından biri olarak kaldı.",
  surec:"Bulgaristan 5 Ekim 1908'de bağımsızlığını ilân ettikten sonra 'çar' unvanıyla kral olan Prens Ferdinand'ın yönetiminde Osmanlı Devleti aleyhine bir Balkan ittifakı oluşturulmasında önemli rol oynamış, Balkan savaşlarından sonra I. Dünya Savaşı'na İttifak devletleri yanında girmişti. Cephenin çökmesi üzerine Bulgaristan İtilâf Devletleri'yle mütareke imzalayarak savaştan çekildi; bu, Türkiye ile Almanya arasındaki ulaşımın kesilmesi anlamına geldiği için Osmanlı hükümetini de mütareke istemek zorunda bıraktı ve 30 Ekim 1918'de Mondros Mütarekesi yapıldı.",
  hukumler:[
    "Bulgaristan Sırplar lehine belirli bir stratejik toprak kaybına uğradı.",
    "Batı Trakya'nın tamamını kaybetti.",
    "Ege denizi kıyısını Yunanistan'a bırakmak durumunda kaldı.",
    "Güney Dobruca'yı Romanya'ya veren Bükreş Barış Antlaşması hükümlerini de onayladı."
  ],
  metin:"Antlaşmanın Bulgaristan'daki müslüman azınlık bakımından bir devamı vardır: ülkedeki dinî hayat ve vakıflar üç belgeyle tesbit edilmiştir — 1909 tarihli İstanbul protokolü, onu tâdil edip yenilikler getiren 1913 tarihli protokol ve 1919'da kabul edilen Bulgaristan Müslümanları Müessesât-ı Dîniyye İdare ve Teşkilâtı Nizamnâmesi. Yani savaşın kapanış yılı, sınırların yanında cemaat hukukunun da yeniden yazıldığı yıldır.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1919-11-27|Neuilly"],
  kaynak:"TDV İslâm Ansiklopedisi, 'BULGARİSTAN' ('Savaşı sona erdiren Neully Antlaşması'yla (27 Kasım 1919) Bulgaristan Sırplar lehine belirli bir stratejik toprak kaybına uğramış, Batı Trakya'nın tamamını kaybetmiş, Ege denizi kıyısını Yunanistan'a bırakmak durumunda kalmış ve Güney Dobruca'yı Romanya'ya veren Bükreş Barış Antlaşması hükümlerini de onaylamıştır'; 5 Ekim 1908 bağımsızlık ilânı ve Ferdinand'ın Balkan ittifakındaki rolü; 1909 İstanbul protokolü, 1913 protokolü ve 1919 nizamnâmesi) · TDV İslâm Ansiklopedisi, 'BİRİNCİ DÜNYA SAVAŞI' (Bulgaristan'ın mütareke imzalayarak çekilmesi ve bunun Osmanlı hükümetini mütarekeye zorlaması; 30 Ekim 1918 Mondros)",
  ic_not:"🔴 TDV ARAMA TUZAĞI (D211): TDV 'BULGARİSTAN' maddesi antlaşmanın adını 'Neully' diye yazıyor; sitede 'Neuilly' araması bu maddede SONUÇ VERMEZ ve `neuilly` slug'ı 302'dir (ölü). Kart okura doğru imlâ ile gelir, alıntı kaynak alanında TDV'nin yazdığı gibi durur. Mütarekenin günü (29 Eylül 1918) TDV'nin bu iki maddesinde geçmez; `sebep.t` alanına yazılan gün genel kabul gören tarihtir ve TDV ile DOĞRULANMADI — kartın metninde gün olarak iddia edilmedi." },

// ── 1920 · TRIANON ANTLAŞMASI ──────────────────────────────────────────────
{ id:"antlasma6-trianon-1920", tur:"sebep-sonuc",
  baslik:"Trianon Antlaşması (1920): Macaristan'ın toprak ve insan kaybı",
  kisa:"Bin yıllık Macar krallığının sınırları bir günde yeniden çizildi; sonraki on sekiz yıl, antlaşmayı gözden geçirtme çabasıyla geçti.",
  sebep:{ b:"Avusturya-Macaristan'ın I. Dünya Savaşı'ndaki yenilgisi ve savaş sonrası iç karışıklıklar", t:"1918-11-11" },
  sonuc:{ b:"Trianon Antlaşması'nın imzalanması", t:"1920-06-04" },
  bag:"Önemi: Osmanlı Devleti'nin XVI-XVII. yüzyıllarda üzerinde eyaletler kurduğu (Budin, Tımışvar) Macar toprağının çağdaş sınırlarını çizen antlaşmadır. Macaristan bu antlaşmayla toprak ve insan kaybına uğradı; 1920-1938 arasında bir yandan istikrarı sağlama, öte yandan Trianon Antlaşması'nın yeniden gözden geçirilme çabaları sürdürüldü.",
  surec:"Savaşın ardından ülke iç çatışmaya sürüklendi. Miklós Horthy'nin yanında toplanan ve bazı yerlerde komünistlerden intikam alan güçler İtilâf devletleri onayıyla 16 Kasım 1919'da Budapeşte'ye girebildi. 1 Mart 1920'de Horthy kral nâibliğine getirildi; antlaşma üç ay sonra imzalandı.",
  hukumler:[
    "Antlaşma gereğince Macaristan toprak ve insan kaybına uğradı."
  ],
  metin:"Osmanlı dönemi Macaristan tarihinde derin bir iz bırakmıştı: 1552'de Tımışvar'ın ele geçirilmesiyle Macar topraklarında ikinci bir Osmanlı eyaleti kurulmuş, toprakların beşte ikisinde yabancı bir sistemin uygulanması daha önceki tabii gelişmeleri aksatmıştı. Trianon, o uzun tarihin bıraktığı çok kavimli krallığı bugünkü ölçülerine indiren belgedir. 1920-1938 arasında Macaristan'ın dış siyaseti büyük ölçüde antlaşmanın gözden geçirilmesi talebi etrafında şekillendi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1920-06-04|Trianon"],
  kaynak:"TDV İslâm Ansiklopedisi, 'MACARİSTAN' ('4 Haziran günü imzalanan Trianon Antlaşması gereğince Macaristan toprak ve insan kaybına uğradı'; '1920-1938 yılları arasında bir yandan istikrarı sağlama, öte yandan Trianon Antlaşması'nın yeniden gözden geçirilme çabaları sürdürüldü'; Horthy'nin 16 Kasım 1919'da Budapeşte'ye girişi ve 1 Mart 1920'de kral nâibliğine getirilmesi; 1552'de Tımışvar'ın alınması ve ikinci eyaletin kurulması; 'toprakların beşte ikisinde yabancı bir sistemin uygulanması daha önceki tabii gelişmeleri aksattı')",
  ic_not:"TDV maddesi kaybın miktarını (yüzde, nüfus, hangi bölgeler) VERMİYOR; kart da vermedi — rakam uydurulmadı. Ardıl devletlere geçen bölgelerin listesi için ayrı kaynak gerekir, bu turda okunmadı." }

];
