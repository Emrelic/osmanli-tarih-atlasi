// kuyrukdogrula2: dogrulanmis kayitlar (B: Seylan, Maldivler, Guneydogu Asya, kuyruk-only).
const { S, CHI3, GTHANA, IND47 } = require('./_veri_a.js');
const TENN = "J. E. Tennent, Ceylon: An Account of the Island, vol. II, London 1859, Part VI «Modern History» ve Part X «The Ruined Cities» (archive.org in.ernet.dli.2015.47867)";
const TDVSEY = "TDV İslâm Ansiklopedisi, «Seylan» (https://islamansiklopedisi.org.tr/seylan)";
const TDVMAL = "TDV İslâm Ansiklopedisi, «Maldivler» (https://islamansiklopedisi.org.tr/maldivler)";
const PRESMV = "Office of the President of the Maldives, «President Al Ameer Ibrahim Nasir», https://presidency.gov.mv/PO/FormerPresident/6";
const HALL = "D. G. E. Hall, A History of South-East Asia, 4th ed., London 1981 (archive.org a-history-of-south-east-asia-4th-ed)";
const HARVEY = "G. E. Harvey, History of Burma, London 1925 (archive.org historyofburmafr00harv)";

const B = [
 { ad: "Polonnaruwa", kume: "hint2", s_ek: [
  S("1281-01-01", "1288-01-01", "seylan-sinhala", "yil",
    CHI3 + ", ch. XXII «Ceylon A.D. 1215-1527»: “until Parakkama-Bahu III, a son of Vijaya-Bahu IV, assumed sovereignty at Polonnaruva” ; “He seems to have reigned for about seven years (A.D. 1281-88) before Bhuvaneka-Bahu II, son of Bhuvaneka-Bahu I, deposed him and reigned for two years at Kurunigala” [OCR: Kurunigala] | BEYANLI YAKLAŞIKLIK: yıl hassasiyeti; kaynak III. Parakramabâhu'nun egemenliğini Polonnaruva'da verir",
    "CHI III: Parakkama-Bahu III Polonnaruva'da 1281-88; hâkimiyeti Pihiti-rata (kuzey) ile sınırlı olabilir.", true),
 ], bit: "1288-01-01",
   bit_kaynak: CHI3 + ": Bhuvaneka-Bahu II Parakkama-Bahu III'ü devirip Diş emanetini “from Polonnaruva to” Kurunegala'ya götürdü (“the latter ... deposed the former, and brought the Tooth-relic from Polonnaruva to Kuruniigala” [OCR]) ; " + TENN + ", Part X: Polonnaruva (bugün «Topare») için “compelled the native sovereigns to retire finally from their northern dominions, and forced them in the fourteenth century to found new capitals in the mountains of Rohuna” [OCR: Eohuna] ; ayrıca Portekizli yazarlarca bilinmeyen orman harabesi (“The remains of Topare appear to have been unknown to the Portuguese writers on Ceylon”)",
   bit_not: "BEYANLI: bit yılı BAŞKENT İŞLEVİNİN bittiği yıldır (CHI III 1281-88); Tennent kuzey topraklarının 14. yy'da 'kesin' terk edildiğini yazar, kesin yıl yok. Yerleşim harabe/orman köyü olarak sürdü; bu kayıt kentsel hayatın sonunu işaretler." },

 { ad: "Dambadeniya", kume: "hint3", s_ek: [
  S("1281-01-01", "1518-01-01", "seylan-sinhala", "yil",
    CHI3 + ", ch. XXII: “Bhuvaneka-Bahu I of Yapavu on the throne of Dambadeniya. He ruled for about eleven years (A.D. 1268-79)” ; devamı: başkent Kurunegala (Parakkama-Bahu IV c.1291-1326), Gampola (Bhuvaneka-Bahu IV 1346-52), Kotte (Bhuvaneka-Bahu V 1374-90 ...) | BEYANLI YAKLAŞIKLIK: Dambadeniya 1279'dan sonra başkent değil; çevresindeki Sinhala krallıklarının (Kurunegala-Gampola-Kotte) iç bölgesinde kaldığı varsayıldı, yerleşim adıyla 1281-1518 arası tanık açılmadı",
    "Atlas seylan-sinhala künyesi t=1518.", true),
  S("1518-01-01", "1815-03-02", "__BOSLUK__", "yil",
    "BOŞLUK BEYANI: arandı, bulunamadı: Dambadeniya (Yedi Korale) bölgesinin 1518-1815 arası sahibi (Kotte, Sitavaka, Portekiz Seylanı, Kandy ve Hollanda Seylanı arasında el değiştirdi). Açılan kaynaklar: " + CHI3 + " (yalnız 1527'ye kadar); " + TENN + ": 1803-04 harekâtı için “the operations of Dambedenia, in the Seven Cories” ve “not one British soldier was left within the dominions of Kandy” (Dambadeniya'nın 1803'te Kandy ülkesi içinde olduğunu gösterir ama başlangıç yılını vermez). Dambadeniya adıyla 1518-1803 arası sahip tanığı bulunamadı",
    "Kandy 1815-03-02'ye kadar hâkim olduğu için uç kaynaklı; ortası beyanlı boşluk."),
  S("1815-03-02", "1948-02-04", "ingiliz-seylan", "gun",
    TENN + ": “on the 2nd March, 1815, a solemn convention of the chiefs assembled in the audience hall of the palace of Kandy, at which a treaty was concluded formally deposing the king and vesting his dominions in the British Crown” | BEYANLI YAKLAŞIKLIK: Dambadeniya'nın Kandy ülkesi içinde olduğu 1803 harekâtı anlatısından çıkarıldı (Tennent)",
    "1815 Kandy Sözleşmesi."),
  S("1948-02-04", "2000-12-31", "sri-lanka", "gun",
    TDVSEY + ": “4 Şubat 1948 tarihinde Seylan (Ceylon) adıyla İngiliz Milletler Topluluğu çerçevesinde bağımsızlık verildi.” | t=2000-12-31 yalnız ufuk işareti",
    "Ceylon Independence Act 1947 'appointed day'i Order in Council ile belirler (legislation.gov.uk Geo6/11-12/7 s.5); gün TDV'den."),
 ]},

 { ad: "Yapahuwa", kume: "hint3", s_ek: [], kuyruk_gerekli: "1284-01-01 → 2000-12-31",
   kuyruk_neden: "Terk (bit) kararı doğrulanamadı: " + CHI3 + " Aryachakravarti'nin Diş emanetini “carrying away from Yapavu” aldığını ve Bhuvaneka-Bahu I'in Yapavu kökenli olduğunu yazar (olay yaklaşık 1280-81: ardından 'yaklaşık bir yıl karışıklık' ve 1281'de Parakkama-Bahu III); kalenin terk edildiği ve bir daha yerleşilmediği açılan kaynakta yazmıyor. Atlas mevcut zinciri t=1284'te biter (CHI III tarihi ~1280-81). 1284 sonrası Yapahuwa için sahip kaynaklı çıkarılamadı." },

 { ad: "Malé", kume: "hint3", s_ek: [
  S("1968-11-11", "2000-12-31", "maldivler-cumhuriyeti", "gun",
    TDVMAL + ": “1968 yılında yapılan referandumla cumhuriyet yeniden ilân edildi ve İbrâhim Nâsır cumhurbaşkanı oldu.” ; " + PRESMV + ": “Ibrahim Nasir was sworn in as the first president of republic of the Maldives on 11 November 1968.” (“President from 11 November 1968 to 10 November 1978”) | t=2000-12-31 yalnız ufuk işareti",
    "TDV yalnız yıl (1968) verir; gün Cumhurbaşkanlığı Ofisi resmî sayfasından (yemin günü); referandum günü (15 Mart 1968) açılan akademik kaynakta okunmadı."),
 ]},

 { ad: "Phayao", kume: "gdasya3", s_ek: [
  S("1281-01-01", "1338-01-01", "phayao", "yil",
    HALL + ", ch. 7: “the small independent T’ai state of P’ayao came into existence as early as 1096” ; “In 1287 Mangrai, Rama Khamheng and Ngam Muong, the Chief of P’ayao, met together and concluded a firm pact of friendship.” | BEYANLI YAKLAŞIKLIK: bitiş yılı 1338 (Lan Na'ya katılış) Hall'da yok; atlas phayao künyesi t=1338 (Wyatt'a dayandığı söylenen ham kayıt) — Wyatt, Thailand: A Short History archive.org'da kilitli, açılamadı",
    "Phayao'nun Lan Na'ya katılış yılı açılan kaynakta doğrulanamadı; Hall yalnız 1411'de 'once an independent T’ai state' der.", true),
  S("1338-01-01", "1558-04-02", "lan-na", "yuzyil",
    HALL + ": Siyam kuvveti 1411'de “attacked the city of P’ayao, once an independent T’ai state, away to the north-west” (Chiengmai veraset savaşı sırasında) ; " + HARVEY + ": “In three campaigns, 1556-9, he reduced the Shan states ... and some which are now in Siam—Chiengmai and Linzin (Viengchang).” | BEYANLI YAKLAŞIKLIK: başlangıç 1338 doğrulanamadı (kesinlik yüzyıl düşürüldü): Hall'a göre Phayao 1411'de artık bağımsız değildir; Chiengmai krallığı içinde sayıldı",
    "Gün 2 Nisan 1558: açılan akademik kaynaklarda yok (yalnız ikincil web: Chiang Mai Chronicle'a atıfla); Harvey: Chiengmai 1557 seferi ve 1558 (Hmannan II.339), Hall: 1558. Gün lan-na künyesi t=1558-04-02'den alındı (gün komşudan, künyenin kendi kaynağı açılmadı)."),
  S("1558-04-02", "1727-01-01", "toungoo", "gun",
    HALL + ", 1662-64 Siyam işgali ve isyanı: “a Burmese prince was again installed as a vassal of Ava. It was to remain under Burmese control until 1727.” ; " + HARVEY + ": Bayinnaung 'Chiengmai paid elephants, horses, lacquer and silks' | BEYANLI YAKLAŞIKLIK: kaynaklar Chiengmai krallığını anar, Phayao'yu adıyla anmaz; Siyam 1662-64 işgali (Hall) kısa süreli, ayrı dilim yapılmadı",
    "Toungoo künyesi t=1752; 1727'de Chiengmai Birmanya'dan koptu (Hall)."),
  S("1727-01-01", "1764-01-01", "__BOSLUK__", "yil",
    "BOŞLUK BEYANI: arandı, bulunamadı: Phayao'nun 1727-1764 arası sahibi. " + HALL + ": Chiengmai “ten years earlier had rebelled against Burma” ve 1728'de Birmanya ordusunu yendi (bağımsız Chiengmai); atlasta 1727-1764 Chiengmai/Lan Na kimliği yok (lan-na künyesi t=1558); Phayao'nun yerel statüsü açılan kaynakta yok",
    "Uçlar kaynaklı (Hall 1727 ve 1764); ortası beyanlı boşluk."),
  S("1764-01-01", "1775-01-01", "konbaung", "yil",
    HALL + ": “Hence in 1764 the war began with campaigns which resulted in the conquest of Chiengmai and Vien Chang (Vientiane).” ; " + HARVEY + ": “An expedition reduced Chiengmai to submission” (Hsinbyushin dönemi, 1762-65 arası) | BEYANLI YAKLAŞIKLIK: Phayao adıyla anılmıyor; Chiengmai krallığı üzerinden",
    "Hall 1764; Harvey ifadesi yıl vermez."),
  S("1775-01-01", "1782-04-06", "tonburi", "ay",
    HALL + ": “In January 1775 he took the city and immediately hurried south to undertake the defence of the homeland.” | BEYANLI YAKLAŞIKLIK: Phayao adıyla anılmıyor; Lan Na Siyam vassalı olarak sayıldı; ayın ilk günü seçildi",
    "Hall'a göre Chiengmai'yi alan P'ya Taksin Ocak 1775'te; atlasta tonburi f=1767-12-28."),
  S("1782-04-06", "2000-12-31", "siyam-chakri", "yil",
    HALL + ": “Chakri was at once hailed with joy by the populace ... Chakri was elevated to the throne with the title of Rama T’ibodi. King Rama I (1782-1809) was the founder of the present reigning dynasty at Bangkok.” | BEYANLI YAKLAŞIKLIK: gün (6 Nisan) açılan akademik kaynakta yok, Hall 'April 1782' der; gün tonburi künyesi t=1782-04-06'dan alındı (gün komşudan); Phayao'nun 1782-2000 arası Siyam/Tayland egemenliği Lan Na prensliği üzerinden yazıldı",
    "t=2000-12-31 ufuk işareti."),
 ]},

 { ad: "Daha (Kediri)", kume: "gdasya3", s_ek: [
  S("1281-01-01", "1292-01-01", "singhasari", "yil",
    HALL + ", ch. 4: “Kediri was the obvious centre for such a movement, since its ruling family had never forgotten its humiliation at the hands of Ken Angrok. Jayakatwang, the Prince of Kediri, became the leader of a formidable rebellion” | BEYANLI YAKLAŞIKLIK: Hall Kediri'yi Singosari'nin bir vassal beyliği gibi anlatır; 1281-1292 için Daha'yı adıyla Singhasari'ye bağlayan ayrı tarihli tanık yok",
    "Singhasari künyesi t=1292-01-01.", true),
  S("1292-01-01", "1293-01-01", "kediri", "yil",
    HALL + ": “he made a surprise attack on the capital from the west, captured it, and put to death Kertanagara” ; “the king whose power it had come to break had disappeared from the scene and his throne was occupied by Jayakatwang of Kediri” (Moğol donanması 1293) ; hükümdar listesi: “6. Jayakatwang of Kediri, usurper ... 1292” | KÜNYE ÖNERİSİ: atlas kediri künyesi t=1222-01-01; Jayakatwang Kediri'si 1292-1293 için künye t=1293-01-01'e GENİŞLETİLMELİ",
    "Gün yok; Damais'e göre Kertanagara'nın Sadeng kitâbesi 17 Nisan 1292 (Hall), cinayet 'birkaç ay sonra' — yıl hassasiyeti."),
  S("1293-01-01", "1527-01-01", "majapahit", "yil",
    HALL + ", «(b) Majapahit, 1293-c. 1520»: “The elimination of Jayakatwang gave Prince Vijaya the opportunity” ; Suhita (1429-47) döneminde “a rebellion occurred under a leader named Bhre Daha” ; “Krom’s last king is Pateudra, who was in occupation of the throne in 1516” | BEYANLI YAKLAŞIKLIK: Hall Majapahit'in sonunu 'c. 1520' ve 'karanlıkta' yazar; atlas künyesi t=1527; Daha'nın bu devirde 'Bhre Daha' unvanlı Majapahit apanajı olduğu Hall'da dolaylı",
    "Majapahit f: Hall 1293 (hükümdar listesi); atlas f=1293-01-01."),
 ], kuyruk_gerekli: "1527-01-01 → 2000-12-31",
   kuyruk_neden: "1527 sonrası Daha/Kediri için kaynaklı zincir kurulamadı: Hall (1981) yalnız Demak'ın Java'nın önde gelen devleti olduğunu, Mataram Senapati'nin Kediri naipliği meselesine (Surabaya ile çekişme, 1601 öncesi) ve 1670'lerde Trunojoyo'nun Kediri'ye yerleşmesini anar; Demak/Pajang/Mataram/VOC devir yılları yer-adlı ve günlü bulunamadı; atlasta Pajang kimliği yok." },

 { ad: "Baijnath (Kartikeyapura)", kume: "hint2", s_ek: [], kuyruk_gerekli: "1000-01-01 → 2000-12-31",
   kuyruk_neden: "Bu doğrulama turunda yeni kaynak açılıp sınanmadı; önceki ham kayıt (Katyuri sonrası Kumaon: Chand, Gorkha 1790, İngiliz 1815) kaynaksızdı ve geri çekildi: zincir yazılmadı." },
 { ad: "Mansura (Sind)", kume: "hint2", s_ek: [], kuyruk_gerekli: "1010-01-01 → 2000-12-31",
   kuyruk_neden: "Bu turda TDV «Mansûre» maddesi açıldı: madde yalnız 'Sind’de Müslümanlarca kurulan bölge merkezi' diye yönlendirir ve Sind maddesine gönderir; kentin terk/yıkım yılı ve Sûmra/Habbârî sonrası sahip kaynaklı bulunamadı (Sind maddesinin tam metni çekilemedi: zaman aşımı)." },
 { ad: "Ranthambore", kume: "hint3", s_ek: [], kuyruk_gerekli: "1301-07-11 → 2000-12-31",
   kuyruk_neden: "Bu turda CHI III/IV tarandı: Ranthambhor 1226'da İltutmiş'çe geri alındı, ‘Ala-ud-din'in Ranthambhor'u aldığı olay CHI III içindekiler tablosundadır (1301 yılı atlas dayanaklı, gün okunmadı); sonrası: Rana Sanga'nın Malva'dan aldığı kaleler arasında Ranthambhor (CHI IV), Şir Şah'ın 1542 dolayında kale komutanını ikna edip alışı, Akbar'ın alışı (CHI IV içindekiler: «Capture of Ranthambhor and Kalinjar», 1569 yılı atlas dayanaklı) — fakat 1301-1569 arasındaki Delhi/Mewar/Malva/Gucerat devir günleri ve yılları kaynaklı zincire dökülemedi." },
 { ad: "Kamatapur", kume: "hint3", s_ek: [], kuyruk_gerekli: "1498-01-01 → 2000-12-31",
   kuyruk_neden: "Bu turda yeni kaynak açılıp sınanmadı: Bengal 1498 Kamata fethi sonrası Koch hâkimiyetine geçiş (Gait 1906 Kamata/Koch bölümleri) için zincir yazılmadı; Koch Krallığı kimliği atlasta yok." },
 { ad: "Pattikera (Mainamati)", kume: "hint3", s_ek: [], kuyruk_gerekli: "1281-01-01 → 2000-12-31",
   kuyruk_neden: "Bu turda yeni kaynak açılıp sınanmadı; Deva hanedanı sonrası Tripura/Bengal paylaşımı için zincir yazılmadı; Tripura kimliği atlasta yok." },
 { ad: "Prambanan (Mataram Kuno)", kume: "gdasya2", s_ek: [], kuyruk_gerekli: "1016-01-01 → 2000-12-31",
   kuyruk_neden: "Bu turda yeni kaynak açılıp sınanmadı; Hall (1981) Java bölümü 1016 sonrası Orta Java için sahip vermiyor (Majapahit/Demak/Mataram yalnız genel); yerleşimin o devirde var olup olmadığı sorusu açık." },
 { ad: "Gaochang (Koço, Karahoca)", kume: "bozkir1", s_ek: [], kuyruk_gerekli: "0640-09-19 → 2000-12-31",
   kuyruk_neden: "Bu turda yeni kaynak açılıp sınanmadı; Tang idaresi, Tibet, Uygur/Koço, Moğol ve kentin terki için zincir yazılmadı." },
];
module.exports = { B };
