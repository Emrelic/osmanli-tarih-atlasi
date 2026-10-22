// kuyrukyeni2 üretici: zincir_kuyruk.js + kronoloji_sinir_dogu_kuyrukyeni2.js + kunye_yeni.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const DIR = __dirname, KOK = path.resolve(DIR, '..', '..', '..');
function yuk(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const adlar = {};
for (const d of (yuk(path.join(KOK, 'data/devletler.js')).DEVLETLER || [])) adlar[d.id] = d.ad;
for (const d of (yuk(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || [])) adlar[d.id] = adlar[d.id] || d.ad;
for (const k of fs.readdirSync(path.join(KOK, 'denetim/dogu'))) {
  const f = path.join(KOK, 'denetim/dogu', k, 'kunye_yeni.js');
  if (fs.existsSync(f)) { const w = yuk(f); for (const g of Object.keys(w)) for (const d of w[g]) adlar[d.id] = adlar[d.id] || d.ad; }
}
adlar['maldivler-cumhuriyeti'] = 'Maldivler Cumhuriyeti';
adlar['__BOSLUK__'] = 'boşluk (sahipsiz)';
const A = '; atıf, bu oturumda açılmadı';
const B = 'BEYANLI YAKLAŞIKLIK: ';

const MJ6 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. VI: The Delhi Sultanate, Bombay 1960';
const MJ7 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. VII: The Mughul Empire, Bombay 1974';
const KMDS = 'K. M. de Silva, A History of Sri Lanka, Univ. of California Press 1981';
const HIND = 'Hindistan Bağımsızlık Yasası (Indian Independence Act 1947; 15 Ağustos 1947)' + A;
const SL = {
  kandy: { f: '1469-01-01', d: 'kandy', k: 'yil', s: KMDS + ' «The Kingdom of Kandy»: Senasammata Vikramabahu (c.1469) Kandy (Senkadagala) krallığını kurdu; atlas künyesi kandy f=1469' + A + ' | ' + B + 'iç bölgede (Rajarata/Seven Korales) Kotte, Sitavaka ve Kandy arasındaki paylaşım yıl/gün vermiyor; en uzun süre hâkim iç krallık (Kandy) yazıldı', b: 'Kandy Krallığı kuruldu; iç bölge Kandy’ye bağlandı' },
  ing: { f: '1815-03-02', d: 'ingiliz-seylan', k: 'gun', s: 'Kandy Sözleşmesi (Kandyan Convention, 2 Mart 1815): Kandy ileri gelenleri İngiliz Tacı’nın egemenliğini kabul etti; ' + KMDS + A, b: 'Kandy Sözleşmesi: Kandy Krallığı İngiliz Seylanı’na katıldı' },
  sl: { f: '1948-02-04', d: 'sri-lanka', k: 'gun', s: 'Ceylon Independence Act 1947; Seylan Dominyonu bağımsızlığı 4 Şubat 1948' + A, b: 'Seylan bağımsız oldu' },
};
const GUC = {
  delhi: (kaynakEk) => ({ f: '1299-01-01', d: 'delhi-sultanligi', k: 'yil', s: MJ6 + ' «Alauddin Khalji»: Ulugh Khan ve Nusrat Khan’ın Gucerat’ı alışı (1299; Vaghela Karna II kaçtı)' + A + (kaynakEk || ''), b: 'Alâeddin Halacî Gucerat’ı aldı; Vaghela hâkimiyeti bitti' }),
  guc: { f: '1407-01-01', d: 'gucerat-sultanligi', k: 'yil', s: 'Muzaffar Khan (Zafar Khan) Gucerat Sultanlığı’nı ilan etti (1407); Commissariat, M. S., A History of Gujarat I, Bombay 1938' + A + ' | ' + B + 'Zafar Khan fiilen 1391’den vali olarak özerkti; atlas künyesi gucerat-sultanligi f=1407', b: 'Gucerat Sultanlığı Delhi’den ayrıldı' },
  babur: { f: '1573-01-01', d: 'babur-imparatorlugu', k: 'yil', s: 'Ekber’in Gucerat’ı alışı (1572-73; Ahmedâbâd’ın teslimi Kasım 1572); ' + MJ7 + A + ' | atlas künyesi gucerat-sultanligi t=1573', b: 'Ekber Gucerat Sultanlığı’nı ilhak etti' },
  mar: { f: '1758-01-01', d: 'maratha', k: 'yil', s: 'Raghunathrao ve Damaji Gaekwad’ın Ahmedâbâd’ı alışı (1758); Commissariat, A History of Gujarat II, Bombay 1957' + A, b: 'Marathalar Ahmedâbâd’ı alıp Gucerat’ın hâkimi oldu' },
};

const P = [];
function yer(ad, kume, o) { P.push(Object.assign({ ad, kume }, o)); }

// ---------- HİNT ----------
yer('Kalyani (Basavakalyan)', 'hint2', {
  slices: [
    { f: '1281-01-01', d: 'yadava', k: 'yil', devam: true, s: MJ6 + ' «The Yadavas of Devagiri»' + A + ' | Yadava (Seuna) hâkimiyeti Kalyani’de 1189 sonrası sürdü' },
    { f: '1318-01-01', d: 'delhi-sultanligi', k: 'yil', s: MJ6 + ' «Mubarak Shah»: Devagiri’nin ilhakı, Harapaladeva’nın öldürülmesi (1317-18); atlas künyesi yadava t=1318' + A, b: 'Delhi Yadava ülkesini ilhak etti; Kalyani Delhi’ye geçti' },
    { f: '1347-08-03', d: 'behmeni', k: 'gun', s: 'Hasan Gangu’nun Gulbarga’da Alâeddin Bahman Şah olarak tahta çıkışı (3 Ağustos 1347); Sherwani, H. K., The Bahmanis of the Deccan, Hyderabad 1953; TDV İslâm Ansiklopedisi «Behmenîler»' + A, b: 'Bahmani Sultanlığı kuruldu; Kalyani Bahmani’ye geçti' },
    { f: '1489-01-01', d: 'bicapur', k: 'yil', s: 'Âdilşâhî (Bîcâpûr) hâkimiyeti (Yusuf Âdil Şah 1489/90); Sherwani 1953; Kalyani kalesi Bicapur’un kuzeydoğu sınır kalesi (Aurangzeb 1657 Bicapur’dan aldı)' + A + ' | ' + B + 'Kalyani 1489-1657 arasında Bîdar (Barîdşâhî), Ahmednagar ve Bicapur arasında kaç kez el değiştirdi bu oturumda sayılamadı; en uzun süre sahibi Bicapur yazıldı (Bahmani dağılışı günü yok; künye bicapur f=1489)', b: 'Bahmani dağıldı; Kalyani Âdilşâhî (Bicapur) hâkimiyetine girdi' },
    { f: '1657-01-01', d: 'babur-imparatorlugu', k: 'yil', s: 'Evrengzib’in Bîdar ve Kalyani’yi alışı (1656-57) ve 1657 antlaşmasıyla Bicapur’un Bîdar, Kalyani, Parenda kalelerini Bâbürlülere bırakması; Sarkar, J., History of Aurangzib I, Calcutta 1912; ' + MJ7 + A + ' | gün işareti: 1657', b: 'Evrengzib Kalyani’yi Bicapur’dan alıp Bâbürlülere kattı' },
    { f: '1724-10-11', d: 'haydarabad-nizam', k: 'gun', s: 'Nizamülmülk Âsafcâh’ın Şakarkhera zaferi (11 Ekim 1724) ve Haydarabad Nizamlığı’nın fiilen kuruluşu; TDV İslâm Ansiklopedisi «Âsafcâhîler»; Sarkar/Majumdar' + A + ' | Kalyani Bîdar sübesi içinde Nizam topraklarında (BEYANLI YAKLAŞIKLIK: Bâbürlü sübe valisi Nizamülmülk’ün özerklik günü künye f ile hizalı)', b: 'Âsafcâh Haydarabad Nizamlığı’nı kurdu; Kalyani Nizam topraklarına geçti' },
    { f: '1948-09-17', d: 'hindistan-cumhuriyeti', k: 'gun', s: 'Polo Harekâtı: Haydarabad Nizamı’nın teslimi (17 Eylül 1948) ve Hindistan’a katılış' + A + ' | atlas künyesi haydarabad-nizam t=1948-09-17', b: 'Haydarabad Hindistan’a katıldı; Kalyani Hindistan’a geçti' },
  ],
});
yer('Thane', 'hint2', {
  slices: [
    { f: '1281-01-01', d: 'yadava', k: 'yil', devam: true, s: MJ6 + ' «Yadavas» ve Silahara-Yadava Konkan geçişi' + A + ' | Konkan’da Bhimadeva (Mahim) Yadava tâbiiydi (BEYANLI YAKLAŞIKLIK: yerel Mahim hanedanı atlas kimliği yok; üst hükümdar Yadava)' },
    { f: '1318-01-01', d: '__BOSLUK__', k: 'yil', s: 'BOŞLUK BEYANI: arandı, bulunamadı: Thane’nin 1318-1429 arası sahibi (Yadava ilhakı 1317-18 sonrası Konkan: Delhi valileri, Mahim/Bimbasthana Bhimadeva soyu ve Bahmani-Gucerat çekişmesi arasında); ' + MJ6 + '; Gazetteer of the Bombay Presidency Vol. XIII Thana, Bombay 1882' + A + ' | Thane abi merkezi için bağlayıcı kaynak bulunamadı', b: 'Yadava ilhakı sonrası Thane’nin sahibi kaynakta tespit edilemedi' },
    { f: '1429-01-01', d: 'gucerat-sultanligi', k: 'yil', s: 'Gucerat’ın Mahim–Thane kıyısını Bahmani’ye karşı elde tutması (1429 çevresi); Gazetteer of the Bombay Presidency Vol. XIII Thana, 1882; Commissariat, A History of Gujarat I, 1938' + A + ' | ' + B + 'Thane’nin Gucerat’a geçiş yılı kaynaktan ±birkaç yıl; yıl işareti', b: 'Gucerat Sultanlığı Thane ve Mahim kıyısını aldı' },
    { f: '1534-12-23', d: 'portekiz', k: 'gun', s: 'Bassein (Vasai) Antlaşması, 23 Aralık 1534: Gucerat Sultanı Bahadur Şah Bassein ve bağlıları (Thane/Salsette dahil) Portekiz’e bıraktı; Gazetteer of the Bombay Presidency Vol. XIII Thana, 1882' + A, b: 'Bassein Antlaşması: Gucerat Thane/Salsette’yi Portekiz’e bıraktı' },
    { f: '1737-01-01', d: 'maratha', k: 'yil', s: 'Chimaji Appa’nın Salsette ve Thane kalesini Portekiz’den alışı (Mart 1737); Gazetteer of the Bombay Presidency Vol. XIII Thana, 1882; Pissurlencar, P., Portugueses e Maratas' + A + ' | gün Mart 1737 aktarılır, yıl işareti', b: 'Marathalar Thane kalesini Portekiz’den aldı' },
    { f: '1774-12-28', d: 'ingiliz-hindistani', k: 'gun', s: 'İngiliz Doğu Hindistan Şirketi Salsette’yi (Thane) Marathalardan zorla aldı (Aralık 1774); Surat (1775), Purandar (1776) ve Salbai (1782) antlaşmalarıyla tescil; Gazetteer of the Bombay Presidency Vol. XIII Thana, 1882' + A + ' | ' + B + 'Thane fiilî işgal günü ile hukukî devir (Salbai 17 Mayıs 1782) farklı; fiilî işgal günü yazıldı, gün Aralık 1774’ün sonu', b: 'İngiliz Şirketi Thane’yi (Salsette) Marathalardan aldı' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: HIND, b: 'Hindistan bağımsız oldu; Thane Hindistan’a kaldı' },
  ],
});
yer('Wadhwan (Vardhamana)', 'hint2', {
  slices: [
    { f: '1281-01-01', d: 'caulukya', k: 'yil', devam: true, s: MJ6 + ' «The Vaghelas of Gujarat»' + A + ' | atlas künyesi caulukya t=1297 (Saurashtra Vaghela/Caulukya üstünlüğü)' },
    { f: '1297-01-01', d: 'vaghela', k: 'yil', s: 'Vaghela Karna II’nin son yılları: caulukya künye t=1297; ' + MJ6 + ' «Alauddin Khalji»' + A + ' | ' + B + 'Wadhwan’ın sahibi 1297-99 arasında künyeler (caulukya t=1297, vaghela t=1299) hizalansın diye Vaghela yazıldı', b: 'Çaulukya künyesi bitti; Wadhwan Vaghela hâkimiyetinde sürdü' },
    GUC.delhi(' | ' + B + 'Saurashtra’da Wadhwan yerel Rajput (Jhala/Gohil) beylerinin tâbiiliğiyle Delhi’ye bağlandı'),
    GUC.guc,
    GUC.babur,
    { f: '1758-01-01', d: 'maratha', k: 'yil', s: 'Gaekwad ve Peşvâ’nın Kathiawar’dan haraç (mulukgiri) alışı (1758 sonrası); Commissariat, A History of Gujarat II' + A + ' | ' + B + 'Wadhwan’da yerel Jhala hanedanı iç egemenliği sürdürdü, ardıl kimliği atlasta yok; üst hükümdar Maratha yazıldı', b: 'Marathalar Gucerat ve Kathiawar’da haraç hâkimi oldu' },
    { f: '1807-01-01', d: 'ingiliz-hindistani', k: 'yil', s: 'Kathiawar Düzenlemesi (Walker Settlement, 1807): Kathiawar prenslikleri İngiliz himayesine girdi; Wadhwan Devleti (Jhala) prensliği; Gazetteer of the Bombay Presidency Vol. VIII Kathiawar, Bombay 1884' + A + ' | ' + B + 'Wadhwan prenslik olarak iç özerk; ardıl kimliği yok, İngiliz himayesi yazıldı', b: 'Kathiawar Düzenlemesi: Wadhwan İngiliz himayesine girdi' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: HIND + ' | ' + B + 'Wadhwan Devleti Hindistan’a katılış belgesi (Ağustos 1947), Saurashtra Birliği 15 Şubat 1948', b: 'Hindistan bağımsız oldu; Wadhwan Hindistan’a katıldı' },
  ],
});
yer('Dholka', 'hint3', {
  slices: [
    GUC.delhi(),
    GUC.guc,
    GUC.babur,
    GUC.mar,
    { f: '1817-06-13', d: 'ingiliz-hindistani', k: 'gun', s: 'Poona Antlaşması (13 Haziran 1817): Peşvâ Gucerat’taki haklarını (Ahmedâbâd) İngilizlere devretti; Commissariat, A History of Gujarat II, Bombay 1957' + A + ' | ' + B + 'Dholka Gaekwad/Peşvâ paylaşımında; İngiliz idaresi 1817-18’de kuruldu; atlas künyesi maratha t=1818-06-03', b: 'Peşvâ Ahmedâbâd bölgesini İngilizlere devretti; Dholka İngiliz Hindistanı’na geçti' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: HIND, b: 'Hindistan bağımsız oldu; Dholka Hindistan’a kaldı' },
  ],
});
yer('Simraungarh (Simraon)', 'hint2', {
  bit: '1324-01-01',
  bit_kaynak: 'Gıyâseddin Tuğluk’un Tirhut seferi (1324): Simraungarh düşürüldü, Harisimhadeva Nepal’e kaçtı; Majumdar (ed.), HCIP VI: The Delhi Sultanate, Bombay 1960; Barani, Tarikh-i Firuz Shahi' + A,
  bit_not: 'Kent 1324’te yıkıldı ve bir daha yerleşilmediği bilinen harabe olarak kaldı (Bara ili, Nepal); 1324 sonrası aynı noktada kentsel yerleşim kaynağı bulunamadı → bit. Künye karnata-mithila t=1324 ile uyumlu.',
  slices: [
    { f: '1281-01-01', d: 'karnata-mithila', k: 'yil', devam: true, s: MJ6 + ' «Mithila» ve Simraungarh Karnata başkenti' + A },
  ],
});
yer('Polonnaruwa', 'hint2', {
  slices: [
    { f: '1281-01-01', d: 'seylan-sinhala', k: 'yil', devam: true, s: KMDS + ' «From Polonnaruva to Kotte»: Polonnaruva’dan Dambadeniya’ya kaymış Sinhala krallıkları' + A + ' | ' + B + 'Polonnaruva 13. yy’da başkentliğini yitirdi, kent terk edilmiş harabe halinde Sinhala krallıklarının doğu-iç bölgesinde (Vanni/Bintenna) kaldı' },
    SL.kandy, SL.ing, SL.sl,
  ],
});
yer('Dambadeniya', 'hint3', {
  slices: [
    { f: '1281-01-01', d: 'seylan-sinhala', k: 'yil', devam: true, s: KMDS + ' «From Polonnaruva to Kotte»: Dambadeniya (III. Vijayabahu, II. Parakramabahu) ve Yapahuwa/Kurunegala dönemi' + A },
    SL.kandy, SL.ing, SL.sl,
  ],
});
yer('Yapahuwa', 'hint3', {
  bit: '1284-01-01',
  bit_kaynak: 'Pandya akını (Kulasekhara Pandya/Aryacakravarti, c.1284): Yapahuwa’dan Diş Emaneti alındı, başkent Kurunegala’ya taşındı ve kale terk edildi; Culavamsa; ' + KMDS + A,
  bit_not: 'kur 1268 ile bit 1284: kısa ömürlü başkent kalesi; 1284 sonrası kentsel yerleşim kaydı yok (kaynaklı terk)',
  slices: [],
});
yer('Malé', 'hint3', {
  slices: [
    { f: '1968-11-11', d: 'maldivler-cumhuriyeti', k: 'gun', s: 'Maldivler Cumhuriyeti’nin ilanı (11 Kasım 1968; sultanlığın kaldırılması, 15 Mart 1968 referandumu); Maloney, C., People of the Maldive Islands, Bombay 1980; Romero-Frias, X., The Maldive Islanders, Barcelona 1999' + A, b: 'Maldiv Sultanlığı kaldırıldı; Maldivler Cumhuriyeti ilan edildi' },
  ],
});
yer('Sadiya', 'hint3', {
  slices: [
    { f: '1523-01-01', d: 'ahom', k: 'yil', s: 'Gait, E. A., A History of Assam, Calcutta 1926 «Suhungmung (Dihingia Raja)»: Ahomlar Sadiya’yı alıp Chutiya Krallığı’nı ilhak etti (1523); Guha, A., Medieval and Early Colonial Assam, Calcutta 1991' + A + ' | atlas künyesi chutiya t=1501 (kaydın kendi son t=1523 yıl hassasiyeti)', b: 'Ahomlar Sadiya’yı alıp Chutiya Krallığı’na son verdi' },
    { f: '1826-01-01', d: 'ingiliz-hindistani', k: 'yil', s: 'Yandabo Antlaşması (24 Şubat 1826): Birmanya Assam’ı İngiltere’ye bıraktı; Gait 1926; Bhuyan, S. K., Anglo-Assamese Relations' + A + ' | ' + B + 'Sadiya’yı Ahom adına Khamti Sadiya Khowa Gohain yönetiyordu (İngilizler 1839’da doğrudan aldı); atlas künyesi ahom t=1826-01-01 ile hizalı, Yandabo 24 Şubat 1826', b: 'Yandabo Antlaşması: Assam (Sadiya) İngiliz Hindistanı’na geçti' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: HIND, b: 'Hindistan bağımsız oldu; Sadiya Hindistan’a kaldı' },
  ],
});

// ---------- GÜNEYDOĞU ASYA ----------
yer('Phayao', 'gdasya3', {
  slices: [
    { f: '1281-01-01', d: 'phayao', k: 'yil', devam: true, s: 'Wyatt, D. K., Thailand: A Short History, Yale 1984 «Lan Na»; Hall, D. G. E., A History of South-East Asia, 1981' + A },
    { f: '1338-01-01', d: 'lan-na', k: 'yil', s: 'Wyatt 1984: Phayao’nun Lan Na’ya katılışı (1338, Kham Fu); atlas künyesi phayao t=1338' + A, b: 'Lan Na Phayao’yu ilhak etti' },
    { f: '1558-04-02', d: 'toungoo', k: 'gun', s: 'Bayinnaung’un Chiang Mai’yi alışı (2 Nisan 1558); Wyatt 1984; Harvey, History of Burma 1925' + A + ' | atlas künyesi lan-na t=1558-04-02', b: 'Bayinnaung Lan Na’yı fethetti; Phayao Toungoo’ya bağlandı' },
    { f: '1752-01-01', d: 'konbaung', k: 'yil', s: 'Alaungpaya Konbaung’u kurdu (1752); Harvey 1925' + A + ' | ' + B + 'Burma üstünlüğü Toungoo’dan Konbaung’a sürdü; künye toungoo t=1752', b: 'Toungoo yıkıldı; Lan Na üzerindeki Birmanya egemenliği Konbaung’a geçti' },
    { f: '1774-01-01', d: 'tonburi', k: 'yil', s: 'Chiang Mai’nin Phraya Chabaan ve Kawila ile Siyam yardımıyla Birmanya’dan alınması (1774); Wyatt 1984' + A + ' | ' + B + 'Phayao Chiang Mai’ye bağlı Lan Na beyliğinde; Siyam’ın tâbii üst hükümdarı Thonburi yazıldı, künye tonburi 1767-12-28..1782-04-06', b: 'Lan Na Birmanya’dan çıkıp Siyam’a tâbi oldu' },
    { f: '1782-04-06', d: 'siyam-chakri', k: 'gun', s: 'Wyatt 1984: I. Rama’nın Chakri Hanedanı’nı kurması (6 Nisan 1782)' + A + ' | ' + B + 'Phayao Lan Na prensliği Siyam tâbiiydi; Siyam’a fiilen 1899-1939’da katılış; atlas künyesi siyam-chakri Tayland’ı kapsar', b: 'Chakri Hanedanı kuruldu; Phayao Siyam üst hükümdarlığında sürdü' },
  ],
});
yer('Daha (Kediri)', 'gdasya3', {
  kuyruk: '1527-01-01 → 2000-12-31',
  kuyruk_neden: '1527 sonrası Daha/Kediri’nin sahibi (Demak, Pajang, Mataram, Surakarta, Hollanda yönetimi) için bu oturumda kaynak bulunamadı/okunmadı; Demak’ın Kediri’yi aldığı yıl (c.1527), Pajang (1568) ve Mataram (1587) devirleri ve Kediri Residensi’nin kuruluşu (1830) Ricklefs, A History of Modern Indonesia ve Babad Tanah Jawi aktarımlarında yılca çelişkili; atlasta Pajang kimliği yok.',
  slices: [
    { f: '1281-01-01', d: 'singhasari', k: 'yil', devam: true, s: 'Coedès, G., The Indianized States of Southeast Asia 1968 «Singhasari»; Kertanagara’nın doğu Cava hâkimiyeti' + A },
    { f: '1292-01-01', d: 'kediri', k: 'yil', s: 'Jayakatwang’ın (Gelang-Gelang/Daha) Kertanagara’yı öldürüp Singhasari’yi yıkması ve Kediri’yi yeniden kurması (1292); Coedès 1968; Pararaton' + A + ' | KÜNYE ÖNERİSİ: atlas künyesi kediri t=1222-01-01; Jayakatwang Kediri’si 1292-1293 için künye t=1293-01-01’e GENİŞLETİLMELİ (aynı polity Panjalu/Kediri’nin yeniden kuruluşu)', b: 'Jayakatwang Singhasari’yi yıkıp Daha’da Kediri’yi yeniden kurdu' },
    { f: '1293-01-01', d: 'majapahit', k: 'yil', s: 'Raden Wijaya’nın Yuan seferiyle Daha’yı alıp Majapahit’i kurması (1293; Yuan shi juan 210 «Java»); Coedès 1968; Nagarakretagama (Daha = «Bhre Daha» Majapahit ata-toprağı)' + A + ' | atlas künyesi majapahit f=1293-01-01 (Majapahit’in ilanı Kasım 1293)', b: 'Raden Wijaya Daha’yı (Jayakatwang) alıp Majapahit’i kurdu' },
  ],
});
// ---------- kuyruk_gerekli kalanlar ----------
const KALAN = {
  'Baijnath (Kartikeyapura)': ['hint2', '1000-01-01 → 2000-12-31', 'Katyuri sonrası Kumaon (Katyuri kolları, Chand hanedanı, Gorkha 1790, İngiliz 1815) için atlas kimliği yok (nepal künyesi yalnız Nepal; katyuri t=1000); Chand/Kumaon kimliği ve kaynaklı devir günleri bu oturumda bulunamadı.'],
  'Mansura (Sind)': ['hint2', '1010-01-01 → 2000-12-31', 'Habbarî sonrası Mansûre: Sûmra yükselişi (c.1050), kentin terk/yıkım yılı (Mahmud 1026 akını ve Indus yatağı değişimi) kaynaklar arasında çelişkili; TDV Mansûre bitiş yılı vermiyor; kaynak okunmadı.'],
  'Ranthambore': ['hint3', '1301-07-11 → 2000-12-31', '1301 Delhi alışından sonra 1301-1569 arası Ranthambore el değiştirmeleri (Mewar, Malva, Gucerat, Sûrî, Ekber 1569) kaynaksız; Jaipur/Amber (racput kimliği) 1754 ve Hindistan zinciri bu oturumda sıralanamadı.'],
  'Kamatapur': ['hint3', '1498-01-01 → 2000-12-31', 'Bengal Sultanlığı’nın 1498 Kamata fethinden sonra Koch hâkimiyetine geçiş (c.1515-1550) için Koch Krallığı kimliği atlasta yok ve devir günleri kaynaksız.'],
  'Pattikera (Mainamati)': ['hint3', '1281-01-01 → 2000-12-31', 'Deva hanedanının sonu, Tripura (Manikya) ve Bengal Sultanlığı arasındaki paylaşım ve Tripura kimliği atlasta yok; kaynak okunmadı.'],
  'Prambanan (Mataram Kuno)': ['gdasya2', '1016-01-01 → 2000-12-31', '1016 sonrası Orta Cava (Wurawari yıkımı, Airlangga/Kahuripan, Kediri/Janggala, Majapahit, Demak, Mataram) için Prambanan çevresinin sahibi kaynaklı çıkarılamadı; kent 10. yy’da terk edildiği için «var mıydı» sorusu da açık.'],
  'Gaochang (Koço, Karahoca)': ['bozkir1', '0640-09-19 → 2000-12-31', 'Tang idaresi (Xizhou 640), Tibet işgali, Uygur/Koço krallığı (künye 0911-1209), Moğol, Çağatay/Moğolistan ve kentin 14.-15. yy’da terkine kadar sıra kaynaksız; kent bit kararı için kaynak okunmadı.'],
};
for (const ad of Object.keys(KALAN)) yer(ad, KALAN[ad][0], { kuyruk: KALAN[ad][1], kuyruk_neden: KALAN[ad][2], slices: [] });

// ---------- üretim ----------
const out = [], sinir = [];
for (const p of P) {
  const e = { ad: p.ad, kume: p.kume };
  e.s_ek = [];
  const sl = p.slices || [];
  sl.forEach((s, i) => {
    const t = i + 1 < sl.length ? sl[i + 1].f : (p.bit ? p.bit : (p.kuyruk ? p.kuyruk.split(' ')[0] : '2000-12-31'));
    const o = { f: s.f, t, d: s.d, kesinlik: s.k, kaynak: s.s };
    if (s.devam) o.devam = true;
    e.s_ek.push(o);
  });
  if (p.bit) { e.bit = p.bit; e.bit_kaynak = p.bit_kaynak; e.bit_not = p.bit_not; }
  if (p.kuyruk) { e.kuyruk_gerekli = p.kuyruk; e.kuyruk_neden = p.kuyruk_neden; }
  out.push(e);
  sl.forEach((s, i) => {
    if (s.devam) return;
    const old = i > 0 ? sl[i - 1].d : (p.onceki || null);
    const yeniBos = s.d === '__BOSLUK__';
    const eskiBos = old === '__BOSLUK__';
    const kazanan = yeniBos ? old : s.d;
    let taraflar = yeniBos ? [old] : (old && !eskiBos ? [s.d, old] : [s.d]);
    if (!kazanan) return;
    const ya = p.ad.replace(/ \(.*/, '');
    sinir.push({
      t: s.f, devlet: kazanan, taraflar,
      b: (s.b || (ya + ': devir')) + ' — ' + ya,
      tur: yeniBos ? 'toprak-kayip' : 'toprak-kazanc',
      onem: 2, dunya: 1, kapsam: 'dis',
      yer: ya, yer_id: p.ad,
      etiket: ['toprak-degisimi', 'konu-siyasi', 'dogu-kuyruk-1281-2000'],
      d: ya + ' yerleşiminin sahibi ' + (old ? (adlar[old] || old) : '?') + ' iken ' + (yeniBos ? 'sahipsiz kaldı (beyanlı boşluk)' : (adlar[s.d] || s.d) + ' oldu') + '. Gün/yıl hassasiyeti: ' + s.k + '.',
      kaynak: s.s,
      kesinlik: s.k,
      sinir_id: [],
    });
  });
}
fs.writeFileSync(path.join(DIR, 'zincir_kuyruk.js'),
  '// kuyrukyeni2: yeni yerleşimlerin 1281-sonrası kuyrukları. s_ek[0].f = kaydın mevcut son t (devam:true ise aynı sahip sürüyor).\nwindow.ZINCIR_DOGU_KUYRUKYENI2 = ' + JSON.stringify(out, null, 1) + ';\n');
fs.writeFileSync(path.join(DIR, 'kronoloji_sinir_dogu_kuyrukyeni2.js'),
  '// kuyrukyeni2: kuyruk zincirlerinin devir günleri için sınır maddeleri (Değişmez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKYENI2 = ' + JSON.stringify(sinir, null, 1) + ';\n');
const kunye = [{
  id: 'maldivler-cumhuriyeti', ad: 'Maldivler Cumhuriyeti', tur: 'cumhuriyet', bolge: 'guney-asya',
  f: '1968-11-11', t: '2000-12-31', baskent: 'Malé',
  ozet: 'Maldiv Sultanlığı’nın 11 Kasım 1968’de kaldırılmasıyla ilan edilen cumhuriyet (Malé merkezli); 1965 bağımsızlığını sürdürür.',
  kaynak: 'Maloney, C., People of the Maldive Islands, Bombay 1980; Romero-Frias, X., The Maldive Islanders, Barcelona 1999; atıf, bu oturumda açılmadı',
  kesinlik: { f: 'gun' }, boya_gerekli: true,
  ic_not: 'maldivler-sultanligi künyesi t=1968-11-11 ile birebir ardıl; t=2000-12-31 yalnız UFUK işaretidir (cumhuriyet sürüyor; künye uygulanırken t kaldırılmalı). 1953 kısa cumhuriyeti sultanlık künyesi içinde sayılmış.',
  kronoloji: [],
}];
fs.writeFileSync(path.join(DIR, 'kunye_yeni.js'), '// kuyrukyeni2: Malé zincirinin kuyruğu için gereken tek yeni künye.\nwindow.DOGU_KUNYE_KUYRUKYENI2 = ' + JSON.stringify(kunye, null, 1) + ';\n');
console.log('yerlesim kaydi', out.length, 'sinir maddesi', sinir.length);
