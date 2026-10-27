// once1281_yukle.js — data/ altındaki devlet + kronoloji kaynaklarını tek JSON'a döker (salt okunur).
// Kullanım: node arac/once1281_yukle.js <çıktı.json>
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');
const win = {};
const ctx = vm.createContext({ window: win, console, document: {}, localStorage: {} });
const hata = [];
for (const f of fs.readdirSync(DATA).sort()) {
  if (!/^(devletler|olaylar|kronoloji|kaynakli_halka|padisahlar)/.test(f) || !f.endsWith('.js')) continue;
  if (/yedek|_bk_/.test(f)) continue;
  try { vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { hata.push(f + ': ' + e.message.slice(0, 80)); }
}
const anahtarlar = {};
for (const [k, v] of Object.entries(win)) if (Array.isArray(v)) anahtarlar[k] = v.length;
fs.writeFileSync(process.argv[2], JSON.stringify({ win, hata, anahtarlar }));
console.log(JSON.stringify({ hata, n: Object.keys(anahtarlar).length }));
