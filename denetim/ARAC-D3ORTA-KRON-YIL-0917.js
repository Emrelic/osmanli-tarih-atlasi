// D3-AVRUPA-ORTA — yıl düzeyinde kronoloji taraması (yazım varyantları için desen)
// Kullanım: node denetim/ARAC-D3ORTA-KRON-YIL-0917.js "1686|ebed|grzym|kiev|kiyev" "1660|oliva|oliwa" ...
const fs = require('fs');
const dosyalar = fs.readdirSync('data').filter(f => /^(olaylar|kronoloji).*\.js$/.test(f) && f !== 'kronoloji_sinir_avrupa_orta.js');
const norm = s => s.toLocaleLowerCase('tr').normalize('NFKD').replace(/[̀-ͯ]/g, '');
const sat = [];
for (const f of dosyalar) for (const l of fs.readFileSync('data/' + f, 'utf8').split('\n')) {
  const m = l.match(/\bt\s*:\s*"(\d{3,4})-(\d{2})-(\d{2})"/);
  if (m) sat.push({ f, y: m[1].padStart(4, '0'), t: `${m[1]}-${m[2]}-${m[3]}`, n: norm(l), b: ((l.match(/\bb\s*:\s*"([^"]*)"/) || [])[1] || '') });
}
for (const q of process.argv.slice(2)) {
  const [y, ...k] = q.split('|');
  const ks = k.map(norm);
  const bul = sat.filter(s => s.y === y && ks.some(x => s.n.includes(x)));
  console.log(`${q} → ${bul.length}`);
  for (const s of bul.slice(0, 5)) console.log(`     ${s.t} ${s.f.padEnd(26)} ${s.b.slice(0, 75)}`);
}
