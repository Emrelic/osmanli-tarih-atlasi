// Çapraz sorgu kampanyası: index.html'deki bütün data/kronoloji*.js + olaylar*.js + devletler.js
// dosyalarını yükler, maddeleri devlet kimliğine göre gruplar.
// Kullanım: node arac/capraz_cikar.js sayim            -> devlet başına madde sayısı
//           node arac/capraz_cikar.js dok <id> [<id>…]  -> JSON (tarih,b,kaynak,dosya) stdout
const fs = require('fs'), path = require('path'), vm = require('vm');
const kok = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(kok, 'index.html'), 'utf8');
const dosyalar = [...html.matchAll(/data\/((?:kronoloji|olaylar)[a-z_0-9]*\.js)/g)].map(m => m[1]);
const sandbox = { window: {}, console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
const sorunlu = [];
for (const d of ['devletler.js', ...new Set(dosyalar)]) {
  try { vm.runInContext(fs.readFileSync(path.join(kok, 'data', d), 'utf8'), sandbox, { filename: d }); }
  catch (e) { sorunlu.push(d + ': ' + e.message.split('\n')[0]); }
}
const W = sandbox.window;
const maddeler = [];
for (const [ad, v] of Object.entries(W)) {
  if (!/^(KRONOLOJI|OLAYLAR)/.test(ad) || !Array.isArray(v)) continue;
  for (const m of v) if (m && typeof m === 'object' && m.t) maddeler.push({ ...m, _kaynakDizi: ad });
}
const devletler = (W.DEVLETLER || []);
for (const dv of devletler) for (const m of (dv.kronoloji || [])) maddeler.push({ ...m, devlet: dv.id, _kaynakDizi: 'devletler.js' });
function kimlikler(m) {
  const s = new Set();
  for (const k of ['devlet', 'devletler', 'taraflar']) {
    const x = m[k]; if (!x) continue; (Array.isArray(x) ? x : [x]).forEach(i => typeof i === 'string' && s.add(i));
  }
  return [...s];
}
const cmd = process.argv[2];
if (cmd === 'sayim') {
  const say = {};
  for (const m of maddeler) for (const i of kimlikler(m)) say[i] = (say[i] || 0) + 1;
  const sirali = Object.entries(say).sort((a, b) => b[1] - a[1]);
  console.log('toplam madde:', maddeler.length, '| devlet kimliği:', sirali.length, '| yüklenemeyen dosya:', sorunlu.length);
  sorunlu.forEach(s => console.log('  !', s));
  sirali.forEach(([i, n]) => console.log(String(n).padStart(5), i));
} else if (cmd === 'dok') {
  const ist = new Set(process.argv.slice(3));
  const out = maddeler.filter(m => kimlikler(m).some(i => ist.has(i)))
    .map(m => ({ t: m.t, b: m.b, tur: m.tur, devletler: kimlikler(m), kaynak: m.kaynak || null, dizi: m._kaynakDizi }))
    .sort((a, b) => a.t.localeCompare(b.t));
  console.log(JSON.stringify(out, null, 1));
} else console.log('sayim | dok <id>…');
