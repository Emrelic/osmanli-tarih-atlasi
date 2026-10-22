// kuyrukdogrula3 üretici: zincir_kuyruk.js + kronoloji_sinir_dogu_kuyrukdogrula3.js
// Her kaynak metni bu oturumda AÇILAN kaynağa dayanır (RAPOR.md "açılan kaynaklar").
const fs = require('fs'), vm = require('vm'), path = require('path');
const DIR = __dirname, KOK = path.resolve(DIR, '..', '..', '..');
function yuk(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const adlar = { '__BOSLUK__': 'boşluk (sahipsiz)' };
for (const d of (yuk(path.join(KOK, 'data/devletler.js')).DEVLETLER || [])) adlar[d.id] = d.ad;
for (const d of (yuk(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || [])) adlar[d.id] = adlar[d.id] || d.ad;
const BB = 'BOŞLUK BEYANI: arandı, bulunamadı: ';
const BY = 'BEYANLI YAKLAŞIKLIK: ';
const SLUG = { 'Kayrevan': 'kayrevan', 'Ağlebîler': 'aglebiler', 'Zîrîler': 'ziriler', 'Fâtımîler': 'fatimiler', 'Hafsîler': 'hafsiler', 'Muvahhidler': 'muvahhidler', 'Tunus': 'tunus', 'Mali': 'mali', 'Gâne': 'gane' };
const TDV = (m) => 'TDV İslâm Ansiklopedisi «' + m + '», https://islamansiklopedisi.org.tr/' + SLUG[m];

const R = [];
// r(ad, kume, {onceki, s:[{f,d,k,b,kaynak,ic}], bit, bit_kaynak, bit_not, bit_aralik, kuyruk, kuyruk_neden, ic_not, ...})
function r(ad, kume, o) { R.push(Object.assign({ ad, kume, s: [] }, o)); }

// ======================= AFRİKA1 =======================
r('Kartaca (Carthage)', 'afrika1', {
  onceki: 'emevi',
  ic_not: 'Kartaca (Carthage) yerleşiminin Tunus abi merkezine bağlanması: TDV «Tunus»: «Bugün Tunus şehrinin banliyösü durumundaki Kartaca’da hüküm sürdükleri için Kartacalılar olarak da bilinen Fenikeliler» (Kartaca bugün Tunus’un banliyösü) ve TDV «Ağlebîler»: «Eski Kartaca şehrinin yerini alan Kayrevan başşehir olmak üzere kurulan hânedan». TDV hiçbir yerde Kartaca’nın 745 sonrası sahibini ayrı yazmaz; zincir Kayrevan/Tunus çizgisidir (beyanlı). ÇELİŞKİ/DÜZELTME (ham ↔ TDV): Fâtımî→Zîrî 972-10-02 (künyeden) → 0972-01-01 (TDV yalnız 361/972); Zîrî→Benî Horasan 1058 → 1062 (TDV Tunus: «Abdülhak’ın 1062’de bağımsızlığını ilân etmesiyle»); Muvahhid→Hafsî 1229-01-01 → 1229-12-01 (TDV Hafsîler: «627 yılı başında (Aralık 1229)»); Osmanlı alışı 13 → 12 Eylül 1574 (TDV Tunus; künye 13 Eylül, TDV esastır); Cumhuriyet 25 → 27 Temmuz 1957 (TDV Tunus); Abbâsî girişi 0761-01-01 → 0761-08-07 (TDV Kayrevan: Cemâziyelevvel 144/Ağustos 761); Ağlebî 0800-01-01 → 0800-02-01 (hicrî 184 başı); Fâtımî 0909-01-01 → 0909-03-18 (TDV Ağlebîler: Ziyâdetullah’ın kaçışı).',
  s: [
    { f: '0745-01-01', d: '__BOSLUK__', k: 'yil', b: 'Emevî egemenliği Kartaca/İfrîkıye’de fiilen sona erdi; bölge Fihrî özerkliği ve Sufrî işgali arasında sahipsiz',
      kaynak: BB + 'Kartaca’nın 745–761 arası tek bir devlet sahibi. ' + TDV('Kayrevan') + ' (açıldı 22.10.2026): «127 (745) yılında Ukbe b. Nâfi‘in torunlarından Abdurrahman b. Habîb ayaklandı ve Kayrevan üzerine yürüdü; … son Emevî halifesi II. Mervân tarafından vali olarak kabul edildi. 140’ta (757) Sufrî Hâricîler’den Âsım el-Verfecûmî tarafından ele geçirilen Kayreva[n]…» — özerk Fihrî valiliği + Sufrî işgali; atlasta karşılığı künye yok. ABİ MERKEZ: Kayrevan — TDV «Ağlebîler»: «Eski Kartaca şehrinin yerini alan Kayrevan başşehir olmak üzere…»' },
    { f: '0761-08-07', d: 'abbasi', k: 'ay', b: 'Abbâsî valisi Muhammed b. Eş‘as Kayrevan’ı zaptetti; İfrîkıye Abbâsî idaresine girdi',
      kaynak: TDV('Kayrevan') + ' (açıldı 22.10.2026): «Ardından şehri, Abbâsî Halifesi Ebû Ca‘fer el-Mansûr’un İfrîkıye ve Mağrib valiliğine getirdiği Muhammed b. Eş‘as el-Huzâî zaptetti (Cemâziyelevvel 144 / Ağustos 761)» | ' + BY + 'Kartaca için abi merkez Kayrevan; ABİ MERKEZ: Kayrevan — TDV «Ağlebîler»: «Eski Kartaca şehrinin yerini alan Kayrevan başşehir…»',
      ic: 'Takvim: Cemâziyelevvel 144 ∩ Ağustos 761 — kesişimin ilk günü 761-08-07 (tabular hicrî hesap, Jülyen, ±2 gün); ay hassasiyeti.', takvim: true },
    { f: '0800-02-01', d: 'aglebi', k: 'yil', b: 'İbrâhim b. Ağleb İfrîkıye emirliğine tayin edildi; Ağlebîler dönemi başladı',
      kaynak: TDV('Ağlebîler') + ' (açıldı 22.10.2026): «AĞLEBÎ EMÎRLERİ 1. İbrâhim b. Ağleb 184 (800)» ve madde başlığı «İfrîkıye, Cezayir ve Sicilya’da hüküm süren bir İslâm hânedanı (800-909)» | ABİ MERKEZ: Kayrevan — «Eski Kartaca şehrinin yerini alan Kayrevan başşehir olmak üzere kurulan hânedan»',
      ic: 'Takvim: hicrî 184 = 0800-02-01…0801-01-19 (tabular, Jülyen) ∩ 800 → kesişimin ilk günü 0800-02-01; TDV yalnız yıl verir (yıl hassasiyeti).', takvim: true },
    { f: '0909-03-18', d: 'fatimi', k: 'gun', b: 'Son Ağlebî emîri Ziyâdetullah kaçtı; Ebû Abdullah eş-Şiî Rakkâde’yi aldı; Fâtımîler İfrîkıye’ye hâkim',
      kaynak: TDV('Ağlebîler') + ' (açıldı 22.10.2026): «Son Ağlebî hükümdarı III. Ziyâdetullah … 18 Mart 909’da götürebileceği kadar eşyayı yanına alarak Mısır’a kaçtı»; ' + TDV('Fâtımîler') + ' (açıldı 22.10.2026): «Ebû Abdullah, Ağlebîler’in başşehri Rakkāde’yi ele geçirip son emîrleri olan Ziyâdetullah’ı şehirden çıkarmayı başardı (296/909)» | ABİ MERKEZ: Kayrevan/Rakkâde',
      ic: 'Gün = Ağlebî emîrinin kaçış günü (TDV Ağlebîler); Fâtımî ordusunun Rakkâde’ye giriş günü TDV’de ayrıca verilmez (296/909). Ham 0909-01-01 kaynaksızdı.' },
    { f: '0972-01-01', d: 'ziriler', k: 'yil', b: 'Muizz Mısır’a gitti; Bulukkîn b. Zîrî İfrîkıye/Mağrib valisi, Zîrîler dönemi',
      kaynak: TDV('Zîrîler') + ' (açıldı 22.10.2026): «Fâtımî Halifesi Muiz-Lidînillâh, Bulukkîn’i Mağrib valiliğine tayin ederek Kayrevan’a yerleştirdi (361/972) ve devletin idare merkezini Mısır’a naklederek bölgeden ayrıldı»; «Kuzey Afrika Zîrîleri (972-1148)» | ' + BY + '1052–1062 arasında Tunus’ta Benî Hilâl/Hammâdî vesâyeti kısa aralıklarla (TDV «Tunus»: «Tunus kısa aralıklarla Zîrîler’in ve Hammâdîler’in eline geçtiyse de…») — tarihsiz olduğundan ayrı dilim açılmadı, Zîrî çizgisinde bırakıldı; ABİ MERKEZ: Kayrevan/Tunus',
      ic: 'Takvim: hicrî 361 = 0971-10-24…0972-10-11 (Jülyen) ∩ 972 → ilk gün 0972-01-01; TDV yıl verir. Atlas künyesi ziriler f=0972-10-02 gün olarak alınmadı (atlas referans değildir).', takvim: true },
    { f: '1062-01-01', d: 'tunus-benihorasan', k: 'yil', b: 'Abdülhak b. Horasan Tunus’ta bağımsızlığını ilân etti; Horasânîler dönemi',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «Abdülhakk’ın 1062’de bağımsızlığını ilân etmesiyle Tunus şehrinde Horasânîler dönemi başladı» ve «Horasânîler’in başşehri olarak kaldığı dönemde (1062-1159)» | ' + BY + 'Kartaca için abi merkez Tunus (TDV «Tunus»: Kartaca «bugün Tunus şehrinin banliyösü»); ABİ MERKEZ: Tunus',
      ic: 'ÇELİŞKİ: atlas künyesi tunus-benihorasan f=1058 ↔ TDV «Tunus» 1062; TDV esas (künye f→1062 önerisi).' },
    { f: '1159-01-01', d: 'muvahhidler', k: 'yil', b: 'Muvahhidler Tunus’u Horasânîlerden aldı',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «Horasânîler varlıklarını 1159 yılına kadar devam ettirdiler» ve «Kısa süren Muvahhidler döneminde İbn Tûmert’in görüşleri uyarınca…» | ' + BY + 'TDV «Muvahhidler»: «Benî Gāniye … Tunus’u istilâ etti (580/1184). Ebû Yûsuf el-Mansûr, 583’te (1187) Tunus’u geri aldı» — atlasta Benî Gāniye künyesi olmadığından 1184–1187 ayrı dilim açılmadı; ABİ MERKEZ: Tunus',
      ic: 'Muvahhid alışının ay/günü TDV’de yok (hicrî 554 = 1159-01-23…1160-01-11, tabular); yıl hassasiyeti.' },
    { f: '1229-12-01', d: 'hafsi', k: 'ay', b: 'Ebû Zekeriyyâ Muvahhidlerle bağı koparıp bağımsızlığını ilân etti; Hafsîler',
      kaynak: TDV('Hafsîler') + ' (açıldı 22.10.2026): «Ebû Zekeriyyâ, 627 yılı başında (Aralık 1229) İdrîs el-Me’mûn’un inançlarının Ehl-i sünnet’e ters düştüğünü ileri sürerek Muvahhidler’le irtibatını koparıp onlar adına hutbe okunmasına son verdi ve “emîr” unvanıyla bağımsızlığını ilân ederek Hafsî hânedanının gerçek kurucusu oldu»; ' + TDV('Muvahhidler') + ': «24 Receb 625 (29 Haziran 1228) tarihinde ele geçirdiği Tunus’u Muvahhidler adına yöneten…» | ' + BY + '1534–1574 arası el değişimleri (Hayreddin Paşa 1534; V. Karl, Temmuz 1535, Hafsî sultanı Mevlây Hasan’ı yeniden tahta oturttu; 1569 Osmanlı; 1573 İspanyol, Hafsî VI. Muhammed — TDV «Tunus») tarihleri günsüz olduğundan ayrı dilim açılmadı, Hafsî çizgisinde bırakıldı; ABİ MERKEZ: Tunus',
      ic: 'Takvim: hicrî 627 = 1229-11-20…1230-11-08 (tabular, Jülyen) ∩ Aralık 1229 → ilk gün 1229-12-01; ay hassasiyeti. TDV «Hafsîler» ayrıca Tunus’a giriş: 24 Receb 625 (29 Haziran 1228).', takvim: true },
    { f: '1574-09-12', d: 'tunus-ocagi', k: 'gun', b: 'Koca Sinan Paşa Tunus’u geri aldı; Hafsîler sona erdi; Osmanlı eyaleti',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «Koca Sinan Paşa ve Kaptanıderyâ Kılıç Ali Paşa kumandasındaki donanma altı günlük bir muhasaranın ardından 12 Eylül 1574’te Tunus’u geri aldı»; ' + TDV('Hafsîler') + ': «Hafsîler’in son temsilcisi Mevlây Muhammed İstanbul’a götürüldü ve Tunus’a Osmanlı Devleti’ne bağlı bir eyalet statüsü verildi (1574)» | ABİ MERKEZ: Tunus',
      ic: 'ÇELİŞKİ: atlas künyesi tunus-ocagi f=1574-09-13 ↔ TDV «Tunus» 12 Eylül 1574 (1 gün); TDV esas. TDV aynı maddede Halkulvâdî’nin alınışını 6 Cemâziyelevvel 982 (24 Ağustos 1574) verir.' },
    { f: '1881-05-12', d: 'tunus-beyligi-fransiz', k: 'gun', b: 'Bardo Antlaşması: Tunus Fransız himayesine girdi',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «12 Mayıs 1881’de Tunus beyi ile Bardo Antlaşması’nı imzalayarak bu eyaleti kendi himayelerine aldıklarını duyurdular»' },
    { f: '1956-03-20', d: 'tunus-krallik', k: 'gun', b: 'Tunus bağımsızlığına kavuştu (Hüseynî krallığı)',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «20 Mart 1956’da Tunus bağımsızlığına kavuşurken Hüseynî ailesinden Emîn Bey on dokuzuncu bey sıfatıyla … 27 Temmuz 1957 tarihine kadar Tunus kralı oldu»' },
    { f: '1957-07-27', d: 'tunus', k: 'gun', b: 'Tunus Cumhuriyeti ilân edildi',
      kaynak: TDV('Tunus') + ' (açıldı 22.10.2026): «27 Temmuz 1957 tarihine kadar Tunus kralı oldu. Bu tarihte Tunus Cumhuriyeti ilân edildi; Hüseynî ailesinin saltanatı sona erip … Habîb Burgiba ilk devlet başkanı olarak bütün yetkileri eline aldı»',
      ic: 'ÇELİŞKİ: ham dosyada 25 Temmuz 1957 (kaynaksız, açılmamıştı) ↔ TDV 27 Temmuz 1957; TDV esas.' },
  ],
  son: '2000-12-31',
});

r('Kumbî Sâlih (Gāne)', 'afrika1', {
  onceki: '__BOSLUK__',
  s: [
    { f: '1240-01-01', d: 'mali-imparatorlugu', k: 'yil', b: 'Mali İmparatorluğu Gāne topraklarını tümüyle ele geçirdi',
      kaynak: TDV('Mali') + ' (açıldı 22.10.2026): «Mema Tunkara, Susu Kante, Hingui Niakhaté ve Diara adlı dört küçük krallığa ayrılan Gāne, 1240 yılında Mali İmparatorluğu tarafından topraklarının tamamının ele geçirilmesiyle tarih sahnesinden silindi»; ' + TDV('Gâne') + ': «Yeri tartışmalı olmakla birlikte … Kumbîsâlih harabelerinin bu şehre ait olduğu sanılmaktadır» | ' + BY + 'TDV Kumbîsâlih’i yalnız Gāne başşehri olarak «sanır» ve 1240’ı ülke düzeyinde verir; kentin kendi teslim günü okunmadı; 1240–1400 arası Mali çizgisinde ara el değişimi tanığı yok.',
      ic: 'TDV «Mali»: 1235 Kirina zaferi Mali’nin «asıl kuruluş tarihi»; Gāne’nin alınışı 1240 (TDV). Gün yok → yıl hassasiyeti.' },
  ],
  bit: '1400-12-31', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'Berthier, S., Recherches archéologiques sur la capitale de l’empire de Ghana: étude d’un secteur d’habitat à Koumbi Saleh, Mauritanie, campagnes II-III-IV-V (1975-1976)-(1980-1981), BAR International Series S680, Oxford 1997 (yayıncı açıklaması, barpublishing.com, açıldı 22.10.2026): «the architectural remains, dated from the 9th to the 14th centuries, are in fact that of the old capital of Ghana»',
  bit_not: 'bit = EN GEÇ ÜST SINIR: 14. yüzyılın son günü (1400-12-31); «9.–14. yüzyıl» yerleşimin SÜRESİ olduğundan orta nokta alınmadı (SARTNAME §3.2). Berthier kitabının metni açılmadı (yalnız yayıncı özeti); kazı yeri tek yerleşim olarak 14. yy’da terk. Kumbî Sâlih’in Gāne başşehri olduğu TDV’de «sanılmaktadır» (tartışmalı) → kesinlik yuzyil, kısmen doğrulandı.',
});

r('Altava (Ouled Mimoun)', 'afrika1', {
  kuyruk: '0578-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): TDV araması q=altava → «madde başlıklarında sonuç bulunamadı»; TDV «Evrebe» (Awraba kabilesi; Küseyle/Tilimsân 675–683) maddesinde Altava geçmez; web taraması (Setif2 dergisi 2021–23 yüzey araştırması: 5. yy Latince mezar yazıtları; Tlemcen Üniv. DSpace: Roma ve İslâm çağlarına uzanan buluntu) yer-düzeyinde 578 sonrası sahip/terk tanığı vermedi. Var olduğu bilinmeyen yer için zincir yazılmadı (CLAUDE.md boşluk merdiveni ④).',
});
r('Evdeguşt (Awdaghust)', 'afrika1', {
  kuyruk: '1087-04-08 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): TDV «Murâbıtlar»: «Batı Sudan’daki Gāne Krallığı topraklarına girip Evdeguşt şehrini işgal ettiler»; TDV «Gâne»: «Murâbıtlar 1054 yılında Sanhâce Emirliği’nin eski başşehri Evdeguşt’u … ele geçirdiler» ve Murâbıtların bölgeyi «ancak on yıl kadar» elde tuttuğu — 1087 sonrası Evdeguşt’un sahibi/terki TDV’de yok (q=evdegust ve q=tegdaoust aramalarında madde yok). Britannica/UMich Press özetleri (yardımcı) terki 16. yy’a kadar uzatır, çelişkili; Robert-Chaleix kazı raporlarının kendisi açılamadı. Beyansız yaklaşıklık yazılmadı.',
});

// ======================= AMERİKA2 =======================
r('Huari (Wari)', 'amerika2', {
  bit: '1000-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'Moseley, M. E., The Incas and Their Ancestors, 2. bs. (gözden geçirilmiş), London: Thames & Hudson, 2001 (archive.org OCR metni açıldı 22.10.2026), Middle Horizon bölümü: «the metropolis matured into a 3-4-km sprawl of masonry buildings and multi-story enclosure walls, accommodating estimates of 10,000 to 35,000 inhabitants before abandonment around AD 1000»',
  bit_not: 'Tek değer («around AD 1000») → orta nokta uygulanamaz, kalibre 14C aralığı verilmiyor; kesinlik yuzyil. DOĞRULANDI: ham bit 1000 aynen kalır. Künye düzeltme önerisi: wari t=0800 → ≥1000 (ham zincir zaten 1000’de bitiyor).',
});
r('Cerro Baúl', 'amerika2', {
  bit: '1000-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'Moseley, M. E., Nash, D. J., Williams, P. R., DeFrance, S. D., Miranda, A., Ruales, M., «Burning down the brewery: Establishing and evacuating an ancient imperial colony at Cerro Baúl, Peru», PNAS 102(48), 2005, doi:10.1073/pnas.0508673102 (PMC1297684, açıldı 22.10.2026): «the 20-km-long canal system was forsaken when the colony was abandoned in ca. A.D. 1000»; «the monumental architecture was abandoned swiftly. Planned, orderly evacuation best explains…»',
  bit_not: 'DOĞRULANDI: «ca. A.D. 1000» tek değer, orta nokta yok; kesinlik yuzyil. Aynı makale: kolonide iki evre, ~800’de yeniden inşa. Moseley 2001 Cerro Baúl’ün terk yılını vermiyor (kitap, OCR).',
});
r('Batán Grande (Sicán)', 'amerika2', {
  onceki: 'sican',
  s: [
    { f: '1050-01-01', d: 'sican', k: 'yuzyil', b: null,
      kaynak: 'Trafficking Culture Encyclopedia (Univ. of Glasgow), «Batán Grande», https://traffickingculture.org/encyclopedia/case-studies/batan-grande/ (açıldı 22.10.2026): «Batán Grande was largely abandoned between 1050 and 1100 AD, the result of thirty years of severe drought» (metin kaynak göstermiyor; Shimada açılmadı); Atwood, R., «The Rape of Batán Grande», Archaeology 60(4), 2007 (AIA arşiv özeti): «a civilization known as Sicán that lasted from A.D. 800 to 1375 in northern Peru» | devam: Sicán çizgisi sürüyor (aynı sahip)' },
  ],
  bit: '1075-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'Trafficking Culture Encyclopedia «Batán Grande» (açıldı 22.10.2026): «largely abandoned between 1050 and 1100 AD»; orta nokta kuralı (ARKEOLOJI-KATMANI-SARTNAME-1018 §3.1): ⌊(1050+1100)/2⌋ = 1075',
  bit_not: 'KISMEN DOĞRULANDI: tek ikincil kaynak, birincil (Shimada) açılmadı; «largely» = tam terk değil. Orta nokta tahmindir, ölçüm değildir. Sicán başkenti sonra Túcume’ye kaydı (Archaeology 2007 özeti: Sicán 800–1375).',
  bit_aralik: { bas: '1050-01-01', son: '1100-01-01', tur: 'tabaka-donem' },
});
r('Ciudad Perdida (Teyuna)', 'amerika2', {
  kuyruk: '1600-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): terk tarihi için ICANH/Giraldo (2010) ve Uribe & Osorio makalelerinin birincil metni açılamadı (ICANH sayfası bulunamadı; redalyc EPUB ikili veri). Açılabilen ikincil/popüler kaynaklar çelişkili (XVI. yy terki, ~1600 direniş, XVII. yy sonu) ve dayanak sayılmadı; ham bit=1600 (atlas tairona künyesi t) kaynaklı değil → bit yazılmadı.',
});
r('Xochicalco', 'amerika2', {
  bit: '0900-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'UNESCO World Heritage List no. 939, «Archaeological Monuments Zone of Xochicalco», https://whc.unesco.org/en/list/939 (açıldı 22.10.2026): «Xochicalco is an exceptionally well-preserved example of a fortified political, religious and commercial centre from the troubled period of 650–900 that followed the break-up of the great Mesoamerican states such as Teotihuacan, Monte Albán, Palenque and Tikal»',
  bit_not: 'KISMEN DOĞRULANDI: UNESCO merkezin «650–900» dönemini verir (SÜRE → en geç uç 900; orta nokta alınmaz); yakılış/terk cümlesi UNESCO özetinde yok, Hirth birincil metni açılmadı. Postklasik kullanım/ziyaret ihtimali okunmadı. Atlas künyesi f=0700 ↔ UNESCO 650 (kayıt kur=650).',
});
r('Pueblo Bonito (Chaco Kanyonu)', 'amerika2', {
  bit: '1250-01-01', bit_kesinlik: 'yuzyil',
  kisalt_gerekli: 'mevcut ham zincirin son dilimi (ata-pueblo 0850→1300) 1300-01-01 → 1250-01-01 KISALTILMALI; 1250–1300 kaynaklı değil',
  bit_kaynak: 'UNESCO World Heritage List no. 353, «Chaco Culture», https://whc.unesco.org/en/list/353 (açıldı 22.10.2026): «Chaco Canyon, a major centre of ancestral Pueblo culture between 850 and 1250, was a focus for ceremonials, trade and political activity for the prehistoric Four Corners area»',
  bit_not: 'KISMEN DOĞRULANDI: UNESCO KANYON düzeyinde 850–1250 verir (SÜRE → en geç uç 1250); Pueblo Bonito’nun kendi son kullanım yılı yok. Ham bit 1300 (atlas ata-pueblo künyesi t) kaynaklı değildi → düşürüldü; Lekson/NPS metinleri bu oturumda açılmadı.',
});
r('Dos Pilas', 'amerika2', {
  bit: '0761-01-01', bit_kesinlik: 'yil',
  bit_kaynak: 'Martin, S. & Grube, N., Chronicle of the Maya Kings and Queens, 2. bs., London: Thames & Hudson, 2008 (archive.org OCR metni açıldı 22.10.2026), Dos Pilas bölümü: «the fortunes of K’awiil Chan K’inich took a decisive turn for the worse in 761 … K’awiil Chan K’inich is not heard of again and Dos Pilas was all but abandoned at this time»; Inomata kazıları: «destroyed by fire and its elite dwellings deserted in great haste»',
  bit_not: 'DOĞRULANDI (M&G, kitap): 761 olay yılıdır; «all but abandoned» = tam boşalma değil — M&G sonradan eski plazada basit bir «squatter» köyü kurulduğunu da yazar. Ham «çift teyitli» iddiasındaki Inomata 2017 makalesi açılmadı, yalnız M&G’nin aktardığı Inomata kazı sonucu okundu. Kesinlik yil.',
});
r('El Tajín', 'amerika2', {
  onceki: 'el-tajin',
  s: [
    { f: '1100-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'El Tajín’in künye sahibi sona erdi; kent 1200’e kadar iskânlı, sahibi bilinmiyor',
      kaynak: BB + '1100–1200 arası kentin sahibi (atlas el-tajin künyesi t=1100; UNESCO’da polity adı yok). UNESCO World Heritage List no. 631, «El Tajín, Pre-Hispanic City», https://whc.unesco.org/en/list/631 (açıldı 22.10.2026): «recent research has shown that there was only one phase of occupation lasting from 800 to 1200 A.D. El Tajín was abandoned and partly destroyed after 1200 A.D.»' },
  ],
  bit: '1200-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'UNESCO no. 631 (açıldı 22.10.2026): «only one phase of occupation lasting from 800 to 1200 A.D. El Tajín was abandoned and partly destroyed after 1200 A.D.»',
  bit_not: 'DOĞRULANDI (UNESCO): iskân süresi 800–1200 → bit = en geç uç 1200; «after 1200» terkin 1200’den SONRA olduğunu söyler (bit alt sınır sayılmalı), yüzyıl hassasiyeti. Künye düzeltme önerisi: el-tajin t→1200.',
});
r('Tilantongo', 'amerika2', {
  onceki: 'tilantongo-mixtek',
  s: [
    { f: '1521-01-01', d: '__BOSLUK__', k: 'yil', b: 'Mixtek krallığı Tilantongo İspanyol egemenliğine girerken sahipsiz',
      kaynak: BB + 'Tilantongo’nun fetih/teslim yılı ve 1521–1525 arası sahibi. Pohl, J. M. D., «Mixtecs», Encyclopedia of Latin American History and Culture (encyclopedia.com, açıldı 22.10.2026): «At the time of the Spanish arrival in the region, Tilantongo had emerged as the highest-ranked of the Mixtec royal houses» ve «Between 1525 and 1530 many encomiendas had been awarded to conquistadores»; Terraciano (2001) açılmadı.' },
    { f: '1525-01-01', d: 'yeni-ispanya-ilk-donem', k: 'yil', b: 'Mixteca İspanyol encomienda düzenine girdi (Yeni İspanya, Genel Valilik öncesi)',
      kaynak: 'Pohl, J. M. D., «Mixtecs» (encyclopedia.com, açıldı 22.10.2026): «Between 1525 and 1530 many encomiendas had been awarded to conquistadores» | ' + BY + '1525 = encomienda dağıtımı döneminin ALT SINIRI (en erken tanık); Tilantongo’nun kendi teslim günü okunmadı.' },
    { f: '1535-04-17', d: 'yeni-ispanya', k: 'gun', b: 'Antonio de Mendoza ilk Yeni İspanya valisi (viceroy) olarak göreve başladı',
      kaynak: 'INAH, Lugares, «Sala de Virreyes», https://lugares.inah.gob.mx/en/pagina-de-elemento/2062 (açıldı 22.10.2026): «until finally, on April 17, 1535, Don Antonio de Mendoza took office as the first viceroy»',
      ic: 'Başka kaynaklar (Wikipedia özetleri, yardımcı) göreve başlayışı Ekim–Kasım 1535 yazar; 17 Nisan 1535 atama/komisyon günüyle çakışır — bu oturumda akademik kaynakla çözülemedi, INAH günü alındı.' },
    { f: '1821-09-27', d: 'meksika', k: 'gun', b: 'Iturbide Mexico City’ye girdi; Meksika bağımsızlığı (ertesi gün bağımsızlık bildirgesi)',
      kaynak: 'Watanabe-O’Kelly, H., «Mexican independence from Spain and the first Mexican emperor», OUPblog, 30.06.2021, https://blog.oup.com/2021/06/mexican-independence-from-spain-and-the-first-mexican-emperor/ (açıldı 22.10.2026): «On 27 September 1821, Iturbide entered Mexico City.» «On the following day, amid general euphoria, the Act of Independence was signed.» | ' + BY + 'Tilantongo’nun kendi devir günü yok, başkent girişi alınır; 1822–23 Birinci İmparatorluk ve 1864–67 İkinci İmparatorluk (Oaxaca’da fiilî değil) ayrı dilim açılmadı, Meksika çizgisinde bırakıldı.' },
  ],
  son: '2000-12-31',
});
r('Cobá', 'amerika2', {
  kuyruk: '0780-12-02 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): Cobá’nın 780 sonrası sahibi/terki için akademik kaynak açılamadı; M&G (2008) Cobá’yı yalnız yazıt tarihleriyle anar (780-12-02 son yazıt); web taraması yalnız popüler/ansiklopedik özetler verdi (Postklasik yeniden kullanım, ~16. yy ortasında terk) — dayanak sayılmadı. Beyansız yaklaşıklık yazılmadı.',
});
r('Cacaxtla', 'amerika2', {
  kuyruk: '0950-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): Cacaxtla’nın 950 sonrası için hakemli/akademik kaynak açılamadı (web taraması: Wikipedia ve haber/ansiklopedi sitelerinde «~900–1000 terk, Popocatépetl» özetleri — dayanak sayılmadı; «Olmeca-Xicalanca» adının Muñoz Camargo’ya dayandığı ve tartışmalı olduğu yardımcı kaynakta geçer). Beyansız yaklaşıklık yazılmadı.',
});
r('Uxmal', 'amerika2', {
  kuyruk: '0907-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): UNESCO no. 791 «Pre-Hispanic Town of Uxmal» (açıldı 22.10.2026): «founded c. A.D. 700 … buildings, which date from between 700 and 1000» — kentin 907 sonrası sahibi (Xiu/Mayapán/İspanyol) UNESCO’da yok; M&G Uxmal’ı yazıt tarihleriyle anar. Akademik birincil kaynak açılamadı. Not: UNESCO 700–1000 yapı aralığı ham zincir t=907 ile (künye sınırı) çelişmez ama terk kanıtı değildir.',
});
r('Ek\' Balam', 'amerika2', {
  kuyruk: '0840-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): web taraması Latin American Antiquity makalesini (Bey, Hanson & Ringle, «Classic to Postclassic at Ek’ Balam, Yucatán») ve Wikipedia özetini buldu (Terminal Klasik→Postklasik geçiş, Talol/Relación Geográfica, kolonyal kapel) ancak makalenin metni açılamadı; sahibi/terk günü yazılamaz. Beyansız yaklaşıklık yazılmadı.',
});

// ======================= AMERİKA1 =======================
r('Huacas de Moche', 'amerika1', {
  onceki: 'moche',
  s: [
    { f: '0799-12-31', d: 'moche', k: 'onyil', b: null,
      kaynak: 'Rengifo, C., Gayoso-Rullier, H. & Castillo, F., «Huacas de Moche: dos mil años de ocupación prehispánica desde una perspectiva arqueológica», Estudios Atacameños 68 (2022), e5000, doi:10.22199/issn.0718-1043-2022-0025 (açıldı 22.10.2026): «El final de la fase Mochica en Huacas de Moche se dio alrededor del 850 d. C.»; «la ocupación residencial en este sector del sitio acabó alrededor del 850 d. C.» | devam: aynı sahip (moche künyesi t=0799-12-31, 850’ye genişletme önerisi)' },
    { f: '0850-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Mochica kent hayatı sona erdi; Huacas de Moche ritüel/mezar merkezine dönüştü (Santa Catalina evresi)',
      kaynak: BB + '850–1000 arası siyasî sahip. Rengifo vd. 2022 (Estudios Atacameños 68): «A ello siguió una fase de aproximadamente 150 años, hasta el año 1000 d. C., que … hemos denominado Santa Catalina»; «convirtiéndose en un centro ceremonial funerario que albergó manifestaciones culturales locales y foráneas»; polity adı verilmez.' },
  ],
  son_s: '1000-01-01',
  kuyruk: '1000-01-01 → 2000-12-31',
  kuyruk_neden: 'KISMEN DOĞRULANDI: aynı makale 1000 sonrasını kronolojik sıralar («Chimú Temprano (ca. 1100-1250 d.C.)», «Chimú Medio (ca. 1250-1300 d.C.)», Inka dönemi) — yani yerleşim TERK EDİLMEDİ (düz bit yazılamaz) — ama 1000–1100 arası ve Chimú/Inka/İspanyol/Peru devir günleri ve sahipleri okunmadı. Önceki ham varsayım (bit/«Chan Chan’a kaydı») yanlıştı.',
});
r('Tikal', 'amerika1', {
  onceki: 'tikal-mutul',
  s: [
    { f: '0869-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Tikal’de son hanedan anıtı (869) sonrası kraliyet iktidarı kalmadı; kent kalıntı nüfusla sürdü',
      kaynak: BB + 'Tikal’in 869 sonrası siyasî sahibi. Martin & Grube, Chronicle of the Maya Kings and Queens, 2008 (archive.org OCR, açıldı 22.10.2026): «Stela 11, erected for the 10.2.0.0.0 mark of 869 … this was an appropriate setting for the city’s final sculpture» ve «By the end of the 9th century Tikal had experienced a fate shared with its peers across the Maya realm. With all vestiges of royal power gone and deserted by the great bulk of its population, its elite quarters were taken over by squatters»' },
  ],
  bit: '1001-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'Martin & Grube 2008 (OCR, açıldı 22.10.2026): «Finally abandoned in the 10th or 11th Century, the forest completed its takeover of the city»; orta nokta (SARTNAME §3.1): ⌊(901+1100)/2⌋ = 1000,5 → daha geç yıl 1001',
  bit_not: 'ÇELİŞKİ: UNESCO no. 64 «Tikal National Park» (açıldı 22.10.2026): «inhabited from the 6th century B.C. to the 10th century A.D.» (10. yy) ↔ M&G 10.–11. yy. Tek kaynak seçildi: M&G (terk için açık ifade; UNESCO iskân özetidir); seçilen kaynağın kendi aralığı 901–1100 → orta nokta 1001. Orta nokta tahmindir, ölçüm değildir.',
  bit_aralik: { bas: '0901-01-01', son: '1100-12-31', tur: 'tabaka-donem' },
});
r('Calakmul', 'amerika1', {
  kuyruk: '0909-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı): Calakmul için 909’dan sonra terk cümlesi yok («one last rally at Calakmul … Stela 61», tek günlük geç tarih). UNESCO no. 1061 «Ancient Maya City and Protected Tropical Forests of Calakmul» (açıldı 22.10.2026) yalnız BÖLGE düzeyinde: «from the mid-first millennium B.C. to about A.D. 1000, the Maya civilization … suffered the most dramatic downfall, resulting in an almost complete abandonment of formerly flourishing settlements» — Calakmul’a özgü değil, bit olarak yazılmadı.',
});
r('Dzibanché', 'amerika1', {
  kuyruk: '0909-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı) Dzibanché’yi Kaan hanedanının erken evresi için anar, 909 sonrası/terk cümlesi yok; UNESCO’da ayrı kayıt yok (Calakmul bölge özeti dolaylı). Beyansız yaklaşıklık yazılmadı.',
});
r('Caracol', 'amerika1', {
  kuyruk: '0859-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı): «The last known king of Caracol, Ruler XIII … left the all-glyphic Stela 10» — son yazıt, terk değil; Postklasik kullanım/sahip okunamadı. Beyansız yaklaşıklık yazılmadı.',
});
r('Copán', 'amerika1', {
  onceki: 'copan',
  s: [
    { f: '0820-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Copán hanedanı sona erdi (~820); kent terk edilene kadar sahipsiz',
      kaynak: BB + 'Copán’ın 820 sonrası siyasî sahibi. UNESCO no. 129 «Maya Site of Copan», https://whc.unesco.org/en/list/129 (açıldı 22.10.2026): «The ruined citadel and imposing public squares reveal the three main stages of development before the city was abandoned in the early 10th century»; ardıl polity UNESCO’da yok.' },
  ],
  bit: '0926-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'UNESCO no. 129 (açıldı 22.10.2026): «before the city was abandoned in the early 10th century»; orta nokta: «early» sayısal değildir → 10. yüzyılın İLK YARISI (901–950) varsayıldı, ⌊(901+950)/2⌋ = 925,5 → 926',
  bit_not: 'KISMEN DOĞRULANDI: «erken 10. yy» ifadesinin 901–950 yorumu bu işçinin varsayımıdır (kaynak aralık vermez); gerçek terk 901–1000 içinde herhangi bir yerde olabilir. Orta nokta tahmindir, ölçüm değildir.',
  bit_aralik: { bas: '0901-01-01', son: '0950-12-31', tur: 'tabaka-donem' },
});
r('Palenque', 'amerika1', {
  onceki: 'palenque-baak',
  s: [
    { f: '0799-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Palenque hanedanı sona erdi (799); kent terk edilene kadar sahipsiz',
      kaynak: BB + 'Palenque’nin 799 sonrası siyasî sahibi. UNESCO no. 411 «Pre-Hispanic City and National Park of Palenque» (açıldı 22.10.2026): «Once the ancient city of Palenque was abandoned around the 9th century, the thick jungle surrounding it covered its temples and palaces»; ardıl polity yok.' },
  ],
  bit: '0851-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'UNESCO no. 411 (açıldı 22.10.2026): «Once the ancient city of Palenque was abandoned around the 9th century … the area remained uninhabited, from its abandonment until the Colonial period»; orta nokta: 9. yy = 801–900 → ⌊(801+900)/2⌋ = 850,5 → 851 (SARTNAME §3.1)',
  bit_not: 'DOĞRULANDI (UNESCO): terk «9. yüzyıl civarı», sonrası Kolonyal döneme dek iskânsız; orta nokta tahmindir, ölçüm değildir.',
  bit_aralik: { bas: '0801-01-01', son: '0900-12-31', tur: 'tabaka-donem' },
});
r('Yaxchilán', 'amerika1', {
  kuyruk: '0808-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı) Yaxchilán için 808 sonrası terk cümlesi içermiyor (yazıt tarihleri); UNESCO’da kayıt yok (Yaxchilán’ın UNESCO özeti aranmadı). Beyansız yaklaşıklık yazılmadı.',
});
r('Piedras Negras', 'amerika1', {
  kuyruk: '0810-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı) Piedras Negras için 810 sonrası terk cümlesi içermiyor (taranan pasajlar yalnız Sak Tz’i’ krallığının «last known mention … 864» kaydı, Piedras Negras’a ait değil). Beyansız yaklaşıklık yazılmadı.',
});
r('Quiriguá', 'amerika1', {
  onceki: 'quirigua',
  s: [
    { f: '0810-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Quiriguá’nın son anıtı (810) sonrası krallık sönümlendi; konutlar 900’e kadar',
      kaynak: BB + 'Quiriguá’nın 810 sonrası siyasî sahibi. UNESCO no. 149 «Archaeological Park and Ruins of Quirigua», https://whc.unesco.org/en/list/149 (açıldı 22.10.2026): «seventeen monuments that were carved between 426 AD and 810 AD»; «For reasons which are not clear, it then entered a period of decline.»; ardıl polity yok.' },
  ],
  bit: '0900-01-01', bit_kesinlik: 'yuzyil',
  bit_kaynak: 'UNESCO no. 149 (açıldı 22.10.2026): «Quirigua has retained ruins and vestiges of dwellings ranging between AD 200 and AD 900»',
  bit_not: 'KISMEN DOĞRULANDI: konut kalıntıları AD 200–900 (SÜRE → en geç uç 900, orta nokta alınmaz); UNESCO ayrıca «at the time of the arrival of the European conquerors, the control of the jade route had been taken over by Nito» der — Quiriguá’nın 900 sonrası iskânsızlığı açıkça yazılmamıştır (kesinlik yuzyil).',
});
r('Naranjo (Saal)', 'amerika1', {
  onceki: 'naranjo-saal',
  s: [
    { f: '0810-01-01', d: 'naranjo-saal', k: 'yil', b: null,
      kaynak: 'Martin & Grube, Chronicle of the Maya Kings and Queens, 2008 (archive.org OCR, açıldı 22.10.2026): «Four years after the final reference to Itzamnaaj K’awiil in 810, Naranjo’s last known ruler, Waxaklajuun Ubaah K’awiil, took office. His Stela 32, erected in May 820, was one of the most exuberant sculptures produced at the site» | devam: aynı sahip (naranjo-saal) — hanedan en az 820 Mayıs’a kadar sürer; ham t=810 yazıt sonrası değil, son hükümdarın 820’ye uzanan dönemini kapsamıyordu' },
  ],
  son_s: '0820-05-01',
  kuyruk: '0820-05-01 → 2000-12-31',
  kuyruk_neden: 'KISMEN DOĞRULANDI: M&G son bilinen hükümdarın Stela 32’sini Mayıs 820’de verir (zincir 0820-05-01’e uzatıldı, ay hassasiyeti); 820 sonrası sahip/terk M&G’de yok. Beyansız yaklaşıklık yazılmadı.',
  ic_not: 'ÇELİŞKİ: ham s: son t=0810-01-01 ↔ M&G: 810’da Itzamnaaj K’awiil’e son atıf, ardından Waxaklajuun Ubaah K’awiil dönemi, Stela 32 Mayıs 820 → naranjo-saal künyesi t≥820 genişletme önerisi.',
});
r('Ceibal (Seibal)', 'amerika1', {
  kuyruk: '0889-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): M&G (2008, OCR açıldı) Seibal’i 849’da (10.1.0.0.0, Chan Pet’in tanıklığı) ve 889 civarı yazıtlarla anar; terk/sahip cümlesi yok. Beyansız yaklaşıklık yazılmadı.',
});
r('Tiwanaku', 'amerika1', {
  onceki: 'tiwanaku-devleti',
  s: [
    { f: '1010-01-01', d: 'tiwanaku-devleti', k: 'yuzyil', b: null,
      kaynak: 'UNESCO World Heritage List no. 567 «Tiwanaku: Spiritual and Political Centre of the Tiwanaku Culture», https://whc.unesco.org/en/list/567 (açıldı 22.10.2026): «The political dominance of Tiwanaku began to decline in the 11th century, and its empire collapsed in the first half of the 12th century.»; orta nokta: 12. yy ilk yarısı 1101–1150 → ⌊(1101+1150)/2⌋ = 1125,5 → 1126 | devam: aynı sahip (tiwanaku-devleti); künye t=1010 → 1126 genişletme önerisi' },
  ],
  son_s: '1126-01-01',
  bit_aralik_s: { bas: '1101-01-01', son: '1150-12-31', tur: 'tabaka-donem' },
  kuyruk: '1126-01-01 → 2000-12-31',
  kuyruk_neden: 'KISMEN DOĞRULANDI: UNESCO çöküşü «12. yy ilk yarısı» verir (orta nokta tahmindir); 1126 sonrası Aymara senyörlükleri, İnka, İspanyol, Bolivya sahipleri ve devir günleri okunmadı. UNESCO: «has been overlaid by the modern town» — yerleşim terk edilmedi (düz bit yazılamaz). Tiwanaku’nun 400–900 «planlı kent» evresi UNESCO’da (açıldı).',
});

// ======================= AMERİKA3 =======================
r('Tula de Allende (Tollan)', 'amerika3', {
  onceki: 'toltek',
  s: [
    { f: '1150-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'Tollan evresi sona erdi; Tula Grande terk edilip yıkıldı (Aztek yeniden iskânına kadar)',
      kaynak: BB + 'Tula’nın 1150–1200 arası siyasî sahibi. Healan, D. M., Cobean, R. H. & Bowsher, R. T., «Revised chronology and settlement history of Tula and the Tula region», Ancient Mesoamerica 32 (2021) 165–186, doi:10.1017/S095653612000022X (açık erişim, açıldı 22.10.2026): «An estimated end date of a.d. 1150 for the Tollan phase was originally proposed by Cobean (1978) … and this date continues to be supported by recent chronometric and other data.» ve «Tula Grande and the Tollan phase city appear to have already been abandoned and in ruins prior to the arrival of Aztec II peoples.» ve «estimated a.d. 1200–1350 time range for the Fuego phase, from contexts associated with Aztec reoccupation of Tollan phase structures»' },
  ],
  son_s: '1200-01-01',
  kuyruk: '1200-01-01 → 2000-12-31',
  kuyruk_neden: 'KISMEN DOĞRULANDI: Tollan sonu 1150 ve Aztek yeniden iskânının (Fuego evresi) 1200–1350 tahmini (Healan vd. 2021) okundu; 1200 sonrası siyasî sahip (Aztek tributary/Yeni İspanya/Meksika zinciri) kaynaklanmadı. Düz bit yazılamaz (yeniden iskân + modern Tula).',
});
r('Brattahlíð (Qassiarsuk)', 'amerika3', {
  kuyruk: '1450-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): UNESCO no. 1536 «Kujataa Greenland: Norse and Inuit Farming at the Edge of the Ice Cap» (açıldı 22.10.2026): «Norse Greenlandic people (10th to 15th century) and modern Inuit farmers (18th century to present)» ve «the Norse Greenlandic farming settlement from the 10th to the 15th centuries» — ham t=1450 bu 15. yy aralığıyla uyumlu (orta nokta 1450/51, aralık verilmediği için kesinlik onyil→yuzyil). Ancak 1450 sonrası: Qassiarsuk’un kendi yeniden iskân yılı (modern köy) ve arada sahipsiz dönem kaynakla okunamadı (web taraması 1924 tarihini doğrulamadı); düz bit yazılamaz. Beyansız yaklaşıklık yazılmadı.',
});
r('La Centinela (Chincha)', 'amerika3', {
  kuyruk: '1476-01-01 → 2000-12-31',
  kuyruk_neden: 'DOĞRULANAMADI (arandı): Nigra, B., Jones, T., Bongers, J., Stanish, C., Tantaleán, H. & Pérez, K., «The Chincha Kingdom: The Archaeology and Ethnohistory of the Late Intermediate Period South Coast, Peru» (usf.edu IASCE PDF, açıldı 22.10.2026): «the Chincha Kingdom … Late Intermediate Period (hereafter LIP; ca. AD 1100–1470)» — ham t=1476 (Inka fethi) ile 6 yıl FARK (kaynak 1470); La Centinela’nın Inka sonrası/İspanyol dönemi sahibi ve terk tarihi okunamadı, Menzel 1959 ve Marcus metinleri açılmadı. Beyansız yaklaşıklık yazılmadı.',
});

// ======================= ÇIKTI =======================
function kodla(o) { return JSON.stringify(o, null, 1).replace(/\n/g, '\n'); }
const Z = [], M = [];
function yerKisa(ad) { return ad.replace(/\s*\(.*\)\s*$/, ''); }
for (const rr of R) {
  const e = { ad: rr.ad, kume: rr.kume, s_ek: [] };
  const n = rr.s.length;
  for (let i = 0; i < n; i++) {
    const p = rr.s[i];
    const t = i + 1 < n ? rr.s[i + 1].f : (rr.son_s || rr.son || (rr.bit && !rr.kuyruk ? rr.bit : null));
    if (!t) throw new Error('son t yok: ' + rr.ad);
    const sl = { f: p.f, t, d: p.d, kesinlik: p.k, kaynak: p.kaynak };
    if (p.ic) sl.ic_not = p.ic;
    if (p.takvim) sl.ic_not_takvim = p.ic;
    if (rr.bit_aralik_s && i === n - 1) sl.aralik = rr.bit_aralik_s;
    if (i === n - 1 && rr.s.length && p.d === rr.onceki) sl.devam = true;
    e.s_ek.push(sl);
    // sınır maddesi (sahip değişimi)
    const onc = i === 0 ? rr.onceki : rr.s[i - 1].d;
    if (p.b && p.d !== onc) {
      const bos = p.d === '__BOSLUK__';
      const yk = yerKisa(rr.ad);
      const m = {
        t: p.f, devlet: bos ? onc : p.d,
        taraflar: bos ? [onc] : (onc && onc !== '__BOSLUK__' ? [p.d, onc] : [p.d]),
        b: p.b + ' — ' + yk, tur: bos ? 'toprak-kayip' : 'toprak-kazanc', onem: 2, dunya: 1, kapsam: 'dis',
        yer: yk, yer_id: rr.ad, etiket: ['toprak-degisimi', 'konu-siyasi', 'dogu-kuyruk-1281-2000'],
        d: yk + ' yerleşiminin sahibi ' + (adlar[onc] || '?') + ' iken ' + (bos ? 'sahipsiz kaldı (beyanlı boşluk)' : adlar[p.d] + ' oldu') + '. Gün/yıl hassasiyeti: ' + p.k + '.',
        kaynak: p.kaynak, kesinlik: p.k, sinir_id: [],
      };
      if (p.ic) m.ic_not = p.ic;
      if (p.takvim) m.ic_not_takvim = p.ic;
      M.push(m);
    }
  }
  if (rr.bit) { e.bit = rr.bit; e.bit_kaynak = rr.bit_kaynak; e.bit_not = rr.bit_not; if (rr.bit_kesinlik) e.bit_kesinlik = rr.bit_kesinlik; if (rr.bit_aralik) e.bit_aralik = rr.bit_aralik; }
  if (rr.kisalt_gerekli) e.kisalt_gerekli = rr.kisalt_gerekli;
  if (rr.kuyruk) { e.kuyruk_gerekli = rr.kuyruk; e.kuyruk_neden = rr.kuyruk_neden; }
  if (rr.ic_not) e.ic_not = rr.ic_not;
  Z.push(e);
}
fs.writeFileSync(path.join(DIR, 'zincir_kuyruk.js'),
  '// kuyrukdogrula3: kuyrukyeni3 hamının KAYNAK AÇILARAK doğrulanmış hâli. s_ek[0].f = kaydın mevcut son t (devam:true ise aynı sahip sürüyor).\nwindow.ZINCIR_DOGU_KUYRUKDOGRULA3 = ' + JSON.stringify(Z, null, 1) + ';\n', 'utf8');
fs.writeFileSync(path.join(DIR, 'kronoloji_sinir_dogu_kuyrukdogrula3.js'),
  '// kuyrukdogrula3: doğrulanmış kuyruk dilimlerinin devir günü sınır maddeleri (Değişmez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKDOGRULA3 = ' + JSON.stringify(M, null, 1) + ';\n', 'utf8');
console.log('kayit', Z.length, 'madde', M.length);
