// node denetim/ARAC-ONCE1281-IRAN-YIL.js <yıl-regex>  → parça dosyalarında o yıllara düşen madde + künye-içi iskelet
const fs = require('fs'), path = require('path');
const rx = new RegExp('^(' + process.argv[2] + ')');
for (const h of ['A', 'B', 'C', 'D']) {
  const p = path.join(__dirname, `ONCE1281-IRAN-PARCA-${h}.json`);
  if (!fs.existsSync(p)) continue;
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const m of j.maddeler || []) if (rx.test(m.t)) console.log(h, 'M', m.t, m.b, JSON.stringify(m.taraflar));
  for (const k of j.kunyeler || []) for (const x of k.kronoloji || []) if (rx.test(String(x.t))) console.log(h, 'İ', k.id, x.t, x.b);
}
