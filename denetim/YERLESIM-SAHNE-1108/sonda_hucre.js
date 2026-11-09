// Hücre sondası: node sonda_hucre.js <veri.json> lat0,lon0;lat0,lon0 ... (2°x2°) — hücredeki ve çevresindeki yerleşimler
const fs = require('fs');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
for (const c of process.argv[3].split(';')) {
  const [la, lo] = c.split(',').map(Number);
  const ic = Y.filter(y => y.lat >= la && y.lat < la + 2 && y.lon >= lo && y.lon < lo + 2);
  const yak = Y.filter(y => y.lat >= la - 1 && y.lat < la + 3 && y.lon >= lo - 1 && y.lon < lo + 3 && !ic.includes(y));
  const f = y => `${y.ad}@${y.lat.toFixed(2)},${y.lon.toFixed(2)}[${(y.s || [])[0] ? y.s[0].f.slice(0, 4) + '..' + (y.s[y.s.length - 1].t || '').slice(0, 4) : '-'}]`;
  console.log(`## ${c} içi ${ic.length}: ${ic.slice(0, 12).map(f).join(' | ')}\n   çevre ${yak.length}: ${yak.slice(0, 8).map(f).join(' | ')}`);
}
