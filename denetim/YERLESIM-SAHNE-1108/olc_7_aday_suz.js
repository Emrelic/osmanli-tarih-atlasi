// ÖLÇÜM 7 — aday yer adlarını atlasa karşı süz: ad (parantez içi + / , ; ayrık) eşleşmesi = zaten VAR.
// Kullanım: node olc_7_aday_suz.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const idx = new Map();               // norm ad -> [yerlesim]
function ekle(s, y) { const k = o.norm(s); if (k.length < 3) return; (idx.get(k) || idx.set(k, []).get(k)).push(y); }
for (const y of Y) {
  ekle(y.ad.split(' (')[0], y);
  const p = /\(([^)]+)\)/.exec(y.ad);
  if (p) for (const a of p[1].split(/[\/,;]/)) ekle(a, y);
  ekle(y.ad, y);
}
const rows = fs.readFileSync(path.join(CIK, 'm1_EKSIK_YERLESIM_ADAY.tsv'), 'utf8').split('\n').slice(1).filter(Boolean).map(l => l.split('\t'));
const var_ = [], yok = [];
for (const r of rows) {
  const h = idx.get(o.norm(r[0]));
  if (h) var_.push([...r.slice(0, 3), h[0].ad, h[0].lat.toFixed(2) + ',' + h[0].lon.toFixed(2)].join('\t'));
  else yok.push(r.slice(0, 4).join('\t'));
}
fs.writeFileSync(path.join(CIK, 'm7_aday_zaten_var.tsv'), 'aday\tmadde\tilk\tatlas_ad\tkonum\n' + var_.join('\n'));
fs.writeFileSync(path.join(CIK, 'm7_aday_gercekten_yok.tsv'), 'aday\tmadde\tilk\tdosyalar\n' + yok.join('\n'));
console.log(JSON.stringify({ aday: rows.length, zatenVar: var_.length, gercektenYok: yok.length }));
