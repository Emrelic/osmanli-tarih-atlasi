// EKO-ILGI-0073 · (a) HAZIRLIK — 1.MURAT M-4837/a.
// "teknik-bilimsel" kovasindaki 72 kartin hangisinin hangi ture gidecegi.
// Tur acilir acilmaz TEK TURDA insin diye id deseniyle yazildi; bu betik
// PLANI URETIR ve DOGRULAR (hangi dosyada, kac kart), VERIYE DOKUNMAZ.
//
// Olcut — yeni degil: EKOKUMA-SIMGE-0070'in ekokuma_ihtilal.js basligindaki
// kendi olcutu: "teknik-bilimsel = teknigin/bilimin KENDISI (muhendishane,
// matbaa, takvim, tahrir defteri, icatlar)".
//
// 🔴 Tur adi: kod anahtari `kultur-sanat`, EKRANDA GORUNEN ad Emre'nin yazdigi
//    bicim: "Kültür Sanat" (M-4837/a). EKOKUMA_TUR satiri:
//      "kultur-sanat": { etiket: "🎨 Kültür Sanat", kaynak: function () { return _ekHavuz(); } },
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const R = Y.yukle('.');
const w = R.win;

// desen -> hedef tur.  Sira ONEMLI: ilk tutan desen kazanir.
const KURAL = [
  [/^dunya-icatlar-/,                'teknik-bilimsel', 'KALIYOR — icat/teknoloji tarihi, olcute uyan tek dunya* ailesi'],
  [/^dunya7-istanbul/,               'sok-haberler',    'Istanbul afet tarihi (deprem · yangin · sel/Bogaz\'in donmasi); bugun BOS olan kovayi dolduruyor'],
  [/^dunya-cografi-kesifler$/,       'dis-yankilar',    'bir dunya olayinin Osmanli\'ya yankisi'],
  [/^dunya-otuz-yil-savaslari/,      'dis-yankilar',    'Osmanli\'nin asker gondermedigi bir Avrupa savasinin yankisi'],
  [/^dunya/,                         'tartisma',        'dunya siyaseti/cografyasi — bir soruyu tartisan cozumleme'],
  [/^mimari-/,                       'kultur-sanat',    'mimari yapi'],
  [/^camitarz-/,                     'kultur-sanat',    'cami mimarisi uslubu'],
  [/^lale-devri-mimari/,             'kultur-sanat',    'kasir/cesme/sehir mimarisi'],
  [/spor-gelenekleri$/,              'kultur-sanat',    '🔴 EMRE\'NIN ADIYLA SAYDIGI KART (0073/H-0018): gures sporu, teknik/bilimsel degil'],
  [/kiyafet-statu$/,                 'kultur-sanat',    'kiyafet ve statu — kultur'],
];

const kartlar = [];
Object.keys(w).filter(a => /^EKOKUMA(_[A-Z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .forEach(a => w[a].forEach(k => kartlar.push({ ad: a, k })));
const tb = kartlar.filter(x => x.k.tur === 'teknik-bilimsel');

// ad alani -> dosya adi (app.js listesinden)
const dosyaAdi = {};
R.ekAdlar.forEach(a => {
  const anahtar = 'EKOKUMA' + (a === 'ekokuma' ? '' : '_' + a.replace(/^ekokuma_/, '').toUpperCase());
  dosyaAdi[anahtar] = 'data/' + a + '.js';
});

const plan = [], kalan = [];
tb.forEach(x => {
  const id = x.k.id || '';
  const kural = KURAL.find(([re]) => re.test(id));
  if (!kural || kural[1] === 'teknik-bilimsel') { kalan.push({ id, ad: x.ad, sebep: kural ? kural[2] : 'desen tutmadi' }); return; }
  plan.push({ id: id, dosya: dosyaAdi[x.ad] || ('?' + x.ad), eski: 'teknik-bilimsel', yeni: kural[1], gerekce: kural[2] });
});

const say = {};
plan.forEach(p => { say[p.yeni] = (say[p.yeni] || 0) + 1; });
console.log('teknik-bilimsel kart      : ' + tb.length);
console.log('TASINACAK                 : ' + plan.length);
Object.entries(say).sort().forEach(([k, v]) => console.log('   -> ' + k.padEnd(16) + v));
console.log('KALAN (teknik-bilimsel)   : ' + kalan.length);
console.log('\n── TASINACAKLAR (dosya · id · yeni tur) ──');
const dosyaGrup = {};
plan.forEach(p => (dosyaGrup[p.dosya] = dosyaGrup[p.dosya] || []).push(p));
Object.keys(dosyaGrup).sort().forEach(d => {
  console.log('\n' + d + '  (' + dosyaGrup[d].length + ')');
  dosyaGrup[d].forEach(p => console.log('   ' + p.id.padEnd(48) + ' -> ' + p.yeni));
});
console.log('\n── KALANLAR (teknik-bilimsel olarak DURACAK) ──');
kalan.forEach(k => console.log('   ' + k.id.padEnd(48) + ' · ' + k.sebep));

require('fs').writeFileSync('denetim/EKO-ILGI-0073-TURPLAN.json',
  JSON.stringify({ olcut: 'teknik-bilimsel = tekniğin/bilimin KENDİSİ (EKOKUMA-SIMGE-0070)',
                   yeni_tur: { anahtar: 'kultur-sanat', etiket: '🎨 Kültür Sanat', kaynak: '_ekHavuz()' },
                   toplam_teknik_bilimsel: tb.length, tasinacak: plan.length,
                   dagilim: say, plan: plan, kalan: kalan }, null, 1), 'utf8');
console.log('\ndenetim/EKO-ILGI-0073-TURPLAN.json yazildi');
