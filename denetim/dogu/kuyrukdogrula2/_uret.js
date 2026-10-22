const fs = require('fs'), path = require('path');
const { A } = require('./_veri_a.js'); const { B } = require('./_veri_b.js');
const R = A.concat(B);
const D = __dirname;
const NO = { __BOSLUK__: 'beyanlı boşluk' };
const ADI = { 'yadava': 'Yadava Hanedanı', 'delhi-sultanligi': 'Delhi Sultanlığı', 'behmeni': 'Behmenî Sultanlığı', 'bicapur': 'Âdilşâhî (Bîcâpûr)', 'babur-imparatorlugu': 'Bâbürlü İmparatorluğu', 'haydarabad-nizam': 'Haydarabad Nizamlığı', 'hindistan-cumhuriyeti': 'Hindistan', 'caulukya': 'Çaulukya', 'gucerat-sultanligi': 'Gucerat Sultanlığı', 'portekiz': 'Portekiz', 'maratha': 'Maratha', 'ingiliz-hindistani': 'İngiliz Hindistanı', 'ahom': 'Ahom Krallığı', 'seylan-sinhala': 'Seylan Sinhala krallıkları', 'ingiliz-seylan': 'İngiliz Seylanı', 'sri-lanka': 'Seylan/Sri Lanka', 'maldivler-cumhuriyeti': 'Maldivler Cumhuriyeti', 'maldivler-sultanligi': 'Maldiv Sultanlığı', 'phayao': 'Phayao', 'lan-na': 'Lan Na', 'toungoo': 'Toungoo', 'konbaung': 'Konbaung', 'tonburi': 'Thonburi', 'siyam-chakri': 'Siyam (Chakri)', 'singhasari': 'Singhasari', 'kediri': 'Kediri', 'majapahit': 'Majapahit', 'vaghela': 'Vaghela', 'chutiya': 'Chutiya', 'karnata-mithila': 'Karnata (Mithila)' };
const ad = (d) => ADI[d] || d;
const sinir = [];
const bos = (d) => d === '__BOSLUK__';
const ONCE = { // kayit adi -> mevcut son sahip (hint verisinden)
  'Kalyani (Basavakalyan)': 'yadava', 'Thane': 'yadava', 'Wadhwan (Vardhamana)': 'caulukya', 'Dholka': 'vaghela', 'Sadiya': 'chutiya',
  'Polonnaruwa': 'seylan-sinhala', 'Dambadeniya': 'seylan-sinhala', 'Malé': 'maldivler-sultanligi', 'Phayao': 'phayao', 'Daha (Kediri)': 'singhasari', 'Simraungarh (Simraon)': 'karnata-mithila' };
const out = [];
for (const r of R) {
  const o = { ad: r.ad, kume: r.kume, s_ek: r.s_ek };
  if (r.bit) { o.bit = r.bit; o.bit_kaynak = r.bit_kaynak; o.bit_not = r.bit_not; }
  if (r.kuyruk_gerekli) { o.kuyruk_gerekli = r.kuyruk_gerekli; o.kuyruk_neden = r.kuyruk_neden; }
  out.push(o);
  const yer = r.ad.replace(/ \(.*\)$/, '');
  let onc = ONCE[r.ad];
  r.s_ek.forEach((s, i) => {
    const prev = i === 0 ? onc : r.s_ek[i - 1].d;
    if (s.devam || !prev) return;
    if (prev === s.d) return;
    let tur, taraflar, devlet;
    if (bos(s.d)) { tur = 'toprak-kayip'; devlet = prev; taraflar = [prev]; }
    else if (bos(prev)) { tur = 'toprak-kazanc'; devlet = s.d; taraflar = [s.d]; }
    else { tur = 'toprak-kazanc'; devlet = s.d; taraflar = [s.d, prev]; }
    const b = bos(s.d) ? `${yer}: ${ad(prev)} hâkimiyeti sona erdi, sahibi kaynakta bulunamayan boşluk — ${yer}`
      : bos(prev) ? `${yer}: boşluktan sonra ${ad(s.d)} hâkimiyeti — ${yer}`
        : `${ad(s.d)} ${yer}'yi ${ad(prev)}'dan devraldı — ${yer}`;
    const dd = bos(s.d) ? `${yer} yerleşiminin sahibi ${ad(prev)} iken sahibi kaynakta bulunamayan beyanlı boşluk oldu.`
      : bos(prev) ? `${yer} yerleşimi beyanlı boşluktan sonra ${ad(s.d)} hâkimiyetine girdi.`
        : `${yer} yerleşiminin sahibi ${ad(prev)} iken ${ad(s.d)} oldu.`;
    const m = { t: s.f, devlet, taraflar, b, tur, onem: 2, dunya: 1, kapsam: 'dis', yer, yer_id: r.ad,
      etiket: ['toprak-degisimi', 'konu-siyasi', 'dogu-kuyruk-1281-2000', 'kuyruk-dogrulandi'],
      d: dd + ' Gün/yıl hassasiyeti: ' + s.kesinlik + '.', kaynak: s.kaynak, kesinlik: s.kesinlik, sinir_id: [] };
    if (s.ic_not) m.ic_not = s.ic_not;
    sinir.push(m);
  });
}
const hdr = '// kuyrukdogrula2: kuyrukyeni2 ham kayitlarinin kaynak ACILARAK dogrulanmis hali. Her kaynak: acilan kaynak + alinti.\n';
fs.writeFileSync(path.join(D, 'zincir_kuyruk.js'), hdr + 'window.ZINCIR_DOGU_KUYRUKDOGRULA2 = ' + JSON.stringify(out, null, 1) + ';\n', 'utf8');
fs.writeFileSync(path.join(D, 'kronoloji_sinir_dogu_kuyrukdogrula2.js'), '// kuyrukdogrula2: devir gunleri icin sinir maddeleri (Degismez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKDOGRULA2 = ' + JSON.stringify(sinir, null, 1) + ';\n', 'utf8');
const kunye = [{
  id: 'maldivler-cumhuriyeti', ad: 'Maldivler Cumhuriyeti', tur: 'cumhuriyet', bolge: 'guney-asya', f: '1968-11-11', t: '2000-12-31', baskent: 'Malé',
  ozet: 'Maldiv Sultanlığı’nın kaldırılmasıyla 1968’de ilân edilen cumhuriyet (Malé merkezli); Temmuz 1965 tam bağımsızlığını sürdürür.',
  kaynak: 'TDV İslâm Ansiklopedisi «Maldivler» (https://islamansiklopedisi.org.tr/maldivler): “Temmuz 1965’te İngiltere’den tam bağımsız hale gelen Maldivler’de 1968 yılında yapılan referandumla cumhuriyet yeniden ilân edildi ve İbrâhim Nâsır cumhurbaşkanı oldu.” ; Office of the President of the Maldives, «President Al Ameer Ibrahim Nasir» (https://presidency.gov.mv/PO/FormerPresident/6): “Ibrahim Nasir was sworn in as the first president of republic of the Maldives on 11 November 1968.”',
  kesinlik: { f: 'gun' }, boya_gerekli: true,
  ic_not: 'maldivler-sultanligi künyesi t=1968-11-11 ile ardıl. t=2000-12-31 yalnız UFUK işaretidir (cumhuriyet sürüyor; künye uygulanırken t kaldırılmalı). TDV yalnız yıl (1968) verir; 11 Kasım gün olarak Cumhurbaşkanlığı Ofisi resmî sayfasındaki yemin gününden alındı (cumhuriyetin fiilî başlangıcı); referandum 15 Mart 1968 açılan akademik kaynakta okunmadı. 1953 kısa cumhuriyeti sultanlık künyesi içinde sayılmış (TDV: 1953 cumhuriyet ilânı, 1954 sultanlığa dönüş).',
  kronoloji: [] }];
fs.writeFileSync(path.join(D, 'kunye_yeni.js'), '// kuyrukdogrula2: Malé zincirinin kuyrugu icin tek yeni kunye (kaynakla dogrulandi).\nwindow.DOGU_KUNYE_KUYRUKDOGRULA2 = ' + JSON.stringify(kunye, null, 1) + ';\n', 'utf8');
console.log('kayit', out.length, 'madde', sinir.length);
