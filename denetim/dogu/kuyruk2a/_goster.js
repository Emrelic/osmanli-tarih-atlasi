const fs = require('fs');
const o = JSON.parse(fs.readFileSync('denetim/dogu/kuyruk2a/_parca.json', 'utf8'));
const n = +process.argv[3] || 220;
const ad = process.argv[2];
for (const a in o) {
  if (ad && !a.startsWith(ad)) continue;
  console.log('=====', a);
  for (const y of o[a].yama) { console.log(' --', y.dosya); for (const p of y.onek) console.log('  ', p.f, p.t, p.d, p.kesinlik, '|', (p.kaynak || '').slice(0, n).replace(/\n/g, ' ')); }
  for (const s of o[a].sinir) console.log('  SINIR', s.dosya, s.t, s.devlet, '|', s.b, '|', (s.kaynak || '').slice(0, 100));
}
