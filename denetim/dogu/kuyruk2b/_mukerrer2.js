// mukerrer_olc.js'in kuyruk2b'yi de içeren kopyası: yalnız kuyruk2b'nin YENİ maddeleri (etiket kuyruk2b, kopya değil) "dogu" sayılır.
const fs = require('fs'), path = require('path');
let t = fs.readFileSync(path.join(__dirname, '..', 'mukerrer_olc.js'), 'utf8');
t = t.replace("const KOK = path.resolve(__dirname, '..', '..');", "const KOK = path.resolve(__dirname, '..', '..', '..');");
t = t.replace("dogu: f === 'kronoloji_sinir_dogu_500_1281.js' }", "dogu: false }");
t = t.replace("O.sort((a, b) => a.g - b.g);", "{ const mine = yukle(path.join(__dirname, 'kronoloji_sinir_dogu_kuyruk2b.js')).KRONOLOJI_SINIR_DOGU_KUYRUK2B; for (const m of mine) { if ((m.etiket || []).includes('kuyruk2b-kopya')) continue; O.push({ t: m.t, b: m.b || '', kisiler: m.kisiler, kaynak: m.kaynak, g: gun(m.t), dogu: true }); } }\nO.sort((a, b) => a.g - b.g);");
const out = path.join(__dirname, '_mukerrer2_run.js');
fs.writeFileSync(out, t);
require(out);
