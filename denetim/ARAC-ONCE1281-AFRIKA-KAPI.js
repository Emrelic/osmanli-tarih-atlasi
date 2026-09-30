// ONCE1281-AFRIKA — teslim kapıları: taraf kimliği eşlemesi · künye penceresi · küresel ad · künye başına sayım
// Kullanım: node denetim/ARAC-ONCE1281-AFRIKA-KAPI.js
const fs = require('fs');
global.window = global;
const K = 'C:/atlas/';
eval(fs.readFileSync(K + 'data/devletler.js', 'utf8'));
const kunye = new Map(DEVLETLER.map(d => [d.id, { f: d.f, t: d.t, kaynak: 'devletler.js', iskelet: (d.kronoloji || []).length }]));
const oneri = JSON.parse(fs.readFileSync(K + 'denetim/ONCE1281-AFRIKA-KUNYE.json', 'utf8'));
for (const r of oneri.kayitlar) {
  const eski = kunye.get(r.id) || {};
  kunye.set(r.id, { f: r.f || eski.f, t: r.t || eski.t, kaynak: r.islem === 'yeni' ? 'öneri(yeni)' : 'öneri(' + r.islem + ')', iskelet: (r.kronoloji || eski.iskelet || []).length || eski.iskelet || 0 });
}
eval(fs.readFileSync(K + 'data/kronoloji_cok_once1281_afrika.js', 'utf8'));
const L = window.KRONOLOJI_COK_ONCE1281_AFRIKA;
const pad = s => s.replace(/^(\d{3})-/, '0$1-');
let eslenemeyen = 0, pencere = 0, ayYazimi = 0;
const sayac = {};
const ciftler = new Set();
for (const m of L) {
  if (!/^\d{3,4}-\d{2}-\d{2}$/.test(m.t)) { ayYazimi++; console.log('BİÇİM', m.t, m.b); }
  const anahtar = m.t + '|' + m.b;
  if (ciftler.has(anahtar)) console.log('ÇİFT', anahtar);
  ciftler.add(anahtar);
  for (const id of m.taraflar || []) {
    const k = kunye.get(id);
    if (!k) { eslenemeyen++; console.log('EŞLENEMEYEN', id, m.t, m.b); continue; }
    sayac[id] = (sayac[id] || 0) + 1;
    if (pad(m.t) < pad(k.f) || pad(m.t) > pad(k.t)) { pencere++; console.log('PENCERE DIŞI', id, k.f + '→' + k.t, m.t, m.b.slice(0, 60)); }
  }
}
console.log('madde:', L.length, '· eşlenemeyen taraf:', eslenemeyen, '· pencere dışı:', pencere, '· biçim kusuru:', ayYazimi);
console.log('künye başına (dosya + iskelet):');
for (const [id, n] of Object.entries(sayac).sort()) {
  const k = kunye.get(id);
  console.log('  ', id.padEnd(22), 'dosya', String(n).padStart(2), '· iskelet', String(k.iskelet).padStart(2), '·', k.kaynak);
}
// küresel ad
let adSay = 0;
for (const f of fs.readdirSync(K + 'data')) {
  if (f === 'kronoloji_cok_once1281_afrika.js') continue;
  if (fs.readFileSync(K + 'data/' + f, 'utf8').includes('KRONOLOJI_COK_ONCE1281_AFRIKA')) { adSay++; console.log('AD ÇAKIŞMASI', f); }
}
console.log('küresel ad başka data/ dosyasında:', adSay, '(evren', fs.readdirSync(K + 'data').length, 'dosya)');
