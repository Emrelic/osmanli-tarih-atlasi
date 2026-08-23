// =====================================================================
// FRANSA — DEVLET KRONOLOJİSİ (FRANSA KRONOLOJİ oturumu, 21 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    `data/devletler.js`teki `fransa` ve `fransa-cumhuriyet` künyeleriyle
//    birleştirmeyi KOORDİNATÖR yapar. Bu dosya `devletler.js`e DOKUNMAZ.
//
// ── ŞEMA — KRONOLOJI-SARTNAME.md §3, M-0873 kesin hâli ────────────────
//   `onem`  1-5  BU DOSYANIN DEVLETİ (Fransa) için ağırlık — dosyadan
//                dosyaya DEĞİŞİR. Ölçüt: bu olay FRANSA'nın tarihinin
//                akışını ne kadar değiştirdi?
//   `dunya` 1-5  OLAYIN kendisine ait — HER DOSYADA AYNI olmak ZORUNDA.
//                Ölçüt: devletler sistemini ne kadar değiştirdi?
// ⚠️ İkisi de İYİLİK/KÖTÜLÜK skalası DEĞİL. 1815 Waterloo bir Fransız
//    YENİLGİSİDİR ve burada `onem:5`tir.
//
// 🔴 `dunya` HİZALAMASI — paylaşılan olaylarda ÖNCEKİ dosyalarla birebir:
//    1648-10-24 (Vestfalya) → 5   [habsburg dosyasının kendi ilanı]
//    1806-08-06 (Kutsal Roma İmp. sonu) → 5   [habsburg]
//    1815-06-09 (Viyana Kongresi Nihaî Senedi) → 5   [habsburg]
//    1918-11-11 (Mondros/Silah bırakışması dönemi — Cihan Harbi'nin sonu) → 5 [habsburg]
//    Bu dört tarih dışındaki bütün `dunya` değerleri BU DOSYANIN kendi
//    tercihidir; paylaşılan bir olayla çakışırsa sonraki oturum hizalar.
//
// ── NİÇİN BU DEVLET BÖYLE ANLATILIYOR ────────────────────────────────
// Emre'nin ölçütü: *"O DEVLETİN O MİLLETİN ÖNEM VERDİĞİ ŞEKİLDE."* Fransız
// tarihyazımının ağırlık merkezi Osmanlı cephesi DEĞİLDİR — merkezde
// **Yüzyıl Savaşları'nın millet kimliğini kuruşu**, **Din Savaşları ve
// mutlakiyetin inşası**, **1789 İhtilâli** ve **Napolyon** vardır.
// Osmanlı-Fransa teması (kapitülasyonlar, Mısır Seferi, Kırım Savaşı,
// Düyûn-ı Umûmiyye, Suriye/Sykes-Picot) OMURGANIN İÇİNDE ama AZINLIKTA
// tutuldu — tıpkı Habsburg ve Venedik dosyalarında ölçülüp düzeltilen
// dengenin burada BAŞTAN kurulması gibi.
//
// ── KAPSAM ───────────────────────────────────────────────────────────
// **1281-1923.** `data/devletler.js` iki künyeye bölünmüş: `fransa`
// (Krallık, 987-1792-09-22) ve `fransa-cumhuriyet` (1792-09-22 → 1923-10-29,
// Cumhuriyet/İmparatorluk/Restorasyon rejim değişiklikleriyle TEK kayıt).
// Bu dosya İKİSİNİ DE tek zaman çizgisinde anlatır; rejim değişiklikleri
// ayrı madde olarak işaretlenir (`tur:"hukumdar"`/`"kurulus"`/`"son"`).
// `devletler.js`teki mevcut 3+8 = 11 kronoloji maddesi bu dosyaya
// DOĞRULANARAK alındı (tarihleri TDV ile çapraz kontrol edildi, bkz. altta).
//
// ── KAYNAK (§4) ──────────────────────────────────────────────────────
// OSMANLI-FRANSA TEMASI: TDV `fransa` maddesi (islamansiklopedisi.org.tr/fransa,
//   HTTP 200, gövdesi bu oturumda okundu — 21 Ağustos 2026). Madde altı
//   bölümden oluşuyor (coğrafya · tarih · Türk-Fransız ilişkileri ·
//   sömürgecilik · İslâmiyet · İslâm araştırmaları) ve Niğbolu 1396'dan
//   Montrö 1936'ya kadar tarihli bir dizi olay veriyor. ⚠️ Ölçülmüş tuzak:
//   `fransa-ihtilali` VE `fransiz-ihtilali` sluglarının İKİSİ DE ÖLÜ (302,
//   curl ile doğrulandı); ihtilâl maddesi ayrı yazılmadı, olaylar `fransa`
//   maddesinden ve genel akademik kaynaktan derlendi.
// FRANSA İÇ TARİHİ (akademik, TDV kapsamıyor — §4 kuralı gereği):
//   Colin Jones, "The Cambridge Illustrated History of France" (Cambridge
//     UP, 1999) — bütün dönem için genel siyasî-kültürel iskelet
//   R.J. Knecht, "The Valois: Kings of France 1328-1589" (Hambledon &
//     London, 2004) ve "The French Renaissance Monarchy: Francis I and
//     Henry II" (2. bs., Longman, 1996) — Valois dönemi
//   Mack P. Holt, "The French Wars of Religion, 1562-1629" (2. bs.,
//     Cambridge UP, 2005) — Din Savaşları
//   John A. Lynn, "The Wars of Louis XIV, 1667-1714" (Longman, 1999) ve
//     "Giant of the Grand Siècle: The French Army 1610-1715" (Cambridge
//     UP, 1997) — XIV. Louis dönemi askerî-siyasî tarih
//   William Doyle, "The Oxford History of the French Revolution" (2. bs.,
//     OUP, 2002) — 1789 İhtilâli
//   Robert Gildea, "France 1870-1914" (2. bs., Routledge, 1996) — III.
//     Cumhuriyet
//   Roger Price, "A Concise History of France" (2. bs., Cambridge UP,
//     2005) — genel tarih, XIX. yüzyıl siyasî kronoloji çapraz kontrolü
// 🔴 DÜRÜSTLÜK BEYANI: bu partide akademik eserlerin gövdesi tek tek
//    WebFetch ile açılmadı (kapsam çok geniş, tek turda mümkün olmadı) —
//    tarihler bu oturumun EĞİTİM VERİSİNDEKİ, yukarıdaki eserlerin ortak
//    ve tartışmasız kabul ettiği STANDART ders kitabı bilgisidir (Bastille
//    14 Temmuz, Nantes Fermanı 13 Nisan 1598, Vestfalya 24 Ekim 1648 gibi).
//    Bu, TDV kaynaklı maddelerden ve gerçekten okunmuş sayfalardan (bkz.
//    Habsburg/Venedik dosyaları) FARKLI bir güven seviyesidir ve HER
//    maddede `kaynak:` alanında açıkça ayırt edildi. Tartışmalı/emin
//    olunmayan gün için `YYYY-MM-01` ya da `YYYY-01-01` yazıldı,
//    UYDURULMADI (§11).
//
// ── ÖLÇÜLEN DURUM (elle yazılmadı, sayıldı — teslim raporunda) ────────
//    (bkz. oturumlar/FRANSA-KRONOLOJI-ILERLEME.md)
// =====================================================================

window.KRONOLOJI_FRANSA = [

{ t:"1285-10-05", b:"IV. (Güzel) Philippe'in tahta çıkışı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","idari"],
  d:"Philippe le Bel, kraliyet bürokrasisini ve merkezî otoriteyi güçlendiren, papalıkla ve Tapınak Şövalyeleri ile çatışacak bir hükümdarlık dönemi başlattı. Fransız krallığının Ortaçağ'ın sonuna doğru Avrupa'nın en güçlü merkezî devletine dönüşmesinin temeli bu dönemde atıldı.",
  kaynak:"standart ders kitabı bilgisi (Colin Jones, 'Cambridge Illustrated History of France') — WebFetch ile doğrulanmadı" },

{ t:"1303-09-07", b:"Anagni Baskını — Papa VIII. Bonifacius'un tutuklanması", tur:"kriz", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["din","siyaset","kriz"],
  d:"Philippe le Bel'in adamı Guillaume de Nogaret, papalık vergilendirme yetkisini kraliyete bağlamak isteyen Bonifacius'u İtalya'da bastırıp kısa süre tutsak etti; Papa bir ay sonra öldü. Olay, kilise ile krallık arasındaki üstünlük dengesinin krallık lehine döndüğü dönüm noktası sayılır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[41.746,13.152] },

{ t:"1309-01-01", b:"Papalığın Avignon'a taşınması", tur:"din", onem:3, dunya:3, kapsam:"dis", yer_id:"Avignon",
  etiket:["din","siyaset"],
  d:"Papa V. Clément, Fransız kraliyetinin baskısı altında makamını Roma'dan Avignon'a taşıdı; yetmiş yıl sürecek 'Babil Esareti' böyle başladı. Papalığın Fransız kraliyetine yakınlığı, sonraki büyük Katolik Bölünmesi'nin (1378) de zeminini hazırladı.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01" },

{ t:"1307-10-13", b:"Tapınak Şövalyeleri'nin tutuklanması", tur:"din", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["din","siyaset","kriz"],
  d:"Philippe le Bel, borçlu olduğu ve topraklarına göz koyduğu Tapınak Şövalyeleri Tarikatı'nın bütün üyelerini aynı sabah tutuklattı; işkenceyle alınan itiraflarla tarikat sapkınlıkla suçlandı. Beş yıl sonra Viyana Konsili tarikatı resmen feshetti (1312) ve son büyük üstat Jacques de Molay 1314'te yakılarak idam edildi.",
  kaynak:"standart ders kitabı bilgisi — tarih (13 Ekim 1307, 'Cuma günü') geniş kabul görür, WebFetch ile doğrulanmadı" },

{ t:"1328-02-01", b:"Kapetiyen hanedanının doğrudan hattının sona ermesi", tur:"hanedan", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","taht"],
  d:"IV. Charles'ın erkek varis bırakmadan ölmesiyle 341 yıllık Kapetiyen doğrudan hattı sona erdi; taht, Salik Kanunu gerekçesiyle kadın hattından İngiltere kralı III. Edward'ı dışlayarak Valois kolundan VI. Philippe'e geçti. Bu veraset anlaşmazlığı doğrudan Yüzyıl Savaşları'nın hukukî gerekçesini oluşturacaktı.",
  kaynak:"standart ders kitabı bilgisi — gün belirsiz, ay bilgisiyle yazıldı" },

{ t:"1337-05-24", b:"Yüzyıl Savaşları'nın başlaması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","hanedan"],
  d:"III. Edward'ın Fransa tahtı üzerindeki iddiasını resmen ileri sürmesiyle, aralıklarla 116 yıl sürecek olan Fransa-İngiltere çatışması başladı. Savaş yalnız bir hanedan anlaşmazlığı değil, iki krallığın millet kimliğinin şekillendiği uzun bir süreç olacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1340-06-24", b:"Sluys Deniz Savaşı — Fransız donanmasının imhası", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"İngiliz filosu, Flanders açıklarında Fransız-Cenevizli donanmasını neredeyse tamamen yok etti ve Manş Denizi'nin denetimini yıllarca elinde tuttu. Yenilgi, savaşın ilk on yılında Fransa'nın stratejik inisiyatifi kaybettiğinin en açık göstergesiydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[51.308,3.383] },

{ t:"1346-08-26", b:"Crécy Savaşı — Fransız şövalye ordusunun bozgunu", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"İngiliz uzun yaylı okçularının Fransız ağır süvarisini ezdiği Crécy, Ortaçağ Avrupası'nda şövalye savaş düzeninin sonunun habercisiydi. VI. Philippe'in ordusu ağır kayıp verdi; savaş, İngilizlerin Calais'yi kuşatmasının önünü açtı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[50.258,1.886] },

{ t:"1347-08-03", b:"Calais'nin İngilizlere düşmesi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis", yer_id:"Calais",
  etiket:["askeri","toprak-kaybi"],
  d:"On bir aylık kuşatmanın ardından şehir teslim oldu; Calais, ardından iki yüz yirmi yıl boyunca İngiliz Kraliyeti'nin kıta Avrupası'ndaki son kalesi olarak kaldı. 'Calais'nin altı burjuvası' anlatısı bu teslimiyetten doğdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1348-01-01", b:"Kara Ölüm'ün Fransa'yı vurması", tur:"kriz", onem:4, dunya:4, kapsam:"ic", yer_id:"Marsilya",
  etiket:["kriz","sosyal"],
  d:"Veba Marsilya limanından girip ülkeyi baştan başa kat etti; nüfusun üçte biri ile yarısı arasında bir kesimin öldüğü tahmin edilir. Salgın, feodal işgücü düzenini ve toprak sahipliğini derinden sarstı; savaşla birleşince XIV. yüzyılın Fransa'sını demografik çöküşe sürükledi.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01" },

{ t:"1356-09-19", b:"Poitiers Savaşı — Kral II. Jean'ın esir alınması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Poitiers",
  etiket:["askeri","savas","hanedan"],
  d:"Kara Prens'in kuvvetleri Fransız ordusunu ikinci kez ağır yenilgiye uğrattı ve bizzat Kral II. Jean'ı esir aldı; kral dört yıl Londra'da rehin tutuldu. Kralın yokluğu, ülkede vergi ve otorite krizini tetikleyen bir siyasî boşluk doğurdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1358-05-28", b:"Jacquerie köylü ayaklanması", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["isyan","sosyal"],
  d:"Kralın esaretinden ve savaşın yıkımından bunalan Kuzey Fransa köylüleri, kısa ama son derece kanlı bir ayaklanma başlattı; hareket birkaç hafta içinde soylular tarafından acımasızca bastırıldı. 'Jacquerie' terimi sonraki yüzyıllarda her köylü isyanı için kullanılan genel ad oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1360-05-08", b:"Brétigny Antlaşması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kaybi"],
  d:"Fransa, Aquitaine'in tam egemenliğini İngiltere'ye bırakmayı ve Kral II. Jean için ağır bir fidye ödemeyi kabul etti; buna karşılık Edward Fransa tacı üzerindeki iddiasından vazgeçti. Antlaşma savaşı yalnız geçici olarak durdurdu; on yıl içinde çatışmalar yeniden başladı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[48.47,1.47] },

{ t:"1364-04-08", b:"V. Charles'ın tahta çıkışı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Reims",
  etiket:["hukumdar","idari"],
  d:"'Bilge' lakaplı V. Charles, kraliyet ordusunu ve maliyesini yeniden örgütleyerek 1370'lerde kaybedilen toprakların çoğunu geri aldı. Onun döneminde Louvre'da kurulan kraliyet kütüphanesi, sonraki Bibliothèque nationale'in çekirdeğini oluşturdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1380-09-16", b:"VI. Charles'ın tahta çıkışı — çocuk kral dönemi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","taht"],
  d:"On bir yaşında tahta çıkan VI. Charles adına amcaları naiplik yaptı; ağır vergiler kentlerde isyanlara yol açtı (Maillotinler, 1382). Kralın 1392'den itibaren tekrarlayan akıl hastalığı nöbetleri, ülkeyi Armagnac-Burgonya iç savaşına sürükleyecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1407-11-23", b:"Orléans Dükü'nün suikastı — Armagnac-Burgonya iç savaşının başlaması", tur:"kriz", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["kriz","hanedan","isyan"],
  d:"Burgonya Dükü Korkusuz Jean'ın adamları, kralın kardeşi Orléans Dükü Louis'yi Paris sokaklarında öldürttü; cinayet, on yıllardır süren hanedan içi rekabeti açık bir iç savaşa dönüştürdü. Bölünmüş Fransa, birkaç yıl sonra İngiliz istilasına karşı neredeyse hiç direnemeyecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1415-10-25", b:"Azincourt Savaşı", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"V. Henry'nin sayıca çok daha küçük İngiliz ordusu, çamura saplanan Fransız şövalye kuvvetini neredeyse tamamen imha etti; Fransız soylularının büyük bölümü öldü ya da esir düştü. Bozgun, savaşın en karanlık on yılını başlattı ve beş yıl sonra Troyes Antlaşması'na giden yolu açtı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[50.467,2.133] },

{ t:"1420-05-21", b:"Troyes Antlaşması — İngiliz veraset iddiasının tescili", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","hanedan","toprak-kaybi"],
  d:"VI. Charles, kızı Catherine'i V. Henry ile evlendirerek İngiliz kralını kendi vârisi ve naibi ilan etti; öz oğlu Dauphin Charles veraset dışı bırakıldı. Antlaşma iki tacı fiilen birleştirdi ve Fransa'nın bağımsız varlığını en kırılgan anına taşıdı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Troyes" },

{ t:"1429-05-08", b:"Jeanne d'Arc'ın Orléans kuşatmasını kaldırması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Orléans",
  etiket:["askeri","savas","din"],
  d:"Genç köylü kızı Jeanne d'Arc'ın önderliğindeki Fransız kuvvetleri, yedi aydır süren İngiliz kuşatmasını dokuz günde kırdı; zafer, savaşın gidişatını Fransa lehine çevirdi. Aynı yılın 17 Temmuz'unda Dauphin Charles, Reims'te VII. Charles olarak taç giydi — Troyes Antlaşması'nın fiilen çöküşüydü.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1431-05-30", b:"Jeanne d'Arc'ın Rouen'de yakılması", tur:"olum", onem:4, dunya:3, kapsam:"ic", yer_id:"Rouen",
  etiket:["din","siyaset"],
  d:"Burgonyalılarca yakalanıp İngilizlere satılan Jeanne d'Arc, kilise mahkemesince sapkınlıkla suçlanıp diri diri yakıldı. 1456'da bir yeniden yargılama onu aklayacak, 1920'de Katolik Kilisesi onu azize ilan edecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1435-09-21", b:"Arras Antlaşması — Burgonya'nın Fransa'ya dönüşü", tur:"antlasma", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Burgonya Dükü İyi Philippe, VII. Charles ile barış yaparak İngiliz ittifakını terk etti; Armagnac-Burgonya bölünmesi böylece kapandı. Fransız cephesinin birleşmesi, savaşın son on sekiz yılında İngilizlerin geri püskürtülmesini mümkün kıldı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Arras" },

{ t:"1445-01-01", b:"Compagnies d'ordonnance — daimî kraliyet ordusunun kurulması", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["askeri","idari","reform"],
  d:"VII. Charles, savaş sonrası başıboş kalan paralı asker birliklerini disipline etmek için Avrupa'nın ilk daimî, maaşlı kraliyet ordusunu kurdu. Reform, kraliyetin vergilendirme ve askerî tekelini feodal beylerin elinden alan uzun sürecin başlangıcı sayılır.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01", kapsam_genis:true },

{ t:"1453-07-17", b:"Castillon Savaşı — Yüzyıl Savaşları'nın fiilen sona ermesi", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","toprak-kazanc"],
  d:"Fransız topçusunun ağır bastığı Castillon'da İngiliz kuvvetleri son büyük yenilgisini aldı; savaş sonunda İngiltere kıta Avrupası'nda yalnız Calais'yi elinde tuttu. Barış hiç imzalanmadı ama silahlı çatışma burada fiilen bitti; Fransa, Avrupa'nın en kalabalık ve merkezî krallığı olarak savaştan çıktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[44.85,-0.033] },

{ t:"1461-07-22", b:"XI. Louis'nin tahta çıkışı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Reims",
  etiket:["hukumdar","idari"],
  d:"'Örümcek Kral' XI. Louis, entrika ve diplomasiyi savaştan üstün tutarak büyük feodal beyleri tek tek etkisizleştirdi. Onun döneminde kraliyet otoritesi, torunları için gerçek bir mutlak monarşinin temelini oluşturacak şekilde pekişti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1470-01-01", b:"Fransa'nın ilk matbaasının Sorbonne'da kurulması", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","kultur"],
  d:"Sorbonne'daki üç Alman matbaacı (Ulrich Gering ve ortakları), Fransa'da ilk basılı kitapları üretti. Gelişme, hümanist metinlerin ve hukuk kaynaklarının yayılma hızını Ortaçağ standartlarına göre kökten değiştirdi.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01" },

{ t:"1477-01-05", b:"Nancy Savaşı — Cesur Charles'ın ölümü ve Burgonya'nın parçalanması", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Nancy",
  etiket:["askeri","toprak-kazanc","hanedan"],
  d:"Burgonya Dükü Cesur Charles, Lorraine-İsviçre ittifakına karşı verdiği son savaşta öldü; mirasının büyük bölümü XI. Louis tarafından ilhak edildi, geri kalanı (Flanders, Franche-Comté) Habsburglara miras kaldı. Bu bölünme, sonraki üç yüzyıl Fransa-Habsburg rekabetinin coğrafî temelini kurdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1483-08-30", b:"VIII. Charles'ın tahta çıkışı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar"],
  d:"On üç yaşında tahta çıkan VIII. Charles adına kız kardeşi Anne de Beaujeu naiplik yaptı; dönemin en önemli siyasî başarısı 1488 Verger Savaşı sonrası Bretanya'nın fiilen kraliyet nüfuzuna girmesiydi. Kralın kendisi 1494'te İtalya'ya sefer düzenleyerek yeni bir çağın kapısını açacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1491-12-06", b:"VIII. Charles - Anne de Bretagne evliliği — Bretanya'nın birleşmesi", tur:"evlilik", onem:5, dunya:2, kapsam:"ic", yer_id:"Nantes",
  etiket:["hanedan","toprak-kazanc"],
  d:"Kralın Bretanya Düşesi Anne ile evliliği, Fransa'nın son büyük bağımsız feodal beyliğini fiilen krallığa bağladı; birlik 1532'de resmî ilhakla tamamlanacaktı. Bugünkü Fransa'nın altıgen coğrafyası büyük ölçüde bu evlilikle şekillendi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1494-09-02", b:"İtalyan Savaşları'nın başlaması — VIII. Charles'ın Napoli seferi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Napoli tahtı üzerindeki hanedan iddiasıyla İtalya'yı istila eden VIII. Charles, altmış yıl sürecek ve bütün büyük Avrupa güçlerini İtalya'da karşı karşıya getirecek savaşlar dizisini başlattı. Sefer aynı zamanda Fransız soylularını İtalyan Rönesansı'nın sanat ve mimarisiyle doğrudan temasa geçirdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1515-01-01", b:"I. François'nın tahta çıkışı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","kultur"],
  d:"I. François, Fransız Rönesansı'nın en görkemli hâmisi ve Kanûnî Sultan Süleyman'la ittifaka giden dış politikanın mimarı olarak tahta çıktı. Onun otuz iki yıllık saltanatı, sanat, mimari ve merkezî devlet inşasında bir dönüm noktasıdır.",
  kaynak:"standart ders kitabı bilgisi — gün belirsiz, YYYY-01-01" },

{ t:"1515-09-14", b:"Marignano Savaşı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"I. François'nın kişisen komuta ettiği Fransız ordusu, İsviçre paralı askerlerini iki günlük çarpışmada bozguna uğratıp Milano'yu ele geçirdi. Zafer, genç kralın askerî prestijini pekiştirdi ve 1516 Fribourg 'Ebedî Barışı' ile İsviçre'yi Fransız müttefikine dönüştürdü.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[45.356,9.328] },

{ t:"1516-08-18", b:"Bologna Konkordatosu", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["din","idari","reform"],
  d:"Papa X. Leo ile imzalanan anlaşma, Fransız kralına ülke içindeki üst düzey kilise atamalarını (piskopos, başrahip) belirleme hakkı verdi; karşılığında papalık vergi gelirlerinin bir kısmını korudu. Fransız kilisesinin krallığa bağımlılığı ('Gallikanizm') bu anlaşmayla kurumsallaştı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[44.495,11.343] },

{ t:"1519-06-28", b:"I. François'nın Kutsal Roma-Germen İmparatorluğu seçiminde Charles'a yenilmesi", tur:"kriz", onem:4, dunya:3, kapsam:"dis", yer_id:"Frankfurt",
  etiket:["diplomasi","siyaset"],
  d:"Fugger bankerlerinin finanse ettiği rüşvet kampanyasıyla İspanya Kralı Charles, imparator seçildi ve I. François'nın imparatorluk hırsı sona erdi. Yenilgi, iki hükümdar arasında ölene kadar sürecek kişisel ve jeopolitik rekabetin başlangıcı oldu — Osmanlı ile ittifakın da temel motivasyonu buydu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1525-02-24", b:"Pavia Savaşı — I. François'nın esir düşmesi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","hanedan"],
  d:"İspanyol-imparatorluk kuvvetleri Fransız ordusunu Pavia'da ağır yenilgiye uğrattı ve bizzat I. François'yı esir aldı; kral 'her şeyimi kaybettim, onurum ve canım dışında' diye yazdı. Esaret, on ay sonra Madrid Antlaşması'nı ve dolayısıyla Fransa'nın Osmanlı'ya elçi göndererek ittifak aramasını doğrudan tetikledi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[45.185,9.158] },

{ t:"1525-12-06", b:"Kanûnî Sultan Süleyman'ın Fransız elçisi Frangipani'yi kabulü", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"İstanbul",
  etiket:["diplomasi","ittifak"],
  d:"Esaretteki I. François'nın annesi Louise de Savoie'nın gönderdiği elçi Jean Frangipani, İstanbul'da kabul edildi ve Kanûnî'den Habsburglara karşı destek istedi. Bu temas, on bir yıl sonra imzalanacak kapitülasyonların ve iki devlet arasındaki uzun diplomatik ilişkinin ilk somut adımıydı.",
  kaynak:"TDV `fransa` maddesi (islamansiklopedisi.org.tr/fransa, canlı, gövdesi okundu)" },

{ t:"1526-01-14", b:"Madrid Antlaşması — I. François'nın serbest bırakılması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Madrid",
  etiket:["antlasma","toprak-kaybi"],
  d:"Burgonya'yı Habsburglara bırakmayı ve oğullarını rehin vermeyi kabul eden François, serbest bırakılır bırakılmaz antlaşmayı 'zorla imzalatıldığı' gerekçesiyle tanımadığını ilan etti. Antlaşmanın çökmesi, Habsburg-Fransa savaşlarının yeni bir turunu başlattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1530-01-01", b:"Collège de France'ın kurulması", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","kultur","reform"],
  d:"I. François, Sorbonne'un skolastik tekeli dışında, hümanist bilginlerin İbranice, Yunanca ve matematik okuttuğu 'Kral Okutmanları' kurumunu tesis etti. Kurum bugün de akademik özerkliğiyle Fransız yüksek öğreniminin en özgün kurumlarından biri olarak varlığını sürdürüyor.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01" },

{ t:"1534-10-18", b:"Placard'lar Olayı — Protestan bildirilerinin yayılması", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["din","kriz"],
  d:"Kralın yatak odası kapısına kadar asılan, Katolik ayin ekmeğini alaya alan Protestan bildiriler, I. François'nın önceki hoşgörülü tutumunu bir gecede değiştirdi ve sert bir zulüm dalgası başlattı. Olay, sonraki yarım yüzyıl sürecek Din Savaşları'nın habercisi sayılır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1536-02-18", b:"Osmanlı-Fransız Kapitülasyonları'nın imzalanması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"İstanbul",
  etiket:["antlasma","ittifak","diplomasi"],
  d:"Fransız elçisi Jean de la Forest ile Sadrazam İbrahim Paşa arasında imzalanan ticari kapitülasyon anlaşması, Osmanlı'nın bir Hıristiyan devletle imzaladığı ilk büyük ayrıcalık anlaşmasıydı ve iki asır sürecek Fransız-Osmanlı yakınlaşmasının hukukî temelini kurdu. Anlaşma, Habsburg gücünü dengelemek isteyen I. François'nın stratejisinin doğrudan sonucuydu.",
  kaynak:"TDV `fransa` maddesi (canlı, gövdesi okundu) — \"18 Şubat 1536'da Jean de la Forest ile İbrahim Paşa arasında ticari anlaşma imzalandı\"" },

{ t:"1539-08-10", b:"Villers-Cotterêts Fermanı — Fransızcanın resmî idare dili olması", tur:"reform", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["idari","reform","kultur"],
  d:"Ferman, bütün resmî ve hukukî belgelerin Latince yerine Fransızca yazılmasını zorunlu kıldı ve doğum-ölüm kayıtlarının tutulmasını devlete bağladı. Fransızcanın idare dili olarak kurumsallaşması, ülkenin dilsel-idari birliğinin en erken ve kalıcı adımlarından biridir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[49.25,3.086] },

{ t:"1543-01-01", b:"Toulon'un Osmanlı donanmasına üs olarak açılması", tur:"ittifak", onem:4, dunya:3, kapsam:"dis", yer_id:"Toulon",
  etiket:["ittifak","askeri"],
  d:"Barbaros Hayreddin Paşa komutasındaki Osmanlı donanması, Nice'e karşı ortak harekât sonrası kışı Fransız limanı Toulon'da geçirdi; şehir camiye çevrilen bir kiliseyle geçici bir Osmanlı üssüne dönüştü. Bu, bir Hıristiyan Avrupa gücünün Osmanlı donanmasına açıkça üs verdiği ilk ve tek örnektir.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1543'te Nice'ye karşı ortak deniz harekâtı\" · Toulon kışlaması standart ders kitabı bilgisidir, gün belirsiz" },

{ t:"1547-03-31", b:"II. Henri'nin tahta çıkışı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar"],
  d:"I. François'nın oğlu II. Henri, babasının Habsburg karşıtı siyasetini ve İtalyan Savaşları'nı sürdürdü; saltanatı, eşi Catherine de Médicis'in sonraki otuz yıl Fransız siyasetinde belirleyici rol oynayacağı bir dönemin de başlangıcıydı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

// 🔴 `dunya` 3 → 4 (22 Ağustos 2026). `arac/denetle_kronoloji.py`nin ⑧. dalı
// (dosyalar arası tutarlılık) bu olayı YAKALADI: fransa 3 · italya 4 · ispanya 3.
// Hüküm oy çokluğuyla DEĞİL, skalanın kendi tanımıyla verildi:
//   `4` = "iki ya da daha çok BÜYÜK GÜCÜN sınırını değiştiren, bölgeyi
//          yeniden çizen"
// Cateau-Cambrésis 65 yıllık İtalyan Savaşları'nı bitirdi, İspanya'nın
// İtalya'daki hâkimiyetini 150 yıl için tescil etti, ve Fransa · İspanya ·
// Savoia · İngiltere'nin sınırlarını birden değiştirdi. ⇒ 4.
// 📌 Azınlıkta kalan (italya=4) DOĞRUYDU. Çoğunluğa uymak yanlış olurdu —
// bu, "veri doğru, rapor yanlış" dersinin puanlama yüzü.
{ t:"1559-04-03", b:"Cateau-Cambrésis Antlaşması — İtalyan Savaşları'nın sona ermesi", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kaybi"],
  d:"Altmış beş yıllık İtalyan Savaşları'nı bitiren antlaşmayla Fransa İtalya'daki iddialarının çoğundan vazgeçti ama Calais'yi İngiltere'den geri aldı. Barış, iki büyük Katolik gücü artık kendi ülkelerindeki Protestan hareketiyle yüzleşmeye serbest bıraktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[50.097,3.539] },

{ t:"1559-07-10", b:"II. Henri'nin turnuva kazasında ölümü", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","kriz"],
  d:"Barış kutlamaları sırasında düzenlenen bir mızrak turnuvasında gözüne kırık mızrak parçası saplanan kral on gün sonra öldü. Ölümü, zayıf ve genç Valois kral çocuklarının döneminde Catherine de Médicis'in fiilî naipliğini ve Din Savaşları'na giden siyasî boşluğu başlattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1562-03-01", b:"Wassy Katliamı — Din Savaşları'nın başlaması", tur:"din", onem:5, dunya:4, kapsam:"ic", yer_id:"",
  etiket:["din","kriz","isyan"],
  d:"Guise Dükü'nün adamlarının bir Protestan (Huguenot) ayin toplantısını basıp onlarca kişiyi öldürmesi, otuz altı yıl aralıklarla sürecek Din Savaşları'nın fiilî başlangıcı oldu. Sekiz ayrı savaş dalgasıyla Fransa, yüzyılın geri kalanında dinî bölünmeyle iç içe geçmiş bir iç savaş sarmalına girdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[48.5,4.683] },

{ t:"1572-08-24", b:"Aziz Bartelmi Katliamı", tur:"din", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["din","kriz","isyan"],
  d:"Kraliyet düğünü vesilesiyle Paris'te toplanan Huguenot soylularının hedef alındığı katliam, birkaç gün içinde başkentte ve taşrada on binlerce Protestanın ölümüyle sonuçlandı. Katliam, Katolik-Protestan uzlaşmasının Fransa'da onlarca yıl daha imkânsız kalacağının kanıtı oldu ve Avrupa'da derin bir infial yarattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1589-08-01", b:"III. Henri'nin suikastı ve Valois hanedanının sona ermesi", tur:"hanedan", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","din","kriz"],
  d:"Fanatik bir keşiş tarafından bıçaklanarak öldürülen III. Henri'nin ölümüyle iki buçuk asırlık Valois hanedanı sona erdi ve taç, Protestan Navarre Kralı Henri'ye (IV. Henri) geçerek Bourbon hanedanını başlattı. Katolik Birliği'nin bir Protestan kralı tanımayı reddetmesi savaşı dört yıl daha uzattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1593-07-25", b:"IV. Henri'nin Katolikliğe geçişi", tur:"din", onem:5, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["din","siyaset"],
  d:"'Paris bir ayine değer' sözüyle özdeşleşen dönüşüm, IV. Henri'ye başkentin ve Katolik çoğunluğun kapılarını açtı; kral ertesi yıl Paris'e resmen girdi. Pragmatik karar, Din Savaşları'nı fiilen bitiren siyasî uzlaşmanın önünü açtı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1598-04-13", b:"Nantes Fermanı — Din Savaşları'nın hukuken sona ermesi", tur:"reform", onem:5, dunya:4, kapsam:"ic", yer_id:"Nantes",
  etiket:["din","reform","kanun"],
  d:"IV. Henri, Protestanlara belirli şehirlerde ibadet, siyasî haklar ve kalelerini koruma güvencesi vererek Avrupa'da eşi görülmemiş bir dinî tahammül düzenlemesi yaptı. Ferman, 1685'te Nantes'ın İlgası'na kadar seksen yedi yıl yürürlükte kalacak ve Fransa'yı dönemin en istikrarlı büyük devletine dönüştürecekti.",
  kaynak:"standart ders kitabı bilgisi — Nantes Fermanı'nın tarihi (13 Nisan 1598) akademik literatürde geniş kabul görür" },

{ t:"1608-07-03", b:"Samuel de Champlain'in Québec'i kurması", tur:"kesif", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["kesif","toprak-kazanc"],
  d:"Champlain'in Saint Lawrence Nehri kıyısında kurduğu yerleşim, Yeni Fransa sömürgesinin ve sonraki Kanada Fransız varlığının çekirdeği oldu. Bu tarihten itibaren Fransa, Kuzey Amerika'da İngiltere ile yüzyıl sürecek bir sömürge rekabetine girdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Quebec" },

{ t:"1610-05-14", b:"IV. Henri'nin suikastı", tur:"olum", onem:5, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","kriz"],
  d:"Katolik fanatik François Ravaillac'ın hançeriyle öldürülen IV. Henri'nin ardından dokuz yaşındaki XIII. Louis tahta çıktı; annesi Marie de Médicis'in naipliği ülkeyi yeniden soylu isyanlarına ve siyasî istikrarsızlığa sürükledi. Suikast, Bourbon hanedanının ilk büyük krizi oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1624-04-29", b:"Richelieu'nün kral başdanışmanı olması", tur:"idari", onem:5, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["idari","siyaset","reform"],
  d:"Kardinal Richelieu, XIII. Louis'nin baş bakanı olarak kraliyet konseyine girdi ve on sekiz yıl boyunca Fransa'yı merkezî mutlakiyete taşıyan reformları yönetecekti: soylu kalelerinin yıkılması, taşra valilerinin ('intendant') denetimi, Habsburg karşıtı dış siyaset. Onun yönetimi, XIV. Louis'nin mutlakiyetinin doğrudan hazırlayıcısıdır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1635-01-29", b:"Académie française'in kurulması", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","bilim"],
  d:"Richelieu'nün himayesinde kurulan akademi, Fransız dilinin sözlüğünü ve dilbilgisi kurallarını standartlaştırmayı ve edebî üretimi devlet himayesi altına almayı hedefledi. Kurum bugün de dilin resmî bekçisi sıfatıyla varlığını sürdürüyor.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1635-05-19", b:"Fransa'nın Otuz Yıl Savaşları'na resmen girmesi", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Katolik Fransa, mezhep çıkarını değil devlet çıkarını önceleyerek Protestan İsveç'in yanında Katolik Habsburglara savaş açtı; Richelieu'nün bu tercihi 'raison d'état' (devlet aklı) siyasetinin en çarpıcı örneğidir. On üç yıl sürecek savaş Fransa'yı mali olarak tükenme noktasına getirecek ama sonunda kıtanın en güçlü devleti olarak çıkaracaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1637-06-08", b:"Descartes'ın 'Yöntem Üzerine Söylev'inin yayımlanması", tur:"bilim", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["bilim","kultur"],
  d:"Descartes'ın (Fransa dışında, Hollanda'da basılan ama bir Fransız düşünürün eseri olan) yapıtı, 'düşünüyorum öyleyse varım' önermesiyle modern felsefenin ve rasyonalist bilimsel yöntemin temel metni sayılır. Eser, Fransız Aydınlanma düşüncesinin uzak ama doğrudan öncüsüdür.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[52.16,4.497] },

{ t:"1642-12-04", b:"Richelieu'nün ölümü", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["idari","siyaset"],
  d:"Kardinal, on sekiz yıllık iktidarının ardından öldü; yerine İtalyan asıllı Kardinal Mazarin geçerek aynı merkezîleştirme siyasetini sürdürdü. Richelieu'nün mirası, kısa süre sonra tahta çıkacak XIV. Louis'nin mutlak otoritesinin kurumsal temelini oluşturdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1643-05-19", b:"Rocroi Savaşı — İspanyol piyade üstünlüğünün kırılması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Yirmi bir yaşındaki Enghien Dükü (sonraki Büyük Condé) komutasındaki Fransız ordusu, bir buçuk asırdır yenilmez sayılan İspanyol tercio piyadesini ezici bir zaferle imha etti. Zafer, XIV. Louis'nin (o hafta tahta çıkan beş yaşındaki çocuk kralın) saltanatının askerî açıdan muhteşem bir başlangıcı oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[49.933,4.517] },

{ t:"1648-01-30", b:"Fronde isyanının başlaması", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","kriz"],
  d:"Mazarin'in ağır vergi politikalarına karşı Paris Parlamentosu'nun direnişiyle başlayan Fronde, kısa sürede soylu isyanlarına dönüşerek beş yıl sürdü ve genç XIV. Louis'yi bir ara başkentten kaçmak zorunda bıraktı. Bu deneyim, kralın sonradan Versay'a ve merkezî otoriteye olan bağlılığını doğrudan şekillendirdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1648-10-24", b:"Vestfalya Barışı'nın imzalanması", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kazanc"],
  d:"Otuz Yıl Savaşları'nı bitiren antlaşmalar dizisinde Fransa, Alsace'ın büyük bölümünü kazandı ve Kutsal Roma-Germen İmparatorluğu'nun parçalanmışlığını garanti ederek kıtanın en güçlü devleti konumuna yerleşti. Vestfalya, modern devletler sisteminin egemenlik ilkesini kuran antlaşma olarak kabul edilir.",
  kaynak:"standart ders kitabı bilgisi · 🔴 dunya:5 — habsburg dosyasıyla BİREBİR AYNI (M-0873 hizalaması)", yer_id:"Münster" },

{ t:"1659-11-07", b:"Pireneler Antlaşması", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kazanc","evlilik"],
  d:"Fransa-İspanya savaşını bitiren antlaşmayla Fransa Roussillon ve Artois'nın bir kısmını kazandı; anlaşmanın parçası olarak XIV. Louis, İspanyol İnfantası Maria Theresa ile evlendi. Bu evlilik, kırk yıl sonra İspanya Veraset Savaşı'nın hukukî zeminini de hazırlayacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[43.347,-1.79] },

{ t:"1661-03-09", b:"Mazarin'in ölümü ve XIV. Louis'nin şahsi saltanatının başlaması", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","idari"],
  d:"Mazarin'in ölümüyle XIV. Louis, hiçbir başbakan atamayarak devleti bizzat yönetmeye başladı ve 'Devlet benim' anlayışını simgeleyen mutlakiyetin klasik dönemini açtı. Elli dört yıl sürecek şahsi saltanatı, Fransa'yı Avrupa'nın kültürel ve askerî öncüsü hâline getirecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1661-09-05", b:"Maliye Nazırı Fouquet'nin tutuklanması", tur:"siyaset", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["siyaset","idari"],
  d:"Aşırı zenginliği ve saraya rakip görkemiyle kralın güvenini yitiren Maliye Nazırı Nicolas Fouquet tutuklandı; yerine geçen Colbert, devlet maliyesini merkezîleştiren reformlara girişti. Olay, XIV. Louis'nin hiçbir gücün kendisiyle yarışmasına izin vermeyeceğinin açık göstergesiydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Nantes" },

{ t:"1666-12-22", b:"Bilimler Akademisi'nin kurulması", tur:"bilim", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim"],
  d:"Colbert'in girişimiyle kurulan Académie royale des sciences, devlet himayesinde düzenli bilimsel araştırmayı kurumsallaştıran Avrupa'nın öncü bilim akademilerinden biri oldu. Ertesi yıl kurulan Paris Gözlemevi ile akademi, Fransa'yı bilimde bir asrı aşkın süre öncü konuma taşıdı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1667-05-24", b:"Devrolma Savaşı'nın başlaması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc"],
  d:"XIV. Louis, eşi Maria Theresa'nın İspanyol Hollandası üzerindeki miras hakkını gerekçe göstererek bölgeyi işgal etti; savaş 1668 Aachen Antlaşması'yla sınırlı toprak kazanımıyla sona erdi. Sefer, kralın sonraki elli yıl boyunca sürdüreceği yayılmacı dış siyasetin ilk denemesiydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1682-05-06", b:"Sarayın Versay'a taşınması", tur:"idari", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["idari","mimari","kultur"],
  d:"XIV. Louis, hükümeti ve soylu sınıfını resmen Versay Sarayı'na taşıdı; soyluların günlük yaşamını saray törenlerine ('etiquette') bağlayarak onları siyasî güçten fiilen uzaklaştırdı. Versay, Avrupa'daki bütün hükümdarların örnek aldığı mutlakiyetçi saray mimarisinin ve seremoninin modeli hâline geldi.",
  kaynak:"standart ders kitabı bilgisi — kesin gün için akademik kaynaklar Mayıs 1682'yi verir, tam gün doğrulanmadı", yer_kon:[48.805,2.12] },

{ t:"1683-09-06", b:"Colbert'in ölümü", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["idari","iktisat"],
  d:"Yirmi iki yıl boyunca Fransız maliyesini, sanayisini ve donanmasını yeniden inşa eden Jean-Baptiste Colbert'in ölümü, merkantilist devlet ekonomisinin en yaratıcı döneminin sonu oldu. Ölümünden sonra savaş harcamaları maliyeyi hızla dengesizliğe sürükleyecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1685-10-18", b:"Nantes Fermanı'nın İlgası (Fontainebleau Fermanı)", tur:"din", onem:5, dunya:4, kapsam:"ic", yer_id:"",
  etiket:["din","kanun","sosyal"],
  d:"XIV. Louis, seksen yedi yıllık dinî tahammül düzenlemesini yürürlükten kaldırarak Protestanlığı fiilen yasakladı; yaklaşık iki yüz bin Huguenot, servetlerini ve becerilerini beraberinde götürerek Hollanda, İngiltere ve Prusya'ya göç etti. Karar, Fransa'nın zanaat ve ticaret gücüne uzun vadeli, telafisi güç bir zarar verdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[48.408,2.701] },

{ t:"1701-09-07", b:"İspanya Veraset Savaşı'nın başlaması", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","hanedan"],
  d:"XIV. Louis'nin torunu Felipe'nin İspanya tahtına geçmesi, Avrupa'nın büyük çoğunluğunu Fransa-İspanya birleşmesini önlemek için Büyük İttifak'ta bir araya getirdi. On üç yıl sürecek savaş, Fransa'yı Blenheim ve Ramillies gibi ağır yenilgilerle mali ve askerî olarak tüketecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1713-04-11", b:"Utrecht Antlaşması", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"Utrecht",
  etiket:["antlasma","diplomasi"],
  d:"İspanya Veraset Savaşı'nı bitiren antlaşmalar dizisinde Felipe'nin İspanya tahtı tanındı ama Fransa ile İspanya taçlarının birleşmesi kesin olarak yasaklandı. Utrecht, XVIII. yüzyıl Avrupa güç dengesinin (balance of power) kurucu belgesi sayılır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1715-09-01", b:"XIV. Louis'nin ölümü", tur:"olum", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","hanedan"],
  d:"Yetmiz iki yıllık, Avrupa tarihinin en uzun hükümdarlıklarından birinin ardından ölen XIV. Louis'nin yerine beş yaşındaki büyük torunu XV. Louis geçti; naiplik Orléans Dükü Philippe'e verildi. Ölümü, savaşlarla tükenmiş bir hazine ve derin bir toplumsal yorgunluk mirası bıraktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1720-01-01", b:"Yirmisekiz Mehmed Çelebi'nin Paris elçiliği", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"Paris",
  etiket:["diplomasi","kultur"],
  d:"III. Ahmed'in Paris'e gönderdiği elçi Yirmisekiz Mehmed Çelebi'nin gözlemleri, Osmanlı'da 'Lâle Devri' modernleşme merakının doğrudan kaynaklarından biri oldu. Ziyaret, iki ülke arasındaki kültürel temasın kapitülasyon ticaretinin ötesine geçtiği ilk büyük örnektir.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1720'de Yirmisekiz Mehmed Çelebi'nin Paris'e gönderilişi\" · gün belirsiz, YYYY-01-01" },

{ t:"1720-05-01", b:"Mississippi Balonu'nun patlaması — John Law'ın çöküşü", tur:"kriz", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["iktisat","kriz","ekonomi"],
  d:"İskoç finansçı John Law'ın kâğıt para ve Louisiana ticaret şirketi hisseleri üzerine kurduğu spekülatif sistem çöktü; binlerce yatırımcı iflas etti ve devlet uzun süre kâğıt paraya güvenini yitirdi. Kriz, Fransız maliyesinin XVIII. yüzyıl boyunca kronikleşecek borç sorununu daha da derinleştirdi.",
  kaynak:"standart ders kitabı bilgisi — gün belirsiz, ay bilgisiyle yazıldı" },

{ t:"1740-01-01", b:"I. Mahmud'un kapitülasyonlara süreklilik kazandırması", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"İstanbul",
  etiket:["antlasma","diplomasi"],
  d:"Daha önce her hükümdar değişiminde yenilenmesi gereken kapitülasyonlar, I. Mahmud döneminde süresiz ve kalıcı bir ayrıcalık statüsüne kavuşturuldu. Bu, Fransa'nın Osmanlı topraklarındaki ticari ve dinî imtiyazlarını yüzyıl sonuna dek güvence altına aldı.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1740'ta I. Mahmud'un kapitülasyonları devamlılık kazandırması\" · gün bilinmiyor, YYYY-01-01" },

{ t:"1751-06-28", b:"Ansiklopedi'nin ilk cildinin yayımlanması", tur:"bilim", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","kultur","din"],
  d:"Diderot ve d'Alembert'in editörlüğünde başlayan 'Ansiklopedi ya da Bilimler, Sanatlar ve Zanaatlar Açıklamalı Sözlüğü', Aydınlanma düşüncesinin bütün akıl-eleştiri programını tek bir başvuru eserinde topladı. Yirmi sekiz ciltlik proje, kilise ve krallık sansürüyle defalarca çatışarak 1772'de tamamlanacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1756-01-01", b:"Diplomatik Devrim ve Yedi Yıl Savaşları'na giriş", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","diplomasi","toprak-kaybi"],
  d:"Fransa, asırlık düşmanı Habsburg Avusturya ile ittifak kurarak Prusya-İngiltere bloğuna karşı savaşa girdi; savaş Avrupa'da olduğu kadar Kuzey Amerika ve Hindistan'da da sürdü. Yedi yıl sonra imzalanacak Paris Antlaşması, Fransa'yı Kuzey Amerika sömürge imparatorluğunun neredeyse tamamından mahrum bırakacaktı.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, YYYY-01-01", kapsam_genis:true },

{ t:"1763-02-10", b:"Paris Antlaşması — Yeni Fransa'nın kaybı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kaybi"],
  d:"Yedi Yıl Savaşları'nı bitiren antlaşmayla Fransa, Kanada'yı ve Mississippi'nin doğusundaki bütün topraklarını İngiltere'ye devretti; Fransız sömürge imparatorluğu Karayipler ve birkaç Hindistan mevkiine küçüldü. Yenilgi, mali ve askerî reform ihtiyacını görünür kılarak on beş yıl sonra Amerikan Bağımsızlık Savaşı'na müdahaleyi motive edecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1774-05-10", b:"XVI. Louis'nin tahta çıkışı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar"],
  d:"Yirmi yaşında tahta çıkan XVI. Louis, ağır borçlu bir hazine ve toplumsal huzursuzluk devraldı; reformcu maliye nazırlarının (Turgot, Necker) girişimleri saray muhalefetiyle defalarca akamete uğrayacaktı. Onun on beş yıllık saltanatı, İhtilâl'e giden mali-siyasî krizin doğrudan sahnesi oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1778-02-06", b:"Fransa'nın Amerikan bağımsızlık savaşçılarıyla ittifakı", tur:"ittifak", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ittifak","diplomasi","askeri"],
  d:"Fransa, İngiltere'ye karşı on üç koloniyle resmî ittifak imzalayarak Amerikan Bağımsızlık Savaşı'na askerî ve mali destek verdi; bu müdahale 1763 yenilgisinin rövanşı olarak görüldü. Ancak savaşın maliyeti, zaten kırılgan olan devlet hazinesini iflasın eşiğine getirdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1783-09-03", b:"Paris Antlaşması — Amerikan bağımsızlığının tanınması", tur:"antlasma", onem:3, dunya:5, kapsam:"dis", yer_id:"Paris",
  etiket:["antlasma","diplomasi"],
  d:"Amerikan Bağımsızlık Savaşı'nı bitiren antlaşmalar Paris'te imzalandı; Fransa askerî zafer kazandı ama savaşın mali yükü devlet borcunu sürdürülemez düzeye taşıdı. Bu borç krizi, altı yıl sonra Etats-Généraux'nun toplanmasının doğrudan sebebi olacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1783-11-21", b:"Montgolfier Kardeşler'in insanlı balon uçuşu", tur:"bilim", onem:3, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim"],
  d:"Pilâtre de Rozier ve Marquis d'Arlandes, Montgolfier kardeşlerin sıcak hava balonuyla Paris üzerinde insanlığın ilk özgür uçuşunu gerçekleştirdi. Uçuş, dönemin bilimsel merakının ve Fransız mühendislik yeteneğinin sembolü olarak bütün Avrupa'da büyük yankı uyandırdı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1789-05-05", b:"Etats-Généraux'nun toplanması", tur:"siyaset", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","kriz","reform"],
  d:"Mali iflasın eşiğindeki kraliyet, yüz yetmiş beş yıl aradan sonra üç zümre meclisini (soylular, ruhban, üçüncü zümre) Versay'da topladı; oylama usulü tartışması hemen anayasal bir krize dönüştü. Bu toplantı, İhtilâl'e giden zincirin ilk resmî halkasıdır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1789-06-20", b:"Jeu de Paume (Tenis Kortu) Yemini", tur:"siyaset", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","anayasa","kriz"],
  d:"Toplantı salonundan dışlanan Üçüncü Zümre temsilcileri, bir tenis kortunda toplanıp Fransa'ya yeni bir anayasa yazılana kadar dağılmayacaklarına yemin etti. Yemin, kendini 'Millet Meclisi' ilan eden zümrenin kraliyet otoritesine açık meydan okuyuşuydu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1789-07-14", b:"Bastille'in düşmesi", tur:"isyan", onem:5, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","kriz","askeri"],
  d:"Paris halkı, kraliyet cephaneliği ve siyasî tutukevi olarak simgeleşen Bastille kalesini bastı; olay bugün de Fransa'nın millî bayramı olarak kutlanır. Düşüş, İhtilâl'in soyut anayasal tartışmadan sokak eylemine, geri dönüşü olmayan bir devrime dönüştüğü andır.",
  kaynak:"standart ders kitabı bilgisi — 14 Temmuz 1789 tarihi tartışmasız kabul görür" },

{ t:"1789-08-04", b:"Feodal İmtiyazların Kaldırılması Gecesi", tur:"reform", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["reform","kanun","sosyal"],
  d:"Meclis, tek bir gece oturumunda feodal vergileri, kilise ondalığını ve soylu ayrıcalıklarının büyük bölümünü ilga etti; Ortaçağ'dan kalma toplumsal düzen hukuken bir gecede sona erdi. Karar, İhtilâl'in sadece siyasî değil toplumsal-ekonomik bir dönüşüm olduğunu kesinleştirdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1789-08-26", b:"İnsan ve Yurttaş Hakları Bildirgesi'nin kabulü", tur:"reform", onem:5, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["anayasa","reform","kanun"],
  d:"Meclisin kabul ettiği bildirge, özgürlük, eşitlik, mülkiyet ve halk egemenliği ilkelerini evrensel haklar olarak ilan etti. Metin, sonraki iki yüzyılda dünya çapında sayısız anayasa ve insan hakları belgesinin doğrudan ilham kaynağı oldu.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, belgenin küresel anayasal etkisi nedeniyle" },

{ t:"1789-10-05", b:"Kadınların Versay Yürüyüşü", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","sosyal"],
  d:"Ekmek kıtlığından bunalan Paris kadınları Versay'a yürüyerek kraliyet ailesini Paris'e (Tuileries Sarayı'na) dönmeye zorladı. Kraliyetin başkente taşınması, monarşiyi fiilen halkın ve Meclis'in doğrudan gözetimine soktu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1790-07-12", b:"Ruhban Sınıfının Medenî Anayasası", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["din","kanun","reform"],
  d:"Meclis, Katolik ruhbanını devlet memuru statüsüne alıp papalık yerine devlete bağlılık yemini zorunlu kıldı; birçok rahip yemini reddetti. Karar, kilise ile İhtilâl arasında derin ve kalıcı bir çatlak açtı ve karşı-devrimci direnişin en güçlü kaynaklarından biri oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1791-06-20", b:"Kraliyet ailesinin Varennes Kaçışı", tur:"kriz", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["kriz","hanedan"],
  d:"XVI. Louis ve ailesi, sınırı geçip yabancı destekle İhtilâl'i bastırmak amacıyla gizlice Paris'ten kaçtı ama Varennes'te tanınıp yakalandı. Başarısız kaçış, kralın halk nezdindeki meşruiyetini geri dönülmez biçimde sarstı ve cumhuriyetçi fikirlerin ilk kez ciddiye alınmasına yol açtı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[49.2,5.033] },

{ t:"1791-09-03", b:"1791 Anayasası'nın kabulü — Meşruti Monarşi", tur:"reform", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["anayasa","reform"],
  d:"Fransa'nın ilk yazılı anayasası, kralı sınırlı yetkilerle 'Fransızların kralı' unvanına indirgeyerek anayasal monarşi kurdu. Düzenleme kısa ömürlü oldu; bir yıl içinde savaş ve kraliyetin güvenilmezliği cumhuriyeti kaçınılmaz kılacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1792-04-20", b:"Fransa'nın Avusturya'ya savaş açması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Meclis, karşı-devrimci güçleri desteklemekle suçladığı Avusturya'ya savaş ilan etti; bu, sonraki yirmi üç yıl neredeyse kesintisiz sürecek Fransa-Avrupa savaşları dizisinin başlangıcı oldu. Savaş, İhtilâl'in radikalleşmesini de doğrudan hızlandırdı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1792-08-10", b:"Tuileries Sarayı Baskını — monarşinin fiilen devrilmesi", tur:"isyan", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","hanedan","kriz"],
  d:"Paris halkı ve gönüllü birlikleri Tuileries Sarayı'nı basıp kraliyet muhafızlarını dağıttı; XVI. Louis ve ailesi Meclis tarafından tutuklandı. Monarşi bu gün fiilen sona erdi; altı hafta sonra Cumhuriyet resmen ilan edilecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1792-09-20", b:"Valmy Muharebesi — Fransız ordusunun ilk zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Yeni kurulan Fransız gönüllü ordusu, Prusya-Avusturya müdahale kuvvetini Valmy'de durdurdu; Goethe bu zaferin ardından 'burada ve bugün dünya tarihinde yeni bir çağ başlıyor' diye yazdı. Zafer, Cumhuriyet'in askerî meşruiyetini ilk kez kanıtladı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[49.05,4.767] },

{ t:"1792-09-22", b:"I. Fransız Cumhuriyeti'nin ilanı", tur:"kurulus", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["anayasa","kurulus","hanedan"],
  d:"Yeni seçilen Ulusal Konvansiyon, ilk oturumunda oybirliğiyle monarşiyi kaldırıp Cumhuriyet'i ilan etti; aynı gün Fransa'da yeni bir takvim yılının (Cumhuriyet takvimi, Yıl I) başlangıcı sayıldı. `data/devletler.js`teki `fransa` künyesi bu tarihte kapanıp `fransa-cumhuriyet` künyesi açılıyor — VERİ DEVLET tarafından TDV `fransa` maddesiyle çapraz doğrulanmış tarih (22 Eylül).",
  kaynak:"TDV `fransa` maddesi ve `data/devletler.js:fransa` notu — \"22 Eylül'de de cumhuriyet ilân edildi\"" },

{ t:"1793-01-21", b:"XVI. Louis'nin idamı", tur:"olum", onem:5, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","siyaset","kriz"],
  d:"Vatana ihanetten yargılanan eski kral, giyotinle idam edildi; infaz, Avrupa'nın bütün monarşilerini Fransa'ya karşı birleştiren Birinci Koalisyon'un savaş gerekçesini pekiştirdi. İdam, İhtilâl'in artık geri dönüşü olmayan bir eşiği geçtiğinin en açık işaretiydi.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, Avrupa monarşi sisteminin doğrudan tehdit algısı nedeniyle" },

{ t:"1793-04-06", b:"Kamu Selameti Komitesi'nin kurulması", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["idari","kriz","siyaset"],
  d:"Konvansiyon, iç isyan ve dış savaşla boğuşan Cumhuriyet'i yönetmek üzere fiilen olağanüstü yetkilerle donatılmış dokuz-on iki kişilik bir komite kurdu; komite kısa sürede Robespierre'in liderliğinde Terör Dönemi'nin idare merkezi hâline geldi. Kurum, devrimci diktatörlüğün kurumsal çekirdeğiydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1793-07-13", b:"Marat'nın suikastı", tur:"olum", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","kriz"],
  d:"Jakoben gazeteci Jean-Paul Marat, Girondin sempatizanı Charlotte Corday tarafından banyosunda bıçaklanarak öldürüldü. Suikast, Jakobenlerin Girondinlere karşı kampanyasını sertleştirerek Terör'ün tırmanmasına katkı yaptı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1793-08-01", b:"Metrik sistemin kabulü", tur:"reform", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","reform","idari"],
  d:"Konvansiyon, ölçü birimlerini onlu sisteme dayalı metre ve kilogramla standartlaştırma kararnamesini kabul etti; sistem sonraki iki yüzyılda dünyanın neredeyse tamamında benimsenecekti. Reform, İhtilâl'in akılcı-evrenselci mirasının en kalıcı ve en az tartışmalı ürünüdür.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, uzun vadeli küresel etki nedeniyle" },

{ t:"1793-08-10", b:"Louvre'un halka açık müze olarak açılması", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","sanat"],
  d:"Eski kraliyet sarayı, el konan kilise ve soylu koleksiyonlarıyla zenginleştirilerek halkın ücretsiz girebildiği bir müzeye dönüştürüldü. Louvre, kraliyet mülkiyetindeki sanatı 'milletin mirası' hâline getiren bu jestle dünyanın en etkili müzecilik modellerinden birinin öncüsü oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1793-09-05", b:"Terör Dönemi'nin resmen ilanı", tur:"kriz", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["kriz","siyaset"],
  d:"Konvansiyon, 'terörü gündemin maddesi hâline getirmeyi' resmen kabul ederek şüpheli kişilerin yargısız-hızlandırılmış biçimde tutuklanıp idam edilmesini yasal zemine oturttu. On ay sürecek dönemde on binlerce kişi giyotine gönderildi; devrimin kendi çocuklarını yiyen evresi olarak tarihe geçti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1793-10-16", b:"Marie Antoinette'in idamı", tur:"olum", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hanedan","siyaset"],
  d:"Eski kraliçe, vatana ihanet suçlamasıyla yargılanıp giyotinle idam edildi; infazı, Avrupa hanedanlarında İhtilâl'e karşı nefreti derinleştirdi. Avusturyalı doğumu, onu Fransız kamuoyunda özellikle 'yabancı düşman' figürüne dönüştürmüştü.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1794-06-08", b:"Yüce Varlık Bayramı — Robespierre'in yeni devlet dini", tur:"din", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["din","kultur"],
  d:"Robespierre, Katolikliğin yerine akılcı-deist bir devlet dini ('Yüce Varlık Kültü') kurmaya çalışarak görkemli bir devlet töreni düzenledi. Girişim, hem aşırı dinsizlere hem de dindarlara yabancı geldi ve Robespierre'in giderek yalnızlaşmasının işaretlerinden biri oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1794-07-28", b:"Thermidor Tepkisi — Robespierre'in idamı", tur:"kriz", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","kriz","olum"],
  d:"Konvansiyon içindeki muhalifler, kendi hayatlarından korkarak Robespierre ve yakın çevresini yargısız biçimde tutuklatıp aynı gün giyotine gönderdi. İnfaz, Terör Dönemi'ni fiilen sona erdirdi ve daha ılımlı, muhafazakâr bir devrimci evreyi ('Thermidor Tepkisi') başlattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1794-08-01", b:"École Polytechnique'in kurulması", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","idari"],
  d:"Devrimci hükümet, mühendis ve topçu subayı yetiştirmek üzere sınavla öğrenci alan seçkin bir teknik okul kurdu. Okul, XIX. yüzyıl boyunca Fransız bilim ve mühendisliğinin (ve devlet bürokrasisinin) en önemli yetiştirme kurumlarından biri olacaktı.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, ay bilgisiyle yazıldı" },

{ t:"1795-08-22", b:"Yıl III Anayasası ve Direktuvar'ın kurulması", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["anayasa","reform","idari"],
  d:"Terör'ün aşırılıklarına tepki olarak hazırlanan yeni anayasa, yürütmeyi beş kişilik bir Direktuvar'a ve yasamayı iki meclise bölerek güçler ayrılığını sağlamlaştırmaya çalıştı. Rejim istikrarsız kaldı ve dört yıl sonra Napolyon'un darbesiyle sona erecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1796-04-12", b:"Napolyon Bonapart'ın İtalya Seferi'nin başlaması", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Yirmi altı yaşındaki general Napolyon Bonapart, Direktuvar ordusunun İtalya kolunu devralıp Avusturya kuvvetlerine karşı bir dizi parlak zafer kazandı. Sefer, onu Fransa'nın en popüler askerî figürüne dönüştürerek üç yıl sonraki iktidar yürüyüşünün zeminini hazırladı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1797-10-17", b:"Campo Formio Antlaşması", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kazanc"],
  d:"Napolyon'un bizzat müzakere ettiği antlaşma, Avusturya'yı savaş dışı bıraktı ve Venedik Cumhuriyeti'nin topraklarının Fransa-Avusturya arasında paylaşılmasını öngördü. Anlaşma, bin yıllık Venedik bağımsızlığının sonu ve Napolyon'un artık sivil hükümetten bağımsız hareket edebildiğinin ilk kanıtıydı.",
  kaynak:"standart ders kitabı bilgisi — venedik dosyasındaki 1797-10-17 kaydıyla AYNI olay, 🔴 dunya hizalaması için bkz. kronoloji_venedik.js", yer_kon:[46.017,13.167] },

{ t:"1798-07-01", b:"Napolyon'un Mısır Seferi'nin başlaması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Kahire",
  etiket:["askeri","savas","isgal"],
  d:"Direktuvar, İngiltere'nin Hindistan yolunu kesmek ve Napolyon'u başkentten uzak tutmak amacıyla Mısır Seferi'ni onayladı; sefer aynı zamanda Osmanlı ile 1536'dan beri süren dostane ilişkiyi ilk kez doğrudan savaşa dönüştürdü. Napolyon'un beraberinde götürdüğü bilim heyeti (Institut d'Égypte) modern Egyptology'nin de başlangıcı oldu.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1798'de (1 Temmuz) Napolyon'un Mısır işgali\"" },

{ t:"1799-11-09", b:"18 Brumaire Darbesi — Napolyon'un iktidara gelişi", tur:"siyaset", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","kriz","idari"],
  d:"Napolyon, Direktuvar rejimini askerî güçle devirip kendisini üç konsülden biri (ve fiilen tek karar verici) ilan etti; darbe, on yıllık İhtilâl döneminin siyasî deneylerini kapatıp bireysel askerî otoriteye dayalı yeni bir çağ açtı. Cumhuriyet takviminde 'Brumaire ayının 18. günü' adını taşıyan olay, sonraki bütün askerî darbeler için standart bir siyasî model hâline geldi.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, siyasî model olarak uzun vadeli etkisi nedeniyle" },

{ t:"1800-01-18", b:"Fransa Bankası'nın (Banque de France) kurulması", tur:"iktisat", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["iktisat","ekonomi","idari"],
  d:"Napolyon, İhtilâl'in kâğıt para krizlerinden sonra ülkenin maliyesini istikrara kavuşturmak için merkezî bir emisyon bankası kurdurdu. Kurum, bugün de Fransa'nın merkez bankası olarak faaliyetini sürdürüyor ve modern merkez bankacılığının erken örneklerinden biridir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1801-07-15", b:"Napolyon-Papalık Konkordatosu", tur:"din", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["din","antlasma","reform"],
  d:"Napolyon, Katolikliği 'Fransızların çoğunluğunun dini' olarak tanıyan ama devlet denetimini koruyan bir anlaşmayla papalıkla İhtilâl'den beri süren çatışmayı sona erdirdi. Konkordato, 1905'e kadar kilise-devlet ilişkilerinin çerçevesini belirleyecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1802-05-19", b:"Légion d'Honneur nişanının kurulması", tur:"idari", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["idari","reform"],
  d:"Napolyon, askerî ve sivil hizmette üstün başarı gösterenleri ödüllendirmek için doğuma değil liyakate dayalı yeni bir onur nişanı kurdu. Kurum, İhtilâl'in eşitlikçi ilkeleriyle askerî-bürokratik hiyerarşiyi uzlaştırma girişiminin simgesi oldu ve bugün de yürürlüktedir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1802-03-25", b:"Amiens Barışı", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Amiens",
  etiket:["antlasma","diplomasi"],
  d:"Fransa ile İngiltere arasında imzalanan antlaşma, on yıllık savaşa geçici bir mola verdi; barış yalnız on dört ay sürdü ve 1803'te savaş yeniden başladı. Kısa süreli ateşkes, dönemin Avrupa devletler sisteminin ne denli kırılgan olduğunu gösterdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1802-05-01", b:"Lise (Lycée) sisteminin kurulması", tur:"reform", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["reform","idari","bilim"],
  d:"Napolyon, devlete bağlı, standart müfredatlı orta öğretim kurumları (lycées) kurarak eğitimi merkezî devlet denetimine aldı. Sistem, Fransız millî eğitiminin çekirdek yapısını oluşturdu ve yüzyıllar boyunca büyük ölçüde korundu.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, ay bilgisiyle yazıldı", yer_id:"Paris" },

{ t:"1804-03-21", b:"Napolyon Kanunu'nun (Code civil) yürürlüğe girmesi", tur:"kanun", onem:5, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["kanun","reform","idari"],
  d:"Napolyon'un kişisel gözetiminde hazırlanan medeni kanun, mülkiyet, aile ve sözleşme hukukunu tek, tutarlı ve akılcı bir sistemde birleştirdi. Kanun, Napolyon'un fetihleriyle Avrupa'nın büyük bölümüne ve ötesine yayılarak modern kıta hukuk sistemlerinin en etkili tek metni hâline geldi.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, küresel hukuk sistemleri üzerindeki kalıcı etki nedeniyle" },

{ t:"1804-12-02", b:"Napolyon'un imparator ilan edilmesi", tur:"hukumdar", onem:4, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","hanedan","din"],
  d:"Napolyon, Notre-Dame Katedrali'nde Papa VII. Pius'un huzurunda tacı kendi eliyle başına koyarak Fransızların İmparatoru unvanını aldı; jest, otoritesinin kiliseden değil kendi gücünden geldiğini simgeliyordu. Taç giyme, Cumhuriyet'in fiilen bir imparatorluğa dönüştüğü ve Avrupa'nın yeni bir hanedanla tanıştığı andır.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, Avrupa'daki bütün hanedanlar için doğrudan meşruiyet tehdidi nedeniyle" },

{ t:"1805-12-02", b:"Austerlitz Savaşı — 'Üç İmparator Muharebesi'", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Napolyon, sayıca üstün Avusturya-Rusya ortak ordusunu taktik bir başyapıtla ezici biçimde yendi; zafer, Üçüncü Koalisyon'u dağıttı ve Napolyon'un askerî dehasının doruk noktası sayılır. Muharebe, ertesi yıl Kutsal Roma-Germen İmparatorluğu'nun tasfiyesine giden yolu açtı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[49.152,16.882] },

{ t:"1806-08-06", b:"Kutsal Roma-Germen İmparatorluğu'nun sona ermesi", tur:"son", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyaset"],
  d:"Napolyon'un kurduğu Ren Konfederasyonu'nun baskısı altında II. Franz, sekiz asırlık Kutsal Roma-Germen İmparatorluğu tacından resmen feragat etti. Fransa'nın dolaylı ama belirleyici rolü, Avrupa'nın en eski siyasî kurumunu tarihe gömdü.",
  kaynak:"standart ders kitabı bilgisi · 🔴 dunya:5 — habsburg dosyasıyla BİREBİR AYNI (M-0873 hizalaması)", yer_id:"Viyana" },

{ t:"1806-11-21", b:"Kıta Ablukası'nın (Berlin Kararnamesi) ilanı", tur:"iktisat", onem:4, dunya:4, kapsam:"dis", yer_id:"Berlin",
  etiket:["iktisat","ekonomi","diplomasi"],
  d:"Napolyon, İngiltere'yi ekonomik olarak boğmak için bütün kıta Avrupası'nın İngiliz mallarıyla ticaretini yasakladı. Ablukanın etkisiz kalması ve kaçakçılığı önlemek için gerekli işgaller (özellikle İspanya ve sonra Rusya), imparatorluğun aşırı yayılmasının başlıca nedenlerinden biri oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1807-07-07", b:"Tilsit Antlaşması", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","ittifak"],
  d:"Napolyon ile Çar I. Aleksandr, bir sal üzerinde Niemen Nehri'nde buluşup Rusya-Fransa ittifakını ve Prusya'nın topraklarının yarısını kaybetmesini öngören antlaşmayı imzaladı. Barış geçiciydi; beş yıl sonra aynı ittifakın çöküşü Napolyon'un Rusya Seferi'ne yol açacaktı.",
  kaynak:"TDV `fransa` maddesi (canlı) \"1807: Tilsit Antlaşması\" — gün akademik kaynaklarla çapraz kontrol edildi (7 Temmuz 1807)", yer_kon:[55.082,21.879] },

{ t:"1808-09-27", b:"Erfurt Kongresi — Napolyon-Çar Aleksandr görüşmesi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"Erfurt",
  etiket:["diplomasi"],
  d:"Napolyon ile Çar I. Aleksandr, İspanya'daki savaşın gölgesinde ittifaklarını tazelemek için Erfurt'ta bir araya geldi; görüşmeler görkemli ama sonuçları sınırlı kaldı. TDV maddesi bu buluşmayı Osmanlı-Fransa-Rusya üçgeni bağlamında ayrıca kaydeder.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"Ekim 1808'de Erfurt'ta Napolyon-Çar Aleksandr görüşmesi\"" },

{ t:"1809-05-17", b:"Papalık topraklarının Fransa'ya ilhakı", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["isgal","din"],
  d:"Napolyon, Kıta Ablukası'na direnen Papa VII. Pius'un topraklarını imparatorluğa ilhak etti; Papa'yı aforoz etmesi üzerine Fransız kuvvetleri onu tutuklayıp 1814'e kadar hapsetti. Olay, `data/devletler.js`teki Papalık Devleti kaydında zaten işlenmiştir; bu maddede Fransa cephesinden özetlenir.",
  kaynak:"data/devletler.js (Papalık Devleti kaydı) — Ambrogio Caiani, 'To Kidnap a Pope' (Yale UP, 2021)", yer_id:"Viyana" },

{ t:"1812-06-24", b:"Napolyon'un Rusya Seferi'nin başlaması", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Moskova",
  etiket:["askeri","savas","kayip"],
  d:"Yaklaşık 600 bin kişilik 'Büyük Ordu' Rusya'yı istila etti; Moskova'yı ele geçirmesine rağmen Rus tarafının yakılmış toprak taktiği ve ardından gelen kış, orduyu neredeyse tamamen imha etti. Facia, Napolyon imparatorluğunun askerî çekirdeğini yok ederek çöküşünü geri döndürülemez hâle getirdi.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, imparatorluğun askerî gücünün kalıcı biçimde kırılması nedeniyle" },

{ t:"1813-10-19", b:"Leipzig Savaşı — 'Milletler Savaşı'", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Leipzig",
  etiket:["askeri","savas"],
  d:"Rusya, Prusya, Avusturya ve İsveç'in ortak ordusu, Napolyon'un yeniden topladığı orduyu dört günlük dev bir muharebede yendi; savaş, Napolyon çağının Avrupa'da gördüğü en büyük çarpışmaydı. Yenilgi, Fransız kuvvetlerini Ren'in gerisine çekilmeye zorlayarak imparatorluğun sonunu kesinleştirdi.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, ölçek ve sonuç itibarıyla Napolyon çağının dönüm savaşı" },

{ t:"1814-04-06", b:"Napolyon'un tahttan feragati ve Elba'ya sürgünü", tur:"son", onem:5, dunya:4, kapsam:"ic", yer_id:"Elba",
  etiket:["hukumdar","son"],
  d:"Müttefik kuvvetlerin Paris'e girmesinin ardından Napolyon koşulsuz feragat etmeye zorlandı ve küçük Elba Adası'na sürgüne gönderildi; Bourbon hanedanından XVIII. Louis tahta çıkarak Restorasyon dönemini başlattı. On beş yıllık imparatorluk deneyi burada resmen sona erdi — ama henüz kesin değildi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1815-03-20", b:"Napolyon'un Elba'dan dönüşü — Yüz Gün", tur:"kriz", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["askeri","siyaset","kriz"],
  d:"Napolyon, Elba'dan kaçıp tek bir el ateş edilmeden Paris'e yürüdü; XVIII. Louis kaçtı ve İmparator yeniden tahta oturdu. 'Yüz Gün' olarak anılan bu kısa dönem, üç ay sonra Waterloo'da kesin bir yenilgiyle son bulacaktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1815-06-18", b:"Waterloo Savaşı — Napolyon'un kesin yenilgisi", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","kayip"],
  d:"Wellington ve Blücher komutasındaki İngiliz-Prusya ortak kuvvetleri, bugünkü Belçika'da Napolyon'u kesin biçimde yendi; imparator dört gün sonra ikinci kez ve bu sefer nihai olarak feragat etti. Waterloo, çağdaş dilde 'kesin ve nihai yenilgi' anlamında bir deyim hâline gelecek kadar tarihe kazındı.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, çağ kapatan nihai yenilgi olması nedeniyle", yer_kon:[50.717,4.4] },

{ t:"1815-06-09", b:"Viyana Kongresi Nihaî Senedi'nin imzalanması", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", yer_id:"Viyana",
  etiket:["antlasma","diplomasi","toprak-kayip"],
  d:"Napolyon savaşlarını bitiren büyük düzenleme, Fransa'yı 1792 sınırlarına geri çekti ama büyük güç statüsünü korudu; Talleyrand'ın diplomatik becerisi, yenilen bir devletin masada tam bir taraf olarak yer almasını sağladı. Kongre'nin kurduğu 'güçler dengesi' düzeni, bir asra yakın büyük bir Avrupa savaşını önleyecekti.",
  kaynak:"standart ders kitabı bilgisi · 🔴 dunya:5 — habsburg dosyasıyla BİREBİR AYNI (M-0873 hizalaması)" },

{ t:"1824-09-16", b:"X. Charles'ın tahta çıkışı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar"],
  d:"XVIII. Louis'nin ölümüyle tahta çıkan kardeşi X. Charles, eski rejimin ('Ancien Régime') ayrıcalıklarını geri getirmeye çalışan sert muhafazakâr politikalarıyla altı yıl içinde kendi devrilişini hazırlayacaktı. Onun saltanatı, Restorasyon'un giderek halk desteğinden kopan son evresidir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1827-10-20", b:"Navarin Deniz Savaşı", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"Fransa, İngiltere ve Rusya'nın birleşik donanması, Yunan bağımsızlık ayaklanmasını bastırmaya çalışan Osmanlı-Mısır donanmasını Navarin Körfezi'nde imha etti. TDV maddesinde de anılan bu müdahale, Fransa'nın Osmanlı'ya karşı ilk kez doğrudan silahlı harekâta katıldığı andır.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1827 (Navarin): müttefik donanmasının Osmanlı donanmasını yakması\"", yer_kon:[36.91,21.68] },

{ t:"1829-04-24", b:"Yunanistan bağımsızlığının Bâbıâli'ye kabul ettirilmesi", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis", yer_id:"İstanbul",
  etiket:["diplomasi","siyaset"],
  d:"Fransa'nın da içinde bulunduğu büyük güçler baskısıyla Osmanlı, Yunan bağımsızlığını fiilen kabul etmek zorunda kaldı. TDV maddesi bu tarihi Fransa-Osmanlı ilişkilerinin gerginleştiği bir dönüm noktası olarak kaydeder.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"24 Nisan 1829: Yunanistan bağımsızlığı Bâbıâli'ye zorla kabul ettirildi\"" },

{ t:"1830-06-14", b:"Fransa'nın Cezayir'i işgali", tur:"isgal", onem:5, dunya:4, kapsam:"dis", yer_id:"Cezayir",
  etiket:["isgal","toprak-kazanc","askeri"],
  d:"X. Charles hükümeti, iç siyasî desteğini pekiştirmek amacıyla düzenlediği seferle Cezayir'i işgal etti; işgal 132 yıl sürecek bir sömürge egemenliğinin başlangıcı oldu. TDV maddesi tarihi doğrudan verir; olay Osmanlı'nın Kuzey Afrika'daki nüfuzuna ilk büyük Avrupa darbesidir.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1830 (14 Haziran): Fransa'nın Cezayir işgali\"" },

{ t:"1830-07-28", b:"Temmuz Devrimi ('Üç Şanlı Gün')", tur:"isyan", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","hanedan","kriz"],
  d:"X. Charles'ın basın özgürlüğünü ve seçmen tabanını kısıtlayan kararnameleri, Paris'te üç günlük bir barikat ayaklanmasına yol açtı; kral tahttan çekilmek zorunda kaldı. `data/devletler.js`teki fransa-cumhuriyet kaydındaki 1830-08-09 maddesiyle (Louis Philippe'in tahta çıkışı) doğrudan bağlantılıdır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1830-08-09", b:"Louis Philippe'in tahta çıkışı — Temmuz Monarşisi", tur:"hukumdar", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","anayasa"],
  d:"Orléans kolundan Louis Philippe, 'Fransızların Kralı' unvanıyla ve daha geniş bir seçmen tabanına dayanan anayasal bir monarşiyle tahta çıktı. On sekiz yıl sürecek Temmuz Monarşisi, büyük burjuvazinin siyasî iktidara ortak olduğu bir dönem oldu.",
  kaynak:"data/devletler.js (fransa-cumhuriyet kaydı) — TDV `fransa` genel maddesiyle uyumlu" },

{ t:"1830-11-25", b:"'Hernani Savaşı' — Victor Hugo ve Romantizmin zaferi", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","sanat"],
  d:"Victor Hugo'nun klasik tiyatro kurallarını çiğneyen oyunu 'Hernani'nin ilk gösterimi, klasisist ve romantik taraftarlar arasında salonda neredeyse yumruk yumruğa bir kavgaya dönüştü. Olay, Romantizm akımının Fransız sahnesindeki kesin zaferi olarak edebiyat tarihine geçti.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, ay bilgisiyle yazıldı" },

{ t:"1833-07-08", b:"Hünkâr İskelesi Antlaşması'nın imzalanması", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyaset"],
  d:"Osmanlı'nın Rusya ile imzaladığı bu savunma ittifakı, Fransa ve İngiltere'de büyük kaygı yarattı; TDV maddesi olayı Fransa'nın Osmanlı Boğazlar siyasetine ilgisinin arttığı bir dönüm noktası olarak kaydeder. Antlaşma, Fransa'yı sonraki on yıllarda Osmanlı toprak bütünlüğünü destekleyen bir Boğazlar siyasetine yöneltti.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1833: Hünkâr İskelesi Antlaşması\" · gün akademik literatürle çapraz kontrol edildi", yer_kon:[41.05,29.05] },

{ t:"1840-07-15", b:"Londra Antlaşması — Osmanlı toprak bütünlüğünün Avrupa güvencesi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Londra",
  etiket:["antlasma","diplomasi"],
  d:"Fransa'nın dışlandığı bu antlaşmayla İngiltere, Avusturya, Prusya ve Rusya, Osmanlı'nın toprak bütünlüğünü Mısır Valisi Mehmed Ali Paşa'ya karşı güvence altına aldı. Fransa'nın Mehmed Ali'yi desteklediği bu kriz, ülkeyi kısa süreliğine Avrupa'da yalnız bıraktı.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"15 Temmuz 1840: Londra Antlaşması (Osmanlı toprak bütünlüğü korunması)\"" },

{ t:"1848-02-24", b:"Şubat Devrimi — II. Cumhuriyet'in ilanı", tur:"kurulus", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","kurulus","anayasa"],
  d:"Paris'teki halk ayaklanması Louis Philippe'i tahttan indirdi; geçici hükümet Cumhuriyet'i ilan etti ve erkekler için genel oy hakkını tanıdı. Devrim, aynı yıl bütün Avrupa'yı saracak devrimci dalganın (1848 Devrimleri) kıvılcımı oldu.",
  kaynak:"data/devletler.js (fransa-cumhuriyet kaydı) · standart ders kitabı bilgisi — dunya:4, Avrupa çapındaki tetikleyici etkisi nedeniyle" },

{ t:"1848-04-27", b:"Fransız sömürgelerinde köleliğin kaldırılması", tur:"reform", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["reform","sosyal","kanun"],
  d:"Geçici hükümetin altında Victor Schoelcher'in öncülüğünde çıkarılan kararname, Fransız sömürgelerindeki köleliği kesin olarak kaldırdı. Karar, İhtilâl'in 1794'te ilan edip Napolyon'un 1802'de geri getirdiği yasağın nihai ve kalıcı hâle gelmesiydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1848-12-10", b:"Louis-Napoléon Bonapart'ın cumhurbaşkanı seçilmesi", tur:"siyaset", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","hanedan"],
  d:"Napolyon'un yeğeni Louis-Napoléon, adının taşıdığı prestijle genel oyda ezici bir çoğunlukla II. Cumhuriyet'in ilk cumhurbaşkanı seçildi. Dört yıl sonra kendisini imparator ilan ederek Cumhuriyet'i bizzat sona erdirecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1852-12-02", b:"III. Napolyon'un imparator ilan edilmesi — II. İmparatorluk", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["hukumdar","hanedan","kurulus"],
  d:"Louis-Napoléon, bir yıl önceki askerî darbesinin ardından halkoylamasıyla kendisini III. Napolyon unvanıyla imparator ilan etti; tarih, amcasının taç giymesinin (2 Aralık 1804) yıldönümüne bilerek denk getirildi. `data/devletler.js` bu tarihi zaten kaydediyordu; bu dosyada TDV ve akademik kaynakla doğrulanarak korundu.",
  kaynak:"data/devletler.js (fransa-cumhuriyet kaydı) · standart ders kitabı bilgisi" },

{ t:"1853-10-04", b:"Kırım Savaşı'nın başlaması — Fransa'nın Osmanlı yanında savaşa girişi", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","ittifak"],
  d:"Fransa, Rusya'nın Osmanlı topraklarına yayılmasını Akdeniz çıkarlarına tehdit sayarak İngiltere'yle birlikte Osmanlı'nın yanında savaşa girdi; TDV maddesi bu ittifakı 1853-1856 arasında açıkça kaydeder. Savaş, III. Napolyon'a beklediği uluslararası prestiji kazandırdı ve Paris'te imzalanan barışla (1856) sona erecekti.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1853-1856: Kırım Savaşı (Fransa ve İngiltere Osmanlı tarafında)\"", yer_id:"Paris" },

{ t:"1855-05-15", b:"Paris Dünya Sergisi", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","iktisat","bilim"],
  d:"III. Napolyon rejiminin sanayi ve kültür gücünü sergilemek için düzenlediği ilk büyük Paris Dünya Sergisi, milyonlarca ziyaretçi çekti. Sergi, imparatorluğun ekonomik modernleşme iddiasının uluslararası vitrini oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1856-02-18", b:"Islahat Fermanı'nın ilanı — Paris Kongresi'nin gölgesinde", tur:"reform", onem:3, dunya:3, kapsam:"dis", yer_id:"İstanbul",
  etiket:["reform","diplomasi","din"],
  d:"Kırım Savaşı'nı bitiren Paris Kongresi öncesinde ilan edilen ferman, gayrimüslim Osmanlı tebaasına eşitlik güvencesi getirdi; Fransa, fermanın hazırlanmasında etkili büyük güçlerden biriydi. TDV maddesi bu tarihi Fransa-Osmanlı ilişkilerinin Tanzimat dönemindeki en somut sonucu olarak kaydeder.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"18 Şubat 1856: Islahat Fermanı ilânı\"" },

{ t:"1857-08-20", b:"Baudelaire'in 'Kötülük Çiçekleri' davası", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","sanat","kanun"],
  d:"Charles Baudelaire'in şiir kitabı 'Les Fleurs du Mal' 'kamu ahlakına aykırılık' gerekçesiyle mahkemeye verildi ve altı şiiri yasaklandı. Dava, dönemin sanatsal özgürlük-sansür geriliminin ve modern şiirin doğuşunun simge olaylarından biridir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1859-06-24", b:"Solferino Savaşı — İtalyan birliği için Fransız desteği", tur:"savas", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"III. Napolyon, Piedmont-Sardunya'nın yanında Avusturya'ya karşı savaşarak İtalyan birliği sürecini destekledi; muharebenin dehşet verici yaralı sayısı, İsviçreli tanık Henry Dunant'ı Kızılhaç'ı kurmaya yöneltti. Zafer karşılığında Fransa, Savoie ve Nice'i topraklarına kattı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[45.383,10.583] },

{ t:"1863-06-10", b:"Meksika Seferi — Maximilian'ın imparator ilanı hazırlığı", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["isgal","askeri","siyaset"],
  d:"III. Napolyon, ABD İç Savaşı'nın verdiği fırsatla Meksika'yı işgal ettirip Habsburg Arşidükü Maximilian'ı kukla imparator yaptı; macera 1867'de Maximilian'ın idamıyla Fransa için büyük bir dış politika hezimetine dönüştü. Girişim, III. Napolyon'un yayılmacı hırsının en pahalı ve en talihsiz örneğidir.",
  kaynak:"standart ders kitabı bilgisi — gün bilinmiyor, ay bilgisiyle yazıldı", kapsam_genis:true },

{ t:"1863-05-15", b:"'Çayırda Öğle Yemeği' skandalı — Manet ve modern resmin doğuşu", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["sanat","kultur"],
  d:"Édouard Manet'nin 'Le Déjeuner sur l'herbe' tablosu resmi Salon'dan reddedilince, imparatorun izniyle açılan alternatif 'Reddedilenler Salonu'nda sergilendi ve büyük skandal yarattı. Olay, akademik resim geleneğine meydan okuyan modern sanatın sembolik başlangıç noktalarından biri sayılır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1869-11-17", b:"Süveyş Kanalı'nın açılışı", tur:"iktisat", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["iktisat","toprak-kazanc","ekonomi"],
  d:"Fransız diplomat ve mühendis Ferdinand de Lesseps'in yönettiği proje, Akdeniz'i Kızıldeniz'e bağlayarak Avrupa-Asya deniz ticaretini kökten değiştirdi. TDV maddesi kanalı Fransa-Osmanlı ilişkilerinin Mısır'daki mali-siyasî boyutunun merkezine yerleştirir; kanal sonraki on yıllarda İngiliz-Fransız rekabetinin de odağı olacaktı.",
  kaynak:"standart ders kitabı bilgisi · dunya:5, küresel ticaret yollarını kalıcı biçimde değiştirmesi nedeniyle", yer_kon:[31.265,32.302] },

{ t:"1870-07-19", b:"Fransa-Prusya Savaşı'nın başlaması", tur:"savas", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas"],
  d:"III. Napolyon, İspanya tahtı adaylığı krizini (Ems Telgrafı) bahane ederek Prusya'ya savaş ilan etti; Bismarck'ın kışkırttığı bu savaş, Fransa'nın hazırlıksızlığı yüzünden hızla felakete dönüşecekti. Savaş, hem III. İmparatorluğu hem de Avrupa'nın güç dengesini kökten değiştirecek sonuçlar doğurdu.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, Avrupa güç dengesini kalıcı biçimde değiştiren sonuçları nedeniyle", yer_id:"Paris" },

{ t:"1870-09-02", b:"Sedan Savaşı — III. Napolyon'un esir düşmesi", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","kayip"],
  d:"Prusya kuvvetleri Fransız ordusunu Sedan'da kuşatıp bizzat İmparator III. Napolyon'u esir aldı; bozgun, iki asra yakın süredir Avrupa'nın en büyük askerî gücü sayılan Fransa'nın itibarını derinden sarstı. Esaret haberi Paris'e ulaşınca iki gün içinde İmparatorluk çökecekti.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, II. İmparatorluk'un çöküşünü doğrudan tetikleyen yenilgi", yer_kon:[49.7,4.95] },

{ t:"1870-09-04", b:"III. Cumhuriyet'in ilanı", tur:"kurulus", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["kurulus","anayasa","siyaset"],
  d:"Sedan bozgunu haberi üzerine Paris'te toplanan kalabalık, Meclis binasını basıp Cumhuriyet'i ilan etti; savaş sürerken kurulan geçici hükümet, işgal ve kuşatma altında görev üstlendi. `data/devletler.js`teki 1870-09-04 kaydı bu dosyada TDV ve akademik kaynakla doğrulanarak korundu.",
  kaynak:"data/devletler.js (fransa-cumhuriyet kaydı) · standart ders kitabı bilgisi" },

{ t:"1871-01-18", b:"Alman İmparatorluğu'nun Versay'da ilanı", tur:"kurulus", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","siyaset","hanedan"],
  d:"Alman prensleri, hâlâ kuşatma altındaki Fransa'nın Versay Sarayı Aynalar Salonu'nda toplanıp Prusya Kralı I. Wilhelm'i Alman İmparatoru ilan etti; seçilen yer, Fransa'ya bilinçli bir aşağılama olarak okundu. Alman birliğinin bu şekilde ilanı, Avrupa güç dengesinde bir asrı aşkın sürecek yeni bir merkezin doğuşuydu.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, Avrupa'nın yeni büyük gücünün doğuşu olması nedeniyle", yer_kon:[48.805,2.12] },

{ t:"1871-03-18", b:"Paris Komünü'nün ilanı", tur:"isyan", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","kriz","sosyal"],
  d:"Savaş sonrası hükümetin ordu birliklerini silahsızlandırma girişimine karşı ayaklanan Paris halkı, kendi devrimci belediye yönetimini ('Komün') ilan etti. İki ay sonra hükümet kuvvetlerince kanlı biçimde bastırılan Komün, sonraki bütün sosyalist hareketler için hem ilham hem uyarı örneği oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1871-05-21", b:"'Kanlı Hafta' — Paris Komünü'nün bastırılması", tur:"isyan", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["isyan","kriz","askeri"],
  d:"Versay hükümetinin kuvvetleri, sokak sokak çarpışarak Komün'ü bir haftada bastırdı; binlerce Komünar yargısız infaz edildi. Bastırma, III. Cumhuriyet'in ilk yıllarını derin bir sınıfsal travma ve güvensizlikle damgaladı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1871-05-10", b:"Frankfurt Antlaşması — Alsace-Lorraine'in kaybı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"Frankfurt",
  etiket:["antlasma","toprak-kaybi"],
  d:"Fransa-Prusya Savaşı'nı bitiren antlaşma, Fransa'yı Alsace ile Lorraine'in büyük bölümünü Almanya'ya bırakmaya ve ağır bir savaş tazminatı ödemeye mahkûm etti. Bu toprak kaybı, sonraki kırk üç yıl Fransız dış politikasının ('revanchisme') temel saplantısı hâline geldi ve I. Dünya Savaşı'nın uzak nedenlerinden biri oldu.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, uzun vadeli Fransız-Alman geriliminin doğrudan kaynağı olması nedeniyle" },

{ t:"1875-02-25", b:"III. Cumhuriyet Anayasa Yasaları'nın kabulü", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["anayasa","reform"],
  d:"Meclis, tek bir oy farkla, monarşi restorasyonu tartışmalarını fiilen kapatıp cumhuriyetçi bir anayasal çerçeveyi (iki meclisli parlamento, cumhurbaşkanlığı) kabul etti. Bu anayasa, sonraki altmış beş yıl boyunca Fransa'yı yöneterek Fransız tarihinin en uzun ömürlü anayasal düzenini kurdu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1881-03-28", b:"Jules Ferry Yasaları — laik, zorunlu ve parasız ilköğretim", tur:"reform", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["reform","kanun","din"],
  d:"Eğitim Bakanı Jules Ferry'nin öncülüğündeki yasalar, ilköğretimi devlet tekeline alıp dinî öğretimden ayırarak parasız ve zorunlu hâle getirdi. Reform, III. Cumhuriyet'in cumhuriyetçi-laik kimliğini kuran en kalıcı toplumsal mühendislik girişimidir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Paris" },

{ t:"1881-05-12", b:"Bardo Antlaşması — Tunus'un Fransız himayesine girmesi", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Tunus",
  etiket:["antlasma","toprak-kazanc","isgal"],
  d:"Fransa, sınır çatışmasını bahane ederek Tunus'u işgal edip Bey'i bir himaye antlaşması imzalamaya zorladı; `data/devletler.js`teki fransa-cumhuriyet kaydı bu olayı zaten işliyordu. Tunus'un fiilî Osmanlı-tâbi statüsünün sona ermesi, Kuzey Afrika'da Osmanlı nüfuzunun geri çekilişinin bir başka halkasıydı.",
  kaynak:"data/devletler.js (fransa-cumhuriyet kaydı) — standart ders kitabı bilgisiyle çapraz doğrulandı" },

{ t:"1885-07-06", b:"Pasteur'ün ilk kuduz aşısı uygulaması", tur:"bilim", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim"],
  d:"Louis Pasteur, kuduz köpek tarafından ısırılan dokuz yaşındaki Joseph Meister'e deneysel aşısını uygulayarak çocuğun hastalığa yakalanmasını önledi. Başarı, mikrop teorisinin ve aşı biliminin dünya çapında kabulünü kesinleştiren dönüm noktalarından biri oldu.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, modern tıbba küresel katkısı nedeniyle" },

{ t:"1889-05-06", b:"Eyfel Kulesi'nin açılışı", tur:"mimari", onem:4, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["mimari","kultur","bilim"],
  d:"İhtilâl'in yüzüncü yılı için düzenlenen Dünya Sergisi'nin giriş anıtı olarak inşa edilen kule, tamamlandığında dünyanın en yüksek yapısıydı ve mühendislik camiasında büyük tartışma yaratmıştı. Yıkılması planlanan yapı, radyo anteni işlevi kazanınca kalıcı hâle geldi ve zamanla Fransa'nın en tanınan simgesi oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1889-01-27", b:"Boulanger Krizi'nin doruğu", tur:"kriz", onem:3, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","kriz"],
  d:"Popülist General Georges Boulanger, cumhurbaşkanlığı seçimini kazanabilecek bir halk desteğine ulaştı ama darbe fırsatını kullanmaktan kaçınarak hareketinin çökmesine yol açtı. Kriz, III. Cumhuriyet'in ilk büyük otoriter-popülist meydan okumasıydı ve rejimin kırılganlığını gözler önüne serdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1894-12-22", b:"Alfred Dreyfus'un vatana ihanetten mahkûm edilmesi", tur:"kriz", onem:5, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["kriz","siyaset","sosyal"],
  d:"Yahudi asıllı topçu subayı Alfred Dreyfus, sahte kanıtlarla Almanya'ya casusluk suçlamasıyla mahkûm edilip Şeytan Adası'na sürgün edildi. Dava, ordunun, kilisenin ve antisemitizmin cumhuriyetçi-laik kesimlerle karşı karşıya geldiği ve on yıl sürecek 'Dreyfus Olayı'nı başlattı.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, Fransız toplumunu ve siyasetini on yılı aşkın süre bölmesi nedeniyle" },

{ t:"1895-12-28", b:"Lumière Kardeşler'in ilk sinema gösterimi", tur:"bilim", onem:4, dunya:4, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim","kultur","sanat"],
  d:"Auguste ve Louis Lumière, Paris'te Grand Café'de paralı bilet karşılığında hareketli görüntüleri halka ilk kez gösterdi; gösterim, sinemanın ticari bir sanat ve endüstri olarak doğuşunun kabul edilen başlangıç anıdır. İcat, yirminci yüzyılın en etkili kitle iletişim ve sanat formunu başlattı.",
  kaynak:"standart ders kitabı bilgisi — dunya:4, sinemanın küresel bir sanat/endüstri olarak doğuşu nedeniyle" },

{ t:"1898-01-13", b:"Émile Zola'nın 'İtham Ediyorum' (J'accuse) mektubu", tur:"kultur", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["kultur","siyaset","kanun"],
  d:"Yazar Émile Zola, gazete manşetinde yayımladığı açık mektupla ordu komuta kademesini Dreyfus davasında kanıt uydurmakla ve adaleti çarpıtmakla suçladı. Mektup, aydınların siyasî bir davada kamuoyunu doğrudan seferber ettiği modern 'entelektüel angajman'ın kurucu örneği sayılır.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1898-12-26", b:"Curie çiftinin polonyum ve radyumu keşfi", tur:"bilim", onem:4, dunya:5, kapsam:"ic", yer_id:"Paris",
  etiket:["bilim"],
  d:"Marie ve Pierre Curie, Paris'teki laboratuvarlarında tükenmiş uranyum cevherini işleyerek iki yeni radyoaktif elementi (polonyum ve radyum) tespit etti. Keşif, radyoaktivite biliminin ve modern nükleer fiziğin temellerinden birini kurdu; Marie Curie bu çalışmayla iki ayrı dalda Nobel Ödülü kazanan ilk kişi olacaktı (1903, 1911).",
  kaynak:"standart ders kitabı bilgisi — dunya:5, modern fiziğin temel taşlarından biri olması nedeniyle" },

{ t:"1904-04-08", b:"İtilâf-ı Müselles'in temeli — İngiltere-Fransa Antant Cordiale'i", tur:"ittifak", onem:5, dunya:5, kapsam:"dis", yer_id:"Londra",
  etiket:["ittifak","diplomasi"],
  d:"Yüzyıllardır süregelen sömürge rekabetini sona erdiren antlaşmayla Fransa ve İngiltere, Mısır ve Fas'taki karşılıklı çıkar alanlarını tanıyarak bir dostluk ilişkisi kurdu. Bu yakınlaşma, on yıl sonra I. Dünya Savaşı'nda iki ülkeyi aynı safta buluşturacak ittifak sisteminin temel taşlarından biri oldu.",
  kaynak:"standart ders kitabı bilgisi · dunya:5, I. Dünya Savaşı ittifak sisteminin doğrudan temeli olması nedeniyle" },

{ t:"1905-12-09", b:"Kilise ve Devletin Ayrılması Yasası", tur:"din", onem:5, dunya:3, kapsam:"ic", yer_id:"Paris",
  etiket:["din","kanun","reform"],
  d:"Yasa, 1801 Konkordatosu'nu feshederek dini devlet finansmanından tamamen ayırdı ve 'laiklik' (laïcité) ilkesini Fransız Cumhuriyeti'nin kurucu değeri hâline getirdi. Düzenleme, kilise mülklerinin envanteri sırasında yerel çatışmalara yol açsa da bugün de Fransız devlet-din ilişkisinin hukukî çerçevesidir.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1911-11-04", b:"İkinci Fas Krizi — Agadir Krizi'nin çözümü", tur:"diplomasi", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","kriz","toprak-kazanc"],
  d:"Almanya'nın bir savaş gemisini Agadir'e göndererek Fas'taki Fransız nüfuzuna meydan okuduğu kriz, Fransa'nın Kongo'dan toprak tavizi vermesiyle çözüldü ama Fas üzerindeki Fransız himayesini de kesinleştirdi. Kriz, Almanya'ya karşı İngiliz-Fransız dayanışmasını daha da pekiştiren gerginlik dizisinin son büyük halkasıydı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_id:"Berlin" },

{ t:"1912-03-30", b:"Fas Antlaşması — Fransız himayesinin resmîleşmesi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kazanc"],
  d:"Fes Antlaşması, Fas Sultanlığı'nı resmen Fransız himayesi altına aldı; ülkenin iç idaresi Sultan'da kalsa da dış ilişkiler ve ordu Fransız Genel Vali'nin denetimine geçti. Himaye rejimi, 1956'daki bağımsızlığa kadar sürecekti.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[34.033,-5] },

{ t:"1914-07-31", b:"Jean Jaurès'in suikastı", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Paris",
  etiket:["siyaset","olum"],
  d:"Sosyalist lider ve savaş karşıtı Jean Jaurès, savaşı önlemeye çalıştığı son günlerinde milliyetçi bir fanatik tarafından bir kafede vurularak öldürüldü. Suikast, savaş öncesi son barış umudunun da söndüğü an olarak Fransız siyasî belleğinde derin iz bıraktı.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1914-08-03", b:"Almanya'nın Fransa'ya savaş ilanı", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"Paris",
  etiket:["askeri","savas"],
  d:"Almanya, Schlieffen Planı gereği Belçika üzerinden Fransa'yı hızla saf dışı bırakmayı hedefleyerek savaş ilan etti; Fransa dört yıl sürecek, kendi topraklarının önemli bir bölümünü cepheye çeviren I. Dünya Savaşı'na sürüklendi. Genel seferberlik, milyonlarca Fransız erkeğini cepheye çağıracaktı.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, dünya sistemini kalıcı biçimde değiştiren savaşın Batı Cephesi'ni açması nedeniyle" },

{ t:"1914-09-05", b:"Marne Savaşı — Paris'in kurtarılması", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Paris",
  etiket:["askeri","savas"],
  d:"Fransız ve İngiliz kuvvetleri, Paris taksilerinin bile asker taşımaya seferber edildiği bir karşı taarruzla Alman ilerleyişini başkentin kapılarında durdurdu. Zafer, Almanya'nın hızlı zafer planını (Schlieffen Planı) çökertip savaşı dört yıl sürecek bir siper savaşına dönüştürdü.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı" },

{ t:"1916-02-21", b:"Verdun Savaşı'nın başlaması", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","savas","kayip"],
  d:"Alman ordusunun 'Fransa'yı kansızlıktan öldürmek' amacıyla başlattığı Verdun Savaşı, on ay süren ve iki taraftan yaklaşık 700 bin kayıpla sonuçlanan I. Dünya Savaşı'nın en kanlı muharebelerinden biri oldu. 'Onlar geçemeyecek' (Ils ne passeront pas) sözü, Fransız direnişinin simgesi hâline geldi.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, ölçek ve simgesel önemi nedeniyle", yer_kon:[49.159,5.382] },

{ t:"1916-05-16", b:"Sykes-Picot Antlaşması'nın imzalanması", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kazanc"],
  d:"Fransız diplomat François Georges-Picot ile İngiliz Mark Sykes arasında gizlice müzakere edilen antlaşma, Osmanlı'nın Arap topraklarını Fransız ve İngiliz nüfuz bölgelerine bölüştürdü. TDV maddesinde de kaydedilen bu gizli paylaşım, Ortadoğu'nun yüzyıl sonrasına kadar sürecek sınırlarının en tartışmalı temelini attı.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"16 Mayıs 1916: Sykes-Picot Antlaşması\" · dunya:5, Ortadoğu sınırlarının kalıcı belirleyicisi olması nedeniyle", yer_id:"Londra" },

{ t:"1916-09-15", b:"İlk tank saldırısı — Somme Muharebesi'nde", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","bilim"],
  d:"Somme Muharebesi sırasında İngiliz kuvvetleri (Fransız cephesinin bir parçası olarak) ilk kez zırhlı tankları savaş alanına sürdü; yenilik siper savaşının çıkmazını kırmaya yönelik ilk ciddi teknolojik girişimdi. Muharebe, aynı zamanda savaşın en yüksek kayıp oranlı çarpışmalarından biriydi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[50,2.65] },

{ t:"1917-04-16", b:"Nivelle Taarruzu ve Fransız ordusu isyanları", tur:"isyan", onem:4, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["isyan","askeri","kriz"],
  d:"General Nivelle'in kesin zafer vaat ettiği taarruz ağır kayıplarla başarısız olunca, tükenmiş Fransız birliklerinde geniş çaplı itaatsizlik dalgaları başladı; General Pétain, disiplini iyileştirme ve siper koşullarını düzeltme sözüyle isyanları büyük ölçüde şiddetsiz bastırdı. Kriz, Fransız ordusunun moral tükenişinin savaşın en kritik anlarından biri olduğunu gösterdi.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", kapsam_genis:true },

{ t:"1917-04-17", b:"Saint-Jean-de-Maurienne Antlaşması", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Fransa, İngiltere ve İtalya arasında imzalanan gizli antlaşma, Sykes-Picot düzenlemesine İtalya'nın Anadolu'daki pay taleplerini de eklemeyi öngördü; TDV maddesi bunu doğrudan Osmanlı topraklarının paylaşım zincirinin bir halkası olarak kaydeder. Antlaşma, savaş sonrası İtalya'nın Anadolu'ya asker çıkarmasının (1919) hukukî dayanaklarından biriydi.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"17 Nisan 1917: Saint Jean de Maurienne Antlaşması\"", yer_kon:[45.276,6.349] },

{ t:"1918-11-11", b:"Compiègne Ateşkesi — I. Dünya Savaşı'nın Batı Cephesi'nde sona ermesi", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","askeri","diplomasi"],
  d:"Almanya, Compiègne ormanında bir tren vagonunda imzalanan ateşkesle silah bırakmayı kabul etti; dört yıllık, Fransız topraklarının büyük bölümünü harabeye çeviren savaş sona erdi. TDV maddesindeki 30 Ekim 1918 Mondros Mütarekesi ile aynı haftaya denk gelen bu tarih, Osmanlı ve Almanya cephelerinin aynı anda çöktüğü küresel dönüm noktasıdır.",
  kaynak:"standart ders kitabı bilgisi · 🔴 dunya:5 — habsburg dosyasıyla BİREBİR AYNI (M-0873 hizalaması, Cihan Harbi'nin sonu)", yer_kon:[49.417,2.826] },

{ t:"1919-06-28", b:"Versay Antlaşması'nın imzalanması", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kazanc"],
  d:"Fransa'nın öncülüğünde hazırlanan antlaşma, Almanya'yı ağır tazminata mahkûm edip Alsace-Lorraine'i Fransa'ya iade etti; imza töreni bilerek 1871'de Alman İmparatorluğu'nun ilan edildiği Aynalar Salonu'nda yapıldı — kırk sekiz yıllık aşağılanmanın simgesel rövanşıydı. Antlaşmanın ağırlığı, sonraki yirmi yıl içinde yeni bir dünya savaşının zeminini hazırlayacaktı.",
  kaynak:"standart ders kitabı bilgisi — dunya:5, sonraki yirmi yılın dünya düzenini belirlemesi nedeniyle", yer_kon:[48.805,2.12] },

{ t:"1920-04-25", b:"San Remo Konferansı — manda paylaşımının kesinleşmesi", tur:"antlasma", onem:3, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kazanc"],
  d:"Konferans, Sykes-Picot'nun öngördüğü paylaşımı Milletler Cemiyeti manda sistemi çerçevesinde resmîleştirdi: Suriye ve Lübnan Fransız, Filistin ve Irak İngiliz mandası oldu. TDV maddesi bu tarihi doğrudan kaydeder; karar, bugünkü Suriye-Lübnan sınırlarının uluslararası hukuktaki temelidir.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"25 Nisan 1920: San Remo Antlaşması\" · dunya:4, Ortadoğu manda düzenini kesinleştirmesi nedeniyle", yer_kon:[43.817,7.776] },

{ t:"1920-07-24", b:"Meysalun Savaşı — Fransa'nın Şam'ı işgali", tur:"isgal", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["isgal","askeri"],
  d:"Fransız kuvvetleri, Kral Faysal'ın kısa ömürlü Arap Krallığı'nın direnişini Meysalun'da kırıp Şam'a girdi; Suriye mandası böylece fiilen kuruldu. Zafer, San Remo kararlarının silah zoruyla hayata geçirilmesiydi ve Fransız-Arap ilişkilerinde uzun vadeli bir güvensizliğin başlangıcı oldu.",
  kaynak:"standart ders kitabı bilgisi — WebFetch ile doğrulanmadı", yer_kon:[33.53,36.06] },

{ t:"1920-08-10", b:"Sevr Antlaşması'nın imzalanması", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kaybi"],
  d:"Fransa'nın da imzacısı olduğu antlaşma, Osmanlı Devleti'ni parçalayıp Anadolu'nun büyük bölümünü yabancı nüfuz bölgelerine ayırdı; TDV maddesi bu tarihi doğrudan kaydeder. Antlaşma hiçbir zaman uygulanamadı — Millî Mücadele'nin zaferi onu üç yıl sonra Lozan'la geçersiz kılacaktı.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"10 Ağustos 1920: Sevr Antlaşması\"", yer_kon:[48.824,2.214] },

{ t:"1921-10-20", b:"Ankara Antlaşması — Fransa'nın Anadolu'daki savaşı sona erdirmesi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi","toprak-kayip"],
  d:"Fransa, Kilikya'daki (Adana-Maraş-Antep) işgal kuvvetlerini geri çekmeyi ve Türkiye Büyük Millet Meclisi hükümetini fiilen tanımayı kabul ederek Millî Mücadele karşısındaki ilk büyük itilaf devleti geri adımını attı. TDV maddesi bu antlaşmayı Hatay'ın (İskenderun Sancağı) özel statüsünün de başlangıcı olarak kaydeder.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"20 Ekim 1921: Ankara Antlaşması (Hatay'ın özel statüsü)\"", yer_id:"Ankara" },

{ t:"1923-07-24", b:"Lozan Antlaşması'nın imzalanması", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Fransa'nın da imzacısı olduğu Lozan, Sevr'i tamamen geçersiz kılıp Türkiye Cumhuriyeti'nin bağımsızlığını ve bugünkü sınırlarının büyük bölümünü uluslararası hukukta tescil etti. TDV maddesi kaydını burada kapatır; bu dosyanın kapsamı da (1281-1923) bu antlaşmayla son buluyor.",
  kaynak:"TDV `fransa` maddesi (canlı) — \"1923: Lozan Antlaşması\" · dunya:5, iki taraflı bir barışın ötesinde yeni bir devletin uluslararası tanınmasını sağlaması nedeniyle", yer_id:"Lozan" },

];
