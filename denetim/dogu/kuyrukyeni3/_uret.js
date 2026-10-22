// kuyrukyeni3 üretici: zincir_kuyruk.js + kronoloji_sinir_dogu_kuyrukyeni3.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const DIR = __dirname, KOK = path.resolve(DIR, '..', '..', '..');
function yuk(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const adlar = {};
for (const d of (yuk(path.join(KOK, 'data/devletler.js')).DEVLETLER || [])) adlar[d.id] = d.ad;
for (const d of (yuk(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || [])) adlar[d.id] = adlar[d.id] || d.ad;
adlar['__BOSLUK__'] = 'boşluk (sahipsiz)';
const A = '; atıf, bu oturumda açılmadı';
const B = 'BEYANLI YAKLAŞIKLIK: ';
const BB = 'BOŞLUK BEYANI: ';

const P = [];
function yer(ad, kume, o) { P.push(Object.assign({ ad, kume }, o)); }

// ---------- AFRİKA1 ----------
const TUNUS = [
  { f: '0761-01-01', d: 'abbasi', k: 'yil', b: 'Abbâsî valisi İbnü’l-Eş‘as Kayrevân’ı aldı; İfrîkıye Abbâsî idaresine girdi',
    s: 'Kennedy, H., The Prophet and the Age of the Caliphates, 2. bs., 2004 (İbnü’l-Eş‘as’ın Kayrevân’a girişi 761) ve TDV İslâm Ansiklopedisi «Ağlebîler» (İfrîkıye’de Abbâsî valileri, 761–800)' + A + ' | ' + B + 'Kartaca (Tunus bölgesi) için abi merkez Kayrevân/Tunus; ABİ MERKEZ: Kayrevân — İfrîkıye valisinin yönetim yeri, aynı vilâyet' },
  { f: '0800-01-01', d: 'aglebi', k: 'yil', b: 'İbrâhim b. Ağleb İfrîkıye emirliğini aldı; Ağlebîler dönemi başladı',
    s: 'TDV İslâm Ansiklopedisi «Ağlebîler» (İbrâhim b. Ağleb’in Hârûnürreşîd tarafından İfrîkıye emirliğine tayini, 184/800)' + A + ' | ABİ MERKEZ: Kayrevân' },
  { f: '0909-01-01', d: 'fatimi', k: 'yil', b: 'Fâtımîler Rakkâde’yi alıp Ağlebîleri bitirdi',
    s: 'TDV İslâm Ansiklopedisi «Fâtımîler» ve «Ağlebîler» (Ebû Abdullah eş-Şiî’nin Rakkâde’ye girişi, 909); Halm, H., The Empire of the Mahdi, Leiden 1996' + A + ' | ABİ MERKEZ: Kayrevân/Rakkâde' },
  { f: '0972-10-02', d: 'ziriler', k: 'yil', b: 'Fâtımîler Mısır’a taşındı; İfrîkıye Zîrîlere bırakıldı',
    s: 'TDV İslâm Ansiklopedisi «Zîrîler» (Bülükkīn b. Zîrî’nin İfrîkıye valiliği, Muizz’in Mısır’a hareketi 972)' + A + ' | gün künyeden (ziriler f=0972-10-02); kaynakta yıl okunur; ABİ MERKEZ: Kayrevân/Mehdiye' },
  { f: '1058-01-01', d: 'tunus-benihorasan', k: 'yil', b: 'Tunus Benî Horasan emirliğinin eline geçti (Zîrî nüfuzundan koptu)',
    s: 'Idris, H. R., La Berbérie orientale sous les Zirides, Paris 1962 (Tunus’ta Benî Horasan emirliği, ~1058–1159); atlas künyesi tunus-benihorasan' + A + ' | ' + B + 'Kartaca için abi merkez Tunus (komşu kent, 15 km) — ABİ MERKEZ: Tunus' },
  { f: '1159-01-01', d: 'muvahhidler', k: 'yil', b: 'Muvahhidler Tunus’u alıp Benî Horasan’ı bitirdi',
    s: 'TDV İslâm Ansiklopedisi «Muvahhidler» (Abdülmü’min’in Tunus’u alışı 554/1159)' + A + ' | ABİ MERKEZ: Tunus' },
  { f: '1229-01-01', d: 'hafsi', k: 'yil', b: 'Ebû Zekeriyyâ Tunus’ta bağımsızlığını ilan etti; Hafsîler dönemi',
    s: 'TDV İslâm Ansiklopedisi «Hafsîler» (Ebû Zekeriyyâ Yahyâ’nın İfrîkıye’de Muvahhid valiliğini bırakıp bağımsızlığı, 625/1228–29); Brunschvig, R., La Berbérie orientale sous les Hafsides, Paris 1940' + A + ' | ' + B + '1535–1574 arasındaki İspanyol himayesi / Osmanlı–İspanyol el değişimleri (1569, 1573) ayrı dilim açılmadan Hafsî çizgisinde bırakıldı; ABİ MERKEZ: Tunus' },
  { f: '1574-09-13', d: 'tunus-ocagi', k: 'gun', b: 'Osmanlı Tunus’u kesin olarak aldı; Hafsîler sona erdi; Tunus Ocağı',
    s: 'TDV İslâm Ansiklopedisi «Tunus» ve «Hafsîler» (Sinan Paşa’nın Tunus’u ve Halkulvâdî’yi alışı, 13 Eylül 1574)' + A + ' | ABİ MERKEZ: Tunus' },
  { f: '1881-05-12', d: 'tunus-beyligi-fransiz', k: 'gun', b: 'Bardo Antlaşması: Tunus Fransız himayesine girdi',
    s: 'Kasr-ı Sa‘îd (Bardo) Antlaşması, 12 Mayıs 1881; TDV İslâm Ansiklopedisi «Tunus»' + A },
  { f: '1956-03-20', d: 'tunus-krallik', k: 'gun', b: 'Tunus bağımsızlığını kazandı (Hüseynî krallığı)',
    s: 'Fransa–Tunus protokolü, 20 Mart 1956 (bağımsızlık); Perkins, K., A History of Modern Tunisia, Cambridge 2004' + A },
  { f: '1957-07-25', d: 'tunus', k: 'gun', b: 'Tunus Cumhuriyeti ilan edildi',
    s: 'Kurucu Meclis kararı, 25 Temmuz 1957 (Hüseynî monarşisinin kaldırılışı, cumhuriyet); Perkins 2004' + A },
];
yer('Kartaca (Carthage)', 'afrika1', {
  slices: [{ f: '0745-01-01', d: '__BOSLUK__', k: 'yil', b: 'Kartaca bölgesi', s: BB + 'arandı, bulunamadı: 745–761 arası İfrîkıye’de Fihrî (Abdurrahmân b. Habîb) özerk idaresi için atlasta künye yok; Abbâsî nominal egemenliği tarihsel olarak tartışmalı (Kennedy 2004, atıf, açılmadı). Abi merkez Kayrevân' }].concat(TUNUS),
  onceki: 'emevi',
});
yer('Kumbî Sâlih (Gāne)', 'afrika1', {
  slices: [{ f: '1240-01-01', d: 'mali-imparatorlugu', k: 'yil', b: 'Mali (Sundiata) Gāne/Kumbî’yi aldı',
    s: 'Niane, D. T., Soundjata ou l’épopée mandingue, Paris 1960; Levtzion, N., Ancient Ghana and Mali, London 1973 (Sunjata/Keita’nın Kumbî’yi alışı, c. 1240) ' + A + ' | gün yok: yıl hassasiyeti; atlas künyesi mali-imparatorlugu f=1235' }],
  bit: '1400-01-01',
  bit_kaynak: 'Levtzion, Ancient Ghana and Mali, 1973 ve Conrad & Fisher, Journal of African History 23 (1982) «The Moorish Conquest…» (Kumbî Sâlih kazıları: kentin XIV. yy’da terki) ' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti, "XIV. yy sonu"); kesin terk günü okunmadı. 1400 sonrası aynı noktada bir yerleşim sürmedi (kazı yeri, Moritanya Hodh ech Chargui). Berthier/Robert-Chaleix kazı bildirileri açılmadı',
});
yer('Altava (Ouled Mimoun)', 'afrika1', {
  kuyruk: '0578-01-01 → 2000-12-31',
  kuyruk_neden: 'Altava’nın 578 sonrası (Awraba/Kusayla evresi, Yıfrenî/İdrîsî Tilimsan çevresi) var olup olmadığı ve sahibi kaynakla okunmadı; TDV’de ve açılan kaynaklarda yer-düzeyinde tanık bulunamadı. «Var olduğu bilinmeyen yer için zincir yazılmadı» (CLAUDE.md boşluk merdiveni ④).',
  slices: [],
});
yer('Evdeguşt (Awdaghust)', 'afrika1', {
  kuyruk: '1087-04-08 → 2000-12-31',
  kuyruk_neden: '1087 sonrası Tegdaoust’un (Evdeguşt) sahibi (Murâbıt güney kolu / Soninke / Mali) ve terk tarihi için Robert-Chaleix kazı raporları ve Levtzion açılmadı; kesin tanık okunmadı, beyansız yaklaşıklık yazılmadı.',
  slices: [],
});

// ---------- AMERİKA2 ----------
yer('Huari (Wari)', 'amerika2', { slices: [], bit: '1000-01-01',
  bit_kaynak: 'Moseley, M. E., The Incas and Their Ancestors, 2. bs., London 2001 ve Isbell & Silverman (eds.), Andean Archaeology III, 2006 (Huari’nin yaklaşık MS 1000’de terki)' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti, ~MS 1000); kalibre 14C aralığı bu oturumda okunmadı, orta nokta hesaplanamadı. Atlas wari künyesi t=0800 (düzeltme önerisi: ≥1000). Sonrası aynı noktada kent yok.' });
yer('Cerro Baúl', 'amerika2', { slices: [], bit: '1000-01-01',
  bit_kaynak: 'Williams, P. R. & Nash, D. J., Moquegua Wari/Cerro Baúl çalışmaları (Moseley vd., PNAS 102(48), 2005 «Burning down the brewery»: Wari kolonisinin yaklaşık MS 1000’de ritüel yakım ve terki)' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti, ~MS 1000); kalibre aralık okunmadı. Terk sonrası Tiwanaku/Inka çağında Moquegua’daki başka yerleşimler bu kaydın dışında.' });
yer('Batán Grande (Sicán)', 'amerika2', {
  slices: [{ f: '1050-01-01', d: 'sican', k: 'yil', devam: true, b: 'Batán Grande',
    s: 'Shimada, I., Cultural Continuity and Change: The Case of the Peruvian North Coast, 1990 ve Shimada (ed.), Sicán dynasty… (1050–1100 arası Batán Grande’nin büyük çaplı terki/yakımı); devam: Sicán çizgisi sürüyor' + A + ' | ana kron «Batán Grande büyük oranda terk edildi (1050-1100)»' }],
  bit: '1075-01-01', bit_aralik: { bas: '1050-01-01', son: '1100-01-01', tur: 'tabaka-donem' },
  bit_kaynak: 'Shimada 1990 / ana kron’daki «1050–1100 terk» maddesi; orta nokta kuralı (ARKEOLOJI-KATMANI-SARTNAME-1018 §3): (1050+1100)/2 = 1075' + A,
  bit_not: 'Orta nokta tahmindir, ölçüm değildir; kesinlik yuzyil/onyil. Sicán başkenti sonra Túcume’ye taşındı (atlas sican künyesi t=1375). Modern Batán Grande/Pomalca yerleşimi bu kaydın dışında.' });
yer('Ciudad Perdida (Teyuna)', 'amerika2', { slices: [], bit: '1600-01-01',
  bit_kaynak: 'ICANH (Instituto Colombiano de Antropología e Historia), Parque Arqueológico Teyuna–Ciudad Perdida: terk 1580–1650 arası (İspanyol fethi sonrası); Giraldo, S., 2010 ' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR 1600 (atlas tairona künyesi t=1600’e dayanır; ICANH aralığının ortası 1615 olurdu ⇒ künye t’yi 1615’e uzatma önerisi). 1972’de yeniden keşfine kadar kimse yerleşmedi; günümüzdeki Kogi/Wiwa köyleri kent içinde değil.' });
yer('Xochicalco', 'amerika2', { slices: [], bit: '0900-01-01',
  bit_kaynak: 'UNESCO Dünya Mirası bildirimi «Pre-Hispanic Town of Xochicalco» (zirve 650–900, kentin ~900 sonrası terki/yakılışı); Hirth, K., Xochicalco… (2000)' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti). Postklasik’te sınırlı kullanım/ziyaret ihtimali kaynakla okunmadı; yerleşim sayılmadı.' });
yer('Pueblo Bonito (Chaco Kanyonu)', 'amerika2', { slices: [], bit: '1300-01-01',
  bit_kaynak: 'Lekson, S. H., The Chaco Meridian, Walnut Creek 2006 ve NPS Chaco Culture NHP: «Chaco’nun bölgesel rolü 1100’ler–1200’lerde kaydı; kanyon XIII. yy’da büyük ölçüde boşaldı»' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti): Pueblo Bonito’nun kendi son kullanım yılı okunmadı (inşa ~850–1150; XIII. yy’a kadar sınırlı iskân). Atlas ata-pueblo künyesi t=1300 ile uyumlu.' });
yer('Dos Pilas', 'amerika2', { slices: [], bit: '0761-01-01',
  bit_kaynak: 'Martin & Grube, Chronicle of the Maya Kings and Queens, 2. bs., London 2008 (Dos Pilas’ın 761’de Tamarindito/Aguateca saldırısıyla çöküşü ve terki); Inomata, T., Ancient Mesoamerica 2017' + A,
  bit_not: 'bit = 761 çift teyitli (M&G + Inomata); sonrası yerleşim yok (Petexbatún çöküşü). Sahibi dos-pilas-petexbatun künyesi t=0761 ile örtüşür.' });
yer('El Tajín', 'amerika2', {
  slices: [{ f: '1100-01-01', d: '__BOSLUK__', k: 'yuzyil', b: 'El Tajín', s: BB + 'arandı, bulunamadı: 1100–1200 arası kentin sahibi (atlas el-tajin künyesi t=1100, Diehl; UNESCO kentin ~1200’e kadar iskân gördüğünü söyler); Totonak devleti için künye yok; UNESCO «El Tajin, Pre-Hispanic City» özeti' + A }],
  bit: '1200-01-01',
  bit_kaynak: 'UNESCO Dünya Mirası bildirimi «El Tajin, Pre-Hispanic City» (800–1200 tek iskân evresi; ~1200’den sonra terk)' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (yüzyıl hassasiyeti); künye t=1100 ile 100 yıllık fark beyanlı boşluk olarak bırakıldı (künye uzatma önerisi: el-tajin t→1200).' });
yer('Tilantongo', 'amerika2', {
  slices: [
    { f: '1521-01-01', d: '__BOSLUK__', k: 'yil', b: 'Tilantongo', s: BB + 'arandı, bulunamadı: atlas tilantongo-mixtek künyesi t=1521-01-01, Yeni İspanya ilk dönem künyesi f=1521-08-13; arada 7,5 aylık fark (Mixteca’nın İspanyol egemenliğine girişi 1521–1522; Terraciano, K., The Mixtecs of Colonial Oaxaca, Stanford 2001' + A + ')' },
    { f: '1521-08-13', d: 'yeni-ispanya-ilk-donem', k: 'yil', b: 'Tenochtitlan düştü; Tilantongo Yeni İspanya egemenliğine geçti',
      s: 'Terraciano, The Mixtecs of Colonial Oaxaca, Stanford 2001 (Mixteca Alta’nın 1521–1522’de İspanyol egemenliğine girişi) ve Pohl, J., Mixtec Cacicazgos…' + A + ' | ' + B + 'Tilantongo’nun teslim günü okunmadı; Tenochtitlan’ın düştüğü gün (13 Ağustos 1521, künyeden) alınır' },
    { f: '1535-04-17', d: 'yeni-ispanya', k: 'gun', b: 'Yeni İspanya Genel Valiliği kuruldu (kral emri)',
      s: 'Yeni İspanya Genel Valiliği’nin kuruluş emri, 17 Nisan 1535; Gibson, C., The Aztecs under Spanish Rule, Stanford 1964' + A },
    { f: '1821-09-27', d: 'meksika', k: 'gun', b: 'Meksika bağımsızlığı: Trigarante Ordusu Mexico City’ye girdi',
      s: 'Meksika Bağımsızlık Bildirgesi, 28 Eylül 1821 (Trigarante Ordusu’nun 27 Eylül 1821’de başkente girişi); Knight, A., Mexico: The Colonial Era, Cambridge 2002' + A + ' | 1864–67 İkinci İmparatorluk Oaxaca’da fiilî değil, ayrı dilim açılmadı (' + B + 'Meksika çizgisinde bırakıldı)' },
  ],
  onceki: 'tilantongo-mixtek',
});
yer('Cobá', 'amerika2', { kuyruk: '0780-12-02 → 2000-12-31', slices: [],
  kuyruk_neden: 'Cobá’nın 780 sonrası (Terminal Klasik–Postklasik, 1550’lere dek sınırlı iskân) sahibi ve terk günü kaynakla okunmadı (Chichén Itzá nüfuzu, Mayapán/Cupul-Cochuah çağı tanıkları açılmadı); beyansız yaklaşıklık yazılmadı.' });
yer('Cacaxtla', 'amerika2', { kuyruk: '0950-01-01 → 2000-12-31', slices: [],
  kuyruk_neden: 'Cacaxtla’nın 950 sonrası (Olmeca-Xicalanca sonrası Postklasik iskân/terk; Tlaxcallan/Cholula bağlantısı) kaynakla okunmadı; kayıt notu da 950’nin terk tarihi olmadığını söyler.' });
yer('Uxmal', 'amerika2', { kuyruk: '0907-01-01 → 2000-12-31', slices: [],
  kuyruk_neden: 'Uxmal’ın 907 sonrası (Xiu hanedanı, Mayapán Ligi, 1540’larda İspanyol fethi) sahibi için gün/yıl tanığı okunmadı; maya-sehir-devletleri künyesinin Uxmal’i kapsadığı kaynaklı değil.' });
yer('Ek\' Balam', 'amerika2', { kuyruk: '0840-01-01 → 2000-12-31', slices: [],
  kuyruk_neden: 'Ek’ Balam’ın 840 sonrası (Terminal Klasik–Postklasik iskân, Talol encomienda’sı) sahibi ve terk tarihi okunmadı; Vail/Bey vd. kazı raporları açılmadı.' });
// ---------- AMERİKA1 / AMERİKA3 (RAPOR.md'leri olan kümeler, ikinci tarama) ----------
yer('Huacas de Moche', 'amerika1', { slices: [], bit: '0799-12-31',
  bit_kaynak: 'Uceda, S. & Mujica, E. (eds.), Moche: Hacia el final del milenio, Lima 2003 ve Uceda 2010 (Sol ve Luna Huacası’nın Moche çöküşüyle MS ~600–800 arasında terki)' + A,
  bit_not: 'bit = EN GEÇ ÜST SINIR (moche künyesi t=0799-12-31, yüzyıl hassasiyeti); kentin kendi terk yılı okunmadı. Sonra yerleşim yok (Moche vadisinde Chimú Chan Chan’a kaydı).' });
const KN = (n) => 'bu turda (kuyrukyeni3, ikinci tarama) kaynak aranmadı/okunmadı; ' + n + ' Beyansız yaklaşıklık yazılmadı.';
yer('Tikal', 'amerika1', { kuyruk: '0869-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('869 son tarihli yazıt; nüfus çöküşü/terk (~900–950) ve sonrası sahibi için Culbert/Martin & Grube okunmadı.') });
yer('Calakmul', 'amerika1', { kuyruk: '0909-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('909 son tarihli yazıt sonrası terk ve sahibi okunmadı.') });
yer('Dzibanché', 'amerika1', { kuyruk: '0909-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('909 sonrası terk/Postklasik iskân ve sahibi okunmadı.') });
yer('Caracol', 'amerika1', { kuyruk: '0859-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('859 son yazıt sonrası ve Postklasik kullanım okunmadı.') });
yer('Copán', 'amerika1', { kuyruk: '0820-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('820 civarı hanedan sonu sonrası terk; 1500’lerde Chortí/İspanyol dönemi okunmadı.') });
yer('Palenque', 'amerika1', { kuyruk: '0799-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('799 sonrası terk tarihi ve sahibi okunmadı.') });
yer('Yaxchilán', 'amerika1', { kuyruk: '0808-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('808 sonrası terk okunmadı.') });
yer('Piedras Negras', 'amerika1', { kuyruk: '0810-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('810 sonrası terk okunmadı.') });
yer('Quiriguá', 'amerika1', { kuyruk: '0810-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('810 sonrası terk okunmadı.') });
yer('Naranjo (Saal)', 'amerika1', { kuyruk: '0810-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('810 sonrası terk okunmadı.') });
yer('Ceibal (Seibal)', 'amerika1', { kuyruk: '0889-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('889 sonrası (Terminal Klasik Seibal, ~930 sonrası terk) okunmadı.') });
yer('Tiwanaku', 'amerika1', { kuyruk: '1010-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('1010 sonrası (Tiwanaku çöküşü, Aymara senyörlükleri, Inka, İspanyol, Bolivya; Tiwanaku modern köy/arkeolojik alan) sahipler zinciri okunmadı.') });
yer('Tula de Allende (Tollan)', 'amerika3', { kuyruk: '1150-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('1150 sonrası (terk, ~1250 yeniden iskân, Aztek tributary, Yeni İspanya) sahipler zinciri okunmadı.') });
yer('Brattahlíð (Qassiarsuk)', 'amerika3', { kuyruk: '1450-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('1450 sonrası: Norse terk, Danimarka Grönland’ı ve 1924 modern Qassiarsuk (yerleşim yeniden kuruldu ⇒ düz bit yazılamaz) okunmadı.') });
yer('La Centinela (Chincha)', 'amerika3', { kuyruk: '1476-01-01 → 2000-12-31', slices: [], kuyruk_neden: KN('1476 Inka fethi sonrası (Inka, İspanyol fethi, kentin XVI. yy’da terki) kazı/kaynak okunmadı.') });

// ---------- üretim ----------
const out = [], sinir = [];
for (const p of P) {
  const e = { ad: p.ad, kume: p.kume, s_ek: [] };
  const sl = p.slices || [];
  const sonT = p.bit && !p.bit_aralik ? null : (p.bit || '2000-12-31');
  sl.forEach((s, i) => {
    const t = i + 1 < sl.length ? sl[i + 1].f : (p.bit || '2000-12-31');
    const o = { f: s.f, t, d: s.d, kesinlik: s.k, kaynak: s.s };
    if (s.devam) o.devam = true;
    e.s_ek.push(o);
  });
  if (p.bit) { e.bit = p.bit; e.bit_kaynak = p.bit_kaynak; e.bit_not = p.bit_not; if (p.bit_aralik) e.bit_aralik = p.bit_aralik; }
  if (p.kuyruk) { e.kuyruk_gerekli = p.kuyruk; e.kuyruk_neden = p.kuyruk_neden; }
  out.push(e);
  sl.forEach((s, i) => {
    if (s.devam) return;
    const old = i > 0 ? sl[i - 1].d : (p.onceki || null);
    const yeniBos = s.d === '__BOSLUK__';
    const eskiBos = old === '__BOSLUK__';
    const kazanan = yeniBos ? old : s.d;
    if (!kazanan) return;
    const taraflar = (yeniBos ? [old] : (old && !eskiBos ? [s.d, old] : [s.d]));
    const ya = p.ad.replace(/ \(.*/, '');
    sinir.push({
      t: s.f, devlet: kazanan, taraflar,
      b: (s.b || (ya + ': devir')) + ' — ' + ya,
      tur: yeniBos ? 'toprak-kayip' : 'toprak-kazanc',
      onem: 2, dunya: 1, kapsam: 'dis',
      yer: ya, yer_id: p.ad,
      etiket: ['toprak-degisimi', 'konu-siyasi', 'dogu-kuyruk-1281-2000'],
      d: ya + ' yerleşiminin sahibi ' + (old ? (adlar[old] || old) : '?') + ' iken ' + (yeniBos ? 'sahipsiz kaldı (beyanlı boşluk)' : (adlar[s.d] || s.d) + ' oldu') + '. Gün/yıl hassasiyeti: ' + s.k + '.',
      kaynak: s.s, kesinlik: s.k, sinir_id: [],
    });
  });
}
fs.writeFileSync(path.join(DIR, 'zincir_kuyruk.js'),
  '// kuyrukyeni3: afrika1 + amerika2 yeni yerleşimlerinin kuyrukları. s_ek[0].f = kaydın mevcut son t (devam:true ise aynı sahip sürüyor).\nwindow.ZINCIR_DOGU_KUYRUKYENI3 = ' + JSON.stringify(out, null, 1) + ';\n');
fs.writeFileSync(path.join(DIR, 'kronoloji_sinir_dogu_kuyrukyeni3.js'),
  '// kuyrukyeni3: kuyruk zincirlerinin devir günleri için sınır maddeleri (Değişmez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKYENI3 = ' + JSON.stringify(sinir, null, 1) + ';\n');
console.log('yerlesim kaydi', out.length, 'sinir maddesi', sinir.length);
