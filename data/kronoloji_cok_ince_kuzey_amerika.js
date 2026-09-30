// =====================================================================
// İNCE KÜNYE — KUZEY AMERİKA (INCE-KUZEY-AMERIKA, 30 Eylül 2026)
// Şartname: oturumlar/INCE-KUNYE-ORTAK.md · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e BAĞLANMADI — bağlamak koordinatörün işi.
// Bağlayıcı: app.js cokTarafliKronolojiEkle — her madde `taraflar[]`daki
// HER künyeye EKLENİR (ezmez).
//
// KAYNAK: TDV bu halklar için birincil OLAMAZ (inuit/dene/kri/sosoni slug'ları
// 302 — koordinatör ölçümü). Her madde kurumsal/akademik kaynağı ADIYLA taşır;
// alıntılar yalnız bu oturumda AÇILAN sayfalardan alındı:
//   Dictionary of Canadian Biography (Univ. of Toronto / Univ. Laval) — biographi.ca
//   The Canadian Encyclopedia (Historica Canada)
//   Journals of the Lewis and Clark Expedition (Univ. of Nebraska–Lincoln, ed. G. Moulton)
//   U.S. National Park Service (Civil War battle unit kayıtları, Bear Hunter)
//   New Georgia Encyclopedia (Georgia Humanities / Univ. of Georgia Press)
//   Tennessee Encyclopedia (Tennessee Historical Society)
// Wikipedia KULLANILMADI.
//
// TARİH: halk sahası ≠ devlet — kuruluş/yıkılış günü YAZILMADI. Künyelerin
// f:"1281-01-01"i "araştırılmamış" işaretidir, maddeye taşınmadı.
// Gün yalnız kaynak GÜN yazdıysa yazıldı; yoksa t:"YYYY-01-01" + gun + ic_not_t.
// Künye içindeki kronoloji maddeleri TEKRARLANMADI (devletler.js'ten okundu).
// =====================================================================

window.KRONOLOJI_COK_INCE_KUZEY_AMERIKA = [

// ── İNUİT (23.586 yerleşim-yıl · künye içi 4: 1281 · 1721 · 1867 · 1880) ──
{ t:"1576-01-01", k:"temas", b:"Frobisher'in seferi Baffin kıyısında İnuit ile karşılaştı — ilk kayıtlı İngiliz-İnuit teması",
  gun:"Ağustos 1576 sonu (kaynak gün vermez)",
  ic_not_t:"DCB: kıyı 28 Temmuz 1576'da görüldü; İnuit ile ticaret 'late August'. Gün yok → yıl.",
  yer:"Frobisher Körfezi (Baffin Adası)", yer_kon:[63.75,-68.5], kisiler:"Martin Frobisher",
  d:"Kuzeybatı Geçidi'ni arayan Martin Frobisher, Baffin Adası'nın güneydoğusundaki körfeze girdi ve kayıklarla gelen İnuit ile et ve kürk karşılığında ticaret yaptı. Karaya çıkan beş tayfadan bir daha haber alınamadı. Frobisher de dönüşte kayığıyla gemiye yanaşan bir İnuk'u yakalayıp İngiltere'ye götürdü; adam Londra'da kısa sürede öldü. Bu olay, İnuit ile Avrupalıların doğrudan ve kayıtlı ilk karşılaşmalarından biridir.",
  kaynak:"Dictionary of Canadian Biography, 'FROBISHER, Sir MARTIN' (vol. 1): \"In late August, natives came to the ship to trade meat and furs\"; beş adamın kaybı; yakalanan İnuk'un Londra'da ölümü",
  taraflar:["inuit","ingiltere"], etiket:["konu-kesif","konu-diplomasi"] },

{ t:"1771-01-01", k:"din", b:"Moravya misyonerleri Labrador'da Nain'i kurdu",
  gun:"1771 (kaynak yıl verir)",
  ic_not_t:"The Canadian Encyclopedia 'Nain' yalnız yılı verir.",
  yer:"Nain (Labrador)", yer_kon:[56.54,-61.69],
  d:"Moravya Kilisesi misyonerleri Labrador kıyısında ilk kalıcı misyon istasyonları olarak Nain'i kurdu. Misyon, mevsimlik göç yollarını izleyen avcı ve balıkçıların uğradığı kalıcı bir ticaret merkezine dönüştü. Labrador İnuit'inin Hristiyanlaşmasının ve Avrupa ticaretine bağlanmasının başlangıç noktalarından biridir.",
  kaynak:"The Canadian Encyclopedia (Historica Canada), 'Nain': \"chosen by the MORAVIANS in 1771 as their first mission\"",
  taraflar:["inuit"], etiket:["konu-din","konu-ekonomi"] },

{ t:"1771-07-17", k:"catisma", b:"Bloody Falls katliamı — Hearne'ün Dene kılavuzları Coppermine ağzında İnuit'e saldırdı",
  gun:"17 Temmuz 1771 (DCB)",
  yer:"Bloody Falls (Coppermine Irmağı)", yer_kon:[67.745,-115.37], kisiler:"Samuel Hearne, Matonabbee",
  d:"Hudson's Bay Company adına Coppermine Irmağı'na ulaşan Samuel Hearne'e Matonabbee önderliğinde Chipewyan (Dene) kılavuzlar eşlik ediyordu. Irmağın denize yakın bir çağlayanında kamp kurmuş bir İnuit topluluğu, Dene savaşçılarının baskınında katledildi. Hearne olaya seyirci kaldığını yazar. Olay, Dene ile İnuit arasındaki eski düşmanlığın belgelenmiş en ağır örneğidir.",
  kaynak:"Dictionary of Canadian Biography, 'HEARNE, SAMUEL' (vol. 4): Coppermine'e varış \"14 July 1771\", katliam \"17 July 1771\"; Hearne'ün \"stood neuter in the rear\" sözü",
  taraflar:["inuit","dene"], etiket:["konu-askeri","konu-kesif"] },

// ── DENE (8.040) · KRİ (2.383) ──
{ t:"1870-07-15", k:"idari", b:"Rupert's Land ve Kuzeybatı Toprakları Kanada'ya devredildi",
  gun:"15 Temmuz 1870 (The Canadian Encyclopedia)",
  yer:"Rupert's Land", odak_kimlik:["kri","dene"],
  d:"Hudson's Bay Company, 19 Kasım 1869'da imzaladığı devir senediyle bölgedeki haklarını İngiliz tacına bıraktı; taç da toprakları Kanada'ya verdi. Kızıl Irmak direnişi yüzünden gecikmeli olarak 15 Temmuz 1870'te yürürlüğe giren devirle Kri ve Dene yurtlarının büyük kısmı, halklara danışılmadan Kanada'nın idaresine geçti. Sonraki Numaralı Antlaşmalar (1871-1921) bu devrin sonucudur.",
  kaynak:"The Canadian Encyclopedia (Historica Canada), 'Rupert's Land': \"deed of transfer … on 19 November 1869\"; devir \"15 July 1870\"; bedel \"£300,000\"",
  taraflar:["kri","dene"], etiket:["konu-idari","konu-toprak"] },

{ t:"1874-09-15", k:"antlasma", b:"4 Numaralı Antlaşma (Qu'Appelle) — Ova Krileri ve Saulteaux toprak devretti",
  gun:"15 Eylül 1874 (The Canadian Encyclopedia; görüşmeler 8 Eylül'de başladı — Encyclopedia of Saskatchewan)",
  yer:"Fort Qu'Appelle", yer_kon:[50.77,-103.79], kisiler:"Alexander Morris",
  d:"Kanada hükümeti adına Vali Alexander Morris başkanlığındaki komisyon, Fort Qu'Appelle'de Kri, Saulteaux ve Assiniboine önderleriyle görüştü. Günlerce süren gerginlikten sonra on üç şef antlaşmaya imza koydu ve bugünkü güney Saskatchewan'ın büyük kısmı ile komşu toprakları kapsayan yaklaşık 195.000 km² Kanada'ya bırakıldı. Karşılığında rezerv toprağı, yıllık ödeme, okul ve tarım aletleri vaat edildi.",
  kaynak:"The Canadian Encyclopedia, 'Treaty 4' (arama özeti: \"signed on 15 September 1874 at Fort Qu'Appelle\"; 195.000 km²) · Encyclopedia of Saskatchewan (Univ. of Regina), 'Treaty 4': görüşmelerin \"September 8, 1874\"te başlaması, \"thirteen chiefs placed their 'x' on the treaty\"",
  ic_not_d:"İmza günü TCE'nin arama özetinden; eSask sayfası günü açık yazmıyor ('That afternoon').",
  taraflar:["kri"], etiket:["konu-diplomasi","konu-toprak"] },

// ── ŞOŞONİ (2.350 · künye içi 3: 1281 · 1863-07-02 · 1868) ──
{ t:"1805-08-13", k:"temas", b:"Lewis ve Clark seferi Şoşoni ile karşılaştı — Sacagawea kardeşi Cameahwait'i buldu",
  gun:"13 Ağustos 1805 ilk temas · 17 Ağustos Camp Fortunate'te buluşma (seferin günlükleri)",
  yer:"Lemhi Geçidi / Beaverhead", yer_kon:[45.0,-113.3], kisiler:"Meriwether Lewis, Cameahwait, Sacagawea",
  d:"Kıta Bölünme Hattı'nı geçmek için ata ihtiyaç duyan sefer, Lewis'in 13 Ağustos'ta Lemhi Şoşonileriyle kurduğu temasla bunu sağladı. 17 Ağustos'ta Camp Fortunate'te seferin tercümanı Sacagawea, Şoşoni şefi Cameahwait'in kız kardeşi olduğunu anladı. Şoşoniler seferi atlar ve Bitterroot dağlarını aşacak bir kılavuzla donattı.",
  kaynak:"Journals of the Lewis and Clark Expedition (Univ. of Nebraska–Lincoln, ed. Gary E. Moulton), günlük kayıtları 14 ve 17 Ağustos 1805 (arama özetinden okundu) · U.S. National Park Service, 'Meeting with Cameahwait'",
  ic_not_d:"Günlük sayfaları arama özeti üzerinden okundu, tam metin açılmadı.",
  taraflar:["sosoni"], etiket:["konu-kesif","konu-diplomasi"] },

{ t:"1863-01-29", k:"catisma", b:"Bear River katliamı — Connor'un birlikleri Şoşoni kampını yok etti",
  gun:"29 Ocak 1863 (NPS)",
  yer:"Bear River (Preston yakını, Idaho)", yer_kon:[42.10,-111.91], kisiler:"Albay Patrick E. Connor, Bear Hunter",
  d:"1862-63 kışında göçmen yollarına yapılan baskınlara karşılık olarak Albay Patrick Connor komutasındaki Kaliforniya gönüllüleri, Fort Douglas'tan karda yola çıktı ve Şef Bear Hunter'ın Bear River kıyısındaki kışlık kampına şafakta saldırdı. Kuzeybatı Şoşonilerinden kadın ve çocuklar dahil yaklaşık 250 kişi öldürüldü. Batıdaki yerli halklara karşı en kanlı tek günlük saldırılardan biridir; ardından gelen Fort Bridger Antlaşması'nın (Temmuz 1863) zeminini hazırladı.",
  kaynak:"U.S. National Park Service, The Civil War battle unit / Bear Hunter kayıtları: \"Shortly after dawn on January 29\"; kayıplar ~250 Şoşoni",
  taraflar:["sosoni"], etiket:["konu-askeri"] },

// ── CREEK (1.286 · künye içi 4: 1813 · 1814 · 1814 · 1832) ──
{ t:"1790-01-01", k:"antlasma", b:"New York Antlaşması — McGillivray Creek'in ulusal önderi olarak ABD ile antlaştı",
  gun:"1790 (kaynak yıl verir)",
  ic_not_t:"New Georgia Encyclopedia gün vermez.",
  yer:"New York", kisiler:"Alexander McGillivray", odak_kimlik:"creek-konfederasyonu",
  d:"Creek (Muscogee) önderi Alexander McGillivray, ABD federal hükümetiyle imzalanan ilk büyük Creek antlaşmasıyla Georgia'nın toprak taleplerinin bir kısmını kabul etti; karşılığında federal güvence aldı. Antlaşma, McGillivray'in Creek Konfederasyonu'nun ulusal önderi konumunu pekiştirdi.",
  kaynak:"New Georgia Encyclopedia (Georgia Humanities / Univ. of Georgia Press), 'Creek Indians': \"The first treaty, the Treaty of New York, solidified Alexander McGillivray's position as a national leader of the Muscogee\"",
  taraflar:["creek-konfederasyonu"], etiket:["konu-diplomasi","konu-toprak"] },

{ t:"1825-01-01", k:"antlasma", b:"Indian Springs Antlaşması — McIntosh Georgia'daki bütün Creek topraklarını devretti, meclis onu idama mahkûm etti",
  gun:"1825 (kaynak yıl verir)",
  ic_not_t:"New Georgia Encyclopedia gün vermez; McIntosh'un ölüm günü de yazmaz.",
  yer:"Indian Springs (Georgia)", kisiler:"William McIntosh", odak_kimlik:"creek-konfederasyonu",
  d:"Georgia temsilcilerinin rüşvetle kazandığı Creek önderi William McIntosh, eyaletteki bütün Muscogee topraklarını devreden antlaşmayı imzaladı. Creek meclisi bu ihaneti idamla cezalandırmaya karar verdi. Ertesi yıl Washington Antlaşması'yla Georgia'daki kalan topraklar da bırakıldı.",
  kaynak:"New Georgia Encyclopedia, 'Creek Indians': \"In the Treaty of Indian Springs (1825), Georgia agents bribed Muscogee leader William McIntosh to sign away all Muscogee territory in the state\"; meclisin McIntosh'u ölüme mahkûm etmesi",
  taraflar:["creek-konfederasyonu"], etiket:["konu-toprak","konu-siyasi"] },

// ── HAYDA (1.155 · künye içi 3: 1281 · 1858 · 1862) ──
{ t:"1774-01-01", k:"temas", b:"Juan Pérez'in seferi Haida Gwaii açıklarında Hayda ile karşılaştı — ilk Avrupa teması",
  gun:"Temmuz 1774 (DCB: kara 15 Temmuz'da görüldü, Hayda ile karşılaşma ertesi gün)",
  ic_not_t:"Karşılaşmanın günü DCB'de göreli ('the next day') verilir; kesin gün yazılmadı.",
  yer:"Haida Gwaii (Queen Charlotte Adaları) kuzeyi", yer_kon:[54.2,-133.0], kisiler:"Juan Josef Pérez Hernández",
  d:"Kuzeybatı kıyısını keşfe gönderilen İspanyol seferi, bugünkü Haida Gwaii'nin en kuzey adası açıklarında Hayda kanolarıyla karşılaştı. Hayda, kürklerini kumaş, boncuk ve bakır parçalarıyla takas etmeye istekliydi. Bu, Hayda ile Avrupalılar arasındaki ilk belgelenmiş temastır.",
  kaynak:"Dictionary of Canadian Biography, 'PÉREZ HERNÁNDEZ, JUAN JOSEF' (vol. 4): \"offshore of the northernmost of what are now called the Queen Charlotte Islands (B.C.), the expedition encountered the Haidas\"",
  taraflar:["hayda"], etiket:["konu-kesif","konu-ekonomi"] },

// ── LAKOTA (610 · künye içi 4: 1281 · 1868 · 1876 · 1890) ──
{ t:"1851-09-17", k:"antlasma", b:"Horse Creek (Birinci Fort Laramie) Antlaşması — Oglala ve Brulé Lakota imzaladı",
  gun:"17 Eylül 1851 (NPS)",
  yer:"Horse Creek (North Platte kıyısı)", yer_kon:[41.93,-103.98],
  d:"Göçmen yollarından güvenli geçişi sağlamak ve kabileler arası çatışmaları azaltmak için toplanan, Ova halklarının tarihteki en kalabalık buluşmasında 10.000'i aşkın kişi bulundu. Oglala ve Brulé Lakota altı şefle temsil edildi. Antlaşma kabilelere yıllık ödeme vaat ediyor, topraklarının sınırlarını çiziyordu. Ancak ABD Senatosu'nca hiçbir zaman onaylanmadı ve maddeleri hemen çiğnenmeye başladı.",
  kaynak:"U.S. National Park Service, 'Fort Laramie Treaty of 1851 (Horse Creek Treaty)': \"The treaty was signed on September 17, 1851 but never ratified\"; \"Oglala and Brule Lakota (represented by six chiefs)\"",
  ic_not_d:"Aynı antlaşma karga · mandan · hidatsa künyelerinin İÇİNDE zaten var; taraflara yalnız lakota yazıldı (mükerrer olmasın).",
  taraflar:["lakota"], etiket:["konu-diplomasi","konu-toprak"] },

// ── CHEROKEE (1.021 · künye içi 4: 1776 · 1777 · 1785 · 1791) ──
{ t:"1775-01-01", k:"antlasma", b:"Sycamore Shoals'da Transilvanya Alımı — Dragging Canoe satışa karşı çıktı",
  gun:"1775 (kaynak yıl verir)",
  ic_not_t:"Tennessee Encyclopedia ayı/günü vermez.",
  yer:"Sycamore Shoals (Watauga Irmağı)", yer_kon:[36.35,-82.24], kisiler:"Richard Henderson, Dragging Canoe",
  d:"Toprak spekülatörü Richard Henderson, Sycamore Shoals'da yaklaşık 1.200 Cherokee'nin katıldığı görüşmelerde 20 milyon akrelik bir toprak parçasını satın aldı. Genç önder Dragging Canoe anlaşmayı haksız ve akılsızca bularak şiddetle kınadı. Bu ayrılık, ertesi yıl başlayan Cherokee-Amerikan savaşlarının kökündeki kopuşlardan biridir.",
  kaynak:"Tennessee Encyclopedia (Tennessee Historical Society), 'Sycamore Shoals': \"Richard Henderson negotiated with the Cherokee Indians for the purchase of a huge land tract of 20 million acres–known as the Transylvania Purchase\"; \"Dragging Canoe strongly denounced the deal\"",
  taraflar:["cherokee"], etiket:["konu-toprak","konu-diplomasi"] },

];
