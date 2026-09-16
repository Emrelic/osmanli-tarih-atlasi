// D3-AVRUPA-ORTA — 1606-1878 arası bölge künyeleri (G4-G7 için taraf kimlikleri)
// Kullanım: node denetim/ARAC-D3ORTA-KUNYE-0917.js
const fs = require('fs');
global.window = {};
eval(fs.readFileSync('data/devletler.js', 'utf8'));
const P = s => (s || '9999').replace(/^(\d{1,3})-/, (m, y) => y.padStart(4, '0') + '-');
const bolgeler = new Set(['orta-avrupa', 'dogu-avrupa', 'balkanlar', 'kuzey-avrupa', 'bati-avrupa', 'italya']);
const rx = /alman|prusya|brandenburg|bavyera|saksonya|habsburg|avusturya|macar|erdel|transilv|lehistan|polon|litvan|varşova|varsova|krakov|kurland|livon|rusya|moskova|kazak|hetman|ukrayna|bogdan|boğdan|eflak|romanya|besarab|sırp|sirb|karada|arnavut|ragusa|dubrovnik|venedik|isvec|kırım|kirim|osmanli|slezya|silezya|bohemya|macaristan/i;
for (const d of window.DEVLETLER) {
  if (P(d.f) > '1878-07-13' || P(d.t) < '1606-11-11') continue;
  if (!bolgeler.has(d.bolge) && !rx.test(d.id + ' ' + d.ad)) continue;
  if (!rx.test(d.id + ' ' + d.ad)) continue;
  console.log(`${d.id.padEnd(28)} ${String(d.f).padEnd(11)} → ${String(d.t).padEnd(11)} ${d.bolge} | ${d.ad}`);
}
