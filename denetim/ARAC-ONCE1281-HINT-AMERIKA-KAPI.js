// ONCE1281-HINDISTAN-AMERIKA — teslim kapıları (ORTAK §6)
//   node denetim/ARAC-ONCE1281-HINT-AMERIKA-KAPI.js
// ② taraf kimliği: devletler.js ∪ öneri(yeni/genislet) · pencere: t ∈ [f, t] (öneri f'siyle)
// ③ küresel ad: data/ altında başka dosyada geçiyor mu
// evren: çalışma anında yüklenen dizi + dosyadaki üç yazım biçimi ayrı ayrı sayılır (D240)
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const DOSYA = 'data/kronoloji_cok_once1281_hint_amerika.js';
const AD = 'KRONOLOJI_COK_ONCE1281_HINT_AMERIKA';
global.window = {};
require(path.join(KOK, 'data/devletler.js'));
const D = {}; window.DEVLETLER.forEach(d => D[d.id] = { f: d.f, t: d.t, kaynak: 'devletler.js' });
const O = JSON.parse(fs.readFileSync(path.join(KOK, 'denetim/ONCE1281-HINT-AMERIKA-KUNYE.json'), 'utf8'));
for (const k of O.kunyeler) {
  if (k.islem === 'yeni') D[k.id] = { f: k.f, t: k.t, kaynak: 'öneri-yeni' };
  if (k.islem === 'genislet') D[k.id] = Object.assign({}, D[k.id], { f: k.f, kaynak: 'öneri-genislet' });
}
require(path.join(KOK, DOSYA));
const L = window[AD] || [];
const ham = fs.readFileSync(path.join(KOK, DOSYA), 'utf8');
console.log('EVREN — çalışma anı:', L.length, '· JSON "t": biçimi:', (ham.match(/\{"t":\s*"/g) || []).length,
            '· çıplak { t:" biçimi:', (ham.match(/\{\s*t\s*:\s*"/g) || []).length);
const pad = s => String(s).replace(/^(\d{3})-/, '0$1-');
let eslenmeyen = 0, pencere = 0, ay = 0, mukerrer = 0, taraf_say = 0; const gor = new Set();
for (const m of L) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.t)) { ay++; console.log('  TARİH BİÇİMİ', m.t, m.b); }
  const anahtar = m.t + '|' + m.b; if (gor.has(anahtar)) { mukerrer++; console.log('  MÜKERRER', anahtar); } gor.add(anahtar);
  for (const id of m.taraflar || []) {
    taraf_say++;
    const d = D[id];
    if (!d) { eslenmeyen++; console.log('  EŞLENEMEYEN', id, '·', m.t, m.b); continue; }
    if (pad(m.t) < pad(d.f) || pad(m.t) > pad(d.t)) { pencere++; console.log('  PENCERE DIŞI', id, d.f + '→' + d.t, '(' + d.kaynak + ')', '·', m.t, m.b.slice(0, 60)); }
  }
  // künye-içi iskeletle mükerrer mi (aynı t, aynı künye)
}
let isk = 0;
for (const m of L) for (const id of m.taraflar || []) {
  const k = O.kunyeler.find(x => x.id === id && x.kronoloji);
  const mevcut = (window.DEVLETLER.find(x => x.id === id) || {}).kronoloji || [];
  for (const s of (k ? k.kronoloji : []).concat(mevcut)) if (s.t === m.t && s.b === m.b) { isk++; console.log('  İSKELET TEKRARI', id, m.t); }
}
let kuresel = 0;
for (const f of fs.readdirSync(path.join(KOK, 'data'))) {
  if (f === path.basename(DOSYA)) continue;
  const p = path.join(KOK, 'data', f); if (!fs.statSync(p).isFile()) continue;
  if (fs.readFileSync(p, 'utf8').includes(AD)) { kuresel++; console.log('  KÜRESEL AD BAŞKA DOSYADA:', f); }
}
const kisi = {}; for (const m of L) for (const id of m.taraflar || []) kisi[id] = (kisi[id] || 0) + 1;
console.log('madde', L.length, '· taraf bağı', taraf_say, '· künye', Object.keys(kisi).length);
console.log('② eşlenemeyen taraf:', eslenmeyen, '· pencere dışı:', pencere, '· tarih biçimi kusuru:', ay, '· t+b mükerrer:', mukerrer, '· iskelet tekrarı:', isk);
console.log('③ küresel ad başka dosyada:', kuresel);
console.log('künye başına madde:', JSON.stringify(kisi));
