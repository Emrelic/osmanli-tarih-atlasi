// Sonda: verilen adların atlasta alt dizge olarak geçtiği kayıtlar. node sonda.js <veri.json> ad1,ad2,...
const fs = require('fs'); const o = require('./ortak.js');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
for (const a of process.argv[3].split(',')) {
  const k = o.norm(a); if (!k) continue;
  const h = Y.filter(y => o.norm(y.ad).includes(k)).slice(0, 3).map(y => `${y.ad}@${y.lat.toFixed(2)},${y.lon.toFixed(2)}`);
  console.log(a.padEnd(18), h.join(' | ') || '—');
}
