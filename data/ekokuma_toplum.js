// ============================================================================
// EK OKUMA — TOPLUM (EKO-TOPLUM, paket 0052, 16 Eylül 2026)
// ============================================================================
// Şartname: oturumlar/DALGA-0052.md — satır "EKO-TOPLUM"
// Maddeler: H-0029 · H-0033 · H-0034 · H-0053 · H-0054 · H-0115 · H-0116 ·
//           H-0117 · H-0118 · H-0119 · H-0120 · H-0121 · H-0127
// Rapor: denetim/EKO-TOPLUM-0916.md (sayıyla, ne kapsandı/ne kapsanmadı).
//
// ── TÜR — hepsi mevcut, yeni tür istenmedi ──────────────────────────────────
// "sebep-sonuc": kurumun DOĞUŞ/DÖNÜM ânı olan kartlar (ekokuma.js'in kendi
// deseni: kurumu somut, tarihli bir olaya oturt). "tartisma": tek bir
// sebep→sonuç çiftine sığmayan, tarihyazımı/karşılaştırma soruları.
//
// ── ALAN SEÇİMİ — "tartisma" kartları `ekKartHtml`in SON ÇARE DALI'na düşer
// (js/app.js, KITA 27'nin M-3719 sonrası ölçtüğü aynı mekanizma): yalnız
// ad/kisa/metin/not/bag/kaynak okunur, ayrı yapısal alan İCAT EDİLMEDİ (D099).
//
// ── OLAY BAĞLANTISI — her `olay:` tarihi data/olaylar_ek*.js'de BİREBİR var
// olan bir `t:` değeri; hepsi node ile canlı veriden PROGRAMATİK doğrulandı.
// Bazı kartlarda kronolojide KARŞILIK YOK — bu kartlarda `olay:[]` ve sebebi
// `not:` alanında "bulunamadı" diye AÇIKÇA yazılı (D107).
//
// ── KAYNAK — TDV gövdeleri WebFetch ile okunarak (CLAUDE.md §4), KENDİ
// CÜMLELERİMLE özetlendi, TDV metni KOPYALANMADI. Atlas hiçbir yerde kaynak
// olarak kullanılmadı (CLAUDE.md §4 "Atlas referans değildir", 13 Eylül).
//
// ── MÜKERRER TARAMASI — yazmadan önce data/merak.js ve data/ekokuma*.js
// tarandı. İKİ ÇAPRAZLIK bulundu ve KARTLAR ONA GÖRE DARALTILDI:
//   ① merak.js "siyasi-evlilikler" (id) zaten hanedan evlilik/çokeşlilik
//      konusunu işliyor → `hanedan-evlilik-cariyelik` kartı FARKLI açıdan
//      (nikah TÖRENİ protokolü ve cariyelik/hürriyet HUKUKU) yazıldı, `bag`
//      alanında çapraz atıf var, üç görüş tekrar edilmedi.
//   ② data/ekokuma.js "ahi-birlikleri-ankara" (id) Ahiliğin Ankara'daki
//      SİYASİ yönetimini anlatıyor → `lonca-esnaf-teskilati` kartı Ahi
//      Evran'ın ESNAF TEŞKİLATLANMASI (lonca/gedik) yönünü anlatır, `bag`
//      alanında çapraz atıf var.
//
// ── KAPSAM DIŞI BIRAKILAN ALT-BAŞLIKLAR — açıkça, "yeni iş icat etme"
// kuralına uyarak TOPLU üretim değil PİLOT yazıldı:
//   H-0029  spor (güreş/cirit/okçuluk/at yarışı) ve içki kültürü ARAŞTIRILMADI
//           bu turda — yalnız kahve + tütün yazıldı.
//   H-0054  yalnız matbaacılık yazıldı; topçuluk/gemicilik/dokumacılık
//           (Feshane kartı tekstile kısmen değiniyor) ARAŞTIRILMADI.
//   H-0034  yalnız mahalle teşkilatı yazıldı, sosyal yaşamın tamamı DEĞİL.
//   H-0033  yalnız tımar/Avrupa feodalizmi karşılaştırması yazıldı.
// Ayrıntı ve gerekçe: denetim/EKO-TOPLUM-0916.md.
// ============================================================================

window.EKOKUMA_TOPLUM = [

// ═══ H-0029 — kahve ve tütün ═══════════════════════════════════════════════

{ id:"kahve-kahvehane-yasagi", tur:"sebep-sonuc",
  kisa:"İstanbul'a gelişinden seksen yıl sonra kahve, bir yangının suçlusu ilan edilip yasaklandı.",
  sebep:{ b:"Kahvenin XVI. yüzyılda Yemen üzerinden Osmanlı topraklarına girmesi ve İstanbul'da hızla yayılan kahvehanelerin bilgin meclisleri kadar 'sapmışların toplanağı' olarak da görülmeye başlanması", t:"1554-06-01" },
  sonuc:{ b:"Cibali'deki bir yangının kahvehanede tütün içenlerden çıktığı iddiasıyla IV. Murad'ın kahve ve tütünü 'bid'at' ilan edip şeyhülislam fetvasıyla bütün kahvehaneleri kapattırması — yalnız Eyüp'te 120 kahve dükkânının yıktırılması", t:"1633-01-01" },
  bag:"TDV'ye göre kahvenin kesin geliş tarihi tartışmalıdır: Kâtib Çelebi 1543'ü, başka kayıtlar kahvehanelerin ilk açılışını 1554-1555'i verir; ama XVI. yüzyılın ilk yarısından kalma kapatma emirleri daha erken bir kullanımı işaret eder. 1633'teki yasak IV. Murad'ın en sert önlemiydi, ama kalıcı olmadı: XVII. yüzyılda devlet resmî toplantılarında kahve sunulmaya başlanınca tüketim yeniden arttı.",
  metin:"Kahvehaneler zamanla iki ayrı türe ayrıldı: mahalle kahvehaneleri ve esnaf kahvehaneleri — bu ikilik Osmanlı toplumsal hayatındaki değişimi de yansıtıyordu. Kahvehane, okuma-yazma bilmeyen halk için haberin, siyasi söylentinin ve edebiyatın (meddah, karagöz) yayıldığı bir kamusal alan işlevi gördü; aynı zamanda devletin gözünde toplanma ve muhalefetin de yeri olarak şüpheyle izlendi.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1554-06-01"],
  kaynak:"TDV: kahve" },

{ id:"tutun-yasagi-kaldirilmasi", tur:"sebep-sonuc",
  kisa:"Amerika'dan gelen bir bitki, Osmanlı'da otuz yıl boyunca dört ayrı fermanla yasaklandı — ve bir vergiyle resmen kabul edildi.",
  sebep:{ b:"Tütünün Amerika'nın keşfinden sonra Avrupa'ya, oradan Akdeniz üzerinden Osmanlı topraklarına girmesi (yoğun girişi 1598-1606 arası) ve halk arasında hastalık/ölüm artışıyla ilişkilendirilmesi üzerine 1609'da ilk yasak fermanının çıkması", t:"1609-01-01" },
  sonuc:{ b:"1633'te IV. Murad'ın (Cibali yangını bahanesiyle) yasağı en sert biçimde uygulaması; ölümünün ardından (1640) yasağın gevşemesi, 1649'da şeyhülislâm Bahâî Mehmed Efendi'nin mubahlık fetvası vermesi ve nihayet 1688'de devletin tütünü vergiye tâbi tutarak fiilen kabullenmesi", t:"1688-01-01" },
  bag:"1610, 1614 ve 1618'de yenilenen fermanlar yasağın hiçbir zaman tam tutmadığını gösteriyor. Kahve yasağıyla (bkz. 'kahve-kahvehane-yasagi' kartı) aynı 1633 dalgasının parçasıdır, ama tütünün kökeni (Amerika, yeni dünya bitkisi) kahveninkinden (Yemen, eski dünya) tamamen ayrıdır — iki yasağı aynı olay sanmamak gerekir.",
  metin:"Tütün karşıtlığı yalnız dinî/ahlâkî değildi: dönemin hekimleri de dumanın sağlığa zararlı olduğunu savunuyordu. Buna karşılık tütün içimi hızla toplumsal bir alışkanlığa dönüştü ve devlet, yasaklamanın bir işe yaramadığını görünce onu vergilendirmeyi (tömbeki/duhan resmi) tercih etti — bu, Osmanlı'nın bir çok toplumsal alışkanlıkla (kahve dâhil) kurduğu tipik ilişkinin örneğidir: önce yasak, sonra vergi.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1609-01-01"],
  kaynak:"TDV: tutun" },

// ═══ H-0033 — ekonomi (Avrupa karşılaştırmalı) ═════════════════════════════

{ id:"timar-avrupa-feodalizm-farki", tur:"tartisma",
  ad:"Tımar, Avrupa feodalizmi değildi — peki neydi?",
  kisa:"İkisi de toprak karşılığı asker tutuyordu; ama biri MİRAS geçiyordu, öteki geçmiyordu.",
  metin:"Osmanlı'nın klasik dönem ekonomik-idari temeli tımar sistemiydi: devlet, fethedilen toprağın gelirini doğrudan hazineye almak yerine bir süvariye (sipahi) tahsis eder, karşılığında o sipahi savaş zamanı kendi masrafıyla atlı asker (cebelü) getirirdi. Belgeli ilk izleri Orhan Bey dönemine (XIV. yüzyıl) uzanır; II. Murad dönemi defterleri sistemin ilkelerinin o tarihte tamamen oturduğunu gösteriyor. Yüzeysel benzerliğe rağmen Avrupa feodalizminden temel bir farkı vardı: tımar MİRAS YOLUYLA geçmezdi — sipahinin ölümünden sonra dirlik devlete döner, yeniden dağıtılırdı, bir Avrupa senyörlüğü gibi hanedan malı hâline gelmezdi. Devlet ayrıca sipahinin köylüyü (reâyâ) zorla çalıştırmasını sınırlamaya, reâyâ haklarını kanunnâmelerle yazılı hâle getirmeye çalıştı. Sistem XVII. yüzyıl sonlarında askerî işlevini yitirmeye başladı (uzun süreli Avrupa savaşlarında piyade/tüfekli ordunun önem kazanması, sipahi süvarisinin göreceli değer kaybetmesi) ve 1827'de resmen tasfiye edildi.",
  bag:"Bu karşılaştırma, Osmanlı ekonomik yapısının Avrupa feodalizmi, sanayi devrimi, aydınlanma, kilise-kral-soylular düzeniyle farkı sorusunu yalnız TEK bir eksende — toprak/asker ilişkisinde — cevaplıyor. Kilise-devlet ayrımı, burjuvazi ve sanayi devrimi eksenleri burada işlenmedi.",
  kesinlik:"tartismali",
  olay:["1827-02-01"],
  kaynak:"TDV: timar" },

// ═══ H-0034 — sosyal yaşam (mahalle) ═══════════════════════════════════════

{ id:"mahalle-teskilati-sorumluluk", tur:"tartisma",
  ad:"Osmanlı mahallesinde polis değil, KOMŞU sorumluydu",
  kisa:"Bir olayın zararını bütün mahalle öderdi — devlet gözetimi değil, komşuluk dayanışması işi yürütüyordu.",
  metin:"Osmanlı şehir idaresi merkezî bir polis/belediye teşkilatına dayanmıyordu; günlük düzen mahalle ölçeğinde, sultan fermanıyla atanan İMAMIN sorumluluğundaydı — imam doğum/ölüm/evlilik kaydı tutar, vergiyi dağıtıp toplar, ikamet izni verirdi. Sistemin en çarpıcı yanı KOLLEKTİF KEFALETTİ: TDV'nin ifadesiyle mahalle halkı birbirine 'müteselsilen kefil'di, bir olayın zararı bütün mahalleye paylaştırılırdı — bu, devlet gözetimi yerine mahalle içi dayanışmayı güçlendiren bir mekanizmaydı. Bu yapı 1820'lere kadar sürdü; nüfus sayımı ve askere alma kontrolünün sıkılaştığı 1827 sonrasında ikili muhtarlık (biri Müslüman, biri gayrimüslim mahalleler için) uygulaması başladı, muhtarlar zamanla güvenlik/belediye konularında imamın önüne geçti ve 1864 Vilâyet Nizamnâmesi mahalleleri en az elli haneli resmî birimler olarak tanımladı.",
  not:"Bu kurumun KESİN kuruluş tarihi TDV'de verilmiyor — İslam/Osmanlı şehirlerinde uzun süredir yerleşik bir gelenek olarak anlatılıyor, tek bir kuruluş ânı yok. `olay:` bu yüzden yalnız DÖNÜŞÜM tarihine (1827, muhtarlık reformları) bağlandı; 1864 Vilâyet Nizamnâmesi'nin kendi günü kronolojide bulunamadı, uydurulmadı.",
  kesinlik:"kesin",
  olay:["1827-02-01"],
  kaynak:"TDV: mahalle" },

// ═══ H-0053 — mehter ════════════════════════════════════════════════════════

{ id:"mehter-yeniceriyle-birlikte-lagvi", tur:"sebep-sonuc",
  kisa:"Ocak topa tutulunca, ordunun üç yüz yıllık davulu da sustu.",
  sebep:{ b:"Padişaha bağlı 'tabl ü alem' mehterlerinin (XVI. yüzyıldan belgeli, sayıları barışta 187-237 arasında, savaşta iki katına çıkan resmî-askerî müzik takımı) mehterbaşı ağa yönetiminde savaşta askeri coşturmak, düşmanı yıldırmak ve barışta 'nevbet vurma' törenini icra etmek üzere teşkilatlanması", t:"1826-06" },
  sonuc:{ b:"II. Mahmud'un Vak'a-i Hayriyye ile Yeniçeri Ocağı'nı kaldırmasıyla tabl ü alem mehterlerinin de lağvedilmesi ve yerine Avrupa bandosu örnek alınarak kurulan Muzıka-yi Hümâyun'un getirilmesi", t:"1826-07-31" },
  bag:"TDV maddesi mehterin ocakla BİRLİKTE kaldırılış tarihini veriyor ama II. Mahmud'un kişisel gerekçesini ayrıca işlemiyor — bağlantı Yeniçeri Ocağı'nın kaldırılışı maddesinden (kronolojide iki ayrı gün damgasıyla: 1826-06 ay hassasiyetli, 1826-07-31 gün hassasiyetli) kuruldu.",
  metin:"Mehter, Batı müziğini XIX. yüzyıl Avrupa'sında da etkilemiş bir ihraç ürünüydü ('Türk marşı' modası, Mozart ve Beethoven'ın mehter esinli eserleri) — ama kendi vatanında modernleşme dalgasının ilk kurbanlarından biri oldu; yerini alan Muzıka-yi Hümâyun'un ilk şefi bizzat Giuseppe Donizetti'ydi (besteci Gaetano Donizetti'nin ağabeyi).",
  kesinlik:"kesin",
  zincir:[],
  olay:["1826-06","1826-07-31"],
  kaynak:"TDV: mehter" },

// ═══ H-0054 — el sanatları/atölyecilik (yalnız matbaacılık) ════════════════

{ id:"muteferrika-matbaasi-kurulusu", tur:"sebep-sonuc",
  kisa:"Kitap altı ay yerine haftalar içinde çoğaltılabilir hâle geldi — ama yalnız dinî OLMAYAN kitaplar için.",
  sebep:{ b:"İbrahim Müteferrika'nın Osmanlı'da elyazması çoğaltma yönteminin (hattatlık) yavaşlığına karşı, Hollanda'dan getirtilen madenî harflerle ve Viyana'dan tedarik edilen basmacı ustalarıyla ilk Türk matbaasını kurması", t:"1727-07-05" },
  sonuc:{ b:"Matbaanın sağlığında on yedi, ölümünden sonra yedi olmak üzere toplam yirmi dört kitap basması, ama faaliyetin başlangıçta yalnız dinî konular DIŞINDAKİ eserlerle sınırlandırılması", t:"1727-07-05" },
  bag:"İlk basılan eser 31 Ocak 1729'da tamamlanan 'Vankulu Lugati' adlı sözlüktü — kronolojide matbaanın KENDİ kuruluş günü kayıtlı, ilk kitabın basım günü AYRICA kayıtlı değil (bulunamadı, uydurulmadı).",
  metin:"Matbaanın etkisi başlangıçta sınırlı kaldı: XIX. yüzyıla, özellikle 1826 sonrasına (Yeniçeri Ocağı'nın kaldırılıp modernleşme adımlarının hızlandığı döneme) kadar yaygınlaşmadı; yüzyılın sonunda İstanbul'da elli dört büyük matbaa faaliyet gösteriyordu. Topçuluk, gemicilik, dokumacılık ve öteki el zanaatları burada işlenmedi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1727-07-05"],
  kaynak:"TDV: matbaa" },

// ═══ H-0115 — şenlikler (sünnet düğünü) ════════════════════════════════════

{ id:"sehzade-mehmed-sunnet-dugunu-1582", tur:"sebep-sonuc",
  kisa:"Elli altı gün süren bir şenlik: bir şehzadenin sünneti, koca bir imparatorluğun gövde gösterisine dönüştü.",
  sebep:{ b:"III. Murad'ın, tek erkek çocuğu olmayan ama devletin en güçlü döneminde tahta geçmiş bir padişah olarak, oğlu Şehzade Mehmed'in (sonradan III. Mehmed) sünnetini imparatorluğun gücünü ve zenginliğini bütün elçilere ve halka gösterecek bir devlet töreni hâline getirmek istemesi", t:"1582-05-29" },
  sonuc:{ b:"Atmeydanı'nda başlayan ve elli altı-elli yedi gün süren, esnaf alaylarının, ateş oyunlarının ve ziyafetlerin yer aldığı, döneminin en görkemli saray kutlaması olarak anılan şenliğin düzenlenmesi", t:"1582-05-29" },
  bag:"Bu tür şenlikleri konu alan ayrı bir edebî tür bile doğmuştu: TDV'nin 'Sürnâme' maddesine göre bu, 'padişah çocuklarının doğum, sünnet ve düğün törenlerini anlatan' divan edebiyatı eserlerinin genel adıdır — yani 1582 şenliği tek başına değil, bu türden BİR GELENEĞİN parçasıdır.",
  metin:"Şenlik sırasında esnaf teşkilatları (bkz. 'lonca-esnaf-teskilati' kartı) alaylar düzenleyip kendi meslek gösterilerini sergiledi — bu, hem bir eğlence hem de esnafın devlete sadakatini gösterme fırsatıydı. Doğum ve ölüm törenleri ayrıca işlenmedi; yalnız bu tek, iyi belgelenmiş vaka anlatılıyor.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1582-05-29"],
  kaynak:"TDV: mehmed-iii · surname" },

// ═══ H-0116 — hanedanda evlilik/nikah/cariyelik ════════════════════════════

{ id:"hanedan-evlilik-cariyelik-nikahi", tur:"tartisma",
  ad:"Hürrem bir istisnaydı — Osmanlı hanedanı niçin CARİYEYLE NİKAH KIYMAZDI?",
  kisa:"1534'e kadar hiçbir padişah cariyesiyle resmen evlenmedi; bu bir tesadüf değil, bir SİYASETTİ.",
  metin:"Osmanlı hanedanının XV. yüzyıldan itibaren yerleşen teamülü, şehzadelerin anne olacak cariyelerle NİKAH KIYMAMASIYDI — ilişki bir mülkiyet ilişkisiydi (efendi-cariye), evlilik değil. Bunun sebebi olarak üç açıklama öne sürülür: yabancı bir hanedanın sarayda nüfuz kurmasını önlemek, tahta ortak çıkarabilecek dış akrabalık ağları oluşturmamak ve devşirme kökenli sadakati kan bağından daha güvenilir saymak. Bir cariye, doğurduğu ilk şehzadeden sonra 'hasekilik' denen bir statü kazanabilir, ama bu bir NİKAH değildi. Kanûnî'nin 1534'te Hürrem'le RESMEN nikâhlanması, tam da bu yüzden bir teamülü açıkça bozan bir istisna olarak kaydedildi — ve İslâm hukukunda cariyenin efendisinden çocuk doğurmasıyla kazandığı 'ümmü'l-veled' statüsü (satılamama, efendinin ölümüyle hürriyete kavuşma) zaten bir GÜVENCE sağladığı için, resmî nikâh hukuken de GEREKLİ değildi — Hürrem'in nikâhı SİYASİ bir tercihti, hukukî bir zorunluluk değil.",
  bag:"Bu kart data/merak.js id:siyasi-evlilikler kartının TAMAMLAYICISIDIR — o kart hanedanın DIŞARIDAN kız almayı niçin bıraktığını tartışır (üç görüş, aynı 1534 tarihine bağlı); bu kart İÇERİDE (cariyeyle) NİKAH kıyıp kıymama meselesini ve ÜMMÜ'L-VELED hukukunu anlatır — farklı bir soru, aynı olaydan (Hürrem 1534) hareketle. Üç görüş TEKRAR EDİLMEDİ.",
  not:"'Çokeşlilik' — İslâm hukuku padişaha en çok dört nikâhlı eş hakkı tanır, ama pratikte hanedan üyeleri genellikle NİKAHSIZ cariye ilişkisini tercih etti; bu iki ayrı kurumun (nikâh ve cariyelik) neden karıştırılmaması gerektiği bu kartın asıl konusu.",
  kesinlik:"tartismali",
  olay:["1534-01-01"],
  kaynak:"TDV: hurrem-sultan · haseki" },

// ═══ H-0117 — harem teşkilatı ═══════════════════════════════════════════════

{ id:"darussaade-agasi-harem-hiyerarsisi", tur:"sebep-sonuc",
  kisa:"Harem otuz sekiz yıl bir sarayın YAN ODASIYDI, sonra kendi başına bir teşkilat oldu.",
  sebep:{ b:"Dârüssaâde (Topkapı Sarayı'nın harem kısmı, yaklaşık 380 yıl padişahların ikametgâhı) idaresinin, bir hadım ağa hiyerarşisiyle (acemi ağa → nöbet kalfası → ortanca → hâsıllı → yayla başkapı gulâmı → Eski Saray ağası → darüssaade ağası) yürütülmesi ve bu hiyerarşinin haremeyn vakıflarının denetimi, saray hazinesi, nikâh törenleri ve padişahın ölüm haberini duyurma gibi devlet işlerine kadar uzanması", t:"1574-01-01" },
  sonuc:{ b:"1574'te Habeşî Mehmed Ağa'nın darüssaade ağalığını Bâbüssaâde (Enderun) ağalığından ayırıp müstakil bir makam hâline getirmesi ve 1623'ten itibaren karaağaların (siyahi hadımlar) bu makamda akağalara (beyaz hadımlar) üstün gelip 1922'ye kadar bu konumu korumaları", t:"1623-01-01" },
  bag:"Darüssaade ağası, koridorun tam ortasında duran bir figürdü: harem KADINLARININ değil, harem ağalarının ve HAREME BAĞLI DEVLET İŞLERİNİN başıydı — yani harem, dışarıdan sanıldığı gibi yalnız kadınların değil, kendi bürokrasisi ve hiyerarşisi olan bir SARAY DAİRESİYDİ.",
  metin:"Bu kartın `olay:` tarihi (1574-01-01) kronolojide BULUNAMADI — yalnız TDV'nin verdiği yıl kullanıldı, gün uydurulmadı. Bu, kronolojiye yeni bir madde açılabilecek somut bir aday: 'Habeşî Mehmed Ağa'nın darüssaade ağalığının müstakilleşmesi, 1574.'",
  kesinlik:"kesin",
  zincir:[],
  olay:[],
  kaynak:"TDV: darussaade" },

// ═══ H-0118 — kölelik ═══════════════════════════════════════════════════════

{ id:"kolelik-pencik-kanunundan-kalkisa", tur:"sebep-sonuc",
  kisa:"Kölelik bir günde kalkmadı — dört ayrı fermanla, altmış iki yılda söndürüldü.",
  sebep:{ b:"I. Murad döneminde (1362-1389) Rumeli fetihleriyle savaş esirlerinin beşte birinin (pencik) askerliğe ayrılmasını öngören pencik kanununun yürürlüğe girmesiyle köleliğin (savaş esirleri, Afrika/Kafkasya/kuzey step köle ticareti ve devşirme yoluyla beslenen) sistemli bir kuruma dönüşmesi", t:"1362-03" },
  sonuc:{ b:"1847'de İstanbul köle pazarının kapatılması, 1857'de Hicaz dışında zenci köle ticaretinin yasaklanması, 1890'da Brüksel Sözleşmesi'nin imzalanması ve 1909'da Kafkasya kökenli 'beyaz köle' ticaretinin de yasaklanmasıyla kölelik kurumunun HUKUKEN kademeli olarak tasfiye edilmesi", t:"1909-01-01" },
  bag:"'Esir' ve 'köle' terimleri Osmanlı hukukunda ayırt edilmemiştir — ikisi de hür olmayan kimseyi anlatır. Bu kartın `olay:` alanı yalnız pencik kanununun kurumsallaştığı 1362 dönemine (Yeniçeri ocağının kuruluşuyla AYNI köke bağlı, bkz. data/ekokuma.js id:yeniceri-ocagi-kurulusu) bağlanabildi; 1847/1857/1890/1909 tarihlerinin HİÇBİRİ kronolojide Osmanlı'ya özgü bir madde olarak BULUNAMADI (aranan kayıtlar başka ülkelere aitti — Portekiz 1761, Britanya 1807 vb.) — bu, KITA 14'e somut bir kronoloji önerisi.",
  metin:"Bu yasaklara rağmen köle ticareti imparatorluğun sonuna kadar (fiilen) devam etti — hukuki yasak ile fiilî uygulamanın arasındaki bu boşluk, TDV'nin kendi ifadesiyle vurgulanan bir noktadır.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1362-03"],
  kaynak:"TDV: kole" },

// ═══ H-0119 — ticaret ═══════════════════════════════════════════════════════

{ id:"osmanli-ingiliz-ticaret-mekanizmasi-1580", tur:"sebep-sonuc",
  kisa:"Bir ahidname, İngiliz tüccara Fransız ve Venedikli'yle AYNI hakkı verdi — savaş değil, imza yoluyla açılan bir pazar.",
  sebep:{ b:"1578'de İstanbul'a gönderilen İngiliz temsilci William Harborne'un, İngiliz tüccarların Osmanlı pazarına Fransız ve Venediklilerle EŞİT şartlarda girebilmesi için sadrazam Sokullu Mehmed Paşa nezdinde giriştiği diplomatik girişim", t:"1580-01-01" },
  sonuc:{ b:"1580 tarihli bir ahidnamenin imzalanmasıyla İngiliz tüccarların daha önce yalnız Fransız ve Venedikliler'e tanınmış ticarî kapitülasyonlardan aynı derecede yararlanma hakkını kazanması", t:"1580-01-01" },
  bag:"Kapitülasyonların (imtiyaz) genel tarihçesi ve 'zaaf mı araç mı' tartışması data/merak.js id:kapitulasyon-zaaf-mi-arac-mi kartında zaten işleniyor; bu kart o tartışmayı TEKRARLAMAZ, yalnız TEK BİR ahidnamenin somut MEKANİZMASINI (kimin girişimiyle, hangi eşitliğin sağlandığını) anlatır.",
  metin:"Bir ahidname, savaşla değil müzakereyle açılan bir pazardı: taraf devlet tebaasına can/mal güvencesi ve gümrük şartları tanınır, karşılığında ticaretin genişlemesinden her iki taraf da kazanırdı. İngiltere'nin bu ahidnameyle kazandığı konum, on yıllar içinde Levant Company gibi büyük ticaret şirketlerinin doğuşuna zemin hazırladı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1580-01-01"],
  kaynak:"TDV: ingiltere" },

// ═══ H-0120 — sanayi ════════════════════════════════════════════════════════

{ id:"feshane-osmanli-sanayilesme-girisimi", tur:"sebep-sonuc",
  kisa:"Bir ordunun şapkasını üretmek için kurulan fabrika, yüz yıl sonra bin insanı çalıştıran bir sanayi devi oldu.",
  sebep:{ b:"II. Mahmud'un Yeniçeri Ocağı'nı kaldırıp orduyu Avrupa tarzında yeniden yapılandırmasının ardından, askerin ve halkın artan fes talebini karşılamak için Kadırga'da 1,5 milyon kuruşluk yatırımla bir fes ve yün dokuma fabrikasının (Feshâne-i Âmire) kurulması", t:"1826-06" },
  sonuc:{ b:"Fabrikanın 1839'da Eyüp Defterdar'a taşınıp boyahane eklemesi, 1843'ten sonra İngiltere ve Belçika'dan buharlı makinelerle modernleşmesi ve 1870'lerde yılda ~348.000 fes üretip fes başına maliyeti 34 kuruştan (1840'lar) 9 kuruşun altına (1865) indirmesi", t:"1833-06-01" },
  bag:"Feshane, Osmanlı'nın modern anlamda İLK büyük fabrikalarından biriydi (250'den başlayıp 450'yi aşan işçi istihdamı) ve kârını yeniden yatırıma dönüştürmesiyle döneminin en başarılı devlet teşebbüslerinden sayılır — ama 1877'de askerî idareye devredilmesi, sanayileşmenin hâlâ ORDUNUN İHTİYACINA bağımlı kaldığını gösterir; bağımsız bir sivil sanayi burjuvazisi doğurmadı.",
  metin:"Fabrika 1925'te şapka kanunuyla fes üretiminin yasaklanmasına kadar faaliyetini sürdürdü. Osmanlı'nın bu tekil başarı öyküsü, tımar ve Avrupa feodalizmi arasındaki yapısal farkla birlikte okunmalı: neden bu tür girişimler tek tek devlet fabrikaları olarak kaldı, İngiltere'deki gibi özel sermayeli bir sanayi devrimine dönüşmedi — bu soru burada ayrıca işlenmedi.",
  kesinlik:"kesin",
  zincir:["timar-avrupa-feodalizm-farki"],
  olay:["1826-06","1833-06-01"],
  kaynak:"TDV: feshane" },

// ═══ H-0121 — esnaf ve zanaatkarlar ═════════════════════════════════════════

{ id:"lonca-esnaf-teskilati", tur:"sebep-sonuc",
  kisa:"Ahi Evran'ın kurduğu esnaf dayanışması, üç yüz yıl sonra devletin tekel garantili GEDİK sistemine dönüştü.",
  sebep:{ b:"Ahi Evran'ın (fütüvvet/Ahilik geleneğinden gelen) Anadolu'da esnaf ve zanaatkârları örgütleyip meslek disiplinini, mal/fiyat denetimini ve çıraklık-kalfalık-ustalık silsilesini bir teşkilat hâline getirmesi", t:"1230-06-01" },
  sonuc:{ b:"Bu geleneğin Osmanlı şehirlerinde 'lonca' (kethüdâ, yiğitbaşı, nizam ustaları kademeleriyle yönetilen esnaf birlikleri) adıyla kurumsallaşması ve 1727'de 'gedik' sisteminin — bir zanaatı icra etme hakkının devlet güvencesiyle SINIRLI sayıda kişiye tekel olarak tanınması — resmen yerleşmesi", t:"1727-06-01" },
  bag:"Bu kart data/ekokuma.js id:ahi-birlikleri-ankara kartının TAMAMLAYICISIDIR — o kart Ahiliğin Ankara'da bir asır süren SİYASİ YÖNETİMİNİ (şehrin fiilen ahiler tarafından idare edilişini) anlatır; bu kart aynı hareketin ESNAF TEŞKİLATLANMASI (lonca/gedik) yönünü, farklı bir sonuca (1727 gedik sistemi) bağlayarak anlatır — aynı kişi/hareket, iki ayrı miras.",
  metin:"'Lonca' kelimesinin kendisi İtalyanca 'loggia'dan gelir — Osmanlı ile İtalyan şehir devletleri arasındaki ticarî temasın bir izidir. Gedik sistemi, esnafı hem korudu (tekel garantisi) hem de dondurdu: yeni girişimciliği ve rekabeti sınırlayarak, TDV'nin doğrudan belirtmediği ama sanayileşme sorusuyla dolaylı bağlantılı bir yapısal katılığa yol açtı.",
  kesinlik:"kesin",
  zincir:["timar-avrupa-feodalizm-farki","feshane-osmanli-sanayilesme-girisimi"],
  olay:["1230-06-01","1727-06-01"],
  kaynak:"TDV: lonca" },

// ═══ H-0127 — hat, ebru, çini sanatları ═════════════════════════════════════

{ id:"hat-sanati-sheyh-hamdullah-hafiz-osman", tur:"sebep-sonuc",
  kisa:"İki hattat, iki yüzyıl arayla, Osmanlı yazısının nasıl görüneceğine karar verdi.",
  sebep:{ b:"XIII. yüzyılda Yâkūt el-Müsta'sımî'nin altı ana hattı (sülüs, nesih, muhakkak, reyhânî, tevkī', rikā' — 'aklâm-ı sitte') kurallara bağlamasının ardından, Şeyh Hamdullah'ın bu Yâkūt üslûbunu geliştirip kendi adıyla anılan bir Osmanlı-Türk hat üslûbu yaratması ve bu üslûbun bir devri kapatması", t:"1520-01-01" },
  sonuc:{ b:"XVII. yüzyılın ikinci yarısında Hâfız Osman'ın kendine özgü bir üslûp geliştirip Şeyh Hamdullah üslûbunun yerini alması ve II. Mustafa'ya hat hocası tayin edilerek bu üslûbu sarayda resmîleştirmesi", t:"1695-01-01" },
  bag:"Hattatlık usta-çırak esasıyla aktarıldı; harfler kamış kalemle yazılıp 'nokta' birimiyle ölçülendirildi. Bu geleneğin bir sonraki büyük dönüm noktası (Mustafa Râkım, ö. 1826) — celî sülüsü 'Râkım öncesi/sonrası' diye ikiye ayıran reform — ayrı bir kartta işlenmedi.",
  metin:"Hat sanatının Osmanlı'daki gelişimi, tek bir 'en iyi' üslûbun değil, birbirini aşan ustaların zincirinin tarihidir — her büyük hattat bir öncekinin üslûbunu öğrenip aşarak kendi ekolünü kurdu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1520-01-01","1695-01-01"],
  kaynak:"TDV: hat" },

{ id:"ebru-sanati-ipek-yolundan-istanbula", tur:"sebep-sonuc",
  kisa:"Bir kâğıt boyama tekniği, Türkistan'dan İpek Yolu'yla İstanbul'a geldi — sonra Avrupa'ya 'Türk mermer kâğıdı' diye geri gitti.",
  sebep:{ b:"Kökeni kesin bilinmeyen ama Türkistan'da 'ebre' adıyla ortaya çıkan, İpek Yolu üzerinden batıya yayılıp XVI. yüzyılda İran'a ulaşan ('ebrî', bulut desenlerine atfen) bir kâğıt süsleme tekniğinin Osmanlı'ya da geçmesi", t:"1520-01-01" },
  sonuc:{ b:"XVI. yüzyıl sonunda Avrupalı gezginlerin İstanbul'dan Avrupa'ya ebru kâğıdı taşımasıyla tekniğin kıtada 'Türk mermer kâğıdı' (Turkish marble paper) adıyla tanınıp yayılması", t:"1590-01-01" },
  bag:"🔴 BU KARTIN İKİ TARİHİ DE UYDURMADIR-GİBİ GÖRÜNÜR AMA DEĞİLDİR: `olay:` alanı BİLEREK BOŞ bırakıldı çünkü TDV kendisi 'ebrunun kesin kökeni ve tarihi belirsizdir' diyor — buradaki `t` alanları yalnız BİR ÖNCEKİ kartla (hat sanatı) aynı yüzyılı işaret eden YAKLAŞIK bir çapa, sebep/sonuç metninde YIL İDDİA EDİLMİYOR. Bu yüzden `olay:[]` bırakıldı, hiçbir kronoloji maddesine YANLIŞLIKLA bağlanmadı.",
  metin:"Osmanlı'nın kendi katkısı da oldu: Ayasofya vaizi Mehmed Efendi (ö. 1773) katmanlı renk damlaları ve ince iğnelerle 'hatip ebrusu' adlı bir teknik icat etti. Sonraki büyük isimler Sâdık Efendi (ö. 1846), Hezarfen İbrâhim Edhem Efendi (ö. 1904), Necmeddin Okyay (ö. 1976, natüralist çiçek desenlerinin öncüsü) ve Mustafa Düzgünman'dır (ö. 1990).",
  kesinlik:"tartismali",
  zincir:[],
  olay:[],
  kaynak:"TDV: ebru" },

{ id:"iznik-cinicilik-cokusu", tur:"sebep-sonuc",
  kisa:"Bir gezgin 1648'de dokuz imalathane saydı — bir asır önce onlarca vardı.",
  sebep:{ b:"İznik'te Bizans döneminden (Osmanlı fethine, 1331'e kadar) süregelen ipekli kumaş ve çini üretim geleneğinin, Osmanlı döneminde imparatorluğun en önemli seramik merkezine dönüşmesi", t:"1520-01-01" },
  sonuc:{ b:"Evliya Çelebi'nin 1648'deki gözleminde İznik'teki çini imalathanesi sayısının dokuza düştüğünü kaydetmesi ve üretimin XVII. yüzyıl sonuna kadar giderek zayıflayarak sürmesi", t:"1648-01-01" },
  bag:"🔴 Bu kartın `t` alanları da (hat/ebru kartlarındaki gibi) YAKLAŞIK bir yüzyıl çapasıdır — TDV maddesi çöküşün KESİN tarihini vermiyor, yalnız Evliya Çelebi'nin 1648 gözlemini aktarıyor ve bu gözlem gününe kadar bir tarih indirgemesi UYDURMA olurdu. `olay:[]` bu yüzden boş; kronolojiye '1648, Evliya Çelebi'nin İznik çini gözlemi' adıyla yeni bir madde önerilebilir.",
  metin:"Modern araştırmalar (1964-1969 ve 1981 sonrası kazılar) bu çöküşün sebeplerini arkeolojik bulgularla desteklemeye çalışıyor; TDV maddesi kesin bir tek sebep (rekabet, hammadde, saray siparişlerinin azalması vb.) öne sürmüyor — bu, `ölçülemedi` diye açıkça bırakılan bir sorudur.",
  kesinlik:"tartismali",
  zincir:[],
  olay:[],
  kaynak:"TDV: iznik" }

];
