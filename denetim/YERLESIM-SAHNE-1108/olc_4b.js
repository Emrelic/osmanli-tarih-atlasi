// ÖLÇÜM 4b — yerleşimsiz künyelerin BAŞKENT adı atlasta (birebir normalleşmiş) var mı? Var ama künyeye bağlı değilse = bağlama işi.
// Kullanım: node olc_4b.js <veri.json> <cikti-dizini>   (önce olc_3_4.js koşmuş olmalı)
const o = require('./ortak.js'), fs = require('fs'), path = require('path');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const rows = fs.readFileSync(path.join(CIK, 'm4_kunye_yerlesimsiz.tsv'), 'utf8').split('\n').slice(1).map(l => l.split('\t')).filter(r => r[8] === 'false');
const set = new Map();
for (const y of Y) { const k = o.norm(y.ad.split(' (')[0]); (set.get(k) || set.set(k, []).get(k)).push(y); }
let yazili = 0, n = 0, donemsiz = 0, baska = 0;
const out = [];
for (const r of rows) {
  const b = r[7]; if (!b || /^yok|^—/.test(b)) continue; yazili++;
  const first = b.split(/[\/(→·,]/)[0].trim();
  const h = set.get(o.norm(first)); if (!h) continue;
  n++;
  const dm = h.every(y => !((y.s || []).length || (y.d || []).length || (y.v || []).length));
  if (dm) donemsiz++; else baska++;
  out.push(r[0] + '\t' + first + '\t' + h[0].ad + '\t' + (dm ? 'DONEMSIZ' : 'baska_devlete_bagli:' + (h[0].s || []).slice(0, 1).map(x => x.d).join('')));
}
fs.writeFileSync(path.join(CIK, 'm4b_baskenti_atlasta_var_kunye_bagsiz.tsv'), 'kunye\tbaskent\tatlas_yerlesim\tdurum\n' + out.join('\n'));
console.log(JSON.stringify({ yerlesimsizKunye_ufukIci: rows.length, baskentYazili: yazili, baskentAtlastaBirebirVar: n, donemsiz, baskaDevleteBagli: baska }));
