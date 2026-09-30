// ONCE1281-IRAN-TURKISTAN — teslim kapıları (şartname §6)
//   node denetim/ARAC-ONCE1281-IRAN-KAPI.js
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data/devletler.js'), 'utf8'));
const DEVID = new Set(window.DEVLETLER.map(d => d.id));
eval(fs.readFileSync(path.join(KOK, 'data/kronoloji_cok_once1281_iran.js'), 'utf8'));
const M = window.KRONOLOJI_COK_ONCE1281_IRAN;
const K = JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-KUNYE.json'), 'utf8')).kunyeler;
const ONERI = new Set(K.filter(k => k.islem === 'yeni').map(k => k.id));
let say = 0, varOlan = 0, oneride = 0; const esz = [];
for (const m of M) for (const x of m.taraflar || []) { say++; if (DEVID.has(x)) varOlan++; else if (ONERI.has(x)) oneride++; else esz.push(`${m.t} ${x}`); }
console.log(`madde ${M.length} · taraf kimliği ${say} · devletler.js'te ${varOlan} · yalnız önerimde ${oneride} · EŞLENEMEYEN ${esz.length}`);
esz.forEach(x => console.log('  ✗', x));
const bicim = M.filter(m => !/^\d{4}-\d{2}-\d{2}$/.test(m.t)).length;
console.log(`t biçimi YYYY-MM-DD dışı: ${bicim} / ${M.length}`);
const kus = M.filter(m => m.t < '1000-01-01' || m.t >= '1281-01-01').length;
console.log(`kuşak dışı: ${kus} / ${M.length}`);
// ad alanı: değişken adım başka data/ dosyasında geçiyor mu
let ad = 0, ev = 0;
for (const f of fs.readdirSync(path.join(KOK, 'data'))) {
  if (!f.endsWith('.js') || f === 'kronoloji_cok_once1281_iran.js') continue; ev++;
  if (fs.readFileSync(path.join(KOK, 'data', f), 'utf8').includes('KRONOLOJI_COK_ONCE1281_IRAN')) ad++;
}
console.log(`küresel ad başka dosyada: ${ad} (evren ${ev} data/*.js)`);
// künye başına toplam (künye-içi iskelet + dosya maddesi)
const dev = new Map(window.DEVLETLER.map(d => [d.id, d]));
console.log('künye başına: iç + dosya = toplam');
for (const k of K) {
  const ic = k.islem === 'yeni' ? (k.kronoloji || []).length : ((dev.get(k.id) || {}).kronoloji || []).length;
  const dz = M.filter(m => (m.taraflar || []).includes(k.id)).length;
  const u = ic + dz < 3 ? '  ⚠ <3' : ic + dz > 15 ? '  ⚠ >15' : '';
  console.log(`  ${k.id.padEnd(20)} ${String(ic).padStart(2)} + ${String(dz).padStart(2)} = ${String(ic + dz).padStart(2)}${u}`);
}
