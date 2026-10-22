// gdasya3 üretici — çalıştır: node _uret.js  (kunye_yeni.js, kronoloji_*.js, yerlesimler_*.js, yama_*.js yazar)
const fs = require('fs'), path = require('path');
const { K, J, rapor } = require('./_lib.js');
const OUT = __dirname;

// ---------- kısaltmalar ----------
const BEYAN = (x) => 'BEYANLI YAKLAŞIKLIK: ' + x;
const SCOTT = (yer, qs) => K('scott', yer, qs);

// ---------- KÜNYELER ----------
const kunye = [];
function KUN(o) { o.boya_gerekli = true; kunye.push(o); }

KUN({
  id: 'thaton-mon', ad: 'Thaton (Ramannadesa / Mon)', tur: 'krallik', bolge: 'guneydogu-asya',
  f: '0500-01-01', t: '1057-01-01', baskent: 'Thaton (Sudhammavati)',
  ozet: 'Sittang ağzındaki Thaton (Sudhammavati) merkezli Mon ülkesi; Mon geleneği ırkın merkezini burada gösterir; 1057\'de Pagan kralı Anoratha şehri aldı.',
  kaynak: J(
    K('coedes', 'V-4', ['The tradition of the Mons places the center of their race at Sudhammavati (Thaton, at the mouth of the Sittang)']),
    K('hall', '7', ['Their principal centre in the latter country was Sudhammavati (Thaton) at the mouth of the River Sittang']),
    K('coedes', 'IX-6', ["in 1057, after a three months' siege, he took the city of Thaton"]),
    K('hall', '6', ["the capture of the place and Makuta’s deportation to Pagan are historical facts"])),
  kesinlik: { f: 'yuzyil', t: 'yil' },
  ic_not: 'f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı), kuruluş değil: Coedès Thaton\'da \'tek bir önemli arkeolojik kalıntı\' bulunmadığını yazar (V-4), Hall aynı uyarıyı yapar (7); Thaton için 500-1057 arasında TARİHLİ tek tanık bulunamadı (en erken dolaylı tarih: 825, bir kroniğe göre Thaton\'lu ikiz kardeşlerin Pegu\'yu kurması — Coedès VII-3). Mon geleneği tutarlıdır ama kaynak yıl vermez. t=1057: Coedès 1057 \'after a three months\' siege\'; Hall kuşatmanın nedenini tartışır ama zaptı ve Makuta\'nın Pagan\'a sürülmesini tarihî olgu sayar (gün hiçbir kaynakta yok → yıl). Sınır: Pegu (Hamsavati) ayrı bir Mon polity\'dir (ms1 künyesi hamsavati-pegu 0825-1057); Coedès 142 dipnotu Pegu\'nun Thaton ile birlikte düşmediğini belirtir.',
  kronoloji: [
    { t: '0825-01-01', tur: 'kurulus', b: 'Bir kronik Pegu\'yu (Hamsavati) Thaton\'lu ikiz kardeşlerin kurduğunu söyler', kaynak: K('coedes', 'VII-3', ['a chronicle gives 825 as the date for the foundation of Pegu (Hamsavati) by Samala and Vimala, twin brothers from Thaton']) },
    { t: '1057-01-01', tur: 'son', b: 'Anoratha Thaton\'u üç aylık kuşatmadan sonra aldı; Mon ülkesi Pagan\'a katıldı', kaynak: K('coedes', 'IX-6', ["in 1057, after a three months' siege, he took the city of Thaton", 'The political result of the conquest of Thaton was the submission of the whole delta']) }
  ]
});

KUN({
  id: 'mi-chen', ad: "Mi-ch'en (Pegu Körfezi krallığı)", tur: 'krallik', bolge: 'guneydogu-asya',
  f: '0805-01-01', t: '0835-01-01', baskent: 'bilinmiyor (Martaban Körfezi kıyısı, belki eski Pegu)',
  ozet: "Pyu'nun bağımlısı sayılan, Martaban Körfezi'ndeki küçük krallık: 805'te Çin'e elçi gönderdi, 835'te Nanzhao tarafından yıkıldı.",
  kaynak: J(
    K('coedes', 'VII-3', ["the kingdom of Mi-ch'en, which sent an embassy to China in 805", 'was a victim of Nanchao aggression in 835', "Mi-ch'en must have been situated on the Gulf of Martaban, perhaps in the region of old Pegu"]),
    K('hall', '6', ['Mi-chen, whose king secured recognition from China in 805, was in 835 destroyed by Nanchao'])),
  kesinlik: { f: 'yil', t: 'yil' },
  ic_not: 'f=0805: kuruluş değil, ilk TARİHLİ tanık (Çin\'e elçilik; Yeni Tang Tarihi\'ne dayanır, Coedès aktarımı). t=0835: Nanzhao saldırısı (Coedès: \'victim of Nanchao aggression\'; Hall: \'destroyed\' — fark: saldırı mı yıkım mı; yıkım alındı). Başkent yeri kaynakta kesin değil (Coedès: Martaban Körfezi, belki eski Pegu bölgesi) → atlasta yerleşim noktası YOK; haritada boyanmaz (bilinçli). Yeni Tang Tarihi ve Çince özgün metin açılmadı; yalnız Coedès/Hall aktarımı okundu.',
  kronoloji: [
    { t: '0805-01-01', tur: 'kurulus', b: "Mi-ch'en kralı Çin sarayına elçi gönderdi (ilk tarihli tanık)", kaynak: K('coedes', 'VII-3', ["the kingdom of Mi-ch'en, which sent an embassy to China in 805"]) },
    { t: '0835-01-01', tur: 'son', b: "Mi-ch'en Nanzhao saldırısıyla yıkıldı", kaynak: K('hall', '6', ['Mi-chen, whose king secured recognition from China in 805, was in 835 destroyed by Nanchao']) }
  ]
});

KUN({
  id: 'butuan', ad: 'Butuan Racalığı', tur: 'beylik', bolge: 'guneydogu-asya',
  f: '1001-03-17', t: '1281-01-01', baskent: 'Butuan',
  ozet: 'Kuzeydoğu Mindanao\'da, Champa\'yla sürekli bağlantılı küçük racalık; 1001-1011 arasında Song sarayına haraç elçilikleri gönderen ilk Filipin polity\'si.',
  kaynak: J(
    SCOTT('s. 3, Ek I', ['come from Butuan on 17 March 1001', 'It has had mutual relations with Champa, but not much communication with China']),
    SCOTT('Ek I (Sung Hui Yao Kao, c. 197)', ["In October 1003 its King Ch'i-ling sent Minister"])),
  kesinlik: { f: 'gun', t: 'yil' },
  ic_not: 'f=1001-03-17: Scott\'a göre Butuan\'ın Song sarayına ilk haraç elçiliği (Sung Shih ch.7-8, Sung Hui Yao Kao ch.197\'ye dayanır); bu ilk TARİHLİ yazılı tanıktır, kuruluş DEĞİLDİR. Gün Scott\'un Batı karşılığıdır (Çin takvimi → Batı çevirisini Scott yapmıştır; Jülyen/Gregoryen belirtmez; Scott\'un çevirisi tek kaynaktır, Song Shih özgün metni açılmadı). t=1281-01-01 EPOK SINIRIDIR (Kedah emsali): atlasta Butuan 1281\'den sonra filipin-racaliklari zincirindedir; Butuan\'ın son kaynaklı tanığı Scott\'a göre Ağustos 1420 Ming dilekçesidir. Girdideki f=1001-01-01 yalnız yıldı; Scott gün verdiği için 1001-03-17 alındı.',
  kronoloji: [
    { t: '1001-03-17', tur: 'kurulus', b: 'Butuan\'ın Song sarayına ilk haraç elçiliği (ilk tarihli tanık)', kaynak: SCOTT('s. 3', ['come from Butuan on 17 March 1001']) },
    { t: '1011-01-01', tur: 'antlasma', b: 'Racası Hsi-li-pa-ta-hsia-ch\'ih (Sri Bata Shaja) altın levhalı dilekçeyle elçi gönderdi; Butuan elçisine unvan verildi', kaynak: SCOTT('Ek I', ['In March 1011 that country', 'Li-kan-hsieh was granted the title of Cherished Transformed General']) }
  ]
});

KUN({
  id: 'cebu-racaligi', ad: 'Cebu Racalığı', tur: 'beylik', bolge: 'guneydogu-asya',
  f: '1521-01-01', t: '1565-01-01', baskent: 'Cebu (Singhapala)',
  ozet: 'Cebu adasındaki yerli racalık: Magellan seferinin 1521\'de Filipinler\'e ulaşmasından Legazpi\'nin 1565 Nisan\'ında Cebu\'ya çıkıp ilk İspanyol yerleşimini kurmasına kadar kaynaklı tanık dönemi.',
  kaynak: J(
    K('hall', 'İspanyollar Filipinler\'de (Bölüm 15 civarı; başlık \'(b) The Spaniards in the Philippines\')', ['discovered by Magellan in 1521', 'landed on Cebu and planted the first Spanish settlement there'])),
  kesinlik: { f: 'yil', t: 'yil' },
  ic_not: 'GİRDİDEKİ f=1250 / baskent=Singhapala DOĞRULANAMADI: Hall, Coedès, Majumdar ve Scott (1983) Cebu\'yu 1521 öncesine tarihleyen bir kayıt vermez; 13. yy\'a gidişat Cebuano sözlü geleneğine (Datu Sri Lumay) dayanır, bu oturumda akademik kaynağı açılamadı. f=1521: Magellan keşfi yılı (Hall; gün/Cebu\'ya varış günü Hall\'da yok); t=1565: Legazpi\'nin Cebu\'ya çıkışı (Hall: \'late in 1564 ... in the following April\' → 1565 Nisan; gün yok → yıl). Atlasın mevcut Cebu zinciri (filipin-racaliklari 1281-1565-04-27) bu künyeyle çakışmaz: künye yalnız kaynaklı tanık dönemini kapsar.',
  kronoloji: [
    { t: '1521-01-01', tur: 'kurulus', b: 'Magellan seferi Filipin takımadasına ulaştı (Cebu racalığının ilk Avrupalı tanığı)', kaynak: K('hall', 'İspanyollar Filipinler\'de', ['discovered by Magellan in 1521']) },
    { t: '1565-01-01', tur: 'son', b: 'Legazpi Cebu\'ya çıkıp ilk İspanyol yerleşimini kurdu', kaynak: K('hall', 'İspanyollar Filipinler\'de', ['landed on Cebu and planted the first Spanish settlement there']) }
  ]
});

KUN({
  id: 'lamuri', ad: 'Lamuri (Ilamuridesam / Lan-wu-li)', tur: 'krallik', bolge: 'guneydogu-asya',
  f: '1025-01-01', t: '1281-01-01', baskent: 'Lamuri (Aceh Büyük kıyısı; yeri kesin değil)',
  ozet: 'Sumatra\'nın kuzey ucundaki Lamuri (Arap coğrafyacılarının Lamun/Lanmri\'si, Marco Polo\'nun Lambri\'si): 1025 Chola akınında anılan, 1225\'te San-fo-ch\'i bağımlısı sayılan liman devleti.',
  kaynak: J(
    K('coedes', 'IX-3', ['llamuridesam (Lamun of the Arabs and Lambri of Marco Polo,81 at the northern tip of Sumatra)', 'the great raid of 1025, details of which are given in an inscription of Rajendrachoja at Tanjore dated 1030-31']),
    K('coedes', 'XI-7', ['Lan-wu-li (Lamuri, northern extremity of Sumatra)']),
    K('hall', '4', ['Samudra, Lamuri and Perlac, were becoming independent centres of trade'])),
  kesinlik: { f: 'yil', t: 'yil' },
  ic_not: 'f=1025: Coedès IX-3, Rajendrachola\'nın 1025 akınını anlatan Tanjore yazıtının (1030-31 tarihli) Ilamuridesam\'ı anmasını verir; ilk TARİHLİ tanık, kuruluş değil (Coedès Lamun\'u \'Arapların\' diye anar ama Arap kayıtlarının yılını bu oturumda okumadım). t=1281-01-01 EPOK SINIRI: Lamuri 1281 sonrasında da sürer (Marco Polo 1292 Lambri; Hall: 1330\'larda Samudra/Lamuri/Perlak bağımsız ticaret merkezleri; Coedès XIII-7 Ma Huan 1413 Nan-po-li). Çelişki/beyan: 1225\'te Chao Ju-kua Lan-wu-li\'yi San-fo-ch\'i\'nin haraçgüzarları arasında sayar (Coedès XI-7) ama Majumdar (Suv. s. 195) \'Lan-wu-li\'nin siyasi statüsü hakkında bir şey söylenmez\' der → haraç ≠ mülkiyet. Merkez Lamreh köyü adayı: OSM\'de iki ayrı Lamreh köyü var (5.594,95.527 ve 5.571,95.397; 14 km fark), Wikidata\'da Lamuri için P625 yok → çift tanıklı koordinat sağlanamadı, YERLEŞİM YAZILMADI; bu künye haritada nokta almaz.',
  kronoloji: [
    { t: '1025-01-01', tur: 'isgal', b: 'Rajendrachola akınında Ilamuridesam (Lamuri) anıldı', kaynak: K('coedes', 'IX-3', ['llamuridesam (Lamun of the Arabs and Lambri of Marco Polo,81 at the northern tip of Sumatra)']) },
    { t: '1225-01-01', tur: 'siyaset', b: 'Chao Ju-kua Lan-wu-li\'yi San-fo-ch\'i bağımlıları arasında sayar', kaynak: K('coedes', 'XI-7', ['Lan-wu-li (Lamuri, northern extremity of Sumatra)']) }
  ]
});

// ---------- ANLATI KRONOLOJİSİ ----------
const kron = [];
function A(o) {
  const m = Object.assign({ onem: 2, dunya: 1, kapsam: 'dis', etiket: ['konu-siyasi', 'dogu-500-1281'] }, o);
  kron.push(m);
}
// ---------- SINIR (devir) MADDELERİ ----------
const sinir = [];
function S(o) {
  const m = Object.assign({ onem: 2, dunya: 1, kapsam: 'dis', etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'], sinir_id: [] }, o);
  m.yer_id = o.yer; sinir.push(m);
}

// ===== THATON =====
A({ t: '0825-01-01', tur: 'kurulus', b: 'Thaton\'lu ikizler Samala ve Vimala Pegu\'yu (Hamsavati) kurdu (bir kronik)', taraflar: ['thaton-mon', 'hamsavati-pegu'], yer: 'Pegu (Bago)',
  d: 'Coedès: Ramannadesa\'nın (Mon ülkesi) ağırlık merkezi bu dönemde batıya kaydı; bir kronik Pegu\'nun (Hamsavati) Thaton\'lu ikiz kardeşler Samala ve Vimala tarafından 825\'te kurulduğunu söyler. Coedès bu tarihi öteki kroniklerdeki erken/geç tarihlere tercih eder; Pegu ve Pagan kroniklerinin kral listeleri doğrulanamaz.',
  kaynak: K('coedes', 'VII-3', ['a chronicle gives 825 as the date for the foundation of Pegu (Hamsavati) by Samala and Vimala, twin brothers from Thaton', 'The chronicles of Pegu, like those of Pagan, give ... which are impossible to verify']),
  gun: '825 (yıl; kronik tarihi)', kesinlik: 'yil', ic_not: 'Kronik tarihi; Coedès \'preferable\' der (başka kronikler daha erken/geç tarih verir). Kuruluş yılı kesin değil.' });
A({ t: '1056-01-01', tur: 'siyaset', b: 'Thaton\'lu Brahman oğlu keşiş Shin Arahan Pagan\'a gelip Anoratha\'yı Theravada\'ya kazandırdı', taraflar: ['pagan', 'thaton-mon'], yer: 'Pagan',
  d: 'Coedès: 1056\'da Thaton\'lu bir Brahman\'ın oğlu olan, büyük olasılıkla Kanchi okulunun öğrencisi keşiş Shin Arahan Pagan\'a geldi ve kralı öğretisine kazandırdı. Kral Pali kanonunun nüshalarını almak için Thaton\'a bakan göndermiş, Kral Makuta reddetmişti. Hall, kuşatmanın nedeninin bu \'kutsal kitap reddi\' olamayacağını (Thaton\'da Tripitaka nüshası yoktu) tartışır.',
  kaynak: K('coedes', 'IX-6', ['In 1056, the monk Shin Arahan ... son of a Brahman of Thaton and undoubtedly a disciple of the Kanchi school, came to Pagan and won the king over to his doctrine']),
  gun: '1056 (yıl)', kesinlik: 'yil', ic_not: 'Hall (6): Shin Arahan\'ın asıl etkisinin Kyanzittha döneminde olduğu savı; Coedès geleneksel anlatıyı aktarır. Çelişki beyanı: sefer nedeni.' });
A({ t: '1057-01-01', tur: 'toprak-kazanc', b: 'Anoratha Thaton\'u kuşatıp aldı; Kral Makuta Pagan\'a sürüldü', taraflar: ['pagan', 'thaton-mon'], yer: 'Thaton',
  d: 'Coedès: Anoratha 1057\'de üç aylık kuşatmadan sonra Thaton\'u aldı; Kral Makuta, bakanları, keşişleri ve çok sayıda zanaatkârla Pagan\'a götürüldü. Fethin siyasi sonucu bütün deltanın ve Hint prensliklerinin teslimi, kültürel sonucu Pagan\'ın Theravada\'ya geçişiydi. Hall: zapt ve Makuta\'nın sürülmesi tarihî olgudur; Anawrahta ve oğlu Sawlu Thaton\'un çok güneyine de ilerledi (Mergui yazıtları).',
  kaynak: K('coedes', 'IX-6', ["in 1057, after a three months' siege, he took the city of Thaton", 'The political result of the conquest of Thaton was the submission of the whole delta']) + ' | ' + K('hall', '6', ['the capture of the place and Makuta’s deportation to Pagan are historical facts']),
  gun: '1057 (yıl; kuşatma 3 ay sürdü, gün yok)', kesinlik: 'yil', ic_not: 'Coedès 142. dipnot: Pegu kroniklerde anılmaz, Thaton\'dan kaçanlar Pegu\'ya sığındı → Pegu\'nun aynı anda düştüğü kesin değil.' });
S({ yer: 'Thaton', t: '1057-01-01', devlet: 'pagan', taraflar: ['pagan', 'thaton-mon'], b: 'Thaton: Anoratha şehri aldı (1057)', tur: 'toprak-kazanc',
  d: 'Coedès: Anoratha 1057\'de üç aylık kuşatmadan sonra Thaton\'u aldı; Kral Makuta Pagan\'a götürüldü. Thaton thaton-mon\'dan pagan\'a geçer.',
  kaynak: K('coedes', 'IX-6', ["in 1057, after a three months' siege, he took the city of Thaton"]), gun: '1057 (yıl)', kesinlik: 'yil', ic_not: 'Gün kaynakta yok.' });
S({ yer: 'Moulmein (Mawlamyine)', t: '1057-01-01', devlet: 'pagan', taraflar: ['pagan', 'thaton-mon'], b: 'Moulmein: Thaton\'un düşmesiyle Mon kıyısı Pagan\'a katıldı (1057; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Coedès: Thaton\'un fethinin siyasi sonucu bütün deltanın Pagan\'a teslimiydi; Hall: Anawrahta ve Sawlu Thaton\'un çok güneyine de ilerledi. Moulmein tek başına kaynakta anılmaz; ABİ MERKEZ Thaton zincirini izler.',
  kaynak: K('coedes', 'IX-6', ['The political result of the conquest of Thaton was the submission of the whole delta']) + ' | ' + K('hall', '6', ['Anawrahta and his son, Sawlu, went on to conquer territories far to the south of Thaton']),
  gun: '1057 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Moulmein\'in kendi fethi kaynakta yok; abi merkez Thaton\'un akıbetine bağlandı.') });

// ===== MI-CHEN =====
A({ t: '0805-01-01', tur: 'siyaset', b: "Mi-ch'en kralı Çin'den tanınma aldı (elçilik)", taraflar: ['mi-chen'], yer: 'Pegu (Bago)',
  d: "Coedès: Yeni Tang Tarihi Pyu'nun bağlıları arasında Mi-ch'en krallığını anar; krallık 805'te Çin'e elçi gönderdi. Yeri bir güzergâh tarifine göre Martaban Körfezi'nde, belki eski Pegu bölgesindedir. Hall: kral 805'te Çin'in tanımasını sağladı.",
  kaynak: K('coedes', 'VII-3', ["the kingdom of Mi-ch'en, which sent an embassy to China in 805", "Mi-ch'en must have been situated on the Gulf of Martaban, perhaps in the region of old Pegu"]) + ' | ' + K('hall', '6', ['Mi-chen, whose king secured recognition from China in 805']),
  gun: '805 (yıl)', kesinlik: 'yil', ic_not: 'Yer yalnız bölge düzeyinde (Pegu adayı); \'yer\' alanı yaklaşık.' });
A({ t: '0835-01-01', tur: 'son', b: "Mi-ch'en Nanzhao tarafından yıkıldı", taraflar: ['nanzhao', 'mi-chen'], yer: 'Pegu (Bago)',
  d: "Coedès: Mi-ch'en 835'te Nanzhao saldırısının kurbanı oldu; Hall: 835'te Nanzhao tarafından yıkıldı. Nanzhao'nun Pyu ve komşu Mon devletleri üzerindeki baskısı 760 dolaylarında başlamıştı.",
  kaynak: K('coedes', 'VII-3', ['was a victim of Nanchao aggression in 835']) + ' | ' + K('hall', '6', ['was in 835 destroyed by Nanchao']),
  gun: '835 (yıl)', kesinlik: 'yil', ic_not: 'Çelişki: Coedès \'saldırı\', Hall \'yıkım\'. Yeni Tang Tarihi özgün metni açılmadı.' });

// ===== BUTUAN =====
const B03 = ['In October 1003 its King Ch\'i-ling sent Minister'];
A({ t: '1001-03-17', tur: 'antlasma', b: 'Butuan\'ın Song sarayına ilk haraç elçiliği', taraflar: ['butuan', 'song'], yer: 'Butuan',
  d: 'Scott: İlk Filipin haraç elçiliği 17 Mart 1001\'de Butuan\'dan geldi. Sung Shih Butuan\'ı Champa bölümünde, Champa\'nın doğusunda denizde küçük bir ülke olarak anar; Champa ile düzenli, Çin\'le ender bağlantısı vardır. Sonraki beş yılda yeniden elçi gönderdi.',
  kaynak: SCOTT('s. 3', ['come from Butuan on 17 March 1001', 'It appeared on tribute missions again during the next five years']),
  gun: '17 Mart 1001 (Scott\'un Batı karşılığı)', kesinlik: 'gun', ic_not: 'Gün tek kaynakta (Scott); Song Shih özgün metni açılmadı.', ic_not_takvim: 'Çin takvimi tarihi Batı karşılığıyla Scott verir; Jülyen/Gregoryen belirtilmemiş, çeviri tarafımızdan yapılmadı.' });
A({ t: '1003-10-03', tur: 'antlasma', b: 'Kral Ch\'i-ling\'in elçileri Song sarayına kırmızı papağan ve yerel ürünler sundu', taraflar: ['butuan', 'song'], yer: 'Butuan',
  d: 'Scott: Dört yıl boyunca her yıl Kral Kiling (Ch\'i-ling) elçi gönderdi; 3 Ekim 1003\'te Bakan Li-ihan ve Yardımcı Bakan Gaminan kırmızı papağan ve kaplumbağa kabuğu gibi yerel ürünler sundu. Sung Hui Yao Kao kaydı aynı elçiliği Ekim 1003\'e koyar.',
  kaynak: SCOTT('s. 4 ve Ek I', ['on 3 October 1003, for example', 'In October 1003 its King Ch\'i-ling sent Minister']),
  gun: '3 Ekim 1003 (Scott\'un Batı karşılığı)', kesinlik: 'gun', ic_not: 'Sung Hui Yao Kao yalnız ay verir; gün Scott\'ta.', ic_not_takvim: 'Batı karşılığı Scott\'a aittir; çeviri tarafımızdan yapılmadı.' });
A({ t: '1004-01-01', tur: 'siyaset', b: 'Song sarayı Butuan elçilerinin Çin malı, altın ve gümüşü doğrudan pazardan almasını yasakladı', taraflar: ['song', 'butuan'], yer: 'Butuan',
  d: 'Scott: 1004\'te saray, Butuan elçilerinin Çin mallarını, altını ve gümüşü, özellikle tören bayrakları ve alay sancaklarını doğrudan pazar alımıyla çıkarmasını yasaklayan bir ferman çıkardı. Ocak/Şubat 1004\'te saray, yeni yıl şenliğinde Butuan elçilerini geceleyin saraya çağırtmıştı.',
  kaynak: SCOTT('s. 4 ve Ek I', ['In February 1004 when the New Year Festival was proclaimed, the Emperor sent messengers in the middle of the night to fetch the Butuan', 'new restrictions be imposed to prohibit their dealing directly in the marketplace']),
  gun: '1004 (Ekim/Kasım ayında yasak; ay belirsiz)', kesinlik: 'yil', ic_not: 'Sung Hui Yao Kao: \'Ekim ya da Kasım\' (yasak önerisi); gün yok → yıl hassasiyeti.', ic_not_takvim: 'Aylar Scott\'un Batı karşılığıdır.' });
A({ t: '1007-01-01', tur: 'antlasma', b: 'Butuan Kralı Ch\'i-ling Champa ile eşit statü istedi; \'Butuan Champa\'nın altındadır\' denip reddedildi', taraflar: ['butuan', 'song', 'campa'], yer: 'Butuan',
  d: 'Scott: 1007\'de Kiling elçi I-hsü-han ile dilekçe gönderip Champa elçisine verilen iki koşumlu at ve iki büyük ruh sancağının kendisine de verilmesini istedi. Champa dördüncü yüzyıldan beri Çin\'e elçi gönderen eski bir haraçgüzar olduğu için istek, \'Butuan Champa\'nın altındadır\' gerekçesiyle reddedildi; beş küçük renkli bayrak verildi.',
  kaynak: SCOTT('s. 4 ve Ek I', ['In July or August of 1007 King Ch\'i-ling sent Minister', 'Butuan is beneath Champa']),
  gun: '1007 (Temmuz/Ağustos; gün yok)', kesinlik: 'yil', ic_not: 'Ay Sung Hui Yao Kao\'dan (Temmuz/Ağustos); gün yok.', ic_not_takvim: 'Aylar Scott\'un Batı karşılığıdır.' });
A({ t: '1011-01-01', tur: 'hukumdar', b: 'Yeni racası Sri Bata Shaja altın levhalı dilekçe ve karanfil, Borneo kâfuru ile elçi gönderdi; elçisine askerî unvan verildi', taraflar: ['butuan', 'song'], yer: 'Butuan',
  d: 'Scott: 1011\'de Sri Bata Shaja adlı yeni hükümdar Likan-hsieh\'i altın levhaya kazınmış bir dilekçe, \'beyaz ejder\' kâfuru ve Maluku karanfiliyle gönderdi; elçi Fen-yin toprak tanrısı kurbanı sırasında bir Güney Denizi kölesi sunarak imparatoru şaşırttı. Butuan elçisi \'Cherished Transformed General\' unvanını aldı, bayrak, sancak ve zırh talebi kabul edildi. Hükümdar adı Çince \'Hsi-li-pa-ta-hsia-ch\'ih\'tir.',
  kaynak: SCOTT('s. 4 ve Ek I', ['In March 1011 that country', 'Li-kan-hsieh was granted the title of Cherished Transformed General']),
  gun: '1011 (Mart; unvan Temmuz; gün yok)', kesinlik: 'yil', ic_not: 'Adı Scott \'Indianized name or title\' sayar; hükümdar ya da unvan belirsiz.', ic_not_takvim: 'Aylar Scott\'un Batı karşılığıdır.' });

// ===== CEBU =====
A({ t: '1521-01-01', tur: 'siyaset', b: 'Magellan seferi Filipinler\'e ulaştı', taraflar: ['cebu-racaligi'], yer: 'Cebu',
  d: 'Hall: takımadayı 1521\'de Magellan keşfetti ve San Lazaro adını verdi. Cebu\'ya çıkış günü Hall\'da yoktur.',
  kaynak: K('hall', 'İspanyollar Filipinler\'de', ['discovered by Magellan in 1521']), gun: '1521 (yıl)', kesinlik: 'yil', ic_not: 'Cebu\'ya varış günü bu oturumda okunan kaynaklarda yok.' });
A({ t: '1565-01-01', tur: 'isgal', b: 'Legazpi Cebu\'ya çıkıp ilk İspanyol yerleşimini kurdu', taraflar: ['ispanya', 'cebu-racaligi'], yer: 'Cebu',
  d: 'Hall: Miguel Lopez de Legaspi 1564 sonunda Meksika\'dan yola çıktı ve izleyen Nisan\'da Cebu\'ya çıkıp ilk İspanyol yerleşimini kurdu; 1572\'deki ölümünden önce Cebu, Leyte, Panay, Mindoro ve Luzon ovasında İspanyol denetimini yaydı.',
  kaynak: K('hall', 'İspanyollar Filipinler\'de', ['late in 1564, Miguel Lopez de Legaspi', 'landed on Cebu and planted the first Spanish settlement there']), gun: '1565 (Nisan; gün yok)', kesinlik: 'yil', ic_not: 'Gün yok.' });

// ===== FİLİPİN RACALIKLARI (mevcut künye) =====
A({ t: '0972-01-01', tur: 'siyaset', b: 'Song, Kwangchow\'da deniz ticareti müfettişliği kurdu; Ma-i (Mindoro) ticareti anıldı', taraflar: ['filipin-racaliklari', 'song'], yer: 'Mindoro (Ma-i)',
  d: 'Scott: 972\'de (K\'ai Pao 4. yıl) Kwangchow\'da, sonra Hangchow ve Mingchow\'da Arap, Aceh, Cava, Borneo, Ma-i ve Srivijaya tüccarları için bir deniz ticareti müfettişliği kuruldu; tüccarlar altın, gümüş, kurşun, kalay, ipek ve porselen götürüyordu. Ma-i Scott\'a göre Mindoro\'dur.',
  kaynak: SCOTT('s. 1-2', ['In the fourth year of the K\'ai Pao period [972], a superintendent of maritime trade was set up in Kwangchow']),
  gun: '972 (yıl; K\'ai Pao 4)', kesinlik: 'yil', ic_not: 'Ma-i\'nin Mindoro olması Scott\'un yorumudur (Sung Shih ch.139; dipnot 4). Yer Mindoro için atlasta yerleşim noktası yok; toprak maddesi değil.', ic_not_takvim: 'Çin dönem yılı → 972 Scott\'un çevirisidir.' });
A({ t: '0982-01-01', tur: 'siyaset', b: 'Ma-i tüccarları Kanton kıyısına doğrudan satış için geldi', taraflar: ['filipin-racaliklari', 'song'], yer: 'Mindoro (Ma-i)',
  d: 'Scott: 982\'de Ma-i tüccarları haraç elçiliği olarak değil, satılık değerli mallarla Kanton kıyısında göründü; muhtemelen doğrudan denizden gelmişlerdi. Borneo (Brunei) ise 30 gün mesafede olarak Ma-i ve Champa\'dan ayrı anılır.',
  kaynak: SCOTT('s. 2', ['In 982, however, Ma-i traders appeared on the Canton coast']),
  gun: '982 (yıl)', kesinlik: 'yil', ic_not: 'Scott: Ma-i = Mindoro (yorum).' });
A({ t: '1171-01-01', tur: 'savas', b: 'Visayalı olduğu düşünülen P\'i-she-ya akıncıları Fukien kıyısını vurdu (1171-72)', taraflar: ['filipin-racaliklari', 'song'], yer: 'Quanzhou körfezi',
  d: 'Scott: 1171 ve 1172 muson mevsiminde P\'i-she-ya akıncıları Ch\'üan-chou körfezinin hemen güneyinde Fukien kıyısını vurdu; vali Wang Ta-yu 200 aileyi bölgeye yerleştirip kıyı müfrezesi kurdu, 400\'den fazla esir alındı. Chao Ju-kua onları Taiwanlı sanırdı; Scott Visayalı Filipinli olma olasılığını daha yüksek bulur.',
  kaynak: SCOTT('s. 5', ['raiders struck the Fukien coast just south of']),
  gun: '1171 (1171-72 muson akınları)', kesinlik: 'yil', ic_not: 'Akıncıların kimliği Scott\'un çıkarımıdır (\'more likely Filipino Visayans\'); Vali Wang Ta-yu ve Chao Ju-kua Pescadores/Taiwan der. Toprak değişimi yok.' });

// ===== JAVA =====
const AIR = (qs) => K('coedes', 'IX-4', qs);
A({ t: '1016-01-01', tur: 'son', b: 'Pralaya: Wurawari prensi Doğu Cava krallığını yıktı; Airlangga dağlara sığındı', taraflar: ['medang', 'kahuripan'], yer: 'Watugaluh (Doğu Cava)',
  d: 'Coedès: Srivijaya\'nın 992 Cava istilasının öcünü 1016\'da aldığı en olası varsayımdır; asıl saldırgan Wurawari prensiydi. \'Çöküş\' (pralaya) olarak anılan olaydan sonra on altı yaşındaki Airlangga Vanagiri dağında keşişler arasına sığındı ve dört yıl kaldı.',
  kaynak: AIR(['it took its revenge in 1016 for the Javanese invasion of 992', 'as it was called by the Javanese inscription that tells about the events of 1016', 'the young Airlanga, then sixteen years old, took refuge among hermits']),
  gun: '1016 (yıl)', kesinlik: 'yil', ic_not: 'Srivijaya\'nın rolü kesin değil (Coedès: yalnız kışkırtmış/desteklemiş olabilir). Medang künyesi t=1016 ile uyumlu.' });
A({ t: '1019-01-01', tur: 'toprak-kazanc', b: 'Airlangga resmen taç giydi; yetkisi Surabaya-Pasuruan arası kuzey kıyıyla sınırlıydı', taraflar: ['kahuripan'], yer: 'Surabaya',
  d: 'Coedès: 1019\'da Airlangga resmen taç giydi; yetkisi o zaman adanın kuzey kıyısında Surabaya ile Pasuruan arasındaki küçük bir toprağı aşmıyordu. Krallığını yeniden fethetmek için on kadar yıl beklemesi gerekti.',
  kaynak: AIR(['in 1019 he was officially crowned with the title Sri Maharaja Rakai Halu', 'His authority at that time did not extend beyond a small territory situated on the northern coast of the island between Surabaya and Pasuruhan']),
  gun: '1019 (yıl)', kesinlik: 'yil', ic_not: 'Gün yok.' });
A({ t: '1028-01-01', tur: 'savas', b: 'Airlangga krallığını geri almak için Cava seferlerine başladı (1028-29)', taraflar: ['kahuripan'], yer: 'Doğu Cava',
  d: 'Coedès: Airlangga, birçok rakip arasında bölünmüş krallığını geri almak amacıyla 1028-29\'da Cava seferlerine başladı; önce Bhishmaprabhava\'ya, 1030\'da Wengker (Madiun ovası) prensi Vijaya\'ya, 1031\'de Adhamapanuda\'ya saldırdı ve onun konutunu yaktı.',
  kaynak: AIR(['Airlanga began his campaigns in Java in 1028-29 with the aim of recovering his kingdom, divided among many competitors', 'In 1031 he defeated Adhamapanuda and set fire to his residence']),
  gun: '1028-29 (yıl)', kesinlik: 'yil', ic_not: 'Coedès \'Airlanga\' yazımını kullanır.' });
A({ t: '1035-01-01', tur: 'savas', b: 'Wengker prensi Vijaya yenilip kaçtı, kendi askerlerince yakalanıp öldü', taraflar: ['kahuripan'], yer: 'Wengker (Madiun)',
  d: 'Coedès: Airlangga 1030\'da Wengker prensi Vijaya\'yı yendi (geçici yenilgi); Vijaya karısını, çocuklarını ve hazinesini bırakıp kaçtı, kendi askerlerince yakalanıp 1035\'te öldü.',
  kaynak: AIR(['he was seized by his own troops and died in 1035']), gun: '1035 (yıl)', kesinlik: 'yil', ic_not: 'Madde yıl düzeyindedir.' });
A({ t: '1042-01-01', tur: 'bolunme', b: 'Airlangga krallığını Janggala ve Panjalu (Kadiri) olarak ikiye böldü', taraflar: ['janggala', 'kediri', 'kahuripan'], yer: 'Kahuripan',
  d: 'Coedès: Airlangga ölümünden önce krallığını ikiye böldü; doğuda Janggala (Malang bölgesi ve Brantas deltası; başkent Kahuripan), batıda Panjalu/Kadiri (Kediri ve Madiun; başkent Daha). Janggala öncelikli ve kuramsal halef olsa da kısa sürede Panjalu\'ya emildi. Hall: Airlangga ölümünden yaklaşık dört yıl önce keşiş olmaya çekildi ve bölme yaptı. Majumdar: 1042 Pamotan yazıtı ve aynı yılın Magha ayındaki ferman, Airlangga\'nın bu sıralarda dünyadan çekildiğini düşündürür.',
  kaynak: AIR(['Before his death, Airlanga divided his kingdom in two', 'In fact, although it had precedence and was the theoretical successor of the kingdom of Airlanga, Janggala was soon absorbed by Panjalu']) + ' | ' + K('hall', '4', ['Some four years before his death in 1049 Airlangga retired to a cloister to become a Rishi']) + ' | ' + K('suv', '\'The Kingdom of Kadiri\' bölümü, s. 276-277', ['Airlangga must have left the world some time between the month of MargaSirSa, 1042 A. D., the date of the Pamotan inscription, and the month of Magha of the same year']),
  gun: '1042 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: 'ÇELİŞKİ: bölme tarihi Coedès\'te yok (\'ölümünden önce\', ölüm 1049, Belahan kronogramı saka 971); Hall ölümden \'yaklaşık dört yıl önce\' (≈1045) der; Majumdar 1042\'yi dolaylı çıkarır. 1042 alındı (atlas künyeleri de 1042), kesin değil.' });
A({ t: '1049-01-01', tur: 'hukumdar', b: 'Airlangga öldü; Belahan hamamına gömüldü', taraflar: ['kahuripan', 'kediri'], yer: 'Kahuripan',
  d: 'Coedès: Airlangga 1049\'da öldü ve Penanggungan\'ın doğu yamacındaki \'Belahan Hamamı\'na gömüldü; orada saka 971 (= 1049) kronogramlı bir taş bulunur.',
  kaynak: AIR(['At his death in 1049', 'a stone bearing a chronogram which gives in a sort of rebus the date saka 971, i.e., 1049']), gun: '1049 (yıl)', kesinlik: 'yil', ic_not: 'Gün yok.' });
A({ t: '1060-01-01', tur: 'siyaset', b: 'Janggala kralına ait Surabaya taş yazıtı (saka 982?)', taraflar: ['janggala'], yer: 'Surabaya',
  d: 'Majumdar: Janggala krallığının belgeleri çok azdır; Surabaya taş yazıtı Airlangga\'nın rake Halu unvanı, Garudamukha mührü ve Dharmavamsa soyadını kullanan bir krala aittir; yüzler hanesi hasarlı tarih saka 782 ya da 982 olabilir, üslup nedeniyle 982 (= 1060) seçilir.',
  kaynak: K('suv', '\'The Kingdom of Kadiri\' bölümü, s. 279', ['We may thus reasonably construe the date as 982 (=1060 A.D.)']), gun: '1060 (yıl; okuma kesin değil)', kesinlik: 'yil', ic_not: 'Tarih hasarlı; Majumdar \'makul biçimde\' 982 okur. 1053 bakır levha aynı yazarca \'çok bozuk kopya, özgünlüğü şüpheli\' sayılır → yazılmadı.' });
A({ t: '1109-01-01', tur: 'antlasma', b: 'Cava (büyük olasılıkla Kadiri) Çin\'e elçilik gönderdi', taraflar: ['kediri'], yer: 'Daha (Kediri)',
  d: 'Majumdar: 1109 Cava elçiliği, 1129 ve 1132\'de Çin imparatorunun Cava kralına gösterdiği itibar ve 12. yy ortası Annam kayıtlarındaki Cava tüccar gemileri büyük olasılıkla Kadiri\'ye aittir; Janggala olması da imkânsız değildir. 12. yy\'ın bütün belgeleri bugünkü Kediri bölgesindendir.',
  kaynak: K('suv', '\'The Kingdom of Kadiri\' bölümü, s. 280', ['The Javanese embassy to China in 1109 A.D.', 'all these probably refer to Kadiri']), gun: '1109 (yıl)', kesinlik: 'yil', ic_not: 'Majumdar \'probably\' der; Kadiri atfı kesin değil.' });
A({ t: '1222-01-01', tur: 'toprak-kayip', b: 'Kadiri Tumapel\'e düştü: Ken Angrok Kritajaya\'yı yendi', taraflar: ['singhasari', 'kediri'], yer: 'Daha (Kediri)',
  d: 'Coedès: 1221\'de Angrok (Rajasa) Kadiri üzerine yürüyüp Canter\'de kesin savaşı verdi; Kritajaya kaçtı ve iz bırakmadan yok oldu; Kadiri Tumapel krallığının bütünleşik parçası oldu. Chu-fan-chih (1225) tarihli bilgilerin Kadiri\'nin 1222\'deki düşüşüne dek hızlı olayları yansıttığı yazılır.',
  kaynak: K('coedes', 'XI-8', ['In 1221 he marched on Kadiri and waged a decisive battle at Canter', 'Kadiri consequently became an integral part of the kingdom of Tumapel', 'culminating in the final fall of Kadiri in 1222']),
  gun: '1221-22 (yıl)', kesinlik: 'yil', ic_not: 'Coedès savaşı 1221, düşüşü 1222 verir (bölüm başlığı da 1222). 1222-01-01 alındı (atlas künye f/t = 1222).' });
A({ t: '1227-01-01', tur: 'hukumdar', b: 'Rajasa (Ken Angrok) öldürüldü; Anushapati tahta çıktı', taraflar: ['singhasari'], yer: 'Singhasari (Tumapel)',
  d: 'Coedès: Rajasa altı yıllık barışçıl saltanattan sonra 1227\'de Anushapati\'nın azmettirmesiyle öldürüldü; Anushapati (Anushanatha) 1248\'e dek hüküm sürdü.',
  kaynak: K('coedes', 'XI-8', ['Rajasa was assassinated in 1227 at the instigation of Anushapati']), gun: '1227 (yıl)', kesinlik: 'yil', ic_not: 'Pararaton/Nagarakritagama\'ya dayanan Cava kronik geleneği.' });
A({ t: '1248-01-01', tur: 'hukumdar', b: 'Anushapati horoz dövüşünde öldürüldü; Tohjaya birkaç ay sonra devrildi; Vishnuvardhana ve Narasimhamurti birlikte tahta çıktı', taraflar: ['singhasari'], yer: 'Singhasari (Tumapel)',
  d: 'Coedès: Anushapati 1248\'de horoz dövüşü sırasında Tohjaya tarafından öldürüldü; Tohjaya aynı yıl yalnızca birkaç ay hüküm sürdü ve bir saray ihtilaliyle devrildi. İki yeğen birlikte tahta çıktı: Ranga Wuni (Vishnuvardhana, 1248-68) ve Mahisha Champaka (Narasimhamurti).',
  kaynak: K('coedes', 'XI-8', ['Tohjaya reigned only a few months in 1248 and met his death in a palace revolt']), gun: '1248 (yıl)', kesinlik: 'yil', ic_not: 'Gün yok.' });
A({ t: '1254-01-01', tur: 'hukumdar', b: 'Fiilî iktidar Kritanagara\'ya geçti; başkent Kutaraja\'nın adı Singhasari oldu', taraflar: ['singhasari'], yer: 'Singhasari (Tumapel)',
  d: 'Coedès: Vishnuvardhana 1254\'e gelindiğinde fiilî iktidarı oğlu Kritanagara\'ya bırakmıştı; başkent Kutaraja bu sırada Singhasari adını aldı. Vishnuvardhana 1268\'de öldü.',
  kaynak: K('coedes', 'XI-8', ['By 1254, Vishpuvardhana had turned over effective power to his son Kritanagara', 'it was at this time that the capital Kutaraja took the name of Singhasari']), gun: '1254 (yıl)', kesinlik: 'yil', ic_not: 'Coedès \'by 1254\' der: en geç 1254.' });
S({ yer: 'Surabaya', t: '1016-01-01', devlet: 'medang', taraflar: ['medang'], b: 'Surabaya: Pralaya ile Doğu Cava krallığı çöktü (1016)', tur: 'toprak-kayip',
  d: 'Medang/Doğu Cava krallığı 1016 çöküşünde yıkıldı; Airlangga 1019\'a dek hüküm kuramadı. Kazanan yok: Surabaya sahipsizdir (BOŞLUK).', kaynak: AIR(['it took its revenge in 1016 for the Javanese invasion of 992', 'as it was called by the Javanese inscription that tells about the events of 1016']), gun: '1016 (yıl)', kesinlik: 'yil', ic_not: 'Kaybeden devlet (medang) taraflar[0]; kazanan tek bir devlet değil.' });
S({ yer: 'Surabaya', t: '1019-01-01', devlet: 'kahuripan', taraflar: ['kahuripan'], b: 'Surabaya: Airlangga taç giydi, yetkisi Surabaya-Pasuruan kıyısını kapsıyordu (1019)', tur: 'toprak-kazanc',
  d: 'Airlangga 1019\'da taç giydi; yetkisi Surabaya ile Pasuruan arası kuzey kıyıyla sınırlıydı.', kaynak: AIR(['His authority at that time did not extend beyond a small territory situated on the northern coast of the island between Surabaya and Pasuruhan']), gun: '1019 (yıl)', kesinlik: 'yil', ic_not: 'Gün yok.' });
S({ yer: 'Surabaya', t: '1042-01-01', devlet: 'kediri', taraflar: ['kediri', 'janggala', 'kahuripan'], b: 'Surabaya: Airlangga\'nın bölünmesi sonucu Janggala (sonra Kadiri) payına düştü (1042)', tur: 'toprak-kazanc',
  d: 'Bölünmede Brantas deltası limanları (Surabaya, Rembang, Pasuruan) Janggala payına düştü; Janggala kısa sürede Panjalu/Kadiri\'ye emildi.', kaynak: AIR(['Janggala lay to the east and must have included the region of Malang and the Brantas Delta with the ports of Surabaya, Rembang, and Pasuruhan', 'Janggala was soon absorbed by Panjalu']), gun: '1042 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Coedès Janggala\'nın \'kısa sürede\' Kadiri\'ye emildiğini yazar, yılı vermez; Majumdar artakalanı \'yarı bağımsız şefler\' görür. Sahip kediri yazıldı.') });
S({ yer: 'Surabaya', t: '1222-01-01', devlet: 'singhasari', taraflar: ['singhasari', 'kediri'], b: 'Surabaya: Kadiri\'nin düşüşüyle Tumapel/Singhasari\'ye geçti (1222)', tur: 'toprak-kazanc',
  d: 'Angrok Tumapel\'den Kadiri\'yi yendi; Kadiri Tumapel krallığının parçası oldu.', kaynak: K('coedes', 'XI-8', ['Kadiri consequently became an integral part of the kingdom of Tumapel']), gun: '1222 (yıl)', kesinlik: 'yil', ic_not: 'Gün yok.' });
S({ yer: 'Malang', t: '1016-01-01', devlet: 'medang', taraflar: ['medang'], b: 'Malang: Pralaya ile Doğu Cava krallığı çöktü (1016)', tur: 'toprak-kayip',
  d: 'Medang/Doğu Cava krallığı 1016 çöküşünde yıkıldı; Malang 1037\'ye dek sahipsiz kalır (BOŞLUK).', kaynak: AIR(['as it was called by the Javanese inscription that tells about the events of 1016']), gun: '1016 (yıl)', kesinlik: 'yil', ic_not: 'Kaybeden devlet taraflar[0].' });
S({ yer: 'Malang', t: '1037-01-01', devlet: 'kahuripan', taraflar: ['kahuripan'], b: 'Malang: Airlangga fethi tamamladı, doğuda Kahuripan\'a yerleşti (1037)', tur: 'toprak-kazanc',
  d: 'Airlangga 1037\'de düşmanlarını yenip tahta oturdu; devletleri epey genişlemişti ve doğuda Kahuripan\'a yerleşti.', kaynak: AIR(['he established his residence in the east, at Kahuripan, the site of which has still not been identified']), gun: '1037 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Malang\'ın adıyla anıldığı bir fetih tanığı yok; 1037 genişlemiş devletin doğu merkezi olarak alındı.') });
S({ yer: 'Malang', t: '1042-01-01', devlet: 'kediri', taraflar: ['kediri', 'janggala', 'kahuripan'], b: 'Malang: Airlangga\'nın bölünmesi sonucu Janggala (sonra Kadiri) payına düştü (1042)', tur: 'toprak-kazanc',
  d: 'Bölünmede Malang bölgesi Janggala payına düştü; Janggala kısa sürede Panjalu/Kadiri\'ye emildi.', kaynak: AIR(['Janggala lay to the east and must have included the region of Malang and the Brantas Delta', 'Janggala was soon absorbed by Panjalu']), gun: '1042 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Coedès Janggala\'nın emilme yılını vermez; Majumdar: Tumapel (Malang yakını) eski Janggala\'nın parçası, artakalan yarı bağımsız şefler. Sahip kediri yazıldı.') });
S({ yer: 'Malang', t: '1222-01-01', devlet: 'singhasari', taraflar: ['singhasari', 'kediri'], b: 'Malang: Kadiri\'nin düşüşüyle Tumapel/Singhasari\'ye geçti (1222)', tur: 'toprak-kazanc',
  d: 'Angrok Tumapel\'den Kadiri\'yi yendi; eski Janggala toprakları Singhasari\'ye bağlandı.', kaynak: K('coedes', 'XI-8', ['an adventurer named Angrok, who had taken over the government of Tumapel northeast of Malang, brought the former Janggala under his power']), gun: '1222 (yıl)', kesinlik: 'yil', ic_not: 'Tumapel Malang\'ın kuzeydoğusundadır (Coedès); gün yok.' });
S({ yer: 'Daha (Kediri)', t: '1222-01-01', devlet: 'singhasari', taraflar: ['singhasari', 'kediri'], b: 'Daha: Kadiri başkenti Angrok\'a düştü (1222)', tur: 'toprak-kazanc',
  d: 'Angrok Canter savaşında Kritajaya\'yı yendi; Kadiri Tumapel krallığının bütünleşik parçası oldu.', kaynak: K('coedes', 'XI-8', ['Kadiri consequently became an integral part of the kingdom of Tumapel']), gun: '1222 (yıl)', kesinlik: 'yil', ic_not: 'Coedès savaş yılı 1221, düşüş 1222.' });

// ===== TERNATE / TIDORE =====
A({ t: '1225-01-01', tur: 'siyaset', b: 'Chao Ju-kua Moluccas\'ı (Wu-nu-ku) Cava krallığının (Su-chi-tan) bağlıları arasında sayar', taraflar: ['singhasari', 'kediri'], yer: 'Ternate',
  d: 'Coedès: Chao Ju-kua\'nın Chu-fan-chih\'i (1225) Su-chi-tan\'ın (Cava krallığı) bağlıları arasında Wu-nu-ku\'yu (Moluccas) sayar; liste farklı tarihlerin bilgisini birleştirir ve en yenisi Kadiri\'nin düşüşünden sonraya gelir. Majumdar Wu-nu-ku\'yu Ternate ile eşler; Hall Ternate\'nin Kadiri\'ye bağlı olduğunu söyler.',
  kaynak: K('coedes', 'XI-8', ['Wu-nu-ku (the Moluccas)', 'the information is for various dates and the most recent seems to come after the fall of Kadiri']) + ' | ' + K('hall', '4', ['Ternate was a vassal state of Kediri']),
  gun: '1225 (yıl; eser tarihi)', kesinlik: 'yil', ic_not: 'Eser tarihi 1225; liste tarihleri karışık (Coedès). Wu-nu-ku = Moluccas = Ternate adayı (Majumdar işareti); Tidore ayrıca anılmaz.' });
S({ yer: 'Ternate', t: '1042-01-01', devlet: 'kediri', taraflar: ['kediri', 'kahuripan'], b: 'Ternate: Kadiri üstünlüğü başlıyor (1042; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Hall: Ternate Kadiri\'ye bağlı bir vasal devletti; Kadiri dönemi Moluccas\'ın siyasi-ticari önem kazanmaya başladığı dönemdir. Kadiri atlas künyesinde 1042\'de başlar.', kaynak: K('hall', '4', ['Ternate was a vassal state of Kediri']), gun: '1042 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Hall vasallık yılını vermez; Kadiri dönemi (1042-1222) içinde sayar. Devir günü Kadiri başlangıcına (bölme, ±1042) bağlandı.') });
S({ yer: 'Ternate', t: '1222-01-01', devlet: 'singhasari', taraflar: ['singhasari', 'kediri'], b: 'Ternate: Kadiri\'nin düşüşüyle Cava üstünlüğü Singhasari\'ye geçti (1222; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Chu-fan-chih (1225) Wu-nu-ku\'yu Cava krallığının bağlısı sayar; Coedès listenin en yeni bilgisinin Kadiri\'nin düşüşünden sonraya geldiğini yazar.', kaynak: K('coedes', 'XI-8', ['Wu-nu-ku (the Moluccas)', 'the most recent seems to come after the fall of Kadiri']), gun: '1222 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Ternate\'nin Singhasari\'ye bağlılığı doğrudan yazılmaz; Cava merkezinin akıbetine bağlandı.') });
S({ yer: 'Tidore', t: '1042-01-01', devlet: 'kediri', taraflar: ['kediri', 'kahuripan'], b: 'Tidore: Moluccas\'ın Kadiri üstünlüğüne girişi (1042; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Hall yalnız Ternate\'yi Kadiri vasalı olarak anar; Tidore komşu Moluccas adasıdır, Chu-fan-chih Wu-nu-ku (Moluccas) adıyla bütün grubu Cava bağlısı sayar.', kaynak: K('hall', '4', ['Ternate was a vassal state of Kediri']), gun: '1042 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Tidore adı kaynakta geçmez; ABİ MERKEZ Ternate/Moluccas grubu — Wu-nu-ku (Coedès XI-8). Sahip kediri yaklaşık yazıldı.') });
S({ yer: 'Tidore', t: '1222-01-01', devlet: 'singhasari', taraflar: ['singhasari', 'kediri'], b: 'Tidore: Cava üstünlüğü Singhasari\'ye geçti (1222; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Moluccas grubu (Wu-nu-ku) Chu-fan-chih\'e göre Cava krallığına bağlı; en yeni bilgi Kadiri\'nin düşüşünden sonraya gelir.', kaynak: K('coedes', 'XI-8', ['Wu-nu-ku (the Moluccas)', 'the most recent seems to come after the fall of Kadiri']), gun: '1222 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Tidore adı kaynakta yok; ABİ MERKEZ Moluccas/Ternate.') });

// ===== KAHURIPAN / KEDİRİ / SİNGHASARİ yok yukarıda; JANGGALA: =====
A({ t: '1135-01-01', tur: 'hukumdar', b: 'Jayabhaya Kadiri tahtında: iki belgesi 1135\'te tarihli (1135-79)', taraflar: ['kediri'], yer: 'Daha (Kediri)',
  d: 'Coedès Jayabhaya\'yı (Varmesvara) 1135-79 olarak tarihler; Majumdar\'ın okuduğu iki belgesi 1135 ve 1136 tarihlidir. Bharatayuddha şiiri onun saltanatında yazıldı; Kadiri\'nin Cava\'daki öncülüğünün zirvesi.',
  kaynak: K('coedes', 'X-8', ['Varmesvara, also known as Jayabhaya (1135-79)']), gun: '1135 (yıl)', kesinlik: 'yil', ic_not: 'Atlas Kediri künyesinde 1135 maddesi zaten var (tekrar etmemek için bu madde hükümdar sırasını Coedès\'e bağlar); Majumdar 1135/1136 belgeleri.' });

// ===== SUKHOTHAI / KHMER =====
A({ t: '1238-01-01', tur: 'toprak-kazanc', b: 'İki Tay şefi Sukhothai\'daki Khmer komutanını yenip orada Tay krallığının merkezini kurdu', taraflar: ['sukhothai', 'angkor-kmer'], yer: 'Sukhothai',
  d: 'Hall: 1238\'de iki T\'ai şefi Sukhot\'ai\'daki Khmer komutanına saldırıp onu yendi; Sukhothai o sırada Angkor imparatorluğunun kuzeybatı kesiminin başkentiydi. Orada Rama Khamheng döneminde güçlenecek T\'ai krallığının merkezini kurdular. Coedès: Pha Muang ile Bang Klang Thao Khmer valisini Sukhothai\'dan kovdu; Bang Klang Thao orada Sri Indrapatindraditya unvanıyla kral oldu.',
  kaynak: K('hall', '7', ['In 1238 two T’ai chiefs attacked and defeated the Khmer commander at Sukhot’ai']) + ' | ' + K('coedes', 'XII-5', ['the two allies drove the Cambodian governor out of Sukhothai']),
  gun: '1238 (yıl; Hall)', kesinlik: 'yil', ic_not: 'ÇELİŞKİ: Coedès olayı kesin tarihlemez; Indraditya\'nın taç giymesini Rama Khamhaeng\'in saltanatından geriye giderek \'around 1220\' hesaplar (XII-5); Hall 1238. Hall alındı (sukhothai künyesi f=1238 ile tutarlı), Coedès ic_not\'ta.' });
A({ t: '1283-01-01', tur: 'hukumdar', b: 'Rama Khamheng Sukhothai tahtında (Hall: 1283-c.1317); Tay yazısının icadı', taraflar: ['sukhothai'], yer: 'Sukhothai',
  d: 'Hall Rama Khamheng\'in saltanatını 1283-c.1317 olarak verir; 1283\'te Tay yazısı icat edildi (Coedès, stelden: \'In 1205 [i.e., A.D. 1283] ... King Rama Khamhaeng applied all his energy\'). Coedès Rama Khamhaeng\'in tahta çıkış tarihinin bilinmediğini yazar.',
  kaynak: K('hall', '7', ['Rama Khamheng, or ‘Rama the Brave’ (1283-c.1317)']) + ' | ' + K('coedes', 'XII-5', ['We do not know the date at which Rama Khamhaeng, son of the founder of the dynasty of Sukhothai, succeeded his elder brother']),
  gun: '1283 (yıl; Hall)', kesinlik: 'yil', ic_not: 'ÇELİŞKİ: atlasta mevcut madde \'1275 Ramkhamhaeng Sukhothai tahtına çıktı\' var; Coedès tahta çıkış yılını bilmez, Hall 1283 verir, stel yalnız 1283 yazısını ve 1285/1292\'yi tarihler. 1275\'in kaynağı bulunamadı → mevcut maddenin düzeltilmesi/kaynaklanması önerilir.' });
A({ t: '1287-01-01', tur: 'ittifak', b: 'Mangrai, Rama Khamheng ve Phayao\'lu Ngam Muang dostluk paktı yaptı', taraflar: ['sukhothai', 'lan-na', 'phayao'], yer: 'Sukhothai',
  d: 'Coedès: eski bir metne göre 1287\'de Chiangrai prensi Mangrai, Phayao prensi Ngam Muang ve Sukhothai kralı Rama Khamhaeng uygun bir yerde buluşup sağlam bir dostluk paktı yaptı ve herkes ülkesine döndü. Yıl Pagan\'ın Çin-Moğol birliklerince alındığı yıldır (Hall da aynı yılı verir).',
  kaynak: K('coedes', 'XII-5', ['concluded a strong pact of friendship, and then each returned to his own country']) + ' | ' + K('hall', '7', ['In 1287 Mangrai, Rama Khamheng and Ngam Muong, the Chief of P’ayao, met together and concluded a firm pact of friendship']),
  gun: '1287 (yıl)', kesinlik: 'yil', ic_not: 'Çift teyit: Coedès ve Hall aynı yılı verir (ikisi de ikincil sentez; ortak kaynak eski Tay metnidir).' });
A({ t: '1292-01-01', tur: 'siyaset', b: 'Rama Khamhaeng\'in Sukhothai taş yazıtı: Manangsilapatra tahtı; Suphannaphum ve Si Thammarat\'a dek fetihler sayılır', taraflar: ['sukhothai'], yer: 'Sukhothai',
  d: 'Coedès: Rama Khamhaeng yazıtı yalnızca üç tarih içerir: 1283 (Tay yazısı), 1285 (Si Satchanalai\'de stupa) ve 1292 (Sukhothai\'da taş taht Manangsilapatra). Yazıt güneydeki fetihleri Khonthi, Phraek, Suphannaphum, Ratburi, Phetchaburi ve Si Thammarat (Ligor) denize dek sayar; Hall Rama Khamheng\'in 1283-87 arasında Menam vadisinin Mon\'larını fethettiğini söyler.',
  kaynak: K('coedes', 'XII-5', ['1292, the date of the construction at Sukhothai of a stone throne']) + ' | ' + K('coedes', 'XII-8', ['Suphannaphum, Ratburi, Phetchaburi, Si Thammarat [Ligor], up to the sea that marks the border']) + ' | ' + K('hall', '7', ['Between 1283 and 1287 Rama Khamheng of Sukhot’ai conquered the Mons of the Menam valley']),
  gun: '1292 (yıl)', kesinlik: 'yil', ic_not: 'Yazıtın kendisi pencere sonrası (1292); fetih yılları kaynakta ayrıca verilmez. Suphan Buri/Suphannaphum yerleşim zinciri için bu madde gün/yıl bağlamaz.' });
S({ yer: 'Sukhothai', t: '1181-01-01', devlet: 'angkor-kmer', taraflar: ['angkor-kmer'], b: 'Sukhothai: Khmer hâkimiyeti en geç Jayavarman VII dönemi (1181; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Coedès: Sukhothai ve Sawankhalok\'taki Khmer kalıntıları Khmer\'lerin bölgede en geç Jayavarman VII zamanından, belki Suryavarman II döneminden beri baskın olduğunu kanıtlar. Jayavarman VII\'nin saltanatı 1181\'de başlar.',
  kaynak: K('coedes', 'XII-5', ['the Khmers were dominant over this region at least from the time of Jayavarman VII and perhaps from the era of Suryavarman II']), gun: '1181 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Kaynak olay yılı vermez; ALT SINIR olarak Jayavarman VII\'nin ilk saltanat yılı (1181) alındı. Daha eski Khmer hâkimiyeti olabilir (Suryavarman II, 1113). 1181 öncesi BOŞLUK.') });
S({ yer: 'Sukhothai', t: '1238-01-01', devlet: 'sukhothai', taraflar: ['sukhothai', 'angkor-kmer'], b: 'Sukhothai: Tay şefleri Khmer komutanını yendi (1238)', tur: 'toprak-kazanc',
  d: 'Hall: 1238\'de iki T\'ai şefi Sukhot\'ai\'daki Khmer komutanını yenip Tay krallığının merkezini kurdu.', kaynak: K('hall', '7', ['In 1238 two T’ai chiefs attacked and defeated the Khmer commander at Sukhot’ai']), gun: '1238 (yıl)', kesinlik: 'yil', ic_not: 'Coedès ≈1220 (hesap).' });
S({ yer: 'Suphan Buri', t: '1181-01-01', devlet: 'angkor-kmer', taraflar: ['angkor-kmer'], b: 'Suphan Buri: Jayavarman VII\'nin Jayabuddhamahanatha heykelleri Suphan\'a dikildi (1181; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Coedès: Jayavarman VII\'nin Preah Khan steli, çeşitli şehirlerde korunmuş yirmi üç Jayabuddhamahanatha heykelini anar; bu şehirler arasında Lopburi, Suphan, Ratburi, Phetchaburi ve Muang Sing vardır. Heykeller kralın saltanatına (1181-c.1218) aittir.',
  kaynak: K('coedes', 'XI-1', ['twenty-three statues named Jayabuddhamahanatha that have been preserved in many ... cities, among which are Lopburi, Suphan, Ratburi, Phetchaburi']), gun: '1181 (yıl; yaklaşık)', kesinlik: 'yil', ic_not: BEYAN('Heykellerin Suphan\'a hangi yılda dikildiği kaynakta yok; ALT SINIR olarak saltanat başı 1181. Coedès \'Suphan\' bölgesini anar, tek şehir olarak Suphan Buri kesin değil.') });

// ===== LAN NA / PHAYAO / CHIANG RAI =====
A({ t: '1262-01-01', tur: 'kurulus', b: 'Mangrai Chiangrai\'yi kurdu', taraflar: ['lan-na'], yer: 'Chiang Rai',
  d: 'Coedès: Ngoen Yang (Chiangsaen) prenslerinin sonuncusu 1239 doğumlu Mangrai 1261\'de babasının yerine geçti; ertesi yıl başkentini güneye taşıyarak Chiangrai\'yi kurdu; 1269\'da Chiangkhong\'u aldı, 1273\'te Mueang Fang\'ı kurdu.',
  kaynak: K('coedes', 'XII-5', ['The following year, moving his capital south, he founded Chiangrai', 'he took Chiangkhong in 1269 and founded Miiang Fang in 1273']), gun: '1262 (yıl)', kesinlik: 'yil', ic_not: 'Coedès 1261 (babanın yerine geçiş) + \'ertesi yıl\' → 1262. Lan Na künyesi f=1262 ile aynı yıl.' });
A({ t: '1096-01-01', tur: 'kurulus', b: 'Phayao Tay devleti en geç 1096\'da ortaya çıktı', taraflar: ['phayao'], yer: 'Phayao',
  d: 'Hall: Raheng\'in kuzeyinde, Mepin ile Mewang nehirlerinin birleştiği yerde küçük bağımsız T\'ai devleti P\'ayao 1096\'dan önce kurulmuştu ("as early as 1096").',
  kaynak: K('hall', '7', ['the small independent T’ai state of P’ayao came into existence as early as 1096']), gun: '1096 (yıl; en geç)', kesinlik: 'yil', ic_not: '\'As early as\': alt sınır/ilk tanık, kuruluş yılı kesin değil. Hall konumu Raheng kuzeyi ve nehir birleşimi diye verir; Coedès Phayao\'yu Ing nehri yukarısında anar — konum tarifi tutarsız.' });

// ===== TRAN / SİPSONG PANNA =====
A({ t: '1241-01-01', tur: 'savas', b: 'Trần Cảnh Song sınır bölgelerine kara ve deniz seferi düzenledi (1241-42)', taraflar: ['tran-hanedani', 'song'], yer: 'Qinzhou ve Hepu (Song kıyı bölgesi)',
  d: 'Taylor: 1240 sonlarında Lạng Sơn sınırında \'kuzeyliler\' talan yaptı; bir yıl sonra Trần Cảnh Song sınır bölgelerine kara birlikleri gönderdi, kendisi de küçük teknelerle Qinzhou ve Hepu\'ya donanma saldırısına çıktı. 1242\'de bir Trần generalinin sınır harekâtından sonra Trần ve Song sarayları arasında güvenli haberleşme yeniden kuruldu.',
  kaynak: K('taylor', 'Bölüm 4 \'The Tran dynasty\', s. 123', ['Tran Canh sent soldiers by land to attack Song border jurisdictions', 'In 1242, after further campaigning along the border by a Tran general, secure communications were restored between the Tran and Song courts']), gun: '1241-42 (yıl)', kesinlik: 'yil', ic_not: 'Taylor \'a year later\' der (1240 sonu + bir yıl); gün yok. Toprak değişimi yok (haydut inlerini temizleme seferi).' });
A({ t: '1257-01-01', tur: 'savas', b: 'Uriyangqadai Thăng Long\'u işgal etti; Trần Cảnh kaçtı, on iki gün sonra Moğol kuvveti çekildi (Birinci Moğol Savaşı)', taraflar: ['mogol-imparatorlugu', 'tran-hanedani'], yer: 'Thăng Long (Hanoi)',
  d: 'Taylor: Kubilay\'ın generali Uriyangqadai 1256\'da Nanzhao\'yu ezdi; 1257 yazı ve sonbaharında yaklaşık 25.000 kişilik kuvvetle (5.000 Moğol, 20.000 Yunnan yerlisi) Thăng Long\'a doğru indi. Yılın son ayında kuzeybatıdan ovaya çıktı; Trần Cảnh onu durduramayıp nehir aşağı kaçtı, Uriyangqadai Thăng Long\'u işgal etti ama şehir boş ve erzaksızdı. Trần Cảnh toparlanıp saldırıya geçti; savaşın başlamasından Moğolların çekilmesine yalnızca on iki gün geçti.',
  kaynak: K('taylor', 'Bölüm 4, s. 124-125', ['Uriyangqadai occupied Thang Long, where he found his envoys trussed up in a dungeon', 'From when battle was joined until the Mongols retreated upriver was only twelve days']), gun: '1257 son ayı (Trần takvimi; gün yok)', kesinlik: 'yil', ic_not: 'Taylor \'the last month of the year\' der; Vietnam takvim yılının son ayı Batı takvimine göre Ocak 1258\'e düşebilir (çevrilmedi); yıl hassasiyeti, YYYY-01-01. ic_not_takvim: yıl sonu aylar belirsiz.', ic_not_takvim: 'Annam yılı sonu → Batı karşılığı (Ocak 1258 olasılığı) tablo ile çevrilmedi; yıl hassasiyeti.' });
A({ t: '1278-01-01', tur: 'siyaset', b: 'Moğol elçisi Chai Zhuang ilk kez Trần sarayına geldi; 1279\'da Song\'un yıkılışından sonra yeniden talepte bulundu', taraflar: ['mogol-imparatorlugu', 'tran-hanedani'], yer: 'Thăng Long (Hanoi)',
  d: 'Taylor: 1278\'de Chai Zhuang başkanlığındaki Moğol elçileri ilk kez geldi; 1279\'da Moğollar Song hanedanını tamamen ortadan kaldırıp kuzeyde sorgusuz egemen oldu, aynı yıl Chai Zhuang tekrar gelip Moğol taleplerini yineledi ve eli boş gönderildi.',
  kaynak: K('taylor', 'Bölüm 4, s. 130', ['In 1278, led by a man named Chai Zhuang, Mongol envoys for the first time']), gun: '1278 (yıl)', kesinlik: 'yil', ic_not: 'Taylor sayfa numarası yaklaşık (s. 129-131 aralığı).' });
A({ t: '1230-01-01', tur: 'ittifak', b: 'Chiangrung ve Ngoen Yang Tay şefleri evlilikle ittifak kurdu (1230\'lar)', taraflar: ['sipsong-panna'], yer: 'Chiang Hung (Jinghong)', kesinlik_override: 'onyil',
  d: 'Hall: Mogaung (1215), Mone/Muong Nai (1223) ve Assam (1229) T\'ai devletlerinin kuruluşlarıyla aynı sıralarda Chieng Rung (Chiang Rung) ve Chieng Sen (Ngoen Yang) T\'ai şefleri bir evlilik ittifakı yaptı. Coedès aynı olayı çocukların evliliği olarak verir. Kesin yıl yoktur.',
  kaynak: K('hall', '7', ['At about the same time the T’ai chiefs of Chieng Rung and Chieng Sen on the upper Mekong made a marriage alliance']) + ' | ' + K('coedes', 'XII-1', ['formed an alliance by means of a marriage between their children']),
  gun: '1230\'lar (Hall \'at about the same time\' = 1223-1229 sonrası)', kesinlik: 'onyil', ic_not: 'Yıl kaynakta yok; 1223/1229 olaylarının çevresi → on yıllık hassasiyet (1230-01-01 yalnız işaret). Sipsong Panna künyesindeki f=1180 (Phanya Coeng) bu oturumda doğrulanamadı: Hall/Coedès Chiang Rung şefinin varlığını 13. yy ilk yarısı için gösterir, 1180 yok.' });

// ===== PASAI / LAMURİ / ARAKAN =====
A({ t: '1292-01-01', tur: 'siyaset', b: 'Marco Polo Samudra\'da (Pasai) beş ay kaldı; Ferlec Müslümanlarını ve Lambri\'yi anlattı', taraflar: ['samudra-pasai', 'lamuri'], yer: 'Samudra Pasai',
  d: 'Coedès: Marco Polo Sumatra\'da (Samudra, yani Pasai) beş ay kaldı çünkü hava seyahatini sürdürmesine izin vermedi; Ferlec\'te (Perlak) yalnız şehir halkının Müslüman olduğunu, Lambri\'de (Lamuri/Aceh) kuyruklu insanlardan söz ettiğini yazar. Majumdar Samudra Müslüman devletinin 1292-1297 arası kurulduğunu çıkarır (Sultan Melik es-Salih 1297\'de öldü).',
  kaynak: K('coedes', 'XII-7', ['Here Marco Polo in person resided five months, because the weather prevented him from continuing his voyage']) + ' | ' + K('suv', 's. 370', ['The foundation of the Muhammadan kingdom of Samudra must thus be placed between 1292 and 1297 A.D.']),
  gun: '1292 (yıl)', kesinlik: 'yil', ic_not: 'Pasai künyesi (atlas) f=1281; Majumdar kuruluşu 1292-97 aralığına koyar, TDV kuruluşu 1280\'ler der → çelişki beyanı: künye f için gözden geçirilmeli.' });
A({ t: '1320-01-01', tur: 'siyaset', b: 'Samudra-Pasai\'de bulunan en eski mezar taşı yazıtı (1320)', taraflar: ['samudra-pasai'], yer: 'Samudra Pasai',
  d: 'Coedès: İbn Battuta Samudra\'nın sultanının Şafii mezhebine bağlı olduğunu ve ülkesinin kâfirlerle çevrili olduğunu yazar; Samudra-Pasai\'de bulunan en eski mezar taşı yazıtı 1320 tarihlidir.',
  kaynak: K('coedes', 'XIII-7', ['The oldest tombstone inscription found at Samudra-Pasai dates from 1320']), gun: '1320 (yıl)', kesinlik: 'yil', ic_not: 'Çelişki: atlas künyesindeki 1297 maddesi (Melik es-Salih mezar taşı) başka kaynaklıdır; Coedès \'en eski\' derken 1320\'yi anar → 1297 taşıyla tutarsızlık, TDV kaynağı esastır.' });
A({ t: '1237-01-01', tur: 'kurulus', b: 'Arakan kroniklerine göre Launggyet hanedanı başladı (1237-1433; kronik listesi)', taraflar: ['launggyet'], yer: 'Mrauk U (Arakan)',
  d: 'Hall\'ın Ek I\'i Arakan kroniklerinin hanedan listesini verir: Vesali 878-1018, Birinci Pyinsa 1018-1103, Parin 1103-67, Krit 1167-80, İkinci Pyinsa 1180-1237, Launggyet (17 kral) 1237-1433, ardından Mrohaung (Mrauk-u) 1433-1785. Hall, kroniklerin ilk bölümlerinin efsanevî olduğunu, Sanskrit yazıtlarından derlenen listelerin kronikten daha gerçeğe yakın olduğunu söyler.',
  kaynak: K('hall', 'Ek I (Rulers of Arakan)', ['Launggyet dynasty, 17 kings, 1237-1433']), gun: '1237 (yıl; kronik listesi)', kesinlik: 'yil', ic_not: 'Kronik tarihi, yazıtla doğrulanmadı; Hall yalnız listeyi aktarır. Launggyet künyesi (ms1) f=1237 ile uyumlu.' });
A({ t: '1287-01-01', tur: 'isyan', b: 'Narathihapate\'in kaçışından sonra kuzey Arakan bağımsızlığını ilan etti', taraflar: ['launggyet', 'pagan'], yer: 'Mrauk U (Arakan)',
  d: 'Hall: Narathihapate Pagan\'ı terk edip Bassein\'e kaçınca merkezî otorite kayboldu, kuzey Arakan bağımsızlığını ilan etti, güneyde Mon\'lar ayaklandı. Narathihapate 1287\'de yolda öldürüldü.',
  kaynak: K('hall', '6', ['The central authority vanished, northern Arakan proclaimed its independence']), gun: '1285-87 (yıl)', kesinlik: 'yil', ic_not: 'Hall bağımsızlığın yılını vermez; Pagan\'ın düşüşü (1287) ile birlikte anlatılır. 1287 üst sınır olarak alındı.' });
S({ yer: 'Mrauk U (Arakan)', t: '1237-01-01', devlet: 'launggyet', taraflar: ['launggyet'], b: 'Mrauk U: kronik listesine göre Launggyet hanedanı devraldı (1237; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Hall Ek I: Launggyet hanedanı 1237-1433 (17 kral). Mrauk U 1430\'da kurulur; 1237-1281 arası Arakan\'ın merkezî bölgesi Launggyet krallığıdır.', kaynak: K('hall', 'Ek I (Rulers of Arakan)', ['Launggyet dynasty, 17 kings, 1237-1433']), gun: '1237 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Kronik listesi tarihidir; Mrauk U şehri o devirde yok (1430), Arakan merkezi bölgesinin bölge-vekili olarak yazıldı; 1237 öncesi BOŞLUK (kronik hanedan adları atlas kimliği değil).') });
S({ yer: 'Sandoway (Thandwe)', t: '1237-01-01', devlet: 'launggyet', taraflar: ['launggyet'], b: 'Sandoway: kronik listesine göre Launggyet hanedanı devraldı (1237; beyanlı yaklaşıklık)', tur: 'toprak-kazanc',
  d: 'Hall Ek I: Launggyet hanedanı 1237-1433 (17 kral). Sandoway Arakan\'ın güney kıyısıdır; ABİ MERKEZ Launggyet.', kaynak: K('hall', 'Ek I (Rulers of Arakan)', ['Launggyet dynasty, 17 kings, 1237-1433']), gun: '1237 (yıl)', kesinlik: 'yil', ic_not: BEYAN('Sandoway\'in Launggyet\'e bağlılığı kaynakta yok; Hall güneyde Mon ayaklanmasından söz eder (1287 sonrası). ABİ MERKEZ: Launggyet (Arakan merkezi). 1237 öncesi BOŞLUK.') });

module.exports = { kunye, kron, sinir, S, A, K, J, BEYAN, OUT, rapor, fs, path };
