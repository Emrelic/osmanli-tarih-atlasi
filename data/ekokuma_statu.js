// ============================================================================
// EK OKUMA — OSMANLI'YA BAĞLILIK STATÜLERİ: terimler (3 kart) · iki tarihyazımı
// (1 kart) · bağlı yapılar (11 kart)
// ============================================================================
// PAKET-EK1 · 13 Eylül 2026 · parti 0048 H-0002 (makale kısmı) · koordinatör 1.MURAT
// Rapor: denetim/PAKET-EK1-0913.md
//
// Emre'nin isteği (özet): vasal · özerk · haraçgüzar · himaye · bağlı devlet ·
// eyalet/sancak · ocaklık/yurtluk terimlerini ayıran bir makale; Eflak · Boğdan ·
// Erdel · Kırım · Hicaz · Cezayir · Dubrovnik · Fas · Lehistan · Ukrayna · Bizans
// için birer kart; hangi terimin hangi dönemde niçin kullanıldığı ve Osmanlı ile
// yabancı tarihyazımının niçin ayrıştığı.
//
// 🔴 KAPSAM SINIRI: haritada bu yapıların RENK/STATÜ gösterimi (H-0002'nin ilk
// yarısı, H-0005) bu dosyanın konusu DEĞİL — o bir veri/arayüz kararıdır ve
// Oturum 0'ındır. Kartlar yalnız kavramları ve kaynakları anlatır.
//
// ── YÜKLEYİCİ ── `window.EKOKUMA_STATU`; `_ekHavuz()` desenle toplar.
// ── ALANLAR ── bütün kartlar `tur:"tartisma"` (son çare dalı: ad · metin ·
// kisa · not · bag · kaynak). `ic_not*` üretim notudur, çizilmez.
// ── KAYNAK ── TDV gövdeleri okunarak kendi cümlelerimle; hiçbir dönem ve
// statü atlasın verisinden alınmadı (§4 "atlas referans değildir").
// ============================================================================

window.EKOKUMA_STATU = [

// ─── TERİMLER ───────────────────────────────────────────────────────────────

{ id:"statu-terim-haracguzar-tabi-himaye", tur:"tartisma",
  ad:"Bağlılığın dili (1): haraçgüzâr, tâbi (vasal), himaye",
  kisa:"Üç kelime sık sık birbirinin yerine kullanılır, ama aynı şeyi söylemez: biri vergiyi, biri siyasi bağımlılığı, biri korunmayı anlatır.",
  metin:"HARAÇGÜZÂR — 'haraç veren'. TDV'nin maddesine (Feridun Emecen) göre kelime önce haraç ya da cizye ödeyen gayrimüslim tebaa için kullanıldı; zamanla Osmanlı hâkimiyetini tanıyıp her yıl sabit bir vergi gönderen Hıristiyan beylik ve devletlerin adı oldu. Bu yapılar İslâm hukuku çerçevesinde 'dârülahd' sayılırdı: vergi dışında iç işlerinde serbesttiler, dışarıdan saldırıya uğrarlarsa korunurlardı. Maddenin önemli bir ayrımı var: bir savaşı kaybedip barış şartı olarak belli bir süre haraç ödemeyi kabul eden devletler de 'haraçgüzâr' diye anılırdı, ama statüleri tâbi devletlerinkinden farklıydı. Bu yüzden aynı kelime Eflak ve Boğdan için de, Habsburglar ya da ticaret kolonileri için vergi veren Venedik ve Ceneviz için de geçer — kelimenin ortak paydası vergidir, bağlılığın derecesi değil. TÂBİ (VASAL) — Osmanlı'nın üstünlüğünü tanıyan ama kendi hükümdarı, dini ve iç düzeni süren yapı. 'Vasal' Avrupa feodalizminden gelen bir kelimedir; TDV Balkan prenslikleri için çoğunlukla 'tâbi' der ve yer yer parantez içinde 'vasal' karşılığını verir. Tâbi bir yapıdan beklenenler haraçla sınırlı değildi: seferde asker, dış siyasette uyum, bazen rehine şehzade. HİMAYE — 'koruma'. TDV'nin 'Himaye' maddesi kelimeyi İslâm öncesi ve erken İslâm Arap toplumunda kişi ve kabilelerin birbirini koruma kurumu olarak tanımlar. Osmanlı ilişkilerini anlatan maddelerde ise 'Osmanlı himayesi' ifadesi korunma karşılığı bağlılığı anlatır: Dubrovnik 1365'ten, Kırım Hanlığı 1475'ten itibaren bu ifadeyle anılır. XIX. yüzyılda Avrupa diplomasisinin 'protectorate' kavramı ise bambaşka bir ilişkidir ve 'himaye' ile çevrildiği için ikisi kolayca karışır.",
  not:"Pratik okuma kuralı: bir metinde 'haraçgüzâr' görürseniz vergi ödendiğini, 'tâbi' görürseniz siyasi bir üst-alt ilişkisini, 'himaye' görürseniz koruma vaadini anlayın — üçü aynı yapıda aynı anda bulunabilir, ama biri ötekini zorunlu kılmaz.",
  kesinlik:"kesin",
  olay:["1444-06-12","1459-03-07","1475-06-06"],
  kaynak:"TDV: haracguzar · TDV: himaye · TDV: eflak · TDV: dubrovnik · TDV: kirim",
  ic_not:"Ölü sluglar (302): vassal · tabi · kirim-hanligi · haracguzar'ın alternatifi aranmadı (canlı). 'Bağlı devlet' ve 'özerk' kavramları için TDV'de müstakil madde denenmedi/yok: imtiyazli-eyalet 302. XIX. yy protectorate cümlesi genel bir ayrımdır; tarih ya da örnek devlet verilmedi (kaynağa bağlanmadı)."
},

{ id:"statu-terim-muhtar-imtiyazli-bagli", tur:"tartisma",
  ad:"Bağlılığın dili (2): muhtar, imtiyazlı, 'bağlı devlet'",
  kisa:"'Özerk' bugünkü bir kelimedir; kaynaklar aynı durumu 'muhtar', 'muhtariyet', 'imtiyaz' ya da 'yarı müstakil' diye anlatır. 'Bağlı devlet' ise bir çatı ifadedir, bir hukuk terimi değil.",
  metin:"MUHTAR / MUHTARİYET — iç işlerini kendisi yöneten ama dış işlerinde bir merkeze bağlı olan yapı. TDV Erdel'i 1541'den sonra 'haraçgüzâr statüsünde' ve 'muhtar' bir voyvodalık olarak tanımlar: yaklaşık bir buçuk asır boyunca geniş iç muhtariyetine karşılık dış işlerinde İstanbul'a göre hareket etmiştir. İMTİYAZLI YÖNETİM — merkezin bir fermanla ya da antlaşmayla tanıdığı özel haklar üzerine kurulan yönetim. XIX. yüzyılın en belirgin örneği Sırbistan'dır: TDV'ye göre 17 Ekim 1830 tarihli imtiyaz fermanıyla Sırplar kendi meclisleri ve başknezleriyle muhtar bir idare kazandı, kale muhafızları dışında Sırp topraklarında Türk oturmayacaktı. Hicaz'da ise durum farklıdır: TDV 1517'den sonra Mekke emirlerinin eskiden beri sahip oldukları 'imtiyazlı statülerin' aynen korunduğunu, ama emirlerin beratla atandığını ve bölgede padişah adına hutbe okunduğunu yazar — yani imtiyaz, tâbiiyetin içinde bir ayrıcalıktı. YARI MÜSTAKİL — TDV'nin Garp ocakları için kullandığı niteleme: merkezden uzaklık yüzünden yöneticiler iç işlerde geniş yetki kazandı, bir kısmı seçimle iş başına geldi, ama hutbe ve para padişah adınaydı. 'BAĞLI DEVLET' — bugünkü Türkçede bu yapıların hepsini kapsayan genel bir ifadedir. Kaynaklarda Osmanlı'nın bu çeşitliliği tek bir hukuki kalıba soktuğunu gösteren bir terim bulunmaz; her ilişki ahidnâme, berat, ferman ya da antlaşmayla ayrı ayrı tanımlanmıştır. Bu yüzden bir yapıyı 'bağlı devlet' diye anmak doğru ama eksiktir: hangi belgeyle, hangi yükümlülükle bağlı olduğu ayrıca söylenmelidir.",
  not:"Aynı yapının statüsü zaman içinde değişir: Cezayir önce bağlılık bildiren bir denizci beyliği, sonra beylerbeyilik, sonra seçilmiş dayıların yönettiği bir ocak oldu. Bir statü adı ancak bir tarihle birlikte anlamlıdır.",
  kesinlik:"kesin",
  olay:["1517-07-06","1541-08-29|ilhakı","1671-01-01"],
  kaynak:"TDV: erdel · TDV: sirbistan · TDV: hicaz · TDV: garp-ocaklari · TDV: ahidname",
  ic_not:"'Kaynaklarda tek bir hukuki kalıp terimi bulunmaz' cümlesi okunan TDV maddeleri (haracguzar · ahidname · eyalet · sancak · yurtluk · hukumet · garp-ocaklari) kapsamında bir ölçümdür; Osmanlı hukuk literatürünün tamamı taranmadı. 1830 fermanı için atlasta çekirdek madde yok (kontrol: gun.js) → kart 1830'a bağlanmadı."
},

{ id:"statu-terim-eyalet-sancak-ocaklik", tur:"tartisma",
  ad:"Doğrudan idare ve arası: eyalet, sancak, sâlyâneli eyalet, yurtluk-ocaklık, hükümet",
  kisa:"Doğrudan idare de tek tip değildi: tımar dağıtılan eyalet, vergisi hazineye akan sâlyâneli eyalet ve yönetimi bir aileye bırakılan ocaklık sancaklar yan yana vardı.",
  metin:"EYALET — bir beylerbeyinin yönettiği en büyük idari birim. TDV'nin maddesine (Halil İnalcık) göre XVI. yüzyıl belgelerinde bu birim 'beylerbeyilik' ya da 'vilâyet' diye geçer; 'eyalet' kelimesinin resmen benimsenmesi muhtemelen 1591 dolayındadır. SANCAK — bayrak anlamından gelen, eyaletin altındaki idari bölge; başında sancak beyi bulunur. İKİ TİP EYALET — İnalcık'ın aktardığı 1609 tarihli Ayn Ali Efendi listesinde otuz iki eyalet sayılır: yirmi üçünde tımar sistemi uygulanıyordu; dokuzu ise 'sâlyâneli' idi, yani vergileri tımar olarak dağıtılmaz, hazine adına toplanır, yerel giderler düşüldükten sonra kalanı İstanbul'a gönderilirdi. Bu dokuz eyalet Mısır, Bağdat, Yemen, Habeş, Basra, Lahsâ, Cezâyir-i Garb, Trablusgarp ve Tunus'tu. Yani Garp ocakları kâğıt üzerinde bir tâbi devlet değil, sâlyâneli eyaletti. YURTLUK-OCAKLIK VE HÜKÜMET — TDV'nin 'Yurtluk' maddesine göre ocaklık sancakların iki çeşidi vardı: 'hükümet' ve 'yurtluk-ocaklık'. İkisinin ortak yanı, itaat edip yükümlülüklerini yerine getirdikleri sürece yönetimin belli bir ailede kalmasıydı. Farkları: hükümet sancaklarda kanun gereği tahrir yapılmazdı, yurtluk-ocaklıklarda yapılırdı; biri mülkiyet, öteki arpalık ve sancak hassı yoluyla verilirdi. Yurtlukta ömür boyu, ocaklıkta miras yoluyla, yurtluk-ocaklıkta ikisi birlikte bir hak söz konusuydu. DİKKAT: 'OCAK' KELİMESİNİN İKİ ANLAMI — 'Garp ocakları'ndaki ocak, yurtluk-ocaklıktaki ocaklık değildir. TDV 'Cezayir' maddesi oradaki ocağı yeniçeri ve denizcilerden oluşan askerî bir zümre olarak tarif eder; yurtluk-ocaklıktaki ocaklık ise bir ailenin irsî idare hakkıdır. Yine de iki anlam bir yerde kesişir: TDV 'Trablusgarp', Karamanlı ailesi döneminde bu eyaletin idaresinin 'ocaklık şekline' dönüştürüldüğünü ve aile içinde miras yoluyla geçtiğini yazar.",
  not:"Emre'nin sorusundaki 'ocaklık/yurtluk' örneği için Anadolu'nun doğusundaki aşiret beylerine verilen sancaklar akla gelir; ancak bu kartta hangi sancakların hangi yıllarda bu statüde olduğu listelenmedi — okunan TDV maddeleri toplu bir liste vermiyor.",
  kesinlik:"kesin",
  olay:["1519-09-01","1534-09-22","1551-08-15"],
  kaynak:"TDV: eyalet · TDV: sancak · TDV: yurtluk · TDV: hukumet · TDV: garp-ocaklari · TDV: cezayir · TDV: ocak · TDV: trablusgarp",
  ic_not:"yurtluk-ocaklik 302; TDV `yurtluk` maddesi 'bk. OCAKLIK' diyor — `ocaklik` slugu DENENMEDİ (zaman), sonraki dalga için aday. Kürt hükümet/yurtluk-ocaklık sancaklarının adlı listesi bu yüzden yazılmadı."
},

{ id:"statu-iki-tarihyazimi", tur:"tartisma",
  ad:"'İç isyan' mı, 'bağımsızlık savaşı' mı? Bağlı yapıların hikâyesi niçin iki farklı dille anlatılır",
  kisa:"Osmanlı kaynakları bağlı bir yapının başkaldırısını çoğu zaman bir itaatsizlik olarak, bu yapıların kendi ulusal tarihyazımları ve Avrupa kaynakları ise ayrı devletlerin mücadelesi olarak anlatır. İki bakış da kaynaklarda gerçek bir şeye dayanır.",
  metin:"Emre'nin sorusu 1594'teki üç voyvodalık ayaklanmasından doğdu: yabancı kaynaklarda Erdel, Eflak ve Boğdan ayrı devletler gibi, Osmanlı kaynaklarında bir iç isyan gibi görünüyor. TDV'nin maddeleri bu ayrışmanın dayandığı iki gerçeği birlikte gösterir. BİR — Bu yapılar gerçekten kendi hükümdarı, kilisesi, soylusu ve dış bağlantıları olan siyasi birimlerdi. TDV 'Eflak', 1444'teki Segedin düzenlemesinde voyvodanın İstanbul'a haraç verip Macar kralına tâbi olduğu 'ikili bir hükümranlık' kurulduğunu yazar. 'Erdel', Uzun Harp yıllarında (1593-1606) prensin Habsburglarla ve bir ara Eflak beyi Mihail'le antlaşmalar yapıp geçici olarak onlara tâbi olduğunu kaydeder. Yani o yıllarda Erdel'in kime bağlı olduğu, bakılan belgeye göre değişir. İKİ — Osmanlı bu bağı bir hukuk ilişkisi olarak görüyordu ve onu diplomaside savundu. TDV 'Boğdan', Karlofça görüşmelerinde (1699) Osmanlı murahhaslarının Boğdan'ın 'hür bir ülke' olduğunu, kılıçla değil kendi rızasıyla Osmanlı'ya tâbi olduğunu ve bu yüzden Lehistan'a verilemeyeceğini söylediklerini aktarır. Aynı şekilde TDV 'Kırım', hanlıkla 1475'te bir tâbiiyet belgesi imzalanmadığını, hanın padişahın dostlarını dost, düşmanlarını düşman saymayı ve onu hâmi tanımayı üstlendiğini belirtir. ADLAR DA İKİYE AYRILIR — TDV 'Garp ocakları', Avrupa kaynaklarının Cezayir, Tunus ve Trablusgarp için 'régence', 'regency', 'états barbaresques' gibi naiplik ve devlet çağrışımlı adlar kullandığını, Osmanlı kaynaklarının ise 'beylerbeyilik' ve daha sonra 'ocak' dediğini yazar ve farkı yöneticilerin iç işlerdeki geniş yetkisine, seçimle gelmelerine bağlar. SONUÇ — 'İç isyan' demek bağlılık ilişkisinin hukuki yüzünü, 'bağımsızlık mücadelesi' demek o yapının kendi siyasi varlığını öne çıkarır. Bir olayı anlatırken hangi kelimenin seçildiği, çoğu zaman olayın kendisinden çok anlatanın bakış açısını gösterir.",
  not:"Bu kart hangi dilin 'doğru' olduğuna karar vermez. Haritada bu dönemin nasıl renklendirileceği ayrı bir veri kararıdır ve bu kartın konusu değildir.",
  kesinlik:"tartismali",
  olay:["1444-06-12","1594-08-28","1595-10-01","1699-01-26|ilk büyük toprak"],
  kaynak:"TDV: eflak · TDV: murad-ii · TDV: erdel · TDV: bogdan · TDV: kirim · TDV: garp-ocaklari",
  ic_not:"H-0002'nin 'renk görünümünü vassaldan müstakile mi çevirelim' sorusu BU PAKETİN İŞİ DEĞİL (Oturum 0 / veri kararı) — kart bilerek hüküm vermiyor. Koordinatöre ayrıca bildirildi. 'Ulusal tarihyazımları' ifadesi kisa'da genel bir ayrım olarak geçiyor; Romen/Macar tarihyazımından doğrudan bir eser okunmadı."
},

// ─── BAĞLI YAPILAR ──────────────────────────────────────────────────────────

{ id:"statu-eflak", tur:"tartisma",
  ad:"Eflak: ikili hükümranlıktan tâbi voyvodalığa",
  kisa:"Eflak hiçbir zaman eyalet yapılmadı; toprağı tımara bölünmeden yerli voyvodalarca yönetilen, haraç veren tâbi bir voyvodalık olarak kaldı — ama bağlılığın içeriği yüzyıldan yüzyıla değişti.",
  metin:"Terim: tâbi (vasal) · haraçgüzâr. Dönemler (TDV 'Eflak'): XIV. yüzyılın ikinci yarısında voyvodalar önce Macar kralının tâbiliğini kabul etti. 1444 Segedin düzenlemesi bir 'ikili hükümranlık' kurdu: Eflak İstanbul'a haraç verecek, voyvoda Macar kralına tâbi kalacaktı. Fâtih'in 1462 seferinin ardından tahta çıkarılan Radu, TDV'nin ifadesiyle İstanbul'a tam anlamıyla tâbi oldu; Osmanlı böylece Macar hükümranlık iddialarını da etkisizleştirdi. XVI. yüzyıl boyunca Eflak Osmanlı'ya tâbi olarak yerli hanedanlarca yönetilmeye devam etti; ama voyvodalar komşu Hıristiyan hükümdarlarla bağlantı kurmaktan ve onlardan yardım istemekten geri durmadı — 1594 ayaklanması bu çizginin en uç noktasıdır. Tuna üzerindeki İbrail ve Yergöğü limanları bir süre doğrudan Osmanlı'ya bağlı kaldı; yani voyvodalığın içinde doğrudan idare edilen noktalar vardı. XVIII. yüzyılda Boğdan'la birlikte voyvodalığa yerli prensler yerine İstanbul'dan atanan Rum beyler getirildi (TDV 'Boğdan'). Niçin eyalet değil: TDV'nin başka bir kartta da aktardığı gibi, Tuna ötesi toprağı doğrudan savunmak ve yönetmek pahalıydı; yerli idare aynı denetimi daha ucuza sağlıyordu. Sonu: 1859'da Boğdan'la birleşme ve Romanya'nın doğuşu.",
  kesinlik:"kesin",
  olay:["1444-06-12","1462-06-01|Eflak","1594-08-28","1595-10-01","1859-01-24"],
  kaynak:"TDV: eflak · TDV: murad-ii · TDV: bogdan · TDV: haracguzar",
  ic_not:"'Niçin eyalet değil' cümlesi ekokuma.js `tabi-devlet-vassallik` kartının TDV eflak/murad-ii dayanağına yaslanıyor; o kartın bağ listesi okunmadan tekrar edilmedi. 1849 Baltalimanı ortak Osmanlı-Rus himayesi TDV eflak gövdesinde aranmadı → kartta yok."
},

{ id:"statu-bogdan", tur:"tartisma",
  ad:"Boğdan: 'kılıçla değil rızasıyla tâbi' bir prenslik",
  kisa:"Boğdan İstanbul'un fethinden sonra Osmanlı'ya tâbi oldu; iç işlerine karışılmadı, eyalet yapılmadı. Osmanlı diplomasisi bu bağı 1699'da Boğdan'ın kendi rızasına dayanan bir ilişki olarak savundu.",
  metin:"Terim: tâbi · haraçgüzâr. Dönemler (TDV 'Boğdan'): II. Murad döneminde başlayan ilişkiler İstanbul'un fethinden sonra tâbiiyete dönüştü. TDV'ye göre Fâtih prensliğin iç işlerine karışmadı ve onu Bulgaristan ya da Macaristan gibi bir paşanın yönettiği bir eyalete çevirmedi. XVI. yüzyılda voyvodaların Osmanlı'ya başkaldırdığı, komşu Erdel'i işgal ettiği ya da Uzun Harp sırasında Habsburg ittifakına girip Erdel prensine tâbi olmayı kabul ettiği dönemler oldu. 1699 Karlofça görüşmelerinde Osmanlı murahhasları Boğdan'ın 'hür bir ülke' olduğunu ve Osmanlı'ya kılıçla değil kendi rızasıyla tâbi olduğunu ileri sürerek onu Lehistan'a bırakmayı reddetti — bu, bağlılığın Osmanlı gözünde bir fetih değil bir sözleşme olarak nasıl sunulduğunu gösteren nadir bir örnektir. III. Ahmed döneminde Boğdan ve Eflak voyvodalıklarına yerli prensler yerine Bâbıâli'nin denetiminde kalacak Rum beylerinin atanması uygun görüldü; II. Mahmud 1822'de yeniden yerli bir prensi voyvoda yaptı. Prut ile Dinyester arası bölge 1812'de Rusya'ya geçti. Voyvodalık içinde doğrudan Osmanlı idaresinde bir sancak da doğdu: Hotin.",
  kesinlik:"kesin",
  olay:["1456-06-01","1475-01-10","1538-09-01|Boğdan","1713-06-24|Hotin","1859-01-24"],
  kaynak:"TDV: bogdan · TDV: haracguzar",
  ic_not:"'Prut-Dinyester 1812' — TDV bogdan, Rusların Besarabya adını verdiği bölgenin 1918'e dek 106 yıl Rus idaresinde kaldığını yazıyor ⇒ 1918-106 = 1812 TÜRETİLDİ (§4: iki cümleden türetmek meşru, alıntıya yazılmadı). Hotin sancağı cümlesinin tarihi atlasın 1713-06-24 maddesinden değil; kart tarih vermedi, yalnız bağlandı — TDV gövdesinde Hotin tarihi ARANMADI."
},

{ id:"statu-erdel", tur:"tartisma",
  ad:"Erdel: muhtar prenslik, haraçgüzâr voyvodalık",
  kisa:"1541'den 1699'a kadar Erdel içeride kendi prensleri, soyluları ve Protestan kiliseleriyle yaşayan, dışarıda İstanbul'a bağlı hareket eden haraçgüzâr bir yapıydı.",
  metin:"Terim: haraçgüzâr · muhtar voyvodalık/prenslik. Dönemler (TDV 'Erdel'): Mohaç sonrası taht kavgasında Habsburg Ferdinand'a yenilen János Szapolyai Kanûnî'ye itaat edip Osmanlı himayesine girdi ve bu destekle Macar ve Erdel kralı oldu. Budin'in 1541'de doğrudan Osmanlı idaresine alınmasıyla birlikte Erdel ayrı bir yapı olarak Osmanlı'ya bağlı, haraçgüzâr bir voyvodalık hâline geldi. TDV'ye göre yaklaşık yüz elli yıl boyunca iç işlerinde geniş muhtariyete sahipti, dış işlerinde İstanbul'a bağlı hareket etti; bu muhtar ortamda Protestanlık hızla yayıldı. Osmanlı-Habsburg savaşları sırasında (1593-1606) Prens Zsigmond Báthory Habsburglarla ve bir ara Eflak beyi Mihail'le anlaşmalar yapıp geçici olarak onlara tâbi oldu. Buna rağmen Protestan Erdel soylularının önemli bir kısmı, imtiyazlarını Katolik Habsburglara karşı korumak için Osmanlı tarafında kaldı — yani 'Erdel Osmanlı'ya karşı ayaklandı' cümlesi prensin tercihini anlatır, bütün ülkenin değil. 1699 Karlofça Antlaşması'yla Erdel Avusturya'ya bırakıldı ve Habsburg İmparatorluğu'nun bir vali tarafından yönetilen parçası oldu.",
  kesinlik:"kesin",
  olay:["1541-08-29|ilhakı","1594-08-28","1658-08-27","1687-08-12","1699-01-26|ilk büyük toprak"],
  kaynak:"TDV: erdel · TDV: haracguzar · TDV: suleyman-i",
  ic_not:"'Budin doğrudan idareye alındı' cümlesi bu turda TDV suleyman-i gövdesinden doğrulandı: küçük krala Erdel tarafları verildi, Budin doğrudan Osmanlı beylerbeyilik merkezi oldu (1541)."
},

{ id:"statu-kirim-hanligi", tur:"tartisma",
  ad:"Kırım Hanlığı: belgesiz bir bağlılık, padişah adına hutbe, Giray adına para",
  kisa:"Kırım hanları 1475'ten 1774'e kadar Osmanlı himayesindeydi; ama bu ilişkiyi tanımlayan bir tâbiiyet belgesi yoktu ve hanlık kendi parasını basmayı sürdürdü.",
  metin:"Terim: himaye · tâbi (ama haraçgüzâr değil). Dönemler (TDV 'Kırım', Halil İnalcık'ın bölümü): 1475'te Kefe ve kıyıdaki Ceneviz kolonileri alınıp sancak yapıldı; yarımadanın geri kalanı Osmanlı himayesindeki Kırım hanlarına kaldı. İnalcık'a göre genellikle sanıldığının aksine ortada bir tâbiiyet belgesi yoktur: Gedik Ahmed Paşa ile yapılan anlaşmada Mengli Giray, padişahın dostlarını dost ve düşmanlarını düşman saymayı, onu hâmi olarak tanımayı üstlenmişti. Bağın somut işaretleri zamanla eklendi: II. İslâm Giray, tahtını Osmanlı yardımıyla koruyabildikten sonra hutbede ilk kez padişahın adını da okuttu; ama para her zaman Giraylar adına basıldı. Hanlar Osmanlı seferlerine çağrılıyordu; II. Gazi Giray Macaristan'daki savaşlara olduğu kadar Anadolu'da Celâlîlere karşı mücadeleye de katıldı. Kırım'ın içinde doğrudan Osmanlı idaresindeki Kefe sancağı ile hanın yönettiği topraklar yan yana duruyordu. Sonu: Küçük Kaynarca Antlaşması'nın (21 Temmuz 1774) üçüncü maddesi Kırım, Bucak ve Kuban Tatarlarını serbest ve tam anlamıyla bağımsız tanıdı; ne Rusya ne Osmanlı hanın seçimine karışabilecekti. 1779 Aynalıkavak düzenlemesiyle Osmanlı Şâhin Giray'ı han tanıdı; 1783'te Rusya yarımadayı ilhak etti.",
  not:"Kırım'da 'doğrudan idare' ile 'himaye' aynı yarımadada birlikte vardı: Kefe sancağı eyalet sistemine, hanın toprakları himaye ilişkisine aitti.",
  kesinlik:"kesin",
  olay:["1475-06-06","1774-07-21","1779-03-10","1783-04-19"],
  kaynak:"TDV: kirim",
  ic_not:"Kaynarca sonrası hilâfet/dinî bağ maddesi TDV kirim gövdesinde bu turda okunmadı (atlas madde başlığı bunu söylüyor ama atlas dayanak değil) → kartta yazılmadı. İslâm Giray'ın hanlık yılları gövdede verilmedi (bağlamdan XVI. yy ortası) → yıl yazılmadı."
},

{ id:"statu-hicaz-mekke-serifligi", tur:"tartisma",
  ad:"Hicaz ve Mekke şerifleri: imtiyazlı yerli emirlik, Osmanlı idaresi içinde",
  kisa:"Hicaz 1517'de savaşsız Osmanlı'ya geçti; Mekke emirleri (şerifler) eski ayrıcalıklarını korudu ama beratla atanan ve padişah adına hutbe okutan emirler oldular. Ne haraçgüzâr ne vasaldiler — imtiyazlı bir yerel yönetimdiler.",
  metin:"Terim: imtiyazlı yerel emirlik · Osmanlı eyaleti (Hicaz). Dönemler (TDV 'Mekke', 'Hicaz'): Yavuz Sultan Selim Kahire'deyken Mekke'ye asker göndermeyi düşündü; ancak Mekke Emîri Şerif Berekât oğlu Ebû Nümey başkanlığındaki bir heyetle itaatini bildirince bundan vazgeçti ve Berekât'ın emirliğini onayladı. Berekât, Selim'in gönderdiği hil'ati giyip onun adına hutbe okuttu; TDV bunu Osmanlı hâkimiyetinin fiilen başladığı an olarak görür. TDV 'Hicaz' bölgenin 'sulhen' Osmanlı yönetimine geçtiğini, Mekke emirlerinin eski imtiyazlı statülerinin aynen korunduğunu, emirlerin vezir rütbesiyle ve beratla atandığını, bütün Hicaz'da padişah adına hutbe okunduğunu yazar. Şehrin mali ve idari işleri başlangıçta Mısır beylerbeyilerine bağlandı; İstanbul ve Mısır'dan her yıl surre ve başka tahsisatlar gönderilirdi. Emirlik tek bir ailenin değil, birbiriyle rekabet eden şerif kollarının elindeydi ve şeriflerle Osmanlı görevlileri arasında sık sık anlaşmazlık çıktı. Sonu: Şerif Hüseyin Haziran 1916'da İngilizlerle anlaşarak ayaklandı ve 3 Kasım 1916'da başkenti Mekke olan Hicaz Hâşimî Krallığı'nı kurdu.",
  not:"Hicaz'da 'bağlılık' vergi yönünde tersine işliyordu: şerifler İstanbul'a haraç göndermiyor, tersine İstanbul ve Mısır'dan Haremeyn'e düzenli para ve erzak gidiyordu. Bu yüzden Balkan voyvodalıkları için kullanılan 'haraçgüzâr' kelimesi Hicaz'a uygulanamaz.",
  kesinlik:"kesin",
  olay:["1517-07-06","1803-04-30","1813-01-23","1916-06-10"],
  kaynak:"TDV: mekke · TDV: hicaz · TDV: serif",
  ic_not:"Ölü: mekke-serifligi · mekke-emirligi · mekke-emirleri (302). `serif` 200 ama 2,5 KB yönlendirme kütüğü (gövde yok) — kaynak listesinde duruyor çünkü slug canlı, ama içerik dayanağı mekke+hicaz. 'Tersine işleyen vergi' notu bir çıkarımdır: TDV mekke surre/tahsisat akışını yazıyor, 'haraç göndermiyordu' cümlesi haracguzar listesinde Hicaz'ın bulunmamasından ve mekke gövdesinde haraç geçmemesinden çıkarıldı."
},

{ id:"statu-garp-ocaklari-cezayir", tur:"tartisma",
  ad:"Cezayir ve Garp ocakları: sâlyâneli eyaletten seçilmiş dayılara",
  kisa:"Avrupa belgelerinde 'regency' ya da 'devlet', Osmanlı belgelerinde 'beylerbeyilik' ve 'ocak': Cezayir, Tunus ve Trablusgarp kâğıt üzerinde Osmanlı eyaletiydi, uygulamada yarı müstakil askerî yönetimlerdi.",
  metin:"Terim: eyalet (sâlyâneli) · ocak · yarı müstakil. Dönemler (TDV 'Garp ocakları', 'Cezayir'): Oruç ve Hızır Reis kardeşler 1516'da Cezayir'i aldı; Hızır Reis'in Yavuz Sultan Selim'e bağlılık bildirmesiyle bölge 'padişahın ülkesi' ilan edildi, asker ve top gönderildi, hutbe padişah adına okunmaya başladı. 1534'te Hızır Reis kaptanpaşa ve beylerbeyi yapılınca doğrudan Osmanlı idaresi kuruldu. Trablusgarp 1551'de, Tunus 1574'te aynı sisteme katıldı. 1609 tarihli Ayn Ali Efendi listesinde (TDV 'Eyalet') üçü de 'sâlyâneli' eyaletlerdendir: vergileri tımara dağıtılmaz, hazine adına toplanırdı. TDV Cezayir'deki Osmanlı yönetimini dört devreye ayırır: beylerbeyiler (1518-1587), paşalar (1587-1659), ağalar (1659-1671) ve dayılar (1671-1830). Tunus'ta ve Trablusgarp'ta XVIII. yüzyıl başından itibaren yerel hanedanlar kuruldu; Cezayir'de ise seçimle gelen ama atanmaları İstanbul'ca onaylanan dayılar iktidarı aldı. Yine de hutbe padişah adına okunmaya, para onun adına basılmaya devam etti. TDV'ye göre Avrupa kaynaklarının 'régence', 'regency' ya da 'états barbaresques' demesinin sebebi, yöneticilerin iç işlerde kazandığı geniş yetki ve seçimle iş başına gelmeleriydi. Sonu: Cezayir 1830'da Fransa'ya geçti; TDV 'Trablusgarp' Karamanlı dönemini 1711-1835 olarak verir ve ardından eyaletin merkezî idareye doğrudan bağlandığı ikinci valiler dönemini sayar.",
  kesinlik:"kesin",
  olay:["1519-09-01","1534-09-22","1551-08-15","1574-08-25","1671-01-01","1711-03-01","1830-07-05"],
  kaynak:"TDV: garp-ocaklari · TDV: cezayir · TDV: eyalet · TDV: trablusgarp",
  ic_not:"1835 cümlesi ilk yazımda doğrulanmamıştı; aynı turda TDV `trablusgarp` gövdesinden DOĞRULANDI ('Karamanlılar döneminde (1711-1835)' + 'merkezî idareye doğrudan bağlandığı ikinci valiler dönemi') ve cümle kaynağın söylediği biçime çekildi. Tunus 1574 ve Trablusgarp 1551 TDV garp-ocaklari'nda okundu. Cezayir 1516 (TDV cezayir: şehir 1516'da alındı); atlas maddesi 1519-09-01 'bağlanması' — ikisi farklı olay, çelişki değil."
},

{ id:"statu-dubrovnik", tur:"tartisma",
  ad:"Dubrovnik (Raguza): ticaret imtiyazı karşılığı haraç",
  kisa:"Dubrovnik'in Osmanlı'ya bağlılığı toprak değil ticaret ilişkisiydi: şehir cumhuriyeti ahidnâmelerle tanınan serbest ticaret hakkı karşılığında yıllık haraç ödedi ve dört buçuk asır bağımsız yaşadı.",
  metin:"Terim: haraçgüzâr · himaye. Dönemler (TDV 'Dubrovnik'): Dubrovnik kaynaklarına göre 1365 tarihli bir ahidnâme şehri Osmanlı'nın haraçgüzârı ve dolayısıyla himayesindeki bir yer yaptı; karşılığında Dubrovnik tüccarları Osmanlı topraklarında serbestçe ticaret yapabilecekti. Ahidnâme her yeni padişahla yenilendi ve haraç zamanla arttı: başta yıllık 500 duka, 1442 fermanıyla 1000 altın değerinde gümüş bir kap, 1459 ahidnâmesiyle 1500 filori; 1478'de haraç gümrük resmiyle birleştirilip 12.500 filoriye çıkarıldı. Cumhuriyetin, Osmanlı'ya karşı kurulan bir ittifaktan cesaret alıp haraçgüzârlıktan kurtulmaya ve Osmanlı limanlarını ele geçirmeye heveslendiği bir dönem de oldu; bu girişim yeniden ahidnâme istemekle sonuçlandı. Haraç her yıl İstanbul'a gönderilen elçilerle hazineye teslim edilirdi. TDV 'Haraçgüzâr', XVI. yüzyılda bazı Avrupa gemilerinin Dubrovnik'in imtiyazından yararlanmak için onun bayrağıyla Osmanlı sularına girdiğini de kaydeder. Sonu: Fransızlar 27 Mayıs 1806'da şehri alarak cumhuriyete son verdi.",
  not:"Dubrovnik örneği 'haraçgüzâr' kelimesinin toprak ya da iç yönetim üzerinde bir hak anlamına gelmediğini en açık gösteren örnektir: Osmanlı şehirde vali ya da asker bulundurmadı.",
  kesinlik:"kesin",
  olay:["1459-03-07","1806-05-27"],
  kaynak:"TDV: dubrovnik · TDV: haracguzar",
  ic_not:"Not alanındaki 'vali ya da asker bulundurmadı' cümlesi TDV dubrovnik gövdesinde garnizon/vali geçmemesinden çıkarıldı (okunan 22 hit); açık bir TDV cümlesi DEĞİL — 'yokluktan çıkarım'. Kaldırılması tercih edilirse yalnız `not` alanı değişir."
},

{ id:"statu-fas", tur:"tartisma",
  ad:"Fas: 'Osmanlı himayesi' mi, müttefik ve rakip bir sultanlık mı?",
  kisa:"Fas bazı anlatılarda 1578'den sonra 'Osmanlı himayesinde' gösterilir. TDV'nin Fas maddesi ise ilişkiyi destek, elçi ve hediye teatisi, zaman zaman da gerginlik olarak anlatır — bir tâbiiyet ya da haraç kaydı vermez.",
  metin:"Terim: tartışmalı — destek/nüfuz ilişkisi · kısa süreli doğrudan hâkimiyet (1554). Dönemler (TDV 'Fas', Osmanlı-Fas münasebetleri bölümü): İlişkiler Kanûnî döneminde başladı ve Osmanlı'nın Cezayir'deki gücüyle orantılı biçimde gelişti; TDV bunların çoğunlukla iyi niyet elçileri ve hediye teatisinden öteye geçmediğini yazar. 1554'te Cezayir'den gelen Osmanlı kuvvetleri Vattâsî Ebû Hassûn'la birlikte Fas şehrine girdi; şehir yaklaşık dokuz ay Osmanlı hâkimiyetinde kaldı. 1576'da Osmanlı desteğiyle tahta çıkan Abdülmelik, 4 Ağustos 1578'de Vâdilmehâzin'de (Kasrülkebîr) Portekiz ordusunu yendi ve bu savaşta öldü. Yerine geçen Ahmed el-Mansûr İstanbul'a zaferi bildiren bir heyet gönderdi; ama padişahın tebrik hediyelerini az bulup cevabı geciktirmesi araları açtı ve Kılıç Ali Paşa komutasında bir donanma Fas'a yöneldi. El-Mansûr değerli hediyeler ve önde gelen adamlarını göndererek krizi yatıştırdı; 1582'deki şehzade sünnet düğününe Fas elçileri 4000 altınla geldi. Aynı dönemde el-Mansûr, peygamber soyundan geldiğini öne sürerek halife unvanını kendisinin taşıması gerektiğini söylüyordu. Sonraki yüzyıllarda ilişkiler sık sık gerginleşti.",
  not:"Değerlendirme: TDV'nin anlattığı tablo bir 'himaye'den çok, Portekiz ve İspanya'ya karşı çıkarları zaman zaman örtüşen, zaman zaman halifelik iddiasıyla çatışan iki sultanlığın ilişkisidir. 1582'deki 4000 altın bir düğün hediyesi olarak aktarılır, haraç olarak değil. Fas'ı 'Osmanlı'ya bağlı' sayan anlatılar varsa, dayandıkları belge ayrıca sorulmalıdır.",
  kesinlik:"tartismali",
  olay:["1578-08-04","1659-01-01|Alevî"],
  kaynak:"TDV: fas",
  ic_not:"Doğrulandı (bu tur): Abdülmelik'in 1578 savaşında öldüğü ve 8 Ocak 1554'te Fas'a girenlerin Osmanlı kuvvetleri olduğu TDV fas gövdesinde açık. 🔴 A3'E (kronoloji sahibi): olaylar_ek5.js 1578-08-04 madde başlığı 'Fas'ın Osmanlı himayesine girmesi' diyor; okunan TDV fas gövdesi 'himaye' demiyor (Abdülmelik 'Osmanlı desteğindeki', el-Mansûr hediye krizi, halife iddiası). Başlık kaynakla gerilimli — rapor §4'te. 1576 tahta çıkış günü (16 Temmuz 1576) TDV'de var, kartta yalnız yıl."
},

{ id:"statu-lehistan", tur:"tartisma",
  ad:"Lehistan: ahidnâmeli komşu, dört yıllık haraç",
  kisa:"Lehistan hiçbir dönemde Osmanlı'ya tâbi bir devlet olmadı; ilişkisi ahidnâmelerle düzenlenen bir barış ilişkisiydi. Tek istisna 1672 Bucaş Antlaşması'yla kabul edilen ve 1676'da kaldırılan haraçtır.",
  metin:"Terim: ahidnâmeli barış ortağı · savaş sonrası haraçgüzâr (1672-1676). Dönemler (TDV 'Polonya'): İki devlet arasındaki ilk barış antlaşması 22 Mart 1489 tarihli ahidnâmedir; 1553 ahidnâmesi Kanûnî hayatta kaldıkça geçerli olduğu için literatürde 'ebedî barış' diye anılır. 1672'de Osmanlı ordusu Kamaniçe'yi aldı; Lemberg önünde barışı kabul etmek zorunda kalan kral 18 Ekim 1672 Bucaş Antlaşması'yla Podolya ve çevresini bırakmayı ve ayrıca haraç ödemeyi kabul etti. Antlaşma Polonya meclisinde onaylanmadı, savaş sürdü; 27 Ekim 1676 Zuravno (İzvança) Antlaşması'yla Polonya toprak kayıplarını tanıdı ama verginin kaldırılmasını sağladı. Podolya yirmi yedi yıl Kamaniçe eyaleti adıyla Osmanlı idaresinde kaldı ve 1699 Karlofça Antlaşması'yla Polonya'ya geri döndü. Statü farkı: TDV 'Haraçgüzâr' maddesinin ayrımına göre, bir savaşı kaybedip barış şartı olarak haraç ödemeyi kabul eden devletler de haraçgüzâr diye anılır, ama bu, Eflak ya da Boğdan'ın sürekli tâbiiyetinden farklı bir durumdur. Lehistan'ın 1672-1676 arasındaki durumu bu ikinci türdendir.",
  kesinlik:"kesin",
  olay:["1672-10-18","1699-01-26|Podolya"],
  kaynak:"TDV: polonya · TDV: haracguzar · TDV: lehistan",
  ic_not:"`lehistan` 200 ama 2,5 KB 'bk. POLONYA' kütüğü; içerik `polonya`dan. 1553 ahidnâmesinin 'ebedî barış' adı TDV'de Kołodziejczyk'e atıfla geçiyor (gövdede 'Kotodziejczyk' diye bozuk yazılmış)."
},

{ id:"statu-ukrayna-kazak-hatmanligi", tur:"tartisma",
  ad:"Ukrayna Kazak Hatmanlığı: müttefik, himaye arayan, sonunda Osmanlı hâkimiyetini tanıyan hatman",
  kisa:"Kazak Hatmanlığı Osmanlı için önce bir müttefik (1648), sonra himayesi pazarlık konusu bir komşu, 1668-1672 arasında da hâkimiyetini tanıyan bir hatmanlıktı. Aynı olayı Leh kaynakları bir isyan, Ukrayna tarihi bir devlet kurma çabası olarak anlatır.",
  metin:"Terim: müttefik · himaye talebi · tâbi hatmanlık (Sağ Yaka, 1668-1672 dolayı). Dönemler (TDV 'Ukrayna'): Bogdan Hmelnitski'nin 1648'de başlattığı Kazak ayaklanması Lehistan'ı iki savaşta yendi. Osmanlı ve Kırım Hanlığı ilk aşamada onun müttefikiydi; TDV Haziran 1648'de Kazak Hatman Devleti ile Osmanlı arasında bir ittifak yapıldığını kaydeder. Hmelnitski Osmanlı himayesinden umudunu kesince Moskova'ya yöneldi ve 1654 Pereyaslav Antlaşması'yla çara bağlandı. 1667 Andrusovo Antlaşması Ukrayna'yı Lehistan ile Rusya arasında paylaştırıp Osmanlı'yı dışarıda bıraktı. Osmanlı bunu tanımadı: Sağ Yaka hatmanı Petro Doroşenko ile birlikte Lehistan'a yürüdü; Doroşenko 1668'de bütün Ukrayna'nın hatmanı unvanını aldı ve TDV'nin ifadesiyle Ukrayna Türk nüfuzu altında birleşti. TDV'ye göre Osmanlı belgelerinde 'Ukrayna' adı siyasi bir kavram olarak ilk kez, Doroşenko Osmanlı hâkimiyetini tanıdığında ona gönderilen 1672 tarihli mektupta kullanıldı; altı yıl sonra Yurii Hmelnitski hatman atanırken eski 'Rus' adının yerini aldı. İki bakış: TDV 'Polonya' maddesi aynı yılları Osmanlı'nın 'Polonya tacına bağlı Kazak hatmanı Doroşenko'nun isyanını' desteklemesi olarak anlatır; 'Ukrayna' maddesi ise bir 'Hatman Devleti'nden söz eder. Aynı kişi bir kaynakta asi bir tebaa, ötekinde bir devlet başkanıdır.",
  kesinlik:"kesin",
  olay:["1654-01-08","1667-02-09","1672-10-18"],
  kaynak:"TDV: ukrayna · TDV: polonya",
  ic_not:"Ölü: dorosenko · petro-dorosenko · hmelnitski · bogdan-hmelnitski · zaporog-kazaklari · kazak-hetmanligi · hetman (302). `kazaklar` 200 ama Orta Asya KAZAKLARI maddesi (yanlış madde, §4②) — kullanılmadı. Doroşenko'nun Osmanlı'ya tâbiiyetinin kesin başlangıç yılı TDV ukrayna'da tek bir tarih olarak verilmiyor (1668 unvan · 1672 nâme) → başlıkta 'dolayı'."
},

{ id:"statu-bizans-haracguzar", tur:"tartisma",
  ad:"Bizans: haraç veren imparatorluk (1333-1453)",
  kisa:"Bizans son yüz yılında Osmanlı'ya birkaç kez haraç ödedi ve bir dönem Osmanlı ordusuna asker verdi. Osmanlı gözünde haraçgüzâr, kendi gözünde hâlâ Roma imparatorluğuydu.",
  metin:"Terim: haraçgüzâr · vasal. Dönemler: TDV 'Orhan' maddesine göre Ağustos 1333'te İzmit önünde yapılan antlaşmayla imparator, kuşatmanın kaldırılması karşılığında Orhan'a yılda 12.000 altın ödemeyi kabul etti ve böylece Osmanlı emirinin gözünde haraçgüzâr bir ülke durumuna düştü. Aynı madde Bizans'ın yeniden Osmanlı haraçgüzârı olmasının 1371'deki Meriç (Çirmen) zaferiyle gerçekleştiğini yazar. TDV 'Bizans' maddesi de bu zaferden sonra Bizans'ın Türk hâkimiyetini tanıyıp haraç ödemeyi ve Osmanlı ordusunda hizmet etmeyi kabul ettiğini, artık 'vasal devlet' durumuna düştüğünü söyler: İmparator V. Ioannes, vasallık görevi gereği I. Murad'a Anadolu seferinde eşlik ederken oğlu IV. Andronikos, Şehzade Savcı Bey'le birlikte babalarına karşı ayaklandı (1373). 1379'da V. Ioannes tahtını Türk yardımıyla geri aldı ve karşılığında yeniden haraç ile savaşta asker göndermeyi kabul etti. 1422 kuşatmasından sonra Bizans yine haraç ödemeyi kabul ederek II. Murad'la anlaştı. TDV 'Haraçgüzâr' Bizans'ın kesin ilhaktan önceki haracını 30.000 altın olarak verir. 1453 kuşatmasında son imparator XI. Konstantinos teslim teklifini reddetti ve yalnız haraç ödemeyi kabul edebileceğini bildirdi.",
  not:"Bizans örneği bir statünün iki taraftan nasıl farklı okunduğunu gösterir: Osmanlı için vergi veren bir komşu, Bizans için tahtın korunması karşılığı ödenen bir bedel. İmparatorun bir Osmanlı seferine katılması ise ilişkinin vergiden fazlası olduğunu gösterir.",
  kesinlik:"kesin",
  olay:["1333-08-01","1373-05-01","1373-05-15","1403-06-15","1453-05-29|Bizans İmparatorluğu sona erdi"],
  kaynak:"TDV: orhan · TDV: bizans · TDV: haracguzar",
  ic_not:"🔴 A3'E: olaylar_ek.js 1373-05-01 'Bizans'ın Osmanlı vasallığına girişi' — TDV orhan ve bizans vasallığı 1371 Meriç/Çirmen zaferinin sonucu olarak veriyor; 1373 TDV'de Savcı-Andronikos isyanının yılı. Başlığın günü kaynakla gerilimli, rapor §4. 1403-06-15 Gelibolu Antlaşması'na bağ yalnız kronolojik bağlam içindir, kartta 1403 hakkında iddia yok."
}

];
