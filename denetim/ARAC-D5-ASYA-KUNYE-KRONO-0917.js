// D5-ASYA — G8–G10 "ÖNCE SAY" aleti (GERIYE-SARMA-0916 §0).
// Bölgemdeki künyelerin (dogu-asya · guney-asya · guneydogu-asya · orta-asya · sibirya-bozkir'in Asya kısmı) bir tarih
// aralığındaki kuruluş (f) ve yıkılış (t) günlerini, index.html'in yüklediği BÜTÜN olaylar*/kronoloji* maddeleriyle
// + data/kronoloji_sinir_asya.js ile karşılaştırır.
// Eşleşme: ±1 YIL içinde bir madde VE (madde.devlet == künye id · taraflar/devletler künyeyi içeriyor ·
//          başlıkta künye adının anlamlı bir sözcüğü geçiyor).
// ELENENLER: atlasın pencere başı (1281-01-01) — bir olay değil sınır işaretidir (CLAUDE.md §4 "pencere uçları") ·
//            Avrupa bozkırı künyeleri (Kazak hetmanlıkları, Nogay, Kasım) — D5-ASYA kapsamı dışı.
// ⚠️ Künyenin f/t günü bir KAYNAK DEĞİLDİR — alet yalnız "bu olay için madde var mı" sorar.
// Kullanım: node denetim/ARAC-D5-ASYA-KUNYE-KRONO-0917.js <baslangic> <bitis> [--hepsi] [--json]
const fs = require('fs');
const [BAS, BIT] = [process.argv[2] || '1281-01-01', process.argv[3] || '1606-11-11'];
const pad = s => s && s.split('-')[0].length < 4 ? s.padStart(10, '0') : s;
global.window = {}; eval(fs.readFileSync('data/devletler.js', 'utf8'));
const D = Object.values(window).find(v => Array.isArray(v) && v.length > 500 && v[0].id);
const BOLGE = new Set(['dogu-asya', 'guney-asya', 'guneydogu-asya', 'orta-asya', 'sibirya-bozkir']);
const DISARI = new Set(['zaporojye', 'don-kazak', 'nogay', 'kasim']);
const PENCERE = '1281-01-01';
const html = fs.readFileSync('index.html', 'utf8');
const dosyalar = [...new Set(html.match(/data\/(olaylar|kronoloji)[a-z0-9_]*\.js/g))];
if (!dosyalar.includes('data/kronoloji_sinir_asya.js')) dosyalar.push('data/kronoloji_sinir_asya.js');
global.window = {};
let hata = 0;
for (const f of dosyalar) { try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { hata++; } }
const M = []; for (const v of Object.values(window)) if (Array.isArray(v)) for (const r of v) if (r && r.t && r.b) M.push(r);
const norm = s => String(s || '').replace(/[İI]/g, 'i').replace(/ı/g, 'i').toLocaleLowerCase('tr').normalize('NFKD').replace(/[̀-ͯ]/g, '');
const GENEL = new Set(['sultanligi', 'kralligi', 'hanedani', 'hanligi', 'imparatorlugu', 'devleti', 'beylikleri', 'krallari',
  'kralliklari', 'donemi', 'portekiz', 'oncesi', 'devletler', 'sultanliklari', 'beyleri', 'son', 'ikinci', 'yukari', 'dogu', 'bati']);
// KÖK: ekli biçimler ('Bâbürlü' ↔ 'Bâbür', 'Timurlu' ↔ 'Timur') için ilk 5 harf (kısa sözcükte tamamı)
const sozcuk = ad => norm(ad).split(/[^a-z0-9']+/).map(w => w.replace(/'.*/, '')).filter(w => w.length > 3 && !GENEL.has(w)).map(w => w.slice(0, 5));
const eksik = [], var_ = [];
for (const d of D) {
  if (!BOLGE.has(d.bolge) || DISARI.has(d.id)) continue;
  const sz = sozcuk(d.ad);
  for (const [tur, g] of [['kuruluş', d.f], ['yıkılış', d.t]]) {
    if (!g || pad(g) < BAS || pad(g) >= BIT || g === PENCERE) continue;
    const yil = +pad(g).slice(0, 4);
    const es = M.filter(m => Math.abs(+pad(m.t).slice(0, 4) - yil) <= 1 && (m.devlet === d.id ||
      [].concat(m.taraflar || [], m.devletler || []).includes(d.id) || sz.some(w => norm(m.b).includes(w))));
    const satir = { g, tur, id: d.id, ad: d.ad, bolge: d.bolge, esles: es.slice(0, 2).map(m => m.t + ' ' + m.b.slice(0, 60)) };
    (es.length ? var_ : eksik).push(satir);
  }
}
if (process.argv.includes('--json')) { console.log(JSON.stringify({ eksik, var: var_ }, null, 1)); process.exit(0); }
console.log(`dosya ${dosyalar.length} (okunamayan ${hata}) · madde ${M.length} · aralık ${BAS} → ${BIT}`);
console.log(`künye olayı: var ${var_.length} · EKSİK ${eksik.length}`);
for (const x of eksik.sort((a, b) => a.g < b.g ? -1 : 1)) console.log(`  EKSİK ${x.g}  ${x.tur.padEnd(8)} ${x.id.padEnd(28)} ${x.ad}`);
if (process.argv.includes('--hepsi')) for (const x of var_) console.log(`  var   ${x.g}  ${x.tur.padEnd(8)} ${x.id.padEnd(28)} ← ${x.esles[0]}`);
